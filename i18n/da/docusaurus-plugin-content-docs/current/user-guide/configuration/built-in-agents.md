---
title: Indbyggede agenter
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Indbyggede Agenter

Gratis AI Agent v1.9.0 leveres med fem indbyggede agenter, som hver er forudkonfigureret med et fokuseret sæt værktøjer, en skræddersyet systemprompt og startforslag matchet til almindelige opgaver inden for det pågældende område. Skift mellem agenter ændrer, hvad assistenten kan gøre og hvordan den reagerer – uden at du behøver foretage dig noget opsætning.

## Hvad er en Agent?

Hver agent er en navngivet konfigurationsprofil, der kombinerer:

- **Tools** — de evner, som agenten må kalde på (f.eks. har en Indholdsskriver adgang til funktioner til opslagsoprettelse; et Design Studio har adgang til CSS og theme.json).
- **System prompt** — instruktioner, der sætter agentens tone, prioriteter og begrænsninger.
- **Suggestions** — forudskrevne prompts vist i chatgrænsefladen for hurtigt at komme i gang.

## Adgang til Agent Pickeren

1. Åbn panelet **Gratis AI Agent** i WordPress admin-sidebar.
2. Klik på **agentikonet** øverst til venstre i chatheaderen (ikonet ændrer sig for at afspejle den aktive agent).
3. **Agent Pickeren** åbnes som en form-tabel overlay. Hver agent er listet med sit ikon, navn og en enkelt linjes beskrivelse.
4. Klik på en agentrække for at aktivere den. Chatheaderen opdateres øjeblikkeligt.

Du kan også skifte agenter midt i en samtale – den nye agents systemprompt træder i kraft fra det næste besked.

## De Fem Indbyggede Agenter

### Indholdsskriver (Content Writer)

**Fokus:** Oprettelse og redigering af opslag, sider og kontaktformularer.

**Tilgængelige værktøjer:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Hvad det gør godt:**
- Udkastning og udgivelse af blogindlæg fra et kort eller en skitsering
- Oprettelse af batches af landingssider til en ny side
- Opbygning af kontakt- og forespørgselsformularer
- Opsætning af fremhævede billeder på indlæg fra en URL eller søgning

**Startforslag:**
- *Skriv et 500-ords blogindlæg om fordelene ved WordPress multisite.*
- *Opret en Om-, Tjenester- og Kontakt side og udgiv dem.*
- *Tilføj en bookingforespørgselsformular til Kontakt-siden.*

---

### Site Builder (Hjemmesidebygger)

**Fokus:** End-to-end websideoprettelse fra ét prompt.

**Tilgængelige værktøjer:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Hvad det gør godt:**
- Generering af en flertrins site build plan for en beskrevet virksomhedstype
- Udførelse af hver fase automatisk – struktur, indhold, navigation, design
- Håndtering af fejl midt i planen uden behov for manuel indgriben
- Installation af anbefalede plugins som en del af opbygningen
- Oprettelse af kontaktformularer direkte fra chatgrænsefladen (Superdav AI Agent v1.10.0+)

**Startforslag:**
- *Byg en fotoportefølje med et galleri post type, en bookingside og en kontaktformular.*
- *Opret en restaurantwebside med online menu, åbningstider og en forespørgselsformular til bordreservationer.*
- *Opsæt en freelance konsulentwebside med tjenesteprofiler, et portfolio-afsnit og en blog.*
- *Tilføj en kontaktformular til Kontakt-siden ved hjælp af site builder.*

---

### Design Studio (Designstudio)

**Fokus:** Visuel tilpasning – farver, typografi, CSS og blokmønstre.

**Tilgængelige værktøjer:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Hvad de gør godt:**
- Anvendelse af navngivne tema-presets (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Finjustering af global typografi og farvepaletter via theme.json
- Indsprøjtning af custom CSS til brand-specifikke overstyringer
- Tagning af et skærmbillede af en side og gennemgang for designproblemer

**Startforslag:**
- *Anvend warm-editorial preset'et og sæt derefter primærfarven til #2d6a4f.*
- *Tag et skærmbillede af forsiden og fortæl mig, hvad du ville forbedre.*
- *Opret en genanvendelig hero block pattern med fuld bredde baggrundsbillede og centreret overskrift.*

---

### Plugin Manager

**Fokus:** At finde, installere og administrere WordPress plugins.

**Tilgængelige værktøjer:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Hvad de gør godt:**
- Anbefaling af det bedste plugin til et beskrevet brugsscenarie
- Installation af ability packs fra registret
- Gennemgang af det tilgængelige ability katalog efter kategori

**Startforslag:**
- *Hvilket er det bedste plugin til en medlemsliste?*
- *Installer WooCommerce abilities pack'et.*
- *Vis mig alle tilgængelige e-handels ability packs.*

---

### Support Assistant

**Fokus:** At besvare spørgsmål om sidens indhold, indstillinger og WordPress konfiguration.

**Tilgængelige værktøjer:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Hvad det gør godt:**
- Gennemgang af de aktuelle siteindstillinger og muligheder.
- Forklaring af, hvilke post types, taxonomier og menuer der er konfigureret på sitet.
- Besvare spørgsmål som "hvad gør denne indstilling?" ved at læse de levende værdier.
- Fungerer som et kun læsende diagnostisk lag før man foretager ændringer.

**Startforslag:**
- *Hvilke plugins og indstillinger er i øjeblikket aktive på dette site?*
- *List alle de custom post types, der er registreret på dette site.*
- *Hvilke navigationsmenuer findes, og hvor er de tildelt?*

---

## Tilpasning af Agents

Hver indbygget agent kan udvides eller erstattes via `gratis_ai_agent_agents` filteret.

### Tilføjelse af en custom system prompt til en eksisterende agent

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
        'description'   => 'Optimiserer opslag og sider til søgemaskiner.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Du er en SEO specialist. Fokuser på nøgleordoptimering, meta beskrivelser og struktureret data.',
        'suggestions'   => [
            'Gennemgå forsidenstitlen og meta beskrivelsen.',
            'Foreslå forbedringer af titel-tagget for de fem seneste opslag.',
        ],
    ];
    return $agents;
} );
```

Den nye agent vises i Agent Picker med det samme efter, at filteret er kørt.

### Fjernelse af en indbygget agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
