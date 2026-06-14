---
title: Nkwado Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integration

## Overview
Cloudways na-ehe platform hosting cloud-based management nke, na-enwe ịkwado ka ịdeploy WordPress sites na ọtụtụ ndị nchek cloud site dị ka DigitalOcean, AWS, Google Cloud, na ọzọ. Integration a na-eme iji syncing domain automatic na management SSL certificate n'etiti Ultimate Multisite na Cloudways.

## Features
- Automatic domain syncing (syncing domain automatic)
- Management SSL certificate (management SSL certificate)
- Support for extra domains (support for extra domains)
- DNS validation for SSL certificates (DNS validation for SSL certificates)

## Requirements
Ihe constants ndị a ga-abụ na file `wp-config.php` của gị:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

N'ụzo, ị ga-abụ na:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Setup Instructions

### 1. Get Your Cloudways API Credentials

1. Log in na dashboard Cloudways của gị
2. Mene "Account" > "API Keys" (Tụi-onye "Account" > "API Keys")
3. Generate API key ma ọ bụrụ na ị chọrọ, ọ bụrụ na ị iche n'ụọ
4. Copy email na API key của gị

### 2. Get Your Server and Application IDs

1. Na dashboard Cloudways của gị, mene "Servers" (N'ime "Servers")
2. Select server na-enwe WordPress multisite của gị dị
3. Server ID bụ ihe ọkụ na URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Mene "Applications" (N'ime "Applications") ma select application WordPress của gị
5. App ID bụ ihe ọkụ na URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Add Constants to wp-config.php

Add constants ndị a na file `wp-config.php` của gị:

```php
define('WU_CLOUDWAYS_EMAIL', 'email-cloudways-cua-cua');
define('WU_CLOUDWAYS_API_KEY', 'api-key-cloudways-cua-cua');
define('WU_CLOUDWAYS_SERVER_ID', 'server-id-cloudways-cua-cua');
define('WU_CLOUDWAYS_APP_ID', 'app-id-cloudways-cua-cua');
```

Ka ọ bụrụ domain **ngozerò** ndị ọzọ (ara ọkụkọ multisite tute) nke igweghere na ọ nwere ike ịbụ ya dị ka ihe ọ bụla na list aliases Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning E ji kọwa domain tute gị (wildcard)
E **eji** jikọta `*.your-network.com` (ama ndaanyike subdomain nke ọkụkọ tute gị) n'WU_CLOUDWAYS_EXTRA_DOMAINS. Jiji [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall) a iche ọnụ dị ka ihe kedu ga-eji ya maka faa certificate SSL ọ bụla na-tenant.
:::

### 4. Ọkụkọ Integrasiya (Enable the Integration)

1. Na admin WordPress gị, joko Ultimate Multisite > Settings
2. Joko n'tab "Domain Mapping"
3. Joko ya kacha anyị n'Host Integrations
4. Kvæl integrasiya Cloudways
5. Kvæl "Save Changes"

## Ọ dị ka ịrụ

### Domain Syncing (Jikọta Domain)

Mgbe domain na-map n'Ultimate Multisite:

1. Integrasiya ahụ ga-eji ma ọ bụ kọwa semua domains ndị a na-map
2. Ọ ga-eji nyere domain ọhụrụ ahụ n'list (naikọwa www ma ọ bụ ihe dị ka ya ma ọ bụ nwere)
3. Ọ ga-eji anọrọ API Cloudways nke domaina ahụ gị via API
4. Cloudways ga-eji update aliases domain ndị a na-akọwa maka application gị

Nche: API Cloudways ji nyere semua list domains ọ bụrụ na ị nwere, ma ọ bụ karịa ị chọrọ ka ị nwere, ebe ọ bụla.

### SSL Certificate Management (Iye Certificate SSL)

Ọ bụrụ na domain ndị a jikọta:

1. Integrasiya ahụ ga-eji kọwa domain ndị a nwere DNS records dị mma na-akpọ maka server gị
2. Ọ ga-eji nyere request si Cloudways ka ọ ga-eji Let's Encrypt SSL certificates maka domain ndị a
3. Cloudways ga-eji anọrọ certificate SSL ma ọ bụ nwere ya

```php
// Custom logic when checkout completes
```

Integration-ah always requests **standard** (non-wildcard) Let's Encrypt certificates from Cloudways. If you supply a wildcard pattern in `WU_CLOUDWAYS_EXTRA_DOMAINS`, the leading `*.` will be removed before the SSL request — the wildcard itself is never installed by this integration. To use a wildcard certificate on Cloudways, you would have to install it manually, but doing so blocks per-domain Let's Encrypt issuance for mapped custom domains (see the pitfall below).

## Extra Domains

The `WU_CLOUDWAYS_EXTRA_DOMAINS` constant allows you to specify additional **external** domains that should always be kept on the Cloudways application's aliases list. Use it for:

- External domains that are not managed by Ultimate Multisite (e.g. a separate marketing site sharing the same Cloudways application)
- Parked or staging domains you want kept on the application aliases list

Do **not** use this constant for your own network's subdomain wildcard (e.g. `*.your-network.com`). See the wildcard SSL pitfall below.

## Important — Wildcard SSL Pitfall

A common mistake when following Cloudways' default setup is to add a wildcard such as `*.your-network.com` to `WU_CLOUDWAYS_EXTRA_DOMAINS`, or to manually install a Cloudways wildcard SSL certificate for that wildcard.

If you do this, Cloudways will refuse to issue Let's Encrypt certificates for the per-tenant custom domains that Ultimate Multisite maps. Cloudways replaces the active SSL certificate on the application each time, and a pre-existing wildcard certificate on the application blocks the per-domain Let's Encrypt issuance the integration relies on.

### Recommended Cloudways SSL setup for an Ultimate Multisite network

1. Na tab **SSL Certificate** na application Cloudways, install **standard Let's Encrypt certificate** nke nwere `your-network.com` na `www.your-network.com` karịrị — **ebee** wildcard.
2. **Kere** ị chọp `*.your-network.com` (na ndụ anyị ga-agbọ na ọkụ anyị) n'WU_CLOUDWAYS_EXTRA_DOMAINS. Chọp constant ah maka **external** domains karịrị.
3. Create subdomain wildcard per-tenant na level **DNS** kana (an `A` record fọdụ `*.your-network.com` na ọkụ server Cloudways anyị) ka subsites ga-agbọ. SSL fọdụ custom domains ndị dị nwere mapping bụrụkarị anọchịrị na integration via Let's Encrypt.

Ọ bụrụ na custom domains nke tenants-ụ dị nwere stuck ma ọ bụ ma ọ bụ SSL, chọp tab Cloudways SSL. Ọ bụrụ na wildcard certificate dị na m, jụọ ya offe, re-issue standard Let's Encrypt certificate fọdụ main network domain karịrị, na ri-remove ndụ wildcard n'WU_CLOUDWAYS_EXTRA_DOMAINS. Tata, re-trigger domain mapping (naa ma ọ bụ gbankara anọchịrị ah) na integration ga-agbọ certificate per-domain again.

## Troubleshooting

### API Connection Issues
- Jụọ na email anyị na API key anyị bụrụkarị nwere
- Check na server anyị na application IDs anyị bụrụkarị nwere
- Ensure na Cloudways account anyị ga-agbọ permissions ndị dịrị

### Issues with SSL Certificate
- Cloudways onye na domain-nụ (DNS records) ọma nọ ga-akịrị (valid) na ji server-nụ gị ọma nọ haa gaa (pointing to your server) karịsịrị (before issuing) SSL certificates.
- Integration-nụ ahụ na-akịrị DNS records haa gaa karịsịrị trước khi yêu cầu SSL certificates.
- Ka SSL certificates karịsịrị, jikọta (check) ka domain-nụ gị nọ haa gaa ọma nụ IP server-nụ gị karịsịrị.
- **Domain-nụ kachị (Per-tenant custom domains) na-akịrị (stuck) ma ọ bụ SSL?** Jikọta tab SSL Certificate nke Cloudways application ahụ. Ka wildcard certificate (manually installed, or covering `*.your-network.com`) dị n'ụrụ, Cloudways karịsịrị (will not issue) Let's Encrypt certificates ha custom domains ndị ọzọ na-akịrị (individually mapped). Jikọta ya na certificate Let's Encrypt standard nke ga-akịrị (covering) domain nụ ọkụkọ ahụ karịsịrị (`your-network.com`, `www.your-network.com`) karịsịrị ma ri dịghị (remove) ndụ wildcard na `WU_CLOUDWAYS_EXTRA_DOMAINS`. Ka re-trigger domain mapping (or wait for the next one) ma integration-nụ ahụ ga-akịrị SSL certificates ha each domain.

### Domain Not Added
- Jikọta Ultimate Multisite logs ha ndụ error messages ọ bụla.
- Ka na-akịrị (verify) ka domain nọ dịghị na-akịrị Cloudways karịsịrị.
- Ka na-akịrị (ensure) ka Cloudways plan gị ga-akịrị (supports) ndụ domains ị ga-akịrị.
