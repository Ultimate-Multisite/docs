---
title: Integratio RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integratio RunCloud

## Visio {#overview}
RunCloud est platforma de management server in cloud quae te permittit facile applicationes web in serveribus tuis propriis cloud deployare et managere. Ha integratio permittit synchronisation automaticam domini et management certatorum SSL inter Ultimate Multisite et RunCloud.

## Caracteres {#features}
- Synchronisation automatica dominii
- Management certificatuum SSL
- Removetur dominio cum mappis deleti sunt

## Requisitos {#requirements}
Cum constantiae sequentia in file `wp-config.php` tuo definiendis debent esse:

```php
define('WU_RUNCLOUD_API_KEY', 'tua_api_key');
define('WU_RUNCLOUD_API_SECRET', 'tua_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'tui_server_id');
define('WU_RUNCLOUD_APP_ID', 'tui_app_id');
```

## Instructiones Configurandi {#setup-instructions}

### 1. Accipe Credentias API tuas RunCloud {#1-get-your-runcloud-api-credentials}

1. Ad signum in dashboard tuo RunCloud adde.
2. Ad "User Profile" (clicare in picturam profile tua in angulo superiore dextro) adde.
3. Selecta "API" ex menu.
4. Fac ut "Generate API Key" clicas si iam non habes.
5. Copia tuam API Key et API Secret.

### 2. Accipe IDs Server et Applicatio tuas {#2-get-your-server-and-app-ids}

1. In dashboard tuo RunCloud, ad "Servers" adde.
2. Selecta server ubi WordPress multisite tuum hospitatur.
3. ID Server est visibilis in URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Ad "Web Applications" adde et selecta application WordPress tuam.
5. ID Applicatio est visibilis in URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Add Constants in wp-config.php {#3-add-constants-to-wp-configphp}

Constantiae sequentes in file `wp-config.php` tuo addere:

```php
define('WU_RUNCLOUD_API_KEY', 'tua_api_key');
define('WU_RUNCLOUD_API_SECRET', 'tua_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'tui_server_id');
define('WU_RUNCLOUD_APP_ID', 'tui_app_id');
```

### 4. Activare Integratio {#4-enable-the-integration}

1. In admin WordPress tu, adveniat in Ultimate Multisite > Settings
2. Naviga ad tab "Domain Mapping"
3. Descendi ad "Host Integrations"
4. Activare integration RunCloud
5. Facere clic in "Save Changes"

## Quod Operatur {#how-it-works}

Cum domium in Ultimate Multisite mappatur:

1. Integra transmittit petitum ad API RunCloud ut domium ad application tu addat
2. Si domium successus additur, integra etiam SSL certificates redeployet
3. Cum mappatura dominii removetur, integra domium a RunCloud removebit

Ad installationibus subdominiis, integra automaticam maneat creationem subdominiiorum in RunCloud cum novis locis ad tu network addeant.

## Solutio Problematum {#troubleshooting}

### Problematicae Connectionis API {#api-connection-issues}
- Verifica si credentiales API tua sunt rectae
- Verifica si ID server et application tua sunt rectae
- Assure te quod account RunCloud tu habet necessarias permissiones

### Problematicae SSL Certificates {#ssl-certificate-issues}
- RunCloud potest tempus inagere ad issuance SSL certificates
- Verifica si domini tua propriam directionem ad IP address server tu ponunt
- Verifica settings SSL RunCloud pro application tua

### Domium Non Additus {#domain-not-added}
- Verifica logs Ultimate Multisite ad quosdam messages erroris
- Verifica si domium iam in RunCloud additus est
- Assure te quod plan RunCloud tu multi domina suportat
