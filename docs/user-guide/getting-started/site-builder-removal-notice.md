---
title: "Site Builder Mode Removal Notice"
sidebar_position: 19
---

# Site Builder Mode Removal Notice

**Site Builder mode has been removed in Superdav AI Agent v1.12.0.** If you were using Site Builder mode, you should migrate to the **Setup Assistant agent** for theme creation and site setup.

## What Happened?

### Site Builder Mode (Legacy)

Site Builder mode was a wizard-based interface for:

- Creating sites from templates
- Configuring basic settings
- Choosing a theme
- Setting up initial content

### What Replaced It?

The **Setup Assistant agent** now handles all Site Builder functionality with:

- More flexible, agent-guided setup
- Better theme customization options
- Integration with Theme Builder onboarding
- Persistent site_brief memory for future sessions

## If You Were Using Site Builder Mode

### Your Sites Are Safe

- Existing sites created with Site Builder mode continue to work
- No data loss or site disruption
- You can continue managing your sites normally

### Migrate to Setup Assistant Agent

For new site setup or theme changes, use the Setup Assistant agent:

```
"Help me set up a new site"
```

or

```
"Start the Theme Builder onboarding"
```

The Setup Assistant agent provides the same functionality with more flexibility.

## Comparison: Site Builder vs. Setup Assistant

| Feature | Site Builder (Removed) | Setup Assistant (New) |
|---------|----------------------|----------------------|
| Setup method | Wizard form | Agent conversation |
| Theme selection | Predefined templates | Custom generation |
| Customization | Limited options | Full design system |
| Site brief | Not stored | Persistent memory |
| Future sessions | Repeat setup | Use stored site_brief |
| Flexibility | Fixed workflow | Adaptive conversation |

## Migrating to Setup Assistant Agent

### For New Sites

Instead of using Site Builder mode:

1. Request: "Help me set up a new site"
2. The Setup Assistant agent will guide you through:
   - Site purpose and goals
   - Target audience
   - Brand identity
   - Theme generation
   - Initial configuration

### For Existing Sites

If you have an existing site from Site Builder mode:

1. You can continue using it as-is
2. To update the theme, request: "Redesign my site"
3. The Setup Assistant agent will help you create a new theme
4. Your site data remains unchanged

### For Theme Changes

Instead of Site Builder mode's theme selection:

1. Request: "Change my theme"
2. The Setup Assistant agent will:
   - Ask about your design preferences
   - Generate a custom theme
   - Activate it on your site

## Key Differences

### Site Builder Mode

```
1. Choose a template
2. Select a theme
3. Configure basic settings
4. Done
```

### Setup Assistant Agent

```
1. Describe your site's purpose
2. Define your target audience
3. Choose design preferences
4. Agent generates custom theme
5. Agent activates theme
6. Site brief stored for future sessions
```

## Benefits of Setup Assistant Agent

### More Flexible

- Describe your site in natural language
- Get custom recommendations
- Adapt to your specific needs

### Better Customization

- Custom theme generation
- Design system decisions
- Persistent design tokens

### Persistent Memory

- Your site_brief is stored
- Future agents understand your site
- No need to repeat setup information

### Integrated Workflow

- Theme Builder onboarding
- Design System Aesthetics skill
- Ability Visibility controls
- All work together seamlessly

## Troubleshooting

### I can't find Site Builder mode

Site Builder mode has been removed. Use the Setup Assistant agent instead:

```
"Help me set up a new site"
```

### I want to recreate a site from Site Builder

You can recreate it with the Setup Assistant agent:

1. Request: "Help me set up a new site"
2. Describe your original site's purpose and design
3. The agent will generate a similar theme
4. Your site_brief will be stored for future reference

### My existing Site Builder site isn't working

Existing sites created with Site Builder mode continue to work. If you're experiencing issues:

1. Check that your theme is still active
2. Verify your plugins are enabled
3. Check WordPress error logs
4. Contact support if problems persist

### Can I still use my old Site Builder templates?

Site Builder templates are no longer available. However:

- Your existing sites continue to work
- You can recreate similar sites with the Setup Assistant agent
- The Setup Assistant agent provides more customization options

## Next Steps

1. **For new sites**: Use the Setup Assistant agent
2. **For existing sites**: Continue using them as-is
3. **For theme changes**: Request help from the Setup Assistant agent
4. **For design refinement**: Use the Design System Aesthetics skill

## Related Topics

- **Theme Builder Onboarding**: Guided setup for custom themes
- **Setup Assistant Agent**: Agent-guided site setup
- **Site Specification Skill**: Define your site's goals and audience
- **Design System Aesthetics Skill**: Refine your site's visual identity
