#!/usr/bin/env bash
set -euo pipefail

# Generate hooks documentation for the main plugin and all addons
# Requires: @10up/wp-hooks-documentor

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DOCS_DIR="$(dirname "$SCRIPT_DIR")"
MAIN_PLUGIN_DIR="$DOCS_DIR/ultimate-multisite"
ADDONS_DIR="$DOCS_DIR/addons"

echo "=== Generating hooks documentation ==="

# Main plugin hooks
echo "Generating main plugin hooks..."
if [[ -f "$DOCS_DIR/wp-hooks-doc.json" ]]; then
  cd "$DOCS_DIR"
  npx @10up/wp-hooks-documentor generate --config wp-hooks-doc.json 2>&1 | head -10
  # Copy generated hooks into docs structure
  if [[ -d "$DOCS_DIR/wp-hooks-docs/hooks/Actions" ]]; then
    rm -rf "$DOCS_DIR/docs/developer/hooks/Actions" "$DOCS_DIR/docs/developer/hooks/Filters"
    cp -r "$DOCS_DIR/wp-hooks-docs/hooks/Actions" "$DOCS_DIR/docs/developer/hooks/"
    cp -r "$DOCS_DIR/wp-hooks-docs/hooks/Filters" "$DOCS_DIR/docs/developer/hooks/"
    # Fix absolute paths and add GitHub source links
    find "$DOCS_DIR/docs/developer/hooks/" -name "*.md" -exec sed -i "s|$MAIN_PLUGIN_DIR/|ultimate-multisite/|g" {} +
    find "$DOCS_DIR/docs/developer/hooks/" -name "*.md" -exec sed -i -E 's|Defined in `ultimate-multisite/(.+)` at line ([0-9]+)|Defined in [`\1`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/\1#L\2) at line \2|g' {} +
    echo "Main plugin hooks copied to docs/developer/hooks/"
  fi
  echo "Main plugin hooks generated."
else
  echo "WARNING: wp-hooks-doc.json not found. Run 'npx @10up/wp-hooks-documentor init' first."
fi

# Addon hooks
declare -A ADDON_SLUGS=(
  ["ultimate-multisite-woocommerce"]="woocommerce"
  ["ultimate-multisite-site-exporter"]="site-exporter"
  ["ultimate-multisite-affiliatewp"]="affiliatewp"
  ["ultimate-multisite-ai-site-builder"]="ai-site-builder"
  ["ultimate-multisite-analytics"]="analytics"
  ["ultimate-multisite-captcha"]="captcha"
  ["ultimate-multisite-chuck-norris-facts"]="chuck-norris-facts"
  ["ultimate-multisite-content-sync"]="content-sync"
  ["ultimate-multisite-domain-seller"]="domain-seller"
  ["ultimate-multisite-fluent-forms"]="fluent-forms"
  ["ultimate-multisite-gocardless"]="gocardless"
  ["ultimate-multisite-gravity-forms"]="gravity-forms"
  ["ultimate-multisite-language-selector"]="language-selector"
  ["ultimate-multisite-loco-translate"]="loco-translate"
  ["ultimate-multisite-mailchimp"]="mailchimp"
  ["ultimate-multisite-mailster"]="mailster"
  ["ultimate-multisite-metered-plans"]="metered-plans"
  ["ultimate-multisite-multinetwork"]="multinetwork"
  ["ultimate-multisite-multi-tenancy"]="multi-tenancy"
  ["ultimate-multisite-payfast"]="payfast"
  ["ultimate-multisite-plugin-and-theme-manager"]="plugin-and-theme-manager"
  ["ultimate-multisite-support-agents"]="support-agents"
  ["ultimate-multisite-support-tickets"]="support-tickets"
  ["ultimate-multisite-vat"]="vat"
  ["ultimate-multisite-admin-page-creator"]="admin-page-creator"
  ["ultimate-multisite-addon-template"]="addon-template"
  ["tutor-multisite-compatibility"]="tutor-multisite-compatibility"
  ["material-wp"]="material-wp"
)

for addon_dir_name in "${!ADDON_SLUGS[@]}"; do
  addon_path="$ADDONS_DIR/$addon_dir_name"
  doc_slug="${ADDON_SLUGS[$addon_dir_name]}"
  output_dir="$DOCS_DIR/docs/addons/$doc_slug/hooks"

  if [[ ! -d "$addon_path" ]]; then
    echo "Skipping $addon_dir_name (directory not found)"
    continue
  fi

  # Find PHP source directory
  src_dir=""
  if [[ -d "$addon_path/inc" ]]; then
    src_dir="$addon_path/inc"
  elif [[ -d "$addon_path/includes" ]]; then
    src_dir="$addon_path/includes"
  elif [[ -d "$addon_path/src" ]]; then
    src_dir="$addon_path/src"
  else
    src_dir="$addon_path"
  fi

  echo "Generating hooks for $addon_dir_name -> addons/$doc_slug/hooks/"

  mkdir -p "$output_dir"

  # Create a temporary config for this addon
  tmp_config=$(mktemp /tmp/wp-hooks-doc-XXXXXX.json)
  cat > "$tmp_config" <<JSONEOF
{
  "input": "$src_dir",
  "outputDir": "$output_dir",
  "ignoreFiles": ["/vendor/", "/node_modules/", "/tests/"],
  "clean": true
}
JSONEOF

  cd "$DOCS_DIR"
  npx @10up/wp-hooks-documentor generate --config "$tmp_config" 2>/dev/null || echo "  (no hooks found or generator error for $addon_dir_name)"
  rm -f "$tmp_config"
done

echo ""
echo "=== Hooks generation complete ==="
