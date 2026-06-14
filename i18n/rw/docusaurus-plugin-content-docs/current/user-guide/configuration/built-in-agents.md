---
title: Agente zikoreshwa mu gihugu
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents Zikurikira (Built-in)

Gratis AI Agent v1.9.0 yitera agent gishumi, byo mu gihe cyangwa bishobora gukoreshwa, byo byari bifite uburyo bw'ubwujgwa bwo gukoresha ibindi bikoresho (tools), uburyo bwo kuvuga (system prompt) bukurikirana, n'ibyo bisobanura mu chat kugira ngo umenye uko wumuvuga. Kugera ku gihe cyangwa ku gihe cyiza, ugashyira agent runaka byiza kandi nta kumenya ibindi.

## Icyo ni Agent?

Agent cyose ni uburyo bwo gukoresha (configuration profile) bifite ibi bikurikira:

- **Tools** — ibyo agent yashobora gukoresha (gukoresha ibindi bikoresho). Urugero, Content Writer ashobora gukoresha `create_post` (gukora post), Design Studio ashobora gukoresha CSS n'theme.json.
- **System prompt** — inama zishobora gutera uburyo umuvuga we, ibyo byoroshye cyane, no guhindura ibyo yashobora gukora.
- **Suggestions** — amagambo y'ibindi (prompts) yashobora kumenya mu chat kugira ngo wumuvugire uburyo bwo kwandika.

## Gukoresha Agent Picker

1. Gukoresha panel ya **Gratis AI Agent** muri WordPress admin sidebar.
2. Gukoresha **agent icon** y'ingenzi mu gice cy'chat (icon yashobora guhinduka kugira ngo umenye agent wumuvuga).
3. **Agent Picker** izahindura nk'form-table. Agent byose bishoborwa kubona n'ubwujgwa bwo gukoresha, izina ryayo, no uburyo bw'ibyo bishobora gukora mu gice cy'chat.
4. Gukoresha row ya agent kugira ngo umuvugire. Icyo kigisha chat header kigisha nk'ubwujgwa bwo gukoresha.

Ushobora kandi guhindura agent mu gihe cyangwa mu gihe cyiza cy'chat — uburyo bw'system prompt bw'agent yashya bishobora gutera ku message ya mbere.

## Agent Gishumi Byiri (Five Built-in Agents)

### Content Writer

**Ubwujgwa:** Gukora no gukoresha post, pages, n'contact forms.

**Icyo ashobora gukoresha:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Inyiza y'ibyo yiza:**
- Gutangura no gukoresha blog posts ku gukoresha uburyo cyangwa umugambi w'ubwujgwa (outline)
- Gukora batch ya landing pages mu gihe cyose ku site yashya
- Gukora forms z'ubwumvikane n'ibyo bishobora kubona (enquiry forms)

**Uburyo bwo kwandikira:**
- *Andika blog post ya 500 words ku byo mu bwiza bwa WordPress multisite.*
- *Gukora About, Services, n'Contact page kandi gukoresha.*
- *Kugira form y'ubwumvikane (booking enquiry form) ku Contact page.*

---

### Site Builder

**Uburyo bwo kwigisha:** Gukora website mu gihe cyose ku gice cyacyo gihariye.

**Icyiza cyo gukoresha:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Inyiza y'ibyo bishobora gukora neza:**
- Gukora uburyo bw'ubwujgwa bw'ubwoko bw'ubucuruzi bukurikirana mu gihe cyose.
- Gukoresha uburyo bwo gukora ku gihe cyose — uburyo, ubwujgwa (content), uburyo bwo kwiga (navigation), uburyo bwo gukoresha (design).
- Kwibuka ibyo bitewe n'ibindi byo mu gihe cyiza kandi nta kumenya.
- Gukoresha plugins zikoreshwa neza nk'uko hari mu gihe cyose.
- Gukora forms z'ubwumvikane ku chat interface (Superdav AI Agent v1.10.0+).

**Inyiza y'ibyo bishobora gukora:**
- *Gukora site ya photography na gallery post type, booking page, n'contact form.*
- *Gukora website ya restaurant yakoresha menu online, orurimi rwo kwiga (opening hours), n'enquiry form y'ubwumvikane bwo gukoresha umunsi.*
- *Kugira site ya freelance consulting yakoresha service pages, portfolio section, n'blog.*
- *Gukora contact form ku Contact page uburyo bwo Site Builder.*

