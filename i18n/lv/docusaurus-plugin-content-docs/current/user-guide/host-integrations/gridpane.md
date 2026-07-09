---
title: GridPane integrācija
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integrācija {#gridpane-integration}

## Īsszums {#overview}
GridPane ir īpaši izstrādāta WordPress hostings kontrol panelis, kas paredzēta nopietojamiem WordPress profesionālim. Šī integrācija ļauj automātiskai domēnu sinkronizācijai un SSL sertifikātu pārvaldībai starp Ultimate Multisite un GridPane.

## Funkcionalitātes {#features}
- Automātiska domēnu sinkronizācija
- SSL sertifikāta pārvaldība
- SUNRISE konstanta automātiska konfigurācija

## Prasības {#requirements}
Jums jādefinēši šādas konstantes savā `wp-config.php` failā:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'jūsu_api_kunci');
define('WU_GRIDPANE_SERVER_ID', 'jūsu_servera_id');
define('WU_GRIDPANE_APP_ID', 'jūsu_saites_id');
```

## Iestatījumu instrukcijas {#setup-instructions}

### 1. Saņemiet savas GridPane API atļaujas (Credentials) {#1-get-your-gridpane-api-credentials}

1. Loginieties uz savu GridPane dashboardu
2. Dodieties uz "Settings" > "API"
3. Izveidi API kluči, ja jums vēl nav
4. Kopējiet savu API kluči

### 2. Saņemiet savus servera un saites ID (IDs) {#2-get-your-server-and-site-ids}

1. Savā GridPane dashboardā dodieties uz "Servers"
2. Izvēlieties serveri, kurā hostēts jūsu WordPress multisite
3. Pievienojiet Servera ID (redzams URL adresē vai servera detaļu lapā)
4. Dodieties uz "Sites" un izvēlieties savu WordPress saiti
5. Pievienojiet Saites ID (redzams URL adresē vai saites detaļu lapā)

### 3. Pievienojiet konstantes `wp-config.php` failā {#3-add-constants-to-wp-configphp}

Pievienojiet šo konstantes savam `wp-config.php` failam:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'jūsu_api_kunci');
define('WU_GRIDPANE_SERVER_ID', 'jūsu_servera_id');
define('WU_GRIDPANE_APP_ID', 'jūsu_saites_id');
```

### 4. Iespējojiet integrāciju {#4-enable-the-integration}

1. Savā WordPress admin panelā dodieties uz Ultimate Multisite > Settings
2. Navigējieties uz "Domain Mapping" (Domēnu mapi) tabu
3. Scrolliet lejā, lai atrastu "Host Integrations" (Host integrācijas)
4. Iespējojiet GridPane integrāciju
5. Nospiediet "Save Changes" (Saglabāt izmaiņas)

## Kā tas darbojas {#how-it-works}

Kad domēnu mapi Ultimate Multisite:

1. Integrācija sūta pieprasījumu GridPane API, lai domēnu pievienotu jūsu vietnei.
2. GridPane automātiski pārvaldī SSL sertifikāta sniegšanu.
3. Kad domēnas mappers tiek atņemti, integrācija domēnu noņem caur GridPane.

Integrācija arī automātiski pārvalda SUNRISE konstantu jūsu wp-config.php failā, kas ir nepieciešama domēnas mappēšanai veiksmīgi darboties.

## SUNRISE konstantas pārvaldība {#sunrise-constant-management}

Viena unikāla funkcija GridPane integrācijas ir tā, ka tā automātiski atgriež SUNRISE konstantu wp-config.php failā, lai novērstu konfliktus ar GridPane savas domēnas mappēšanas sistēmu. Tas nodrošina, ka abas sistēmas var strādāt kopā bez problēmu.

## Problemas likums {#troubleshooting}

### API savienojuma problēmas {#api-connection-issues}
- Pārbaudiet, vai jūsu API kluāvs ir pareizs
- Pārbaudiet, vai jūsu servera un vietnes ID ir pareizi
- Nodrošiniet, ka jūsu GridPane kontam ir nepieciešami atļaujas

### SSL sertifikāta problēmas {#ssl-certificate-issues}
- GridPane var aizņemt kādu laiku sniegt SSL sertifikātu
- Pārbaudiet, vai jūsu domēni labi norāda uz jūsu servera IP adresi
- Pārbaudiet GridPane SSL iestatījumus jūsu vietnei

### Domēna nav pievienota {#domain-not-added}
- Pārbaudiet Ultimate Multisite logus jebkurām kļūdas ziņojumiem
- Pārbaudiet, vai domēna vēl nav pievienota GridPane
- Nodrošiniet, ka jūsu domēnas DNS ieraksti ir labi konfigurēti
