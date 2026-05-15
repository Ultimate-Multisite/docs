---
title: "Theme-Aware Skills"
sidebar_position: 27
---

# Theme-Aware Skills

Superdav AI Agent v1.10.0 ships four new theme-aware built-in skills that automatically adapt to your active WordPress theme. These skills provide specialized guidance and capabilities tailored to your theme's architecture and features.

## What Are Theme-Aware Skills?

Theme-aware skills are pre-configured knowledge bases and tool sets that the AI assistant automatically selects based on the WordPress theme currently active on your site. When you switch themes, the assistant's available skills update automatically — no manual configuration required.

Each skill includes:

- **Theme-specific documentation** — guidance on using and customizing the theme
- **Block and pattern references** — available blocks, patterns, and design options
- **Customization examples** — code snippets and configuration patterns for common tasks
- **Best practices** — recommendations for the theme's architecture and workflow

## Available Theme-Aware Skills

### Block Themes

**Applies to:** Themes that use the WordPress block-based (Full Site Editing) architecture.

The Block Themes skill provides guidance on:

- Creating and editing templates using the block editor
- Working with block patterns and reusable blocks
- Customizing global styles and theme.json settings
- Using theme blocks and variations
- Building custom block patterns for your site

**Automatically activated when:** Your active theme is a block theme (supports `block-templates` feature).

### Classic Themes

**Applies to:** Traditional WordPress themes that use PHP templates and the classic editor.

The Classic Themes skill provides guidance on:

- Working with PHP template files and hooks
- Customizing theme appearance via the Customizer
- Using widget areas and sidebars
- Modifying CSS and child theme development
- Understanding theme hierarchy and template tags

**Automatically activated when:** Your active theme is a classic (non-block) theme.

### Kadence Blocks

**Applies to:** Sites using the Kadence Blocks plugin for advanced block-based design.

The Kadence Blocks skill provides guidance on:

- Using Kadence's advanced block library (Hero, Testimonials, Pricing, etc.)
- Configuring Kadence block settings and responsive options
- Building custom layouts with Kadence's grid and container blocks
- Integrating Kadence blocks with your theme
- Leveraging Kadence's design system and presets

**Automatically activated when:** The Kadence Blocks plugin is active on your site.

### Kadence Theme

**Applies to:** Sites using the Kadence theme for block-based design and customization.

The Kadence Theme skill provides guidance on:

- Customizing the Kadence theme via global styles and theme.json
- Using Kadence's built-in block patterns and templates
- Configuring Kadence theme settings and options
- Building custom designs with Kadence's design system
- Integrating Kadence with popular plugins and tools

**Automatically activated when:** The Kadence theme is your active theme.

## How Skills Are Selected

The assistant automatically detects your active theme and installed plugins on each message. If a matching theme-aware skill is available, it is loaded into the assistant's context automatically. You do not need to manually enable or switch skills.

### Multiple Skills

If multiple skills apply to your site (for example, if you have both Kadence Blocks and Kadence Theme active), the assistant has access to all applicable skills and can reference guidance from each.

### Switching Themes

When you change your active theme, the assistant's available skills update automatically on the next message. For example:

1. You are using a block theme with the **Block Themes** skill active.
2. You switch to a classic theme.
3. On your next message, the **Classic Themes** skill is automatically loaded, and the **Block Themes** skill is no longer available.

## Using Theme-Aware Skills

To leverage a theme-aware skill, simply describe what you want to do in the chat interface. The assistant will reference the appropriate skill's guidance automatically.

### Example Prompts

**For Block Themes:**
> "Create a hero section with a background image and centered text using block patterns."

**For Classic Themes:**
> "Add a custom widget area to the sidebar using a child theme."

**For Kadence Blocks:**
> "Build a testimonials section using the Kadence Testimonials block."

**For Kadence Theme:**
> "Customize the header layout and navigation menu styling."

The assistant will provide theme-specific guidance and code examples tailored to your active theme and plugins.

:::note
Theme-aware skills are automatically available in Superdav AI Agent v1.10.0 and later. No additional setup or configuration is required.
:::
