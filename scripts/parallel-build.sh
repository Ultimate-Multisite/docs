#!/usr/bin/env bash
set -euo pipefail

# Parallel Docusaurus build script
# Builds multiple locales in parallel to speed up the build process

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DOCS_DIR="$(dirname "$SCRIPT_DIR")"
BUILD_DIR="$DOCS_DIR/build"
PARALLEL_JOBS="${PARALLEL_JOBS:-4}"  # Number of parallel builds

cd "$DOCS_DIR"

# Get all configured locales from docusaurus.config.js
LOCALES=$(node -e "
  const config = require('./docusaurus.config.js');
  console.log(config.i18n.locales.join(' '));
")

DEFAULT_LOCALE=$(node -e "
  const config = require('./docusaurus.config.js');
  console.log(config.i18n.defaultLocale);
")

echo "=== Parallel Docusaurus Build ==="
echo "Locales: $LOCALES"
echo "Default: $DEFAULT_LOCALE"
echo "Parallel jobs: $PARALLEL_JOBS"
echo ""

# Create temp directory for parallel builds
TEMP_BUILD_DIR=$(mktemp -d)
trap "rm -rf $TEMP_BUILD_DIR" EXIT

# Build function for a single locale
build_locale() {
  local locale=$1
  local out_dir="$TEMP_BUILD_DIR/$locale"

  echo "[START] Building locale: $locale"

  if npx docusaurus build --locale "$locale" --out-dir "$out_dir" 2>&1 | grep -E "^\[(SUCCESS|ERROR)\]|error|Error" || true; then
    echo "[DONE] $locale"
  else
    echo "[DONE] $locale"
  fi
}

export -f build_locale
export TEMP_BUILD_DIR
export DOCS_DIR

# Run builds in parallel
START_TIME=$(date +%s)

echo "$LOCALES" | tr ' ' '\n' | xargs -P "$PARALLEL_JOBS" -I {} bash -c 'build_locale "$@"' _ {}

END_TIME=$(date +%s)
ELAPSED=$((END_TIME - START_TIME))

echo ""
echo "=== Merging builds ==="

# Merge all builds into final build directory
rm -rf "$BUILD_DIR"
mkdir -p "$BUILD_DIR"

for locale_dir in "$TEMP_BUILD_DIR"/*/; do
  locale=$(basename "$locale_dir")
  echo "Merging $locale..."

  if [[ "$locale" == "$DEFAULT_LOCALE" ]]; then
    # Default locale goes to root
    cp -r "$locale_dir"/* "$BUILD_DIR/" 2>/dev/null || true
  else
    # Other locales go to their subdirectory
    if [[ -d "$locale_dir/$locale" ]]; then
      cp -r "$locale_dir/$locale" "$BUILD_DIR/" 2>/dev/null || true
    fi
  fi
done

# Copy shared assets (from default locale build)
if [[ -d "$TEMP_BUILD_DIR/$DEFAULT_LOCALE/assets" ]]; then
  cp -r "$TEMP_BUILD_DIR/$DEFAULT_LOCALE/assets" "$BUILD_DIR/" 2>/dev/null || true
fi
if [[ -d "$TEMP_BUILD_DIR/$DEFAULT_LOCALE/img" ]]; then
  cp -r "$TEMP_BUILD_DIR/$DEFAULT_LOCALE/img" "$BUILD_DIR/" 2>/dev/null || true
fi

echo ""
echo "=== Build complete ==="
echo "Total time: ${ELAPSED}s"
echo "Output: $BUILD_DIR"
