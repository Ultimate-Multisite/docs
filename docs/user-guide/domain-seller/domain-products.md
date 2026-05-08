---
title: "Domain Products and Pricing"
sidebar_position: 2
---

# Domain Products and Pricing

Domain products are how you control pricing, TLDs, WHOIS privacy, and provider selection. Each domain product is a standard Multisite Ultimate product with an extra **Domain Settings** tab.

## Creating a domain product

1. Go to **Network Admin › Ultimate Multisite › Products**
2. Click **Add New**
3. Set the product type to **Domain**
4. Configure the **Domain Settings** tab (see below)
5. Save

Domain products appear with a purple **Domain** badge in the product list and can be filtered using the **Domain Products** tab.

## Domain settings tab

### Provider

Select which registrar handles registration for this product. Defaults to the global **Default provider** set in Domain Seller settings.

### Supported TLDs

Leave blank to create a **catch-all product** that applies to all TLDs not matched by another product.

Enter a comma-separated list of TLDs (e.g., `.com, .net, .org`) to create a **TLD-specific product** that applies only to those extensions.

**How product matching works:** When a customer searches for a domain, the addon picks the most specific matching product. A product with `.com` in its TLD list takes precedence over a catch-all product. If no TLD-specific product matches, the catch-all is used. If no products exist, the domain search is not shown.

### Markup type

Three modes control how your retail price is calculated from the wholesale cost:

| Mode | How it works |
|---|---|
| **Percentage** | Adds a percentage on top of wholesale cost. A 20% markup on a $10 wholesale domain gives $12. |
| **Fixed markup** | Adds a fixed dollar amount. A $5 markup on a $10 domain gives $15. |
| **Fixed price** | Ignores wholesale cost entirely. Always charges the amount you enter. |

### Introductory pricing

Enable to offer a discounted first-year price. Set a separate **Introductory price** (the year-1 price) alongside the regular **Renewal price** (year 2+). The customer sees both prices displayed during checkout so they know what to expect at renewal.

### WHOIS privacy

Controls whether WHOIS privacy protection is offered for domains registered through this product.

| Setting | Behaviour |
|---|---|
| **Disabled** | WHOIS privacy is never offered or enabled. |
| **Always Included** | WHOIS privacy is enabled automatically at registration at no charge. |
| **Customer Choice** | A checkbox appears during checkout. Set the **Privacy price** to charge per year, or leave it at $0 to offer it free. |

For Namecheap, WHOIS privacy uses WhoisGuard (always free). For OpenSRS, it uses the OpenSRS privacy service (may have a cost at wholesale).

---

## TLD import and sync

Domain products display real-time wholesale pricing fetched from the connected provider. For this to work, TLDs must be imported.

- **Manual sync:** Settings › Domain Seller › Sync TLDs (per provider)
- **Automatic sync:** Runs daily via a scheduled cron job across all configured providers

After a sync, go to any domain product's Domain Settings tab and use the TLD picker to see available TLDs with their current wholesale prices.

---

## Auto-renewal

Domain renewals are tied to the customer's membership status:

- When a membership renews and a domain is linked, the domain renewal is automatically queued
- Renewal attempts use the customer's active payment gateway
- Failed renewals are retried automatically with exponential backoff
- Email notifications are sent for successful renewals, failures, and upcoming expirations

Email template IDs for domain lifecycle events:

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: Manual domain registration

To register a domain on behalf of a customer without them going through checkout:

1. Go to **Network Admin › Ultimate Multisite › Register Domain**
2. Select the customer and enter the domain name
3. Fill in registrant contact details (name, address, phone)
4. Click **Register**

The domain record is created and linked to the customer's account.
