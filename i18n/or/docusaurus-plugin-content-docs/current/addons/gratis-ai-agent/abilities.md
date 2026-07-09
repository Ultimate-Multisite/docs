---
title: କ୍ଷମତା ସନ୍ଦର୍ଭ
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# କ୍ଷମତା ସନ୍ଦର୍ଭ

କ୍ଷମତାଗୁଡ଼ିକ ହେଉଛି ସେହି ପରମାଣୁ କାର୍ଯ୍ୟ, ଯାହା Gratis AI Agent ଆପଣଙ୍କ WordPress ସ୍ଥାପନାରେ ଆହ୍ୱାନ କରିପାରେ। ପ୍ରତ୍ୟେକ କ୍ଷମତା ଏକ ପଞ୍ଜୀକୃତ PHP class, ଯାହା ଏକ JSON schema ଦେଖାଏ — agent ରନଟାଇମରେ ଏହି schema ପଢ଼ି କେଉଁ parameters ଆବଶ୍ୟକ ଏବଂ କ୍ଷମତା କଣ ଫେରାଏ ବୁଝେ।

ଏହି ପୃଷ୍ଠାରେ Gratis AI Agent v1.9.0 ସହିତ ଆସୁଥିବା ସମସ୍ତ କ୍ଷମତାର ଡକ୍ୟୁମେଣ୍ଟେସନ ରହିଛି।

---

## କଷ୍ଟମ ପୋଷ୍ଟ ପ୍ରକାର

ଏହି କ୍ଷମତାଗୁଡ଼ିକ agent ମାଧ୍ୟମରେ ପଞ୍ଜୀକୃତ କଷ୍ଟମ ପୋଷ୍ଟ ପ୍ରକାର (CPTs) ପରିଚାଳନା କରେ। ପଞ୍ଜୀକରଣଗୁଡ଼ିକ WordPress options table ରେ ସ୍ଥାୟୀ ରଖାଯାଏ, ତେଣୁ plugin ନିଷ୍କ୍ରିୟ ଓ ପୁନଃସକ୍ରିୟ ହେଲେ ମଧ୍ୟ ସେଗୁଡ଼ିକ ରହିଥାଏ।

### `register_post_type`

ଏକ ନୂତନ କଷ୍ଟମ ପୋଷ୍ଟ ପ୍ରକାର ପଞ୍ଜୀକୃତ କରେ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | ପୋଷ୍ଟ ପ୍ରକାର କୀ (ସର୍ବାଧିକ ୨୦ ଅକ୍ଷର, ବଡ଼ ଅକ୍ଷର ନୁହେଁ, ଖାଲି ସ୍ଥାନ ନୁହେଁ) |
| `singular_label` | string | Yes | ମାନବ-ପଠନୀୟ ଏକବଚନ ନାମ, ଯଥା `Portfolio Item` |
| `plural_label` | string | Yes | ମାନବ-ପଠନୀୟ ବହୁବଚନ ନାମ, ଯଥା `Portfolio Items` |
| `public` | boolean | No | ପୋଷ୍ଟ ପ୍ରକାରଟି ସାର୍ବଜନୀନ ଭାବେ ପହଞ୍ଚଯୋଗ୍ୟ କି ନୁହେଁ। ଡିଫଲ୍ଟ `true` |
| `supports` | array | No | ସମର୍ଥନ କରିବାକୁ ବିଶେଷତା: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`। ଡିଫଲ୍ଟ `["title","editor"]` |
| `has_archive` | boolean | No | ପୋଷ୍ଟ ପ୍ରକାର archive page ସକ୍ରିୟ କି ନୁହେଁ। ଡିଫଲ୍ଟ `false` |
| `menu_icon` | string | No | admin menu icon ପାଇଁ Dashicons class କିମ୍ବା URL। ଡିଫଲ୍ଟ `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | ପୋଷ୍ଟ ପ୍ରକାର ପାଇଁ URL slug। ଡିଫଲ୍ଟ `slug` |

**ଉଦାହରଣ**

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

**ଫେରାଏ** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

agent ଦ୍ୱାରା ପଞ୍ଜୀକୃତ ସମସ୍ତ କଷ୍ଟମ ପୋଷ୍ଟ ପ୍ରକାର ଫେରାଏ।

**Parameters** — କିଛି ନାହିଁ

**ଫେରାଏ**

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

agent ଦ୍ୱାରା ପୂର୍ବରୁ ପଞ୍ଜୀକୃତ ଏକ କଷ୍ଟମ ପୋଷ୍ଟ ପ୍ରକାରକୁ ଅପଞ୍ଜୀକୃତ କରେ। ସେହି ପ୍ରକାରର ଥିବା ପୋଷ୍ଟଗୁଡ଼ିକ database ରେ ରହିଥାଏ, କିନ୍ତୁ ପୋଷ୍ଟ ପ୍ରକାର ମାଧ୍ୟମରେ ଆଉ ପହଞ୍ଚଯୋଗ୍ୟ ହୁଏ ନାହିଁ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | ହଟାଇବାକୁ ଥିବା ପୋଷ୍ଟ ପ୍ରକାର କୀ |

