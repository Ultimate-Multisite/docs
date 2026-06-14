---
title: Whakawhanaungatanga Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Whakawhiti i Cloudways

## Ōrero
Cloudways heke whakamahi (managed cloud hosting platform) he tino whaiora ana, e hiahia atu ki koe hei whakahaere i ngā wāhi WordPress mo mga ao hēke (cloud providers) ā-au pēnei i DigitalOcean, AWS, Google Cloud, me te pai. Ko te whakawhiti (integration) ko e hiahia atu ki te whakamahi automatic domain syncing me te whakamaoritanga SSL certificate management i antara Ultimate Multisite me Cloudways.

## Manawa
- Automatic domain syncing
- Whakamaoritanga SSL certificate management
- Whakawhanaungatanga mō mga domain extra (extra domains)
- DNS validation mo SSL certificates

## Mga Wāhi Whakawhanaungatanga (Requirements)
Ko ngā constants berikut mea e hiahia atu ki te whakahihia i tō file `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

He optiona, koe he mea e hiahia atu ki te whakahihia:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Whakawhanaungatanga (Setup Instructions)

### 1. Whakahaere i Ngā Credentials API o Cloudways

1. Whakawātea ki tō dashboard o Cloudways
2. Pāinga ki "Account" > "API Keys"
3. Whakahaere i he API key ko te hiahia atu koe, ko te whaiaro (generate) i he API key
4. Kopiko tō email me tō API key

### 2. Whakahaere i Ngā Server ID me Application IDs

1. I tō dashboard o Cloudways, pāinga ki "Servers"
2. Whakarite i te server i tēnei ko e hēke ana tō WordPress multisite
3. Ko te Server ID he hiahia atu ki te URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Pāinga ki "Applications" me whai wāhi i tō application o WordPress
5. Ko te App ID he hiahia atu ki te URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Whakahaere i Ngā Constants i wp-config.php

Whakahaere i ngā constants berikut i tō file `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

