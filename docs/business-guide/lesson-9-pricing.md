---
title: "Lesson 9: Pricing for Profit"
sidebar_position: 10
---

# Lesson 9: Pricing for Profit

In Lesson 5 we set initial prices for FitSite plans. Now we refine the pricing strategy with techniques that increase revenue, encourage upgrades, and reduce churn.

## Where We Left Off

FitSite has plans, templates, checkout, branding, and onboarding in place. The initial pricing was $49/$99/$199 per month. Now we make that pricing work harder.

## Pricing Principles for Niche Platforms

### Price on Value, Not Cost

Your hosting costs might be $5-$15 per customer site. That does not mean your price should be $20. You are not selling hosting. You are selling:

- A professional fitness website that would cost $2,000-$5,000 to build custom
- Ongoing maintenance, updates, and security they do not have to think about
- Niche-specific features that generic builders do not offer
- The credibility of a platform built for their industry

Price based on the value you deliver, not the cost to deliver it.

### Anchor to Alternatives

When a fitness studio owner evaluates FitSite, they compare it to:

- **Hiring a web developer**: $2,000-$5,000 upfront + $50-$100/month maintenance
- **Wix/Squarespace**: $16-$45/month but no fitness-specific features, they build it themselves
- **Doing nothing**: Lost members who cannot find them online

At $49-$199/month, FitSite is cheaper than a developer, more capable than generic builders, and infinitely better than no website.

## Implementing Price Variations

Annual pricing encourages commitment and reduces churn. Navigate to each plan's **Price Variations** tab and add annual options:

| Plan | Monthly | Annual (per month) | Annual Total | Savings |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

Add a **Period Selection** field to your checkout form so customers can toggle between monthly and annual billing. See [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Why Annual Pricing Works

- **For you**: Upfront cash, lower churn (customers who pay annually are less likely to cancel mid-term)
- **For them**: Real savings, budget predictability

## Setup Fees

Consider a one-time setup fee for plans that include hands-on configuration:

- **Starter**: No setup fee (remove barriers to entry)
- **Growth**: $99 setup fee (covers custom domain configuration and initial consultation)
- **Pro**: $299 setup fee (covers multi-location setup and onboarding call)

Configure setup fees on each plan's pricing section. See [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) for details.

## Trial Periods

Offering a trial reduces signup friction but introduces the risk of non-conversion. For FitSite:

- **7-day free trial** on Starter plan only
- No trial on Growth and Pro (these customers are more committed and expect to pay)

Configure the trial on the Starter plan's pricing section by enabling the **Offer Trial** toggle and setting the duration to 7 days.

### Making Trials Convert

A trial only works if the customer experiences value during the trial period. Your onboarding sequence (Lesson 8) is critical here -- the welcome emails should be timed to drive engagement within the 7-day window.

## Discount Codes

Create strategic discount codes for specific purposes:

- **FITLAUNCH** -- 30% off first 3 months (for launch promotion)
- **ANNUAL20** -- 20% off annual plans (if not already discounted)
- **REFERRAL** -- 1 month free (for customer referrals)

Navigate to **Ultimate Multisite > Discount Codes** to create these. See [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) for the full guide.

:::tip Do Not Discount by Default
Discounts should be strategic tools, not permanent fixtures. If everyone gets a discount, it is not a discount -- it is your real price. Use them for specific campaigns, referrals, and time-limited promotions.
:::

## Tax Handling

If you operate in a jurisdiction that requires tax collection:

1. Configure tax rates in **Ultimate Multisite > Settings > Taxes**
2. Apply tax categories to your plans
3. Ensure invoices display tax correctly

See [Tax Handling](/user-guide/payment-gateways/tax-handling) for detailed configuration. If you serve customers internationally, consider the [VAT addon](/addons/vat) for EU compliance.

## Reviewing Your Pricing

After launch, revisit pricing quarterly. Look at:

- **Conversion rate by plan**: If Starter converts well but Growth does not, the gap between them may be too large
- **Upgrade rate**: If few customers upgrade from Starter to Growth, the Growth plan may not offer enough additional value
- **Churn by plan**: If annual customers churn less, push annual pricing harder
- **Competitor pricing**: What are alternatives charging? Are you positioned correctly?

## The FitSite Network So Far

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## What We Built This Lesson

- **Annual pricing** with 20% discount to encourage commitment
- **Setup fees** on higher tiers to cover onboarding effort
- **A trial period** on the entry-level plan to reduce signup friction
- **Strategic discount codes** for launch, referrals, and campaigns
- **Tax configuration** for compliant billing
- **A pricing review framework** for ongoing optimization

---

**Next:** [Lesson 10: Launch Day](lesson-10-launch) -- the pre-launch checklist and going live.
