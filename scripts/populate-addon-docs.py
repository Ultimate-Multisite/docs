#!/usr/bin/env python3
"""
Populate addon documentation from:
1. Wiki docs that should be moved from user-guide to addons
2. README.md / readme.txt content from each addon directory
3. Changelog sections extracted from readme.txt
"""

import os
import re
import shutil
import textwrap

DOCS_DIR = "/home/dave/multisite/docs/docs"
ADDONS_SRC = "/home/dave/multisite/addons"
USER_GUIDE = os.path.join(DOCS_DIR, "user-guide")
ADDONS_DOCS = os.path.join(DOCS_DIR, "addons")

# ── Mapping: user-guide files → addon doc slug ──────────────────────────
# These wiki pages document addon functionality and should move there.
# The original location gets a short redirect/mention stub.
MOVE_MAP = {
    # integrations
    "integrations/woocommerce.md":       "woocommerce",
    "integrations/mailchimp.md":         "mailchimp",
    "integrations/affiliatewp.md":       "affiliatewp",
    "integrations/webhooks.md":          None,  # core feature, keep in user-guide
    "integrations/zapier.md":            None,  # core feature (uses webhooks), keep
    "integrations/zapier-register-account.md": None,
    # customization
    "customization/pro-theme.md":        None,  # pro-theme not in addon list
    "customization/material-wp.md":      "material-wp",
    "customization/ad-injector.md":      None,  # wp-ultimo-ads not in documented addons
    "customization/admin-page-creator.md": "admin-page-creator",
    "customization/plugin-and-theme-manager.md": "plugin-and-theme-manager",
    # localization
    "localization/language-selector.md": "language-selector",
    # migration
    "migration/site-exporter.md":        "site-exporter",
    # payment gateways
    "payment-gateways/payfast.md":       "payfast",
    "payment-gateways/gocardless.md":    "gocardless",
}

# ── Addon metadata ──────────────────────────────────────────────────────
ADDON_META = {
    "woocommerce":              {"dir": "ultimate-multisite-woocommerce",       "slug": "woocommerce-integration",                   "name": "WooCommerce Integration"},
    "site-exporter":            {"dir": "ultimate-multisite-site-exporter",     "slug": "ultimate-multisite-site-exporter",           "name": "Site Exporter"},
    "affiliatewp":              {"dir": "ultimate-multisite-affiliatewp",       "slug": "ultimate-multisite-affiliatewp",             "name": "AffiliateWP"},
    "ai-site-builder":          {"dir": "ultimate-multisite-ai-site-builder",   "slug": "ultimate-multisite-ai-site-builder",         "name": "AI Site Builder"},
    "analytics":                {"dir": "ultimate-multisite-analytics",         "slug": "ultimate-multisite-analytics",               "name": "Analytics"},
    "captcha":                  {"dir": "ultimate-multisite-captcha",           "slug": "ultimate-multisite-captcha",                 "name": "Captcha"},
    "chuck-norris-facts":       {"dir": "ultimate-multisite-chuck-norris-facts","slug": "ultimate-multisite-chuck-norris-facts",      "name": "Chuck Norris Facts"},
    "content-sync":             {"dir": "ultimate-multisite-content-sync",      "slug": "ultimate-multisite-content-sync",            "name": "Content Sync"},
    "domain-seller":            {"dir": "ultimate-multisite-domain-seller",     "slug": "ultimate-multisite-domain-seller",           "name": "Domain Seller"},
    "fluent-forms":             {"dir": "ultimate-multisite-fluent-forms",      "slug": "ultimate-multisite-fluent-forms",            "name": "Fluent Forms"},
    "gocardless":               {"dir": "ultimate-multisite-gocardless",        "slug": "ultimate-multisite-gocardless",              "name": "GoCardless"},
    "gravity-forms":            {"dir": "ultimate-multisite-gravity-forms",     "slug": "ultimate-multisite-gravity-forms",           "name": "Gravity Forms"},
    "language-selector":        {"dir": "ultimate-multisite-language-selector", "slug": "ultimate-multisite-language-selector",       "name": "Language Selector"},
    "loco-translate":           {"dir": "ultimate-multisite-loco-translate",    "slug": "ultimate-multisite-loco-translate",          "name": "Loco Translate"},
    "mailchimp":                {"dir": "ultimate-multisite-mailchimp",         "slug": "ultimate-multisite-mailchimp",               "name": "Mailchimp"},
    "mailster":                 {"dir": "ultimate-multisite-mailster",          "slug": "ultimate-multisite-mailster",                "name": "Mailster"},
    "metered-plans":            {"dir": "ultimate-multisite-metered-plans",     "slug": "ultimate-multisite-metered-plans",           "name": "Metered Plans"},
    "multinetwork":             {"dir": "ultimate-multisite-multinetwork",      "slug": "ultimate-multisite-multinetwork",            "name": "Multi-Network"},
    "multi-tenancy":            {"dir": "ultimate-multisite-multi-tenancy",     "slug": "ultimate-multisite-multi-tenancy",           "name": "Multi-Tenancy"},
    "payfast":                  {"dir": "ultimate-multisite-payfast",           "slug": "ultimate-multisite-payfast",                 "name": "PayFast"},
    "plugin-and-theme-manager": {"dir": "ultimate-multisite-plugin-and-theme-manager", "slug": "ultimate-multisite-plugin-and-theme-manager", "name": "Plugin & Theme Manager"},
    "support-agents":           {"dir": "ultimate-multisite-support-agents",    "slug": "ultimate-multisite-support-agents",          "name": "Support Agents"},
    "support-tickets":          {"dir": "ultimate-multisite-support-tickets",   "slug": "ultimate-multisite-support-tickets",         "name": "Support Tickets"},
    "vat":                      {"dir": "ultimate-multisite-vat",              "slug": "ultimate-multisite-vat",                     "name": "VAT"},
    "admin-page-creator":       {"dir": "ultimate-multisite-admin-page-creator","slug": "ultimate-multisite-admin-page-creator",      "name": "Admin Page Creator"},
    "addon-template":           {"dir": "ultimate-multisite-addon-template",   "slug": None,                                         "name": "Addon Template"},
    "tutor-multisite-compatibility": {"dir": "tutor-multisite-compatibility",  "slug": "tutor-multisite-compatibility",              "name": "Tutor Multisite Compatibility"},
    "material-wp":              {"dir": "material-wp",                         "slug": "material-wp",                                "name": "Material WP"},
}


