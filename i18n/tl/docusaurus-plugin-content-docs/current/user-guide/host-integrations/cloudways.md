---
title: Integrasyon sa Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integration

## Pangkalahatan (Overview)
Ang Cloudways ay isang managed cloud hosting platform na nagpapahintulot sa iyo na mag-deploy ng mga WordPress site sa iba't ibang cloud provider tulad ng DigitalOcean, AWS, Google Cloud, at marami pa. Ang integrasyong ito ang nagbibigay-daan para sa awtomatikong pag-sync ng domain at pamamahala ng SSL certificate sa pagitan ng Ultimate Multisite at Cloudways.

## Mga Katangian (Features)
- Awtomatikong pag-sync ng domain
- Pamamahala ng SSL certificate
- Suporta para sa mga extra domains
- DNS validation para sa mga SSL certificate

## Mga Kinakailangan (Requirements)
Ang mga sumusunod na constants ay dapat i-define sa iyong `wp-config.php` file:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Opsyonal, maaari mo ring i-define ang:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Mga Panuto sa Pag-set Up (Setup Instructions)

### 1. Kunin ang Iyong Cloudways API Credentials

1. Mag-log in sa iyong Cloudways dashboard
2. Pumunta sa "Account" > "API Keys"
3. Gumawa ng API key kung wala ka pa
4. Kopyahin ang iyong email at API key

### 2. Kunin ang Iyong Server at Application IDs

1. Sa iyong Cloudways dashboard, pumunta sa "Servers"
2. Piliin ang server kung saan naka-host ang iyong WordPress multisite
3. Ang Server ID ay makikita sa URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Pumunta sa "Applications" at piliin ang iyong WordPress application
5. Ang App ID ay makikita sa URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Magdagdag ng mga Constants sa wp-config.php

Idagdag ang mga sumusunod na constants sa iyong `wp-config.php` file:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Kung mayroon kang mga **external** na domain (labas sa network ng iyong multisite) na dapat laging nasa listahan ng Cloudways aliases:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Huwag isama ang wildcard ng sarili mong network
Huwag idagdag ang `*.your-network.com` (o anumang pattern ng subdomain ng iyong sariling network) sa `WU_CLOUDWAYS_EXTRA_DOMAINS`. Tingnan ang [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall) sa ibaba kung bakit pinipigilan nito ang pag-isyu ng per-tenant SSL certificates.
:::

### 4. I-enable ang Integration

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Pumunta sa tab na "Domain Mapping"
3. Mag-scroll pababa sa "Host Integrations"
4. I-enable ang Cloudways integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana

### Domain Syncing

Kapag may domain na naka-map sa Ultimate Multisite:

1. Kinukuha ng integration ang lahat ng kasalukuyang naka-map na domains
2. Dinadagdagan nito ang bagong domain sa listahan (kasama ang www version kung naaangkop)
3. Ipinapadala nito ang kumpletong listahan sa Cloudways gamit ang API
4. Ina-update ng Cloudways ang mga domain aliases para sa iyong application

Tandaan: Kailangan ng Cloudways API na ipadala ang buong listahan ng mga domain sa bawat pagkakataon, hindi lang basta pagdaragdag o pagtanggal ng indibidwal na domain.

### SSL Certificate Management

Pagkatapos ma-sync ang mga domains:

1. Sinusuri ng integration kung aling mga domain ang may valid DNS records na tumuturo sa iyong server
2. Nagpapadala ito ng request sa Cloudways upang mag-install ng Let's Encrypt SSL certificates para sa mga domain na iyon
3. Ang Cloudways ang bahalang mag-issue at mag-install ng SSL certificate

Palaging humihingi ang integrasyon ng **standard** (hindi wildcard) na mga sertipiko mula sa Let's Encrypt mula sa Cloudways. Kung may ibibigay kang wildcard pattern sa `WU_CLOUDWAYS_EXTRA_DOMAINS`, tinatanggal ang unging `*.` bago ang SSL request — ang mismong wildcard ay hindi kailanman i-install ng integrasyong ito. Para gumamit ng wildcard certificate sa Cloudways, kailangan mo itong i-install nang mano-mano, ngunit ang paggawa nito ay magbabawal sa pag-isyu ng Let's Encrypt para sa bawat domain na naka-map na custom domains (tingnan ang problema sa ibaba).

## Extra Domains

Pinapayagan ka ng constant na `WU_CLOUDWAYS_EXTRA_DOMAINS` na tukuyin ang mga karagdagang **external** domain na dapat laging nasa listahan ng aliases ng Cloudways application. Gamitin ito para sa:

- Mga external domain na hindi pinamamahalaan ng Ultimate Multisite (halimbawa, isang hiwalay na marketing site na gumagamit ng parehong Cloudways application)
- Mga parked o staging domain na gusto mong manatili sa listahan ng aliases ng application.

Huwag gamitin ang constant na ito para sa subdomain wildcard ng sarili mong network (halimbawa: `*.your-network.com`). Tingnan ang problema sa wildcard SSL sa ibaba.

## Mahalaga — Problema sa Wildcard SSL

Isang karaniwang pagkakamali kapag sinusunod ang default setup ng Cloudways ay ang pagdaragdag ng isang wildcard tulad ng `*.your-network.com` sa `WU_CLOUDWAYS_EXTRA_DOMAINS`, o ang mano-manong pag-install ng Cloudways wildcard SSL certificate para sa wildcard na iyon.

**Kung gagawin mo ito, tatanggi ng Cloudways na mag-isyu ng Let's Encrypt certificates para sa mga per-tenant custom domains na naka-map ng Ultimate Multisite.** Palitan ng Cloudways ang aktibong SSL certificate sa application tuwing may pagbabago, at ang isang pre-existing wildcard certificate sa application ay humaharang sa per-domain na pag-isyu ng Let's Encrypt na umaasa ang integrasyon.

### Inirerekomendang Cloudways SSL setup para sa Ultimate Multisite network

1. Sa tab ng **SSL Certificate** sa aplikasyon ng Cloudways, mag-install ng isang **standard Let's Encrypt certificate** na sakop lang ang `your-network.com` at `www.your-network.com` — **hindi** wildcard.
2. Huwag ilagay ang `*.your-network.com` (o anumang pattern ng subdomain ng sarili mong network) sa `WU_CLOUDWAYS_EXTRA_DOMAINS`. Iwanan lang iyon para sa mga **external** na domain.
3. Gumawa ng per-tenant subdomain wildcard sa antas ng **DNS** lamang (isang `A` record para sa `*.your-network.com` na tumuturo sa IP address ng iyong Cloudways server) para mag-resolve ang mga subsites. Ang SSL para sa mga indibidwal na naka-map na custom domain ay awtomatikong ilalabas ng integration gamit ang Let's Encrypt.

Kung ang custom domains ng iyong mga tenant ay hindi pa nakakakuha ng SSL, tingnan ang Cloudways SSL tab. Kung may aktibong wildcard certificate doon, tanggalin ito, mag-reissue ng standard Let's Encrypt certificate para lang sa pangunahing domain ng network, at alisin ang anumang wildcard entries mula sa `WU_CLOUDWAYS_EXTRA_DOMAINS`. Pagkatapos ay i-trigger muli ang domain mapping (o hintayin ang susunod) at magsisimulang mag-issue ulit ang integration ng mga certificate para sa bawat domain.

## Pag-troubleshoot

### Mga Isyu sa API Connection
- Siguraduhin na tama ang iyong email at API key
- Tingnan kung tama ang iyong server ID at application ID
- Tiyakin na may kaukulang permissions ang iyong Cloudways account

### Mga Isyu sa SSL Certificate
- Kailangan ng Cloudways na ang mga domain ay may valid na DNS records na tumuturo sa server mo bago mag-issue ng SSL certificates.
- Ang integration ay nagche-check ng DNS records bago humiling ng SSL certificates.
- Kung hindi ina-issue ang SSL certificates, tingnan kung tama ang pagtuturo ng iyong mga domain sa IP address ng iyong server.
- **Per-tenant custom domains na naka-stuck nang walang SSL?** Tingnan ang tab ng SSL Certificate ng Cloudways application. Kung may aktibong wildcard certificate (manual na ini-install, o sakop ang `*.your-network.com`), hindi mag-i-issue ng Let's Encrypt certificates ang Cloudways para sa mga custom domain na indibidwal na naka-mapa. Palitan ito ng standard Let's Encrypt certificate na sumasaklaw lang sa pangunahing domain ng network (`your-network.com`, `www.your-network.com`) at alisin ang anumang wildcard entries mula sa `WU_CLOUDWAYS_EXTRA_DOMAINS`. Pagkatapos ay i-trigger muli ang domain mapping (o hintayin ang susunod) at hihiling ng mga certificate para sa bawat domain ang integration.

### Domain Hindi Naisama
- Tingnan ang Ultimate Multisite logs para sa anumang error messages.
- Beripikahin na hindi pa naka-add ang domain sa Cloudways.
- Siguraduhin na sinusuportahan ng iyong Cloudways plan ang dami ng mga domain na idadagdag mo.
