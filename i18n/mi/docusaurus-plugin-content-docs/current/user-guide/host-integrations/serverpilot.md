---
title: Whakawhanaungatanga ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Whakawhanaungatanga me ServerPilot {#serverpilot-integration}

## Whakataki {#overview}
ServerPilot he wāhi whai hoatu (cloud service) mō te hoatanga o WordPress me ngā waka PHP i runga i mga server o DigitalOcean, Amazon, Google, akorā ahau e taea ai. Ko tēnei whakatika (integration) e tino pai ana ki te whakawhiti domain automatically me te whakamaoritanga SSL certificate management i waenga i Ultimate Multisite me ServerPilot.

## Manawa {#features}
- Whakawhiti domain automatically
- Whakamanaire SSL certificate management me Let's Encrypt
- Whakamanaire SSL renewal automatically

## Mga Wāhi Whakawhanaungatanga (Requirements) {#requirements}
Me tino whakahou i ngā constants berikut i tō file `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Whakawhanaungatanga (Setup Instructions) {#setup-instructions}

### 1. Whakaue Iro API Credentials o tō ServerPilot {#1-get-your-serverpilot-api-credentials}

1. Whakarongo ki te dashboard o tō ServerPilot
2. Pāinga ki "Account" > "API"
3. Whakawārie ana API key hou kia whai i ahau he tino.
4. Kopiko i tō Client ID me tō API Key

### 2. Whakaue Iro App ID o koe {#2-get-your-app-id}

1. I tō dashboard o ServerPilot, pāinga ki "Apps"
2. Whakarite te app i te mea i roto i tēnei WordPress multisite mo hoatanga ahau.
3. Ko App ID e hoki ana i te URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Whakawārie Constants ki wp-config.php {#3-add-constants-to-wp-configphp}

Whakawārie ngā constants berikut ki tō file `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Whakawhanaungatanga (Enable the Integration) {#4-enable-the-integration}

1. I tō WordPress admin, pāinga ki Ultimate Multisite > Settings
2. Pāinga ki te tab "Domain Mapping"
3. Whakarongo ki i "Host Integrations"
4. Whakawhanaunga ana ki ServerPilot integration
5. Whakawārie ana ki "Save Changes"

## He aha e pēhea ia mahi? (How It Works) {#how-it-works}

### Whakawhiti Domain (Domain Syncing) {#domain-syncing}

I roto i te wā e whakatika domain i Ultimate Multisite:

1. Whakamārama: Ko te whaiaro (integration) e whai i te list o domain hou mai i te ServerPilot.
2. E whāhihia te domain hou ki te list (me te whakamahi version www ana, ko te mea e tika ana).
3. E tino pai te list hou ki te ServerPilot qua API.
4. E whaiaro ai te ServerPilot te list o domain mō tō application.

### Whakawātea Certificate SSL (SSL Certificate Management) {#ssl-certificate-management}

Iha i te wā kua whakahoki i ngā domain:

1. Ka whakamaoritia te integration te AutoSSL mō tō application.
2. Ko te ServerPilot e whaiaro te mahi o te certificate SSL me te whakamahi i Let's Encrypt.
3. Ko te ServerPilot e whaiaro te whakamorehia auto-renewal o ngā certificate SSL.

## Whakawātea/Whakamārama Certificate SSL (SSL Certificate Verification) {#ssl-certificate-verification}

E tino pai te configuration o te integration ki te whawha i te whakapau o ngā whakamārama certificate SSL mō te ServerPilot, ko te mea e taea ana ona he kite i ngā certificate me te whaiaro. I te mea, he pēnei te whakaaro, ka whai i roto i 5 wāhi, engari e taea ai te whakarereke i tēnei mā te whakamahi i filters.

## Whakamārama/Whakawātea (Troubleshooting) {#troubleshooting}

### Ngā Whainga o te Konektanga API (API Connection Issues) {#api-connection-issues}
- Kia tino pai ngā Client ID me te API Key o koe.
- Kia tino pai te App ID o koe.
- Kia tika ana i ngā whānau (permissions) o tō account ServerPilot.

### Ngā Whainga o te Certificate SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- E tino tino pēnei te whakaaro: e hiahia te ServerPilot kei te mea he tino pai ngā DNS records mō ngā domain ki te whai ana ki tō server i te mea ka whakawero ai i ngā certificate SSL.
- Ko te mea, ko te certificate SSL ei whaiaro, kia whakaaro koe ki te whakapā i ngā domain ki te tika ki te IP address o tō server.
- Ka taea ona he kite i ngā certificate me te whakamahi i ngā ServerPilot (i roto i te pēnei), he pēnei te wā (5-15 minutes).

### Domain Ei Whakawāhia (Domain Not Added) {#domain-not-added}
- Kia whakaaro i ngā logs o Ultimate Multisite mō ngā puni (error messages) ahau.
- Kia tino pai te whakahaupapa i te domain kei ServerPilot anō.
- Kia tika ana i tō plan o ServerPilot ki te whakapapa o ngā domain e koe e whaiaro.

### Whakamutunga o te Domain {#domain-removal}

- I roto i te wā e hoki mai te ServerPilot API, he mea nui ana kei te tino whakamahi atu he wahi hei whakatū (remove) i ngā domain tahi.
- I roto i Ultimate Multisite, i roto i te wā e whakatanga (remove) i te mapping o te domain, ka whakautia te whaiaro (integration) i te list o ngā domain i te ServerPilot kia whakatū (exclude) i te domain e whakatunga.
