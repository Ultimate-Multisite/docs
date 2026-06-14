---
title: Ngā Whakawāhi Whakahaere
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Aotūroa Whakawhiti (Built-in Agents)

Gratis AI Agent v1.9.0 e whai ake ingoa i agent rua, meiapo he tino whakamōhaka ana ki ngā taonga, he system prompt mōhiamo, me ngā whakaaro whakatupu pūrākau (starter suggestions) e whakahihiko ana ki ngā mahi whānui i tēnei mea. Ka whakawhiti i ngā agent, ka whakarē i te mea he tino whakamōhaka ana akorua, me te mea he āhua he kaha ai te rāpai o te assistant — me reira kāore koe e whakaaro atu.

## He aha he Agent?

Ka puta ake i agent ko he whakataki mōhiamo (named configuration profile) e whakatā i:

- **Tools** — ngā mahi e taea te whakamahi e te agent (e tō dụo, he Content Writer e hiahia ana ki te kaha hei whakamaoritanga post; he Design Studio e hiahia ana ki CSS me theme.json).
- **System prompt** — ngā whaiaro e whakatō i te tone o te agent, ngā pūmau (priorities), me ngā raupawa (constraints) o ia.
- **Suggestions** — ngā prompt pre-written e tū mai i te chat interface kia tū he aha ki ka whakatupu i a koe akorua.

## Whakarongo i te Agent Picker

1. Whakawhiti i te panel **Gratis AI Agent** i te sidebar o WordPress admin.
2. Whakawhiti i te **agent icon** i te whakatūpāke (top-left) o te chat header (kaorero e pēnei i te icon e whakahau i te agent e kaha ana).
3. Ka puta ake te **Agent Picker** he form-table overlay. Ka puta ake ngā agent katoa me te icon, ingoa, me te whakatakī mōna i tētahi line.
4. Whakawhiti i te row o agent ki te whakamahi i a ia. Ka whakawhiti i te chat header i runga i te wā.

Ka taea hoki koe te whakawhiti i ngā agent i te pito o te whakataki — ka whakahou i te system prompt o te agent hou i te message whakaaro (message) e puta mai i tēnei wā.

## Ngā Agent Rua E Whakawhiti Ana

### Content Writer

**Focus:** Whakamaoritanga me whakareke post, pages, me contact forms.

**Available tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**He aha i te tino pai ana ia:**
- Whakawhanainga me whakahihanga post blog no te whakamahi o te brief (brief) ak me te outline.
- Whakapeheke pūrere landing (landing pages) mō wāhi hou.
- Whakau i tōna whakamāhi (contact forms) me ngā whakamārama (enquiries).
- Whakawhiti i ngā pēpi whakaahua (featured images) i runga i post no te URL ak me te whakatū (search).

**Ngā mea mō te whai i roto:**
- *Whakawhanainga post blog 500 kata mō ngā Manawa o WordPress multisite.*
- *Whakapeheke ahau About, Services, me Contact page ak me te whakahanga i ahiahi.*
- *Whakau whakamāhi pēpi (booking enquiry form) ki te Contact page no te site builder.*

---

### Site Builder

**Te fokus:** Whakawhanaungatanga wāhi katoa o te website mai i te whakatū akorā.

**Ngā taonga mō te whakamahi:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**He aha i te tino pai ana ia:**
- Whakawhanainga plan website mō wāhi whānui akorā mō te kaupapa whānui.
- Whakawhanaungatanga (execute) i roto i ngā wāhi katoa — te whare, te mea whakamahinga, te whakatika, te whakaaro, te whaiaro.
- Whakamutunga i ngā pēpi (errors) i runga i te plan i roto i te wā, i roto i te whakamahi manu atu akorā.
- Whakau plugin mō te mea e tika ana katoa akorā i te whakatū website.
- Whakawhanainga tōna whakamāhi (contact forms) no te chat interface (Superdav AI Agent v1.10.0+).

**Ngā mea mō te whai i roto:**
- *Whakapeheke portfolio pēpi akorā me post type gallery, page booking, me form contact.*
- *Whakapeheke website o rēmi me menu online, ora whakahou, me form enquiry table booking.*
- *Whakatū website mō te whai whakaaro (consulting) me service pages, section portfolio, me blog.*
- *Whakau whakamāhi contact ki te Contact page no te site builder.*

---

### Design Studio

**Te fokus:** Whakawhanaungatanga whakairo — ngā rangi, ngā kupu, CSS, ak me ngā pattern o block.

**Taotohutohu Whakaritenga:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**He aha i te pai:**
- Whakawhanaungatanga preset o theme (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Whakamahi whakamuri (fine-tuning) i te typography me ngā paleti whero (colour palettes) o te global via theme.json
- Whakarite CSS manawa (custom CSS) mō whakaawhatanga o te brand
- Whakawātea screenshot o te page me whakawhakarite i ai mō ngā wairua o te design

**Ngā whai whakatupu:**
- *Whakarite preset warm-editorial ā, ā, whakatika te primary colour ki #2d6a4f.*
- *Whakawātea screenshot o te homepage me whai au i te mea kua whakawhakarite ahau.*
- *Whakawhanaungatanga block pattern reka (reusable hero block pattern) me image background full-width me heading centred.*

---

### Plugin Manager

**Te Whakatika:** Whakamutunga, whakatau, me te whakamainga plugin o WordPress.

**Taotohutohu Whakaritenga:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**He aha i te pai:**
- Whakawhanaungatanga te plugin mō whakamahi tino tika e whakataki ahau.
- Whakamāinga ability packs (packs o ngā mea e taea) mai te registry.
- Whakarongo i te catalogue o ability available pēnei i roto i ngā category.

**Ngā whai whakatupu:**
- *He aha te plugin mō directory membership?*
- *Whakamāinga te WooCommerce abilities pack.*
- *Whakawhiti ahau i ngā packs e taea o ecommerce.*

---

### Support Assistant

**Te Whakatika:** Whakarongo i ngā whakamārama mō te mea o te site, ngā setting, me te WordPress configuration.

**Taotohutohu Whakaritenga:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**He aha i te pai ana ia:**
- Whakawātea ngā whakaritenga me ngā option o te wāhi ahau i roto.
- Whakataki i te mea he tautari (post types), taxonomies, me menus e whakahirahira ana i te wāhi.
- Whakarongo i ngā whakamārama "he aha tēnei whakaritenga e tino mahi ana?" e ngaro ngā wāhi o te whakaaturanga (live values).
- Whakawātea te whakamahi mo whakamaoritanga (diagnostic layer) i roto i te whaiaro i roto i te whakgirera.

**Ngā mea e taea ai atu ki te whakatō:**
- *He aha ngā plugins me ngā whakaritenga e active ana i tēnei wāhi?*
- *Whakawātea ngā tautari (post types) katoa e pēnei i te wāhi ahau.*
- *He aha ngā menus whakatere (navigation menus) e tino pai ana, ā, ko atu ki hea rawa kua whakahirahira?*

---

## Whakawātea Ngā Agents

Ka taea te whero (extend) au i agent built-in katoa, ahau i roto i te `gratis_ai_agent_agents` filter.

### Whāinga whakamahi prompt system hou ki agent eke ana

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Whakawātea agent hou

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

The agent hou mauri appears i te Agent Picker immediately pō mārie i te filter.

### Whakamāharite tō mātua (built-in agent)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
