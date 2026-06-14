---
title: Integrasyon ng RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integration

## Pangkalahatan (Overview)
Ang RunCloud ay isang platform para sa pamamahala ng server na naka-cloud, kung saan madali mong mai-deploy at ma-manage ang mga web application sa sarili mong cloud servers. Ang integrasyong ito ay nagbibigay-daan para sa awtomatikong pag-sync ng domain at pamamahala ng SSL certificate sa pagitan ng Ultimate Multisite at RunCloud.

## Mga Katangian (Features)
- Awtomatikong pag-sync ng domain
- Pamamahala ng SSL certificate
- Pagtanggal ng domain kapag nabura ang mga mapping

## Mga Kinakailangan (Requirements)
Ang mga sumusunod na constants ay dapat i-define sa iyong `wp-config.php` file:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Mga Panuto sa Pag-set Up (Setup Instructions)

### 1. Kunin ang Iyong RunCloud API Credentials

1. Mag-log in sa iyong RunCloud dashboard
2. Pumunta sa "User Profile" (i-click ang iyong profile picture sa kanang itaas na sulok)
3. Piliin ang "API" mula sa menu
4. I-click ang "Generate API Key" kung wala ka pa nito
5. Kopyahin ang iyong API Key at API Secret

### 2. Kunin ang Iyong Server at App IDs

1. Sa iyong RunCloud dashboard, pumunta sa "Servers"
2. Piliin ang server kung saan naka-host ang iyong WordPress multisite
3. Ang Server ID ay makikita sa URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Pumunta sa "Web Applications" at piliin ang iyong WordPress application
5. Ang App ID ay makikita sa URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Magdagdag ng mga Constants sa wp-config.php

Idagdag ang mga sumusunod na constants sa iyong `wp-config.php` file:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. I-enable ang Integrasyon (Enable the Integration)

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Pumunta sa tab na "Domain Mapping"
3. I-scroll pababa patungo sa "Host Integrations"
4. I-enable ang RunCloud integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana

Kapag may domain na naka-map sa Ultimate Multisite:

1. Ang integration ay magpapadala ng request sa API ng RunCloud para idagdag ang domain mo sa iyong application
2. Kung matagumpay na naidagdag ang domain, i-redeploy din ng integration ang mga SSL certificate
3. Kapag tinanggal ang isang domain mapping, tatanggalin ng integration ang domain mula sa RunCloud

Para sa pag-install ng subdomain, awtomatikong hahawakan ng integration ang paglikha ng mga subdomain sa RunCloud kapag may bagong sites na idadagdag sa iyong network.

## Pag-troubleshoot

### Mga Isyu sa Koneksyon ng API
- Siguraduhing tama ang iyong API credentials
- Tingnan kung tama ang iyong server at app IDs
- Tiyakin na ang iyong RunCloud account ay may kinakailangang permissions

### Mga Isyu sa SSL Certificate
- Maaaring magpatagal ang RunCloud para ilabas ang mga SSL certificate
- Siguraduhing tama ang pagtuturo ng iyong mga domain sa IP address ng iyong server
- Tingnan ang mga setting ng SSL ng RunCloud para sa iyong application

### Hindi Naisang Domain
- Tingnan ang Ultimate Multisite logs para sa anumang error messages
- I-verify na hindi pa naka-add ang domain sa RunCloud
- Siguraduhing sinusuportahan ng iyong RunCloud plan ang maraming domains
