---
title: Mga Referensya sa mga Kakayahan
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Mga Abilidad nga Reference

Ang mga ability kay ang mga atomic nga lihok (actions) nga mahimong tawgon sa Gratis AI Agent sa imong WordPress installation. Ang matag ability usa ka registered nga PHP class nga nagpakita og JSON schema — ang agent nagbasa niining schema samtang nag-runtime aron masabtan kung unsa nga mga parameters ang gikinahanglan ug unsa ang ibalik sa ability.

Kini nga pahina nagdokumento sa tanang abilities nga gihatag uban sa Gratis AI Agent v1.9.0.

---

## Custom Post Types

Kini nga mga ability maoy nagdumala sa custom post types (CPTs) nga na-register pinaagi sa agent. Ang mga pagparehistro gipadayon sa WordPress options table aron magpabilin kini bisan pa sa pag-deactivate ug reactivation sa plugin.

### `register_post_type`

Nagparehistro og bag-ong custom post type.

**Mga Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ang key sa post type (maximum 20 characters, walay uppercase, walay space) |
| `singular_label` | string | Yes | Human-readable nga singular nga ngalan, e.g. `Portfolio Item` |
| `plural_label` | string | Yes | Human-readable nga plural nga ngalan, e.g. `Portfolio Items` |
| `public` | boolean | No | Kung ang post type kay pwedeng ma-access sa publiko. Default `true` |
| `supports` | array | No | Mga feature nga suportado: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Default `["title","editor"]` |
| `has_archive` | boolean | No | Kung ang archive page sa post type kay enabled. Default `false` |
| `menu_icon` | string | No | Dashicons class o URL para sa admin menu icon. Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | Ang URL slug para sa post type. Default kay `slug` |

**Example**

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

**Returns** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Nagbalik sa tanang custom post types nga na-register sa agent.

**Parameters** — walay

**Returns**

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

### `delete_post_type`

Gidili (Unregisters) ni custom post type nga kaniuna gi-register sa agent. Ang mga existing posts anang klase nagpabilin sa database pero dili na ma-access pinaagi sa post type.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ang post type key nga gusto nimong tangtangon |

**Returns** `{ "success": true, "slug": "portfolio" }`

---

## Custom Taxonomies

Kini ang mga abilidad para sa custom taxonomies. Sama sa CPTs (Custom Post Types), ang pag-register sa taxonomy nagpabilin gihapon.

### `register_taxonomy`

Nagarehistro og bag-ong custom taxonomy.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ang taxonomy key (maximum 32 characters) |
| `singular_label` | string | Yes | Human-readable nga singular nga ngalan, pananglitan: `Project Category` |
| `plural_label` | string | Yes | Human-readable nga plural nga ngalan, pananglitan: `Project Categories` |
| `post_types` | array | Yes | Ang mga post type slugs kung kinsa ang iapil ni taxonomy |
| `hierarchical` | boolean | No | `true` para sa category-style, `false` para sa tag-style. Default kay `true` |
| `public` | boolean | No | Kung ang mga terms ma-access publiko. Default kay `true` |
| `rewrite_slug` | string | No | Ang URL slug para sa taxonomy. Default kay `slug` |

**Example**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Returns** `{ "success": true, "slug": "project-category" }`

### `list_taxonomies`

Nagabalik ni tanan custom taxonomies nga na-register sa agent.

**Parameters** — walay

**Returns**

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

Gidili ang usa ka custom taxonomy nga kaniadto na-register sa agent.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Oo | Ang taxonomy key nga gipakaon (remove) |

**Returns** `{ "success": true, "slug": "project-category" }`

---

## Design System

Ang mga abilidad sa Design System nag-usab sa porma sa pagtan-aw sa WordPress site — gikan sa custom CSS hangtod sa block patterns ug logo sa site.

### `inject_custom_css`

Nagdadagdag og CSS sa `<head>` sa site pinaagi sa `wp_add_inline_style`. Ang CSS gi-store sa option nga `gratis_ai_agent_custom_css` ug kini gipakaon pag-ayo kung i-reset ang abilidad.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Oo | Valid CSS nga ipasok |
| `label` | string | Wala | Human-readable nga label para niining CSS block, gigamit sa debug logs. Default `"agent-injected"` |
| `replace` | boolean | Wala | Kung `true`, mag-replace kini sa tanang CSS nga na-inject kaniadto. Default `false` (magdagdag) |