**ଫେରାଏ** `{ "success": true, "slug": "portfolio" }`

---

## କଷ୍ଟମ ଟ୍ୟାକ୍ସୋନୋମି

ଏହି କ୍ଷମତାଗୁଡ଼ିକ କଷ୍ଟମ ଟ୍ୟାକ୍ସୋନୋମି ପରିଚାଳନା କରେ। CPTs ପରି, taxonomy ପଞ୍ଜୀକରଣଗୁଡ଼ିକ ସ୍ଥାୟୀ ରଖାଯାଏ।

### `register_taxonomy`

ଏକ ନୂତନ କଷ୍ଟମ ଟ୍ୟାକ୍ସୋନୋମି ପଞ୍ଜୀକୃତ କରେ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | taxonomy କୀ (ସର୍ବାଧିକ ୩୨ ଅକ୍ଷର) |
| `singular_label` | string | Yes | ମାନବ-ପଠନୀୟ ଏକବଚନ ନାମ, ଯଥା `Project Category` |
| `plural_label` | string | Yes | ମାନବ-ପଠନୀୟ ବହୁବଚନ ନାମ, ଯଥା `Project Categories` |
| `post_types` | array | Yes | ଏହି taxonomy ଯେଉଁ ପୋଷ୍ଟ ପ୍ରକାର slugs ସହିତ ଯୋଡ଼ିବା ଉଚିତ |
| `hierarchical` | boolean | No | category-ଶୈଳୀ ପାଇଁ `true`, tag-ଶୈଳୀ ପାଇଁ `false`। ଡିଫଲ୍ଟ `true` |
| `public` | boolean | No | terms ସାର୍ବଜନୀନ ଭାବେ ପହଞ୍ଚଯୋଗ୍ୟ କି ନୁହେଁ। ଡିଫଲ୍ଟ `true` |
| `rewrite_slug` | string | No | taxonomy ପାଇଁ URL slug। ଡିଫଲ୍ଟ `slug` |

**ଉଦାହରଣ**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**ଫେରାଏ** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

agent ଦ୍ୱାରା ପଞ୍ଜୀକୃତ ସମସ୍ତ କଷ୍ଟମ ଟ୍ୟାକ୍ସୋନୋମି ଫେରାଏ।

**Parameters** — କିଛି ନାହିଁ

**ଫେରାଏ**

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

agent ଦ୍ୱାରା ପୂର୍ବରୁ ପଞ୍ଜୀକୃତ ଏକ କଷ୍ଟମ ଟ୍ୟାକ୍ସୋନୋମିକୁ ଅପଞ୍ଜୀକୃତ କରେ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | ହଟାଇବାକୁ ଥିବା taxonomy କୀ |

**ଫେରାଏ** `{ "success": true, "slug": "project-category" }`

---

## ଡିଜାଇନ ପ୍ରଣାଳୀ

ଡିଜାଇନ ପ୍ରଣାଳୀ କ୍ଷମତାଗୁଡ଼ିକ WordPress site ର ଦୃଶ୍ୟ ପ୍ରଦର୍ଶନକୁ ବଦଳାଏ — କଷ୍ଟମ CSS ଠାରୁ block patterns ଏବଂ site logo ପର୍ଯ୍ୟନ୍ତ।

### `inject_custom_css`

`wp_add_inline_style` ମାଧ୍ୟମରେ site ର `<head>` ଭିତରେ CSS ଯୋଡ଼େ। CSS `gratis_ai_agent_custom_css` option ରେ ସଞ୍ଚୟ ହୁଏ ଏବଂ କ୍ଷମତା reset କଲେ ସଫା ଭାବରେ dequeued ହୁଏ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | ଇଞ୍ଜେକ୍ଟ କରିବାକୁ ବୈଧ CSS |
| `label` | string | No | ଏହି CSS block ପାଇଁ ମାନବ-ପଠନୀୟ label, debug logs ରେ ବ୍ୟବହୃତ। ଡିଫଲ୍ଟ `"agent-injected"` |
| `replace` | boolean | No | `true` ହେଲେ, ପୂର୍ବରୁ ଇଞ୍ଜେକ୍ଟ ହୋଇଥିବା ସମସ୍ତ CSS କୁ ବଦଳାଏ। ଡିଫଲ୍ଟ `false` (ଯୋଡ଼େ) |

**ଉଦାହରଣ**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**ଫେରାଏ** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

WordPress pattern library ରେ ଏକ ପୁନଃବ୍ୟବହାରଯୋଗ୍ୟ block pattern ପଞ୍ଜୀକୃତ କରେ।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | pattern ପରିଚୟକ, ଯଥା `gratis/hero-dark` |
| `title` | string | Yes | editor ରେ ଦେଖାଯାଉଥିବା ମାନବ-ପଠନୀୟ pattern ନାମ |
| `content` | string | Yes | pattern ପାଇଁ serialised block markup (HTML) |
| `categories` | array | No | pattern category slugs, ଯଥା `["featured", "hero"]` |
| `description` | string | No | pattern picker ରେ ଦେଖାଯାଉଥିବା ସଂକ୍ଷିପ୍ତ ବର୍ଣ୍ଣନା |
| `keywords` | array | No | ସନ୍ଧାନ keywords |

