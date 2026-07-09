---
title: Ukuhlanganiswa kwe-RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Ukuhlanganiswa kwe-RunCloud

## Uhlolojikelele
RunCloud iyinkundla yokuphatha iseva esekelwe efwini ekuvumela ukuthi usabalalise futhi uphathe kalula izinhlelo zokusebenza zewebhu kumaseva akho efu. Lokhu kuhlanganiswa kunika amandla ukuvumelanisa okuzenzakalelayo kwama-domain nokuphathwa kwezitifiketi ze-SSL phakathi kwe-Ultimate Multisite ne-RunCloud.

## Izici
- Ukuvumelanisa okuzenzakalelayo kwama-domain
- Ukuphathwa kwezitifiketi ze-SSL
- Ukususwa kwe-domain lapho ama-mapping esusiwe

## Izimfuneko
Ama-constant alandelayo kufanele achazwe kufayela lakho le-`wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Imiyalelo Yokumisa

### 1. Thola imininingwane yakho ye-RunCloud API

1. Ngena ku-RunCloud dashboard yakho
2. Iya ku-"User Profile" (chofoza isithombe sakho sephrofayela ekhoneni eliphezulu kwesokudla)
3. Khetha u-"API" kumenyu
4. Chofoza u-"Generate API Key" uma ungakabi nayo
5. Kopisha i-API Key yakho ne-API Secret

### 2. Thola ama-ID eseva nohlelo lokusebenza

1. Ku-RunCloud dashboard yakho, iya ku-"Servers"
2. Khetha iseva lapho i-WordPress multisite yakho isingathwe khona
3. I-Server ID iyabonakala ku-URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Iya ku-"Web Applications" bese ukhetha uhlelo lwakho lokusebenza lwe-WordPress
5. I-App ID iyabonakala ku-URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Engeza ama-constant ku-wp-config.php

Engeza ama-constant alandelayo kufayela lakho le-`wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Nika amandla ukuhlanganiswa

1. Ku-WordPress admin yakho, iya ku-Ultimate Multisite > Settings
2. Zulazula uye kuthebhu ethi "Domain Mapping"
3. Skrolela phansi ku-"Host Integrations"
4. Nika amandla ukuhlanganiswa kwe-RunCloud
5. Chofoza u-"Save Changes"

## Indlela Okusebenza Ngayo

Lapho i-domain imaphiwe ku-Ultimate Multisite:

1. Ukuhlanganiswa kuthumela isicelo ku-API ye-RunCloud ukuze kwengezwe i-domain kuhlelo lwakho lokusebenza
2. Uma i-domain ingezwe ngempumelelo, ukuhlanganiswa kuzophinde kusabalalise kabusha izitifiketi ze-SSL
3. Lapho i-domain mapping isusiwe, ukuhlanganiswa kuzosusa i-domain ku-RunCloud

Ezifakweni ze-subdomain, ukuhlanganiswa kuzophatha ngokuzenzakalelayo ukwakhiwa kwama-subdomain ku-RunCloud lapho amasayithi amasha engezwa kunethiwekhi yakho.

## Ukuxazulula Izinkinga

### Izinkinga Zokuxhumana ne-API
- Qinisekisa ukuthi imininingwane yakho ye-API ilungile
- Hlola ukuthi ama-ID eseva nohlelo lokusebenza alungile
- Qinisekisa ukuthi i-RunCloud account yakho inezimvume ezidingekayo

### Izinkinga Zezitifiketi ze-SSL
- RunCloud ingase ithathe isikhathi esithile ukukhipha izitifiketi ze-SSL
- Qinisekisa ukuthi ama-domain akho akhomba kahle ekhelini le-IP leseva yakho
- Hlola izilungiselelo ze-SSL ze-RunCloud zohlelo lwakho lokusebenza

### I-Domain Ayengezwanga
- Hlola ama-log e-Ultimate Multisite ukuze uthole noma yimiphi imilayezo yamaphutha
- Qinisekisa ukuthi i-domain ayikafakwa kakade ku-RunCloud
- Qinisekisa ukuthi i-RunCloud plan yakho isekela ama-domain amaningi
