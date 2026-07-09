---
title: Mga Nakapaloob na Ahente
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Built-in Agents

Ang Gratis AI Agent v1.9.0 ay may kasamang limang built-in agents, bawat isa ay naka-preconfigure na may nakatuong hanay ng mga tool, iniangkop na system prompt, at mga panimulang mungkahi na tugma sa karaniwang mga gawain sa larangang iyon. Ang paglipat sa pagitan ng agents ay nagbabago sa kayang gawin ng assistant at kung paano ito tumutugon — nang walang anumang configuration mula sa iyong panig. Maaaring magdagdag ang Superdav AI Agent v1.18.0 ng mga tool na may kaalaman sa iskedyul, mga tala ng paalala, mga approval gate, at mga notification sa SMS sa mga workflow na ito kapag naka-configure ang mga kaugnay na integration.

## Ano ang Agent?

Ang bawat agent ay isang pinangalanang configuration profile na pinagsasama ang:

- **Tools** — ang mga kakayahang pinapayagang gamitin ng agent (hal. ang Content Writer ay may access sa mga kakayahan sa paggawa ng post; ang Design Studio ay may access sa mga kakayahan sa CSS at theme.json)
- **System prompt** — mga tagubiling nagtatakda ng tono, mga priyoridad, at mga limitasyon ng agent
- **Mga mungkahi** — mga paunang isinulat na prompt na ipinapakita sa chat interface upang matulungan kang makapagsimula nang mabilis

## Pag-access sa Agent Picker

1. Buksan ang panel ng **Gratis AI Agent** sa WordPress admin sidebar.
2. I-click ang **icon ng agent** sa itaas-kaliwang bahagi ng chat header (nagbabago ang icon upang ipakita ang aktibong agent).
3. Magbubukas ang **Agent Picker** bilang form-table overlay. Nakalista ang bawat agent kasama ang icon, pangalan, at isang linyang paglalarawan nito.
4. I-click ang hilera ng agent upang i-activate ito. Agad na nag-a-update ang chat header.

Maaari ka ring lumipat ng agents sa gitna ng pag-uusap — magkakabisa ang system prompt ng bagong agent mula sa susunod na mensahe.

## Ang Limang Built-in Agents

### Content Writer

**Pokus:** Paggawa at pag-edit ng mga post, page, at contact form.

**Mga available na tool:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Kapag naka-enable ang mga integration ng Superdav AI Agent v1.18.0, maaari ring maging available sa mga aprubadong workflow ang naka-configure na konteksto ng kalendaryo, mga approval gate, paalala, at mga tool sa notification sa SMS.

**Mahusay nitong ginagawa:**
- Pag-draft at pag-publish ng mga blog post mula sa brief o outline
- Paggawa ng mga batch ng landing page para sa bagong site
- Pagbuo ng mga contact at enquiry form
- Pagtatakda ng mga featured image sa mga post mula sa URL o paghahanap
- Pag-draft ng mga follow-up message para sa event mula sa naka-configure na konteksto ng Google Calendar, pagkatapos ay paghinto para sa pag-apruba bago magpadala ng mga notification

**Mga panimulang mungkahi:**
- *Sumulat ng 500-salitang blog post tungkol sa mga benepisyo ng WordPress multisite.*
- *Gumawa ng About, Services, at Contact page at i-publish ang mga ito.*
- *Magdagdag ng booking enquiry form sa Contact page.*
- *Mag-draft ng paalala para sa mga dadalo sa naka-configure na event sa kalendaryo bukas at maghintay ng pag-apruba bago ito ipadala.*

---

### Site Builder

**Pokus:** End-to-end na paggawa ng website mula sa iisang prompt.

**Mga available na tool:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Sa Superdav AI Agent v1.18.0, maaaring maging available ang naka-configure na managed-service, pag-apruba, paalala, kalendaryo, at mga tool sa SMS kung saan ini-enable ng mga administrator ang mga ito.

**Mahusay nitong ginagawa:**
- Pagbuo ng multi-phase na planong paggawa ng site para sa inilarawang uri ng negosyo
- Awtonomong pagsasagawa ng bawat yugto — estruktura, nilalaman, nabigasyon, disenyo
- Pagbawi mula sa mga error sa gitna ng plano nang hindi nangangailangan ng manu-manong interbensyon
- Pag-install ng mga inirerekomendang plugin bilang bahagi ng build
- Paggawa ng mga contact form direkta mula sa chat interface (Superdav AI Agent v1.10.0+)
- Pagkoordina ng mga paalala sa launch o follow-up sa mga dadalo nang walang dobleng notification kapag naka-enable ang mga approval gate at mga tala ng paalala

