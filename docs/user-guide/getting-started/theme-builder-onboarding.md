---
title: "Theme Builder Onboarding Flow"
sidebar_position: 17
---

# Theme Builder Onboarding Flow

Superdav AI Agent v1.12.0 introduces a guided **Theme Builder onboarding flow** that helps you create a custom block theme during your initial setup. This replaces the legacy Site Builder mode with a more flexible, agent-assisted approach.

## What is the Theme Builder Onboarding Flow?

The Theme Builder onboarding flow is an interactive setup wizard that:

- Guides you through design decisions (colors, typography, layout)
- Captures your site's visual identity preferences
- Generates a custom block theme tailored to your needs
- Activates the theme automatically when complete

The flow is powered by the **Setup Assistant agent**, which asks clarifying questions and builds your theme incrementally.

## Starting the Theme Builder Onboarding

### First-Run Setup

When you first launch Superdav AI Agent on a new WordPress installation, you'll see:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Select **"Build a custom theme"** to enter the Theme Builder onboarding flow.

### Manual Activation

You can also start the Theme Builder onboarding at any time by requesting:

```
"Start the Theme Builder onboarding"
```

or

```
"Help me create a custom theme"
```

## The Onboarding Steps

### Step 1: Mode Selection

The Setup Assistant agent asks about your preference:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** is recommended for most users; the agent makes design recommendations based on your industry and goals.

### Step 2: Site Specification

You'll be asked about your site:

- **Site purpose**: E-commerce, blog, portfolio, SaaS, etc.
- **Target audience**: Who are your visitors?
- **Brand colors**: Primary and secondary colors (or "I'm not sure")
- **Tone**: Professional, creative, playful, minimal, etc.

This information is stored in your **site_brief** memory, which agents reference in future sessions.

### Step 3: Design System Decisions

The agent guides you through design token selections:

- **Typography**: Font family (serif, sans-serif, monospace) and size scale
- **Color palette**: Primary, secondary, accent, and neutral colors
- **Spacing**: Compact, normal, or spacious layouts
- **Motion**: Animations and transitions (if desired)

### Step 4: Theme Generation

The Setup Assistant agent scaffolds your custom block theme with:

- `theme.json` containing all your design tokens
- Block templates for common layouts (homepage, blog, contact)
- Custom block styles matching your design system
- Theme metadata and WordPress support declarations

### Step 5: Activation and Verification

The theme is automatically activated, and you'll see:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]
  
  Visit your site to see the new design.
```

You can then visit your site to verify the theme is displaying correctly.

## Site Specification and site_brief Memory

During onboarding, the agent captures your site's specification in a **site_brief** memory category. This includes:

- Site purpose and goals
- Target audience
- Brand colors and tone
- Design preferences
- Content structure

### Why site_brief Matters

In future sessions, agents reference your site_brief to:

- Maintain design consistency across changes
- Suggest features aligned with your site's purpose
- Provide context-aware recommendations
- Avoid repeating setup questions

### Viewing Your site_brief

You can ask the agent:

```
"Show me my site brief"
```

or

```
"What do you know about my site?"
```

The agent will display your stored site specification.

## Customizing After Onboarding

After the Theme Builder onboarding completes, you can:

### Use the Design System Aesthetics Skill

Request design refinements:

```
"Refine the typography to be more modern"
```

or

```
"Adjust the color palette to be warmer"
```

The **Design System Aesthetics skill** guides you through targeted design updates.

### Edit theme.json Directly

For advanced users, edit `/wp-content/themes/[theme-name]/theme.json` to adjust:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### Create Custom Block Templates

Use the WordPress block editor to create custom templates for:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## Comparison: Old vs. New Onboarding

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## Troubleshooting

**The onboarding flow didn't complete**
- Restart the flow: "Start the Theme Builder onboarding"
- Check that your WordPress installation is up to date
- Verify the Setup Assistant agent is enabled

**My site_brief isn't being used**
- Confirm the agent has access to memory
- Ask the agent to "recall my site brief"
- Check that memory is enabled in your settings

**The generated theme doesn't match my preferences**
- Use the Design System Aesthetics skill to refine it
- Ask the agent to "regenerate the theme with [specific changes]"
- Edit theme.json directly for precise control

## Next Steps

After completing Theme Builder onboarding:

1. **Verify your site**: Visit your site to see the new theme
2. **Refine the design**: Use Design System Aesthetics skill for adjustments
3. **Add content**: Start building your site's content
4. **Explore abilities**: Learn about other agent abilities like scaffold-block-theme and activate-theme
