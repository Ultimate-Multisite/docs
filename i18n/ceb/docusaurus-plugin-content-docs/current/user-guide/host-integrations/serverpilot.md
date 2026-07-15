---
title: Integrasyon sa ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integration sa ServerPilot

## Panan-aw (Overview) {#overview}
Ang ServerPilot usa ka cloud service para maghost og WordPress ug uban pang PHP websites sa mga server sa DigitalOcean, Amazon, Google, o bisan unsang provider sa server. Kini nga integration nagtugot sa awtomatikong pag-sync sa domain ug pagdumala sa SSL certificate tali sa Ultimate Multisite ug ServerPilot.

## Mga Feature {#features}
- Awtomatikong pag-sync sa domain
- Pagdumala sa SSL certificate gamit ang Let's Encrypt
- Awtomatikong pag-renew sa SSL

## Mga Kinahanglanon (Requirements) {#requirements}
Kinahanglan i-define ang mosunod nga mga constant sa imong `wp-config.php` file:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'imong_client_id');
define('WU_SERVER_PILOT_API_KEY', 'imong_api_key');
define('WU_SERVER_PILOT_APP_ID', 'imong_app_id');
```

## Mga Instruksyon sa Setup (Setup Instructions) {#setup-instructions}

### 1. Kuhaa ang Imong ServerPilot API Credentials {#1-get-your-serverpilot-api-credentials}

1. Mag-login sa imong ServerPilot dashboard
2. Adto sa "Account" > "API"
3. Paghimo og bag-ong API key kung wala ka pa
4. Kopyaha ang imong Client ID ug API Key

### 2. Kuhaa ang Imong App ID {#2-get-your-app-id}

1. Sa imong ServerPilot dashboard, adto sa "Apps"
2. Pilia ang app diin gihaplos (hosted) ang imong WordPress multisite
3. Ang App ID makita sa URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Idugang ang mga Constants sa wp-config.php {#3-add-constants-to-wp-configphp}

Idugang ang mosunod nga mga constant sa imong `wp-config.php` file:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'imong_client_id');
define('WU_SERVER_PILOT_API_KEY', 'imong_api_key');
define('WU_SERVER_PILOT_APP_ID', 'imong_app_id');
```

### 4. I-enable ang Integration {#4-enable-the-integration}

1. Sa imong WordPress admin, adto sa Ultimate Multisite > Settings
2. Maglakaw ngadto sa tab nga "Domain Mapping"
3. Mag-scroll pababa ngadto sa "Host Integrations"
4. I-enable ang ServerPilot integration
5. I-click ang "Save Changes"

## Unsaon Kini Paglihok (How It Works) {#how-it-works}

### Domain Syncing {#domain-syncing}

Kung adunay domain nga gihaplos (mapped) sa Ultimate Multisite:

1. Ang integration nagkuha sa kasamtang listahan sa mga domain gikan sa ServerPilot
2. Nagdadagdag kini sa bag-ong domain sa listahan (ug uban ang bersyon nga www kung naa)
3. Nagpadala kini sa updated listahan ngadto sa ServerPilot pinaagi sa API
4. Ang ServerPilot ma-update na sa listahan sa mga domain para sa imong application

### SSL Certificate Management {#ssl-certificate-management}

Human ma-sync ang mga domain:

1. Ang integration awtomatikong mag-enable og AutoSSL para sa imong application
2. Ang ServerPilot ma-handle ang pag-issue ug pag-install sa SSL certificate gamit ang Let's Encrypt
3. Ang ServerPilot usab ma-handle ang awtomatikong renewal sa mga SSL certificate

## SSL Certificate Verification {#ssl-certificate-verification}

Ang integration gi-configure aron mapataas ang gidaghanon sa mga pagsulay sa verification sa SSL certificate para sa ServerPilot, kay basin medyo dugay kini sa pag-issue ug pag-install sa mga SSL certificate sa ServerPilot. Sa default, mosulay kini hangtod 5 ka beses, apan kini mahimong ma-adjust gamit ang filters.

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- Siguraduhon nga tama ang imong Client ID ug API Key
- Siguraduhon nga tama ang imong App ID
- Siguraduhon nga ang imong ServerPilot account adunay kinahanglanon nga mga permiso

### SSL Certificate Issues {#ssl-certificate-issues}
- Kinahanglan sa ServerPilot nga ang mga domain adunay valid DNS records nga nagtudlo sa imong server sa dili pa mag-issue og SSL certificates
- Kung wala ma-issue ang mga SSL certificate, siguroha nga ang imong mga domain husto gyud nga nagtudlo sa IP address sa imong server
- Basin medyo dugay kini para sa ServerPilot aron mag-issue ug mag-install og SSL certificates (kasagaran 5-15 ka minutos)

### Domain Not Added {#domain-not-added}
- Siguroha ang Ultimate Multisite logs alang sa bisan unsang error messages
- Siguraduhon nga wala pa ma-add ang domain sa ServerPilot
- Siguraduhon nga ang imong ServerPilot plan suportado ang gidaghanon sa mga domain nga imong gi-add

### Pag-alis sa Domain (Domain Removal) {#domain-removal}
- Sa pagkakaron, ang ServerPilot API wala pa naghatag og pamaagi para ma-remove ang mga indibidwal nga domain.
- Kung ma-remove nimo ang usa ka domain mapping sa Ultimate Multisite, i-update ni ang integration ang listahan sa domain sa ServerPilot aron ma-exclude na ang gipahinumdoman nga domain.
