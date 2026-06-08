---
title: ਸੈਟਅਪ ਅਤੇ ਪ੍ਰੋਵਾਈਡਰ ਕਨਫਿਗਰੇਸ਼ਨ
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Setup ਅਤੇ Provider Configuration

Domain Seller addon ਇੱਕ guided setup wizard ਨਾਲ ਆਉਂਦਾ ਹੈ ਜੋ ਤੁਹਾਨੂੰ ਹਰ ਜ਼ਰੂਰੀ ਕਦਮ ਦੱਸਦਾ ਹੈ। ਇਹ ਪੇਜ wizard ਦੇ flow ਨੂੰ ਕਵਰ ਕਰਦਾ ਹੈ ਅਤੇ ਇਹ ਵੀ ਦੱਸਦਾ ਹੈ ਕਿ ਬਾਅਦ ਵਿੱਚ providers ਨੂੰ ਕਿਵੇਂ configure ਜਾਂ reconfigure ਕਰਨਾ ਹੈ।

## Requirements

- **Multisite Ultimate** v2.4.12 ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ, network-activated
- **PHP** 7.4+
- ਘੱਟੋ-ਘੱਟ ਇੱਕ ਸਪੋਰਟ ਕੀਤੇ ਰਜਿਸਟਰ ਨਾਲ API credentials

## First-run setup wizard

Setup wizard ਪਹਿਲੀ ਵਾਰ ਜਦੋਂ ਤੁਸੀਂ plugin ਨੂੰ network-activate ਕਰਦੇ ਹੋ ਤਾਂ ਆਪਣੇ ਆਪ ਚੱਲ ਪੈਂਦਾ ਹੈ। ਇਹ ਕਿਸੇ ਵੀ ਸਮੇਂ **Network Admin › Ultimate Multisite › Domain Seller Setup** ਤੋਂ ਵੀ ਉਪਲਬਧ ਹੈ।

### Step 1 — Choose a provider

ਉਹ ਰਜਿਸਟਰ ਚੁਣੋ ਜਿਸ ਨਾਲ ਤੁਸੀਂ ਕਨੈਕਟ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ। ਸਪੋਰਟ ਕੀਤੇ ਵਿਕਲਪ:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### Step 2 — Enter credentials

ਹਰੇਕ provider ਦੇ credentials fields ਵੱਖਰੇ ਹੁੰਦੇ ਹਨ:

**OpenSRS** — Username ਅਤੇ private key (OpenSRS Reseller Control Panel ਤੋਂ)

**Namecheap** — Username ਅਤੇ API key (Account › Tools › API Access ਤੋਂ)

**GoDaddy** — API key ਅਤੇ secret (developer.godaddy.com ਤੋਂ)

**ResellerClub** — Reseller ID ਅਤੇ API key (ResellerClub control panel ਤੋਂ)

**NameSilo** — API key (namesilo.com › Account › API Manager ਤੋਂ)

**Enom** — Account ID ਅਤੇ API token

ਜਿੱਥੇ ਉਪਲਬਧ ਹੋਵੇ, ਉੱਥੇ **Sandbox mode** ਦੀ ਜਾਂਚ ਕਰੋ ਤਾਂ ਜੋ live ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ provider ਦੇ test environment 'ਤੇ ਟੈਸਟ ਕਰ ਸਕੋ।

### Step 3 — Test the connection

**Test Connection** 'ਤੇ ਕਲਿੱਕ ਕਰੋ। wizard credentials ਅਤੇ connectivity ਦੀ ਪੁਸ਼ਟੀ ਕਰਨ ਲਈ ਇੱਕ ਹਲਕਾ API call ਭੇਜਦਾ ਹੈ। ਅੱਗੇ ਵਧਣ ਤੋਂ ਪਹਿਲਾਂ ਕੋਈ ਵੀ credential issue fix ਕਰ ਲਓ।

### Step 4 — Import TLDs

ਸਾਰੇ ਉਪਲਬਧ TLDs ਅਤੇ wholesale pricing ਨੂੰ ਕਨੈਕਟ ਕੀਤੇ provider ਤੋਂ ਖਿੱਚਣ ਲਈ **Import TLDs** 'ਤੇ ਕਲਿੱਕ ਕਰੋ। ਇਹ TLD list ਨੂੰ ਭਰਦਾ ਹੈ ਜੋ domain products ਦੁਆਰਾ ਵਰਤੀ ਜਾਂਦੀ ਹੈ। ਜੇ provider ਕੋਲ ਵੱਡਾ TLD catalog ਹੈ ਤਾਂ ਇਸ import ਵਿੱਚ 30–60 ਸਕਿੰਟ ਲੱਗ ਸਕਦੇ ਹਨ।