**Example**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Returns** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Nag-rehistro ang usa ka reusable block pattern sa WordPress pattern library.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Pattern identifier, sama sa `gratis/hero-dark` |
| `title` | string | Yes | Human-readable nga ngalan sa pattern nga makita sa editor |
| `content` | string | Yes | Serialised block markup (HTML) para sa pattern |
| `categories` | array | No | Mga slug sa category sa pattern, sama sa `["featured", "hero"]` |
| `description` | string | No | Mubo nga deskripsyon nga makita sa pattern picker |
| `keywords` | array | No | Mga keyword para sa pagpangita |

**Returns** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Ilista ang tanang block patterns nga na-register sa agent.

**Parameters** — walay

**Returns**

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

Mag-set sa WordPress site logo ng usa ka gihatag nga attachment ID o remote image URL. Kung adunay URL nga gihatag, ang hulagway ma-download ug i-import sa Media Library.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | ID sa naay existing Media Library attachment |
| `url` | string | No | Remote image URL nga i-import ug itakda isip logo |

Kinahanglan ang usa o ang `attachment_id` o `url`.

**Mga Balik (Returns)** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Nag-aapply kini og ngalan nga preset sa kolor/typography sa active theme's `theme.json` (o `global-styles`). Ang mga preset kay mga bundle nga gi-curate ug gipadayon sa Gratis AI Agent team.

**Mga Parameter**

| Parameter | Type | Required | Deskripsyon |
|---|---|---|---|
| `preset` | string | Oo | Ngalan sa preset, pananglitan: `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Wala | Kung `true`, i-merge kini sa nagigseggrang mga bili imbes nga palitan. Default kay `false` |

**Mga Magamit nga presets**

| Preset | Deskripsyon |
|---|---|
| `minimal-dark` | Near-black background, puti nga text, usa ka accent colour ra |
| `warm-editorial` | Warm off-white background, serif headings, earthy accent colours |
| `corporate-blue` | Navy ug puti nga palette uban sa propesyonal nga typography |
| `vibrant-startup` | Bright gradients, rounded corners, modern sans-serif type |
| `classic-blog` | Neutral greys, komportable nga line-height, tradisyonal nga layout spacing |

**Mga Balik (Returns)** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles

Ang mga abilidad sa Global Styles nagbasa ug magsulat og mga bili sa theme.json pinaagi sa WordPress Global Styles API, nga makaapekto sa tanang blocks ug templates sa tibuok website.

### `get_global_styles`

Nagbalik kini sa kasamtangang configuration sa global styles.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Wala | JSON pointer sa usa ka specific nga value, sama sa `/color/palette` o `/typography/fontSizes`. Magbalik sa tibuok object kung wala gi-omit. |

**Magbalik** ang tibuok global styles object o ang value sa `path`.

---

### `set_global_styles`

Nag-update og usa o labaw pa nga mga value sa global styles configuration.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Oo | JSON pointer sa value nga i-set, sama sa `/color/palette` |
| `value` | any | Oo | Ang bag-ong value |

**Example** — magdugang og kolor sa palette

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Magbalik** ang `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Gihaplos (resets) ang tanang mga kausaban sa global styles nga gipangita sa agent, ug ibalik ang theme defaults.

**Mga Parameter** — walay

**Magbalik** ang `{ "success": true }`

---

## Navigation Menus

Ang abilidad sa Navigation Menu naghimo ug nagdumala sa WordPress nav menus ug sa ilang mga item.

### `create_menu`

Naghimo og bag-ong WordPress navigation menu.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Oo | Pangalan sa Menu, sama sa `Primary Navigation` |
| `location` | string | Wala | Lokasyon sa theme kung asa ihatag kining menu, sama sa `primary` |

**Magbalik** ang `{ "success": true, "menu_id": 7 }`

### `update_menu`

Nag-usab o i-reassign ang usa ka menu o ihatag kini sa usa ka location sa theme.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Oo | ID sa menu nga i-update |
| `name` | string | Wala | Bag-ong ngalan sa menu |
| `location` | string | Wala | Location sa theme para ihatag o i-reassign |

**Nagbalik (Returns)** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Magdugang og item sa usa ka nag-inusarang navigation menu.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Oo | ID sa target nga menu |
| `type` | string | Oo | Uri sa item: `custom`, `post_type`, o `taxonomy` |
| `title` | string | Wala | Label para sa menu item (kinahanglanon para sa `custom` type) |
| `url` | string | Wala | URL para sa mga custom items |
| `object_id` | integer | Wala | Post ID o term ID para sa mga item nga `post_type`/`taxonomy` |
| `parent_id` | integer | Wala | Menu item ID diin i-nest kini kaniya |
| `position` | integer | Wala | Zero-based position sa menu |

