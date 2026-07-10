---
title: Gwaro reMano
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Gwaro reAbilities {#abilities-reference}

Abilities ndiwo zviito zvidiki-diki zvinogona kushevedzwa neGratis AI Agent paWordPress yako. Ability imwe neimwe ikirasi yePHP yakanyoreswa inoburitsa JSON schema — agent inoverenga schema iyi panguva yekushanda kuti inzwisise kuti ma parameters api anodiwa uye kuti ability inodzosa chii.

Peji rino rinonyora abilities dzese dzinouya neGratis AI Agent v1.9.0.

---

## Custom Post Types {#custom-post-types}

Abilities idzi dzinotarisira custom post types (CPTs) dzakanyoreswa kuburikidza neagent. Kunyoreswa kunochengetwa muWordPress options table kuitira kuti kurambe kuripo kunyange plugin yakadzimwa yobva yabatidzwa zvakare.

### `register_post_type` {#registerposttype}

Inonyoresa custom post type itsva.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kiyi yepost type (mavara anosvika 20, hapana mavara makuru, hapana nzvimbo) |
| `singular_label` | string | Yes | Zita rimwe chete rinonzwisisika nevanhu, semuenzaniso `Portfolio Item` |
| `plural_label` | string | Yes | Zita reuzhinji rinonzwisisika nevanhu, semuenzaniso `Portfolio Items` |
| `public` | boolean | No | Kana post type ichiwanikwa pachena. Default `true` |
| `supports` | array | No | Zvinhu zvekutsigira: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Default `["title","editor"]` |
| `has_archive` | boolean | No | Kana peji rearchive repost type rakabatidzwa. Default `false` |
| `menu_icon` | string | No | Dashicons class kana URL yeicon yemenyu yeadmin. Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | URL slug yepost type. Inoshandisa `slug` kana isina kupiwa |

**Muenzaniso**

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

**Inodzosa** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Inodzosa custom post types dzese dzakanyoreswa neagent.

**Parameters** — hapana

**Inodzosa**

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

### `delete_post_type` {#deleteposttype}

Inobvisa kunyoreswa kwecustom post type yakambonyoreswa neagent. Mapost aripo erudzi irworwo anoramba ari mudatabase asi haachawanikwi kuburikidza nepost type.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kiyi yepost type yekubvisa |

**Inodzosa** `{ "success": true, "slug": "portfolio" }`

---

## Custom Taxonomies {#custom-taxonomies}

Abilities idzi dzinotarisira custom taxonomies. Sezvakaita CPTs, kunyoreswa kwetaxonomy kunochengetwa.

### `register_taxonomy` {#registertaxonomy}

Inonyoresa custom taxonomy itsva.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kiyi yetaxonomy (mavara anosvika 32) |
| `singular_label` | string | Yes | Zita rimwe chete rinonzwisisika nevanhu, semuenzaniso `Project Category` |
| `plural_label` | string | Yes | Zita reuzhinji rinonzwisisika nevanhu, semuenzaniso `Project Categories` |
| `post_types` | array | Yes | Ma slug epost type ayo taxonomy iyi inofanira kubatanidzwa nawo |
| `hierarchical` | boolean | No | `true` yerudzi rwecategory, `false` yerudzi rwetag. Default `true` |
| `public` | boolean | No | Kana terms dzichiwanikwa pachena. Default `true` |
| `rewrite_slug` | string | No | URL slug yetaxonomy. Inoshandisa `slug` kana isina kupiwa |

**Muenzaniso**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Inodzosa** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Inodzosa custom taxonomies dzese dzakanyoreswa neagent.

**Parameters** — hapana

**Inodzosa**

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

### `delete_taxonomy` {#deletetaxonomy}

Inobvisa kunyoreswa kwecustom taxonomy yakambonyoreswa neagent.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Kiyi yetaxonomy yekubvisa |

**Inodzosa** `{ "success": true, "slug": "project-category" }`

---

## Design System {#design-system}

Design system abilities dzinoshandura maratidzirwo anoonekwa eWordPress site — kubva kuCSS yakagadziridzwa kusvika kuma block patterns uye logo yesite.

### `inject_custom_css` {#injectcustomcss}

Inowedzera CSS ku`<head>` yesite kuburikidza ne`wp_add_inline_style`. CSS inochengetwa muoption ye`gratis_ai_agent_custom_css` uye inobviswa zvakanaka pamutsetse kana ability yagadziriswazve.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | CSS yakakodzera yekuisa |
| `label` | string | No | Label inonzwisisika nevanhu yeCSS block iyi, inoshandiswa mumadebug logs. Default `"agent-injected"` |
| `replace` | boolean | No | Kana iri `true`, inotsiva CSS yese yakamboiswa. Default `false` (inowedzera) |

**Muenzaniso**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Inodzosa** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Inonyoresa block pattern inogona kushandiswazve muWordPress pattern library.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Chiziviso chepattern, semuenzaniso `gratis/hero-dark` |
| `title` | string | Yes | Zita repattern rinonzwisisika nevanhu rinoratidzwa mueditor |
| `content` | string | Yes | Serialised block markup (HTML) yepattern |
| `categories` | array | No | Ma slug ecategory yepattern, semuenzaniso `["featured", "hero"]` |
| `description` | string | No | Tsananguro pfupi inoratidzwa mupattern picker |
| `keywords` | array | No | Mazwi ekutsvaga |

**Inodzosa** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Inonyora block patterns dzese dzakanyoreswa neagent.

**Parameters** — hapana

**Zvinodzoka**

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

### `set_site_logo` {#setsitelogo}

Inoisa logo yesaiti yeWordPress kuattachment ID yakapihwa kana URL yemufananidzo uri kure. Kana URL yapihwa, mufananidzo unodhawunirodhwa woendeswa muMedia Library.

**Maparamita**

| Paramita | Rudzi | Inodiwa | Tsananguro |
|---|---|---|---|
| `attachment_id` | integer | Kwete | ID yeattachment iripo muMedia Library |
| `url` | string | Kwete | URL yemufananidzo uri kure yekupinza uye kuisa selogo |

Imwe ye`attachment_id` kana `url` inofanira kupihwa.

**Zvinodzoka** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Inoshandisa preset ine zita yeruvara/typography pa`theme.json` yetheme iri kushanda (kana `global-styles`). Mapreset mapakeji akasarudzwa uye anochengetwa nechikwata cheGratis AI Agent.

**Maparamita**

| Paramita | Rudzi | Inodiwa | Tsananguro |
|---|---|---|---|
| `preset` | string | Hongu | Zita represet, semuenzaniso `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Kwete | Kana iri `true`, sanganisa nemitengo iripo pane kutsiva. Default `false` |

**Mapreset aripo**

| Preset | Tsananguro |
|---|---|
| `minimal-dark` | Kumashure kuri pedyo nekusviba chose, mavara machena, ruvara rumwe rwekusimbisa |
| `warm-editorial` | Kumashure kweoff-white kunodziya, misoro yeserif, mavara ekusimbisa ane chimiro chevhu |
| `corporate-blue` | Palette ye navy newhite ine typography yehunyanzvi |
| `vibrant-startup` | Magradient anopenya, makona akakomberedzwa, mhando yemavara yemazuva ano sans-serif |
| `classic-blog` | Magrey asina kwakarerekera, line-height yakasununguka, nzvimbo dzekuronga dzechinyakare |

**Zvinodzoka** `{ "success": true, "preset": "minimal-dark" }`

---

## Masitayera Epasi Rose {#global-styles}

Kugona kweMasitayera Epasi Rose kunoverenga nekunyora mitengo ye theme.json kuburikidza neWordPress Global Styles API, kuchikanganisa mabhuroko nematemplate ese pasaiti yese.

### `get_global_styles` {#getglobalstyles}

Inodzosa kurongwa kwemasitayera epasi rose aripo iye zvino.

**Maparamita**

| Paramita | Rudzi | Inodiwa | Tsananguro |
|---|---|---|---|
| `path` | string | Kwete | JSON pointer kumutengo chaiwo, semuenzaniso `/color/palette` kana `/typography/fontSizes`. Inodzosa chinhu chose kana yasiiwa. |

**Zvinodzoka** chinhu chizere chemasitayera epasi rose kana mutengo uri pa`path`.

---

### `set_global_styles` {#setglobalstyles}

Inovandudza mutengo mumwe kana yakawanda mukurongwa kwemasitayera epasi rose.

**Maparamita**

| Paramita | Rudzi | Inodiwa | Tsananguro |
|---|---|---|---|
| `path` | string | Hongu | JSON pointer kumutengo wekusetwa, semuenzaniso `/color/palette` |
| `value` | any | Hongu | Mutengo mutsva |

**Muenzaniso** — wedzera ruvara ku palette

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Zvinodzoka** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Inodzorerazve shanduko dzese dzemasitayera epasi rose dzakashandiswa neagent, ichidzorera madefault etheme.

**Maparamita** — hapana

**Zvinodzoka** `{ "success": true }`

---

## Mamenu eNavigation {#navigation-menus}

Kugona kweNavigation Menu kunogadzira nekutarisira mamenu eWordPress nav nezvinhu zvawo.

### `create_menu` {#createmenu}

Inogadzira menu itsva yeWordPress navigation.

**Maparamita**

| Paramita | Rudzi | Inodiwa | Tsananguro |
|---|---|---|---|
| `name` | string | Hongu | Zita remenu, semuenzaniso `Primary Navigation` |
| `location` | string | Kwete | Nzvimbo yetheme yekupa menu iyi, semuenzaniso `primary` |

**Zvinodzoka** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Inotumidza menu patsva kana kuipazve kunzvimbo yetheme.

**Maparamita**

| Paramita | Rudzi | Inodiwa | Tsananguro |
|---|---|---|---|
| `menu_id` | integer | Hongu | ID yemenu yekuvandudza |
| `name` | string | Kwete | Zita idzva remenu |
| `location` | string | Kwete | Nzvimbo yetheme yekupa kana kupazve |

**Zvinodzoka** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Inowedzera chinhu kumenu ye navigation iripo.

**Maparamita**

| Paramita | Rudzi | Inodiwa | Tsananguro |
|---|---|---|---|
| `menu_id` | integer | Hongu | ID yemenu yakanangwa |
| `type` | string | Hongu | Rudzi rwechinhu: `custom`, `post_type`, kana `taxonomy` |
| `title` | string | Kwete | Label yechinhu chemenu (inodiwa parudzi rwe`custom`) |
| `url` | string | Kwete | URL yezvinhu zve`custom` |
| `object_id` | integer | Kwete | Post ID kana term ID yezvinhu zve`post_type`/`taxonomy` |
| `parent_id` | integer | Kwete | Menu item ID yekuisa chinhu ichi pasi payo |
| `position` | integer | Kwete | Nzvimbo inotangira pazero mumenu |

**Zvinodzoka** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Inobvisa chinhu kubva kumenu ye navigation.

**Maparamita**

| Paramita | Rudzi | Inodiwa | Tsananguro |
|---|---|---|---|
| `item_id` | integer | Hongu | Menu item ID yekubvisa |

**Zvinodzoka** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Inonyora mamenu ese eWordPress navigation, kusanganisira nzvimbo dzawo dzakapiwa mutheme.

**Maparamita** — hapana

**Zvinodzoka**

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

## Kutarisira Options {#options-management}

Kugona kweOptions kunoverenga nekunyora maoptions eWordPress kuburikidza ne`get_option` / `update_option`. Blocklist yekuchengeteka yakavakirwa mukati inodzivirira kugadziriswa netsaona kwemasetingi akakosha.

### `get_option` {#getoption}

Inoverenga option yeWordPress.

**Maparamita**

| Paramita | Rudzi | Inodiwa | Tsananguro |
|---|---|---|---|
| `option_name` | string | Hongu | Kiyi yeoption, semuenzaniso `blogname` |

**Zvinodzoka** `{ "option_name": "blogname", "value": "My Site" }`

Inodzosa kukanganisa kana `option_name` iri pa safety blocklist.

---

### `set_option` {#setoption}

Inonyora option yeWordPress.

**Maparamita**

| Paramita | Rudzi | Inodiwa | Tsananguro |
|---|---|---|---|
| `option_name` | string | Hongu | Kiyi yeoption |
| `value` | any | Hongu | Mutengo mutsva (unoitwa serialised otomatiki kumaarray/objects) |
| `autoload` | string | Kwete | `"yes"` kana `"no"`. Default inochengetedza setting yeautoload iripo |

Inodzosa chikanganiso kana `option_name` iri pa safety blocklist.

**Inodzosa** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Inodzima WordPress sarudzo.

**Maparamita**

| Paramita | Rudzi | Rinodiwa | Tsananguro |
|---|---|---|---|
| `option_name` | string | Hongu | Kiyi yesarudzo yekudzima |

Inodzosa chikanganiso kana `option_name` iri pa safety blocklist.

**Inodzosa** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Inoratidza WordPress sarudzo dzinoenderana nepatani.

**Maparamita**

| Paramita | Rudzi | Rinodiwa | Tsananguro |
|---|---|---|---|
| `pattern` | string | Kwete | SQL LIKE patani yekusefa mazita esarudzo, semuenzaniso `gratis_%`. Inodzosa sarudzo dzese kana yasiiwa (shandisa nekuchenjera pamadatabase makuru). |
| `limit` | integer | Kwete | Nhamba yepamusoro yemigumisiro. Default `50`, max `500` |

**Inodzosa**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Kutungamirira Zvemukati {#content-management}

Kugona kweKutungamirira Zvemukati kunogadzira nekugadzirisa WordPress zvinyorwa nemapeji. Post IDs dzinodzoserwa kuitira kuti nhanho dzinotevera muzvirongwa zvine kugona kwakawanda dzikwanise kureva zvirimo zvakagadzirwa.

### `create_post` {#createpost}

Inogadzira chinyorwa chitsva cheWordPress, peji, kana custom post type entry.

**Maparamita**

| Paramita | Rudzi | Rinodiwa | Tsananguro |
|---|---|---|---|
| `title` | string | Hongu | Musoro wechinyorwa |
| `content` | string | Kwete | Muviri wechinyorwa — inogamuchira plain text, HTML, kana serialised block markup |
| `status` | string | Kwete | `draft`, `publish`, `pending`, `private`. Default `draft` |
| `post_type` | string | Kwete | Post type slug, semuenzaniso `post`, `page`, kana chero CPT yakanyoreswa. Default `post` |
| `excerpt` | string | Kwete | Pfupiso pfupi inoratidzwa mumaarchives nemumigumisiro yekutsvaga |
| `categories` | array | Kwete | Array yemazita ezvikamu kana IDs yekupa |
| `tags` | array | Kwete | Array yemazita ema tag kana IDs yekupa |
| `author` | integer | Kwete | WordPress user ID yekuisa semunyori wechinyorwa. Inodzokera kumushandisi aripo |
| `date` | string | Kwete | Zuva rekuburitsa mu ISO 8601 fomati, semuenzaniso `2026-05-01T09:00:00` |
| `page_template` | string | Kwete | Template file yekupa kuchinyorwa ichi kana peji, semuenzaniso `page-full-width.php`. Zvine zvazvinoreva chete kana `post_type` iri `page` kana CPT inotsigira page templates. |

**Muenzaniso**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Inodzosa** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Inogadzirisa chinyorwa kana peji reWordPress riripo.

**Maparamita**

| Paramita | Rudzi | Rinodiwa | Tsananguro |
|---|---|---|---|
| `post_id` | integer | Hongu | ID yechinyorwa chekugadzirisa |
| `title` | string | Kwete | Musoro mutsva wechinyorwa |
| `content` | string | Kwete | Muviri mutsva wechinyorwa |
| `status` | string | Kwete | Chimiro chitsva: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Kwete | Excerpt itsva |
| `categories` | array | Kwete | Tsiva rondedzero yakazara yezvikamu nearray iyi yemazita kana IDs |
| `tags` | array | Kwete | Tsiva rondedzero yakazara yema tag nearray iyi yemazita kana IDs |
| `page_template` | string | Kwete | Template file itsva yekupa kuchinyorwa ichi kana peji, semuenzaniso `page-full-width.php`. Pfuudza string isina chinhu kuti ubvise kupihwa kwe template uye udzokere ku default ye theme. |

**Muenzaniso** — chinja template mushure mekugadzira

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Inodzosa** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Inogadzira zvinyorwa zvakawanda mukufona kumwe chete kwekugona, ichideredza round-trips panguva yekuvaka site kana kupinza zvirimo zvakawanda. Zvinyorwa zvinogadzirwa zvichitevedzana; kana chimwe chikakundikana zvimwe zvinoenderera uye kukundikana kunotaurwa muarray yemigumisiro.

**Maparamita**

| Paramita | Rudzi | Rinodiwa | Tsananguro |
|---|---|---|---|
| `posts` | array | Hongu | Array yezvinhu zvechinyorwa, chimwe nechimwe chichigamuchira maparamita akafanana ne `create_post` |
| `stop_on_error` | boolean | Kwete | Kana `true`, mira kugadzirisa mushure mekukundikana kwekutanga. Default `false` |

**Muenzaniso**

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

**Inodzosa**

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

### `set_featured_image` {#setfeaturedimage}

Inopa mufananidzo mukuru (post thumbnail) kuchinyorwa kana peji riripo. Inogamuchira Media Library attachment ID iripo kana remote image URL; kana URL yapihwa, mufananidzo unotorwa wopinzwa otomatiki.

**Maparamita**

| Paramita | Rudzi | Rinodiwa | Tsananguro |
|---|---|---|---|
| `post_id` | integer | Hongu | ID yechinyorwa kana peji rekugadzirisa |
| `attachment_id` | integer | Kwete | ID yeMedia Library attachment iripo |
| `url` | string | Kwete | Remote image URL yekupinza nekuisa semufananidzo mukuru |
| `alt_text` | string | Kwete | Alt text yekushandisa paattachment kana yapinzwa kubva kuURL |

Imwe ye `attachment_id` kana `url` inofanira kupihwa.

**Inodzosa** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Inogadzira contact form ichishandisa plugin yeform iri kushanda (Contact Form 7, WPForms, Fluent Forms, kana Gravity Forms, zvichienderana neyakaiswa). Inodzosa shortcode inogona kuiswa muchinyorwa kana peji ripi neripi.

**Maparamita**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Zita reForm rinoratidzwa muadmin yeplugin yeform |
| `fields` | array | Yes | Rondedzero yakarongwa yemafield eform (ona Field object pazasi) |
| `recipient` | string | No | Kero yeemail yekugamuchira zvakatumirwa. Default iemail yeWordPress admin |
| `subject` | string | No | Mutsetse wemusoro weemail. Inotsigira maplaceholder e`[your-name]` ne`[your-subject]` kana uchishandisa Contact Form 7 |
| `confirmation_message` | string | No | Meseji inoratidzwa mushure mekutumira kwabudirira. Default: `"Thank you for your message. We'll be in touch soon."` |

**Field object**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Zita remukati refield / kiyi yemuchina |
| `label` | string | Yes | Label inoverengeka nevanhu inoratidzwa paform |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Kana field ichifanira kuzadzwa isati yatumirwa. Default `false` |
| `options` | array | No | Sarudzo dzemafield e`select`, `checkbox`, ne`radio` |
| `placeholder` | string | No | Mavara eplaceholder ezvinopinzwa zverudzi rwetext |

**Muenzaniso**

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

**Zvinodzoswa**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Ongororo yeZvinoonekwa {#visual-review}

Kugona kweVisual Review kunoita kuti agent atore mascreenshot emapeji ari kushanda uye aongorore, zvichiita kuti pave neongororo yedesign inozvimirira, kuenzanisa kwepakutanga/nepashure, uye macheki ekudzokera shure kwezvinoonekwa pasina kuda browser extension.

### `capture_screenshot` {#capturescreenshot}

Inotora screenshot yepeji reWordPress paURL yakapihwa ichishandisa server-side headless browser. Mufananidzo unochengetwa muMedia Library uye URL yeCDN inodzoserwa.

**Maparameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL yakazara yepeji rinotorwa screenshot, semuenzaniso `https://example.com/about/` |
| `width` | integer | No | Upamhi hweviewport mumapixel. Default `1280` |
| `height` | integer | No | Kureba kweviewport mumapixel. Default `800` |
| `full_page` | boolean | No | Tora peji rese rinogona kuscrollwa panzvimbo pekungotora viewport chete. Default `false` |
| `delay_ms` | integer | No | Mamillisecond ekumirira mushure mekurodha peji usati watora, anobatsira pazviri mukati zvine animation. Default `500` |
| `label` | string | No | Label inoverengeka nevanhu inochengetwa neattachment muMedia Library |

**Zvinodzoswa**

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

### `compare_screenshots` {#comparescreenshots}

Inotora mascreenshot maviri uye inodzosa chiyero chediff yezvinoonekwa pamwe nemufananidzo wediff unoratidza nzvimbo dzachinja. Inobatsira pakusimbisa kuti shanduko yedesign yaburitsa mhedzisiro yaitarisirwa kana pakutsvaga regressions dzisina kutarisirwa.

**Maparameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL yepeji rinotorwa se mamiriro e"before" |
| `after_url` | string | Yes | URL yepeji rinotorwa se mamiriro e"after". Inogona kuva URL imwe chete kana kuenzanisa panguva dzakasiyana |
| `width` | integer | No | Upamhi hweviewport pakutora kwese kuri maviri. Default `1280` |
| `threshold` | float | No | Threshold yemusiyano wemapixel (0.0–1.0). Mapixel ari mukati meiyi tolerance anoonekwa seasina kuchinja. Default `0.1` |

**Zvinodzoswa**

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

`diff_score` ye`0.0` inoreva kuti hapana shanduko inoonekwa; `1.0` inoreva kuti pixel yega yega yachinja.

---

### `review_page_design` {#reviewpagedesign}

Inotora screenshot yepeji uye inoitumira kumodel yemutauro kuti iongororwe zvinoonekwa. Inodzosa kuongorora kwakarongeka kunofukidza marongerwo, typography, kushandiswa kwemavara, uye zvinonetsa zveaccessibility.

**Maparameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URL yakazara yepeji rinofanira kuongororwa |
| `focus` | string | No | Rondedzero yakapatsanurwa nemakoma yenzvimbo dzekuongorora dzinofanira kusimbiswa: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Default: nzvimbo dzese |
| `width` | integer | No | Upamhi hweviewport. Default `1280` |

**Zvinodzoswa**

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

## Kugona Kunogona Kuiswa {#installable-abilities}

Installable Abilities Registry inokutendera kuwedzera agent nemapack ekugona ekuwedzera anogoverwa seWordPress plugins. Pack imwe neimwe inonyoresa kugona kumwe kana kupfuura ichishandisa standard ability API.

### `list_available_abilities` {#listavailableabilities}

Inodzosa catalogue yemapack ekugona aripo ekuiswa kubva muregistry.

**Maparameter**

| Paramita | Type | Zvinodiwa | Tsananguro |
|---|---|---|---|
| `category` | string | No | Sefa necategory: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Zvinodzoserwa**

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

### `install_ability` {#installability}

Inodhawunirodha uye inomutsa paketi rekugona kubva murejista.

**Maparamita**

| Paramita | Type | Zvinodiwa | Tsananguro |
|---|---|---|---|
| `slug` | string | Yes | Slug yeplugin yepaketi rekugona |

**Zvinodzoserwa** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Inobvunza rejista yekugona kuti iwane plugin yakanakisa yekushandiswa kwakatsanangurwa uye, kana zvichidiwa, inoiisa.

**Maparamita**

| Paramita | Type | Zvinodiwa | Tsananguro |
|---|---|---|---|
| `description` | string | Yes | Tsananguro yemutauro wechisikigo yekushanda kunodiwa |
| `install` | boolean | No | Kana iri `true`, inoisa plugin yakakurudzirwa pakarepo. Default `false` |

**Muenzaniso**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Zvinodzoserwa**

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
