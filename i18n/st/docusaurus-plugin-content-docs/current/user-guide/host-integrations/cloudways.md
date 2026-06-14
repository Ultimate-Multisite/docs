---
title: Ho lula le Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Le Tšhoboho le Cloudways Integration

## Le Letsatsi la Morero (Overview)
Cloudways ke platform ya hosting e ebeletse (managed cloud hosting platform) e e tlhola ka sefapeng sa WordPress ka sefapeng sa cloud o fapaneng, ka DigitalOcean, AWS, Google Cloud, le ba bang. Ho na le ho fetoga haholo (automatic domain syncing) le ho fetoga certificate ya SSL molao (SSL certificate management) ho a re Ultimate Multisite le Cloudways.

## Boitshwaro (Features)
- Ho fetoga haholo la domain (Automatic domain syncing)
- Ho fetoga certificate ya SSL (SSL certificate management)
- Ho tlhola domains e fapaneng (Support for extra domains)
- Ho tsamaisa DNS ho certificates ya SSL (DNS validation for SSL certificates)

## Boitshwaro (Requirements)
Ho batla le fa constants tse di tla fetoga mo file ya `wp-config.php` ya hau:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Ho na le ho fetoga (Optionally), o ka fetoga:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Boitshwaro la Ho Setela (Setup Instructions)

### 1. Get Your Cloudways API Credentials

1. Leola mo dashboard ya Cloudways ya hau
2. Laela "Account" > "API Keys"
3. Fetoga API key ha o na le kae
4. Kopya email ya hau le API key

### 2. Get Your Server and Application IDs

1. Mo dashboard ya Cloudways ya hau, laela "Servers"
2. Select server se sebeletse WordPress multisite ya hau
3. Server ID o tla ba mo URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Laela "Applications" le select application ya WordPress ya hau
5. App ID o tla ba mo URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Add Constants to wp-config.php

Na constants tse di fetoga mo file ya `wp-config.php` ya hau:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Ha u molomo **external** domains (le fa o tla fihla mo setšhaba se se fetileng sa leka) tse di tshwanetseng go ba mo list ya aliases ya Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning A re ntlha setšhaba se se fetileng sa leka (wildcard) sa lona
**A re ntlha** `*.your-network.com` (kgotla lefa la sub-domain ya setšhabeng sa lona) mo `WU_CLOUDWAYS_EXTRA_DOMAINS`. Re bona [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall) kaofela gore o ka nngwe a re ntlha certificates tsa SSL tse di tswang mo setšhabeng sa mmele.
:::

### 4. Baile le Integration (Integration)

1. Mo admin ya WordPress, fofa Ultimate Multisite > Settings
2. Fofa tab ya "Domain Mapping" (Go ba lefa la domain)
3. Lela mo "Host Integrations" (Baile tsa ho ba lemoho)
4. Baile le integration ya Cloudways
5. Fofa "Save Changes" (Baile di fetoga)

## E re e tswang kae

### Domain Syncing (Ho tsamaisa domain)

Pula domain o fihla mo Ultimate Multisite:

1. Integration e ntsa setshwantsho se se fetileng sa leka la domain
2. E ntsa domain ya ntlha mo list (mo tharo a re www ha go na le se se fetileng)
3. E tšoa list efe mo Cloudways ka API
4. Cloudways e fetoga aliases ya domain ya lona

Note: Cloudways API e hloka ho tšoa list efe ka nako e nngwe, e ka fela go ba le ha a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a re a

Ho fana le fa'aopo (integration) o le a tatou e te fa'amatalaga, o le a te talanoina **standard** (e le wildcard) Let's Encrypt mulao mai i Cloudways. O le a te fa'amatalaga wildcard pattern i `WU_CLOUDWAYS_EXTRA_DOMAINS`, o le a te fa'aopo le leading `*.` e fa'atatau i le SSL request — o le wildcard itu po'o se fa'aopo mai lona. E le a fa'aopo la'u fa'aopo lea e fa'amatalaga lea. O le a te fa'aopo fa'aopo wildcard certificate i Cloudways, o le a te fa'atatau ona fa'aopo manuia (manual), ae o le a te fa'atatau lea e fa'atatau ona fa'aopo Let's Encrypt mo oina-o-tua custom domains (fa'amatalaga o le pitfall i le tasi).

## Extra Domains

O le constant `WU_CLOUDWAYS_EXTRA_DOMAINS` o lo'o mafai ai i ou fa'amatalaga domain e fa'aopo fa'aopo **external** e te fa'atatau ona fa'aopo i le aliases list o le application Cloudways. Fa'aopo lea i:

- External domains e le a Ultimate Multisite fa'aopo (e.g., se website marketing se fa'aopo fa'aopo la'u application Cloudways).
- Domains parkeina po'o staging e te fa'atatau ona fa'aopo i le aliases list o le application.

