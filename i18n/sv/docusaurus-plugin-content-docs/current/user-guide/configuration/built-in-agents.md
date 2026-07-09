---
title: Inbyggda agenter
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Inbyggda agenter {#built-in-agents}

Gratis AI Agent v1.9.0 levereras med fem inbyggda agenter, var och en förkonfigurerad med en fokuserad uppsättning verktyg, en anpassad systemprompt och startförslag som matchar vanliga uppgifter inom det området. Att växla mellan agenter ändrar vad assistenten kan göra och hur den svarar — utan någon konfiguration från din sida. Superdav AI Agent v1.18.0 kan lägga till schemamedvetna verktyg, påminnelseposter, godkännandegrindar och SMS-aviseringar i dessa arbetsflöden när de relaterade integrationerna är konfigurerade.

## Vad är en agent? {#what-is-an-agent}

Varje agent är en namngiven konfigurationsprofil som kombinerar:

- **Verktyg** — de förmågor som agenten får anropa (t.ex. har en Content Writer åtkomst till förmågor för att skapa inlägg; en Design Studio har åtkomst till CSS- och theme.json-förmågor)
- **Systemprompt** — instruktioner som anger agentens ton, prioriteringar och begränsningar
- **Förslag** — förskrivna prompter som visas i chattgränssnittet för att hjälpa dig att komma igång snabbt

## Öppna agentväljaren {#accessing-the-agent-picker}

1. Öppna panelen **Gratis AI Agent** i WordPress-adminsidofältet.
2. Klicka på **agentikonen** längst upp till vänster i chattrubriken (ikonen ändras för att återspegla den aktiva agenten).
3. **Agent Picker** öppnas som en formulärtabellsöverlagring. Varje agent listas med sin ikon, sitt namn och en beskrivning på en rad.
4. Klicka på en agentrad för att aktivera den. Chattrubriken uppdateras omedelbart.

Du kan också byta agenter mitt i en konversation — den nya agentens systemprompt börjar gälla från nästa meddelande.

## De fem inbyggda agenterna {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Fokus:** Skapa och redigera inlägg, sidor och kontaktformulär.

**Tillgängliga verktyg:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Med Superdav AI Agent v1.18.0-integrationer aktiverade kan konfigurerad kalenderkontext, godkännandegrindar, påminnelser och SMS-aviseringsverktyg också vara tillgängliga för godkända arbetsflöden.

**Vad den gör bra:**
- Skapa utkast till och publicera blogginlägg från en brief eller disposition
- Skapa grupper av landningssidor för en ny webbplats
- Bygga kontakt- och förfrågningsformulär
- Ange utvalda bilder på inlägg från en URL eller sökning
- Skapa utkast till uppföljningsmeddelanden för evenemang från konfigurerad Google Calendar-kontext, och sedan pausa för godkännande innan aviseringar skickas

**Startförslag:**
- *Skriv ett blogginlägg på 500 ord om fördelarna med WordPress multisite.*
- *Skapa en Om oss-, Tjänster- och Kontaktsida och publicera dem.*
- *Lägg till ett bokningsförfrågningsformulär på Kontaktsidan.*
- *Skapa ett utkast till en påminnelse för deltagare i morgondagens konfigurerade kalenderevenemang och vänta på godkännande innan den skickas.*

---

### Site Builder {#site-builder}

**Fokus:** Helhetsbyggande av webbplatser från en enda prompt.

**Tillgängliga verktyg:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Med Superdav AI Agent v1.18.0 kan konfigurerade verktyg för hanterade tjänster, godkännande, påminnelser, kalender och SMS vara tillgängliga där administratörer aktiverar dem.

**Vad den gör bra:**
- Generera en flerfasig plan för webbplatsbygge för en beskriven verksamhetstyp
- Köra varje fas autonomt — struktur, innehåll, navigering, design
- Återhämta sig från fel mitt i planen utan att kräva manuell åtgärd
- Installera rekommenderade plugins som en del av bygget
- Skapa kontaktformulär direkt från chattgränssnittet (Superdav AI Agent v1.10.0+)
- Koordinera lanseringspåminnelser eller deltagaruppföljning utan dubblettaviseringar när godkännandegrindar och påminnelseposter är aktiverade

**Startförslag:**
- *Bygg en portfoliowebbplats för fotografi med en galleriposttyp, en bokningssida och ett kontaktformulär.*
- *Skapa en restaurangwebbplats med en online-meny, öppettider och ett formulär för bordsbokningsförfrågan.*
- *Sätt upp en webbplats för frilanskonsulting med tjänstesidor, en portfoliosektion och en blogg.*
- *Lägg till ett kontaktformulär på Kontaktsidan med hjälp av site builder.*
- *När webbplatsens lanseringschecklista har godkänts, skicka en SMS-påminnelse till den konfigurerade intressentkontakten.*

---

### Design Studio {#design-studio}

**Fokus:** Visuell anpassning — färger, typografi, CSS och blockmönster.

**Tillgängliga verktyg:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Vad den gör bra:**
- Tillämpa namngivna temaförinställningar (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Finjustera global typografi och färgpaletter via theme.json
- Injicera anpassad CSS för varumärkesspecifika åsidosättningar
- Ta en skärmbild av en sida och granska den för designproblem

**Startförslag:**
- *Tillämpa warm-editorial-förinställningen och ställ sedan in primärfärgen på #2d6a4f.*
- *Ta en skärmbild av startsidan och berätta vad du skulle förbättra.*
- *Skapa ett återanvändbart hero-blockmönster med en fullbreddsbakgrundsbild och centrerad rubrik.*

### Plugin Manager {#plugin-manager}

**Fokus:** Upptäcka, installera och hantera WordPress-plugins.

**Tillgängliga verktyg:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Vad den gör bra:**
- Rekommendera det bästa pluginet för ett beskrivet användningsfall
- Installera förmågepaket från registret
- Bläddra i den tillgängliga förmågekatalogen efter kategori

**Startförslag:**
- *Vilket är det bästa pluginet för en medlemskatalog?*
- *Installera WooCommerce-förmågepaketet.*
- *Visa mig alla tillgängliga ecommerce-förmågepaket.*

---

### Support Assistant {#support-assistant}

**Fokus:** Svara på frågor om webbplatsinnehåll, inställningar och WordPress-konfiguration.

**Tillgängliga verktyg:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Vad den gör bra:**
- Slå upp aktuella webbplatsinställningar och alternativ
- Förklara vilka inläggstyper, taxonomier och menyer som är konfigurerade på webbplatsen
- Besvara frågor som "vad gör den här inställningen?" genom att läsa livevärden
- Fungera som ett skrivskyddat diagnostiklager innan ändringar görs

**Startförslag:**
- *Vilka plugins och inställningar är för närvarande aktiva på den här webbplatsen?*
- *Lista alla anpassade inläggstyper som är registrerade på den här webbplatsen.*
- *Vilka navigationsmenyer finns och var är de tilldelade?*

---

## Superdav Automation-integrationer {#superdav-automation-integrations}

När Superdav AI Agent v1.18.0-integrationer är konfigurerade kan inbyggda agenter delta i säkrare, schemamedvetna automatiseringsarbetsflöden:

- **Google Calendar-läsverktyg** låter agenter granska konfigurerade kalendrar och händelser innan uppföljande arbete utformas.
- **Kontakt- och deltagarmappning** hjälper till att matcha händelsedeltagare med WordPress-användare eller kända kontakter.
- **Grindar för mänskligt godkännande** pausar känsliga åtgärder tills en behörig användare granskar och bekräftar dem.
- **Påminnelseposter** förhindrar dubblettnotiser när schemalagda jobb försöker igen eller upprepas.
- **TextBee SMS-notiser** skickar konfigurerade textmeddelanden endast när SMS-uppgifter och arbetsflödesbehörigheter är aktiverade.

Rekommenderat arbetsflöde: be agenten att förbereda meddelandet eller åtgärden, granska godkännandeprompten och låt sedan den godkända åtgärden fortsätta. För återkommande påminnelser, håll deduplicering av påminnelser aktiverad så att samma händelse eller kontakt inte aviseras upprepade gånger.

---

## Anpassa agenter {#customising-agents}

Varje inbyggd agent kan utökas eller ersättas via filtret `gratis_ai_agent_agents`.

### Lägga till en anpassad systemprompt till en befintlig agent {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrera en ny agent {#registering-a-new-agent}

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

Den nya agenten visas i Agent Picker omedelbart efter att filtret körs.

### Ta bort en inbyggd agent {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
