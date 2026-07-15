---
title: ಸಾಮರ್ಥ್ಯಗಳ ಉಲ್ಲೇಖ
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# ಸಾಮರ್ಥ್ಯಗಳ ಉಲ್ಲೇಖ

ಸಾಮರ್ಥ್ಯಗಳು Gratis AI Agent ನಿಮ್ಮ WordPress ಸ್ಥಾಪನೆಯಲ್ಲಿ ಕರೆಯಬಹುದಾದ ಮೂಲ ಕ್ರಿಯೆಗಳು. ಪ್ರತಿಯೊಂದು ಸಾಮರ್ಥ್ಯವೂ ನೋಂದಾಯಿತ PHP class ಆಗಿದ್ದು, JSON schema ಅನ್ನು ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ — ಯಾವ parameters ಅಗತ್ಯವಿದೆ ಮತ್ತು ಸಾಮರ್ಥ್ಯ ಏನು ಮರಳಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ತಿಳಿಯಲು agent runtime ನಲ್ಲಿ ಈ schema ಅನ್ನು ಓದುತ್ತದೆ.

ಈ ಪುಟವು Gratis AI Agent v1.9.0 ಜೊತೆಗೆ ಬರುವ ಎಲ್ಲಾ ಸಾಮರ್ಥ್ಯಗಳನ್ನು ದಾಖಲಿಸುತ್ತದೆ.

---

## ಕಸ್ಟಮ್ ಪೋಸ್ಟ್ ಪ್ರಕಾರಗಳು {#custom-post-types}

ಈ ಸಾಮರ್ಥ್ಯಗಳು agent ಮೂಲಕ ನೋಂದಾಯಿಸಲಾದ ಕಸ್ಟಮ್ ಪೋಸ್ಟ್ ಪ್ರಕಾರಗಳನ್ನು (CPTs) ನಿರ್ವಹಿಸುತ್ತವೆ. ನೋಂದಣಿಗಳನ್ನು WordPress options table ನಲ್ಲಿ ಉಳಿಸಲಾಗುತ್ತದೆ. ಆದ್ದರಿಂದ plugin ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ ಮತ್ತೆ ಸಕ್ರಿಯಗೊಳಿಸಿದರೂ ಅವು ಉಳಿಯುತ್ತವೆ.

### `register_post_type` {#registerposttype}

ಹೊಸ ಕಸ್ಟಮ್ ಪೋಸ್ಟ್ ಪ್ರಕಾರವನ್ನು ನೋಂದಾಯಿಸುತ್ತದೆ.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | ಪೋಸ್ಟ್ ಪ್ರಕಾರದ key (ಗರಿಷ್ಠ 20 ಅಕ್ಷರಗಳು, ದೊಡ್ಡ ಅಕ್ಷರ ಬೇಡ, ಖಾಲಿ ಜಾಗ ಬೇಡ) |
| `singular_label` | string | Yes | ಓದಲು ಸುಲಭವಾದ ಏಕವಚನ ಹೆಸರು, ಉದಾ. `Portfolio Item` |
| `plural_label` | string | Yes | ಓದಲು ಸುಲಭವಾದ ಬಹುವಚನ ಹೆಸರು, ಉದಾ. `Portfolio Items` |
| `public` | boolean | No | ಪೋಸ್ಟ್ ಪ್ರಕಾರವು ಸಾರ್ವಜನಿಕವಾಗಿ ಪ್ರವೇಶಿಸಬಹುದೇ. Default `true` |
| `supports` | array | No | ಬೆಂಬಲಿಸಬೇಕಾದ ವೈಶಿಷ್ಟ್ಯಗಳು: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Default `["title","editor"]` |
| `has_archive` | boolean | No | ಪೋಸ್ಟ್ ಪ್ರಕಾರದ archive ಪುಟ ಸಕ್ರಿಯವಾಗಿದೆಯೇ. Default `false` |
| `menu_icon` | string | No | admin menu icon ಗಾಗಿ Dashicons class ಅಥವಾ URL. Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | ಪೋಸ್ಟ್ ಪ್ರಕಾರಕ್ಕೆ URL slug. Default ಆಗಿ `slug` ಬಳಕೆಯಾಗುತ್ತದೆ |

**ಉದಾಹರಣೆ**

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

**ಮರಳಿಸುತ್ತದೆ** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

agent ನೋಂದಾಯಿಸಿದ ಎಲ್ಲಾ ಕಸ್ಟಮ್ ಪೋಸ್ಟ್ ಪ್ರಕಾರಗಳನ್ನು ಮರಳಿಸುತ್ತದೆ.

**Parameters** — ಇಲ್ಲ

**ಮರಳಿಸುತ್ತದೆ**

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

agent ಮೊದಲು ನೋಂದಾಯಿಸಿದ್ದ ಕಸ್ಟಮ್ ಪೋಸ್ಟ್ ಪ್ರಕಾರದ ನೋಂದಣಿಯನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ. ಆ ಪ್ರಕಾರದ ಇರುವ ಪೋಸ್ಟ್‌ಗಳು database ನಲ್ಲಿ ಉಳಿಯುತ್ತವೆ, ಆದರೆ ಆ ಪೋಸ್ಟ್ ಪ್ರಕಾರದ ಮೂಲಕ ಇನ್ನು ಪ್ರವೇಶಿಸಲಾಗುವುದಿಲ್ಲ.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | ತೆಗೆದುಹಾಕಬೇಕಾದ ಪೋಸ್ಟ್ ಪ್ರಕಾರದ key |

**ಮರಳಿಸುತ್ತದೆ** `{ "success": true, "slug": "portfolio" }`

---

## ಕಸ್ಟಮ್ Taxonomies {#custom-taxonomies}

ಈ ಸಾಮರ್ಥ್ಯಗಳು ಕಸ್ಟಮ್ taxonomies ಅನ್ನು ನಿರ್ವಹಿಸುತ್ತವೆ. CPTs ಹಾಗೆಯೇ, taxonomy ನೋಂದಣಿಗಳನ್ನೂ ಉಳಿಸಲಾಗುತ್ತದೆ.

### `register_taxonomy` {#registertaxonomy}

ಹೊಸ ಕಸ್ಟಮ್ taxonomy ಅನ್ನು ನೋಂದಾಯಿಸುತ್ತದೆ.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | taxonomy key (ಗರಿಷ್ಠ 32 ಅಕ್ಷರಗಳು) |
| `singular_label` | string | Yes | ಓದಲು ಸುಲಭವಾದ ಏಕವಚನ ಹೆಸರು, ಉದಾ. `Project Category` |
| `plural_label` | string | Yes | ಓದಲು ಸುಲಭವಾದ ಬಹುವಚನ ಹೆಸರು, ಉದಾ. `Project Categories` |
| `post_types` | array | Yes | ಈ taxonomy ಜೋಡಿಸಬೇಕಾದ ಪೋಸ್ಟ್ ಪ್ರಕಾರಗಳ slugs |
| `hierarchical` | boolean | No | category ಶೈಲಿಗೆ `true`, tag ಶೈಲಿಗೆ `false`. Default `true` |
| `public` | boolean | No | terms ಸಾರ್ವಜನಿಕವಾಗಿ ಪ್ರವೇಶಿಸಬಹುದೇ. Default `true` |
| `rewrite_slug` | string | No | taxonomy ಗಾಗಿ URL slug. Default ಆಗಿ `slug` ಬಳಕೆಯಾಗುತ್ತದೆ |

