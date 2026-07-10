---
title: Mbiri ya kusintha
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Mbiri ya zosintha {#changelog}

## 1.9.0 — Yatulutsidwa pa 2026-04-28 {#190--released-on-2026-04-28}

### Zatsopano {#new}

- **Luso la `create_contact_form`** — limapanga fomu yolumikizirana pogwiritsa ntchito plugin ya mafomu yomwe ikugwira ntchito (Contact Form 7, WPForms, Fluent Forms, kapena Gravity Forms) ndipo limabweza shortcode yokonzeka kuyikidwa mu cholemba kapena tsamba lililonse.
- **Luso la `set_featured_image`** — limasankha chithunzi chachikulu cha cholemba kapena tsamba kuchokera ku ID ya cholumikizira chomwe chilipo mu Media Library kapena URL yakutali; limalowetsa chithunzicho lokha pamene URL yaperekedwa.
- **Luso la `batch_create_posts`** — limapanga zolemba zingapo mu kuyitana kumodzi kwa luso. Limathandiza ma parameter omwewo monga `create_post`, limapereka lipoti la kupambana/kulephera pa cholemba chilichonse, ndipo lili ndi mode ya `stop_on_error` yosankha.
- **Parameter ya `page_template`** — yawonjezedwa ku `create_post` ndi `update_post`. Imasankha fayilo ya template ya tsamba la PHP (mwachitsanzo `page-full-width.php`) panthawi yopanga kapena yosinthira. Tumizani chingwe chopanda kanthu ku `update_post` kuti mubwerere ku yokhazikika ya theme.
- **Maluso a screenshot kumbali ya client** — `capture_screenshot`, `compare_screenshots`, ndi `review_page_design`. Jambulani ma screenshot athunthu kapena a viewport a masamba amoyo kudzera pa msakatuli wopanda mutu wa kumbali ya seva, yerekezerani ma screenshot awiri, ndipo pezani kuwunika kwa kapangidwe kopangidwa ndi AI komwe kumakhudza masanjidwe, typography, mtundu, ndi kupezeka.
- **Othandizira asanu omangidwa mkati** — Wolemba Zomwe Zili, Womanga Tsamba, Sitidiyo ya Kapangidwe, Woyang'anira Plugin, ndi Wothandizira Thandizo. Wothandizira aliyense ali ndi zida zake zapadera, system prompt yosinthidwa, ndi malingaliro oyambira. Zitha kusinthidwa kudzera mu **Chosankhira Wothandizira** chatsopano mu mutu wa macheza. Onani [Othandizira Omangidwa Mkati](../../user-guide/configuration/built-in-agents).
- **Mbendera za mawonekedwe** — tabu yatsopano ya **Settings → Mbendera za Mawonekedwe** yokhala ndi zosinthira za kuwongolera mwayi (kuchepetsa kwa oyang'anira, kuchepetsa kwa oyang'anira network, mwayi wa olembetsa, kuletsa kwa osakhala mamembala) ndi zosankha za branding (bisani chizindikiritso cha footer, dzina la wothandizira lokonda, bisani chosankhira wothandizira, gwiritsani ntchito chithunzi cha site ngati avatar ya macheza). Onani [Zokonda za Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Bwezeretsani gawo lomaliza** — paneli ya macheza tsopano imayikanso zokambirana zaposachedwa zokha pamene tsamba likuyamba komanso widget ikatsegulidwa, kotero context siyimatayika mukamayenda pakati pa masamba.
- **Ma link a zochita za plugin** — ma link achangu opita ku Settings ndi Abilities Registry tsopano amawoneka pa skrini ya WordPress **Plugins → Ma Plugin Oyikidwa** pansi pa kufotokozera kwa plugin.

### Zasinthidwa {#improved}

- **Kuyesanso gwero la chithunzi** — wothandizira tsopano amayesanso magwero onse aulere a zithunzi omwe akhazikitsidwa asanabwerere ku chithunzi chopangidwa ndi AI pakalephera kutsitsa.
- **Paneli ya zambiri za model** — nthawi zonse imawoneka mu mutu wa macheza; siisabisidwanso pambuyo pa uthenga woyamba.
- **Khalidwe la auto-scroll** — auto-scroll imayima kaye pamene wogwiritsa ntchito akukankhira mmwamba kuti awerenge; batani loyandama la **Kankhirani pansi** limawoneka ndipo limazimiririka lokha pamene wogwiritsa ntchito afika pa uthenga waposachedwa.
- **UI ya Chosankhira Wothandizira** — yakonzedwanso ngati form-table overlay yokhala ndi ma icon a wothandizira aliyense, kupangitsa kukhala kosavuta kuzindikira ndi kusintha othandizira mwachangu.
- **Ma chunk a JS omwe amalowetsedwa pang'onopang'ono** — bundle yoyambirira ya JavaScript ya widget ya macheza tsopano yagawidwa kukhala ma chunk omwe amalowetsedwa pang'onopang'ono, kuchepetsa kukula kwa ma bundle oyambirira ndi 75–90%.
- **Kukonzanso widget ya macheza** — icon ya AI yogwirizana imalowa m'malo mwa avatar yakale yokonda; ikugwirizana ndi dongosolo la wothandizira womangidwa mkati.
- **Kupanga ma URL kukhala ma link** — ma URL omwe amawoneka mu mauthenga a system ndi mabubble a mauthenga a zolakwika tsopano amawonetsedwa ngati ma link odina.

### Zakonzedwa {#fixed}

- **Kupezeka kwa maluso** — zakonzedwa zofotokozera, maumboni a system prompt, ndi kugwirizana kwa namespace kuti maluso onse aziwoneka mu mndandanda wa zida za wothandizira modalirika.
- **Cache ya providers** — providers tsopano amasungidwa mu cache pa site yonse kudzera mu kauntala ya mtundu, kupewa mavuto a stale-provider pa ma network a multisite.
- **`ability_invalid_output`** — yathetsedwa pa ma handler 12 a maluso; onse amabweretsa mayankho a JSON opangidwa bwino.
- **Pipeline ya `pending_client_tool_calls`** — yalumikizidwa kuyambira koyambira mpaka kumapeto kuti kuyitana kwa zida za kumbali ya client kumalizike bwino ndikubweza zotsatira ku model.
- **Drawer ya mbiri** — zosintha zosabwezeretseka sizikuphatikizidwa mu mndandanda wobwezeretsa; link ya **Onani mbiri yonse** tsopano imagwira ntchito bwino.
- **Dongosolo la zosintha/kubwezeretsa** — mabug asanu osiyana akonzedwa ndipo agwirizanitsidwa pansi pa mawonekedwe atsopano a admin.
- **Toast ya Sungani Settings** — chidziwitso cha snackbar tsopano chimawoneka modalirika mutadina **Sungani Settings**.
- **Menyu ya context ya zinyalala** — yawonjezera njira ya **Chotsani Kwamuyaya** kuti zinthu zichotsedwe kotheratu popanda kusiya mawonekedwe a zinyalala.
- **Sinthani & tumizanso** — kudina icon yosinthira tsopano kumalowa mu mode yosinthira kwa uthenga wodinidwawo wokha, osati mauthenga onse mu thread.
- **Kutalika kwa masanjidwe a macheza** — paneli ya macheza imasinthira kutalika kwake pamene zomwe zalowetsedwa ndi plugin (zidziwitso za admin, mabanner) ziwoneka pamwamba pa tsamba, kupewa dera lolowetsa kuti lisakankhidwe kunja kwa skrini.

---

## 1.4.0 — Yatulutsidwa pa 2026-04-09 {#140--released-on-2026-04-09}

### Zatsopano {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — imayendetsa gulu la mayeso la Agent Capabilities v1 kuchokera pa command line kwa CI pipelines ndi mayendedwe oyesera model. Imathandiza kuthamanga pa funso lililonse, kusintha provider/model, ndi zotuluka za JSON/CSV.
- **Agent Capabilities v1 benchmark suite** — gulu lokonzedwa la ma prompt ovuta, a masitepe angapo omwe amayesa luso lonse, ndi scoring komanso malipoti a token/nthawi.
- **Maluso a Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Kulembetsa kumakhalabe ngakhale mutayambitsanso kudzera mu tebulo la options.
- **Maluso a Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Imathandiza taxonomies za hierarchical ndi flat zokhala ndi rewrite slugs ngati mukufuna.
- **Maluso a Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Ikuphatikiza ma preset asanu osankhidwa bwino: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Maluso a Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Imawerenga ndi kulemba ma values a theme.json kudzera mu WordPress Global Styles API.
- **Luso loyang'anira Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Imathandiza ma menu okhala mkati mwa ena ndi kupatsa theme location.
- **Luso la Options Management** — `get_option`, `set_option`, `delete_option`, `list_options`. Lili ndi blocklist yomangidwa mkati yoteteza options zofunika za WordPress kuti zisasinthidwe.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Pezani ndi kuyambitsa mapaketi a maluso omwe amagawidwa ngati WordPress plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Mapulani omanga site a magawo angapo okhala ndi kupeza plugin, ma reference a zotuluka pa sitepe, kutsatira kupita patsogolo, ndi kukonza zolakwika modziyimira pawokha.
- **Funso la benchmark la tsamba la restaurant** (`q-restaurant-website`) — mayeso oyambira mpaka kumapeto okhudza kulembetsa CPT, design system, navigation, ndi kupeza plugin.
- **Ma plugin olumikizira AI provider** awonjezedwa ku WordPress Playground blueprints kuti kukhazikitsa chitukuko cha local kukhale kofulumira.

### Zakonzedwa bwino {#improved-1}

- README yasinthidwa ndi zolemba za AI provider connector ndi malangizo okhazikitsa.

### Zokonzedwa {#fixed-1}

- Zolephera 25 za mayeso a PHPUnit pa nthambi ya `main` zathetsedwa.
- Mtundu wa URL wa GitHub releases mu `blueprint.json` wakonzedwa.
- Kuwerengeranso Task ID kuti mupewe kugundana ndi ma ID akale.

---

## 1.3.x {#13x}

_Zolemba za kumasulidwa koyambirira zimasungidwa mu repository ya plugin._
