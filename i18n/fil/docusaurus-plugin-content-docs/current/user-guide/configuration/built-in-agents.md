---
title: Mga Built-in Agents
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Built-in Agents

Ang gratis AI Agent v1.9.0 ay may limang built-in agents, na bawat isa ay pre-configured na may nakatuon na hanay ng mga tools, isang customized na system prompt, at mga starter suggestions na tugma sa mga karaniwang gawain sa larangan na iyon. Kapag nagpapalit ka ng agent, nagbabago ang kaya gawin at ang paraan ng pagtugon ng assistant — nang hindi ka nangangailangan ng anumang configuration.

## Ano ang Agent?

Ang bawat agent ay isang profile ng configuration na may pangalan, na pinagsasama ang:

- **Tools** — ang mga kakayahan na pinapayagan ang agent na gamitin (halimbawa, ang isang Content Writer ay may access sa mga kakayahan sa paggawa ng post; ang isang Design Studio ay may access sa mga kakayahan sa CSS at theme.json)
- **System prompt** — mga tagubilin na nagtatakda ng tono, prayoridad, at mga limitasyon ng agent
- **Suggestions** — mga pre-written na prompt na ipinapakita sa chat interface para matulungan kang makapagsimula nang mabilis

## Pag-access sa Agent Picker

1. Buksan ang panel ng **Gratis AI Agent** sa sidebar ng WordPress admin.
2. I-click ang **agent icon** sa kaliwang itaas ng chat header (nagbabago ang icon upang ipakita ang aktibong agent).
3. Lalabas ang **Agent Picker** bilang isang form-table overlay. Nakalista ang bawat agent kasama ang icon, pangalan, at isang linya-rangkasan.
4. I-click ang isang row ng agent para i-activate ito. Agad na mag-uupdate ang chat header.

Maaari ka ring magpalit ng agents habang nag-uusap — ang system prompt ng bagong agent ay magiging epektibo mula sa susunod na mensahe.

## Ang Limang Built-in Agents

### Content Writer

**Pokus:** Paglikha at pag-e-edit ng mga post, page, at contact form.

**Mga Available Tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Ano ang magaling nitong gawin:**
- Pagbuo at pag-publish ng mga blog post mula sa isang maikling balangkas o outline
- Paglikha ng mga batch ng landing page para sa isang bagong site
- Pagbuo ng mga contact at enquiry form
- Pag-set ng featured images sa mga post mula sa isang URL o paghahanap

**Starter suggestions:**
- *Write a 500-word blog post about the benefits of WordPress multisite.*
- *Create an About, Services, and Contact page and publish them.*
- *Add a booking enquiry form to the Contact page.*

---

### Site Builder

**Pokus:** Paglikha ng website mula simula hanggang matapos (end-to-end) mula sa iisang prompt.

**Mga Available Tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Ano ang magaling nitong gawin:**
- Pagbuo ng multi-phase site build plan para sa isang inilarawang uri ng negosyo
- Pagpapatupad ng bawat phase nang awtonomo — istraktura, nilalaman, navigation, disenyo
- Pagbawi mula sa mga error sa gitna ng plan nang hindi nangangailangan ng manual na pag-interbensyon
- Pag-install ng mga inirerekomendang plugin bilang bahagi ng build
- Paglikha ng contact form nang direkta mula sa chat interface (Superdav AI Agent v1.10.0+)

**Starter suggestions:**
- *Build a photography portfolio site with a gallery post type, a booking page, and a contact form.*
- *Create a restaurant website with an online menu, opening hours, and a table-booking enquiry form.*
- *Set up a freelance consulting site with service pages, a portfolio section, and a blog.*
- *Add a contact form to the Contact page using the site builder.*

---

### Design Studio

**Pokus:** Visual customisation — mga kulay, typography, CSS, at block patterns.

**Mga Available Tools:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Ano ang magaling nitong gawin:**
- Paglalapat ng mga pangalan na theme presets (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Pag-fine-tune ng global typography at colour palettes sa pamamagitan ng theme.json
- Pag-inject ng custom CSS para sa brand-specific overrides
- Pagkuha ng screenshot ng isang page at pagre-review nito para sa mga isyu sa disenyo

**Starter suggestions:**
- *Apply the warm-editorial preset and then set the primary colour to #2d6a4f.*
- *Take a screenshot of the homepage and tell me what you'd improve.*
- *Create a reusable hero block pattern with a full-width background image and centred heading.*

---

### Plugin Manager

**Pokus:** Pag-discover, pag-install, at pag-manage ng mga WordPress plugin.

**Mga Available Tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Ano ang magaling nitong gawin:**
- Pagrerekomenda ng pinakamahusay na plugin para sa isang inilarawang use case
- Pag-install ng ability packs mula sa registry
- Pag-browse sa available ability catalogue ayon sa kategorya

**Starter suggestions:**
- *What's the best plugin for a membership directory?*
- *Install the WooCommerce abilities pack.*
- *Show me all available ecommerce ability packs.*

---

### Support Assistant

**Pokus:** Pagsagot sa mga tanong tungkol sa nilalaman ng site, settings, at configuration ng WordPress.

**Mga Available Tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Ano ang magaling nitong gawin:**
- Pagtingin sa kasalukuyang site settings at options
- Pagpapaliwanag kung anong post types, taxonomies, at menus ang naka-configure sa site
- Pagsagot sa mga tanong na "ano ang ginagawa ng setting na ito?" sa pamamagitan ng pagbabasa ng live values
- Paglilingkod bilang isang read-only diagnostic layer bago gumawa ng mga pagbabago

**Starter suggestions:**
- *What plugins and settings are currently active on this site?*
- *List all the custom post types registered on this site.*
- *What navigation menus exist and where are they assigned?*

---

## Pag-customize ng Agents

Ang bawat built-in agent ay maaaring palawakin o palitan sa pamamagitan ng `gratis_ai_agent_agents` filter.

### Pagdaragdag ng custom system prompt sa isang umiiral na agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Pagre-register ng bagong agent

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

Ang bagong agent ay lilitaw sa Agent Picker kaagad pagkatapos tumakbo ang filter.

### Pag-alis ng isang built-in agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
