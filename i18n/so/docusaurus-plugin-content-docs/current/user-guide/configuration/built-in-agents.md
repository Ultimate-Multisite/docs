---
title: Wakiillo ku-dhex-jira
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agents-ka Ku-dhex-jira

Gratis AI Agent v1.9.0 wuxuu la yimaadaa shan agents oo ku-dhex-jira, mid kasta waxaa horay loogu habeeyey qalab diiradda saaraya, system prompt la habeeyey, iyo talooyin bilow ah oo ku habboon hawlaha caadiga ah ee aaggaas. U kala wareegidda agents-ku waxay beddeshaa waxa assistant-ku samayn karo iyo sida uu uga jawaabo — adigoon wax configuration ah samayn. Superdav AI Agent v1.18.0 wuxuu workflows-kan ku dari karaa qalabyo schedule-aware ah, diiwaannada xusuusinta, approval gates, iyo ogeysiisyada SMS marka integrations-ka la xiriira la habeeyo.

## Waa Maxay Agent? {#what-is-an-agent}

Agent kasta waa profile configuration oo magac leh kaas oo isku dara:

- **Qalab** — awoodaha agent-ka loo oggol yahay inuu isticmaalo (tusaale Content Writer wuxuu heli karaa awoodaha abuurista qoraal; Design Studio wuxuu heli karaa awoodaha CSS iyo theme.json)
- **System prompt** — tilmaamo dejinaya codka agent-ka, mudnaanta, iyo xaddidaadaha
- **Talooyin** — prompts hore loo qoray oo lagu muujiyo interface-ka chat-ka si ay kaaga caawiyaan inaad si degdeg ah u bilowdo

## Gelitaanka Xulashada Agent-ka {#accessing-the-agent-picker}

1. Fur panel-ka **Gratis AI Agent** ee WordPress admin sidebar.
2. Guji **agent icon** ee geeska bidix-sare ee chat header-ka (icon-ku wuu is beddelaa si uu u muujiyo agent-ka firfircoon).
3. **Agent Picker** wuxuu u furmaa overlay form-table ah. Agent kasta waxaa lagu taxaa icon-kiisa, magaciisa, iyo sharaxaad hal sadar ah.
4. Guji safka agent si aad u dhaqaajiso. Chat header-ku isla markiiba wuu cusboonaysiiyaa.

Waxaad sidoo kale u kala wareegi kartaa agents inta wada-sheekaysigu socdo — system prompt-ka agent-ka cusub wuxuu dhaqan galaa laga bilaabo farriinta xigta.

## Shanta Agents ee Ku-dhex-jira {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Diiradda:** Abuurista iyo tafatirka posts, pages, iyo contact forms.

**Qalabka la heli karo:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Marka Superdav AI Agent v1.18.0 integrations la hawlgeliyo, calendar context la habeeyey, approval gates, reminders, iyo qalabka ogeysiiska SMS ayaa sidoo kale laga yaabaa inay u heli karaan workflows la ansixiyey.

**Waxa uu si fiican u qabto:**
- Qorista qabyada iyo daabicidda blog posts laga bilaabo brief ama outline
- Abuurista kooxo landing pages ah oo loogu talagalay site cusub
- Dhisidda contact iyo enquiry forms
- Dejinta featured images ee posts laga bilaabo URL ama search
- Qorista qabyada farriimaha dabagalka dhacdada laga bilaabo Google Calendar context la habeeyey, ka dibna hakinta si loo helo approval ka hor inta aan ogeysiisyada la dirin

**Talooyinka bilowga:**
- *Qor blog post 500-eray ah oo ku saabsan faa'iidooyinka WordPress multisite.*
- *Abuur About, Services, iyo Contact page oo daabac.*
- *Ku dar booking enquiry form bogga Contact.*
- *Qor qabyada xusuusin loogu talagalay ka-qaybgalayaasha dhacdada calendar-ka la habeeyey ee berri, oo sug approval ka hor intaadan dirin.*

---

### Site Builder {#site-builder}

**Diiradda:** Abuurista website dhammeystiran laga bilaabo hal prompt.

**Qalabka la heli karo:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Iyadoo Superdav AI Agent v1.18.0, qalabka managed-service, approval, reminder, calendar, iyo SMS ee la habeeyey ayaa laga yaabaa in laga heli karo meelaha administrators-ku ka hawlgeliyaan.

**Waxa uu si fiican u qabto:**
- Soo saarista site build plan marxalado badan leh oo loogu talagalay nooca ganacsi ee la sharaxay
- Fulinta marxalad kasta si madax-bannaan — qaab-dhismeed, nuxur, navigation, design
- Ka soo kabashada khaladaadka dhexda plan-ka iyadoo aan loo baahnayn faragelin gacanta ah
- Rakibidda plugins lagu taliyey oo qayb ka ah dhismaha
- Abuurista contact forms si toos ah uga timid interface-ka chat-ka (Superdav AI Agent v1.10.0+)
- Isku-duwidda launch reminders ama dabagalka ka-qaybgalayaasha iyadoo aan la samayn ogeysiisyo nuqul ah marka approval gates iyo reminder records la hawlgeliyo

