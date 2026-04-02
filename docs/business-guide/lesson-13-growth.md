---
title: "Lesson 13: Scaling Up"
sidebar_position: 14
---

# Lesson 13: Scaling Up

You have a working platform with paying customers. This lesson covers how to grow from a small operation into a sustainable business -- scaling infrastructure, automating operations, and increasing revenue per customer.

## Where We Left Off

FitSite is live, customers are signing up, and you are running daily operations. Now we focus on growth.

## Know Your Numbers

Before scaling, understand where you stand:

### Key Metrics

- **MRR (Monthly Recurring Revenue)**: Total monthly subscription revenue
- **Customer count**: Total active subscribers
- **ARPU (Average Revenue Per User)**: MRR divided by customer count
- **Churn rate**: Percentage of customers who cancel each month
- **LTV (Lifetime Value)**: Average revenue per customer over their entire subscription
- **CAC (Customer Acquisition Cost)**: Average cost to acquire one customer

### Example: FitSite at 50 Customers

| Metric | Value |
|--------|-------|
| Customers | 50 (30 Starter, 15 Growth, 5 Pro) |
| MRR | $4,450 ($1,470 + $1,485 + $995 + $500 order bumps) |
| ARPU | $89/month |
| Monthly churn | 4% (2 cancellations/month) |
| LTV | $89 x 25 months = $2,225 |

These numbers tell you what to focus on. High churn? Fix retention. Low ARPU? Push upgrades. High CAC? Optimize acquisition channels.

## Scaling Infrastructure

### When to Scale

Scale hosting when:

- Page load times increase noticeably
- Server CPU or memory regularly exceeds 70% utilization
- You are approaching 100+ active sites
- Customer complaints about speed increase

### How to Scale

- **Vertical scaling**: Upgrade to a larger server (more CPU, RAM)
- **Caching layers**: Add Redis/Memcached for object caching, page caching for static content
- **CDN**: If not already using Cloudflare or similar, add a CDN for static assets
- **Database optimization**: As the network grows, database queries slow down. Optimize tables, add indexes, consider a dedicated database server.
- **Separate concerns**: Move media storage to object storage (S3-compatible), offload email to a transactional email service

### Hosting Migration

If your current host cannot scale further, plan a migration:

1. Set up the new environment
2. Test thoroughly with a copy of your network
3. Schedule migration during low-traffic hours
4. Update DNS with minimal TTL beforehand
5. Verify everything works post-migration

## Automating Operations

As you grow, manual processes become bottlenecks. Automate what you can:

### Webhooks and Zapier

Use [Webhooks](/user-guide/integrations/webhooks) or [Zapier](/user-guide/integrations/zapier) to automate:

- **New signup notifications** → Slack channel or CRM
- **Cancellation alerts** → trigger win-back email sequence
- **Payment failures** → alert in your monitoring tool
- **Plan upgrades** → congratulations email with new feature guide

### Email Automation

Move from manual emails to automated sequences:

- Onboarding sequence (already built in Lesson 8)
- Re-engagement sequence for inactive customers
- Upgrade prompts when customers approach plan limits
- Renewal reminders for annual subscribers

### Support Automation

- **Canned responses** for common questions
- **Auto-replies** acknowledging receipt of support tickets
- **Knowledge base suggestions** when customers submit tickets matching existing articles

## Increasing Revenue

Growth is not just about more customers. It is also about more revenue per customer.

### Upselling Existing Customers

- **Plan upgrades**: Targeted campaigns showing Growth/Pro features to Starter customers
- **Order bumps**: Promote add-on products to existing customers via email
- **Annual conversion**: Offer monthly customers a discount to switch to annual billing

### New Revenue Streams

- **Done-for-you setup**: Charge a premium to set up and customize a customer's site for them
- **Custom design services**: Offer bespoke design work on top of the template
- **Training sessions**: Paid one-on-one walkthroughs for customers who want hands-on help
- **Premium plugins**: Offer niche-specific premium plugins as paid add-ons (e.g., a fitness class booking widget)

### Raising Prices

As your platform matures and adds value:

- Grandfather existing customers at their current price
- Raise prices for new signups
- Justify increases with new features and improvements

## Building a Team

At some point, you cannot do everything alone. Common first hires:

1. **Support person**: Handles day-to-day customer questions (part-time initially)
2. **Content creator**: Writes knowledge base articles, blog posts, and marketing content
3. **Designer**: Improves templates and creates new ones

You do not need employees. Contractors and freelancers work well for a platform business.

## Growth Milestones

| Milestone | Approximate MRR | Focus |
|-----------|-----------------|-------|
| 0-25 customers | $0-$2,500 | Product-market fit, direct outreach |
| 25-100 customers | $2,500-$10,000 | Systematize operations, content marketing |
| 100-250 customers | $10,000-$25,000 | Hire support, optimize conversion, scale hosting |
| 250-500 customers | $25,000-$50,000 | Team building, new revenue streams, premium features |
| 500+ customers | $50,000+ | Platform maturity, adjacent niches, potential exit |

## What We Built This Lesson

- **A metrics framework** to understand business health
- **Infrastructure scaling plan** for growing from dozens to hundreds of sites
- **Automation strategies** for support, email, and operations
- **Revenue growth tactics** beyond just acquiring new customers
- **Team building guidance** for when you outgrow solo operation
- **Growth milestones** with focus areas for each stage

---

**Next:** [Lesson 14: What Comes Next](lesson-14-whats-next) -- expanding beyond your first niche.
