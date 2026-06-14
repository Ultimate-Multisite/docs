---
title: Kugadzirwa neWP Engine Integration
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integration neWP Engine

## Zvinoro (Overview)
WP Engine ndiri platform yechikuru yeWordPress inoteka (hosting) inoteka inoteka WordPress sites. Ino inopa zvinhu zvekuita kuti domain dzine zvinobatsirwa (syncing) zvakaita nekuti Ultimate Multisite neWP Engine.

## Zvinhu (Features)
- Syncing wedomain akaita nekuita nekuti
- Support we subdomain kuti vashandiswe munzira ya multisite
- Kuti inopara nekubatsirwa kwemafanana nemazuva anogona yeWP Engine

## Zvinodiwa (Requirements)
Integration inoteka nekuti unoteka neWP Engine uye inoshandisa API ya WP Engine yakanaka. Usina kuitira zvinhu zvakawanda kana plugin ya WP Engine yakati uye yakatara zvakanaka.

Asi, kana uchida kuita configuration manually (kuti wazviseerera), unogona kuita iwe munzira ya `wp-config.php` yenyu:

```php
define('WPE_APIKEY', 'your_api_key'); // Ndinoda iwe nzira iyi
// CHINAI
define('WPE_API', 'your_api_key'); // Nzira inoteka
```

## Kuratidza Kuita (Setup Instructions)

### 1. Kuratidza Plugin ya WP Engine

Kana unoteka neWP Engine, plugin ya WP Engine inofanira kuitwa uye yakatiye. Ratiidza kuti:

1. Plugin ya WP Engine inoratidzorwa
2. File `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` rinowanikwa

### 2. Kuti Integration Inenge Inoteka (Enable the Integration)

1. Mu admin ya WordPress yako, enda ku Ultimate Multisite > Settings
2. Enda ku tab ya "Domain Mapping"
3. Ratiidza kunge ku "Host Integrations"
4. Onge integration ya WP Engine inenge inoteka
5. Click "Save Changes"

## Inoita Sei (How It Works)

### Syncing wedomain

Kana domain yakaitwa mapping mu Ultimate Multisite:

1. Integration inoshandisa API ya WP Engine kuti itare domain yenyu ku installation yako ya WP Engine
2. WP Engine inozvisarudza configuration ye domain uye kusarudza SSL certificate
3. Kana mapping ye domain ikadzikwa, integration inodzivisa domain iye ku WP Engine

### Support we subdomain

Kutiwo kuneitshiro kubva munzvimbo wekuhlootsi (subdomain multisite installations):

1. Kuti integration inenge inenge i subdomain dziri kuWP Engine kana mwana wepanyira (new site) anenge akachengetedwa.
2. WP Engine ine zvinenge zvinhuura configuration ya subdomain.
3. Kana mwana wepanyira akazviswa, kuti integration ichave kufara i subdomain kuWP Engine.

## Zvinhu Zvinotora Kuti Zvinenge Zvinokosha (Important Notes)

### Wildcard Domains

Kana munenge unenge uri kubva ne subdomain multisite installations, zviri kuitika kuti uyu upfungire kunge kuWP Engine support ukubatsira kuti uingane wildcard domain configuration. Izvi zvinokubvira kuti subdomains dzese dzizivire iwe dzinenge dzichifamba nekuti haunenge uchida kuita zvinhu zvakawanda nezi dziri dziri dzose muiri.

### SSL Certificates

WP Engine inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge
