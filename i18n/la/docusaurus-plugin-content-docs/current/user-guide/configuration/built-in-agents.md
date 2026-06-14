---
title: Agentes integrati
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agentes Integrados

Gratis AI Agent v1.9.0 veni quinque agentes integratos, quoque preconfigurati cum un set de instrumentis foculato, system prompt tailorium et suggestionibus initialibus adhibitis quae ad operationes communes in illo ambito concordant. Mutatio inter agentes mutat quid assistens facere potest et quommodo respondet — sine aliqua configuration ex parte tua.

## Quid Est Agent?

Chacun agent est profil configurativus nominatus qui combinat:

- **Instrumenta** — potestates quas agenti permittitur invocare (e.g. Scriptora Contentum habet accessum ad operationes creationis post; Studio Design habet accessum ad CSS et theme.json).
- **System prompt** — instructiones quae tonum, prioritates et limitas agentis statant.
- **Suggestiones** — prompts praec립tissimi ostendentes in interface chat ad tuam celeriter initiandam.

## Accedere ad Selector Agentium

1. Aperire panel **Gratis AI Agent** in sidebar admin WordPress.
2. Cliurare in **icona agentis** in angulo superiore sinistro header chati (icona mutatur ut reflectat agentem activum).
3. **Agent Picker** aperitur ut overlay forma-tabula. Omnis agenti listatus cum suo iconibus, nomine et descripzio unius lineae.
4. Cliurare in riga agentis ad eam activare. Header chati immedia updates.

Possuis etiam agentes mutare in medio conversationis — system prompt novae agentis ex proximo message efficitur.

## Quinti Agentes Integrati

### Scriptora Contentum (Content Writer)

**Focus:** Creare et editare posts, pages et forma contactus.

**Instrumenta Disponibilia:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Quid bene facit:**
- Redigere et publicare articles de blog ex brevibus vel schemate
- Creare lotas paginas aterrizium (landing pages) pro novo site
- Construere forma contactuum et interrogatorum
- Stabilire imagines destacatas in postis ex URL vel quaeritione

**Suggestiones initiales:**
- *Scriber article de blog 500 verbiis de vobis vantibus WordPress multisite.*
- *Creare paginas De Nostro, Servitia et Contactum et publicare eos.*
- *Adde formam interrogatorum ad paginam Contactum.*

---

### Site Builder (Construtor Situs)

**Focus:** Creatio completa siti ex uno prompt.

**Instrumenta disponenda:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Quid bene facit:**
- Generare plan constructionis siti multi-phasam pro genere societatis descritto.
- Executio omnium phasium autonomiter — structura, contentus, navigationem, design.
- Recuperatio ex erroribus in medio planis sine interventione manuali requiritore.
- Installatio pluginum recomendatorum ut parte constructionis sit.
- Creare formas contactuum directam ex interface chat (Superdav AI Agent v1.10.0+).

**Suggestiones initiales:**
- *Construere situs portfolio fotograficum cum typum postis galeriae, paginae reservationis et formam contacti.*
- *Creare situs restaurantis cum menue online, horaris aperturis et formam interrogatorum ad reservandum mensam.*
- *Stabilire situs consultori freelance cum paginis servituum, sectione portfolio et blog.*
- *Adde formam contacti ad paginam Contactum uti builder sito.*

---

### Design Studio (Studio Design)

**Focus:** Customizatio visua — colores, typographia, CSS et pattern blocorum.

**Instrumenta Disponibiles:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Quid facit bene:**
- Aplicare preset themorum nominatos (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ajustare la tipografia globalem et palettas colorum per theme.json
- Injectare CSS customem pro superationibus specificis brande
- Capturare screenshot paginae et reverendur de qua est inproblematibus design

**Suggestiones Initiales:**
- *Aplicare preset warm-editorial et deinde statum primarium ad #2d6a4f ponere.*
- *Capturare screenshot hominis et dic mi quid melior faceris.*
- *Creare pattern block hero reusabilium cum imagene in plenum largitudinis et titulo centrato.*

---

### Plugin Manager (Manager Plugin)

**Focus:** Descubere, installare et administrare plugin WordPress.

**Instrumenta Disponibiles:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Quid facit bene:**
- Recomminare optimam plugin pro casu usus descritto
- Installare packs ability ab registro
- Percurrere catalogum ability disponibles per categoria

**Suggestiones Initiales:**
- *Quid est optimus plugin pro directory adhaerendi?*
- *Installare pack ability WooCommerce.*
- *Mete mi omnia packs ability ecommerce disponibili.*

---

### Support Assistant (Assistens Supportis)

**Focus:** Responder in quaestionibus de contentu siti, statuis et configuration WordPress.

**Instrumenta Disponibiles:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Quid bene facit:**
- Quaerere la configuratio et optiones actuales situii.
- Explicare quid post types, taxonomiae et menues sita sunt in sitū.
- Responderre ad quaestionem "quid facit haec configuratio?" legendo valores vivas.
- Servire ut capa diagnosticus solum lectionis antequam quiddam mutandum agitur.

**Suggestiones initiales:**
- *Quæ plugin et optiones sunt in hoc sitū actualia?*
- *Enumerare omnia custom post types registranda in hoc sitū.*
- *Quæ menues navigationis existent sunt et ubi sunt assignati?*

---

## Customisation Agentium

Omnis agentus integratus potest dilatari vel substituendus per filter `gratis_ai_agent_agents`.

### Adde restrum system prompt custom ad agentum existere

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nSemper scriber in Inglese Britannico et usa virgulam Oxford.";
    }
    return $agents;
} );
```

### Registrare agentum novum

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimisation postuum et paginarum ad motores quaerendi.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Tu es SEO specialist. Focus in optimisation verborum, meta descriptions et data structura.',
        'suggestions'   => [
            'Revisa titulam hominis et meta description hominis.',
            'Suggestiones ad praesertationem tag tituli pro quinque postis novissimis.',
        ],
    ];
    return $agents;
} );
```

Il novus agent in Agent Picker apparit immediately post filter.

### Removendo un agent integrato

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
