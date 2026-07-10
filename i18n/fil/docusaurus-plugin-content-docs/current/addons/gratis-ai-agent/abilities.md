---
title: Sanggunian ng mga Kakayahan
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Gabay sa mga Kakayahan (Abilities Reference) {#abilities-reference}

Ang mga Abilities ay ang mga atomic na aksyon na magagamit ng Gratis AI Agent sa iyong WordPress installation. Ang bawat ability ay isang naka-register na PHP class na nagpapakita ng JSON schema — binabasa ng agent ito habang tumatakbo (runtime) para maintindihan kung anong mga parameters ang kailangan at ano ang ibabalik ng ability.

Ang pahinang ito ay nagdedokumento sa lahat ng abilities na kasama sa Gratis AI Agent v1.9.0.

---

## Custom Post Types {#custom-post-types}

Pinamamahalaan ng mga ability na ito ang custom post types (CPTs) na naka-register sa pamamagitan ng agent. Ang mga pagpaparehistro ay nananatili sa WordPress options table kaya mananatili sila kahit ma-deactivate at ma-reactivate ang plugin.

### `register_post_type` {#registerposttype}

Nagre-register ng bagong custom post type.

**Mga Parameter**

| Parameter | Uri (Type) | Kailangan (Required) | Deskripsyon (Description) |
|---|---|---|---|
| `slug` | string | Oo (Yes) | Ang key ng post type (maximum 20 characters, walang uppercase, walang espasyo) |
| `singular_label` | string | Oo (Yes) | Ang pangalan ng singular na madaling basahin para sa tao, halimbawa: `Portfolio Item` |
| `plural_label` | string | Oo (Yes) | Ang pangalan ng plural na madaling basahin para sa tao, halimbawa: `Portfolio Items` |
| `public` | boolean | Hindi (No) | Kung ang post type ay pampubliko. Default ay `true` |
| `supports` | array | Hindi (No) | Mga feature na susuportahan: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Default ay `["title","editor"]` |
| `has_archive` | boolean | Hindi (No) | Kung ang archive page ng post type ay naka-enable. Default ay `false` |
| `menu_icon` | string | Hindi (No) | Dashicons class o URL para sa admin menu icon. Default ay `"dashicons-admin-post"` |
| `rewrite_slug` | string | Hindi (No) | Ang URL slug para sa post type. Default ay `slug` |

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

**Nagbabalik (Returns)** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Ibinabalik ang lahat ng custom post types na naka-register ng agent.

**Mga Parameter** — wala

**Nagbabalik (Returns)**

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

Inaalis ang isang custom post type na dati nang naka-register ng agent. Ang mga umiiral na posts ng uri na iyon ay mananatili sa database ngunit hindi na magiging accessible sa pamamagitan ng post type.

**Mga Parameter**

| Parameter | Uri (Type) | Kailangan (Required) | Deskripsyon (Description) |
|---|---|---|---|
| `slug` | string | Oo (Yes) | Ang key ng post type na aalisin |

**Nagbabalik (Returns)** `{ "success": true, "slug": "portfolio" }`

---

## Custom Taxonomies {#custom-taxonomies}

Pinamamahalaan ng mga ability na ito ang custom taxonomies. Tulad ng CPTs, ang pagpaparehistro ng taxonomy ay nananatili.

### `register_taxonomy` {#registertaxonomy}

Nagre-register ng bagong custom taxonomy.

**Mga Parameter**

Design system abilities ay nagbabago sa hitsura ng website ng WordPress — mula sa custom CSS hanggang sa mga block patterns at logo ng site.

### `inject_custom_css` {#listtaxonomies}

Idinadagdag ang CSS sa `<head>` ng site gamit ang `wp_add_inline_style`. Ang CSS ay iniimbak sa option na `gratis_ai_agent_custom_css` at malinis itong inaalis kapag in-reset ang ability.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | Valid CSS na ipapasok |
| `label` | string | No | Human-readable label para sa CSS block na ito, ginagamit sa debug logs. Default ay `"agent-injected"` |
| `replace` | boolean | No | Kung `true`, papalitan nito ang lahat ng naipasok na CSS. Default ay `false` (idado-dagdag) |

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

### `add_block_pattern` {#deletetaxonomy}

Nire-register ang isang reusable block pattern sa WordPress pattern library.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Pattern identifier, halimbawa ay `gratis/hero-dark` |
| `title` | string | Yes | Pangalan ng pattern na madaling basahin at makikita sa editor |
| `content` | string | Yes | Serialised block markup (HTML) para sa pattern |
| `categories` | array | No | Mga slug ng kategorya ng pattern, halimbawa ay `["featured", "hero"]` |
| `description` | string | No | Maikling deskripsyon na ipinapakita sa pattern picker |
| `keywords` | array | No | Mga salitang hinahanap (search keywords) |

**Babalik** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#design-system}

Ilista ang lahat ng block patterns na naka-register ng agent.

**Mga Parameter** — wala

**Babalik**

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

### `set_site_logo` {#injectcustomcss}

Itinatakda ang logo ng WordPress site sa isang ibinigay na attachment ID o remote image URL. Kapag may ibinigay na URL, idadaan ito para ma-download at mailipat sa Media Library ang imahe.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | ID ng umiiral na attachment sa Media Library |
| `url` | string | No | Remote image URL para i-import at itakda bilang logo |

Kailangan ang isa sa `attachment_id` o `url`.

**Babalik** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#addblockpattern}

Inilalapat ang isang pangalan ng preset na kulay/tipograpiya sa `theme.json` (o `global-styles`) ng aktibong theme. Ang mga preset ay mga curated bundle na pinapanatili ng Gratis AI Agent team.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | Pangalan ng preset, halimbawa ay `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | Kung `true`, pagsamahin ito sa mga kasalukuyang halaga imbes na palitan. Default ay `false` |

**Mga Available na preset**

| Preset | Deskripsyon |
|---|---|
| `minimal-dark` | Malapit sa itim na background, puting teksto, isang accent color |
| `warm-editorial` | Mainit na off-white na background, serif headings, earthy accent colors |
| `corporate-blue` | Navy at puting palette na may propesyonal na tipograpiya |
| `vibrant-startup` | Maliwanag na gradients, rounded corners, modern sans-serif type |
| `classic-blog` | Neutral na mga kulay abo, komportableng line-height, tradisyunal na spacing ng layout |

**Babalik** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles {#listblockpatterns}

Ang kakayahan sa Global Styles ay nagbabasa at nagsusulat ng mga halaga sa `theme.json` gamit ang WordPress Global Styles API, na nakakaapekto sa lahat ng blocks at template sa buong site.

### `get_global_styles` {#setsitelogo}

Ibinabalik ang kasalukuyang configuration ng global styles.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | JSON pointer sa isang partikular na halaga, halimbawa ay `/color/palette` o `/typography/fontSizes`. Ibinabalik ang buong object kung hindi ibibigay. |

**Babalik** ang buong global styles object o ang halaga sa `path`.

---

### `set_global_styles` {#applythemejsonpreset}

### `reset_global_styles` {#global-styles}

Binabalik (resets) nito ang lahat ng pagbabago sa global styles na inilapat ng agent, at ibinabalik ang mga default setting ng theme.

**Parameters** — wala

**Returns** `{ "success": true }`

---

## Navigation Menus {#getglobalstyles}

Ang kakayahan sa Navigation Menu ay ginagamit para gumawa at mag-manage ng WordPress nav menus at ang kanilang mga item.

### `create_menu` {#setglobalstyles}

Gumagawa ng bagong WordPress navigation menu.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Pangalan ng menu, halimbawa: `Primary Navigation` |
| `location` | string | No | Lokasyon sa theme kung saan ilalagay ang menu na ito, halimbawa: `primary` |

**Returns** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#resetglobalstyles}

Binabago (renames) o inililipat (reassigns) ang isang menu sa ibang lokasyon ng theme.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID ng menu na i-update |
| `name` | string | No | Bagong pangalan ng menu |
| `location` | string | No | Lokasyon sa theme kung saan ilalagay o ililipat muli |

**Returns** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#navigation-menus}

Nagdaragdag (adds) ng item sa isang umiiral na navigation menu.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID ng target na menu |
| `type` | string | Yes | Uri ng item: `custom`, `post_type`, o `taxonomy` |
| `title` | string | No | Label para sa item ng menu (kinakailangan para sa uri na `custom`) |
| `url` | string | No | URL para sa mga custom items |
| `object_id` | integer | No | Post ID o term ID para sa mga item ng `post_type`/`taxonomy` |
| `parent_id` | integer | No | Menu item ID kung saan ilalagay ang item na ito (nesting) |
| `position` | integer | No | Zero-based position ng item sa loob ng menu |

**Returns** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#createmenu}

Inaalis (removes) ang isang item mula sa navigation menu.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | ID ng menu item na aalisin |

**Returns** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#updatemenu}

Ilista (lists) ang lahat ng WordPress navigation menus, kasama ang kanilang mga itinalagang theme location.

**Parameters** — wala

**Returns**

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

## Options Management {#addmenuitem}

Ang kakayahan sa Options ay ginagamit para basahin at magsulat ng WordPress options gamit ang `get_option` / `update_option`. Mayroon itong built-in na safety blocklist na pumipigil sa aksidenteng pagbabago ng mga kritikal na setting.

### `get_option` {#removemenuitem}

Nagbabasa ng isang WordPress option.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Oo | Ang option key, halimbawa ay `blogname` |

**Babalik** `{ "option_name": "blogname", "value": "My Site" }`

Magbabalik ng error kung ang `option_name` ay nasa safety blocklist.

---

### `set_option` {#listmenus}

Nagsusulat ng isang WordPress option.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Oo | Ang option key |
| `value` | any | Oo | Ang bagong value (awtomatikong i-serialize para sa arrays/objects) |
| `autoload` | string | Hindi | `"yes"` o `"no"`. Ang default ay pinapanatili ang kasalukuyang setting ng autoload |

Magbabalik ng error kung ang `option_name` ay nasa safety blocklist.

**Babalik** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#options-management}

Binubura ang isang WordPress option.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Oo | Ang option key na buburahin |

Magbabalik ng error kung ang `option_name` ay nasa safety blocklist.

**Babalik** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#getoption}

Ilista ang mga WordPress option na tumutugma sa isang pattern.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | Hindi | SQL LIKE pattern para mag-filter ng mga pangalan ng option, halimbawa ay `gratis_%`. Babalikan ang lahat ng options kung hindi ibibigay (gamitin nang may pag-iingat sa malalaking database). |
| `limit` | integer | Hindi | Pinakamaraming resulta. Default ay `50`, maximum ay `500` |

**Babalik**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Content Management {#setoption}

Ang mga kakayahan sa Content Management ay ginagamit para gumawa at mag-edit ng WordPress posts at pages. Ang Post IDs ay ibinabalik upang ma-reference ang nilikhang content sa mga susunod na hakbang sa multi-ability plans.

### `create_post` {#deleteoption}

Lumilikha ng bagong WordPress post, page, o entry ng custom post type.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Oo | Pamagat ng post |
| `content` | string | Hindi | Katawan ng post — tumatanggap ng plain text, HTML, o serialised block markup |
| `status` | string | Hindi | `draft`, `publish`, `pending`, `private`. Default ay `draft` |
| `post_type` | string | Hindi | Slug ng post type, halimbawa ay `post`, `page`, o anumang naka-register na CPT. Default ay `post` |
| `excerpt` | string | Hindi | Maikling buod na ipinapakita sa archives at search results |
| `categories` | array | Hindi | Array ng mga pangalan o ID ng category na itatalaga |
| `tags` | array | Hindi | Array ng mga pangalan o ID ng tag na itatalaga |
| `author` | integer | Hindi | WordPress user ID na itatakda bilang author ng post. Default ay ang kasalukuyang user |
| `date` | string | Hindi | Petsa ng paglalathala sa ISO 8601 format, halimbawa ay `2026-05-01T09:00:00` |
| `page_template` | string | Hindi | Template file na itatalaga sa post o page na ito, halimbawa ay `page-full-width.php`. Makabuluhan lamang kapag ang `post_type` ay `page` o isang CPT na sumusuporta sa mga page template. |

**Halimbawa**

### `update_post` {#listoptions}

Binabago ang isang umiiral na WordPress post o page.

**Mga Parameter**

| Parameter | Uri | Kailangan | Deskripsyon |
|---|---|---|---|
| `post_id` | integer | Oo | ID ng post na i-a-update |
| `title` | string | Hindi | Bagong pamagat ng post |
| `content` | string | Hindi | Bagong katawan ng post |
| `status` | string | Hindi | Bagong status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Hindi | Bagong excerpt |
| `categories` | array | Hindi | Palitan ang buong listahan ng kategorya nito sa array na ito ng mga pangalan o ID |
| `tags` | array | Hindi | Palitan ang buong listahan ng tag nito sa array na ito ng mga pangalan o ID |
| `page_template` | string | Hindi | Bagong template file na itatalaga sa post o page na ito, halimbawa ay `page-full-width.php`. Magbigay ng empty string para tanggalin ang pagtatala ng template at bumalik sa default ng theme. |

**Halimbawa** — baguhin ang template pagkatapos lumikha

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Babalik** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#content-management}

Lumilikha ng maraming post sa isang tawag ng kakayahan (ability call), na nagpapabawas ng mga round-trip habang ginagawa ang site build o bulk content import. Ang mga post ay gagawin nang sunud-sunod; kung may isa na pumalya, magpapatuloy ang iba at ang pagkabigo ay iireport sa results array.

**Mga Parameter**

| Parameter | Uri | Kailangan | Deskripsyon |
|---|---|---|---|
| `posts` | array | Oo | Array ng mga post object, bawat isa ay tumatanggap ng parehong mga parameter gaya ng `create_post` |
| `stop_on_error` | boolean | Hindi | Kung `true`, ititigil ang pagpoproseso pagkatapos ng unang pagkabigo. Default ay `false` |

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

**Babalik**

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

### `set_featured_image` {#createpost}

Naglalagay ng featured image (thumbnail ng post) sa isang umiiral na post o page. Tinatanggap nito ang ID ng kasalukuyang attachment mula sa Media Library o isang remote image URL; kapag may ibinigay na URL, awtomatikong idadaan at i-import ang imahe.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID ng post o page na i-update |
| `attachment_id` | integer | No | ID ng existing Media Library attachment |
| `url` | string | No | Remote image URL para i-import at itakda bilang featured image |
| `alt_text` | string | No | Alt text na ilalagay sa attachment kung ito ay i-import mula sa URL |

Kailangan ang isa sa `attachment_id` o `url`.

**Babalik (Returns)** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#updatepost}

Lumilikha ng contact form gamit ang active na form plugin (Contact Form 7, WPForms, Fluent Forms, o Gravity Forms, depende kung alin ang naka-install). Bumabalik ito ng shortcode na pwedeng i-embed sa kahit anong post o page.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Pangalan ng form na makikita sa admin ng form plugin |
| `fields` | array | Yes | Ordered list ng mga field ng form (tingin sa Field object sa ibaba) |
| `recipient` | string | No | Email address kung saan tatanggapin ang mga submission. Default ay email ng WordPress admin |
| `subject` | string | No | Subject line ng email. Sumusuporta sa `[your-name]` at `[your-subject]` placeholders kapag gumagamit ng Contact Form 7 |
| `confirmation_message` | string | No | Mensaheng ipapakita pagkatapos ng matagumpay na submission. Default: `"Thank you for your message. We'll be in touch soon."` |

**Field object**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Internal field name / machine key |
| `label` | string | Yes | Human-readable label na makikita sa form |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Kung kailangang punan ang field bago mag-submit. Default ay `false` |
| `options` | array | No | Mga opsyon para sa `select`, `checkbox`, at `radio` fields |
| `placeholder` | string | No | Placeholder text para sa mga text-type inputs |

**Halimbawa (Example)**

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

**Babalik (Returns)**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Visual Review {#batchcreateposts}

Ang kakayahan ng Visual Review ay nagpapahintulot sa agent na kumuha ng mga screenshot ng live pages at i-analyze ang mga ito, kaya magagawa ang autonomous design review, pre/after comparisons, at visual regression checks nang hindi na kailangan ng browser extension.

### `capture_screenshot` {#setfeaturedimage}

### `compare_screenshots` {#createcontactform}

Kukuha ang dalawang screenshot at ibinabalik ang visual diff score kasama ang isang diff image na nagpapakita ng mga bahaging nagbago. Nakakatulong ito para makumpirma kung ang pagbabago sa disenyo ay nagdulot ng inaasahang resulta o para matukoy ang mga hindi sinasadyang problema (regressions).

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL ng pahina na kokohuin bilang "bago" (before) na estado. |
| `after_url` | string | Yes | URL ng pahina na kokohuin bilang "pagkatapos" (after) na estado. Maaaring pareho ang URL kung ikukumpara sa pagitan ng dalawang oras. |
| `width` | integer | No | Viewport width para sa parehong kuha. Default ay `1280`. |
| `threshold` | float | No | Pixel-difference threshold (0.0–1.0). Ang mga pixel na nasa loob ng katanggap-tanggap na tolerance na ito ay itinuturing na hindi nagbago. Default ay `0.1`. |

**Babalik**

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

Ang `diff_score` na `0.0` ay nangangahulugang walang nakikitang pagbabago; ang `1.0` naman ay nangangahulugang bawat pixel ay nagbago.

---

### `review_page_design` {#visual-review}

Kukuha ng screenshot ng isang pahina at ipapadala ito sa language model para sa visual analysis. Magbabalik ito ng structured assessment na sumasaklaw sa layout, tipograpiya (font), paggamit ng kulay, at mga alalahanin tungkol sa accessibility.

**Mga Parameter**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Full URL ng pahina na kokohuin para suriin. |
| `focus` | string | No | Isang comma-separated list ng mga lugar na susuriin: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Default: lahat ng bahagi. |
| `width` | integer | No | Viewport width. Default ay `1280`. |

**Babalik**

## Installable Abilities {#capturescreenshot}

Ang Installable Abilities Registry ay nagbibigay sa iyo ng paraan para palawakin ang iyong agent gamit ang mga ability pack na ipinamamahagi bilang WordPress plugins. Bawat pack ay nagre-register ng isa o higit pang kakayahan gamit ang standard ability API.

### `list_available_abilities` {#comparescreenshots}

Ibinabalik nito ang listahan ng mga ability pack na available para i-install mula sa registry.

**Mga Parameter**

| Parameter | Uri | Kailangan | Deskripsyon |
|---|---|---|---|
| `category` | string | Wala | Mag-filter ayon sa kategorya: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Ibinabalik (Returns)**

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

### `install_ability` {#reviewpagedesign}

Inililipat at inaaktibo ang isang ability pack mula sa registry.

**Mga Parameter**

| Parameter | Uri | Kailangan | Deskripsyon |
|---|---|---|---|
| `slug` | string | Oo | Slug ng ability pack plugin |

**Ibinabalik (Returns)** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#installable-abilities}

Tinitingnan ang ability registry para mahanap ang pinakamahusay na plugin para sa isang inilarawan na sitwasyon at, opsyonal, i-iinstall ito.

**Mga Parameter**

| Parameter | Uri | Kailangan | Deskripsyon |
|---|---|---|---|
| `description` | string | Oo | Natural language description ng gustong functionality |
| `install` | boolean | Wala | Kung `true`, agad na i-iinstall ang inirerekomendang plugin. Default ay `false` |

**Halimbawa (Example)**

```json
{
  "description": "Kailangan ko ng contact form na may suporta sa file upload at spam protection",
  "install": false
}
```

**Ibinabalik (Returns)**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Malawak na ginagamit, sumusuporta sa file uploads, at nakikipag-ugnayan sa Akismet para sa spam filtering.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