def read_file(path):
    """Read a file, return empty string if missing."""
    try:
        with open(path, "r", encoding="utf-8", errors="replace") as f:
            return f.read()
    except FileNotFoundError:
        return ""


def parse_wp_readme(txt):
    """Parse a WordPress-style readme.txt into sections."""
    sections = {}
    current = "_header"
    sections[current] = []

    for line in txt.splitlines():
        m = re.match(r"^==\s*(.+?)\s*==$", line)
        if m:
            current = m.group(1).strip().lower()
            sections[current] = []
            continue
        m2 = re.match(r"^=\s*(.+?)\s*=$", line)
        if m2 and current == "changelog":
            sections[current].append(f"### {m2.group(1)}")
            continue
        sections[current].append(line)

    return {k: "\n".join(v).strip() for k, v in sections.items()}


def parse_md_readme(txt):
    """Extract description from a Markdown README."""
    lines = txt.splitlines()
    # Skip title line
    body = []
    past_title = False
    for line in lines:
        if not past_title and line.startswith("#"):
            past_title = True
            continue
        if past_title:
            body.append(line)
    return "\n".join(body).strip()


def get_addon_readme_content(addon_key):
    """Get description and changelog from an addon's readme files."""
    meta = ADDON_META[addon_key]
    addon_dir = os.path.join(ADDONS_SRC, meta["dir"])

    description = ""
    features = ""
    changelog = ""
    installation = ""
    faq = ""

    # Try readme.txt first (WordPress format, richer)
    readme_txt = read_file(os.path.join(addon_dir, "readme.txt"))
    if readme_txt:
        sections = parse_wp_readme(readme_txt)
        description = sections.get("description", "")
        features = ""  # features are usually in description
        changelog = sections.get("changelog", "")
        installation = sections.get("installation", "")
        faq = sections.get("frequently asked questions", "")

    # Fallback to README.md
    if not description:
        readme_md = read_file(os.path.join(addon_dir, "README.md"))
        if readme_md:
            description = parse_md_readme(readme_md)

    # Fallback: read plugin header from main PHP file
    if not description:
        for fname in os.listdir(addon_dir):
            if fname.endswith(".php"):
                php = read_file(os.path.join(addon_dir, fname))
                m = re.search(r"Description:\s*(.+)", php)
                if m:
                    description = m.group(1).strip()
                    break

    return description, features, installation, faq, changelog


def apply_branding(text):
    """Apply standard branding replacements."""
    text = text.replace("WP Ultimo", "Ultimate Multisite")
    text = text.replace("WP-Ultimo", "Ultimate-Multisite")
    text = re.sub(r"wpultimo\.com", "ultimatemultisite.com", text)
    text = re.sub(r"help\.ultimatemultisite\.com[^\s)]*", "", text)
    return text