**ಉದಾಹರಣೆ**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**ಮರಳಿಸುತ್ತದೆ** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

agent ನೋಂದಾಯಿಸಿದ ಎಲ್ಲಾ ಕಸ್ಟಮ್ taxonomies ಅನ್ನು ಮರಳಿಸುತ್ತದೆ.

**Parameters** — ಇಲ್ಲ

**ಮರಳಿಸುತ್ತದೆ**

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

agent ಮೊದಲು ನೋಂದಾಯಿಸಿದ್ದ ಕಸ್ಟಮ್ taxonomy ನೋಂದಣಿಯನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | ತೆಗೆದುಹಾಕಬೇಕಾದ taxonomy key |

**ಮರಳಿಸುತ್ತದೆ** `{ "success": true, "slug": "project-category" }`

---

## ವಿನ್ಯಾಸ ವ್ಯವಸ್ಥೆ {#design-system}

ವಿನ್ಯಾಸ ವ್ಯವಸ್ಥೆಯ ಸಾಮರ್ಥ್ಯಗಳು WordPress site ನ ದೃಶ್ಯ ಪ್ರದರ್ಶನವನ್ನು ಬದಲಾಯಿಸುತ್ತವೆ — ಕಸ್ಟಮ್ CSS ಇಂದ block patterns ಮತ್ತು site logo ವರೆಗೆ.

### `inject_custom_css` {#injectcustomcss}

`wp_add_inline_style` ಮೂಲಕ site ನ `<head>` ಗೆ CSS ಸೇರಿಸುತ್ತದೆ. CSS ಅನ್ನು `gratis_ai_agent_custom_css` option ನಲ್ಲಿ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಸಾಮರ್ಥ್ಯ reset ಮಾಡಿದಾಗ ಸ್ವಚ್ಛವಾಗಿ dequeue ಮಾಡಲಾಗುತ್ತದೆ.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | inject ಮಾಡಲು ಮಾನ್ಯ CSS |
| `label` | string | No | ಈ CSS block ಗಾಗಿ ಓದಲು ಸುಲಭವಾದ label, debug logs ನಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ. Default `"agent-injected"` |
| `replace` | boolean | No | `true` ಆಗಿದ್ದರೆ, ಮೊದಲು inject ಮಾಡಿದ ಎಲ್ಲಾ CSS ಅನ್ನು ಬದಲಿಸುತ್ತದೆ. Default `false` (ಸೇರಿಸುತ್ತದೆ) |

**ಉದಾಹರಣೆ**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**ಮರಳಿಸುತ್ತದೆ** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress pattern library ನಲ್ಲಿ ಮರುಬಳಕೆ ಮಾಡಬಹುದಾದ block pattern ಅನ್ನು ನೋಂದಾಯಿಸುತ್ತದೆ.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Pattern identifier, ಉದಾ. `gratis/hero-dark` |
| `title` | string | Yes | editor ನಲ್ಲಿ ತೋರಿಸುವ ಓದಲು ಸುಲಭವಾದ pattern ಹೆಸರು |
| `content` | string | Yes | pattern ಗಾಗಿ serialised block markup (HTML) |
| `categories` | array | No | Pattern category slugs, ಉದಾ. `["featured", "hero"]` |
| `description` | string | No | pattern picker ನಲ್ಲಿ ತೋರಿಸುವ ಚಿಕ್ಕ ವಿವರಣೆ |
| `keywords` | array | No | ಹುಡುಕಾಟ keywords |

**ಮರಳಿಸುತ್ತದೆ** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

agent ನೋಂದಾಯಿಸಿದ ಎಲ್ಲಾ block patterns ಅನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ.

**Parameters** — ಇಲ್ಲ

**ಹಿಂತಿರುಗಿಸುತ್ತದೆ**

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

ನೀಡಿದ attachment ID ಅಥವಾ ದೂರಸ್ಥ ಚಿತ್ರ URL ಗೆ WordPress ಸೈಟ್ ಲೋಗೋವನ್ನು ಹೊಂದಿಸುತ್ತದೆ. URL ನೀಡಿದಾಗ, ಚಿತ್ರವನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ಮಾಧ್ಯಮ ಗ್ರಂಥಾಲಯಕ್ಕೆ ಆಮದು ಮಾಡಲಾಗುತ್ತದೆ.

**ಪರಿಮಿತಿಗಳು**

| ಪರಿಮಿತಿ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `attachment_id` | integer | ಇಲ್ಲ | ಈಗಿರುವ ಮಾಧ್ಯಮ ಗ್ರಂಥಾಲಯ attachment‌ನ ID |
| `url` | string | ಇಲ್ಲ | ಆಮದು ಮಾಡಿ ಲೋಗೋವಾಗಿ ಹೊಂದಿಸಬೇಕಾದ ದೂರಸ್ಥ ಚಿತ್ರ URL |

`attachment_id` ಅಥವಾ `url` ಎರಡರಲ್ಲಿ ಒಂದನ್ನು ನೀಡಲೇಬೇಕು.

**ಹಿಂತಿರುಗಿಸುತ್ತದೆ** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

ಸಕ್ರಿಯ ಥೀಮ್‌ನ `theme.json` (ಅಥವಾ `global-styles`) ಗೆ ಹೆಸರಿರುವ ಬಣ್ಣ/ಅಕ್ಷರ ವಿನ್ಯಾಸ ಪೂರ್ವನಿಗದಿಯನ್ನು ಅನ್ವಯಿಸುತ್ತದೆ. ಪೂರ್ವನಿಗದಿಗಳು Gratis AI Agent ತಂಡ ನಿರ್ವಹಿಸುವ ಆಯ್ದ ಗುಚ್ಛಗಳಾಗಿವೆ.

**ಪರಿಮಿತಿಗಳು**

| ಪರಿಮಿತಿ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `preset` | string | ಹೌದು | ಪೂರ್ವನಿಗದಿ ಹೆಸರು, ಉದಾ. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | ಇಲ್ಲ | `true` ಆಗಿದ್ದರೆ, ಬದಲಿಸುವ ಬದಲು ಈಗಿರುವ ಮೌಲ್ಯಗಳೊಂದಿಗೆ ವಿಲೀನಗೊಳಿಸಿ. ಡೀಫಾಲ್ಟ್ `false` |

**ಲಭ್ಯ ಪೂರ್ವನಿಗದಿಗಳು**

