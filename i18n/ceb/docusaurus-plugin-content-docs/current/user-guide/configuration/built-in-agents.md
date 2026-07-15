---
title: Mga Built-in nga Ahente
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Built-in nga mga Agent

Gratis AI Agent v1.9.0 nagdala og lima ka built-in nga mga agent, nga matag usa daan nang gi-configure uban sa usa ka naka-focus nga hugpong sa mga tools, usa ka gipahiangay nga system prompt, ug mga starter suggestion nga gitugma sa kasagarang mga buluhaton nianang dapita. Ang pagbalhin-balhin tali sa mga agent mag-usab sa unsay mahimo sa assistant ug kung giunsa kini motubag — nga walay bisan unsang configuration gikan nimo. Superdav AI Agent v1.18.0 makadugang og mga tool nga schedule-aware, mga reminder record, approval gates, ug SMS notifications niining mga workflow kung na-configure ang may kalabotang mga integration.

## Unsa ang Agent? {#what-is-an-agent}

Ang matag agent usa ka ginganlang configuration profile nga naghiusa sa:

- **Tools** — ang mga abilidad nga gitugotan ang agent nga gamiton (pananglitan, ang Content Writer adunay access sa mga abilidad sa paghimo og post; ang Design Studio adunay access sa mga abilidad sa CSS ug theme.json)
- **System prompt** — mga instruksyon nga nagtakda sa tono, mga prayoridad, ug mga limitasyon sa agent
- **Mga sugyot** — daan nang gisulat nga mga prompt nga gipakita sa chat interface aron matabangan ka nga makasugod dayon

## Pag-access sa Agent Picker {#accessing-the-agent-picker}

1. Ablihi ang **Gratis AI Agent** nga panel sa WordPress admin sidebar.
2. I-klik ang **agent icon** sa ibabaw nga wala nga bahin sa chat header (ang icon mausab aron ipakita ang aktibong agent).
3. Ang **Agent Picker** moabli isip usa ka form-table overlay. Ang matag agent gilista uban sa iyang icon, ngalan, ug usa ka usa-ka-linyang deskripsyon.
4. I-klik ang row sa agent aron i-activate kini. Ang chat header ma-update dayon.

Makabalhin ka usab og mga agent sa tunga-tunga sa panag-istorya — ang system prompt sa bag-ong agent mosugod og epekto gikan sa sunod nga mensahe.

## Ang Lima ka Built-in nga mga Agent {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Pokus:** Paghimo ug pag-edit og mga post, mga page, ug mga contact form.

**Magamit nga mga tool:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Kung naka-enable ang mga integration sa Superdav AI Agent v1.18.0, mahimo usab nga magamit sa gi-aprobahang mga workflow ang gi-configure nga calendar context, approval gates, reminders, ug SMS notification tools.

**Mga butang nga maayo niyang buhaton:**
- Pag-draft ug pag-publish og mga blog post gikan sa brief o outline
- Paghimo og mga batch sa landing pages para sa bag-ong site
- Paghimo og mga contact ug enquiry form
- Pag-set og featured images sa mga post gikan sa URL o search
- Pag-draft og mga follow-up message sa event gikan sa gi-configure nga Google Calendar context, dayon mohunong para sa approval sa dili pa magpadala og notifications

**Mga starter suggestion:**
- *Pagsulat og 500-ka-pulong nga blog post mahitungod sa mga benepisyo sa WordPress multisite.*
- *Paghimo og About, Services, ug Contact page ug i-publish kini.*
- *Idugang ang booking enquiry form sa Contact page.*
- *Pag-draft og reminder para sa mga attendee sa gi-configure nga calendar event ugma ug hulata ang approval sa dili pa kini ipadala.*

---

### Site Builder {#site-builder}

**Pokus:** End-to-end nga paghimo og website gikan sa usa ka prompt.

**Magamit nga mga tool:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Uban sa Superdav AI Agent v1.18.0, mahimong magamit ang gi-configure nga managed-service, approval, reminder, calendar, ug SMS tools diin gi-enable kini sa mga administrator.

**Mga butang nga maayo niyang buhaton:**
- Pag-generate og multi-phase nga plano sa pagtukod sa site para sa gihulagway nga matang sa negosyo
- Pagpatuman sa matag hugna nga autonomously — structure, content, navigation, design
- Pag-recover gikan sa mga error sa tunga-tunga sa plano nga dili manginahanglan og manual nga interbensyon
- Pag-install og girekomendang mga plugin isip bahin sa build
- Paghimo og mga contact form direkta gikan sa chat interface (Superdav AI Agent v1.10.0+)
- Pag-coordinate sa launch reminders o attendee follow-up nga walay duplicate notifications kung naka-enable ang approval gates ug reminder records