**Nagbalik (Returns)** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Magtangtang og item gikan sa usa ka navigation menu.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Oo | Menu item ID nga tangtangon |

**Nagbalik (Returns)** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Ilista ang tanang WordPress navigation menus, lakip na sa ilang gihatag nga theme locations.

**Mga Parameter** — wala

**Nagbalik (Returns)**

## Pagdum sa Options

Ang mga abilidad sa Options nagbasa ug magsulat og WordPress options pinaagi sa `get_option` / `update_option`. Naa'y built-in nga safety blocklist nga nagpugong sa dili sinadya nga pag-modify sa importanteng settings.

### `get_option`

Nagbasa og usa ka WordPress option.

**Mga Parameter**

| Parameter | Type | Required | Deskripsyon |
|---|---|---|---|
| `option_name` | string | Oo | Ang option key, pananglitan kay `blogname` |

**Nagbalik (Returns)** `{ "option_name": "blogname", "value": "My Site" }`

Magbalik og error kung ang `option_name` anaa sa safety blocklist.

---

### `set_option`

Nagsulat og usa ka WordPress option.

**Mga Parameter**

| Parameter | Type | Required | Deskripsyon |
|---|---|---|---|
| `option_name` | string | Oo | Ang option key |
| `value` | any | Oo | Ang bag-ong value (awtomatikong gi-serialize para sa arrays/objects) |
| `autoload` | string | Wala | `"yes"` o `"no"`. Ang default nagpreserba sa kasamtang nga setting sa autoload |

Magbalik og error kung ang `option_name` anaa sa safety blocklist.

**Nagbalik (Returns)** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Mag-delete og usa ka WordPress option.

**Mga Parameter**

| Parameter | Type | Required | Deskripsyon |
|---|---|---|---|
| `option_name` | string | Oo | Ang option key nga i-delete |

Magbalik og error kung ang `option_name` anaa sa safety blocklist.

**Nagbalik (Returns)** `{ "success": true, "option_name": "my_custom_option" }`

### `list_options`

Nagaplista ang mga options sa WordPress nga nagahigma sa usa ka pattern.

**Mga Parameter**

| Parameter | Type | Required | Deskripsyon |
|---|---|---|---|
| `pattern` | string | Wala | SQL LIKE pattern para mag-filter sa mga ngalan sa option, pananglitan: `gratis_%`. Magbalik ni sa tanang options kung wala gihatag (gamit kini nga maoy paspason sa dagkong database). |
| `limit` | integer | Wala | Pinakataas nga gidaghanon sa resulta. Default kay `50`, pinakataas kay `500` |

**Nagbalik**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Content Management

Ang mga abilidad sa Content Management naghimo ug nag-edit og WordPress posts ug pages. Ang Post IDs ibalik aron ang sunod nga mga lakang sa multi-ability plans mahimong mag-refer sa gihimo nga content.

### `create_post`

Naghimo og bag-ong WordPress post, page, o custom post type entry.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Title sa Post |
| `content` | string | No | Body sa Post — pwede plain text, HTML, o serialised block markup |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Default kay `draft` |
| `post_type` | string | No | Slug sa post type, e.g. `post`, `page`, o bisan unsang CPT nga na-register. Default kay `post` |
| `excerpt` | string | No | Mubo nga summary nga ipakita sa archives ug search results |
| `categories` | array | No | Array sa mga ngalan o IDs sa category para ihatag |
| `tags` | array | No | Array sa mga ngalan o IDs sa tag para ihatag |
| `author` | integer | No | WordPress user ID nga i-set isip author sa post. Default kay ang kasamtang user |
| `date` | string | No | Petsa sa pag-publish sa ISO 8601 format, e.g. `2026-05-01T09:00:00` |
| `page_template` | string | No | Template file nga ihatag niining post o page, e.g. `page-full-width.php`. Importante lang kung ang `post_type` kay `page` o usa ka CPT nga nagsuporta sa page templates. |

