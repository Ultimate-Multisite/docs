---
title: Aelodau cyflwyniadol
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Aithau Agentau

Mae'r Gratis AI Agent v1.9.0 yn cyflwyno puman ychwanegau (agents) a'i gynnwys, gyda chwarae o ffurfau toolau wedi'u cyflwyno, system prompt wedi'i ddefnyddio, a chwarae cynlluniau sydd wedi'u cyfleidio â'r pethau cyffredinol yn y dyfodol. Mae newid o ganol ychwanegau yn newid beth gall y asiantgell ei wneud a sut mae'n ymateb — heb unrhyw ffurf ar eich talyb.

## Beth yw Agent?

Mae pob agent yn profiad cyflwynig wedi'i enw sy'n cyfuno:

- **Toolau** — y gallu'r agent ei gael ei chwarae (e.e., mae ganwr Llyfrgwr Contynyd am sicrion o ddefnyddio; mae ganstaf Desain Studio am cyfathrebu CSS a theme.json).
- **System prompt** — gyfarwyddiadau sy'n setio'r ton y agent, priodau, a chynlluniau.
- **Cynlluniau** — cynlluniau wedi'u ysgrifennu yn cael eu dangos mewn ffurf chat i helpu chi i ddechrau'n gwneud hynny yn gyflym.

## Cyffurfio'r Gofyn Agentau (Agent Picker)

1. Agorwch y panel **Gratis AI Agent** yn y sidebar admin o WordPress.
2. Clic ar y **icon agent** yn y cyfeiriad uchel o'r header chat (mae'r icon yn newid i ddefnyddio'r agent sydd yn gweithredol).
3. Mae'r **Agent Picker** yn agor fel overlay ffurf-tabl. Mae pob agent wedi'i llywio gyda'i icon, enw, a disgrifiad un-linell.
4. Clic ar rydd ychwanegau i'w chwarae. Mae'r header chat yn newid yn gyflym.

Gallwch hefyd newid o ganol ychwanegau yn y cyfarfod — mae system prompt y agent newydd yn gweithio o'r message nesaf.

## Ymystyr y Puman Agentau Cyflwynig

### Llyfrgwr Contynyd (Content Writer)

**Ffocws:** Creu a redig postau, peidiadau, a ffurfi cyfathrebu.

**Toolau ar gael:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Beth yw'r ddefnyddiolwch iawn:**
- Cyfathrebu a cyhoeddi blogau o'r amgylchedd neu drafiad
- Creu batchau o landinogau (landing pages) ar gyfer safle newydd
- Cynllunio ffurfau cyfathrebu a gwrth-cysylltu (enquiry forms)
- Setio pwyllgorau (featured images) ar y postau o'r URL neu dros y chwilio

**Cyflwyniadau cynnes:**
- *Gwyrchweidio blog 500-gofal am ychwanegau WordPress multisite.*
- *Creu dudalen About, Gwasanaethau (Services), a Cyfathrebu (Contact) ac cyhoeddi nhw.*
- *Ymddangos ffurf gwrth-cysylltu ag y Contact page.*

---

### Site Builder

**Focws:** Creu safle web o'r deithio i'r diwedd o'r amgylchedd un drafiad.

**Cynlluniau a ddefnyddi:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Beth yw'r ddefnyddiolwch iawn:**
- Cyfathrebu plan adeiladu safle am ychwanegau (site build plan) am gweithredol a ddargiwyd
- Cyflawni pob cyfnod yn autodol — stratig, cynnwys, gyfeiriad, dylunio
- Gwrth-drefn o erru'n ymlaen yn y plan heb angen gweithrediad manwl
- Cynllunio pluginau a ddargiwyd fel rhan o'r adeiladu
- Creu ffurfau cyfathrebu yn uniongyrchol o'r chat interface (Superdav AI Agent v1.10.0+)

**Cyflwyniadau cynnes:**
- *Gwyrchweidio safle portfolio llunio gyda post type galler, dudalen gwrth-cysylltu, a ffurf cyfathrebu.*
- *Creu safle gwaith cawl gyda menu online, amserau gyflwyniad, a ffurf gwrth-cysylltu ar gyfer cyfeiriad byddau.*
- *Setio safle gweithredol (freelance consulting) gyda mynediadau gwasanaeth, sefyllfa portfolio, a blog.*
- *Ymddangos ffurf cyfathrebu i'r Contact page gan ddefnyddio'r Site Builder.*

---

### Design Studio

**Focws:** Cyflawni dylunio personol — celfau, tyngeddiant, CSS, a pethau blocau (block patterns).

**Toolaurolau:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Beth yn dda:**
- Mae'n cyflawni presennau theme (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Gwahanu y tygdefnyddol a'r paledau gwynion ar gyfer ychwanegau drwy theme.json
- Cyflawni CSS newydd ar gyfer cyfathrebu brand
- Ailtawch llwybr o'r peidiad ac gwylio ei ddefnyddiol am anwylydiaeth

**Cyflwyniadau ychwanegol:**
- *Aplilio presennau warm-editorial a ddodyn y paled gwynion cyntaf i #2d6a4f.*
- *Ailtawch llwybr o'r peidiad ar y gartref cyntaf a dweud i mi beth byddwch yn gwella.*
- *Creu presennau bloc hero (hero block pattern) sydd â chymorth fawr gyda'r llwybr ffôn a genedig yn canol.*

---

### Plugin Manager

**Ffocws:** Disgwylio, gosi, a rheoli pluginau WordPress.

**Toolau cyflwrnaidd:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Beth yn dda:**
- Cyflwyno'r plugin yfan i'r ddefnydd a nodwyd
- Gosio packau abilitied o'r registry
- Gwylio cyfathrebu abilitied ar gyfer y cyfathrebu

**Cyflwyniadau ychwanegol:**
- *Beth yw'r plugin yfan i ddiriedig gweithredol?*
- *Gosio pack abilitied WooCommerce.*
- *Ailtawch ddweud i mi pob pack abilitied cyfathrebu sydd ar gael.*

---

### Support Assistant

**Ffocws:** Aros cwestiadau am cynnwys y safle, setiau, a chwarae WordPress.

**Toolau cyflwrnaidd:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Beth mae'r ddefnyddio'n iawn:**
- Gwylio am y setau a opsiynau ar gyfer y safle ar hyn o bryd.
- Esbonio beth yw post types, taxonomies, a menus a cael eu cyflwyno ar y safle.
- Aros y cwestiynau "Beth mae'r setiad hwn yn ei wneud?" gan ddefnyddio gwerthau byw.
- Cynllun fel lwybr diagnostig ar gyfer ychwanegu cyn gwneud newidiadau.

**Cysylltiadau canol:**
- *Pa beth yw'r pluginau a setau sydd ar gael ar y safle hwn?*
- *Llisti'r holl post types cyfathrebu wedi'u cyfeiriant ar y safle hwn.*
- *Pa nawvoeddau cyflwyno sydd ar gael ac lle mae gennych yn cael eu cyflwyno?*

---

## Cyfathrebu Agentau (Customising Agents)

Gallai'r agentau sydd ar gael allwngi neu ei gwahanu drwy'r filter `gratis_ai_agent_agents`.

### Ychwanegu prompt system newydd i agent sydd ar gael

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Cyfeiriant agent newydd

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

Mae'r agent new yn dangos yn y Agent Picker ar unwaith ar ôl i'r filter gweithio.

### Ailtaeth agent wedi'i ddefnyddio

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
