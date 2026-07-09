---
title: MaAgent akavakirwa-mukati
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agents Akavakirwa-mukati

Gratis AI Agent v1.9.0 inouya neagents vashanu vakavakirwa-mukati, mumwe nemumwe akagadzirirwa kare neseti yakatariswa yezvishandiso, system prompt yakagadziridzwa, uye mazano ekutanga anoenderana nemabasa akajairika munzvimbo iyoyo. Kuchinja pakati peagents kunochinja zvinogona kuitwa nemubatsiri uye mapinduriro ainoita — pasina chero kugadzirisa kwaunofanira kuita. Superdav AI Agent v1.18.0 inogona kuwedzera zvishandiso zvinoziva schedule, marekodhi ezviyeuchidzo, magedhi emvumo, uye zviziviso zveSMS kuma workflows aya kana ma integrations ane chekuita nazvo agadziriswa.

## Agent Chii?

Agent yega yega iprofile yekugadzirisa ine zita inosanganisa:

- **Zvishandiso** — kugona kunobvumidzwa kushevedzwa neagent (semuenzaniso, Content Writer ine mukana wekugona kugadzira zvinyorwa; Design Studio ine mukana wekugona CSS ne theme.json)
- **System prompt** — mirayiridzo inoisa matauriro eagent, zvinokosheswa, uye miganhu
- **Mazano** — maprompt akanyorwa kare anoratidzwa muinterface yekutaura kuti akubatsire kutanga nekukurumidza

## Kuwana Agent Picker

1. Vhura pani ye **Gratis AI Agent** muWordPress admin sidebar.
2. Dzvanya **icon yeagent** kumusoro-kuruboshwe kwechat header (icon inochinja kuratidza agent iri kushanda).
3. **Agent Picker** inovhurika seoverlay yeform-table. Agent yega yega inonyorwa neicon yayo, zita, uye tsananguro yemutsara mumwe.
4. Dzvanya mutsara weagent kuti uiite ishande. Chat header inogadziridzwa pakarepo.

Unogonawo kuchinja agents uri pakati pehurukuro — system prompt yeagent itsva inotanga kushanda kubva pameseji inotevera.

## Agents Vashanu Vakavakirwa-mukati

### Content Writer

**Chinotariswa:** Kugadzira nekugadzirisa zvinyorwa, mapeji, uye mafomu ekutaurirana.

**Zvishandiso zviripo:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Kana ma integrations eSuperdav AI Agent v1.18.0 akagoneswa, mamiriro ekarenda akagadziriswa, magedhi emvumo, zviyeuchidzo, uye zvishandiso zvezviziviso zveSMS zvinogonawo kuwanikwa kuma workflows akatenderwa.

**Zvainoita zvakanaka:**
- Kunyora madhrafti nekuburitsa zvinyorwa zveblog kubva kubrief kana outline
- Kugadzira mabatch emapeji ekumhara esite itsva
- Kuvaka mafomu ekutaurirana nekubvunza
- Kuisa mifananidzo yakasarudzwa pazvinyorwa kubva kuURL kana kutsvaga
- Kunyora madhrafti emameseji ekutevera chiitiko kubva kumamiriro eGoogle Calendar akagadziriswa, wobva wamira kuti uwane mvumo usati watumira zviziviso

**Mazano ekutanga:**
- *Nyora chinyorwa cheblog chine mashoko 500 pamusoro pemabhenefiti eWordPress multisite.*
- *Gadzira peji reAbout, Services, neContact uye uzviburitse.*
- *Wedzera fomu rekubvunza booking kupeji reContact.*
- *Nyora draft yechiyeuchidzo chevapindi pachiitiko chekarenda yakagadziriswa chemangwana uye mirira mvumo usati wachitumira.*

---

### Site Builder

**Chinotariswa:** Kugadzira webhusaiti kubva pakutanga kusvika pakupedzisira uchishandisa prompt imwe chete.

**Zvishandiso zviripo:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. NeSuperdav AI Agent v1.18.0, zvishandiso zvemasevhisi anotarisirwa zvakagadziriswa, mvumo, chiyeuchidzo, karenda, uye SMS zvinogona kuwanikwa apo vatariri vanozvigonesa.

**Zvainoita zvakanaka:**
- Kugadzira plan yekuvaka site ine zvikamu zvakawanda yebhizinesi rakatsanangurwa
- Kuita chikamu chimwe nechimwe zvoga — chimiro, zvirimo, navigation, dhizaini
- Kupora kubva kumhosho uri pakati peplan pasina kuda kupindira nemaoko
- Kuisa ma plugins akakurudzirwa sechikamu chekuvaka
- Kugadzira mafomu ekutaurirana zvakananga kubva muinterface yekutaura (Superdav AI Agent v1.10.0+)
- Kuronga zviyeuchidzo zvekutanga site kana kutevera vapindi pasina zviziviso zvakapetwa kana magedhi emvumo nemarekodhi ezviyeuchidzo agoneswa

