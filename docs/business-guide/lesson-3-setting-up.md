---
title: "Lesson 3: Setting Up Your Network"
sidebar_position: 4
---

# Lesson 3: Setting Up Your Network

Time to build. In this lesson you will install Ultimate Multisite and configure the foundation of the FitSite network. Every decision here is made with the fitness niche in mind.

## Where We Left Off

We picked fitness studios as our niche and validated the opportunity. Now we turn that idea into a working platform.

## Choosing Your Hosting

Your hosting choice matters more for a niche platform than for a single website. You are not hosting one site -- you are hosting a network that will grow to dozens or hundreds of sites.

### What to Look For

- **WordPress Multisite support**: Not all hosts handle multisite well
- **Wildcard SSL**: Essential for subdomain-based networks
- **Scalable resources**: You need room to grow without migrating
- **Ultimate Multisite integration**: Automated domain mapping and SSL saves significant operational effort

### Recommended Approach

Choose a host from the [Compatible Providers](/user-guide/host-integrations/closte) list. These have been tested with Ultimate Multisite and provide the integrations you need for domain mapping and SSL automation.

For FitSite, we will use a subdomain configuration. This means customer sites will initially appear as `studioname.fitsite.com` before they optionally map their own domain.

## Installing WordPress Multisite

If you do not already have a WordPress Multisite installation:

1. Install WordPress on your hosting provider
2. Follow the [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) guide
3. Choose **subdomain** configuration when prompted

:::tip Why Subdomains?
Subdomains give each customer site its own distinct address (`studio.fitsite.com`) rather than a path (`fitsite.com/studio`). This is more professional for your customers and avoids permalink conflicts. See [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) for a detailed comparison.
:::

## Installing Ultimate Multisite

Follow the [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) guide to:

1. Upload and activate the plugin network-wide
2. Run the [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

During the setup wizard, keep the FitSite niche in mind:

- **Currency**: Set to the currency your fitness studio customers use
- **Company name**: "FitSite" (or your chosen brand name)
- **Company logo**: Upload your brand logo -- this appears on invoices and emails

## Configuring for the Fitness Niche

With Ultimate Multisite installed, make these niche-specific configuration choices:

### General Settings

Navigate to **Ultimate Multisite > Settings** and configure:

- **Site name**: FitSite
- **Default role**: Administrator -- fitness studio owners need full control of their site content
- **Registration**: Enable user registration so studio owners can sign up themselves

### Email Configuration

Your system emails should speak the language of your niche. Navigate to **Ultimate Multisite > Settings > Emails** and customize:

- Replace generic "your new site" language with fitness-specific messaging
- Example welcome subject: "Your fitness studio website is ready"
- Example welcome body: Reference their studio, classes, and getting started with their fitness site

We will refine these further in Lesson 8 (Customer Onboarding), but setting the tone now ensures even early test signups feel niche-specific.

### Domain Configuration

If using a compatible hosting provider, configure domain mapping now:

1. Navigate to **Ultimate Multisite > Settings > Domain Mapping**
2. Follow the integration guide for your specific host
3. Test that new subsites get SSL automatically

This ensures that when we start creating templates and test sites in the next lesson, everything works end to end.

## The FitSite Network So Far

At the end of this lesson, here is what you have:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## What We Built This Lesson

- **A working WordPress Multisite** installation in subdomain mode
- **Ultimate Multisite installed** and configured with FitSite branding
- **Hosting and SSL** set up for a growing network
- **Domain mapping** configured for your hosting provider
- **Niche-specific email tone** established from day one

---

**Next:** [Lesson 4: Building Niche Templates](lesson-4-templates) -- we create site templates that fitness studio owners will actually want to use.
