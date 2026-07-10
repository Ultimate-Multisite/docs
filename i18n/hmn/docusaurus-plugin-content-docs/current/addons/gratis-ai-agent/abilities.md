---
title: Daim Ntawv Qhia Txog Cov Peev Xwm
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Daim Ntawv Siv Abilities {#abilities-reference}

Abilities yog cov kev ua me me uas Gratis AI Agent hu tau rau hauv koj lub WordPress installation. Txhua ability yog ib PHP class uas tau sau npe thiab tso tawm ib JSON schema — tus agent nyeem schema no thaum khiav haujlwm kom nkag siab tias yuav tsum muaj parameter twg thiab ability ntawd xa rov qab dab tsi.

Nplooj ntawv no teev tag nrho cov abilities uas los nrog Gratis AI Agent v1.9.0.

---

## Hom Post Tshwj Xeeb {#custom-post-types}

Cov abilities no tswj cov hom post tshwj xeeb (CPTs) uas sau npe dhau ntawm tus agent. Cov kev sau npe raug khaws cia rau hauv WordPress options table kom lawv tseem nyob txawm plugin raug tua thiab qhib dua.

### `register_post_type` {#registerposttype}

Sau npe ib hom post tshwj xeeb tshiab.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Tus yuam sij hom post (siab tshaj 20 tus cim, tsis muaj tsiaj ntawv loj, tsis muaj chaw seem) |
| `singular_label` | string | Yes | Lub npe ib tug uas tib neeg nyeem tau, piv txwv `Portfolio Item` |
| `plural_label` | string | Yes | Lub npe ntau tus uas tib neeg nyeem tau, piv txwv `Portfolio Items` |
| `public` | boolean | No | Seb hom post puas qhib rau pej xeem nkag tau. Default `true` |
| `supports` | array | No | Cov yam ntxwv uas yuav txhawb: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Default `["title","editor"]` |
| `has_archive` | boolean | No | Seb puas qhib nplooj archive rau hom post. Default `false` |
| `menu_icon` | string | No | Dashicons class lossis URL rau admin menu icon. Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | URL slug rau hom post. Default yog `slug` |

**Piv txwv**

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

**Xa rov qab** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Xa rov qab tag nrho cov hom post tshwj xeeb uas tus agent tau sau npe.

**Parameters** — tsis muaj

**Xa rov qab**

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

Tshem kev sau npe ntawm ib hom post tshwj xeeb uas tus agent tau sau npe ua ntej. Cov post uas twb muaj ntawm hom ntawd tseem nyob hauv database tab sis yuav nkag tsis tau ntxiv lawm ntawm hom post ntawd.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Tus yuam sij hom post uas yuav tshem tawm |

**Xa rov qab** `{ "success": true, "slug": "portfolio" }`

---

## Taxonomies Tshwj Xeeb {#custom-taxonomies}

Cov abilities no tswj cov taxonomies tshwj xeeb. Zoo ib yam li CPTs, cov kev sau npe taxonomy raug khaws cia mus tas li.

### `register_taxonomy` {#registertaxonomy}

Sau npe ib taxonomy tshwj xeeb tshiab.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Tus yuam sij taxonomy (siab tshaj 32 tus cim) |
| `singular_label` | string | Yes | Lub npe ib tug uas tib neeg nyeem tau, piv txwv `Project Category` |
| `plural_label` | string | Yes | Lub npe ntau tus uas tib neeg nyeem tau, piv txwv `Project Categories` |
| `post_types` | array | Yes | Cov post type slugs uas taxonomy no yuav tsum muab txuas rau |
| `hierarchical` | boolean | No | `true` rau hom category-style, `false` rau hom tag-style. Default `true` |
| `public` | boolean | No | Seb terms puas qhib rau pej xeem nkag tau. Default `true` |
| `rewrite_slug` | string | No | URL slug rau taxonomy. Default yog `slug` |

**Piv txwv**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Xa rov qab** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Xa rov qab tag nrho cov taxonomies tshwj xeeb uas tus agent tau sau npe.

**Parameters** — tsis muaj

**Xa rov qab**

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

Tshem kev sau npe ntawm ib taxonomy tshwj xeeb uas tus agent tau sau npe ua ntej.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Tus yuam sij taxonomy uas yuav tshem tawm |

**Xa rov qab** `{ "success": true, "slug": "project-category" }`

---

## Design System {#design-system}

Design system abilities hloov kho qhov kev nthuav qhia pom ntawm WordPress site — txij custom CSS mus rau block patterns thiab site logo.

### `inject_custom_css` {#injectcustomcss}

Ntxiv CSS rau hauv site lub `<head>` dhau ntawm `wp_add_inline_style`. CSS raug khaws cia hauv option `gratis_ai_agent_custom_css` thiab raug dequeue kom huv si thaum ability raug reset.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | CSS raug cai uas yuav inject |
| `label` | string | No | Label uas tib neeg nyeem tau rau CSS block no, siv hauv debug logs. Default `"agent-injected"` |
| `replace` | boolean | No | Yog `true`, hloov tag nrho CSS uas tau inject ua ntej. Default `false` (ntxiv txuas ntxiv) |

**Piv txwv**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Xa rov qab** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Sau npe ib block pattern uas rov siv tau hauv WordPress pattern library.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Tus cim pattern, piv txwv `gratis/hero-dark` |
| `title` | string | Yes | Lub npe pattern uas tib neeg nyeem tau thiab pom hauv editor |
| `content` | string | Yes | Serialised block markup (HTML) rau pattern |
| `categories` | array | No | Pattern category slugs, piv txwv `["featured", "hero"]` |
| `description` | string | No | Kev piav luv uas pom hauv pattern picker |
| `keywords` | array | No | Cov lus tseem ceeb rau kev tshawb nrhiav |

**Xa rov qab** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Teev tag nrho cov block patterns uas tus agent tau sau npe.

**Parameters** — tsis muaj

**Xa rov qab**

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

Teem lub logo ntawm WordPress site rau ib qho attachment ID uas muab los, lossis ib qho duab URL nyob deb. Thaum muab URL, daim duab yuav raug rub los thiab muab import rau hauv Media Library.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | ID ntawm ib qho attachment uas twb muaj nyob hauv Media Library |
| `url` | string | No | Daim duab URL nyob deb los import thiab teeb ua logo |

Yuav tsum muab ib qho ntawm `attachment_id` lossis `url`.

**Xa rov qab** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Siv ib qho preset xim/typography uas muaj npe rau active theme lub `theme.json` (lossis `global-styles`). Presets yog cov pob uas pab pawg Gratis AI Agent tau xaiv thiab saib xyuas.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | Lub npe preset, piv txwv `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | Yog tias `true`, sib xyaw nrog cov nqi uas twb muaj lawm es tsis yog hloov kiag. Default `false` |

**Cov preset muaj**

| Preset | Description |
|---|---|
| `minimal-dark` | Keeb kwm ze-dub, ntawv dawb, ib xim accent xwb |
| `warm-editorial` | Keeb kwm dawb sov me ntsis, headings hom serif, xim accent zoo li av |
| `corporate-blue` | Palette navy thiab dawb nrog typography zoo li kev tshaj lij |
| `vibrant-startup` | Gradients ci, ces kaum nkhaus, hom ntawv sans-serif niaj hnub |
| `classic-blog` | Xim grey nruab nrab, line-height xis nyeem, qhov nrug layout tsoos |

**Xa rov qab** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles {#global-styles}

Global Styles peev xwm nyeem thiab sau cov nqi theme.json los ntawm WordPress Global Styles API, cuam tshuam rau txhua blocks thiab templates thoob plaws site.

### `get_global_styles` {#getglobalstyles}

Xa rov qab qhov configuration global styles tam sim no.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | JSON pointer mus rau ib qho nqi tshwj xeeb, piv txwv `/color/palette` lossis `/typography/fontSizes`. Xa rov qab tag nrho object yog tias tsis muab. |

**Xa rov qab** tag nrho global styles object lossis tus nqi ntawm `path`.

---

### `set_global_styles` {#setglobalstyles}

Hloov tshiab ib qho lossis ntau qho nqi hauv qhov configuration global styles.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Yes | JSON pointer mus rau tus nqi yuav teeb, piv txwv `/color/palette` |
| `value` | any | Yes | Tus nqi tshiab |

**Piv txwv** — ntxiv ib xim rau palette

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Xa rov qab** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Reset tag nrho cov kev hloov global styles uas agent tau siv, rov qab mus rau theme defaults.

**Parameters** — tsis muaj

**Xa rov qab** `{ "success": true }`

---

## Navigation Menus {#navigation-menus}

Navigation Menu peev xwm tsim thiab tswj WordPress nav menus thiab lawv cov items.

### `create_menu` {#createmenu}

Tsim ib qho WordPress navigation menu tshiab.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Lub npe menu, piv txwv `Primary Navigation` |
| `location` | string | No | Theme location los assign menu no rau, piv txwv `primary` |

**Xa rov qab** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Hloov npe menu lossis reassign nws rau ib qho theme location.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID ntawm menu uas yuav hloov tshiab |
| `name` | string | No | Lub npe menu tshiab |
| `location` | string | No | Theme location los assign lossis reassign |

**Xa rov qab** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Ntxiv ib qho item rau ib qho navigation menu uas twb muaj lawm.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID ntawm menu uas yog hom phiaj |
| `type` | string | Yes | Hom item: `custom`, `post_type`, lossis `taxonomy` |
| `title` | string | No | Label rau menu item (yuav tsum muaj rau hom `custom`) |
| `url` | string | No | URL rau cov items `custom` |
| `object_id` | integer | No | Post ID lossis term ID rau cov items `post_type`/`taxonomy` |
| `parent_id` | integer | No | Menu item ID los muab item no tso rau hauv qab |
| `position` | integer | No | Txoj hauj lwm pib ntawm xoom hauv menu |

**Xa rov qab** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Tshem ib qho item tawm ntawm navigation menu.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | Menu item ID uas yuav tshem tawm |

**Xa rov qab** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Teev tag nrho WordPress navigation menus, suav nrog lawv cov theme locations uas raug assign.

**Parameters** — tsis muaj

**Xa rov qab**

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

## Kev Tswj Options {#options-management}

Options peev xwm nyeem thiab sau WordPress options los ntawm `get_option` / `update_option`. Ib daim safety blocklist uas muaj hauv system pab tiv thaiv kom tsis txhob yuam kev hloov cov settings tseem ceeb.

### `get_option` {#getoption}

Nyeem ib qho WordPress option.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Tus option key, piv txwv `blogname` |

**Xa rov qab** `{ "option_name": "blogname", "value": "My Site" }`

Xa rov qab ib qho yuam kev yog tias `option_name` nyob hauv safety blocklist.

---

### `set_option` {#setoption}

Sau ib qho WordPress option.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Tus option key |
| `value` | any | Yes | Tus nqi tshiab (serialised tau cia li rau arrays/objects) |
| `autoload` | string | No | `"yes"` lossis `"no"`. Default khaws qhov autoload setting uas twb muaj lawm |

Xa rov qab ib qho yuam kev yog tias `option_name` nyob hauv safety blocklist.

**Xa rov qab** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Rho tawm ib qho WordPress option.

**Cov parameter**

| Parameter | Hom | Yuav tsum muaj | Kev piav qhia |
|---|---|---|---|
| `option_name` | string | Yog | Tus option key uas yuav rho tawm |

Xa rov qab ib qho yuam kev yog tias `option_name` nyob hauv safety blocklist.

**Xa rov qab** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Teev cov WordPress options uas phim ib qho pattern.

**Cov parameter**

| Parameter | Hom | Yuav tsum muaj | Kev piav qhia |
|---|---|---|---|
| `pattern` | string | Tsis yog | SQL LIKE pattern siv lim cov npe option, piv txwv `gratis_%`. Xa rov qab tag nrho options yog tsis sau (siv ceev faj rau cov database loj). |
| `limit` | integer | Tsis yog | Tus naj npawb siab tshaj ntawm cov txiaj ntsig. Default `50`, siab tshaj `500` |

**Xa rov qab**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Kev Tswj Cov Ntsiab Lus {#content-management}

Cov peev xwm Kev Tswj Cov Ntsiab Lus tsim thiab kho WordPress posts thiab pages. Cov Post IDs raug xa rov qab kom cov kauj ruam tom ntej hauv cov plan muaj ntau peev xwm thiaj siv tau cov ntsiab lus uas tau tsim.

### `create_post` {#createpost}

Tsim ib qho WordPress post tshiab, page, lossis custom post type entry.

**Cov parameter**

| Parameter | Hom | Yuav tsum muaj | Kev piav qhia |
|---|---|---|---|
| `title` | string | Yog | Lub npe post |
| `content` | string | Tsis yog | Lub cev post — txais plain text, HTML, lossis serialised block markup |
| `status` | string | Tsis yog | `draft`, `publish`, `pending`, `private`. Default `draft` |
| `post_type` | string | Tsis yog | Post type slug, piv txwv `post`, `page`, lossis txhua CPT uas tau sau npe. Default `post` |
| `excerpt` | string | Tsis yog | Cov ntsiab lus luv uas qhia hauv archives thiab search results |
| `categories` | array | Tsis yog | Array ntawm cov npe category lossis IDs uas yuav muab rau |
| `tags` | array | Tsis yog | Array ntawm cov npe tag lossis IDs uas yuav muab rau |
| `author` | integer | Tsis yog | WordPress user ID uas yuav teeb ua tus post author. Defaults rau tus user tam sim no |
| `date` | string | Tsis yog | Hnub publish hauv ISO 8601 format, piv txwv `2026-05-01T09:00:00` |
| `page_template` | string | Tsis yog | Template file uas yuav muab rau post lossis page no, piv txwv `page-full-width.php`. Tsuas muaj ntsiab lus thaum `post_type` yog `page` lossis ib qho CPT uas txhawb page templates. |

**Piv txwv**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Xa rov qab** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Hloov kho ib qho WordPress post lossis page uas twb muaj lawm.

**Cov parameter**

| Parameter | Hom | Yuav tsum muaj | Kev piav qhia |
|---|---|---|---|
| `post_id` | integer | Yog | ID ntawm post uas yuav hloov kho |
| `title` | string | Tsis yog | Lub npe post tshiab |
| `content` | string | Tsis yog | Lub cev post tshiab |
| `status` | string | Tsis yog | Status tshiab: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Tsis yog | Excerpt tshiab |
| `categories` | array | Tsis yog | Hloov tag nrho daim ntawv category nrog array no ntawm cov npe lossis IDs |
| `tags` | array | Tsis yog | Hloov tag nrho daim ntawv tag nrog array no ntawm cov npe lossis IDs |
| `page_template` | string | Tsis yog | Template file tshiab uas yuav muab rau post lossis page no, piv txwv `page-full-width.php`. Xa ib txoj string khoob kom tshem qhov template assignment thiab rov qab mus rau theme default. |

**Piv txwv** — hloov template tom qab tsim

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Xa rov qab** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Tsim ntau posts hauv ib zaug hu peev xwm xwb, txo kev mus-los thaum tsim site lossis import ntsiab lus ntau. Posts raug tsim raws kab ke; yog ib qho poob, lwm cov tseem txuas ntxiv thiab qhov poob raug qhia hauv results array.

**Cov parameter**

| Parameter | Hom | Yuav tsum muaj | Kev piav qhia |
|---|---|---|---|
| `posts` | array | Yog | Array ntawm post objects, txhua qhov txais tib cov parameter li `create_post` |
| `stop_on_error` | boolean | Tsis yog | Yog `true`, nres kev ua haujlwm tom qab qhov poob thawj zaug. Default `false` |

**Piv txwv**

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

**Xa rov qab**

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

Muab ib daim featured image (post thumbnail) rau ib qho post lossis page uas twb muaj lawm. Txais ib qho Media Library attachment ID uas twb muaj lawm lossis ib qho remote image URL; thaum muab URL, daim duab yuav raug download thiab import cia li.

**Cov parameter**

| Parameter | Hom | Yuav tsum muaj | Kev piav qhia |
|---|---|---|---|
| `post_id` | integer | Yog | ID ntawm post lossis page uas yuav hloov kho |
| `attachment_id` | integer | Tsis yog | ID ntawm ib qho Media Library attachment uas twb muaj lawm |
| `url` | string | Tsis yog | Remote image URL uas yuav import thiab teeb ua featured image |
| `alt_text` | string | Tsis yog | Alt text uas yuav siv rau attachment yog tias nws raug import los ntawm URL |

Yuav tsum muab ib qho ntawm `attachment_id` lossis `url`.

**Xa rov qab** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Tsim ib daim contact form siv form plugin uas active (Contact Form 7, WPForms, Fluent Forms, lossis Gravity Forms, nyob ntawm qhov twg raug nruab). Xa rov qab ib qho shortcode uas muab embed tau rau hauv txhua post lossis page.

**Cov parameter**

| Parameter | Hom | Yuav tsum muaj | Kev piav qhia |
|---|---|---|---|
| `title` | string | Yog | Lub npe form uas pom hauv form plugin admin |
| `fields` | array | Yog | Daim ntawv teev cov form fields raws kev txiav txim (saib Field object hauv qab no) |
| `recipient` | string | Tsis yog | Email address uas yuav txais cov submissions. Default yog WordPress admin email |
| `subject` | string | Tsis yog | Kab email subject. Txhawb `[your-name]` thiab `[your-subject]` placeholders thaum siv Contact Form 7 |
| `confirmation_message` | string | Tsis yog | Lus uas tso tawm tom qab submission ua tiav. Default: `"Thank you for your message. We'll be in touch soon."` |

**Field object**

| Key | Hom | Yuav tsum muaj | Kev piav qhia |
|---|---|---|---|
| `name` | string | Yog | Lub npe field sab hauv / machine key |
| `label` | string | Yog | Label uas tib neeg nyeem tau thiab pom rau ntawm form |
| `type` | string | Yog | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Tsis yog | Seb field puas yuav tsum muab sau ua ntej submission. Default `false` |
| `options` | array | Tsis yog | Options rau `select`, `checkbox`, thiab `radio` fields |
| `placeholder` | string | Tsis yog | Placeholder text rau text-type inputs |

**Piv txwv**

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

**Xa rov qab**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Kev tshuaj xyuas pom tau {#visual-review}

Cov peev xwm Kev tshuaj xyuas pom tau cia tus agent thaij screenshots ntawm cov nplooj ntawv live thiab txheeb xyuas lawv, pab tau kev tshuaj xyuas tsim qauv ywj pheej, kev piv ua ntej/tom qab, thiab kev kuaj visual regression yam tsis tas yuav muaj browser extension.

### `capture_screenshot` {#capturescreenshot}

Thaij ib screenshot ntawm ib nplooj ntawv WordPress ntawm URL uas muab los siv server-side headless browser. Daim duab raug khaws rau hauv Media Library thiab xa rov qab CDN URL.

**Parameters**

| Parameter | Hom | Yuav tsum muaj | Kev piav qhia |
|---|---|---|---|
| `url` | string | Yog | URL tag nrho ntawm nplooj ntawv yuav thaij screenshot, piv txwv `https://example.com/about/` |
| `width` | integer | Tsis yog | Viewport dav hauv pixels. Default `1280` |
| `height` | integer | Tsis yog | Viewport siab hauv pixels. Default `800` |
| `full_page` | boolean | Tsis yog | Thaij tag nrho nplooj ntawv uas scroll tau es tsis yog tsuas yog viewport xwb. Default `false` |
| `delay_ms` | integer | Tsis yog | Milliseconds yuav tos tom qab nplooj ntawv load ua ntej thaij, siv tau rau cov ntsiab lus animated. Default `500` |
| `label` | string | Tsis yog | Label uas tib neeg nyeem tau khaws nrog attachment hauv Media Library |

**Xa rov qab**

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

Siv ob daim screenshots thiab xa rov qab visual diff score nrog rau daim diff image uas qhia cov cheeb tsam hloov. Siv tau los lees paub tias kev hloov tsim qauv tau tsim qhov txiaj ntsig raws li xav tau, lossis los nrhiav cov regressions uas tsis tau npaj.

**Parameters**

| Parameter | Hom | Yuav tsum muaj | Kev piav qhia |
|---|---|---|---|
| `before_url` | string | Yog | URL ntawm nplooj ntawv yuav capture ua lub xeev "ua ntej" |
| `after_url` | string | Yog | URL ntawm nplooj ntawv yuav capture ua lub xeev "tom qab". Yuav yog tib URL los tau yog piv raws sijhawm |
| `width` | integer | Tsis yog | Viewport dav rau ob qhov captures. Default `1280` |
| `threshold` | float | Tsis yog | Pixel-difference threshold (0.0–1.0). Pixels nyob hauv qhov kev zam no raug suav tias tsis tau hloov. Default `0.1` |

**Xa rov qab**

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

`diff_score` ntawm `0.0` txhais tias tsis muaj kev hloov uas pom tau; `1.0` txhais tias txhua pixel hloov lawm.

---

### `review_page_design` {#reviewpagedesign}

Thaij screenshot ntawm ib nplooj ntawv thiab xa mus rau language model rau kev txheeb xyuas pom tau. Xa rov qab kev ntsuas muaj qauv uas npog layout, typography, kev siv xim, thiab accessibility concerns.

**Parameters**

| Parameter | Hom | Yuav tsum muaj | Kev piav qhia |
|---|---|---|---|
| `url` | string | Yog | URL tag nrho ntawm nplooj ntawv yuav tshuaj xyuas |
| `focus` | string | Tsis yog | Daim ntawv teev cov review areas cais los ntawm commas uas yuav tsom rau: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Default: txhua area |
| `width` | integer | Tsis yog | Viewport dav. Default `1280` |

**Xa rov qab**

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

## Cov peev xwm uas nruab tau {#installable-abilities}

Installable Abilities Registry cia koj txuas ntxiv tus agent nrog cov ability packs ntxiv uas faib ua WordPress plugins. Txhua pack sau npe ib lossis ntau peev xwm siv standard ability API.

### `list_available_abilities` {#listavailableabilities}

Xa rov qab catalogue ntawm ability packs uas muaj rau kev install los ntawm registry.

**Parameters**

| Yam ntsuas | Hom | Yuav tsum muaj | Kev piav qhia |
|---|---|---|---|
| `category` | string | Tsis yog | Lim raws qeb: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Xa rov qab**

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

Rub tawm thiab qhib ib pob peev xwm los ntawm chaw teev npe.

**Cov yam ntsuas**

| Yam ntsuas | Hom | Yuav tsum muaj | Kev piav qhia |
|---|---|---|---|
| `slug` | string | Yog | slug ntawm pob peev xwm qhov txuas ntxiv |

**Xa rov qab** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Nug chaw teev npe peev xwm kom nrhiav qhov txuas ntxiv zoo tshaj rau ib qho kev siv uas piav qhia lawm thiab, yog xav tau, nruab nws.

**Cov yam ntsuas**

| Yam ntsuas | Hom | Yuav tsum muaj | Kev piav qhia |
|---|---|---|---|
| `description` | string | Yog | Kev piav qhia ua lus tib neeg txog kev ua haujlwm uas xav tau |
| `install` | boolean | Tsis yog | Yog `true`, nruab qhov txuas ntxiv uas pom zoo tam sim ntawd. Lub neej ntawd yog `false` |

**Piv txwv**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Xa rov qab**

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
