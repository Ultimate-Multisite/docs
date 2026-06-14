---
title: Mga Agent na Nakapaloob
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Built-in Agents

Ang Gratis AI Agent v1.9.0 ay may kasamang limang built-in agents, na bawat isa ay naka-configure na ng mga tool na nakatuon sa isang partikular na gawain, isang system prompt na swak sa kanya, at mga starter suggestions na tugma sa karaniwang mga trabaho sa larangang iyon. Ang pagpapalit-palit ng agent ay nagbabago kung ano ang magagawa ng assistant at kung paano ito tumutugon — nang walang anumang kailangang i-configure mula sa iyo.

## Ano ang Agent?

Ang bawat agent ay isang pangalan na configuration profile na pinagsasama ang mga sumusunod:

- **Tools** — ang mga kakayahang pinapayagang tawagin ng agent (halimbawa, may access ang Content Writer sa mga kakayahan ng paggawa ng post; may access naman ang Design Studio sa CSS at theme.json abilities)
- **System prompt** — mga utos na nagtatakda ng tono, prayoridad, at limitasyon ng agent
- **Suggestions** — mga pre-written na prompt na ipinapakita sa chat interface para tulungan kang mabilis makapagsimula

## Pag-access sa Agent Picker

1. Buksan ang panel ng **Gratis AI Agent** sa WordPress admin sidebar.
2. I-click ang **agent icon** sa itaas na kaliwa ng chat header (ang icon ay magbabago upang ipakita ang aktibong agent).
3. Ang **Agent Picker** ay bubukas bilang isang form-table overlay. Ang bawat agent ay nakalista kasama ang icon nito, pangalan, at isang linya ng paglalarawan.
4. I-click ang isang row ng agent para i-activate ito. Agad na mag-a-update ang chat header.

Maaari mo ring palitan ang mga agent habang nag-uusap — ang system prompt ng bagong agent ang magiging epekto mula sa susunod na mensahe.

## Ang Limang Built-in Agents

### Content Writer

**Pokus:** Paggawa at pag-edit ng posts, pages, at contact forms.

**Mga Available tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Ano ang magaling nitong gawin:**
- Pagsusulat at paglalathala ng mga blog post mula sa maikling outline o balangkas
- Paglikha ng mga batch ng landing page para sa bagong site
- Paggawa ng contact at enquiry forms
- Paglalagay ng featured images sa mga post mula sa URL o search

**Mga mungkahi para magsimula:**
- *Sumulat ng 500-salitang blog post tungkol sa mga benepisyo ng WordPress multisite.*
- *Gumawa ng About, Services, at Contact page at i-publish ang mga ito.*
- *Magdagdag ng booking enquiry form sa Contact page.*

---

### Site Builder

**Pokus:** Paglikha ng website mula simula hanggang dulo gamit ang isang prompt lang.

**Mga available na tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Ano ang magaling nitong gawin:**
- Pagbuo ng multi-phase site build plan para sa isang uri ng negosyo na inilarawan mo.
- Isinasagawa ang bawat phase nang awtomatiko — structure, content, navigation, design.
- Nakakabawi mula sa mga error habang nasa gitna pa ng plano nang hindi kailangan ng manual intervention.
- Pag-install ng mga recommended plugin bilang bahagi ng paggawa.
- Paglikha ng contact forms direkta mula sa chat interface (Superdav AI Agent v1.10.0+).

**Mga mungkahi para magsimula:**
- *Bumuo ng photography portfolio site na may gallery post type, booking page, at contact form.*
- *Gumawa ng restaurant website na may online menu, oras ng pagbubukas, at table-booking enquiry form.*
- *I-set up ang freelance consulting site na may service pages, portfolio section, at blog.*
- *Magdagdag ng contact form sa Contact page gamit ang site builder.*

---

### Design Studio

**Pokus:** Visual customisation — kulay, typography, CSS, at mga block pattern.

**Mga Kasalukuyang Tool:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Ano ang magaling nitong gawin:**
- Paglalapat ng mga pangalan ng theme preset (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Pagpino ng global typography at color palettes gamit ang theme.json
- Pagpasok ng custom CSS para sa mga pagbabago na partikular sa brand
- Pagkuha ng screenshot ng isang page at pagsusuri nito para sa mga isyu sa disenyo

**Mga Simulang Suhestiyon:**
- *I-apply ang warm-editorial preset at pagkatapos ay itakda ang primary color sa #2d6a4f.*
- *Kumuha ng screenshot ng homepage at sabihin mo sa akin kung ano ang maaari mong pagandahin.*
- *Gumawa ng reusable hero block pattern na may full-width background image at centered heading.*

---

### Plugin Manager

**Pokus:** Paghahanap, pag-install, at pamamahala ng mga WordPress plugin.

**Mga Kasalukuyang Tool:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Ano ang magaling nitong gawin:**
- Pagrerekomenda ng pinakamahusay na plugin para sa isang inilarang sitwasyon (use case)
- Pag-install ng mga ability pack mula sa registry
- Pagtingin sa available ability catalogue ayon sa kategorya

**Mga Simulang Suhestiyon:**
- *Ano ang pinakamagandang plugin para sa membership directory?*
- *I-install ang WooCommerce abilities pack.*
- *Ipakita mo sa akin ang lahat ng available ecommerce ability packs.*

---

### Support Assistant

**Pokus:** Pagsagot sa mga tanong tungkol sa nilalaman ng site, settings, at WordPress configuration.

**Mga Kasalukuyang Tool:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Ano ang magaling nitong gawin:**
- Pagtingin sa kasalukuyang settings at opsyon ng site
- Paliwanag kung ano ang mga post type, taxonomy, at menu na naka-configure sa site
- Pagsagot sa tanong na "ano ang ginagawa ng setting na ito?" sa pamamagitan ng pagbabasa ng live values
- Pagiging isang read-only diagnostic layer bago gumawa ng anumang pagbabago

**Mga panimulang mungkahi:**
- *Anong mga plugin at settings ang kasalukuyang aktibo sa site na ito?*
- *Ilista ang lahat ng custom post types na naka-register sa site na ito.*
- *Anong navigation menus ang umiiral at saan sila naka-assign?*

---

## Pag-customize ng Agents

Ang bawat built-in agent ay maaaring palawakin o palitan gamit ang `gratis_ai_agent_agents` filter.

### Pagdaragdag ng custom system prompt sa isang umiiral na agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Pagrehistro ng bagong agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Pinapahusay ang mga post at page para sa search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Ikaw ay isang SEO specialist. Mag-focus sa keyword optimisation, meta descriptions, at structured data.',
        'suggestions'   => [
            'Suriin ang homepage title at meta description.',
            'Magmungkahi ng mga pagpapabuti sa title tag para sa limang pinakabagong posts.',
        ],
    ];
    return $agents;
} );
```

Ang bagong agent ay lalabas agad sa Agent Picker pagkatapos tumakbo ang filter.

### Pagtanggal ng built-in na agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