**Mazano ekutanga:**
- *Vaka site yeportfolio yemifananidzo ine gallery post type, peji rebooking, uye fomu rekutaurirana.*
- *Gadzira webhusaiti yeresitorendi ine menu yepamhepo, maawa ekuvhura, uye fomu rekubvunza table-booking.*
- *Gadzira site yefreelance consulting ine mapeji esevhisi, chikamu cheportfolio, uye blog.*
- *Wedzera fomu rekutaurirana kupeji reContact uchishandisa site builder.*
- *Mushure mekunge checklist yekutanga site yabvumidzwa, tumira chiyeuchidzo cheSMS kumunhu wekutaurirana ane chekuita akagadziriswa.*

---

### Design Studio

**Chinotariswa:** Kugadzirisa zvinoonekwa — mavara, typography, CSS, uye mapatani emablock.

**Zvishandiso zviripo:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Zvainoita zvakanaka:**
- Kushandisa theme presets dzine mazita (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Kugadzirisa zvakadzama typography yepasi rese nemapaleti emavara kuburikidza ne theme.json
- Kupinza CSS yakasarudzika yekuchinja zvinoenderana nebrand
- Kutora screenshot yepeji uye kuiongorora kuti uone nyaya dzedhizaini

**Mazano ekutanga:**
- *Shandisa preset ye warm-editorial wobva waisa ruvara rwekutanga ku #2d6a4f.*
- *Tora screenshot yepeji rekutanga uye undiudze zvaungavandudza.*
- *Gadzira reusable hero block pattern ine mufananidzo webackground une full-width uye heading iri pakati.*

### Plugin Manager

**Chinotariswa:** Kutsvaga, kuisa, uye kutarisira WordPress plugins.

**Zvishandiso zviripo:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Zvainoita zvakanaka:**
- Kukurudzira plugin yakanakisisa yekushandiswa kwakatsanangurwa
- Kuisa ability packs kubva muregistry
- Kubhurawuza catalogue yekugona iripo nechikamu

**Mazano ekutanga:**
- *Plugin yakanakisisa yedhairekitori remembership chii?*
- *Isa WooCommerce abilities pack.*
- *Ndiratidze ecommerce ability packs dzose dziripo.*

---

### Support Assistant

**Chinotariswa:** Kupindura mibvunzo pamusoro pezvirimo zvesite, marongero, uye kugadziriswa kweWordPress.

**Zvishandiso zviripo:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Zvainonyatsoita:**
- Kutsvaga marongero nesarudzo zviripo zvesaiti
- Kutsanangura kuti mhando dzemaposti, taxonomies, uye menyu zvakagadziriswa sei pasaiti
- Kupindura mibvunzo ye "marongero aya anoitei?" nekuverenga live values
- Kushanda sedanho rekuongorora rekuverenga-chete usati waita shanduko

**Mazano ekutanga:**
- *Ndeapi maplugin nemarongero ari kushanda parizvino pasaiti ino?*
- *Nyora mhando dzese dzecustom post types dzakanyoreswa pasaiti ino.*
- *Ndeapi mamenu ekufambisa aripo uye akapihwa kupi?*

---

## Superdav Automation Integrations

Kana Superdav AI Agent v1.18.0 integrations dzagadziriswa, built-in agents anogona kutora chikamu mumaautomation workflows akachengeteka uye anotevera zvirongwa:

- **Google Calendar maturusi ekuverenga** anobvumira agents kuongorora makarenda nezviitiko zvakagadziriswa vasati vanyora basa rekutevera.
- **Kufananidza macontact nevapindi** kunobatsira kuenzanisa vatori vechikamu vechiitiko nevashandisi veWordPress kana macontact anozivikanwa.
- **Magedhi emvumo yemunhu** anomisa zviito zvine njodzi kudzamara mushandisi ane mvumo azviongorora ozvisimbisa.
- **Marekodhi ezviyeuchidzo** anodzivirira zviziviso zvakapetwa kana mabasa akarongwa akaedza zvakare kana kudzokorora.
- **TextBee SMS notifications** anotumira mameseji akagadziriswa chete kana SMS credentials nemvumo dze workflow zvagoneswa.

Workflow inokurudzirwa: kumbira agent kugadzirira meseji kana chiito, ongorora chikumbiro chemvumo, wobva wabvumira chiito chatenderwa kuti chienderere mberi. Pazviyeuchidzo zvinodzokororwa, chengeta deduplication yezviyeuchidzo yakagoneswa kuitira kuti chiitiko chimwe chete kana contact imwe chete isaziviswe kakawanda.

---

## Kugadzirisa Agents

Built-in agent yega yega inogona kuwedzerwa kana kutsiviwa kuburikidza ne `gratis_ai_agent_agents` filter.

### Kuwedzera custom system prompt kune agent iripo

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Kunyoresa agent itsva

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

Agent itsva inoonekwa muAgent Picker pakarepo mushure mekunge filter yamhanya.

### Kubvisa built-in agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
