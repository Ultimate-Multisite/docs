---
title: Integrazzjoni RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integrà RunCloud

## Panoramika
RunCloud huwa piattaforma di gestjoni server basata fuq il cloud li ti permet a te deploya u gestire applicazzjonijiet web fasilment fuq i t-tvoli tal-cloud tiegħek. Dan l-integrà ti permet sincronizzazzjoni automatika tal-domain u gestjoni tal-SSL certificate bejn Ultimate Multisite u RunCloud.

## Funzjonalità
- Sincronizzazzjoni automatika tal-domain
- Gestjoni tal-SSL certificate
- Eliminazzjoni tal-domain meta vengono eliminati le mappature (mappings)

## Requisiti
Il-konstanti fil-folgli tiegħek `wp-config.php` għandir definita:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Istruzzjonijiet ta l-Ippostitizzjoni (Setup)

### 1. Oħtja il-RunCloud API Credentials Tieħdak

1. Inlogja fil-dashboard tiegħek tal-RunCloud
2. Id-pressa fuq "User Profile" (klick fuq l-profil tiegħek fil-angolo tiegħu fl-top dirett)
3. Scegli "API" minn il menu
4. Klick fuq "Generate API Key" se ma għandekx xi ħaġa
5. Kopja l-API Key u l-API Secret tiegħek

### 2. Oħtja id-Domain ID u App ID Tieħdak

1. Fil-dashboard tiegħek tal-RunCloud, id-pressa fuq "Servers"
2. Scegli is-server li jista'ġi l-WordPress multisite tiegħek
3. L-Server ID huwa magħruf fil-URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Id-pressa fuq "Web Applications" u selezjoni l-app tiegħek ta WordPress
5. L-App ID huwa magħruf fil-URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Aggiungi Konstanti għal wp-config.php

Aggiungi l-konstanti tal-folgli tiegħek `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Iżgihja l-Integrà (Enable the Integration)

1. F'admin WordPress tiegħek, għandi tnejj l-Ultimate Multisite > Settings
2. Naviga għall-tab "Domain Mapping" (Mappatura tal-Dominji)
3. Scroll'a' wara għall- "Host Integrations" (Integrazzjonijiet ta' Host)
4. Abella l-RunCloud integration
5. Klikka fuq "Save Changes" (Saħħa l-Modifiki)

## Come Funziona

Meta li domini jomm mappati f'Ultimate Multisite:

1. L-integration traddem richiesta għall-API ta' RunCloud biex tiddarba d-dominju fl-app tiegħek
2. Jekk id-dominju jitferma b'mod kif jifabbru, l-integration tfittex kollha sertifikat SSL
3. Meta tiddirba l-mappatura tal-dominju, l-integration tiddirba d-dominju min RunCloud

Biex siti ta subdomj (subdomains), l-integration tagħmel l-kunsill mill-RunCloud biex jiddeħħlu subdomji meta tiddarba siti jidduq fl-network tiegħek.

## Problemi u Soluzzjonijiet

### Problemi b'Konnekkjizzjoni API
- Verifika li l-credentials tal-API tiegħek huma korretti
- Kontrolla li l-server tiegħek u id-app ID huma korretti
- Assicurajt li l-account tiegħek f'RunCloud għandu l-permessijiet biex jiddeħħlu

### Problemi sertifikat SSL
- RunCloud tista' teħtieġ ħin ta' issaħħa biex jiddarba sertifikat SSL
- Verifika li d-dominji tiegħek qed indironqu b'mod korrett għall-IP address tal-server tiegħek
- Kontrolla l-settings ta' SSL f'RunCloud għall-app tiegħek

### Dominju M'iddarba
- Kontrolla l-logs ta' Ultimate Multisite għal pirċa msgji speċifi
- Verifika li d-dominju ma jiddeħħlx għad-awer min RunCloud
- Assicurajt li l-plan tiegħek f'RunCloud jsupporta domini multipli