**Mga panimulang mungkahi:**
- *Gumawa ng photography portfolio site na may gallery post type, booking page, at contact form.*
- *Gumawa ng website para sa restaurant na may online menu, oras ng pagbubukas, at table-booking enquiry form.*
- *Mag-set up ng freelance consulting site na may mga service page, portfolio section, at blog.*
- *Magdagdag ng contact form sa Contact page gamit ang site builder.*
- *Pagkatapos maaprubahan ang checklist para sa launch ng site, magpadala ng SMS reminder sa naka-configure na stakeholder contact.*

---

### Design Studio

**Pokus:** Visual na customization — mga kulay, typography, CSS, at block pattern.

**Mga available na tool:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Mahusay nitong ginagawa:**
- Pag-apply ng mga pinangalanang theme preset (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Pag-fine-tune ng global typography at mga palette ng kulay sa pamamagitan ng theme.json
- Pag-inject ng custom CSS para sa mga override na partikular sa brand
- Pagkuha ng screenshot ng isang page at pag-review nito para sa mga isyu sa disenyo

**Mga panimulang mungkahi:**
- *I-apply ang warm-editorial preset at pagkatapos ay itakda ang pangunahing kulay sa #2d6a4f.*
- *Kumuha ng screenshot ng homepage at sabihin sa akin kung ano ang pagagandahin mo.*
- *Gumawa ng reusable hero block pattern na may full-width na background image at naka-centre na heading.*

### Plugin Manager

**Pokus:** Pagtuklas, pag-install, at pamamahala ng mga WordPress plugin.

**Mga available na tool:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Mahusay nitong ginagawa:**
- Pagrerekomenda ng pinakamahusay na plugin para sa inilarawang use case
- Pag-install ng mga ability pack mula sa registry
- Pag-browse sa available na ability catalogue ayon sa kategorya

**Mga panimulang mungkahi:**
- *Ano ang pinakamahusay na plugin para sa membership directory?*
- *I-install ang WooCommerce abilities pack.*
- *Ipakita sa akin ang lahat ng available na ecommerce ability pack.*

---

### Support Assistant

**Pokus:** Pagsagot sa mga tanong tungkol sa nilalaman ng site, mga setting, at configuration ng WordPress.

**Mga available na tool:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Mahusay nitong nagagawa ang:**
- Paghahanap ng kasalukuyang mga setting at opsyon ng site
- Pagpapaliwanag kung anong mga uri ng post, taxonomy, at menu ang naka-configure sa site
- Pagsagot sa mga tanong na "ano ang ginagawa ng setting na ito?" sa pamamagitan ng pagbabasa ng mga live na value
- Pagsisilbi bilang read-only na diagnostic layer bago gumawa ng mga pagbabago

**Mga panimulang mungkahi:**
- *Anong mga plugin at setting ang kasalukuyang aktibo sa site na ito?*
- *Ilista ang lahat ng custom na uri ng post na nakarehistro sa site na ito.*
- *Anong mga navigation menu ang mayroon at saan nakatalaga ang mga ito?*

---

## Mga Integrasyon sa Automation ng Superdav

Kapag naka-configure ang mga integrasyon ng Superdav AI Agent v1.18.0, maaaring makilahok ang mga built-in na agent sa mas ligtas na mga automation workflow na may kamalayan sa iskedyul:

- **Mga tool sa pagbabasa ng Google Calendar** ay nagpapahintulot sa mga agent na suriin ang mga naka-configure na kalendaryo at event bago gumawa ng draft ng susunod na gawain.
- **Pagmamapa ng contact at attendee** ay tumutulong na itugma ang mga kalahok sa event sa mga user ng WordPress o kilalang contact.
- **Mga gate ng pag-apruba ng tao** ay nagpapahinto sa mga sensitibong aksyon hanggang masuri at makumpirma ang mga ito ng awtorisadong user.
- **Mga tala ng paalala** ay pumipigil sa dobleng notification kapag muling sinusubukan o inuulit ng mga naka-iskedyul na trabaho.
- **Mga notification sa TextBee SMS** ay nagpapadala ng mga naka-configure na text message lamang kapag naka-enable ang mga SMS credential at pahintulot sa workflow.

Inirerekomendang workflow: hilingin sa agent na ihanda ang mensahe o aksyon, suriin ang prompt ng pag-apruba, pagkatapos ay payagang magpatuloy ang naaprubahang aksyon. Para sa mga paulit-ulit na paalala, panatilihing naka-enable ang deduplication ng paalala upang hindi paulit-ulit na maabisuhan ang parehong event o contact.

---

## Pag-customize ng mga Agent

Maaaring palawigin o palitan ang bawat built-in na agent sa pamamagitan ng filter na `gratis_ai_agent_agents`.

### Pagdaragdag ng custom na system prompt sa umiiral na agent

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

Lumalabas ang bagong agent sa Agent Picker kaagad pagkatapos tumakbo ang filter.

### Pag-alis ng built-in na agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