**ଫେରାଏ** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

agent ଦ୍ୱାରା ପଞ୍ଜୀକୃତ ସମସ୍ତ block patterns ତାଲିକା କରେ।

**Parameters** — କିଛି ନାହିଁ

**ଫେରାଏ**

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

ଦିଆଯାଇଥିବା attachment ID କିମ୍ବା ଦୂରସ୍ଥ ଛବି URL କୁ WordPress ସାଇଟ୍ ଲୋଗୋ ଭାବେ ସେଟ୍ କରେ। URL ଦିଆଯାଇଲେ, ଛବିଟି ଡାଉନଲୋଡ୍ ହୋଇ Media Library କୁ ଆମଦାନି ହୁଏ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `attachment_id` | integer | ନା | ଥିବା Media Library attachment ର ID |
| `url` | string | ନା | ଆମଦାନି କରି ଲୋଗୋ ଭାବେ ସେଟ୍ କରିବା ପାଇଁ ଦୂରସ୍ଥ ଛବି URL |

`attachment_id` କିମ୍ବା `url` ମଧ୍ୟରୁ ଗୋଟିଏ ଦେବା ଆବଶ୍ୟକ।

**ଫେରାଏ** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

ସକ୍ରିୟ ଥିମ୍‌ର `theme.json` (କିମ୍ବା `global-styles`) ଉପରେ ନାମିତ ରଙ୍ଗ/ଟାଇପୋଗ୍ରାଫି ପ୍ରିସେଟ୍ ପ୍ରୟୋଗ କରେ। ପ୍ରିସେଟ୍‌ଗୁଡ଼ିକ Gratis AI Agent ଟିମ୍ ରକ୍ଷଣାବେକ୍ଷଣ କରୁଥିବା ବାଛିତ ବଣ୍ଡଲ୍।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `preset` | string | ହଁ | ପ୍ରିସେଟ୍ ନାମ, ଯଥା `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | ନା | `true` ହେଲେ, ପରିବର୍ତ୍ତନ କରିବା ପରିବର୍ତ୍ତେ ଥିବା ମୂଲ୍ୟଗୁଡ଼ିକ ସହ ମିଶାନ୍ତୁ। ଡିଫଲ୍ଟ `false` |

**ଉପଲବ୍ଧ ପ୍ରିସେଟ୍‌ଗୁଡ଼ିକ**

| ପ୍ରିସେଟ୍ | ବିବରଣୀ |
|---|---|
| `minimal-dark` | ପ୍ରାୟ କଳା ପୃଷ୍ଠଭୂମି, ଧଳା ପାଠ୍ୟ, ଗୋଟିଏ ଆକର୍ଷଣ ରଙ୍ଗ |
| `warm-editorial` | ଉଷ୍ଣ ଅଫ୍-ହ୍ୱାଇଟ୍ ପୃଷ୍ଠଭୂମି, ସେରିଫ୍ ଶୀର୍ଷକ, ମାଟିଆ ଆକର୍ଷଣ ରଙ୍ଗ |
| `corporate-blue` | ପେଶାଦାର ଟାଇପୋଗ୍ରାଫି ସହ ନେଭି ଓ ଧଳା ପ୍ୟାଲେଟ୍ |
| `vibrant-startup` | ଉଜ୍ଜ୍ୱଳ ଗ୍ରାଡିଏଣ୍ଟ, ଗୋଲାକାର କୋଣ, ଆଧୁନିକ ସାନ୍ସ-ସେରିଫ୍ ଟାଇପ୍ |
| `classic-blog` | ନିରପେକ୍ଷ ଧୂସର ରଙ୍ଗ, ସୁବିଧାଜନକ ଲାଇନ୍-ଉଚ୍ଚତା, ପାରମ୍ପରିକ ଲେଆଉଟ୍ ଖାଲିସ୍ଥାନ |

**ଫେରାଏ** `{ "success": true, "preset": "minimal-dark" }`

---

## ବିଶ୍ୱବ୍ୟାପୀ ଶୈଳୀ

ବିଶ୍ୱବ୍ୟାପୀ ଶୈଳୀ କ୍ଷମତାଗୁଡ଼ିକ WordPress ବିଶ୍ୱବ୍ୟାପୀ ଶୈଳୀ ଏପିଆଇ ମାଧ୍ୟମରେ theme.json ମୂଲ୍ୟ ପଢ଼େ ଓ ଲେଖେ, ଯାହା ସାଇଟ୍ ସାରାର ସମସ୍ତ ବ୍ଲକ୍ ଓ ଟେମ୍ପ୍ଲେଟ୍‌କୁ ପ୍ରଭାବିତ କରେ।

### `get_global_styles`

ବର୍ତ୍ତମାନର ବିଶ୍ୱବ୍ୟାପୀ ଶୈଳୀ ବିନ୍ୟାସ ଫେରାଏ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `path` | string | ନା | ନିର୍ଦ୍ଦିଷ୍ଟ ମୂଲ୍ୟକୁ JSON pointer, ଯଥା `/color/palette` କିମ୍ବା `/typography/fontSizes`। ଛାଡ଼ା ଦିଆଗଲେ ସମ୍ପୂର୍ଣ୍ଣ ଅବଜେକ୍ଟ ଫେରାଏ। |

**ଫେରାଏ** ସମ୍ପୂର୍ଣ୍ଣ ବିଶ୍ୱବ୍ୟାପୀ ଶୈଳୀ ଅବଜେକ୍ଟ କିମ୍ବା `path` ରେ ଥିବା ମୂଲ୍ୟ।

---

### `set_global_styles`

ବିଶ୍ୱବ୍ୟାପୀ ଶୈଳୀ ବିନ୍ୟାସରେ ଗୋଟିଏ କିମ୍ବା ଅଧିକ ମୂଲ୍ୟ ଅଦ୍ୟତନ କରେ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `path` | string | ହଁ | ସେଟ୍ କରିବାକୁ ଥିବା ମୂଲ୍ୟ ପାଇଁ JSON pointer, ଯଥା `/color/palette` |
| `value` | any | ହଁ | ନୂଆ ମୂଲ୍ୟ |

**ଉଦାହରଣ** — ପ୍ୟାଲେଟ୍‌ରେ ଗୋଟିଏ ରଙ୍ଗ ଯୋଡ଼ନ୍ତୁ

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**ଫେରାଏ** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

agent ପ୍ରୟୋଗ କରିଥିବା ସମସ୍ତ ବିଶ୍ୱବ୍ୟାପୀ ଶୈଳୀ ପରିବର୍ତ୍ତନ ରିସେଟ୍ କରି, ଥିମ୍ ଡିଫଲ୍ଟକୁ ପୁନଃସ୍ଥାପନ କରେ।

**ପାରାମିଟରଗୁଡ଼ିକ** — କିଛି ନାହିଁ

**ଫେରାଏ** `{ "success": true }`

---

## ନାଭିଗେସନ୍ ମେନୁଗୁଡ଼ିକ

ନାଭିଗେସନ୍ ମେନୁ କ୍ଷମତାଗୁଡ଼ିକ WordPress nav menu ଓ ସେମାନଙ୍କ ଆଇଟମ୍‌ଗୁଡ଼ିକ ସୃଷ୍ଟି ଏବଂ ପରିଚାଳନା କରେ।

### `create_menu`

ନୂଆ WordPress ନାଭିଗେସନ୍ ମେନୁ ସୃଷ୍ଟି କରେ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `name` | string | ହଁ | ମେନୁ ନାମ, ଯଥା `Primary Navigation` |
| `location` | string | ନା | ଏହି ମେନୁକୁ ନିଯୁକ୍ତ କରିବା ପାଇଁ ଥିମ୍ ସ୍ଥାନ, ଯଥା `primary` |

**ଫେରାଏ** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

ମେନୁର ନାମ ବଦଳାଏ କିମ୍ବା ଏହାକୁ ଥିମ୍ ସ୍ଥାନକୁ ପୁନଃନିଯୁକ୍ତ କରେ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `menu_id` | integer | ହଁ | ଅଦ୍ୟତନ କରିବାକୁ ଥିବା ମେନୁର ID |
| `name` | string | ନା | ନୂଆ ମେନୁ ନାମ |
| `location` | string | ନା | ନିଯୁକ୍ତ କିମ୍ବା ପୁନଃନିଯୁକ୍ତ କରିବା ପାଇଁ ଥିମ୍ ସ୍ଥାନ |

**ଫେରାଏ** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

ଥିବା ନାଭିଗେସନ୍ ମେନୁରେ ଗୋଟିଏ ଆଇଟମ୍ ଯୋଡ଼େ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `menu_id` | integer | ହଁ | ଲକ୍ଷ୍ୟ ମେନୁର ID |
| `type` | string | ହଁ | ଆଇଟମ୍ ପ୍ରକାର: `custom`, `post_type`, କିମ୍ବା `taxonomy` |
| `title` | string | ନା | ମେନୁ ଆଇଟମ୍ ପାଇଁ ଲେବେଲ୍ (`custom` ପ୍ରକାର ପାଇଁ ଆବଶ୍ୟକ) |
| `url` | string | ନା | `custom` ଆଇଟମ୍‌ଗୁଡ଼ିକ ପାଇଁ URL |
| `object_id` | integer | ନା | `post_type`/`taxonomy` ଆଇଟମ୍‌ଗୁଡ଼ିକ ପାଇଁ ପୋଷ୍ଟ ID କିମ୍ବା ଟର୍ମ୍ ID |
| `parent_id` | integer | ନା | ଏହି ଆଇଟମ୍‌କୁ ଯାହା ତଳେ ନେଷ୍ଟ୍ କରିବାକୁ ହେବ ସେହି ମେନୁ ଆଇଟମ୍ ID |
| `position` | integer | ନା | ମେନୁରେ ଶୂନ୍ୟ-ଆଧାରିତ ସ୍ଥିତି |

**ଫେରାଏ** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

ନାଭିଗେସନ୍ ମେନୁରୁ ଗୋଟିଏ ଆଇଟମ୍ କାଢ଼େ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `item_id` | integer | ହଁ | କାଢ଼ିବାକୁ ଥିବା ମେନୁ ଆଇଟମ୍ ID |

**ଫେରାଏ** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

ସେମାନଙ୍କ ନିଯୁକ୍ତ ଥିମ୍ ସ୍ଥାନ ସହ ସମସ୍ତ WordPress ନାଭିଗେସନ୍ ମେନୁ ତାଲିକା କରେ।

**ପାରାମିଟରଗୁଡ଼ିକ** — କିଛି ନାହିଁ

**ଫେରାଏ**

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

## ବିକଳ୍ପ ପରିଚାଳନା

ବିକଳ୍ପ କ୍ଷମତାଗୁଡ଼ିକ `get_option` / `update_option` ମାଧ୍ୟମରେ WordPress ବିକଳ୍ପ ପଢ଼େ ଓ ଲେଖେ। ଏକ ନିର୍ମିତ ସୁରକ୍ଷା blocklist ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ସେଟିଂସ୍‌ର ଅକସ୍ମାତ ପରିବର୍ତ୍ତନକୁ ରୋକେ।

### `get_option`

ଗୋଟିଏ WordPress ବିକଳ୍ପ ପଢ଼େ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `option_name` | string | ହଁ | ବିକଳ୍ପ କୀ, ଯଥା `blogname` |

**ଫେରାଏ** `{ "option_name": "blogname", "value": "My Site" }`

`option_name` ସୁରକ୍ଷା blocklist ରେ ଥିଲେ ତ୍ରୁଟି ଫେରାଏ।

---

### `set_option`

ଗୋଟିଏ WordPress ବିକଳ୍ପ ଲେଖେ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `option_name` | string | ହଁ | ବିକଳ୍ପ କୀ |
| `value` | any | ହଁ | ନୂଆ ମୂଲ୍ୟ (ଆରେ/ଅବଜେକ୍ଟ ପାଇଁ ସ୍ୱୟଂଚାଳିତ ଭାବେ ସିରିଆଲାଇଜ୍ ହୁଏ) |
| `autoload` | string | ନା | `"yes"` କିମ୍ବା `"no"`। ଡିଫଲ୍ଟ ଥିବା autoload ସେଟିଂକୁ ରକ୍ଷା କରେ |

`option_name` ସୁରକ୍ଷା blocklist ରେ ଥିଲେ ତ୍ରୁଟି ଫେରାଏ।

**ଫେରାଏ** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

ଗୋଟିଏ WordPress option କୁ ମିଟାଏ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `option_name` | string | ହଁ | ମିଟାଇବା ପାଇଁ option key |

`option_name` ସୁରକ୍ଷା blocklist ରେ ଥିଲେ ତ୍ରୁଟି ଫେରାଏ।

**ଫେରାଏ** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

ଗୋଟିଏ pattern ସହ ମେଳ ଖାଉଥିବା WordPress options ତାଲିକା କରେ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `pattern` | string | ନା | option ନାମଗୁଡ଼ିକୁ ଛାଣିବା ପାଇଁ SQL LIKE pattern, ଯଥା `gratis_%`। ଛାଡ଼ିଦେଲେ ସମସ୍ତ options ଫେରାଏ। ବଡ଼ databases ରେ ସାବଧାନତା ସହ ବ୍ୟବହାର କରନ୍ତୁ। |
| `limit` | integer | ନା | ଫଳାଫଳର ସର୍ବାଧିକ ସଂଖ୍ୟା। Default `50`, ସର୍ବାଧିକ `500` |

**ଫେରାଏ**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## ବିଷୟବସ୍ତୁ ପରିଚାଳନା

ବିଷୟବସ୍ତୁ ପରିଚାଳନା କ୍ଷମତାଗୁଡ଼ିକ WordPress ପୋଷ୍ଟ ଓ ପୃଷ୍ଠା ସୃଷ୍ଟି ଏବଂ ସମ୍ପାଦନ କରେ। Post IDs ଫେରାଯାଏ, ଯାହାଦ୍ୱାରା multi-ability plans ର ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପଗୁଡ଼ିକ ସୃଷ୍ଟି ହୋଇଥିବା ବିଷୟବସ୍ତୁକୁ ସନ୍ଦର୍ଭ କରିପାରିବ।

### `create_post`

ନୂତନ WordPress ପୋଷ୍ଟ, ପୃଷ୍ଠା, କିମ୍ବା custom post type entry ସୃଷ୍ଟି କରେ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `title` | string | ହଁ | ପୋଷ୍ଟ ଶୀର୍ଷକ |
| `content` | string | ନା | ପୋଷ୍ଟ body — plain text, HTML, କିମ୍ବା serialised block markup ଗ୍ରହଣ କରେ |
| `status` | string | ନା | `draft`, `publish`, `pending`, `private`। Default `draft` |
| `post_type` | string | ନା | Post type slug, ଯଥା `post`, `page`, କିମ୍ବା କୌଣସି registered CPT। Default `post` |
| `excerpt` | string | ନା | archives ଏବଂ search results ରେ ଦେଖାଯାଉଥିବା ସଂକ୍ଷିପ୍ତ ସାରାଂଶ |
| `categories` | array | ନା | ନିର୍ଦ୍ଧାରଣ କରିବାକୁ category ନାମ କିମ୍ବା IDs ର array |
| `tags` | array | ନା | ନିର୍ଦ୍ଧାରଣ କରିବାକୁ tag ନାମ କିମ୍ବା IDs ର array |
| `author` | integer | ନା | ପୋଷ୍ଟ author ଭାବେ set କରିବାକୁ WordPress user ID। Default ଭାବେ current user |
| `date` | string | ନା | ISO 8601 format ରେ publish date, ଯଥା `2026-05-01T09:00:00` |
| `page_template` | string | ନା | ଏହି ପୋଷ୍ଟ କିମ୍ବା ପୃଷ୍ଠାକୁ ନିର୍ଦ୍ଧାରଣ କରିବା ପାଇଁ template file, ଯଥା `page-full-width.php`। `post_type` `page` ହେଲେ କିମ୍ବା page templates ସମର୍ଥନ କରୁଥିବା CPT ହେଲେ ମାତ୍ର ଏହା ଅର୍ଥପୂର୍ଣ୍ଣ। |

**ଉଦାହରଣ**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**ଫେରାଏ** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

ଏକ ଅବସ୍ଥିତ WordPress ପୋଷ୍ଟ କିମ୍ବା ପୃଷ୍ଠାକୁ update କରେ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `post_id` | integer | ହଁ | update କରିବାକୁ ଥିବା ପୋଷ୍ଟର ID |
| `title` | string | ନା | ନୂତନ ପୋଷ୍ଟ ଶୀର୍ଷକ |
| `content` | string | ନା | ନୂତନ ପୋଷ୍ଟ body |
| `status` | string | ନା | ନୂତନ status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | ନା | ନୂତନ excerpt |
| `categories` | array | ନା | ସମ୍ପୂର୍ଣ୍ଣ category ତାଲିକାକୁ ଏହି ନାମ କିମ୍ବା IDs ର array ସହ ବଦଳାନ୍ତୁ |
| `tags` | array | ନା | ସମ୍ପୂର୍ଣ୍ଣ tag ତାଲିକାକୁ ଏହି ନାମ କିମ୍ବା IDs ର array ସହ ବଦଳାନ୍ତୁ |
| `page_template` | string | ନା | ଏହି ପୋଷ୍ଟ କିମ୍ବା ପୃଷ୍ଠାକୁ ନିର୍ଦ୍ଧାରଣ କରିବା ପାଇଁ ନୂତନ template file, ଯଥା `page-full-width.php`। template assignment କାଢ଼ି theme default କୁ ଫେରିବା ପାଇଁ ଖାଲି string ପାସ୍ କରନ୍ତୁ। |

**ଉଦାହରଣ** — ସୃଷ୍ଟି ପରେ template ପରିବର୍ତ୍ତନ କରନ୍ତୁ

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**ଫେରାଏ** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

ଗୋଟିଏ ability call ରେ ଅନେକ ପୋଷ୍ଟ ସୃଷ୍ଟି କରେ, ଯାହା site builds କିମ୍ବା bulk content import ସମୟରେ round-trips କମାଏ। ପୋଷ୍ଟଗୁଡ଼ିକ କ୍ରମାନୁସାରେ ସୃଷ୍ଟି ହୁଏ; ଗୋଟିଏ ବିଫଳ ହେଲେ ଅନ୍ୟଗୁଡ଼ିକ ଚାଲୁ ରହେ ଏବଂ ବିଫଳତା results array ରେ ଜଣାଯାଏ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `posts` | array | ହଁ | post objects ର array, ପ୍ରତ୍ୟେକଟି `create_post` ସହ ସମାନ parameters ଗ୍ରହଣ କରେ |
| `stop_on_error` | boolean | ନା | `true` ହେଲେ, ପ୍ରଥମ ବିଫଳତା ପରେ processing ବନ୍ଦ କରନ୍ତୁ। Default `false` |

**ଉଦାହରଣ**

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

**ଫେରାଏ**

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

ଏକ ଅବସ୍ଥିତ ପୋଷ୍ଟ କିମ୍ବା ପୃଷ୍ଠାକୁ featured image (post thumbnail) ନିର୍ଦ୍ଧାରଣ କରେ। ଅବସ୍ଥିତ Media Library attachment ID କିମ୍ବା remote image URL ଗ୍ରହଣ କରେ; URL ଦିଆଗଲେ, image ସ୍ୱୟଂଚାଳିତ ଭାବେ download ଏବଂ import ହୁଏ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `post_id` | integer | ହଁ | update କରିବାକୁ ଥିବା ପୋଷ୍ଟ କିମ୍ବା ପୃଷ୍ଠାର ID |
| `attachment_id` | integer | ନା | ଅବସ୍ଥିତ Media Library attachment ର ID |
| `url` | string | ନା | import କରି featured image ଭାବେ set କରିବା ପାଇଁ remote image URL |
| `alt_text` | string | ନା | URL ରୁ import ହେଲେ attachment ଉପରେ ପ୍ରୟୋଗ କରିବାକୁ Alt text |

`attachment_id` କିମ୍ବା `url` ମଧ୍ୟରୁ ଗୋଟିଏ ଦେବା ଆବଶ୍ୟକ।

**ଫେରାଏ** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

ସକ୍ରିୟ form plugin ବ୍ୟବହାର କରି contact form ସୃଷ୍ଟି କରେ (କେଉଁଟି install ହୋଇଛି ତାହା ଅନୁସାରେ Contact Form 7, WPForms, Fluent Forms, କିମ୍ବା Gravity Forms)। କୌଣସି ପୋଷ୍ଟ କିମ୍ବା ପୃଷ୍ଠାରେ embed କରିପାରିବା shortcode ଫେରାଏ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | form plugin admin ରେ ଦେଖାଯାଉଥିବା form ନାମ |
| `fields` | array | Yes | form field ଗୁଡ଼ିକର କ୍ରମବଦ୍ଧ ତାଲିକା (ନିମ୍ନରେ Field object ଦେଖନ୍ତୁ) |
| `recipient` | string | No | submission ଗ୍ରହଣ କରିବା ପାଇଁ Email ଠିକଣା। ଡିଫଲ୍ଟ WordPress admin email |
| `subject` | string | No | Email ବିଷୟ ଧାଡ଼ି। Contact Form 7 ବ୍ୟବହାର କଲେ `[your-name]` ଏବଂ `[your-subject]` placeholders ସମର୍ଥନ କରେ |
| `confirmation_message` | string | No | ସଫଳ submission ପରେ ଦେଖାଯାଉଥିବା ସନ୍ଦେଶ। ଡିଫଲ୍ଟ: `"Thank you for your message. We'll be in touch soon."` |

**Field object**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | ଆଭ୍ୟନ୍ତରୀଣ field ନାମ / machine key |
| `label` | string | Yes | form ରେ ଦେଖାଯାଉଥିବା ମଣିଷ-ପଠନୀୟ label |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | submission ପୂର୍ବରୁ field ଭରିବା ଆବଶ୍ୟକ କି ନୁହେଁ। ଡିଫଲ୍ଟ `false` |
| `options` | array | No | `select`, `checkbox`, ଏବଂ `radio` field ପାଇଁ ବିକଳ୍ପ |
| `placeholder` | string | No | text-type input ପାଇଁ placeholder text |

**ଉଦାହରଣ**

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

**ଫେରାଏ**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## ଦୃଶ୍ୟ ସମୀକ୍ଷା

ଦୃଶ୍ୟ ସମୀକ୍ଷା କ୍ଷମତା agent କୁ live page ଗୁଡ଼ିକର screenshot ଧରି ସେଗୁଡ଼ିକୁ ବିଶ୍ଳେଷଣ କରିବାକୁ ଦିଏ। ଏହା browser extension ଆବଶ୍ୟକ ନ କରି ସ୍ୱୟଂଚାଳିତ design review, before/after comparison, ଏବଂ visual regression check ସମ୍ଭବ କରେ।

### `capture_screenshot`

server-side headless browser ବ୍ୟବହାର କରି ଦିଆଯାଇଥିବା URL ରେ ଥିବା WordPress page ର screenshot ଧରେ। image ଟି Media Library ରେ ସଞ୍ଚିତ ହୁଏ ଏବଂ CDN URL ଫେରାଯାଏ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | screenshot ପାଇଁ page ର ସମ୍ପୂର୍ଣ୍ଣ URL, ଯଥା `https://example.com/about/` |
| `width` | integer | No | pixel ରେ viewport ପ୍ରସ୍ଥ। ଡିଫଲ୍ଟ `1280` |
| `height` | integer | No | pixel ରେ viewport ଉଚ୍ଚତା। ଡିଫଲ୍ଟ `800` |
| `full_page` | boolean | No | କେବଳ viewport ବଦଳରେ ସମ୍ପୂର୍ଣ୍ଣ scrollable page ଧରନ୍ତୁ। ଡିଫଲ୍ଟ `false` |
| `delay_ms` | integer | No | page load ପରେ capture ପୂର୍ବରୁ ଅପେକ୍ଷା କରିବା milliseconds, animated content ପାଇଁ ଉପଯୋଗୀ। ଡିଫଲ୍ଟ `500` |
| `label` | string | No | Media Library ରେ attachment ସହିତ ସଞ୍ଚିତ ମଣିଷ-ପଠନୀୟ label |

