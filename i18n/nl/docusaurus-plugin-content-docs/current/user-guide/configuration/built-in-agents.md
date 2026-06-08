---
title: Ingebouwde Agents
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Ingebouwde Agents

Gratis AI Agent v1.9.0 bevat vijf ingebouwde agents. Elk agent is vooraf geconfigureerd met een specifieke set tools, een aangepaste systeeminstructie (system prompt) en startsuggesties die aansluiten bij veelvoorkomende taken in dat specifieke gebied. Door te schakelen tussen agents verandert wat de assistent kan doen en hoe deze reageert — zonder dat u enige configuratie hoeft aan te passen.

## Wat is een Agent?

Elke agent is een naamgevend configuratieprofiel dat de volgende elementen combineert:

- **Tools** — de vaardigheden die de agent mag aanroepen (bijvoorbeeld: een Content Writer heeft toegang tot functies voor het aanmaken van berichten; een Design Studio heeft toegang tot CSS- en theme.json-functies)
- **System prompt** — instructies die de toon, prioriteiten en beperkingen van de agent vaststellen
- **Suggestions** — vooraf geschreven prompts die in de chatinterface worden getoond om u snel op weg te helpen

## Toegang tot de Agent Picker

1. Open het **Gratis AI Agent** paneel in de WordPress-admin sidebar.
2. Klik op het **agent-icoon** linksboven in de chatheader (het icoon verandert om de actieve agent weer te geven).
3. De **Agent Picker** opent als een form-table overlay. Elk agent wordt vermeld met zijn icoon, naam en een korte beschrijving.
4. Klik op een agentrij om deze te activeren. De chatheader wordt onmiddellijk bijgewerkt.

U kunt ook agents wisselen midden in een gesprek — de systeeminstructie van de nieuwe agent gaat in vanaf de volgende bericht.

## De Vijf Ingebouwde Agents

### Content Writer

**Focus:** Het creëren en bewerken van berichten, pagina's en contactformulieren.

**Beschikbare tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Waar het goed in is:**
- Het opstellen en publiceren van blogberichten op basis van een korte samenvatting of een schets
- Het creëren van batches van landingspagina's voor een nieuwe site
- Het opbouwen van contact- en aanvraagformulieren
- Het instellen van featured images op berichten via een URL of zoekopdracht

**Startsuggesties:**
- *Schrijf een blogbericht van 500 woorden over de voordelen van WordPress multisite.*
- *Maak een Over ons-, Diensten- en Contactpagina en publiceer deze.*
- *Voeg een boekingsaanvraagformulier toe aan de Contactpagina.*

---

### Site Builder

**Focus:** Het end-to-end creëren van een website vanuit één prompt.

**Beschikbare tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Waar het goed in is:**
- Het genereren van een meerfasen site build plan voor een beschreven bedrijfstype
- Het autonoom uitvoeren van elke fase — structuur, inhoud, navigatie, design
- Herstellen van fouten midden in het plan zonder handmatige ingreep te vereisen
- Het installeren van aanbevolen plugins als onderdeel van de build
- Het creëren van contactformulieren rechtstreeks vanuit de chatinterface (Superdav AI Agent v1.10.0+)

**Startsuggesties:**
- *Bouw een fotoportfolio website met een gallery post type, een boekingspagina en een contactformulier.*
- *Maak een restaurantwebsite met een online menu, openingstijden en een tafelboekingsaanvraagformulier.*
- *Stel een site voor een freelance consultant in met servicepagina's, een portfolio en een blog.*
- *Voeg een contactformulier toe aan de Contactpagina met behulp van de site builder.*

---

### Design Studio

**Focus:** Visuele aanpassing — kleuren, typografie, CSS en block patterns.

**Beschikbare tools:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Waar het goed in is:**
- Het toepassen van naamgevde theme presets (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Het verfijnen van de globale typografie en kleurenpaletten via theme.json
- Het injecteren van custom CSS voor merk-specifieke overrides
- Het maken van een screenshot van een pagina en het beoordelen op ontwerpfouten

**Startsuggesties:**
- *Pas het warm-editorial preset toe en stel vervolgens de primaire kleur in op #2d6a4f.*
- *Maak een screenshot van de homepage en vertel me wat je zou verbeteren.*
- *Maak een herbruikbaar hero block pattern met een full-width achtergrondafbeelding en een gecentreerde kop.*

---

### Plugin Manager

**Focus:** Het ontdekken, installeren en beheren van WordPress plugins.

**Beschikbare tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Waar het goed in is:**
- Het aanbevelen van de beste plugin voor een beschreven gebruiksscenario
- Het installeren van ability packs uit het register
- Het bladeren door het beschikbare ability catalogus op categorie

**Startsuggesties:**
- *Wat is de beste plugin voor een membership directory?*
- *Installeer het WooCommerce abilities pack.*
- *Toon mij alle beschikbare e-commerce ability packs.*

---

### Support Assistant

**Focus:** Het beantwoorden van vragen over site-inhoud, instellingen en WordPress-configuratie.

**Beschikbare tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Waar het goed in is:**
- Het opzoeken van huidige site-instellingen en opties
- Het uitleggen welke post types, taxonomies en menu's op de site zijn geconfigureerd
- Het beantwoorden van vragen als "wat doet deze instelling?" door live waarden te lezen
- Het dienen als een read-only diagnostische laag voordat wijzigingen worden aangebracht

**Startsuggesties:**
- *Welke plugins en instellingen zijn momenteel actief op deze site?*
- *Listeer alle aangepaste post types die op deze site zijn geregistreerd.*
- *Welke navigatiemenu's bestaan en waar zijn ze toegewezen?*

---

## Agents Aanpassen

Elke ingebouwde agent kan worden uitgebreid of vervangen via de `gratis_ai_agent_agents` filter.

### Een aangepaste systeeminstructie toevoegen aan een bestaande agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nSchrijf altijd in Brits Engels en gebruik de Oxford komma.";
    }
    return $agents;
} );
```

### Een nieuwe agent registreren

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimaliseert berichten en pagina's voor zoekmachines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'U bent een SEO specialist. Richt u op keyword optimalisatie, meta beschrijvingen en gestructureerde data.',
        'suggestions'   => [
            'Beoordeel de titel en meta beschrijving van de homepage.',
            'Suggesteer verbeteringen voor de title tag van de vijf meest recente berichten.',
        ],
    ];
    return $agents;
} );
```

De nieuwe agent verschijnt in de Agent Picker onmiddellijk nadat de filter is uitgevoerd.

### Een ingebouwde agent verwijderen

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
