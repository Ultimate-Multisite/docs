---
title: Sanggunian ng Mga Kakayahan
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Sanggunian ng mga Kakayahan

Ang mga kakayahan ay ang mga atomikong aksyon na maaaring i-invoke ng Gratis AI Agent sa iyong WordPress installation. Bawat kakayahan ay isang nakarehistrong PHP class na naglalantad ng JSON schema — binabasa ng agent ang schema na ito sa runtime upang maunawaan kung anong mga parameter ang kinakailangan at kung ano ang ibinabalik ng kakayahan.

Idinodokumento ng pahinang ito ang lahat ng kakayahang kasama sa Gratis AI Agent v1.9.0.

---

## Mga Custom Post Type {#custom-post-types}

Pinamamahalaan ng mga kakayahang ito ang mga custom post type (CPT) na nakarehistro sa pamamagitan ng agent. Ang mga rehistrasyon ay pinananatili sa WordPress options table upang manatili ang mga ito kahit ma-deactivate at ma-reactivate ang plugin.

### `register_post_type` {#registerposttype}

Nagrerehistro ng bagong custom post type.

**Mga Parameter**

| Parameter | Uri | Kinakailangan | Paglalarawan |
|---|---|---|---|
| `slug` | string | Oo | Ang post type key (pinakamaraming 20 character, walang uppercase, walang espasyo) |
| `singular_label` | string | Oo | Human-readable na isahang pangalan, hal. `Portfolio Item` |
| `plural_label` | string | Oo | Human-readable na maramihang pangalan, hal. `Portfolio Items` |
| `public` | boolean | Hindi | Kung ang post type ay publicly accessible. Default `true` |
| `supports` | array | Hindi | Mga feature na susuportahan: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Default `["title","editor"]` |
| `has_archive` | boolean | Hindi | Kung naka-enable ang archive page ng post type. Default `false` |
| `menu_icon` | string | Hindi | Dashicons class o URL para sa admin menu icon. Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | Hindi | URL slug para sa post type. Defaults to `slug` |

**Halimbawa**

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

**Ibinabalik** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Ibinabalik ang lahat ng custom post type na nakarehistro ng agent.

**Mga Parameter** — wala

**Ibinabalik**

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

Ina-unregister ang custom post type na dati nang nirehistro ng agent. Ang mga umiiral na post ng uri na iyon ay nananatili sa database ngunit hindi na accessible sa pamamagitan ng post type.

**Mga Parameter**

| Parameter | Uri | Kinakailangan | Paglalarawan |
|---|---|---|---|
| `slug` | string | Oo | Ang post type key na aalisin |

**Ibinabalik** `{ "success": true, "slug": "portfolio" }`

---

## Mga Custom Taxonomy {#custom-taxonomies}

Pinamamahalaan ng mga kakayahang ito ang mga custom taxonomy. Tulad ng CPTs, pinananatili ang mga rehistrasyon ng taxonomy.

### `register_taxonomy` {#registertaxonomy}

Nagrerehistro ng bagong custom taxonomy.

**Mga Parameter**

| Parameter | Uri | Kinakailangan | Paglalarawan |
|---|---|---|---|
| `slug` | string | Oo | Ang taxonomy key (pinakamaraming 32 character) |
| `singular_label` | string | Oo | Human-readable na isahang pangalan, hal. `Project Category` |
| `plural_label` | string | Oo | Human-readable na maramihang pangalan, hal. `Project Categories` |
| `post_types` | array | Oo | Mga post type slug na dapat ikabit ang taxonomy na ito |
| `hierarchical` | boolean | Hindi | `true` para sa category-style, `false` para sa tag-style. Default `true` |
| `public` | boolean | Hindi | Kung ang mga term ay publicly accessible. Default `true` |
| `rewrite_slug` | string | Hindi | URL slug para sa taxonomy. Defaults to `slug` |

**Halimbawa**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Ibinabalik** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Ibinabalik ang lahat ng custom taxonomy na nakarehistro ng agent.

**Mga Parameter** — wala

**Ibinabalik**

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

Ina-unregister ang custom taxonomy na dati nang nirehistro ng agent.

**Mga Parameter**

| Parameter | Uri | Kinakailangan | Paglalarawan |
|---|---|---|---|
| `slug` | string | Oo | Ang taxonomy key na aalisin |

