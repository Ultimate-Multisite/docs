---
title: "Abilities Reference"
sidebar_position: 2
---

# Abilities Reference

Abilities are the atomic actions that Gratis AI Agent can invoke on your WordPress installation. Each ability is a registered PHP class that exposes a JSON schema — the agent reads this schema at runtime to understand what parameters are required and what the ability returns.

This page documents all abilities shipping with Gratis AI Agent v1.9.0.

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

## Content Management

Content Management abilities create and edit WordPress posts and pages. Post IDs are returned so subsequent steps in multi-ability plans can reference the created content.

### `create_post`

Creates a new WordPress post, page, or custom post type entry.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Post title |
| `content` | string | No | Post body — accepts plain text, HTML, or serialised block markup |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Default `draft` |
| `post_type` | string | No | Post type slug, e.g. `post`, `page`, or any registered CPT. Default `post` |
| `excerpt` | string | No | Short summary shown in archives and search results |
| `categories` | array | No | Array of category names or IDs to assign |
| `tags` | array | No | Array of tag names or IDs to assign |
| `author` | integer | No | WordPress user ID to set as the post author. Defaults to the current user |
| `date` | string | No | Publish date in ISO 8601 format, e.g. `2026-05-01T09:00:00` |
| `page_template` | string | No | Template file to assign to this post or page, e.g. `page-full-width.php`. Only meaningful when `post_type` is `page` or a CPT that supports page templates. |

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

Updates an existing WordPress post or page.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID of the post to update |
| `title` | string | No | New post title |
| `content` | string | No | New post body |
| `status` | string | No | New status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | New excerpt |
| `categories` | array | No | Replace the full category list with this array of names or IDs |
| `tags` | array | No | Replace the full tag list with this array of names or IDs |
| `page_template` | string | No | New template file to assign to this post or page, e.g. `page-full-width.php`. Pass an empty string to remove the template assignment and revert to the theme default. |

**Example** — change template after creation

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Returns** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Creates multiple posts in a single ability call, reducing round-trips during site builds or bulk content import. Posts are created in sequence; if one fails the others continue and the failure is reported in the results array.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | Array of post objects, each accepting the same parameters as `create_post` |
| `stop_on_error` | boolean | No | If `true`, stop processing after the first failure. Default `false` |

**Example**

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

**Returns**

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

Assigns a featured image (post thumbnail) to an existing post or page. Accepts an existing Media Library attachment ID or a remote image URL; when a URL is supplied, the image is downloaded and imported automatically.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID of the post or page to update |
| `attachment_id` | integer | No | ID of an existing Media Library attachment |
| `url` | string | No | Remote image URL to import and set as the featured image |
| `alt_text` | string | No | Alt text to apply to the attachment if it is imported from a URL |

One of `attachment_id` or `url` must be provided.

**Returns** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Creates a contact form using the active form plugin (Contact Form 7, WPForms, Fluent Forms, or Gravity Forms, depending on which is installed). Returns a shortcode that can be embedded in any post or page.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Form name shown in the form plugin admin |
| `fields` | array | Yes | Ordered list of form fields (see Field object below) |
| `recipient` | string | No | Email address to receive submissions. Defaults to the WordPress admin email |
| `subject` | string | No | Email subject line. Supports `[your-name]` and `[your-subject]` placeholders when using Contact Form 7 |
| `confirmation_message` | string | No | Message displayed after a successful submission. Default: `"Thank you for your message. We'll be in touch soon."` |

**Field object**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Internal field name / machine key |
| `label` | string | Yes | Human-readable label shown on the form |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Whether the field must be filled before submission. Default `false` |
| `options` | array | No | Options for `select`, `checkbox`, and `radio` fields |
| `placeholder` | string | No | Placeholder text for text-type inputs |

**Example**

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

**Returns**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Visual Review

Visual Review abilities let the agent capture screenshots of live pages and analyse them, enabling autonomous design review, before/after comparisons, and visual regression checks without requiring any browser extension.

### `capture_screenshot`

Captures a screenshot of a WordPress page at a given URL using a server-side headless browser. The image is saved to the Media Library and a CDN URL is returned.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Full URL of the page to screenshot, e.g. `https://example.com/about/` |
| `width` | integer | No | Viewport width in pixels. Default `1280` |
| `height` | integer | No | Viewport height in pixels. Default `800` |
| `full_page` | boolean | No | Capture the full scrollable page instead of just the viewport. Default `false` |
| `delay_ms` | integer | No | Milliseconds to wait after page load before capturing, useful for animated content. Default `500` |
| `label` | string | No | Human-readable label stored with the attachment in the Media Library |

**Returns**

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

Takes two screenshots and returns a visual diff score plus a diff image highlighting changed regions. Useful for confirming that a design change produced the expected result or for detecting unintended regressions.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL of the page to capture as the "before" state |
| `after_url` | string | Yes | URL of the page to capture as the "after" state. May be the same URL if comparing across time |
| `width` | integer | No | Viewport width for both captures. Default `1280` |
| `threshold` | float | No | Pixel-difference threshold (0.0–1.0). Pixels within this tolerance are considered unchanged. Default `0.1` |

**Returns**

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

A `diff_score` of `0.0` means no visible change; `1.0` means every pixel changed.

---

### `review_page_design`

Captures a screenshot of a page and sends it to the language model for visual analysis. Returns a structured assessment covering layout, typography, colour usage, and accessibility concerns.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Full URL of the page to review |
| `focus` | string | No | Comma-separated list of review areas to emphasise: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Default: all areas |
| `width` | integer | No | Viewport width. Default `1280` |

**Returns**

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
