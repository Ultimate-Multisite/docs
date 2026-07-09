---
title: Bayanan Iyawa
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Bayanin Abilities

Abilities su ne ƙananan ayyuka na asali da Gratis AI Agent zai iya kira a kan shigarwar WordPress ɗinka. Kowace ability ajin PHP ce da aka yi rajista wadda ke fitar da JSON schema — agent ɗin yana karanta wannan schema a lokacin aiki don fahimtar waɗanne parameters ake buƙata da abin da ability ɗin ke mayarwa.

Wannan shafi yana bayanin duk abilities da ke zuwa tare da Gratis AI Agent v1.9.0.

---

## Nau'ikan Rubutu na Musamman

Waɗannan abilities suna sarrafa nau'ikan rubutu na musamman (CPTs) da aka yi rajista ta hanyar agent ɗin. Ana adana rajistoci a teburin zaɓuɓɓukan WordPress don su ci gaba da kasancewa bayan kashe plugin da sake kunna shi.

### `register_post_type`

Yana yin rajistar sabon nau'in rubutu na musamman.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Maɓallin nau'in rubutu (iyaka haruffa 20, babu manyan haruffa, babu sarari) |
| `singular_label` | string | Yes | Suna na mufuradi da mutum zai iya karantawa, misali `Portfolio Item` |
| `plural_label` | string | Yes | Suna na jam'i da mutum zai iya karantawa, misali `Portfolio Items` |
| `public` | boolean | No | Ko nau'in rubutun yana samuwa ga jama'a. Tsoho `true` |
| `supports` | array | No | Siffofin da za a tallafa: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Tsoho `["title","editor"]` |
| `has_archive` | boolean | No | Ko an kunna shafin ajiyar nau'in rubutu. Tsoho `false` |
| `menu_icon` | string | No | Ajin Dashicons ko URL don alamar menu na admin. Tsoho `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | URL slug don nau'in rubutu. Yana komawa zuwa `slug` idan ba a bayar ba |

**Misali**

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

**Yana mayarwa** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Yana mayar da duk nau'ikan rubutu na musamman da agent ɗin ya yi rajista.

**Parameters** — babu

**Yana mayarwa**

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

Yana cire rajistar nau'in rubutu na musamman da agent ɗin ya riga ya yi rajista. Rubutun da ke akwai na wannan nau'in suna ci gaba da kasancewa a cikin database amma ba za a ƙara samun damar isa gare su ta wannan nau'in rubutu ba.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Maɓallin nau'in rubutu da za a cire |

**Yana mayarwa** `{ "success": true, "slug": "portfolio" }`

---

## Taxonomies na Musamman

Waɗannan abilities suna sarrafa taxonomies na musamman. Kamar CPTs, ana adana rajistar taxonomy.

### `register_taxonomy`

Yana yin rajistar sabuwar taxonomy ta musamman.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Maɓallin taxonomy (iyaka haruffa 32) |
| `singular_label` | string | Yes | Suna na mufuradi da mutum zai iya karantawa, misali `Project Category` |
| `plural_label` | string | Yes | Suna na jam'i da mutum zai iya karantawa, misali `Project Categories` |
| `post_types` | array | Yes | Slugs na nau'in rubutu da ya kamata a haɗa wannan taxonomy da su |
| `hierarchical` | boolean | No | `true` don salon category, `false` don salon tag. Tsoho `true` |
| `public` | boolean | No | Ko terms suna samuwa ga jama'a. Tsoho `true` |
| `rewrite_slug` | string | No | URL slug don taxonomy. Yana komawa zuwa `slug` idan ba a bayar ba |

**Misali**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Yana mayarwa** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Yana mayar da duk taxonomies na musamman da agent ɗin ya yi rajista.

**Parameters** — babu

**Yana mayarwa**

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

Yana cire rajistar taxonomy ta musamman da agent ɗin ya riga ya yi rajista.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Maɓallin taxonomy da za a cire |

**Yana mayarwa** `{ "success": true, "slug": "project-category" }`

---

## Tsarin Zane

Abilities na tsarin zane suna gyara bayyanar gani ta shafin WordPress — daga CSS na musamman zuwa block patterns da tambarin site.

### `inject_custom_css`

Yana ƙara CSS zuwa `<head>` na site ta hanyar `wp_add_inline_style`. Ana adana CSS a cikin zaɓin `gratis_ai_agent_custom_css` kuma ana cire shi cikin tsabta lokacin da aka sake saita ability ɗin.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | Ingantaccen CSS da za a saka |
| `label` | string | No | Lakabi da mutum zai iya karantawa don wannan block na CSS, ana amfani da shi a cikin debug logs. Tsoho `"agent-injected"` |
| `replace` | boolean | No | Idan `true`, yana maye gurbin duk CSS da aka saka a baya. Tsoho `false` (yana ƙara a ƙarshe) |

**Misali**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Yana mayarwa** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Yana yin rajistar block pattern da za a iya sake amfani da shi a cikin ɗakin karatu na pattern na WordPress.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Mai gano pattern, misali `gratis/hero-dark` |
| `title` | string | Yes | Suna na pattern da mutum zai iya karantawa wanda ake nunawa a cikin editor |
| `content` | string | Yes | Serialised block markup (HTML) don pattern |
| `categories` | array | No | Slugs na category na pattern, misali `["featured", "hero"]` |
| `description` | string | No | Takaitaccen bayani da ake nunawa a cikin mai zaɓar pattern |
| `keywords` | array | No | Kalmomin bincike |

**Yana mayarwa** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Yana jera duk block patterns da agent ɗin ya yi rajista.

**Parameters** — babu

**Yana dawo da**

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

Yana saita tambarin shafin WordPress zuwa wani attachment ID da aka bayar ko URL na hoto daga nesa. Idan an bayar da URL, ana sauke hoton sannan a shigo da shi cikin Media Library.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | ID na wani attachment da ke akwai a Media Library |
| `url` | string | No | URL na hoto daga nesa don shigo da shi da saita shi a matsayin tambari |

Dole a bayar da ɗaya daga `attachment_id` ko `url`.

**Yana dawo da** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Yana amfani da wani saitin launi/rubutu mai suna ga `theme.json` na theme mai aiki (ko `global-styles`). Presets tarin shirye-shirye ne da ƙungiyar Gratis AI Agent ke kula da su.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | Sunan preset, misali `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | Idan `true`, a haɗa da ƙimar da ke akwai maimakon maye gurbinsu. Default `false` |

