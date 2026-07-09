---
title: Indbyggede agenter
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Indbyggede agenter

Gratis AI Agent v1.9.0 leveres med fem indbyggede agenter, hver forudkonfigureret med et fokuseret sæt værktøjer, en tilpasset systemprompt og startforslag, der matcher almindelige opgaver inden for det område. Når du skifter mellem agenter, ændres det, assistenten kan gøre, og hvordan den svarer — uden nogen konfiguration fra din side. Superdav AI Agent v1.18.0 kan tilføje tidsplanbevidste værktøjer, påmindelsesposter, godkendelsesporte og SMS-notifikationer til disse arbejdsgange, når de relaterede integrationer er konfigureret.

## Hvad er en agent?

Hver agent er en navngiven konfigurationsprofil, der kombinerer:

- **Værktøjer** — de evner, agenten har tilladelse til at aktivere (f.eks. har en Content Writer adgang til evner til oprettelse af indlæg; en Design Studio har adgang til CSS- og theme.json-evner)
- **Systemprompt** — instruktioner, der fastlægger agentens tone, prioriteter og begrænsninger
- **Forslag** — forhåndsskrevne prompts, der vises i chatgrænsefladen for at hjælpe dig hurtigt i gang

## Adgang til agentvælgeren

1. Åbn **Gratis AI Agent**-panelet i WordPress-adminsidebjælken.
2. Klik på **agentikonet** øverst til venstre i chatoverskriften (ikonet ændres for at afspejle den aktive agent).
3. **Agent Picker** åbnes som en formular-tabel-overlejring. Hver agent vises med sit ikon, navn og en beskrivelse på én linje.
4. Klik på en agentrække for at aktivere den. Chatoverskriften opdateres med det samme.

Du kan også skifte agent midt i en samtale — den nye agents systemprompt træder i kraft fra den næste besked.

## De fem indbyggede agenter

### Content Writer

**Fokus:** Oprettelse og redigering af indlæg, sider og kontaktformularer.

**Tilgængelige værktøjer:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Med Superdav AI Agent v1.18.0-integrationer aktiveret kan konfigureret kalenderkontekst, godkendelsesporte, påmindelser og SMS-notifikationsværktøjer også være tilgængelige for godkendte arbejdsgange.

**Det gør den godt:**
- Udkast og publicering af blogindlæg ud fra en brief eller disposition
- Oprettelse af batches af landingssider til et nyt site
- Opbygning af kontakt- og forespørgselsformularer
- Indstilling af fremhævede billeder på indlæg fra en URL eller søgning
- Udkast til opfølgningsbeskeder efter begivenheder ud fra konfigureret Google Calendar-kontekst og derefter pause for godkendelse, før notifikationer sendes

**Startforslag:**
- *Skriv et blogindlæg på 500 ord om fordelene ved WordPress multisite.*
- *Opret en Om os-, Services- og Kontakt-side, og publicer dem.*
- *Tilføj en bookingforespørgselsformular til Kontakt-siden.*
- *Lav et udkast til en påmindelse til deltagere i morgendagens konfigurerede kalenderbegivenhed, og vent på godkendelse, før den sendes.*

---

### Site Builder

**Fokus:** Ende-til-ende-oprettelse af websites ud fra en enkelt prompt.

**Tilgængelige værktøjer:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Med Superdav AI Agent v1.18.0 kan konfigurerede managed-service-, godkendelses-, påmindelses-, kalender- og SMS-værktøjer være tilgængelige, hvor administratorer aktiverer dem.

**Det gør den godt:**
- Generering af en flerfaset plan for site-opbygning for en beskrevet virksomhedstype
- Udførelse af hver fase autonomt — struktur, indhold, navigation, design
- Gendannelse efter fejl midt i en plan uden at kræve manuel indgriben
- Installation af anbefalede plugins som en del af opbygningen
- Oprettelse af kontaktformularer direkte fra chatgrænsefladen (Superdav AI Agent v1.10.0+)
- Koordinering af lanceringspåmindelser eller deltageropfølgning uden duplikerede notifikationer, når godkendelsesporte og påmindelsesposter er aktiveret

