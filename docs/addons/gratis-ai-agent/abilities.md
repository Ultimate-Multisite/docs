---
title: "Abilities Reference"
sidebar_position: 2
---

# Abilities Reference

Abilities are the atomic actions that Gratis AI Agent can invoke on your WordPress installation. Each ability is a registered PHP class that exposes a JSON schema — the agent reads this schema at runtime to understand what parameters are required and what the ability returns.

This page documents all abilities shipping with Gratis AI Agent v1.4.0.

---

## Custom Post Types

These abilities manage custom post types (CPTs) registered through the agent. Registrations are persisted to the WordPress options table so they survive plugin deactivation and reactivation.

### `register_post_type`

Registers a new custom post type.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | The post type key (max 20 characters, no uppercase, no spaces) |
| `singular_label` | string | Yes | Human-readable singular name, e.g. `Portfolio Item` |
| `plural_label` | string | Yes | Human-readable plural name, e.g. `Portfolio Items` |
| `public` | boolean | No | Whether the post type is publicly accessible. Default `true` |
| `supports` | array | No | Features to support: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Default `["title","editor"]` |
| `has_archive` | boolean | No | Whether a post type archive page is enabled. Default `false` |
| `menu_icon` | string | No | Dashicons class or URL for the admin menu icon. Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | URL slug for the post type. Defaults to `slug` |

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

Returns all custom post types registered by the agent.

**Parameters** — none

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

---

### `delete_post_type`

Unregisters a custom post type previously registered by the agent. Existing posts of that type remain in the database but are no longer accessible via the post type.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | The post type key to remove |

**Returns** `{ "success": true, "slug": "portfolio" }`

---

## Custom Taxonomies

These abilities manage custom taxonomies. Like CPTs, taxonomy registrations are persisted.

### `register_taxonomy`

Registers a new custom taxonomy.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | The taxonomy key (max 32 characters) |
| `singular_label` | string | Yes | Human-readable singular name, e.g. `Project Category` |
| `plural_label` | string | Yes | Human-readable plural name, e.g. `Project Categories` |
| `post_types` | array | Yes | Post type slugs this taxonomy should be attached to |
| `hierarchical` | boolean | No | `true` for category-style, `false` for tag-style. Default `true` |
| `public` | boolean | No | Whether terms are publicly accessible. Default `true` |
| `rewrite_slug` | string | No | URL slug for the taxonomy. Defaults to `slug` |

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

---

### `list_taxonomies`

Returns all custom taxonomies registered by the agent.

**Parameters** — none

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

Unregisters a custom taxonomy previously registered by the agent.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | The taxonomy key to remove |

**Returns** `{ "success": true, "slug": "project-category" }`

---

## Design System

Design system abilities modify the visual presentation of the WordPress site — from custom CSS to block patterns and the site logo.

### `inject_custom_css`

Appends CSS to the site's `<head>` via `wp_add_inline_style`. CSS is stored in the `gratis_ai_agent_custom_css` option and dequeued cleanly when the ability is reset.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | Valid CSS to inject |
| `label` | string | No | Human-readable label for this CSS block, used in debug logs. Default `"agent-injected"` |
| `replace` | boolean | No | If `true`, replaces all previously injected CSS. Default `false` (appends) |

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

Registers a reusable block pattern in the WordPress pattern library.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Pattern identifier, e.g. `gratis/hero-dark` |
| `title` | string | Yes | Human-readable pattern name shown in the editor |
| `content` | string | Yes | Serialised block markup (HTML) for the pattern |
| `categories` | array | No | Pattern category slugs, e.g. `["featured", "hero"]` |
| `description` | string | No | Short description shown in the pattern picker |
| `keywords` | array | No | Search keywords |

**Returns** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Lists all block patterns registered by the agent.

**Parameters** — none

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

Sets the WordPress site logo to a given attachment ID or a remote image URL. When a URL is provided, the image is downloaded and imported into the Media Library.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | ID of an existing Media Library attachment |
| `url` | string | No | Remote image URL to import and set as the logo |

One of `attachment_id` or `url` must be provided.

