---
title: ئىقتىدارلار قوللانمىسى
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# ئىقتىدارلار قوللانمىسى

ئىقتىدارلار Gratis AI Agent سىزنىڭ WordPress ئورنىتىلمىڭىزدا چاقىرالايدىغان ئاتوملۇق ھەرىكەتلەردۇر. ھەر بىر ئىقتىدار JSON schema نى ئاشكارىلايدىغان تىزىملاتقان PHP class — agent ئىجرا ۋاقتىدا بۇ schema نى ئوقۇپ، قايسى پارامېتىرلارنىڭ تەلەپ قىلىنىدىغانلىقى ۋە ئىقتىدارنىڭ نېمە قايتۇرىدىغانلىقىنى چۈشىنىدۇ.

بۇ بەت Gratis AI Agent v1.9.0 بىلەن بىللە كېلىدىغان بارلىق ئىقتىدارلارنى ھۆججەتلەيدۇ.

---

## ئىختىيارى يازما تۈرلىرى

بۇ ئىقتىدارلار agent ئارقىلىق تىزىملاتقان ئىختىيارى يازما تۈرلىرىنى (CPTs) باشقۇرىدۇ. تىزىملىتىشلار WordPress options جەدۋىلىگە ساقلىنىدۇ، شۇڭا ئۇلار plugin نى ئەمەلدىن قالدۇرۇش ۋە قايتا ئاكتىپلاشتىنمۇ ساقلىنىپ قالىدۇ.

### `register_post_type`

يېڭى ئىختىيارى يازما تۈرىنى تىزىملىتىدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈر | تەلەپ قىلىنامدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `slug` | string | ھەئە | يازما تۈرى ئاچقۇچى (ئەڭ كۆپ 20 ھەرپ، چوڭ ھەرپ يوق، بوشلۇق يوق) |
| `singular_label` | string | ھەئە | ئادەم ئوقۇيالايدىغان بىرلىك نام، مەسىلەن `Portfolio Item` |
| `plural_label` | string | ھەئە | ئادەم ئوقۇيالايدىغان كۆپلۈك نام، مەسىلەن `Portfolio Items` |
| `public` | boolean | ياق | يازما تۈرى ئاشكارا زىيارەت قىلىنالايدىغان-قىلىنمايدىغانلىقى. كۆڭۈلدىكى `true` |
| `supports` | array | ياق | قوللايدىغان ئىقتىدارلار: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. كۆڭۈلدىكى `["title","editor"]` |
| `has_archive` | boolean | ياق | يازما تۈرى ئارخىپ بېتى قوزغىتىلغان-قوزغىتىلمىغانلىقى. كۆڭۈلدىكى `false` |
| `menu_icon` | string | ياق | admin menu سىنبەلگىسى ئۈچۈن Dashicons class ياكى URL. كۆڭۈلدىكى `"dashicons-admin-post"` |
| `rewrite_slug` | string | ياق | يازما تۈرى ئۈچۈن URL slug. كۆڭۈلدىكىسى `slug` |

**مىسال**

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

**قايتۇرىدۇ** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

agent تەرىپىدىن تىزىملاتقان بارلىق ئىختىيارى يازما تۈرلىرىنى قايتۇرىدۇ.

**پارامېتىرلار** — يوق

**قايتۇرىدۇ**

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

ئىلگىرى agent تەرىپىدىن تىزىملاتقان ئىختىيارى يازما تۈرىنى تىزىمدىن چىقىرىدۇ. شۇ تۈردىكى مەۋجۇت يازمىلار database دا ساقلىنىپ قالىدۇ، ئەمما ئەمدى يازما تۈرى ئارقىلىق زىيارەت قىلغىلى بولمايدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈر | تەلەپ قىلىنامدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `slug` | string | ھەئە | ئۆچۈرۈلىدىغان يازما تۈرى ئاچقۇچى |

**قايتۇرىدۇ** `{ "success": true, "slug": "portfolio" }`

---

## ئىختىيارى Taxonomy لار

بۇ ئىقتىدارلار ئىختىيارى taxonomy لارنى باشقۇرىدۇ. CPTs غا ئوخشاش، taxonomy تىزىملىتىشلىرىمۇ ساقلىنىدۇ.

### `register_taxonomy`

