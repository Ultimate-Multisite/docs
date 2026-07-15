---
title: Innebygde agenter
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Innebygde agenter

Gratis AI Agent v1.9.0 leveres med fem innebygde agenter, hver forhåndskonfigurert med et fokusert sett med verktøy, en tilpasset systemprompt og startforslag som passer til vanlige oppgaver innenfor det området. Å bytte mellom agenter endrer hva assistenten kan gjøre og hvordan den svarer — uten noen konfigurasjon fra din side. Superdav AI Agent v1.18.0 kan legge til tidsplanbevisste verktøy, påminnelsesoppføringer, godkjenningsporter og SMS-varsler i disse arbeidsflytene når de relaterte integrasjonene er konfigurert.

## Hva er en agent? {#what-is-an-agent}

Hver agent er en navngitt konfigurasjonsprofil som kombinerer:

- **Verktøy** — evnene agenten har lov til å bruke (f.eks. har en innholdsforfatter tilgang til evner for oppretting av innlegg; et Design Studio har tilgang til CSS- og theme.json-evner)
- **Systemprompt** — instruksjoner som angir agentens tone, prioriteringer og begrensninger
- **Forslag** — forhåndsskrevne prompter som vises i chattegrensesnittet for å hjelpe deg raskt i gang

## Tilgang til agentvelgeren {#accessing-the-agent-picker}

1. Åpne **Gratis AI Agent**-panelet i WordPress-adminsidefeltet.
2. Klikk på **agentikonet** øverst til venstre i chatteoverskriften (ikonet endres for å gjenspeile den aktive agenten).
3. **Agentvelgeren** åpnes som et skjema-tabell-overlegg. Hver agent er oppført med ikon, navn og en beskrivelse på én linje.
4. Klikk på en agentrad for å aktivere den. Chatteoverskriften oppdateres umiddelbart.

Du kan også bytte agenter midt i en samtale — den nye agentens systemprompt trer i kraft fra neste melding.

## De fem innebygde agentene {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Fokus:** Opprette og redigere innlegg, sider og kontaktskjemaer.

**Tilgjengelige verktøy:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Med Superdav AI Agent v1.18.0-integrasjoner aktivert kan konfigurert kalenderkontekst, godkjenningsporter, påminnelser og SMS-varslingsverktøy også være tilgjengelige for godkjente arbeidsflyter.

**Hva den gjør godt:**
- Utarbeide og publisere blogginnlegg fra en brief eller disposisjon
- Opprette grupper av landingssider for et nytt nettsted
- Bygge kontakt- og forespørselsskjemaer
- Sette fremhevede bilder på innlegg fra en URL eller et søk
- Utarbeide oppfølgingsmeldinger etter arrangementer fra konfigurert Google Calendar-kontekst, og deretter pause for godkjenning før varsler sendes

**Startforslag:**
- *Skriv et blogginnlegg på 500 ord om fordelene med WordPress multisite.*
- *Opprett en Om oss-, Tjenester- og Kontakt-side og publiser dem.*
- *Legg til et bookingforespørselsskjema på Kontakt-siden.*
- *Utarbeid en påminnelse for deltakere på morgendagens konfigurerte kalenderarrangement, og vent på godkjenning før du sender den.*

---

### Site Builder {#site-builder}

**Fokus:** Ende-til-ende-oppretting av nettsted fra én enkelt prompt.

**Tilgjengelige verktøy:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Med Superdav AI Agent v1.18.0 kan konfigurerte verktøy for administrerte tjenester, godkjenning, påminnelser, kalender og SMS være tilgjengelige der administratorer aktiverer dem.

**Hva den gjør godt:**
- Generere en flerfaset plan for bygging av nettsted for en beskrevet virksomhetstype
- Utføre hver fase autonomt — struktur, innhold, navigasjon, design
- Gjenopprette etter feil midt i planen uten å kreve manuell inngripen
- Installere anbefalte plugins som en del av byggingen
- Opprette kontaktskjemaer direkte fra chattegrensesnittet (Superdav AI Agent v1.10.0+)
- Koordinere lanseringspåminnelser eller deltakeroppfølging uten dupliserte varsler når godkjenningsporter og påminnelsesoppføringer er aktivert