**Example**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Returns** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Mag-update sa naay existing WordPress post o page.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Oo | ID sa post nga gusto i-update |
| `title` | string | Oo | Bag-ong titulo sa post |
| `content` | string | Oo | Bag-ong body sa post |
| `status` | string | Oo | Bag-ong status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Oo | Bag-ong excerpt |
| `categories` | array | Oo | Palitan ang tibuok listahan sa category gamit ni array ani sa mga ngalan o IDs |
| `tags` | array | Oo | Palitan ang tibuok listahan sa tag gamit ni array ani sa mga ngalan o IDs |
| `page_template` | string | Oo | Bag-ong template file nga ihatag niini post o page, e.g. `page-full-width.php`. Ipadala og empty string para tangtangon ang assignment sa template ug mobalik sa default theme. |

**Pananglitan** — usbon ang template human paghimo

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Nagbalik** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Maghimo og daghang posts sa usa lang ka tawag sa ability, nga makapamenos sa mga round-trip inang paghimo sa site o bulk content import. Ang mga post gihatag sunod-sunod; kung ang usa mapakyas, magpadayon ang uban ug ang kapakyasan ireport sa results array.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Oo | Array sa mga post objects, matag nagdawat sa parehas nga parameters sama sa `create_post` |
| `stop_on_error` | boolean | Oo | Kung `true`, itigil ang pagproseso human sa unang kapakyasan. Default `false` |

**Pananglitan**

