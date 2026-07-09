---
title: Ukuhlanganiswa kwe-WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Ukuhlanganiswa kwe-WP Engine

## Ukubuka konke
I-WP Engine iyinkundla esezingeni eliphezulu yokusingatha i-WordPress ephethwe, enikeza ukusebenza okuthuthukisiwe, ukuphepha, nokukhula kwamasayithi e-WordPress. Lokhu kuhlanganiswa kwenza ukuvumelanisa okuzenzakalelayo kwamadomeyini phakathi kwe-Ultimate Multisite ne-WP Engine.

## Izici
- Ukuvumelanisa okuzenzakalelayo kwamadomeyini
- Ukusekelwa kwama-subdomain ekufakweni kwe-multisite
- Ukuhlanganiswa okushelelayo nezinhlelo ezikhona ze-WP Engine

## Izidingo
Lokhu kuhlanganiswa kuthola ngokuzenzakalelayo uma usingathwe ku-WP Engine futhi kusebenzisa i-WP Engine API eyakhelwe ngaphakathi. Akudingeki ukulungiselela okwengeziwe uma i-plugin ye-WP Engine isebenza futhi ilungiswe kahle.

Nokho, uma kudingeka ulungiselele lokhu kuhlanganiswa mathupha, ungachaza okukodwa kulawa ma-constant efayeleni lakho le-`wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Preferred method
// OR
define('WPE_API', 'your_api_key'); // Alternative method
```

## Imiyalelo Yokusetha

### 1. Qinisekisa i-Plugin ye-WP Engine

Uma usingathwe ku-WP Engine, i-plugin ye-WP Engine kufanele ibe isivele ifakiwe futhi isebenze. Qinisekisa ukuthi:

1. I-plugin ye-WP Engine iyasebenza
2. Ifayela elithi `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` likhona

### 2. Vumela Ukuhlanganiswa

1. Ku-admin yakho ye-WordPress, iya ku-Ultimate Multisite > Settings
2. Zulazula uye kuthebhu ethi "Domain Mapping"
3. Skrolela phansi uye ku-"Host Integrations"
4. Vumela ukuhlanganiswa kwe-WP Engine
5. Chofoza "Save Changes"

## Indlela Okusebenza Ngayo

### Ukuvumelanisa Kwamadomeyini

Lapho idomeyini imephwe ku-Ultimate Multisite:

1. Lokhu kuhlanganiswa kusebenzisa i-WP Engine API ukwengeza idomeyini ekufakweni kwakho kwe-WP Engine
2. I-WP Engine iphatha ukulungiselelwa kwedomeyini nokukhishwa kwesitifiketi se-SSL
3. Lapho imephu yedomeyini isusiwe, lokhu kuhlanganiswa kuzosusa idomeyini ku-WP Engine

### Ukusekelwa Kwama-Subdomain

Ekufakweni kwe-subdomain multisite:

1. Lokhu kuhlanganiswa kwengeza i-subdomain ngayinye ku-WP Engine lapho kudalwa isayithi elisha
2. I-WP Engine iphatha ukulungiselelwa kwe-subdomain
3. Lapho isayithi lisuswa, lokhu kuhlanganiswa kuzosusa i-subdomain ku-WP Engine

## Amanothi Abalulekile

### Ama-Wildcard Domain

Ekufakweni kwe-subdomain multisite, kunconywa ukuxhumana nosekelo lwe-WP Engine ukuze ucele ukulungiselelwa kwe-wildcard domain. Lokhu kuvumela wonke ama-subdomain ukuthi asebenze ngokuzenzakalelayo ngaphandle kokudinga ukwengeza ngayinye ngokuhlukile.

### Izitifiketi ze-SSL

I-WP Engine iphatha ngokuzenzakalelayo ukukhishwa nokuvuselelwa kwezitifiketi ze-SSL zawo wonke amadomeyini angezwe ngalokhu kuhlanganiswa. Akudingeki ukulungiselela okwengeziwe.

## Ukuxazulula Izinkinga

### Izinkinga Zokuxhumeka kwe-API
- Qinisekisa ukuthi i-plugin ye-WP Engine iyasebenza futhi ilungiswe kahle
- Uma uchaze i-API key mathupha, hlola ukuthi ilungile
- Xhumana nosekelo lwe-WP Engine uma unenkinga nge-API

### Idomeyini Ayengezwanga
- Hlola amalogi e-Ultimate Multisite ukuze ubone noma yimiphi imilayezo yamaphutha
- Qinisekisa ukuthi idomeyini ayikangezwa kakade ku-WP Engine
- Qinisekisa ukuthi i-plan yakho ye-WP Engine isekela inani lamadomeyini owengezayo

### Izinkinga Zama-Subdomain
- Uma ama-subdomain engasebenzi, xhumana nosekelo lwe-WP Engine ukuze ucele ukulungiselelwa kwe-wildcard domain
- Qinisekisa ukuthi izilungiselelo zakho ze-DNS zilungiswe kahle kudomeyini eyinhloko nakuma-subdomain