**Returns** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Applies a named colour/typography preset to the active theme's `theme.json` (or `global-styles`). Presets are curated bundles maintained by the Gratis AI Agent team.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | Preset name, e.g. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | If `true`, merge with existing values rather than replacing. Default `false` |

**Available presets**

| Preset | Description |
|---|---|
| `minimal-dark` | Near-black background, white text, single accent colour |
| `warm-editorial` | Warm off-white background, serif headings, earthy accent colours |
| `corporate-blue` | Navy and white palette with professional typography |
| `vibrant-startup` | Bright gradients, rounded corners, modern sans-serif type |
| `classic-blog` | Neutral greys, comfortable line-height, traditional layout spacing |

**Returns** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles

Global Styles abilities read and write theme.json values through the WordPress Global Styles API, affecting all blocks and templates sitewide.

### `get_global_styles`

Returns the current global styles configuration.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | JSON pointer to a specific value, e.g. `/color/palette` or `/typography/fontSizes`. Returns the entire object if omitted. |

**Returns** the full global styles object or the value at `path`.

---

### `set_global_styles`

Updates one or more values in the global styles configuration.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Yes | JSON pointer to the value to set, e.g. `/color/palette` |
| `value` | any | Yes | The new value |

**Example** — add a colour to the palette

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Returns** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Resets all agent-applied global styles changes, restoring the theme defaults.

**Parameters** — none

**Returns** `{ "success": true }`

---

## Navigation Menus

Navigation Menu abilities create and manage WordPress nav menus and their items.

### `create_menu`

Creates a new WordPress navigation menu.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Menu name, e.g. `Primary Navigation` |
| `location` | string | No | Theme location to assign this menu to, e.g. `primary` |

**Returns** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Renames a menu or reassigns it to a theme location.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID of the menu to update |
| `name` | string | No | New menu name |
| `location` | string | No | Theme location to assign or reassign |

**Returns** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Adds an item to an existing navigation menu.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID of the target menu |
| `type` | string | Yes | Item type: `custom`, `post_type`, or `taxonomy` |
| `title` | string | No | Label for the menu item (required for `custom` type) |
| `url` | string | No | URL for `custom` items |
| `object_id` | integer | No | Post ID or term ID for `post_type`/`taxonomy` items |
| `parent_id` | integer | No | Menu item ID to nest this item under |
| `position` | integer | No | Zero-based position in the menu |

**Returns** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Removes an item from a navigation menu.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | Menu item ID to remove |

**Returns** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Lists all WordPress navigation menus, including their assigned theme locations.

**Parameters** — none

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

## Options Management

Options abilities read and write WordPress options via `get_option` / `update_option`. A built-in safety blocklist prevents accidental modification of critical settings.

### `get_option`

Reads a WordPress option.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | The option key, e.g. `blogname` |

**Returns** `{ "option_name": "blogname", "value": "My Site" }`

Returns an error if `option_name` is on the safety blocklist.

---

### `set_option`

Writes a WordPress option.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | The option key |
| `value` | any | Yes | The new value (serialised automatically for arrays/objects) |
| `autoload` | string | No | `"yes"` or `"no"`. Default preserves the existing autoload setting |

Returns an error if `option_name` is on the safety blocklist.

**Returns** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Deletes a WordPress option.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | The option key to delete |

Returns an error if `option_name` is on the safety blocklist.

**Returns** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Lists WordPress options matching a pattern.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | SQL LIKE pattern to filter option names, e.g. `gratis_%`. Returns all options if omitted (use with caution on large databases). |
| `limit` | integer | No | Maximum number of results. Default `50`, max `500` |

**Returns**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Installable Abilities

The Installable Abilities Registry lets you extend the agent with additional ability packs distributed as WordPress plugins. Each pack registers one or more abilities using the standard ability API.

### `list_available_abilities`

Returns the catalogue of ability packs available for installation from the registry.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `category` | string | No | Filter by category: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Returns**

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

Downloads and activates an ability pack from the registry.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ability pack plugin slug |

**Returns** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Queries the ability registry to find the best plugin for a described use case and, optionally, installs it.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `description` | string | Yes | Natural language description of the desired functionality |
| `install` | boolean | No | If `true`, installs the recommended plugin immediately. Default `false` |

**Example**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Returns**

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
