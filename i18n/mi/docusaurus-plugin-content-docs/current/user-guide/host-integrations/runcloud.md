---
title: Whakawhanaungatanga RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Whakawhanaungatanga me RunCloud

## Whakataki
RunCloud he tāmata whare (cloud-based) mō te whakamaoritanga me te whakamaumahara i server ahau, e hiahia ana ki te whakamahi i āuna mārie mō te whakahaere me te whakamaoritanga o ngā web applications mo āna servere cloud. Ko te whakatika (integration) này he tino nui mō te whakaora i te domain automatically me te whakamaumahara i SSL certificates i waenga i Ultimate Multisite me RunCloud.

## Manawa
- Whakamaoritanga domain automatically
- Whakamaumahara i SSL certificates
- Whakamutunga o domain i roto i te whakatika mapping (mappings)

## Mga Tauira
Me tino whakamahinga ngā constants berikut i tō file `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Whakamahi Whakahaere (Setup Instructions)

### 1. Whakaue Iro API RunCloud Kōrero

1. Whakare i tō dashboard o RunCloud
2. Pā noa ki "User Profile" (whakawāke i tō piki i te piki i runga i te kura i te ngāhi whiti i te ngāhi whiti i te tū-ā-tahi)
3. Whakarite "API" mai i te menu
4. Whakawhiti "Generate API Key" (Whakawhiti API Key) ko te mea kei a koe i roto i te wā e hiahia koe i te mea heke ana
5. Kopiko tō API Key me tō API Secret

### 2. Whakaue Iro Server me App IDs

1. I tō dashboard o RunCloud, pā noa ki "Servers" (Servere)
2. Whakarite te server i tēnei i koho ahau i tō WordPress multisite
3. Ko te Server ID he tino mihimi ana i te URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Pā noa ki "Web Applications" me te whakarite tō application o WordPress
5. Ko te App ID he tino mihimi ana i te URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Whakawhiti Constants ki wp-config.php

Whakawhiti ngā constants berikut ki tō file `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Whakawhanaungatanga (Enable the Integration)

1. I roto i admin WordPress, pahu i Ultimate Multisite > Settings (Rautanga)
2. Pāpā i te tab "Domain Mapping" (Whakawātea Domain)
3. Whakarongo ki a taro ki "Host Integrations" (Whakawhanaungatanga Host)
4. Whakawhanaunga (Enable) te integration RunCloud
5. Whakawātea "Save Changes" (Whakawātea Changings)

## He aha ia mahi?

I roto i Ultimate Multisite, i roto i te whakamāoa domain:

1. I whaihi te integration ki te API o RunCloud kia whānui te domain ki tō application
2. Ko te mea i pēnei i te whānui i te domain, ka whero (redeploy) ngā SSL certificates hoki te integration
3. I roto i te whero (remove) te mapping domain, ka whero te integration noa i te domain o RunCloud

Mō te installation o subdomain, ka whakahaere ai te integration te whakamahi automatically i te whero (create) ngā subdomain i RunCloud i roto i tō network i roto i te whakapāke ahau.

## Whakamāoa (Troubleshooting)

### Ngā Whainga API Connection
- Kia tiaki i te mea kua tīmata o ngā credentials API mo te tika
- Kia tiaki i te mea kua tika ngā server me te app IDs mo te tika
- Kia tiaki i te mea he tino whaiora (necessary permissions) ana i tō account RunCloud

### Ngā Whainga SSL Certificate
- Ka taea e RunCloud āta i te whero ngā SSL certificates
- Kia tiaki i te mea kua tika ngā domain mo te pointing ki te IP address o tō server
- Kia tiaki i ngā settings SSL o RunCloud mo tō application

### Domain Aua Whakawātea
- Kia tiaki i ngā logs o Ultimate Multisite mō ngā error messages
- Kia tiaki i te mea he tino whaiora (already added) ana i RunCloud te domain
- Kia tiaki i te mea e tino whaiora (supports multiple domains) anō i tō plan RunCloud
