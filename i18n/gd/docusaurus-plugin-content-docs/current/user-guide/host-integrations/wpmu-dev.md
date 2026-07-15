---
title: Còmhlaidachd WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integration WPMU DEV

## Aims (Overview) {#overview}
WPMU DEV is platform a WordPress le fada a tha oferf hosting, plugin, agus seòl airson sitean WordPress. Tha an sin eadar-dhealaidh a' bheachd a' ginealach a' chàrach agus a' sgrùdadh certfeid SSL air a' chàrach (SSL certificate management) buntainneach air a' chàrach Ultimate Multisite agus hosting WPMU DEV.

## Feàinean (Features) {#features}
- Ginealach a' chàrach a' bheachd (Automatic domain syncing)
- Seòladh certfeid SSL (SSL certificate management)
- Comharrdasan sgrùdadh certfeid SSL a' leatamach (Extended SSL certificate verification attempts)

## Còmhraidhean (Requirements) {#requirements}
Tha an sin eadar-dhealaidh a' bheachd gu sgaidh gu tha thu a' chàrach air WPMU DEV agus a' uile API buntainneach. Tha seachdaidhean fhaighinn a' leatamach air a bhith a' chàrach air WPMU DEV.

Tha an sin eadar-dhealaidh a' faighinn air an constant `WPMUDEV_HOSTING_SITE_ID`, a tha a' bheachd gu tha thu a' chàrach air WPMU DEV. Tha an t-aithreachas (API) buntainneach a' leatamach.

## Còmhraidhean Seòlaidh (Setup Instructions) {#setup-instructions}

### 1. Aims a' Chàrach Air WPMU DEV (Verify WPMU DEV Hosting) {#1-verify-wpmu-dev-hosting}

Tha thu a' chàrach air WPMU DEV, tha an constantan sin a' bheachd gu tha thu a' chàrach. Comharrbhaidh seachdaidhean seo:

1. Tha an constant `WPMUDEV_HOSTING_SITE_ID` a' bheachd gu tha thu a' chàrach air an t-aithreachas (environment).
2. Tha thu deacairt air WPMU DEV le fhaisg air an API.

### 2. Aims a' Chàrach Air (Enable the Integration) {#2-enable-the-integration}

1. Iar a tha thu a' chàrach air WordPress admin, dearbhaind do Ultimate Multisite > Settings
2. Dearcich air tab "Domain Mapping"
3. Gach an t-aithreachas (scroll down) gu "Host Integrations"
4. Seachdaidh an sin eadar-dhealaidh WPMU DEV
5. Clic air "Save Changes"

## Conach a' Chàrach (How It Works) {#how-it-works}

### Ginealach a' Chàrach (Domain Syncing) {#domain-syncing}

Nuair a thig an t-aithreachas (domain) air Ultimate Multisite:

1. Tha an sin eadar-dhealaidh a' leat a' chàrach WPMU DEV API a' chlàradh an t-aithreachas air a' chàrach hosting.
2. Tha an sin a' chlàradh an www version air a' bheachd gu tha thu a' chàrach.
3. Tha WPMU DEV a' leat a' chàrach agus a' sgrùdadh certfeid SSL.

### Seòladh Certfeid SSL (SSL Certificate Management) {#ssl-certificate-management}

Tha sinneadh a' chluasach a' curtach a' cridheachadh airson a' leabhar WordPress.

Tha an t-uisge a' cur tachart airson a' leabhar WPMU DEV, gu bheil e a' cridheachadh airson a' leabhar SSL (SSL certificate verification attempts) a' tairgseachadh air a' leabhar hosting. Is e sin air a' chùrsain, is e a' cur tachart a' tairgseachadh gu leathair 10 lần airson a' leabhar SSL, mar a tha e a' tairgseachadh gu leathair 5 a' chùrsain a' chluasach.

## Notean Donnach {#important-notes}

### Muibheachadh Dènamh (Domain Removal) {#domain-removal}

Tha an API de WPMU DEV a' cur tachart airson am fhaighinn a' leabhar (domains). Nuair a tharghainn a' leabhar (domain mapping) a' curtach mar a tha e a' chluasach, gu bheil an leabhar a' tairgseachadh anns an àite hosting de WPMU DEV. Thuairidh thu a' faighinn a' cur tachart air a' curtach mar a tha e a' chluasach (domain mapping) a' cur tachart air a' dashboard de WPMU DEV mar a tha e a' tairgseachadh.

### Aithreachadh API (API Authentication) {#api-authentication}

Tha an uisge a' cur tachart airson a' leabhar a' faighinn (API key) a' curtach anns a' database de WordPress, gu bheil e a' cur tachart air `wpmudev_apikey`. Tha e a' cur tachart a' curtach gu leathair gu sgaidh nuair a tharghainn a' site do WPMU DEV.

## Tairgseachadh (Troubleshooting) {#troubleshooting}

### Cùrsain API (API Connection Issues) {#api-connection-issues}
- Bhaigh air a' chluasadh gu bheil an site agad cur tachart gu sgaidh do WPMU DEV.
- Comharr thu gu bheil an option `wpmudev_apikey` a' cur tachart anns a' database de WordPress.
- Comharr thu gu bheil an fhaighinn (membership) de WPMU DEV a' curtach.

### Cùrsain Leabhar SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- Bha a' chluasadh air a' leabhar SSL a' cur tachart airson a' leabhar SSL (a tha e a' tairgseachadh gu leathair 5-15 minut).
- Tha an uisge a' cur tachart a' cur tachart gu leathair 10 lần airson a' leabhar SSL.
- Mar a tha a' leabhar SSL a' curtach air a' cur tachart gu leathair gu sgaidh, comharr do chluasadh de WPMU DEV.

### Leabhar Cha Bhaidh a Chluasach (Domain Not Added) {#domain-not-added}
- Comharr na logaiche de Ultimate Multisite airson amh a' chluasadh air an t-uisge.
- Comharr gu bheil an leabhar a' cur tachart air WPMU DEV air a' chluasadh.
- Comharr gu bheil an plan hosting de WPMU DEV a' cur tachart airson na nàraiche (domains) a tha thu a' cur tachart.