يېڭى ئىختىيارى taxonomy نى تىزىملىتىدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈر | تەلەپ قىلىنامدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `slug` | string | ھەئە | taxonomy ئاچقۇچى (ئەڭ كۆپ 32 ھەرپ) |
| `singular_label` | string | ھەئە | ئادەم ئوقۇيالايدىغان بىرلىك نام، مەسىلەن `Project Category` |
| `plural_label` | string | ھەئە | ئادەم ئوقۇيالايدىغان كۆپلۈك نام، مەسىلەن `Project Categories` |
| `post_types` | array | ھەئە | بۇ taxonomy ئۇلىنىشى كېرەك بولغان يازما تۈرى slug لىرى |
| `hierarchical` | boolean | ياق | category ئۇسلۇبى ئۈچۈن `true`، tag ئۇسلۇبى ئۈچۈن `false`. كۆڭۈلدىكى `true` |
| `public` | boolean | ياق | term لار ئاشكارا زىيارەت قىلىنالايدىغان-قىلىنمايدىغانلىقى. كۆڭۈلدىكى `true` |
| `rewrite_slug` | string | ياق | taxonomy ئۈچۈن URL slug. كۆڭۈلدىكىسى `slug` |

**مىسال**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**قايتۇرىدۇ** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

agent تەرىپىدىن تىزىملاتقان بارلىق ئىختىيارى taxonomy لارنى قايتۇرىدۇ.

**پارامېتىرلار** — يوق

**قايتۇرىدۇ**

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

ئىلگىرى agent تەرىپىدىن تىزىملاتقان ئىختىيارى taxonomy نى تىزىمدىن چىقىرىدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈر | تەلەپ قىلىنامدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `slug` | string | ھەئە | ئۆچۈرۈلىدىغان taxonomy ئاچقۇچى |

**قايتۇرىدۇ** `{ "success": true, "slug": "project-category" }`

---

## لايىھە سىستېمىسى

لايىھە سىستېمىسى ئىقتىدارلىرى WordPress site نىڭ كۆرۈنۈش ئىپادىسىنى ئۆزگەرتىدۇ — ئىختىيارى CSS تىن block pattern لار ۋە site لوگوسىغىچە.

### `inject_custom_css`

`wp_add_inline_style` ئارقىلىق CSS نى site نىڭ `<head>` قىسمىغا قوشىدۇ. CSS `gratis_ai_agent_custom_css` option دا ساقلىنىدۇ ۋە ئىقتىدار قايتا تەڭشەلگەندە پاكىز dequeued قىلىنىدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈر | تەلەپ قىلىنامدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `css` | string | ھەئە | كىرگۈزۈلىدىغان ئىناۋەتلىك CSS |
| `label` | string | ياق | debug log لاردا ئىشلىتىلىدىغان بۇ CSS block ئۈچۈن ئادەم ئوقۇيالايدىغان بەلگە. كۆڭۈلدىكى `"agent-injected"` |
| `replace` | boolean | ياق | ئەگەر `true` بولسا، ئىلگىرى كىرگۈزۈلگەن بارلىق CSS نى ئالماشتۇرىدۇ. كۆڭۈلدىكى `false` (قوشۇپ بارىدۇ) |

**مىسال**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**قايتۇرىدۇ** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

WordPress pattern كۈتۈپخانىسىدا قايتا ئىشلىتىلىدىغان block pattern نى تىزىملىتىدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈر | تەلەپ قىلىنامدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `slug` | string | ھەئە | Pattern تونۇتقۇچىسى، مەسىلەن `gratis/hero-dark` |
| `title` | string | ھەئە | editor دا كۆرسىتىلىدىغان ئادەم ئوقۇيالايدىغان pattern نامى |
| `content` | string | ھەئە | pattern ئۈچۈن serialised block markup (HTML) |
| `categories` | array | ياق | Pattern category slug لىرى، مەسىلەن `["featured", "hero"]` |
| `description` | string | ياق | pattern picker دا كۆرسىتىلىدىغان قىسقا چۈشەندۈرۈش |
| `keywords` | array | ياق | ئىزدەش ئاچقۇچ سۆزلىرى |

**قايتۇرىدۇ** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

agent تەرىپىدىن تىزىملاتقان بارلىق block pattern لارنى تىزىپ كۆرسىتىدۇ.

**پارامېتىرلار** — يوق

**قايتۇرىدۇ**

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

WordPress تور بېكىتى لوگوسىنى بېرىلگەن قوشۇمچە ھۆججەت ID ياكى يىراقتىكى رەسىم URL غا تەڭشەيدۇ. URL تەمىنلەنسە، رەسىم چۈشۈرۈلۈپ Media Library غا ئىمپورت قىلىنىدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈرى | تەلەپ قىلىنىدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `attachment_id` | integer | ياق | مەۋجۇت Media Library قوشۇمچە ھۆججىتىنىڭ ID سى |
| `url` | string | ياق | ئىمپورت قىلىپ لوگو قىلىپ تەڭشەيدىغان يىراقتىكى رەسىم URL |

