---
title: Aġenti integrati
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agents Inkorporati {#built-in-agents}

Gratis AI Agent v1.9.0 jiġi b'ħames agents inkorporati, kull wieħed ikkonfigurat minn qabel b'sett iffukat ta' għodod, system prompt imfassal apposta, u suġġerimenti tal-bidu mqabbla ma' kompiti komuni f'dak il-qasam. Meta taqleb bejn agents jinbidel dak li l-assistent jista' jagħmel u kif jirrispondi — mingħajr ebda konfigurazzjoni min-naħa tiegħek. Superdav AI Agent v1.18.0 jista' jżid għodod konxji tal-iskeda, rekords ta' tfakkiriet, approval gates, u notifiki SMS ma' dawn il-flussi tax-xogħol meta l-integrazzjonijiet relatati jkunu kkonfigurati.

## X'Inhu Agent? {#what-is-an-agent}

Kull agent huwa profil ta' konfigurazzjoni b'isem li jgħaqqad:

- **Għodod** — il-kapaċitajiet li l-agent huwa permess isejjaħ (eż. Content Writer għandu aċċess għal kapaċitajiet ta' ħolqien ta' posts; Design Studio għandu aċċess għal kapaċitajiet ta' CSS u theme.json)
- **System prompt** — istruzzjonijiet li jistabbilixxu t-ton, il-prijoritajiet, u r-restrizzjonijiet tal-agent
- **Suġġerimenti** — prompts miktuba minn qabel murija fl-interface taċ-chat biex jgħinuk tibda malajr

## Kif Taċċessa l-Agent Picker {#accessing-the-agent-picker}

1. Iftaħ il-panel **Gratis AI Agent** fis-sidebar tal-amministrazzjoni ta' WordPress.
2. Ikklikkja l-**ikona tal-agent** fir-rokna ta' fuq fuq ix-xellug tal-header taċ-chat (l-ikona tinbidel biex tirrifletti l-agent attiv).
3. Il-**Agent Picker** jinfetaħ bħala overlay ta' form-table. Kull agent huwa elenkat bl-ikona tiegħu, ismu, u deskrizzjoni ta' linja waħda.
4. Ikklikkja ringiela ta' agent biex tattivah. Il-header taċ-chat jiġi aġġornat minnufih.

Tista' wkoll taqleb agents f'nofs konverżazzjoni — is-system prompt tal-agent il-ġdid jidħol fis-seħħ mill-messaġġ li jmiss.

## Il-Ħames Agents Inkorporati {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Fokus:** Ħolqien u editjar ta' posts, paġni, u formoli ta' kuntatt.

**Għodod disponibbli:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. B'integrazzjonijiet ta' Superdav AI Agent v1.18.0 attivati, kuntest tal-kalendarju kkonfigurat, approval gates, tfakkiriet, u għodod ta' notifiki SMS jistgħu jkunu disponibbli wkoll għal flussi tax-xogħol approvati.

**X'jagħmel tajjeb:**
- Jabbozza u jippubblika posts tal-blog minn brief jew outline
- Joħloq lottijiet ta' landing pages għal sit ġdid
- Jibni formoli ta' kuntatt u tal-mistoqsijiet
- Jissettja featured images fuq posts minn URL jew tfittxija
- Jabbozza messaġġi ta' segwitu wara avveniment minn kuntest ta' Google Calendar ikkonfigurat, imbagħad jieqaf għall-approvazzjoni qabel jibgħat notifiki

**Suġġerimenti tal-bidu:**
- *Ikteb post tal-blog ta' 500 kelma dwar il-benefiċċji ta' WordPress multisite.*
- *Oħloq paġna About, Services, u Contact u ppubblikahom.*
- *Żid formola ta' mistoqsija dwar booking mal-paġna Contact.*
- *Abbozza tfakkira għall-parteċipanti fl-avveniment tal-kalendarju kkonfigurat ta' għada u stenna l-approvazzjoni qabel tibgħatha.*

---

### Site Builder {#site-builder}

**Fokus:** Ħolqien ta' website minn tarf sa tarf minn prompt wieħed.

**Għodod disponibbli:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. B'Superdav AI Agent v1.18.0, għodod ikkonfigurati ta' managed-service, approvazzjoni, tfakkiriet, kalendarju, u SMS jistgħu jkunu disponibbli fejn l-amministraturi jattivawhom.

**X'jagħmel tajjeb:**
- Jiġġenera pjan ta' bini ta' sit b'diversi fażijiet għal tip ta' negozju deskritt
- Jeżegwixxi kull fażi b'mod awtonomu — struttura, kontenut, navigazzjoni, disinn
- Jirkupra minn żbalji f'nofs il-pjan mingħajr ma jeħtieġ intervent manwali
- Jinstalla plugins rakkomandati bħala parti mill-bini
- Joħloq formoli ta' kuntatt direttament mill-interface taċ-chat (Superdav AI Agent v1.10.0+)
- Jikkoordina tfakkiriet tat-tnedija jew segwitu mal-parteċipanti mingħajr notifiki duplikati meta approval gates u rekords ta' tfakkiriet ikunu attivati

**Suġġerimenti tal-bidu:**
- *Ibni sit ta' portfolio tal-fotografija b'tip ta' post tal-gallerija, paġna tal-booking, u formola ta' kuntatt.*
- *Oħloq website ta' ristorant b'menu online, ħinijiet tal-ftuħ, u formola ta' mistoqsija għall-booking ta' mejda.*
- *Waqqaf sit ta' konsulenza freelance b'paġni tas-servizzi, sezzjoni ta' portfolio, u blog.*
- *Żid formola ta' kuntatt mal-paġna Contact billi tuża s-site builder.*
- *Wara li l-checklist tat-tnedija tas-sit tiġi approvata, ibgħat tfakkira SMS lill-kuntatt tal-istakeholder ikkonfigurat.*

---

### Design Studio {#design-studio}

**Fokus:** Personalizzazzjoni viżiva — kuluri, tipografija, CSS, u block patterns.

**Għodod disponibbli:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**X'jagħmel tajjeb:**
- Japplika presets tat-tema bl-isem (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Jirfina t-tipografija globali u l-paletti tal-kuluri permezz ta' theme.json
- Jinjetta CSS personalizzat għal overrides speċifiċi għall-brand
- Jieħu screenshot ta' paġna u jirrevediha għal kwistjonijiet ta' disinn

**Suġġerimenti tal-bidu:**
- *Applika l-preset warm-editorial u mbagħad issettja l-kulur primarju għal #2d6a4f.*
- *Ħu screenshot tal-homepage u għidli x'tittejjeb.*
- *Oħloq hero block pattern li jista' jerġa' jintuża b'immaġni fl-isfond fuq wisa' sħiħa u heading iċċentrat.*

### Plugin Manager {#plugin-manager}

**Fokus:** Skoperta, installazzjoni, u ġestjoni ta' WordPress plugins.

**Għodod disponibbli:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**X'jagħmel tajjeb:**
- Jirrakkomanda l-aħjar plugin għal każ ta' użu deskritt
- Jinstalla ability packs mir-registry
- Jibbrawżja l-katalgu tal-abilities disponibbli skont il-kategorija

**Suġġerimenti tal-bidu:**
- *X'inhu l-aħjar plugin għal direttorju tal-membership?*
- *Installa l-WooCommerce abilities pack.*
- *Urini l-ecommerce ability packs kollha disponibbli.*

---

### Support Assistant {#support-assistant}

**Fokus:** Tweġib ta' mistoqsijiet dwar il-kontenut tas-sit, settings, u konfigurazzjoni ta' WordPress.

**Għodod disponibbli:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Dak li jagħmel tajjeb:**
- Ifittex is-settings u l-għażliet attwali tas-sit
- Jispjega liema tipi ta’ posts, tassonomiji, u menus huma kkonfigurati fuq is-sit
- Iwieġeb mistoqsijiet bħal "x’tagħmel din is-setting?" billi jaqra valuri live
- Iservi bħala saff dijanjostiku read-only qabel isiru bidliet

**Suġġerimenti tal-bidu:**
- *Liema plugins u settings huma attwalment attivi fuq dan is-sit?*
- *Elenka t-tipi kollha ta’ posts personalizzati rreġistrati fuq dan is-sit.*
- *Liema menus tan-navigazzjoni jeżistu u fejn huma assenjati?*

---

## Integrazzjonijiet ta’ Awtomazzjoni Superdav {#superdav-automation-integrations}

Meta l-integrazzjonijiet ta’ Superdav AI Agent v1.18.0 ikunu kkonfigurati, l-aġenti mibnija jistgħu jipparteċipaw f’workflows ta’ awtomazzjoni aktar siguri u konxji tal-iskeda:

- **Għodod ta’ qari ta’ Google Calendar** jippermettu lill-aġenti jispezzjonaw calendars u avvenimenti kkonfigurati qabel ifasslu xogħol ta’ segwitu.
- **Immappjar ta’ kuntatti u parteċipanti** jgħin biex iqabbel il-parteċipanti tal-avvenimenti ma’ utenti ta’ WordPress jew kuntatti magħrufa.
- **Bibien ta’ approvazzjoni umana** iwaqqfu azzjonijiet sensittivi sakemm utent awtorizzat jirrevedihom u jikkonfermahom.
- **Rekords ta’ tfakkiriet** jipprevjenu notifiki duplikati meta xogħlijiet skedati jerġgħu jippruvaw jew jirrepetu.
- **Notifiki SMS ta’ TextBee** jibagħtu messaġġi testwali kkonfigurati biss meta l-kredenzjali tal-SMS u l-permessi tal-workflow ikunu attivati.

Workflow rakkomandat: staqsi lill-aġent iħejji l-messaġġ jew l-azzjoni, irrevedi l-prompt tal-approvazzjoni, imbagħad ħalli l-azzjoni approvata tkompli. Għal tfakkiriet rikorrenti, żomm id-deduplication tat-tfakkiriet attivata sabiex l-istess avveniment jew kuntatt ma jiġix notifikat ripetutament.

---

## Personalizzazzjoni tal-Aġenti {#customising-agents}

Kull aġent mibni jista’ jiġi estiż jew sostitwit permezz tal-filter `gratis_ai_agent_agents`.

### Żieda ta’ system prompt personalizzat ma’ aġent eżistenti {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Reġistrazzjoni ta’ aġent ġdid {#registering-a-new-agent}

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

L-aġent il-ġdid jidher fil-Selector tal-Aġent immedjatament wara li l-filter jaħdem.

### Tneħħija ta’ aġent mibni {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
