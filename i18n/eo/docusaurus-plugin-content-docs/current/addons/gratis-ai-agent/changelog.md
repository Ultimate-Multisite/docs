---
title: Ŝanĝprotokolo
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Ŝanĝoprotokolo {#changelog}

## 1.9.0 — Eldonita je 2026-04-28 {#190--released-on-2026-04-28}

### Novaĵoj {#new}

- **`create_contact_form` kapablo** — kreas kontaktformularon uzante la aktivan formularan kromprogramon (Contact Form 7, WPForms, Fluent Forms, aŭ Gravity Forms) kaj redonas mallongan kodon pretan por enkorpigi en ajnan afiŝon aŭ paĝon.
- **`set_featured_image` kapablo** — asignas elstaran bildon al afiŝo aŭ paĝo el ekzistanta aldonaĵa ID de la Aŭdvida Biblioteko aŭ el fora URL; aŭtomate importas la bildon kiam URL estas provizita.
- **`batch_create_posts` kapablo** — kreas plurajn afiŝojn per unu sola kapablovoko. Subtenas la samajn parametrojn kiel `create_post`, raportas sukceson/malsukceson por ĉiu afiŝo, kaj havas laŭvolan reĝimon `stop_on_error`.
- **Parametro `page_template`** — aldonita al `create_post` kaj `update_post`. Asignas PHP-paĝan ŝablondosieron (ekz. `page-full-width.php`) dum kreado aŭ ĝisdatigo. Transdonu malplenan ĉenon al `update_post` por revenigi al la defaŭlto de la temo.
- **Kapabloj por klientflankaj ekrankopioj** — `capture_screenshot`, `compare_screenshots`, kaj `review_page_design`. Kaptas plenajn aŭ vidujajn ekrankopiojn de vivaj paĝoj per servilflanka senkapa retumilo, montras diferencon inter du ekrankopioj, kaj ricevas AI-generitan dezajnorecenzon pri aranĝo, tipografio, koloro, kaj alirebleco.
- **Kvin enkonstruitaj agentoj** — Enhavverkisto, Reteja Konstruanto, Dezajna Studio, Kromprograma Administranto, kaj Subtena Asistanto. Ĉiu agento havas dediĉitan aron de iloj, adaptitan sisteman prompton, kaj komencajn sugestojn. Ŝaltebla per la nova **Elektilo de agentoj** en la babila kaplinio. Vidu [Enkonstruitaj Agentoj](../../user-guide/configuration/built-in-agents).
- **Funkciaj flagoj** — nova langeto **Agordoj → Funkciaj Flagoj** kun alirkontrolaj ŝaltiloj (limigi al administrantoj, limigi al retaj administrantoj, abonanta aliro, malŝalti por ne-membroj) kaj markaj opcioj (kaŝi piedlinian atribuon, propra agenta nomo, kaŝi agentan elektilon, uzi retejan ikonon kiel babilan avataron). Vidu [Agordoj de Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Restarigi lastan seancon** — la babila panelo nun aŭtomate reŝargas la plej freŝan konversacion ĉe paĝŝargo kaj ĉe malfermo de la fenestraĵo, tiel ke kunteksto neniam perdiĝas inter paĝnavigadoj.
- **Agoligiloj de kromprogramo** — rapidaj ligiloj al Agordoj kaj la Registro de Kapabloj nun aperas sur la ekrano **Kromprogramoj → Instalitaj Kromprogramoj** de WordPress sub la priskribo de la kromprogramo.

### Plibonigita {#improved}

- **Reprovo de bildfonto** — la agento nun reprovas ĉiujn agorditajn senpagajn bildfontojn antaŭ ol rezigni al AI-generita bildo ĉe elŝuta malsukceso.
- **Panelo de modelaj informoj** — ĉiam videbla en la babila kaplinio; ne plu kaŝita post la unua mesaĝo.
- **Aŭtomata ruluma konduto** — aŭtomata rulumado paŭzas kiam la uzanto rulumas supren por legi; flosanta butono **Rulumi al la malsupro** aperas kaj aŭtomate malaperas kiam la uzanto atingas la plej lastan mesaĝon.
- **UI de Elektilo de agentoj** — redezajnita kiel formular-tabela supermeto kun ikonoj por ĉiu agento, faciligante identigi kaj ŝanĝi agentojn je ekrigardo.
- **Pigre ŝargataj JS-pecoj** — la komenca JavaScript-pakaĵo de la babila fenestraĵo nun estas dividita en pigre ŝargatajn pecojn, reduktante la komencajn pakaĵgrandecojn je 75–90%.
- **Redezajno de babila fenestraĵo** — unuigita AI-ikono anstataŭas la antaŭan propran avataron; kongrua kun la enkonstruita agentsistemo.
- **URL-ligigado** — URL-oj aperantaj en sistemaj mesaĝoj kaj erarmesaĝaj vezikoj nun estas montrataj kiel alklakeblaj ligiloj.

### Korektita {#fixed}

- **Malkovrebleco de kapabloj** — korektitaj priskriboj, sistemaj promptaj referencoj, kaj nomspaca akordigo por ke ĉiuj kapabloj aperu fidinde en la illisto de la agento.
- **Kaŝmemoro de provizantoj** — provizantoj nun estas kaŝmemoritaj tutreteje per versiokalkulilo, malhelpante problemojn de malaktualaj provizantoj en plurretejaj retoj.
- **`ability_invalid_output`** — solvita tra 12 kapablaj pritraktiloj; ĉiuj redonas ĝuste strukturitajn JSON-respondojn.
- **`pending_client_tool_calls` dukto** — konektita de fino al fino por ke klientflankaj ilvokoj ĝuste kompletiĝu kaj redonu rezultojn al la modelo.
- **Historia tirkesto** — ne-revenigeblaj ŝanĝoj estas ekskluditaj el la reveniglisto; la ligilo **Vidi plenan historion** nun funkcias ĝuste.
- **Sistemo de ŝanĝoj/revenigo** — kvin apartaj cimoj korektitaj kaj unuigitaj sub la nova administra interfaco.
- **Sciigo pri Konservi Agordojn** — snackbar-sciigo nun aperas fidinde post alklako de **Konservi Agordojn**.
- **Kunteksta menuo de rubujo** — aldonita opcio **Forigi Konstante** por ke eroj povu esti definitive forigitaj sen forlasi la rubujan vidon.
- **Redakti kaj resendi** — alklako de la redakta ikono nun eniras redaktan reĝimon nur por la alklakita mesaĝo, ne por ĉiuj mesaĝoj en la fadeno.
- **Alteco de babila aranĝo** — la babila panelo adaptas sian altecon kiam enhavo injektita de kromprogramo (administraj sciigoj, rubandoj) aperas super la paĝo, malhelpante ke la eniga areo estu puŝita ekster la ekrano.

---

## 1.4.0 — Eldonita je 2026-04-09 {#140--released-on-2026-04-09}

### Novaĵoj {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — rulas la Agent Capabilities v1 benchmark suite el la komandlinio por CI-duktoj kaj laborfluoj de modelo-taksado. Subtenas laŭdemande laŭ-demando-rulojn, anstataŭigojn de provider/model, kaj JSON/CSV-eligon.
- **Agent Capabilities v1 benchmark suite** — strukturita aro de kompleksaj, plurpaŝaj instigoj, kiuj ekzercas la plenan surfacon de kapabloj, kun poentado kaj raportado pri tokenoj/daŭro.
- **Kapabloj de Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Registradoj persistas trans restartoj per la tabelo de opcioj.
- **Kapabloj de Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Subtenas hierarkiajn kaj platajn taksonomiojn kun laŭvolaj rewrite-slugoj.
- **Kapabloj de Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Inkluzivas kvin zorge elektitajn antaŭagordojn: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Kapabloj de Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Legas kaj skribas theme.json-valorojn per la WordPress Global Styles API.
- **Kapablo por mastrumado de Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Subtenas nestitajn menuojn kaj atribuon de theme-loko.
- **Kapablo por Options Management** — `get_option`, `set_option`, `delete_option`, `list_options`. Inkluzivas enkonstruitan sekurecan blokliston, kiu protektas kritikajn WordPress-opciojn kontraŭ modifo.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Malkovru kaj aktivigu kapablopakaĵojn distribuitajn kiel WordPress plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Plurfazaj site-konstruaj planoj kun plugin-malkovro, referencoj al paŝaj eligoj, progreso-spurado, kaj aŭtonoma erar-reakiro.
- **Benchmark-demando pri restoracia retejo** (`q-restaurant-website`) — kompleta dekomenca-ĝis-fina testo kovranta CPT-registradon, dezajnan sistemon, navigadon, kaj plugin-malkovron.
- **AI provider connector plugins** aldonitaj al WordPress Playground-skizoj por pli rapida loka disvolva agordo.

### Plibonigita {#improved-1}

- README ĝisdatigita kun dokumentaro pri AI provider connector kaj agordaj instrukcioj.

### Riparita {#fixed-1}

- 25 PHPUnit-testaj malsukcesoj en la branĉo `main` solvitaj.
- Formato de GitHub releases URL en `blueprint.json` korektita.
- Renumerado de taskaj ID-oj por eviti koliziojn kun malnovaj ID-oj.

---

## 1.3.x {#13x}

_Antaŭaj eldonaj notoj estas konservataj en la plugin-deponejo._