`attachment_id` ياكى `url` دىن بىرى تەمىنلىنىشى كېرەك.

**قايتۇرىدۇ** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

ئاكتىپ theme نىڭ `theme.json` ىغا (ياكى `global-styles`) نام بېرىلگەن رەڭ/تىپوگرافىيە preset نى قوللىنىدۇ. Preset لار Gratis AI Agent گۇرۇپپىسى تەرىپىدىن باشقۇرۇلىدىغان تاللانغان بوغچىلار.

**پارامېتىرلار**

| پارامېتىر | تۈرى | تەلەپ قىلىنىدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `preset` | string | ھەئە | Preset نامى، مەسىلەن `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | ياق | ئەگەر `true` بولسا، ئالماشتۇرۇشنىڭ ئورنىغا مەۋجۇت قىممەتلەر بىلەن بىرلەشتۈرىدۇ. كۆڭۈلدىكىسى `false` |

**ئىشلەتكىلى بولىدىغان preset لار**

| Preset | چۈشەندۈرۈش |
|---|---|
| `minimal-dark` | قاراڭغۇغا يېقىن تەگلىك، ئاق تېكىست، بىرلا ئەكسېنت رەڭ |
| `warm-editorial` | ئىللىق ئاققا يېقىن تەگلىك، serif ماۋزۇلار، تەبىئىي ئەكسېنت رەڭلەر |
| `corporate-blue` | كەسپىي تىپوگرافىيە بىلەن توق كۆك ۋە ئاق رەڭ پالېتى |
| `vibrant-startup` | يورۇق gradient لار، يۇمىلاق بۇلۇڭلار، زامانىۋى تىرناقسىز خەت نۇسخىسى |
| `classic-blog` | نېيترال كۈلرەڭلەر، راھەت قۇر ئېگىزلىكى، ئەنئەنىۋى جايلاشتۇرۇش ئارىلىقى |

**قايتۇرىدۇ** `{ "success": true, "preset": "minimal-dark" }`

---

## ئومۇمىي ئۇسلۇبلار

ئومۇمىي ئۇسلۇب ئىقتىدارلىرى WordPress Global Styles API ئارقىلىق theme.json قىممەتلىرىنى ئوقۇيدۇ ۋە يازىدۇ، پۈتۈن تور بېكىتىدىكى بارلىق block ۋە template لارغا تەسىر كۆرسىتىدۇ.

### `get_global_styles`

نۆۋەتتىكى ئومۇمىي ئۇسلۇب سەپلىمىسىنى قايتۇرىدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈرى | تەلەپ قىلىنىدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `path` | string | ياق | كونكرېت قىممەتكە بولغان JSON pointer، مەسىلەن `/color/palette` ياكى `/typography/fontSizes`. قالدۇرۇلسا پۈتۈن ئوبيېكتنى قايتۇرىدۇ. |

**قايتۇرىدۇ** تولۇق ئومۇمىي ئۇسلۇب ئوبيېكتىنى ياكى `path` دىكى قىممەتنى.

---

### `set_global_styles`

ئومۇمىي ئۇسلۇب سەپلىمىسىدىكى بىر ياكى بىرنەچچە قىممەتنى يېڭىلايدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈرى | تەلەپ قىلىنىدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `path` | string | ھەئە | تەڭشىلىدىغان قىممەتكە بولغان JSON pointer، مەسىلەن `/color/palette` |
| `value` | any | ھەئە | يېڭى قىممەت |

**مىسال** — پالېتقا بىر رەڭ قوشۇش

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**قايتۇرىدۇ** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

agent قوللىغان بارلىق ئومۇمىي ئۇسلۇب ئۆزگەرتىشلىرىنى ئەسلىگە قايتۇرۇپ، theme كۆڭۈلدىكى قىممەتلىرىنى ئەسلىگە كەلتۈرىدۇ.

**پارامېتىرلار** — يوق

**قايتۇرىدۇ** `{ "success": true }`

---

## يولباشلاش تىزىملىكلىرى

يولباشلاش تىزىملىكى ئىقتىدارلىرى WordPress يولباشلاش تىزىملىكلىرى ۋە ئۇلارنىڭ تۈرلىرىنى قۇرىدۇ ۋە باشقۇرىدۇ.

### `create_menu`

يېڭى WordPress يولباشلاش تىزىملىكى قۇرىدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈرى | تەلەپ قىلىنىدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `name` | string | ھەئە | تىزىملىك نامى، مەسىلەن `Primary Navigation` |
| `location` | string | ياق | بۇ تىزىملىكنى تەقسىملەيدىغان theme ئورنى، مەسىلەن `primary` |

**قايتۇرىدۇ** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

تىزىملىكنىڭ نامىنى ئۆزگەرتىدۇ ياكى ئۇنى theme ئورنىغا قايتا تەقسىملەيدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈرى | تەلەپ قىلىنىدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `menu_id` | integer | ھەئە | يېڭىلىنىدىغان تىزىملىكنىڭ ID سى |
| `name` | string | ياق | يېڭى تىزىملىك نامى |
| `location` | string | ياق | تەقسىملەيدىغان ياكى قايتا تەقسىملەيدىغان theme ئورنى |

**قايتۇرىدۇ** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

مەۋجۇت يولباشلاش تىزىملىكىگە بىر تۈر قوشىدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈرى | تەلەپ قىلىنىدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `menu_id` | integer | ھەئە | نىشان تىزىملىكنىڭ ID سى |
| `type` | string | ھەئە | تۈر تىپى: `custom`, `post_type` ياكى `taxonomy` |
| `title` | string | ياق | تىزىملىك تۈرىنىڭ بەلگىسى (`custom` تىپى ئۈچۈن تەلەپ قىلىنىدۇ) |
| `url` | string | ياق | `custom` تۈرلەر ئۈچۈن URL |
| `object_id` | integer | ياق | `post_type`/`taxonomy` تۈرلىرى ئۈچۈن يازما ID ياكى term ID |
| `parent_id` | integer | ياق | بۇ تۈرنى ئاستىغا كىرگۈزىدىغان تىزىملىك تۈرى ID سى |
| `position` | integer | ياق | تىزىملىكتىكى نۆلدىن باشلىنىدىغان ئورۇن |

**قايتۇرىدۇ** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

يولباشلاش تىزىملىكىدىن بىر تۈرنى ئۆچۈرىدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈرى | تەلەپ قىلىنىدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `item_id` | integer | ھەئە | ئۆچۈرۈلىدىغان تىزىملىك تۈرى ID سى |

**قايتۇرىدۇ** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

بارلىق WordPress يولباشلاش تىزىملىكلىرىنى، جۈملىدىن ئۇلارغا تەقسىملەنگەن theme ئورۇنلىرىنى تىزىدۇ.

**پارامېتىرلار** — يوق

**قايتۇرىدۇ**

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

## تاللانمىلارنى باشقۇرۇش

تاللانما ئىقتىدارلىرى `get_option` / `update_option` ئارقىلىق WordPress تاللانمىلىرىنى ئوقۇيدۇ ۋە يازىدۇ. ئىچىگە قۇرۇلغان بىخەتەرلىك blocklist مۇھىم تەڭشەكلەرنىڭ تاسادىپىي ئۆزگەرتىلىشىنىڭ ئالدىنى ئالىدۇ.

### `get_option`

WordPress تاللانمىسىنى ئوقۇيدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈرى | تەلەپ قىلىنىدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `option_name` | string | ھەئە | تاللانما ئاچقۇچى، مەسىلەن `blogname` |

**قايتۇرىدۇ** `{ "option_name": "blogname", "value": "My Site" }`

ئەگەر `option_name` بىخەتەرلىك blocklist ئىچىدە بولسا خاتالىق قايتۇرىدۇ.

---

### `set_option`

WordPress تاللانمىسىنى يازىدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈرى | تەلەپ قىلىنىدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `option_name` | string | ھەئە | تاللانما ئاچقۇچى |
| `value` | any | ھەئە | يېڭى قىممەت (array/ئوبېيكتلار ئۈچۈن ئاپتوماتىك serialise قىلىنىدۇ) |
| `autoload` | string | ياق | `"yes"` ياكى `"no"`. كۆڭۈلدىكىسى مەۋجۇت autoload تەڭشىكىنى ساقلاپ قالىدۇ |

ئەگەر `option_name` بىخەتەرلىك blocklist ئىچىدە بولسا خاتالىق قايتۇرىدۇ.

**قايتۇرىدۇ** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

بىر WordPress تاللانمىسىنى ئۆچۈرىدۇ.

**پارامېتىرلار**

| پارامېتىر | تىپى | زۆرۈر | چۈشەندۈرۈش |
|---|---|---|---|
| `option_name` | string | ھەئە | ئۆچۈرۈلىدىغان تاللانما ئاچقۇچى |

ئەگەر `option_name` بىخەتەرلىك blocklist ئىچىدە بولسا خاتالىق قايتۇرىدۇ.

**قايتۇرىدۇ** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

بىر ئەندىزىگە ماس كېلىدىغان WordPress تاللانمىلىرىنى تىزىدۇ.

**پارامېتىرلار**

| پارامېتىر | تىپى | زۆرۈر | چۈشەندۈرۈش |
|---|---|---|---|
| `pattern` | string | ياق | تاللانما ناملىرىنى سۈزۈش ئۈچۈن SQL LIKE ئەندىزىسى، مەسىلەن `gratis_%`. ئەگەر قالدۇرۇلسا بارلىق تاللانمىلارنى قايتۇرىدۇ (چوڭ سانلىق مەلۇمات ئامبارلىرىدا ئېھتىيات بىلەن ئىشلىتىڭ). |
| `limit` | integer | ياق | نەتىجىلەرنىڭ ئەڭ كۆپ سانى. كۆڭۈلدىكى `50`، ئەڭ كۆپ `500` |

**قايتۇرىدۇ**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## مەزمۇن باشقۇرۇش

مەزمۇن باشقۇرۇش ئىقتىدارلىرى WordPress يازمىلىرى ۋە بەتلىرىنى قۇرالايدۇ ۋە تەھرىرلىيەلەيدۇ. يازما ID لىرى قايتۇرۇلىدۇ، شۇڭا كۆپ ئىقتىدارلىق پىلانلاردىكى كېيىنكى قەدەملەر قۇرۇلغان مەزمۇننى كۆرسىتەلەيدۇ.

### `create_post`

يېڭى WordPress يازمىسى، بېتى ياكى خاس يازما تىپى كىرگۈزمىسىنى قۇرىدۇ.

**پارامېتىرلار**

| پارامېتىر | تىپى | زۆرۈر | چۈشەندۈرۈش |
|---|---|---|---|
| `title` | string | ھەئە | يازما ماۋزۇسى |
| `content` | string | ياق | يازما گەۋدىسى — ئاددىي تېكىست، HTML ياكى serialised block markup نى قوبۇل قىلىدۇ |
| `status` | string | ياق | `draft`، `publish`، `pending`، `private`. كۆڭۈلدىكىسى `draft` |
| `post_type` | string | ياق | يازما تىپى slug، مەسىلەن `post`، `page` ياكى ھەرقانداق تىزىملانغان CPT. كۆڭۈلدىكىسى `post` |
| `excerpt` | string | ياق | ئارخىپلار ۋە ئىزدەش نەتىجىلىرىدە كۆرسىتىلىدىغان قىسقا خۇلاسە |
| `categories` | array | ياق | تەقسىملەيدىغان سەھىپە ناملىرى ياكى ID لىرىنىڭ تىزىقى |
| `tags` | array | ياق | تەقسىملەيدىغان بەلگە ناملىرى ياكى ID لىرىنىڭ تىزىقى |
| `author` | integer | ياق | يازما ئاپتورى قىلىپ بەلگىلەيدىغان WordPress ئىشلەتكۈچى ID سى. كۆڭۈلدىكىسى نۆۋەتتىكى ئىشلەتكۈچى |
| `date` | string | ياق | ISO 8601 فورماتىدىكى ئېلان قىلىش ۋاقتى، مەسىلەن `2026-05-01T09:00:00` |
| `page_template` | string | ياق | بۇ يازما ياكى بەتكە تەقسىملەيدىغان قېلىپ ھۆججىتى، مەسىلەن `page-full-width.php`. پەقەت `post_type` `page` بولغاندا ياكى بەت قېلىپلىرىنى قوللايدىغان CPT بولغاندا ئەھمىيەتلىك. |

**مىسال**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**قايتۇرىدۇ** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

مەۋجۇت WordPress يازمىسى ياكى بېتىنى يېڭىلايدۇ.

**پارامېتىرلار**

| پارامېتىر | تىپى | زۆرۈر | چۈشەندۈرۈش |
|---|---|---|---|
| `post_id` | integer | ھەئە | يېڭىلىنىدىغان يازمىنىڭ ID سى |
| `title` | string | ياق | يېڭى يازما ماۋزۇسى |
| `content` | string | ياق | يېڭى يازما گەۋدىسى |
| `status` | string | ياق | يېڭى ھالەت: `draft`، `publish`، `pending`، `private` |
| `excerpt` | string | ياق | يېڭى ئۈزۈندە |
| `categories` | array | ياق | تولۇق سەھىپە تىزىقىنى بۇ نام ياكى ID لار تىزىقى بىلەن ئالماشتۇرۇڭ |
| `tags` | array | ياق | تولۇق بەلگە تىزىقىنى بۇ نام ياكى ID لار تىزىقى بىلەن ئالماشتۇرۇڭ |
| `page_template` | string | ياق | بۇ يازما ياكى بەتكە تەقسىملەيدىغان يېڭى قېلىپ ھۆججىتى، مەسىلەن `page-full-width.php`. قېلىپ تەقسىملەشنى چىقىرىۋېتىپ theme نىڭ كۆڭۈلدىكىسىگە قايتۇرۇش ئۈچۈن بوش ھەرپ تىزىقى يوللاڭ. |

**مىسال** — قۇرۇلغاندىن كېيىن قېلىپنى ئۆزگەرتىش

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**قايتۇرىدۇ** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

بىرلا ئىقتىدار چاقىرىقىدا كۆپ يازما قۇرىدۇ، site قۇرۇش ياكى توپ مەزمۇن ئەكىرىش جەريانىدىكى قايتا-قايتا بېرىپ-كېلىشلەرنى ئازايتىدۇ. يازمىلار تەرتىپ بويىچە قۇرۇلىدۇ؛ ئەگەر بىرى مەغلۇپ بولسا باشقىلىرى داۋاملىشىدۇ ۋە مەغلۇبىيەت نەتىجىلەر تىزىقىدا دوكلات قىلىنىدۇ.

**پارامېتىرلار**

| پارامېتىر | تىپى | زۆرۈر | چۈشەندۈرۈش |
|---|---|---|---|
| `posts` | array | ھەئە | يازما ئوبيېكتلىرىنىڭ تىزىقى، ھەر بىرى `create_post` بىلەن ئوخشاش پارامېتىرلارنى قوبۇل قىلىدۇ |
| `stop_on_error` | boolean | ياق | ئەگەر `true` بولسا، تۇنجى مەغلۇبىيەتتىن كېيىن بىر تەرەپ قىلىشنى توختىتىدۇ. كۆڭۈلدىكىسى `false` |

**مىسال**

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

**قايتۇرىدۇ**

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

مەۋجۇت يازما ياكى بەتكە گەۋدىلىك سۈرەت (يازما كىچىك سۈرىتى) تەقسىملەيدۇ. مەۋجۇت Media Library قوشۇمچە ھۆججەت ID سى ياكى يىراقتىكى سۈرەت URL نى قوبۇل قىلىدۇ؛ URL تەمىنلەنگەندە، سۈرەت ئاپتوماتىك چۈشۈرۈلۈپ ئەكىرىلىدۇ.

**پارامېتىرلار**

| پارامېتىر | تىپى | زۆرۈر | چۈشەندۈرۈش |
|---|---|---|---|
| `post_id` | integer | ھەئە | يېڭىلىنىدىغان يازما ياكى بەتنىڭ ID سى |
| `attachment_id` | integer | ياق | مەۋجۇت Media Library قوشۇمچە ھۆججىتىنىڭ ID سى |
| `url` | string | ياق | ئەكىرىپ گەۋدىلىك سۈرەت قىلىپ بەلگىلەيدىغان يىراقتىكى سۈرەت URL |
| `alt_text` | string | ياق | ئەگەر ئۇ URL دىن ئەكىرىلگەن بولسا، قوشۇمچە ھۆججەتكە قوللىنىدىغان Alt تېكىستى |

`attachment_id` ياكى `url` نىڭ بىرى تەمىنلىنىشى كېرەك.

**قايتۇرىدۇ** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

ئاكتىپ form plugin ئارقىلىق ئالاقە جەدۋىلى قۇرىدۇ (ئورنىتىلغانلىرىغا قاراپ Contact Form 7، WPForms، Fluent Forms ياكى Gravity Forms). ھەرقانداق يازما ياكى بەتكە قىستۇرغىلى بولىدىغان shortcode قايتۇرىدۇ.

**پارامېتىرلار**

| پارامېتىر | تىپ | زۆرۈر | چۈشەندۈرۈش |
|---|---|---|---|
| `title` | string | ھەئە | فورما plugin باشقۇرۇش بېتىدە كۆرسىتىلىدىغان فورما نامى |
| `fields` | array | ھەئە | فورما بۆلەكلىرىنىڭ تەرتىپلەنگەن تىزىملىكى (تۆۋەندىكى بۆلەك ئوبيېكتىغا قاراڭ) |
| `recipient` | string | ياق | يوللانمىلارنى قوبۇل قىلىدىغان ئېلخەت ئادرېسى. كۆڭۈلدىكىسى WordPress باشقۇرغۇچى ئېلخەت ئادرېسى |
| `subject` | string | ياق | ئېلخەت تېما قۇرى. Contact Form 7 ئىشلىتىلگەندە `[your-name]` ۋە `[your-subject]` ئورۇن تۇتقۇچلىرىنى قوللايدۇ |
| `confirmation_message` | string | ياق | مۇۋەپپەقىيەتلىك يوللانغاندىن كېيىن كۆرسىتىلىدىغان ئۇچۇر. كۆڭۈلدىكىسى: `"Thank you for your message. We'll be in touch soon."` |

**بۆلەك ئوبيېكتى**

| ئاچقۇچ | تىپ | زۆرۈر | چۈشەندۈرۈش |
|---|---|---|---|
| `name` | string | ھەئە | ئىچكى بۆلەك نامى / ماشىنا ئاچقۇچى |
| `label` | string | ھەئە | فورمىدا كۆرسىتىلىدىغان ئىنسان ئوقۇيالايدىغان بەلگە |
| `type` | string | ھەئە | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | ياق | يوللاشتىن بۇرۇن بۇ بۆلەك چوقۇم تولدۇرۇلۇشى كېرەكمۇ-يوق. كۆڭۈلدىكىسى `false` |
| `options` | array | ياق | `select`, `checkbox` ۋە `radio` بۆلەكلىرىنىڭ تاللانمىلىرى |
| `placeholder` | string | ياق | تېكىست تىپىدىكى كىرگۈزۈش بۆلەكلىرى ئۈچۈن ئورۇن تۇتقۇچ تېكىست |

**مىسال**

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

**قايتۇرىدۇ**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## كۆرۈنمە تەكشۈرۈش

كۆرۈنمە تەكشۈرۈش ئىقتىدارلىرى agent غا ھەقىقىي بەتلەرنىڭ ئېكران سۈرىتىنى تۇتۇپ ئۇلارنى تەھلىل قىلىش ئىمكانىنى بېرىدۇ؛ بۇ ھېچقانداق توركۆرگۈچ كېڭەيتمىسىنى تەلەپ قىلماي، ئاپتوماتىك لايىھە تەكشۈرۈشى، ئالدىن/كېيىن سېلىشتۇرۇشلىرى ۋە كۆرۈنمە regression تەكشۈرۈشلىرىنى مۇمكىن قىلىدۇ.

### `capture_screenshot`

مۇلازىمېتىر تەرەپتىكى headless توركۆرگۈچ ئارقىلىق بېرىلگەن URL دىكى WordPress بېتىنىڭ ئېكران سۈرىتىنى تۇتىدۇ. سۈرەت Media Library غا ساقلىنىدۇ ۋە CDN URL قايتۇرۇلىدۇ.

**پارامېتىرلار**

| پارامېتىر | تىپ | زۆرۈر | چۈشەندۈرۈش |
|---|---|---|---|
| `url` | string | ھەئە | ئېكران سۈرىتى تۇتۇلىدىغان بەتنىڭ تولۇق URL ى، مەسىلەن `https://example.com/about/` |
| `width` | integer | ياق | Viewport كەڭلىكى، پىكسېل بويىچە. كۆڭۈلدىكىسى `1280` |
| `height` | integer | ياق | Viewport ئېگىزلىكى، پىكسېل بويىچە. كۆڭۈلدىكىسى `800` |
| `full_page` | boolean | ياق | پەقەت viewport نىڭ ئورنىغا پۈتۈن سىيرىلىدىغان بەتنى تۇتۇش. كۆڭۈلدىكىسى `false` |
| `delay_ms` | integer | ياق | بەت يۈكلەنگەندىن كېيىن تۇتۇشتىن بۇرۇن كۈتۈلىدىغان مىللىسېكۇنت، ھەرىكەتلىك مەزمۇن ئۈچۈن پايدىلىق. كۆڭۈلدىكىسى `500` |
| `label` | string | ياق | Media Library دىكى قوشۇمچە ھۆججەت بىلەن بىللە ساقلىنىدىغان ئىنسان ئوقۇيالايدىغان بەلگە |

