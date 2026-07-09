---
title: Produin agus prìsan domhainn
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Productine agus Prìsan {#domain-products-and-pricing}

Tha productine domain is am fhaighinn air a tha thu a' tuilleadh ar prìsan, TLDs (Top-Level Domains), privacy WHOIS, agus choinnachadh an t-saobar. Tha chada productine domain mar product Ultimate Multisite a tha deàrraidhach le tab **Domain Settings** a tha fhaighinn air.

## Creachadh productine domain {#creating-a-domain-product}

1. Comas gu **Network Admin › Ultimate Multisite › Products**
2. Comas **Add New**
3. Set an t-aithris product sin air **Domain**
4. Configure tab **Domain Settings** (fàilte a tha a' cruinneachadh a tha a tha a' cur tinne sin)
5. Save

Tha productine domain a' fhaighinn le badge **Domain** coirp **purple** anns an liosta productine agus is eadar a faighinn a' le tab **Domain Products**.

## Tab Domain Settings {#domain-settings-tab}

### Provider (Sealltainn) {#provider}

Taisg an t-saobar a tha a' cur tinne air a' cruinneachadh airson seo. Tha e a' cur tinne air **Default provider** a tha a' cur tinne air a' chùl Domain Seller.

### Supported TLDs (TLDs a tha a' cur tinne) {#supported-tlds}

Lathaich an t-aithris gu leathan airson productine **catch-all** a tha a' cur tinne air a th' ann a tha a' cur tinne air a chùl eile.

A' cur tinne liosta a' chùl (e.g., `.com, .net, .org`) airson productine **TLD-specific** a tha a' cur tinne air a tha a' cur tinne sin.

**Còmhraidh a tha a' cur tinne:** Nuair a tha stiùireach a' tighinn air domain, a thàth an addon a th’ ann a tha a' cur tinne air a productine is dòidh. Tha productine le `.com` anns a liosta TLD sin a tha a' cur tinne a' cur tinne a' chùl eile. Tha productine catch-all a tha a' cur tinne a' cur tinne a' cur tinne a' cur tinne air. Mar a tha aon productine specific airson TLD a tha a' cur tinne, tha an catch-all a tha a' cur tinne a' cur tinne a' cur tinne.**

### Markup type (Taisg a tha a' cur tinne) {#markup-type}

Tha tònaichean tòiseachadh a tha a' cur tinne air faicinn a' cur tinne prìsan riatach air an t-saobar:

| Mode (Mod) | Còmhraidh a tha a' cur tinne |
|---|---|
| **Percentage** | Tha e a' cur tinne fìdh a' cur tinne air an t-saobar. Tha 20% markup air prìsan domain a tha a' cur tinne air $10 a' cur tinne $12. |
| **Fixed markup** | Tha e a' cur tinne am prìsan fìdh a tha a' cur tinne. Tha $5 markup air domain a tha a' cur tinne $10 a' cur tinne $15. |
| **Fixed price** | Tha e a' cur tinne an t-saobar gu leathan. Tha e a' cur tinne am prìsan sin a tha a' cur tinne. |

### Introductory pricing (Prìsan fhaighinn) {#introductory-pricing}

Enable to offer a discounted first-year price. Set a separate **Introductory price** (the year-1 price) alongside the regular **Renewal price** (year 2+). The customer sees both prices displayed during checkout so they know what to expect at renewal.

### WHOIS privacy {#whois-privacy}

Controls whether WHOIS privacy protection is offered for domains registered through this product.

| Setting | Behaviour |
|---|---|
| **Disabled** | WHOIS privacy is never offered or enabled. |
| **Always Included** | WHOIS privacy is enabled automatically at registration at no charge. |
| **Customer Choice** | A checkbox appears during checkout. Set the **Privacy price** to charge per year, or leave it at $0 to offer it free. |

For Namecheap, WHOIS privacy uses WhoisGuard (always free). For OpenSRS, it uses the OpenSRS privacy service (may have a cost at wholesale).

---

## TLD import and sync {#tld-import-and-sync}

Domain products display real-time wholesale pricing fetched from the connected provider. For this to work, TLDs must be imported.

- **Manual sync:** Settings › Domain Seller › Sync TLDs (per provider)
- **Automatic sync:** Runs daily via a scheduled cron job across all configured providers

After a sync, go to any domain product's Domain Settings tab and use the TLD picker to see available TLDs with their current wholesale prices.

---

## Auto-renewal {#auto-renewal}

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

## Admin: Registration manual de domain {#admin-manual-domain-registration}

Chan eil fhaighinn a' chluaintear air an t-seòl mar a tha eairt, gu sàmhachd air a bheith iad a' cridheadh:

1. Ràdhdaidh **Network Admin › Ultimate Multisite › Register Domain**
2. Taisg an chluaintear agus leugh an ainm de domain
3. Bhraigh an t-seòl contact na chluaintear (ainm, adhradh, fonn)
4. Clic air **Register**

Bhaidh an seòl de domain a' cridheadh agus a' ghnàthach air an t-seòl an chluaintear.
