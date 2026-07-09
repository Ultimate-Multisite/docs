---
title: Abakozi bubakiwemo
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agents Zubatswemo {#built-in-agents}

Gratis AI Agent v1.9.0 izana agents eshanu zubatswemo, buri imwe yateguwe mbere ifite urutonde rw’ibikoresho rwibanda ku ntego runaka, system prompt yayihariye, n’ibitekerezo byo gutangiriraho bihuye n’imirimo isanzwe muri icyo gice. Guhindura agent bihindura ibyo assistant ishobora gukora n’uko isubiza — nta configuration na imwe ugomba gukora ku ruhande rwawe. Superdav AI Agent v1.18.0 ishobora kongeramo ibikoresho byita kuri gahunda, inyandiko z’ibyibutswa, approval gates, n’imenyesha rya SMS muri izi workflows igihe integrations birebana byashyizweho.

## Agent Ni Iki? {#what-is-an-agent}

Buri agent ni umwirondoro wa configuration ufite izina uhuza:

- **Ibikoresho** — ubushobozi agent yemerewe gukoresha (urugero, Content Writer ifite uburenganzira ku bushobozi bwo gukora posts; Design Studio ifite uburenganzira ku bushobozi bwa CSS na theme.json)
- **System prompt** — amabwiriza agena imvugo ya agent, ibyo ishyira imbere, n’imbibi zayo
- **Ibitekerezo** — prompts zanditswe mbere zigaragara muri chat interface kugira ngo zigufashe gutangira vuba

## Kugera kuri Agent Picker {#accessing-the-agent-picker}

1. Fungura panel ya **Gratis AI Agent** muri sidebar y’ubuyobozi ya WordPress.
2. Kanda **agent icon** hejuru ibumoso muri chat header (icon ihinduka kugira ngo igaragaze agent ikora).
3. **Agent Picker** ifunguka nk’overlay ya form-table. Buri agent igaragazwa hamwe na icon yayo, izina, n’igisobanuro cy’umurongo umwe.
4. Kanda row ya agent kugira ngo uyikoreshe. Chat header ihita ivugururwa ako kanya.

Ushobora kandi guhindura agents hagati mu kiganiro — system prompt ya agent nshya itangira gukora ku butumwa bukurikira.

## Agents Eshanu Zubatswemo {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Icyo yibandaho:** Gukora no guhindura posts, pages, na forms zo kuvugana.

**Ibikoresho biboneka:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Iyo integrations za Superdav AI Agent v1.18.0 zifunguye, configured calendar context, approval gates, reminders, n’ibikoresho by’imenyesha rya SMS na byo bishobora kuboneka kuri workflows zemejwe.

**Ibyo ikora neza:**
- Gutegura no gutangaza blog posts zivuye kuri brief cyangwa outline
- Gukora batches za landing pages z’urubuga rushya
- Kubaka forms zo kuvugana n’izo kubaza
- Gushyiraho featured images kuri posts uhereye kuri URL cyangwa search
- Gutegura ubutumwa bwo gukurikirana event buvuye muri configured Google Calendar context, hanyuma igahagarara itegereje approval mbere yo kohereza imenyesha

**Ibitekerezo byo gutangiriraho:**
- *Andika blog post y’amagambo 500 ivuga ku nyungu za WordPress multisite.*
- *Kora pages za About, Services, na Contact maze uzitangaze.*
- *Ongeraho booking enquiry form kuri page ya Contact.*
- *Tegura reminder igenewe abazitabira configured calendar event y’ejo kandi utegereze approval mbere yo kuyohereza.*

---

### Site Builder {#site-builder}

**Icyo yibandaho:** Gukora website kuva ku ntangiriro kugeza ku musozo uhereye kuri prompt imwe.

**Ibikoresho biboneka:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Hamwe na Superdav AI Agent v1.18.0, ibikoresho bya managed-service, approval, reminder, calendar, na SMS byashyizweho bishobora kuboneka aho administrators babifungura.

**Ibyo ikora neza:**
- Gukora site build plan y’ibyiciro byinshi ku bwoko bw’ubucuruzi bwasobanuwe
- Gushyira mu bikorwa buri cyiciro yigenga — imiterere, content, navigation, design
- Kwisubiraho mu gihe habaye errors hagati muri plan bitasabye ko umuntu abyikorera
- Gushyiramo plugins zisabwe nk’igice cyo kubaka
- Gukora forms zo kuvugana iturutse muri chat interface (Superdav AI Agent v1.10.0+)
- Guhuza launch reminders cyangwa attendee follow-up nta menyesha risubiwemo igihe approval gates n’inyandiko za reminder zifunguye

**Ibitekerezo byo gutangiriraho:**
- *Baka urubuga rwa photography portfolio rufite gallery post type, booking page, na contact form.*
- *Kora website ya restaurant ifite menu yo kuri interineti, amasaha yo gufungura, na table-booking enquiry form.*
- *Shyiraho urubuga rwa freelance consulting rufite service pages, igice cya portfolio, na blog.*
- *Ongeraho contact form kuri page ya Contact ukoresheje site builder.*
- *Nyuma y’uko site launch checklist yemejwe, ohereza SMS reminder kuri configured stakeholder contact.*

---

### Design Studio {#design-studio}

**Icyo yibandaho:** Visual customisation — amabara, typography, CSS, na block patterns.

**Ibikoresho biboneka:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Ibyo ikora neza:**
- Gushyira mu bikorwa theme presets zifite amazina (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Gutunganya neza global typography na colour palettes binyuze muri theme.json
- Kwinjizamo custom CSS ku mpinduka zihariye za brand
- Gufata screenshot ya page no kuyisuzuma ku bibazo bya design

**Ibitekerezo byo gutangiriraho:**
- *Shyira mu bikorwa preset ya warm-editorial hanyuma ushyire primary colour kuri #2d6a4f.*
- *Fata screenshot ya homepage maze umbwire ibyo wanonosora.*
- *Kora reusable hero block pattern ifite background image y’ubugari bwose na heading iri hagati.*

### Plugin Manager {#plugin-manager}

**Icyo yibandaho:** Kuvumbura, gushyiramo, no gucunga WordPress plugins.

**Ibikoresho biboneka:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Ibyo ikora neza:**
- Gusaba plugin nziza kurusha izindi ku buryo bwo gukoresha bwasobanuwe
- Gushyiramo ability packs zivuye muri registry
- Gushakisha mu rutonde rwa abilities ziboneka hakurikijwe category

**Ibitekerezo byo gutangiriraho:**
- *Plugin nziza kurusha izindi ya membership directory ni iyihe?*
- *Shyiramo WooCommerce abilities pack.*
- *Nyereka ecommerce ability packs zose ziboneka.*

---

### Support Assistant {#support-assistant}

**Icyo yibandaho:** Gusubiza ibibazo ku bijyanye na content y’urubuga, settings, na WordPress configuration.

**Ibikoresho biboneka:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Ibyo ikora neza:**
- Gushakisha igenamiterere n’amahitamo agezweho y’urubuga
- Gusobanura ubwoko bwa post, taxonomies, na menus byagenwe ku rubuga
- Gusubiza ibibazo bya "iri genamiterere rikora iki?" isoma indangagaciro ziriho
- Gukora nk’urwego rwo gusuzuma rusoma gusa mbere yo gukora impinduka

**Ibyifuzo byo gutangira:**
- *Ni izihe plugins n’igenamiterere bikora ubu kuri uru rubuga?*
- *Tondeka ubwoko bwose bwa custom post types bwanditswe kuri uru rubuga.*
- *Ni izihe menus zo kugendamo zihari kandi zashyizwe hehe?*

---

## Superdav Automation Integrations {#superdav-automation-integrations}

Iyo integrations za Superdav AI Agent v1.18.0 zashyizweho, agents zubatswemo zishobora kugira uruhare mu mikorere y’automation itekanye kurushaho kandi izirikana ingengabihe:

- **Ibikoresho byo gusoma Google Calendar** byemerera agents gusuzuma calendars n’ibikorwa byashyizweho mbere yo gutegura akazi ko gukurikirana.
- **Guhuza contacts n’abitabiriye** bifasha guhuza abitabiriye igikorwa n’abakoresha ba WordPress cyangwa contacts zizwi.
- **Amarembo yo kwemezwa n’umuntu** ahagarika ibikorwa byoroshye kwibasirwa kugeza igihe umukoresha wemewe abisuzumiye kandi akabyemeza.
- **Inyandiko z’ibyibutsa** zirinda notifications zisubirwamo iyo jobs zashyizwe kuri gahunda zongeye kugerageza cyangwa zisubiyemo.
- **TextBee SMS notifications** zohereza ubutumwa bugufi bwashyizweho gusa iyo SMS credentials n’uburenganzira bwa workflow byafunguwe.

Workflow isabwa: saba agent gutegura ubutumwa cyangwa igikorwa, usuzume approval prompt, hanyuma wemere igikorwa cyemejwe gikomeze. Ku byibutsa bisubirwamo, komeza reminder deduplication ifunguye kugira ngo igikorwa kimwe cyangwa contact imwe itamenyeshwa inshuro nyinshi.

---

## Guhindura Agents {#customising-agents}

Buri agent yubatswemo ishobora kwagurwa cyangwa gusimbuzwa binyuze muri filter `gratis_ai_agent_agents`.

### Kongeramo custom system prompt kuri agent isanzwe {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Kwandikisha agent nshya {#registering-a-new-agent}

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

Agent nshya igaragara muri Agent Picker ako kanya filter imaze gukora.

### Gukuraho agent yubatswemo {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
