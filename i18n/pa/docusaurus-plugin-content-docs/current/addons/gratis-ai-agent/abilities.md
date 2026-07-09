---
title: ਸਮਰੱਥਾਵਾਂ ਦਾ ਹਵਾਲਾ
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# ਸਮਰੱਥਾਵਾਂ ਹਵਾਲਾ {#abilities-reference}

ਸਮਰੱਥਾਵਾਂ ਉਹ ਪਰਮਾਣੂ ਕਾਰਵਾਈਆਂ ਹਨ ਜਿਨ੍ਹਾਂ ਨੂੰ Gratis AI Agent ਤੁਹਾਡੀ WordPress ਇੰਸਟਾਲੇਸ਼ਨ ’ਤੇ ਚਲਾ ਸਕਦਾ ਹੈ। ਹਰ ਸਮਰੱਥਾ ਇੱਕ ਦਰਜ ਕੀਤੀ PHP ਕਲਾਸ ਹੈ ਜੋ ਇੱਕ JSON ਸਕੀਮਾ ਉਘਾੜਦੀ ਹੈ — ਏਜੰਟ ਰਨਟਾਈਮ ’ਤੇ ਇਹ ਸਕੀਮਾ ਪੜ੍ਹਦਾ ਹੈ ਤਾਂ ਜੋ ਸਮਝ ਸਕੇ ਕਿ ਕਿਹੜੇ ਪੈਰਾਮੀਟਰ ਲੋੜੀਂਦੇ ਹਨ ਅਤੇ ਸਮਰੱਥਾ ਕੀ ਵਾਪਸ ਕਰਦੀ ਹੈ।

ਇਹ ਪੰਨਾ Gratis AI Agent v1.9.0 ਨਾਲ ਆਉਣ ਵਾਲੀਆਂ ਸਾਰੀਆਂ ਸਮਰੱਥਾਵਾਂ ਦਾ ਦਸਤਾਵੇਜ਼ੀਕਰਨ ਕਰਦਾ ਹੈ।

---

## ਕਸਟਮ ਪੋਸਟ ਕਿਸਮਾਂ {#custom-post-types}

ਇਹ ਸਮਰੱਥਾਵਾਂ ਏਜੰਟ ਰਾਹੀਂ ਦਰਜ ਕੀਤੀਆਂ ਕਸਟਮ ਪੋਸਟ ਕਿਸਮਾਂ (CPTs) ਦਾ ਪ੍ਰਬੰਧ ਕਰਦੀਆਂ ਹਨ। ਦਰਜੀਆਂ WordPress ਵਿਕਲਪਾਂ ਦੀ ਟੇਬਲ ਵਿੱਚ ਸੰਭਾਲੀਆਂ ਜਾਂਦੀਆਂ ਹਨ ਤਾਂ ਜੋ ਉਹ plugin ਨੂੰ ਨਿਸ਼ਕ੍ਰਿਆ ਅਤੇ ਮੁੜ-ਸਕ੍ਰਿਆ ਕਰਨ ਤੋਂ ਬਾਅਦ ਵੀ ਕਾਇਮ ਰਹਿਣ।

### `register_post_type` {#registerposttype}

