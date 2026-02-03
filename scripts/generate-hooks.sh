#!/usr/bin/env bash
set -euo pipefail

# Generate hooks documentation for the main plugin and all addons
# Requires: @10up/wp-hooks-documentor, PHP 8.3+
# Works both locally and in CI (all paths relative to repo root)

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DOCS_DIR="$(dirname "$SCRIPT_DIR")"
MAIN_PLUGIN_DIR="$DOCS_DIR/ultimate-multisite"
ADDONS_DIR="$DOCS_DIR/addons"
TMP_OUTPUT="$DOCS_DIR/.hooks-tmp"

echo "=== Generating hooks documentation ==="
echo "Docs dir: $DOCS_DIR"
echo "Plugin dir: $MAIN_PLUGIN_DIR"
echo "Addons dir: $ADDONS_DIR"

cd "$DOCS_DIR"

# ── Main plugin hooks ──────────────────────────────────────────────────
if [[ -d "$MAIN_PLUGIN_DIR/inc" ]]; then
  echo ""
  echo "--- Generating main plugin hooks ---"
  rm -rf "$TMP_OUTPUT"

  tmp_config=$(mktemp /tmp/wp-hooks-doc-XXXXXX.json)
  cat > "$tmp_config" <<JSONEOF
{
  "input": "$MAIN_PLUGIN_DIR/inc/",
  "outputDir": "$TMP_OUTPUT",
  "ignoreFiles": ["/vendor/", "/node_modules/", "/tests/"],
  "clean": true
}
JSONEOF

  npx @10up/wp-hooks-documentor generate --config "$tmp_config" 2>&1 | grep -E "^(✅|❌|⚡|📦)" || true
  rm -f "$tmp_config"

  if [[ -d "$TMP_OUTPUT/hooks/Actions" ]] || [[ -d "$TMP_OUTPUT/hooks/Filters" ]]; then
    rm -rf "$DOCS_DIR/docs/developer/hooks/Actions" "$DOCS_DIR/docs/developer/hooks/Filters"
    [[ -d "$TMP_OUTPUT/hooks/Actions" ]] && cp -r "$TMP_OUTPUT/hooks/Actions" "$DOCS_DIR/docs/developer/hooks/"
    [[ -d "$TMP_OUTPUT/hooks/Filters" ]] && cp -r "$TMP_OUTPUT/hooks/Filters" "$DOCS_DIR/docs/developer/hooks/"
    # Fix paths and add GitHub source links
    find "$DOCS_DIR/docs/developer/hooks/" -name "*.md" -exec sed -i "s|$MAIN_PLUGIN_DIR/||g" {} +
    find "$DOCS_DIR/docs/developer/hooks/" -name "*.md" -exec sed -i -E \
      's|Defined in `(.+)` at line ([0-9]+)|Defined in [`\1`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/\1#L\2) at line \2|g' {} +
    # Add unique sidebar keys to prevent translation conflicts
    echo '{"label":"hooks","key":"developer-hooks"}' > "$DOCS_DIR/docs/developer/hooks/_category_.json"
    [[ -d "$DOCS_DIR/docs/developer/hooks/Actions" ]] && echo '{"label":"Actions","key":"developer-actions"}' > "$DOCS_DIR/docs/developer/hooks/Actions/_category_.json"
    [[ -d "$DOCS_DIR/docs/developer/hooks/Filters" ]] && echo '{"label":"Filters","key":"developer-filters"}' > "$DOCS_DIR/docs/developer/hooks/Filters/_category_.json"
    echo "Main plugin hooks copied to docs/developer/hooks/"
  else
    echo "WARNING: No hooks generated for main plugin"
  fi
  rm -rf "$TMP_OUTPUT"
else
  echo "WARNING: Main plugin not found at $MAIN_PLUGIN_DIR (checkout it first)"
fi

# ── Addon hooks ────────────────────────────────────────────────────────
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

# GitHub repo name mapping (most follow the directory name)
declare -A ADDON_REPOS=(
  ["ultimate-multisite-woocommerce"]="ultimate-multisite-woocommerce"
)
# Default: repo name = addon directory name

addon_count=0
for addon_dir_name in "${!ADDON_SLUGS[@]}"; do
  addon_path="$ADDONS_DIR/$addon_dir_name"
  doc_slug="${ADDON_SLUGS[$addon_dir_name]}"

  if [[ ! -d "$addon_path" ]]; then
    continue
  fi

  # Find PHP source: scan entire addon directory
  echo ""
  echo "--- Generating hooks for $addon_dir_name ---"
  rm -rf "$TMP_OUTPUT"

  tmp_config=$(mktemp /tmp/wp-hooks-doc-XXXXXX.json)
  cat > "$tmp_config" <<JSONEOF
{
  "input": "$addon_path/",
  "outputDir": "$TMP_OUTPUT",
  "ignoreFiles": ["/vendor/", "/node_modules/", "/tests/", "/compat/"],
  "clean": true
}
JSONEOF

  npx @10up/wp-hooks-documentor generate --config "$tmp_config" 2>&1 | grep -E "^(✅|❌|⚡|📦)" || true
  rm -f "$tmp_config"

  hooks_dir="$DOCS_DIR/docs/addons/$doc_slug/hooks"
  if [[ -d "$TMP_OUTPUT/hooks/Actions" ]] || [[ -d "$TMP_OUTPUT/hooks/Filters" ]]; then
    mkdir -p "$hooks_dir"
    rm -rf "$hooks_dir/Actions" "$hooks_dir/Filters"
    [[ -d "$TMP_OUTPUT/hooks/Actions" ]] && cp -r "$TMP_OUTPUT/hooks/Actions" "$hooks_dir/"
    [[ -d "$TMP_OUTPUT/hooks/Filters" ]] && cp -r "$TMP_OUTPUT/hooks/Filters" "$hooks_dir/"

    # Fix paths and add GitHub source links
    repo_name="${ADDON_REPOS[$addon_dir_name]:-$addon_dir_name}"
    find "$hooks_dir" -name "*.md" -exec sed -i "s|$addon_path/||g" {} +
    find "$hooks_dir" -name "*.md" -exec sed -i -E \
      "s|Defined in \`(.+)\` at line ([0-9]+)|Defined in [\`\1\`](https://github.com/Ultimate-Multisite/$repo_name/blob/main/\1#L\2) at line \2|g" {} +

    # Add unique sidebar keys to prevent translation conflicts
    echo "{\"label\":\"hooks\",\"key\":\"${doc_slug}-hooks\"}" > "$hooks_dir/_category_.json"
    [[ -d "$hooks_dir/Actions" ]] && echo "{\"label\":\"Actions\",\"key\":\"${doc_slug}-actions\"}" > "$hooks_dir/Actions/_category_.json"
    [[ -d "$hooks_dir/Filters" ]] && echo "{\"label\":\"Filters\",\"key\":\"${doc_slug}-filters\"}" > "$hooks_dir/Filters/_category_.json"

    hook_count=$(find "$hooks_dir" -name "*.md" -not -name "index.md" | wc -l)
    echo "  $hook_count hooks copied to addons/$doc_slug/hooks/"
    addon_count=$((addon_count + 1))
  else
    echo "  No documented hooks found"
  fi
  rm -rf "$TMP_OUTPUT"
done

echo ""
echo "=== Hooks generation complete ($addon_count addons with hooks) ==="
