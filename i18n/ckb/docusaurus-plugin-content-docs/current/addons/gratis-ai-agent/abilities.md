---
title: بەڵگەنامەی تواناکان
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# سەرچاوەی تواناکان

تواناکان کردارە ئەتۆمییەکانن کە Gratis AI Agent دەتوانێت لەسەر دامەزراندنی WordPress ـەکەت بانگیان بکات. هەر توانایەک پۆلێکی تۆمارکراوی PHP ـە کە سکیمای JSON پیشان دەدات — بریکارەکە ئەم سکیمایە لە کاتی جێبەجێکردندا دەخوێنێتەوە بۆ ئەوەی تێبگات کام پارامەتەرەکان پێویستن و تواناکە چی دەگەڕێنێتەوە.

ئەم پەڕەیە هەموو تواناکانی هاوپێچکراو لەگەڵ Gratis AI Agent v1.9.0 بەڵگەدەکات.

---

## جۆرە پۆستە دەستکردەکان

ئەم توانایانە جۆرە پۆستە دەستکردەکان (CPTs) بەڕێوەدەبەن کە لە ڕێگەی بریکارەکەوە تۆمارکراون. تۆمارکردنەکان لە خشتەی هەڵبژاردنەکانی WordPress هەڵدەگیرێن بۆ ئەوەی دوای ناچالاککردن و چالاککردنەوەی plugin بمێننەوە.

### `register_post_type`

جۆرێکی نوێی پۆستی دەستکرد تۆمار دەکات.

**پارامەتەرەکان**

| پارامەتەر | جۆر | پێویستە | وەسف |
|---|---|---|---|
| `slug` | string | بەڵێ | کلیلی جۆری پۆستەکە (زۆرترین ٢٠ پیت، بێ پیتی گەورە، بێ بۆشایی) |
| `singular_label` | string | بەڵێ | ناوی تاکی خوێندراو بۆ مرۆڤ، بۆ نموونە `Portfolio Item` |
| `plural_label` | string | بەڵێ | ناوی کۆی خوێندراو بۆ مرۆڤ، بۆ نموونە `Portfolio Items` |
| `public` | boolean | نەخێر | ئایا جۆری پۆستەکە بە گشتی دەستپێگەیشتووە. بنەڕەت `true` |
| `supports` | array | نەخێر | تایبەتمەندییەکانی پشتگیریکردن: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. بنەڕەت `["title","editor"]` |
| `has_archive` | boolean | نەخێر | ئایا پەڕەی ئەرشیفی جۆری پۆست چالاککراوە. بنەڕەت `false` |
| `menu_icon` | string | نەخێر | پۆلی Dashicons یان URL بۆ ئایکۆنی مێنیوی بەڕێوەبەر. بنەڕەت `"dashicons-admin-post"` |
| `rewrite_slug` | string | نەخێر | slug ـی URL بۆ جۆری پۆستەکە. بە شێوەی بنەڕەت دەبێتە `slug` |

**نموونە**

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

**دەگەڕێنێتەوە** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

هەموو جۆرە پۆستە دەستکردەکان دەگەڕێنێتەوە کە لەلایەن بریکارەکەوە تۆمارکراون.

**پارامەتەرەکان** — هیچ

**دەگەڕێنێتەوە**

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

جۆرێکی پۆستی دەستکرد کە پێشتر لەلایەن بریکارەکەوە تۆمارکراوە نا-تۆمار دەکات. پۆستە هەبووەکانی ئەو جۆرە لە بنکەدراوەکەدا دەمێننەوە بەڵام چیتر لە ڕێگەی جۆری پۆستەکەوە دەستپێگەیشتوو نین.

**پارامەتەرەکان**

| پارامەتەر | جۆر | پێویستە | وەسف |
|---|---|---|---|
| `slug` | string | بەڵێ | کلیلی جۆری پۆست کە دەبێت بسڕدرێتەوە |

**دەگەڕێنێتەوە** `{ "success": true, "slug": "portfolio" }`

---

## پۆلێنکارییە دەستکردەکان

