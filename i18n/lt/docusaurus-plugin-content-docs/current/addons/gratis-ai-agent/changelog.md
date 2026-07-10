---
title: Pakeitimų žurnalas
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Pakeitimų žurnalas {#changelog}

## 1.9.0 — Išleista 2026-04-28 {#190--released-on-2026-04-28}

### Nauja {#new}

- **`create_contact_form` galimybė** — sukuria kontaktinę formą naudodama aktyvų formų plugin (Contact Form 7, WPForms, Fluent Forms arba Gravity Forms) ir grąžina shortcode, paruoštą įterpti į bet kurį įrašą ar puslapį.
- **`set_featured_image` galimybė** — priskiria pagrindinį paveikslėlį įrašui arba puslapiui iš esamo Media Library priedo ID arba nuotolinio URL; automatiškai importuoja paveikslėlį, kai pateikiamas URL.
- **`batch_create_posts` galimybė** — sukuria kelis įrašus vienu galimybės iškvietimu. Palaiko tuos pačius parametrus kaip `create_post`, pateikia kiekvieno įrašo sėkmės / nesėkmės informaciją ir turi pasirenkamą `stop_on_error` režimą.
- **`page_template` parametras** — pridėtas prie `create_post` ir `update_post`. Sukūrimo arba atnaujinimo metu priskiria PHP puslapio šablono failą (pvz., `page-full-width.php`). Perduokite tuščią eilutę į `update_post`, kad grąžintumėte theme numatytąją reikšmę.
- **Kliento pusės ekrano kopijų galimybės** — `capture_screenshot`, `compare_screenshots` ir `review_page_design`. Užfiksuokite viso puslapio arba peržiūros srities ekrano kopijas iš veikiančių puslapių per serverio pusės headless naršyklę, palyginkite dvi ekrano kopijas ir gaukite AI sugeneruotą dizaino apžvalgą, apimančią išdėstymą, tipografiją, spalvas ir prieinamumą.
- **Penki įtaisytieji agentai** — Content Writer, Site Builder, Design Studio, Plugin Manager ir Support Assistant. Kiekvienas agentas turi atskirą įrankių rinkinį, pritaikytą sistemos prompt ir pradžios pasiūlymus. Perjungiama per naują **Agent Picker** pokalbio antraštėje. Žr. [Įtaisytieji agentai](../../user-guide/configuration/built-in-agents).
- **Funkcijų vėliavėlės** — naujas **Settings → Feature Flags** skirtukas su prieigos kontrolės perjungikliais (apriboti administratoriams, apriboti tinklo administratoriams, prenumeratorių prieiga, išjungti ne nariams) ir prekės ženklo parinktimis (slėpti poraštės priskyrimą, tinkintas agento pavadinimas, slėpti agentų parinkiklį, naudoti site piktogramą kaip pokalbio avatarą). Žr. [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Atkurti paskutinę sesiją** — pokalbio skydelis dabar automatiškai iš naujo įkelia naujausią pokalbį įkeliant puslapį ir atidarant valdiklį, todėl kontekstas niekada neprarandamas naršant tarp puslapių.
- **Plugin veiksmų nuorodos** — greitosios nuorodos į Settings ir Abilities Registry dabar rodomos WordPress **Plugins → Installed Plugins** ekrane po plugin aprašymu.

### Patobulinta {#improved}

- **Paveikslėlių šaltinio pakartotinis bandymas** — agentas dabar pakartotinai išbando visus sukonfigūruotus nemokamus paveikslėlių šaltinius prieš pereidamas prie AI sugeneruoto paveikslėlio, jei atsisiuntimas nepavyksta.
- **Modelio informacijos skydelis** — visada matomas pokalbio antraštėje; po pirmos žinutės nebepaslėpiamas.
- **Automatinio slinkimo elgsena** — automatinis slinkimas pristabdomas, kai naudotojas slenka aukštyn skaityti; pasirodo plaukiojantis mygtukas **Slinkti į apačią**, kuris automatiškai dingsta, kai naudotojas pasiekia naujausią žinutę.
- **Agent Picker UI** — perdaryta kaip formos lentelės perdanga su kiekvieno agento piktogramomis, todėl lengviau iš karto atpažinti ir perjungti agentus.
- **Tingiai įkeliami JS fragmentai** — pokalbio valdiklio pradinis JavaScript paketas dabar padalytas į tingiai įkeliamus fragmentus, sumažinant pradinius paketo dydžius 75–90 %.
- **Pokalbio valdiklio perdizainavimas** — ankstesnį tinkintą avatarą pakeičia suvienodinta AI piktograma; suderinta su įtaisytąja agentų sistema.
- **URL pavertimas nuorodomis** — URL, rodomi sistemos žinutėse ir klaidų pranešimų burbuluose, dabar atvaizduojami kaip spustelėjamos nuorodos.

### Ištaisyta {#fixed}

- **Galimybių aptinkamumas** — pataisyti aprašymai, sistemos prompt nuorodos ir vardų erdvės suderinimas, kad visos galimybės patikimai būtų rodomos agento įrankių sąraše.
- **Providers talpykla** — providers dabar talpinami viso site mastu per versijos skaitiklį, užkertant kelią pasenusių providers problemoms multisite tinkluose.
- **`ability_invalid_output`** — išspręsta 12 galimybių apdoroklių; visi grąžina tinkamai struktūrizuotus JSON atsakymus.
- **`pending_client_tool_calls` konvejeris** — sujungtas nuo pradžios iki galo, kad kliento pusės įrankių iškvietimai būtų užbaigiami teisingai ir grąžintų rezultatus modeliui.
- **Istorijos stalčius** — neatšaukiami pakeitimai neįtraukiami į atšaukimo sąrašą; nuoroda **Peržiūrėti visą istoriją** dabar veikia teisingai.
- **Pakeitimų / atšaukimo sistema** — ištaisytos penkios atskiros klaidos ir suvienodinta pagal naują administratoriaus sąsają.
- **Save Settings pranešimas** — snackbar pranešimas dabar patikimai pasirodo spustelėjus **Save Settings**.
- **Šiukšlinės kontekstinis meniu** — pridėta parinktis **Ištrinti visam laikui**, kad elementus būtų galima pašalinti nepaliekant šiukšlinės rodinio.
- **Redaguoti ir siųsti iš naujo** — spustelėjus redagavimo piktogramą, redagavimo režimas dabar įjungiamas tik spustelėtai žinutei, o ne visoms gijos žinutėms.
- **Pokalbio išdėstymo aukštis** — pokalbio skydelis pritaiko savo aukštį, kai virš puslapio atsiranda plugin įterptas turinys (administratoriaus pranešimai, reklamjuostės), neleisdamas įvesties sričiai būti išstumtai už ekrano ribų.

---

## 1.4.0 — Išleista 2026-04-09 {#140--released-on-2026-04-09}

### Nauja {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — paleidžia Agent Capabilities v1 benchmark suite iš komandinės eilutės CI konvejeriams ir modelių vertinimo darbo eigoms. Palaiko paleidimus pagal atskirus klausimus, provider/model perrašymus ir JSON/CSV išvestį.
- **Agent Capabilities v1 benchmark suite** — struktūruotas sudėtingų, kelių žingsnių promptų rinkinys, išbandantis visą gebėjimų spektrą, su vertinimu ir tokenų / trukmės ataskaitomis.
- **Custom Post Type gebėjimai** — `register_post_type`, `list_post_types`, `delete_post_type`. Registracijos išlieka po paleidimų iš naujo per parinkčių lentelę.
- **Custom Taxonomy gebėjimai** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Palaiko hierarchines ir plokščias taksonomijas su pasirenkamais perrašymo slugais.
- **Design System gebėjimai** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Apima penkis atrinktus išankstinius nustatymus: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles gebėjimai** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Skaito ir rašo theme.json reikšmes per WordPress Global Styles API.
- **Navigation Menu valdymo gebėjimas** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Palaiko įdėtuosius meniu ir theme vietos priskyrimą.
- **Options Management gebėjimas** — `get_option`, `set_option`, `delete_option`, `list_options`. Apima integruotą saugos blokavimo sąrašą, apsaugantį kritines WordPress parinktis nuo keitimo.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Atraskite ir aktyvuokite gebėjimų paketus, platinamus kaip WordPress pluginai.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Kelių etapų svetainės kūrimo planai su pluginų paieška, žingsnių išvesties nuorodomis, pažangos stebėjimu ir autonominiu klaidų atkūrimu.
- **Restorano svetainės benchmark klausimas** (`q-restaurant-website`) — pilnas testas, apimantis CPT registraciją, dizaino sistemą, navigaciją ir pluginų paiešką.
- **AI provider connector pluginai** pridėti prie WordPress Playground blueprintų, kad vietinio kūrimo aplinka būtų paruošiama greičiau.

### Patobulinta {#improved-1}

- README atnaujintas su AI provider connector dokumentacija ir sąrankos instrukcijomis.

### Ištaisyta {#fixed-1}

- Išspręstos 25 PHPUnit testų nesėkmės `main` šakoje.
- Ištaisytas GitHub laidų URL formatas faile `blueprint.json`.
- Užduočių ID pernumeruoti, kad būtų išvengta susidūrimų su senais ID.

---

## 1.3.x {#13x}

_Ankstesnių laidų pastabos saugomos plugino saugykloje._
