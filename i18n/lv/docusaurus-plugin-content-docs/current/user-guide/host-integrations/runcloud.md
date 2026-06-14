---
title: RunCloud integrācija
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integrācija ar RunCloud

## Īsszums
RunCloud ir veltīta serveru pārvaldības platforma, kas ļauj viegli izvietot un pārvaldīt tīmekļa lietojumus savos nuoklāju serverēs. Šī integrācija atrodas automaticās domēnu sinhronizācijas un SSL sertifikātu pārvaldības starp Ultimate Multisite un RunCloud.

## Funkcionalitātes
- Automātiskā domēnu sinhronizācija
- SSL sertifikātu pārvaldība
- Domēna izslēgšana, ja atrodas atkarības (mappings) tiek noņemtas

## Prasības
Jums jādefinēši šie konstanți `wp-config.php` failā:

```php
define('WU_RUNCLOUD_API_KEY', 'jūsu_api_klausas');
define('WU_RUNCLOUD_API_SECRET', 'jūsu_api_sēkrts');
define('WU_RUNCLOUD_SERVER_ID', 'jūsu_servera_id');
define('WU_RUNCLOUD_APP_ID', 'jūsu_līdzārības_id');
```

## Iestatījumu instrukcijas

### 1. Saņemiet savus RunCloud API atļaujas (Credentials)

1. Loginieties uz savu RunCloud dashboardu.
2. Atveriet "User Profile" (klikšķiniet uz savas profila attēla augšējā labajā stūrī).
3. Izvēlieties "API" no menu.
4. Klikšķiniet uz "Generate API Key", ja jums vēl nav atļaujas.
5. Kopējiet savu API Klausu (API Key) un API Sēkrtu (API Secret).

### 2. Saņemiet savus servera un lietojumu ID

1. RunCloud dashboardā pārvietojieties uz "Servers".
2. Izvēlieties serveri, kurā hostēts jūsu WordPress multisite.
3. Servera ID ir redzams URL adresē: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Pārvietojieties uz "Web Applications" un izvēlieties savu WordPress lietojumu.
5. Lietojuma ID ir redzams URL adresē: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Pievienojiet konstanți pie wp-config.php

Pievienojiet šos konstanți savam `wp-config.php` failam:

```php
define('WU_RUNCLOUD_API_KEY', 'jūsu_api_klausas');
define('WU_RUNCLOUD_API_SECRET', 'jūsu_api_sēkrts');
define('WU_RUNCLOUD_SERVER_ID', 'jūsu_servera_id');
define('WU_RUNCLOUD_APP_ID', 'jūsu_līdzārības_id');
```

### 4. Iespējiet integrāciju

1. Uz WordPress admina dodir Ultimate Multisite > Settings
2. Navigējieties uz posmu "Domain Mapping" (Domānu mapiņš)
3. Ieliet zemāk līdz "Host Integrations" (Host integrācijas)
4. Iespējini RunCloud integrāciju
5. Nospressiet "Save Changes" (Saglabāt izmaiņas)

## Kā tas darbojas

Kad domāns tiek mapiņš Ultimate Multisite-ā:

1. Integrācija sūta pieprasījumu RunCloud API, lai domānu pievienotu lietotnes
2. Ja domāns veiksmīgi tiek pievienots, integrācija arī atjaunina SSL sertifikātu izvietošanu (redeploy)
3. Kad domānas mapiņš tiek noņemts, integrācija domānu noņem RunCloud no

Subdomēnu instalēšanai integrācija automātiski pārvaldīs subdomēnu izveidi RunCloud-ā, kad uz jūsu tīklu tiek pievienoti jauni sitet
