---
title: ਚੇਂਜਲੌਗ
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# ਚੇਂਜਲੌਗ

## 1.9.0 — 2026-04-28 ਨੂੰ ਰਿਲੀਜ਼ ਹੋਇਆ

### ਨਵੀਆਂ (New)

- **`create_contact_form` ability** — ਇਹ active form plugin (Contact Form 7, WPForms, Fluent Forms, ਜਾਂ Gravity Forms) ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਇੱਕ contact form ਬਣਾਉਂਦਾ ਹੈ ਅਤੇ ਇੱਕ shortcode ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਿਸਨੂੰ ਕਿਸੇ ਵੀ post ਜਾਂ page ਵਿੱਚ embed ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।
- **`set_featured_image` ability** — ਇਹ ਇੱਕ existing Media Library attachment ID ਜਾਂ ਇੱਕ remote URL ਤੋਂ post ਜਾਂ page ਲਈ featured image assign ਕਰਦਾ ਹੈ; ਜਦੋਂ URL ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ ਤਾਂ ਇਹ image ਨੂੰ ਆਪਣੇ ਆਪ import ਕਰਦਾ ਹੈ।
- **`batch_create_posts` ability** — ਇਹ ਇੱਕ ਹੀ ability call ਵਿੱਚ ਕਈ posts ਬਣਾਉਂਦਾ ਹੈ। ਇਹ `create_post` ਦੇ ਹੀ parameters ਨੂੰ support ਕਰਦਾ ਹੈ, ਹਰ post ਦੇ success/failure ਦੀ ਰਿਪੋਰਟ ਕਰਦਾ ਹੈ, ਅਤੇ ਇਸ ਵਿੱਚ ਇੱਕ optional `stop_on_error` mode ਵੀ ਹੈ।
- **`page_template` parameter** — ਇਹ `create_post` ਅਤੇ `update_post` ਵਿੱਚ ਜੋੜਿਆ ਗਿਆ ਹੈ। ਇਹ create ਜਾਂ update ਸਮੇਂ ਇੱਕ PHP page template file (ਜਿਵੇਂ ਕਿ `page-full-width.php`) assign ਕਰਦਾ ਹੈ। `update_post` ਵਿੱਚ theme ਦੇ default 'ਤੇ ਵਾਪਸ ਜਾਣ ਲਈ ਇੱਕ empty string pass ਕਰੋ।
- **Client-side screenshot abilities** — `capture_screenshot`, `compare_screenshots`, ਅਤੇ `review_page_design`। ਇਹ server-side headless browser ਰਾਹੀਂ live pages ਦੇ full ਜਾਂ viewport screenshots capture ਕਰਦਾ ਹੈ, ਦੋ screenshots ਦੀ ਤੁਲਨਾ ਕਰਦਾ ਹੈ, ਅਤੇ layout, typography, colour, ਅਤੇ accessibility ਨੂੰ ਕਵਰ ਕਰਦੇ ਹੋਏ ਇੱਕ AI-generated design review ਪ੍ਰਾਪਤ ਕਰਦਾ ਹੈ।
- **ਪੰਜ built-in agents** — Content Writer, Site Builder, Design Studio, Plugin Manager, ਅਤੇ Support Assistant। ਹਰੇਕ agent ਕੋਲ ਟੂਲਜ਼ ਦਾ ਇੱਕ ਖਾਸ set, ਇੱਕ tailored system prompt, ਅਤੇ starter suggestions ਹੁੰਦੇ ਹਨ। ਇਹ ਨਵੇਂ **Agent Picker** ਰਾਹੀਂ chat header ਵਿੱਚ switch ਕੀਤੇ ਜਾ ਸਕਦੇ ਹਨ। [Built-in Agents](../../user-guide/configuration/built-in-agents) ਦੇਖੋ।
- **Feature flags** — access-control toggles (administrators ਲਈ restrict ਕਰੋ, network admins ਲਈ restrict ਕਰੋ, subscriber access, non-members ਲਈ disable ਕਰੋ) ਅਤੇ branding options (footer attribution ਲੁਕਾਓ, custom agent name, agent picker ਲੁਕਾਓ, chat avatar ਵਜੋਂ site icon ਵਰਤੋ) ਨਾਲ ਇੱਕ ਨਾੜੀ **Settings → Feature Flags** tab ਨਵਾਂ ਹੈ। [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) ਦੇਖੋ।
- **Restore last session** — chat panel ਹੁਣ page load ਹੋਣ 'ਤੇ ਅਤੇ widget ਖੁੱਲ੍ਹਣ 'ਤੇ ਸਭ ਤੋਂ ਹਾਲੀਆ conversation ਨੂੰ ਆਪਣੇ ਆਪ reload ਕਰਦਾ ਹੈ, ਤਾਂ ਜੋ page navigation ਦੌਰਾਨ context ਕਦੇ ਨਾ ਗੁਆਚੇ।
- **Plugin action links** — Settings ਅਤੇ Abilities Registry ਲਈ quick links ਹੁਣ WordPress ਦੇ **Plugins → Installed Plugins** screen 'ਤੇ plugin description ਦੇ ਹੇਠਾਂ ਦਿਖਾਈ ਦਿੰਦੇ ਹਨ।