ئەم توانایانە پۆلێنکارییە دەستکردەکان بەڕێوەدەبەن. وەک CPTs، تۆمارکردنەکانی پۆلێنکاریش هەڵدەگیرێن.

### `register_taxonomy`

پۆلێنکارییەکی دەستکردی نوێ تۆمار دەکات.

**پارامەتەرەکان**

| پارامەتەر | جۆر | پێویستە | وەسف |
|---|---|---|---|
| `slug` | string | بەڵێ | کلیلی پۆلێنکارییەکە (زۆرترین ٣٢ پیت) |
| `singular_label` | string | بەڵێ | ناوی تاکی خوێندراو بۆ مرۆڤ، بۆ نموونە `Project Category` |
| `plural_label` | string | بەڵێ | ناوی کۆی خوێندراو بۆ مرۆڤ، بۆ نموونە `Project Categories` |
| `post_types` | array | بەڵێ | slug ـەکانی جۆری پۆست کە ئەم پۆلێنکارییە دەبێت پێیانەوە ببەسترێت |
| `hierarchical` | boolean | نەخێر | `true` بۆ شێوازی هاوشێوەی هاوپۆل، `false` بۆ شێوازی تاگ. بنەڕەت `true` |
| `public` | boolean | نەخێر | ئایا زاراوەکان بە گشتی دەستپێگەیشتوون. بنەڕەت `true` |
| `rewrite_slug` | string | نەخێر | slug ـی URL بۆ پۆلێنکارییەکە. بە شێوەی بنەڕەت دەبێتە `slug` |

**نموونە**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**دەگەڕێنێتەوە** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

هەموو پۆلێنکارییە دەستکردەکان دەگەڕێنێتەوە کە لەلایەن بریکارەکەوە تۆمارکراون.

**پارامەتەرەکان** — هیچ

**دەگەڕێنێتەوە**

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

پۆلێنکارییەکی دەستکرد کە پێشتر لەلایەن بریکارەکەوە تۆمارکراوە نا-تۆمار دەکات.

**پارامەتەرەکان**

| پارامەتەر | جۆر | پێویستە | وەسف |
|---|---|---|---|
| `slug` | string | بەڵێ | کلیلی پۆلێنکارییەکە کە دەبێت بسڕدرێتەوە |

**دەگەڕێنێتەوە** `{ "success": true, "slug": "project-category" }`

---

## سیستەمی دیزاین

تواناکانی سیستەمی دیزاین دەرکەوتنی بینراوی ماڵپەڕی WordPress دەگۆڕن — لە CSS ـی دەستکردەوە تا نەخشەی بلۆک و لۆگۆی ماڵپەڕ.

### `inject_custom_css`

CSS دەخاتە کۆتایی `<head>` ـی ماڵپەڕەکە لە ڕێگەی `wp_add_inline_style`. CSS لە هەڵبژاردنی `gratis_ai_agent_custom_css` هەڵدەگیرێت و کاتێک تواناکە ڕیسێت دەکرێت بە پاکی لە ڕیز دەردەهێنرێت.

**پارامەتەرەکان**

| پارامەتەر | جۆر | پێویستە | وەسف |
|---|---|---|---|
| `css` | string | بەڵێ | CSS ـی دروست بۆ تێخستن |
| `label` | string | نەخێر | پێناسەی خوێندراو بۆ مرۆڤ بۆ ئەم بلۆکی CSS ـە، لە تۆمارەکانی هەڵەدۆزیدا بەکاردێت. بنەڕەت `"agent-injected"` |
| `replace` | boolean | نەخێر | ئەگەر `true` بێت، هەموو CSS ـی پێشتر تێخراو جێگۆڕێ دەکات. بنەڕەت `false` (زیاد دەکاتە کۆتایی) |

**نموونە**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**دەگەڕێنێتەوە** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

نەخشەیەکی بلۆکی دووبارەبەکارهێنراو لە کتێبخانەی نەخشەی WordPress تۆمار دەکات.

**پارامەتەرەکان**

