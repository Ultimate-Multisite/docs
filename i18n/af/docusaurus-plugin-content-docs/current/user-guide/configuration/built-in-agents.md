---
title: Ingeboude Agents
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Ingeboude Agents

Gratis AI Agent v1.9.0 kom met vyf ingeboude agents, wat elk vooraf gekonfigureer is met 'n gefokusde stel gereedskap, 'n aangepaste sisteme-opdrag, en beginvoorstelle wat by algemene take in daardie area pas. Om tussen agents te skakel verander wat die assistent kan doen en hoe dit reageer — sonder dat jy enige konfigurasie hoef te doen.

## Wat is 'n Agent?

Elke agent is 'n benoemde konfigurasieprofiel wat die volgende kombineer:

- **Gereedskap (Tools)** — die vermoëns wat die agent mag aanroep (bv. 'n Inhoudsskrywers het toegang tot plasing-skeppingsvermoëns; 'n Ontwerpstudio het toegang tot CSS- en theme.json-vermoëns)
- **Sisteme-opdrag (System prompt)** — instruksies wat die agent se toon, prioriteite en beperkings stel
- **Voorstelle (Suggestions)** — vooraf-geskrewe opdrags wat in die klets-koppelvlak vertoon word om jou te help om vinnig te begin

## Toegang tot die Agentkiezer

1. Maak die **Gratis AI Agent** paneel in die WordPress-administrasie-sydbalk oop.
2. Klik op die **agent-ikoon** in die boonste linkerkant van die klets-kop (die ikoon verander om die aktiewe agent te weerspieël).
3. Die **Agentkiezer** oop as 'n vorm-tafel oordekking. Elke agent word gelys met sy ikoon, naam en 'n een-reël beskrywing.
4. Klik op 'n agent-ry te aktiveer. Die klets-kop word onmiddellik opgedateer.

Jy kan ook agents te midde van 'n gesprek skakel — die nuwe agent se sisteme-opdrag trede in vanaf die volgende boodskap.

## Die Vyf Ingeboude Agents

### Inhoudsskrywer (Content Writer)

**Fokus:** Skep en redigeer plase, bladsye en kontakvorms.

**Besoeke gereedskap:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Wat dit goed doen:**
- Opstelle en publiseer van blogplase uit 'n opsomming of raamwerk
- Skep van partye van landingsbladsye vir 'n nuwe webwerf
- Bou van kontak- en navraagvorms
- Stel van hoofprente op plase vanaf 'n URL of soektog

**Beginvoorstelle:**
- *Skryf 'n 500-woord blogplaas oor die voordele van WordPress multisite.*
- *Skep 'n Oor Ons, Dienste en Kontak bladsy en publiseer dit.*
- *Voeg 'n besprekingsnavraagvorm by die Kontak bladsy.*

---

### Webwerfbouer (Site Builder)

**Fokus:** Einde-tot-einde webwerfskep van 'n enkele opdrag.

**Besoeke gereedskap:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Wat dit goed doen:**
- Generering van 'n meerfase webwerfbouplan vir 'n beskryfde besigheidstipe
- Uitvoering van elke fase outonoom — struktuur, inhoud, navigasie, ontwerp
- Herstel van foute te midde van die plan sonder dat handmatige ingryping benodig word
- Installeer van aanbeveelde plugins as deel van die bouproses
- Skep van kontakvorms direk vanaf die klets-koppelvlak (Superdav AI Agent v1.10.0+)

**Beginvoorstelle:**
- *Bou 'n fotografieportefeulje-webwerf met 'n galery-plasbladtipe, 'n besprekingsbladsy en 'n kontakvorm.*
- *Skep 'n restaurantwebwerf met 'n aanlyn-menu, oopmaakure en 'n tafelbesprekingsnavraagvorm.*
- *Stel 'n vrystandige konsultasie-webwerf op met diensbladsye, 'n portefeulje-afdeling en 'n blog.*
- *Voeg 'n kontakvorm by die Kontak bladsy met behulp van die webwerfbouer.*

---

### Ontwerpstudio (Design Studio)

**Fokus:** Visuele aanpassing — kleure, tipografie, CSS en blokpatrone.

**Besoeke gereedskap:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Wat dit goed doen:**
- Toepassing van benoemde tema-voorinstellings (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Verfyn van globale tipografie en kleurepalet te midde van theme.json
- Invoeg van aangepaste CSS vir handelsmerk-spesifieke oortredings
- Neem 'n skermkiekie van 'n bladsy en hersien dit op ontwerpkwessies

**Beginvoorstelle:**
- *Pas die warm-editorial-voorstelling toe en stel dan die primêrekleur op na #2d6a4f.*
- *Neem 'n skermkiekie van die hoofblad en vertel my wat jy sou verbeter.*
- *Skep 'n herbruikbare hero-blokpatroon met 'n volwydte agtergrondbeeld en gesentreerde kop.*

---

### Plugin Bestuurder (Plugin Manager)

**Fokus:** Ontdek, installeer en bestuur WordPress plugins.

**Besoeke gereedskap:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Wat dit goed doen:**
- Aanbevel die beste plugin vir 'n beskryfde gebruikssake
- Installeer vermoëns-pakkette uit die register
- Blaai die beskikbare vermoëns-katalogus volgens kategorie

**Beginvoorstelle:**
- *Wat is die beste plugin vir 'n lidmaatskapdirektoirium?*
- *Installeer die WooCommerce vermoëns-pakket.*
- *Wys my al die beskikbare e-handel vermoëns-pakkette.*

---

### Ondersteuningsassistent (Support Assistant)

**Fokus:** Beantwoord vrae oor webwerf-inhoud, instellings en WordPress-konfigurasie.

**Besoeke gereedskap:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Wat dit goed doen:**
- Opblaai van huidige webwerf-instellings en opsies
- Verduidelik wat plasbladsigte, taksonomieë en menuë op die webwerf gekonfigureer is
- Beantwoord "wat doen hierdie instelling?" vrae deur lewendige waardes te lees
- Dien as 'n lees-alleen diagnostiese laag voordat veranderinge gemaak word

**Beginvoorstelle:**
- *Watter plugins en instellings is tans aktief op hierdie webwerf?*
- *Lys al die aangemelde plasbladtipe op hierdie webwerf.*
- *Watter navigasie-menuë bestaan en waar is dit toegewys?*

---

## Agents Aanpas

Elke ingeboude agent kan uitgebrei of vervang word deur die `gratis_ai_agent_agents` filter.

### Voeg 'n aangepaste sisteme-opdrag by 'n bestaande agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registreer 'n nuwe agent

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

Die nuwe agent verskyn in die Agentkiezer onmiddellik nadat die filter loop.

### Verwyder 'n ingeboude agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