ਇੱਕ ਨਵੀਂ ਕਸਟਮ ਪੋਸਟ ਕਿਸਮ ਦਰਜ ਕਰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `slug` | string | ਹਾਂ | ਪੋਸਟ ਕਿਸਮ ਦੀ ਕੁੰਜੀ (ਵੱਧ ਤੋਂ ਵੱਧ 20 ਅੱਖਰ, ਕੋਈ ਵੱਡੇ ਅੱਖਰ ਨਹੀਂ, ਕੋਈ ਖਾਲੀ ਥਾਂ ਨਹੀਂ) |
| `singular_label` | string | ਹਾਂ | ਮਨੁੱਖ-ਵਾਚਨਯੋਗ ਇਕਵਚਨ ਨਾਮ, ਜਿਵੇਂ `Portfolio Item` |
| `plural_label` | string | ਹਾਂ | ਮਨੁੱਖ-ਵਾਚਨਯੋਗ ਬਹੁਵਚਨ ਨਾਮ, ਜਿਵੇਂ `Portfolio Items` |
| `public` | boolean | ਨਹੀਂ | ਕੀ ਪੋਸਟ ਕਿਸਮ ਸਰਵਜਨਕ ਤੌਰ ’ਤੇ ਪਹੁੰਚਯੋਗ ਹੈ। ਡਿਫਾਲਟ `true` |
| `supports` | array | ਨਹੀਂ | ਸਮਰਥਨ ਲਈ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`। ਡਿਫਾਲਟ `["title","editor"]` |
| `has_archive` | boolean | ਨਹੀਂ | ਕੀ ਪੋਸਟ ਕਿਸਮ ਦਾ ਅਰਕਾਈਵ ਪੰਨਾ ਚਾਲੂ ਹੈ। ਡਿਫਾਲਟ `false` |
| `menu_icon` | string | ਨਹੀਂ | ਐਡਮਿਨ ਮੇਨੂ ਆਈਕਨ ਲਈ Dashicons ਕਲਾਸ ਜਾਂ URL। ਡਿਫਾਲਟ `"dashicons-admin-post"` |
| `rewrite_slug` | string | ਨਹੀਂ | ਪੋਸਟ ਕਿਸਮ ਲਈ URL ਸਲੱਗ। ਡਿਫਾਲਟ `slug` |

**ਉਦਾਹਰਨ**

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

**ਵਾਪਸ ਕਰਦਾ ਹੈ** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

ਏਜੰਟ ਵੱਲੋਂ ਦਰਜ ਕੀਤੀਆਂ ਸਾਰੀਆਂ ਕਸਟਮ ਪੋਸਟ ਕਿਸਮਾਂ ਵਾਪਸ ਕਰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ** — ਕੋਈ ਨਹੀਂ

**ਵਾਪਸ ਕਰਦਾ ਹੈ**

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

ਏਜੰਟ ਵੱਲੋਂ ਪਹਿਲਾਂ ਦਰਜ ਕੀਤੀ ਕਸਟਮ ਪੋਸਟ ਕਿਸਮ ਨੂੰ ਅਨਰਜਿਸਟਰ ਕਰਦਾ ਹੈ। ਉਸ ਕਿਸਮ ਦੀਆਂ ਮੌਜੂਦਾ ਪੋਸਟਾਂ ਡਾਟਾਬੇਸ ਵਿੱਚ ਰਹਿੰਦੀਆਂ ਹਨ ਪਰ ਹੁਣ ਪੋਸਟ ਕਿਸਮ ਰਾਹੀਂ ਪਹੁੰਚਯੋਗ ਨਹੀਂ ਹੁੰਦੀਆਂ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `slug` | string | ਹਾਂ | ਹਟਾਉਣ ਲਈ ਪੋਸਟ ਕਿਸਮ ਦੀ ਕੁੰਜੀ |

**ਵਾਪਸ ਕਰਦਾ ਹੈ** `{ "success": true, "slug": "portfolio" }`

---

## ਕਸਟਮ ਟੈਕਸੋਨਾਮੀਆਂ {#custom-taxonomies}

ਇਹ ਸਮਰੱਥਾਵਾਂ ਕਸਟਮ ਟੈਕਸੋਨਾਮੀਆਂ ਦਾ ਪ੍ਰਬੰਧ ਕਰਦੀਆਂ ਹਨ। CPTs ਵਾਂਗ, ਟੈਕਸੋਨਾਮੀ ਦਰਜੀਆਂ ਵੀ ਸੰਭਾਲੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।

### `register_taxonomy` {#registertaxonomy}

ਇੱਕ ਨਵੀਂ ਕਸਟਮ ਟੈਕਸੋਨਾਮੀ ਦਰਜ ਕਰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `slug` | string | ਹਾਂ | ਟੈਕਸੋਨਾਮੀ ਕੁੰਜੀ (ਵੱਧ ਤੋਂ ਵੱਧ 32 ਅੱਖਰ) |
| `singular_label` | string | ਹਾਂ | ਮਨੁੱਖ-ਵਾਚਨਯੋਗ ਇਕਵਚਨ ਨਾਮ, ਜਿਵੇਂ `Project Category` |
| `plural_label` | string | ਹਾਂ | ਮਨੁੱਖ-ਵਾਚਨਯੋਗ ਬਹੁਵਚਨ ਨਾਮ, ਜਿਵੇਂ `Project Categories` |
| `post_types` | array | ਹਾਂ | ਪੋਸਟ ਕਿਸਮ ਸਲੱਗ ਜਿਨ੍ਹਾਂ ਨਾਲ ਇਹ ਟੈਕਸੋਨਾਮੀ ਜੋੜੀ ਜਾਣੀ ਚਾਹੀਦੀ ਹੈ |
| `hierarchical` | boolean | ਨਹੀਂ | ਸ਼੍ਰੇਣੀ-ਸ਼ੈਲੀ ਲਈ `true`, ਟੈਗ-ਸ਼ੈਲੀ ਲਈ `false`। ਡਿਫਾਲਟ `true` |
| `public` | boolean | ਨਹੀਂ | ਕੀ ਟਰਮਾਂ ਸਰਵਜਨਕ ਤੌਰ ’ਤੇ ਪਹੁੰਚਯੋਗ ਹਨ। ਡਿਫਾਲਟ `true` |
| `rewrite_slug` | string | ਨਹੀਂ | ਟੈਕਸੋਨਾਮੀ ਲਈ URL ਸਲੱਗ। ਡਿਫਾਲਟ `slug` |

**ਉਦਾਹਰਨ**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**ਵਾਪਸ ਕਰਦਾ ਹੈ** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

ਏਜੰਟ ਵੱਲੋਂ ਦਰਜ ਕੀਤੀਆਂ ਸਾਰੀਆਂ ਕਸਟਮ ਟੈਕਸੋਨਾਮੀਆਂ ਵਾਪਸ ਕਰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ** — ਕੋਈ ਨਹੀਂ

**ਵਾਪਸ ਕਰਦਾ ਹੈ**

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

ਏਜੰਟ ਵੱਲੋਂ ਪਹਿਲਾਂ ਦਰਜ ਕੀਤੀ ਕਸਟਮ ਟੈਕਸੋਨਾਮੀ ਨੂੰ ਅਨਰਜਿਸਟਰ ਕਰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `slug` | string | ਹਾਂ | ਹਟਾਉਣ ਲਈ ਟੈਕਸੋਨਾਮੀ ਕੁੰਜੀ |

**ਵਾਪਸ ਕਰਦਾ ਹੈ** `{ "success": true, "slug": "project-category" }`

---

## ਡਿਜ਼ਾਈਨ ਸਿਸਟਮ {#design-system}

ਡਿਜ਼ਾਈਨ ਸਿਸਟਮ ਸਮਰੱਥਾਵਾਂ WordPress site ਦੀ ਦ੍ਰਿਸ਼ ਪੇਸ਼ਕਸ਼ ਨੂੰ ਬਦਲਦੀਆਂ ਹਨ — ਕਸਟਮ CSS ਤੋਂ ਲੈ ਕੇ ਬਲਾਕ ਪੈਟਰਨਾਂ ਅਤੇ site ਲੋਗੋ ਤੱਕ।

### `inject_custom_css` {#injectcustomcss}

`wp_add_inline_style` ਰਾਹੀਂ site ਦੇ `<head>` ਵਿੱਚ CSS ਜੋੜਦਾ ਹੈ। CSS `gratis_ai_agent_custom_css` ਵਿਕਲਪ ਵਿੱਚ ਸੰਭਾਲੀ ਜਾਂਦੀ ਹੈ ਅਤੇ ਜਦੋਂ ਸਮਰੱਥਾ ਰੀਸੈੱਟ ਕੀਤੀ ਜਾਂਦੀ ਹੈ ਤਾਂ ਸਾਫ਼-ਸੁਥਰੇ ਢੰਗ ਨਾਲ ਡੀਕਿਊ ਹੋ ਜਾਂਦੀ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `css` | string | ਹਾਂ | ਇੰਜੈਕਟ ਕਰਨ ਲਈ ਵੈਧ CSS |
| `label` | string | ਨਹੀਂ | ਇਸ CSS ਬਲਾਕ ਲਈ ਮਨੁੱਖ-ਵਾਚਨਯੋਗ ਲੇਬਲ, ਡੀਬੱਗ ਲਾਗਾਂ ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। ਡਿਫਾਲਟ `"agent-injected"` |
| `replace` | boolean | ਨਹੀਂ | ਜੇ `true`, ਤਾਂ ਪਹਿਲਾਂ ਇੰਜੈਕਟ ਕੀਤੀ ਸਾਰੀ CSS ਨੂੰ ਬਦਲਦਾ ਹੈ। ਡਿਫਾਲਟ `false` (ਜੋੜਦਾ ਹੈ) |

**ਉਦਾਹਰਨ**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**ਵਾਪਸ ਕਰਦਾ ਹੈ** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress ਪੈਟਰਨ ਲਾਇਬ੍ਰੇਰੀ ਵਿੱਚ ਮੁੜ-ਵਰਤਣਯੋਗ ਬਲਾਕ ਪੈਟਰਨ ਦਰਜ ਕਰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `slug` | string | ਹਾਂ | ਪੈਟਰਨ ਪਛਾਣਕਰਤਾ, ਜਿਵੇਂ `gratis/hero-dark` |
| `title` | string | ਹਾਂ | ਸੰਪਾਦਕ ਵਿੱਚ ਦਿਖਾਇਆ ਜਾਣ ਵਾਲਾ ਮਨੁੱਖ-ਵਾਚਨਯੋਗ ਪੈਟਰਨ ਨਾਮ |
| `content` | string | ਹਾਂ | ਪੈਟਰਨ ਲਈ ਸੀਰੀਅਲਾਈਜ਼ ਕੀਤਾ ਬਲਾਕ ਮਾਰਕਅੱਪ (HTML) |
| `categories` | array | ਨਹੀਂ | ਪੈਟਰਨ ਸ਼੍ਰੇਣੀ ਸਲੱਗ, ਜਿਵੇਂ `["featured", "hero"]` |
| `description` | string | ਨਹੀਂ | ਪੈਟਰਨ ਚੁਣਨ ਵਾਲੇ ਵਿੱਚ ਦਿਖਾਇਆ ਜਾਣ ਵਾਲਾ ਛੋਟਾ ਵੇਰਵਾ |
| `keywords` | array | ਨਹੀਂ | ਖੋਜ ਕੀਵਰਡ |

**ਵਾਪਸ ਕਰਦਾ ਹੈ** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

ਏਜੰਟ ਵੱਲੋਂ ਦਰਜ ਕੀਤੇ ਸਾਰੇ ਬਲਾਕ ਪੈਟਰਨ ਸੂਚੀਬੱਧ ਕਰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ** — ਕੋਈ ਨਹੀਂ

**ਵਾਪਸੀ ਕਰਦਾ ਹੈ**

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

WordPress ਸਾਈਟ ਲੋਗੋ ਨੂੰ ਦਿੱਤੇ ਗਏ attachment ID ਜਾਂ remote image URL ਨਾਲ ਸੈੱਟ ਕਰਦਾ ਹੈ। ਜਦੋਂ URL ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਚਿੱਤਰ ਡਾਊਨਲੋਡ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਅਤੇ Media Library ਵਿੱਚ ਇੰਪੋਰਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `attachment_id` | integer | ਨਹੀਂ | ਮੌਜੂਦਾ Media Library attachment ਦਾ ID |
| `url` | string | ਨਹੀਂ | ਇੰਪੋਰਟ ਕਰਕੇ ਲੋਗੋ ਵਜੋਂ ਸੈੱਟ ਕਰਨ ਲਈ remote image URL |

`attachment_id` ਜਾਂ `url` ਵਿੱਚੋਂ ਇੱਕ ਦੇਣਾ ਲਾਜ਼ਮੀ ਹੈ।

**ਵਾਪਸੀ ਕਰਦਾ ਹੈ** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

ਸਕ੍ਰਿਆ theme ਦੇ `theme.json` (ਜਾਂ `global-styles`) ਉੱਤੇ ਨਾਮਿਤ ਰੰਗ/ਟਾਈਪੋਗ੍ਰਾਫੀ preset ਲਾਗੂ ਕਰਦਾ ਹੈ। Presets, Gratis AI Agent ਟੀਮ ਦੁਆਰਾ ਸੰਭਾਲੇ ਗਏ ਚੁਣੇ ਹੋਏ bundles ਹਨ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `preset` | string | ਹਾਂ | Preset ਨਾਮ, ਉਦਾਹਰਨ ਲਈ `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | ਨਹੀਂ | ਜੇ `true` ਹੋਵੇ, ਤਾਂ ਬਦਲਣ ਦੀ ਬਜਾਏ ਮੌਜੂਦਾ ਮੁੱਲਾਂ ਨਾਲ ਮਿਲਾਓ। ਮੂਲ `false` |

