#!/usr/bin/env bash

set -Eeuo pipefail

# Default next-run launcher: split remaining translations across Ollama
# endpoints and let scripts/translate.js choose the recommended local model and
# locale-specific prompt profile for each locale.
#
# Start the endpoints on each two-GPU machine first:
#
#   OLLAMA_BIND_HOST=0.0.0.0 START_ONLY=1 scripts/translate-all-dual-ollama.sh
#
# Then run this controller. Override TRANSLATE_OLLAMA_HOSTS if the LAN machine
# has a different address or if Conductor exposes a pooled endpoint.
#
#   TRANSLATE_OLLAMA_HOSTS=http://127.0.0.1:11435,http://127.0.0.1:11436,http://192.168.0.131:11435,http://192.168.0.131:11436 ./translate.sh
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

TRANSLATE_OLLAMA_HOSTS="${TRANSLATE_OLLAMA_HOSTS:-http://127.0.0.1:11435,http://127.0.0.1:11436,http://192.168.0.131:11435,http://192.168.0.131:11436}" \
TRANSLATE_MODEL_MAP="${TRANSLATE_MODEL_MAP:-recommended}" \
MODEL="${MODEL:-translategemma:27b}" \
LOCALES="${LOCALES:-all}" \
TRANSLATE_PRIORITY="${TRANSLATE_PRIORITY:-0}" \
TRANSLATE_SHARDS_PER_HOST="${TRANSLATE_SHARDS_PER_HOST:-1}" \
TRANSLATE_CONCURRENCY_PER_SHARD="${TRANSLATE_CONCURRENCY_PER_SHARD:-2}" \
TRANSLATE_TIMEOUT_SECONDS="${TRANSLATE_TIMEOUT_SECONDS:-900}" \
OLLAMA_REQUEST_NUM_CTX="${OLLAMA_REQUEST_NUM_CTX:-8192}" \
OLLAMA_NUM_PREDICT="${OLLAMA_NUM_PREDICT:-4096}" \
TRANSLATE_CHUNK_MAX_CHARS="${TRANSLATE_CHUNK_MAX_CHARS:-1500}" \
scripts/translate-all-ollama-cluster.sh "$@"
