---
title: Wakilan da aka gina a ciki
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agents na Ciki {#built-in-agents}

Gratis AI Agent v1.9.0 yana zuwa da agents biyar na ciki, kowanne an riga an saita shi da tarin kayan aiki masu mayar da hankali, system prompt da aka keɓance, da shawarwarin farawa da suka dace da ayyuka na yau da kullum a wannan fanni. Sauyawa tsakanin agents yana canza abin da mataimakin zai iya yi da yadda yake amsawa — ba tare da wani saiti daga gare ka ba. Superdav AI Agent v1.18.0 zai iya ƙara kayan aiki masu lura da jadawali, bayanan tunatarwa, ƙofofin amincewa, da sanarwar SMS zuwa waɗannan hanyoyin aiki idan an saita haɗaɗɗun da suka dace.

## Mene ne Agent? {#what-is-an-agent}

Kowane agent bayanin martabar saiti ne mai suna wanda ke haɗa:

- **Kayan aiki** — ƙwarewar da agent ke da izinin kira (misali Content Writer yana da damar ƙirƙirar rubutu; Design Studio yana da damar CSS da theme.json)
- **System prompt** — umarnin da ke saita salon agent, fifiko, da ƙuntatawa
- **Shawarwari** — prompts da aka riga aka rubuta da ake nunawa a cikin mu'amalar hira don taimaka maka farawa da sauri

## Samun Damar Agent Picker {#accessing-the-agent-picker}

1. Buɗe panel ɗin **Gratis AI Agent** a cikin gefen admin na WordPress.
2. Danna **alamar agent** a saman-hagu na taken hira (alamar tana canzawa don nuna agent mai aiki).
3. **Agent Picker** yana buɗewa a matsayin shimfiɗar form-table. Ana jera kowane agent tare da alamarsa, sunansa, da bayanin layi ɗaya.
4. Danna layin agent don kunna shi. Taken hira yana sabuntawa nan take.

Haka kuma za ka iya sauya agents a tsakiyar tattaunawa — system prompt na sabon agent zai fara aiki daga saƙo na gaba.

## Agents Biyar na Ciki {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Mayar da hankali:** Ƙirƙira da gyara rubuce-rubuce, shafuka, da fom ɗin tuntuɓa.

**Kayan aiki da ake da su:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Idan an kunna haɗaɗɗun Superdav AI Agent v1.18.0, mahallin kalanda da aka saita, ƙofofin amincewa, tunatarwa, da kayan aikin sanarwar SMS na iya kuma kasancewa ga hanyoyin aiki da aka amince da su.

**Abin da yake yi da kyau:**
- Rubutawa da buga posts na blog daga taƙaitaccen bayani ko tsarin rubutu
- Ƙirƙirar rukuni-rukuni na landing pages don sabon shafi
- Gina fom ɗin tuntuɓa da tambaya
- Saita hotunan da aka fito da su a posts daga URL ko bincike
- Rubuta saƙonnin bin-baya na taro daga mahallin Google Calendar da aka saita, sannan dakatarwa don amincewa kafin aika sanarwa

**Shawarwarin farawa:**
- *Rubuta post na blog mai kalmomi 500 game da fa'idodin WordPress multisite.*
- *Ƙirƙiri shafukan About, Services, da Contact sannan ka buga su.*
- *Ƙara fom ɗin tambayar booking zuwa shafin Contact.*
- *Rubuta tunatarwa ga mahalarta taron kalanda da aka saita na gobe kuma jira amincewa kafin aika shi.*

---

### Site Builder {#site-builder}

**Mayar da hankali:** Ƙirƙirar website daga farko zuwa ƙarshe daga prompt guda ɗaya.

**Kayan aiki da ake da su:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Tare da Superdav AI Agent v1.18.0, kayan aikin managed-service, amincewa, tunatarwa, kalanda, da SMS da aka saita na iya kasancewa inda masu gudanarwa suka kunna su.

**Abin da yake yi da kyau:**
- Samar da tsarin gina shafi mai matakai da yawa don nau'in kasuwanci da aka bayyana
- Aiweatar da kowane mataki da kansa — tsari, abun ciki, kewayawa, zane
- Farfaɗowa daga kurakurai a tsakiyar tsari ba tare da buƙatar sa hannun hannu ba
- Shigar da plugins da aka ba da shawara a matsayin wani ɓangare na ginin
- Ƙirƙirar fom ɗin tuntuɓa kai tsaye daga mu'amalar hira (Superdav AI Agent v1.10.0+)
- Daidaita tunatarwar ƙaddamarwa ko bin-bayan mahalarta ba tare da sanarwa mai maimaituwa ba idan an kunna ƙofofin amincewa da bayanan tunatarwa

**Shawarwarin farawa:**
- *Gina shafin portfolio na ɗaukar hoto tare da nau'in post na gallery, shafin booking, da fom ɗin tuntuɓa.*
- *Ƙirƙiri website na gidan abinci tare da menu na kan layi, lokutan buɗewa, da fom ɗin tambayar booking na tebur.*
- *Saita shafin shawara na freelance tare da shafukan ayyuka, sashen portfolio, da blog.*
- *Ƙara fom ɗin tuntuɓa zuwa shafin Contact ta amfani da site builder.*
- *Bayan an amince da jerin binciken ƙaddamar da shafi, aika tunatarwar SMS zuwa contact na stakeholder da aka saita.*

---

### Design Studio {#design-studio}

**Mayar da hankali:** Keɓance gani — launuka, rubutun haruffa, CSS, da tsarin blocks.

**Kayan aiki da ake da su:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Abin da yake yi da kyau:**
- Aiwatar da presets na theme masu suna (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Daidaita typography na duniya da palet ɗin launuka ta theme.json
- Shigar da CSS na musamman don sauye-sauye na musamman ga brand
- Ɗaukar hoton allo na shafi da duba shi don matsalolin zane

**Shawarwarin farawa:**
- *Aiwatar da preset na warm-editorial sannan saita launin farko zuwa #2d6a4f.*
- *Ɗauki hoton allo na homepage kuma gaya mini abin da za ka inganta.*
- *Ƙirƙiri tsarin hero block da za a iya sake amfani da shi tare da hoton bango mai cikakken faɗi da taken da aka daidaita a tsakiya.*

### Plugin Manager {#plugin-manager}

**Mayar da hankali:** Ganowa, shigarwa, da sarrafa WordPress plugins.

**Kayan aiki da ake da su:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Abin da yake yi da kyau:**
- Ba da shawarar mafi kyawun plugin don amfani da aka bayyana
- Shigar da fakitin ƙwarewa daga registry
- Bincika katalogin ƙwarewa da ake da shi ta rukuni

**Shawarwarin farawa:**
- *Mene ne mafi kyawun plugin don membership directory?*
- *Shigar da fakitin ƙwarewar WooCommerce.*
- *Nuna mini duk fakitin ƙwarewar ecommerce da ake da su.*

---

### Support Assistant {#support-assistant}

**Mayar da hankali:** Amsa tambayoyi game da abun cikin shafi, saituna, da tsarin WordPress.

**Kayan aiki da ake da su:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Abin da yake yi da kyau:**
- Nemo saituna da zaɓuɓɓukan shafin na yanzu
- Bayyana irin nau'ikan rubutu, taxonomies, da menus da aka saita a shafin
- Amsa tambayoyin "me wannan saitin yake yi?" ta hanyar karanta ƙimomin kai tsaye
- Yin aiki a matsayin matakin bincike na karatu-kawai kafin yin canje-canje

**Shawarwarin farawa:**
- *Waɗanne plugins da saituna ne suke aiki a yanzu a wannan shafin?*
- *Jera duk nau'ikan rubutu na musamman da aka yi rijista a wannan shafin.*
- *Waɗanne menus na kewaya ne suke akwai kuma a ina aka sanya su?*

---

## Haɗin Kai na Automation na Superdav {#superdav-automation-integrations}

Lokacin da aka saita haɗin kai na Superdav AI Agent v1.18.0, wakilai na ciki za su iya shiga cikin hanyoyin aiki na automation masu aminci da ke la'akari da jadawali:

- **Kayan karanta Google Calendar** suna ba wakilai damar duba calendars da events da aka saita kafin su tsara aikin bi-baya.
- **Daidaita contacts da attendees** yana taimakawa wajen haɗa mahalarta event da masu amfani da WordPress ko sanannun contacts.
- **Ƙofofin amincewar ɗan Adam** suna dakatar da ayyuka masu muhimmanci har sai mai amfani mai izini ya duba su kuma ya tabbatar da su.
- **Bayanan tunatarwa** suna hana maimaita sanarwa lokacin da ayyukan da aka tsara suka sake gwadawa ko suka maimaitu.
- **Sanarwar SMS ta TextBee** tana aika saƙonnin rubutu da aka saita ne kawai lokacin da aka kunna bayanan shaidar SMS da izinin hanyar aiki.

Hanyar aiki da aka ba da shawara: ka nemi wakilin ya shirya saƙon ko aikin, ka duba buƙatar amincewa, sannan ka ba aikin da aka amince da shi damar ci gaba. Don tunatarwa masu maimaituwa, a bar hana maimaita tunatarwa a kunne domin kada a sanar da event ɗaya ko contact ɗaya sau da yawa.

---

## Keɓance Wakilai {#customising-agents}

Kowane wakili na ciki ana iya faɗaɗa shi ko a maye gurbinsa ta hanyar filter na `gratis_ai_agent_agents`.

### Ƙara custom system prompt ga wakili da yake akwai {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Rijistar sabon wakili {#registering-a-new-agent}

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

Sabon wakilin yana bayyana a Mai Zaɓen Wakili nan take bayan filter ɗin ya gudana.

### Cire wakili na ciki {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