**ਉਪਲਬਧ presets**

| Preset | ਵੇਰਵਾ |
|---|---|
| `minimal-dark` | ਲਗਭਗ ਕਾਲਾ ਪਿਛੋਕੜ, ਚਿੱਟਾ ਟੈਕਸਟ, ਇੱਕਲਾ accent ਰੰਗ |
| `warm-editorial` | ਗਰਮ off-white ਪਿਛੋਕੜ, serif headings, earthy accent ਰੰਗ |
| `corporate-blue` | ਪੇਸ਼ੇਵਰ ਟਾਈਪੋਗ੍ਰਾਫੀ ਨਾਲ navy ਅਤੇ ਚਿੱਟੀ palette |
| `vibrant-startup` | ਚਮਕਦਾਰ gradients, ਗੋਲ ਕੋਨੇ, ਆਧੁਨਿਕ sans-serif ਕਿਸਮ |
| `classic-blog` | neutral greys, ਸੁਖਦਾਇਕ line-height, ਰਵਾਇਤੀ layout spacing |

**ਵਾਪਸੀ ਕਰਦਾ ਹੈ** `{ "success": true, "preset": "minimal-dark" }`

---

## ਗਲੋਬਲ Styles {#global-styles}

ਗਲੋਬਲ Styles ਸਮਰੱਥਾਵਾਂ WordPress Global Styles API ਰਾਹੀਂ theme.json ਮੁੱਲਾਂ ਨੂੰ ਪੜ੍ਹਦੀਆਂ ਅਤੇ ਲਿਖਦੀਆਂ ਹਨ, ਜਿਸ ਨਾਲ sitewide ਸਾਰੇ blocks ਅਤੇ templates ਪ੍ਰਭਾਵਿਤ ਹੁੰਦੇ ਹਨ।

### `get_global_styles` {#getglobalstyles}

ਮੌਜੂਦਾ global styles configuration ਵਾਪਸ ਕਰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `path` | string | ਨਹੀਂ | ਕਿਸੇ ਖਾਸ ਮੁੱਲ ਲਈ JSON pointer, ਉਦਾਹਰਨ ਲਈ `/color/palette` ਜਾਂ `/typography/fontSizes`। ਜੇ ਛੱਡਿਆ ਗਿਆ ਹੋਵੇ ਤਾਂ ਪੂਰਾ object ਵਾਪਸ ਕਰਦਾ ਹੈ। |

**ਵਾਪਸੀ ਕਰਦਾ ਹੈ** ਪੂਰਾ global styles object ਜਾਂ `path` ਉੱਤੇ ਮੌਜੂਦ ਮੁੱਲ।

---

### `set_global_styles` {#setglobalstyles}

global styles configuration ਵਿੱਚ ਇੱਕ ਜਾਂ ਵੱਧ ਮੁੱਲਾਂ ਨੂੰ ਅੱਪਡੇਟ ਕਰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `path` | string | ਹਾਂ | ਸੈੱਟ ਕਰਨ ਵਾਲੇ ਮੁੱਲ ਲਈ JSON pointer, ਉਦਾਹਰਨ ਲਈ `/color/palette` |
| `value` | any | ਹਾਂ | ਨਵਾਂ ਮੁੱਲ |

