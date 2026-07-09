---
title: Tala ng Pagbabago
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Talaan ng Pagbabago

## 1.9.0 — Inilabas noong 2026-04-28

### Bago

- **`create_contact_form` ability** — lumilikha ng contact form gamit ang aktibong form plugin (Contact Form 7, WPForms, Fluent Forms, o Gravity Forms) at nagbabalik ng shortcode na handa nang i-embed sa anumang post o pahina.
- **`set_featured_image` ability** — nagtatalaga ng tampok na larawan sa isang post o pahina mula sa umiiral na Media Library attachment ID o remote URL; awtomatikong ini-import ang larawan kapag may ibinigay na URL.
- **`batch_create_posts` ability** — lumilikha ng maraming post sa iisang ability call. Sinusuportahan ang parehong mga parameter gaya ng `create_post`, nag-uulat ng tagumpay/pagkabigo sa bawat post, at may opsyonal na `stop_on_error` mode.
- **`page_template` parameter** — idinagdag sa `create_post` at `update_post`. Nagtatalaga ng PHP page template file (hal. `page-full-width.php`) sa oras ng paggawa o pag-update. Magpasa ng walang-lamang string sa `update_post` upang ibalik sa default ng theme.
- **Mga client-side screenshot ability** — `capture_screenshot`, `compare_screenshots`, at `review_page_design`. Kumuha ng buo o viewport na mga screenshot ng mga live na pahina sa pamamagitan ng server-side headless browser, ikumpara ang dalawang screenshot, at kumuha ng AI-generated na pagsusuri sa disenyo na sumasaklaw sa layout, typography, kulay, at accessibility.
- **Limang built-in agent** — Content Writer, Site Builder, Design Studio, Plugin Manager, at Support Assistant. Bawat agent ay may nakalaang hanay ng mga tool, iniangkop na system prompt, at mga panimulang mungkahi. Napapalitan sa pamamagitan ng bagong **Agent Picker** sa chat header. Tingnan ang [Mga Built-in Agent](../../user-guide/configuration/built-in-agents).
- **Mga feature flag** — bagong tab na **Settings → Feature Flags** na may mga access-control toggle (limitahan sa mga administrator, limitahan sa mga network admin, access ng subscriber, i-disable para sa mga hindi miyembro) at mga opsyon sa branding (itago ang attribution sa footer, custom na pangalan ng agent, itago ang agent picker, gamitin ang site icon bilang chat avatar). Tingnan ang [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Ibalik ang huling session** — awtomatiko na ngayong nire-reload ng chat panel ang pinakabagong pag-uusap sa page load at sa pagbubukas ng widget, kaya hindi kailanman nawawala ang konteksto sa paglipat-lipat ng pahina.
- **Mga link ng aksyon ng plugin** — lumalabas na ngayon ang mga mabilisang link patungo sa Settings at Abilities Registry sa screen ng WordPress **Plugins → Installed Plugins** sa ibaba ng paglalarawan ng plugin.

### Pinahusay

- **Retry ng pinagmulan ng larawan** — sinusubukan na ngayon muli ng agent ang lahat ng naka-configure na libreng pinagmulan ng larawan bago bumalik sa AI-generated na larawan kapag nabigo ang download.
- **Panel ng impormasyon ng modelo** — palaging nakikita sa chat header; hindi na itinatago pagkatapos ng unang mensahe.
- **Gawi ng auto-scroll** — humihinto muna ang auto-scroll kapag nag-scroll pataas ang user para magbasa; lumalabas ang lumulutang na **Scroll to bottom** button at awtomatikong nawawala kapag naabot ng user ang pinakabagong mensahe.
- **Agent Picker UI** — muling idinisenyo bilang form-table overlay na may mga icon para sa bawat agent, kaya mas madaling matukoy at magpalit ng mga agent sa isang tingin.
- **Lazy-loaded JS chunks** — ang paunang JavaScript bundle ng chat widget ay hinati na ngayon sa lazy-loaded chunks, na nagpapababa sa mga paunang laki ng bundle ng 75–90%.
- **Muling disenyo ng chat widget** — pinapalitan ng pinag-isang AI icon ang dating custom avatar; tugma sa built-in agent system.
- **URL linkification** — ang mga URL na lumalabas sa mga system message at error message bubble ay nire-render na ngayon bilang mga naki-click na link.

### Naayos

- **Pagkatuklas ng ability** — itinama ang mga paglalarawan, mga sanggunian sa system prompt, at pagkakatugma ng namespace upang mapagkakatiwalaang lumabas ang lahat ng ability sa listahan ng tool ng agent.
- **Cache ng mga provider** — naka-cache na ngayon ang mga provider sa buong site sa pamamagitan ng version counter, na pumipigil sa mga isyu sa stale-provider sa mga multisite network.
- **`ability_invalid_output`** — nalutas sa 12 ability handler; lahat ay nagbabalik ng maayos na nakabalangkas na mga JSON response.
- **`pending_client_tool_calls` pipeline** — ikinabit mula dulo hanggang dulo upang makumpleto nang tama ang mga client-side tool call at maibalik ang mga resulta sa modelo.
- **History drawer** — inaalis ang mga hindi mare-revert na pagbabago mula sa listahan ng revert; gumagana na ngayon nang tama ang link na **Tingnan ang buong history**.
- **Sistema ng mga pagbabago/revert** — limang magkakahiwalay na bug ang naayos at pinag-isa sa ilalim ng bagong admin interface.
- **Save Settings toast** — maaasahan nang lumalabas ang snackbar notification pagkatapos i-click ang **Save Settings**.
- **Trash context menu** — idinagdag ang opsyong **Delete Permanently** upang maaaring hard-delete ang mga item nang hindi umaalis sa trash view.
- **Edit & resend** — ang pag-click sa edit icon ay pumapasok na ngayon sa edit mode para lamang sa na-click na mensahe, hindi sa lahat ng mensahe sa thread.
- **Taas ng layout ng chat** — inaangkop ng chat panel ang taas nito kapag may plugin-injected na nilalaman (mga admin notice, banner) na lumalabas sa itaas ng pahina, upang maiwasang maitulak palabas ng screen ang input area.

---

## 1.4.0 — Inilabas noong 2026-04-09

### Bago

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — pinapatakbo ang Agent Capabilities v1 benchmark suite mula sa command line para sa mga CI pipeline at workflow ng pagsusuri ng modelo. Sinusuportahan ang mga takbo kada tanong, pag-override ng provider/model, at JSON/CSV na output.
- **Agent Capabilities v1 benchmark suite** — isang nakaayos na hanay ng mga kumplikado at maraming-hakbang na prompt na sumusubok sa buong saklaw ng kakayahan, may pagmamarka at pag-uulat ng token/tagal.
- **Mga kakayahan ng Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Nananatili ang mga rehistrasyon sa mga restart sa pamamagitan ng options table.
- **Mga kakayahan ng Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Sinusuportahan ang mga hierarchical at flat taxonomy na may opsyonal na rewrite slug.
- **Mga kakayahan ng Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Kabilang ang limang piling preset: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Mga kakayahan ng Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Binabasa at isinusulat ang mga halaga ng theme.json sa pamamagitan ng WordPress Global Styles API.
- **Kakayahan sa pamamahala ng Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Sinusuportahan ang mga nested menu at pagtatalaga ng lokasyon ng theme.
- **Kakayahan sa Pamamahala ng Options** — `get_option`, `set_option`, `delete_option`, `list_options`. Kabilang ang built-in na safety blocklist na nagpoprotekta sa mahahalagang WordPress option mula sa pagbabago.
- **Registry ng mga Nai-install na Kakayahan** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Tuklasin at i-activate ang mga ability pack na ipinapamahagi bilang mga WordPress plugin.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Mga multi-phase na plano sa paggawa ng site na may pagtuklas ng plugin, mga sanggunian sa output ng hakbang, pagsubaybay sa progreso, at autonomous na pagbawi sa error.
- **Tanong sa benchmark ng website ng restaurant** (`q-restaurant-website`) — end-to-end na test na sumasaklaw sa rehistrasyon ng CPT, design system, navigation, at pagtuklas ng plugin.
- **Mga AI provider connector plugin** na idinagdag sa WordPress Playground blueprints para sa mas mabilis na setup ng lokal na development.

### Pinahusay

- Na-update ang README na may dokumentasyon ng AI provider connector at mga tagubilin sa setup.

### Naayos

- Nalutas ang 25 pagkabigo sa PHPUnit test sa `main` branch.
- Naitama ang format ng GitHub releases URL sa `blueprint.json`.
- Muling pagnunumero ng Task ID upang maiwasan ang mga banggaan sa mga lumang ID.

---

## 1.3.x

_Ang mga naunang release note ay pinananatili sa plugin repository._
