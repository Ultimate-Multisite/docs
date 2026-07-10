---
title: Ho Hlahlobo le WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Le Tšhobo le WPMU DEV Integration {#wpmu-dev-integration}

## Le Litlhahlo (Overview) {#overview}
WPMU DEV ke platforme ya WordPress e le fetoga le fela, e e nthela ho numala (hosting), plugins, le litlhoko tsa sites tsa WordPress. Ho dira integration ena e ntho ho sebopeho sa domain le ho dula (SSL certificate management) ho tloha ho Ultimate Multisite le hosting la WPMU DEV.

## Litlhoko (Features) {#features}
- Ho numala domain automatically
- Ho dula SSL certificate
- Ho batla ka tsela epeletso ya SSL certificate

## Litlhoko (Requirements) {#requirements}
Integration ena e bona ka sebopeho sa ho host la WPMU DEV le e u bala API e e ntho. Ha u hloka boikanyetso le ho setseba ha u host la WPMU DEV.

Integration ena e batla ho ba le constant ya `WPMUDEV_HOSTING_SITE_ID`, e e ntho e e fana ka sebopeho sa ho host la WPMU DEV.

## Litlhoko tsa Ho Setseba (Setup Instructions) {#setup-instructions}

### 1. Ho Baala Sebopeho sa WPMU DEV {#1-verify-wpmu-dev-hosting}

Ha u host la WPMU DEV, constants e ntsha e ntse ba setseba. Re bona hore:

1. Constant ya `WPMUDEV_HOSTING_SITE_ID` e ntho ka sebopeho sa hau
2. U na le membership e fetoga ya WPMU DEV le ho ba le access ya API

### 2. Ho Baala Integration E {#2-enable-the-integration}

1. Le admin ya WordPress ya hau, u laela Ultimate Multisite > Settings
2. Laela tab ya "Domain Mapping" (Ho numala domain)
3. Laela ka sebopeho sa "Host Integrations" (Integration e e ntho)
4. Baala integration ya WPMU DEV
5. Leela "Save Changes" (Ho baala litlhoko)

## E Ntšha Kae E Baala (How It Works) {#how-it-works}

### Ho Numala Domain (Domain Syncing) {#domain-syncing}

Ha domain e fetoga ka Ultimate Multisite:

1. Integration ena e u rata API ya WPMU DEV ho feta domain ya hau ka account ya hosting
2. E ntho e numala www version ya domain automatically
3. WPMU DEV e ba le ho setseba tsa domain le ho fana ka SSL certificate

### Ho Dula SSL Certificate (SSL Certificate Management) {#ssl-certificate-management}

Ho fana a tšepo:

Kea leboho ho fana ka ho tsamaea sebope sa tšepo sa SSL certificate ho lona la hostinġa la WPMU DEV, ka ho ntlha ka ntlha le ntlha ka ntlha. Ka tsela ea ba le bohloko, ka tsamaea ho fana ka 10 madi le ntlha ho tšepo sa SSL certificate, le sebope sa ba le bohloko ke 5.

## Litsoalo le Bohloko {#important-notes}

### Ho Leka Domain (Domain Removal) {#domain-removal}

Ka leboho, WPMU DEV API ha e le na dits'aetso ea ho lekanya domain. Ha u lekanya mapping ea domain ka Ultimate Multisite, domain e tla tsamaea ka ntle ka tšepo ea hau ea hostinġa la WPMU DEV. Ha u hloka, o tla ba le bohloko ho e lekanya ka manu ka dashboard ea hostinġa la WPMU DEV.

### Ho Tsamaea API (API Authentication) {#api-authentication}

Ho tsamaea ha sebope sa tšepo sa SSL certificate se sebelisa key ea WPMU DEV API seo se fihle nang le database ea hau ea WordPress ehlopha ka option ea `wpmudev_apikey`. Sena se fana ka ho setsoe ka ho ntsa site ea hau le WPMU DEV.

## Ho Leka Boitsoalo (Troubleshooting) {#troubleshooting}

### Moruo oa Ho Tsamaea API {#api-connection-issues}
- Re tšepo hore site ea hau e tsamaea ka ntle ka WPMU DEV
- Re re tšepo hore option ea `wpmudev_apikey` e setsoe ka database ea hau ea WordPress
- Re re tšepo hore membership ea hau ea WPMU DEV e le lebohloko

### Moruo oa Sebope sa SSL Certificate {#ssl-certificate-issues}
- WPMU DEV e ka na ho tsamaea ka ntlha ho fana ka SSL certificates (ka u leba 5-15 madi)
- Ho tsamaea ha sebope sa tšepo sa SSL certificate se sebelisa ho tsamaea ka ntlha ho fana ka 10 madi
- Ha SSL certificates a re tsamaea ka ntlha ka ntlha ka ntlha, u leba liqobo le WPMU DEV support

### Domain E Lang le Ho Tsamaea (Domain Not Added) {#domain-not-added}
- Re re tšepo logs ea Ultimate Multisite ho leboho le madi ea lona
- Re re tšepo hore domain e ne e setsoe ka WPMU DEV
- Re re tšepo hore plan ea hau ea hostinġa la WPMU DEV e tsamaea le madi ea domains a u leba
