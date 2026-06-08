---
title: ಚೇಂಜ್‌ಲೋಗ್
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# ಬದಲಾವಣೆಗಳ ದಾಖಲೆ

## 1.9.0 — ಬಿಡುಗಡೆಯಾದ ದಿನಾಂಕ: 2026-04-28

### ಹೊಸದಾಗಿ

- **`create_contact_form` ಸಾಮರ್ಥ್ಯ** — ಇದು ಸಕ್ರಿಯ ಫಾರ್ಮ್ ಪ್ಲಗ್ಇನ್ (Contact Form 7, WPForms, Fluent Forms, ಅಥವಾ Gravity Forms) ಬಳಸಿ ಒಂದು contact form ಅನ್ನು ರಚಿಸುತ್ತದೆ ಮತ್ತು ಅದನ್ನು ಯಾವುದೇ post ಅಥವಾ page ನಲ್ಲಿ ಸೇರಿಸಲು ಸಿದ್ಧವಾದ shortcode ಅನ್ನು ಮರಳಿ ನೀಡುತ್ತದೆ.
- **`set_featured_image` ಸಾಮರ್ಥ್ಯ** — ಇದು ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ Media Library attachment ID ಅಥವಾ remote URL ನಿಂದ post ಅಥವಾ page ಗೆ featured image ಅನ್ನು ನಿಯೋಜಿಸುತ್ತದೆ; URL ಒದಗಿಸಿದಾಗ ಚಿತ್ರವನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಆಮದು ಮಾಡಿಕೊಳ್ಳುತ್ತದೆ.
- **`batch_create_posts` ಸಾಮರ್ಥ್ಯ** — ಇದು ಒಂದೇ ಸಾಮರ್ಥ್ಯ ಕರೆಯ ಮೂಲಕ ಅನೇಕ posts ಅನ್ನು ರಚಿಸುತ್ತದೆ. ಇದು `create_post` ನಂತೆಯೇ ಇರುವ ಪ್ಯಾರಾಮೀಟರ್‌ಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ, ಪ್ರತಿ post ಯ ಯಶಸ್ಸು/ವಿಫಲತೆಯನ್ನು ವರದಿ ಮಾಡುತ್ತದೆ ಮತ್ತು ಐಚ್ಛಿಕ `stop_on_error` ಮೋಡ್ ಅನ್ನು ಹೊಂದಿದೆ.
- **`page_template` ಪ್ಯಾರಾಮೀಟರ್** — ಇದನ್ನು `create_post` ಮತ್ತು `update_post` ಗೆ ಸೇರಿಸಲಾಗಿದೆ. ಇದು ರಚಿಸುವ ಅಥವಾ ಅಪ್ಡೇಟ್ ಮಾಡುವ ಸಮಯದಲ್ಲಿ ಒಂದು PHP page template ಫೈಲ್ ಅನ್ನು (ಉದಾಹರಣೆಗೆ, `page-full-width.php`) ನಿಯೋಜಿಸುತ್ತದೆ. `update_post` ಗೆ ಖಾಲಿ ಸ್ಟ್ರಿಂಗ್ ಅನ್ನು ಒದಗಿಸುವುದರಿಂದ ಥೀಮ್‌ನ default ಗೆ ಮರಳಿ ಹೋಗುತ್ತದೆ.
- **ಕ್ಲೈಂಟ್-ಸೈಡ್ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಸಾಮರ್ಥ್ಯಗಳು** — `capture_screenshot`, `compare_screenshots`, ಮತ್ತು `review_page_design`. ಇವುಗಳು ಸರ್ವರ್-ಸೈಡ್ ಹೆಡ್‌ಲೆಸ್ ಬ್ರೌಸರ್ ಮೂಲಕ ಲೈವ್ page ನ ಸಂಪೂರ್ಣ ಅಥವಾ viewport ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳನ್ನು ಸೆರೆಹಿಡಿಯುತ್ತವೆ, ಎರಡು ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳನ್ನು ಹೋಲಿಸುತ್ತವೆ, ಮತ್ತು ಲೇಔಟ್, ಟೈಪೋಗ್ರಫಿ, ಬಣ್ಣ ಮತ್ತು accessibility ಒಳಗೊಂಡ AI-ಉತ್ಪಾದಿತ design review ಅನ್ನು ನೀಡುತ್ತವೆ.
- **ಐದು ಅಂತರ್ನಿರ್ಮಿತ ಏಜೆಂಟ್‌ಗಳು** — Content Writer, Site Builder, Design Studio, Plugin Manager, ಮತ್ತು Support Assistant. ಪ್ರತಿ ಏಜೆಂಟ್‌ಗೆ ಮೀಸಲಾದ ಉಪಕರಣಗಳು, ಒಂದು ನಿರ್ದಿಷ್ಟವಾದ system prompt ಮತ್ತು ಆರಂಭಿಕ ಸಲಹೆಗಳು ಇವೆ. ಚಾಟ್ ಹೆಡರ್‌ನಲ್ಲಿರುವ ಹೊಸ **Agent Picker** ಮೂಲಕ ಬದಲಾಯಿಸಬಹುದು. [Built-in Agents](../../user-guide/configuration/built-in-agents) ನೋಡಿ.
- **Feature flags** — access-control ಟೋಗಲ್‌ಗಳೊಂದಿಗೆ ಹೊಸ **Settings → Feature Flags** ಟ್ಯಾಬ್, ಮತ್ತು ಬ್ರ್ಯಾಂಡಿಂಗ್ ಆಯ್ಕೆಗಳೊಂದಿಗೆ (footer attribution ಅನ್ನು ಮರೆಮಾಡುವುದು, ಕಸ್ಟಮ್ ಏಜೆಂಟ್ ಹೆಸರು, ಏಜೆಂಟ್ ಪಿಕರ್ ಅನ್ನು ಮರೆಮಾಡುವುದು, ಚಾಟ್ ಅವತಾರವಾಗಿ site icon ಬಳಸುವುದು) ಲಭ್ಯವಿದೆ. [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) ನೋಡಿ.
- **ಕಳೆದ session ಅನ್ನು ಮರುಸ್ಥಾಪಿಸುವುದು** — ಚಾಟ್ ಪ್ಯಾನೆಲ್ ಈಗ page ಲೋಡ್ ಆದಾಗ ಮತ್ತು widget ತೆರೆದಾಗ ಅತ್ಯಂತ ಇತ್ತೀಚಿನ ಸಂಭಾಷಣೆಯನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಮರುಲೋಡ್ ಮಾಡುತ್ತದೆ, ಇದರಿಂದ page navigation ಮಾಡುವಾಗ ಸಂದರ್ಭ (context) ಎಂದಿಗೂ ಕಳೆದುಹೋಗುವುದಿಲ್ಲ.
- **ಪ್ಲಗ್ಇನ್ action ಲಿಂಕ್‌ಗಳು** — WordPress ನ **Plugins → Installed Plugins** ಪರದೆಯ ಮೇಲೆ, ಪ್ಲಗ್ಇನ್ ವಿವರಣೆಯ ಕೆಳಗೆ, Settings ಮತ್ತು Abilities Registry ಗೆ ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು ಕಾಣಿಸುತ್ತವೆ.

