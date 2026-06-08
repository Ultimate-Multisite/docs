#!/usr/bin/env bash

set -Eeuo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
RUN_ID="$(date +%Y%m%d-%H%M%S)"

MODEL="${MODEL:-gemma4:e2b-it-qat}"
NUM_PARALLEL="${OLLAMA_NUM_PARALLEL:-4}"
CONTEXT_LENGTH="${OLLAMA_CONTEXT_LENGTH:-8192}"
REQUEST_NUM_CTX="${OLLAMA_REQUEST_NUM_CTX:-${CONTEXT_LENGTH}}"
NUM_PREDICT="${OLLAMA_NUM_PREDICT:-4096}"
CHUNK_MAX_CHARS="${TRANSLATE_CHUNK_MAX_CHARS:-1500}"
SHARDS_PER_SERVER="${TRANSLATE_SHARDS_PER_SERVER:-4}"
CONCURRENCY_PER_SHARD="${TRANSLATE_CONCURRENCY_PER_SHARD:-1}"
REQUEST_TIMEOUT_SECONDS="${TRANSLATE_TIMEOUT_SECONDS:-900}"
MONITOR_INTERVAL="${MONITOR_INTERVAL:-30}"
PORT_A="${OLLAMA_PORT_A:-11435}"
PORT_B="${OLLAMA_PORT_B:-11436}"
HOST_A="http://127.0.0.1:${PORT_A}"
HOST_B="http://127.0.0.1:${PORT_B}"
LOCALES_REQUESTED="${LOCALES:-all}"
RUN_DIR="${RUN_DIR:-/tmp/ultimate-multisite-translate-${RUN_ID}}"
MODELS_DIR="${OLLAMA_MODELS:-/mnt/data/models/}"

SERVER_PIDS=()
TRANSLATE_PIDS=()
TRANSLATE_LOGS=()

log() {
	local message="$1"
	printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "${message}"
	return 0
}

die() {
	local message="$1"
	printf 'ERROR: %s\n' "${message}" >&2
	exit 1
	# shellcheck disable=SC2317
	return 1
}

format_seconds() {
	local seconds="$1"
	local hours=$((seconds / 3600))
	local minutes=$(((seconds % 3600) / 60))
	local secs=$((seconds % 60))
	if [[ "${hours}" -gt 0 ]]; then
		printf '%dh %dm %ds' "${hours}" "${minutes}" "${secs}"
	else
		printf '%dm %ds' "${minutes}" "${secs}"
	fi
	return 0
}

require_command() {
	local command_name="$1"
	if ! command -v "${command_name}" >/dev/null 2>&1; then
		die "Required command not found: ${command_name}"
	fi
	return 0
}

collect_gpu_uuids() {
	GPU_A="${GPU_A:-}"
	GPU_B="${GPU_B:-}"

	if [[ -n "${GPU_A}" && -n "${GPU_B}" ]]; then
		return 0
	fi

	local uuids=()
	local uuid=""
	while IFS= read -r uuid; do
		[[ -z "${uuid}" ]] && continue
		uuids+=("${uuid}")
	done < <(nvidia-smi --query-gpu=uuid --format=csv,noheader,nounits)

	if [[ "${#uuids[@]}" -lt 2 ]]; then
		die "Need two NVIDIA GPUs, found ${#uuids[@]}"
	fi

	GPU_A="${GPU_A:-${uuids[0]}}"
	GPU_B="${GPU_B:-${uuids[1]}}"
	return 0
}

port_is_free() {
	local port="$1"
	if ss -ltn | grep -q ":${port} "; then
		return 1
	fi
	return 0
}

wait_for_server() {
	local host="$1"
	local name="$2"
	local attempts=0
	while [[ "${attempts}" -lt 120 ]]; do
		if curl -fsS "${host}/api/tags" >/dev/null 2>&1; then
			return 0
		fi
		attempts=$((attempts + 1))
		sleep 1
	done
	die "Timed out waiting for ${name} at ${host}"
	# shellcheck disable=SC2317
	return 1
}

start_ollama_server() {
	local gpu_uuid="$1"
	local port="$2"
	local name="$3"
	local log_file="${RUN_DIR}/ollama-${name}.log"

	port_is_free "${port}" || die "Port ${port} is already in use"

	log "Starting Ollama ${name} on ${gpu_uuid}, port ${port}, OLLAMA_NUM_PARALLEL=${NUM_PARALLEL}"
	CUDA_VISIBLE_DEVICES="${gpu_uuid}" \
	OLLAMA_HOST="127.0.0.1:${port}" \
	OLLAMA_MODELS="${MODELS_DIR}" \
	OLLAMA_NUM_PARALLEL="${NUM_PARALLEL}" \
	OLLAMA_MAX_LOADED_MODELS="1" \
	OLLAMA_CONTEXT_LENGTH="${CONTEXT_LENGTH}" \
	OLLAMA_FLASH_ATTENTION="1" \
	OLLAMA_KV_CACHE_TYPE="q8_0" \
	OLLAMA_KEEP_ALIVE="-1" \
	OLLAMA_NO_CLOUD="1" \
	ollama serve >"${log_file}" 2>&1 &

	local pid="$!"
	SERVER_PIDS+=("${pid}")
	wait_for_server "http://127.0.0.1:${port}" "${name}"
	log "Ollama ${name} ready (pid ${pid}, log ${log_file})"
	return 0
}