**ଫେରାଏ**

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

ଦୁଇଟି screenshot ନିଏ ଏବଂ ପରିବର୍ତ୍ତିତ ଅଞ୍ଚଳଗୁଡ଼ିକୁ ଉଲ୍ଲେଖିତ କରୁଥିବା diff image ସହିତ visual diff score ଫେରାଏ। design change ଆଶାକରା result ଦେଇଛି କି ନିଶ୍ଚିତ କରିବାକୁ, କିମ୍ବା ଅନିଚ୍ଛିତ regression ଚିହ୍ନଟ କରିବାକୁ ଉପଯୋଗୀ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | "before" state ଭାବେ capture କରିବା ପାଇଁ page ର URL |
| `after_url` | string | Yes | "after" state ଭାବେ capture କରିବା ପାଇଁ page ର URL। ସମୟ ଅନୁସାରେ ତୁଳନା କଲେ ସେଇ URL ହୋଇପାରେ |
| `width` | integer | No | ଉଭୟ capture ପାଇଁ viewport ପ୍ରସ୍ଥ। ଡିଫଲ୍ଟ `1280` |
| `threshold` | float | No | pixel-difference threshold (0.0–1.0)। ଏହି tolerance ଭିତରେ ଥିବା pixel ଗୁଡ଼ିକୁ ଅପରିବର୍ତ୍ତିତ ଧରାଯାଏ। ଡିଫଲ୍ଟ `0.1` |

