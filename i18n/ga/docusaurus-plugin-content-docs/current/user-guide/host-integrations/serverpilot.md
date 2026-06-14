---
title: Iompairte ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Intégráisi le ServerPilot

## Oibríocht
Is é ServerPilot seirbhís cloud chun WordPress agus siti eile PHP websites a chur ar servera ag DigitalOcean, Amazon, Google, nó aon forn deiridh eile. Féachfaidh an chéad seo a bheith i gcónaí domáin agus cur chuimhneachán sertaic SSL idir Ultimate Multisite agus ServerPilot.

## Feicharásanna
- Cur chuimhneachán domáin go dtí (Automatic domain syncing)
- Cur chuimhneachán sertaic SSL le Let's Encrypt
- Cur chuimhneachán sertaic SSL go dtí (Automatic SSL renewal)

## Cónaitheachtaí
Is gceart sin é a chur i bhfeidm ag an t-file `wp-config.php` a bheith agatá:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Instructionaí Setpoin

### 1. Déan an t-Aithris API ServerPilot atá

1. Login go dtí do dashboard ServerPilot
2. Déan cur isteach ar "Account" > "API"
3. Creoliad un n-api key nua má níl agat ag cur chuimhneachán
4. Coptaidh do Client ID agus API Key

### 2. Déan an App ID atá

1. I do dashboard ServerPilot, cur isteach ar "Apps"
2. Déan chun an app a bheith ag cur WordPress multisite agat chun cinn
3. Tá an App ID ag bheith i URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Add Constants go wp-config.php

Add an cónaitheachtaí seo go dtí do t-file `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Fáilte le an Intégráisiún

1. I do admin WordPress, cur isteach ar Ultimate Multisite > Settings
2. Déan chun an tab "Domain Mapping" (Cur chuimhneachán domáin)
3. Glac go dtí "Host Integrations" (Intégráisiún hosta)
4. Fáilte le ServerPilot integration
5. Cliom ar "Save Changes" (Cur chuimhneacháin)

## Conas Tá Éifeachtúil

### Cur Chuimhneachán Domáin

Nuair a bhíonn domán ag cur chuimhneachán i Ultimate Multisite:

1. Tá an curteáil a bhfaidh an liosta de domáin atá ag an tairgseir (ServerPilot) a bheith agat.
2. Tá an domán nua ag curtió i liosta (le chuid www má tá sé ag éile).
3. Bidd an liosta athrúla seo go dtí ServerPilot tríd an API.
4. Bhaileann ServerPilot an liosta de domáin do application.

### Curtaí Sertificat SSL (SSL Certificate Management)

Tar éis a bhaineobh na domáin:

1. Baileann an curteáil AutoSSL ar fáil chun an t-application a bheith ag éile.
2. Bhaileann ServerPilot an t-curtaí SSL agus an chláir ag éile tríd Let's Encrypt.
3. Bhaileann ServerPilot an athrúcháin authiomáir na curtaí SSL.

## Peatú Sertificat SSL (SSL Certificate Verification)

Tá an curteáil ceangailt chun an t-amachasanna de chuid curtaí SSL a chur ar fáil do ServerPilot a sholáir, mar is féidir leat go ngairt sonraí amháin ar éile chun curtaí SSL a chur ar fáil agus a chláir. Ag curteáil, baill sé ag iarraidh 5 amachasanna, ach is féidir é seo athrú a dhéanamh tríd na filters.

## Treocha (Troubleshooting)

### Cúsaí Ceangailte API (API Connection Issues)
- Déan cinnte go bhfuil an Client ID agus an API Key agat.
- Déan cinnte go bhfuil an App ID agat.
- Déan cinnte go bhfuil rathasanna ag do chontacht ServerPilot ag curteacha a bhaineann leat.

### Cúsaí Sertificat SSL (SSL Certificate Issues)
- Baillíonn ServerPilot go bhfuil sonraí DNS ceart ag curteáil ar an server de do domáin primaidh chun curtaí SSL a chur ar fáil.
- Má níl curtaí SSL ag curtió, déan cinnte go bhfuil do domáin ag curteáil go ceart ar an chuid IP de do server.
- Is féidir leat go ngairt sonraí amháin ar éile chun curtaí SSL a chur ar fáil agus a chláir (is é seo tí ar 5-15 minuta).

### Domán Níl Ag Bhaineobh (Domain Not Added)
- Déan cinnte go bhfuil aon rud éifeachtach ag an loganna Ultimate Multisite chun meánacháin a chur ar fáil.
- Déan cinnte go níl an domán curtha ag ServerPilot anois.
- Déan cinnte go bhfuil an plan do ServerPilot ag curteacha an n-amachasanna de domáin atá agat.

### Aileán Domáin (Domain Removal)
- Anois níl an API de ServerPilot ag cur isteach go léir an fáil ar chuid domáin oiriúnach.
- Nuair a bhíonn cur isteach domáin (domain mapping) ag cur isteach i Ultimate Multisite, beidh an cur isteach sin ag athrú an liosta domáin i ServerPilot chun an domáin atá cur isteach a gcurt.