**Presets da ake da su**

| Preset | Description |
|---|---|
| `minimal-dark` | Bayan fage kusan baƙi, rubutu fari, launin ƙarfafawa guda ɗaya |
| `warm-editorial` | Bayan fage mai ɗumin fari kaɗan, kanun rubutu na serif, launukan ƙarfafawa masu kama da ƙasa |
| `corporate-blue` | Launin navy da fari tare da rubutu na ƙwararru |
| `vibrant-startup` | Gradients masu haske, kusurwoyi masu zagaye, nau’in rubutu na zamani sans-serif |
| `classic-blog` | Launin toka mai tsaka-tsaki, line-height mai daɗi, tazarar shimfiɗa ta gargajiya |

**Yana dawo da** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles

Ƙwarewar Global Styles tana karantawa da rubuta ƙimomin theme.json ta WordPress Global Styles API, tana shafar duk blocks da templates a faɗin shafi.

### `get_global_styles`

Yana dawo da saitunan global styles na yanzu.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | JSON pointer zuwa wata ƙima ta musamman, misali `/color/palette` ko `/typography/fontSizes`. Yana dawo da dukan object idan an ƙyale shi. |

**Yana dawo da** cikakken object na global styles ko ƙimar da ke `path`.

---

### `set_global_styles`

Yana sabunta ƙima ɗaya ko fiye a cikin saitunan global styles.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Yes | JSON pointer zuwa ƙimar da za a saita, misali `/color/palette` |
| `value` | any | Yes | Sabuwar ƙima |

**Misali** — ƙara launi zuwa palette

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Yana dawo da** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Yana sake saita duk canje-canjen global styles da agent ya yi, yana dawo da defaults na theme.

**Parameters** — babu

**Yana dawo da** `{ "success": true }`

---

## Menus na Navigation

Ƙwarewar Navigation Menu tana ƙirƙira da sarrafa menus na WordPress nav da abubuwansu.

### `create_menu`

Yana ƙirƙirar sabon menu na navigation na WordPress.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Sunan menu, misali `Primary Navigation` |
| `location` | string | No | Wurin theme da za a ɗora wannan menu a kai, misali `primary` |

**Yana dawo da** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Yana sake suna menu ko sake ɗora shi zuwa wani wurin theme.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID na menu da za a sabunta |
| `name` | string | No | Sabon sunan menu |
| `location` | string | No | Wurin theme da za a ɗora ko sake ɗora |