**Ibinabalik** `{ "success": true, "slug": "project-category" }`

---

## Design System {#design-system}

Binabago ng mga kakayahan ng design system ang biswal na presentasyon ng WordPress site — mula custom CSS hanggang block patterns at site logo.

### `inject_custom_css` {#injectcustomcss}

Nagdadagdag ng CSS sa `<head>` ng site sa pamamagitan ng `wp_add_inline_style`. Iniimbak ang CSS sa option na `gratis_ai_agent_custom_css` at malinis na dine-dequeue kapag na-reset ang kakayahan.

**Mga Parameter**

| Parameter | Uri | Kinakailangan | Paglalarawan |
|---|---|---|---|
| `css` | string | Oo | Valid na CSS na i-inject |
| `label` | string | Hindi | Human-readable na label para sa CSS block na ito, ginagamit sa debug logs. Default `"agent-injected"` |
| `replace` | boolean | Hindi | Kung `true`, pinapalitan ang lahat ng dating na-inject na CSS. Default `false` (idinadagdag) |

**Halimbawa**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Ibinabalik** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Nagrerehistro ng reusable block pattern sa WordPress pattern library.

**Mga Parameter**

| Parameter | Uri | Kinakailangan | Paglalarawan |
|---|---|---|---|
| `slug` | string | Oo | Pattern identifier, hal. `gratis/hero-dark` |
| `title` | string | Oo | Human-readable na pangalan ng pattern na ipinapakita sa editor |
| `content` | string | Oo | Serialised block markup (HTML) para sa pattern |
| `categories` | array | Hindi | Mga pattern category slug, hal. `["featured", "hero"]` |
| `description` | string | Hindi | Maikling paglalarawan na ipinapakita sa pattern picker |
| `keywords` | array | Hindi | Mga search keyword |

**Ibinabalik** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Inililista ang lahat ng block pattern na nakarehistro ng agent.

**Mga Parameter** — wala

**Nagbabalik**

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

Itinatakda ang WordPress logo ng site sa isang ibinigay na attachment ID o isang remote image URL. Kapag may ibinigay na URL, dina-download ang larawan at ini-import sa Media Library.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | ID ng umiiral na Media Library attachment |
| `url` | string | No | Remote image URL na ii-import at itatakda bilang logo |

Dapat ibigay ang isa sa `attachment_id` o `url`.

**Nagbabalik** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Inilalapat ang pinangalanang preset ng kulay/typography sa `theme.json` (o `global-styles`) ng aktibong theme. Ang mga preset ay mga piniling bundle na pinananatili ng koponan ng Gratis AI Agent.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | Pangalan ng preset, hal. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | Kung `true`, pagsamahin sa umiiral na mga value sa halip na palitan. Default `false` |

**Mga available na preset**

| Preset | Description |
|---|---|
| `minimal-dark` | Halos itim na background, puting teksto, iisang kulay na accent |
| `warm-editorial` | Mainit na off-white na background, serif na headings, makalupang mga kulay na accent |
| `corporate-blue` | Navy at puting palette na may propesyonal na typography |
| `vibrant-startup` | Matingkad na gradients, bilugang mga sulok, modernong sans-serif na type |
| `classic-blog` | Neutral na greys, komportableng line-height, tradisyonal na layout spacing |

