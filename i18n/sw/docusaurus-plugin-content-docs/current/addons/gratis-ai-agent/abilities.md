---
title: Rejeleo la Uwezo
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Rejea ya Uwezo

Uwezo ni vitendo vya msingi ambavyo Gratis AI Agent inaweza kuitisha kwenye usakinishaji wako wa WordPress. Kila uwezo ni PHP class iliyosajiliwa inayofichua JSON schema — agent husoma schema hii wakati wa utekelezaji ili kuelewa ni parameters gani zinahitajika na uwezo unarudisha nini.

Ukurasa huu unaorodhesha uwezo wote unaokuja na Gratis AI Agent v1.9.0.

---

## Aina Maalum za Chapisho

Uwezo huu unasimamia aina maalum za chapisho (CPTs) zilizosajiliwa kupitia agent. Usajili huhifadhiwa kwenye jedwali la chaguo la WordPress ili udumu baada ya plugin kuzimwa na kuwashwa tena.

### `register_post_type`

Husajili aina mpya maalum ya chapisho.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ufunguo wa aina ya chapisho (upeo wa herufi 20, hakuna herufi kubwa, hakuna nafasi) |
| `singular_label` | string | Yes | Jina la umoja linalosomeka na binadamu, k.m. `Portfolio Item` |
| `plural_label` | string | Yes | Jina la wingi linalosomeka na binadamu, k.m. `Portfolio Items` |
| `public` | boolean | No | Ikiwa aina ya chapisho inaweza kufikiwa hadharani. Chaguomsingi `true` |
| `supports` | array | No | Vipengele vya kuunga mkono: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Chaguomsingi `["title","editor"]` |
| `has_archive` | boolean | No | Ikiwa ukurasa wa archive wa aina ya chapisho umewezeshwa. Chaguomsingi `false` |
| `menu_icon` | string | No | Dashicons class au URL ya ikoni ya menyu ya admin. Chaguomsingi `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | URL slug kwa aina ya chapisho. Huchukua `slug` kama chaguomsingi |

**Mfano**

```json
{
  "slug": "portfolio",
  "singular_label": "Portfolio Item",
  "plural_label": "Portfolio Items",
  "public": true,
  "supports": ["title", "editor", "thumbnail"],
  "has_archive": true,
  "menu_icon": "dashicons-portfolio"
}
```

**Hurejesha** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Hurejesha aina zote maalum za chapisho zilizosajiliwa na agent.

**Parameters** — hakuna

**Hurejesha**

```json
{
  "post_types": [
    {
      "slug": "portfolio",
      "singular_label": "Portfolio Item",
      "plural_label": "Portfolio Items",
      "public": true
    }
  ]
}
```

---

### `delete_post_type`

Huondoa usajili wa aina maalum ya chapisho iliyosajiliwa awali na agent. Machapisho yaliyopo ya aina hiyo hubaki kwenye database lakini hayawezi tena kufikiwa kupitia aina ya chapisho.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ufunguo wa aina ya chapisho wa kuondoa |

**Hurejesha** `{ "success": true, "slug": "portfolio" }`

---

## Taxonomies Maalum

Uwezo huu unasimamia taxonomies maalum. Kama CPTs, usajili wa taxonomy huhifadhiwa.

### `register_taxonomy`

Husajili taxonomy mpya maalum.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ufunguo wa taxonomy (upeo wa herufi 32) |
| `singular_label` | string | Yes | Jina la umoja linalosomeka na binadamu, k.m. `Project Category` |
| `plural_label` | string | Yes | Jina la wingi linalosomeka na binadamu, k.m. `Project Categories` |
| `post_types` | array | Yes | Slugs za aina za chapisho ambazo taxonomy hii inapaswa kuambatishwa nazo |
| `hierarchical` | boolean | No | `true` kwa mtindo wa category, `false` kwa mtindo wa tag. Chaguomsingi `true` |
| `public` | boolean | No | Ikiwa terms zinaweza kufikiwa hadharani. Chaguomsingi `true` |
| `rewrite_slug` | string | No | URL slug kwa taxonomy. Huchukua `slug` kama chaguomsingi |

**Mfano**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Hurejesha** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Hurejesha taxonomies zote maalum zilizosajiliwa na agent.

**Parameters** — hakuna

**Hurejesha**

```json
{
  "taxonomies": [
    {
      "slug": "project-category",
      "singular_label": "Project Category",
      "post_types": ["portfolio"],
      "hierarchical": true
    }
  ]
}
```

---

### `delete_taxonomy`

Huondoa usajili wa taxonomy maalum iliyosajiliwa awali na agent.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ufunguo wa taxonomy wa kuondoa |

**Hurejesha** `{ "success": true, "slug": "project-category" }`

---

## Mfumo wa Muundo

Uwezo wa mfumo wa muundo hubadilisha mwonekano wa kuona wa tovuti ya WordPress — kuanzia CSS maalum hadi patterns za block na nembo ya tovuti.

### `inject_custom_css`

Huongeza CSS kwenye `<head>` ya tovuti kupitia `wp_add_inline_style`. CSS huhifadhiwa katika chaguo la `gratis_ai_agent_custom_css` na huondolewa kwenye foleni kwa usafi uwezo unapowekwa upya.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | CSS halali ya kuingiza |
| `label` | string | No | Lebo inayosomeka na binadamu kwa block hii ya CSS, hutumika katika kumbukumbu za debug. Chaguomsingi `"agent-injected"` |
| `replace` | boolean | No | Ikiwa `true`, hubadilisha CSS yote iliyowahi kuingizwa awali. Chaguomsingi `false` (huongeza mwishoni) |

**Mfano**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Hurejesha** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Husajili pattern ya block inayoweza kutumika tena katika maktaba ya patterns ya WordPress.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kitambulisho cha pattern, k.m. `gratis/hero-dark` |
| `title` | string | Yes | Jina la pattern linalosomeka na binadamu linaloonyeshwa kwenye editor |
| `content` | string | Yes | Markup ya block iliyoserialishwa (HTML) kwa ajili ya pattern |
| `categories` | array | No | Slugs za category za pattern, k.m. `["featured", "hero"]` |
| `description` | string | No | Maelezo mafupi yanayoonyeshwa kwenye kichagua pattern |
| `keywords` | array | No | Maneno muhimu ya utafutaji |

**Hurejesha** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Huorodhesha patterns zote za block zilizosajiliwa na agent.

**Parameters** — hakuna

**Hurejesha**

```json
{
  "patterns": [
    {
      "slug": "gratis/hero-dark",
      "title": "Dark Hero",
      "categories": ["hero"]
    }
  ]
}
```

---

### `set_site_logo`

Huweka nembo ya tovuti ya WordPress kwa attachment ID iliyotolewa au URL ya picha ya mbali. URL ikitolewa, picha hupakuliwa na kuingizwa kwenye Media Library.

**Vigezo**

| Kigezo | Aina | Kinahitajika | Maelezo |
|---|---|---|---|
| `attachment_id` | integer | Hapana | ID ya kiambatisho kilichopo cha Media Library |
| `url` | string | Hapana | URL ya picha ya mbali ya kuingiza na kuweka kama nembo |

Moja kati ya `attachment_id` au `url` lazima itolewe.

**Hurejesha** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Hutumia mpangilio uliotayarishwa wenye jina wa rangi/tipografia kwenye `theme.json` ya theme inayotumika (au `global-styles`). Mipangilio iliyotayarishwa ni vifurushi vilivyoratibiwa vinavyodumishwa na timu ya Gratis AI Agent.

**Vigezo**

| Kigezo | Aina | Kinahitajika | Maelezo |
|---|---|---|---|
| `preset` | string | Ndiyo | Jina la mpangilio uliotayarishwa, k.m. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Hapana | Ikiwa `true`, unganisha na thamani zilizopo badala ya kubadilisha. Chaguo-msingi ni `false` |

**Mipangilio iliyotayarishwa inayopatikana**

| Mpangilio uliotayarishwa | Maelezo |
|---|---|
| `minimal-dark` | Mandharinyuma karibu nyeusi, maandishi meupe, rangi moja ya msisitizo |
| `warm-editorial` | Mandharinyuma ya nyeupe yenye joto, vichwa vya serif, rangi za msisitizo za udongo |
| `corporate-blue` | Paleti ya navy na nyeupe yenye tipografia ya kitaalamu |
| `vibrant-startup` | Gradients angavu, kona za mviringo, aina ya kisasa ya sans-serif |
| `classic-blog` | Kijivu zisizoegemea upande wowote, urefu wa mstari unaostarehesha, nafasi za mpangilio wa kitamaduni |

**Hurejesha** `{ "success": true, "preset": "minimal-dark" }`

---

## Mitindo ya Jumla

Uwezo wa Mitindo ya Jumla husoma na kuandika thamani za theme.json kupitia WordPress Global Styles API, ukiathiri blocks na templates zote katika tovuti nzima.

### `get_global_styles`

Hurejesha usanidi wa sasa wa mitindo ya jumla.

**Vigezo**

| Kigezo | Aina | Kinahitajika | Maelezo |
|---|---|---|---|
| `path` | string | Hapana | JSON pointer kwenda kwenye thamani mahususi, k.m. `/color/palette` au `/typography/fontSizes`. Hurejesha kitu kizima ikiwa imeachwa. |

**Hurejesha** kitu kamili cha mitindo ya jumla au thamani katika `path`.

---

### `set_global_styles`

Husasisha thamani moja au zaidi katika usanidi wa mitindo ya jumla.

**Vigezo**

| Kigezo | Aina | Kinahitajika | Maelezo |
|---|---|---|---|
| `path` | string | Ndiyo | JSON pointer kwenda kwenye thamani ya kuweka, k.m. `/color/palette` |
| `value` | any | Ndiyo | Thamani mpya |

**Mfano** — ongeza rangi kwenye paleti

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Hurejesha** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Huweka upya mabadiliko yote ya mitindo ya jumla yaliyotumiwa na agent, ikirejesha chaguo-msingi za theme.

**Vigezo** — hakuna

**Hurejesha** `{ "success": true }`

---

## Menyu za Urambazaji

Uwezo wa Menyu za Urambazaji huunda na kudhibiti menyu za urambazaji za WordPress na vipengee vyake.

### `create_menu`

Huunda menyu mpya ya urambazaji ya WordPress.

**Vigezo**

| Kigezo | Aina | Kinahitajika | Maelezo |
|---|---|---|---|
| `name` | string | Ndiyo | Jina la menyu, k.m. `Primary Navigation` |
| `location` | string | Hapana | Eneo la theme la kuikabidhi menyu hii, k.m. `primary` |

**Hurejesha** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Hubadilisha jina la menyu au kuikabidhi upya kwenye eneo la theme.

**Vigezo**

| Kigezo | Aina | Kinahitajika | Maelezo |
|---|---|---|---|
| `menu_id` | integer | Ndiyo | ID ya menyu ya kusasisha |
| `name` | string | Hapana | Jina jipya la menyu |
| `location` | string | Hapana | Eneo la theme la kukabidhi au kukabidhi upya |

**Hurejesha** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Huongeza kipengee kwenye menyu iliyopo ya urambazaji.

**Vigezo**

| Kigezo | Aina | Kinahitajika | Maelezo |
|---|---|---|---|
| `menu_id` | integer | Ndiyo | ID ya menyu lengwa |
| `type` | string | Ndiyo | Aina ya kipengee: `custom`, `post_type`, au `taxonomy` |
| `title` | string | Hapana | Lebo ya kipengee cha menyu (inahitajika kwa aina ya `custom`) |
| `url` | string | Hapana | URL ya vipengee vya `custom` |
| `object_id` | integer | Hapana | Post ID au term ID kwa vipengee vya `post_type`/`taxonomy` |
| `parent_id` | integer | Hapana | ID ya kipengee cha menyu cha kuweka kipengee hiki chini yake |
| `position` | integer | Hapana | Nafasi inayotumia sifuri kama msingi kwenye menyu |

**Hurejesha** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Huondoa kipengee kutoka kwenye menyu ya urambazaji.

**Vigezo**

| Kigezo | Aina | Kinahitajika | Maelezo |
|---|---|---|---|
| `item_id` | integer | Ndiyo | ID ya kipengee cha menyu cha kuondoa |

**Hurejesha** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Huorodhesha menyu zote za urambazaji za WordPress, ikijumuisha maeneo ya theme yaliyokabidhiwa.

**Vigezo** — hakuna

**Hurejesha**

```json
{
  "menus": [
    {
      "menu_id": 7,
      "name": "Primary Navigation",
      "location": "primary",
      "item_count": 5
    }
  ]
}
```

---

## Usimamizi wa Chaguo

Uwezo wa Chaguo husoma na kuandika chaguo za WordPress kupitia `get_option` / `update_option`. Orodha ya ndani ya kuzuia kwa usalama huzuia urekebishaji wa bahati mbaya wa mipangilio muhimu.

### `get_option`

Husoma chaguo la WordPress.

**Vigezo**

| Kigezo | Aina | Kinahitajika | Maelezo |
|---|---|---|---|
| `option_name` | string | Ndiyo | Ufunguo wa chaguo, k.m. `blogname` |

**Hurejesha** `{ "option_name": "blogname", "value": "My Site" }`

Hurejesha hitilafu ikiwa `option_name` iko kwenye orodha ya kuzuia kwa usalama.

---

### `set_option`

Huandika chaguo la WordPress.

**Vigezo**

| Kigezo | Aina | Kinahitajika | Maelezo |
|---|---|---|---|
| `option_name` | string | Ndiyo | Ufunguo wa chaguo |
| `value` | any | Ndiyo | Thamani mpya (husirialishwa kiotomatiki kwa arrays/objects) |
| `autoload` | string | Hapana | `"yes"` au `"no"`. Chaguo-msingi huhifadhi mpangilio uliopo wa autoload |

Hurejesha hitilafu ikiwa `option_name` iko kwenye safety blocklist.

**Hurejesha** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Hufuta chaguo la WordPress.

**Vigezo**

| Kigezo | Aina | Inahitajika | Maelezo |
|---|---|---|---|
| `option_name` | string | Ndiyo | Ufunguo wa chaguo la kufuta |

Hurejesha hitilafu ikiwa `option_name` iko kwenye safety blocklist.

**Hurejesha** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Huorodhesha machaguo ya WordPress yanayolingana na muundo.

**Vigezo**

| Kigezo | Aina | Inahitajika | Maelezo |
|---|---|---|---|
| `pattern` | string | Hapana | Muundo wa SQL LIKE wa kuchuja majina ya machaguo, k.m. `gratis_%`. Hurejesha machaguo yote ikiwa imeachwa (tumia kwa tahadhari kwenye hifadhidata kubwa). |
| `limit` | integer | Hapana | Idadi ya juu ya matokeo. Chaguo-msingi `50`, kiwango cha juu `500` |

**Hurejesha**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Usimamizi wa Maudhui

Uwezo wa Usimamizi wa Maudhui huunda na kuhariri machapisho na kurasa za WordPress. ID za machapisho hurejeshwa ili hatua zinazofuata katika mipango yenye uwezo mwingi ziweze kurejelea maudhui yaliyoundwa.

### `create_post`

Huunda chapisho jipya la WordPress, ukurasa, au ingizo la aina maalum ya chapisho.

**Vigezo**

| Kigezo | Aina | Inahitajika | Maelezo |
|---|---|---|---|
| `title` | string | Ndiyo | Kichwa cha chapisho |
| `content` | string | Hapana | Mwili wa chapisho — hukubali maandishi wazi, HTML, au markup ya block iliyosawazishwa |
| `status` | string | Hapana | `draft`, `publish`, `pending`, `private`. Chaguo-msingi `draft` |
| `post_type` | string | Hapana | Slug ya aina ya chapisho, k.m. `post`, `page`, au CPT yoyote iliyosajiliwa. Chaguo-msingi `post` |
| `excerpt` | string | Hapana | Muhtasari mfupi unaoonyeshwa kwenye kumbukumbu na matokeo ya utafutaji |
| `categories` | array | Hapana | Array ya majina au ID za kategoria za kugawa |
| `tags` | array | Hapana | Array ya majina au ID za tag za kugawa |
| `author` | integer | Hapana | ID ya mtumiaji wa WordPress kuweka kama mwandishi wa chapisho. Chaguo-msingi ni mtumiaji wa sasa |
| `date` | string | Hapana | Tarehe ya kuchapisha katika umbizo la ISO 8601, k.m. `2026-05-01T09:00:00` |
| `page_template` | string | Hapana | Faili la template la kugawa kwa chapisho au ukurasa huu, k.m. `page-full-width.php`. Lina maana tu wakati `post_type` ni `page` au CPT inayounga mkono page templates. |

**Mfano**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Hurejesha** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Husasisha chapisho au ukurasa uliopo wa WordPress.

**Vigezo**

| Kigezo | Aina | Inahitajika | Maelezo |
|---|---|---|---|
| `post_id` | integer | Ndiyo | ID ya chapisho la kusasisha |
| `title` | string | Hapana | Kichwa kipya cha chapisho |
| `content` | string | Hapana | Mwili mpya wa chapisho |
| `status` | string | Hapana | Hali mpya: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Hapana | Dondoo mpya |
| `categories` | array | Hapana | Badilisha orodha kamili ya kategoria kwa array hii ya majina au ID |
| `tags` | array | Hapana | Badilisha orodha kamili ya tag kwa array hii ya majina au ID |
| `page_template` | string | Hapana | Faili jipya la template la kugawa kwa chapisho au ukurasa huu, k.m. `page-full-width.php`. Pitisha string tupu ili kuondoa ugawaji wa template na kurudi kwenye chaguo-msingi la theme. |

**Mfano** — badilisha template baada ya uundaji

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Hurejesha** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Huunda machapisho mengi katika mwito mmoja wa uwezo, ikipunguza safari za kwenda na kurudi wakati wa ujenzi wa site au uingizaji wa maudhui kwa wingi. Machapisho huundwa kwa mfuatano; ikiwa moja litashindwa, mengine huendelea na kushindwa huko huripotiwa kwenye array ya matokeo.

**Vigezo**

| Kigezo | Aina | Inahitajika | Maelezo |
|---|---|---|---|
| `posts` | array | Ndiyo | Array ya objects za chapisho, kila moja ikikubali vigezo vilevile kama `create_post` |
| `stop_on_error` | boolean | Hapana | Ikiwa `true`, simamisha uchakataji baada ya kushindwa kwa kwanza. Chaguo-msingi `false` |

**Mfano**

```json
{
  "posts": [
    {
      "title": "About Us",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Services",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Contact",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**Hurejesha**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "About Us" },
    { "success": true, "post_id": 43, "title": "Services" },
    { "success": true, "post_id": 44, "title": "Contact" }
  ]
}
```

---

### `set_featured_image`

Hugawa picha kuu (kijipicha cha chapisho) kwa chapisho au ukurasa uliopo. Hukubali ID ya kiambatisho kilichopo cha Media Library au URL ya picha ya mbali; URL ikitolewa, picha hupakuliwa na kuingizwa kiotomatiki.

**Vigezo**

| Kigezo | Aina | Inahitajika | Maelezo |
|---|---|---|---|
| `post_id` | integer | Ndiyo | ID ya chapisho au ukurasa wa kusasisha |
| `attachment_id` | integer | Hapana | ID ya kiambatisho kilichopo cha Media Library |
| `url` | string | Hapana | URL ya picha ya mbali ya kuingiza na kuweka kama picha kuu |
| `alt_text` | string | Hapana | Maandishi mbadala ya kutumika kwa kiambatisho ikiwa kinaingizwa kutoka URL |

Moja kati ya `attachment_id` au `url` lazima itolewe.

**Hurejesha** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Huunda fomu ya mawasiliano kwa kutumia plugin amilifu ya fomu (Contact Form 7, WPForms, Fluent Forms, au Gravity Forms, kutegemea ni ipi iliyosakinishwa). Hurejesha shortcode inayoweza kupachikwa kwenye chapisho au ukurasa wowote.

**Vigezo**

| Kigezo | Aina | Inahitajika | Maelezo |
|---|---|---|---|
| `title` | string | Ndiyo | Jina la fomu linaloonyeshwa katika usimamizi wa plugin ya fomu |
| `fields` | array | Ndiyo | Orodha iliyopangwa ya sehemu za fomu (tazama kitu cha Sehemu hapa chini) |
| `recipient` | string | Hapana | Anwani ya barua pepe ya kupokea mawasilisho. Chaguomsingi ni barua pepe ya msimamizi wa WordPress |
| `subject` | string | Hapana | Mstari wa mada ya barua pepe. Inaauni vishikilia nafasi vya `[your-name]` na `[your-subject]` unapotumia Contact Form 7 |
| `confirmation_message` | string | Hapana | Ujumbe unaoonyeshwa baada ya uwasilishaji kufanikiwa. Chaguomsingi: `"Thank you for your message. We'll be in touch soon."` |

**Kitu cha sehemu**

| Ufunguo | Aina | Inahitajika | Maelezo |
|---|---|---|---|
| `name` | string | Ndiyo | Jina la ndani la sehemu / ufunguo wa mashine |
| `label` | string | Ndiyo | Lebo inayosomeka na binadamu inayoonyeshwa kwenye fomu |
| `type` | string | Ndiyo | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Hapana | Ikiwa sehemu lazima ijazwe kabla ya uwasilishaji. Chaguomsingi `false` |
| `options` | array | Hapana | Chaguo za sehemu za `select`, `checkbox`, na `radio` |
| `placeholder` | string | Hapana | Maandishi ya kishikilia nafasi kwa ingizo za aina ya maandishi |

**Mfano**

```json
{
  "title": "Restaurant Booking Enquiry",
  "fields": [
    { "name": "your-name",    "label": "Name",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "Email",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Party size",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Special requests", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "New booking enquiry from [your-name]"
}
```

**Hurejesha**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Ukaguzi wa Mwonekano

Uwezo wa Ukaguzi wa Mwonekano humruhusu agent kunasa picha za skrini za kurasa za moja kwa moja na kuzichambua, ukiwezesha ukaguzi huru wa muundo, ulinganisho wa kabla/baada, na ukaguzi wa urudufu wa mwonekano bila kuhitaji kiendelezi chochote cha kivinjari.

### `capture_screenshot`

Hunasa picha ya skrini ya ukurasa wa WordPress katika URL uliyopewa kwa kutumia kivinjari kisicho na kiolesura kinachoendeshwa upande wa seva. Picha huhifadhiwa kwenye Maktaba ya Midia na URL ya CDN hurejeshwa.

**Vigezo**

| Kigezo | Aina | Inahitajika | Maelezo |
|---|---|---|---|
| `url` | string | Ndiyo | URL kamili ya ukurasa wa kupiga picha ya skrini, k.m. `https://example.com/about/` |
| `width` | integer | Hapana | Upana wa viewport kwa pikseli. Chaguomsingi `1280` |
| `height` | integer | Hapana | Urefu wa viewport kwa pikseli. Chaguomsingi `800` |
| `full_page` | boolean | Hapana | Nasa ukurasa mzima unaoweza kusogezwa badala ya viewport pekee. Chaguomsingi `false` |
| `delay_ms` | integer | Hapana | Milisekunde za kusubiri baada ya ukurasa kupakiwa kabla ya kunasa, muhimu kwa maudhui yenye uhuishaji. Chaguomsingi `500` |
| `label` | string | Hapana | Lebo inayosomeka na binadamu iliyohifadhiwa pamoja na kiambatisho kwenye Maktaba ya Midia |

**Hurejesha**

```json
{
  "success": true,
  "attachment_id": 88,
  "url": "https://example.com/wp-content/uploads/2026/04/screenshot-about.png",
  "width": 1280,
  "height": 800
}
```

---

### `compare_screenshots`

Huchukua picha mbili za skrini na kurejesha alama ya tofauti ya mwonekano pamoja na picha ya tofauti inayoangazia maeneo yaliyobadilika. Ni muhimu kwa kuthibitisha kwamba badiliko la muundo limetoa matokeo yaliyotarajiwa au kwa kugundua urudufu usiotarajiwa.

**Vigezo**

| Kigezo | Aina | Inahitajika | Maelezo |
|---|---|---|---|
| `before_url` | string | Ndiyo | URL ya ukurasa wa kunasa kama hali ya "kabla" |
| `after_url` | string | Ndiyo | URL ya ukurasa wa kunasa kama hali ya "baada". Inaweza kuwa URL ileile ikiwa unalinganisha kwa nyakati tofauti |
| `width` | integer | Hapana | Upana wa viewport kwa unasaji wote wawili. Chaguomsingi `1280` |
| `threshold` | float | Hapana | Kizingiti cha tofauti ya pikseli (0.0–1.0). Pikseli zilizo ndani ya uvumilivu huu huchukuliwa kuwa hazijabadilika. Chaguomsingi `0.1` |

**Hurejesha**

```json
{
  "success": true,
  "diff_score": 0.04,
  "changed_pixels": 2340,
  "total_pixels": 1024000,
  "diff_attachment_id": 91,
  "diff_url": "https://example.com/wp-content/uploads/2026/04/diff-about.png"
}
```

`diff_score` ya `0.0` inamaanisha hakuna badiliko linaloonekana; `1.0` inamaanisha kila pikseli imebadilika.

---

### `review_page_design`

Hunasa picha ya skrini ya ukurasa na kuituma kwa modeli ya lugha kwa uchambuzi wa mwonekano. Hurejesha tathmini iliyopangwa inayoshughulikia mpangilio, taipografia, matumizi ya rangi, na masuala ya ufikivu.

**Vigezo**

| Kigezo | Aina | Inahitajika | Maelezo |
|---|---|---|---|
| `url` | string | Ndiyo | URL kamili ya ukurasa wa kukagua |
| `focus` | string | Hapana | Orodha iliyotenganishwa kwa koma ya maeneo ya ukaguzi ya kusisitiza: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Chaguomsingi: maeneo yote |
| `width` | integer | Hapana | Upana wa viewport. Chaguomsingi `1280` |

**Hurejesha**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "The page structure is clean and readable. Two accessibility issues detected.",
    "layout": "Good visual hierarchy. Hero section is prominent.",
    "typography": "Body text is 15px — consider increasing to 16px for readability.",
    "colour": "Contrast ratio on the CTA button (#fff on #4a90e2) is 3.1:1 — below the WCAG AA threshold of 4.5:1.",
    "accessibility": ["Low contrast on CTA button", "Missing alt text on hero image"],
    "suggestions": ["Darken the CTA button to #1a5cb0 to pass WCAG AA", "Add descriptive alt text to the hero image"]
  }
}
```

---

## Uwezo Unaoweza Kusakinishwa

Rejesta ya Uwezo Unaoweza Kusakinishwa hukuruhusu kupanua agent kwa vifurushi vya ziada vya uwezo vinavyosambazwa kama plugins za WordPress. Kila kifurushi husajili uwezo mmoja au zaidi kwa kutumia API ya kawaida ya uwezo.

### `list_available_abilities`

Hurejesha katalogi ya vifurushi vya uwezo vinavyopatikana kwa usakinishaji kutoka kwenye rejesta.

**Vigezo**

| Kigezo | Aina | Inahitajika | Maelezo |
|---|---|---|---|
| `category` | string | Hapana | Chuja kwa kategoria: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Hurejesha**

```json
{
  "packs": [
    {
      "slug": "gratis-ai-agent-woocommerce",
      "name": "WooCommerce Abilities",
      "category": "ecommerce",
      "version": "1.0.0",
      "abilities": ["create_product", "update_pricing", "manage_inventory"],
      "installed": false
    }
  ]
}
```

---

### `install_ability`

Hupakua na kuamilisha kifurushi cha uwezo kutoka kwenye sajili.

**Vigezo**

| Kigezo | Aina | Inahitajika | Maelezo |
|---|---|---|---|
| `slug` | string | Ndiyo | slug ya programu-jalizi ya kifurushi cha uwezo |

**Hurejesha** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Huuliza sajili ya uwezo ili kupata programu-jalizi bora kwa matumizi yaliyofafanuliwa na, kwa hiari, huisakinisha.

**Vigezo**

| Kigezo | Aina | Inahitajika | Maelezo |
|---|---|---|---|
| `description` | string | Ndiyo | Maelezo ya lugha asilia ya utendaji unaotakiwa |
| `install` | boolean | Hapana | Ikiwa `true`, husakinisha programu-jalizi inayopendekezwa mara moja. Chaguo-msingi ni `false` |

**Mfano**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Hurejesha**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Widely adopted, supports file uploads, and integrates with Akismet for spam filtering.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