**Yana dawo da** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Yana ƙara abu zuwa menu na navigation da ke akwai.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID na menu da ake nufi |
| `type` | string | Yes | Nau’in abu: `custom`, `post_type`, ko `taxonomy` |
| `title` | string | No | Alamar abin menu (ana buƙata ga nau’in `custom`) |
| `url` | string | No | URL don abubuwan `custom` |
| `object_id` | integer | No | Post ID ko term ID don abubuwan `post_type`/`taxonomy` |
| `parent_id` | integer | No | ID na abin menu da za a saka wannan abu a ƙarƙashinsa |
| `position` | integer | No | Matsayi mai farawa daga sifili a cikin menu |

**Yana dawo da** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Yana cire abu daga menu na navigation.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | ID na abin menu da za a cire |

**Yana dawo da** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Yana lissafa duk menus na navigation na WordPress, ciki har da wuraren theme da aka ɗora su.

**Parameters** — babu

**Yana dawo da**

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

## Sarrafa Options

Ƙwarewar Options tana karantawa da rubuta options na WordPress ta `get_option` / `update_option`. Wani safety blocklist da aka gina a ciki yana hana gyara saituna masu muhimmanci bisa kuskure.

### `get_option`

Yana karanta option na WordPress.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Maballin option, misali `blogname` |

**Yana dawo da** `{ "option_name": "blogname", "value": "My Site" }`

Yana dawo da kuskure idan `option_name` yana cikin safety blocklist.

---

### `set_option`

Yana rubuta option na WordPress.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Maballin option |
| `value` | any | Yes | Sabuwar ƙima (ana serialise ta atomatik don arrays/objects) |
| `autoload` | string | No | `"yes"` ko `"no"`. Default yana riƙe saitin autoload da ke akwai |

Yana dawo da kuskure idan `option_name` yana cikin safety blocklist.

**Yana dawo da** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Yana goge wani zaɓin WordPress.

**Sigogi**

| Sigi | Nau'i | Ana bukata | Bayani |
|---|---|---|---|
| `option_name` | string | Eh | Maballin zaɓin da za a goge |

Yana dawo da kuskure idan `option_name` yana cikin safety blocklist.

**Yana dawo da** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Yana lissafa zaɓuɓɓukan WordPress da suka dace da wani tsari.

**Sigogi**

| Sigi | Nau'i | Ana bukata | Bayani |
|---|---|---|---|
| `pattern` | string | A'a | Tsarin SQL LIKE don tace sunayen zaɓuɓɓuka, misali `gratis_%`. Yana dawo da duk zaɓuɓɓuka idan an tsallake shi (a yi amfani da hankali a manyan databases). |
| `limit` | integer | A'a | Matsakaicin adadin sakamako. Tsoho `50`, mafi yawa `500` |

**Yana dawo da**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Sarrafa Abun ciki

Ƙwarewar Sarrafa Abun ciki na ƙirƙira da gyara posts da shafuka na WordPress. Ana dawo da ID na post domin matakai na gaba a cikin tsare-tsaren ƙwarewa da yawa su iya nuni ga abun cikin da aka ƙirƙira.

### `create_post`

Yana ƙirƙirar sabon post na WordPress, shafi, ko shigarwar nau'in post na musamman.

**Sigogi**

| Sigi | Nau'i | Ana bukata | Bayani |
|---|---|---|---|
| `title` | string | Eh | Taken post |
| `content` | string | A'a | Jikin post — yana karɓar rubutu tsantsa, HTML, ko serialised block markup |
| `status` | string | A'a | `draft`, `publish`, `pending`, `private`. Tsoho `draft` |
| `post_type` | string | A'a | Slug na nau'in post, misali `post`, `page`, ko duk wani CPT da aka yi rajista. Tsoho `post` |
| `excerpt` | string | A'a | Taƙaitaccen bayani da ake nunawa a archives da sakamakon bincike |
| `categories` | array | A'a | Array na sunayen rukunai ko ID da za a sanya |
| `tags` | array | A'a | Array na sunayen tags ko ID da za a sanya |
| `author` | integer | A'a | ID na mai amfani da WordPress da za a sa a matsayin marubucin post. Tsoho shi ne mai amfani na yanzu |
| `date` | string | A'a | Ranar wallafawa a tsarin ISO 8601, misali `2026-05-01T09:00:00` |
| `page_template` | string | A'a | Fayil ɗin template da za a sanya wa wannan post ko shafi, misali `page-full-width.php`. Yana da ma'ana ne kawai idan `post_type` shi ne `page` ko CPT da ke goyon bayan templates na shafi. |

