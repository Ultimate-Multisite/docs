---
title: ServerPilot integrācija
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Integrācija {#serverpilot-integration}

## Īskatsauce {#overview}
ServerPilot ir viltas pakalpojums, kas hostē WordPress un citus PHP vietnes uz serveriem DigitalOcean, Amazon, Google vai jebkuru citu servera sniedzējam. Šī integrācija ļauj automātiskai domēnu sinhronizācijai un SSL sertifikāta pārvaldībai starp Ultimate Multisite un ServerPilot.

## Funkcionalitātes {#features}
- Automātiskā domēnu sinhronizācija
- SSL sertifikāta pārvaldība ar Let's Encrypt
- Automātiska SSL atjaunošana

## Prasības {#requirements}
Jums jādefinēši šie konstantes `wp-config.php` failā:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Iestatīšanas instrukcijas {#setup-instructions}

### 1. Saņemiet savus ServerPilot API atļaujas (Credentials) {#1-get-your-serverpilot-api-credentials}

1. Loginieties uz savu ServerPilot dashboardu
2. Navigējieties uz "Account" > "API"
3. Izveidiet jaunu API kluātri, ja jums vēl nav
4. Kopējiet savu Client ID un API Key

### 2. Saņemiet savu App ID {#2-get-your-app-id}

1. Savā ServerPilot dashboardā navigējieties uz "Apps"
2. Izvēlieties lietotni, kurā hostēts jūsu WordPress multisite
3. App ID ir redzams URL adresē: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Pievienojiet konstantes pie wp-config.php {#3-add-constants-to-wp-configphp}

Pievienojiet šīs konstantes savam `wp-config.php` failam:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Iespējiet integrāciju {#4-enable-the-integration}

1. Savā WordPress admina failā navigējieties uz Ultimate Multisite > Settings
2. Navigējieties uz "Domain Mapping" (Domēnu mapi) tablu
3. Scrolliet lejā, lai atrastu "Host Integrations" (Host integrācijas)
4. Iespējiet ServerPilot integrāciju
5. Nospressiet "Save Changes" (Saglabāt izmaiņas)

## Kā tas darbojas {#how-it-works}

### Domēnu sinhronizācija {#domain-syncing}

Kad domēna tiek mapiet Ultimate Multisite, ...

1. Integrācija izņem pašreizējās domēnu saraksta no ServerPilot.
2. Tā pievieno jaunu domēnu sarakstam (kopējot arī `www` versiju, ja tas ir jāpievieno).
3. Jaunais saraksts nosūtīts ServerPilot API caur atjauninājumu.
4. ServerPilot atjauninā domēnu sarakstu jūsu lietojumam.

### SSL sertifikāta pārvaldība {#ssl-certificate-management}

Pēc domēnu sinhronizācijas:

1. Integrācija automātiski ieslēdz AutoSSL jūsu lietojumam.
2. ServerPilot veic SSL sertifikāta izdošanu un instalēšanu, izmantojot Let's Encrypt.
3. ServerPilot arī veic SSL sertifikātu automātiskās atjaunināšanas pārvaldību.

## SSL sertifikāta apstiprināšana (Verification) {#ssl-certificate-verification}

Integrācija ir konfiguriēta palielināt SSL sertifikāta apstiprināšanas mēģinājumu skaitu ServerPilot, jo ServerPilot var aizņemt laiku izdošanai un instalēšanai SSL sertifikāti. Par defaultu tas mēģina līdz 5 reizēm, bet to var pielāgot ar filtriem.

## Kļūdu likums (Troubleshooting) {#troubleshooting}

### API savienojuma problēmas {#api-connection-issues}
- Pārbaudiet, vai jūsu Client ID un API Key ir pareizi.
- Pārbaudiet, vai jūsu App ID ir pareizs.
- Nodrošiniet, ka jūsu ServerPilot kontam ir nepieciešamie iestatas.

### SSL sertifikāta problēmas {#ssl-certificate-issues}
- ServerPilot prasa, lai domēniem būtu veiksmīgi DNS ieraksti, kas uzrauga jūsu serveri, pirms SSL sertifikātu izdošanas.
- Ja SSL sertifikāti neizdo, pārbaudiet, vai jūsu domēni labi uzrauga jūsu servera IP adresi.
- ServerPilot var aizņemt laiku SSL sertifikāta izdošanai un instalēšanai (parasti 5–15 minūtes).

### Domēna nepievienots {#domain-not-added}
- Pārbaudiet Ultimate Multisite logus jebkurām kļūdu ziņojumiem.
- Noteikiet, ka domēna nav jau pievienota ServerPilot.
- Nodrošiniet, ka jūsu ServerPilot plāns atbalsta domēnu skaitu, ko jūs pievienojat.

### Domenes atņemšana {#domain-removal}
-)}$-Atskarība: pašlaik ServerPilot API nepiešķir veidu, kā izņemt vienu domēnu.
- Latvian: Kad Ultimate Multisite noņem domānu mapi, integrācija atjauninās ServerPilot sarakstu, lai izņemtu to domānu.