**Talooyinka bilowga:**
- *Dhis site portfolio sawir-qaadis leh gallery post type, booking page, iyo contact form.*
- *Abuur website makhaayad leh menu online ah, saacadaha furitaanka, iyo table-booking enquiry form.*
- *Deji site la-talin freelance ah oo leh service pages, qayb portfolio, iyo blog.*
- *Ku dar contact form bogga Contact adigoo isticmaalaya site builder.*
- *Ka dib marka site launch checklist la ansixiyo, u dir SMS reminder xiriirka stakeholder-ka la habeeyey.*

---

### Design Studio {#design-studio}

**Diiradda:** Habaynta muuqaalka — midabyo, typography, CSS, iyo block patterns.

**Qalabka la heli karo:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Waxa uu si fiican u qabto:**
- Codsashada theme presets magac leh (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Si faahfaahsan u hagaajinta typography-ga guud iyo colour palettes iyada oo loo marayo theme.json
- Gelinta custom CSS loogu talagalay overrides gaar u ah brand-ka
- Qaadista screenshot bog ah iyo dib-u-eegiddiisa arrimaha design-ka

**Talooyinka bilowga:**
- *Codso warm-editorial preset ka dibna primary colour u dhig #2d6a4f.*
- *Ka qaad screenshot homepage-ka oo ii sheeg waxa aad hagaajin lahayd.*
- *Abuur hero block pattern dib loo isticmaali karo oo leh full-width background image iyo heading dhexda la dhigay.*

### Plugin Manager {#plugin-manager}

**Diiradda:** Helidda, rakibidda, iyo maaraynta WordPress plugins.

**Qalabka la heli karo:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Waxa uu si fiican u qabto:**
- Ku talinta plugin-ka ugu fiican ee use case la sharaxay
- Rakibidda ability packs laga bilaabo registry-ga
- Ka dhex-eegista catalogue-ka abilities ee la heli karo iyadoo loo eegayo category

**Talooyinka bilowga:**
- *Waa maxay plugin-ka ugu fiican ee membership directory?*
- *Rakib WooCommerce abilities pack.*
- *I tus dhammaan ecommerce ability packs ee la heli karo.*

---

### Support Assistant {#support-assistant}

**Diiradda:** Ka jawaabista su'aalaha ku saabsan nuxurka site-ka, settings, iyo WordPress configuration.

**Qalabka la heli karo:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Waxa uu si fiican u qabto:**
- Raadinta dejimaha iyo xulashooyinka hadda ee goobta
- Sharxidda noocyada qoraallada, taxonomies, iyo menus lagu habeeyay goobta
- Ka jawaabidda su'aalaha "dejin kani muxuu qabtaa?" iyadoo la akhrinayo qiimayaasha tooska ah
- U adeegidda lakab ogaansho oo akhris-keliya ah ka hor inta aan isbeddello la samayn

**Talooyin bilow ah:**
- *Plugins iyo dejimo noocee ah ayaa hadda ka shaqaynaya goobtan?*
- *Liis garee dhammaan noocyada qoraallada gaarka ah ee ka diiwaangashan goobtan.*
- *Menus hagitaan noocee ah ayaa jira, xaggeese loo qoondeeyay?*

---

## Isku-xidhyada Otomaatiga Superdav {#superdav-automation-integrations}

Marka isku-xidhyada Superdav AI Agent v1.18.0 la habeeyo, wakiillada ku dhex-jira waxay ka qayb qaadan karaan habraacyo otomaatig ah oo ka ammaan badan kana warqaba jadwalka:

- **Qalabka akhriska Google Calendar** waxay u oggolaadaan wakiillada inay baaraan kalandarrada iyo dhacdooyinka la habeeyay ka hor inta aysan diyaarin shaqo dabagal ah.
- **Iswaafajinta xiriirada iyo ka-qaybgalayaasha** waxay caawisaa in ka-qaybgalayaasha dhacdada lala waafajiyo isticmaalayaasha WordPress ama xiriirada la yaqaan.
- **Albaabbada oggolaanshaha aadanaha** waxay hakiyaan falalka xasaasiga ah ilaa isticmaale la oggolaaday uu dib u eego oo xaqiijiyo.
- **Diiwaannada xusuusinta** waxay ka hortagaan ogeysiisyo nuqul ah marka shaqooyinka jadwalaysan ay dib u tijaabiyaan ama ku celceliyaan.
- **Ogeysiisyada SMS ee TextBee** waxay diraan farriimaha qoraalka ah ee la habeeyay keliya marka aqoonsiyada SMS iyo oggolaanshaha habraaca la hawlgeliyo.

Habraaca lagu taliyay: weydii wakiilka inuu diyaariyo farriinta ama falka, dib u eeg dalabka oggolaanshaha, ka dibna u oggolow falka la ansixiyay inuu sii socdo. Xusuusinnada soo noqnoqda, sii hawlgelinta ka-saaridda nuqulka xusuusinta si isla dhacdada ama xiriirka aan marar badan loo ogeysiin.

---

## Habeynta Wakiillada {#customising-agents}

Wakiil kasta oo ku dhex-jira waa la ballaarin karaa ama lagu beddeli karaa iyadoo la adeegsanayo filter-ka `gratis_ai_agent_agents`.

### Ku daridda system prompt gaar ah wakiil jira {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Diiwaangelinta wakiil cusub {#registering-a-new-agent}

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

Wakiilka cusub wuxuu ka muuqdaa Xulashada Wakiilka isla marka filter-ku socdo kadib.

### Ka saaridda wakiil ku dhex-jira {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