**قايتۇرىدۇ**

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

ئىككى ئېكران سۈرىتىنى ئېلىپ، ئۆزگەرگەن رايونلارنى گەۋدىلەندۈرىدىغان پەرق سۈرىتى بىلەن قوشۇپ كۆرۈنمە پەرق نومۇرىنى قايتۇرىدۇ. لايىھە ئۆزگەرتىشىنىڭ كۈتۈلگەن نەتىجىنى بەرگەنلىكىنى جەزملەشتۈرۈش ياكى كۈتۈلمىگەن regression لارنى بايقاش ئۈچۈن پايدىلىق.

**پارامېتىرلار**

| پارامېتىر | تىپ | زۆرۈر | چۈشەندۈرۈش |
|---|---|---|---|
| `before_url` | string | ھەئە | "ئالدىن" ھالىتى سۈپىتىدە تۇتۇلىدىغان بەتنىڭ URL ى |
| `after_url` | string | ھەئە | "كېيىن" ھالىتى سۈپىتىدە تۇتۇلىدىغان بەتنىڭ URL ى. ۋاقىت بويىچە سېلىشتۇرغاندا ئوخشاش URL بولۇشى مۇمكىن |
| `width` | integer | ياق | ھەر ئىككى تۇتۇش ئۈچۈن viewport كەڭلىكى. كۆڭۈلدىكىسى `1280` |
| `threshold` | float | ياق | پىكسېل پەرقى بوسۇغىسى (0.0–1.0). بۇ چىدام دائىرىسىدىكى پىكسېللار ئۆزگەرمىگەن دەپ قارىلىدۇ. كۆڭۈلدىكىسى `0.1` |

