---
title: Asiantau adeiledig
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Asiantau mewnol {#built-in-agents}

Mae Gratis AI Agent v1.9.0 yn cynnwys pum asiant mewnol, pob un wedi’i rag-ffurfweddu â set benodol o offer, prompt system wedi’i deilwra, ac awgrymiadau cychwynnol sy’n cyfateb i dasgau cyffredin yn yr ardal honno. Mae newid rhwng asiantau yn newid beth gall y cynorthwyydd ei wneud a sut mae’n ymateb — heb unrhyw ffurfweddu ar eich rhan chi. Gall Superdav AI Agent v1.18.0 ychwanegu offer sy’n ymwybodol o amserlenni, cofnodion atgoffa, gatiau cymeradwyo, a hysbysiadau SMS at y llifoedd gwaith hyn pan fydd yr integreiddiadau cysylltiedig wedi’u ffurfweddu.

## Beth Yw Asiant? {#what-is-an-agent}

Mae pob asiant yn broffil ffurfweddu ag enw sy’n cyfuno:

- **Offer** — y galluoedd y caniateir i’r asiant eu galw (e.e. mae gan Ysgrifennwr Cynnwys fynediad at alluoedd creu erthyglau; mae gan Stiwdio Ddylunio fynediad at alluoedd CSS a theme.json)
- **Prompt system** — cyfarwyddiadau sy’n gosod tôn, blaenoriaethau a chyfyngiadau’r asiant
- **Awgrymiadau** — prompts wedi’u hysgrifennu ymlaen llaw a ddangosir yn y rhyngwyneb sgwrs i’ch helpu i ddechrau’n gyflym

## Cyrchu’r Dewisydd Asiant {#accessing-the-agent-picker}

1. Agorwch y panel **Gratis AI Agent** yn far ochr gweinyddol WordPress.
2. Cliciwch yr **eicon asiant** yng nghornel chwith uchaf pennyn y sgwrs (mae’r eicon yn newid i adlewyrchu’r asiant gweithredol).
3. Mae’r **Dewisydd Asiant** yn agor fel troshaen tabl-ffurflen. Rhestrir pob asiant gyda’i eicon, ei enw, a disgrifiad un llinell.
4. Cliciwch res asiant i’w actifadu. Mae pennyn y sgwrs yn diweddaru ar unwaith.

Gallwch hefyd newid asiantau yng nghanol sgwrs — bydd prompt system yr asiant newydd yn dod i rym o’r neges nesaf.

## Y Pum Asiant Mewnol {#the-five-built-in-agents}

### Ysgrifennwr Cynnwys {#content-writer}

**Ffocws:** Creu a golygu erthyglau, tudalennau, a ffurflenni cyswllt.

**Offer sydd ar gael:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Gyda integreiddiadau Superdav AI Agent v1.18.0 wedi’u galluogi, gall cyd-destun calendr wedi’i ffurfweddu, gatiau cymeradwyo, atgoffwyr, ac offer hysbysiadau SMS hefyd fod ar gael i lifoedd gwaith cymeradwy.

**Beth mae’n ei wneud yn dda:**
- Drafftio a chyhoeddi erthyglau blog o friff neu amlinelliad
- Creu sypiau o dudalennau glanio ar gyfer gwefan newydd
- Adeiladu ffurflenni cyswllt ac ymholiad
- Gosod delweddau nodwedd ar erthyglau o URL neu chwiliad
- Drafftio negeseuon dilynol ar ôl digwyddiad o gyd-destun Google Calendar wedi’i ffurfweddu, yna oedi am gymeradwyaeth cyn anfon hysbysiadau

**Awgrymiadau cychwynnol:**
- *Ysgrifennwch erthygl blog 500 gair am fanteision WordPress multisite.*
- *Crëwch dudalen Amdanom, Gwasanaethau, a Chyswllt a’u cyhoeddi.*
- *Ychwanegwch ffurflen ymholiad archebu at y dudalen Cyswllt.*
- *Drafftiwch atgoffwr ar gyfer mynychwyr digwyddiad calendr wedi’i ffurfweddu yfory ac arhoswch am gymeradwyaeth cyn ei anfon.*

---

### Adeiladwr Gwefan {#site-builder}

**Ffocws:** Creu gwefan o’r dechrau i’r diwedd o un prompt.

**Offer sydd ar gael:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Gyda Superdav AI Agent v1.18.0, gall offer gwasanaeth rheoledig, cymeradwyo, atgoffa, calendr, ac SMS wedi’u ffurfweddu fod ar gael lle mae gweinyddwyr yn eu galluogi.

**Beth mae’n ei wneud yn dda:**
- Cynhyrchu cynllun adeiladu gwefan aml-gam ar gyfer math o fusnes a ddisgrifir
- Gweithredu pob cam yn annibynnol — strwythur, cynnwys, llywio, dylunio
- Adfer ar ôl gwallau yng nghanol cynllun heb ofyn am ymyrraeth â llaw
- Gosod plugins a argymhellir fel rhan o’r gwaith adeiladu
- Creu ffurflenni cyswllt yn uniongyrchol o’r rhyngwyneb sgwrs (Superdav AI Agent v1.10.0+)
- Cydlynu atgoffwyr lansio neu ddilyniant i fynychwyr heb hysbysiadau dyblyg pan fydd gatiau cymeradwyo a chofnodion atgoffa wedi’u galluogi

**Awgrymiadau cychwynnol:**
- *Adeiladwch wefan portffolio ffotograffiaeth gyda math erthygl oriel, tudalen archebu, a ffurflen gyswllt.*
- *Crëwch wefan bwyty gyda bwydlen ar-lein, oriau agor, a ffurflen ymholiad archebu bwrdd.*
- *Sefydlwch wefan ymgynghori llawrydd gyda thudalennau gwasanaeth, adran bortffolio, a blog.*
- *Ychwanegwch ffurflen gyswllt at y dudalen Cyswllt gan ddefnyddio’r adeiladwr gwefan.*
- *Ar ôl i restr wirio lansio’r wefan gael ei chymeradwyo, anfonwch atgoffwr SMS at y cyswllt rhanddeiliad wedi’i ffurfweddu.*

---

### Stiwdio Ddylunio {#design-studio}

**Ffocws:** Addasu gweledol — lliwiau, teipograffeg, CSS, a phatrymau bloc.

**Offer sydd ar gael:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Beth mae’n ei wneud yn dda:**
- Cymhwyso presets theme ag enwau (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Mireinio teipograffeg fyd-eang a phaletau lliw trwy theme.json
- Chwistrellu CSS personol ar gyfer trosysgrifiadau penodol i frand
- Tynnu sgrinlun o dudalen a’i hadolygu am broblemau dylunio

**Awgrymiadau cychwynnol:**
- *Cymhwyswch y preset warm-editorial ac yna gosodwch y prif liw i #2d6a4f.*
- *Tynnwch sgrinlun o’r hafan a dywedwch wrthyf beth fyddech chi’n ei wella.*
- *Crëwch batrwm bloc hero ailddefnyddiadwy gyda delwedd gefndir lled llawn a phennawd wedi’i ganoli.*

### Rheolwr Plugin {#plugin-manager}

**Ffocws:** Darganfod, gosod, a rheoli plugins WordPress.

**Offer sydd ar gael:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Beth mae’n ei wneud yn dda:**
- Argymell y plugin gorau ar gyfer achos defnydd a ddisgrifir
- Gosod pecynnau gallu o’r gofrestrfa
- Pori’r catalog galluoedd sydd ar gael yn ôl categori

**Awgrymiadau cychwynnol:**
- *Beth yw’r plugin gorau ar gyfer cyfeiriadur membership?*
- *Gosodwch becyn galluoedd WooCommerce.*
- *Dangoswch i mi bob pecyn gallu e-fasnach sydd ar gael.*

---

### Cynorthwyydd Cymorth {#support-assistant}

**Ffocws:** Ateb cwestiynau am gynnwys gwefan, gosodiadau, a ffurfweddiad WordPress.

**Offer sydd ar gael:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Beth mae'n ei wneud yn dda:**
- Chwilio gosodiadau ac opsiynau cyfredol y safle
- Esbonio pa fathau o bostiadau, tacsonomegau, a dewislenni sydd wedi'u ffurfweddu ar y safle
- Ateb cwestiynau "beth mae'r gosodiad hwn yn ei wneud?" drwy ddarllen gwerthoedd byw
- Gwasanaethu fel haen ddiagnostig darllen-yn-unig cyn gwneud newidiadau

**Awgrymiadau cychwynnol:**
- *Pa plugins a gosodiadau sydd ar waith ar y safle hwn ar hyn o bryd?*
- *Rhestrwch yr holl fathau postiad personol sydd wedi'u cofrestru ar y safle hwn.*
- *Pa ddewislenni llywio sy'n bodoli a ble maent wedi'u haseinio?*

---

## Integreiddiadau Awtomeiddio Superdav {#superdav-automation-integrations}

Pan fydd integreiddiadau Superdav AI Agent v1.18.0 wedi'u ffurfweddu, gall asiantau adeiledig gymryd rhan mewn llifoedd gwaith awtomeiddio mwy diogel sy'n ymwybodol o amserlenni:

- Mae **offer darllen Google Calendar** yn caniatáu i asiantau archwilio calendrau a digwyddiadau wedi'u ffurfweddu cyn drafftio gwaith dilynol.
- Mae **mapio cysylltiadau a mynychwyr** yn helpu i baru cyfranogwyr digwyddiadau â defnyddwyr WordPress neu gysylltiadau hysbys.
- Mae **gatiau cymeradwyaeth ddynol** yn oedi gweithredoedd sensitif nes bod defnyddiwr awdurdodedig yn eu hadolygu a'u cadarnhau.
- Mae **cofnodion atgoffa** yn atal hysbysiadau dyblyg pan fydd swyddi wedi'u hamserlennu yn ailgeisio neu'n ailadrodd.
- Mae **hysbysiadau SMS TextBee** yn anfon negeseuon testun wedi'u ffurfweddu dim ond pan fydd manylion adnabod SMS a chaniatadau llif gwaith wedi'u galluogi.

Llif gwaith a argymhellir: gofynnwch i'r asiant baratoi'r neges neu'r weithred, adolygwch yr anogiad cymeradwyo, yna caniatewch i'r weithred gymeradwy ailddechrau. Ar gyfer atgoffa cylchol, cadwch ddiddyblygu atgoffa wedi'i alluogi fel nad yw'r un digwyddiad neu gyswllt yn cael ei hysbysu dro ar ôl tro.

---

## Addasu Asiantau {#customising-agents}

Gellir ymestyn neu ddisodli pob asiant adeiledig drwy'r hidlydd `gratis_ai_agent_agents`.

### Ychwanegu anogiad system personol at asiant presennol {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Cofrestru asiant newydd {#registering-a-new-agent}

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

Mae'r asiant newydd yn ymddangos yn y Agent Picker yn syth ar ôl i'r hidlydd redeg.

### Dileu asiant adeiledig {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
