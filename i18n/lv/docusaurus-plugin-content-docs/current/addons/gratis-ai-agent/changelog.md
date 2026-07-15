---
title: Izmaiņu žurnāls
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Izmaiņu žurnāls

## 1.9.0 — Izlaists 2026-04-28 {#190--released-on-2026-04-28}

### Jauns {#new}

- **`create_contact_form` spēja** — izveido kontaktformu, izmantojot aktīvo formu plugin (Contact Form 7, WPForms, Fluent Forms vai Gravity Forms), un atgriež shortcode, kas gatavs iegulšanai jebkurā ierakstā vai lapā.
- **`set_featured_image` spēja** — piešķir izcelto attēlu ierakstam vai lapai no esoša Media Library pielikuma ID vai attāla URL; automātiski importē attēlu, kad tiek norādīts URL.
- **`batch_create_posts` spēja** — izveido vairākus ierakstus vienā spējas izsaukumā. Atbalsta tos pašus parametrus kā `create_post`, ziņo par katra ieraksta veiksmīgu/neveiksmīgu izpildi, un tai ir izvēles `stop_on_error` režīms.
- **`page_template` parametrs** — pievienots `create_post` un `update_post`. Piešķir PHP lapas veidnes failu (piem., `page-full-width.php`) izveides vai atjaunināšanas laikā. Nododiet tukšu virkni `update_post`, lai atgrieztos pie theme noklusējuma.
- **Klienta puses ekrānuzņēmumu spējas** — `capture_screenshot`, `compare_screenshots` un `review_page_design`. Uzņem pilnas lapas vai skatloga ekrānuzņēmumus no aktīvām lapām, izmantojot servera puses headless pārlūku, salīdzina divus ekrānuzņēmumus un iegūst AI ģenerētu dizaina pārskatu, kas aptver izkārtojumu, tipogrāfiju, krāsu un pieejamību.
- **Pieci iebūvēti agent** — Content Writer, Site Builder, Design Studio, Plugin Manager un Support Assistant. Katram agent ir īpašs rīku kopums, pielāgota sistēmas uzvedne un sākuma ieteikumi. Pārslēdzams, izmantojot jauno **Agent Picker** tērzēšanas galvenē. Skatiet [Iebūvētie Agents](../../user-guide/configuration/built-in-agents).
- **Funkciju karodziņi** — jauna **Settings → Feature Flags** cilne ar piekļuves kontroles pārslēgiem (ierobežot administratoriem, ierobežot tīkla administratoriem, abonentu piekļuve, atspējot ne-dalībniekiem) un zīmolvedības opcijām (paslēpt kājenes atribūciju, pielāgots agent nosaukums, paslēpt agent picker, izmantot site ikonu kā tērzēšanas avataru). Skatiet [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Atjaunot pēdējo sesiju** — tērzēšanas panelis tagad automātiski atkārtoti ielādē pēdējo sarunu lapas ielādes laikā un atverot logrīku, tāpēc konteksts netiek zaudēts, pārvietojoties starp lapām.
- **Plugin darbību saites** — ātrās saites uz Settings un Abilities Registry tagad parādās WordPress **Plugins → Installed Plugins** ekrānā zem plugin apraksta.

### Uzlabots {#improved}

- **Attēla avota atkārtots mēģinājums** — agent tagad atkārtoti izmēģina visus konfigurētos bezmaksas attēlu avotus, pirms lejupielādes kļūmes gadījumā pāriet uz AI ģenerētu attēlu.
- **Modeļa informācijas panelis** — vienmēr redzams tērzēšanas galvenē; vairs netiek paslēpts pēc pirmās ziņas.
- **Automātiskās ritināšanas darbība** — automātiskā ritināšana tiek pauzēta, kad lietotājs ritina augšup, lai lasītu; parādās peldoša **Ritināt uz leju** poga, kas automātiski pazūd, kad lietotājs sasniedz jaunāko ziņu.
- **Agent Picker UI** — pārveidots kā form-table pārklājums ar katram agent paredzētām ikonām, padarot agent atpazīšanu un pārslēgšanu ērtāku vienā acu uzmetienā.
- **Lazy-loaded JS chunks** — tērzēšanas logrīka sākotnējais JavaScript komplekts tagad ir sadalīts lazy-loaded chunks, samazinot sākotnējo komplektu izmērus par 75–90%.
- **Tērzēšanas logrīka pārveide** — vienotā AI ikona aizstāj iepriekšējo pielāgoto avataru; saskaņota ar iebūvēto agent sistēmu.
- **URL pārvēršana saitēs** — URL, kas parādās sistēmas ziņās un kļūdu ziņojumu burbuļos, tagad tiek attēloti kā klikšķināmas saites.

### Labots {#fixed}

- **Spēju atrodamība** — izlaboti apraksti, sistēmas uzvedņu atsauces un namespace saskaņošana, lai visas spējas uzticami parādītos agent rīku sarakstā.
- **Providers kešatmiņa** — providers tagad tiek kešoti visa site mērogā, izmantojot versijas skaitītāju, novēršot novecojušu providers problēmas multisite tīklos.
- **`ability_invalid_output`** — novērsts 12 spēju apstrādātājos; visi atgriež pareizi strukturētas JSON atbildes.
- **`pending_client_tool_calls` konveijers** — savienots no sākuma līdz beigām, lai klienta puses rīku izsaukumi tiktu pabeigti pareizi un atgrieztu rezultātus modelim.
- **Vēstures atvilktne** — neatgriežamas izmaiņas ir izslēgtas no atgriešanas saraksta; **Skatīt pilnu vēsturi** saite tagad darbojas pareizi.
- **Izmaiņu/atgriešanas sistēma** — izlabotas piecas atsevišķas kļūdas un apvienotas jaunajā admin saskarnē.
- **Save Settings paziņojums** — snackbar paziņojums tagad uzticami parādās pēc noklikšķināšanas uz **Save Settings**.
- **Atkritnes konteksta izvēlne** — pievienota **Dzēst neatgriezeniski** opcija, lai vienumus varētu pilnībā dzēst, neatstājot atkritnes skatu.
- **Rediģēt un nosūtīt vēlreiz** — noklikšķinot uz rediģēšanas ikonas, tagad rediģēšanas režīms tiek aktivizēts tikai noklikšķinātajai ziņai, nevis visām pavediena ziņām.
- **Tērzēšanas izkārtojuma augstums** — tērzēšanas panelis pielāgo savu augstumu, kad virs lapas parādās plugin ievietots saturs (admin paziņojumi, baneri), novēršot ievades apgabala izstumšanu ārpus ekrāna.

---

## 1.4.0 — Izlaists 2026-04-09 {#140--released-on-2026-04-09}

### Jauns {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — palaiž Agent Capabilities v1 benchmark suite no komandrindas CI konveijeriem un modeļu novērtēšanas darbplūsmām. Atbalsta palaišanu pa atsevišķiem jautājumiem, provider/model pārrakstīšanu un JSON/CSV izvadi.
- **Agent Capabilities v1 benchmark suite** — strukturēts sarežģītu, daudzsoļu uzvedņu kopums, kas pārbauda visu spēju diapazonu, ar vērtēšanu un tokenu/ilguma pārskatiem.
- **Custom Post Type spējas** — `register_post_type`, `list_post_types`, `delete_post_type`. Reģistrācijas saglabājas starp restartiem, izmantojot opciju tabulu.
- **Custom Taxonomy spējas** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Atbalsta hierarhiskas un plakanas taksonomijas ar neobligātiem pārrakstīšanas slagiem.
- **Design System spējas** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Ietver piecus atlasītus sākotnējos iestatījumus: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles spējas** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Nolasa un raksta theme.json vērtības, izmantojot WordPress Global Styles API.
- **Navigation Menu pārvaldības spēja** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Atbalsta ligzdotas izvēlnes un theme atrašanās vietas piešķiršanu.
- **Options Management spēja** — `get_option`, `set_option`, `delete_option`, `list_options`. Ietver iebūvētu drošības bloķēšanas sarakstu, kas aizsargā kritiskas WordPress opcijas no modificēšanas.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Atklājiet un aktivizējiet spēju pakas, kas tiek izplatītas kā WordPress plugin.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Vairāku fāžu vietnes izveides plāni ar plugin atklāšanu, soļu izvades atsaucēm, progresa izsekošanu un autonomu kļūdu atkopšanu.
- **Restorāna tīmekļa vietnes benchmark jautājums** (`q-restaurant-website`) — pilns tests, kas aptver CPT reģistrāciju, dizaina sistēmu, navigāciju un plugin atklāšanu.
- **AI provider connector plugins** pievienoti WordPress Playground shēmām ātrākai lokālās izstrādes iestatīšanai.

### Uzlabots {#improved-1}

- README atjaunināts ar AI provider connector dokumentāciju un iestatīšanas instrukcijām.

### Labots {#fixed-1}

- Atrisinātas 25 PHPUnit testu kļūmes `main` zarā.
- Izlabots GitHub laidienu URL formāts `blueprint.json`.
- Uzdevumu ID pārnumurēšana, lai izvairītos no sadursmēm ar vecajiem ID.

---

## 1.3.x {#13x}

_Iepriekšējās laidiena piezīmes tiek uzturētas plugin repozitorijā._
