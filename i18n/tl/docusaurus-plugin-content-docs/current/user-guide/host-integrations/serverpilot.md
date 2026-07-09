---
title: Integrasyon ng ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integrasyon ng ServerPilot {#serverpilot-integration}

## Pangkalahatang-ideya {#overview}
Ang ServerPilot ay isang cloud service para mag-host ng WordPress at iba pang PHP websites sa mga server sa DigitalOcean, Amazon, Google, o anumang ibang server provider. Ang integrasyong ito ay nagbibigay-daan para sa awtomatikong pag-sync ng domain at pamamahala ng SSL certificate sa pagitan ng Ultimate Multisite at ServerPilot.

## Mga Katangian {#features}
- Awtomatikong pag-sync ng domain
- Pamamahala ng SSL certificate gamit ang Let's Encrypt
- Awtomatikong pag-renew ng SSL

## Mga Kinakailangan {#requirements}
Ang mga sumusunod na constants ay dapat itakda sa iyong `wp-config.php` file:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Mga Panuto sa Pag-set Up {#setup-instructions}

### 1. Kunin ang Iyong ServerPilot API Credentials {#1-get-your-serverpilot-api-credentials}

1. Mag-log in sa iyong ServerPilot dashboard
2. Pumunta sa "Account" > "API"
3. Gumawa ng bagong API key kung wala ka pa
4. Kopyahin ang iyong Client ID at API Key

### 2. Kunin ang Iyong App ID {#2-get-your-app-id}

1. Sa iyong ServerPilot dashboard, pumunta sa "Apps"
2. Piliin ang app kung saan naka-host ang iyong WordPress multisite
3. Ang App ID ay makikita sa URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Idagdag ang mga Constants sa wp-config.php {#3-add-constants-to-wp-configphp}

Idagdag ang mga sumusunod na constants sa iyong `wp-config.php` file:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. I-enable ang Integrasyon {#4-enable-the-integration}

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Pumunta sa tab na "Domain Mapping"
3. Mag-scroll pababa sa "Host Integrations"
4. I-enable ang ServerPilot integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana {#how-it-works}

### Domain Syncing {#domain-syncing}

Kapag may domain na naka-map sa Ultimate Multisite:

1. Kinukuha ng integration ang kasalukuyang listahan ng mga domain mula sa ServerPilot
2. Dinadagdagan nito ang bagong domain sa listahan (kasama ang bersyon na may www kung naaangkop)
3. Ipinapadala nito ang updated na listahan sa ServerPilot gamit ang API
4. Ina-update ng ServerPilot ang listahan ng mga domain para sa iyong application

### Pamamahala ng SSL Certificate {#ssl-certificate-management}

Pagkatapos ma-sync ang mga domain:

1. Awtomatikong ina-enable ng integration ang AutoSSL para sa iyong application
2. Ang ServerPilot ang humahawak sa pag-issue at pag-install ng SSL certificate gamit ang Let's Encrypt
3. Pinamamahalaan din ng ServerPilot ang awtomatikong renewal ng mga SSL certificate

## Pagveripika ng SSL Certificate {#ssl-certificate-verification}

Ang integration ay naka-configure upang dagdagan ang bilang ng mga pagtatangka sa pagveripika ng SSL certificate para sa ServerPilot, dahil maaaring tumagal ng ilang oras bago ma-issue at ma-install ng ServerPilot ang mga SSL certificate. Sa default, susubukan nito hanggang 5 beses, ngunit ito ay maaaring i-adjust gamit ang mga filters.

## Pag-troubleshoot {#troubleshooting}

### Mga Isyu sa Koneksyon ng API {#api-connection-issues}
- Siguraduhin na tama ang iyong Client ID at API Key
- Tingnan kung tama ang iyong App ID
- Tiyakin na ang iyong ServerPilot account ay may kinakailangang mga pahintulot (permissions)

### Mga Isyu sa SSL Certificate {#ssl-certificate-issues}
- Kinakailangan ng ServerPilot na ang mga domain ay may balidong DNS records na tumuturo sa iyong server bago mag-issue ng SSL certificates
- Kung hindi ina-issue ang mga SSL certificate, tingnan kung tama ang pagtuturo ng iyong mga domain sa IP address ng iyong server
- Maaaring tumagal ng ilang oras para ma-issue at ma-install ng ServerPilot ang mga SSL certificate (karaniwan ay 5-15 minuto)

### Domain Hindi Naisinama {#domain-not-added}
- Tingnan ang Ultimate Multisite logs para sa anumang error messages
- Beripikahin na hindi pa kasama ang domain sa ServerPilot
- Siguraduhin na sinusuportahan ng iyong ServerPilot plan ang bilang ng mga domain na idadagdag mo

### Pag-alis ng Domain (Domain Removal) {#domain-removal}
- Sa ngayon, ang ServerPilot API ay wala pang paraan para tanggalin ang mga indibidwal na domain.
- Kapag tinanggal mo ang isang domain mapping sa Ultimate Multisite, i-update ng integration ang listahan ng domain sa ServerPilot para hindi na kasama ang tinanggal na domain.
