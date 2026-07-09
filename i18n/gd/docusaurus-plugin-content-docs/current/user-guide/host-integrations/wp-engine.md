---
title: Còmhlaidachd WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integradh le WP Engine {#wp-engine-integration}

## Am ghràdhachd (Overview) {#overview}
WP Engine is platforma host WordPress a' chùlnaidh (premium managed hosting) a tha a lochdlaidh, a tha a' toirt sealladh fìor, sgìre, agus a tha a' chùlnaidh airson site-an WordPress. A' cheann seo a' bheachd a' ghràdhachd domain sinne (domain syncing) gu sgaidheachais air an t-seòrsa Ultimate Multisite agus WP Engine.

## Fìrinn (Features) {#features}
- Ghàdhachd domain sinne gu sgaidheachais
- Suidheachadh subdomain airson càiinntean multisite
- Ghàdhachd leatamach le sichean a tha aig WP Engine

## Cùsaipan (Requirements) {#requirements}
Tha an ghràdhachd a' chluin a' chluin gu sgaidheachais gu faicinn gu bia air WP Engine agus a' faicinn API WP Engine a tha a' chluin. Cha thuig a bhith agad de dhòigh a' chluin mar a tha an plugin WP Engine a' tòrraithe agus a' chluin gu fìor.

Mar sin, mar a tha thuig thuig a bhith a' chluin leat airson a' chluin gu mianach, is eadar thuig a bhith agad de dhòigh seo a' chluin anns an latha `wp-config.php` a tha thuig:

```php
define('WPE_APIKEY', 'your_api_key'); // Fhàilte a' chluin
// A'sgaidheach a' chluin
define('WPE_API', 'your_api_key'); // Am ghràdhachd eile
```

## Amasachadh (Setup Instructions) {#setup-instructions}

### 1. Bheann an Plugin WP Engine (Verify WP Engine Plugin) {#1-verify-wp-engine-plugin}

Mar a tha thuig a bhith a' chluin air WP Engine, feumaidh an plugin WP Engine a bhith already tòrraithe agus a' chluin. Bheann a' faicinn:

1. Tha an plugin WP Engine tòrraithe
2. Tha an latha `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` aig an t-seòrsa

### 2. Amasachadh an Ghàdhachd (Enable the Integration) {#2-enable-the-integration}

1. Iar a tha thuig a bhith a' chluin air WordPress, atharrach gu Ultimate Multisite > Settings
2. Atharrach gu "Domain Mapping" tab
3. Taisg gu "Host Integrations"
4. Amasich an WP Engine integration
5. Atharrach gu "Save Changes"

## Conaiche (How It Works) {#how-it-works}

### Ghàdhachd Domain Sinne (Domain Syncing) {#domain-syncing}

Nuair a tha domain sinne a' chluin anns an Ultimate Multisite:

1. A' cheann seo a' chluin a' sgrìobh an API WP Engine airson domain sinne a' chluin air an càiinntean WP Engine agad
2. Tha WP Engine a' chluin a' chluin a' chluin agus a' tòrraithe SSL certificate
3. Nuair a tha domain sinne a' chluin, salaidh an ghràdhachd a' cheann seo an domain a' chluin air WP Engine

 airson càiinnte multisite ar subdomain:

1. Aige an t-uisge a chlàradh na subdomain sin gu WP Engine nuair a chruthainn site ùr.
2. Tha WP Engine a th'ann an cur-aithreachas (configuration) de subdomain.
3. Nuair a bhlaidte an site, beidh an cur-aithreachas de subdomain a th'ann an t-uisge a thoilseadh de WP Engine.

## Notean ag iarraidh {#subdomain-support}

### Wildcard Domains {#important-notes}

Ar fhaisg multisite ar subdomain, tha e cudromach a bhith a' chlàradh le cuideachd WP Engine support airson cur-aithreachas domain wildcard. Tha seo a' tolaidh a th'ann gach subdomain a tha thuair a' chlàradh gu fhaisg, gu bheil thuair a' chlàradh a' tòiseadh a tha thuair a' chlàradh a' tòiseadh a tha thuair a' chlàradh.

### SSL Certificates {#wildcard-domains}

Tha WP Engine a th'ann an cur-aithreachas (issuance) agus an athchleachd (renewal) de SSL certificates airson càilean a bhlaidte gu fhaisg a tha thuair a' chlàradh. Tha seo a' tòiseadh a tha thuair a' chlàradh a tha thuair a' chlàradh.

## Taispeadáin (Troubleshooting) {#ssl-certificates}

### Crisbeidhean cuideachd API (API Connection Issues) {#troubleshooting}
- Bhaigh an t-uisge WP Engine a' chlàradh agus a' cur-aithreachas gu fhaisg.
- Má tha thuair a' chlàradh de API key a th'ann thu air a' chlàradh, leideann thu a' chlàradh gu sònraichte an t-uisge WP Engine support.

### Domain chaillte (Domain Not Added) {#api-connection-issues}
- Bhaigh na logais Ultimate Multisite a' chlàradh airson aon chruinneachadh de sgàth.
- Bhaigh thu air a' chlàradh gu sònraichte an t-uisge WP Engine support gu bheil an domain a' chlàradh air a' chlàradh de WP Engine.
- Tha e cudromach a bhith ag cur a' chlàradh gu fhaisg gu bheil an plan WP Engine a' tòiseadh an t-uisge de càilean a tha thuair a' chlàradh a bhlaidte.

### Crisbeidhean subdomain (Subdomain Issues) {#domain-not-added}
- Má tha subdomains a' tòiseadh, beidh thu air a' chlàradh le cuideachd WP Engine support airson cur-aithreachas domain wildcard.
- Bhaigh na cur-aithreachasan DNS a' cur a' chlàradh gu sònraichte airson an domain de dhìon agus subdomains.