| ಪೂರ್ವನಿಗದಿ | ವಿವರಣೆ |
|---|---|
| `minimal-dark` | ಬಹುತೇಕ ಕಪ್ಪು ಹಿನ್ನೆಲೆ, ಬಿಳಿ ಪಠ್ಯ, ಒಂದೇ ಒತ್ತು ಬಣ್ಣ |
| `warm-editorial` | ಬೆಚ್ಚಗಿನ ಆಫ್-ವೈಟ್ ಹಿನ್ನೆಲೆ, ಸೆರಿಫ್ ಶೀರ್ಷಿಕೆಗಳು, ಮಣ್ಣಿನ ಛಾಯೆಯ ಒತ್ತು ಬಣ್ಣಗಳು |
| `corporate-blue` | ವೃತ್ತಿಪರ ಅಕ್ಷರ ವಿನ್ಯಾಸದೊಂದಿಗೆ ನೇವಿ ಮತ್ತು ಬಿಳಿ ಬಣ್ಣಪಟ |
| `vibrant-startup` | ಪ್ರಕಾಶಮಾನ ಗ್ರೇಡಿಯಂಟ್‌ಗಳು, ದುಂಡಾದ ಮೂಲೆಗಳು, ಆಧುನಿಕ ಸ್ಯಾನ್ಸ್-ಸೆರಿಫ್ ಅಕ್ಷರ ಶೈಲಿ |
| `classic-blog` | ತಟಸ್ಥ ಬೂದುಗಳು, ಸುಲಭ ಓದಿಗೆ ಸಾಲಿನ ಎತ್ತರ, ಸಾಂಪ್ರದಾಯಿಕ ವಿನ್ಯಾಸ ಅಂತರ |

**ಹಿಂತಿರುಗಿಸುತ್ತದೆ** `{ "success": true, "preset": "minimal-dark" }`

---

## ಜಾಗತಿಕ ಶೈಲಿಗಳು {#global-styles}

ಜಾಗತಿಕ ಶೈಲಿ ಸಾಮರ್ಥ್ಯಗಳು WordPress ಜಾಗತಿಕ ಶೈಲಿಗಳ API ಮೂಲಕ theme.json ಮೌಲ್ಯಗಳನ್ನು ಓದುತ್ತವೆ ಮತ್ತು ಬರೆಯುತ್ತವೆ. ಇದರಿಂದ ಸೈಟ್‌ನಾದ್ಯಂತ ಎಲ್ಲಾ ಬ್ಲಾಕ್‌ಗಳು ಮತ್ತು ಟೆಂಪ್ಲೇಟ್‌ಗಳ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ.

### `get_global_styles` {#getglobalstyles}

ಪ್ರಸ್ತುತ ಜಾಗತಿಕ ಶೈಲಿ ಸಂರಚನೆಯನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ.

**ಪರಿಮಿತಿಗಳು**

| ಪರಿಮಿತಿ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `path` | string | ಇಲ್ಲ | ನಿರ್ದಿಷ್ಟ ಮೌಲ್ಯಕ್ಕೆ JSON ಪಾಯಿಂಟರ್, ಉದಾ. `/color/palette` ಅಥವಾ `/typography/fontSizes`. ಬಿಟ್ಟರೆ ಸಂಪೂರ್ಣ object ಅನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ. |

**ಹಿಂತಿರುಗಿಸುತ್ತದೆ** ಸಂಪೂರ್ಣ ಜಾಗತಿಕ ಶೈಲಿ object ಅಥವಾ `path` ನಲ್ಲಿರುವ ಮೌಲ್ಯ.

---

### `set_global_styles` {#setglobalstyles}

ಜಾಗತಿಕ ಶೈಲಿ ಸಂರಚನೆಯಲ್ಲಿ ಒಂದು ಅಥವಾ ಹೆಚ್ಚಿನ ಮೌಲ್ಯಗಳನ್ನು ನವೀಕರಿಸುತ್ತದೆ.

**ಪರಿಮಿತಿಗಳು**

| ಪರಿಮಿತಿ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `path` | string | ಹೌದು | ಹೊಂದಿಸಬೇಕಾದ ಮೌಲ್ಯಕ್ಕೆ JSON ಪಾಯಿಂಟರ್, ಉದಾ. `/color/palette` |
| `value` | any | ಹೌದು | ಹೊಸ ಮೌಲ್ಯ |

**ಉದಾಹರಣೆ** — ಬಣ್ಣಪಟಕ್ಕೆ ಒಂದು ಬಣ್ಣ ಸೇರಿಸಿ

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**ಹಿಂತಿರುಗಿಸುತ್ತದೆ** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

agent ಅನ್ವಯಿಸಿದ ಎಲ್ಲಾ ಜಾಗತಿಕ ಶೈಲಿ ಬದಲಾವಣೆಗಳನ್ನು ಮರುಹೊಂದಿಸಿ, ಥೀಮ್ ಡೀಫಾಲ್ಟ್‌ಗಳನ್ನು ಮರುಸ್ಥಾಪಿಸುತ್ತದೆ.

**ಪರಿಮಿತಿಗಳು** — ಯಾವುದೂ ಇಲ್ಲ

**ಹಿಂತಿರುಗಿಸುತ್ತದೆ** `{ "success": true }`

---

## ನ್ಯಾವಿಗೇಶನ್ ಮೆನುಗಳು {#navigation-menus}

ನ್ಯಾವಿಗೇಶನ್ ಮೆನು ಸಾಮರ್ಥ್ಯಗಳು WordPress nav ಮೆನುಗಳು ಮತ್ತು ಅವುಗಳ ಐಟಂಗಳನ್ನು ರಚಿಸಿ ನಿರ್ವಹಿಸುತ್ತವೆ.

### `create_menu` {#createmenu}

ಹೊಸ WordPress ನ್ಯಾವಿಗೇಶನ್ ಮೆನು ರಚಿಸುತ್ತದೆ.

**ಪರಿಮಿತಿಗಳು**

| ಪರಿಮಿತಿ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `name` | string | ಹೌದು | ಮೆನು ಹೆಸರು, ಉದಾ. `Primary Navigation` |
| `location` | string | ಇಲ್ಲ | ಈ ಮೆನುಗೆ ನಿಯೋಜಿಸಬೇಕಾದ ಥೀಮ್ ಸ್ಥಳ, ಉದಾ. `primary` |

**ಹಿಂತಿರುಗಿಸುತ್ತದೆ** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

ಮೆನು ಹೆಸರನ್ನು ಬದಲಿಸುತ್ತದೆ ಅಥವಾ ಅದನ್ನು ಥೀಮ್ ಸ್ಥಳಕ್ಕೆ ಮರುನಿಯೋಜಿಸುತ್ತದೆ.

**ಪರಿಮಿತಿಗಳು**

| ಪರಿಮಿತಿ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `menu_id` | integer | ಹೌದು | ನವೀಕರಿಸಬೇಕಾದ ಮೆನು ID |
| `name` | string | ಇಲ್ಲ | ಹೊಸ ಮೆನು ಹೆಸರು |
| `location` | string | ಇಲ್ಲ | ನಿಯೋಜಿಸಬೇಕಾದ ಅಥವಾ ಮರುನಿಯೋಜಿಸಬೇಕಾದ ಥೀಮ್ ಸ್ಥಳ |