**ਉਦਾਹਰਨ** — palette ਵਿੱਚ ਇੱਕ ਰੰਗ ਸ਼ਾਮਲ ਕਰੋ

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**ਵਾਪਸੀ ਕਰਦਾ ਹੈ** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

agent ਦੁਆਰਾ ਲਾਗੂ ਕੀਤੀਆਂ ਸਾਰੀਆਂ global styles ਤਬਦੀਲੀਆਂ ਨੂੰ reset ਕਰਦਾ ਹੈ, theme defaults ਨੂੰ ਮੁੜ ਸਥਾਪਿਤ ਕਰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ** — ਕੋਈ ਨਹੀਂ

**ਵਾਪਸੀ ਕਰਦਾ ਹੈ** `{ "success": true }`

---

## Navigation Menus {#navigation-menus}

Navigation Menu ਸਮਰੱਥਾਵਾਂ WordPress nav menus ਅਤੇ ਉਹਨਾਂ ਦੀਆਂ items ਬਣਾਉਂਦੀਆਂ ਅਤੇ ਪ੍ਰਬੰਧਿਤ ਕਰਦੀਆਂ ਹਨ।

### `create_menu` {#createmenu}

ਨਵਾਂ WordPress navigation menu ਬਣਾਉਂਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `name` | string | ਹਾਂ | Menu ਨਾਮ, ਉਦਾਹਰਨ ਲਈ `Primary Navigation` |
| `location` | string | ਨਹੀਂ | ਇਸ menu ਨੂੰ assign ਕਰਨ ਲਈ theme location, ਉਦਾਹਰਨ ਲਈ `primary` |

**ਵਾਪਸੀ ਕਰਦਾ ਹੈ** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

ਕਿਸੇ menu ਦਾ ਨਾਮ ਬਦਲਦਾ ਹੈ ਜਾਂ ਇਸਨੂੰ theme location ਨੂੰ ਮੁੜ assign ਕਰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `menu_id` | integer | ਹਾਂ | ਅੱਪਡੇਟ ਕਰਨ ਵਾਲੇ menu ਦਾ ID |
| `name` | string | ਨਹੀਂ | ਨਵਾਂ menu ਨਾਮ |
| `location` | string | ਨਹੀਂ | assign ਜਾਂ reassign ਕਰਨ ਲਈ theme location |

**ਵਾਪਸੀ ਕਰਦਾ ਹੈ** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

ਮੌਜੂਦਾ navigation menu ਵਿੱਚ ਇੱਕ item ਸ਼ਾਮਲ ਕਰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `menu_id` | integer | ਹਾਂ | target menu ਦਾ ID |
| `type` | string | ਹਾਂ | Item ਕਿਸਮ: `custom`, `post_type`, ਜਾਂ `taxonomy` |
| `title` | string | ਨਹੀਂ | menu item ਲਈ label (`custom` ਕਿਸਮ ਲਈ ਲੋੜੀਂਦਾ) |
| `url` | string | ਨਹੀਂ | `custom` items ਲਈ URL |
| `object_id` | integer | ਨਹੀਂ | `post_type`/`taxonomy` items ਲਈ Post ID ਜਾਂ term ID |
| `parent_id` | integer | ਨਹੀਂ | ਇਸ item ਨੂੰ ਜਿਸ ਦੇ ਹੇਠਾਂ nest ਕਰਨਾ ਹੈ, ਉਸ menu item ਦਾ ID |
| `position` | integer | ਨਹੀਂ | menu ਵਿੱਚ zero-based ਸਥਿਤੀ |

**ਵਾਪਸੀ ਕਰਦਾ ਹੈ** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

navigation menu ਵਿੱਚੋਂ ਇੱਕ item ਹਟਾਉਂਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `item_id` | integer | ਹਾਂ | ਹਟਾਉਣ ਵਾਲੇ Menu item ਦਾ ID |

**ਵਾਪਸੀ ਕਰਦਾ ਹੈ** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

ਸਾਰੇ WordPress navigation menus ਦੀ ਸੂਚੀ ਦਿੰਦਾ ਹੈ, ਉਹਨਾਂ ਦੀਆਂ assigned theme locations ਸਮੇਤ।

**ਪੈਰਾਮੀਟਰ** — ਕੋਈ ਨਹੀਂ

**ਵਾਪਸੀ ਕਰਦਾ ਹੈ**

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

## Options Management {#options-management}

Options ਸਮਰੱਥਾਵਾਂ `get_option` / `update_option` ਰਾਹੀਂ WordPress options ਨੂੰ ਪੜ੍ਹਦੀਆਂ ਅਤੇ ਲਿਖਦੀਆਂ ਹਨ। ਇੱਕ built-in safety blocklist ਨਾਜ਼ੁਕ settings ਵਿੱਚ ਅਣਜਾਣੇ ਤੌਰ 'ਤੇ ਤਬਦੀਲੀ ਤੋਂ ਰੋਕਦੀ ਹੈ।

### `get_option` {#getoption}

WordPress option ਪੜ੍ਹਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `option_name` | string | ਹਾਂ | option key, ਉਦਾਹਰਨ ਲਈ `blogname` |

**ਵਾਪਸੀ ਕਰਦਾ ਹੈ** `{ "option_name": "blogname", "value": "My Site" }`

ਜੇ `option_name` safety blocklist ਉੱਤੇ ਹੋਵੇ ਤਾਂ error ਵਾਪਸ ਕਰਦਾ ਹੈ।

---

### `set_option` {#setoption}

WordPress option ਲਿਖਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `option_name` | string | ਹਾਂ | option key |
| `value` | any | ਹਾਂ | ਨਵਾਂ ਮੁੱਲ (arrays/objects ਲਈ ਆਪਣੇ ਆਪ serialised) |
| `autoload` | string | ਨਹੀਂ | `"yes"` ਜਾਂ `"no"`। ਮੂਲ ਮੌਜੂਦਾ autoload setting ਨੂੰ ਬਰਕਰਾਰ ਰੱਖਦਾ ਹੈ |

ਜੇ `option_name` safety blocklist ਵਿੱਚ ਹੈ ਤਾਂ ਗਲਤੀ ਵਾਪਸ ਕਰਦਾ ਹੈ।

**ਵਾਪਸ ਕਰਦਾ ਹੈ** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

ਇੱਕ WordPress ਵਿਕਲਪ ਮਿਟਾਉਂਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `option_name` | string | ਹਾਂ | ਮਿਟਾਉਣ ਲਈ ਵਿਕਲਪ ਕੁੰਜੀ |

