---
title: "Changelog"
sidebar_position: 5
---

# Changelog

## 1.9.0 — Released on 2026-04-28

### New

- **`create_contact_form` ability** — creates a contact form using the active form plugin (Contact Form 7, WPForms, Fluent Forms, or Gravity Forms) and returns a shortcode ready to embed in any post or page.
- **`set_featured_image` ability** — assigns a featured image to a post or page from an existing Media Library attachment ID or a remote URL; automatically imports the image when a URL is provided.
- **`batch_create_posts` ability** — creates multiple posts in a single ability call. Supports the same parameters as `create_post`, reports per-post success/failure, and has an optional `stop_on_error` mode.
- **`page_template` parameter** — added to `create_post` and `update_post`. Assigns a PHP page template file (e.g. `page-full-width.php`) at create or update time. Pass an empty string to `update_post` to revert to the theme default.
- **Client-side screenshot abilities** — `capture_screenshot`, `compare_screenshots`, and `review_page_design`. Capture full or viewport screenshots of live pages via a server-side headless browser, diff two screenshots, and get an AI-generated design review covering layout, typography, colour, and accessibility.
- **Five built-in agents** — Content Writer, Site Builder, Design Studio, Plugin Manager, and Support Assistant. Each agent has a dedicated set of tools, a tailored system prompt, and starter suggestions. Switchable via the new **Agent Picker** in the chat header. See [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Feature flags** — new **Settings → Feature Flags** tab with access-control toggles (restrict to administrators, restrict to network admins, subscriber access, disable for non-members) and branding options (hide footer attribution, custom agent name, hide agent picker, use site icon as chat avatar). See [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Restore last session** — the chat panel now reloads the most recent conversation automatically on page load and on widget open, so context is never lost across page navigations.
- **Plugin action links** — quick links to Settings and the Abilities Registry now appear on the WordPress **Plugins → Installed Plugins** screen below the plugin description.

### Improved

- **Image source retry** — the agent now retries all configured free image sources before falling back to an AI-generated image on download failure.
- **Model info panel** — always visible in the chat header; no longer hidden after the first message.
- **Auto-scroll behaviour** — auto-scroll pauses when the user scrolls up to read; a floating **Scroll to bottom** button appears and dismisses automatically when the user reaches the latest message.
- **Agent Picker UI** — redesigned as a form-table overlay with per-agent icons, making it easier to identify and switch agents at a glance.
- **Lazy-loaded JS chunks** — the chat widget's initial JavaScript bundle is now split into lazy-loaded chunks, reducing the initial bundle sizes by 75–90%.
- **Chat widget redesign** — unified AI icon replaces the previous custom avatar; consistent with the built-in agent system.
- **URL linkification** — URLs appearing in system messages and error message bubbles are now rendered as clickable links.

### Fixed

- **Ability discoverability** — corrected descriptions, system prompt references, and namespace alignment so all abilities appear in the agent's tool list reliably.
- **Providers cache** — providers are now cached site-wide via a version counter, preventing stale-provider issues on multisite networks.
- **`ability_invalid_output`** — resolved across 12 ability handlers; all return properly structured JSON responses.
- **`pending_client_tool_calls` pipeline** — wired end-to-end so client-side tool calls complete correctly and return results to the model.
- **History drawer** — non-revertable changes are excluded from the revert list; the **View full history** link now works correctly.
- **Changes/revert system** — five separate bugs fixed and unified under the new admin interface.
- **Save Settings toast** — snackbar notification now appears reliably after clicking **Save Settings**.
- **Trash context menu** — added **Delete Permanently** option so items can be hard-deleted without leaving the trash view.
- **Edit & resend** — clicking the edit icon now enters edit mode only for the clicked message, not all messages in the thread.
- **Chat layout height** — the chat panel adapts its height when plugin-injected content (admin notices, banners) appears above the page, preventing the input area from being pushed off-screen.

---

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
