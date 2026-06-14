#!/usr/bin/env bash

set -Eeuo pipefail

# Default next-run launcher: split remaining translations across one Ollama
# endpoint per GPU. Gemma 4 12B QAT fits on each 10 GB P102 at 8k context when
# Ollama is CUDA-pinned, so the fastest measured topology is one model per GPU,
# not one model split across both GPUs.
#
# Start the endpoints on each two-GPU machine first:
#
#   OLLAMA_BIND_HOST=0.0.0.0 START_ONLY=1 scripts/translate-all-dual-ollama.sh
#
# Then run this controller. Override TRANSLATE_OLLAMA_HOSTS if the LAN machine
# has a different address or if Conductor exposes a pooled endpoint.
#
#   TRANSLATE_OLLAMA_HOSTS=http://127.0.0.1:11435,http://127.0.0.1:11436,http://192.168.0.191:11435,http://192.168.0.191:11436 ./translate.sh
#
# To route through Conductor instead, export CONDUCTOR_TENANT_TOKEN or
# TRANSLATE_OLLAMA_API_KEY and use:
#
#   TRANSLATE_OLLAMA_HOSTS=http://127.0.0.1:9000/v1.0/api/ollama-pool ./translate.sh
#
# Use TRANSLATE_PRIORITY=1 to finish the remaining user-guide translations
# first, or leave it at 0 to translate every missing docs file.
#
# The script writes logs to /tmp/ultimate-multisite-translate-cluster-*/.

TRANSLATE_OLLAMA_HOSTS="${TRANSLATE_OLLAMA_HOSTS:-http://127.0.0.1:11435,http://127.0.0.1:11436,http://192.168.0.191:11435,http://192.168.0.191:11436}" \
MODEL="${MODEL:-gemma4:12b-it-qat}" \
LOCALES="${LOCALES:-all}" \
TRANSLATE_PRIORITY="${TRANSLATE_PRIORITY:-0}" \
TRANSLATE_SHARDS_PER_HOST="${TRANSLATE_SHARDS_PER_HOST:-1}" \
TRANSLATE_CONCURRENCY_PER_SHARD="${TRANSLATE_CONCURRENCY_PER_SHARD:-2}" \
TRANSLATE_TIMEOUT_SECONDS="${TRANSLATE_TIMEOUT_SECONDS:-900}" \
OLLAMA_REQUEST_NUM_CTX="${OLLAMA_REQUEST_NUM_CTX:-8192}" \
OLLAMA_NUM_PREDICT="${OLLAMA_NUM_PREDICT:-4096}" \
TRANSLATE_CHUNK_MAX_CHARS="${TRANSLATE_CHUNK_MAX_CHARS:-1500}" \
scripts/translate-all-ollama-cluster.sh "$@"