```json
{
  "posts": [
    {
      "title": "Mahitungod Kanato",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Mga Serbisyo",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Kontak",
      "post_type": "page",
      "status": "publish"
    }
  ]
}

**Nagbalik (Returns)**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "Mahitungod Kanato" },
    { "success": true, "post_id": 43, "title": "Mga Serbisyo" },
    { "success": true, "post_id": 44, "title": "Kontak" }
  ]
}

---

### `set_featured_image`

Naghatag og featured image (thumbnail sa post o page) sa usa ka naa nang post o page. Nagdawat kini og ID sa existing Media Library attachment o remote image URL; kung adunay gihatag nga URL, awtomatikong idownload ug i-import ang hulagway.

**Mga Parameter**

| Parameter | Type | Kinahanglanon? | Deskripsyon |
|---|---|---|---|
| `post_id` | integer | Oo | ID sa post o page nga i-update |
| `attachment_id` | integer | Dili | ID sa existing Media Library attachment |
| `url` | string | Dili | Remote image URL para i-import ug itakda isip featured image |
| `alt_text` | string | Dili | Alt text nga iapil sa attachment kung kini gikan sa URL |

Kinahanglan nimo ang usa o duha (attachment_id o url) aron magamit.

**Nagbalik (Returns)** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`
```

Ito ay gumagawa ng contact form gamit ang active form plugin (Contact Form 7, WPForms, Fluent Forms, o Gravity Forms, depende sa kung alin ang naka-install). Nagbabalik ito ng shortcode na pwede mong i-embed kahit saan sa anumang post o page.

**Mga Parameter**

| Parameter | Uri | Kailangan | Deskripsyon |
|---|---|---|---|
| `title` | string | Oo | Pangalan ng form na ipapakita sa admin ng form plugin |
| `fields` | array | Oo | Nakapangkat na listahan ng mga field ng form (tingnan ang Field object sa ibaba) |
| `recipient` | string | Hindi | Email address kung saan tatanggapin ang mga submission. Default ay email ng WordPress admin |
| `subject` | string | Hindi | Linya ng paksa ng email. Sumusuporta sa `[your-name]` at `[your-subject]` placeholders kapag gumagamit ng Contact Form 7 |
| `confirmation_message` | string | Hindi | Mensahe na ipapakita pagkatapos ng matagumpay na submission. Default: `"Salamat sa iyong mensahe. Magkikipag-ugnayan kami sa lalong madaling panahon."` |

**Field object**

| Key | Uri | Kailangan | Deskripsyon |
|---|---|---|---|
| `name` | string | Oo | Internal field name / machine key |
| `label` | string | Oo | Madaling basahin na label na ipapakita sa form |
| `type` | string | Oo | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Hindi | Kung kailangang punan ang field bago mag-submit. Default ay `false` |
| `options` | array | Hindi | Mga opsyon para sa `select`, `checkbox`, at `radio` fields |
| `placeholder` | string | Hindi | Placeholder text para sa mga input na uri ng text |

**Halimbawa**

```json
{
  "title": "Paghangyo sa Pag-book sa Restawran",
  "fields": [
    { "name": "your-name",    "label": "Ngalan",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "Email",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Gidak-on sa grupo",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Mga espesyal nga pangutana", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "Bag-ong paghangyo sa booking gikan ni [your-name]"
}
```

**Nagbalik (Returns)**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Visual Review

Ang abilidad sa Visual Review nagtugot sa agent nga makakuha og screenshots sa mga live page ug mahimong mag-analisar niini, nga naghatag og autonomous design review, before/after comparisons, ug visual regression checks bisan wala kinahanglan og browser extension.

### `capture_screenshot`

Nakuha kini og screenshot sa usa ka WordPress page sa gihatag nga URL gamit ang server-side headless browser. Ang hulagway i-save sa Media Library ug adunay CDN URL nga ibalik.

**Mga Parameter (Parameters)**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Ang bug-os URL sa page nga gusto i-screenshot, pananglitan: `https://example.com/about/` |
| `width` | integer | No | Gidak-on sa viewport sa pixels. Default kay `1280` |
| `height` | integer | No | Gidak-on sa viewport sa pixels. Default kay `800` |
| `full_page` | boolean | No | Kuhaon ang tibuok scrollable nga page imbes lang sa viewport. Default kay `false` |
| `delay_ms` | integer | No | Mga milliseconds nga paghulat human mag-load ang page antes kuhaon, nindot para sa animated content. Default kay `500` |
| `label` | string | No | Human-readable nga label nga i-store uban sa attachment sa Media Library |

**Nagbalik (Returns)**

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

Nagkuha og duha ka screenshots ug nagbalik og visual diff score plus usa ka diff image nga naghatag og highlight sa mga bahin nga nausab. Useful ni para masiguro nga ang pagbag-o sa design nakahatag sa gipaabot nga resulta o para makuha kung adunay dili gusto nga problema (regressions).

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Oo | URL sa pahina nga i-capture isip "before" state |
| `after_url` | string | Oo | URL sa pahina nga i-capture isip "after" state. Mahimong parehas nga URL kung nagatandi og panahon |
| `width` | integer | Dili | Viewport width para sa duha ka capture. Default `1280` |
| `threshold` | float | Dili | Pixel-difference threshold (0.0–1.0). Ang mga pixels sulod niining tolerance giisip nga wala'y kausaban. Default `0.1` |

**Nagbalik**

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

Ang `diff_score` nga `0.0` nagpasabot nga walay makita nga kausaban; ang `1.0` nagpasabot nga ang matag pixel nausab.

---

### `review_page_design`

Nagkuha og screenshot sa usa ka pahina ug nagpadala niini sa language model para sa biswal nga pag-analisa. Nagbalik kini og structured assessment nga naglangkob sa layout, typography, paggamit sa kolor, ug mga kabalaka bahin sa accessibility.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Oo | Kinatibuk-ang URL sa pahina nga i-review |
| `focus` | string | Dili | Comma-separated list sa mga lugar nga gusto ihatag og emphasis: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Default: tanan nga bahin |
| `width` | integer | Dili | Viewport width. Default `1280` |

**Nagbalik**

## Mga Abilidad nga Mahimo I-install (Installable Abilities)

Ang Installable Abilities Registry nagtugot kanimo sa pagdugang og mga abilidad sa imong agent pinaagi sa paghatag og mga ability packs nga gihatag isip WordPress plugins. Ang matag pack nagparehistro og usa o labaw pa ka abilidad gamit ang standard ability API.

### `list_available_abilities`

Nagbalik kini sa listahan sa mga ability pack nga available para i-install gikan sa registry.

**Mga Parameter (Parameters)**

| Parameter | Type | Kinahanglanon? | Deskripsyon |
|---|---|---|---|
| `category` | string | Wala | Mag-filter base sa kategorya: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Nagbalik (Returns)**

### `install_ability`

Komonload ug i-activate ang ability pack gikan sa registry.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Oo | Ability pack plugin slug |

**Nagbalik (Returns)** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Mag-query sa ability registry para makit-an ang pinakamaayo nga plugin para sa gihatag nga gamiton ug, opsyon lang, i-install kini.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `description` | string | Oo | Natural language description sa gusto nimong functionality |
| `install` | boolean | Wala | Kung `true`, i-install dayon ang girekomenda nga plugin. Default kay `false` |

**Pananglitan (Example)**

```json
{
  "description": "Kinahanglan nako og contact form nga naay suporta sa file upload ug spam protection",
  "install": false
}
```

**Nagbalik (Returns)**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Popular kini, suportado ang file uploads, ug nag-integrate sa Akismet para sa spam filtering.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