**ಹಿಂತಿರುಗಿಸುತ್ತದೆ** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

ಈಗಿರುವ ನ್ಯಾವಿಗೇಶನ್ ಮೆನುಗೆ ಐಟಂ ಸೇರಿಸುತ್ತದೆ.

**ಪರಿಮಿತಿಗಳು**

| ಪರಿಮಿತಿ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `menu_id` | integer | ಹೌದು | ಗುರಿ ಮೆನು ID |
| `type` | string | ಹೌದು | ಐಟಂ ಪ್ರಕಾರ: `custom`, `post_type`, ಅಥವಾ `taxonomy` |
| `title` | string | ಇಲ್ಲ | ಮೆನು ಐಟಂಗೆ ಲೇಬಲ್ (`custom` ಪ್ರಕಾರಕ್ಕೆ ಅಗತ್ಯ) |
| `url` | string | ಇಲ್ಲ | `custom` ಐಟಂಗಳಿಗೆ URL |
| `object_id` | integer | ಇಲ್ಲ | `post_type`/`taxonomy` ಐಟಂಗಳಿಗೆ ಪೋಸ್ಟ್ ID ಅಥವಾ term ID |
| `parent_id` | integer | ಇಲ್ಲ | ಈ ಐಟಂ ಅನ್ನು ಒಳಗಿಡಬೇಕಾದ ಮೆನು ಐಟಂ ID |
| `position` | integer | ಇಲ್ಲ | ಮೆನುವಿನ ಶೂನ್ಯದಿಂದ ಆರಂಭವಾಗುವ ಸ್ಥಾನ |

**ಹಿಂತಿರುಗಿಸುತ್ತದೆ** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

ನ್ಯಾವಿಗೇಶನ್ ಮೆನುವಿನಿಂದ ಐಟಂ ತೆಗೆದುಹಾಕುತ್ತದೆ.

**ಪರಿಮಿತಿಗಳು**

| ಪರಿಮಿತಿ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `item_id` | integer | ಹೌದು | ತೆಗೆದುಹಾಕಬೇಕಾದ ಮೆನು ಐಟಂ ID |

**ಹಿಂತಿರುಗಿಸುತ್ತದೆ** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

ನಿಯೋಜಿತ ಥೀಮ್ ಸ್ಥಳಗಳೊಂದಿಗೆ ಎಲ್ಲಾ WordPress ನ್ಯಾವಿಗೇಶನ್ ಮೆನುಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತದೆ.

**ಪರಿಮಿತಿಗಳು** — ಯಾವುದೂ ಇಲ್ಲ

**ಹಿಂತಿರುಗಿಸುತ್ತದೆ**

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

## ಆಯ್ಕೆಗಳ ನಿರ್ವಹಣೆ {#options-management}

ಆಯ್ಕೆ ಸಾಮರ್ಥ್ಯಗಳು `get_option` / `update_option` ಮೂಲಕ WordPress ಆಯ್ಕೆಗಳನ್ನು ಓದುತ್ತವೆ ಮತ್ತು ಬರೆಯುತ್ತವೆ. ಅಂತರ್ನಿರ್ಮಿತ ಸುರಕ್ಷತಾ ಬ್ಲಾಕ್‌ಲಿಸ್ಟ್ ಮಹತ್ವದ ಸೆಟ್ಟಿಂಗ್‌ಗಳ ಆಕಸ್ಮಿಕ ಬದಲಾವಣೆಯನ್ನು ತಡೆಯುತ್ತದೆ.

### `get_option` {#getoption}

WordPress ಆಯ್ಕೆಯನ್ನು ಓದುತ್ತದೆ.

**ಪರಿಮಿತಿಗಳು**

| ಪರಿಮಿತಿ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `option_name` | string | ಹೌದು | ಆಯ್ಕೆ ಕೀ, ಉದಾ. `blogname` |

**ಹಿಂತಿರುಗಿಸುತ್ತದೆ** `{ "option_name": "blogname", "value": "My Site" }`

`option_name` ಸುರಕ್ಷತಾ ಬ್ಲಾಕ್‌ಲಿಸ್ಟ್‌ನಲ್ಲಿದ್ದರೆ ದೋಷವನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ.

---

### `set_option` {#setoption}

WordPress ಆಯ್ಕೆಯನ್ನು ಬರೆಯುತ್ತದೆ.

**ಪರಿಮಿತಿಗಳು**

| ಪರಿಮಿತಿ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `option_name` | string | ಹೌದು | ಆಯ್ಕೆ ಕೀ |
| `value` | any | ಹೌದು | ಹೊಸ ಮೌಲ್ಯ (arrays/objects ಗೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ serialise ಮಾಡಲಾಗುತ್ತದೆ) |
| `autoload` | string | ಇಲ್ಲ | `"yes"` ಅಥವಾ `"no"`. ಡೀಫಾಲ್ಟ್ ಈಗಿರುವ autoload ಸೆಟ್ಟಿಂಗ್ ಅನ್ನು ಉಳಿಸುತ್ತದೆ |

`option_name` ಸುರಕ್ಷತಾ ನಿರ್ಬಂಧ ಪಟ್ಟಿಯಲ್ಲಿ ಇದ್ದರೆ ದೋಷವನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ.

**ಹಿಂತಿರುಗಿಸುವುದು** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

WordPress ಆಯ್ಕೆಯನ್ನು ಅಳಿಸುತ್ತದೆ.

**ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು**

| ಪ್ಯಾರಾಮೀಟರ್ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `option_name` | string | ಹೌದು | ಅಳಿಸಬೇಕಾದ ಆಯ್ಕೆ ಕೀ |

`option_name` ಸುರಕ್ಷತಾ ನಿರ್ಬಂಧ ಪಟ್ಟಿಯಲ್ಲಿ ಇದ್ದರೆ ದೋಷವನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ.

**ಹಿಂತಿರುಗಿಸುವುದು** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

ಒಂದು ಮಾದರಿಗೆ ಹೊಂದುವ WordPress ಆಯ್ಕೆಗಳನ್ನು ಪಟ್ಟಿಮಾಡುತ್ತದೆ.

**ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು**

| ಪ್ಯಾರಾಮೀಟರ್ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `pattern` | string | ಇಲ್ಲ | ಆಯ್ಕೆ ಹೆಸರುಗಳನ್ನು ಶೋಧಿಸಲು SQL LIKE ಮಾದರಿ, ಉದಾ. `gratis_%`. ಬಿಟ್ಟರೆ ಎಲ್ಲಾ ಆಯ್ಕೆಗಳನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ (ದೊಡ್ಡ ಡೇಟಾಬೇಸ್‌ಗಳಲ್ಲಿ ಎಚ್ಚರಿಕೆಯಿಂದ ಬಳಸಿ). |
| `limit` | integer | ಇಲ್ಲ | ಫಲಿತಾಂಶಗಳ ಗರಿಷ್ಠ ಸಂಖ್ಯೆ. ಪೂರ್ವನಿಯೋಜಿತ `50`, ಗರಿಷ್ಠ `500` |

