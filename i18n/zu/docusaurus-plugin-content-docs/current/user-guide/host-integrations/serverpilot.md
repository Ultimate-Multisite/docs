---
title: Ukuhlanganiswa kwe-ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Ukuhlanganiswa kwe-ServerPilot

## Ukubuka konke
ServerPilot iyisevisi ye-cloud yokusingatha WordPress namanye amawebhusayithi e-PHP kumaseva aku-DigitalOcean, Amazon, Google, noma kunoma yimuphi omunye umhlinzeki weseva. Lokhu kuhlanganiswa kunika amandla ukuvumelanisa okuzenzakalelayo kwamadomain nokuphathwa kwezitifiketi ze-SSL phakathi kwe-Ultimate Multisite ne-ServerPilot.

## Izici
- Ukuvumelanisa okuzenzakalelayo kwamadomain
- Ukuphathwa kwezitifiketi ze-SSL nge-Let's Encrypt
- Ukuvuselelwa okuzenzakalelayo kwe-SSL

## Izimfuneko
Ama-constant alandelayo kufanele achazwe kufayela lakho le-`wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Imiyalelo yokusetha

### 1. Thola imininingwane yakho ye-ServerPilot API

1. Ngena ku-dashboard yakho ye-ServerPilot
2. Iya ku-"Account" > "API"
3. Dala ukhiye omusha we-API uma ungakabi nawo
4. Kopisha i-Client ID yakho ne-API Key

### 2. Thola i-App ID yakho

1. Ku-dashboard yakho ye-ServerPilot, iya ku-"Apps"
2. Khetha i-app lapho i-WordPress multisite yakho isingathwe khona
3. I-App ID ibonakala ku-URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Engeza ama-constant ku-wp-config.php

Engeza ama-constant alandelayo kufayela lakho le-`wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Nika amandla ukuhlanganiswa

1. Ku-admin yakho ye-WordPress, iya ku-Ultimate Multisite > Settings
2. Zulazulela kuthebhu ethi "Domain Mapping"
3. Skrolela phansi ku-"Host Integrations"
4. Nika amandla ukuhlanganiswa kwe-ServerPilot
5. Chofoza "Save Changes"

## Indlela okusebenza ngayo

### Ukuvumelanisa amadomain

Lapho idomain ifakwe imephu ku-Ultimate Multisite:

1. Ukuhlanganiswa kuthola uhlu lwamanje lwamadomain ku-ServerPilot
2. Kwengeza idomain entsha ohlwini (kanye nenguqulo ye-www uma kusebenza)
3. Kuthumela uhlu olubuyekeziwe ku-ServerPilot nge-API
4. ServerPilot ibuyekeza uhlu lwamadomain lohlelo lwakho lokusebenza

### Ukuphathwa kwezitifiketi ze-SSL

Ngemva kokuba amadomain evumelanisiwe:

1. Ukuhlanganiswa kunika amandla i-AutoSSL ngokuzenzakalelayo kuhlelo lwakho lokusebenza
2. ServerPilot iphatha ukukhishwa nokufakwa kwesitifiketi se-SSL isebenzisa i-Let's Encrypt
3. ServerPilot iphinde iphathe ukuvuselelwa okuzenzakalelayo kwezitifiketi ze-SSL

## Ukuqinisekiswa kwesitifiketi se-SSL

Ukuhlanganiswa kulungiselelwe ukwandisa inani lemizamo yokuqinisekisa isitifiketi se-SSL ye-ServerPilot, ngoba kungathatha isikhathi ukuthi i-ServerPilot ikhiphe futhi ifake izitifiketi ze-SSL. Ngokuzenzakalelayo, izozama kuze kube izikhathi ezi-5, kodwa lokhu kungalungiswa kusetshenziswa ama-filter.

## Ukuxazulula izinkinga

### Izinkinga zokuxhumeka kwe-API
- Qinisekisa ukuthi i-Client ID yakho ne-API Key zilungile
- Hlola ukuthi i-App ID yakho ilungile
- Qinisekisa ukuthi i-account yakho ye-ServerPilot inezimvume ezidingekayo

### Izinkinga zesitifiketi se-SSL
- ServerPilot idinga ukuthi amadomain abe namarekhodi e-DNS avumelekile akhomba kuseva yakho ngaphambi kokukhipha izitifiketi ze-SSL
- Uma izitifiketi ze-SSL zingakhishwa, hlola ukuthi amadomain akho akhomba kahle ekhelini le-IP leseva yakho
- Kungathatha isikhathi ukuthi i-ServerPilot ikhiphe futhi ifake izitifiketi ze-SSL (imvamisa imizuzu engu-5-15)

### Idomain ayengezwanga
- Hlola ama-log e-Ultimate Multisite ukuze uthole noma yimiphi imilayezo yamaphutha
- Qinisekisa ukuthi idomain ayikangezwa kakade ku-ServerPilot
- Qinisekisa ukuthi i-plan yakho ye-ServerPilot isekela inani lamadomain owengezayo

### Ukususwa kwedomain
- Okwamanje, i-ServerPilot API ayinikezi indlela yokususa amadomain ngamanye
- Lapho imephu yedomain isuswa ku-Ultimate Multisite, ukuhlanganiswa kuzobuyekeza uhlu lwamadomain ku-ServerPilot ukuze kukhishwe idomain esusiwe