### ਸੁਧਾਰ (Improved)

- **Image source retry** — download failure ਹੋਣ 'ਤੇ agent ਹੁਣ AI-generated image 'ਤੇ fallback ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸਾਰੇ configured free image sources ਨੂੰ retry ਕਰਦਾ ਹੈ।
- **Model info panel** — ਇਹ ਹਮੇਸ਼ਾ chat header ਵਿੱਚ visible ਰਹਿੰਦਾ ਹੈ; ਪਹਿਲੇ message ਤੋਂ ਬਾਅਦ ਲੁਕਿਆ ਨਹੀਂ ਜਾਂਦਾ।
- **Auto-scroll behaviour** — auto-scroll ਉਦੋਂ ਰੁਕ ਜਾਂਦਾ ਹੈ ਜਦੋਂ user ਪੜ੍ਹਨ ਲਈ ਉੱਪਰ scroll ਕਰਦਾ ਹੈ; ਇੱਕ floating **Scroll to bottom** button ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ ਅਤੇ ਜਦੋਂ user ਸਭ ਤੋਂ ਹਾਲੀਆ message ਤੱਕ ਪਹੁੰਚ ਜਾਂਦਾ ਹੈ ਤਾਂ ਆਪਣੇ ਆਪ dismiss ਹੋ ਜਾਂਦਾ ਹੈ।
- **Agent Picker UI** — ਇਸਨੂੰ form-table overlay ਵਜੋਂ redesign ਕੀਤਾ ਗਿਆ ਹੈ ਜਿਸ ਵਿੱਚ ਹਰੇਕ agent ਦੇ icons ਹਨ, ਜਿਸ ਨਾਲ agents ਨੂੰ ਪਛਾਣਨਾ ਅਤੇ switch ਕਰਨਾ ਆਸਾਨ ਹੋ ਗਿਆ ਹੈ।
- **Lazy-loaded JS chunks** — chat widget ਦਾ initial JavaScript bundle ਹੁਣ lazy-loaded chunks ਵਿੱਚ split ਕੀਤਾ ਗਿਆ ਹੈ, ਜਿਸ ਨਾਲ initial bundle sizes ਵਿੱਚ 75–90% ਤੱਕ ਕਮੀ ਆਈ ਹੈ।
- **Chat widget redesign** — unified AI icon ਪਹਿਲੇ custom avatar ਦੀ ਥਾਂ ਲੈ ਲਿਆ ਹੈ; ਇਹ built-in agent system ਨਾਲ consistent ਹੈ।
- **URL linkification** — system messages ਅਤੇ error message bubbles ਵਿੱਚ ਦਿਖਾਈ ਦੇਣ ਵਾਲੇ URLs ਹੁਣ clickable links ਵਜੋਂ render ਹੁੰਦੇ ਹਨ।

### ਸੁਧਾਰ ਕੀਤੇ ਗਏ (Fixed)

- **Ability discoverability** — descriptions, system prompt references, ਅਤੇ namespace alignment ਨੂੰ ਸਹੀ ਕੀਤਾ ਗਿਆ ਹੈ ਤਾਂ ਜੋ ਸਾਰੀਆਂ abilities agent ਦੀ tool list ਵਿੱਚ ਭਰੋਸੇਯੋਗ ਤੌਰ 'ਤੇ ਦਿਖਾਈ ਦੇਣ।
- **Providers cache** — providers ਹੁਣ multisite networks 'ਤੇ stale-provider issues ਨੂੰ ਰੋਕਣ ਲਈ version counter ਰਾਹੀਂ site-wide cache ਕੀਤੇ ਜਾਂਦੇ ਹਨ।
- **`ability_invalid_output`** — 12 ability handlers ਵਿੱਚ resolve ਕੀਤਾ ਗਿਆ; ਸਾਰੇ ਹੁਣ ਸਹੀ structure ਵਾਲੇ JSON responses return ਕਰਦੇ ਹਨ।
- **`pending_client_tool_calls` pipeline** — end-to-end wired ਕੀਤਾ ਗਿਆ ਹੈ ਤਾਂ ਜੋ client-side tool calls ਸਹੀ ਢੰਗ ਨਾਲ complete ਹੋਣ ਅਤੇ model ਨੂੰ results return ਕਰ ਸਕਣ।
- **History drawer** — non-revertable changes ਨੂੰ revert list ਤੋਂ ਬਾਹਰ ਰੱਖਿਆ ਗਿਆ ਹੈ; **View full history** link ਹੁਣ ਸਹੀ ਢੰਗ ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ।
- **Changes/revert system** — ਪੰਜ ਵੱਖ-ਵੱਖ bugs ਨੂੰ fix ਕੀਤਾ ਗਿਆ ਅਤੇ ਨਵੇਂ admin interface ਹੇਠ ਇਕੱਠੇ ਕੀਤਾ ਗਿਆ।
- **Save Settings toast** — snackbar notification ਹੁਣ **Save Settings** 'ਤੇ click ਕਰਨ ਤੋਂ ਬਾਅਦ ਭਰੋਸੇਯੋਗ ਤੌਰ 'ਤੇ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ।
- **Trash context menu** — **Delete Permanently** option ਜੋੜਿਆ ਗਿਆ ਹੈ ਤਾਂ ਜੋ items ਨੂੰ trash view ਨੂੰ ਸਤਾਏ ਬਿਨਾਂ hard-delete ਕੀਤਾ ਜਾ ਸਕੇ।
- **Edit & resend** — edit icon 'ਤੇ click ਕਰਨ ਨਾਲ ਹੁਣ ਸਿਰਫ਼ click ਕੀਤੇ ਗਏ message ਲਈ edit mode ਵਿੱਚ ਜਾਂਦਾ ਹੈ, ਨਾ ਕਿ thread ਵਿੱਚ ਸਾਰੇ messages ਲਈ।
- **Chat layout height** — chat panel ਆਪਣੀ height ਨੂੰ adapt ਕਰਦਾ ਹੈ ਜਦੋਂ plugin-injected content (admin notices, banners) page ਦੇ ਉੱਪਰ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ, ਜਿਸ ਨਾਲ input area screen ਤੋਂ ਹਟਾ ਨਹੀਂ ਜਾਂਦਾ।