**ଫେରାଏ**

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

`diff_score` ର `0.0` ଅର୍ଥ କୌଣସି ଦୃଶ୍ୟମାନ ପରିବର୍ତ୍ତନ ନାହିଁ; `1.0` ଅର୍ଥ ପ୍ରତ୍ୟେକ pixel ପରିବର୍ତ୍ତିତ ହୋଇଛି।

---

### `review_page_design`

ଏକ page ର screenshot ଧରି visual analysis ପାଇଁ language model କୁ ପଠାଏ। layout, typography, colour usage, ଏବଂ accessibility concerns ଉପରେ ଗଠିତ assessment ଫେରାଏ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | review ପାଇଁ page ର ସମ୍ପୂର୍ଣ୍ଣ URL |
| `focus` | string | No | ଜୋର ଦେବାକୁ review area ଗୁଡ଼ିକର comma-separated ତାଲିକା: `layout`, `typography`, `colour`, `accessibility`, `mobile`। ଡିଫଲ୍ଟ: ସମସ୍ତ ଅଞ୍ଚଳ |
| `width` | integer | No | viewport ପ୍ରସ୍ଥ। ଡିଫଲ୍ଟ `1280` |

**ଫେରାଏ**

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

## ସ୍ଥାପନଯୋଗ୍ୟ କ୍ଷମତାଗୁଡ଼ିକ

