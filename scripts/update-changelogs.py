#!/usr/bin/env python3
"""
Update changelog pages for all addons from their readme.txt files.
Run this in CI or locally to keep changelogs in sync.
"""

import os
import re

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(SCRIPT_DIR)
DOCS_DIR = os.path.join(REPO_ROOT, "docs", "addons")
ADDONS_SRC = os.path.join(REPO_ROOT, "addons")

ADDON_DIRS = {
    "woocommerce":              "ultimate-multisite-woocommerce",
    "site-exporter":            "ultimate-multisite-site-exporter",
    "affiliatewp":              "ultimate-multisite-affiliatewp",
    "ai-site-builder":          "ultimate-multisite-ai-site-builder",
    "analytics":                "ultimate-multisite-analytics",
    "captcha":                  "ultimate-multisite-captcha",
    "chuck-norris-facts":       "ultimate-multisite-chuck-norris-facts",
    "content-sync":             "ultimate-multisite-content-sync",
    "domain-seller":            "ultimate-multisite-domain-seller",
    "fluent-forms":             "ultimate-multisite-fluent-forms",
    "gocardless":               "ultimate-multisite-gocardless",
    "gravity-forms":            "ultimate-multisite-gravity-forms",
    "language-selector":        "ultimate-multisite-language-selector",
    "loco-translate":           "ultimate-multisite-loco-translate",
    "mailchimp":                "ultimate-multisite-mailchimp",
    "mailster":                 "ultimate-multisite-mailster",
    "metered-plans":            "ultimate-multisite-metered-plans",
    "multinetwork":             "ultimate-multisite-multinetwork",
    "multi-tenancy":            "ultimate-multisite-multi-tenancy",
    "payfast":                  "ultimate-multisite-payfast",
    "plugin-and-theme-manager": "ultimate-multisite-plugin-and-theme-manager",
    "support-agents":           "ultimate-multisite-support-agents",
    "support-tickets":          "ultimate-multisite-support-tickets",
    "vat":                      "ultimate-multisite-vat",
    "admin-page-creator":       "ultimate-multisite-admin-page-creator",
    "addon-template":           "ultimate-multisite-addon-template",
    "tutor-multisite-compatibility": "tutor-multisite-compatibility",
    "material-wp":              "material-wp",
}

ADDON_NAMES = {
    "woocommerce": "WooCommerce Integration",
    "site-exporter": "Site Exporter",
    "affiliatewp": "AffiliateWP",
    "ai-site-builder": "AI Site Builder",
    "analytics": "Analytics",
    "captcha": "Captcha",
    "chuck-norris-facts": "Chuck Norris Facts",
    "content-sync": "Content Sync",
    "domain-seller": "Domain Seller",
    "fluent-forms": "Fluent Forms",
    "gocardless": "GoCardless",
    "gravity-forms": "Gravity Forms",
    "language-selector": "Language Selector",
    "loco-translate": "Loco Translate",
    "mailchimp": "Mailchimp",
    "mailster": "Mailster",
    "metered-plans": "Metered Plans",
    "multinetwork": "Multi-Network",
    "multi-tenancy": "Multi-Tenancy",
    "payfast": "PayFast",
    "plugin-and-theme-manager": "Plugin & Theme Manager",
    "support-agents": "Support Agents",
    "support-tickets": "Support Tickets",
    "vat": "VAT",
    "admin-page-creator": "Admin Page Creator",
    "addon-template": "Addon Template",
    "tutor-multisite-compatibility": "Tutor Multisite Compatibility",
    "material-wp": "Material WP",
}


def extract_changelog(addon_dir_path):
    """Extract changelog from readme.txt."""
    readme_path = os.path.join(addon_dir_path, "readme.txt")
    if not os.path.exists(readme_path):
        return ""

    with open(readme_path, "r", encoding="utf-8", errors="replace") as f:
        txt = f.read()

    # Find == Changelog == section
    m = re.search(r"==\s*Changelog\s*==\s*\n(.*?)(?:\n==\s|\Z)", txt, re.DOTALL | re.IGNORECASE)
    if not m:
        return ""

    changelog = m.group(1).strip()

    # Convert = X.X.X = to ### X.X.X
    changelog = re.sub(r"^=\s*(.+?)\s*=$", r"### \1", changelog, flags=re.MULTILINE)

    return changelog


def main():
    updated = 0
    for doc_slug, addon_dirname in ADDON_DIRS.items():
        addon_path = os.path.join(ADDONS_SRC, addon_dirname)
        if not os.path.isdir(addon_path):
            continue

        changelog = extract_changelog(addon_path)
        if not changelog:
            continue

        name = ADDON_NAMES.get(doc_slug, doc_slug)
        doc_dir = os.path.join(DOCS_DIR, doc_slug)
        os.makedirs(doc_dir, exist_ok=True)

        cl_path = os.path.join(doc_dir, "changelog.md")
        content = f"""---
title: "{name} Changelog"
sidebar_position: 99
---

# {name} Changelog

{changelog}
"""
        with open(cl_path, "w") as f:
            f.write(content)
        updated += 1

    print(f"Updated {updated} changelogs")


if __name__ == "__main__":
    main()
