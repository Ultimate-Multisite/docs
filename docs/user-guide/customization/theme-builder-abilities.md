---
title: "Theme Builder Abilities"
sidebar_position: 20
---

# Theme Builder Abilities: Scaffold and Activate Block Themes

Superdav AI Agent v1.12.0 introduces two powerful abilities that allow you to generate and deploy custom block themes directly from the chat interface.

## Overview

The **scaffold-block-theme** and **activate-theme** abilities enable agents to:
- Generate complete, production-ready block themes based on your specifications
- Automatically activate themes on your site without manual intervention
- Create cohesive visual identities through guided design decisions

## Scaffold Block Theme

The **scaffold-block-theme** ability generates a new WordPress block theme with a complete theme structure, including:

- `theme.json` configuration with design tokens
- Block template files for common layouts
- Custom block styles and variations
- Theme metadata and support declarations

### How to Invoke

In your chat with Superdav AI Agent, you can request theme generation:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme, 
sans-serif typography, and a professional layout"
```

The agent will:
1. Gather your design preferences through conversation
2. Generate the complete theme structure
3. Create all necessary theme files
4. Prepare the theme for activation

### Expected Output

When the ability executes successfully, you'll see:

- Confirmation that the theme has been scaffolded
- The theme name and location
- A summary of the design tokens applied (colors, typography, spacing)
- Ready-to-activate status

Example output:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activate Theme

The **activate-theme** ability switches your site to a newly scaffolded or existing block theme.

### How to Invoke

After scaffolding a theme, you can activate it immediately:

```
"Activate the Modern Agency theme"
```

Or activate any existing theme:

```
"Switch to the Twentytwentyfour theme"
```

### Expected Output

When activation succeeds:

- Confirmation of the active theme
- Previous theme name (for reference)
- Site URL where the theme is now live
- Any theme-specific setup notes

Example output:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Workflow: Scaffold and Activate

A typical workflow combines both abilities:

1. **Request theme generation**: "Create a block theme for my SaaS landing page"
2. **Agent scaffolds the theme**: Generates files and design tokens
3. **Review and refine**: Discuss design changes if needed
4. **Activate**: "Activate the theme now"
5. **Verify**: Visit your site to confirm the new design is live

## Design Tokens and Customization

Scaffolded themes use WordPress design tokens (via `theme.json`) for:

- **Colors**: Primary, secondary, accent, neutral palette
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Padding, margin, gap scales
- **Borders**: Radius and width tokens
- **Shadows**: Elevation levels

These tokens are centralized in `theme.json`, making it easy to adjust your entire design system from one file.

## Limitations and Notes

- Themes are scaffolded in `/wp-content/themes/` and must follow WordPress naming conventions
- Activation requires appropriate permissions on your WordPress site
- Custom PHP code in themes is minimal; use plugins for complex functionality
- Block themes work best with WordPress 5.9 and later

## Troubleshooting

**Theme doesn't appear after scaffolding**
- Verify the theme directory exists and has proper permissions
- Check that `theme.json` is valid JSON
- Ensure the theme name doesn't conflict with existing themes

**Activation fails**
- Confirm you have administrator permissions
- Check that the theme directory is readable by WordPress
- Review WordPress error logs for details

**Design tokens not applying**
- Verify `theme.json` syntax is correct
- Clear any caching plugins
- Check that your WordPress version supports the tokens you're using

## Next Steps

After activating your theme, you can:
- Use the **Design System Aesthetics skill** to refine typography, colors, and spacing
- Customize individual block styles through the WordPress block editor
- Add custom CSS in the theme's `style.css` file
- Create custom block templates for specific page types