**ಹಿಂತಿರುಗಿಸುವುದು**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## ವಿಷಯ ನಿರ್ವಹಣೆ {#content-management}

ವಿಷಯ ನಿರ್ವಹಣಾ ಸಾಮರ್ಥ್ಯಗಳು WordPress ಪೋಸ್ಟ್‌ಗಳು ಮತ್ತು ಪುಟಗಳನ್ನು ರಚಿಸಿ ಸಂಪಾದಿಸುತ್ತವೆ. ಪೋಸ್ಟ್ IDಗಳನ್ನು ಹಿಂತಿರುಗಿಸಲಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ಬಹು-ಸಾಮರ್ಥ್ಯ ಯೋಜನೆಗಳ ನಂತರದ ಹಂತಗಳು ರಚಿಸಿದ ವಿಷಯವನ್ನು ಉಲ್ಲೇಖಿಸಬಹುದು.

### `create_post` {#createpost}

ಹೊಸ WordPress ಪೋಸ್ಟ್, ಪುಟ ಅಥವಾ ಕಸ್ಟಮ್ ಪೋಸ್ಟ್ ಪ್ರಕಾರದ ನಮೂದನ್ನು ರಚಿಸುತ್ತದೆ.

**ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು**

| ಪ್ಯಾರಾಮೀಟರ್ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `title` | string | ಹೌದು | ಪೋಸ್ಟ್ ಶೀರ್ಷಿಕೆ |
| `content` | string | ಇಲ್ಲ | ಪೋಸ್ಟ್ ದೇಹ — ಸರಳ ಪಠ್ಯ, HTML, ಅಥವಾ ಸರಣೀಕೃತ ಬ್ಲಾಕ್ ಮಾರ್ಕಪ್ ಸ್ವೀಕರಿಸುತ್ತದೆ |
| `status` | string | ಇಲ್ಲ | `draft`, `publish`, `pending`, `private`. ಪೂರ್ವನಿಯೋಜಿತ `draft` |
| `post_type` | string | ಇಲ್ಲ | ಪೋಸ್ಟ್ ಪ್ರಕಾರದ ಸ್ಲಗ್, ಉದಾ. `post`, `page`, ಅಥವಾ ನೋಂದಾಯಿತ ಯಾವುದೇ CPT. ಪೂರ್ವನಿಯೋಜಿತ `post` |
| `excerpt` | string | ಇಲ್ಲ | ಆರ್ಕೈವ್‌ಗಳು ಮತ್ತು ಹುಡುಕಾಟ ಫಲಿತಾಂಶಗಳಲ್ಲಿ ತೋರಿಸುವ ಚಿಕ್ಕ ಸಾರಾಂಶ |
| `categories` | array | ಇಲ್ಲ | ನಿಯೋಜಿಸಬೇಕಾದ ವರ್ಗದ ಹೆಸರುಗಳು ಅಥವಾ IDಗಳ ಅರೆ |
| `tags` | array | ಇಲ್ಲ | ನಿಯೋಜಿಸಬೇಕಾದ ಟ್ಯಾಗ್ ಹೆಸರುಗಳು ಅಥವಾ IDಗಳ ಅರೆ |
| `author` | integer | ಇಲ್ಲ | ಪೋಸ್ಟ್ ಲೇಖಕರಾಗಿ ಹೊಂದಿಸಬೇಕಾದ WordPress ಬಳಕೆದಾರ ID. ಪೂರ್ವನಿಯೋಜಿತವಾಗಿ ಪ್ರಸ್ತುತ ಬಳಕೆದಾರ |
| `date` | string | ಇಲ್ಲ | ISO 8601 ಸ್ವರೂಪದಲ್ಲಿನ ಪ್ರಕಟಣೆ ದಿನಾಂಕ, ಉದಾ. `2026-05-01T09:00:00` |
| `page_template` | string | ಇಲ್ಲ | ಈ ಪೋಸ್ಟ್ ಅಥವಾ ಪುಟಕ್ಕೆ ನಿಯೋಜಿಸಬೇಕಾದ ಟೆಂಪ್ಲೇಟ್ ಫೈಲ್, ಉದಾ. `page-full-width.php`. `post_type` `page` ಆಗಿದ್ದಾಗ ಅಥವಾ ಪುಟ ಟೆಂಪ್ಲೇಟ್‌ಗಳನ್ನು ಬೆಂಬಲಿಸುವ CPT ಆಗಿದ್ದಾಗ ಮಾತ್ರ ಅರ್ಥಪೂರ್ಣ. |

**ಉದಾಹರಣೆ**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**ಹಿಂತಿರುಗಿಸುವುದು** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

ಈಗಿರುವ WordPress ಪೋಸ್ಟ್ ಅಥವಾ ಪುಟವನ್ನು ನವೀಕರಿಸುತ್ತದೆ.

**ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು**

| ಪ್ಯಾರಾಮೀಟರ್ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `post_id` | integer | ಹೌದು | ನವೀಕರಿಸಬೇಕಾದ ಪೋಸ್ಟ್‌ನ ID |
| `title` | string | ಇಲ್ಲ | ಹೊಸ ಪೋಸ್ಟ್ ಶೀರ್ಷಿಕೆ |
| `content` | string | ಇಲ್ಲ | ಹೊಸ ಪೋಸ್ಟ್ ದೇಹ |
| `status` | string | ಇಲ್ಲ | ಹೊಸ ಸ್ಥಿತಿ: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | ಇಲ್ಲ | ಹೊಸ ಸಾರಾಂಶ |
| `categories` | array | ಇಲ್ಲ | ಪೂರ್ಣ ವರ್ಗ ಪಟ್ಟಿಯನ್ನು ಹೆಸರುಗಳು ಅಥವಾ IDಗಳ ಈ ಅರೆದಿಂದ ಬದಲಾಯಿಸಿ |
| `tags` | array | ಇಲ್ಲ | ಪೂರ್ಣ ಟ್ಯಾಗ್ ಪಟ್ಟಿಯನ್ನು ಹೆಸರುಗಳು ಅಥವಾ IDಗಳ ಈ ಅರೆದಿಂದ ಬದಲಾಯಿಸಿ |
| `page_template` | string | ಇಲ್ಲ | ಈ ಪೋಸ್ಟ್ ಅಥವಾ ಪುಟಕ್ಕೆ ನಿಯೋಜಿಸಬೇಕಾದ ಹೊಸ ಟೆಂಪ್ಲೇಟ್ ಫೈಲ್, ಉದಾ. `page-full-width.php`. ಟೆಂಪ್ಲೇಟ್ ನಿಯೋಜನೆಯನ್ನು ತೆಗೆದುಹಾಕಿ theme ಪೂರ್ವನಿಯೋಜಿತಕ್ಕೆ ಮರಳಿಸಲು ಖಾಲಿ string ಅನ್ನು ನೀಡಿ. |

