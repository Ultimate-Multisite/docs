---
title: Udibaniso lwe-RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Udibaniso lwe-RunCloud

## Isishwankathelo
RunCloud liqonga lolawulo lweeseva elisekelwe efini elikuvumela ukuba ufake kwaye ulawule ii-aplikeshini zewebhu ngokulula kwiiseva zakho zefu. Olu dibaniso luvumela ukuvumelanisa ngokuzenzekelayo kweedomeyini kunye nolawulo lwezatifikethi ze-SSL phakathi kwe-Ultimate Multisite ne-RunCloud.

## Iimpawu
- Ukuvumelanisa ngokuzenzekelayo kweedomeyini
- Ulawulo lwezatifikethi ze-SSL
- Ukususwa kwedomeyini xa iimaphu zicinyiwe

## Iimfuno
Ezi constants zilandelayo kufuneka zichazwe kwifayile yakho `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Imiyalelo yokuseta

### 1. Fumana ii-Credentials zakho ze-RunCloud API

1. Ngena kwi-dashboard yakho ye-RunCloud
2. Yiya ku-"User Profile" (cofa kumfanekiso weprofayile yakho kwikona ephezulu ekunene)
3. Khetha "API" kwimenyu
4. Cofa "Generate API Key" ukuba awukabinayo
5. Khuphela i-API Key yakho kunye ne-API Secret

### 2. Fumana ii-ID zeSeva ne-App zakho

1. Kwi-dashboard yakho ye-RunCloud, yiya ku-"Servers"
2. Khetha iseva apho i-WordPress multisite yakho ibanjwe khona
3. I-Server ID iyabonakala kwi-URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Yiya ku-"Web Applications" uze ukhethe i-aplikeshini yakho ye-WordPress
5. I-App ID iyabonakala kwi-URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Yongeza ii-Constants ku-wp-config.php

Yongeza ezi constants zilandelayo kwifayile yakho `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Vula udibaniso

1. Kwi-admin yakho ye-WordPress, yiya ku-Ultimate Multisite > Settings
2. Yiya kwithebhu ethi "Domain Mapping"
3. Skrolela ezantsi ku-"Host Integrations"
4. Vula udibaniso lwe-RunCloud
5. Cofa "Save Changes"

## Isebenza Njani

Xa idomeyini imaphwe kwi-Ultimate Multisite:

1. Udibaniso luthumela isicelo kwi-API ye-RunCloud ukuze yongeze idomeyini kwi-aplikeshini yakho
2. Ukuba idomeyini yongezwe ngempumelelo, udibaniso luya kuphinda lufake izatifikethi ze-SSL
3. Xa imaphu yedomeyini isusiwe, udibaniso luya kususa idomeyini kwi-RunCloud

Kufakelo lwe-subdomain, udibaniso luya kuphatha ngokuzenzekelayo ukwenziwa kwee-subdomain kwi-RunCloud xa iisayithi ezintsha zongezwa kwinethiwekhi yakho.

## Ukusombulula iingxaki

### Iingxaki zoQhagamshelo lwe-API
- Qinisekisa ukuba ii-credentials zakho ze-API zichanekile
- Jonga ukuba ii-ID zakho zeseva ne-app zichanekile
- Qinisekisa ukuba i-account yakho ye-RunCloud ineemvume eziyimfuneko

### Iingxaki zeZatifikethi ze-SSL
- RunCloud ingathatha ixesha elithile ukukhupha izatifikethi ze-SSL
- Qinisekisa ukuba iidomeyini zakho zikhomba ngokuchanekileyo kwidilesi ye-IP yeseva yakho
- Jonga iisetingi ze-SSL ze-RunCloud ze-aplikeshini yakho

### Idomeyini Ayizange Yongezwe
- Jonga iilog ze-Ultimate Multisite ukuze ubone nayiphi na imiyalezo yempazamo
- Qinisekisa ukuba idomeyini ayikongezwanga sele kwi-RunCloud
- Qinisekisa ukuba iplani yakho ye-RunCloud ixhasa iidomeyini ezininzi