def build_addon_index(addon_key, wiki_content=""):
    """Build the full addon index.mdx page."""
    meta = ADDON_META[addon_key]
    name = meta["name"]
    slug = meta["slug"]

    description, features, installation, faq, changelog = get_addon_readme_content(addon_key)
    description = apply_branding(description)
    installation = apply_branding(installation)
    faq = apply_branding(faq)
    changelog = apply_branding(changelog)
    if wiki_content:
        wiki_content = apply_branding(wiki_content)

    parts = []

    # Frontmatter
    parts.append(f'---\ntitle: "{name}"\nsidebar_position: 1\n---\n')

    # Banner (skip for free addon-template)
    if slug:
        parts.append(f"import AddonBanner from '@site/src/components/AddonBanner';\n")
        parts.append(f'<AddonBanner slug="{slug}" name="{name}" />\n')

    parts.append(f"# {name}\n")

    # Description from readme
    if description:
        parts.append(description)
        parts.append("")

    # Installation
    if installation:
        parts.append("## Installation\n")
        parts.append(installation)
        parts.append("")

    # Wiki content (the detailed user guide)
    if wiki_content:
        parts.append("## Usage Guide\n")
        parts.append(wiki_content)
        parts.append("")

    # FAQ
    if faq:
        parts.append("## Frequently Asked Questions\n")
        parts.append(faq)
        parts.append("")

    return "\n".join(parts)


def build_changelog_page(addon_key):
    """Build a separate changelog page for the addon."""
    meta = ADDON_META[addon_key]
    name = meta["name"]
    _, _, _, _, changelog = get_addon_readme_content(addon_key)

    if not changelog:
        return None

    changelog = apply_branding(changelog)

    content = f"""---
title: "{name} Changelog"
sidebar_position: 99
---

# {name} Changelog

{changelog}
"""
    return content


def create_stub(original_path, addon_key):
    """Replace the user-guide file with a short redirect stub."""
    meta = ADDON_META[addon_key]
    name = meta["name"]

    # Read original to get the title from frontmatter
    original = read_file(original_path)
    title_match = re.search(r'^title:\s*"?([^"\n]+)"?', original, re.MULTILINE)
    title = title_match.group(1) if title_match else name

    # Get sidebar_position
    pos_match = re.search(r'^sidebar_position:\s*(\d+)', original, re.MULTILINE)
    pos = pos_match.group(1) if pos_match else "1"

    stub = f"""---
title: "{title}"
sidebar_position: {pos}
---

# {title}

This feature is provided by the **{name}** addon.

For full documentation, see the [{name} addon documentation](/addons/{addon_key}).
"""
    return stub


def extract_wiki_body(filepath):
    """Read a migrated wiki doc and return only the body (no frontmatter or first heading)."""
    text = read_file(filepath)
    if not text:
        return ""

    # Strip frontmatter
    if text.startswith("---"):
        end = text.find("---", 3)
        if end != -1:
            text = text[end + 3:].strip()

    # Strip first H1 heading
    lines = text.splitlines()
    if lines and lines[0].startswith("# "):
        lines = lines[1:]

    return "\n".join(lines).strip()


def main():
    moved = 0
    populated = 0

    # ── Step 1: Move wiki docs to addon sections ────────────────────────
    print("=== Moving wiki docs to addon sections ===")
    for rel_path, addon_key in MOVE_MAP.items():
        if addon_key is None:
            continue

        src = os.path.join(USER_GUIDE, rel_path)
        if not os.path.exists(src):
            print(f"  SKIP (not found): {rel_path}")
            continue

        wiki_body = extract_wiki_body(src)

        # Replace user-guide file with a stub
        stub = create_stub(src, addon_key)
        with open(src, "w") as f:
            f.write(stub)

        print(f"  MOVED: {rel_path} → addons/{addon_key}/ (stub left)")
        moved += 1

        # Store wiki content for this addon
        ADDON_META[addon_key]["_wiki_content"] = wiki_body

    # ── Step 2: Populate all addon index pages from README + wiki ───────
    print("\n=== Populating addon docs from READMEs ===")
    for addon_key, meta in ADDON_META.items():
        addon_dir = os.path.join(ADDONS_DOCS, addon_key)
        os.makedirs(addon_dir, exist_ok=True)

        wiki_content = meta.get("_wiki_content", "")

        # Build index page
        index_content = build_addon_index(addon_key, wiki_content)

        # Determine extension
        ext = ".mdx" if meta["slug"] else ".md"
        index_path = os.path.join(addon_dir, f"index{ext}")

        # Remove old index if different extension
        for old_ext in [".md", ".mdx"]:
            old = os.path.join(addon_dir, f"index{old_ext}")
            if old != index_path and os.path.exists(old):
                os.remove(old)

        with open(index_path, "w") as f:
            f.write(index_content)

        # Build changelog page
        changelog_content = build_changelog_page(addon_key)
        if changelog_content:
            cl_path = os.path.join(addon_dir, "changelog.md")
            with open(cl_path, "w") as f:
                f.write(changelog_content)
            print(f"  {addon_key}: index + changelog")
        else:
            print(f"  {addon_key}: index only (no changelog found)")

        populated += 1

    print(f"\n=== Done: {moved} docs moved, {populated} addons populated ===")


if __name__ == "__main__":
    main()
