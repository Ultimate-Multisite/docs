#!/usr/bin/env bash

set -Eeuo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
RUN_ID="$(date +%Y%m%d-%H%M%S)"

MODEL="${MODEL:-translategemma:27b}"
MODEL_MAP="${TRANSLATE_MODEL_MAP:-single}"
HOSTS_CSV="${TRANSLATE_OLLAMA_HOSTS:-http://127.0.0.1:11435,http://127.0.0.1:11436,http://192.168.0.131:11435,http://192.168.0.131:11436}"
LOCALES_REQUESTED="${LOCALES:-all}"
RUN_DIR="${RUN_DIR:-/tmp/ultimate-multisite-translate-cluster-${RUN_ID}}"
REQUEST_NUM_CTX="${OLLAMA_REQUEST_NUM_CTX:-${OLLAMA_CONTEXT_LENGTH:-8192}}"
NUM_PREDICT="${OLLAMA_NUM_PREDICT:-4096}"
CHUNK_MAX_CHARS="${TRANSLATE_CHUNK_MAX_CHARS:-1500}"
SHARDS_PER_HOST="${TRANSLATE_SHARDS_PER_HOST:-1}"
CONCURRENCY_PER_SHARD="${TRANSLATE_CONCURRENCY_PER_SHARD:-2}"
REQUEST_TIMEOUT_SECONDS="${TRANSLATE_TIMEOUT_SECONDS:-900}"
MONITOR_INTERVAL="${MONITOR_INTERVAL:-30}"
PRIORITY="${TRANSLATE_PRIORITY:-0}"
PRELOAD_HOSTS="${TRANSLATE_PRELOAD_OLLAMA_HOSTS:-1}"
AUTH_TOKEN="${TRANSLATE_OLLAMA_API_KEY:-${OLLAMA_API_KEY:-${OLLAMA_BEARER_TOKEN:-${CONDUCTOR_TENANT_TOKEN:-}}}}"
REQUEST_API_KEY="${AUTH_TOKEN:-ollama}"

TRANSLATE_PIDS=()
TRANSLATE_LOGS=()
HOSTS=()

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

parse_hosts() {
	local hosts_csv="$1"
	local old_ifs="${IFS}"
	local host=""
	IFS=','
	for host in ${hosts_csv}; do
		host="${host## }"
		host="${host%% }"
		[[ -z "${host}" ]] && continue
		HOSTS+=("${host%/}")
	done
	IFS="${old_ifs}"
	if [[ "${#HOSTS[@]}" -eq 0 ]]; then
		die "TRANSLATE_OLLAMA_HOSTS produced no usable hosts"
	fi
	return 0
}

check_host() {
	local host="$1"
	local log_file="$2"
	local auth_args=()
	if [[ -n "${AUTH_TOKEN}" ]]; then
		auth_args=(-H "Authorization: Bearer ${AUTH_TOKEN}")
	fi
	if ! curl -fsS "${auth_args[@]}" "${host}/api/tags" >"${log_file}" 2>&1; then
		die "Ollama host is not reachable: ${host} (details: ${log_file})"
	fi
	return 0
}

check_hosts() {
	local index=0
	local host=""
	for host in "${HOSTS[@]}"; do
		check_host "${host}" "${RUN_DIR}/host-${index}.json"
		log "Ollama host ready: ${host}"
		index=$((index + 1))
	done
	return 0
}

preload_host() {
	local host="$1"
	local index="$2"
	local preload_file="${RUN_DIR}/preload-host-${index}.json"
	local auth_args=()
	if [[ -n "${AUTH_TOKEN}" ]]; then
		auth_args=(-H "Authorization: Bearer ${AUTH_TOKEN}")
	fi

	log "Preloading ${MODEL} on ${host}"
	curl -fsS "${host}/api/chat" \
		"${auth_args[@]}" \
		-H 'Content-Type: application/json' \
		-d "{\"model\":\"${MODEL}\",\"messages\":[{\"role\":\"user\",\"content\":\"Translate to French: ready\"}],\"stream\":false,\"think\":false,\"keep_alive\":-1,\"options\":{\"num_ctx\":${REQUEST_NUM_CTX},\"num_predict\":8}}" \
		>"${preload_file}"
	return 0
}

