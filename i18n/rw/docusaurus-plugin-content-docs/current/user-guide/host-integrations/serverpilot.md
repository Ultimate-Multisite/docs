---
title: Ubwumvikane bw'Uburenganzira bwa ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Urugiriro n'Urugero (ServerPilot Integration)

## Umuhagariko (Overview) {#overview}
ServerPilot ni serivisi ya cloud itanga WordPress n'ibindi by'umwihariko bwo PHP ku server zikoreshwa kuri DigitalOcean, Amazon, Google cyangwa uburyo bwa server runaka. Iki gukoresha igikorwa kishobora guhindura domain (domain syncing) no gutera SSL certificate management hagati ya Ultimate Multisite n'ServerPilot.

## Icyiciro (Features) {#features}
- Umuhagariko w'ibindi (Automatic domain syncing)
- Gutera SSL certificate management ku Let's Encrypt
- Gukora ikoreshwa ry'SSL cyangwa gushyira mu gihe (Automatic SSL renewal)

## Amakuru (Requirements) {#requirements}
Icyiciro cyo mu gihe cyose (constants) byumwerwe mu file yawe `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Inshingano zo Gutangira (Setup Instructions) {#setup-instructions}

### 1. Gukoresha Amakuru ya ServerPilot API {#1-get-your-serverpilot-api-credentials}

1. Gukoresha umwanya w'Umuhagariko (ServerPilot dashboard).
2. Gukoresha "Account" > "API".
3. Kugera ku makuru y'API yashya niba nta yose ufite.
4. Gutangira Client ID na API Key yawe.

### 2. Gukoresha App ID Yawe {#2-get-your-app-id}

1. Mu dashboard ya ServerPilot, gukoresha "Apps".
2. Kugera ku app yakoreshwa kuri WordPress multisite yawe.
3. App ID yitanga mu URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Gutangira Amakuru mu wp-config.php {#3-add-constants-to-wp-configphp}

Gusobanura amakuru yizera (constants) iremeje mu file yawe `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Gutangira Umuhagariko (Enable the Integration) {#4-enable-the-integration}

1. Mu admin yawe ya WordPress, gukoresha Ultimate Multisite > Settings.
2. Kugera ku tab "Domain Mapping".
3. Gukora ku mwera ku "Host Integrations".
4. Gutangira ServerPilot integration.
5. Gukoresha "Save Changes" (Gusubiza Uburyo).

## Icyemezo cyo Guhagarika (How It Works) {#how-it-works}

### Umuhagariko w'ibindi (Domain Syncing) {#domain-syncing}

Iyo domain ikoreshwa mu Ultimate Multisite:

1. Urugiramo yemezo rero ryitwa mu gukoresha (integration) ritera ubutumwa bwo domain (domains) ku gihe cyiza ku ServerPilot.
2. Ritagira domain ya ngo (along with www version if applicable) mu giciro (list).
3. Ritangira ubutumwa bwo domain rishya ku ServerPilot binyuze mu API.
4. ServerPilot ritera ubutumwa bwo domain kuri application yawe.

### Gukoresha SSL Certificate Management {#ssl-certificate-management}

Nyuma y'uko domains zikoreshwa (synced):

1. Urugiramo rishobora gukoresha AutoSSL ku gihe cyiza kuri application yawe.
2. ServerPilot irera ubutumwa bwo SSL certificate no gukoresha Let's Encrypt kugira ngo yitwe kandi ritangire.
3. ServerPilot irihozo no gukoresha SSL certificates mu gihe cyiza.

## Gukoresha SSL Certificate Verification {#ssl-certificate-verification}

Urugiramo rishobora guhindurwa kugira ngo rugabone uburyo bwo gukoresha SSL certificate ku ServerPilot, kuko hari igihe cyitwa cyane kugira ngo ServerPilot yitwe kandi yigire SSL certificates. Mu gihe cyiza, ritera ibyo mu gihe cyiza 5, ariko hari uburyo bwo guhindura iki bishobora gukoresha filters.

## Gukoresha Icyemezo (Troubleshooting) {#troubleshooting}

### Icyemezo ku Gutangira mu API Connection Issues {#api-connection-issues}
- Yemeza ko Client ID na API Key yawe zishobora kuba zikoreshwa.
- Yemeza ko App ID yawe yiza.
- Yemeza ko account yawe kuri ServerPilot irihozo zikoreshwa.

### Icyemezo ku SSL Certificate Issues {#ssl-certificate-issues}
- ServerPilot irera ko domains zishobora gukoresha DNS records zikoreshwa ku server yawe mbere yitera SSL certificates.
- Niba SSL certificates ntizikoreshwa, yemeza ko domains zawe zishobora guhagarara neza kuri IP address ya server yawe.
- Igihe cyitwa cyane kugira ngo ServerPilot yitwe kandi yigire SSL certificates (gusa 5-15 min).

### Domain Ntari Yagira Mu Giciro (Domain Not Added) {#domain-not-added}
- Yemeza ko hari ibindi byo mu gihe cyiza kuri Ultimate Multisite.
- Yemeza ko domain ntari yagira mu giciro ku ServerPilot.
- Yemeza ko uburyo bwo gukoresha (plan) kuri ServerPilot rishobora gufasha inyubakira domains zawe.

### Urugerezwa kwa Domain {#domain-removal}

- Wanafunzi wa ServerPilot API hawaweze kuondoa domain moja kwa moja kwa sasa.
- Wakati unapofuta uhusiano wa domain (domain mapping) katika Ultimate Multisite, ushirikizi utaendeleza orodha ya domain kwenye ServerPilot ili kuondoa domain iliyofutwa.
