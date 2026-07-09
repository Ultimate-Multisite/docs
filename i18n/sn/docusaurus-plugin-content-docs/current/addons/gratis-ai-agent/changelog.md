---
title: Changelog
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Nhoroondo yeshanduko

## 1.9.0 — Yakaburitswa musi wa2026-04-28

### Zvitsva

- **`create_contact_form` kugona** — kunogadzira fomu rekubata uchishandisa form plugin iri kushanda (Contact Form 7, WPForms, Fluent Forms, kana Gravity Forms) uye kunodzosa shortcode yakagadzirira kuiswa mune chero chinyorwa kana peji.
- **`set_featured_image` kugona** — kunopa mufananidzo mukuru kuchinyorwa kana peji kubva kuMedia Library attachment ID iripo kana remote URL; kunoimporta mufananidzo otomatiki kana URL yapiwa.
- **`batch_create_posts` kugona** — kunogadzira zvinyorwa zvakawanda mukufona kumwe chete kwekugona. Kunotsigira maparameter akafanana ne`create_post`, kunoshuma kubudirira/kutadza pachinyorwa chimwe nechimwe, uye kune mode ye`stop_on_error` isingamanikidzwi.
- **`page_template` parameter** — yakawedzerwa ku`create_post` ne`update_post`. Inopa PHP page template file (semuenzaniso `page-full-width.php`) panguva yekugadzira kana kugadzirisa. Tumira tambo isina chinhu ku`update_post` kuti udzokere kune default ye theme.
- **Kugona kwemifananidzo yescreen kudivi remutengi** — `capture_screenshot`, `compare_screenshots`, uye `review_page_design`. Tora mifananidzo yescreen yakazara kana yeviewport yemapeji ari live kuburikidza nebrowser isina musoro kudivi reseva, enzanisa mifananidzo yescreen miviri, uye uwane ongororo yedhizaini yakagadzirwa neAI inovhara marongerwo, typography, ruvara, uye accessibility.
- **Maagent mashanu akavakirwa-mukati** — Content Writer, Site Builder, Design Studio, Plugin Manager, uye Support Assistant. Agent yega yega ine seti yakatsaurirwa yezvishandiso, system prompt yakagadziridzwa, uye mazano ekutanga. Zvinokwanisika kuchinjwa kuburikidza ne **Agent Picker** itsva muheader yechat. Ona [Maagent Akavakirwa-mukati](../../user-guide/configuration/built-in-agents).
- **Feature flags** — tab itsva ye **Settings → Feature Flags** ine matoggle ekudzora kupinda (ganhurira kuvatariri, ganhurira kunetwork admins, kupinda kwevanyoresi, dzima kune vasiri nhengo) uye sarudzo dze branding (vanza footer attribution, zita reagent rakasarudzika, vanza agent picker, shandisa icon yesaiti seavatar yechat). Ona [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Dzosera session yekupedzisira** — panel yechat ikozvino inorodha zvakare hurukuro yazvino kwazvo otomatiki pakurodha peji uye pakuvhura widget, saka context haizomborasiki pakufamba pakati pemapeji.
- **Plugin action links** — malink ekukurumidza kuSettings neAbilities Registry ikozvino anooneka paWordPress **Plugins → Installed Plugins** screen pasi petsananguro yeplugin.

### Zvakavandudzwa

- **Kuedzazve source yemufananidzo** — agent ikozvino inoedza zvakare masource ese emahara emifananidzo akagadziriswa isati yadzokera kumufananidzo wakagadzirwa neAI kana kudhawunirodha kwatadza.
- **Panel yeruzivo rwe model** — inogara ichioneka muheader yechat; haichavanzwi mushure memeseji yekutanga.
- **Maitiro eauto-scroll** — auto-scroll inomira kana mushandisi achiscroll kumusoro kuti averenge; bhatani rinoyangarara re **Scroll to bottom** rinooneka uye rinobviswa otomatiki kana mushandisi asvika pameseji yazvino.
- **Agent Picker UI** — yakagadzirwazve seoverlay yeform-table ine maicon eagent imwe neimwe, zvichiita kuti zvive nyore kuziva uye kuchinja maagent pakutarisa kamwe chete.
- **Lazy-loaded JS chunks** — bundle yekutanga yeJavaScript yechat widget ikozvino yakakamurwa kuita chunks dzinoloadwa zvishoma nezvishoma, zvichideredza masaizi ebundle ekutanga ne75–90%.
- **Kugadzirwazve kwechat widget** — icon yeAI yakabatana inotsiva avatar yakasarudzika yapfuura; inoenderana nesystem yeagent yakavakirwa-mukati.
- **Kuita URLs malink** — URLs dzinooneka mumeseji dze system nemabubble emeseji dzekukanganisa ikozvino dzinoratidzwa semalink anodzvanywa.

### Zvakagadziriswa

- **Kuwanikwa kwekugona** — tsananguro, mareferensi e system prompt, uye kuenderana kwe namespace zvakagadziriswa kuitira kuti kugona kwese kuonekwe murondedzero yezvishandiso zveagent zvakavimbika.
- **Cache yevanopa** — vanopa ikozvino vanochengetwa mucache pasaiti yese kuburikidza neversion counter, zvichidzivirira nyaya dzevanopa vekare pamanetwork e multisite.
- **`ability_invalid_output`** — yakagadziriswa mu12 ability handlers; dzese dzinodzosa mhinduro dzeJSON dzakarongwa zvakanaka.
- **`pending_client_tool_calls` pipeline** — yakabatanidzwa kubva kumagumo kusvika kumagumo kuitira kuti tool calls dzedivi remutengi dzipere zvakanaka uye dzidzose mhedzisiro ku model.
- **History drawer** — shanduko dzisingadzoserwi dzakabviswa murondedzero yekudzosera; link ye **View full history** ikozvino inoshanda zvakanaka.
- **System yeshanduko/kudzosera** — zvikanganiso zvishanu zvakasiyana zvakagadziriswa uye zvakabatanidzwa pasi pe admin interface itsva.
- **Save Settings toast** — ziviso ye snackbar ikozvino inooneka zvakavimbika mushure mekudzvanya **Save Settings**.
- **Context menu yeTrash** — sarudzo ye **Delete Permanently** yakawedzerwa kuitira kuti zvinhu zvikwanise kudzimwa zvachose pasina kusiya trash view.
- **Edit & resend** — kudzvanya icon yekugadzirisa ikozvino kunopinda muedit mode chete yemeseji yadzvanywa, kwete meseji dzese muthread.
- **Kukwirira kwechat layout** — panel yechat inogadzirisa kukwirira kwayo kana zvirimo zvakaiswa neplugin (admin notices, banners) zvikaoneka pamusoro pepeji, zvichidzivirira nzvimbo yekuisa kuti isasundidzirwe kunze kwescreen.

---

## 1.4.0 — Yakaburitswa musi wa2026-04-09

### Zvitsva

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — inomhanyisa Agent Capabilities v1 benchmark suite kubva pa command line ye CI pipelines uye model evaluation workflows. Inotsigira kumhanyisa pamubvunzo mumwe, provider/model overrides, uye JSON/CSV output.
- **Agent Capabilities v1 benchmark suite** — seti yakarongeka yema prompts akaoma, ane nhanho dzakawanda, anoedza nzvimbo yose yekugona, iine scoring uye token/duration reporting.
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`. Kunyoresa kunoramba kuripo kunyangwe restart yaitwa kuburikidza ne options table.
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Inotsigira taxonomies dzine hierarchy uye dzakatsetseka dzine optional rewrite slugs.
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Inosanganisira presets shanu dzakanyatsosarudzwa: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Inoverenga uye inonyora theme.json values kuburikidza ne WordPress Global Styles API.
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Inotsigira menus dzakapetwa mukati uye theme location assignment.
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`. Inosanganisira built-in safety blocklist inodzivirira critical WordPress options kuti dzisashandurwe.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Wana uye activate ability packs dzinoparadzirwa se WordPress plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Zvirongwa zvekuvaka site zvine phases dzakawanda, plugin discovery, step output references, progress tracking, uye autonomous error recovery.
- **Restaurant website benchmark question** (`q-restaurant-website`) — bvunzo yekutanga kusvika pakupera inobata CPT registration, design system, navigation, uye plugin discovery.
- **AI provider connector plugins** zvakawedzerwa ku WordPress Playground blueprints kuti kugadzirira local development kukurumidze.

### Zvakavandudzwa

- README yakagadziridzwa ne AI provider connector documentation uye mirayiridzo yeku setup.

### Zvakagadziriswa

- 25 PHPUnit test failures pa `main` branch dzagadziriswa.
- GitHub releases URL format mu `blueprint.json` yagadziriswa.
- Task ID renumbering kuti kudzivisirwe collisions nema ID ekare.

---

## 1.3.x

_Manotsi ekuburitswa apfuura anochengetwa mu plugin repository._
