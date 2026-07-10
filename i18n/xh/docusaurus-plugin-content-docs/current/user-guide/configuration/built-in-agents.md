---
title: Ii-arhente ezakhelwe ngaphakathi
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agents ezakhelwe ngaphakathi {#built-in-agents}

Gratis AI Agent v1.9.0 iza neearhente ezintlanu ezakhelwe ngaphakathi, nganye ilungiselelwe kwangaphambili ngeseti egxininisiweyo yezixhobo, system prompt elungiselelweyo, kunye neengcebiso zokuqalisa ezihambelana nemisebenzi eqhelekileyo kuloo ndawo. Ukutshintsha phakathi kweearhente kutshintsha into anokuyenza umncedisi nendlela aphendula ngayo — ngaphandle kwalo naluphi na uqwalaselo oluvela kuwe. Superdav AI Agent v1.18.0 inokongeza izixhobo eziqonda ishedyuli, iirekhodi zezikhumbuzo, amasango okuvunywa, kunye nezaziso zeSMS kwezi nkqubo xa udibaniso olunxulumeneyo luqwalaselwe.

## Yintoni i-Agent? {#what-is-an-agent}

I-agent nganye yiprofayili yoqwalaselo enegama edibanisa:

- **Izixhobo** — izakhono i-agent evunyelweyo ukuzibiza (umz. Content Writer unokufikelela kwizakhono zokudala izithuba; Design Studio inokufikelela kwizakhono zeCSS kunye ne-theme.json)
- **System prompt** — imiyalelo emisela ithoni ye-agent, izinto eziphambili, kunye nemida
- **Iingcebiso** — ii-prompts ezibhaliweyo kwangaphambili eziboniswa kujongano lwencoko ukukunceda uqalise ngokukhawuleza

## Ukufikelela kwi-Agent Picker {#accessing-the-agent-picker}

1. Vula iphaneli ye-**Gratis AI Agent** kwibar esecaleni yolawulo lwe-WordPress.
2. Cofa **i-icon ye-agent** kwikona ephezulu ekhohlo ye-header yencoko (i-icon iyatshintsha ukubonisa i-agent esebenzayo).
3. I-**Agent Picker** ivuleka njenge-overlay yetheyibhile yefomu. I-agent nganye idweliswe kunye ne-icon yayo, igama, kunye nenkcazelo yomgca omnye.
4. Cofa umqolo we-agent ukuyenza isebenze. I-header yencoko ihlaziywa ngoko nangoko.

Unokutshintsha iiarhente naphakathi kwencoko — i-system prompt ye-agent entsha iqala ukusebenza kumyalezo olandelayo.

## Iiarhente ezintlanu ezakhelwe ngaphakathi {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Ugxininiso:** Ukudala nokuhlela izithuba, amaphepha, kunye neefomu zonxibelelwano.

**Izixhobo ezifumanekayo:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Xa udibaniso lwe-Superdav AI Agent v1.18.0 luvuliwe, umxholo wekhalenda oqwalaselweyo, amasango okuvunywa, izikhumbuzo, kunye nezixhobo zezaziso zeSMS nazo zinokufumaneka kwiinkqubo zomsebenzi ezivunyiweyo.

**Into eyenza kakuhle:**
- Ukubhala iidrafti nokupapasha izithuba zebhlogi ukusuka kwisishwankathelo okanye kulwandlalo
- Ukudala iibhetshi zamaphepha okufikela esayithi entsha
- Ukwakha iifomu zonxibelelwano nezemibuzo
- Ukuseta imifanekiso ephambili kwizithuba ukusuka kwi-URL okanye kukhangelo
- Ukubhala iidrafti zemiyalezo yokulandela emva kwesiganeko ukusuka kumxholo we-Google Calendar oqwalaselweyo, emva koko imise ukuze kufunyanwe imvume ngaphambi kokuthumela izaziso

**Iingcebiso zokuqalisa:**
- *Bhala isithuba sebhlogi samagama angama-500 malunga nezibonelelo ze-WordPress multisite.*
- *Yenza iphepha elithi Malunga, Iinkonzo, kunye noQhagamshelwano uze uwapapashe.*
- *Yongeza ifomu yombuzo wokubhukisha kwiphepha loQhagamshelwano.*
- *Bhala idrafti yesikhumbuzo sabazimasi kwisiganeko sekhalenda esiqwalaselweyo sangomso uze ulinde imvume ngaphambi kokusithumela.*

---

### Site Builder {#site-builder}

**Ugxininiso:** Ukudala iwebhusayithi ukusuka ekuqaleni ukuya ekugqibeleni ngomyalezo omnye.

**Izixhobo ezifumanekayo:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Nge-Superdav AI Agent v1.18.0, izixhobo ezilungiselelwe inkonzo elawulwayo, ukuvunywa, isikhumbuzo, ikhalenda, kunye neSMS zinokufumaneka apho abalawuli bazivumela khona.

**Into eyenza kakuhle:**
- Ukuvelisa isicwangciso sokwakha isayithi esinezigaba ezininzi kuhlobo lweshishini oluchaziweyo
- Ukuphumeza isigaba ngasinye ngokuzenzekelayo — isakhiwo, umxholo, ukuhamba, uyilo
- Ukubuyisela kwakhona kwiimpazamo phakathi kwesicwangciso ngaphandle kokufuna ungenelelo ngesandla
- Ukufaka ii-plugins ezicetyiswayo njengenxalenye yokwakha
- Ukudala iifomu zonxibelelwano ngqo kujongano lwencoko (Superdav AI Agent v1.10.0+)
- Ukulungelelanisa izikhumbuzo zokusungula okanye ukulandela abazimasi ngaphandle kwezaziso eziphindaphindiweyo xa amasango okuvunywa kunye neerekhodi zezikhumbuzo zivuliwe

**Iingcebiso zokuqalisa:**
- *Yakha isayithi yephothifoliyo yokufota enohlobo lwesithuba segalari, iphepha lokubhukisha, kunye nefomu yonxibelelwano.*
- *Yenza iwebhusayithi yerestyu enemenyu ye-intanethi, iiyure zokuvula, kunye nefomu yombuzo wokubhukisha itheyibhile.*
- *Seta isayithi yokubonisana ngokuzimeleyo enamaphepha eenkonzo, icandelo lephothifoliyo, kunye nebhlogi.*
- *Yongeza ifomu yonxibelelwano kwiphepha loQhagamshelwano usebenzisa umakhi wesayithi.*
- *Emva kokuba uluhlu lokukhangela lokusungulwa kwesayithi luvunyiwe, thumela isikhumbuzo seSMS kumntu wonxibelelwano womchaphazelekayo oqwalaselweyo.*

---

### Design Studio {#design-studio}

**Ugxininiso:** Ukwenza ngokwezifiso okubonakalayo — imibala, itypography, CSS, kunye neepateni zeebhloko.

**Izixhobo ezifumanekayo:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Into eyenza kakuhle:**
- Ukusebenzisa ii-presets ze-theme ezinamagama (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ukulungisa kakuhle itypography yehlabathi jikelele kunye neepalethi zemibala nge-theme.json
- Ukufaka iCSS yesiko yokugqitha okuthe ngqo kwi-brand
- Ukuthatha umfanekiso-skrini wephepha nokuwuphonononga ukuze kufunyanwe iingxaki zoyilo

**Iingcebiso zokuqalisa:**
- *Sebenzisa i-preset ye-warm-editorial uze usete umbala oyintloko ube ngu-#2d6a4f.*
- *Thatha umfanekiso-skrini wekhasi lasekhaya uze undixelele into onokuyiphucula.*
- *Yenza ipateni yebhloko ye-hero enokusetyenziswa kwakhona enomfanekiso ongasemva wobubanzi obupheleleyo kunye nesihloko esibekwe embindini.*

### Plugin Manager {#plugin-manager}

**Ugxininiso:** Ukufumanisa, ukufaka, nokulawula ii-plugins ze-WordPress.

**Izixhobo ezifumanekayo:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Into eyenza kakuhle:**
- Ukucebisa eyona plugin ilungileyo kwimeko yokusetyenziswa echaziweyo
- Ukufaka iipakethi zezakhono ukusuka kwirejistri
- Ukukhangela ikhathalogu yezakhono ezifumanekayo ngokodidi

**Iingcebiso zokuqalisa:**
- *Yeyiphi eyona plugin ilungileyo yedirectory yobulungu?*
- *Faka ipakethi yezakhono ze-WooCommerce.*
- *Ndibonise zonke iipakethi zezakhono ze-ecommerce ezifumanekayo.*

---

### Support Assistant {#support-assistant}

**Ugxininiso:** Ukuphendula imibuzo malunga nomxholo wesayithi, iisetingi, kunye noqwalaselo lwe-WordPress.

**Izixhobo ezifumanekayo:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Oko ikwenza kakuhle:**
- Ukukhangela iisetingi zangoku zesayithi kunye neenketho
- Ukuchaza ukuba zeziphi iintlobo zeeposti, ii-taxonomy, kunye neemenu ezilungiselelwe kwisayithi
- Ukuphendula imibuzo ethi "yenza ntoni le setingi?" ngokufunda amaxabiso aphilayo
- Ukusebenza njengomaleko woxilongo wokufunda kuphela phambi kokwenza utshintsho

**Iingcebiso zokuqalisa:**
- *Zeziphi izongezelelo kunye neesetingi ezisebenzayo ngoku kule sayithi?*
- *Dwelisa zonke iintlobo zeeposti ezilungiselelweyo ezibhaliswe kule sayithi.*
- *Zeziphi iimenu zokuhamba ezikhoyo kwaye zabelwe phi?*

---

## Iindibaniselwano zokuzenzekelayo ze-Superdav {#superdav-automation-integrations}

Xa iindibaniselwano ze-Superdav AI Agent v1.18.0 zilungiselelwe, ii-arhente ezakhelwe ngaphakathi zinokuthatha inxaxheba kwiinkqubo zokuzenzekelayo ezikhuselekileyo nezazi ishedyuli:

- **Izixhobo zokufunda ze-Google Calendar** zivumela ii-arhente ukuba zihlolisise iikhalenda kunye neziganeko ezilungiselelweyo phambi kokuyila umsebenzi wokulandelela.
- **Ukumatanisa abafowunelwa nabazimasi** kunceda ukuthelekisa abathathi-nxaxheba beziganeko nabasebenzisi be-WordPress okanye abafowunelwa abaziwayo.
- **Amasango okuvunywa ngumntu** amisa izenzo ezibuthathaka de umsebenzisi ogunyazisiweyo aziphonononge aze aziqinisekise.
- **Iirekhodi zezikhumbuzo** zithintela izaziso eziphindaphindiweyo xa imisebenzi ecwangcisiweyo izama kwakhona okanye iphinda.
- **Izaziso ze-TextBee SMS** zithumela imiyalezo ebhaliweyo elungiselelweyo kuphela xa iinkcukacha zokuqinisekisa ze-SMS kunye neemvume zenkqubo yokusebenza zivuliwe.

Inkqubo yokusebenza ecetyiswayo: cela iarhente ukuba ilungiselele umyalezo okanye isenzo, uphonononge isikhokelo sokuvunywa, uze uvumele isenzo esivunyiweyo ukuba siqhubeke. Kwizikhumbuzo eziphindaphindayo, gcina ukususa uphindaphindo lwezikhumbuzo kuvuliwe ukuze isiganeko esinye okanye umfowunelwa omnye angaziswa ngokuphindaphindiweyo.

---

## Ukwenza ii-arhente ngokwezifiso {#customising-agents}

Iarhente nganye eyakhelwe ngaphakathi inokwandiswa okanye itshintshwe nge-`gratis_ai_agent_agents` filter.

### Ukongeza umyalelo wenkqubo olungiselelweyo kwiarhente esele ikhona {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Ukubhalisa iarhente entsha {#registering-a-new-agent}

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

Iarhente entsha ibonakala kwiSikhethi seArhente kwangoko emva kokuba i-filter isebenzile.

### Ukususa iarhente eyakhelwe ngaphakathi {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