**Misali**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Yana dawo da** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Yana sabunta wani post ko shafi na WordPress da yake akwai.

**Sigogi**

| Sigi | Nau'i | Ana bukata | Bayani |
|---|---|---|---|
| `post_id` | integer | Eh | ID na post da za a sabunta |
| `title` | string | A'a | Sabon taken post |
| `content` | string | A'a | Sabon jikin post |
| `status` | string | A'a | Sabon matsayi: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | A'a | Sabon excerpt |
| `categories` | array | A'a | Maye gurbin cikakken jerin rukunai da wannan array na sunaye ko ID |
| `tags` | array | A'a | Maye gurbin cikakken jerin tags da wannan array na sunaye ko ID |
| `page_template` | string | A'a | Sabon fayil ɗin template da za a sanya wa wannan post ko shafi, misali `page-full-width.php`. Aika kirtani mara komai don cire sanya template ɗin kuma komawa zuwa tsohon theme. |

**Misali** — canza template bayan ƙirƙira

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Yana dawo da** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Yana ƙirƙirar posts da yawa a cikin kiran ƙwarewa guda ɗaya, yana rage kai-da-komo yayin gina site ko shigo da abun ciki mai yawa. Ana ƙirƙirar posts a jere; idan ɗaya ya gaza sauran za su ci gaba kuma za a bayar da rahoton gazawar a cikin array na sakamako.

**Sigogi**

| Sigi | Nau'i | Ana bukata | Bayani |
|---|---|---|---|
| `posts` | array | Eh | Array na abubuwan post, kowanne yana karɓar sigogi iri ɗaya da `create_post` |
| `stop_on_error` | boolean | A'a | Idan `true`, dakatar da sarrafawa bayan gazawar farko. Tsoho `false` |

**Misali**

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

**Yana dawo da**

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

Yana sanya hoton featured (ƙaramin hoton post) ga wani post ko shafi da yake akwai. Yana karɓar ID na attachment da ke cikin Media Library ko URL na hoto na nesa; idan an bayar da URL, ana sauke hoton kuma a shigo da shi ta atomatik.

**Sigogi**

| Sigi | Nau'i | Ana bukata | Bayani |
|---|---|---|---|
| `post_id` | integer | Eh | ID na post ko shafin da za a sabunta |
| `attachment_id` | integer | A'a | ID na attachment da ke cikin Media Library |
| `url` | string | A'a | URL na hoto na nesa da za a shigo da shi kuma a sa a matsayin hoton featured |
| `alt_text` | string | A'a | Rubutun alt da za a sanya wa attachment idan an shigo da shi daga URL |

Dole a bayar da ɗaya daga `attachment_id` ko `url`.

**Yana dawo da** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Yana ƙirƙirar fom ɗin tuntuɓa ta amfani da plugin na fom mai aiki (Contact Form 7, WPForms, Fluent Forms, ko Gravity Forms, gwargwadon wanda aka shigar). Yana dawo da shortcode da za a iya saka a kowanne post ko shafi.

**Sigogi**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Sunan fom da ake nuna wa a admin na plugin na fom |
| `fields` | array | Yes | Jerin filayen fom bisa tsari (duba abun Field a ƙasa) |
| `recipient` | string | No | Adireshin email da zai karɓi aikewa. Tsoho shi ne email ɗin admin na WordPress |
| `subject` | string | No | Layin batun email. Yana goyon bayan placeholders `[your-name]` da `[your-subject]` idan ana amfani da Contact Form 7 |
| `confirmation_message` | string | No | Saƙon da ake nuna wa bayan aikewa ta yi nasara. Tsoho: `"Thank you for your message. We'll be in touch soon."` |

**Abun Field**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Sunan fili na ciki / machine key |
| `label` | string | Yes | Lakabi mai sauƙin karantawa da ake nuna wa a kan fom |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Ko dole ne a cika filin kafin aikewa. Tsoho `false` |
| `options` | array | No | Zaɓuɓɓuka don filayen `select`, `checkbox`, da `radio` |
| `placeholder` | string | No | Rubutun placeholder don shigarwa irin na rubutu |

**Misali**

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

**Yana mayarwa**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Bita ta gani

