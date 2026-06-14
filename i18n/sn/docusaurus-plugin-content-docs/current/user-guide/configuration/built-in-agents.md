---
title: Vakasi vachigadzirwa
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents Zvinhu

Gratis AI Agent v1.9.0 inosha imbva agenti masimba, zvinoita zviri ne-preconfigured nemazuva anotsanana ekuti zvinhu zvinogona kuita, system prompt yakasimbisa, uye suggestions dzinowanikwa mune chat interface kuti zvibatsire kunge kuuzvikanzi mumwe munzvimbo. Kutanga nezvinhu izvi kunenge zviri kudzidziswa nekuita zvinhu zvakakosha.

## Agent Heino Iyi?

Mwari wese weagenti anogona kuita zvinotevera:

- **Tools** — zvinhu agenti inosimbisa (e.g., Content Writer anogona kuita post, Design Studio anogona kuita CSS uye theme.json).
- **System prompt** — maongororo anotsanana kuti tone ya agenti, zvinhu zvinotariswa, uye zvinhu zviri kuitika (constraints).
- **Suggestions** — prompts dzinowanikwa mune chat interface kuti zvibatsire kunge kuuzvikanzi.

## Kuita Agent Picker

1. Fungisa panel ya **Gratis AI Agent** mu WordPress admin sidebar.
2. Chibvumira **agent icon** mumapfiri ekupedzisira (top-left) pane chat header (icon inotamba kuti inobata agent inosimbiswa).
3. **Agent Picker** inogona kuonekwa se form-table overlay. Agentine dzese dzinowanikwa neicon, zvinoda, uye maongororo ekupedzisira.
4. Chibvumira row ya agenti kuti iitike. Chat header inobata zvakare.

Unogona kutaura agents midzimu — system prompt ya agenti yenyu inosimbiswa kubva mumwe message.

## Agents Masimba Pane Five

### Content Writer

**Focus:** Kuita uye kuenda (editing) posts, pages, uye contact forms.

**Tools Inowanikwa:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Chikoro chine zvinhu zvakanaka:**
- Kuratidza uye kupuburisa blog posts kubva munzauro kana outline yakaita
- Kuita batches ye landing pages dzinotsanana dzinogona kuita site chinobva chinobva
- Kutaura contact forms ne enquiry forms

**Zvinoreva kuti uanze sei:**
- *Raita blog post ya 500 words pamusoro pe zvinhu zvakanaka zve WordPress multisite.*
- *Tainira About, Services, uye Contact page uye panyira zvisiri.*
- *Tainira booking enquiry form kuContact page.*

---

### Site Builder

**Chikoro:** Kuratidza nzira yechikoro chine site chinobva chinobva kubva munzauro imwe.

**Zvinogona kutangwa:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Chikoro chine zvakanaka:**
- Kuratidza plan yekubatanidza site yechikoro kubva munzauro yakaiitika (structure, content, navigation, design)
- Kuita zvinhu zvose mune phase dzese nekuda kwekuti chinotora nechiuri — structure, content, navigation, design.
- Kuti unoreva errors pakati peplani pane kuita zvinhu zvinogona kutanga (manual intervention).
- Kuratidza plugins dzinogona kutangwa separti dze site yechikoro.
- Kuita contact forms kubva mune chat interface (Superdav AI Agent v1.10.0+).

**Zvinoreva kuti uanze sei:**
- *Tainira photography portfolio site ne post type ya gallery, booking page, uye contact form.*
- *Tainira restaurant website ne online menu, opening hours, uye table-booking enquiry form.*
- *Tainira freelance consulting site ne service pages, portfolio section, uye blog.*
- *Tainira contact form kuContact page nekubata Site Builder.*

---

### Design Studio

**Chikoro:** Kuratidza kuratidza (visual customisation) — colors, typography, CSS, uye block patterns.

**Vakisa zvinogona:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Zvinogona zvakanaka:**
- Kuratidza named theme presets (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Kutarisa zvinhu zvakakosha nezvinhu zvinotevera (typography) uye palettes dzezvinoita nekuita zvinhu zvakasiyana-nyaya kupfungwa dze theme.json
- Kuratidza CSS yakakwana yechikoro chinogona kuita zvinhu zvakakosha nezvinhu zvinotevera (brand)

**Zvaunenge zvakafanana:**
- *Rata preset ya warm-editorial uye ndichivaka primary colour dzo #2d6a4f.*
- *Tora screenshot yepage refu uye ndikunengei kuti ndichigadzirisa.*
- *Tora block pattern inoshandiswa zvichinguva nebackground image yenge pfungwa dzakachengetedza (centred heading).*

---

### Plugin Manager

**Chakajeka:** Kuratidza, kuita, uye kuramba (manage) WordPress plugins.

**Vakagone:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Zvinogona zvakanaka:**
- Kuratidza plugin inoshandiswa zvakakosha kune nzira yakafanana yakatidzidzwa (use case)
- Kuita ability packs kubva mumapuro (registry)
- Kutaura catalogue dzeability kupfungwa dzakasiyana

**Zvaunenge zvakafanana:**
- *Plugin inoshandiswa zvakanaka kune membership directory?*
- *Ita WooCommerce abilities pack.*
- *Tora ndichone ability packs dzese dzeecommerce.*

---

### Support Assistant

**Chakajeka:** Kuti zvisazvitsanana nezve content yepage, settings, uye WordPress configuration.

**Vakagone:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Chii chii chinokuti:**
- Kuti zvinhu zvechinhu chesite sitiri nechinangwa.
- Kuondedza kuti post types, taxonomies, uye menus zvinowanikwa munyoringo.
- Kupenyera maonero "izvi zvinotora nani?" nekuti unoriamba zvinhu zvakagadzirwa (live values).
- Kuti unengewe mhando inosimbisa (read-only diagnostic layer) panguva unoti utore chii.

**Mhinduro dzinotsa kukumbira:**
- *Ndi? Plugins nechinangwa chinowanikwa munyoringo iwe?*
- *Rondedza zvose post types zvinogadzirwa (custom) zviri kuitwa munyoringo.*
- *Menus dzine kuitai dzinowanikwa uye dzinopfuura panguva dzinei?*

---

## Kuti Unengewe Mhando Inosimbisa (Customising Agents)

Mhando dzese dziri munyoringo dziri kuitwa (built-in agents) dzinogone kuendurwa kana kuva nechinangwa chinotora kupfuura `gratis_ai_agent_agents` filter.

### Kuti Unengewe Prompt Inosimbisa (Adding a custom system prompt to an existing agent)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Kuti Unengewe Mhando Yedu (Registering a new agent)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Inosimbisa posts uye pages kuti dziri kuita zvakanaka munzvimbo dze search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Unosimbisa SEO specialist. Ramba usina kuita zvakanaka munzvimbo dze keywords, meta descriptions, uye structured data.',
        'suggestions'   => [
            'Rondedza title ya homepage ne meta description.',
            'Ongeza chii kuti title tags dzakare recent posts pane dziri mapfiri.'
        ],
    ];
    return $agents;
} );
```

Mwana wa ajina uonekwa mupfungwa wa Agent Picker pamwe pamwe nepamwe filter inakwira.

### Kuondesha agent ya ndani

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