ਜੇ `option_name` safety blocklist ਵਿੱਚ ਹੈ ਤਾਂ ਗਲਤੀ ਵਾਪਸ ਕਰਦਾ ਹੈ।

**ਵਾਪਸ ਕਰਦਾ ਹੈ** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

ਇੱਕ ਪੈਟਰਨ ਨਾਲ ਮੇਲ ਖਾਂਦੇ WordPress ਵਿਕਲਪਾਂ ਦੀ ਸੂਚੀ ਦਿੰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `pattern` | string | ਨਹੀਂ | ਵਿਕਲਪ ਨਾਵਾਂ ਨੂੰ ਛਾਂਟਣ ਲਈ SQL LIKE ਪੈਟਰਨ, ਉਦਾਹਰਨ ਲਈ `gratis_%`। ਜੇ ਛੱਡਿਆ ਗਿਆ ਹੋਵੇ ਤਾਂ ਸਾਰੇ ਵਿਕਲਪ ਵਾਪਸ ਕਰਦਾ ਹੈ (ਵੱਡੇ ਡਾਟਾਬੇਸਾਂ ਤੇ ਸਾਵਧਾਨੀ ਨਾਲ ਵਰਤੋ)। |
| `limit` | integer | ਨਹੀਂ | ਨਤੀਜਿਆਂ ਦੀ ਵੱਧ ਤੋਂ ਵੱਧ ਗਿਣਤੀ। ਡਿਫਾਲਟ `50`, ਅਧਿਕਤਮ `500` |

**ਵਾਪਸ ਕਰਦਾ ਹੈ**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## ਸਮੱਗਰੀ ਪ੍ਰਬੰਧਨ {#content-management}

ਸਮੱਗਰੀ ਪ੍ਰਬੰਧਨ ਦੀਆਂ ਯੋਗਤਾਵਾਂ WordPress ਪੋਸਟਾਂ ਅਤੇ ਪੰਨਿਆਂ ਨੂੰ ਬਣਾਉਂਦੀਆਂ ਅਤੇ ਸੋਧਦੀਆਂ ਹਨ। ਪੋਸਟ IDs ਵਾਪਸ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ ਤਾਂ ਜੋ ਬਹੁ-ਯੋਗਤਾ ਯੋਜਨਾਵਾਂ ਵਿੱਚ ਅਗਲੇ ਕਦਮ ਬਣਾਈ ਗਈ ਸਮੱਗਰੀ ਦਾ ਹਵਾਲਾ ਦੇ ਸਕਣ।

### `create_post` {#createpost}

ਨਵੀਂ WordPress ਪੋਸਟ, ਪੰਨਾ, ਜਾਂ ਕਸਟਮ ਪੋਸਟ ਕਿਸਮ ਦੀ ਐਂਟਰੀ ਬਣਾਉਂਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `title` | string | ਹਾਂ | ਪੋਸਟ ਸਿਰਲੇਖ |
| `content` | string | ਨਹੀਂ | ਪੋਸਟ ਬਾਡੀ — ਸਧਾਰਣ ਟੈਕਸਟ, HTML, ਜਾਂ serialised block markup ਸਵੀਕਾਰ ਕਰਦਾ ਹੈ |
| `status` | string | ਨਹੀਂ | `draft`, `publish`, `pending`, `private`। ਡਿਫਾਲਟ `draft` |
| `post_type` | string | ਨਹੀਂ | ਪੋਸਟ ਕਿਸਮ slug, ਉਦਾਹਰਨ ਲਈ `post`, `page`, ਜਾਂ ਕੋਈ ਵੀ ਰਜਿਸਟਰ ਕੀਤਾ CPT। ਡਿਫਾਲਟ `post` |
| `excerpt` | string | ਨਹੀਂ | ਆਰਕਾਈਵਾਂ ਅਤੇ ਖੋਜ ਨਤੀਜਿਆਂ ਵਿੱਚ ਦਿਖਾਈ ਜਾਣ ਵਾਲੀ ਛੋਟੀ ਸੰਖੇਪ ਜਾਣਕਾਰੀ |
| `categories` | array | ਨਹੀਂ | ਨਿਰਧਾਰਤ ਕਰਨ ਲਈ ਸ਼੍ਰੇਣੀ ਨਾਵਾਂ ਜਾਂ IDs ਦੀ ਐਰੇ |
| `tags` | array | ਨਹੀਂ | ਨਿਰਧਾਰਤ ਕਰਨ ਲਈ ਟੈਗ ਨਾਵਾਂ ਜਾਂ IDs ਦੀ ਐਰੇ |
| `author` | integer | ਨਹੀਂ | ਪੋਸਟ ਲੇਖਕ ਵਜੋਂ ਸੈੱਟ ਕਰਨ ਲਈ WordPress ਯੂਜ਼ਰ ID। ਮੌਜੂਦਾ ਯੂਜ਼ਰ ਨੂੰ ਡਿਫਾਲਟ ਕਰਦਾ ਹੈ |
| `date` | string | ਨਹੀਂ | ISO 8601 ਫਾਰਮੈਟ ਵਿੱਚ ਪ੍ਰਕਾਸ਼ਨ ਮਿਤੀ, ਉਦਾਹਰਨ ਲਈ `2026-05-01T09:00:00` |
| `page_template` | string | ਨਹੀਂ | ਇਸ ਪੋਸਟ ਜਾਂ ਪੰਨੇ ਨੂੰ ਨਿਰਧਾਰਤ ਕਰਨ ਲਈ ਟੈਂਪਲੇਟ ਫਾਈਲ, ਉਦਾਹਰਨ ਲਈ `page-full-width.php`। ਕੇਵਲ ਤਦੋਂ ਹੀ ਅਰਥਪੂਰਨ ਜਦੋਂ `post_type` `page` ਹੋਵੇ ਜਾਂ ਕੋਈ CPT ਜੋ ਪੇਜ ਟੈਂਪਲੇਟਾਂ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੋਵੇ। |

**ਉਦਾਹਰਨ**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**ਵਾਪਸ ਕਰਦਾ ਹੈ** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

