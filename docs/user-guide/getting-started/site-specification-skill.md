---
title: "Site Specification Skill"
sidebar_position: 18
---

# Site Specification Skill

The **Site Specification skill** is a structured approach to capturing your site's goals, audience, and brand identity. This information is stored in your **site_brief** memory, which agents reference across sessions to provide consistent, context-aware assistance.

## What is Site Specification?

Site Specification is the process of documenting:

- **Site purpose**: What your site does and why it exists
- **Target audience**: Who visits your site and what they need
- **Brand identity**: Your colors, tone, and visual style
- **Business goals**: What success looks like for your site
- **Content structure**: How your site is organized

This specification becomes your **site_brief**, a persistent memory that agents use to understand your site's context.

## Why Use Site Specification?

### Consistency Across Sessions

Without site_brief, you'd need to re-explain your site's purpose every time you start a new session. With it, agents immediately understand:

- Your site's goals and audience
- Your brand colors and tone
- Your content structure
- Your business objectives

### Better Recommendations

Agents use your site_brief to:

- Suggest features aligned with your site's purpose
- Recommend content structures that match your goals
- Propose designs consistent with your brand
- Avoid suggesting incompatible features

### Faster Onboarding

New agents (or agents in new sessions) can quickly get up to speed by reading your site_brief instead of asking clarifying questions.

## Initiating Site Specification

### During Theme Builder Onboarding

The Site Specification skill is automatically initiated during the **Theme Builder onboarding flow**. The Setup Assistant agent asks questions and builds your site_brief.

### Manual Initiation

You can start Site Specification at any time:

```
"Let's define my site specification"
```

or

```
"Help me create a site brief"
```

## The Site Specification Process

### Step 1: Site Purpose

The agent asks:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

You can select a category or describe your own purpose.

### Step 2: Target Audience

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Step 3: Brand Identity

```
What are your brand colors?
- Primary color: [color picker or hex code]
- Secondary color: [color picker or hex code]
- Accent color: [optional]

How would you describe your brand tone?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### Step 4: Business Goals

```
What does success look like for your site?
- Generate leads
- Sell products
- Build community
- Share knowledge
- Establish authority
- Other: [describe]

What's your primary metric?
- Revenue
- User engagement
- Content reach
- Conversions
- Other
```

### Step 5: Content Structure

```
How is your content organized?
- Flat (all content at same level)
- Hierarchical (categories and subcategories)
- Chronological (blog-style)
- Product-based (catalog)
- Other: [describe]

What content types do you use?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Other
```

## Your site_brief Memory

After completing Site Specification, your information is stored as **site_brief** in your agent memory. This is a structured record containing:

```json
{
  "site_purpose": "E-commerce store for handmade jewelry",
  "target_audience": "Women aged 25-45, interested in sustainable fashion",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, artisanal, sustainable",
  "business_goals": ["Generate sales", "Build brand loyalty"],
  "primary_metric": "Revenue",
  "content_structure": "Product catalog with blog",
  "content_types": ["Product pages", "Blog posts", "Customer stories"]
}
```

## Viewing and Updating Your site_brief

### View Your site_brief

Ask the agent:

```
"Show me my site brief"
```

or

```
"What do you know about my site?"
```

The agent will display your stored specification.

### Update Your site_brief

If your site evolves, you can update it:

```
"Update my site brief: we're now targeting B2B customers"
```

or

```
"Refresh my site specification"
```

This will re-run the Site Specification skill with your existing information as a starting point.

## How Agents Use site_brief

### Design Recommendations

When you ask for design changes, agents reference your site_brief:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45 
with a warm, artisanal tone. I'll create a design that emphasizes 
your handmade jewelry and sustainable values."
```

### Feature Suggestions

Agents suggest features aligned with your goals:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty, 
I'd recommend: loyalty program, customer reviews, email newsletter, 
and product recommendations."
```

### Content Structure

Agents propose content organization based on your structure:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest 
organizing posts by product category and creating 'styling guides' 
that showcase multiple products together."
```

## Best Practices

### Be Specific

Instead of "general audience," describe your actual audience:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### Update Regularly

As your site evolves, update your site_brief:

- When you pivot to a new audience
- When you add new product lines
- When your brand identity changes
- When your business goals shift

### Use Consistent Terminology

Use the same terms across sessions:

- ✓ Always say "sustainable jewelry" (not "eco-friendly jewelry" and "green products")
- ✓ Consistently refer to your audience the same way

### Include Context

Provide background that helps agents understand your decisions:

- "We're targeting professionals who value quality over price"
- "Our audience is tech-savvy and expects modern design"
- "We're a bootstrapped startup, so we need cost-effective solutions"

## Relationship to Theme Builder Onboarding

The Site Specification skill is integrated into the **Theme Builder onboarding flow**. When you complete onboarding, your site_brief is automatically created with the information you provided.

You can also run Site Specification independently if you want to:

- Refine your specification after initial setup
- Update your site brief as your site evolves
- Create a detailed specification before starting Theme Builder

## Troubleshooting

**My site_brief isn't being used**
- Confirm the agent has access to memory
- Ask the agent to "recall my site brief"
- Check that memory is enabled in your settings

**I want to start over with a new site_brief**
- Ask the agent: "Clear my site brief and start fresh"
- Then run Site Specification again

**The agent is making recommendations that don't match my site_brief**
- Ask the agent to "review my site brief"
- Update your site_brief if it's outdated
- Provide additional context in your requests

## Next Steps

After defining your site specification:

1. **Use Theme Builder**: Create a custom theme based on your site_brief
2. **Refine Design**: Use Design System Aesthetics skill for detailed design work
3. **Plan Content**: Ask agents for content structure recommendations
4. **Build Features**: Request features aligned with your business goals
