---
title: Àkọọlẹ̀ àwọn ìyípadà
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Àkọsílẹ̀ Àyípadà

## 1.9.0 — Tí a tu sílẹ̀ ní 2026-04-28

### Tuntun

- **agbára `create_contact_form`** — ń dá fọ́ọ̀mù ìbánisọ̀rọ̀ kan sílẹ̀ ní lílo plugin fọ́ọ̀mù tó ń ṣiṣẹ́ (Contact Form 7, WPForms, Fluent Forms, tàbí Gravity Forms) ó sì ń dá shortcode tó ti ṣetan láti fi sínú ìfìwéránṣẹ́ tàbí ojú-ewé èyíkéyìí padà.
- **agbára `set_featured_image`** — ń yan àwòrán àfihàn sí ìfìwéránṣẹ́ tàbí ojú-ewé láti ID àfikún Media Library tó wà tẹ́lẹ̀ tàbí URL jíjìn; ó máa ń gbe àwòrán wọlé fúnra rẹ̀ nígbà tí a bá pèsè URL.
- **agbára `batch_create_posts`** — ń dá ọ̀pọ̀ ìfìwéránṣẹ́ sílẹ̀ nínú ìpè agbára kan ṣoṣo. Ó ṣe àtìlẹ́yìn fún àwọn paramita kan náà bí `create_post`, ó ń jabo àṣeyọrí/ìkùnà fún ìfìwéránṣẹ́ kọ̀ọ̀kan, ó sì ní módù `stop_on_error` àṣàyàn.
- **paramita `page_template`** — a fi kún `create_post` àti `update_post`. Ó ń yan fáìlì awoṣe ojú-ewé PHP kan (fún àpẹẹrẹ `page-full-width.php`) nígbà ìdásílẹ̀ tàbí ìmúdójúìwọ̀n. Fi ọ̀rọ̀ òfo ránṣẹ́ sí `update_post` láti padà sí àiyipada theme.
- **Àwọn agbára screenshot ẹgbẹ́-client** — `capture_screenshot`, `compare_screenshots`, àti `review_page_design`. Ya screenshot kíkún tàbí ti viewport ti àwọn ojú-ewé tó wà lórí ayélujára nípasẹ̀ aṣàwákiri headless ẹgbẹ́-server, ṣe ìyàtọ̀ screenshot méjì, kí o sì gba àyẹ̀wò design tí AI dá sílẹ̀ tó bo ìṣètò, typography, àwọ̀, àti ìráyèwọlé.
- **Àwọn aṣojú márùn-ún tí a kọ sínú rẹ̀** — Onkọ̀wé Àkóónú, Akọ́lé Site, Studio Design, Alákóso Plugin, àti Olùrànlọ́wọ́ Àtìlẹ́yìn. Aṣojú kọ̀ọ̀kan ní àkójọpọ̀ irinṣẹ́ tirẹ̀, system prompt tí a ṣe pàtàkì fún un, àti àwọn àbá ìbẹ̀rẹ̀. Ó ṣeé yí padà nípasẹ̀ **Olùyan Aṣojú** tuntun nínú akọsórí chat. Wo [Àwọn Aṣojú tí a Kọ sínú Rẹ̀](../../user-guide/configuration/built-in-agents).
- **Àwọn àsíá feature** — taabu **Settings → Feature Flags** tuntun pẹ̀lú àwọn toggle ìṣàkóso ìráyè (di mọ́ àwọn administrators, di mọ́ àwọn network admins, ìráyè subscriber, pa fún àwọn tí kì í ṣe members) àti àwọn àṣàyàn branding (fi ìtọ́kasí footer pamọ́, orúkọ aṣojú àdáṣe, fi olùyan aṣojú pamọ́, lo aami site gẹ́gẹ́ bí chat avatar). Wo [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Dá session tó kẹ́yìn padà** — panel chat ń tún ìjíròrò tó ṣẹ̀ṣẹ̀ ṣẹlẹ̀ jù lọ gbé wọlé fúnra rẹ̀ báyìí nígbà tí ojú-ewé bá ń ṣí àti nígbà tí widget bá ṣí, nítorí náà context kì í sọnù mọ́ láàárín ìrìnàjò ojú-ewé.
- **Àwọn link ìṣe plugin** — àwọn link yára sí Settings àti Abilities Registry ń hàn báyìí lórí iboju WordPress **Plugins → Installed Plugins** ní ìsàlẹ̀ àpèjúwe plugin.

### Tí a mú sunwọ̀n síi

- **Ìgbìyànjú orísun àwòrán lẹ́ẹ̀kansi** — aṣojú ń tún gbogbo àwọn orísun àwòrán ọ̀fẹ́ tí a ti ṣètò gbìyànjú báyìí kí ó tó padà sí àwòrán tí AI dá sílẹ̀ nígbà ìkùnà ìgbàsílẹ̀.
- **Panel ìmọ̀ model** — máa ń hàn nígbà gbogbo nínú akọsórí chat; a kì í fi pamọ́ mọ́ lẹ́yìn ìfiranṣẹ́ àkọ́kọ́.
- **Ìhùwàsí auto-scroll** — auto-scroll máa ń dá dúró nígbà tí olumulo bá scroll sókè láti kà; bọ́tìnì **Scroll sí ìsàlẹ̀** tó ń fò máa ń hàn, ó sì máa ń lọ fúnra rẹ̀ nígbà tí olumulo bá dé ìfiranṣẹ́ tuntun jù lọ.
- **UI Olùyan Aṣojú** — a tún un ṣe gẹ́gẹ́ bí overlay form-table pẹ̀lú àwọn aami fún aṣojú kọ̀ọ̀kan, tó mú kí ó rọrùn láti dá àwọn aṣojú mọ̀ àti láti yí padà ní ojú kan.
- **Àwọn ìpín JS tí a ń lazy-load** — bundle JavaScript ìbẹ̀rẹ̀ ti widget chat ti pin sí àwọn ìpín tí a ń lazy-load báyìí, tó dín ìwọ̀n bundle ìbẹ̀rẹ̀ kù ní 75–90%.
- **Àtúnṣe widget chat** — aami AI apapọ rọ́pò avatar àdáṣe tẹ́lẹ̀; ó bá eto aṣojú tí a kọ sínú rẹ̀ mu.
- **Ṣíṣe URL di link** — àwọn URL tó ń hàn nínú àwọn ìfiranṣẹ́ system àti àwọn bubble ìfiranṣẹ́ àṣìṣe ni a ń ṣe àfihàn báyìí gẹ́gẹ́ bí àwọn link tí a lè tẹ̀.

### Tí a túnṣe

- **Ríri àwọn agbára** — a ṣàtúnṣe àwọn àpèjúwe, àwọn ìtọ́kasí system prompt, àti ìbámu namespace kí gbogbo àwọn agbára lè hàn nínú àtòkọ irinṣẹ́ aṣojú ní ìgbẹ́kẹ̀lé.
- **Cache providers** — a ń cache àwọn providers báyìí jákèjádò site nípasẹ̀ counter version, tó ń dènà àwọn ìṣòro stale-provider lórí àwọn nẹ́tíwọ́ọ̀kì multisite.
- **`ability_invalid_output`** — a yanjú rẹ̀ kọjá àwọn handler agbára 12; gbogbo wọn ń dá àwọn ìdáhùn JSON tí a ṣètò dáadáa padà.
- **Pipeline `pending_client_tool_calls`** — a so ó láti ìbẹ̀rẹ̀ dé òpin kí àwọn ìpè irinṣẹ́ ẹgbẹ́-client lè parí dáadáa kí wọ́n sì dá àwọn èsì padà sí model.
- **Drawer history** — àwọn àyípadà tí kò ṣeé dá padà ni a yọ kúrò nínú àtòkọ ìdápadà; link **Wo gbogbo history** ń ṣiṣẹ́ dáadáa báyìí.
- **Eto àyípadà/ìdápadà** — a tún bug márùn-ún ọ̀tọ̀ọ̀tọ̀ ṣe, a sì ṣọ̀kan wọn lábẹ́ interface admin tuntun.
- **Toast Save Settings** — ìfitónilétí snackbar ń hàn ní ìgbẹ́kẹ̀lé báyìí lẹ́yìn títẹ **Save Settings**.
- **Menu context Trash** — a fi àṣàyàn **Paarẹ́ Pátápátá** kún un kí a lè hard-delete àwọn ohun kan láì fi wọ́n sílẹ̀ nínú view trash.
- **Ṣàtúnṣe & tún ránṣẹ́** — títẹ aami ṣàtúnṣe ń wọ módù ṣàtúnṣe báyìí fún ìfiranṣẹ́ tí a tẹ̀ nìkan, kì í ṣe gbogbo àwọn ìfiranṣẹ́ nínú thread.
- **Gíga ìṣètò chat** — panel chat ń mú gíga rẹ̀ bá a mu nígbà tí àkóónú tí plugin fi sínú rẹ̀ (àwọn ìkìlọ̀ admin, àwọn banner) bá hàn lókè ojú-ewé, tó ń dènà agbègbè input kí a má bà a ti kúrò lójú iboju.

---

## 1.4.0 — Tí a tu sílẹ̀ ní 2026-04-09

### Tuntun

- **Àṣẹ benchmark WP-CLI** (`wp gratis-ai-agent benchmark`) — ń ṣiṣẹ́ suite benchmark Agent Capabilities v1 láti command line fún àwọn pipeline CI àti àwọn workflow ìtúpalẹ̀ model. Ó ṣe àtìlẹ́yìn fún iṣẹ́ per-question, override provider/model, àti output JSON/CSV.
- **Suite benchmark Agent Capabilities v1** — àkójọpọ̀ prompt onígbèsẹ̀-púpọ̀, dídíjú, tó ní ìṣètò, tí ń dán gbogbo àgbègbè agbára wò, pẹ̀lú scoring àti ìjábọ̀ token/àkókò.
- **Àwọn agbára Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Àwọn ìforúkọsílẹ̀ máa ń wà títí láàárín àwọn restart nípasẹ̀ table options.
- **Àwọn agbára Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Ó ṣe àtìlẹ́yìn fún àwọn taxonomy hierarchical àti flat pẹ̀lú rewrite slugs àṣàyàn.
- **Àwọn agbára Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Ó ní àwọn preset márùn-ún tí a yan dáadáa: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Àwọn agbára Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Ó ń ka, ó sì ń kọ àwọn iye theme.json nípasẹ̀ WordPress Global Styles API.
- **Agbára ìṣàkóso Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Ó ṣe àtìlẹ́yìn fún àwọn menu nested àti yíyan theme location.
- **Agbára Options Management** — `get_option`, `set_option`, `delete_option`, `list_options`. Ó ní blocklist ààbò tí a kọ sínú rẹ̀ tó ń dáàbò bo àwọn aṣàyàn WordPress pàtàkì kúrò nínú ìyípadà.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Ṣàwárí kí o sì mu àwọn pack agbára ṣiṣẹ́ tí a pín ká gẹ́gẹ́ bí àwọn plugin WordPress.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Àwọn plan ìkọ́ site onípele-púpọ̀ pẹ̀lú ìṣàwárí plugin, àwọn ìtọ́kasí output ìgbésẹ̀, títọpa ìlọsíwájú, àti ìmúpadàbọ̀ àṣìṣe aládàáṣiṣẹ́.
- **Ìbéèrè benchmark wẹ́ẹ̀bù-sáìtì ilé-ounjẹ** (`q-restaurant-website`) — ìdánwò láti ìbẹ̀rẹ̀ dé òpin tó bo ìforúkọsílẹ̀ CPT, design system, navigation, àti ìṣàwárí plugin.
- **Àwọn plugin connector AI provider** tí a fi kún àwọn blueprint WordPress Playground fún setup ìdàgbàsókè agbègbè-yẹn tó yára síi.

### Tí a mú sunwọ̀n síi

- A ṣe ìmúdójúìwọ̀n README pẹ̀lú documentation connector AI provider àti àwọn ìtọ́nisọ́nà setup.

### Tí a túnṣe

- A yanjú àwọn ìkùnà ìdánwò PHPUnit 25 lórí ẹ̀ka `main`.
- A ṣàtúnṣe format URL GitHub releases nínú `blueprint.json`.
- Àtúnṣe nọ́ńbà Task ID láti yẹra fún ìkọlù pẹ̀lú àwọn ID àtijọ́.

---

## 1.3.x

_Awọn àkọsílẹ̀ ìtúsílẹ̀ ṣáájú ni a ń tọ́jú nínú repository plugin._