ਮੌਜੂਦਾ WordPress ਪੋਸਟ ਜਾਂ ਪੰਨਾ ਅੱਪਡੇਟ ਕਰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `post_id` | integer | ਹਾਂ | ਅੱਪਡੇਟ ਕਰਨ ਵਾਲੀ ਪੋਸਟ ਦੀ ID |
| `title` | string | ਨਹੀਂ | ਨਵਾਂ ਪੋਸਟ ਸਿਰਲੇਖ |
| `content` | string | ਨਹੀਂ | ਨਵੀਂ ਪੋਸਟ ਬਾਡੀ |
| `status` | string | ਨਹੀਂ | ਨਵੀਂ ਸਥਿਤੀ: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | ਨਹੀਂ | ਨਵਾਂ ਅੰਸ਼ |
| `categories` | array | ਨਹੀਂ | ਪੂਰੀ ਸ਼੍ਰੇਣੀ ਸੂਚੀ ਨੂੰ ਨਾਵਾਂ ਜਾਂ IDs ਦੀ ਇਸ ਐਰੇ ਨਾਲ ਬਦਲੋ |
| `tags` | array | ਨਹੀਂ | ਪੂਰੀ ਟੈਗ ਸੂਚੀ ਨੂੰ ਨਾਵਾਂ ਜਾਂ IDs ਦੀ ਇਸ ਐਰੇ ਨਾਲ ਬਦਲੋ |
| `page_template` | string | ਨਹੀਂ | ਇਸ ਪੋਸਟ ਜਾਂ ਪੰਨੇ ਨੂੰ ਨਿਰਧਾਰਤ ਕਰਨ ਲਈ ਨਵੀਂ ਟੈਂਪਲੇਟ ਫਾਈਲ, ਉਦਾਹਰਨ ਲਈ `page-full-width.php`। ਟੈਂਪਲੇਟ ਨਿਰਧਾਰਣ ਹਟਾਉਣ ਅਤੇ theme ਡਿਫਾਲਟ ਤੇ ਵਾਪਸ ਜਾਣ ਲਈ ਖਾਲੀ ਸਟ੍ਰਿੰਗ ਪਾਸ ਕਰੋ। |

**ਉਦਾਹਰਨ** — ਬਣਾਉਣ ਤੋਂ ਬਾਅਦ ਟੈਂਪਲੇਟ ਬਦਲੋ

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**ਵਾਪਸ ਕਰਦਾ ਹੈ** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

ਇੱਕ ਹੀ ਯੋਗਤਾ ਕਾਲ ਵਿੱਚ ਕਈ ਪੋਸਟਾਂ ਬਣਾਉਂਦਾ ਹੈ, ਜਿਸ ਨਾਲ site ਬਣਾਉਣ ਜਾਂ ਵੱਡੀ ਮਾਤਰਾ ਵਿੱਚ ਸਮੱਗਰੀ ਆਯਾਤ ਕਰਨ ਦੌਰਾਨ round-trips ਘਟਦੇ ਹਨ। ਪੋਸਟਾਂ ਕ੍ਰਮਵਾਰ ਬਣਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ; ਜੇ ਇੱਕ ਅਸਫਲ ਹੋ ਜਾਵੇ ਤਾਂ ਹੋਰ ਜਾਰੀ ਰਹਿੰਦੀਆਂ ਹਨ ਅਤੇ ਅਸਫਲਤਾ ਨਤੀਜਿਆਂ ਦੀ ਐਰੇ ਵਿੱਚ ਰਿਪੋਰਟ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `posts` | array | ਹਾਂ | ਪੋਸਟ ਆਬਜੈਕਟਾਂ ਦੀ ਐਰੇ, ਹਰ ਇੱਕ `create_post` ਵਰਗੇ ਹੀ ਪੈਰਾਮੀਟਰ ਸਵੀਕਾਰ ਕਰਦਾ ਹੈ |
| `stop_on_error` | boolean | ਨਹੀਂ | ਜੇ `true` ਹੋਵੇ, ਤਾਂ ਪਹਿਲੀ ਅਸਫਲਤਾ ਤੋਂ ਬਾਅਦ ਪ੍ਰਕਿਰਿਆ ਰੋਕੋ। ਡਿਫਾਲਟ `false` |

**ਉਦਾਹਰਨ**

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

**ਵਾਪਸ ਕਰਦਾ ਹੈ**

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

ਮੌਜੂਦਾ ਪੋਸਟ ਜਾਂ ਪੰਨੇ ਨੂੰ featured image (ਪੋਸਟ thumbnail) ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ। ਮੌਜੂਦਾ Media Library attachment ID ਜਾਂ ਰਿਮੋਟ ਚਿੱਤਰ URL ਸਵੀਕਾਰ ਕਰਦਾ ਹੈ; ਜਦੋਂ URL ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ, ਚਿੱਤਰ ਆਪਣੇ ਆਪ ਡਾਊਨਲੋਡ ਅਤੇ ਆਯਾਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `post_id` | integer | ਹਾਂ | ਅੱਪਡੇਟ ਕਰਨ ਵਾਲੀ ਪੋਸਟ ਜਾਂ ਪੰਨੇ ਦੀ ID |
| `attachment_id` | integer | ਨਹੀਂ | ਮੌਜੂਦਾ Media Library attachment ਦੀ ID |
| `url` | string | ਨਹੀਂ | ਆਯਾਤ ਕਰਨ ਅਤੇ featured image ਵਜੋਂ ਸੈੱਟ ਕਰਨ ਲਈ ਰਿਮੋਟ ਚਿੱਤਰ URL |
| `alt_text` | string | ਨਹੀਂ | ਜੇ ਇਹ URL ਤੋਂ ਆਯਾਤ ਕੀਤਾ ਗਿਆ ਹੈ ਤਾਂ attachment ਤੇ ਲਾਗੂ ਕਰਨ ਲਈ Alt ਟੈਕਸਟ |

`attachment_id` ਜਾਂ `url` ਵਿੱਚੋਂ ਇੱਕ ਦੇਣਾ ਲਾਜ਼ਮੀ ਹੈ।

**ਵਾਪਸ ਕਰਦਾ ਹੈ** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

ਸਰਗਰਮ ਫਾਰਮ plugin (Contact Form 7, WPForms, Fluent Forms, ਜਾਂ Gravity Forms, ਇਸ ਗੱਲ ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ ਕਿ ਕਿਹੜਾ ਇੰਸਟਾਲ ਹੈ) ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਸੰਪਰਕ ਫਾਰਮ ਬਣਾਉਂਦਾ ਹੈ। ਇੱਕ shortcode ਵਾਪਸ ਕਰਦਾ ਹੈ ਜਿਸ ਨੂੰ ਕਿਸੇ ਵੀ ਪੋਸਟ ਜਾਂ ਪੰਨੇ ਵਿੱਚ embed ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `title` | string | ਹਾਂ | ਫਾਰਮ plugin admin ਵਿੱਚ ਦਿਖਾਇਆ ਜਾਣ ਵਾਲਾ ਫਾਰਮ ਨਾਮ |
| `fields` | array | ਹਾਂ | ਫਾਰਮ ਖੇਤਰਾਂ ਦੀ ਕ੍ਰਮਬੱਧ ਸੂਚੀ (ਹੇਠਾਂ Field ਆਬਜੈਕਟ ਵੇਖੋ) |
| `recipient` | string | ਨਹੀਂ | ਜਮ੍ਹਾਂ ਕੀਤੀਆਂ ਐਂਟਰੀਆਂ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਈਮੇਲ ਪਤਾ। ਡਿਫਾਲਟ WordPress admin ਈਮੇਲ ਹੈ |
| `subject` | string | ਨਹੀਂ | ਈਮੇਲ ਵਿਸ਼ਾ ਲਾਈਨ। Contact Form 7 ਵਰਤਦੇ ਸਮੇਂ `[your-name]` ਅਤੇ `[your-subject]` placeholders ਦਾ ਸਮਰਥਨ ਕਰਦੀ ਹੈ |
| `confirmation_message` | string | ਨਹੀਂ | ਸਫਲ ਜਮ੍ਹਾਂਕਰਨ ਤੋਂ ਬਾਅਦ ਦਿਖਾਇਆ ਜਾਣ ਵਾਲਾ ਸੁਨੇਹਾ। ਡਿਫਾਲਟ: `"Thank you for your message. We'll be in touch soon."` |

