---
title: Ingebouwde agenten
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Ingebouwde agents

Gratis AI Agent v1.9.0 wordt geleverd met vijf ingebouwde agents, elk vooraf geconfigureerd met een gerichte set tools, een afgestemde system prompt en startsuggesties die passen bij veelvoorkomende taken op dat gebied. Wisselen tussen agents verandert wat de assistent kan doen en hoe hij reageert — zonder enige configuratie van jouw kant. Superdav AI Agent v1.18.0 kan planningsbewuste tools, herinneringsrecords, goedkeuringspoorten en SMS-meldingen aan deze workflows toevoegen wanneer de gerelateerde integraties zijn geconfigureerd.

## Wat is een agent?

Elke agent is een benoemd configuratieprofiel dat combineert:

- **Tools** — de mogelijkheden die de agent mag aanroepen (bijv. een Content Writer heeft toegang tot mogelijkheden voor het aanmaken van berichten; een Design Studio heeft toegang tot CSS- en theme.json-mogelijkheden)
- **System prompt** — instructies die de toon, prioriteiten en beperkingen van de agent bepalen
- **Suggesties** — vooraf geschreven prompts die in de chatinterface worden getoond om je te helpen snel aan de slag te gaan

## Toegang tot de agentkiezer

1. Open het **Gratis AI Agent**-paneel in de WordPress-beheerzijbalk.
2. Klik op het **agentpictogram** linksboven in de chatkop (het pictogram verandert om de actieve agent weer te geven).
3. De **agentkiezer** opent als een formulier-tabel-overlay. Elke agent wordt vermeld met zijn pictogram, naam en een beschrijving van één regel.
4. Klik op een agentrij om deze te activeren. De chatkop wordt onmiddellijk bijgewerkt.

Je kunt ook midden in een gesprek van agent wisselen — de system prompt van de nieuwe agent wordt van kracht vanaf het volgende bericht.

## De vijf ingebouwde agents

### Content Writer

**Focus:** Berichten, pagina's en contactformulieren maken en bewerken.

**Beschikbare tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Met Superdav AI Agent v1.18.0-integraties ingeschakeld kunnen geconfigureerde kalendercontext, goedkeuringspoorten, herinneringen en tools voor SMS-meldingen ook beschikbaar zijn voor goedgekeurde workflows.

**Waar hij goed in is:**
- Blogberichten opstellen en publiceren vanuit een briefing of outline
- Reeksen landingspagina's maken voor een nieuwe site
- Contact- en aanvraagformulieren bouwen
- Uitgelichte afbeeldingen instellen bij berichten vanaf een URL of zoekopdracht
- Follow-upberichten voor evenementen opstellen vanuit geconfigureerde Google Calendar-context, en vervolgens pauzeren voor goedkeuring voordat meldingen worden verzonden

**Startsuggesties:**
- *Schrijf een blogbericht van 500 woorden over de voordelen van WordPress multisite.*
- *Maak een pagina Over ons, Diensten en Contact en publiceer ze.*
- *Voeg een boekingsaanvraagformulier toe aan de Contact-pagina.*
- *Stel een herinnering op voor deelnemers aan het geconfigureerde kalenderevenement van morgen en wacht op goedkeuring voordat je deze verzendt.*

---

### Site Builder

**Focus:** End-to-end websitecreatie vanuit één enkele prompt.

**Beschikbare tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Met Superdav AI Agent v1.18.0 kunnen geconfigureerde tools voor managed service, goedkeuring, herinneringen, kalender en SMS beschikbaar zijn waar beheerders deze inschakelen.

**Waar hij goed in is:**
- Een sitebouwplan in meerdere fasen genereren voor een beschreven bedrijfstype
- Elke fase autonoom uitvoeren — structuur, content, navigatie, design
- Herstellen van fouten halverwege het plan zonder handmatige interventie te vereisen
- Aanbevolen plugins installeren als onderdeel van de build
- Contactformulieren rechtstreeks vanuit de chatinterface maken (Superdav AI Agent v1.10.0+)
- Launch-herinneringen of follow-up voor deelnemers coördineren zonder dubbele meldingen wanneer goedkeuringspoorten en herinneringsrecords zijn ingeschakeld