| پارامەتەر | جۆر | پێویستە | وەسف |
|---|---|---|---|
| `slug` | string | بەڵێ | ناسێنەری نەخشە، بۆ نموونە `gratis/hero-dark` |
| `title` | string | بەڵێ | ناوی نەخشەی خوێندراو بۆ مرۆڤ کە لە دەستکاریکەردا پیشان دەدرێت |
| `content` | string | بەڵێ | نیشانەکردنی بلۆکی زنجیرکراو (HTML) بۆ نەخشەکە |
| `categories` | array | نەخێر | slug ـەکانی هاوپۆلی نەخشە، بۆ نموونە `["featured", "hero"]` |
| `description` | string | نەخێر | وەسفی کورتی پیشاندراو لە هەڵبژێری نەخشە |
| `keywords` | array | نەخێر | وشە سەرەکییەکانی گەڕان |

**دەگەڕێنێتەوە** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

هەموو نەخشە بلۆکەکان لیست دەکات کە لەلایەن بریکارەکەوە تۆمارکراون.

**پارامەتەرەکان** — هیچ

**دەگەڕێنێتەوە**

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

لۆگۆی ماڵپەڕی WordPress بۆ ID ـی پاشکۆیەکی دیاریکراو یان URL ـی وێنەیەکی دوور دادەنێت. کاتێک URL دابین دەکرێت، وێنەکە دادەگیرێت و دەخرێتە ناو Media Library.

**پارامێتەرەکان**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | ID ـی پاشکۆیەکی هەبووی Media Library |
| `url` | string | No | URL ـی وێنەی دوور بۆ هاوردەکردن و دانان وەک لۆگۆ |

دەبێت یەکێک لە `attachment_id` یان `url` دابین بکرێت.

**دەگەڕێنێتەوە** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

پڕیسێتێکی ناوداری ڕەنگ/تایپۆگرافی جێبەجێ دەکات بۆ `theme.json` ـی ڕووکاری چالاک (یان `global-styles`). پڕیسێتەکان کۆمەڵەی هەڵبژێردراون کە لەلایەن تیمی Gratis AI Agent ـەوە بەڕێوە دەبرێن.

**پارامێتەرەکان**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | ناوی پڕیسێت، بۆ نموونە `minimal-dark`، `warm-editorial`، `corporate-blue` |
| `merge` | boolean | No | ئەگەر `true` بێت، لەگەڵ بەها هەبووەکان تێکەڵی دەکات نەک جێگرتنەوە. بنەڕەت `false` ـە |

**پڕیسێتە بەردەستەکان**

| Preset | Description |
|---|---|
| `minimal-dark` | پاشبنەمای نزیک بە ڕەش، دەقی سپی، یەک ڕەنگی جەختکردنەوە |
| `warm-editorial` | پاشبنەمای سپیی گەرم، سەردێڕی serif، ڕەنگەکانی جەختکردنەوەی خاکی |
| `corporate-blue` | پالێتی شینێکی تۆخ و سپی لەگەڵ تایپۆگرافیی پیشەیی |
| `vibrant-startup` | گرادیێنتی گەش، گۆشەی خڕ، جۆری نوێی sans-serif |
| `classic-blog` | خۆڵەمێشییە بێلایەنەکان، بەرزی هێڵی ئاسوودە، مەودای نەخشەی کڵاسیک |

**دەگەڕێنێتەوە** `{ "success": true, "preset": "minimal-dark" }`

---

## ستایلە گشتییەکان

تواناکانی ستایلە گشتییەکان بەهاکانی theme.json دەخوێننەوە و دەنووسن لە ڕێگەی WordPress Global Styles API ـەوە، کاریگەرییان لەسەر هەموو بلۆکەکان و قاڵبەکان لەسەرتاسەری ماڵپەڕ دەبێت.

### `get_global_styles`

ڕێکخستنی ئێستای ستایلە گشتییەکان دەگەڕێنێتەوە.

**پارامێتەرەکان**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | ئاماژەکەری JSON بۆ بەهایەکی دیاریکراو، بۆ نموونە `/color/palette` یان `/typography/fontSizes`. ئەگەر وازلێبهێنرێت، هەموو ئۆبجێکتەکە دەگەڕێنێتەوە. |

**دەگەڕێنێتەوە** ئۆبجێکتی تەواوی ستایلە گشتییەکان یان ئەو بەهایەی لە `path` ـدایە.

