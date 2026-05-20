---
title: "Create Menu"
sidebar_position: 3
---

# Create Menu

The **Create Menu** ability creates WordPress navigation menus with support for distinct navigation labels separate from page titles.

## Overview

This ability extends the standard menu creation functionality with the ability to specify a `navigation_label` parameter. This allows you to create menus where the label displayed in navigation differs from the page title, providing more flexibility in site structure and user experience.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Menu name, e.g. `Primary Navigation` |
| `location` | string | No | Theme location to assign this menu to, e.g. `primary` |
| `navigation_label` | string | No | Label to display in navigation (distinct from page title) |

## Return Value

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigation Label vs Page Title

The `navigation_label` parameter allows you to separate the internal menu name from the label displayed to users:

- **`name`** — Internal menu identifier used by WordPress (e.g., "Primary Navigation")
- **`navigation_label`** — The label displayed to site visitors in the navigation (e.g., "Main Menu")

This is useful when:
- Your internal naming convention differs from user-facing labels
- You want shorter labels in navigation than in the admin panel
- You need to support multiple languages with different label lengths
- You're building menus for specific regions or user groups

## Usage Examples

### Example 1: Simple Menu with Navigation Label

**Prompt:**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
```

**Result:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Example 2: Menu for Specific Theme Location

**Prompt:**
```
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
```

**Result:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integration with Theme Builder

When using Theme Builder, the Create Menu ability:

1. Automatically detects available theme menu locations
2. Creates menus with appropriate navigation labels for your design
3. Assigns menus to the correct theme locations
4. Supports adding menu items after creation

## Related Abilities

- **`add_menu_item`** — Add items to an existing menu
- **`update_menu`** — Rename a menu or reassign it to a theme location
- **`delete_menu`** — Remove a menu from your site

## Best Practices

- **Use clear navigation labels** — keep labels concise and descriptive for users
- **Match theme locations** — assign menus to the correct theme location for proper display
- **Plan menu structure** — decide on your menu hierarchy before creating items
- **Test responsiveness** — verify menus display correctly on mobile devices
- **Localize labels** — use different navigation labels for different language versions

## Limitations

- Navigation labels are display-only; the internal `name` is still used for WordPress identification
- Theme support varies; not all themes support all menu locations
- Menu items must be added separately after menu creation
- Changing a navigation label requires updating the menu

## Related Abilities

- [Generate Logo SVG](./generate-logo-svg.md) — create logos for your site header
- [Validate Palette Contrast](./validate-palette-contrast.md) — ensure accessible color schemes