**ಉದಾಹರಣೆ** — ರಚನೆಯ ನಂತರ ಟೆಂಪ್ಲೇಟ್ ಬದಲಿಸಿ

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**ಹಿಂತಿರುಗಿಸುವುದು** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

ಒಂದೇ ಸಾಮರ್ಥ್ಯ ಕರೆಯಲ್ಲಿ ಹಲವಾರು ಪೋಸ್ಟ್‌ಗಳನ್ನು ರಚಿಸುತ್ತದೆ. ಇದರಿಂದ site ನಿರ್ಮಾಣಗಳು ಅಥವಾ ದೊಡ್ಡ ಪ್ರಮಾಣದ ವಿಷಯ ಆಮದು ಸಮಯದಲ್ಲಿ ಸುತ್ತುಪ್ರಯಾಣಗಳು ಕಡಿಮೆಯಾಗುತ್ತವೆ. ಪೋಸ್ಟ್‌ಗಳನ್ನು ಕ್ರಮವಾಗಿ ರಚಿಸಲಾಗುತ್ತದೆ; ಒಂದರಲ್ಲಿ ವಿಫಲವಾದರೆ ಉಳಿದವು ಮುಂದುವರಿಯುತ್ತವೆ ಮತ್ತು ವಿಫಲತೆಯನ್ನು ಫಲಿತಾಂಶಗಳ ಅರೆದಲ್ಲಿ ವರದಿ ಮಾಡಲಾಗುತ್ತದೆ.

**ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು**

| ಪ್ಯಾರಾಮೀಟರ್ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `posts` | array | ಹೌದು | ಪೋಸ್ಟ್ ಆಬ್ಜೆಕ್ಟ್‌ಗಳ ಅರೆ; ಪ್ರತಿ ಒಂದೂ `create_post` ನಂತೆಯೇ ಅದೇ ಪ್ಯಾರಾಮೀಟರ್‌ಗಳನ್ನು ಸ್ವೀಕರಿಸುತ್ತದೆ |
| `stop_on_error` | boolean | ಇಲ್ಲ | `true` ಆಗಿದ್ದರೆ, ಮೊದಲ ವಿಫಲತೆಯ ನಂತರ ಪ್ರಕ್ರಿಯೆಯನ್ನು ನಿಲ್ಲಿಸಿ. ಪೂರ್ವನಿಯೋಜಿತ `false` |

**ಉದಾಹರಣೆ**

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

**ಹಿಂತಿರುಗಿಸುವುದು**

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

ಈಗಿರುವ ಪೋಸ್ಟ್ ಅಥವಾ ಪುಟಕ್ಕೆ ವೈಶಿಷ್ಟ್ಯಗೊಳಿಸಿದ ಚಿತ್ರವನ್ನು (ಪೋಸ್ಟ್ ಥಂಬ್‌ನೇಲ್) ನಿಯೋಜಿಸುತ್ತದೆ. ಈಗಿರುವ Media Library ಅಟ್ಯಾಚ್‌ಮೆಂಟ್ ID ಅಥವಾ ದೂರಸ್ಥ ಚಿತ್ರದ URL ಅನ್ನು ಸ್ವೀಕರಿಸುತ್ತದೆ; URL ನೀಡಿದಾಗ, ಚಿತ್ರವನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ಆಮದು ಮಾಡಲಾಗುತ್ತದೆ.

**ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು**

| ಪ್ಯಾರಾಮೀಟರ್ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `post_id` | integer | ಹೌದು | ನವೀಕರಿಸಬೇಕಾದ ಪೋಸ್ಟ್ ಅಥವಾ ಪುಟದ ID |
| `attachment_id` | integer | ಇಲ್ಲ | ಈಗಿರುವ Media Library ಅಟ್ಯಾಚ್‌ಮೆಂಟ್‌ನ ID |
| `url` | string | ಇಲ್ಲ | ಆಮದು ಮಾಡಿ ವೈಶಿಷ್ಟ್ಯಗೊಳಿಸಿದ ಚಿತ್ರವಾಗಿ ಹೊಂದಿಸಬೇಕಾದ ದೂರಸ್ಥ ಚಿತ್ರದ URL |
| `alt_text` | string | ಇಲ್ಲ | URL ನಿಂದ ಆಮದು ಮಾಡಿದರೆ ಅಟ್ಯಾಚ್‌ಮೆಂಟ್‌ಗೆ ಅನ್ವಯಿಸಬೇಕಾದ ಪರ್ಯಾಯ ಪಠ್ಯ |

`attachment_id` ಅಥವಾ `url` ಇವುಗಳಲ್ಲಿ ಒಂದನ್ನು ನೀಡಬೇಕು.

**ಹಿಂತಿರುಗಿಸುವುದು** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

ಸ್ಥಾಪಿತವಾಗಿರುವುದರ ಆಧಾರದ ಮೇಲೆ ಸಕ್ರಿಯ form plugin (Contact Form 7, WPForms, Fluent Forms, ಅಥವಾ Gravity Forms) ಬಳಸಿ ಸಂಪರ್ಕ ಫಾರ್ಮ್ ರಚಿಸುತ್ತದೆ. ಯಾವುದೇ ಪೋಸ್ಟ್ ಅಥವಾ ಪುಟದಲ್ಲಿ ಎಂಬೆಡ್ ಮಾಡಬಹುದಾದ shortcode ಅನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ.

**ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು**

| ಪ್ಯಾರಾಮೀಟರ್ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `title` | string | ಹೌದು | ಫಾರ್ಮ್ ಪ್ಲಗಿನ್ ನಿರ್ವಹಣಾ ವಿಭಾಗದಲ್ಲಿ ತೋರಿಸುವ ಫಾರ್ಮ್ ಹೆಸರು |
| `fields` | array | ಹೌದು | ಫಾರ್ಮ್ ಕ್ಷೇತ್ರಗಳ ಕ್ರಮಬದ್ಧ ಪಟ್ಟಿ (ಕೆಳಗಿನ ಕ್ಷೇತ್ರ ವಸ್ತುವನ್ನು ನೋಡಿ) |
| `recipient` | string | ಇಲ್ಲ | ಸಲ್ಲಿಕೆಗಳನ್ನು ಸ್ವೀಕರಿಸಲು ಇಮೇಲ್ ವಿಳಾಸ. ಪೂರ್ವನಿಯೋಜಿತವಾಗಿ WordPress ನಿರ್ವಹಣಾಧಿಕಾರಿಯ ಇಮೇಲ್ ಬಳಸುತ್ತದೆ |
| `subject` | string | ಇಲ್ಲ | ಇಮೇಲ್ ವಿಷಯ ಸಾಲು. Contact Form 7 ಬಳಸುವಾಗ `[your-name]` ಮತ್ತು `[your-subject]` ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್‌ಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ |
| `confirmation_message` | string | ಇಲ್ಲ | ಯಶಸ್ವಿ ಸಲ್ಲಿಕೆಯ ನಂತರ ತೋರಿಸುವ ಸಂದೇಶ. ಪೂರ್ವನಿಯೋಜಿತ: `"Thank you for your message. We'll be in touch soon."` |