**E le a fa'aopo lea constant lea mo wildcard subdomain o la'u network (e.g. `*.your-network.com`).** Fa'amatalaga o le pitfall SSL wildcard i le tasi.

## Important — Wildcard SSL Pitfall

O se fa'atatau e taua lava pe a tatou fa'aopo le setup default o Cloudways, o lo'o fa'aopo wildcard e pei o `*.your-network.com` i `WU_CLOUDWAYS_EXTRA_DOMAINS`, po'o o le a te fa'atatau ona fa'aopo wildcard SSL certificate i Cloudways mo lona wildcard.

**O le a te fa'amatalaga lea, o le a Cloudways e fa'atatau ona fa'aopo Let's Encrypt certificates mo oina-o-tua custom domains e fa'aopo Ultimate Multisite.** O le a Cloudways fa'atatau ona SSL certificate i le application i luga o se tasi, po'o o le a wildcard certificate e fa'aopo i le application e fa'atatau ona fa'aopo Let's Encrypt mo oina-o-tua domains e te fa'aopo lea.

### Recommended Cloudways SSL setup for an Ultimate Multisite network

1. Morago ka tabeng **SSL Certificate** ea tsoalo (standard) Let's Encrypt certificate, eona e fana fa `your-network.com` le `www.your-network.com` pele — **e se ke wildcard**.

2. E se ke upha `*.your-network.com` (me a re any pattern ea subdomain ea hau ea hau) ka `WU_CLOUDWAYS_EXTRA_DOMAINS`. Ho fana tsoalo ea constant ena fa domains e **tlha** (external) pele.

3. Hlahloba wildcard ea subdomain ea per-tenant ha le **DNS** pele fela (ea record ea `A` ea `*.your-network.com` ea hlalosang ka IP ea server ea hau ea Cloudways) ho ba le ho fana. Tsoalo ea SSL ea domains e fetang ea hau e fetong e fana ka tsela ea integration ka Let's Encrypt.

Ha seba domains ea hau ea per-tenant e le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le

### Masimo a Sebopeho sa SSL Certificate

- Cloudways e hloka hore domain ho ba le records ea DNS tse ba bonolo tse ba fanaang ka server ea hau haholo hore a bula SSL certificates.
- Ho hlahloba (integration) e ba le bona records ea DNS haholo haholo hore e bula SSL certificates.
- Ha SSL certificates a seng a bula, re le ho tsamaea hore domain ea hau e le e fanaang ka IP address ea server ea hau.
- **Domain e fetileng e ntse e le teng without SSL?** Re le ho tsamaea tabeng ea SSL Certificate ea application ea Cloudways. Ha wildcard certificate (e fetileng manually, kapa e ba le e fanaang `*.your-network.com`) e le e le teng, Cloudways e tla seng bula Let's Encrypt certificates ho domain tse fetileng ka tsela e fetileng. Se fetola le certificate ea Let's Encrypt e le e le sebopeho (standard) e fanaang haholo hore a domain ea network (`your-network.com`, `www.your-network.com`) le sefetola sebopeho se fetileng se ba teng ka `WU_CLOUDWAYS_EXTRA_DOMAINS`. Ha re tloha ho bula mapping ea domain (or tsamaea ho e le e le sefalo) le integration e tla bula certificates tse ba fetileng ka domain.

### Domain E Ntse E Le Fetileng
- Re le ho tsamaea logs ea Ultimate Multisite ho bona messages ea botlase.
- Re le ho tloha hore domain e le e le fetileng ka Cloudways.
- Re le ho seba hore plan ea Cloudways ea hau e le e fanaang le sefalo sa domains o tla ba le fetileng.
