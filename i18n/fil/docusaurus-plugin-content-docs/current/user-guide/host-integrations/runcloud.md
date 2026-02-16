---
title: RunCloud Integration
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integrasyon ng RunCloud

## Pangkalahatang-tanaw
Ang RunCloud ay isang cloud-based na platform para sa pamamahala ng server na nagbibigay-daan sa iyo na madaling mag-deploy at mamahala ng mga web application sa sarili mong mga cloud server. Ang integrasyon na ito ay nag-e-enable ng automatic na pag-sync ng domain at pamamahala ng SSL certificate sa pagitan ng Ultimate Multisite at RunCloud.

## Mga Feature
- Automatic na pag-sync ng domain
- Pamamahala ng SSL certificate
- Pag-alis ng domain kapag tinanggal ang mga mapping

## Mga Kinakailangan
Ang mga sumusunod na constant ay kailangang i-define sa iyong `wp-config.php` file:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Mga Hakbang sa Pag-setup

### 1. Kunin ang Iyong RunCloud API Credentials

1. Mag-log in sa iyong RunCloud dashboard
2. Pumunta sa "User Profile" (i-click ang iyong profile picture sa kanang itaas na sulok)
3. Piliin ang "API" mula sa menu
4. I-click ang "Generate API Key" kung wala ka pang nalikha
5. Kopyahin ang iyong API Key at API Secret

### 2. Kunin ang Iyong Server at App ID

1. Sa iyong RunCloud dashboard, pumunta sa "Servers"
2. Piliin ang server kung saan naka-host ang iyong WordPress multisite
3. Ang Server ID ay makikita sa URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Pumunta sa "Web Applications" at piliin ang iyong WordPress application
5. Ang App ID ay makikita sa URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Idagdag ang mga Constant sa wp-config.php

Idagdag ang mga sumusunod na constant sa iyong `wp-config.php` file:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. I-enable ang Integrasyon

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Mag-navigate sa "Domain Mapping" tab
3. Mag-scroll pababa sa "Host Integrations"
4. I-enable ang RunCloud integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana

Kapag may domain na na-map sa Ultimate Multisite:

1. Ang integrasyon ay magpapadala ng request sa RunCloud API para idagdag ang domain sa iyong application
2. Kung matagumpay na naidagdag ang domain, ang integrasyon ay magre-redeploy din ng mga SSL certificate
3. Kapag tinanggal ang isang domain mapping, aalisin din ng integrasyon ang domain mula sa RunCloud

Para sa mga subdomain installation, awtomatikong hahawakan ng integrasyon ang paggawa ng mga subdomain sa RunCloud kapag may bagong site na idinagdag sa iyong network.

## Pag-troubleshoot

### Mga Isyu sa Koneksyon ng API
- Tiyakin na tama ang iyong mga API credential
- Suriin na tama ang iyong server at app ID
- Siguraduhin na ang iyong RunCloud account ay may kinakailangang mga permission

### Mga Isyu sa SSL Certificate
- Maaaring tumagal bago mag-issue ng SSL certificate ang RunCloud
- Tiyakin na maayos na nakaturo ang iyong mga domain sa IP address ng iyong server
- Suriin ang mga SSL setting ng RunCloud para sa iyong application

### Hindi Naidagdag ang Domain
- Suriin ang mga log ng Ultimate Multisite para sa anumang mga error message
- Tiyakin na hindi pa naidagdag ang domain sa RunCloud
- Siguraduhin na suportado ng iyong RunCloud plan ang maraming domain
