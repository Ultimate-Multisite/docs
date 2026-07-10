---
title: Üýtgeşmeler sanawy
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Üýtgeşmeler gündeligi {#changelog}

## 1.9.0 — 2026-04-28 senesinde çykaryldy {#190--released-on-2026-04-28}

### Täze {#new}

- **`create_contact_form` ukyby** — işjeň forma plugin-ini (Contact Form 7, WPForms, Fluent Forms ýa-da Gravity Forms) ulanyp habarlaşma formasyny döredýär we islendik ýazga ýa-da sahypa ýerleşdirmäge taýýar shortcode gaýtarýar.
- **`set_featured_image` ukyby** — bar bolan Media Library goşundysynyň ID-si ýa-da uzakdaky URL arkaly ýazga ýa-da sahypa esasy surat belleýär; URL berilende suraty awtomatiki import edýär.
- **`batch_create_posts` ukyby** — bir ukybyň çagyryşynda birnäçe ýazgy döredýär. `create_post` bilen birmeňzeş parametrleri goldaýar, her ýazgy boýunça üstünlik/şowsuzlyk barada hasabat berýär we goşmaça `stop_on_error` tertibi bar.
- **`page_template` parametri** — `create_post` we `update_post`-a goşuldy. Döretmek ýa-da täzelemek wagtynda PHP sahypa şablon faýlyny (meselem, `page-full-width.php`) belleýär. Theme-iň deslapky görnüşine gaýdyp gelmek üçin `update_post`-a boş setir geçiriň.
- **Müşderi tarapyndaky ekran suraty ukyplary** — `capture_screenshot`, `compare_screenshots` we `review_page_design`. Serwer tarapyndaky headless brauzer arkaly janly sahypalaryň doly ýa-da viewport ekran suratlaryny alyň, iki ekran suratyny deňeşdiriň we ýerleşiş, tipografiýa, reňk hem-de elýeterlilik boýunça AI tarapyndan döredilen dizaýn synyny alyň.
- **Içinde gurlan bäş agent** — Content Writer, Site Builder, Design Studio, Plugin Manager we Support Assistant. Her agentiň özüne degişli gurallar toplumy, ýöriteleşdirilen ulgam prompt-y we başlangyç teklipleri bar. Chat sözbaşysyndaky täze **Agent Picker** arkaly çalşyryp bolýar. [Içinde gurlan agentlere](../../user-guide/configuration/built-in-agents) serediň.
- **Aýratynlyk baýdajyklary** — giriş gözegçiligi geçirijileri (diňe administratorlar üçin çäklendirmek, network adminler üçin çäklendirmek, subscriber giriş, agza däl ulanyjylar üçin öçürmek) we brending opsiýalary (aşaky atributiýany gizlemek, ýörite agent ady, agent picker-i gizlemek, sahypa nyşanyny chat awatary hökmünde ulanmak) bolan täze **Settings → Feature Flags** goýmasy. [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) serediň.
- **Soňky sessiýany dikeltmek** — chat paneli indi sahypa ýüklenende we widget açylanda iň soňky gepleşigi awtomatiki täzeden ýükleýär, şonuň üçin sahypalar arasyndaky geçişlerde kontekst hiç wagt ýitmeýär.
- **Plugin amal linkleri** — Settings we Abilities Registry üçin çalt linkler indi WordPress **Plugins → Installed Plugins** ekranynda plugin düşündirişiniň aşagynda peýda bolýar.

### Kämilleşdirildi {#improved}

- **Surat çeşmesini gaýtadan synanyşmak** — agent indi göçürip almak şowsuz bolanda AI tarapyndan döredilen surata geçmezden öň ähli sazlanan mugt surat çeşmelerini gaýtadan synap görýär.
- **Model maglumat paneli** — chat sözbaşysynda hemişe görünýär; indi ilkinji habardan soň gizlenmeýär.
- **Awtomatiki aşak süýşürme hereketi** — ulanyjy okamak üçin ýokary süýşürende awtomatiki aşak süýşürme duruzylýar; ýüzýän **Aşaga süýşür** düwmesi peýda bolýar we ulanyjy iň soňky habara ýetende awtomatiki ýapylýar.
- **Agent Picker UI** — her agent üçin nyşanlary bolan form-table örtügi hökmünde täzeden dizaýn edildi, bu agentleri bir seredişde tanamagy we çalyşmagy aňsatlaşdyrýar.
- **Ýalta ýüklenýän JS bölekleri** — chat widget-iniň başlangyç JavaScript toplumy indi ýalta ýüklenýän böleklere bölündi, bu başlangyç toplum ölçeglerini 75–90% azaldýar.
- **Chat widget täzeden dizaýny** — bitewi AI nyşany öňki ýörite awataryň ornuny tutýar; içinde gurlan agent ulgamy bilen yzygiderli.
- **URL linkleşdirme** — ulgam habarlarynda we säwlik habary köpürjiklerinde peýda bolýan URL-ler indi basyp bolýan linkler hökmünde görkezilýär.

### Düzedildi {#fixed}

- **Ukybyň tapylmagy** — ähli ukyplaryň agentiň gurallar sanawynda ygtybarly peýda bolmagy üçin düşündirişler, ulgam prompt salgylanmalary we namespace gabat gelmegi düzedildi.
- **Üstünlik berijiler keşi** — üstünlük berijiler indi wersiýa sanawy arkaly tutuş sahypa boýunça keşlenýär, bu multisite torlarynda könelen-üstünlük beriji meseleleriniň öňüni alýar.
- **`ability_invalid_output`** — 12 ukyby işleýjisinde çözüldi; hemmesi dogry gurluşly JSON jogaplaryny gaýtarýar.
- **`pending_client_tool_calls` akymy** — müşderi tarapyndaky gural çagyryşlarynyň dogry tamamlanmagy we netijeleriň modele gaýdyp berilmegi üçin başdan-aýaga baglandy.
- **Taryh çekmesi** — yzyna gaýtaryp bolmaýan üýtgeşmeler yzyna gaýtaryş sanawyndan aýryldy; **Doly taryhy gör** linki indi dogry işleýär.
- **Üýtgeşmeler/yzyna gaýtaryş ulgamy** — bäş aýry säwlik düzedildi we täze admin interfeýsiniň astynda birleşdirildi.
- **Settings-i sakla toast-y** — **Save Settings** basylandan soň snackbar habarnamasy indi ygtybarly peýda bolýar.
- **Trash kontekst menýusy** — zatlary trash görnüşinden çykman hemişelik pozmak üçin **Hemişelik poz** opsiýasy goşuldy.
- **Redaktirle we gaýtadan iber** — redaktirleme nyşanyna basmak indi sapakdaky ähli habarlary däl-de, diňe basylan habary redaktirleme tertibine geçirýär.
- **Chat ýerleşiş beýikligi** — plugin tarapyndan girizilen mazmun (admin bildirişleri, bannerler) sahypanyň ýokarsynda peýda bolanda chat paneli beýikligini uýgunlaşdyrýar, bu giriş meýdanynyň ekrandan daşyna iteklenmeginiň öňüni alýar.

---

## 1.4.0 — 2026-04-09 senesinde çykaryldy {#140--released-on-2026-04-09}

### Täze {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — CI pipelines we model bahalandyrma iş akymlary üçin buýruk setirinden Agent Capabilities v1 benchmark toplumyny işledýär. Her sorag boýunça işledişleri, provider/model çalşyrmalaryny we JSON/CSV çykyşyny goldaýar.
- **Agent Capabilities v1 benchmark toplumy** — bahalandyrma we token/dowamlylyk hasabaty bilen, doly ukyp gerimini synaýan çylşyrymly, köp ädimli promptlaryň gurluşly toplumy.
- **Custom Post Type ukyplary** — `register_post_type`, `list_post_types`, `delete_post_type`. Bellige alyşlar options tablisasy arkaly täzeden başladyşlaryň arasynda saklanýar.
- **Custom Taxonomy ukyplary** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Islege bagly rewrite sluglary bilen ierarhiýaly we tekiz taksonomiýalary goldaýar.
- **Design System ukyplary** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Bäş sany saýlanyp taýýarlanan preseti öz içine alýar: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles ukyplary** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. theme.json bahalaryny WordPress Global Styles API arkaly okaýar we ýazýar.
- **Navigasiýa Menu dolandyryş ukyby** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Iç-içe menýulary we tema ýerleşiş belligini goldaýar.
- **Options Management ukyby** — `get_option`, `set_option`, `delete_option`, `list_options`. Möhüm WordPress opsiýalaryny üýtgetmekden goraýan içerki howpsuzlyk blocklist-i öz içine alýar.
- **Gurnalyp bolýan Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. WordPress pluginleri hökmünde paýlanýan ukyp paketlerini tapyň we işjeňleşdiriň.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Plugin tapmak, ädim çykyş salgylanmalary, ösüşi yzarlamak we awtonom ýalňyş dikeltmek bilen köp tapgyrly saýt gurmak planlary.
- **Restoran web sahypasy benchmark soragy** (`q-restaurant-website`) — CPT bellige almak, design system, navigasiýa we plugin tapmagy öz içine alýan başdan-aýak test.
- Has çalt ýerli işläp düzme sazlamasy üçin WordPress Playground blueprintlerine **AI provider connector pluginleri** goşuldy.

### Kämilleşdirildi {#improved-1}

- README AI provider connector resminamalary we sazlama görkezmeleri bilen täzelendi.

### Düzedildi {#fixed-1}

- `main` şahasyndaky 25 PHPUnit test şowsuzlygy çözüldi.
- `blueprint.json` içindäki GitHub releases URL formaty düzedildi.
- Köne ID-ler bilen çaknyşmalaryň öňüni almak üçin Task ID täzeden belgilemesi.

---

## 1.3.x {#13x}

_Öňki release bellikleri plugin repozitoriýasynda saklanýar._