---

### Design Studio

**Uburyo bwo kwigisha:** Gukora uburyo bwiza bwa gukoresha — ubwujgwa (colours), uburyo bwo gukoresha amagambo (typography), CSS, n'ibyo mu buryo bwo gukoresha (block patterns).

**Icyo cyo gukoresha (Tools)**: `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Icyo gukora neza:**
- Gukoresha named theme presets (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Gutera umwihariko w'ubwoko bw'umutwe n'uburyo bwo gukoresha uburyo bwa `theme.json`
- Gukoresha CSS cyiza ku muntu w'ubwoko kugira ngo yoroshye ibintu by'ubwoko (brand)
- Gukora screenshot ya page kandi gushyira umwihariko mu gihe kumenya ibintu by'ubwoko

**Uburyo bwo kwikiraho (Starter suggestions):**
- *Gukoresha preset `warm-editorial` kandi gukoresha uburyo bwa primary colour ni `#2d6a4f`.*
- *Gukora screenshot ya homepage kandi mufashe ibyo wumva ko ushaka guhindura.*
- *Gukora block pattern yiza ku hero (hero) y'ubwoko bwose n'ibinyabwensi by'ubwoko bwawe mu gice cy'indwara.*

---

### Plugin Manager

**Ubwoko:** Gushyira, gukoresha no gutera ku plugin za WordPress.

**Icyo gukora neza:**
- Gutera umugambi w'ibinyabwensi (plugin) cyiza kuri uburyo ushaka gukoresha
- Gukoresha ability packs zikoreshwa mu registry
- Gukoresha catalogue y'ibinyabwensi byiza mu gihe cyangwa mu gice

**Uburyo bwo kwikiraho (Starter suggestions):**
- *Icyo ni plugin cyiza kuri membership directory?*
- *Gukoresha ability pack ya WooCommerce.*
- *Mufashe uburyo bwose bwa ability packs by ecommerce.*

---

### Support Assistant

**Ubwoko:** Kugaga ibyo mu gihe cyangwa ku ngingo z'ubwoko, ibyerekezo (settings), n'uburyo bwo gukoresha WordPress.

**Icyo gukora neza:**
- Gutera umugambi w'ibinyabwensi (plugin) cyiza kuri uburyo ushaka gukoresha
- Gukoresha `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Inyaremye yiza:**
- Gushakira uburyo bwo gukoresha amakuru y'umuryango (site settings) n'ibyo byo mu gihe.
- Gutangira ibyo post types, taxonomies, n'menus yashyizwe ku muri site.
- Guhagariko "iki gikorwa cyo uburyo bwo gukoresha iki?" uburengaho ibyo byo mu gihe (live values).
- Gukora umuryango w'ubwujgwa bw'umuryango mbere yemeza ibyo.

**Urugero rushobora gufata:**
- *Icyo gikorwa cyangwa ibyo byo mu gihe byari byiza ku site uyu munsi?*
- *Gusobanura uburyo bwo gukoresha post types yose yashyizwe ku muri site.*
- *Urugero rwo gutegura (navigation menus) ryose ryari ryari, kandi hari aho yashyizwe?*

---

## Gukora Uburyo Bwo Gukoresha (Customising Agents)

Uburyo bwo gukoresha uburyo bwo gukoresha (agent) buhurirwa cyangwa guhindurwa binyuze mu filter `gratis_ai_agent_agents`.

### Gutera umuvugizi w'umuryango (Adding a custom system prompt to an existing agent)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Gutera uburyo bwo gukoresha runCyura (Registering a new agent)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Ibyo byo gukoresha post n'ibyo byo gukoresha (pages) kugira ngo byoroshye ku buryo bwo gutegura (search engines).',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Wowe ni SEO specialist. Gukora uburyo bwo gukoresha amakuru (keyword optimisation), meta descriptions, n'ibyo byo gutegura (structured data).',
        'suggestions'   => [
            'Gushyira umwanya ku tituli ry'umuryango (homepage title) n'umwanya w'ubwujgwa (meta description).',
            'Kugera uburyo bwo gukoresha tituli (title tag) mu gihe cyose y'ibintu byo gukoresha post 5 byo mu gihe.'
        ],
    ];
    return $agents;
} );
```

Urugero rwa agentya rya gishobora kumenya mu Agent Picker nyuma y'uko filter yashyize.

### Gukoresha agent ya mbere (built-in agent)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