**Startforslag:**
- *Byg et fotografi-portfoliosite med en galleri-indlægstype, en bookingside og en kontaktformular.*
- *Opret et restaurantwebsite med en onlinemenu, åbningstider og en forespørgselsformular til bordbooking.*
- *Opsæt et site for freelancekonsulentvirksomhed med servicesider, en portfoliosektion og en blog.*
- *Tilføj en kontaktformular til Kontakt-siden ved hjælp af site builderen.*
- *Når tjeklisten for sitelancering er godkendt, send en SMS-påmindelse til den konfigurerede interessentkontakt.*

---

### Design Studio

**Fokus:** Visuel tilpasning — farver, typografi, CSS og blokmønstre.

**Tilgængelige værktøjer:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Det gør den godt:**
- Anvendelse af navngivne theme-forudindstillinger (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Finjustering af global typografi og farvepaletter via theme.json
- Indsættelse af brugerdefineret CSS til brandspecifikke tilsidesættelser
- Tagning af et screenshot af en side og gennemgang af det for designproblemer

**Startforslag:**
- *Anvend warm-editorial-forudindstillingen, og sæt derefter den primære farve til #2d6a4f.*
- *Tag et screenshot af forsiden, og fortæl mig, hvad du ville forbedre.*
- *Opret et genanvendeligt hero-blokmønster med et baggrundsbillede i fuld bredde og centreret overskrift.*

### Plugin Manager

**Fokus:** Opdagelse, installation og administration af WordPress plugins.

**Tilgængelige værktøjer:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Det gør den godt:**
- Anbefaling af det bedste plugin til en beskrevet use case
- Installation af ability packs fra registreringsdatabasen
- Gennemse det tilgængelige ability-katalog efter kategori

**Startforslag:**
- *Hvad er det bedste plugin til et medlemskartotek?*
- *Installer WooCommerce abilities pack.*
- *Vis mig alle tilgængelige ecommerce ability packs.*

---

### Support Assistant

**Fokus:** Besvarelse af spørgsmål om siteindhold, indstillinger og WordPress-konfiguration.

**Tilgængelige værktøjer:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Hvad den gør godt:**
- Slår aktuelle indstillinger og muligheder for webstedet op
- Forklarer, hvilke indlægstyper, taksonomier og menuer der er konfigureret på webstedet
- Besvarer spørgsmål som "hvad gør denne indstilling?" ved at læse live-værdier
- Fungerer som et skrivebeskyttet diagnostisk lag, før der foretages ændringer

**Startforslag:**
- *Hvilke plugins og indstillinger er aktive på dette websted lige nu?*
- *Angiv alle brugerdefinerede indlægstyper, der er registreret på dette websted.*
- *Hvilke navigationsmenuer findes, og hvor er de tildelt?*

---

## Superdav Automation-integrationer

Når Superdav AI Agent v1.18.0-integrationer er konfigureret, kan indbyggede agenter deltage i sikrere tidsplanbevidste automatiseringsarbejdsgange:

- **Google Calendar-læseværktøjer** giver agenter mulighed for at inspicere konfigurerede kalendere og begivenheder, før opfølgende arbejde udarbejdes.
- **Kontakt- og deltagermapping** hjælper med at matche begivenhedsdeltagere med WordPress-brugere eller kendte kontakter.
- **Menneskelige godkendelsesporte** sætter følsomme handlinger på pause, indtil en autoriseret bruger gennemgår og bekræfter dem.
- **Påmindelsesposter** forhindrer dobbelte notifikationer, når planlagte jobs prøver igen eller gentages.
- **TextBee SMS-notifikationer** sender kun konfigurerede tekstbeskeder, når SMS-legitimationsoplysninger og arbejdsgangstilladelser er aktiveret.

Anbefalet arbejdsgang: bed agenten om at forberede beskeden eller handlingen, gennemgå godkendelsesprompten, og tillad derefter den godkendte handling at fortsætte. For tilbagevendende påmindelser skal du holde deduplikering af påmindelser aktiveret, så den samme begivenhed eller kontakt ikke får besked gentagne gange.

---

## Tilpasning af agenter

Hver indbygget agent kan udvides eller erstattes via `gratis_ai_agent_agents`-filteret.

### Tilføjelse af en brugerdefineret systemprompt til en eksisterende agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrering af en ny agent

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

Den nye agent vises i Agent Picker straks efter, at filteret kører.

### Fjernelse af en indbygget agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
