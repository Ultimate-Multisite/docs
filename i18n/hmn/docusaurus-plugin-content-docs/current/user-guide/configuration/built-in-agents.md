---
title: Cov Agent uas twb muaj nrog
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Cov Agent Uas Muaj Los Nrog

Gratis AI Agent v1.9.0 los nrog tsib tus agent uas muaj los nrog, txhua tus twb npaj ua ntej nrog ib pawg cuab yeej uas tsom rau ib yam haujlwm, ib qho system prompt uas kho kom haum, thiab cov lus qhia pib uas phim cov haujlwm nquag ua hauv thaj chaw ntawd. Thaum hloov ntawm ib tus agent mus rau lwm tus, nws hloov yam uas tus assistant ua tau thiab txoj kev nws teb — yam tsis tas koj teeb tsa dab tsi li. Superdav AI Agent v1.18.0 tuaj yeem ntxiv cov cuab yeej uas paub txog schedule, cov reminder records, approval gates, thiab SMS notifications rau cov workflow no thaum cov integrations uas cuam tshuam twb teeb tsa lawm.

## Agent Yog Dab Tsi?

Txhua tus agent yog ib qho configuration profile muaj npe uas sib xyaw:

- **Cuab yeej** — cov peev xwm uas tus agent raug tso cai hu siv (xws li Content Writer muaj kev nkag mus rau cov peev xwm tsim post; Design Studio muaj kev nkag mus rau CSS thiab theme.json peev xwm)
- **System prompt** — cov lus qhia uas teeb tus agent lub suab, yam tseem ceeb, thiab cov kev txwv
- **Cov lus qhia** — cov prompt uas twb sau ua ntej, pom hauv chat interface los pab koj pib sai

## Nkag Mus Rau Agent Picker

1. Qhib lub **Gratis AI Agent** panel hauv WordPress admin sidebar.
2. Nyem lub **agent icon** nyob rau sab laug saum toj ntawm chat header (lub icon hloov kom qhia tus agent uas tab tom siv).
3. **Agent Picker** qhib ua ib qho form-table overlay. Txhua tus agent raug teev nrog nws lub icon, npe, thiab ib kab lus piav qhia.
4. Nyem rau ib kab agent kom qhib siv. Chat header hloov tam sim ntawd.

Koj kuj hloov tau agents thaum tseem tab tom sib tham — tus agent tshiab lub system prompt yuav pib siv txij ntawm zaj lus tom ntej.

## Tsib Tus Agent Uas Muaj Los Nrog

### Content Writer

**Tsom rau:** Tsim thiab kho posts, pages, thiab contact forms.

**Cov cuab yeej muaj:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Thaum qhib Superdav AI Agent v1.18.0 integrations, configured calendar context, approval gates, reminders, thiab SMS notification tools kuj yuav muaj rau cov workflows uas raug pom zoo.

**Yam nws ua tau zoo:**
- Sau thiab luam tawm blog posts los ntawm ib brief lossis outline
- Tsim ntau landing pages ua ke rau ib lub site tshiab
- Tsim contact thiab enquiry forms
- Teeb featured images rau posts los ntawm URL lossis search
- Sau event follow-up messages los ntawm configured Google Calendar context, ces nres tos approval ua ntej xa notifications

**Cov lus qhia pib:**
- *Sau ib zaj blog post 500 lo lus txog cov txiaj ntsig ntawm WordPress multisite.*
- *Tsim ib nplooj About, Services, thiab Contact thiab luam tawm lawv.*
- *Ntxiv ib booking enquiry form rau nplooj Contact.*
- *Sau ib reminder rau cov neeg tuaj koom qhov configured calendar event tag kis thiab tos approval ua ntej xa nws.*

---

### Site Builder

**Tsom rau:** Tsim website txij pib mus txog kawg los ntawm ib prompt xwb.

**Cov cuab yeej muaj:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Nrog Superdav AI Agent v1.18.0, configured managed-service, approval, reminder, calendar, thiab SMS tools yuav muaj tau qhov twg administrators qhib lawv.

**Yam nws ua tau zoo:**
- Tsim ib multi-phase site build plan rau hom lag luam uas piav qhia
- Ua txhua theem tau nws tus kheej — structure, content, navigation, design
- Rov kho tau thaum muaj yuam kev nyob nruab nrab plan yam tsis tas muaj neeg cuam tshuam manually
- Install cov plugins uas pom zoo ua ib feem ntawm build
- Tsim contact forms ncaj qha los ntawm chat interface (Superdav AI Agent v1.10.0+)
- Tswj launch reminders lossis attendee follow-up yam tsis muaj notifications rov qab dua thaum approval gates thiab reminder records qhib

