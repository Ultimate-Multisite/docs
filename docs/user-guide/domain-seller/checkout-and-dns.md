---
title: "Checkout Field and Customer DNS"
sidebar_position: 3
---

# Checkout Field and Customer DNS Management

## The Domain Selection checkout field

The **Domain Selection** field is a checkout element that gives customers a choice of how to get their site's domain. Add it to any checkout form to enable domain selling.

### Adding the field to a checkout form

1. Go to **Network Admin › Ultimate Multisite › Checkout Forms**
2. Open or create a checkout form
3. In the checkout editor, click **Add Field**
4. Choose **Domain Selection** from the field list
5. Configure the field options (see below)
6. Save the form

### Field options

**Domain modes** — Choose which tabs the customer sees. Each mode can be enabled or disabled independently:

| Mode | What it does |
|---|---|
| **Subdomain** | Customer uses a free subdomain on your network (e.g., `mysite.yournetwork.com`). No payment needed. |
| **Register New Domain** | Customer searches for a new domain and registers it through your configured provider. Uses the matching domain product for pricing. |
| **Existing Domain** | Customer maps a domain they already own. No registration fee. The domain is mapped automatically to their site. |

**Default mode** — When all three modes are enabled, which tab opens first. Set to **Subdomain** to keep domain registration optional, or **Register New Domain** to encourage purchases.

**Domain product** — Optionally pin this field to a specific domain product. If not set, the addon automatically selects the matching product based on the TLD the customer searches.

### Registrant contact fields

When a customer selects the **Register New Domain** tab, the checkout form adds registrant contact fields inline:

- First name / Last name
- Email address
- Address (line 1, city, state/province, postal code, country)
- Phone number

These are required by all registrars and validated before the registration API call is made. Phone numbers are automatically formatted to the `+CC.NNN` international format expected by registrars.

### Auto-generated site URL

When a customer registers or maps a domain, the site URL field is automatically populated from the chosen domain. Customers do not need to fill in a separate URL field.

### Search behaviour

- Domain availability is checked in real-time with AJAX as the customer types
- Alternative TLD suggestions are shown when the preferred domain is unavailable
- Pricing is fetched live and displayed clearly (registration price, renewal price, optional WHOIS privacy fee)
- Coupon codes apply to domain products the same as any other product

**Tuning search responsiveness:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Adding custom fields to the domain search form:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Additional notes',
    ];
    return $fields;
});
```

---

## Customer DNS management

Customers can manage DNS records for their registered domains from the **My Account** page, under their domain's entry.

### Supported record types

| Type | Use |
|---|---|
| **A** | Map hostname to IPv4 address |
| **AAAA** | Map hostname to IPv6 address |
| **CNAME** | Create an alias pointing to another hostname |
| **MX** | Set mail exchange server |
| **TXT** | Add SPF, DMARC, verification, or other text records |

### Which providers support DNS management?

DNS management (add, edit, delete records) is available with **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, and **Openprovider**. **Hostinger** domains can update nameservers through Domain Seller; DNS records for hosted domains are managed by the core Hostinger domain-mapping integration. Namecheap, GoDaddy, and NameSilo domains display status and expiry information but DNS must be managed directly in the registrar's control panel.

### Default DNS records

You can configure default DNS records that are applied automatically when a domain is registered. Go to **Settings › Domain Seller › Default DNS Records**.

Default record values support two tokens:

| Token | Replaced with |
|---|---|
| `{DOMAIN}` | The registered domain name (e.g., `example.com`) |
| `{SITE_URL}` | The WordPress site URL for the customer's site |

**Example — point the apex domain and www to your server IP:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: viewing and editing DNS

Network admins can view and edit DNS records for any customer domain from the domain's edit page in **Network Admin › Ultimate Multisite › Domains**.