TLDs ਨੂੰ ਇੱਕ ਦਿਨ ਵਿੱਚ ਇੱਕ ਵਾਰ ਇੱਕ scheduled cron job ਰਾਹੀਂ ਆਪਣੇ ਆਪ re-sync ਵੀ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।

### Step 5 — Create a domain product

wizard ਇੱਕ default catch-all domain product 10% markup ਨਾਲ ਬਣਾਉਂਦਾ ਹੈ। ਤੁਸੀਂ ਇਸ product ਨੂੰ ਤੁਰੰਤ edit ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ skip ਕਰਕੇ **Ultimate Multisite › Products** ਹੇਠ manually products ਬਣਾ ਸਕਦੇ ਹੋ।

full product configuration guide ਲਈ [Domain Products and Pricing](./domain-products) ਦੇਖੋ।

---

## Reconfiguring a provider

**Network Admin › Ultimate Multisite › Settings › Domain Seller** 'ਤੇ ਜਾਓ (ਜਾਂ plugin list ਵਿੱਚ **Settings** 'ਤੇ ਕਲਿੱਕ ਕਰੋ)।

settings page ਵਿੱਚ ਇਹ ਚੀਜ਼ਾਂ ਸ਼ਾਮਲ ਹਨ:

- **Enable domain selling** — ਪੂਰੀ feature ਨੂੰ on/off ਕਰਨ ਲਈ toggle
- **Default provider** — domain searches ਅਤੇ naye products ਲਈ ਵਰਤਿਆ ਜਾਣ ਵਾਲਾ provider
- **Max TLDs per search** — ਜਦੋਂ ਕੋਈ customer search ਕਰਦਾ ਹੈ ਤਾਂ ਕਿੰਨੇ TLDs ਦੀ ਜਾਂਚ ਕੀਤੀ ਜਾਵੇ; ਵੱਡੇ values ਜ਼ਿਆਦਾ options ਦਿਖਾਉਂਦੇ ਹਨ ਪਰ ਧੀਮੇ ਹੁੰਦੇ ਹਨ
- **Availability cache duration** — availability ਅਤੇ pricing results ਨੂੰ ਕਿੰਨੇ ਸਮੇਂ ਲਈ cache ਕਰਨਾ ਹੈ; ਘੱਟ values ਜ਼ਿਆਦਾ accurate ਹੁੰਦੇ ਹਨ ਪਰ API calls ਵਧਾਉਂਦੇ ਹਨ
- **Manage domain products** — Products list 'ਤੇ quick link
- **Configure providers** — providers ਨੂੰ add ਜਾਂ reconfigure ਕਰਨ ਲਈ Integration Wizard ਖੋਲ੍ਹਦਾ ਹੈ

### Adding a second provider

**Configure providers** 'ਤੇ ਕਲਿੱਕ ਕਰੋ ਅਤੇ naye registrar ਲਈ wizard ਨੂੰ ਦੁਬਾਰਾ ਚਲਾਓ। ਤੁਸੀਂ ਇੱਕੋ ਸਮੇਂ ਕਈ providers configure ਕਰ ਸਕਦੇ ਹੋ। ਹਰੇਕ domain product ਨੂੰ ਇੱਕ specific provider ਨਾਲ assign ਕਰੋ, ਜਾਂ ਇਸਨੂੰ default 'ਤੇ ਛੱਡ ਦਿਓ।

### Syncing TLDs manually

settings page 'ਤੇ, ਕੋਈ ਵੀ configure ਕੀਤੇ provider ਦੇ ਨਾਲ **Sync TLDs** 'ਤੇ ਕਲਿੱਕ ਕਰਕੇ latest pricing ਖਿੱਚੋ। ਇਹ ਉਦੋਂ ਕੰਮ ਆਉਂਦਾ ਹੈ ਜਦੋਂ ਕੋਈ provider wholesale pricing update ਕਰਦਾ ਹੈ ਜਾਂ naye TLDs ਜੋੜਦਾ ਹੈ।

---

## Logs

ਹਰੇਕ provider ਆਪਣੇ log channel ਵਿੱਚ ਲਿਖਦਾ ਹੈ। Logs **Network Admin › Ultimate Multisite › Logs** ਹੇਠਾਂ ਦੇਖੇ ਜਾ ਸਕਦੇ ਹਨ:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | ਸਾਰੇ registration attempts (success ਅਤੇ failure) |
| `domain-seller-renewal` | Renewal job results |
| `domain-seller-opensrs` | Raw OpenSRS API activity |
| `domain-seller-namecheap` | Raw Namecheap API activity |
| `domain-seller-godaddy` | Raw GoDaddy API activity |
| `domain-seller-resellerclub` | Raw ResellerClub API activity |
| `domain-seller-namesilo` | Raw NameSilo API activity |
| `domain-seller-enom` | Raw Enom API activity |
