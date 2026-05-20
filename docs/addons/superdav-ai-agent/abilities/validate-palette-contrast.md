---
title: "Validate Palette Contrast"
sidebar_position: 2
---

# Validate Palette Contrast

The **Validate Palette Contrast** ability checks colour pairs in your design palette for WCAG (Web Content Accessibility Guidelines) compliance before applying them to your theme.

## Overview

This ability ensures your site's color scheme meets accessibility standards by validating contrast ratios between text and background colors. It helps prevent color combinations that could be difficult for users with visual impairments to read.

## Input Format

The ability accepts a color palette as input:

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Array of color objects with `name` and `hex` properties |
| `wcag_level` | string | No | WCAG compliance level: "A", "AA" (default), or "AAA" |
| `pairs_to_check` | array | No | Specific color pairs to validate (e.g., `["primary-text", "background-text"]`) |

## WCAG Levels Checked

The ability validates contrast ratios according to WCAG standards:

| Level | Normal Text | Large Text | Minimum Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normal Text** — text smaller than 18pt (or 14pt bold)
- **Large Text** — text 18pt or larger (or 14pt bold or larger)

## Output Schema

The ability returns a detailed validation report:

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### Output Fields

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Whether the entire palette meets the specified WCAG level |
| `wcag_level` | string | The WCAG level that was checked |
| `pairs` | array | Detailed results for each color pair |
| `contrast_ratio` | number | The calculated contrast ratio (1:1 to 21:1) |
| `status` | string | "pass" or "fail" for each pair |
| `recommendations` | array | Suggestions for improving failing pairs |

## Usage Example

**Prompt:**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**Result:**
The ability validates all color combinations and returns:
- ✅ Primary + Text: 5.2:1 ratio (passes WCAG AA)
- ✅ Background + Text: 12.1:1 ratio (passes WCAG AAA)
- Overall: Compliant with WCAG AA

## Integration with Theme Builder

When using Theme Builder's design-direction selection, the Validate Palette Contrast ability:

1. Analyzes your selected color palette
2. Checks all text-background combinations
3. Validates against your chosen WCAG level
4. Provides recommendations for non-compliant pairs
5. Prevents applying inaccessible color schemes

## Best Practices

- **Start with AA level** — WCAG AA is the standard for most websites
- **Test before applying** — validate your palette before committing to a design
- **Check all combinations** — ensure text, links, and UI elements all meet standards
- **Consider user preferences** — some users may have additional color sensitivity
- **Use contrast checkers** — combine this ability with browser tools for verification

## Failing Pairs and Recommendations

If a color pair fails validation, the ability provides recommendations:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Lighten the text color to #ffffff (ratio would be 5.2:1)",
    "Darken the background color to #556b2f (ratio would be 4.8:1)",
    "Use a different primary color like #4a6b1f (ratio would be 6.1:1)"
  ]
}
```

## Related Abilities

- [Generate Logo SVG](./generate-logo-svg.md) — create logos with your validated color palette
- [Create Menu](./create-menu.md) — build navigation with accessible colors