### ಸುಧಾರಣೆಗಳು

- **Image source retry** — ಡೌನ್‌ಲೋಡ್ ವಿಫಲವಾದಾಗ, ಏಜೆಂಟ್ ಈಗ ಎಲ್ಲಾ ಕಾನ್ಫಿಗರ್ ಮಾಡಿದ ಉಚಿತ image sources ಅನ್ನು ಮರುಪ್ರಯತ್ನಿಸುತ್ತದೆ, ಆ ನಂತರ AI-ಉತ್ಪಾದಿತ ಚಿತ್ರಕ್ಕೆ ಹಿಂತಿರುಗುತ್ತದೆ.
- **Model info panel** — ಇದು ಚಾಟ್ ಹೆಡರ್‌ನಲ್ಲಿ ಯಾವಾಗಲೂ ಗೋಚರಿಸುತ್ತದೆ; ಮೊದಲ ಸಂದೇಶದ ನಂತರ ಅಡಗುವುದಿಲ್ಲ.
- **Auto-scroll behaviour** — ಬಳಕೆದಾರರು ಓದಲು ಮೇಲೆ ಸ್ಕ್ರೋಲ್ ಮಾಡಿದಾಗ auto-scroll ನಿಲ್ಲುತ್ತದೆ; ಒಂದು ಫ್ಲೋಟಿಂಗ್ **Scroll to bottom** ಬಟನ್ ಕಾಣಿಸುತ್ತದೆ ಮತ್ತು ಬಳಕೆದಾರರು ಇತ್ತೀಚest ಸಂದೇಶವನ್ನು ತಲುಪಿದಾಗ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಮಾಯವಾಗುತ್ತದೆ.
- **Agent Picker UI** — ಇದನ್ನು ಫಾರ್ಮ್-ಟೇಬಲ್ ಓವರ್‌ಲೇ ಆಗಿ ಮರು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ, ಪ್ರತಿ ಏಜೆಂಟ್‌ಗೆ ಐಕಾನ್‌ಗಳೊಂದಿಗೆ, ಇದರಿಂದ ಏಜೆಂಟ್‌ಗಳನ್ನು ಗುರುತಿಸಲು ಮತ್ತು ಬದಲಾಯಿಸಲು ಸುಲಭವಾಗುತ್ತದೆ.
- **Lazy-loaded JS chunks** — ಚಾಟ್ ವಿಜೆಟ್‌ನ ಆರಂಭಿಕ JavaScript bundle ಅನ್ನು ಈಗ lazy-loaded chunks ಆಗಿ ವಿಭಜಿಸಲಾಗಿದೆ, ಇದರಿಂದ ಆರಂಭಿಕ bundle ಗಾತ್ರಗಳು 75–90% ಕಡಿಮೆಯಾಗುತ್ತದೆ.
- **Chat widget redesign** — ಏಕೀಕೃತ AI ಐಕಾನ್ ಹಿಂದಿನ ಕಸ್ಟಮ್ ಅವತಾರವನ್ನು ಬದಲಾಯಿಸುತ್ತದೆ; ಇದು ಅಂತರ್ನಿರ್ಮಿತ ಏಜೆಂಟ್ ವ್ಯವಸ್ಥೆಯೊಂದಿಗೆ ಸ್ಥಿರವಾಗಿದೆ.
- **URL linkification** — system messages ಮತ್ತು error message bubbles ನಲ್ಲಿ ಕಾಣಿಸುವ URL ಗಳನ್ನು ಈಗ ಕ್ಲಿಕ್ ಮಾಡಬಹುದಾದ ಲಿಂಕ್‌ಗಳಾಗಿ ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆ.

