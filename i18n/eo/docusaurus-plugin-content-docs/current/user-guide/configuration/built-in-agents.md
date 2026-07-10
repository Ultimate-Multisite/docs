---
title: Enkonstruitaj Agentoj
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Enkonstruitaj agentoj {#built-in-agents}

Gratis AI Agent v1.9.0 liveras kvin enkonstruitajn agentojn, ĉiu antaŭagordita kun fokusita aro de iloj, adaptita sistema instrukcio, kaj komencaj sugestoj kongruaj kun oftaj taskoj en tiu areo. Ŝanĝi inter agentoj ŝanĝas tion, kion la asistanto povas fari kaj kiel ĝi respondas — sen ajna agordo viaflanke. Superdav AI Agent v1.18.0 povas aldoni horar-konsciajn ilojn, rememorigaĵajn registrojn, aprobajn pordojn, kaj SMS-sciigojn al ĉi tiuj laborfluoj kiam la rilataj integriĝoj estas agorditaj.

## Kio Estas Agento? {#what-is-an-agent}

Ĉiu agento estas nomita agorda profilo, kiu kombinas:

- **Iloj** — la kapabloj, kiujn la agento rajtas alvoki (ekz. Enhavoverkisto havas aliron al afiŝ-kreaj kapabloj; Dezajna Studio havas aliron al CSS- kaj theme.json-kapabloj)
- **Sistema instrukcio** — instrukcioj, kiuj difinas la tonon, prioritatojn, kaj limojn de la agento
- **Sugestoj** — antaŭskribitaj petoj montrataj en la babila interfaco por helpi vin rapide komenci

## Aliri la Elektilon de Agentoj {#accessing-the-agent-picker}

1. Malfermu la panelon **Gratis AI Agent** en la administra flankobreto de WordPress.
2. Alklaku la **agentan piktogramon** supre maldekstre en la babila kaplinio (la piktogramo ŝanĝiĝas por reflekti la aktivan agenton).
3. La **Elektilo de Agentoj** malfermiĝas kiel formular-tabela surmetaĵo. Ĉiu agento estas listigita kun sia piktogramo, nomo, kaj unulinia priskribo.
4. Alklaku agentan vicon por aktivigi ĝin. La babila kaplinio tuj ĝisdatiĝas.

Vi ankaŭ povas ŝanĝi agentojn meze de konversacio — la sistema instrukcio de la nova agento ekvalidas de la sekva mesaĝo.

## La Kvin Enkonstruitaj Agentoj {#the-five-built-in-agents}

### Enhavoverkisto {#content-writer}

**Fokuso:** Krei kaj redakti afiŝojn, paĝojn, kaj kontaktformularojn.

**Disponeblaj iloj:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Kun integriĝoj de Superdav AI Agent v1.18.0 ebligitaj, agordita kalendara kunteksto, aprobaj pordoj, rememorigaĵoj, kaj SMS-sciigaj iloj ankaŭ povas esti disponeblaj por aprobitaj laborfluoj.

**Kion ĝi bone faras:**
- Verki kaj publikigi blogafiŝojn el koncizo aŭ skizo
- Krei arojn de celpaĝoj por nova retejo
- Konstrui kontaktajn kaj informpetajn formularojn
- Agordi elstarigitajn bildojn ĉe afiŝoj el URL aŭ serĉo
- Verki post-eventajn sekvajn mesaĝojn el agordita Google Calendar-kunteksto, poste paŭzi por aprobo antaŭ ol sendi sciigojn

**Komencaj sugestoj:**
- *Verku 500-vortan blogafiŝon pri la avantaĝoj de WordPress multretejo.*
- *Kreu paĝojn Pri Ni, Servoj, kaj Kontakto kaj publikigu ilin.*
- *Aldonu rezervan informpetan formularon al la paĝo Kontakto.*
- *Verku rememorigilon por partoprenantoj de la morgaŭa agordita kalendara evento kaj atendu aprobon antaŭ ol sendi ĝin.*

---

### Reteja Konstruisto {#site-builder}

**Fokuso:** Fina-al-fina reteja kreado el unu sola peto.

**Disponeblaj iloj:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Kun Superdav AI Agent v1.18.0, agorditaj administrata-servo, aprobo, rememorigaĵo, kalendaro, kaj SMS-iloj povas esti disponeblaj kie administrantoj ebligas ilin.

**Kion ĝi bone faras:**
- Generi plurfazan retejo-konstruan planon por priskribita komerca tipo
- Efektivigi ĉiun fazon aŭtonome — strukturo, enhavo, navigado, dezajno
- Resaniĝi post eraroj meze de plano sen postuli manan intervenon
- Instali rekomenditajn kromprogramojn kiel parto de la konstruo
- Krei kontaktformularojn rekte el la babila interfaco (Superdav AI Agent v1.10.0+)
- Kunordigi lanĉajn rememorigilojn aŭ partoprenantajn sekvajn mesaĝojn sen duobligitaj sciigoj kiam aprobaj pordoj kaj rememorigaĵaj registroj estas ebligitaj

**Komencaj sugestoj:**
- *Konstruu fotografian portfolian retejon kun galeria afiŝotipo, rezerva paĝo, kaj kontaktformularo.*
- *Kreu restoracian retejon kun reta menuo, malfermaj horoj, kaj tablo-rezerva informpeta formularo.*
- *Agordu sendependan konsultan retejon kun servaj paĝoj, portfolia sekcio, kaj blogo.*
- *Aldonu kontaktformularon al la paĝo Kontakto uzante la retejan konstruiston.*
- *Post kiam la reteja lanĉa kontrol-listo estas aprobita, sendu SMS-rememorigilon al la agordita koncernata kontakto.*

---

### Dezajna Studio {#design-studio}

**Fokuso:** Vida personigo — koloroj, tipografio, CSS, kaj blokaj ŝablonoj.

**Disponeblaj iloj:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Kion ĝi bone faras:**
- Apliki nomitajn etosajn antaŭagordojn (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Fine agordi tutretejan tipografion kaj kolorpaletrojn per theme.json
- Enmeti propran CSS por marko-specifaj anstataŭigoj
- Preni ekrankopion de paĝo kaj revizii ĝin por dezajnaj problemoj

**Komencaj sugestoj:**
- *Apliku la antaŭagordon warm-editorial kaj poste agordu la ĉefan koloron al #2d6a4f.*
- *Prenu ekrankopion de la hejmpaĝo kaj diru al mi, kion vi plibonigus.*
- *Kreu reuzeblan heroan blokan ŝablonon kun plenlarĝa fona bildo kaj centrigita titolo.*

### Kromprograma Administranto {#plugin-manager}

**Fokuso:** Malkovri, instali, kaj administri WordPress-kromprogramojn.

**Disponeblaj iloj:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Kion ĝi bone faras:**
- Rekomendi la plej bonan kromprogramon por priskribita uzokazo
- Instali kapablopakaĵojn el la registro
- Foliumi la disponeblan katalogon de kapabloj laŭ kategorio

**Komencaj sugestoj:**
- *Kio estas la plej bona kromprogramo por membreca dosierujo?*
- *Instalu la kapablopakaĵon de WooCommerce.*
- *Montru al mi ĉiujn disponeblajn retkomercajn kapablopakaĵojn.*

---

### Subtena Asistanto {#support-assistant}

**Fokuso:** Respondi demandojn pri reteja enhavo, agordoj, kaj WordPress-agordo.

**Disponeblaj iloj:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Kion ĝi faras bone:**
- Serĉi aktualajn agordojn kaj opciojn de la retejo
- Klarigi kiuj afiŝotipoj, taksonomioj kaj menuoj estas agorditaj en la retejo
- Respondi demandojn de tipo "kion faras ĉi tiu agordo?" per legado de vivaj valoroj
- Servi kiel nurlega diagnoza tavolo antaŭ ol fari ŝanĝojn

**Komencaj sugestoj:**
- *Kiuj kromprogramoj kaj agordoj estas nuntempe aktivaj en ĉi tiu retejo?*
- *Listigu ĉiujn proprajn afiŝotipojn registritajn en ĉi tiu retejo.*
- *Kiuj navigaj menuoj ekzistas kaj kie ili estas asignitaj?*

---

## Superdav Aŭtomatigaj Integriĝoj {#superdav-automation-integrations}

Kiam integriĝoj de Superdav AI Agent v1.18.0 estas agorditaj, enkonstruitaj agentoj povas partopreni en pli sekuraj aŭtomatigaj laborfluoj konsciaj pri horaro:

- **Legiloj de Google Calendar** permesas al agentoj inspekti agorditajn kalendarojn kaj eventojn antaŭ ol verki sekvan laboron.
- **Mapado de kontaktoj kaj ĉeestantoj** helpas kongruigi eventajn partoprenantojn kun WordPress uzantoj aŭ konataj kontaktoj.
- **Homaj aprobopordegoj** paŭzigas sentemajn agojn ĝis rajtigita uzanto revizias kaj konfirmas ilin.
- **Memorigaj registroj** malhelpas duoblajn sciigojn kiam planitaj taskoj reprovas aŭ ripetiĝas.
- **TextBee SMS sciigoj** sendas agorditajn tekstmesaĝojn nur kiam SMS-akreditaĵoj kaj laborfluaj permesoj estas ebligitaj.

Rekomendita laborfluo: petu la agenton prepari la mesaĝon aŭ agon, reviziu la aproban inviton, poste permesu al la aprobita ago rekomenciĝi. Por ripetiĝantaj memorigiloj, tenu memorigilan malduobligon ebligita por ke la sama evento aŭ kontakto ne estu sciigita plurfoje.

---

## Agordigo de Agentoj {#customising-agents}

Ĉiu enkonstruita agento povas esti etendita aŭ anstataŭigita per la filtro `gratis_ai_agent_agents`.

### Aldoni propran sisteman inviton al ekzistanta agento {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registri novan agenton {#registering-a-new-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

La nova agento aperas en la Agento-Elektilo tuj post kiam la filtro ruliĝas.

### Forigi enkonstruitan agenton {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
