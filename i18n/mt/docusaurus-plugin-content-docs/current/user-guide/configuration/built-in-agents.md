---
title: Agent built-in
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents Built-in

Gratis AI Agent v1.9.0 tiffra famess agent built-in, liwitt għal għistabbilati b'għodda set ta tool, system prompt mħallat b'mod aħjar, u suggerimenti b'aħħar li jidħlu fil-chat interface biex tħalli l-qiegħed malajr. Il-switch bejn agenti jgħleb x'la ma jgħlebx għal konfigurarja ta'k, b'mod kif jistaq.

## X'la Hu Agent?

Kull agent huwa profili konfigurazzjonali b'isem li jiddeċiedu u jinkludi:

- **Tools** — il-abbli li l-agent jista' jixgħel (e.g., Content Writer għandu l-aċċess għall-abilità ta postaw post; Design Studio għandu l-aċċess għas CSS u theme.json).
- **System prompt** — istruzzjonijiet li jsetto toni, priorità, u limitazzjonijiet tal-agent.
- **Suggestions** — prompts pre-scritti li jidħlu fil-chat interface biex tħalli l-qiegħed malajr.

## Aċċess għall-Agent Picker

1. Iftah il panel ta' **Gratis AI Agent** f'sidebar tal-WordPress admin.
2. Klikka fuq l-**agent icon** fil-kunsill tal-chat header (l-icon jgħleb biex jiffaċċja l-agent attif).
3. L-**Agent Picker** tiffaċċja bħala overlay ta'form-table. Kulle agent jista' jkun mħallat mal-icon tiegħu, ism, u deskrizzjoni waħda linja.
4. Klikka fuq row ta'agent biex tivtaġġih. Il-chat header jidħol immediat.

Tista' tiffaċċja l-agent mid-mezza tal-konversazzjoni — il-system prompt tal-agent الجديد jibda jaffir minn il-messa x-x.

## L-Ħamsa Agent Built-in

### Content Writer

**Fokus:** Il-creaġġ u it-tajjid ta postijiet, pages, u formi ta'kontatt.

**Tools maghdisponi:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**X'laq jidka mhux:**
- Iscritta u pubblika postijiet blog mill-brief o l-outline
- Icrea batch ta landing pages għal siti ġodda
- Ibni formi ta kontatt u propost
- Isetta immagini prominenti fuq postijiet mill-URL jew ricerca

**Iċċekkja inizjali:**
- *Iscritta post blog ta 500 parole dwar il-faydi ta WordPress multisite.*
- *Icrea l-pajna "About", "Services" u "Contact" u pubblikawhom.*
- *Aggiungi form propost għall-pajna Contact.*

---

### Site Builder (Konstruitur siti)

**Fokus:** Kreaw siti kumpli mill-prompt waħdhom.

**Strumenti disponibili:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**X'laq jidka mhux:**
- Icrea plan ta siti multi-fasi għal tip olistiku ta bizness
- Esegui ogni fase awtomatik — struttura, kontent, navigazzjoni, disjin
- Tiffa minn l-erri (error) tajjeb mid-mezza tal-plan mingħajr bżonn interwenzjoni manuali
- Istitu pluginijiet li jgħandu bħala parte tal-build
- Icrea formi ta kontatt dirett mill-chat interface (Superdav AI Agent v1.10.0+)

**Iċċekkja inizjali:**
- *Ibni sito portfolio fotografia b'post type gallery, pajna booking u form propost.*
- *Icrea sito tal-ristorant b'menu on-line, orari aperti u form propost għall-tavola.*
- *Setta sito konsultazzjoni freelance b'pajni servizzi, sezzjoni portfolio u blog.*
- *Aggiungi form propost pajna Contact u għandu l-site builder.*

---

### Design Studio (Studi Disjin)

**Fokus:** Kustomizzazzjoni visiva — colori, tipografja, CSS u pattern tal-bloccji.

**Strumenti Madjufi:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**X'laq il-għodda:**
- Applikazzjoni preset temi b'ispejru (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ażjinna dettaljata għall-tipografia u palette tal-kolori globali minn theme.json
- Inġettar CSS kustom għall-override speċifi għall-brand
- Aħds screenshot ta' una u revidiha b'mod difine għal problemi di disjin

**Iċċekkja inizjali:**
- *Applika il preset warm-editorial u poi set il kolur primarja għal #2d6a4f.*
- *Aħds screenshot tal-homepage u qolru x'la tista' ipprovvdi.*
- *Ikreella pattern block hero riusabbli b'istima widd-background image full-width u heading centrat.*

---

### Plugin Manager

**Fokus:** Diskretji, installa, u tal-ġija plugin ta WordPress.

**Strumenti Madjufi:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**X'laq il-għodda:**
- Tracċja il-plugin l-aħjar għall-istimmjar deskritt tal-użu
- Installazzjoni ta' ability packs mill-registry
- Navigazzjoni fil-catalogue tal-ability disponibbli b'kategorija

**Iċċekkja inizjali:**
- *X'laq il-plugin l-aħjar għal membership directory?*
- *Installaw l-WooCommerce abilities pack.*
- *Mosta'li skogħed li jkun disponibbli echi ability packs ta ecommerce.*

---

### Support Assistant

**Fokus:** Ażswering mistennija dwar is-kontenut tal-site, impostazioni, u konfigurarja ta WordPress.

**Strumenti Madjufi:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**X'laq il-għodda:**
- Tqabbil il-setting u l-opzioni tal-sajr tal-site.
- Spiegħa x'la ma huma post types, taxonomies, u menus konfigurat fuq is-sajr.
- Awni għalliex "x'la jgħidu dan l-setting?" bixxaq il-valuri attivi.
- Servu bħala layer diġagnostiku qira biex tgħmli bid-dinja.

**Iċċekkja inizjali:**
- *X'la plugin u setting huma attivi fuq is-sajr?*
- *Ilista kull custom post types li huma registrati fuq is-sajr.*
- *X'navigazzjoni menus huma l-mejn, u fejn huma assegnati?*

---

## Tajjebiment tal-Agenti (Customising Agents)

Kull agent built-in jista' joltiegħu jew jiddejal għall-għadd `gratis_ai_agent_agents` filter.

### Aggiunga prompt system personal għal agent esistenti

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Iregistra agent ġdid

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

Jirri l-agjent الجديد jappari f'Agent Picker immediat wara li jrun il-filter.

### Aħtal l-agjent built-in (built-in agent)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
