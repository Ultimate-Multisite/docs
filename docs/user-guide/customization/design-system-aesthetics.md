---
title: "Design System Aesthetics Skill"
sidebar_position: 21
---

# Design System Aesthetics Skill

The **Design System Aesthetics skill** is a guided approach to refining your site's visual identity. It helps you make consistent decisions about typography, color, spacing, and motion tokens that define your design system.

## What is Design System Aesthetics?

Design System Aesthetics is a structured skill that covers:

- **Typography**: Font families, sizes, weights, and line heights
- **Color**: Primary, secondary, accent, and neutral palettes
- **Spacing**: Padding, margin, and gap scales
- **Borders**: Radius and width tokens
- **Shadows**: Elevation and depth tokens
- **Motion**: Animations and transitions

These decisions are captured in your theme's `theme.json` file, creating a cohesive visual system.

## Why Use Design System Aesthetics?

### Consistency

A design system ensures:

- All text uses the same typography scale
- Colors are used consistently across your site
- Spacing follows a predictable pattern
- Animations feel unified

### Efficiency

Instead of making design decisions page-by-page, you:

- Define tokens once
- Apply them everywhere
- Update globally by changing one value

### Flexibility

You can:

- Adjust your entire design system quickly
- Experiment with different aesthetics
- Maintain brand consistency while evolving

## Triggering the Design System Aesthetics Skill

### Manual Activation

You can start the skill at any time:

```
"Help me refine my design system"
```

or

```
"Let's improve my site's aesthetics"
```

or

```
"Guide me through design system decisions"
```

### Automatic Suggestions

Agents may suggest using the skill when you:

- Ask for design changes
- Request a "modern" or "professional" redesign
- Want to improve visual consistency
- Are preparing to launch your site

## The Design System Aesthetics Process

### Step 1: Typography

The agent asks about your font choices:

```
What's your preferred typography style?
- Serif (traditional, elegant)
- Sans-serif (modern, clean)
- Monospace (technical, code-focused)

For your heading font:
- Do you want a distinct heading font, or use the same as body text?
- Preference: bold, elegant, playful, minimal?

For your body font:
- Readability is key. Do you prefer:
  - Larger, more spacious text
  - Compact, efficient text
  - Standard sizing
```

The agent then defines:

- **Heading font**: Primary font for titles and headings
- **Body font**: Font for paragraphs and body text
- **Monospace font**: Font for code and technical content
- **Size scale**: Predefined sizes (small, base, large, XL, etc.)
- **Weight scale**: Font weights (regular, medium, bold, etc.)
- **Line height**: Spacing between lines for readability

### Step 2: Color Palette

```
Let's define your color palette.

Primary color (your brand color):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Secondary color (supporting color):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Accent color (highlights and CTAs):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Neutral palette (grays for text, borders, backgrounds):
- Light: [color]
- Medium: [color]
- Dark: [color]
```

The agent creates a complete palette including:

- Primary, secondary, and accent colors
- Neutral grays (light, medium, dark)
- Semantic colors (success, warning, error)
- Hover and active states

### Step 3: Spacing

```
How much breathing room do you want?

Spacing scale preference:
- Compact (tight, efficient layouts)
- Normal (balanced spacing)
- Spacious (generous whitespace)

This affects:
- Padding inside buttons and cards
- Margins between sections
- Gap between grid items
```

The agent defines spacing tokens:

- Base unit (typically 4px or 8px)
- Scale: xs, sm, md, lg, xl, 2xl
- Specific values for padding, margin, gap

### Step 4: Borders and Shadows

```
Visual depth and definition:

Border radius preference:
- Sharp (no rounding)
- Subtle (small radius)
- Rounded (medium radius)
- Very rounded (large radius)

Shadow depth:
- Flat (no shadows)
- Subtle (light shadows)
- Pronounced (strong shadows)
```

The agent creates:

- Border radius tokens (for buttons, cards, inputs)
- Shadow tokens for elevation levels
- Border width tokens

### Step 5: Motion and Animation

```
How should your site feel when interactive?

Animation preference:
- Minimal (no animations)
- Subtle (gentle transitions)
- Playful (noticeable animations)

Specific animations:
- Page transitions: fade, slide, or none?
- Button hover: scale, color change, or both?
- Loading states: spinner, skeleton, or progress bar?
```

The agent defines:

- Transition durations (fast, normal, slow)
- Easing functions (ease-in, ease-out, ease-in-out)
- Animation keyframes for common interactions

## Applying Design System Aesthetics

### Automatic Application

After you complete the skill, the agent:

1. Updates your theme's `theme.json` with all tokens
2. Applies the design system to your active theme
3. Regenerates block styles to match the new system
4. Activates the updated theme

### Manual Application

You can also edit `theme.json` directly:

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## Viewing Your Design System

### Ask the Agent

```
"Show me my design system"
```

or

```
"What are my current design tokens?"
```

The agent will display your typography, colors, spacing, and other tokens.

### View theme.json

Open `/wp-content/themes/[theme-name]/theme.json` in a text editor to see the raw token definitions.

## Updating Your Design System

### Quick Updates

Ask the agent for specific changes:

```
"Make the primary color darker"
```

or

```
"Increase the spacing scale by 20%"
```

or

```
"Change the heading font to a serif"
```

### Full Redesign

Re-run the Design System Aesthetics skill:

```
"Let's redesign my entire design system"
```

This will guide you through all decisions again, starting with your current values.

### Partial Updates

Update specific aspects:

```
"Just update the color palette, keep everything else"
```

## Design System Best Practices

### Consistency

- Use the same tokens everywhere
- Don't create one-off colors or sizes
- Reference tokens instead of hardcoding values

### Naming

Use clear, semantic names:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Scalability

Design your system to scale:

- Use relative units (rem, em) instead of pixels
- Create scales (xs, sm, md, lg, xl) instead of arbitrary values
- Plan for future additions

### Documentation

Document your design system:

- Why you chose specific colors
- When to use each token
- Exceptions and edge cases

## Common Design System Patterns

### Modern Minimalist

- Sans-serif typography (Inter, Helvetica)
- Limited color palette (2-3 colors)
- Generous spacing
- Subtle shadows
- Smooth, fast animations

### Warm and Friendly

- Mix of serif and sans-serif
- Warm color palette (oranges, warm grays)
- Rounded corners
- Soft shadows
- Playful animations

### Professional Corporate

- Clean sans-serif (Roboto, Open Sans)
- Neutral palette with accent color
- Structured spacing
- Minimal shadows
- Subtle transitions

### Creative and Bold

- Distinctive typography
- Bold color palette
- Varied spacing
- Strong shadows
- Noticeable animations

## Troubleshooting

**My design system changes aren't showing**
- Clear your browser cache
- Rebuild your site if using a static generator
- Check that theme.json is valid JSON
- Verify the theme is active

**The colors look different on different pages**
- Check for conflicting CSS in plugins
- Verify all pages use the same theme
- Clear any caching plugins

**I want to revert to a previous design system**
- Ask the agent: "Show me my design system history"
- Manually edit theme.json to previous values
- Re-run the skill with different choices

## Next Steps

After defining your design system:

1. **Review your site**: Visit your site to see the new design
2. **Refine further**: Make adjustments using the skill again
3. **Create templates**: Build custom block templates using your design tokens
4. **Document**: Share your design system with team members