**Mga starter suggestion:**
- *Pagtukod og photography portfolio site nga adunay gallery post type, booking page, ug contact form.*
- *Paghimo og restaurant website nga adunay online menu, opening hours, ug table-booking enquiry form.*
- *Pag-set up og freelance consulting site nga adunay service pages, portfolio section, ug blog.*
- *Idugang ang contact form sa Contact page gamit ang site builder.*
- *Human ma-approve ang site launch checklist, pagpadala og SMS reminder sa gi-configure nga stakeholder contact.*

---

### Design Studio {#design-studio}

**Pokus:** Visual customisation — mga kolor, typography, CSS, ug block patterns.

**Magamit nga mga tool:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Mga butang nga maayo niyang buhaton:**
- Pag-apply og ginganlang theme presets (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Pag-fine-tune sa global typography ug mga colour palette pinaagi sa theme.json
- Pag-inject og custom CSS para sa brand-specific overrides
- Pagkuha og screenshot sa usa ka page ug pag-review niini para sa mga design issue

**Mga starter suggestion:**
- *I-apply ang warm-editorial preset ug dayon i-set ang primary colour sa #2d6a4f.*
- *Kuhaa ang screenshot sa homepage ug sultihi ko kon unsay imong pauswagon.*
- *Paghimo og reusable nga hero block pattern nga adunay full-width background image ug centred heading.*

### Plugin Manager {#plugin-manager}

**Pokus:** Pagdiskobre, pag-install, ug pagdumala sa WordPress plugins.

**Magamit nga mga tool:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Mga butang nga maayo niyang buhaton:**
- Pagrekomendar sa labing maayo nga plugin para sa gihulagway nga use case
- Pag-install og ability packs gikan sa registry
- Pag-browse sa magamit nga ability catalogue pinaagi sa category

**Mga starter suggestion:**
- *Unsa ang labing maayo nga plugin para sa membership directory?*
- *I-install ang WooCommerce abilities pack.*
- *Ipakita kanako ang tanang magamit nga ecommerce ability packs.*

---

### Support Assistant {#support-assistant}

**Pokus:** Pagtubag sa mga pangutana mahitungod sa site content, settings, ug WordPress configuration.

**Magamit nga mga tool:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Unsa ang maayo nitong buhaton:**
- Pagpangita sa kasamtangang mga setting ug opsyon sa site
- Pagpasabot kung unsang mga post type, taxonomy, ug menu ang gi-configure sa site
- Pagtubag sa mga pangutana nga "unsa ang buhaton niini nga setting?" pinaagi sa pagbasa sa live nga mga value
- Pagserbisyo isip read-only nga diagnostic layer sa wala pa maghimo og mga kausaban

**Mga sugyot sa pagsugod:**
- *Unsang mga plugin ug setting ang kasamtangang aktibo niining site?*
- *Ilista ang tanang custom post type nga na-register niining site.*
- *Unsang mga navigation menu ang anaa ug asa sila gi-assign?*

---

## Mga Integrasyon sa Superdav Automation {#superdav-automation-integrations}

Kung gi-configure ang mga integrasyon sa Superdav AI Agent v1.18.0, ang built-in nga mga agent mahimong moapil sa mas luwas nga schedule-aware automation workflows:

- **Mga tool sa pagbasa sa Google Calendar** nagtugot sa mga agent nga susihon ang gi-configure nga mga calendar ug event sa wala pa maghimo og draft sa follow-up nga trabaho.
- **Pagmapa sa contact ug attendee** makatabang sa pagpares sa mga partisipante sa event ngadto sa mga user sa WordPress o nailhang mga contact.
- **Mga ganghaan sa pagtugot sa tawo** mopahunong sa sensitibo nga mga aksyon hangtod marepaso ug makumpirma kini sa usa ka awtorisadong user.
- **Mga reminder record** mopugong sa duplicate nga mga notification kung ang naka-schedule nga mga job mosulay pag-usab o mobalik-balik.
- **Mga TextBee SMS notification** mopadala sa gi-configure nga mga text message lamang kung ang SMS credentials ug workflow permissions gi-enable.

Girekomenda nga workflow: hangyoa ang agent nga andamon ang mensahe o aksyon, repasuhon ang prompt sa pagtugot, dayon tugoti nga mopadayon ang gi-aprobahang aksyon. Alang sa nagbalik-balik nga mga pahinumdom, ipadayon nga enabled ang reminder deduplication aron ang parehas nga event o contact dili balik-balik nga ma-notify.

---

## Pag-customize sa mga Agent {#customising-agents}

Ang matag built-in nga agent mahimong mapalapdan o mapulihan pinaagi sa `gratis_ai_agent_agents` filter.

### Pagdugang og custom nga system prompt sa kasamtangang agent {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Pag-register og bag-ong agent {#registering-a-new-agent}

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

Ang bag-ong agent makita dayon sa Tigpili sa Agent pagkahuman modagan ang filter.

### Pagtangtang sa built-in nga agent {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