Installable Abilities Registry ଆପଣଙ୍କୁ WordPress plugins ଭାବେ ବିତରଣ ହୋଇଥିବା ଅତିରିକ୍ତ ability pack ଦ୍ୱାରା agent କୁ ବିସ୍ତାର କରିବାକୁ ଦିଏ। ପ୍ରତ୍ୟେକ pack standard ability API ବ୍ୟବହାର କରି ଏକ କିମ୍ବା ଅଧିକ ability register କରେ।

### `list_available_abilities`

registry ରୁ installation ପାଇଁ ଉପଲବ୍ଧ ability pack ଗୁଡ଼ିକର catalogue ଫେରାଏ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `category` | string | ନା | ବର୍ଗ ଅନୁଯାୟୀ ଫିଲ୍ଟର କରନ୍ତୁ: `ecommerce`, `seo`, `media`, `social`, `developer` |

**ଫେରାଇଥାଏ**

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

ରେଜିଷ୍ଟ୍ରିରୁ ଏକ କ୍ଷମତା ପ୍ୟାକ୍ ଡାଉନଲୋଡ୍ କରି ସକ୍ରିୟ କରେ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `slug` | string | ହଁ | କ୍ଷମତା ପ୍ୟାକ୍ ପ୍ଲଗଇନ୍ slug |

