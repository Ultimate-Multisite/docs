---
title: "Lesson 7: Making It Yours"
sidebar_position: 8
---

# Lesson 7: Making It Yours

Your customers should never feel like they are using "some WordPress plugin." They should feel like they are using FitSite -- a platform built for their industry. This lesson covers branding, white-labeling, and making the platform feel like a product.

## Where We Left Off

FitSite has a working checkout flow that takes fitness studio owners from plan selection to a live site. Now we make the entire experience feel like a cohesive, branded product.

## Your Platform Domain

The foundation of your brand is your domain. For FitSite:

- **Main domain**: `fitsite.com` (your marketing site and network root)
- **Customer sites**: `studioname.fitsite.com` (subdomains)
- **Custom domains**: Customers on Growth and Pro plans can map their own domain

### Setting Up Your Domain

1. Register your platform domain
2. Point it to your hosting provider
3. Configure wildcard DNS (`*.fitsite.com`) for customer subdomains
4. Ensure wildcard SSL is active

See [How to Configure Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) for detailed instructions.

## White-Labeling the Admin Experience

When a fitness studio owner logs into their site dashboard, they should see your brand, not WordPress or Ultimate Multisite branding.

### Custom Login Page

Customize the WordPress login page to show:

- Your FitSite logo
- Fitness-appropriate background imagery
- Your brand colors

### Dashboard Branding

Use the [Admin Page Creator](/addons/admin-page-creator) addon or custom CSS to:

- Replace the WordPress logo with your FitSite logo
- Customize the admin color scheme to match your brand
- Add a custom dashboard widget with fitness-specific quick links and help resources

### Custom Admin Pages

Consider creating custom admin pages that surface the most relevant actions for fitness studio owners:

- "Edit Your Class Schedule"
- "Update Trainer Profiles"
- "View Your Site"

This reduces the learning curve by putting niche-relevant actions front and center instead of burying them in the standard WordPress menu.

## Branding Your Communications

Every email, invoice, and notification should reinforce your brand.

### System Emails

Navigate to **Ultimate Multisite > Settings > Emails** and customize all system emails:

- **From name**: FitSite
- **From email**: hello@fitsite.com
- **Email templates**: Use your brand colors and logo
- **Language**: Fitness-specific throughout

Key emails to customize:

| Email | Generic Version | FitSite Version |
|-------|----------------|-----------------|
| Welcome | "Your new site is ready" | "Your fitness studio website is live" |
| Payment receipt | "Payment received" | "FitSite subscription payment confirmed" |
| Trial ending | "Your trial is ending soon" | "Your FitSite trial ends in 3 days -- keep your studio website live" |

### Invoices

Customize invoice templates with:

- Your FitSite logo and brand colors
- Your business details
- Fitness-specific product names (not generic plan IDs)

## The Customer-Facing Site

Your main domain (`fitsite.com`) needs a marketing site that sells the platform. This is separate from the Ultimate Multisite network admin -- it is the public face of your business.

Key pages:

- **Homepage**: Clear value proposition for fitness businesses
- **Features**: What FitSite does, in fitness terms
- **Pricing**: Your three plans with niche-specific feature comparisons
- **Examples**: Showcase sites built on the platform
- **Sign Up**: Links to your checkout form

:::tip Your Marketing Site Can Be a Network Site
Create your marketing site as a site within your own network. This lets you manage it from the same dashboard and demonstrates your own platform's capabilities.
:::

## Custom Domain for Customers

For customers on plans that include custom domains, document the process clearly:

1. Customer registers or transfers their domain to a registrar
2. Customer updates DNS to point to your platform (provide exact records)
3. Ultimate Multisite handles the domain mapping and SSL

Create a help article or knowledge base entry specifically for this process, written for non-technical fitness studio owners.

## The FitSite Network So Far

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## What We Built This Lesson

- **Platform domain and DNS** configured for a branded experience
- **White-labeled admin** with FitSite branding throughout
- **Customized communications** -- emails, invoices, and notifications all on-brand
- **A marketing site** that sells FitSite to fitness studio owners
- **Custom domain documentation** for customers who want their own domain

---

**Next:** [Lesson 8: Customer Onboarding](lesson-8-onboarding) -- we design the experience that turns a new signup into an active, happy customer.
