---
title: Integrasyon sa Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integration {#cloudways-integration}

## Overview {#overview}
Ang Cloudways usa ka managed cloud hosting platform nga nagtugot kanimo sa pag-deploy og WordPress sites sa nagkalain-laing cloud providers sama sa DigitalOcean, AWS, Google Cloud, ug uban pa. Kini nga integration naghatag og automatic domain syncing ug SSL certificate management tali sa Ultimate Multisite ug Cloudways.

## Features {#features}
- Automatic domain syncing
- SSL certificate management
- Suporta alang sa extra domains
- DNS validation para sa SSL certificates

## Requirements {#requirements}
Kinahanglan i-define ang mosunod nga mga constant sa imong `wp-config.php` file:

```php
define('WU_CLOUDWAYS_EMAIL', 'imong_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'imong_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'imong_server_id');
define('WU_CLOUDWAYS_APP_ID', 'imong_app_id');
```

Optional, mahimo usab nimong i-define:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Setup Instructions {#setup-instructions}

### 1. Kuhaa ang Imong Cloudways API Credentials {#1-get-your-cloudways-api-credentials}

1. Mag-login sa imong Cloudways dashboard
2. Adto sa "Account" > "API Keys"
3. Paghimo og API key kung wala ka pa
4. Kopyaha ang imong email ug API key

### 2. Kuhaa ang Imong Server ug Application IDs {#2-get-your-server-and-application-ids}

1. Sa imong Cloudways dashboard, adto sa "Servers"
2. Pilia ang server diin gipang-host ang imong WordPress multisite
3. Ang Server ID makita sa URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Adto sa "Applications" ug pilia ang imong WordPress application
5. Ang App ID makita sa URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Idugang ang mga Constants sa wp-config.php {#3-add-constants-to-wp-configphp}

Idugang ang mosunod nga mga constant sa imong `wp-config.php` file:

```php
define('WU_CLOUDWAYS_EMAIL', 'imong-email-sa-cloudways');
define('WU_CLOUDWAYS_API_KEY', 'imong-api-key');
define('WU_CLOUDWAYS_SERVER_ID', 'imong-server-id');
define('WU_CLOUDWAYS_APP_ID', 'imong-app-id');
```

Kon naa ba kay dugang **external** domains (gawas sa imong multisite network) nga kanunay kinahanglan naa sa Cloudways aliases list:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Ayaw iapil ang imong kaugalingong wildcard sa network
Ayaw pagdugang og `*.imong-network.com` (o bisan unsang subdomain pattern sa imong kaugalingon nga network) sa `WU_CLOUDWAYS_EXTRA_DOMAINS`. Tan-awa ang [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall) sa ubos kung nganong kini makapugong sa pag-issue og per-tenant SSL certificates.
:::

### 4. I-enable ang Integration {#4-enable-the-integration}

1. Sa imong WordPress admin, adto sa Ultimate Multisite > Settings
2. Maglakaw ngadto sa "Domain Mapping" tab
3. Mag-scroll pababa ngadto sa "Host Integrations"
4. I-enable ang Cloudways integration
5. I-click ang "Save Changes"

## Unsaon Kini Paglihok {#how-it-works}

### Domain Syncing {#domain-syncing}

Kung adunay domain nga gi-map sa Ultimate Multisite:

1. Ang integration mokuha sa tanang gi-map nga domains
2. Idadagdag niini ang bag-ong domain sa listahan (ug uban og www version kung naa)
3. Ipadala ni kini sa Cloudways pinaagi sa API
4. Ang Cloudways mag-update sa domain aliases para sa imong application

Nota: Kinahanglan ipadala sa Cloudways API ang kompleto nga listahan sa mga domains matag higayon, dili lang pagdadagdag o pagtangtang og indibidwal nga domains.

### SSL Certificate Management {#ssl-certificate-management}

Human ma-sync ang mga domains:

1. Ang integration mag-check kung unsang domains adunay valid DNS records nga nagtudlo sa imong server
2. Magpadala kini og request sa Cloudways aron mag-install og Let's Encrypt SSL certificates para sa mga domain nga ato
3. Ang Cloudways maoy mag-handle sa pag-issue ug pag-install sa SSL certificate

Ang integrasyon kanunay nagakinahanglan og **standard** (non-wildcard) Let's Encrypt certificates gikan sa Cloudways. Kung adunay wildcard pattern nga gihatag sa `WU_CLOUDWAYS_EXTRA_DOMAINS`, ang una nga `*.` ma-strip una sa SSL request — ang wildcard mismo dili gayud i-install ni integration. Aron mogamit og wildcard certificate sa Cloudways, kinahanglan nimo kini i-install manually, apan pagbuhat niana makapahimong imposible ang pag-issue og Let's Encrypt certificates para sa matag domain nga custom domains nga gihaplos (tan-awa ang pitfall sa ubos).

## Extra Domains {#extra-domains}

Ang constant nga `WU_CLOUDWAYS_EXTRA_DOMAINS` nagtugot kanimo sa pagtudlo og dugang **external** nga mga domain nga kinahanglan kanunay nga magpabilin sa aliases list sa Cloudways application. Gamita kini para sa:

- Mga external domains nga wala gi-manage sa Ultimate Multisite (pananglitan, usa ka separate marketing site nga nag-share sa samang Cloudways application)
- Mga parked o staging domain nga gusto nimong ipabilin sa application aliases list

Ayaw gamiton kining constant alang sa subdomain wildcard sa imong kaugalingon nga network (pananglitan: `*.your-network.com`). Tan-awa ang pitfall sa wildcard SSL sa ubos.

## Importante — Wildcard SSL Pitfall {#important--wildcard-ssl-pitfall}

Ang kasagaran nga sayop kung nagsunod sa default setup sa Cloudways mao ang pagdugang og usa ka wildcard sama sa `*.your-network.com` sa `WU_CLOUDWAYS_EXTRA_DOMAINS`, o ang manual nga pag-install og Cloudways wildcard SSL certificate alang niini nga wildcard.

**Kung buhat nimo kini, dili magtugot ang Cloudways sa pag-issue og Let's Encrypt certificates para sa matag tenant custom domains nga gihaplos sa Ultimate Multisite.** Ang Cloudways nag-replace sa active SSL certificate sa application kada higayon, ug ang pre-existing wildcard certificate sa application makapugong sa per-domain Let's Encrypt issuance nga giatuohan sa integration.

### Recommended Cloudways SSL setup para sa usa ka Ultimate Multisite network {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Sa tab sa **SSL Certificate** sa aplikasyon sa Cloudways, mag-install og usa ka **standard Let's Encrypt certificate** nga nag-cover lang sa `your-network.com` ug `www.your-network.com` — **dili** wildcard.
2. Ayaw pagbutang og `*.your-network.com` (o bisan unsang subdomain pattern sa imong network) sa `WU_CLOUDWAYS_EXTRA_DOMAINS`. Ireserba kana nga constant para lang sa mga **external** domain.
3. Paghimo og per-tenant subdomain wildcard sa lebel sa **DNS** ra (usa ka `A` record para sa `*.your-network.com` nga nagtudlo sa IP address sa imong Cloudways server) aron ma-resolve ang subsites. Ang SSL para sa mga indibidwal nga gitudlo nga custom domain kay awtomatikong i-issue pa sa integration pinaagi sa Let's Encrypt.

Kung ang custom domains sa imong mga tenant na stuck nga walay SSL, tan-awa ang Cloudways SSL tab. Kung naa diha ang wildcard certificate, kuhaa kini, mag-reissue og standard Let's Encrypt certificate para lang sa main network domain, ug kuhaa ang bisan unsang entries nga wildcard gikan sa `WU_CLOUDWAYS_EXTRA_DOMAINS`. Unya i-trigger pag-usab ang domain mapping (o paghulat sa sunod) ug magsugod na ang integration sa pag-issue og certificates para sa matag domain.

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- Siguraduhon nga tama ang imong email ug API key
- Susi kung tama ang imong server ug application IDs
- Siguraduhon nga ang imong Cloudways account adunay kinahanglanon nga mga permiso

### Mga Problema sa SSL Certificate {#ssl-certificate-issues}
- Kinahanglan nga ang mga domain adunay valid DNS records nga nagtudlo sa imong server sa dili pa mag-issue og SSL certificates.
- Ang integration nag-validate sa DNS records sa dili pa mangayo og SSL certificates.
- Kung wala ma-issue ang SSL certificates, siguroha nga ang imong mga domain husto gyud nga nagtudlo sa IP address sa imong server.
- **Per-tenant custom domains nga na-stuck nga walay SSL?** Siguroa nga i-check ang Cloudways application's SSL Certificate tab. Kung aktibo ang usa ka wildcard certificate (gihimo manual, o sakop ang `*.your-network.com`), dili mag-issue og Let's Encrypt certificates ang Cloudways para sa mga custom domain nga gi-mapa nang indibidwal. Palit kini og standard Let's Encrypt certificate nga sakop lang sa main network domain (`your-network.com`, `www.your-network.com`) ug tangtangon ang bisan unsang wildcard entries gikan sa `WU_CLOUDWAYS_EXTRA_DOMAINS`. Unya i-trigger pag-usab ang domain mapping (o maghulat sa sunod) ug ang integration mangayo og certificates per-domain.

### Domain Wala Gi-add {#domain-not-added}
- I-check ang Ultimate Multisite logs para sa bisan unsang error messages.
- Siguraduhon nga wala pa ma-add ang domain sa Cloudways.
- Siguraduhon nga ang imong Cloudways plan suportado ang gidaghanon sa mga domain nga imong gi-add.
