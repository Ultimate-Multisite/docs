---
title: Mga Naka-built-in na Ahente
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Mga Built-in Agent {#built-in-agents}

Ang Gratis AI Agent v1.9.0 ay may kasamang limang built-in agent, bawat isa ay paunang naka-configure na may nakatuong hanay ng mga tool, iniangkop na system prompt, at mga panimulang mungkahi na tugma sa karaniwang mga gawain sa bahaging iyon. Ang paglipat sa pagitan ng mga agent ay nagbabago sa magagawa ng assistant at kung paano ito tumutugon — nang walang anumang configuration mula sa iyo. Maaaring magdagdag ang Superdav AI Agent v1.18.0 ng mga tool na may kaalaman sa iskedyul, mga tala ng paalala, mga approval gate, at mga SMS notification sa mga workflow na ito kapag naka-configure ang kaugnay na mga integration.

## Ano ang Agent? {#what-is-an-agent}

Ang bawat agent ay isang pinangalanang profile ng configuration na pinagsasama ang:

- **Mga Tool** — ang mga kakayahang pinapayagang gamitin ng agent (hal. may access ang Content Writer sa mga kakayahan sa paggawa ng post; may access ang Design Studio sa mga kakayahan sa CSS at theme.json)
- **System prompt** — mga tagubiling nagtatakda sa tono, mga priyoridad, at mga limitasyon ng agent
- **Mga Mungkahi** — mga paunang isinulat na prompt na ipinapakita sa chat interface upang tulungan kang makapagsimula nang mabilis

## Pag-access sa Agent Picker {#accessing-the-agent-picker}

1. Buksan ang panel ng **Gratis AI Agent** sa admin sidebar ng WordPress.
2. I-click ang **icon ng agent** sa itaas-kaliwa ng chat header (nagbabago ang icon upang ipakita ang aktibong agent).
3. Magbubukas ang **Agent Picker** bilang isang form-table overlay. Nakalista ang bawat agent kasama ang icon, pangalan, at isang isang-linyang paglalarawan nito.
4. I-click ang row ng agent upang i-activate ito. Agad na naa-update ang chat header.

Maaari ka ring lumipat ng mga agent sa gitna ng pag-uusap — magkakabisa ang system prompt ng bagong agent mula sa susunod na mensahe.

## Ang Limang Built-in Agent {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Pokus:** Paggawa at pag-edit ng mga post, page, at contact form.

**Mga available na tool:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Kapag naka-enable ang mga integration ng Superdav AI Agent v1.18.0, maaari ring maging available sa mga aprubadong workflow ang naka-configure na calendar context, approval gate, paalala, at mga tool sa SMS notification.

**Mahusay nitong ginagawa:**
- Pag-draft at pag-publish ng mga blog post mula sa brief o outline
- Paglikha ng mga batch ng landing page para sa bagong site
- Paggawa ng mga contact at enquiry form
- Pagtatakda ng mga featured image sa mga post mula sa URL o search
- Pag-draft ng mga mensaheng follow-up sa event mula sa naka-configure na Google Calendar context, pagkatapos ay paghinto para sa pag-apruba bago magpadala ng mga notification

**Mga panimulang mungkahi:**
- *Sumulat ng 500-salitang blog post tungkol sa mga benepisyo ng WordPress multisite.*
- *Gumawa ng About, Services, at Contact page at i-publish ang mga ito.*
- *Magdagdag ng booking enquiry form sa Contact page.*
- *Mag-draft ng paalala para sa mga dadalo sa naka-configure na calendar event bukas at hintayin ang pag-apruba bago ito ipadala.*

---

### Site Builder {#site-builder}

**Pokus:** End-to-end na paggawa ng website mula sa iisang prompt.

**Mga available na tool:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Sa Superdav AI Agent v1.18.0, maaaring maging available ang mga naka-configure na tool para sa managed-service, pag-apruba, paalala, calendar, at SMS kung saan ine-enable ang mga ito ng mga administrator.

**Mahusay nitong ginagawa:**
- Pagbuo ng multi-phase na plano sa paggawa ng site para sa inilarawang uri ng negosyo
- Awtomatikong pagpapatupad ng bawat yugto — estruktura, nilalaman, nabigasyon, disenyo
- Pagbawi mula sa mga error sa gitna ng plano nang hindi nangangailangan ng manual na interbensyon
- Pag-install ng mga inirerekomendang plugin bilang bahagi ng build
- Paggawa ng mga contact form nang direkta mula sa chat interface (Superdav AI Agent v1.10.0+)
- Pag-coordinate ng mga launch reminder o follow-up sa mga dadalo nang walang dobleng notification kapag naka-enable ang mga approval gate at tala ng paalala

**Mga panimulang mungkahi:**
- *Bumuo ng photography portfolio site na may gallery post type, booking page, at contact form.*
- *Gumawa ng website ng restaurant na may online menu, mga oras ng pagbubukas, at table-booking enquiry form.*
- *Mag-set up ng freelance consulting site na may mga page ng serbisyo, seksyon ng portfolio, at blog.*
- *Magdagdag ng contact form sa Contact page gamit ang site builder.*
- *Pagkatapos maaprubahan ang checklist sa paglulunsad ng site, magpadala ng SMS reminder sa naka-configure na stakeholder contact.*

---

### Design Studio {#design-studio}

**Pokus:** Visual na pagpapasadya — mga kulay, typography, CSS, at mga block pattern.

**Mga available na tool:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Mahusay nitong ginagawa:**
- Paglalapat ng mga pinangalanang theme preset (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Pag-fine-tune ng global typography at mga color palette sa pamamagitan ng theme.json
- Pag-inject ng custom CSS para sa mga override na partikular sa brand
- Pagkuha ng screenshot ng isang page at pagrerepaso nito para sa mga isyu sa disenyo

**Mga panimulang mungkahi:**
- *Ilapat ang warm-editorial preset at pagkatapos ay itakda ang primary colour sa #2d6a4f.*
- *Kumuha ng screenshot ng homepage at sabihin sa akin kung ano ang pagagandahin mo.*
- *Gumawa ng reusable na hero block pattern na may full-width na background image at naka-center na heading.*

### Plugin Manager {#plugin-manager}

**Pokus:** Pagtuklas, pag-install, at pamamahala ng mga WordPress plugin.

**Mga available na tool:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Mahusay nitong ginagawa:**
- Pagrerekomenda ng pinakamainam na plugin para sa inilarawang use case
- Pag-install ng mga ability pack mula sa registry
- Pag-browse sa available na catalogue ng ability ayon sa kategorya

**Mga panimulang mungkahi:**
- *Ano ang pinakamainam na plugin para sa membership directory?*
- *I-install ang WooCommerce abilities pack.*
- *Ipakita sa akin ang lahat ng available na ecommerce ability pack.*

---

### Support Assistant {#support-assistant}

**Pokus:** Pagsagot sa mga tanong tungkol sa nilalaman ng site, mga setting, at configuration ng WordPress.

**Mga available na tool:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Ang mahusay nitong nagagawa:**
- Paghahanap ng kasalukuyang mga setting at opsyon ng site
- Pagpapaliwanag kung anong mga uri ng post, taxonomy, at menu ang naka-configure sa site
- Pagsagot sa mga tanong na "ano ang ginagawa ng setting na ito?" sa pamamagitan ng pagbabasa ng mga live na halaga
- Pagsisilbi bilang read-only na diagnostic layer bago gumawa ng mga pagbabago

**Mga mungkahi para magsimula:**
- *Anong mga plugin at setting ang kasalukuyang aktibo sa site na ito?*
- *Ilista ang lahat ng custom na uri ng post na nakarehistro sa site na ito.*
- *Anong mga navigation menu ang mayroon at saan nakatalaga ang mga ito?*

---

## Mga Integrasyon sa Automation ng Superdav {#superdav-automation-integrations}

Kapag naka-configure ang mga integrasyon ng Superdav AI Agent v1.18.0, maaaring lumahok ang mga built-in na ahente sa mas ligtas na mga workflow ng automation na may kaalaman sa iskedyul:

- **Mga tool sa pagbasa ng Google Calendar** ay nagpapahintulot sa mga ahente na suriin ang mga naka-configure na kalendaryo at kaganapan bago mag-draft ng follow-up na gawain.
- **Pagmamapa ng contact at attendee** ay tumutulong na itugma ang mga kalahok sa kaganapan sa mga user ng WordPress o mga kilalang contact.
- **Mga gate ng pag-apruba ng tao** ay nagpapahinto sa sensitibong mga aksyon hanggang masuri at makumpirma ang mga ito ng isang awtorisadong user.
- **Mga record ng paalala** ay pumipigil sa dobleng mga notification kapag umuulit o muling sinusubukan ang mga nakaiskedyul na trabaho.
- **Mga notification sa TextBee SMS** ay nagpapadala ng mga naka-configure na text message lamang kapag naka-enable ang mga kredensyal sa SMS at mga pahintulot ng workflow.

Inirerekomendang workflow: hilingin sa ahente na ihanda ang mensahe o aksyon, suriin ang prompt sa pag-apruba, pagkatapos ay payagang magpatuloy ang naaprubahang aksyon. Para sa umuulit na mga paalala, panatilihing naka-enable ang deduplication ng paalala upang hindi paulit-ulit na maabisuhan ang parehong kaganapan o contact.

---

## Pag-customize ng Mga Ahente {#customising-agents}

Maaaring palawigin o palitan ang bawat built-in na ahente sa pamamagitan ng filter na `gratis_ai_agent_agents`.

### Pagdaragdag ng custom na system prompt sa umiiral na ahente {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Pagrehistro ng bagong ahente {#registering-a-new-agent}

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

Lilitaw ang bagong ahente sa Tagapili ng Ahente kaagad pagkatapos tumakbo ang filter.

### Pag-alis ng built-in na ahente {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