**ਖੇਤਰ ਆਬਜੈਕਟ**

| ਕੁੰਜੀ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `name` | string | ਹਾਂ | ਅੰਦਰੂਨੀ ਖੇਤਰ ਨਾਮ / ਮਸ਼ੀਨ ਕੁੰਜੀ |
| `label` | string | ਹਾਂ | ਫਾਰਮ ਉੱਤੇ ਦਿਖਾਇਆ ਜਾਣ ਵਾਲਾ ਮਨੁੱਖ-ਪੜ੍ਹਨਯੋਗ ਲੇਬਲ |
| `type` | string | ਹਾਂ | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | ਨਹੀਂ | ਕੀ ਜਮ੍ਹਾਂਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਖੇਤਰ ਭਰਨਾ ਲਾਜ਼ਮੀ ਹੈ। ਡਿਫਾਲਟ `false` |
| `options` | array | ਨਹੀਂ | `select`, `checkbox`, ਅਤੇ `radio` ਖੇਤਰਾਂ ਲਈ ਵਿਕਲਪ |
| `placeholder` | string | ਨਹੀਂ | ਟੈਕਸਟ-ਕਿਸਮ ਇਨਪੁੱਟਾਂ ਲਈ placeholder ਟੈਕਸਟ |

**ਉਦਾਹਰਨ**

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

**ਵਾਪਸ ਕਰਦਾ ਹੈ**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## ਵਿਜ਼ੂਅਲ ਸਮੀਖਿਆ {#visual-review}

Visual Review ਸਮਰੱਥਾਵਾਂ agent ਨੂੰ ਲਾਈਵ ਪੰਨਿਆਂ ਦੇ ਸਕ੍ਰੀਨਸ਼ਾਟ ਕੈਪਚਰ ਕਰਨ ਅਤੇ ਉਨ੍ਹਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨ ਦਿੰਦੀਆਂ ਹਨ, ਜਿਸ ਨਾਲ ਕਿਸੇ ਵੀ browser extension ਦੀ ਲੋੜ ਤੋਂ ਬਿਨਾਂ ਖੁਦਮੁਖਤਿਆਰ ਡਿਜ਼ਾਈਨ ਸਮੀਖਿਆ, ਪਹਿਲਾਂ/ਬਾਅਦ ਤੁਲਨਾਵਾਂ, ਅਤੇ ਵਿਜ਼ੂਅਲ ਰਿਗ੍ਰੈਸ਼ਨ ਜਾਂਚਾਂ ਸੰਭਵ ਹੁੰਦੀਆਂ ਹਨ।

### `capture_screenshot` {#capturescreenshot}

ਸਰਵਰ-ਪਾਸੇ headless browser ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਦਿੱਤੇ URL ’ਤੇ WordPress ਪੰਨੇ ਦਾ ਸਕ੍ਰੀਨਸ਼ਾਟ ਕੈਪਚਰ ਕਰਦਾ ਹੈ। ਚਿੱਤਰ Media Library ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਅਤੇ CDN URL ਵਾਪਸ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `url` | string | ਹਾਂ | ਸਕ੍ਰੀਨਸ਼ਾਟ ਲਈ ਪੰਨੇ ਦਾ ਪੂਰਾ URL, ਉਦਾਹਰਨ ਲਈ `https://example.com/about/` |
| `width` | integer | ਨਹੀਂ | pixels ਵਿੱਚ viewport ਚੌੜਾਈ। ਡਿਫਾਲਟ `1280` |
| `height` | integer | ਨਹੀਂ | pixels ਵਿੱਚ viewport ਉਚਾਈ। ਡਿਫਾਲਟ `800` |
| `full_page` | boolean | ਨਹੀਂ | ਕੇਵਲ viewport ਦੀ ਬਜਾਏ ਪੂਰਾ scrollable ਪੰਨਾ ਕੈਪਚਰ ਕਰੋ। ਡਿਫਾਲਟ `false` |
| `delay_ms` | integer | ਨਹੀਂ | ਪੰਨਾ ਲੋਡ ਹੋਣ ਤੋਂ ਬਾਅਦ ਕੈਪਚਰ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਉਡੀਕਣ ਲਈ milliseconds, animated ਸਮੱਗਰੀ ਲਈ ਲਾਭਦਾਇਕ। ਡਿਫਾਲਟ `500` |
| `label` | string | ਨਹੀਂ | Media Library ਵਿੱਚ attachment ਨਾਲ ਸਟੋਰ ਕੀਤਾ ਮਨੁੱਖ-ਪੜ੍ਹਨਯੋਗ ਲੇਬਲ |

**ਵਾਪਸ ਕਰਦਾ ਹੈ**

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

