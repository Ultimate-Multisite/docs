---
title: Kugadzirwa neServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integration ya ServerPilot

## Zvinodi (Overview) {#overview}
ServerPilot ndiri service yakachengeta kune ku-host WordPress uye websites dzine PHP pa servers dzinogadzirwa neDigitalOcean, Amazon, Google, kana server provider wose. Integration iyi inopa kuratidza domain syncing nekugadzirisa SSL certificate zvakaita kuti Ultimate Multisite uye ServerPilot zvinogara zvakanaka.

## Zvinhu (Features) {#features}
- Kuratidza domain syncing zvakaita kuti dzichigone kuenda nekuenda.
- Kugadzirisa SSL certificate kunoita nekubatsira kweLet's Encrypt.
- Kuratidza SSL renewal zvakaita kuti isazivikaniswe.

## Zvinodi (Requirements) {#requirements}
Zvinofanira kuva zvinodi izvi mufile wako `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Kuratidza Kuti (Setup Instructions) {#setup-instructions}

### 1. Shandisa ServerPilot API Credentials yako {#1-get-your-serverpilot-api-credentials}

1. Ingira ku dashboard yako ya ServerPilot
2. Enda ku "Account" > "API"
3. Shandisa API key yakare kana hauna iye
4. Rapa Client ID uye API Key yako

### 2. Shandisa App ID yako {#2-get-your-app-id}

1. Mu dashboard yako ya ServerPilot, enda ku "Apps"
2. Chibvumira app inoshandiswa kuti WordPress multisite yako inogadzirwa
3. App ID inogona kuone mu URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Shandisa Constants mu wp-config.php {#3-add-constants-to-wp-configphp}

Shandisa constants izvi mufile wako `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Onesha Integration {#4-enable-the-integration}

1. Mu admin yako ya WordPress, enda ku Ultimate Multisite > Settings
2. Enda ku tab "Domain Mapping"
3. Rapa kunge ku "Host Integrations"
4. Onesha ServerPilot integration
5. Chibvumira "Save Changes"

## Izvi Zvinogona Kuenda Sei (How It Works) {#how-it-works}

### Kuratidza Domain Syncing {#domain-syncing}

Kana domain yakagadzirwa mu Ultimate Multisite:

1. Integrationo inoratira listi ya domenio ya chokwadi ku ServerPilot
2. Ino inozvaka domenio dzinotsvaka (ne www kana kune zvinhu zviri kuitika) ku listi (kana zvinoteverwa)
3. Ino inoshandisa listi yakagadzirwa ku ServerPilot kupamba ne API
4. ServerPilot inozvaka listi ya domenio yavo kwa application yako

### Kuratidza SSL Certificate {#ssl-certificate-management}

Panguva dziri kuva zvinhu zvinotsvaka (synced):

1. Integrationo inozvaka AutoSSL kune application yako
2. ServerPilot inozvaka nekuita SSL certificate nekubata neLet's Encrypt
3. ServerPilot inozvaka nekuratidza nekubata zvishoma zvinotsvaka (renewal)

## Kuratidza SSL Certificate {#ssl-certificate-verification}

Integrationo inogadzirwa kuti inge kuva nemakore ekuratidza kuratidza SSL certificate kune ServerPilot, sezvo kunge kusaka nguva yakawanda kuti ServerPilot inozvake nekuita SSL certificates. Nechokwadi chete, inozvaka upfungire 5, asi iwe unogona kuendesa izvi nekubata (filters).

## Kuratidza Matambudziko (Troubleshooting) {#troubleshooting}

### Matambudziko ekutanga ne API Connection {#api-connection-issues}
- Simbisa kuti Client ID yako uye API Key yakachena
- Simbisa kuti App ID yako yakachena
- Simbisa kuti account ya ServerPilot yako inenge inozvaka zvinhu zvakakosha (permissions)

### Matambudziko ekuti SSL Certificate Inotanga {#ssl-certificate-issues}
- ServerPilot inoda kuti domenio dzine DNS records dzinotsvaka ku server yako panguva inozvake SSL certificates
- Kana SSL certificates hazvazvake, simbisa kuti domenio dzako dzinotsvaka zvakanaka kune IP address ya server yako
- Kunge kusaka nguva yakawanda kuti ServerPilot inozvake nekuita SSL certificates (kudzidzwa 5-15 minutes)

### Domenio Hasi Hachivaka {#domain-not-added}
- Simbisa Ultimate Multisite logs kuti pane mazano ekutanga (error messages)
- Simbisa kuti domenio hachivakwa panguva inozvake ku ServerPilot
- Simbisa kuti plan ya ServerPilot yako inozvaka kuita izvi zvinhu zvinotsvaka dzako

### Kufarcha Domain {#domain-removal}

- Hasi, ServerPilot API haina nzira yakai kufarcha domain dziri dzinotsanana.
- Kana domain mapping iifarcha mune Ultimate Multisite, integration irovedza (iupedza) list ya domain mu ServerPilot kuti ifare dziri dzakafarcha.
