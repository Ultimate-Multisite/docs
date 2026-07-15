---
title: Ho fana'a le RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Whakaaro RunCloud Integration

## Whakatutanga (Overview) {#overview}
RunCloud he mea e tū i cloud, he pātā mo whakamaonia server a te whaiora, e mafai atu ka e fana'o ā ā-web applicationi i onua o āna servera. He tino pai ai i tēnei integration ki te whakaotinga domaini automatically me te whakamaonia SSL certificateihi he taha i Ultimate Multisite me RunCloud.

## Manawa (Features) {#features}
- Whakaotinga domaini automatically
- Whakamaonia SSL certificateihi
- Whakaora domaini i te wā e hoatu i te mappingi

## Mga Tauira (Requirements) {#requirements}
He mea tino nui kei te tika ki te titiro i mga constant (constants) i tō file o `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Whakatau (Setup Instructions) {#setup-instructions}

### 1. Take Iroai API Credentials o RunCloud {#1-get-your-runcloud-api-credentials}

1. Tū i runga i tō dashboard o RunCloud
2. Pāinga ki "User Profile" (titiro i tō piki i te piki i te kura i te ngāhi o te whakatupu)
3. Rongo ki "API" no te menu
4. Whakaue i "Generate API Key" he tino pai ai i te mea e hāpai i a koe i tēnei, he mea nui
5. Kopiko i tō API Key me tō API Secret

### 2. Take Iroai Server and App IDs o koe {#2-get-your-server-and-app-ids}

1. I tō dashboard o RunCloud, pāinga ki "Servers"
2. Titiro i te server e hoatu i tō WordPress multisite
3. He tino pai ai i te Server ID i te URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Pāinga ki "Web Applications" me te select i tō application o WordPress
5. He tino pai ai i te App ID i te URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Whakawhiti Constants ki wp-config.php {#3-add-constants-to-wp-configphp}

Whakawhiti mga constant (constants) kei tō file o `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Whakaae te Integration {#4-enable-the-integration}

1. Moramo ka admin ya WordPress, fana ka Ultimate Multisite > Settings (Tsela)
2. Fana ka "Domain Mapping" tab (Tabe)
3. Lela ho ka "Host Integrations" (Integrashoni)
4. Tsela le RunCloud integration (RunCloud integration)
5. Moramo ka "Save Changes"

## Kea Leholo Ho {#how-it-works}

Ha nako domain e fana ha Ultimate Multisite:

1. Integration e tla fana request e e fana ho a domain e e fana ha API ya RunCloud ho a domain e e fana ha hau application
2. Ha domain e fana ka ho fana, integration e tla fana ho a SSL certificates (certificates tsa SSL)
3. Ha domain mapping e fana ho fana, integration e tla fana ho a domain e e fana ha RunCloud

Ho le tsela la subdomain installation, integration e tla fana ho a handle automatically ho fetola subdomains ha sites tse neng di fana ha hau network.

## Ho Leholo Ho (Troubleshooting) {#troubleshooting}

### Masala a API Connection {#api-connection-issues}
- Moramo ka credentials tsa API e fana ka bonako
- Tsela le app IDs tsa hau e fana ka bonako
- Moramo ka RunCloud account ya hau e fana le permissions e neng e hloka

### Masala a SSL Certificate {#ssl-certificate-issues}
- RunCloud e ka na le tsela e ntse e tsamae ho fetola SSL certificates
- Moramo ka domain tsa hau di tla seka (pointing) ka IP address ya server ya hau
- Tsela ka settings tsa SSL tsa RunCloud ho hau application

### Domain E Ntse E Fana {#domain-not-added}
- Moramo logs tsa Ultimate Multisite ho bonela messages ea error
- Moramo ka domain e ntse e fana ka bonako le RunCloud
- Moramo ka RunCloud plan ya hau e fana le domains tse fapaneng