### ಸರಿಪಡಿಸಲಾದ

- **Ability discoverability** — ಎಲ್ಲಾ ಸಾಮರ್ಥ್ಯಗಳು ಏಜೆಂಟ್‌ನ ಟೂಲ್ ಲಿಸ್ಟ್‌ನಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಕಾಣಿಸುವಂತೆ ವಿವರಣೆಗಳು, system prompt referencess, ಮತ್ತು namespace alignment ಅನ್ನು ಸರಿಪಡಿಸಲಾಗಿದೆ.
- **Providers cache** — multisite networks ನಲ್ಲಿ ಹಳೆಯ-provider ಸಮಸ್ಯೆಗಳನ್ನು ತಡೆಯಲು, providers ಅನ್ನು ಈಗ version counter ಮೂಲಕ site-wide cache ಮಾಡಲಾಗಿದೆ.
- **`ability_invalid_output`** — 12 ಸಾಮರ್ಥ್ಯ ನಿರ್핸್ಲರ್‌ಗಳಲ್ಲಿ ಪರಿಹರಿಸಲಾಗಿದೆ; ಎಲ್ಲವೂ ಸರಿಯಾಗಿ ರಚಿಸಲಾದ JSON ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ಮರಳಿ ನೀಡುತ್ತವೆ.
- **`pending_client_tool_calls` pipeline** — client-side tool calls ಸರಿಯಾಗಿ ಪೂರ್ಣಗೊಳ್ಳಲು ಮತ್ತು ಫಲಿತಾಂಶಗಳನ್ನು model ಗೆ ಮರಳಿ ನೀಡಲು end-to-end ಸಂಪರ್ಕಿಸಲಾಗಿದೆ.
- **History drawer** — ಮರುಸ್ಥಾಪಿಸಲಾಗದ ಬದಲಾವಣೆಗಳನ್ನು revert listed ನಿಂದ ಹೊರಗಿಡಲಾಗಿದೆ; **View full history** ಲಿಂಕ್ ಈಗ ಸರಿಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.
- **Changes/revert system** — ಐದು ಪ್ರತ್ಯೇಕ ಬಗ್‌ಗಳನ್ನು ಸರಿಪಡಿಸಲಾಗಿದ್ದು, ಹೊಸ admin interface ಅಡಿಯಲ್ಲಿ ಒಗ್ಗೂಡಿಸಲಾಗಿದೆ.
- **Save Settings toast** — **Save Settings** ಕ್ಲಿಕ್ ಮಾಡಿದ ನಂತರ snackbar notification ಈಗ ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಕಾಣಿಸುತ್ತದೆ.
- **Trash context menu** — **Delete Permanently** ಆಯ್ಕೆಯನ್ನು ಸೇರಿಸಲಾಗಿದೆ, ಇದರಿಂದ ವಸ್ತುಗಳನ್ನು ಟ್ರಾಶ್ ವೀව් ಬಿಡದೆ hard-delete ಮಾಡಬಹುದು.
- **Edit & resend** — ಎಡಿಟ್ ಐಕಾನ್ ಕ್ಲಿಕ್ ಮಾಡುವುದರಿಂದ ಈಗ ಕೇವಲ ಕ್ಲಿಕ್ ಮಾಡಿದ ಸಂದೇಶಕ್ಕಾಗಿ ಎಡಿಟ್ ಮೋಡ್‌ಗೆ ಪ್ರವೇಶಿಸುತ್ತದೆ, ಸಂಪೂರ್ಣ thread ನ ಸಂದೇಶಗಳಿಗೆಲ್ಲಾ ಅಲ್ಲ.
- **Chat layout height** — ಪ್ಲಗ್ಇನ್-ಇಂಜೆಕ್ಟೆಡ್ content (admin notices, banners) page ನ ಮೇಲೆ ಕಾಣಿಸಿಕೊಂಡಾಗ ಚಾಟ್ ಪ್ಯಾನೆಲ್ ತನ್ನ ಎತ್ತರವನ್ನು ಹೊಂದಿಸುತ್ತದೆ, ಇದರಿಂದ input area screen ನಿಂದ ಕೆಳಗೆ ಹೋಗುವುದನ್ನು ತಡೆಯುತ್ತದೆ.

