---
title: Inbyggda agenter
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Inbyggda agenter

Gratis AI Agent v1.9.0 levereras med fem inbyggda agenter. Varje agent är förkonfigurerad med en specifik uppsättning verktyg, en anpassad systemprompt och startförslag som matchar vanliga uppgifter inom det området. Att byta mellan agenter ändrar vad assistenten kan göra och hur den svarar – utan att du behöver göra någon konfiguration.

## Vad är en agent?

Varje agent är en namngiven konfigurationsprofil som kombinerar:

- **Verktyg (Tools)** — förmågor som agenten får använda (till exempel har en Content Writer tillgång till funktioner för att skapa inlägg; en Design Studio har tillgång till CSS- och theme.json-funktioner)
- **Systemprompt** — instruktioner som sätter agentens ton, prioriteringar och begränsningar
- **Förslag (Suggestions)** — förskrivna prompts som visas i chattgränssnittet för att hjälpa dig att komma igång snabbt

## Hur du hittar agenten

1. Öppna panelen **Gratis AI Agent** i WordPress-administratörsmenyn.
2. Klicka på **agent-ikonen** längst upp till vänster i chattrubriken (ikonen ändras för att spegla den aktiva agenten).
3. **Agentväljaren (Agent Picker)** öppnas som ett överlägg i form-tabellformat. Varje agent listas med sin ikon, namn och en kort beskrivning.
4. Klicka på en agentrad för att aktivera den. Chattrubriken uppdateras omedelbart.

Du kan också byta agenter mitt i ett samtal – den nya agentens systemprompt träder i kraft från nästa meddelande.

## De fem inbyggda agenterna

### Content Writer (Innehållsskribent)

**Fokus:** Skapa och redigera inlägg, sidor och kontaktformulär.

**Tillgängliga verktyg:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Vad den gör bra:**
- Skriva och publicera blogginlägg utifrån ett utkast eller en disposition
- Skapa batcher av landningssidor för en ny webbplats
- Bygga kontakt- och förfrågningsformulär
- Ställa in huvudbilder på inlägg från en URL eller genom sökning

**Startförslag:**
- *Skriv ett 500-ords blogginlägg om fördelarna med WordPress multisite.*
- *Skapa en Om oss-, Tjänster- och Kontakt-sida och publicera dem.*
- *Lägg till ett bokningsförfrågningsformulär på kontaktsidan.*

---

### Site Builder (Webbplatsbyggare)

**Fokus:** Skapa en hel webbplats från en enda prompt.

**Tillgängliga verktyg:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Vad den gör bra:**
- Generera en flerstegsplan för webbplatsbyggandet baserat på en beskriven bransch
- Utföra varje fas autonomt – struktur, innehåll, navigering, design
- Återhämta sig från fel mitt i planeringen utan att kräva manuell inblandning
- Installera rekommenderade plugins som en del av byggprocessen
- Skapa kontaktformulär direkt från chattgränssnittet (Superdav AI Agent v1.10.0+)

**Startförslag:**
- *Bygg en fotoportfölj med en galleri-posttyp, en bokningssida och ett kontaktformulär.*
- *Skapa en restaurangwebbplats med en online meny, öppettider och ett bordbokningsformulär.*
- *Ställ in en webbplats för frilanskonsultation med tjänstesidor, en portföljsektion och en blogg.*
- *Lägg till ett kontaktformulär på kontaktsidan med hjälp av webbplatsbyggaren.*

---

### Design Studio (Designstudio)

**Fokus:** Visuell anpassning – färger, typografi, CSS och blockmönster.

**Tillgängliga verktyg:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Vad den gör bra:**
- Applicera namngivna tema-presets (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Finjustera global typografi och färgpaletter via theme.json
- Injicera anpassad CSS för varumänspecifika överstyrningar
- Ta en skärmdump av en sida och granska den efter designproblem

**Startförslag:**
- *Applicera warm-editorial-preset och ställ sedan den primära färgen på #2d6a4f.*
- *Ta en skärmdump av startsidan och säg vad du skulle förbättra.*
- *Skapa ett återanvändbart hero-blockmönster med en fullbreddsbakgrundsbild och centrerad rubrik.*

---

### Plugin Manager (Plugin-hanterare)

**Fokus:** Upptäcka, installera och hantera WordPress-plugins.

**Tillgängliga verktyg:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Vad den gör bra:**
- Rekommendera det bästa pluginet för ett beskrivet användningsfall
- Installera förmågepaket från registret
- Bläddra bland tillgängliga förmågekataloger efter kategori

**Startförslag:**
- *Vad är det bästa pluginet för ett medlemskapsregister?*
- *Installera WooCommerce abilities pack.*
- *Visa alla tillgängliga e-handelsförmågepaket.*

---

### Support Assistant (Supportassistent)

**Fokus:** Svara på frågor om webbplatsens innehåll, inställningar och WordPress-konfiguration.

**Tillgängliga verktyg:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Vad den gör bra:**
- Hämta aktuella webbplatsinställningar och alternativ
- Förklara vilka posttyper, taksonomier och menyer som är konfigurerade på webbplatsen
- Svara på frågor som "vad gör den här inställningen?" genom att läsa livevärden
- Fungera som ett läs-endast diagnostiklager innan ändringar görs

**Startförslag:**
- *Vilka plugins och inställningar är aktiva på denna webbplats?*
- *Lista alla anpassade posttyper som är registrerade på denna webbplats.*
- *Vilka navigeringsmenyer finns och var är de tilldelade?*

---

## Anpassa agenter

Varje inbyggd agent kan utökas eller ersättas via filtret `gratis_ai_agent_agents`.

### Lägga till en anpassad systemprompt till en befintlig agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registrera en ny agent

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

Den nya agenten visas i Agentväljaren direkt efter att filtret har körts.

### Ta bort en inbyggd agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