**قايتۇرىدۇ**

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

`diff_score` نىڭ `0.0` بولۇشى كۆرۈنەرلىك ئۆزگىرىش يوق دېگەنلىك؛ `1.0` بولۇشى ھەر بىر پىكسېل ئۆزگەرگەن دېگەنلىك.

---

### `review_page_design`

بىر بەتنىڭ ئېكران سۈرىتىنى تۇتۇپ، كۆرۈنمە تەھلىل ئۈچۈن ئۇنى تىل مودېلىغا ئەۋەتىدۇ. ئورۇنلاشتۇرۇش، خەت شەكلى، رەڭ ئىشلىتىش ۋە زىيارەتچانلىق مەسىلىلىرىنى ئۆز ئىچىگە ئالغان قۇرۇلمىلىق باھالاشنى قايتۇرىدۇ.

**پارامېتىرلار**

| پارامېتىر | تىپ | زۆرۈر | چۈشەندۈرۈش |
|---|---|---|---|
| `url` | string | ھەئە | تەكشۈرۈلىدىغان بەتنىڭ تولۇق URL ى |
| `focus` | string | ياق | تەكىتلىنىدىغان تەكشۈرۈش ساھەلىرىنىڭ پەش بىلەن ئايرىلغان تىزىملىكى: `layout`, `typography`, `colour`, `accessibility`, `mobile`. كۆڭۈلدىكىسى: بارلىق ساھەلەر |
| `width` | integer | ياق | Viewport كەڭلىكى. كۆڭۈلدىكىسى `1280` |