**Startsuggesties:**
- *Bouw een fotografieportfoliosite met een galerijberichttype, een boekingspagina en een contactformulier.*
- *Maak een restaurantwebsite met een online menu, openingstijden en een aanvraagformulier voor tafelreserveringen.*
- *Zet een freelance consultancy-site op met dienstenpagina's, een portfoliosectie en een blog.*
- *Voeg een contactformulier toe aan de Contact-pagina met de site builder.*
- *Nadat de checklist voor de sitelaunch is goedgekeurd, stuur je een SMS-herinnering naar het geconfigureerde stakeholdercontact.*

---

### Design Studio

**Focus:** Visuele aanpassing — kleuren, typografie, CSS en blokpatronen.

**Beschikbare tools:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Waar hij goed in is:**
- Benoemde themapresets toepassen (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Globale typografie en kleurenpaletten fijn afstellen via theme.json
- Aangepaste CSS injecteren voor merkspecifieke overrides
- Een screenshot van een pagina maken en deze beoordelen op designproblemen

**Startsuggesties:**
- *Pas de warm-editorial-preset toe en stel daarna de primaire kleur in op #2d6a4f.*
- *Maak een screenshot van de homepage en vertel me wat je zou verbeteren.*
- *Maak een herbruikbaar hero-blokpatroon met een achtergrondafbeelding over de volledige breedte en een gecentreerde kop.*

### Plugin Manager

**Focus:** WordPress-plugins ontdekken, installeren en beheren.

**Beschikbare tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Waar hij goed in is:**
- De beste plugin aanbevelen voor een beschreven usecase
- Ability packs installeren vanuit het register
- Door de beschikbare ability-catalogus bladeren per categorie

**Startsuggesties:**
- *Wat is de beste plugin voor een ledenmap?*
- *Installeer het WooCommerce abilities pack.*
- *Toon me alle beschikbare ecommerce ability packs.*

---

### Support Assistant

**Focus:** Vragen beantwoorden over sitecontent, instellingen en WordPress-configuratie.

**Beschikbare tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Waar het goed in is:**
- Huidige site-instellingen en opties opzoeken
- Uitleggen welke berichttypen, taxonomieën en menu’s op de site zijn geconfigureerd
- Vragen beantwoorden zoals "wat doet deze instelling?" door live waarden te lezen
- Dienen als een alleen-lezen diagnostische laag voordat wijzigingen worden aangebracht

**Startsuggesties:**
- *Welke plugins en instellingen zijn momenteel actief op deze site?*
- *Maak een lijst van alle custom post types die op deze site zijn geregistreerd.*
- *Welke navigatiemenu’s bestaan er en waar zijn ze toegewezen?*

---

## Superdav Automation Integrations

Wanneer Superdav AI Agent v1.18.0-integraties zijn geconfigureerd, kunnen ingebouwde agents deelnemen aan veiligere automatiseringsworkflows die rekening houden met planningen:

- **Google Calendar-leestools** laten agents geconfigureerde agenda’s en evenementen inspecteren voordat vervolgwerk wordt opgesteld.
- **Contact- en deelnemersmapping** helpt evenementdeelnemers te koppelen aan WordPress-gebruikers of bekende contacten.
- **Goedkeuringspoorten voor mensen** pauzeren gevoelige acties totdat een geautoriseerde gebruiker ze beoordeelt en bevestigt.
- **Herinneringsrecords** voorkomen dubbele meldingen wanneer geplande taken opnieuw proberen of worden herhaald.
- **TextBee SMS-meldingen** verzenden geconfigureerde tekstberichten alleen wanneer SMS-inloggegevens en workflowmachtigingen zijn ingeschakeld.

Aanbevolen workflow: vraag de agent het bericht of de actie voor te bereiden, beoordeel de goedkeuringsprompt en sta vervolgens toe dat de goedgekeurde actie wordt hervat. Houd voor terugkerende herinneringen herinneringsdeduplicatie ingeschakeld, zodat hetzelfde evenement of contact niet herhaaldelijk wordt genotificeerd.

---

## Agents aanpassen

Elke ingebouwde agent kan worden uitgebreid of vervangen via het `gratis_ai_agent_agents`-filter.

### Een aangepaste systeemprompt toevoegen aan een bestaande agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Een nieuwe agent registreren

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

De nieuwe agent verschijnt in de Agent Picker zodra het filter is uitgevoerd.

### Een ingebouwde agent verwijderen

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
