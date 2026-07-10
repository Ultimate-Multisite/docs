---
title: Ingeboude agente
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Ingeboude Agente {#built-in-agents}

Gratis AI Agent v1.9.0 word met vyf ingeboude agente gelewer, elk vooraf gekonfigureer met ’n gefokusde stel gereedskap, ’n aangepaste stelselprompt, en beginvoorstelle wat by algemene take in daardie area pas. Om tussen agente te wissel verander wat die assistent kan doen en hoe dit reageer — sonder enige konfigurasie van jou kant af. Superdav AI Agent v1.18.0 kan skedule-bewuste gereedskap, herinneringrekords, goedkeuringshekke, en SMS-kennisgewings by hierdie werkvloeie voeg wanneer die verwante integrasies gekonfigureer is.

## Wat Is ’n Agent? {#what-is-an-agent}

Elke agent is ’n benoemde konfigurasieprofiel wat kombineer:

- **Gereedskap** — die vermoëns wat die agent toegelaat word om aan te roep (bv. ’n Inhoudskrywer het toegang tot plasing-skeppingsvermoëns; ’n Ontwerpateljee het toegang tot CSS- en theme.json-vermoëns)
- **Stelselprompt** — instruksies wat die agent se toon, prioriteite, en beperkings bepaal
- **Voorstelle** — voorafgeskrewe prompts wat in die kletskoppelvlak gewys word om jou te help om vinnig te begin

## Toegang tot die Agent-kieser {#accessing-the-agent-picker}

1. Maak die **Gratis AI Agent**-paneel in die WordPress-adminsybalk oop.
2. Klik die **agent-ikoon** links bo in die kletskop (die ikoon verander om die aktiewe agent te weerspieël).
3. Die **Agent-kieser** maak as ’n vorm-tabel-oorleg oop. Elke agent word met sy ikoon, naam, en ’n eenreëlbeskrywing gelys.
4. Klik ’n agentry om dit te aktiveer. Die kletskop werk onmiddellik by.

Jy kan ook agente midde-in ’n gesprek wissel — die nuwe agent se stelselprompt tree vanaf die volgende boodskap in werking.

## Die Vyf Ingeboude Agente {#the-five-built-in-agents}

### Inhoudskrywer {#content-writer}

**Fokus:** Skep en redigeer plasings, bladsye, en kontakvorms.

**Beskikbare gereedskap:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Met Superdav AI Agent v1.18.0-integrasies geaktiveer, kan gekonfigureerde kalenderkonteks, goedkeuringshekke, herinnerings, en SMS-kennisgewinggereedskap ook vir goedgekeurde werkvloeie beskikbaar wees.

**Wat dit goed doen:**
- Opstel en publiseer van blogplasings vanaf ’n opsomming of uiteensetting
- Skep van groepe bestemmingsbladsye vir ’n nuwe werf
- Bou van kontak- en navraagvorms
- Stel uitgeligte beelde op plasings vanaf ’n URL of soektog
- Opstel van gebeurtenis-opvolgboodskappe vanaf gekonfigureerde Google Calendar-konteks, en dan pouseer vir goedkeuring voordat kennisgewings gestuur word

**Beginvoorstelle:**
- *Skryf ’n blogplasing van 500 woorde oor die voordele van WordPress-multisite.*
- *Skep ’n Oor-ons-, Dienste-, en Kontakbladsy en publiseer hulle.*
- *Voeg ’n besprekingsnavraagvorm by die Kontakbladsy.*
- *Stel ’n herinnering op vir deelnemers aan môre se gekonfigureerde kalendergebeurtenis en wag vir goedkeuring voordat dit gestuur word.*

---

### Werfbouer {#site-builder}

**Fokus:** End-tot-end webwerf-skepping vanaf ’n enkele prompt.

**Beskikbare gereedskap:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Met Superdav AI Agent v1.18.0 kan gekonfigureerde bestuurde-diens-, goedkeurings-, herinnerings-, kalender-, en SMS-gereedskap beskikbaar wees waar administrateurs dit aktiveer.

**Wat dit goed doen:**
- Genereer ’n multi-fase werfbouplan vir ’n beskryfde besigheidstipe
- Voer elke fase outonoom uit — struktuur, inhoud, navigasie, ontwerp
- Herstel van foute midde-in ’n plan sonder om handmatige ingryping te vereis
- Installeer aanbevole plugins as deel van die bouproses
- Skep kontakvorms direk vanaf die kletskoppelvlak (Superdav AI Agent v1.10.0+)
- Koördineer bekendstellingsherinnerings of deelnemer-opvolg sonder duplikaatkennisgewings wanneer goedkeuringshekke en herinneringrekords geaktiveer is

**Beginvoorstelle:**
- *Bou ’n fotografie-portefeuljewerf met ’n galeryplasingstipe, ’n besprekingsbladsy, en ’n kontakvorm.*
- *Skep ’n restaurantwebwerf met ’n aanlyn spyskaart, openingstye, en ’n tafelbesprekingsnavraagvorm.*
- *Stel ’n vryskut-konsultasiewerf op met diensbladsye, ’n portefeulje-afdeling, en ’n blog.*
- *Voeg ’n kontakvorm by die Kontakbladsy met die werfbouer.*
- *Nadat die werfbekendstelling-kontrolelys goedgekeur is, stuur ’n SMS-herinnering aan die gekonfigureerde belanghebbende kontak.*

---

### Ontwerpateljee {#design-studio}

**Fokus:** Visuele aanpassing — kleure, tipografie, CSS, en blokpatrone.

**Beskikbare gereedskap:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Wat dit goed doen:**
- Pas benoemde theme-voorinstellings toe (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Fyninstelling van globale tipografie en kleurpalette via theme.json
- Spuit pasgemaakte CSS in vir handelsmerk-spesifieke oorheersings
- Neem ’n skermskoot van ’n bladsy en hersien dit vir ontwerpprobleme

**Beginvoorstelle:**
- *Pas die warm-editorial-voorinstelling toe en stel dan die primêre kleur na #2d6a4f.*
- *Neem ’n skermskoot van die tuisblad en vertel my wat jy sou verbeter.*
- *Skep ’n herbruikbare heldblokpatroon met ’n volle-breedte agtergrondbeeld en gesentreerde opskrif.*

### Plugin-bestuurder {#plugin-manager}

**Fokus:** Ontdek, installeer, en bestuur WordPress plugins.

**Beskikbare gereedskap:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Wat dit goed doen:**
- Beveel die beste plugin vir ’n beskryfde gebruiksgeval aan
- Installeer vermoëpakke vanaf die register
- Blaai deur die beskikbare vermoëkatalogus volgens kategorie

**Beginvoorstelle:**
- *Wat is die beste plugin vir ’n lidmaatskapgids?*
- *Installeer die WooCommerce-vermoëpak.*
- *Wys my alle beskikbare e-handel-vermoëpakke.*

---

### Ondersteuningsassistent {#support-assistant}

**Fokus:** Beantwoord vrae oor werfinhoud, instellings, en WordPress-konfigurasie.

**Beskikbare gereedskap:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Wat dit goed doen:**
- Soek huidige werfinstellings en opsies op
- Verduidelik watter plasingstipes, taksonomieë, en kieslyste op die werf gekonfigureer is
- Beantwoord “wat doen hierdie instelling?”-vrae deur lewendige waardes te lees
- Dien as ’n leesalleen diagnostiese laag voordat veranderinge gemaak word

**Beginvoorstelle:**
- *Watter plugins en instellings is tans aktief op hierdie werf?*
- *Lys al die pasgemaakte plasingstipes wat op hierdie werf geregistreer is.*
- *Watter navigasiekieslyste bestaan en waar is hulle toegewys?*

---

## Superdav-outomatiseringsintegrasies {#superdav-automation-integrations}

Wanneer Superdav AI Agent v1.18.0-integrasies gekonfigureer is, kan ingeboude agente aan veiliger skedule-bewuste outomatiseringswerkvloeie deelneem:

- **Google Calendar-leesgereedskap** laat agente toe om gekonfigureerde kalenders en gebeurtenisse te inspekteer voordat opvolgwerk opgestel word.
- **Kontak- en deelnemerkartering** help om gebeurtenisdeelnemers met WordPress-gebruikers of bekende kontakte te pas.
- **Menslike goedkeuringshekke** pouseer sensitiewe aksies totdat ’n gemagtigde gebruiker dit hersien en bevestig.
- **Herinneringrekords** voorkom duplikaatkennisgewings wanneer geskeduleerde take weer probeer of herhaal word.
- **TextBee SMS-kennisgewings** stuur gekonfigureerde teksboodskappe slegs wanneer SMS-geloofsbriewe en werkvloei-toestemmings geaktiveer is.

Aanbevole werkvloei: vra die agent om die boodskap of aksie voor te berei, hersien die goedkeuringsprompt, en laat dan die goedgekeurde aksie hervat. Vir herhalende herinnerings, hou herinnering-ontduplisering geaktiveer sodat dieselfde gebeurtenis of kontak nie herhaaldelik in kennis gestel word nie.

---

## Aanpassing van Agente {#customising-agents}

Elke ingeboude agent kan deur die `gratis_ai_agent_agents`-filter uitgebrei of vervang word.

### Voeg ’n pasgemaakte stelselprompt by ’n bestaande agent {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registreer ’n nuwe agent {#registering-a-new-agent}

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

Die nuwe agent verskyn onmiddellik in die Agent-kieser nadat die filter loop.

### Verwyder ’n ingeboude agent {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
