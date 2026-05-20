---
title: "Generate Logo SVG"
sidebar_position: 1
---

# Generate Logo SVG

The **Generate Logo SVG** ability allows Theme Builder to create and embed custom logo SVGs directly into your WordPress site with automatic namespace-safe sanitisation.

## Overview

This ability generates scalable vector graphics (SVG) logos based on your site's branding direction and design preferences. The generated SVGs are automatically sanitised to ensure they are safe for use in WordPress while maintaining visual integrity.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | The name of the site for which to generate the logo |
| `style` | string | Yes | The design style (e.g., "modern", "classic", "minimalist", "playful") |
| `colors` | array | No | Array of hex color codes to use in the logo (e.g., `["#678233", "#ffffff"]`) |
| `width` | number | No | SVG width in pixels (default: 200) |
| `height` | number | No | SVG height in pixels (default: 200) |
| `include_text` | boolean | No | Whether to include the site name as text in the logo (default: true) |

## Output Format

The ability returns an SVG string with the following structure:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG Sanitisation Behaviour

The generated SVGs undergo automatic namespace-safe sanitisation to:

- **Remove unsafe attributes** — strips event handlers, scripts, and potentially dangerous attributes
- **Preserve namespaces** — maintains SVG namespaces (xmlns, xlink) for proper rendering
- **Validate structure** — ensures the SVG conforms to W3C standards
- **Encode entities** — properly escapes special characters in text content
- **Remove external references** — strips external stylesheets and image references

This ensures the SVG is safe to embed directly in WordPress without requiring additional sanitisation.

## Usage Example

**Prompt:**
```
Generate a modern logo for my tech startup called "CloudSync" using blue and white colors.
```

**Result:**
The ability creates an SVG logo that:
- Incorporates the site name "CloudSync"
- Uses the specified blue and white color scheme
- Follows modern design principles
- Is automatically sanitised and ready to use

## Integration with Theme Builder

When using Theme Builder's design-direction selection, the Generate Logo SVG ability:

1. Analyzes your design direction and color palette
2. Generates a custom SVG logo matching your preferences
3. Automatically embeds the logo into your site's header/branding area
4. Stores the SVG as a custom logo in WordPress media

## Best Practices

- **Provide clear style preferences** — describe the design style you want (modern, classic, playful, etc.)
- **Specify colors** — include your brand colors for consistency
- **Test rendering** — verify the logo displays correctly across different screen sizes
- **Customize further** — use WordPress's logo customization tools to adjust size and placement

## Limitations

- SVG logos are generated as static graphics (not animated)
- Complex logos with many elements may require manual refinement
- Custom fonts are not supported; text uses system fonts
- Very large or very small dimensions may affect quality

## Related Abilities

- [Validate Palette Contrast](./validate-palette-contrast.md) — check color contrast for accessibility
- [Create Menu](./create-menu.md) — create navigation menus for your site