**ಕ್ಷೇತ್ರ ವಸ್ತು**

| ಕೀ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `name` | string | ಹೌದು | ಆಂತರಿಕ ಕ್ಷೇತ್ರ ಹೆಸರು / ಯಂತ್ರ ಕೀ |
| `label` | string | ಹೌದು | ಫಾರ್ಮ್‌ನಲ್ಲಿ ತೋರಿಸುವ ಮಾನವರಿಗೆ ಓದಲು ಸುಲಭವಾದ ಲೇಬಲ್ |
| `type` | string | ಹೌದು | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | ಇಲ್ಲ | ಸಲ್ಲಿಸುವ ಮೊದಲು ಕ್ಷೇತ್ರವನ್ನು ತುಂಬಲೇಬೇಕೇ ಎಂಬುದು. ಪೂರ್ವನಿಯೋಜಿತ `false` |
| `options` | array | ಇಲ್ಲ | `select`, `checkbox`, ಮತ್ತು `radio` ಕ್ಷೇತ್ರಗಳ ಆಯ್ಕೆಗಳು |
| `placeholder` | string | ಇಲ್ಲ | ಪಠ್ಯ-ಪ್ರಕಾರದ ಇನ್‌ಪುಟ್‌ಗಳಿಗಾಗಿ ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್ ಪಠ್ಯ |

**ಉದಾಹರಣೆ**

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

**ಹಿಂತಿರುಗಿಸುವುದು**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## ದೃಶ್ಯ ಪರಿಶೀಲನೆ {#visual-review}

ದೃಶ್ಯ ಪರಿಶೀಲನಾ ಸಾಮರ್ಥ್ಯಗಳು ಏಜೆಂಟ್‌ಗೆ ಲೈವ್ ಪುಟಗಳ ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳನ್ನು ಸೆರೆಹಿಡಿದು ವಿಶ್ಲೇಷಿಸಲು ಅವಕಾಶ ಕೊಡುತ್ತವೆ. ಇದರಿಂದ ಯಾವುದೇ ಬ್ರೌಸರ್ ವಿಸ್ತರಣೆ ಬೇಕಾಗದೆ ಸ್ವಯಂಚಾಲಿತ ವಿನ್ಯಾಸ ಪರಿಶೀಲನೆ, ಮೊದಲು/ನಂತರ ಹೋಲಿಕೆಗಳು, ಮತ್ತು ದೃಶ್ಯ ರಿಗ್ರೆಷನ್ ಪರಿಶೀಲನೆಗಳು ಸಾಧ್ಯವಾಗುತ್ತವೆ.

### `capture_screenshot` {#capturescreenshot}

ನೀಡಿದ URL ನಲ್ಲಿ ಇರುವ WordPress ಪುಟದ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಅನ್ನು ಸರ್ವರ್-ಪಕ್ಷದ ಹೆಡ್‌ಲೆಸ್ ಬ್ರೌಸರ್ ಬಳಸಿ ಸೆರೆಹಿಡಿಯುತ್ತದೆ. ಚಿತ್ರವನ್ನು ಮಾಧ್ಯಮ ಗ್ರಂಥಾಲಯದಲ್ಲಿ ಉಳಿಸಲಾಗುತ್ತದೆ ಮತ್ತು CDN URL ಹಿಂತಿರುಗಿಸಲಾಗುತ್ತದೆ.

**ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು**

| ಪ್ಯಾರಾಮೀಟರ್ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `url` | string | ಹೌದು | ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ತೆಗೆದುಕೊಳ್ಳಬೇಕಾದ ಪುಟದ ಸಂಪೂರ್ಣ URL, ಉದಾ. `https://example.com/about/` |
| `width` | integer | ಇಲ್ಲ | ಪಿಕ್ಸೆಲ್‌ಗಳಲ್ಲಿ ವ್ಯೂಪೋರ್ಟ್ ಅಗಲ. ಪೂರ್ವನಿಯೋಜಿತ `1280` |
| `height` | integer | ಇಲ್ಲ | ಪಿಕ್ಸೆಲ್‌ಗಳಲ್ಲಿ ವ್ಯೂಪೋರ್ಟ್ ಎತ್ತರ. ಪೂರ್ವನಿಯೋಜಿತ `800` |
| `full_page` | boolean | ಇಲ್ಲ | ಕೇವಲ ವ್ಯೂಪೋರ್ಟ್ ಬದಲು ಸಂಪೂರ್ಣ ಸ್ಕ್ರೋಲ್ ಮಾಡಬಹುದಾದ ಪುಟವನ್ನು ಸೆರೆಹಿಡಿಯಿರಿ. ಪೂರ್ವನಿಯೋಜಿತ `false` |
| `delay_ms` | integer | ಇಲ್ಲ | ಪುಟ ಲೋಡ್ ಆದ ನಂತರ ಸೆರೆಹಿಡಿಯುವ ಮೊದಲು ಕಾಯಬೇಕಾದ ಮಿಲಿಸೆಕೆಂಡ್‌ಗಳು; ಅನಿಮೇಟೆಡ್ ವಿಷಯಕ್ಕೆ ಉಪಯುಕ್ತ. ಪೂರ್ವನಿಯೋಜಿತ `500` |
| `label` | string | ಇಲ್ಲ | ಮಾಧ್ಯಮ ಗ್ರಂಥಾಲಯದಲ್ಲಿನ ಅಟ್ಯಾಚ್‌ಮೆಂಟ್ ಜೊತೆಗೆ ಸಂಗ್ರಹಿಸುವ ಮಾನವರಿಗೆ ಓದಲು ಸುಲಭವಾದ ಲೇಬಲ್ |

**ಹಿಂತಿರುಗಿಸುವುದು**

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

ಎರಡು ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳನ್ನು ತೆಗೆದುಕೊಂಡು ದೃಶ್ಯ ವ್ಯತ್ಯಾಸ ಸ್ಕೋರ್ ಜೊತೆಗೆ ಬದಲಾಗಿರುವ ಪ್ರದೇಶಗಳನ್ನು ತೋರಿಸುವ ವ್ಯತ್ಯಾಸ ಚಿತ್ರವನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ವಿನ್ಯಾಸ ಬದಲಾವಣೆ ನಿರೀಕ್ಷಿತ ಫಲಿತಾಂಶ ನೀಡಿದೆಯೇ ಎಂದು ದೃಢಪಡಿಸಲು ಅಥವಾ ಅನಿರೀಕ್ಷಿತ ರಿಗ್ರೆಷನ್‌ಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಲು ಉಪಯುಕ್ತ.

**ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು**

