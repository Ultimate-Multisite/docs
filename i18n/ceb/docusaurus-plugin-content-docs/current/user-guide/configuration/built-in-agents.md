---
title: Built-in Agents
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Built-in Agents

Ang Gratis AI Agent v1.9.0 nagdala lima ka built-in agents, ang matag usa pre-configure na nga adunay focused set sa mga tools, usa ka tailored system prompt, ug starter suggestions nga tugma sa kasagarang mga buluhaton niini nga bahin. Ang pag-switch tali sa mga agents nagbag-o kung unsa ang mahimo sa assistant ug unsa kini mo-reply — walay kinahanglan nimong i-configure.

## Unsa Man ang Agent?

Ang matag agent usa ka named configuration profile nga naghiusa ni:

- **Tools** — ang mga abilidad nga gitugotan sa agent nga tawgon (pananglitan, ang Content Writer adunay access sa mga abilidad sa paghimo og post; ang Design Studio adunay access sa CSS ug theme.json abilities)
- **System prompt** — mga instruksyon nga nagset sa tono, prayoridad, ug mga limitasyon sa agent
- **Suggestions** — mga pre-written prompt nga gipakita sa chat interface aron matabangan ka nga dali magsugod

## Pag-access sa Agent Picker

1. Ablihi ang **Gratis AI Agent** panel sa WordPress admin sidebar.
2. I-click ang **agent icon** sa top-left sa chat header (ang icon magbag-o aron ipakita ang aktibong agent).
3. Ang **Agent Picker** mosulod isip usa ka form-table overlay. Ang matag agent gi-list uban sa iyang icon, ngalan, ug usa ka one-line nga deskripsyon.
4. I-click ang row sa agent aron ma-activate kini. Ang chat header dayon mag-update.

Mahimo usab nimong mag-switch og agents sa tunga sa panagsultian — ang system prompt sa bag-ong agent ma-epekto sugod sa sunod nga mensahe.

## Ang Lima ka Built-in Agents

### Content Writer

**Focus:** Paghimo ug pag-edit og posts, pages, ug contact forms.

**Available tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Unsa ni maayo pagbuhat:**
- Pagsulat ug pag-publish og blog posts gikan sa usa ka mubo nga ideya o outline
- Paghimo og mga batch sa landing pages para sa bag-ong site
- Paghimo og contact ug enquiry forms
- Pagbutang og featured images sa mga post gikan sa URL o search

**Mga sugyot aron magsugod:**
- *Isulat ang usa ka 500-word nga blog post bahin sa mga benepisyo sa WordPress multisite.*
- *Paghimo og About, Services, ug Contact page ug i-publish kini.*
- *Magdugang og booking enquiry form sa Contact page gamit ang site builder.*

---

### Site Builder

**Focus:** Paghimo sa tibuok website gikan sa usa ka prompt.

**Mga tool nga magamit:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Unsa ni maayo pagbuhat:**
- Paghimo og multi-phase site build plan para sa gihatag nga klase sa negosyo
- Pagsugod sa matag phase sa kaugalingon — structure, content, navigation, design
- Pag-recover gikan sa mga sayop sa tunga sa plano nga dili kinahanglan og manual intervention
- Pag-install sa mga recommended plugins isip bahin sa paghimo
- Paghimo og contact forms direkta gikan sa chat interface (Superdav AI Agent v1.10.0+)

**Mga sugyot aron magsugod:**
- *Pagbuhat og photography portfolio site nga adunay gallery post type, booking page, ug contact form.*
- *Paghimo og restaurant website nga adunay online menu, opening hours, ug table-booking enquiry form.*
- *Pag-set up og freelance consulting site nga adunay service pages, portfolio section, ug blog.*
- *Pagdugang og contact form sa Contact page gamit ang site builder.*

---

### Design Studio

**Focus:** Visual customisation — mga kolor, typography, CSS, ug block patterns.

**Mga Available nga mga tool:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Unsa ni maayo buhaton:**
- Pag-apply sa mga named theme presets (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Pagsulbad og detalye sa global typography ug colour palettes pinaagi sa theme.json
- Pag-inject og custom CSS para sa mga override nga espesipiko sa brand
- Pagkuha og screenshot sa usa ka page ug pag-review niini para sa mga isyu sa design

**Mga Sugyot sa Pagsugod:**
- *I-apply ang warm-editorial preset ug dayon i-set ang primary colour ng #2d6a4f.*
- *Kuha og screenshot sa homepage ug isulti nako unsa ang imong pagpaayo.*
- *Pagmugna og reusable hero block pattern nga adunay full-width background image ug centered heading.*

---

### Plugin Manager

**Focus:** Pagdiskomobre, pag-install, ug pagdumala sa mga WordPress plugins.

**Mga Available nga tool:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Unsa ni maayo buhaton:**
- Pagrekomendar sa pinakmaayong plugin para sa usa ka gihatag nga sitwasyon
- Pag-install og mga ability packs gikan sa registry
- Paglingkawa sa available ability catalogue base sa categoryo

**Mga Sugyot sa Pagsugod:**
- *Unsa ang labing maayo nga plugin para sa membership directory?*
- *I-install ang WooCommerce abilities pack.*
- *Ipakita nako tanan nga available ecommerce ability packs.*

---

### Support Assistant

**Focus:** Pagtubag sa mga pangutana bahin sa content sa site, settings, ug WordPress configuration.

**Mga Available nga tool:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Unsa ni maayo:**
- Pagtan-aw sa kasamtang settings ug options sa site
- Pagpatin-aw kung unsa ang mga post types, taxonomies, ug menus nga gi-configure sa site
- Pagtubag sa mga pangutana nga "unsa ang buhat ni setting?" pinaagi sa pagbasa sa live values
- Pagserbisyo isip usa ka read-only diagnostic layer sa dili pa maghimo og mga kausaban

**Mga sugyot para magsugod:**
- *Unsa man ang mga plugin ug settings nga aktibo karon niining site?*
- *Ilista ang tanang custom post types nga na-register sa site.*
- *Unsa may mga navigation menus ug asa sila gi-assign?*

---

## Pag-customize sa Agents

Ang matag built-in agent mahimong i-extend o palitan pinaagi sa `gratis_ai_agent_agents` filter.

### Pagdugang og custom system prompt sa usa ka existing agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Pag-register og bag-ong agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Nag-optimize sa posts ug pages alang sa search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Ikaw usa ka SEO specialist. Mag-focus sa keyword optimisation, meta descriptions, ug structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

Ang bag-ong agent makita sa Agent Picker dayon pagtapos sa pag-run sa filter.

### Pag-alis sa built-in agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
