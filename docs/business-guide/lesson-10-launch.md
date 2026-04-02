---
title: "Lesson 10: Launch Day"
sidebar_position: 11
---

# Lesson 10: Launch Day

Everything is built. Before you open the doors, this lesson walks through the pre-launch checklist to make sure nothing is broken, missing, or embarrassing.

## Where We Left Off

FitSite has templates, plans, checkout, branding, onboarding, and pricing all configured. Now we verify everything works and go live.

## Pre-Launch Checklist

Work through every item. Do not skip any.

### Platform Infrastructure

- [ ] Hosting is stable and performing well under load
- [ ] Wildcard SSL is active and all subdomains serve over HTTPS
- [ ] Domain mapping works -- test creating a site and mapping a custom domain
- [ ] Backups are configured and tested (restore at least one to verify)
- [ ] Monitoring is in place -- you will know if the platform goes down

### Templates

- [ ] All three templates load correctly on new sites
- [ ] Placeholder content is helpful and free of typos
- [ ] All images are properly licensed (no stock photo watermarks)
- [ ] Mobile responsiveness works on every template page
- [ ] Page load speed is acceptable (test with a tool like GTmetrix or PageSpeed Insights)
- [ ] No broken links or missing assets on any template

### Plans and Products

- [ ] All three plans are active and visible
- [ ] Plan descriptions are accurate and niche-specific
- [ ] Pricing is correct (monthly and annual)
- [ ] Setup fees are configured on the right plans
- [ ] Trial period works on Starter plan
- [ ] Order bumps appear correctly during checkout
- [ ] Plugin and theme limitations are enforced correctly per plan

### Checkout Flow

- [ ] Complete a full test signup on each plan (use test payment mode)
- [ ] Template selection shows the correct templates per plan
- [ ] Payment processes successfully
- [ ] Customer receives welcome email after signup
- [ ] New site is created with the correct template
- [ ] Customer can log in to their new site immediately
- [ ] Discount codes work correctly

### Branding

- [ ] Login page shows FitSite branding
- [ ] Admin dashboard shows FitSite branding
- [ ] All system emails use FitSite branding and fitness-specific language
- [ ] Invoices display correctly with your business details
- [ ] Marketing site is live and links to the checkout form

### Onboarding

- [ ] Quick Start widget appears on new customer dashboards
- [ ] All Quick Start links point to the correct pages
- [ ] Welcome email sequence is configured and tested
- [ ] Knowledge base articles are published and accessible
- [ ] Account page shows correct plan information and upgrade options

### Legal and Business

- [ ] Terms of service are published and linked from checkout
- [ ] Privacy policy is published and accessible
- [ ] Refund policy is defined and documented
- [ ] Business entity is set up for receiving payments
- [ ] Payment gateway is in live mode (not test mode)
- [ ] Tax configuration is correct for your jurisdiction

## Soft Launch vs. Hard Launch

Consider a two-phase launch:

### Phase 1: Soft Launch

Invite 5-10 fitness studio owners to sign up before the public launch. These are your beta customers. Offer them a significant discount (50% off for life, or 3 months free) in exchange for:

- Honest feedback on the signup and onboarding experience
- Permission to use their site as a showcase example
- Reporting any bugs or issues they encounter

This gives you real customer feedback and live sites to showcase before you open to the public.

### Phase 2: Public Launch

Once soft launch feedback is incorporated:

- Switch payment gateway to live mode
- Publish your marketing site
- Begin customer acquisition (Lesson 11)
- Announce on relevant fitness industry channels

## Launch Day Actions

On the day you go public:

1. **Switch to live payments** -- disable test mode on your payment gateway
2. **Verify one more time** -- do a complete test signup with a real payment (refund yourself after)
3. **Monitor closely** -- watch for errors, failed signups, or payment issues
4. **Be available** -- your first real customers may need help, and fast response builds trust
5. **Celebrate briefly** -- then get back to work

## What Can Go Wrong

Be prepared for:

- **Payment gateway issues**: Have your gateway provider's support contact ready
- **SSL certificate problems**: Know how to check and renew certificates
- **Email delivery failures**: Test that emails actually arrive (check spam folders)
- **Performance under load**: If you get a traffic spike, know how to scale your hosting
- **Customer confusion**: Have your knowledge base and support channels ready

## The FitSite Network So Far

```
FitSite Network
├── WordPress Multisite (subdomain mode) ✓
├── Ultimate Multisite (configured + branded) ✓
├── Platform Domain (fitsite.com + wildcard SSL) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Products (Starter, Growth, Pro + Order Bumps + Discounts) ✓
├── Checkout Flow (tested end-to-end) ✓
├── Branding (complete) ✓
├── Customer Onboarding (Quick Start, emails, help resources) ✓
├── Pricing Strategy (annual, trials, setup fees, discounts) ✓
├── Pre-Launch Checklist (verified) ✓
├── Soft Launch (beta customers onboarded) ✓
└── LIVE ✓
```

## What We Built This Lesson

- **A comprehensive pre-launch checklist** covering infrastructure, content, payments, and legal
- **A soft launch strategy** to get real feedback before going public
- **Launch day procedures** to go live with confidence
- **A contingency plan** for common launch day issues

---

**Next:** [Lesson 11: Finding Customers](lesson-11-customers) -- now that FitSite is live, how do you get fitness studio owners to sign up?