**ଫେରାଇଥାଏ** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

ବର୍ଣ୍ଣିତ ବ୍ୟବହାର ଆବଶ୍ୟକତା ପାଇଁ ସର୍ବୋତ୍ତମ ପ୍ଲଗଇନ୍ ଖୋଜିବାକୁ କ୍ଷମତା ରେଜିଷ୍ଟ୍ରିକୁ ପଚାରେ ଏବଂ ଇଚ୍ଛାକ୍ରମେ ଏହାକୁ ଇନ୍ସ୍ଟଲ୍ କରେ।

**ପାରାମିଟରଗୁଡ଼ିକ**

| ପାରାମିଟର | ପ୍ରକାର | ଆବଶ୍ୟକ | ବିବରଣୀ |
|---|---|---|---|
| `description` | string | ହଁ | ଚାହିତ କାର୍ଯ୍ୟକ୍ଷମତାର ପ୍ରାକୃତିକ ଭାଷା ବିବରଣୀ |
| `install` | boolean | ନା | ଯଦି `true`, ସୁପାରିଶ ହୋଇଥିବା ପ୍ଲଗଇନ୍‌କୁ ତୁରନ୍ତ ଇନ୍ସ୍ଟଲ୍ କରେ। ଡିଫଲ୍ଟ `false` |

**ଉଦାହରଣ**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**ଫେରାଇଥାଏ**

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