**Startforslag:**
- *Bygg et porteføljenettsted for fotografering med en galleritype for innlegg, en bookingside og et kontaktskjema.*
- *Opprett et restaurantnettsted med en nettmeny, åpningstider og et forespørselsskjema for bordbestilling.*
- *Sett opp et nettsted for frilanskonsulentvirksomhet med tjenestesider, en porteføljeseksjon og en blogg.*
- *Legg til et kontaktskjema på Kontakt-siden ved hjelp av nettstedbyggeren.*
- *Etter at sjekklisten for nettstedlansering er godkjent, send en SMS-påminnelse til den konfigurerte interessentkontakten.*

---

### Design Studio {#design-studio}

**Fokus:** Visuell tilpasning — farger, typografi, CSS og blokkmønstre.

**Tilgjengelige verktøy:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Hva den gjør godt:**
- Bruke navngitte temaforhåndsinnstillinger (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Finjustere global typografi og fargepaletter via theme.json
- Injisere tilpasset CSS for merkevarespesifikke overstyringer
- Ta et skjermbilde av en side og gjennomgå den for designproblemer

**Startforslag:**
- *Bruk warm-editorial-forhåndsinnstillingen og sett deretter primærfargen til #2d6a4f.*
- *Ta et skjermbilde av forsiden og fortell meg hva du ville forbedret.*
- *Opprett et gjenbrukbart hero-blokkmønster med et heldekkende bakgrunnsbilde og sentrert overskrift.*

### Plugin Manager {#plugin-manager}

**Fokus:** Finne, installere og administrere WordPress plugins.

**Tilgjengelige verktøy:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Hva den gjør godt:**
- Anbefale den beste pluginen for et beskrevet bruksområde
- Installere evnepakker fra registeret
- Bla gjennom den tilgjengelige evnekatalogen etter kategori

**Startforslag:**
- *Hva er den beste pluginen for en medlemskatalog?*
- *Installer WooCommerce-evnepakken.*
- *Vis meg alle tilgjengelige evnepakker for netthandel.*

---

### Support Assistant {#support-assistant}

**Fokus:** Svare på spørsmål om nettstedsinnhold, innstillinger og WordPress-konfigurasjon.

**Tilgjengelige verktøy:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Dette gjør den godt:**
- Slår opp gjeldende nettstedinnstillinger og alternativer
- Forklarer hvilke innleggstyper, taksonomier og menyer som er konfigurert på nettstedet
- Svarer på spørsmål av typen «hva gjør denne innstillingen?» ved å lese aktive verdier
- Fungerer som et skrivebeskyttet diagnostikklag før endringer gjøres

**Startforslag:**
- *Hvilke plugins og innstillinger er aktive på dette nettstedet nå?*
- *List opp alle egendefinerte innleggstyper som er registrert på dette nettstedet.*
- *Hvilke navigasjonsmenyer finnes, og hvor er de tilordnet?*

---

## Superdav-automatiseringsintegrasjoner {#superdav-automation-integrations}

Når Superdav AI Agent v1.18.0-integrasjoner er konfigurert, kan innebygde agenter delta i tryggere automatiseringsarbeidsflyter som tar hensyn til tidsplaner:

- **Google Calendar-leseverktøy** lar agenter inspisere konfigurerte kalendere og hendelser før de utarbeider oppfølgingsarbeid.
- **Kontakt- og deltakertilordning** hjelper med å matche hendelsesdeltakere med WordPress-brukere eller kjente kontakter.
- **Godkjenningsporter for mennesker** setter sensitive handlinger på pause til en autorisert bruker går gjennom og bekrefter dem.
- **Påminnelsesoppføringer** forhindrer dupliserte varsler når planlagte jobber prøver på nytt eller gjentas.
- **TextBee SMS-varsler** sender konfigurerte tekstmeldinger bare når SMS-legitimasjon og arbeidsflyttillatelser er aktivert.

Anbefalt arbeidsflyt: be agenten om å forberede meldingen eller handlingen, gjennomgå godkjenningsforespørselen, og la deretter den godkjente handlingen fortsette. For gjentakende påminnelser bør deduplisering av påminnelser være aktivert, slik at samme hendelse eller kontakt ikke varsles gjentatte ganger.

---

## Tilpasse agenter {#customising-agents}

Hver innebygd agent kan utvides eller erstattes gjennom `gratis_ai_agent_agents`-filteret.

### Legge til en egendefinert systemprompt i en eksisterende agent {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrere en ny agent {#registering-a-new-agent}

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

Den nye agenten vises i agentvelgeren umiddelbart etter at filteret kjører.

### Fjerne en innebygd agent {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