**Nagbabalik** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles {#global-styles}

Ang mga kakayahan ng Global Styles ay nagbabasa at nagsusulat ng mga value ng theme.json sa pamamagitan ng WordPress Global Styles API, na nakaaapekto sa lahat ng block at template sa buong site.

### `get_global_styles` {#getglobalstyles}

Nagbabalik ng kasalukuyang configuration ng global styles.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | JSON pointer sa isang partikular na value, hal. `/color/palette` o `/typography/fontSizes`. Ibinabalik ang buong object kung hindi ibinigay. |

**Nagbabalik** ang buong global styles object o ang value sa `path`.

---

### `set_global_styles` {#setglobalstyles}

Ina-update ang isa o higit pang value sa configuration ng global styles.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Yes | JSON pointer sa value na itatakda, hal. `/color/palette` |
| `value` | any | Yes | Ang bagong value |

**Halimbawa** — magdagdag ng kulay sa palette

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Nagbabalik** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Nire-reset ang lahat ng pagbabago sa global styles na inilapat ng agent, at ibinabalik ang mga default ng theme.

**Mga Parameter** — wala

**Nagbabalik** `{ "success": true }`

---

## Mga Navigation Menu {#navigation-menus}

Ang mga kakayahan ng Navigation Menu ay lumilikha at namamahala ng WordPress nav menus at ng mga item nito.

### `create_menu` {#createmenu}

Lumilikha ng bagong WordPress navigation menu.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Pangalan ng menu, hal. `Primary Navigation` |
| `location` | string | No | Lokasyon ng theme kung saan itatalaga ang menu na ito, hal. `primary` |

**Nagbabalik** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Pinapalitan ang pangalan ng menu o muling itinatalaga ito sa isang lokasyon ng theme.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID ng menu na ia-update |
| `name` | string | No | Bagong pangalan ng menu |
| `location` | string | No | Lokasyon ng theme kung saan itatalaga o muling itatalaga |

**Nagbabalik** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Nagdaragdag ng item sa umiiral na navigation menu.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID ng target na menu |
| `type` | string | Yes | Uri ng item: `custom`, `post_type`, o `taxonomy` |
| `title` | string | No | Label para sa menu item (kinakailangan para sa uring `custom`) |
| `url` | string | No | URL para sa mga item na `custom` |
| `object_id` | integer | No | Post ID o term ID para sa mga item na `post_type`/`taxonomy` |
| `parent_id` | integer | No | Menu item ID kung saan ilalagay sa ilalim ang item na ito |
| `position` | integer | No | Posisyong batay sa zero sa menu |

**Nagbabalik** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Nag-aalis ng item mula sa isang navigation menu.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | Menu item ID na aalisin |

**Nagbabalik** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Nililista ang lahat ng WordPress navigation menu, kabilang ang mga nakatalagang lokasyon ng theme.

**Mga Parameter** — wala

**Nagbabalik**

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

## Pamamahala ng Options {#options-management}

Ang mga kakayahan ng Options ay nagbabasa at nagsusulat ng WordPress options sa pamamagitan ng `get_option` / `update_option`. Pinipigilan ng built-in na safety blocklist ang aksidenteng pagbabago ng mahahalagang setting.

### `get_option` {#getoption}

Nagbabasa ng isang WordPress option.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Ang option key, hal. `blogname` |

**Nagbabalik** `{ "option_name": "blogname", "value": "My Site" }`

Nagbabalik ng error kung ang `option_name` ay nasa safety blocklist.

---

### `set_option` {#setoption}

Nagsusulat ng isang WordPress option.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Ang option key |
| `value` | any | Yes | Ang bagong value (awtomatikong sini-serialize para sa arrays/objects) |
| `autoload` | string | No | `"yes"` o `"no"`. Pinananatili ng default ang umiiral na setting ng autoload |

Nagbabalik ng error kung ang `option_name` ay nasa safety blocklist.

**Nagbabalik** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Binubura ang isang WordPress option.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Ang option key na buburahin |

Nagbabalik ng error kung ang `option_name` ay nasa safety blocklist.

**Nagbabalik** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Naglilista ng mga WordPress option na tumutugma sa isang pattern.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | SQL LIKE pattern para salain ang mga pangalan ng option, hal. `gratis_%`. Nagbabalik ng lahat ng option kung hindi inilagay (gamitin nang may pag-iingat sa malalaking database). |
| `limit` | integer | No | Pinakamataas na bilang ng mga resulta. Default `50`, max `500` |

**Nagbabalik**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Pamamahala ng Nilalaman {#content-management}

Ang mga kakayahan sa Pamamahala ng Nilalaman ay lumilikha at nag-eedit ng mga WordPress post at page. Ibinabalik ang mga Post ID upang magamit ng mga susunod na hakbang sa mga planong may maraming kakayahan ang nilalamang ginawa.

### `create_post` {#createpost}

Lumilikha ng bagong WordPress post, page, o custom post type entry.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Pamagat ng post |
| `content` | string | No | Katawan ng post — tumatanggap ng plain text, HTML, o serialised block markup |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Default `draft` |
| `post_type` | string | No | Post type slug, hal. `post`, `page`, o anumang nakarehistrong CPT. Default `post` |
| `excerpt` | string | No | Maikling buod na ipinapakita sa mga archive at resulta ng paghahanap |
| `categories` | array | No | Array ng mga pangalan o ID ng kategoryang itatalaga |
| `tags` | array | No | Array ng mga pangalan o ID ng tag na itatalaga |
| `author` | integer | No | WordPress user ID na itatakda bilang may-akda ng post. Default ang kasalukuyang user |
| `date` | string | No | Petsa ng pag-publish sa ISO 8601 format, hal. `2026-05-01T09:00:00` |
| `page_template` | string | No | Template file na itatalaga sa post o page na ito, hal. `page-full-width.php`. Makabuluhan lamang kapag ang `post_type` ay `page` o isang CPT na sumusuporta sa mga page template. |

**Halimbawa**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Nagbabalik** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Ina-update ang umiiral na WordPress post o page.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID ng post na ia-update |
| `title` | string | No | Bagong pamagat ng post |
| `content` | string | No | Bagong katawan ng post |
| `status` | string | No | Bagong status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | Bagong excerpt |
| `categories` | array | No | Palitan ang buong listahan ng kategorya gamit ang array na ito ng mga pangalan o ID |
| `tags` | array | No | Palitan ang buong listahan ng tag gamit ang array na ito ng mga pangalan o ID |
| `page_template` | string | No | Bagong template file na itatalaga sa post o page na ito, hal. `page-full-width.php`. Magpasa ng walang-lamang string upang alisin ang pagtatalaga ng template at bumalik sa default ng theme. |

**Halimbawa** — palitan ang template pagkatapos gawin

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Nagbabalik** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Lumilikha ng maraming post sa iisang tawag sa kakayahan, na nagpapabawas ng mga pabalik-balik na tawag habang gumagawa ng site o nag-iimport ng maramihang nilalaman. Ginagawa ang mga post nang sunod-sunod; kung pumalya ang isa, magpapatuloy ang iba at iuulat ang pagkabigo sa array ng mga resulta.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | Array ng mga post object, bawat isa ay tumatanggap ng parehong mga parameter gaya ng `create_post` |
| `stop_on_error` | boolean | No | Kung `true`, ihinto ang pagproseso pagkatapos ng unang pagkabigo. Default `false` |

**Halimbawa**

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

**Nagbabalik**

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

Nagtatalaga ng featured image (post thumbnail) sa umiiral na post o page. Tumatanggap ng umiiral na Media Library attachment ID o remote image URL; kapag ibinigay ang isang URL, awtomatikong dina-download at ini-import ang image.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID ng post o page na ia-update |
| `attachment_id` | integer | No | ID ng umiiral na Media Library attachment |
| `url` | string | No | Remote image URL na ii-import at itatakda bilang featured image |
| `alt_text` | string | No | Alt text na ilalapat sa attachment kung ini-import ito mula sa isang URL |

Dapat ibigay ang isa sa `attachment_id` o `url`.

**Nagbabalik** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Lumilikha ng contact form gamit ang aktibong form plugin (Contact Form 7, WPForms, Fluent Forms, o Gravity Forms, depende sa kung alin ang naka-install). Nagbabalik ng shortcode na maaaring i-embed sa anumang post o page.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Pangalan ng form na ipinapakita sa admin ng form plugin |
| `fields` | array | Yes | Nakaayos na listahan ng mga field ng form (tingnan ang Field object sa ibaba) |
| `recipient` | string | No | Email address para tumanggap ng mga submission. Default sa WordPress admin email |
| `subject` | string | No | Linya ng paksa ng email. Sinusuportahan ang mga placeholder na `[your-name]` at `[your-subject]` kapag gumagamit ng Contact Form 7 |
| `confirmation_message` | string | No | Mensaheng ipinapakita pagkatapos ng matagumpay na submission. Default: `"Thank you for your message. We'll be in touch soon."` |

**Field object**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Panloob na pangalan ng field / machine key |
| `label` | string | Yes | Label na nababasa ng tao na ipinapakita sa form |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Kung kailangang punan ang field bago mag-submit. Default `false` |
| `options` | array | No | Mga option para sa mga field na `select`, `checkbox`, at `radio` |
| `placeholder` | string | No | Placeholder text para sa mga input na uri ng text |

**Halimbawa**

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

**Ibinabalik**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Visual Review {#visual-review}

Hinahayaan ng mga kakayahan ng Visual Review ang agent na kumuha ng mga screenshot ng mga live na page at suriin ang mga ito, na nagbibigay-daan sa awtonomong pagsusuri ng disenyo, mga paghahambing bago/pagkatapos, at mga visual regression check nang hindi nangangailangan ng anumang browser extension.

### `capture_screenshot` {#capturescreenshot}

Kumukuha ng screenshot ng isang WordPress page sa ibinigay na URL gamit ang isang server-side headless browser. Sine-save ang image sa Media Library at ibinabalik ang isang CDN URL.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Buong URL ng page na kukunan ng screenshot, hal. `https://example.com/about/` |
| `width` | integer | No | Lapad ng viewport sa pixels. Default `1280` |
| `height` | integer | No | Taas ng viewport sa pixels. Default `800` |
| `full_page` | boolean | No | Kunin ang buong scrollable na page sa halip na viewport lang. Default `false` |
| `delay_ms` | integer | No | Milliseconds na hihintayin pagkatapos mag-load ang page bago kumuha, kapaki-pakinabang para sa animated na content. Default `500` |
| `label` | string | No | Label na nababasa ng tao na naka-store kasama ng attachment sa Media Library |

**Ibinabalik**

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

Kumukuha ng dalawang screenshot at nagbabalik ng visual diff score kasama ang diff image na nagha-highlight ng mga binagong rehiyon. Kapaki-pakinabang para kumpirmahin na ang pagbabago sa disenyo ay nagbunga ng inaasahang resulta o para matukoy ang hindi sinasadyang regressions.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL ng page na kukunan bilang "before" state |
| `after_url` | string | Yes | URL ng page na kukunan bilang "after" state. Maaaring parehong URL kung naghahambing sa paglipas ng panahon |
| `width` | integer | No | Lapad ng viewport para sa parehong capture. Default `1280` |
| `threshold` | float | No | Threshold ng pixel-difference (0.0–1.0). Itinuturing na hindi nagbago ang mga pixel sa loob ng tolerance na ito. Default `0.1` |

**Ibinabalik**

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

Ang `diff_score` na `0.0` ay nangangahulugang walang nakikitang pagbabago; ang `1.0` ay nangangahulugang nagbago ang bawat pixel.

---

### `review_page_design` {#reviewpagedesign}

Kumukuha ng screenshot ng isang page at ipinapadala ito sa language model para sa visual analysis. Nagbabalik ng structured assessment na sumasaklaw sa layout, typography, paggamit ng kulay, at mga alalahanin sa accessibility.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Buong URL ng page na susuriin |
| `focus` | string | No | Comma-separated na listahan ng mga area ng review na bibigyang-diin: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Default: lahat ng area |
| `width` | integer | No | Lapad ng viewport. Default `1280` |

**Ibinabalik**

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

## Mga Nai-install na Kakayahan {#installable-abilities}

Hinahayaan ka ng Installable Abilities Registry na palawakin ang agent gamit ang karagdagang mga ability pack na ipinamamahagi bilang WordPress plugins. Nirerehistro ng bawat pack ang isa o higit pang mga kakayahan gamit ang standard ability API.

### `list_available_abilities` {#listavailableabilities}

Ibinabalik ang catalogue ng mga ability pack na available para sa pag-install mula sa registry.

**Mga Parameter**

| Parameter | Uri | Kailangan | Paglalarawan |
|---|---|---|---|
| `category` | string | Hindi | Salain ayon sa kategorya: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Ibinabalik**

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

Dina-download at ina-activate ang isang pakete ng kakayahan mula sa rehistro.

**Mga Parameter**

| Parameter | Uri | Kailangan | Paglalarawan |
|---|---|---|---|
| `slug` | string | Oo | Slug ng pandagdag na pakete ng kakayahan |

**Ibinabalik** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Kina-query ang rehistro ng kakayahan upang mahanap ang pinakamahusay na pandagdag para sa inilarawang kaso ng paggamit at, opsyonal, i-install ito.

**Mga Parameter**

| Parameter | Uri | Kailangan | Paglalarawan |
|---|---|---|---|
| `description` | string | Oo | Paglalarawan sa natural na wika ng ninanais na functionality |
| `install` | boolean | Hindi | Kung `true`, agad na ini-install ang inirerekomendang pandagdag. Default ay `false` |

**Halimbawa**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Ibinabalik**

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
