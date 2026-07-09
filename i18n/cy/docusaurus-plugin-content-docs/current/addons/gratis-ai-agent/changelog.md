---
title: Log newidiadau
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Cofnod newidiadau {#changelog}

## 1.9.0 — Rhyddhawyd ar 2026-04-28 {#190--released-on-2026-04-28}

### Newydd {#new}

- **Gallu `create_contact_form`** — yn creu ffurflen gyswllt gan ddefnyddio’r plugin ffurflenni gweithredol (Contact Form 7, WPForms, Fluent Forms, neu Gravity Forms) ac yn dychwelyd shortcode sy’n barod i’w ymgorffori mewn unrhyw bost neu dudalen.
- **Gallu `set_featured_image`** — yn neilltuo delwedd nodwedd i bost neu dudalen o ID atodiad Media Library presennol neu URL o bell; yn mewnforio’r ddelwedd yn awtomatig pan ddarperir URL.
- **Gallu `batch_create_posts`** — yn creu sawl post mewn un galwad gallu. Yn cefnogi’r un paramedrau â `create_post`, yn adrodd llwyddiant/methiant fesul post, ac mae ganddo fodd `stop_on_error` dewisol.
- **Paramedr `page_template`** — wedi’i ychwanegu at `create_post` a `update_post`. Yn neilltuo ffeil templed tudalen PHP (e.e. `page-full-width.php`) wrth greu neu ddiweddaru. Pasiwch linyn gwag i `update_post` i ddychwelyd i ragosodiad y theme.
- **Galluoedd sgrinlun ar ochr y cleient** — `capture_screenshot`, `compare_screenshots`, a `review_page_design`. Cipiwch sgrinluniau llawn neu viewport o dudalennau byw drwy borwr di-ben ar ochr y gweinydd, cymharwch ddau sgrinlun, a chael adolygiad dylunio wedi’i gynhyrchu gan AI sy’n cwmpasu cynllun, teipograffeg, lliw, a hygyrchedd.
- **Pum asiant mewnol** — Awdur Cynnwys, Adeiladydd Safle, Stiwdio Ddylunio, Rheolwr Plugin, a Chynorthwyydd Cymorth. Mae gan bob asiant set benodol o offer, system prompt wedi’i deilwra, ac awgrymiadau cychwynnol. Gellir newid drwy’r **Dewisydd Asiant** newydd ym mhennyn y sgwrs. Gweler [Asiantau Mewnol](../../user-guide/configuration/built-in-agents).
- **Baneri nodwedd** — tab **Gosodiadau → Baneri Nodwedd** newydd gyda thoglau rheoli mynediad (cyfyngu i weinyddwyr, cyfyngu i weinyddwyr rhwydwaith, mynediad tanysgrifwyr, analluogi i rai nad ydynt yn aelodau) ac opsiynau brandio (cuddio priodoliad troedyn, enw asiant personol, cuddio’r dewisydd asiant, defnyddio eicon y safle fel avatar sgwrs). Gweler [Gosodiadau Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Adfer y sesiwn ddiwethaf** — mae’r panel sgwrs bellach yn ail-lwytho’r sgwrs fwyaf diweddar yn awtomatig wrth lwytho tudalen ac wrth agor y teclyn, felly ni chollir cyd-destun byth ar draws llywio tudalennau.
- **Dolenni gweithredu plugin** — mae dolenni cyflym i Gosodiadau a’r Gofrestrfa Galluoedd bellach yn ymddangos ar sgrin **Plugins → Installed Plugins** WordPress o dan ddisgrifiad y plugin.

### Gwell {#improved}

- **Ailgynnig ffynhonnell delwedd** — mae’r asiant bellach yn ailgynnig pob ffynhonnell delwedd am ddim sydd wedi’i ffurfweddu cyn syrthio’n ôl i ddelwedd wedi’i chynhyrchu gan AI ar fethiant lawrlwytho.
- **Panel gwybodaeth model** — bob amser yn weladwy ym mhennyn y sgwrs; nid yw bellach yn cael ei guddio ar ôl y neges gyntaf.
- **Ymddygiad awto-sgrolio** — mae awto-sgrolio yn oedi pan fydd y defnyddiwr yn sgrolio i fyny i ddarllen; mae botwm arnofiol **Sgrolio i’r gwaelod** yn ymddangos ac yn diflannu’n awtomatig pan fydd y defnyddiwr yn cyrraedd y neges ddiweddaraf.
- **UI Dewisydd Asiant** — wedi’i ailgynllunio fel troshaen tabl-ffurflen gydag eiconau fesul asiant, gan ei gwneud yn haws adnabod a newid asiantau ar unwaith.
- **Darnau JS wedi’u llwytho’n ddiog** — mae bwndel JavaScript cychwynnol y teclyn sgwrs bellach wedi’i rannu’n ddarnau sy’n cael eu llwytho’n ddiog, gan leihau meintiau’r bwndeli cychwynnol 75–90%.
- **Ailgynllunio’r teclyn sgwrs** — mae eicon AI unedig yn disodli’r avatar personol blaenorol; yn gyson â’r system asiantau mewnol.
- **Troi URLau yn ddolenni** — mae URLau sy’n ymddangos mewn negeseuon system a swigod negeseuon gwall bellach yn cael eu rendro fel dolenni cliciadwy.

### Wedi’i drwsio {#fixed}

- **Canfyddadwyedd galluoedd** — cywirwyd disgrifiadau, cyfeiriadau system prompt, ac aliniad namespace fel bod pob gallu’n ymddangos yn rhestr offer yr asiant yn ddibynadwy.
- **Cache darparwyr** — mae darparwyr bellach yn cael eu cacheio ar draws y safle drwy gownter fersiwn, gan atal problemau darparwyr hen ar rwydweithiau multisite.
- **`ability_invalid_output`** — wedi’i ddatrys ar draws 12 trinnydd gallu; mae pob un yn dychwelyd ymatebion JSON wedi’u strwythuro’n gywir.
- **Piblinell `pending_client_tool_calls`** — wedi’i gwifro o’r dechrau i’r diwedd fel bod galwadau offer ar ochr y cleient yn cwblhau’n gywir ac yn dychwelyd canlyniadau i’r model.
- **Drôr hanes** — mae newidiadau na ellir eu gwrthdroi wedi’u heithrio o’r rhestr gwrthdroi; mae’r ddolen **Gweld yr hanes llawn** bellach yn gweithio’n gywir.
- **System newidiadau/gwrthdroi** — trwsiwyd pum nam ar wahân a’u huno o dan y rhyngwyneb gweinyddol newydd.
- **Hysbysiad toast Cadw Gosodiadau** — mae hysbysiad snackbar bellach yn ymddangos yn ddibynadwy ar ôl clicio **Cadw Gosodiadau**.
- **Dewislen gyd-destun sbwriel** — ychwanegwyd opsiwn **Dileu’n Barhaol** fel y gellir dileu eitemau’n llwyr heb adael golwg y sbwriel.
- **Golygu ac ail-anfon** — mae clicio’r eicon golygu bellach yn mynd i’r modd golygu ar gyfer y neges a gliciwyd yn unig, nid pob neges yn yr edefyn.
- **Uchder cynllun sgwrs** — mae’r panel sgwrs yn addasu ei uchder pan fydd cynnwys wedi’i chwistrellu gan plugin (hysbysiadau gweinyddol, baneri) yn ymddangos uwchben y dudalen, gan atal yr ardal fewnbwn rhag cael ei gwthio oddi ar y sgrin.

---

## 1.4.0 — Rhyddhawyd ar 2026-04-09 {#140--released-on-2026-04-09}

### Newydd {#new-1}

- **Gorchymyn benchmark WP-CLI** (`wp gratis-ai-agent benchmark`) — yn rhedeg cyfres benchmark Agent Capabilities v1 o’r llinell orchymyn ar gyfer piblinellau CI a llifoedd gwaith gwerthuso modelau. Yn cefnogi rhediadau fesul cwestiwn, diystyriadau darparwr/model, ac allbwn JSON/CSV.
- **Cyfres benchmark Agent Capabilities v1** — set strwythuredig o ysgogiadau cymhleth, aml-gam sy’n profi arwyneb llawn y gallu, gyda sgorio ac adrodd ar docynnau/hyd.
- **Galluoedd Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Mae cofrestriadau’n parhau ar draws ailgychwyniadau drwy’r tabl opsiynau.
- **Galluoedd Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Yn cefnogi tacsonomïau hierarchaidd a gwastad gyda slugiau ailysgrifennu dewisol.
- **Galluoedd System Ddylunio** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Yn cynnwys pum rhagosodiad wedi’u curadu: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Galluoedd Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Yn darllen ac yn ysgrifennu gwerthoedd theme.json drwy API Global Styles WordPress.
- **Gallu rheoli Dewislen Lywio** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Yn cefnogi dewislenni nythol ac aseinio lleoliad theme.
- **Gallu Rheoli Opsiynau** — `get_option`, `set_option`, `delete_option`, `list_options`. Yn cynnwys rhestr flocio ddiogelwch fewnol sy’n diogelu opsiynau WordPress hanfodol rhag cael eu haddasu.
- **Cofrestrfa Galluoedd Gosodadwy** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Darganfyddwch ac actifadu pecynnau galluoedd a ddosberthir fel pluginau WordPress.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Cynlluniau adeiladu safle aml-gam gyda darganfod pluginau, cyfeiriadau allbwn camau, olrhain cynnydd, ac adfer gwallau ymreolaethol.
- **Cwestiwn benchmark gwefan bwyty** (`q-restaurant-website`) — prawf o’r dechrau i’r diwedd sy’n cwmpasu cofrestru CPT, system ddylunio, llywio, a darganfod pluginau.
- **Pluginau cysylltydd darparwr AI** wedi’u hychwanegu at blueprints WordPress Playground ar gyfer gosod datblygu lleol yn gyflymach.

### Wedi’i wella {#improved-1}

- README wedi’i ddiweddaru gyda dogfennaeth cysylltydd darparwr AI a chyfarwyddiadau gosod.

### Wedi’i drwsio {#fixed-1}

- Datryswyd 25 methiant prawf PHPUnit ar gangen `main`.
- Cywirwyd fformat URL rhyddhau GitHub yn `blueprint.json`.
- Ailrifo IDau tasgau i osgoi gwrthdrawiadau ag IDau hen.

---

## 1.3.x {#13x}

_Mae nodiadau rhyddhau blaenorol yn cael eu cynnal yng nghadwrfa’r plugin._