**قايتۇرىدۇ**

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

## ئورنىتىلىدىغان ئىقتىدارلار

ئورنىتىلىدىغان ئىقتىدارلار تىزىملاش ئامبىرى agent نى WordPress plugin سۈپىتىدە تارقىتىلىدىغان قوشۇمچە ئىقتىدار بولاقلىرى بىلەن كېڭەيتىشىڭىزگە يول قويىدۇ. ھەر بىر بولاق ئۆلچەملىك ئىقتىدار API ئارقىلىق بىر ياكى بىرنەچچە ئىقتىدارنى تىزىملايدۇ.

### `list_available_abilities`

تىزىملاش ئامبىرىدىن ئورنىتىشقا بولىدىغان ئىقتىدار بولاقلىرىنىڭ كاتالوگىنى قايتۇرىدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈرى | تەلەپ قىلىنامدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `category` | string | ياق | تۈر بويىچە سۈزۈش: `ecommerce`, `seo`, `media`, `social`, `developer` |

**قايتۇرىدۇ**

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

تىزىملىكتىن ئىقتىدار بولىقىنى چۈشۈرۈپ ئاكتىپلايدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈرى | تەلەپ قىلىنامدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `slug` | string | ھەئە | ئىقتىدار بولىقى قىستۇرمىسىنىڭ slugى |

**قايتۇرىدۇ** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

تەسۋىرلەنگەن ئىشلىتىش ھالىتىگە ئەڭ مۇۋاپىق قىستۇرمىنى تېپىش ئۈچۈن ئىقتىدار تىزىملىكىدىن سورايدۇ ۋە ئىختىيارىي ھالدا ئۇنى ئورنىتىدۇ.

**پارامېتىرلار**

| پارامېتىر | تۈرى | تەلەپ قىلىنامدۇ | چۈشەندۈرۈش |
|---|---|---|---|
| `description` | string | ھەئە | لازىملىق ئىقتىدارنىڭ تەبىئىي تىلدىكى چۈشەندۈرۈشى |
| `install` | boolean | ياق | ئەگەر `true` بولسا، تەۋسىيە قىلىنغان قىستۇرمىنى دەرھال ئورنىتىدۇ. سۈكۈتتىكىسى `false` |

**مىسال**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**قايتۇرىدۇ**

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
