---
title: Keeb kwm kev hloov
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Daim ntawv hloov tshiab

## 1.9.0 — Tso tawm thaum 2026-04-28 {#190--released-on-2026-04-28}

### Tshiab {#new}

- **`create_contact_form` ability** — tsim ib daim foos tiv tauj siv form plugin uas tab tom qhib (Contact Form 7, WPForms, Fluent Forms, lossis Gravity Forms) thiab xa rov qab ib qho shortcode uas npaj txhij rau muab tso rau hauv ib qho post lossis page.
- **`set_featured_image` ability** — muab ib daim featured image rau ib qho post lossis page los ntawm Media Library attachment ID uas twb muaj lawm lossis ib qho URL sab nraud; cia li import daim duab thaum muab URL.
- **`batch_create_posts` ability** — tsim ntau post hauv ib zaug ability call. Txhawb tib cov parameter li `create_post`, qhia kev ua tiav/ua tsis tiav rau ib-post-zuj zus, thiab muaj `stop_on_error` mode uas xaiv tau.
- **`page_template` parameter** — ntxiv rau `create_post` thiab `update_post`. Muab ib daim PHP page template file (piv txwv `page-full-width.php`) thaum tsim lossis thaum hloov tshiab. Xa ib txoj hlua khoob rau `update_post` kom rov qab mus rau theme default.
- **Client-side screenshot abilities** — `capture_screenshot`, `compare_screenshots`, thiab `review_page_design`. Ntes full lossis viewport screenshots ntawm cov page uas tab tom khiav dhau server-side headless browser, piv ob daim screenshots, thiab tau ib qho kev tshuaj xyuas design uas AI tsim los npog layout, typography, xim, thiab accessibility.
- **Tsib built-in agents** — Content Writer, Site Builder, Design Studio, Plugin Manager, thiab Support Assistant. Txhua agent muaj ib pawg tools tshwj xeeb, ib qho system prompt uas kho kom haum, thiab cov tswv yim pib siv. Hloov tau los ntawm **Agent Picker** tshiab hauv chat header. Saib [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Feature flags** — tab **Settings → Feature Flags** tshiab nrog access-control toggles (txwv rau administrators, txwv rau network admins, subscriber access, kaw rau non-members) thiab branding options (zais footer attribution, custom agent name, zais agent picker, siv site icon ua chat avatar). Saib [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Rov qab qhib session kawg** — tam sim no chat panel cia li thauj qhov kev sib tham tshiab tshaj plaws thaum page load thiab thaum qhib widget, yog li context yeej tsis ploj thaum hla ntawm cov page.
- **Plugin action links** — quick links mus rau Settings thiab Abilities Registry tam sim no tshwm rau ntawm WordPress **Plugins → Installed Plugins** screen hauv qab plugin description.

### Txhim kho {#improved}

- **Image source retry** — tam sim no agent rov sim tag nrho cov free image sources uas teeb tseg ua ntej poob rov qab mus rau ib daim duab uas AI tsim thaum download tsis tiav.
- **Model info panel** — ib txwm pom hauv chat header; tsis zais tom qab thawj message lawm.
- **Auto-scroll behaviour** — auto-scroll nres ib pliag thaum user scrolls nce mus nyeem; ib lub pob floating **Scroll to bottom** tshwm thiab cia li ploj thaum user mus txog message tshiab tshaj plaws.
- **Agent Picker UI** — rov tsim dua ua form-table overlay nrog icons rau ib-agent-zuj zus, ua kom yooj yim dua rau paub thiab hloov agents tam sim ntawd.
- **Lazy-loaded JS chunks** — chat widget qhov JavaScript bundle pib tam sim no raug faib ua lazy-loaded chunks, txo cov initial bundle sizes li 75–90%.
- **Chat widget redesign** — unified AI icon hloov tus custom avatar qub; sib xws nrog built-in agent system.
- **URL linkification** — cov URL uas tshwm hauv system messages thiab error message bubbles tam sim no render ua clickable links.

### Kho lawm {#fixed}

- **Ability discoverability** — kho descriptions, system prompt references, thiab namespace alignment kom tag nrho abilities tshwm hauv agent daim tool list tau ruaj khov.
- **Providers cache** — tam sim no providers raug cache thoob plaws site los ntawm version counter, pab tiv thaiv stale-provider teeb meem hauv multisite networks.
- **`ability_invalid_output`** — daws tau thoob 12 ability handlers; tag nrho xa rov qab JSON responses uas muaj qauv raug.
- **`pending_client_tool_calls` pipeline** — txuas tiav end-to-end kom client-side tool calls ua tiav raug thiab xa results rov qab rau model.
- **History drawer** — cov kev hloov uas revert tsis tau raug tshem tawm ntawm revert list; link **View full history** tam sim no ua haujlwm raug.
- **Changes/revert system** — kho tsib kab laum nyias thiab muab sib koom rau hauv admin interface tshiab.
- **Save Settings toast** — snackbar notification tam sim no tshwm tau ruaj khov tom qab nias **Save Settings**.
- **Trash context menu** — ntxiv option **Delete Permanently** kom items raug hard-deleted tau yam tsis tas tawm ntawm trash view.
- **Edit & resend** — nias edit icon tam sim no nkag edit mode tsuas rau message uas nias xwb, tsis yog tag nrho messages hauv thread.
- **Chat layout height** — chat panel kho nws qhov siab thaum plugin-injected content (admin notices, banners) tshwm saum page, pab tiv thaiv input area tsis txhob raug thawb tawm ntawm screen.

---

## 1.4.0 — Tso tawm thaum 2026-04-09 {#140--released-on-2026-04-09}

### Tshiab {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — khiav Agent Capabilities v1 benchmark suite ntawm command line rau CI pipelines thiab cov txheej txheem ntsuam xyuas model. Txhawb kev khiav ib lo lus nug zuj zus, provider/model overrides, thiab JSON/CSV output.
- **Agent Capabilities v1 benchmark suite** — ib pawg prompts uas muaj qauv, nyuaj, thiab muaj ntau kauj ruam uas sim tag nrho cheeb tsam peev xwm, nrog scoring thiab kev tshaj qhia token/duration.
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`. Kev sau npe khaws cia txuas ntxiv tom qab restarts los ntawm options table.
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Txhawb hierarchical thiab flat taxonomies nrog rewrite slugs uas xaiv tau.
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Muaj tsib presets uas twb xaiv thiab kho zoo lawm: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Nyeem thiab sau theme.json values los ntawm WordPress Global Styles API.
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Txhawb menus sib tshooj thiab kev muab theme location.
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`. Muaj ib daim safety blocklist nyob hauv uas tiv thaiv WordPress options tseem ceeb kom tsis txhob raug hloov.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Nrhiav thiab qhib ability packs uas faib tawm ua WordPress plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Cov phiaj xwm tsim site ntau-theem nrog plugin discovery, step output references, progress tracking, thiab autonomous error recovery.
- **Restaurant website benchmark question** (`q-restaurant-website`) — kev sim txij thaum pib txog kawg uas npog CPT registration, design system, navigation, thiab plugin discovery.
- **AI provider connector plugins** ntxiv rau WordPress Playground blueprints kom teeb local development setup sai dua.

### Txhim kho lawm {#improved-1}

- README hloov tshiab nrog AI provider connector documentation thiab setup instructions.

### Kho lawm {#fixed-1}

- 25 qhov PHPUnit test failures ntawm `main` branch raug daws lawm.
- GitHub releases URL format hauv `blueprint.json` raug kho lawm.
- Task ID renumbering kom zam kev sib tsoo nrog IDs qub.

---

## 1.3.x {#13x}

_Cov release notes yav dhau los khaws cia hauv plugin repository._
