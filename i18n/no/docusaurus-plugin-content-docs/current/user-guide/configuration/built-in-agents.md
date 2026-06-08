---
title: Bygde-innbygde agenter
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Byggede Agenter

Gratis AI Agent v1.9.0 leveres med fem innebygde agenter, der hver er forhåndskonfigurert med et fokusert sett av verktøy, en tilpasset systemprompt og startforslag som matcher vanlige oppgaver innenfor det området. Å bytte mellom agenter endrer hva assistenten kan gjøre og hvordan den svarer – uten at du trenger å konfigurere noe.

## Hva er en Agent?

Hver agent er en navngitt konfigurasjonsprofil som kombinerer:

- **Verktøy (Tools)** — evnene agenten har lov til å kalle inn (f.eks. har en Content Writer tilgang til funksjoner for å opprette innlegg; en Design Studio har tilgang til CSS- og theme.json-funksjoner)
- **Systemprompt** — instruksjoner som setter agentens tone, prioriteringer og begrensninger
- **Forslag (Suggestions)** — forhåndsutfylte prompts som vises i chat-grensesnittet for å hjelpe deg i gang raskt

## Tilgang til Agentvelgeren

1. Åpne panelet **Gratis AI Agent** i WordPress-administrasjonsmenyen.
2. Klikk på **agent-ikonet** øverst til venstre i chat-overskriften (ikonet endres for å reflektere den aktive agenten).
3. **Agentvelgeren (Agent Picker)** åpnes som et form-tabell-overlay. Hver agent er listet med ikon, navn og en kort beskrivelse.
4. Klikk på en agentrad for å aktivere den. Chat-overskriften oppdateres umiddelbart.

Du kan også bytte agenter midt i en samtale – den nye agentens systemprompt trer i kraft fra neste melding.

## De Fem Innebygde Agentene

### Content Writer

**Fokus:** Opprette og redigere innlegg, sider og kontaktskjemaer.

**Tilgjengelige verktøy:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Hva den gjør bra:**
- Utkast og publisering av blogginnlegg basert på et utkast eller en disposisjon
- Opprettelse av flere landingssider for et nytt nettsted
- Bygging av kontaktskjemaer og henvendelsesskjemaer
- Angivelse av hovedbilder på innlegg fra en URL eller søk

**Startforslag:**
- *Skriv et 500-ords blogginnlegg om fordelene med WordPress multisite.*
- *Opprett en Om oss-, Tjenester- og Kontakt-side og publiser dem.*
- *Legg til et bookingskjema på Kontaktsiden.*

---

### Site Builder

**Fokus:** Fullstendig nettstedbygging fra ett enkelt prompt.

**Tilgjengelige verktøy:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Hva den gjør bra:**
- Genererer en flerfaset plan for nettstedsbygging basert på en beskrevet forretningstype
- Utfører hver fase autonomt – struktur, innhold, navigasjon, design
- Gjenvinner fra feil midt i planen uten å kreve manuell inngripen
- Installer anbefalte plugins som en del av byggingen
- Oppretter kontaktskjemaer direkte fra chat-grensesnittet (Superdav AI Agent v1.10.0+)

**Startforslag:**
- *Bygg et fotoporteføljeside med en galleri-posttype, en bookingside og et kontaktskjema.*
- *Opprett et restaurantnettsted med en online meny, åpningstider og et bordbestillingsskjema.*
- *Sett opp et frilanskonsulentnettsted med tjenestesider, en portefølje og en blogg.*
- *Legg til et kontaktskjema på Kontaktsiden ved hjelp av site builder.*

---

### Design Studio

**Fokus:** Visuell tilpasning – farger, typografi, CSS og blokkmønstre.

**Tilgjengelige verktøy:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Hva den gjør bra:**
- Påfører navngitte tema-presets (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Finjusterer global typografi og fargepaletter via theme.json
- Injiserer tilpasset CSS for merkevarespesifikke overstyringer
- Tar et skjermbilde av en side og gjennomgår den for designfeil

**Startforslag:**
- *Påfør warm-editorial-presetet og sett deretter primærfargen til #2d6a4f.*
- *Ta et skjermbilde av forsiden og fortell meg hva du ville forbedret.*
- *Opprett et gjenbrukbart heroblokkmønster med et fullbredde bakgrunnsbilde og sentrert overskrift.*

---

### Plugin Manager

**Fokus:** Oppdagelse, installasjon og administrasjon av WordPress-plugins.

**Tilgjengelige verktøy:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Hva den gjør bra:**
- Anbefaler det beste pluginet for et beskrevet bruksområde
- Installer funksjonssett fra registeret
- Blar gjennom tilgjengelige funksjonskataloger etter kategori

**Startforslag:**
- *Hva er det beste pluginet for et medlemskapsregister?*
- *Installer WooCommerce funksjonssettet.*
- *Vis meg alle tilgjengelige e-handel funksjonssett.*

---

### Support Assistant

**Fokus:** Svarer på spørsmål om nettstedinnhold, innstillinger og WordPress-konfigurasjon.

**Tilgjengelige verktøy:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Hva den gjør bra:**
- Slår opp gjeldende nettstedinnstillinger og alternativer
- Forklarer hvilke posttyper, taksonomier og menyer som er konfigurert på nettstedet
- Svarer på spørsmål som "hva gjør denne innstillingen?" ved å lese liveverdier
- Fungerer som et kun-lese diagnostisk lag før endringer gjøres

**Startforslag:**
- *Hvilke plugins og innstillinger er aktive på dette nettstedet?*
- *List alle de tilpassede posttypene som er registrert på dette nettstedet.*
- *Hvilke navigasjonsmenyer eksisterer, og hvor er de tildelt?*

---

## Tilpasning av Agenter

Hver innebygd agent kan utvides eller erstattes gjennom filteret `gratis_ai_agent_agents`.

### Legge til en tilpasset systemprompt til en eksisterende agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrere en ny agent

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

Den nye agenten vises i Agentvelgeren umiddelbart etter at filteret kjører.

### Fjerne en innebygd agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
