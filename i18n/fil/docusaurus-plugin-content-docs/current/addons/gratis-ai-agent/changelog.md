---
title: Changelog
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Mga Pagbabago (Changelog)

## 1.9.0 — Inilabas noong 2026-04-28

### Bago (New)

- **Kakayahan na `create_contact_form`** — Lumilikha ito ng contact form gamit ang kasalukuyang form plugin (Contact Form 7, WPForms, Fluent Forms, o Gravity Forms) at nagbabalik ng shortcode na handa nang i-embed sa anumang post o page.
- **Kakayahan na `set_featured_image`** — Nagtatalaga ito ng featured image sa isang post o page mula sa isang umiiral na Media Library attachment ID o isang remote URL; awtomatikong i-iimport nito ang imahe kapag nagbigay ng URL.
- **Kakayahan na `batch_create_posts`** — Lumilikha ito ng maraming posts sa isang tawag lamang ng kakayahan. Sinusuportahan nito ang parehong parameters ng `create_post`, nag-uulat ng tagumpay/pagkabigo para sa bawat post, at may opsyon na `stop_on_error` (hinto kapag may error).
- **Parameter na `page_template`** — Idinagdag sa `create_post` at `update_post`. Nagtatalaga ito ng PHP page template file (hal. `page-full-width.php`) sa oras ng paglikha o pag-update. Magpasa ng empty string sa `update_post` para bumalik sa default ng theme.
- **Kakayahan sa Screenshot sa Client-side** — `capture_screenshot`, `compare_screenshots`, at `review_page_design`. Kumukuha ito ng full o viewport screenshots ng mga live pages sa pamamagitan ng isang server-side headless browser, nagkukumpara ng dalawang screenshots, at nagbibigay ng AI-generated design review na sumasaklaw sa layout, typography, kulay, at accessibility.
- **Limang built-in agents** — Content Writer, Site Builder, Design Studio, Plugin Manager, at Support Assistant. Ang bawat agent ay may sariling set ng tools, isang customized system prompt, at mga starter suggestions. Maaari itong palitan gamit ang bagong **Agent Picker** sa header ng chat. Tingnan ang [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Feature flags** — Bagong tab na **Settings → Feature Flags** na may mga access-control toggles (limitahan sa administrators, limitahan sa network admins, subscriber access, disable for non-members) at mga branding options (hide footer attribution, custom agent name, hide agent picker, use site icon as chat avatar). Tingnan ang [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **I-restore ang huling session** — Ang chat panel ngayon ay awtomatikong nagre-reload ng pinakahuling pag-uusap sa pag-load ng page at sa pagbukas ng widget, kaya hindi mawawala ang context kahit mag-navigate ka sa ibang page.
- **Plugin action links** — Ang mga quick link patungo sa Settings at sa Abilities Registry ay lumilitaw na ngayon sa screen ng WordPress na **Plugins → Installed Plugins** sa ilalim ng paglalarawan ng plugin.

### Pinaganda (Improved)

- **Image source retry** — Ang agent ngayon ay muling susubukan ang lahat ng naka-configure na free image sources bago bumalik sa isang AI-generated image kapag nag-fail ang pag-download.
- **Model info panel** — Palaging nakikita sa chat header; hindi na nagtatago pagkatapos ng unang mensahe.
- **Auto-scroll behaviour** — Humihinto ang auto-scroll kapag nag-scroll pataas ang user para magbasa; isang lumulutang na **Scroll to bottom** button ang lilitaw at awtomatikong mawawala kapag narating na ng user ang pinakabagong mensahe.
- **Agent Picker UI** — Dinisenyo muli bilang isang form-table overlay na may mga icon bawat agent, na nagpapadali sa pagkilala at pagpapalit ng mga agent sa isang sulyap.
- **Lazy-loaded JS chunks** — Ang initial JavaScript bundle ng chat widget ay hinati na ngayon sa lazy-loaded chunks, na nagpapabawas sa initial bundle sizes ng 75–90%.
- **Chat widget redesign** — Ang unified AI icon ay pumalit sa dating custom avatar; ito ay consistent sa built-in agent system.
- **URL linkification** — Ang mga URL na lumilitaw sa system messages at error message bubbles ay ngayon ay naka-render na bilang clickable links.

### Inayos (Fixed)

- **Ability discoverability** — Inayos ang mga paglalarawan, system prompt references, at namespace alignment para ang lahat ng abilities ay lumabas sa tool list ng agent nang maaasahan.
- **Providers cache** — Ang mga providers ay ngayon ay naka-cache sa buong site gamit ang isang version counter, na pumipigil sa mga isyu ng stale-provider sa multisite networks.
- **`ability_invalid_output`** — Naayos sa 12 ability handlers; lahat ay nagbabalik ng wastong structured JSON responses.
- **`pending_client_tool_calls` pipeline** — Naka-wire end-to-end para matapos nang tama ang client-side tool calls at maibalik ang mga resulta sa model.
- **History drawer** — Ang mga pagbabagong hindi na mababalik (non-revertable changes) ay hindi na kasama sa revert list; ang link na **View full history** ay gumagana na nang tama.
- **Changes/revert system** — Limang hiwalay na bugs ang naayos at pinagsama sa ilalim ng bagong admin interface.
- **Save Settings toast** — Ang snackbar notification ay ngayon ay lumilitaw nang maaasahan pagkatapos pindutin ang **Save Settings**.
- **Trash context menu** — Nagdagdag ng **Delete Permanently** option para ang mga item ay maaaring i-hard-delete nang hindi umaalis sa trash view.
- **Edit & resend** — Ang pag-click sa edit icon ay naglalagay na ngayon sa edit mode lamang para sa napindot na mensahe, hindi sa lahat ng mensahe sa thread.
- **Chat layout height** — Ina-adjust ng chat panel ang taas nito kapag may lumabas na plugin-injected content (admin notices, banners) sa itaas ng page, na pumipigil sa input area na ma-push off-screen.

---

## 1.4.0 — Inilabas noong 2026-04-09

### Bago (New)

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — Nagpapatakbo ito ng Agent Capabilities v1 benchmark suite mula sa command line para sa CI pipelines at model evaluation workflows. Sinusuportahan ang per-question runs, provider/model overrides, at JSON/CSV output.
- **Agent Capabilities v1 benchmark suite** — Isang structured set ng complex, multi-step prompts na nag-e-exercise ng buong ability surface, kasama ang scoring at token/duration reporting.
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`. Ang mga registration ay nananatili sa mga restart sa pamamagitan ng options table.
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Sinusuportahan ang hierarchical at flat taxonomies na may optional rewrite slugs.
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Kasama ang limang curated presets: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Nagbabasa at nagsusulat ng mga halaga ng theme.json sa pamamagitan ng WordPress Global Styles API.
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Sinusuportahan ang nested menus at theme location assignment.
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`. Kasama ang isang built-in safety blocklist na nagpoprotekta sa mga kritikal na WordPress options mula sa pagbabago.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Tuklasin at i-activate ang mga ability packs na ipinamamahagi bilang WordPress plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Multi-phase site build plans na may plugin discovery, step output references, progress tracking, at autonomous error recovery.
- **Restaurant website benchmark question** (`q-restaurant-website`) — End-to-end test na sumasaklaw sa CPT registration, design system, navigation, at plugin discovery.
- **AI provider connector plugins** na idinagdag sa WordPress Playground blueprints para sa mas mabilis na local development setup.

### Pinaganda (Improved)

- In-update ang README na may dokumentasyon at setup instructions para sa AI provider connector.

### Inayos (Fixed)

- 25 PHPUnit test failures sa `main` branch ay naayos.
- Ang format ng GitHub releases URL sa `blueprint.json` ay itinama.
- Pag-re-number ng Task ID para maiwasan ang pagbangga sa mga lumang ID.

---

## 1.3.x

_Ang mga naunang release notes ay napanatili sa plugin repository._
