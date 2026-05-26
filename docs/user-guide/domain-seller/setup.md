---
title: "Setup and Provider Configuration"
sidebar_position: 1
---

# Domain Seller: Setup and Provider Configuration

The Domain Seller addon ships with a guided setup wizard that walks you through every required step. This page covers the wizard flow and how to configure or reconfigure providers afterward.

## Requirements

- **Multisite Ultimate** v2.4.12 or higher, network-activated
- **PHP** 7.4+
- API credentials for at least one supported registrar

## First-run setup wizard

The setup wizard launches automatically the first time you network-activate the plugin. It is also available at any time from **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Step 1 — Choose a provider

Select the registrar you want to connect. Supported options:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| HostAfrica | Yes | Yes (ID protection) |
| Openprovider | Yes | Yes |
| Hostinger | Via core Hostinger domain mapping for hosted domains | Yes |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### Step 2 — Enter credentials

Each provider has different credential fields:

**OpenSRS** — Username and private key (from the OpenSRS Reseller Control Panel)

**Namecheap** — Username and API key (from Account › Tools › API Access)

**HostAfrica** — Domains Reseller API endpoint and credentials from the HostAfrica reseller module. No separate sandbox endpoint is currently documented; test with safe read-only checks before running live registrations.

**Openprovider** — Username and password with API access enabled. Optional sandbox mode uses the Openprovider sandbox API, and an optional default customer handle can be reused for registrations.

**Hostinger** — The shared Hostinger hPanel API token from the core Hostinger integration. The same token powers core domain mapping and Domain Seller registration operations.

**GoDaddy** — API key and secret (from developer.godaddy.com)

**ResellerClub** — Reseller ID and API key (from the ResellerClub control panel)

**NameSilo** — API key (from namesilo.com › Account › API Manager)

**Enom** — Account ID and API token

Check **Sandbox mode** where available to test against the provider's test environment before going live.

### Step 3 — Test the connection

Click **Test Connection**. The wizard sends a lightweight API call to verify credentials and connectivity. Fix any credential issues before continuing.

### Step 4 — Import TLDs

Click **Import TLDs** to pull all available TLDs and wholesale pricing from the connected provider. This populates the TLD list used by domain products. The import may take 30–60 seconds for providers with large TLD catalogs.

TLDs are also re-synced automatically once per day via a scheduled cron job.

### Step 5 — Create a domain product

The wizard creates a default catch-all domain product with a 10% markup. You can edit this product immediately or skip and create products manually under **Ultimate Multisite › Products**.

See [Domain Products and Pricing](./domain-products) for the full product configuration guide.

---

## Reconfiguring a provider

Go to **Network Admin › Ultimate Multisite › Settings › Domain Seller** (or click **Settings** in the plugin list).

The settings page contains:

- **Enable domain selling** — toggle the entire feature on/off
- **Default provider** — the provider used for domain searches and new products
- **Max TLDs per search** — how many TLDs to check when a customer searches; higher values show more options but are slower
- **Availability cache duration** — how long to cache availability and pricing results; lower values are more accurate but increase API calls
- **Manage domain products** — quick link to the Products list
- **Configure providers** — opens the Integration Wizard to add or reconfigure providers

### Adding a second provider

Click **Configure providers** and run the wizard again for the new registrar. You can have multiple providers configured simultaneously. Assign each domain product to a specific provider, or leave it on the default.

### Syncing TLDs manually

In the settings page, click **Sync TLDs** next to any configured provider to pull the latest pricing. This is useful after a provider updates wholesale pricing or adds new TLDs.

---

## Logs

Each provider writes to its own log channel. Logs are viewable under **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | All registration attempts (success and failure) |
| `domain-seller-renewal` | Renewal job results |
| `domain-seller-opensrs` | Raw OpenSRS API activity |
| `domain-seller-namecheap` | Raw Namecheap API activity |
| `domain-seller-hostafrica` | Raw HostAfrica API activity |
| `domain-seller-openprovider` | Raw Openprovider API activity |
| `domain-seller-hostinger` | Raw Hostinger API activity |
| `domain-seller-godaddy` | Raw GoDaddy API activity |
| `domain-seller-resellerclub` | Raw ResellerClub API activity |
| `domain-seller-namesilo` | Raw NameSilo API activity |
| `domain-seller-enom` | Raw Enom API activity |

---

## Provider capability notes

Not every registrar API exposes the same operations. The addon surfaces unsupported operations with clear admin-facing errors instead of silently failing.

- **HostAfrica** supports the broadest live reseller workflow, including lookup, TLD/pricing sync, registration, renewal, transfer, nameserver updates, DNS records, EPP codes, registrar lock, and ID protection.
- **Openprovider** supports reseller-priced TLD sync, registration, renewal, transfers, nameserver updates, DNS zones, EPP codes, registrar lock, and WHOIS privacy. It authenticates with a short-lived bearer token that the addon refreshes automatically.
- **Hostinger** supports availability search, registration, portfolio lookup, nameserver updates, registrar lock, and WHOIS privacy through the shared hPanel API token. Hostinger's public Domains API does not expose reseller/wholesale pricing, inbound transfer, explicit renewal, or EPP-code retrieval; renewals are auto-renew only.
