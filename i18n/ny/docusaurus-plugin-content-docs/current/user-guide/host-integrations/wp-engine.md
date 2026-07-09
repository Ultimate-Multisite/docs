---
title: Kukumbutsa WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Ulingano wa WP Engine {#wp-engine-integration}

## Kufotokozera (Overview) {#overview}
WP Engine ndi platform yomanga ya WordPress yomwe imapereka utumikizi wopangidwa kwa kukhazikira (hosting) womwe umapereka mwayi wopangidwa, kuchepa, ndipo kumapereka kusintha kwa mpaka (scalability) kwa sites za WordPress. Kufotokozera liliyenera limapereka kupanga domain wopangidwa (domain syncing) m'Ultimate Multisite ndi WP Engine.

## Mafunso (Features) {#features}
- Kupanga domain wopangidwa kukhazikira (Automatic domain syncing)
- Kukhazikitsa subdomain kuti zinthu zomwe zimapereka multisite
- Kukhazikitsa bwino ndi zinthu zomwe WP Engine imene pansi

## Zomwe Zilipo (Requirements) {#requirements}
Kufotokozera liliyenera kudzidzi m'mwayi wopangidwa pa WP Engine ndikuphatikiza API ya WP Engine yomwe imene pansi. Samathandizirani kufotokozera kwambiri ngati plugin ya WP Engine ikulimbikira ndipo imapereka bwino.

Komabe, ngati mukuwoneka kuti mukufuna kukhazikitsa liliye m'mwayi wopangidwa, mungayesulire malo omwe muli ndi constant ili m'file yanu ya `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Maledwe yomwe imene yomwe yenera
// CHONJE
define('WPE_API', 'your_api_key'); // Maledwe ena
```

## Mafunso ya Kukhazikitsa (Setup Instructions) {#setup-instructions}

### 1. Kuwonetsa Plugin ya WP Engine {#1-verify-wp-engine-plugin}

Ngati mukuwoneka kuti mukufotokozera pa WP Engine, plugin ya WP Engine imene pansi ndikuphatikiza. Onjeza kuti:

1. Plugin ya WP Engine ikulimbikira
2. File `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` limene

### 2. Kukhazikitsa Kufotokozera (Enable the Integration) {#2-enable-the-integration}

1. M'admin ya WordPress yanu, ndi liyenda ku Ultimate Multisite > Settings
2. Liyenda ku tab ya "Domain Mapping"
3. Liyenda pansi kuti "Host Integrations"
4. Kukhazikitsa integration ya WP Engine
5. Liyenda ku "Save Changes"

## Kodi Imene Imene? (How It Works) {#how-it-works}

### Kupanga Domain Wopangidwa (Domain Syncing) {#domain-syncing}

Pamene domain imapereka m'Ultimate Multisite:

1. Integration imapereka API ya WP Engine kuti ipereke domain iwo ku installation yanu ya WP Engine
2. WP Engine imapereka kupanga domain ndi sertifika ya SSL
3. Pamene kupanga domain wopangidwa kukhazikitsidwa, integration imapereka domain iwo ku WP Engine

### Kukhazikitsa Subdomain (Subdomain Support) {#subdomain-support}

Poyamba pa kukhala multisite pa subdomain:

1. Kukhala kuli kuwamba kuWP Engine pamene site mpaka muli wamukwera.
2. WP Engine ulongera kukwamba pa subdomain.
3. Pamene site mpaka, kukhala kuli kuwamba pa subdomain kuWP Engine.

## Zikomo Zomwamba (Important Notes) {#important-notes}

### Wildcard Domains {#wildcard-domains}

Pamene muli ndi multisite pa subdomain, kumaliza kuti muli ndi chidziwitso ndi WP Engine kuti muomba wildcard domain configuration. Izi zimukuwe kukhala zonse zosonyeza kuwamba pamene muli ndi kuyesa imodzi m'maka.

### SSL Certificates {#ssl-certificates}

WP Engine ulongera kukwamba ndikukula SSL certificate kwa zonse za domains zomwe muli wamukwera m'maka. Samukufuna kukhala ndi zowonjezera.

## Kukhazikitsa Masulira (Troubleshooting) {#troubleshooting}

### Matundu pa API Connection {#api-connection-issues}
- Kodi mwagwiritsa ntchito plugin ya WP Engine ndipo imaperekedwa bwino?
- Ngati muli wamukwera key ya API m'maka, kukhala ndi kuyesa kuti ndi yomwe yomwe.
- Kukhala ndi chidziwitso cha WP Engine ngati muli ndi mavuto pa API.

### Domain Sakhulupirika {#domain-not-added}
- Kodi mwagwira ntchito logs za Ultimate Multisite kuti muli ndi maithawi a mavuto?
- Kodi kukhala kuti domain si yomwe wamukwera kuWP Engine?
- Kukhala kuti plan ya WP Engine yanu imaperekera anthu adziwika pa domains zomwe muli wamukwera.

### Mavuto pa Subdomain {#subdomain-issues}
- Ngati subdomains si yomwe yomwe, kukhala ndi chidziwitso cha WP Engine kuti muomba wildcard domain configuration.
- Kodi DNS settings yanu imaperekedwa bwino kwa main domain ndi subdomains?