ਦੋ ਸਕ੍ਰੀਨਸ਼ਾਟ ਲੈਂਦਾ ਹੈ ਅਤੇ ਬਦਲੇ ਹੋਏ ਖੇਤਰਾਂ ਨੂੰ ਉਜਾਗਰ ਕਰਨ ਵਾਲੇ diff ਚਿੱਤਰ ਦੇ ਨਾਲ ਇੱਕ ਵਿਜ਼ੂਅਲ diff ਸਕੋਰ ਵਾਪਸ ਕਰਦਾ ਹੈ। ਇਹ ਪੁਸ਼ਟੀ ਕਰਨ ਲਈ ਲਾਭਦਾਇਕ ਹੈ ਕਿ ਡਿਜ਼ਾਈਨ ਬਦਲਾਅ ਨੇ ਉਮੀਦ ਕੀਤਾ ਨਤੀਜਾ ਦਿੱਤਾ ਹੈ ਜਾਂ ਅਣਚਾਹੀਆਂ ਰਿਗ੍ਰੈਸ਼ਨਾਂ ਦੀ ਪਛਾਣ ਕਰਨ ਲਈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `before_url` | string | ਹਾਂ | "before" ਹਾਲਤ ਵਜੋਂ ਕੈਪਚਰ ਕਰਨ ਲਈ ਪੰਨੇ ਦਾ URL |
| `after_url` | string | ਹਾਂ | "after" ਹਾਲਤ ਵਜੋਂ ਕੈਪਚਰ ਕਰਨ ਲਈ ਪੰਨੇ ਦਾ URL। ਸਮੇਂ ਦੇ ਅੰਤਰ ਨਾਲ ਤੁਲਨਾ ਕਰਦੇ ਹੋਏ ਇਹ ਉਹੀ URL ਹੋ ਸਕਦਾ ਹੈ |
| `width` | integer | ਨਹੀਂ | ਦੋਵੇਂ ਕੈਪਚਰਾਂ ਲਈ viewport ਚੌੜਾਈ। ਡਿਫਾਲਟ `1280` |
| `threshold` | float | ਨਹੀਂ | Pixel-difference threshold (0.0–1.0)। ਇਸ ਸਹਿਨਸ਼ੀਲਤਾ ਅੰਦਰ pixels ਨੂੰ ਅਣਬਦਲੇ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ। ਡਿਫਾਲਟ `0.1` |

**ਵਾਪਸ ਕਰਦਾ ਹੈ**

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

`0.0` ਦਾ `diff_score` ਮਤਲਬ ਕੋਈ ਦਿਖਾਈ ਦੇਣ ਵਾਲਾ ਬਦਲਾਅ ਨਹੀਂ; `1.0` ਮਤਲਬ ਹਰ pixel ਬਦਲਿਆ।

---

### `review_page_design` {#reviewpagedesign}

ਕਿਸੇ ਪੰਨੇ ਦਾ ਸਕ੍ਰੀਨਸ਼ਾਟ ਕੈਪਚਰ ਕਰਦਾ ਹੈ ਅਤੇ ਵਿਜ਼ੂਅਲ ਵਿਸ਼ਲੇਸ਼ਣ ਲਈ ਇਸਨੂੰ language model ਨੂੰ ਭੇਜਦਾ ਹੈ। layout, typography, colour ਵਰਤੋਂ, ਅਤੇ accessibility ਚਿੰਤਾਵਾਂ ਨੂੰ ਕਵਰ ਕਰਨ ਵਾਲਾ ਸੰਰਚਿਤ ਮੁਲਾਂਕਣ ਵਾਪਸ ਕਰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `url` | string | ਹਾਂ | ਸਮੀਖਿਆ ਕਰਨ ਲਈ ਪੰਨੇ ਦਾ ਪੂਰਾ URL |
| `focus` | string | ਨਹੀਂ | ਜ਼ੋਰ ਦੇਣ ਲਈ ਸਮੀਖਿਆ ਖੇਤਰਾਂ ਦੀ comma-separated ਸੂਚੀ: `layout`, `typography`, `colour`, `accessibility`, `mobile`। ਡਿਫਾਲਟ: ਸਾਰੇ ਖੇਤਰ |
| `width` | integer | ਨਹੀਂ | Viewport ਚੌੜਾਈ। ਡਿਫਾਲਟ `1280` |

**ਵਾਪਸ ਕਰਦਾ ਹੈ**

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

## ਇੰਸਟਾਲਯੋਗ ਸਮਰੱਥਾਵਾਂ {#installable-abilities}

Installable Abilities Registry ਤੁਹਾਨੂੰ WordPress plugins ਵਜੋਂ ਵੰਡੇ ਗਏ ਵਾਧੂ ਸਮਰੱਥਾ ਪੈਕਾਂ ਨਾਲ agent ਨੂੰ ਵਧਾਉਣ ਦਿੰਦੀ ਹੈ। ਹਰ ਪੈਕ ਮਿਆਰੀ ਸਮਰੱਥਾ API ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਇੱਕ ਜਾਂ ਵੱਧ ਸਮਰੱਥਾਵਾਂ ਰਜਿਸਟਰ ਕਰਦਾ ਹੈ।

### `list_available_abilities` {#listavailableabilities}

ਰਜਿਸਟਰੀ ਤੋਂ ਇੰਸਟਾਲੇਸ਼ਨ ਲਈ ਉਪਲਬਧ ਸਮਰੱਥਾ ਪੈਕਾਂ ਦਾ ਕੈਟਾਲਾਗ ਵਾਪਸ ਕਰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `category` | string | ਨਹੀਂ | ਸ਼੍ਰੇਣੀ ਅਨੁਸਾਰ ਫਿਲਟਰ ਕਰੋ: `ecommerce`, `seo`, `media`, `social`, `developer` |

**ਵਾਪਸ ਕਰਦਾ ਹੈ**

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

ਰਜਿਸਟਰੀ ਤੋਂ ਇੱਕ ਯੋਗਤਾ ਪੈਕ ਡਾਊਨਲੋਡ ਅਤੇ ਸਰਗਰਮ ਕਰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `slug` | string | ਹਾਂ | ਯੋਗਤਾ ਪੈਕ ਪਲੱਗਇਨ slug |

**ਵਾਪਸ ਕਰਦਾ ਹੈ** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

ਵਰਣਿਤ ਵਰਤੋਂ ਦੇ ਮਾਮਲੇ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਪਲੱਗਇਨ ਲੱਭਣ ਵਾਸਤੇ ਯੋਗਤਾ ਰਜਿਸਟਰੀ ਨੂੰ ਕਵੇਰੀ ਕਰਦਾ ਹੈ ਅਤੇ, ਵਿਕਲਪਕ ਤੌਰ 'ਤੇ, ਇਸ ਨੂੰ ਇੰਸਟਾਲ ਕਰਦਾ ਹੈ।

**ਪੈਰਾਮੀਟਰ**

| ਪੈਰਾਮੀਟਰ | ਕਿਸਮ | ਲੋੜੀਂਦਾ | ਵੇਰਵਾ |
|---|---|---|---|
| `description` | string | ਹਾਂ | ਚਾਹੀਦੀ ਕਾਰਗੁਜ਼ਾਰੀ ਦਾ ਕੁਦਰਤੀ ਭਾਸ਼ਾ ਵਿੱਚ ਵੇਰਵਾ |
| `install` | boolean | ਨਹੀਂ | ਜੇ `true` ਹੋਵੇ, ਤਾਂ ਸਿਫ਼ਾਰਸ਼ ਕੀਤਾ ਪਲੱਗਇਨ ਤੁਰੰਤ ਇੰਸਟਾਲ ਕਰਦਾ ਹੈ। ਡਿਫ਼ਾਲਟ `false` |

**ਉਦਾਹਰਨ**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**ਵਾਪਸ ਕਰਦਾ ਹੈ**

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
