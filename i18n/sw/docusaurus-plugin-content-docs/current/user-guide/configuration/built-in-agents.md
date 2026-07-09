---
title: Mawakala Waliojengewa Ndani
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Mawakala Waliojengwa Ndani {#built-in-agents}

Gratis AI Agent v1.9.0 huja na mawakala watano waliojengwa ndani, kila mmoja akiwa amesanidiwa mapema kwa seti maalumu ya zana, system prompt iliyobinafsishwa, na mapendekezo ya kuanzia yanayolingana na kazi za kawaida katika eneo hilo. Kubadilisha kati ya mawakala hubadilisha kile ambacho msaidizi anaweza kufanya na jinsi anavyojibu — bila usanidi wowote kwa upande wako. Superdav AI Agent v1.18.0 inaweza kuongeza zana zinazozingatia ratiba, rekodi za vikumbusho, milango ya idhini, na arifa za SMS kwenye mtiririko huu wa kazi wakati miunganisho husika imesanidiwa.

## Wakala Ni Nini? {#what-is-an-agent}

Kila wakala ni wasifu wa usanidi wenye jina unaochanganya:

- **Zana** — uwezo ambao wakala anaruhusiwa kuitumia (k.m. Mwandishi wa Maudhui ana ufikiaji wa uwezo wa kuunda machapisho; Studio ya Ubunifu ina ufikiaji wa uwezo wa CSS na theme.json)
- **System prompt** — maagizo yanayoweka sauti, vipaumbele, na vikwazo vya wakala
- **Mapendekezo** — prompts zilizoandikwa mapema zinazoonyeshwa katika kiolesura cha mazungumzo ili kukusaidia kuanza haraka

## Kufikia Kiteua Wakala {#accessing-the-agent-picker}

1. Fungua paneli ya **Gratis AI Agent** kwenye upau wa pembeni wa msimamizi wa WordPress.
2. Bofya **ikoni ya wakala** upande wa juu-kushoto wa kichwa cha mazungumzo (ikoni hubadilika kuonyesha wakala anayefanya kazi).
3. **Kiteua Wakala** hufunguka kama safu ya jedwali la fomu. Kila wakala huorodheshwa pamoja na ikoni yake, jina, na maelezo ya mstari mmoja.
4. Bofya safu ya wakala ili kuiwasha. Kichwa cha mazungumzo husasishwa mara moja.

Unaweza pia kubadilisha mawakala katikati ya mazungumzo — system prompt ya wakala mpya huanza kutumika kuanzia ujumbe unaofuata.

## Mawakala Watano Waliojengwa Ndani {#the-five-built-in-agents}

### Mwandishi wa Maudhui {#content-writer}

**Lengo:** Kuunda na kuhariri machapisho, kurasa, na fomu za mawasiliano.

**Zana zinazopatikana:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Miunganisho ya Superdav AI Agent v1.18.0 ikiwa imewezeshwa, muktadha wa kalenda uliosanidiwa, milango ya idhini, vikumbusho, na zana za arifa za SMS pia zinaweza kupatikana kwa mitiririko ya kazi iliyoidhinishwa.

**Kile inachofanya vizuri:**
- Kuandaa na kuchapisha machapisho ya blogu kutoka muhtasari au mpangilio
- Kuunda makundi ya kurasa za kutua kwa site mpya
- Kujenga fomu za mawasiliano na maswali
- Kuweka picha teule kwenye machapisho kutoka URL au utafutaji
- Kuandaa ujumbe wa ufuatiliaji wa tukio kutoka muktadha uliosanidiwa wa Google Calendar, kisha kusitisha kwa idhini kabla ya kutuma arifa

**Mapendekezo ya kuanzia:**
- *Andika chapisho la blogu la maneno 500 kuhusu faida za WordPress multisite.*
- *Unda ukurasa wa Kuhusu, Huduma, na Mawasiliano kisha uzichapishe.*
- *Ongeza fomu ya swali la kuweka nafasi kwenye ukurasa wa Mawasiliano.*
- *Andaa kikumbusho kwa wahudhuriaji wa tukio la kalenda iliyosanidiwa la kesho na subiri idhini kabla ya kukituma.*

---

### Mjenzi wa Site {#site-builder}

**Lengo:** Uundaji wa website kutoka mwanzo hadi mwisho kwa prompt moja.

**Zana zinazopatikana:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Ukiwa na Superdav AI Agent v1.18.0, zana zilizosanidiwa za huduma inayosimamiwa, idhini, kikumbusho, kalenda, na SMS zinaweza kupatikana pale ambapo wasimamizi wanaziwezesha.

**Kile inachofanya vizuri:**
- Kuzalisha mpango wa ujenzi wa site wa awamu nyingi kwa aina ya biashara iliyoelezwa
- Kutekeleza kila awamu kwa kujitegemea — muundo, maudhui, urambazaji, muundo wa kuona
- Kupona kutokana na hitilafu katikati ya mpango bila kuhitaji uingiliaji wa mikono
- Kusakinisha plugins zinazopendekezwa kama sehemu ya ujenzi
- Kuunda fomu za mawasiliano moja kwa moja kutoka kiolesura cha mazungumzo (Superdav AI Agent v1.10.0+)
- Kuratibu vikumbusho vya uzinduzi au ufuatiliaji wa wahudhuriaji bila arifa rudufu wakati milango ya idhini na rekodi za vikumbusho zimewezeshwa

**Mapendekezo ya kuanzia:**
- *Jenga site ya jalada la upigaji picha yenye aina ya chapisho la matunzio, ukurasa wa kuweka nafasi, na fomu ya mawasiliano.*
- *Unda website ya mgahawa yenye menyu ya mtandaoni, saa za kufungua, na fomu ya swali la kuhifadhi meza.*
- *Sanidi site ya ushauri wa kujitegemea yenye kurasa za huduma, sehemu ya jalada, na blogu.*
- *Ongeza fomu ya mawasiliano kwenye ukurasa wa Mawasiliano kwa kutumia mjenzi wa site.*
- *Baada ya orodha-hakiki ya uzinduzi wa site kuidhinishwa, tuma kikumbusho cha SMS kwa mawasiliano ya mdau yaliyosanidiwa.*

---

### Studio ya Ubunifu {#design-studio}

**Lengo:** Ubinafsishaji wa mwonekano — rangi, tipografia, CSS, na ruwaza za blocks.

**Zana zinazopatikana:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Kile inachofanya vizuri:**
- Kutumia mipangilio ya awali ya theme yenye majina (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Kurekebisha kwa kina tipografia ya kimataifa na paleti za rangi kupitia theme.json
- Kuingiza CSS maalumu kwa marekebisho yanayohusu chapa
- Kuchukua picha ya skrini ya ukurasa na kuikagua kwa matatizo ya ubunifu

**Mapendekezo ya kuanzia:**
- *Tumia mpangilio wa awali wa warm-editorial kisha weka rangi kuu kuwa #2d6a4f.*
- *Chukua picha ya skrini ya ukurasa wa nyumbani na uniambie ungeboresha nini.*
- *Unda ruwaza ya block ya hero inayoweza kutumika tena yenye picha ya mandharinyuma yenye upana kamili na kichwa kilichowekwa katikati.*

### Msimamizi wa Plugin {#plugin-manager}

**Lengo:** Kugundua, kusakinisha, na kusimamia WordPress plugins.

**Zana zinazopatikana:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Kile inachofanya vizuri:**
- Kupendekeza plugin bora kwa matumizi yaliyoelezwa
- Kusakinisha vifurushi vya uwezo kutoka registry
- Kuvinjari katalogi ya uwezo unaopatikana kwa kategoria

**Mapendekezo ya kuanzia:**
- *Ni plugin ipi bora kwa saraka ya membership?*
- *Sakinisha kifurushi cha uwezo wa WooCommerce.*
- *Nionyeshe vifurushi vyote vinavyopatikana vya uwezo wa ecommerce.*

---

### Msaidizi wa Usaidizi {#support-assistant}

**Lengo:** Kujibu maswali kuhusu maudhui ya site, mipangilio, na usanidi wa WordPress.

**Zana zinazopatikana:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Kile inachofanya vizuri:**
- Kutafuta mipangilio na chaguo za sasa za tovuti
- Kueleza ni aina gani za machapisho, taksonomia, na menyu zimesanidiwa kwenye tovuti
- Kujibu maswali ya "mpangilio huu hufanya nini?" kwa kusoma thamani za moja kwa moja
- Kutumika kama safu ya uchunguzi ya kusoma pekee kabla ya kufanya mabadiliko

**Mapendekezo ya kuanzia:**
- *Ni plugins na mipangilio gani inayotumika kwa sasa kwenye tovuti hii?*
- *Orodhesha aina zote maalum za machapisho zilizosajiliwa kwenye tovuti hii.*
- *Ni menyu gani za urambazaji zilizopo na zimekabidhiwa wapi?*

---

## Miunganisho ya Superdav Automation {#superdav-automation-integrations}

Wakati miunganisho ya Superdav AI Agent v1.18.0 imesanidiwa, mawakala yaliyojengwa ndani yanaweza kushiriki katika mtiririko wa kazi wa otomatiki ulio salama zaidi na unaozingatia ratiba:

- **Zana za kusoma za Google Calendar** huruhusu mawakala kukagua kalenda na matukio yaliyosanidiwa kabla ya kuandaa kazi ya ufuatiliaji.
- **Ulinganishaji wa anwani na wahudhuriaji** husaidia kulinganisha washiriki wa tukio na watumiaji wa WordPress au anwani zinazojulikana.
- **Milango ya idhini ya binadamu** husitisha vitendo nyeti hadi mtumiaji aliyeidhinishwa avikague na kuvithibitisha.
- **Rekodi za vikumbusho** huzuia arifa rudufu wakati kazi zilizoratibiwa zinajaribu tena au kurudiwa.
- **Arifa za SMS za TextBee** hutuma ujumbe wa maandishi uliosanidiwa tu wakati vitambulisho vya SMS na ruhusa za mtiririko wa kazi zimewezeshwa.

Mtiririko wa kazi unaopendekezwa: mwombe wakala kuandaa ujumbe au kitendo, kagua kidokezo cha idhini, kisha ruhusu kitendo kilichoidhinishwa kuendelea. Kwa vikumbusho vinavyojirudia, weka uondoaji wa urudufu wa vikumbusho ukiwa umewezeshwa ili tukio au anwani ileile isiarifiwe mara kwa mara.

---

## Kubinafsisha Mawakala {#customising-agents}

Kila wakala aliyejengwa ndani anaweza kupanuliwa au kubadilishwa kupitia kichujio cha `gratis_ai_agent_agents`.

### Kuongeza kidokezo maalum cha mfumo kwa wakala aliyepo {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Kusajili wakala mpya {#registering-a-new-agent}

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

Wakala mpya huonekana kwenye Kiteuzi cha Wakala mara tu baada ya kichujio kuendeshwa.

### Kuondoa wakala aliyejengwa ndani {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