He wāhi heke **external** (heke ana ki a rapae) i runga i te domain (outside your multisite network) kua kitea me te whai ake ana i te list aliases o Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Iha i te whenua o koe (your own network's wildcard)
**Iha i te whakatika `*.your-network.com` (ata au pūmanawa o koe) ki `WU_CLOUDWAYS_EXTRA_DOMAINS`. Kia kaha ki te [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall) i runga i te mea he pēnei i te pēnei e whakatutaku i certificate SSL mō ngā tenant (per-tenant).
:::

### 4. Whakawhanaungatanga te Whakahaere (Enable the Integration)

1. I roto i te admin o WordPress, pahi ki Ultimate Multisite > Settings
2. Pahi ki te tab "Domain Mapping"
3. Whakarongo ki "Host Integrations"
4. Whakahaere (Enable) te integration o Cloudways
5. Whakawātea "Save Changes"

## He aha i te mahi ana? (How It Works)

### Whakawhanaungatanga Domain (Domain Syncing)

I roto i Ultimate Multisite, i roto i te wā kua whakatutaku i te domain:

1. Ka whai te integration i ngā domain katoa kua whakatutaku
2. Ka puta mai i te list o te domain hou (me te whakamahi version www ki te whakatutaku ana)
3. Ka faheke whakaaro ai te list katoa ki Cloudways mō te API
4. Ka whakaiti/ka whakatutaku ai ngā aliases o te domain mo te application o koe e Cloudways

He tino māramatanga: He pēnei i te whakatutaku ana i te list katoa o ngā domain ko whakarite ake (send) i roto i te API, ā, he tino nui ahau i te wā ko ka puta mai i te whakamahi au i te domain tahi ki te whakatutaku ana.

### Whakahaere Certificate SSL (SSL Certificate Management)

I raro i te whakawhanaungatanga o ngā domain:

1. Ka hiahia te integration mō hangi i ngā domain kua whai i ngā DNS records kua pūmau ki tō server
2. Ka faheke whakaaro ai i Cloudways mō te whakatutaku certificate Let's Encrypt mo ngā domain ei
3. Ka whakahaere (handles) e Cloudways te whakatutaku me te whakamahi o certificate SSL

Ko te whaiaro e whakamārama ana i te **standard** (non-wildcard) Let's Encrypt certificates mai Cloudways. Ko te mea, ko te pattern wildcard (e.g., `*.domain.com`) e whaiaro ana i te `WU_CLOUDWAYS_EXTRA_DOMAINS`, ko te `*.` e whakatū ake (stripped) i te rātou i te whakapā SSL — ko te wildcard hoki, he mea nui, ka whakahouhia (installed) mai tēnei integration. Ko te whakamahi certificate wildcard ki Cloudways, he mea tino pai ana, he kitea ana i te whakamaoritanga Let's Encrypt mō ngā domain tuatahi (per-domain) e whakatutuku ai ko te mapping o Ultimate Multisite (he kitea ana i te pitfall i roto).

## Extra Domains

Ko te constant `WU_CLOUDWAYS_EXTRA_DOMAINS` e tino pai ana ki koe, he mea nui, ki te tino whaiaro ngā domain **external** (e tū mai) kua taea ai ia kia noho ana i te list o aliases o te application o Cloudways. Whakarite ahau i te whakamahi i te constant hoki mō:

- Ngā domain external e tautoko ana i te Ultimate Multisite (e.g., he waka marketing separate e whai i te application o Cloudways).
- Ngā domain parked (whakawāhi) he tino tika ana kua taea ai ia kia noho ana i te list o aliases o te application.

**Kua whakatutuku ahau i te constant hoki mō te subdomain wildcard o ngā wāhi whare ahau (e.g., `*.your-network.com`).** He kitea ana i te pitfall SSL wildcard ki te pare.

## Important — Wildcard SSL Pitfall

He pahi nui ko whenua e whaiaro ana i te setup default o Cloudways, he te whero ana i te pattern wildcard (e.g., `*.your-network.com`) ki te `WU_CLOUDWAYS_EXTRA_DOMAINS`, he te whakamaoritanga certificate SSL wildcard mai Cloudways mō tēnei wildcard.

**Ko te mea, ko ahau e whero ana i te whaiaro Let's Encrypt certificates mō ngā domain tuatahi (per-tenant custom domains) e whakatutuku ai ko Ultimate Multisite.** Ko Cloudways e whakawhiti i te certificate SSL active ki te application me te certificate wildcard e hou mai, he ka whakatutuku ana i te Let's Encrypt issuance e te integration e takahia.

### Recommended Cloudways SSL setup for an Ultimate Multisite network

1. I roto i te tab **SSL Certificate** o te whānau Cloudways, whai i **standard Let's Encrypt certificate** e whai ana ki `your-network.com` me `www.your-network.com` anake — **kua kore** he wildcard.
2. I roto i `WU_CLOUDWAYS_EXTRA_DOMAINS`, **kua kore** koe e puta `*.your-network.com` (ata au te pattern subdomain o te wāhi o koe). Whakawatea tēnei constant mō **external** domains anake.
3. Whakawatea te wildcard subdomain mo te per-tenant i te **DNS** level anake (he `A` record mō `*.your-network.com` e puta ki te IP o te server Cloudways o koe) kia whai ake ngā subsites. Ko te SSL mō mga domain custom kua whakatika anake e puta ana automatically e te integration i roto i Let's Encrypt.

Ko teina i ngā tenant's custom domains kua pito ki te whakawhiti (stuck) me hoa SSL, he tino mārama koe i te tab Cloudways SSL. Ko te mea e active he wildcard certificate iho, whakatika ai i tōna, puta mai i te Let's Encrypt standard certificate mō te domain o te wāhi ana anake, me whakatika/whakawatea ngā entries wildcard mo `WU_CLOUDWAYS_EXTRA_DOMAINS`. Kei te mea he tino tika koe i te mapping o te domain (domain mapping) e puta mai (or wait for the next one), ka whitianga ai te integration mō mga certificate per-domain anake.

## Whakawātea (Troubleshooting)

### API Connection Issues
- Kia tika ana tō email me tō API key
- Kia tika ana tō server me tō application IDs
- Kia tika ana i ngā whānau (permissions) o tō account Cloudways

### Ngā Whaingaro SSL Certificate
- E whai ake ana ki te Cloudways, me ngā domain he mea tino tika i ngā DNS records (DNS) e pūmau ana ki tō server mō te whakawhiti i ngā SSL certificates.
- Ka whakamana i ngā DNS records te Whakawāhi (integration) i ngā DNS records mō mōhio i ngā SSL certificates.
- Ko te mea, ko te whakatutuki i ngā SSL certificates ka tino pēnei ana ki te whakačaka he me te whakačaka tika o ngā domain ki te IP address o tō server.
- **Ko te domain tuatahi e whai i te SSL?** Pāpā i te tab SSL Certificate o te application Cloudways. Ko te certificate wildcard (he tino whakatutuki, he tino mō `*.your-network.com`) e active ana, ka wona te Cloudways i te Let's Encrypt certificates mō ngā domain tuatahi he tino tika. Whakawāke i ai he certificate standard Let's Encrypt e mō te domain whānui o te network ( `your-network.com`, `www.your-network.com`) anō, ā, whero i ngā entries wildcard mai i `WU_CLOUDWAYS_EXTRA_DOMAINS`. Kei te pēnei ana ki te whakatutuki i te mapping domain (or wait for the next one) me te Whakawāhi ka e huto i ngā certificates mō domain tuatahi.

### Domain E Whakawārie
- Pāpā i ngā logs o Ultimate Multisite mō ngā pēnei i ngā error messages.
- Titiro ki te whakatutuki he ko te domain he hoki i te Cloudways anō.
- Kia tiaki i te plan o tō Cloudways he tino tika ana ki te whakapūmau i te whakapapa (number) o ngā domain he e whai i ai koe.