Ƙwarewar Bita ta gani tana ba agent damar ɗaukar hotunan allo na shafuka masu rai da nazarinsu, tana ba da damar bita ta ƙira mai cin gashin kanta, kwatancen kafin/bayan, da duba koma-bayan gani ba tare da buƙatar wani kari na burauza ba.

### `capture_screenshot`

Yana ɗaukar hoton allo na shafin WordPress a wani URL da aka bayar ta amfani da burauza mara kai a ɓangaren sabar. Ana ajiye hoton a Media Library kuma ana mayar da CDN URL.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Cikakken URL na shafin da za a ɗauki hoton allo, misali `https://example.com/about/` |
| `width` | integer | No | Faɗin viewport a pixels. Tsoho `1280` |
| `height` | integer | No | Tsayin viewport a pixels. Tsoho `800` |
| `full_page` | boolean | No | Ɗauki cikakken shafi mai iya gungurawa maimakon viewport kawai. Tsoho `false` |
| `delay_ms` | integer | No | Milliseconds da za a jira bayan shafi ya ɗora kafin ɗauka, yana da amfani ga abun ciki mai motsi. Tsoho `500` |
| `label` | string | No | Lakabi mai sauƙin karantawa da aka adana tare da abin da aka maƙala a Media Library |

**Yana mayarwa**

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

Yana ɗaukar hotunan allo biyu kuma yana mayar da maki na bambancin gani tare da hoton bambanci da ke haskaka yankunan da suka canza. Yana da amfani don tabbatar da cewa canjin ƙira ya samar da sakamakon da ake tsammani ko don gano koma-bayan da ba a yi niyya ba.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL na shafin da za a ɗauka a matsayin yanayin "kafin" |
| `after_url` | string | Yes | URL na shafin da za a ɗauka a matsayin yanayin "bayan". Zai iya zama URL ɗaya idan ana kwatanta a tsawon lokaci |
| `width` | integer | No | Faɗin viewport don ɗaukaka biyun. Tsoho `1280` |
| `threshold` | float | No | Ƙofar bambancin pixel (0.0–1.0). Pixels da ke cikin wannan rangwame ana ɗauka ba su canza ba. Tsoho `0.1` |

**Yana mayarwa**

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

`diff_score` na `0.0` yana nufin babu canji da ake iya gani; `1.0` yana nufin kowane pixel ya canza.

---

### `review_page_design`

Yana ɗaukar hoton allo na shafi kuma yana aika shi zuwa samfurin harshe don nazarin gani. Yana mayar da kimantawa mai tsari da ta rufe shimfiɗa, tsarin rubutu, amfani da launi, da damuwar samun dama.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Cikakken URL na shafin da za a duba |
| `focus` | string | No | Jerin wuraren bita da aka raba da waƙafi da za a fi jaddadawa: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Tsoho: duk wurare |
| `width` | integer | No | Faɗin viewport. Tsoho `1280` |

**Yana mayarwa**

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

## Ƙwarewa da ake iya girkawa

Installable Abilities Registry yana ba ka damar faɗaɗa agent da ƙarin fakitin ƙwarewa da ake rarrabawa a matsayin WordPress plugins. Kowane fakiti yana rijistar ƙwarewa ɗaya ko fiye ta amfani da standard ability API.

### `list_available_abilities`

Yana mayar da kundin fakitin ƙwarewa da ke samuwa don girkawa daga registry.

**Parameters**

| Sigi | Nau'i | Ana buƙata | Bayani |
|---|---|---|---|
| `category` | string | A'a | Tace bisa rukuni: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Yana mayarwa**

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

Yana sauke kuma yana kunna kunshin ƙwarewa daga rajista.

**Sigogi**

| Sigi | Nau'i | Ana buƙata | Bayani |
|---|---|---|---|
| `slug` | string | Eh | slug na ƙarin kunshin ƙwarewa |

**Yana mayarwa** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Yana tambayar rajistar ƙwarewa don nemo mafi kyawun ƙari don yanayin amfani da aka bayyana kuma, idan ana so, ya shigar da shi.

**Sigogi**

| Sigi | Nau'i | Ana buƙata | Bayani |
|---|---|---|---|
| `description` | string | Eh | Bayani da harshe na yau da kullum game da aikin da ake so |
| `install` | boolean | A'a | Idan `true`, yana shigar da ƙarin da aka ba da shawara nan take. Tsoho `false` |

**Misali**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Yana mayarwa**

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