preload_hosts() {
	if [[ "${MODEL_MAP}" != "single" ]]; then
		log "Skipping single-model preload because TRANSLATE_MODEL_MAP=${MODEL_MAP}"
		return 0
	fi

	if [[ "${PRELOAD_HOSTS}" != "1" ]]; then
		log "Skipping Ollama host preload because TRANSLATE_PRELOAD_OLLAMA_HOSTS=${PRELOAD_HOSTS}"
		return 0
	fi

	local index=0
	local host=""
	for host in "${HOSTS[@]}"; do
		preload_host "${host}" "${index}"
		index=$((index + 1))
	done
	return 0
}

split_locale_shards() {
	local requested="$1"
	local total_shards="$2"
	node - "${requested}" "${total_shards}" <<'NODE'
const fs = require('fs');
const requested = process.argv[2];
const totalShards = Number(process.argv[3] || 1);
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
	local host="${HOSTS[0]}"
	local extra_priority_args=()
	if [[ "${PRIORITY}" -gt 0 ]]; then
		extra_priority_args=(--priority "${PRIORITY}")
	fi
	log "Calculating translation quantity with dry-run via ${host}" >&2
	if ! OPENAI_API_KEY="${REQUEST_API_KEY}" node scripts/translate.js \
		--provider ollama-native \
		--base-url "${host}" \
		--model "${MODEL}" \
		--model-map "${MODEL_MAP}" \
		--locales "${locales}" \
		--concurrency 1 \
		--dry-run \
		"${extra_priority_args[@]}" \
		"$@" >"${dry_log}" 2>&1; then
		die "Dry-run failed; see ${dry_log}"
	fi
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
	local extra_priority_args=()
	if [[ "${PRIORITY}" -gt 0 ]]; then
		extra_priority_args=(--priority "${PRIORITY}")
	fi

	if [[ -z "${locales}" ]]; then
		log "Skipping ${name}: no locales assigned"
		return 0
	fi

	log "Starting translation on ${name} (${host}): $(printf '%s' "${locales}" | tr ',' ' ')"
	OPENAI_API_KEY="${REQUEST_API_KEY}" node scripts/translate.js \
		--provider ollama-native \
		--base-url "${host}" \
		--model "${MODEL}" \
		--model-map "${MODEL_MAP}" \
		--locales "${locales}" \
		--concurrency "${CONCURRENCY_PER_SHARD}" \
		--timeout "${REQUEST_TIMEOUT_SECONDS}" \
		--num-ctx "${REQUEST_NUM_CTX}" \
		--num-predict "${NUM_PREDICT}" \
		--chunk-max-chars "${CHUNK_MAX_CHARS}" \
		"${extra_priority_args[@]}" \
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
			wait "${pid}" >/dev/null 2>&1 || true
		fi
	done
	return 0
}

main() {
	require_command node
	require_command curl
	require_command grep
	require_command tr

	mkdir -p "${RUN_DIR}"
	cd "${ROOT_DIR}"
	parse_hosts "${HOSTS_CSV}"
	check_hosts

	log "Run directory: ${RUN_DIR}"
	log "Model: ${MODEL}"
	log "Hosts: ${HOSTS[*]}"
	log "Locales: ${LOCALES_REQUESTED}; priority: ${PRIORITY:-0}"
	log "Request ctx: ${REQUEST_NUM_CTX}; num_predict: ${NUM_PREDICT}; chunk chars: ${CHUNK_MAX_CHARS}"
	log "Shards/host: ${SHARDS_PER_HOST}; translation concurrency/shard: ${CONCURRENCY_PER_SHARD}"
	preload_hosts

	local total_shards=$((SHARDS_PER_HOST * ${#HOSTS[@]}))
	local locale_shards=()
	local shard=""
	while IFS= read -r shard; do
		locale_shards+=("${shard}")
	done < <(split_locale_shards "${LOCALES_REQUESTED}" "${total_shards}")

	trap cleanup EXIT INT TERM

	local dry_log=""
	dry_log="$(run_dry_run "${LOCALES_REQUESTED}" "$@")"
	local total_needed=""
	total_needed="$(sum_needed_from_dry_run "${dry_log}")"
	log "Dry-run quantity: ${total_needed} doc files need translation (details: ${dry_log})"

	local start_epoch=""
	start_epoch="$(date +%s)"
	local host_index=0
	local shard_index=0
	local host=""
	for host in "${HOSTS[@]}"; do
		local local_shard=0
		while [[ "${local_shard}" -lt "${SHARDS_PER_HOST}" ]]; do
			start_translation "${host}" "host${host_index}-shard${local_shard}" "${locale_shards[${shard_index}]:-}" "$@"
			local_shard=$((local_shard + 1))
			shard_index=$((shard_index + 1))
		done
		host_index=$((host_index + 1))
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
