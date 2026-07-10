---
title: RunCloud Integrasyon
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integration {#runcloud-integration}

## Panan-awhat (Overview) {#overview}
Ang RunCloud kay usa ka platform sa pagdumala sa server nga naa sa cloud, diin dali nimo ma-deploy ug ma-manage ang mga web application sa imong kaugalingong cloud servers. Kini nga integration nagtugot sa awtomatikong pag-sync sa domain ug pag-manage sa SSL certificate tali sa Ultimate Multisite ug RunCloud.

## Mga Feature (Features) {#features}
- Awtomatikong pag-sync sa domain
- Pag-manage sa SSL certificate
- Pagsunod sa domain kung ma-delete ang mga mapping

## Mga Kinahanglanon (Requirements) {#requirements}
Kinahanglan nga i-define ang mosunod nga mga constant sa imong `wp-config.php` file:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Mga Instruksyon sa Setup (Setup Instructions) {#setup-instructions}

### 1. Kuhaa ang Imong RunCloud API Credentials {#1-get-your-runcloud-api-credentials}

1. Mag-login sa imong RunCloud dashboard
2. Adto sa "User Profile" (i-click ang imong profile picture sa top-right corner)
3. Pilia ang "API" gikan sa menu
4. I-click ang "Generate API Key" kung wala ka pa, aron makakuha og one
5. Kopyaha ang imong API Key ug API Secret

### 2. Kuhaa ang Imong Server ug App IDs {#2-get-your-server-and-app-ids}

1. Sa imong RunCloud dashboard, adto sa "Servers"
2. Pilia ang server diin gipang-host ang imong WordPress multisite
3. Ang Server ID makita sa URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Adto sa "Web Applications" ug piliha ang imong WordPress application
5. Ang App ID makita sa URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Idugang ang mga Constants sa wp-config.php {#3-add-constants-to-wp-configphp}

Idugang ang mosunod nga mga constant sa imong `wp-config.php` file:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. I-enable ang Integration {#4-enable-the-integration}

1. Sa imong WordPress admin, adto sa Ultimate Multisite > Settings
2. Maglakaw sa "Domain Mapping" tab
3. I-scroll pababa ngadto sa "Host Integrations"
4. I-enable ang RunCloud integration
5. I-click ang "Save Changes"

## Unsaon Kini Paglihok {#how-it-works}

Kung na-mapa (mapped) ang usa ka domain sa Ultimate Multisite:

1. Ang integration magpadala og request ngadto sa API sa RunCloud aron iapil ang domain sa imong application
2. Kung malampuson nga gidugang ang domain, ang integration usab mag-redeploy og SSL certificates
3. Kung alihon (removed) ang domain mapping, ang integration magtangtang sa domain gikan sa RunCloud

Para sa subdomain installations, awtomatikong himuon sa integration ang paghimo og mga subdomain sa RunCloud kung adunay bag-ong sites nga idugang sa imong network.

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- Siguraduhon nga tama ang imong API credentials
- Susiha kung tama ang imong server ug app IDs
- Siguraduhon nga ang imong RunCloud account adunay kinahanglanon nga mga permiso

### SSL Certificate Issues {#ssl-certificate-issues}
- Ang RunCloud mogahin og gamay nga oras aron mag-issue og SSL certificates
- Siguraduhon nga ang imong mga domain husto gyud nga nagtudlo sa IP address sa imong server
- Susiha ang RunCloud SSL settings para sa imong application

### Domain Not Added {#domain-not-added}
- Susurihi ang Ultimate Multisite logs alang sa bisan unsang error messages
- Siguraduhon nga wala pa gidugang ang domain sa RunCloud
- Siguraduhon nga ang imong RunCloud plan suportado ang daghang mga domain