| ಪ್ಯಾರಾಮೀಟರ್ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `before_url` | string | ಹೌದು | "ಮೊದಲು" ಸ್ಥಿತಿಯಾಗಿ ಸೆರೆಹಿಡಿಯಬೇಕಾದ ಪುಟದ URL |
| `after_url` | string | ಹೌದು | "ನಂತರ" ಸ್ಥಿತಿಯಾಗಿ ಸೆರೆಹಿಡಿಯಬೇಕಾದ ಪುಟದ URL. ಕಾಲಾಂತರದಲ್ಲಿ ಹೋಲಿಸುತ್ತಿದ್ದರೆ ಅದೇ URL ಆಗಿರಬಹುದು |
| `width` | integer | ಇಲ್ಲ | ಎರಡೂ ಸೆರೆಹಿಡಿತಗಳಿಗಾಗಿ ವ್ಯೂಪೋರ್ಟ್ ಅಗಲ. ಪೂರ್ವನಿಯೋಜಿತ `1280` |
| `threshold` | float | ಇಲ್ಲ | ಪಿಕ್ಸೆಲ್-ವ್ಯತ್ಯಾಸ ಮಿತಿ (0.0–1.0). ಈ ಸಹಿಷ್ಣುತೆಯೊಳಗಿನ ಪಿಕ್ಸೆಲ್‌ಗಳನ್ನು ಬದಲಾಗಿಲ್ಲ ಎಂದು ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ. ಪೂರ್ವನಿಯೋಜಿತ `0.1` |

**ಹಿಂತಿರುಗಿಸುವುದು**

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

`diff_score` ನ `0.0` ಎಂದರೆ ಗೋಚರ ಬದಲಾವಣೆ ಇಲ್ಲ; `1.0` ಎಂದರೆ ಪ್ರತಿಯೊಂದು ಪಿಕ್ಸೆಲ್ ಬದಲಾಗಿದೆ.

---

### `review_page_design` {#reviewpagedesign}

ಪುಟದ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಸೆರೆಹಿಡಿದು ದೃಶ್ಯ ವಿಶ್ಲೇಷಣೆಗಾಗಿ ಅದನ್ನು ಭಾಷಾ ಮಾದರಿಗೆ ಕಳುಹಿಸುತ್ತದೆ. ವಿನ್ಯಾಸ ವಿನ್ಯಾಸಕ್ರಮ, ಅಕ್ಷರ ವಿನ್ಯಾಸ, ಬಣ್ಣ ಬಳಕೆ, ಮತ್ತು ಪ್ರವೇಶಸಾಧ್ಯತೆ ಸಂಬಂಧಿತ ವಿಚಾರಗಳನ್ನು ಒಳಗೊಂಡ ರಚಿತ ಮೌಲ್ಯಮಾಪನವನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ.

**ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು**

| ಪ್ಯಾರಾಮೀಟರ್ | ಪ್ರಕಾರ | ಅಗತ್ಯ | ವಿವರಣೆ |
|---|---|---|---|
| `url` | string | ಹೌದು | ಪರಿಶೀಲಿಸಬೇಕಾದ ಪುಟದ ಸಂಪೂರ್ಣ URL |
| `focus` | string | ಇಲ್ಲ | ಒತ್ತಿ ಹೇಳಬೇಕಾದ ಪರಿಶೀಲನಾ ಕ್ಷೇತ್ರಗಳ ಕಾಮಾ-ಬೇರ್ಪಡಿಸಿದ ಪಟ್ಟಿ: `layout`, `typography`, `colour`, `accessibility`, `mobile`. ಪೂರ್ವನಿಯೋಜಿತ: ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳು |
| `width` | integer | ಇಲ್ಲ | ವ್ಯೂಪೋರ್ಟ್ ಅಗಲ. ಪೂರ್ವನಿಯೋಜಿತ `1280` |

**ಹಿಂತಿರುಗಿಸುವುದು**

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

## ಸ್ಥಾಪಿಸಬಹುದಾದ ಸಾಮರ್ಥ್ಯಗಳು {#installable-abilities}

ಸ್ಥಾಪಿಸಬಹುದಾದ ಸಾಮರ್ಥ್ಯಗಳ ರಿಜಿಸ್ಟ್ರಿ, WordPress ಪ್ಲಗಿನ್‌ಗಳಾಗಿ ವಿತರಿಸಲಾದ ಹೆಚ್ಚುವರಿ ಸಾಮರ್ಥ್ಯ ಪ್ಯಾಕ್‌ಗಳ ಮೂಲಕ ಏಜೆಂಟ್ ಅನ್ನು ವಿಸ್ತರಿಸಲು ಅವಕಾಶ ಕೊಡುತ್ತದೆ. ಪ್ರತಿ ಪ್ಯಾಕ್ ಮಾನಕ ಸಾಮರ್ಥ್ಯ API ಬಳಸಿ ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಸಾಮರ್ಥ್ಯಗಳನ್ನು ನೋಂದಾಯಿಸುತ್ತದೆ.

### `list_available_abilities` {#listavailableabilities}

ರಿಜಿಸ್ಟ್ರಿಯಿಂದ ಸ್ಥಾಪನೆಗೆ ಲಭ್ಯವಿರುವ ಸಾಮರ್ಥ್ಯ ಪ್ಯಾಕ್‌ಗಳ ಕ್ಯಾಟಲಾಗ್ ಅನ್ನು ಹಿಂತಿರುಗಿಸುತ್ತದೆ.

**ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `category` | string | No | ವರ್ಗದ ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ: `ecommerce`, `seo`, `media`, `social`, `developer` |

**ಹಿಂತಿರುಗಿಸುತ್ತದೆ**

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

registryಯಿಂದ ability pack ಅನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ.

**ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ability pack plugin slug |

**ಹಿಂತಿರುಗಿಸುತ್ತದೆ** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

ವಿವರಿಸಿದ ಬಳಕೆ ಸಂದರ್ಭಕ್ಕೆ ಉತ್ತಮ plugin ಅನ್ನು ಹುಡುಕಲು ability registryಯನ್ನು ಪ್ರಶ್ನಿಸುತ್ತದೆ ಮತ್ತು ಐಚ್ಛಿಕವಾಗಿ ಅದನ್ನು ಸ್ಥಾಪಿಸುತ್ತದೆ.

**ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `description` | string | Yes | ಬೇಕಾದ ಕಾರ್ಯಕ್ಷಮತೆಯ ಸಹಜ ಭಾಷೆಯ ವಿವರಣೆ |
| `install` | boolean | No | `true` ಆಗಿದ್ದರೆ, ಶಿಫಾರಸು ಮಾಡಿದ plugin ಅನ್ನು ತಕ್ಷಣ ಸ್ಥಾಪಿಸುತ್ತದೆ. ಪೂರ್ವನಿಯೋಜಿತ `false` |

**ಉದಾಹರಣೆ**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**ಹಿಂತಿರುಗಿಸುತ್ತದೆ**

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