---

## 1.4.0 — ಬಿಡುಗಡೆಯಾದ ದಿನಾಂಕ: 2026-04-09

### ಹೊಸದಾಗಿ

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — ಇದು CI pipelines ಮತ್ತು model evaluation workflows ಗಾಗಿ command line ನಿಂದ Agent Capabilities v1 benchmark suite ಅನ್ನು ಚಲಾಯಿಸುತ್ತದೆ. ಪ್ರತಿ ಪ್ರಶ್ನೆಗಳ runs, provider/model overrides, ಮತ್ತು JSON/CSV output ಅನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.
- **Agent Capabilities v1 benchmark suite** — ಇದು ಸಾಮರ್ಥ್ಯದ ಸಂಪೂರ್ಣ ವಿಸ್ತಾರವನ್ನು ವ್ಯಾಯಾಮ ಮಾಡುವ, ಸ್ಕೋರ್‌ಗಳing ಮತ್ತು token/duration ವರದಿ ಮಾಡುವ, ಸಂಕೀರ್ಣ, multi-step prompts ಗಳ ರಚನಾತ್ಮಕ ಸೆಟ್ ಆಗಿದೆ.
- **Custom Post Type ಸಾಮರ್ಥ್ಯಗಳು** — `register_post_type`, `list_post_types`, `delete_post_type`. ಈ ನೋಂದಣಿಗಳು options table ಮೂಲಕ restart ಆದರೂ ಉಳಿಯುತ್ತವೆ.
- **Custom Taxonomy ಸಾಮರ್ಥ್ಯಗಳು** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. ಇದು ಐಚ್ಛಿಕ rewrite slugs ಜೊತೆಗೆ hierarchical ಮತ್ತು flat taxonomies ಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.
- **Design System ಸಾಮರ್ಥ್ಯಗಳು** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. ಇದು ಐದು ಸಂಗ್ರಹಿಸಿದ presets ಅನ್ನು ಒಳಗೊಂಡಿದೆ: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles ಸಾಮರ್ಥ್ಯಗಳು** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. ಇವುಗಳು WordPress Global Styles API ಮೂಲಕ theme.json ಮೌಲ್ಯಗಳನ್ನು ಓದುತ್ತವೆ ಮತ್ತು ಬರೆಯುತ್ತವೆ.
- **Navigation Menu management ಸಾಮರ್ಥ್ಯ** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. ಇದು nested menus ಮತ್ತು theme location assignment ಅನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.
- **Options Management ಸಾಮರ್ಥ್ಯ** — `get_option`, `set_option`, `delete_option`, `list_options`. ಇದು ನಿರ್ಣಾಯಕ WordPress options ಗಳಿಂದ ರಕ್ಷಿಸುವ ಅಂತರ್ನಿರ್ಮಿತ safety blocklist ಅನ್ನು ಒಳಗೊಂಡಿದೆ.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. WordPress plugins ಆಗಿ ವಿತರಿಸಲಾದ ಸಾಮರ್ಥ್ಯ ಪ್ಯಾಕ್‌ಗಳನ್ನು ಕಂಡುಹಿಡಿಯಲು ಮತ್ತು ಸಕ್ರಿಯಗೊಳಿಸಲು.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. ಇದು ಪ್ಲಗ್ಇನ್ discovery, step output references, progress tracking, ಮತ್ತು ಸ್ವಯಂ-ಸಮರ್ಥನ error recovery ಜೊತೆಗೆ multi-phase site build plans ಅನ್ನು ಒದಗಿಸುತ್ತದೆ.
- **Restaurant website benchmark question** (`q-restaurant-website`) — CPT registration, design system, navigation, ಮತ್ತು plugin discovery ಅನ್ನು ಒಳಗೊಂಡ end-to-end ಪರೀಕ್ಷೆ.
- **AI provider connector plugins** ಸ್ಥಳೀಯ ಅಭಿವೃದ್ಧಿ ಸೆಟಪ್‌ಗಾಗಿ WordPress Playground blueprints ಗೆ ಸೇರಿಸಲಾಗಿದೆ.