---

### `set_global_styles`

یەک یان چەند بەها لە ڕێکخستنی ستایلە گشتییەکان نوێ دەکاتەوە.

**پارامێتەرەکان**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Yes | ئاماژەکەری JSON بۆ ئەو بەهایەی دادەنرێت، بۆ نموونە `/color/palette` |
| `value` | any | Yes | بەهای نوێ |

**نموونە** — زیادکردنی ڕەنگێک بۆ پالێتەکە

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**دەگەڕێنێتەوە** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

هەموو گۆڕانکارییەکانی ستایلە گشتییەکان کە لەلایەن agent ـەوە جێبەجێ کراون دەگەڕێنێتەوە، بنەڕەتەکانی ڕووکار دەگەڕێنێتەوە.

**پارامێتەرەکان** — نییە

**دەگەڕێنێتەوە** `{ "success": true }`

---

## مێنیوەکانی ڕێنیشاندان

تواناکانی مێنیوی ڕێنیشاندان مێنیوەکانی nav ـی WordPress و بڕگەکانیان دروست دەکەن و بەڕێوەیان دەبەن.

### `create_menu`

مێنیویەکی نوێی ڕێنیشاندانی WordPress دروست دەکات.

**پارامێتەرەکان**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | ناوی مێنیو، بۆ نموونە `Primary Navigation` |
| `location` | string | No | شوێنی ڕووکار بۆ تەرخانکردنی ئەم مێنیوە بۆی، بۆ نموونە `primary` |

**دەگەڕێنێتەوە** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

ناوی مێنیوێک دەگۆڕێت یان دووبارە تەرخانی دەکات بۆ شوێنی ڕووکارێک.

**پارامێتەرەکان**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID ـی ئەو مێنیوەی نوێ دەکرێتەوە |
| `name` | string | No | ناوی نوێی مێنیو |
| `location` | string | No | شوێنی ڕووکار بۆ تەرخانکردن یان دووبارە تەرخانکردن |

**دەگەڕێنێتەوە** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

بڕگەیەک زیاد دەکات بۆ مێنیویەکی ڕێنیشاندانی هەبوو.

**پارامێتەرەکان**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID ـی مێنیوی ئامانج |
| `type` | string | Yes | جۆری بڕگە: `custom`، `post_type`، یان `taxonomy` |
| `title` | string | No | پێناسەی بڕگەی مێنیو (پێویستە بۆ جۆری `custom`) |
| `url` | string | No | URL بۆ بڕگەکانی `custom` |
| `object_id` | integer | No | ID ـی بابەت یان ID ـی زاراوە بۆ بڕگەکانی `post_type`/`taxonomy` |
| `parent_id` | integer | No | ID ـی بڕگەی مێنیو بۆ دانانی ئەم بڕگەیە لە ژێریدا |
| `position` | integer | No | شوێنی سەرەتایی بە سفر لە مێنیوەکەدا |

**دەگەڕێنێتەوە** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

بڕگەیەک لە مێنیوی ڕێنیشاندان لادەبات.

**پارامێتەرەکان**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | ID ـی بڕگەی مێنیو بۆ لابردن |

**دەگەڕێنێتەوە** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

هەموو مێنیوەکانی ڕێنیشاندانی WordPress لیست دەکات، لەگەڵ شوێنە تەرخانکراوەکانی ڕووکاریان.

**پارامێتەرەکان** — نییە

**دەگەڕێنێتەوە**

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

## بەڕێوەبردنی هەڵبژاردنەکان

تواناکانی هەڵبژاردنەکان هەڵبژاردنەکانی WordPress دەخوێننەوە و دەنووسن لە ڕێگەی `get_option` / `update_option`. لیستێکی ناوخۆییی ڕێگریی سەلامەتی ڕێ لە دەستکاریکردنی هەڵەی ڕێکخستنە گرنگەکان دەگرێت.

### `get_option`

هەڵبژاردنێکی WordPress دەخوێنێتەوە.

**پارامێتەرەکان**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | کلیلی هەڵبژاردن، بۆ نموونە `blogname` |

