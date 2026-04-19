---
title: "Changelog"
sidebar_position: 5
---

# Changelog

## 1.4.0 — Released on 2026-04-09

### New

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — runs the Agent Capabilities v1 benchmark suite from the command line for CI pipelines and model evaluation workflows. Supports per-question runs, provider/model overrides, and JSON/CSV output.
- **Agent Capabilities v1 benchmark suite** — a structured set of complex, multi-step prompts that exercise the full ability surface, with scoring and token/duration reporting.
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`. Registrations persist across restarts via the options table.
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Supports hierarchical and flat taxonomies with optional rewrite slugs.
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Includes five curated presets: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Reads and writes theme.json values through the WordPress Global Styles API.
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Supports nested menus and theme location assignment.
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`. Includes a built-in safety blocklist protecting critical WordPress options from modification.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Discover and activate ability packs distributed as WordPress plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Multi-phase site build plans with plugin discovery, step output references, progress tracking, and autonomous error recovery.
- **Restaurant website benchmark question** (`q-restaurant-website`) — end-to-end test covering CPT registration, design system, navigation, and plugin discovery.
- **AI provider connector plugins** added to WordPress Playground blueprints for faster local development setup.

### Improved

- README updated with AI provider connector documentation and setup instructions.

### Fixed

- 25 PHPUnit test failures on `main` branch resolved.
- GitHub releases URL format in `blueprint.json` corrected.
- Task ID renumbering to avoid collisions with old IDs.

---

## 1.3.x

_Prior release notes are maintained in the plugin repository._