---

## 1.4.0 — 2026-04-09 ਨੂੰ ਰਿਲੀਜ਼ ਹੋਇਆ

### ਨਵੀਆਂ (New)

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — CI pipelines ਅਤੇ model evaluation workflows ਲਈ command line ਤੋਂ Agent Capabilities v1 benchmark suite ਚਲਾਉਂਦਾ ਹੈ। ਇਹ per-question runs, provider/model overrides, ਅਤੇ JSON/CSV output ਨੂੰ support ਕਰਦਾ ਹੈ।
- **Agent Capabilities v1 benchmark suite** — ਇੱਕ structured set of complex, multi-step prompts ਜੋ ਪੂਰੀ ability surface ਦਾ exercise ਕਰਦੇ ਹਨ, ਜਿਸ ਵਿੱਚ scoring ਅਤੇ token/duration reporting ਸ਼ਾਮਲ ਹੈ।
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`। Registrations options table ਰਾਹੀਂ restarts 'ਤੇ persist ਰਹਿੰਦੇ ਹਨ।
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`। ਇਹ optional rewrite slugs ਨਾਲ hierarchical ਅਤੇ flat taxonomies ਨੂੰ support ਕਰਦਾ ਹੈ।
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`। ਇਸ ਵਿੱਚ ਪੰਜ curated presets ਸ਼ਾਮਲ ਹਨ: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`।
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`। ਇਹ WordPress Global Styles API ਰਾਹੀਂ theme.json values ਨੂੰ read ਅਤੇ write ਕਰਦਾ ਹੈ।
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`। ਇਹ nested menus ਅਤੇ theme location assignment ਨੂੰ support ਕਰਦਾ ਹੈ।
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`। ਇਸ ਵਿੱਚ ਇੱਕ built-in safety blocklist ਸ਼ਾਮਲ ਹੈ ਜੋ critical WordPress options ਨੂੰ modification ਤੋਂ ਬਚਾਉਂਦੀ ਹੈ।
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`। WordPress plugins ਵਜੋਂ distribute ਕੀਤੇ ability packs ਨੂੰ discover ਅਤੇ activate ਕਰਦਾ ਹੈ।
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`। ਇਹ plugin discovery, step output references, progress tracking, ਅਤੇ autonomous error recovery ਵਾਲੇ multi-phase site build plans ਹਨ।
- **Restaurant website benchmark question** (`q-restaurant-website`) — CPT registration, design system, navigation, ਅਤੇ plugin discovery ਨੂੰ ਕਵਰ ਕਰਦਾ end-to-end test।
- **AI provider connector plugins** ਨੂੰ faster local development setup ਲਈ WordPress Playground blueprints ਵਿੱਚ ਜੋੜਿਆ ਗਿਆ।

### ਸੁਧਾਰ (Improved)

- README ਨੂੰ AI provider connector documentation ਅਤੇ setup instructions ਨਾਲ update ਕੀਤਾ ਗਿਆ।

### ਸੁਧਾਰ ਕੀਤੇ ਗਏ (Fixed)

- `main` branch 'ਤੇ 25 PHPUnit test failures resolve ਕੀਤੇ ਗਏ।
- `blueprint.json` ਵਿੱਚ GitHub releases URL format ਨੂੰ correct ਕੀਤਾ ਗਿਆ।
- Task ID ਨੂੰ renumber ਕੀਤਾ ਗਿਆ ਤਾਂ ਜੋ ਪੁਰਾਣੇ IDs ਨਾਲ collision ਨਾ ਹੋਵੇ।

---

## 1.3.x

_ਪਿਛਲੇ release notes plugin repository ਵਿੱਚ maintain ਕੀਤੇ ਗਏ ਹਨ।_