**دەگەڕێنێتەوە** `{ "option_name": "blogname", "value": "My Site" }`

ئەگەر `option_name` لەسەر لیستی ڕێگریی سەلامەتی بێت، هەڵەیەک دەگەڕێنێتەوە.

---

### `set_option`

هەڵبژاردنێکی WordPress دەنووسێت.

**پارامێتەرەکان**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | کلیلی هەڵبژاردن |
| `value` | any | Yes | بەهای نوێ (بە شێوەیەکی خۆکار بۆ ڕیزبەندی/ئۆبجێکتەکان serialise دەکرێت) |
| `autoload` | string | No | `"yes"` یان `"no"`. بنەڕەت ڕێکخستنی autoload ـی هەبوو دەپارێزێت |

هەڵەیەک دەگەڕێنێتەوە ئەگەر `option_name` لە safety blocklistدا بێت.

**دەگەڕێتەوە** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

هەڵبژاردەیەکی WordPress دەسڕێتەوە.

**پارامێتەرەکان**

| پارامێتەر | جۆر | پێویست | وەسف |
|---|---|---|---|
| `option_name` | string | بەڵێ | کلیلی هەڵبژاردەکە کە دەسڕدرێتەوە |

هەڵەیەک دەگەڕێنێتەوە ئەگەر `option_name` لە safety blocklistدا بێت.

**دەگەڕێتەوە** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

هەڵبژاردەکانی WordPress کە لەگەڵ شێوازێکدا دەگونجێن پێڕست دەکات.

**پارامێتەرەکان**

| پارامێتەر | جۆر | پێویست | وەسف |
|---|---|---|---|
| `pattern` | string | نەخێر | شێوازی SQL LIKE بۆ پاڵاوتنی ناوی هەڵبژاردەکان، بۆ نموونە `gratis_%`. ئەگەر دانەنرابێت هەموو هەڵبژاردەکان دەگەڕێنێتەوە (لەسەر بنکەدراوە گەورەکان بە ئاگادارییەوە بەکاریبهێنە). |
| `limit` | integer | نەخێر | زۆرترین ژمارەی ئەنجامەکان. بنەڕەت `50`، زۆرترین `500` |

**دەگەڕێتەوە**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## بەڕێوەبردنی ناوەڕۆک

تواناکانی بەڕێوەبردنی ناوەڕۆک بابەت و پەڕەکانی WordPress دروست دەکەن و دەستکارییان دەکەن. ناسنامەی بابەتەکان دەگەڕێنرێنەوە بۆ ئەوەی هەنگاوە دواترەکان لە پلانە فرە-تواناکاندا بتوانن ئاماژە بە ناوەڕۆکی دروستکراو بکەن.

### `create_post`

بابەتێکی نوێی WordPress، پەڕەیەک، یان تۆمارێکی جۆری بابەتی تایبەت دروست دەکات.

**پارامێتەرەکان**

| پارامێتەر | جۆر | پێویست | وەسف |
|---|---|---|---|
| `title` | string | بەڵێ | ناونیشانی بابەت |
| `content` | string | نەخێر | جەستەی بابەت — دەقی سادە، HTML، یان نیشانەکردنی بلۆکی زنجیرەکراو وەردەگرێت |
| `status` | string | نەخێر | `draft`, `publish`, `pending`, `private`. بنەڕەت `draft` |
| `post_type` | string | نەخێر | سلەگی جۆری بابەت، بۆ نموونە `post`، `page`، یان هەر CPTێکی تۆمارکراو. بنەڕەت `post` |
| `excerpt` | string | نەخێر | پوختەیەکی کورت کە لە ئەرشیفەکان و ئەنجامەکانی گەڕاندا پیشان دەدرێت |
| `categories` | array | نەخێر | ڕیزبەندییەک لە ناو یان ناسنامەی هاوپۆلەکان بۆ تەرخانکردن |
| `tags` | array | نەخێر | ڕیزبەندییەک لە ناو یان ناسنامەی تاگەکان بۆ تەرخانکردن |
| `author` | integer | نەخێر | ناسنامەی بەکارهێنەری WordPress بۆ دانان وەک نووسەری بابەت. بنەڕەت بۆ بەکارهێنەری ئێستا دەگەڕێتەوە |
| `date` | string | نەخێر | بەرواری بڵاوکردنەوە بە فۆرماتی ISO 8601، بۆ نموونە `2026-05-01T09:00:00` |
| `page_template` | string | نەخێر | پەڕگەی قاڵب بۆ تەرخانکردن بۆ ئەم بابەت یان پەڕەیە، بۆ نموونە `page-full-width.php`. تەنها کاتێک مانادارە کە `post_type` بریتی بێت لە `page` یان CPTێک کە پشتگیری قاڵبی پەڕە دەکات. |