### ಸುಧಾರಣೆಗಳು

- README ಅನ್ನು AI provider connector documentation ಮತ್ತು setup instructions ಯೊಂದಿಗೆ ಅಪ್ಡೇಟ್ ಮಾಡಲಾಗಿದೆ.

### ಸರಿಪಡಿಸಲಾದ

- `main` branch ನಲ್ಲಿ 25 PHPUnit test failures ಅನ್ನು ಪರಿಹರಿಸಲಾಗಿದೆ.
- `blueprint.json` ನಲ್ಲಿ GitHub releases URL format ಅನ್ನು ಸರಿಪಡಿಸಲಾಗಿದೆ.
- ಹಳೆಯ ID ಗಳೊಂದಿಗೆ ಘರ್ಷಣೆಗಳನ್ನು ತಪ್ಪಿಸಲು Task ID ಅನ್ನು ಮರು ಸಂಖ್ಯೆಗೊಳಿಸಲಾಗಿದೆ.

---

## 1.3.x

_ಹಿಂದಿನ ಬಿಡುಗಡೆ ಟಿಪ್ಪಣಿಗಳನ್ನು ಪ್ಲಗ್ಇನ್ repository ನಲ್ಲಿ ನಿರ್ವಹಿಸಲಾಗಿದೆ._
