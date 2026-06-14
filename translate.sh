#!/usr/bin/env bash

set -Eeuo pipefail

# Default next-run launcher: split remaining translations across the local
# Ollama server and the LAN Ollama server. To use one endpoint per GPU, pass a
# comma-separated list, for example:
#
#   TRANSLATE_OLLAMA_HOSTS=http://127.0.0.1:11435,http://127.0.0.1:11436,http://192.168.0.191:11435,http://192.168.0.191:11436 ./translate.sh
#
# Use TRANSLATE_PRIORITY=1 to finish the remaining user-guide translations
# first, or leave it at 0 to translate every missing docs file.
#
# The script writes logs to /tmp/ultimate-multisite-translate-cluster-*/.

TRANSLATE_OLLAMA_HOSTS="${TRANSLATE_OLLAMA_HOSTS:-http://127.0.0.1:11434,http://192.168.0.191:11434}" \
MODEL="${MODEL:-gemma4:e2b-it-qat}" \
LOCALES="${LOCALES:-all}" \
TRANSLATE_PRIORITY="${TRANSLATE_PRIORITY:-0}" \
TRANSLATE_SHARDS_PER_HOST="${TRANSLATE_SHARDS_PER_HOST:-4}" \
TRANSLATE_CONCURRENCY_PER_SHARD="${TRANSLATE_CONCURRENCY_PER_SHARD:-1}" \
TRANSLATE_TIMEOUT_SECONDS="${TRANSLATE_TIMEOUT_SECONDS:-900}" \
OLLAMA_REQUEST_NUM_CTX="${OLLAMA_REQUEST_NUM_CTX:-8192}" \
OLLAMA_NUM_PREDICT="${OLLAMA_NUM_PREDICT:-4096}" \
TRANSLATE_CHUNK_MAX_CHARS="${TRANSLATE_CHUNK_MAX_CHARS:-1500}" \
scripts/translate-all-ollama-cluster.sh "$@"