**نموونە**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**دەگەڕێتەوە** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

بابەتێک یان پەڕەیەکی هەبووی WordPress نوێ دەکاتەوە.

**پارامێتەرەکان**

| پارامێتەر | جۆر | پێویست | وەسف |
|---|---|---|---|
| `post_id` | integer | بەڵێ | ناسنامەی ئەو بابەتەی نوێ دەکرێتەوە |
| `title` | string | نەخێر | ناونیشانی نوێی بابەت |
| `content` | string | نەخێر | جەستەی نوێی بابەت |
| `status` | string | نەخێر | دۆخی نوێ: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | نەخێر | پوختەی نوێ |
| `categories` | array | نەخێر | هەموو پێڕستی هاوپۆلەکان بەم ڕیزبەندییەی ناو یان ناسنامەکان بگۆڕە |
| `tags` | array | نەخێر | هەموو پێڕستی تاگەکان بەم ڕیزبەندییەی ناو یان ناسنامەکان بگۆڕە |
| `page_template` | string | نەخێر | پەڕگەی قاڵبی نوێ بۆ تەرخانکردن بۆ ئەم بابەت یان پەڕەیە، بۆ نموونە `page-full-width.php`. زنجیرەیەکی بەتاڵ بنێرە بۆ لابردنی تەرخانکردنی قاڵب و گەڕانەوە بۆ بنەڕەتی ڕووخسارەکە. |

**نموونە** — گۆڕینی قاڵب دوای دروستکردن

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**دەگەڕێتەوە** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

چەندین بابەت لە بانگکردنێکی تاکی توانادا دروست دەکات، ژمارەی هاتوچۆکان لە کاتی بنیاتنانی ماڵپەڕ یان هاوردەکردنی ناوەڕۆکی بەکۆمەڵ کەم دەکاتەوە. بابەتەکان بە زنجیرە دروست دەکرێن؛ ئەگەر یەکێکیان شکستی هێنا ئەوانی تر بەردەوام دەبن و شکستەکە لە ڕیزبەندی ئەنجامەکاندا ڕاپۆرت دەکرێت.

**پارامێتەرەکان**

| پارامێتەر | جۆر | پێویست | وەسف |
|---|---|---|---|
| `posts` | array | بەڵێ | ڕیزبەندییەک لە ئۆبجێکتی بابەت، هەر یەکەیان هەمان پارامێتەرەکانی `create_post` وەردەگرێت |
| `stop_on_error` | boolean | نەخێر | ئەگەر `true` بێت، دوای یەکەم شکست پرۆسێسکردن بوەستێنە. بنەڕەت `false` |

**نموونە**

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

**دەگەڕێتەوە**

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

وێنەیەکی تایبەت (وێنۆچکەی بابەت) بۆ بابەتێک یان پەڕەیەکی هەبوو تەرخان دەکات. ناسنامەی پاشکۆیەکی هەبووی Media Library یان URLی وێنەیەکی دوور وەردەگرێت؛ کاتێک URL پێشکەش دەکرێت، وێنەکە بە شێوەیەکی خۆکار دادەبەزێنرێت و هاوردە دەکرێت.

**پارامێتەرەکان**

| پارامێتەر | جۆر | پێویست | وەسف |
|---|---|---|---|
| `post_id` | integer | بەڵێ | ناسنامەی ئەو بابەت یان پەڕەیەی نوێ دەکرێتەوە |
| `attachment_id` | integer | نەخێر | ناسنامەی پاشکۆیەکی هەبووی Media Library |
| `url` | string | نەخێر | URLی وێنەی دوور بۆ هاوردەکردن و دانان وەک وێنەی تایبەت |
| `alt_text` | string | نەخێر | دەقی جێگرەوە بۆ جێبەجێکردن لەسەر پاشکۆکە ئەگەر لە URLێکەوە هاوردە کرابێت |

