---
title: "Lesson 5: Designing Your Plans"
sidebar_position: 6
---

# Lesson 5: Designing Your Plans

Your plan tiers are not just pricing levels -- they are a reflection of how your niche customers actually operate. In this lesson you will design product tiers that match the real needs of fitness businesses at different stages.

## Where We Left Off

FitSite has three templates ready (Studio Essential, Gym Pro, Fitness Chain). Now we create the plans that determine what customers get access to and what they pay.

## Thinking in Customer Segments

The mistake most people make is designing plans around technical features (storage, bandwidth, number of pages). Your niche customers do not think in those terms. A gym owner thinks about what they need to run their business.

For fitness studios, three natural segments exist:

| Segment | Who They Are | What They Need |
|---------|-------------|----------------|
| **Solo trainers / small studios** | 1-3 staff, single location, starting out | A professional site, class info, contact form |
| **Established gyms** | 5-20 staff, single location, growing | Everything above plus booking, blog, gallery, custom domain |
| **Fitness chains** | Multiple locations, established brand | Everything above plus multi-site, locations pages, staff directory |

Your plans should map to these segments, not to arbitrary feature bundles.

## Creating the FitSite Plans

Navigate to **Ultimate Multisite > Products > Add Product** for each plan.

### Plan 1: FitSite Starter -- $49/month

**Target**: Solo trainers and small studios

**Description tab**:
- Name: FitSite Starter
- Description: "Everything a personal trainer or small studio needs to look professional online."

**General tab**:
- Product type: Plan
- Customer role: Administrator

**Site Templates tab**:
- Allow site templates: Enabled
- Available templates: Studio Essential only

**Limitations**:
- Sites: 1
- Disk space: 1 GB
- Custom domain: Disabled (uses `studioname.fitsite.com`)

**Plugins tab**:
- Contact form plugin: Force Activate
- SEO plugin: Force Activate
- Booking plugin: Not Available (upgrade incentive)

**Themes tab**:
- Your selected theme: Force Activate
- All other themes: Hidden

### Plan 2: FitSite Growth -- $99/month

**Target**: Established single-location gyms

**Description tab**:
- Name: FitSite Growth
- Description: "For established gyms ready to grow their online presence and attract new members."

**Site Templates tab**:
- Available templates: Studio Essential and Gym Pro

**Limitations**:
- Sites: 1
- Disk space: 5 GB
- Custom domain: Enabled

**Plugins tab**:
- Everything in Starter, plus:
- Booking plugin: Force Activate
- Gallery plugin: Force Activate
- Blog functionality: Available

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 2

### Plan 3: FitSite Pro -- $199/month

**Target**: Multi-location fitness chains

**Description tab**:
- Name: FitSite Pro
- Description: "The complete platform for fitness brands with multiple locations."

**Site Templates tab**:
- Available templates: All three templates

**Limitations**:
- Sites: 5 (one per location)
- Disk space: 20 GB
- Custom domain: Enabled

**Plugins tab**:
- Everything in Growth, plus:
- All premium plugins: Force Activate

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 3

## Setting Up the Plan Group

The plan group ensures customers can only upgrade or downgrade within the FitSite plan family. On each plan's **Up & Downgrades** tab:

1. Set the **Plan Group** to "FitSite Plans" for all three plans
2. Set the **Product Order** to 1 (Starter), 2 (Growth), 3 (Pro)

This creates a clear upgrade path: Starter → Growth → Pro.

## Adding Order Bumps

Order bumps are add-on products offered during checkout. For FitSite, consider:

- **Extra Storage Pack** ($19/month) -- additional 5 GB disk space
- **Priority Support** ($29/month) -- faster response times
- **Additional Site** ($39/month) -- for customers who need more sites than their plan allows

Create these as **Package** type products in Ultimate Multisite and associate them with the relevant plans.

## Why This Structure Works

- **Starter** removes barriers to entry -- low price, simple offering, gets trainers online fast
- **Growth** adds the features gyms actually ask for -- booking, galleries, custom domains
- **Pro** serves the high-value segment that needs multi-location support
- **Order bumps** let customers customize without complicating the core plans
- **Clear upgrade path** means customers grow with you instead of leaving

## The FitSite Network So Far

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## What We Built This Lesson

- **Three plan tiers** mapped to real fitness business segments
- **Feature gating** using Ultimate Multisite's plugin and template controls
- **A plan group** with a clear upgrade path
- **Order bump products** for additional revenue
- **A pricing structure** based on customer value, not technical specs

---

**Next:** [Lesson 6: The Signup Experience](lesson-6-checkout) -- we build a checkout flow that converts fitness studio owners into paying customers.
