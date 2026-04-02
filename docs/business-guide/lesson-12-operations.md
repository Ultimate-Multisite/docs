---
title: "Lesson 12: Running the Business"
sidebar_position: 13
---

# Lesson 12: Running the Business

A platform is not a project you finish -- it is a business you run. This lesson covers the day-to-day operations of managing FitSite: support, billing, maintenance, and keeping customers happy.

## Where We Left Off

FitSite is live and customers are signing up. Now you need to run the operation sustainably.

## Daily Operations

### Monitoring

Check these daily (or set up alerts):

- **Uptime**: Is the platform accessible? Use an uptime monitoring service.
- **New signups**: How many new customers signed up today?
- **Failed payments**: Are there payment failures that need attention?
- **Support requests**: Are there unanswered customer questions?

### Customer Support

Your niche focus is an advantage here. Because all your customers are fitness studios, you will see the same questions repeatedly:

**Common questions you will get:**

- "How do I update my class schedule?"
- "Can I change my site's colors?"
- "How do I add a new trainer to my site?"
- "My domain is not working"
- "How do I cancel/upgrade my plan?"

Build your knowledge base (started in Lesson 8) around these recurring questions. Every support ticket that could have been a knowledge base article is a signal to write that article.

### Support Tiers

As you grow, structure support by plan:

| Plan | Support Level | Response Time |
|------|--------------|---------------|
| Starter | Knowledge base + email | 48 hours |
| Growth | Email support | 24 hours |
| Pro | Priority email + onboarding call | 4 hours |

The [Support Tickets addon](/addons/support-tickets) can help manage support requests within the platform.

## Billing Operations

### Recurring Payments

Ultimate Multisite handles recurring billing automatically through your payment gateway. Your job is to monitor for:

- **Failed payments**: Follow up promptly. Most failures are expired cards, not intentional cancellations.
- **Dunning**: Set up automated retry logic through your payment gateway (Stripe handles this well)
- **Cancellation requests**: Understand why customers leave. Every cancellation is feedback.

### Managing Memberships

Navigate to **Ultimate Multisite > Memberships** to:

- View all active subscriptions
- Handle upgrade and downgrade requests
- Process refunds when necessary
- Manage trial expirations

See [Managing Memberships](/user-guide/administration/managing-memberships) for the full reference.

### Invoicing

Ensure invoices are generated correctly for every payment. Customers may need invoices for business expense reporting. See [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices).

## Platform Maintenance

### WordPress and Plugin Updates

As the network administrator, you are responsible for:

- **WordPress core updates**: Test on a staging site before applying to production
- **Plugin updates**: Same -- test first, then apply network-wide
- **Theme updates**: Verify templates still look correct after theme updates
- **Ultimate Multisite updates**: Follow the changelog and test before updating

:::warning Never Update in Production Without Testing
A broken update affects every customer site on your network. Always test updates on a staging copy of your network first.
:::

### Security

- Keep all software up to date
- Use strong passwords and two-factor authentication for admin accounts
- Monitor for suspicious activity
- Have a plan for security incidents

### Performance

As your network grows, monitor:

- **Page load times**: Are customer sites fast?
- **Server resource usage**: CPU, memory, disk space
- **Database performance**: Large networks need database optimization over time

Consider implementing caching (page cache, object cache) and a CDN if you have not already. The [Cloudflare integration](/user-guide/host-integrations/cloudflare) handles much of this.

## Customer Lifecycle Management

### Reducing Churn

Churn is the percentage of customers who cancel each month. For a subscription business, reducing churn is as important as acquiring new customers.

**Common reasons fitness studio customers churn:**

- They could not figure out how to use the platform → improve onboarding
- The site did not look good enough → improve templates
- They did not see value → improve features or communication
- They found a cheaper alternative → reinforce your niche value
- Their business closed → unavoidable, but track this separately

### Encouraging Upgrades

Customers on Starter who are succeeding should be encouraged to upgrade:

- When they hit plan limits (sites, storage), show upgrade prompts
- Send targeted emails highlighting Growth plan features they would benefit from
- Showcase what Growth/Pro customers have built

### Win-Back Campaigns

When a customer cancels:

1. Ask why (exit survey or email)
2. Address their concern if possible
3. Offer a discount to return (30-60 days after cancellation)

## Weekly and Monthly Routines

### Weekly

- Review new signups and cancellations
- Respond to all open support tickets
- Check platform performance and uptime
- Review any failed payments

### Monthly

- Analyze key metrics (MRR, churn, new customers, upgrades)
- Apply WordPress and plugin updates (after staging test)
- Review and update knowledge base based on support patterns
- Send a newsletter or update to customers (new features, tips, fitness industry news)

### Quarterly

- Review pricing against competitors and customer feedback
- Evaluate template designs -- do they need refreshing?
- Assess hosting capacity -- do you need to scale?
- Review and improve onboarding based on activation data

## What We Built This Lesson

- **Daily monitoring routines** for uptime, signups, payments, and support
- **A tiered support structure** matched to plan levels
- **Billing operations** including dunning and cancellation handling
- **Maintenance procedures** for updates, security, and performance
- **Churn reduction strategies** specific to the fitness niche
- **Weekly, monthly, and quarterly operational routines**

---

**Next:** [Lesson 13: Scaling Up](lesson-13-growth) -- growing FitSite from a small operation to a real business.