preload_model() {
	local host="$1"
	local name="$2"
	local preload_file="${RUN_DIR}/preload-${name}.json"

	log "Preloading ${MODEL} on ${name}"
	curl -fsS "${host}/api/chat" \
		-H 'Content-Type: application/json' \
		-d "{\"model\":\"${MODEL}\",\"messages\":[{\"role\":\"user\",\"content\":\"Translate to French: ready\"}],\"stream\":false,\"think\":false,\"keep_alive\":-1,\"options\":{\"num_predict\":8}}" \
		>"${preload_file}"
	return 0
}

split_locale_shards() {
	local requested="$1"
	local total_shards="$2"
	node - "${requested}" "${total_shards}" <<'NODE'
const fs = require('fs');
const requested = process.argv[2];
const totalShards = Number(process.argv[3] || 2);
let locales;
if (!requested || requested === 'all') {
  const source = fs.readFileSync('scripts/translate.js', 'utf8');
  const match = source.match(/const ALL_LOCALES = \[([\s\S]*?)\];/);
  if (!match) throw new Error('Could not find ALL_LOCALES in scripts/translate.js');
  locales = [...match[1].matchAll(/'([^']+)'/g)].map(match => match[1]);
} else {
  locales = requested.split(',').map(locale => locale.trim()).filter(Boolean);
}
const shards = Array.from({length: totalShards}, () => []);
locales.forEach((locale, index) => shards[index % totalShards].push(locale));
for (const shard of shards) {
  console.log(shard.join(','));
}
const counts = shards.map((shard, index) => `shard${index}=${shard.length}`).join(', ');
console.error(`Locale split: ${counts}, ${locales.length} total`);
NODE
	return 0
}

run_dry_run() {
	local locales="$1"
	shift 1
	local dry_log="${RUN_DIR}/dry-run.log"
	log "Calculating translation quantity with dry-run" >&2
	OPENAI_API_KEY="ollama" node scripts/translate.js \
		--provider ollama-native \
		--base-url "${HOST_A}" \
		--model "${MODEL}" \
		--locales "${locales}" \
		--concurrency 1 \
		--dry-run \
		"$@" >"${dry_log}" 2>&1
	printf '%s\n' "${dry_log}"
	return 0
}

sum_needed_from_dry_run() {
	local dry_log="$1"
	node - "${dry_log}" <<'NODE'
const fs = require('fs');
const file = process.argv[2];
const text = fs.readFileSync(file, 'utf8');
const total = [...text.matchAll(/Files needing translation: (\d+)/g)]
  .map(match => Number(match[1]))
  .reduce((sum, value) => sum + value, 0);
console.log(total);
NODE
	return 0
}

start_translation() {
	local host="$1"
	local name="$2"
	local locales="$3"
	shift 3
	local log_file="${RUN_DIR}/translate-${name}.log"

	if [[ -z "${locales}" ]]; then
		log "Skipping ${name}: no locales assigned"
		return 0
	fi

	log "Starting translation on ${name}: $(printf '%s' "${locales}" | tr ',' ' ')"
	OPENAI_API_KEY="ollama" node scripts/translate.js \
		--provider ollama-native \
		--base-url "${host}" \
		--model "${MODEL}" \
		--locales "${locales}" \
		--concurrency "${CONCURRENCY_PER_SHARD}" \
		--timeout "${REQUEST_TIMEOUT_SECONDS}" \
		--num-ctx "${REQUEST_NUM_CTX}" \
		--num-predict "${NUM_PREDICT}" \
		--chunk-max-chars "${CHUNK_MAX_CHARS}" \
		"$@" >"${log_file}" 2>&1 &

	local pid="$!"
	TRANSLATE_PIDS+=("${pid}")
	TRANSLATE_LOGS+=("${log_file}")
	log "Translation ${name} started (pid ${pid}, log ${log_file})"
	return 0
}

count_matches() {
	local pattern="$1"
	local count=0
	local log_file=""
	for log_file in "${TRANSLATE_LOGS[@]}"; do
		[[ -f "${log_file}" ]] || continue
		local file_count=0
		file_count="$(grep -cE "${pattern}" "${log_file}" 2>/dev/null || true)"
		count=$((count + file_count))
	done
	printf '%s\n' "${count}"
	return 0
}

process_running() {
	local pid=""
	for pid in "${TRANSLATE_PIDS[@]}"; do
		if kill -0 "${pid}" >/dev/null 2>&1; then
			return 0
		fi
	done
	return 1
}

