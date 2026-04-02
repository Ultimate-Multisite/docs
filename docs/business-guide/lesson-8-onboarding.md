---
title: "Lesson 8: Customer Onboarding"
sidebar_position: 9
---

# Lesson 8: Customer Onboarding

Getting a customer to sign up is only half the job. If they log in, feel overwhelmed, and never come back, you have lost them. This lesson designs the experience that turns a new signup into an active, engaged customer.

## Where We Left Off

FitSite is fully branded with a working checkout flow. Now we focus on what happens after a fitness studio owner completes signup and lands on their new site for the first time.

## Why Onboarding Matters

The first 30 minutes after signup determine whether a customer stays or churns. A fitness studio owner who:

- Logs in and sees a site that already looks like a fitness website → stays
- Knows exactly what to do next → stays
- Feels lost in a generic WordPress dashboard → leaves

Your niche templates (Lesson 4) handle the first point. This lesson handles the second.

## The First Login Experience

### Welcome Dashboard Widget

Create a custom dashboard widget that greets new customers and guides them through setup. This should appear prominently when they first log in.

**FitSite Quick Start:**

1. **Add your studio name and logo** -- Link to Customizer or Site Identity settings
2. **Update your class schedule** -- Link directly to the Classes page editor
3. **Add your trainers** -- Link to the Trainers page editor
4. **Set your contact details** -- Link to the Contact page editor
5. **Preview your site** -- Link to the frontend

Each step links directly to the relevant page or setting. No hunting through menus.

### Simplify the Dashboard

New customers do not need to see every WordPress menu item. Consider:

- Hiding menu items that are not relevant to fitness site management (e.g., Comments if not used)
- Reordering the menu to put the most-used items first
- Adding custom menu labels that make sense for the niche ("Your Studio" instead of "Appearance")

The [Plugin & Theme Manager](/addons/plugin-and-theme-manager) addon can help control what customers see.

## Welcome Email Sequence

A single welcome email is not enough. Set up a sequence that guides customers through their first week:

### Email 1: Welcome (Immediately after signup)

- Subject: "Welcome to FitSite -- your studio website is live"
- Content: Login link, quick start steps, link to help resources
- Tone: Excited, encouraging, fitness-specific

### Email 2: Quick Wins (Day 1)

- Subject: "3 things to do first on your FitSite"
- Content: Add your logo, update the homepage hero image, add your class schedule
- Include screenshots showing exactly where to click

### Email 3: Make It Yours (Day 3)

- Subject: "Make your fitness site stand out"
- Content: Customize colors, add trainer photos, write your studio story
- Link to examples of great fitness sites on the platform

### Email 4: Go Live (Day 7)

- Subject: "Ready to share your FitSite with the world?"
- Content: Checklist of what to verify before sharing, how to connect a custom domain (if on Growth/Pro), social sharing tips

:::tip Email Automation
Use [Webhooks](/user-guide/integrations/webhooks) or [Zapier](/user-guide/integrations/zapier) to trigger these emails through your email marketing platform. This gives you more control over timing and allows you to track engagement.
:::

## Help Resources

Create niche-specific help content that answers the questions fitness studio owners actually ask:

### Knowledge Base Articles

- "How to update your class schedule"
- "Adding and editing trainer profiles"
- "Changing your studio's logo and colors"
- "Connecting your own domain name" (for Growth/Pro customers)
- "Adding a booking widget to your site"

Write these for non-technical users. Use screenshots. Avoid WordPress jargon.

### Video Walkthroughs

Short (2-3 minute) screen recordings showing:

- First login and orientation
- Editing the homepage
- Updating the class schedule
- Adding a new trainer

These do not need to be polished productions. Clear, helpful, and niche-specific is what matters.

## The Account Page

Ultimate Multisite includes a customer-facing [Account Page](/user-guide/client-management/account-page) where customers manage their subscription. Customize this to:

- Show their current FitSite plan
- Display upgrade options with fitness-specific benefits
- Provide billing history and invoice downloads
- Link to help resources

## Measuring Onboarding Success

Track these indicators to know if your onboarding is working:

- **Activation rate**: What percentage of signups actually customize their site within the first week?
- **First-week logins**: How many times does a new customer log in during their first week?
- **Support tickets from new customers**: High volume means your onboarding has gaps
- **Trial-to-paid conversion**: If you offer trials, what percentage convert?

## The FitSite Network So Far

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## What We Built This Lesson

- **A guided first-login experience** with a Quick Start widget
- **A simplified dashboard** focused on fitness site management tasks
- **A welcome email sequence** that guides customers through their first week
- **Niche-specific help resources** written for non-technical fitness studio owners
- **Onboarding metrics** to track and improve the experience

---

**Next:** [Lesson 9: Pricing for Profit](lesson-9-pricing) -- we refine the pricing strategy to maximize revenue and minimize churn.
