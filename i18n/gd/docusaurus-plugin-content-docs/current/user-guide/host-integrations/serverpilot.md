---
title: Còmhlaid bheachd ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integration le ServerPilot

## Aims (Overview) {#overview}
ServerPilot is seilbhleachd cloud service airson hoste WordPress agus e-sitei PHP eile ar serveran de DigitalOcean, Amazon, Google, no bith eile. Tha an sinneadh seo a' toirt am fhaighinn a' chàrach (domain syncing) agus leithid certficatean SSL gu mathdòr beò (SSL certificate management) a' chàrachd air Ultimate Multisite agus ServerPilot.

## Feàinean (Features) {#features}
- Fhaighinn a' chàrach a' chàrach (Automatic domain syncing)
- Leithid certficatean SSL le Let's Encrypt
- A' chàrachd a' chàrach (Automatic SSL renewal)

## Cùinean (Requirements) {#requirements}
Feumaidh e h-aithrisnòidh (constants) seo a bhith wedi' suidheachadh fynech air an `wp-config.php` de uair:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Cùinean a' chàrach (Setup Instructions) {#setup-instructions}

### 1. Ghaighinn tus Clàradh API ServerPilot {#1-get-your-serverpilot-api-credentials}

1. Bidh tu a' chàrachadh (log in) air do dashboard ServerPilot
2. Comharrach air "Account" > "API"
3. Creach un clàradh API ùr mar thuair thu tha thu air a bhith agad
4. Cop an Clàradh Client ID agus an API Key agad

### 2. Ghaighinn tus App ID {#2-get-your-app-id}

1. Air do dashboard ServerPilot, comharrach air "Apps"
2. Taisgadh an app a màir thu WordPress multisite agad
3. Tha an App ID a' chàrachdair (visible) anns an URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Suidheachadh Clàradhan air wp-config.php {#3-add-constants-to-wp-configphp}

Suidheach seachdaidh clàradhan seo air do `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. A' chàrachd a' chàrach (Enable the Integration) {#4-enable-the-integration}

1. Air do admin WordPress, comharrach air Ultimate Multisite > Settings
2. Comharrach air an tab "Domain Mapping"
3. Taisgadh air "Host Integrations"
4. A' chàrachd ServerPilot a' chàrachd (Enable the ServerPilot integration)
5. Comharrach air "Save Changes"

## Conas a tha e a' tòiseachadh (How It Works) {#how-it-works}

### Fhaighinn a' chàrach a' chàrach (Domain Syncing) {#domain-syncing}

Nuair a thug an chàrach a' chàrachd air Ultimate Multisite:

1. Aig an tòiseachadh a thonnsealaidh an liosta de domen air ServerPilot.
2. Feuch fa mo chuid a chur riannach (le chuid www mar a tha am fhaighinn).
3. Feuch an liosta a' chluainteach do ServerPilot a bheith a' leat a tha an API.
4. Bidh ServerPilot a atharrachadh an liosta de domen airson an t-aithreachadh agad.

### Ceannachair SSL (SSL Certificate Management) {#ssl-certificate-management}

An uair a thonnsealaidh na domen:

1. Feuch an AutoSSL air an t-aithreachadh agad.
2. Bidh ServerPilot a dèanamh cinnteach gu sònraich de dhèanamh agus de chluainteachadh ceannachair SSL a' leat a bheith a' leat a tha Let's Encrypt.
3. Bidh ServerPilot a dèanamh cinnteach air atharrachadh automaethig de ceannachair SSL.

## Aithreachadh Ceannachair SSL (SSL Certificate Verification) {#ssl-certificate-verification}

Tha an t-aithreachadh a' chluainteach a' leat a chur ris an t-aithreachadh ceannachair SSL airson ServerPilot, air chun am fhaighinn agus a chur riannach ceannachair SSL gu de dhòigh. Gu neach-am, bidh e a dhèanamh cinnteach faighinn a' chùineachadh le 5 lần, ach is e cheannach a tharann a' chluainteach a' leat a chur ris an t-aithreachadh a' leat a bheith.

## Tòiseachadh (Troubleshooting) {#troubleshooting}

### Cruinneachadh API (API Connection Issues) {#api-connection-issues}
- Bidh thu a' faighinn gu sònraich air Client ID agus API Key.
- Bidh thu a' faighinn gu sònraich air App ID.
- Bidh thu a' faighinn gu sònraich air am fhaighinn a tha agad.

### Cruinneachadh Ceannachair SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- Tha ServerPilot ag iarraidh gu robh na domen a bhith ag cur earrachdan DNS a' leat a bheith air do chluaintear a chur riannach ceannachair SSL air a chur.
- Má tha ceannachair SSL a fhaighinn, dhèidh thu a' faighinn gu robh na domen a bhith ag cur earrachdan gu sònraich air an IP de do chluaintear.
- Feumaidh am fhaighinn agus a chur riannach ceannachair SSL gu de dhòigh a' leat a bheith (a tharann 5-15 minut).

### Domhain Chaillidh (Domain Not Added) {#domain-not-added}
- Bidh thu a' faighinn gu sònraich air log Ultimate Multisite airson am fhaighinn.
- Bidh thu a' faighinn gu sònraich air an t-aithreachadh de domen a bhith already a' leat a bheith air ServerPilot.
- Bidh thu a' faighinn gu sònraich air am plan de ServerPilot a tha agad airson an t-aithreachadh a tha agad.

### A' Chluinadh Domàin (Domain Removal) {#domain-removal}
- Ag currach, níl an API de ServerPilot a tha a' chluinadh domàin ùr.
- Nuair a tharann am fhadhach domàin (domain mapping) a' chluinadh i Ultimate Multisite, salaidh an t-uisge (integration) an list domàin yn atharrachadh mar a tha e a' chluinadh an domàin a tharainn.
