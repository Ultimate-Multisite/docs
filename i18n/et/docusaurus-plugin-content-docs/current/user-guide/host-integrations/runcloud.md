---
title: RunCloud integreerimine
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integreerimine

## Üldinekuvur {#overview}
RunCloud on pilutu põhine oleva serveri haldamise platvorm, mis võimaldab teil lihtsalt veebilehtide oma pilutena serveritele paigutada ja hallata. See integreerimine võimaldab automaatselt domeenid synkronida ja SSL-tööcertificate juhtida Ultimate Multisite'i ja RunCloudi vahel.

## Funktsioonid {#features}
- Domeeni automaatne synkronimine
- SSL-tööcertificate juhtimine
- Domeeni eemaldamine, kui märgistused (mappings) eemaldatakse

## nõuded {#requirements}
Järgnev konstantsid tuleb definitsiona `wp-config.php` failis määrata:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Seadistamise juhised {#setup-instructions}

### 1. Pide RunCloud API-kujundused (Credentials) {#1-get-your-runcloud-api-credentials}

1. Logi sisse oma RunCloud dashboardile
2. Minna "User Profile"i sekkoni (klõpsake oma profiilipilt ülemisel paremal poole)
3. Valige menüüst "API"
4. Klõpsake "Generate API Key"t, kui teil ei ole seda juba
5. Kopya oma API-key ja API-salakood

### 2. Pide oma serveri ja app-IDd (App IDs) {#2-get-your-server-and-app-ids}

1. RunCloud dashboardis minna "Servers" sekkoni
2. Valige server, kus teie WordPress multisite on paigutatud
3. Serveri ID näed URL-is: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Minna "Web Applications" sekkoni ja valige oma WordPress app
5. App-ID näed URL-is: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Lisage konstantsid wp-config.php'le {#3-add-constants-to-wp-configphp}

Lisage järgmised konstantsid oma `wp-config.php` failile:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Lülitage integreerimine sisse {#4-enable-the-integration}

1. WordPress adminisüsteemidesse pääset Ultimate Multisite > Settings menüüle
2. Navigeerige "Domain Mapping" välilele
3. Skroolipane alla "Host Integrations" osas
4. Lülitage RunCloud integraalise aktiveerimise (Enable)
5. Klõpsake "Save Changes" (Muutuste salvestamine)

## Kuidas see toimib {#how-it-works}

Kui domeen on Ultimate Multisite'is mappitud:

1. Integraalise lähevad tahtida RunCloudi API-le domeeni oma rakenduse lisamiseks
2. Kui domeen lisatakse õnnestult, integraalise käivitab SSL-sertifikaate uudelleen paigaldamise (redeploy)
3. Kui domeeni mappimist eemaldatakse, väljastub integraalise domeen RunCloudist

Subdomiinpaigalduste korral integreaalise haldab automaatselt subdomeenide loomist RunCloudis uute sisse lisatavate platvormide puhul.

## Probleemide lahendamine {#troubleshooting}

### API ühenduse probleemid {#api-connection-issues}
- Kontrollige, kas teie API kinnitused on õigud
- Kontrollige, kas teie serveri ja app ID'd on õigud
- Veenduge, et RunCloudi kontes on vajalikud lubanded (permissions)

### SSL-sertifikaadega seotud probleemid {#ssl-certificate-issues}
- RunCloud võib SSL-sertifikaate väljastamiseks aega võtta
- Kontrollige, kas teie domeenid viitavad õigutult serveri IP-adressile
- Kontrollige RunCloudi SSL-seadistusi oma rakenduse kohta

### Domeeni lisamata jäämine {#domain-not-added}
- Kontrollige Ultimate Multisite logud vaimuudest (error messages)
- Veenduge, et domeen ei ole juba RunCloudis lisatud
- Veenduge, et teie RunCloudi plaan toetab mitmeid domeene