**Cov lus qhia pib:**
- *Tsim ib photography portfolio site nrog gallery post type, ib booking page, thiab ib contact form.*
- *Tsim ib restaurant website nrog online menu, opening hours, thiab table-booking enquiry form.*
- *Teeb ib freelance consulting site nrog service pages, portfolio section, thiab blog.*
- *Ntxiv ib contact form rau nplooj Contact siv site builder.*
- *Tom qab site launch checklist raug pom zoo, xa ib SMS reminder rau configured stakeholder contact.*

---

### Design Studio

**Tsom rau:** Kev kho kom zoo nkauj pom qhov muag — colours, typography, CSS, thiab block patterns.

**Cov cuab yeej muaj:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Yam nws ua tau zoo:**
- Siv theme presets uas muaj npe (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Kho global typography thiab colour palettes kom meej dua ntawm theme.json
- Ntxig custom CSS rau brand-specific overrides
- Nqa screenshot ntawm ib nplooj thiab tshuaj xyuas nws rau design issues

**Cov lus qhia pib:**
- *Siv warm-editorial preset thiab tom qab ntawd teeb primary colour rau #2d6a4f.*
- *Nqa screenshot ntawm homepage thiab qhia kuv seb koj yuav txhim kho dab tsi.*
- *Tsim ib reusable hero block pattern nrog full-width background image thiab centred heading.*

### Plugin Manager

**Tsom rau:** Nrhiav, install, thiab tswj WordPress plugins.

**Cov cuab yeej muaj:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Yam nws ua tau zoo:**
- Pom zoo plugin zoo tshaj rau ib use case uas piav qhia
- Install ability packs los ntawm registry
- Xauj ability catalogue uas muaj raws category

**Cov lus qhia pib:**
- *Plugin twg yog qhov zoo tshaj rau membership directory?*
- *Install WooCommerce abilities pack.*
- *Qhia kuv tag nrho ecommerce ability packs uas muaj.*

---

### Support Assistant

**Tsom rau:** Teb cov lus nug txog site content, settings, thiab WordPress configuration.

**Cov cuab yeej muaj:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Yam nws ua tau zoo:**
- Tshawb xyuas cov kev teeb tsa thiab kev xaiv tam sim no ntawm lub vev xaib
- Piav qhia tias cov post types, taxonomies, thiab cov ntawv qhia twg raug teeb tsa rau ntawm lub vev xaib
- Teb cov lus nug "qhov kev teeb tsa no ua dab tsi?" los ntawm kev nyeem cov nqi uas tab tom siv
- Ua ib txheej tshuaj xyuas uas tsuas nyeem tau xwb ua ntej yuav hloov pauv

**Cov lus qhia pib:**
- *Cov plugins thiab kev teeb tsa twg tab tom qhib siv rau ntawm lub vev xaib no?*
- *Sau tag nrho cov custom post types uas tau sau npe rau ntawm lub vev xaib no.*
- *Muaj cov ntawv qhia kev taw qhia twg thiab lawv raug muab tso rau qhov twg?*

---

## Kev Txuas Automation ntawm Superdav

Thaum Superdav AI Agent v1.18.0 cov kev txuas raug teeb tsa lawm, cov agent uas muaj nrog tuaj yeem koom rau hauv cov workflow automation uas paub txog sij hawm thiab muaj kev nyab xeeb dua:

- **Google Calendar cov cuab yeej nyeem** tso cai rau cov agent tshuaj xyuas cov calendar thiab event uas tau teeb tsa ua ntej tsim cov haujlwm txuas ntxiv.
- **Kev map cov contact thiab attendee** pab phim cov neeg koom event rau WordPress cov neeg siv lossis cov contact uas twb paub lawm.
- **Cov rooj vag pom zoo los ntawm tib neeg** nres cov kev ua uas rhiab heev kom txog thaum tus neeg siv uas tau tso cai tshuaj xyuas thiab lees paub.
- **Cov reminder records** tiv thaiv kev xa ceeb toom sib tshooj thaum cov haujlwm teem sij hawm rov sim dua lossis rov ua dua.
- **TextBee SMS notifications** xa cov ntawv xov configured tsuas yog thaum SMS credentials thiab workflow permissions raug qhib siv lawm xwb.

Workflow uas pom zoo: thov kom agent npaj cov lus lossis kev ua, tshuaj xyuas approval prompt, ces cia qhov kev ua uas tau pom zoo rov pib dua. Rau recurring reminders, cia reminder deduplication qhib siv kom tib event lossis contact tsis raug ceeb toom rov thiab rov.

---

## Kho Agents raws li xav tau

Txhua tus built-in agent tuaj yeem txuas ntxiv lossis hloov los ntawm `gratis_ai_agent_agents` filter.

### Ntxiv custom system prompt rau ib tus agent uas twb muaj lawm

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Sau npe agent tshiab

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

Tus agent tshiab tshwm hauv Agent Picker tam sim ntawd tom qab filter khiav.

### Tshem ib tus built-in agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