یەکێک لە `attachment_id` یان `url` دەبێت پێشکەش بکرێت.

**دەگەڕێتەوە** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

فۆڕمی پەیوەندی دروست دەکات بە بەکارهێنانی پێوەکراوی فۆڕمی چالاک (Contact Form 7، WPForms، Fluent Forms، یان Gravity Forms، بە پێی ئەوەی کامەیان دامەزرابێت). کۆدێکی کورت دەگەڕێنێتەوە کە دەتوانرێت لە هەر بابەت یان پەڕەیەکدا تێبخرێت.

**پارامێتەرەکان**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | ناوی فۆرم کە لە بەڕێوەبەری pluginی فۆرم پیشان دەدرێت |
| `fields` | array | Yes | لیستی ڕیزکراوی خانەکانی فۆرم (بڕوانە ئۆبجێکتی خانە لە خوارەوە) |
| `recipient` | string | No | ناونیشانی ئیمەیڵ بۆ وەرگرتنی ناردنەکان. بە شێوەی بنەڕەت ئیمەیڵی بەڕێوەبەری WordPress بەکاردەهێنێت |
| `subject` | string | No | دێڕی بابەتی ئیمەیڵ. پاڵپشتی شوێنگرەوەکانی `[your-name]` و `[your-subject]` دەکات کاتێک Contact Form 7 بەکاردەهێنرێت |
| `confirmation_message` | string | No | پەیامێک کە دوای ناردنێکی سەرکەوتوو پیشان دەدرێت. بنەڕەت: `"Thank you for your message. We'll be in touch soon."` |

**ئۆبجێکتی خانە**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | ناوی ناوخۆیی خانە / کلیلی ئامێر |
| `label` | string | Yes | لیبڵی مرۆڤ-خوێندراوە کە لەسەر فۆرم پیشان دەدرێت |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | ئایا پێویستە خانەکە پێش ناردن پڕ بکرێتەوە. بنەڕەت `false` |
| `options` | array | No | هەڵبژاردنەکان بۆ خانەکانی `select`، `checkbox`، و `radio` |
| `placeholder` | string | No | دەقی شوێنگرەوە بۆ داخڵکردنەکانی جۆری دەق |

**نموونە**

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

**دەگەڕێنێتەوە**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## پێداچوونەوەی بینراو

تواناکانی پێداچوونەوەی بینراو ڕێگا بە agent دەدەن وێنەی پەردە لە پەڕە زیندووەکان بگرێت و شیکارییان بکات، ئەمەش پێداچوونەوەی خۆکارانەی دیزاین، بەراوردی پێش/دوای، و پشکنینەکانی گەڕانەوەی بینراو دابین دەکات بەبێ ئەوەی هیچ browser extensionێک پێویست بێت.

### `capture_screenshot`

وێنەی پەردەی پەڕەیەکی WordPress لە URLێکی دیاریکراودا بە بەکارهێنانی headless browserی لای ڕاژەکار دەگرێت. وێنەکە لە Media Library پاشەکەوت دەکرێت و URLی CDN دەگەڕێنرێتەوە.

**پارامیتەرەکان**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URLی تەواوی پەڕەکە بۆ گرتنی وێنەی پەردە، وەک `https://example.com/about/` |
| `width` | integer | No | پانی viewport بە پیکسڵ. بنەڕەت `1280` |
| `height` | integer | No | بەرزی viewport بە پیکسڵ. بنەڕەت `800` |
| `full_page` | boolean | No | گرتنی هەموو پەڕەی scrollable لەبری تەنها viewport. بنەڕەت `false` |
| `delay_ms` | integer | No | چەند میلیچرکە چاوەڕێ بکرێت دوای باربوونی پەڕە پێش گرتن، بۆ ناوەڕۆکی جوڵاو بەسوودە. بنەڕەت `500` |
| `label` | string | No | لیبڵی مرۆڤ-خوێندراوە کە لەگەڵ هاوپێچەکە لە Media Library پاشەکەوت دەکرێت |