print_progress() {
	local start_epoch="$1"
	local total="$2"
	local final_label="$3"
	local now_epoch=""
	now_epoch="$(date +%s)"
	local elapsed=$((now_epoch - start_epoch))
	local translated=""
	local failed=""
	local retries=""
	translated="$(count_matches '^  ✓ ')"
	failed="$(count_matches '^  ✖ ')"
	retries="$(count_matches '^  ⚠ Retry ')"
	local done_count=$((translated + failed))
	local eta="unknown"
	local rate="0.00"

	if [[ "${done_count}" -gt 0 && "${elapsed}" -gt 0 ]]; then
		rate="$(node -e "console.log((${done_count}/${elapsed}).toFixed(2))")"
	fi
	if [[ "${done_count}" -gt 0 && "${total}" -gt "${done_count}" ]]; then
		local remaining=$(((elapsed * (total - done_count)) / done_count))
		eta="$(format_seconds "${remaining}")"
	elif [[ "${total}" -le "${done_count}" && "${total}" -gt 0 ]]; then
		eta="0m 0s"
	fi

	log "${final_label}progress: ${done_count}/${total} files complete (${translated} translated, ${failed} failed, ${retries} retries), elapsed $(format_seconds "${elapsed}"), rate ${rate} files/s, ETA ${eta}"
	return 0
}

monitor_progress() {
	local start_epoch="$1"
	local total="$2"
	while process_running; do
		print_progress "${start_epoch}" "${total}" ""
		sleep "${MONITOR_INTERVAL}"
	done
	print_progress "${start_epoch}" "${total}" "final "
	return 0
}

cleanup() {
	local pid=""
	for pid in "${TRANSLATE_PIDS[@]}"; do
		if kill -0 "${pid}" >/dev/null 2>&1; then
			kill "${pid}" >/dev/null 2>&1 || true
		fi
	done
	for pid in "${SERVER_PIDS[@]}"; do
		if kill -0 "${pid}" >/dev/null 2>&1; then
			kill "${pid}" >/dev/null 2>&1 || true
		fi
	done
	return 0
}

main() {
	require_command node
	require_command curl
	require_command nvidia-smi
	require_command ollama
	require_command ss

	mkdir -p "${RUN_DIR}"
	cd "${ROOT_DIR}"

	collect_gpu_uuids
	log "Run directory: ${RUN_DIR}"
	log "Model: ${MODEL}"
	log "GPUs: ${GPU_A}, ${GPU_B}"
	log "Context length: ${CONTEXT_LENGTH}; request ctx: ${REQUEST_NUM_CTX}; num_predict: ${NUM_PREDICT}; chunk chars: ${CHUNK_MAX_CHARS}"
	log "Ollama parallel/server: ${NUM_PARALLEL}; shards/server: ${SHARDS_PER_SERVER}; translation concurrency/shard: ${CONCURRENCY_PER_SHARD}"

	local total_shards=$((SHARDS_PER_SERVER * 2))
	local locale_shards=()
	local shard=""
	while IFS= read -r shard; do
		locale_shards+=("${shard}")
	done < <(split_locale_shards "${LOCALES_REQUESTED}" "${total_shards}")
	local locales_all="${LOCALES_REQUESTED}"

	trap cleanup EXIT INT TERM

	start_ollama_server "${GPU_A}" "${PORT_A}" "gpu0"
	start_ollama_server "${GPU_B}" "${PORT_B}" "gpu1"
	preload_model "${HOST_A}" "gpu0"
	preload_model "${HOST_B}" "gpu1"

	local dry_log=""
	dry_log="$(run_dry_run "${locales_all}" "$@")"
	local total_needed=""
	total_needed="$(sum_needed_from_dry_run "${dry_log}")"
	log "Dry-run quantity: ${total_needed} doc files need translation (details: ${dry_log})"

	local start_epoch=""
	start_epoch="$(date +%s)"
	local index=0
	while [[ "${index}" -lt "${SHARDS_PER_SERVER}" ]]; do
		start_translation "${HOST_A}" "gpu0-shard${index}" "${locale_shards[${index}]:-}" "$@"
		index=$((index + 1))
	done
	index=0
	while [[ "${index}" -lt "${SHARDS_PER_SERVER}" ]]; do
		local shard_index=$((SHARDS_PER_SERVER + index))
		start_translation "${HOST_B}" "gpu1-shard${index}" "${locale_shards[${shard_index}]:-}" "$@"
		index=$((index + 1))
	done

	monitor_progress "${start_epoch}" "${total_needed}"

	local status=0
	local pid=""
	for pid in "${TRANSLATE_PIDS[@]}"; do
		if ! wait "${pid}"; then
			status=1
		fi
	done

	local elapsed=$(( $(date +%s) - start_epoch ))
	log "Translation run finished in $(format_seconds "${elapsed}") with status ${status}"
	log "Logs: ${RUN_DIR}"
	return "${status}"
}

main "$@"
