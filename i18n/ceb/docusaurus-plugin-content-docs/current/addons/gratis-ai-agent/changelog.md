---
title: Mga Pagbag-o sa Feature/Pag-uswag
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Mga Pagbag-o (Changelog)

## 1.9.0 — Gi-release niadtong 2026-04-28

### Bag-O

- **`create_contact_form` ability** — makahimo og contact form gamit ang active nga form plugin (Contact Form 7, WPForms, Fluent Forms, o Gravity Forms) ug maghatag og shortcode nga andam i-embed sa bisan unsang post o page.
- **`set_featured_image` ability** — nagtakda og featured image sa usa ka post o page gikan sa existing Media Library attachment ID o gikan sa remote URL; awtomatikong mag-import kini sa imahe kon mohatag og URL.
- **`batch_create_posts` ability** — makahimo og daghang posts sa usa ka tawag lang sa ability. Suporta ni ang parehas nga parameters sa `create_post`, nagreport sa success/failure kada post, ug adunay optional nga `stop_on_error` mode.
- **`page_template` parameter** — gidugang kini sa `create_post` ug `update_post`. Nagtakda kini og PHP page template file (e.g. `page-full-width.php`) paghimo o pag-update. Paghatag og empty string sa `update_post` aron mobalik sa theme default.
- **Client-side screenshot abilities** — Ang `capture_screenshot`, `compare_screenshots`, ug `review_page_design`. Makakuha kini og full o viewport screenshots sa live pages pinaagi sa server-side headless browser, makakita og kalainan (diff) tali sa duha ka screenshots, ug makakuha og AI-generated design review nga naglakip sa layout, typography, colour, ug accessibility.
- **Lima ka built-in agents** — Content Writer, Site Builder, Design Studio, Plugin Manager, ug Support Assistant. Ang matag agent adunay kaugalingon nga set sa tools, usa ka tailored system prompt, ug starter suggestions. Mahimong usbon pinaagi sa bag-ong **Agent Picker** sa chat header. Tan-awa ang [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Feature flags** — Bag-ong tab nga **Settings → Feature Flags** nga adunay access-control toggles (restrict to administrators, restrict to network admins, subscriber access, disable for non-members) ug branding options (hide footer attribution, custom agent name, hide agent picker, use site icon as chat avatar). Tan-awa ang [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Restore last session** — Karon, ang chat panel awtomatikong mag-reload sa pinakabag-o nimong pag-istorya kon mo-load ka og page o moabli ka sa widget. Mao ni para dili mawala ang imong context bisag nag-navigate ka sa lain-laing pages.
- **Plugin action links** — Ang quick links paingon sa Settings ug sa Abilities Registry karon makita na sa WordPress **Plugins → Installed Plugins** screen ubos sa description sa plugin.

### Gipaayo

- **Image source retry** — Karon, ang agent mag-try pagbalik (retries) sa tanang configured free image sources sa dili pa mo-fallback sa AI-generated image kon mapakyas ang pag-download.
- **Model info panel** — Kanunay nga makita sa chat header; dili na kini itago human sa unang mensahe.
- **Auto-scroll behaviour** — Ang auto-scroll magpahulay (pauses) kon mo-scroll ka pa-itaas aron magbasa; ang usa ka nag-float nga **Scroll to bottom** button makablit ug awtomatikong mawala kon maabot nimo ang pinakabag-o nga mensahe.
- **Agent Picker UI** — Gi-redesign kini isip form-table overlay nga adunay icons kada agent, nga mas dali tan-awon aron mailhan ug usbon ang mga agent sa usa ka pagtan-aw lang.
- **Lazy-loaded JS chunks** — Ang initial JavaScript bundle sa chat widget gibahin na karon ngadto sa lazy-loaded chunks, nga nagpamenus sa initial bundle sizes og 75–90%.
- **Chat widget redesign** — Usa ka unified AI icon ang mopalit sa previous custom avatar; kini consistent sa built-in agent system.
- **URL linkification** — Ang mga URL nga makita sa system messages ug error message bubbles karon gihimo na nga clickable links.

### Gitul-id

- **Ability discoverability** — Gitul-id ang descriptions, system prompt references, ug namespace alignment aron ang tanang abilities makita sa agent's tool list og kasaligan.
- **Providers cache** — Ang mga providers karon gi-cache site-wide pinaagi sa usa ka version counter, nga nagpugong sa problema sa 'stale-provider' sa multisite networks.
- **`ability_invalid_output`** — Nasulbad kini sa 12 ka ability handlers; tanan makabalik og maayo nga structured JSON responses.
- **`pending_client_tool_calls` pipeline** — Gi-wire end-to-end aron ang client-side tool calls makompleto pag-ayo ug makabalik og resulta sa model.
- **History drawer** — Ang mga pagbag-o nga dili maibalik (non-revertable changes) gipugngan gikan sa revert list; ang **View full history** link karon naglihok og tarong.
- **Changes/revert system** — Lima ka separate bugs ang gitul-id ug gi-unify ubos sa bag-ong admin interface.
- **Save Settings toast** — Ang snackbar notification makablit na og kasaligan pagkahuman sa pag-klik sa **Save Settings**.
- **Trash context menu** — Gipadugang ang **Delete Permanently** option aron ang mga item mahimong hard-delete nga dili mobiya sa trash view.
- **Edit & resend** — Ang pag-klik sa edit icon makaduol na lang og edit mode para sa mensahe nga gi-click, ug dili tanan nga mensahe sa thread.
- **Chat layout height** — Ang chat panel mo-adjust sa iyang gitas-on kon adunay plugin-injected content (admin notices, banners) nga makita sa ibabaw sa page, nga makapugong sa input area nga ma-push off-screen.

---

## 1.4.0 — Gi-release niadtong 2026-04-09

### Bag-O

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — nagpadagan sa Agent Capabilities v1 benchmark suite gikan sa command line alang sa CI pipelines ug model evaluation workflows. Suporta ni ang per-question runs, provider/model overrides, ug JSON/CSV output.
- **Agent Capabilities v1 benchmark suite** — Usa ka structured set sa complex, multi-step prompts nga nag-ehersisyo sa tibuok ability surface, uban ang scoring ug token/duration reporting.
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`. Ang mga pagparehistro magpabilin bisan pa sa restart pinaagi sa options table.
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Suporta ni ang hierarchical ug flat taxonomies nga adunay optional rewrite slugs.
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Naglakip kini og lima ka curated presets: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Nagbasa ug nagsulat kini og theme.json values pinaagi sa WordPress Global Styles API.
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Suporta ni ang nested menus ug theme location assignment.
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`. Naglakip kini og built-in safety blocklist nga nagpanalipod sa critical WordPress options gikan sa pagbag-o.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Pangitaa ug i-activate ang ability packs nga gimangguhang isip WordPress plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Multi-phase site build plans uban sa plugin discovery, step output references, progress tracking, ug autonomous error recovery.
- **Restaurant website benchmark question** (`q-restaurant-website`) — End-to-end test nga naglangkob sa CPT registration, design system, navigation, ug plugin discovery.
- **AI provider connector plugins** gidugang sa WordPress Playground blueprints alang sa mas paspas nga local development setup.

### Gipaayo

- Gi-update ang README uban sa dokumentasyon ug setup instructions para sa AI provider connector.

### Gitul-id

- Nasulbad ang 25 ka PHPUnit test failures sa `main` branch.
- Gitul-id ang URL format sa GitHub releases sa `blueprint.json`.
- Gi-renumber ang Task ID aron malikayan ang collision sa daan nga mga IDs.

---

## 1.3.x

_Ang mga notes sa naunang pag-release gipabilin sa plugin repository._
