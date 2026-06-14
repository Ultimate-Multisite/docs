---
title: Kukonza RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integration

## Kufunso (Overview)
RunCloud ndi platform yomwe imapulogera pa cloud yomwe imaphatikiza kuti mupulogera ndi kupanga ndi kuwunika web applications pa server zanu za cloud. Izi imaphatikiza kupangira domain kwa m'maka (automatic domain syncing) ndi upatanirano wa SSL certificate pakati pa Ultimate Multisite ndi RunCloud.

## Mafunso (Features)
- Kupulogera domain kwa m'maka (Automatic domain syncing)
- Upatanirano wa SSL certificate (SSL certificate management)
- Kupanga domain pamene mappings aphedwa (Domain removal when mappings are deleted)

## Zomwe Zikufunika (Requirements)
Zimeno zolemba (constants) zimene zikuyenera kudziwika m'moyo wanu wa `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Zifukwa za Kufotokozera (Setup Instructions)

### 1. Pange Credentials za RunCloud API Yanu

1. Phokera m'dashboard ya RunCloud yanu
2. Phokera ku "User Profile" (phokera poyamba ndi pikhulupiriro lanu m'maka pa m'maka wopambuyo)
3. Kosele "API" kuchokera m'menu
4. Kosele "Generate API Key" ngati simukuti muli ndiwo
5. Kopitira API Key yanu ndi API Secret

### 2. Pange Server and App IDs Yanu

1. M'dashboard ya RunCloud yanu, phokera ku "Servers"
2. Kosele server yomwe imapulogera WordPress multisite yanu
3. Server ID limaphatikizidwa m'URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Phokera ku "Web Applications" ndipo kosele application ya WordPress yanu
5. App ID limaphatikizidwa m'URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Pange Constants mu wp-config.php

Pange zimene zolemba (constants) ku file yanu ya `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Onesha Integration (Enable the Integration)

1. Muwera m'admin ya WordPress, ndi penda Ultimate Multisite > Settings
2. Ndilankhula ku tab ya "Domain Mapping" (Kupanga Mwayi wa Domain)
3. Liramba ku "Host Integrations" (Mwayi wa Zomwezi/Server)
4. Onesha RunCloud integration
5. Kufuna "Save Changes" (Kugwira Mwayi)

## Kodi Imene? (How It Works)

Pamene mwayi wamapanga (mapped) mu Ultimate Multisite:

1. Integration imapeto kukhala mwayi wanu ku RunCloud's API kuti ipanga mwayi wanu mu application yanu
2. Ngati mwayi umapangidwa bwino, integration imapanga SSL certificates pano
3. Pamene mwayi wamapangwa (removed), integration imapanga mwayi wanu ku RunCloud

Pamene mwayi wamapanga (subdomain installations), integration imapanga mwayi wanu mu RunCloud pamene mwayi wamene (new sites) umapangidwa mu network yanu.

## Kukhala Mwayi (Troubleshooting)

### Masomo a API Connection
- Onesha kuti credentials ya API yanu ndi yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe y