**دەگەڕێنێتەوە**

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

دوو وێنەی پەردە وەردەگرێت و نمرەی جیاوازییەکی بینراو لەگەڵ وێنەی جیاوازی کە ناوچە گۆڕاوەکان دیار دەکات دەگەڕێنێتەوە. بۆ پشتڕاستکردنەوەی ئەوەی گۆڕانکارییەکی دیزاین ئەنجامی چاوەڕوانکراوی بەرهەم هێناوە یان بۆ دۆزینەوەی گەڕانەوە نەخوازراوەکان بەسوودە.

**پارامیتەرەکان**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URLی پەڕەکە بۆ گرتن وەک دۆخی "پێش" |
| `after_url` | string | Yes | URLی پەڕەکە بۆ گرتن وەک دۆخی "دوای". لەوانەیە هەمان URL بێت ئەگەر بە درێژایی کات بەراورد دەکرێت |
| `width` | integer | No | پانی viewport بۆ هەردوو گرتنەکە. بنەڕەت `1280` |
| `threshold` | float | No | ئاستی جیاوازیی پیکسڵ (0.0–1.0). پیکسڵەکان لەناو ئەم لێبوردنەدا وەک نەگۆڕاو دادەنرێن. بنەڕەت `0.1` |

**دەگەڕێنێتەوە**

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

`diff_score`ی `0.0` واتە هیچ گۆڕانێکی بینراو نییە؛ `1.0` واتە هەموو پیکسڵێک گۆڕاوە.

---

### `review_page_design`

وێنەی پەردەی پەڕەیەک دەگرێت و بۆ شیکاریی بینراو دەینێرێت بۆ مۆدێلی زمان. هەڵسەنگاندنێکی پێکهاتەدار دەگەڕێنێتەوە کە داڕشتن، تایپۆگرافی، بەکارهێنانی ڕەنگ، و نیگەرانییەکانی دەستگەیشتن دەگرێتەوە.

**پارامیتەرەکان**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | URLی تەواوی پەڕەکە بۆ پێداچوونەوە |
| `focus` | string | No | لیستی بە کۆما جیاکراوەی بوارەکانی پێداچوونەوە بۆ جەختکردنەوە: `layout`, `typography`, `colour`, `accessibility`, `mobile`. بنەڕەت: هەموو بوارەکان |
| `width` | integer | No | پانی viewport. بنەڕەت `1280` |

**دەگەڕێنێتەوە**

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

## تواناکانی دامەزراندن

Installable Abilities Registry ڕێگات پێدەدات agent بە پاکێجی توانای زیادەوە فراوان بکەیت کە وەک pluginەکانی WordPress دابەش دەکرێن. هەر پاکێجێک یەک یان زیاتر توانا تۆمار دەکات بە بەکارهێنانی ability APIی ستاندارد.

### `list_available_abilities`

کاتەلۆگی پاکێجەکانی توانا کە بۆ دامەزراندن لە registry بەردەستن دەگەڕێنێتەوە.

**پارامیتەرەکان**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `category` | string | No | پاڵاوتن بەپێی هاوپۆل: `ecommerce`, `seo`, `media`, `social`, `developer` |

**دەگەڕێنێتەوە**

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

پاکێجی توانستێک لە registry دادەبەزێنێت و چالاکی دەکات.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | ناسێنەری slug ـی plugin ـی پاکێجی توانست |

**دەگەڕێنێتەوە** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

پرسیار لە registry ـی توانست دەکات بۆ دۆزینەوەی باشترین plugin بۆ کەیسی بەکارهێنانێکی وەسفکراو و، بە ئارەزوو، دایدەمەزرێنێت.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `description` | string | Yes | وەسفی زمانی سروشتی بۆ کاراییی خوازراو |
| `install` | boolean | No | ئەگەر `true` بێت، plugin ـی پێشنیارکراو دەستبەجێ دادەمەزرێنێت. بنەڕەت `false` |

**نموونە**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**دەگەڕێنێتەوە**

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
