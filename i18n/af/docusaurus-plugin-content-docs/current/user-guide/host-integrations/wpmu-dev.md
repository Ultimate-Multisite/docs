---
title: WPMU DEV Integrasie
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV Integrasie {#wpmu-dev-integration}

## Oorsig {#overview}
WPMU DEV is 'n omvattende WordPress-platform wat hosting, plugins en dienste vir WordPress-webwerwe bied. Hierdie integrasie stel outomatiese domein-sinkronisering en SSL-sertifikaatbestuur moontlik tussen Ultimate Multisite en WPMU DEV hosting.

## Eienskappe {#features}
- Outomatiese domein-sinkronisering
- SSL-sertifikaatbestuur
- Uitgebreide SSL-sertifikaatverifikasiepogings

## Vereistes {#requirements}
Die integrasie speur outomaties of jy op WPMU DEV host en gebruik die ingeboude API. As jy op WPMU DEV host, is geen bykomende konfigurasie nodig nie.

Die integrasie kyk of die `WPMUDEV_HOSTING_SITE_ID` konstante teenwoordig is, wat outomaties gedefinieer word wanneer jy op WPMU DEV host.

## Opstel Instruksies {#setup-instructions}

### 1. Verifieer WPMU DEV Hosting {#1-verify-wpmu-dev-hosting}

As jy op WPMU DEV host, behoort die nodige konstantes reeds gedefinieer te wees. Verifieer dat:

1. Die `WPMUDEV_HOSTING_SITE_ID` konstante in jou omgewing gedefinieer is
2. Jy 'n aktiewe WPMU DEV lidmaatskap met API-toegang het

### 2. Aktiveer die Integrasie {#2-enable-the-integration}

1. Gaan in jou WordPress-administrasie na Ultimate Multisite > Settings
2. Navigeer na die "Domain Mapping" tab
3. Skrol na "Host Integrations"
4. Aktiveer die WPMU DEV integrasie
5. Klik op "Save Changes"

## Hoe Dit Werk {#how-it-works}

### Domein-Sinkronisering {#domain-syncing}

Wanneer 'n domein in Ultimate Multisite gekoppel word:

1. Gebruik die integrasie die WPMU DEV API om die domein by jou hostingrekening by te voeg
2. Dit voeg ook outomaties die www-weergawe van die domein by
3. WPMU DEV hanteer die domein-konfigurasie en die uitreiking van die SSL-sertifikaat

### SSL-Sertifikaatbestuur {#ssl-certificate-management}

Die integrasie is gekonfigureer om die aantal SSL-sertifikaatverifikasiepogings vir WPMU DEV hosting te verhoog, aangesien dit 'n ruk kan neem vir SSL-sertifikaat se uitreiking en installering. Standaard sal dit tot 10 keer probeer vir SSL-sertifikaatverifikasie, vergeleke met die standaard 5 pogings.

## Belangrike Notas {#important-notes}

### Domeinverwydering {#domain-removal}

Die WPMU DEV API bied tans nie 'n manier om domeine te verwyder nie. Wanneer 'n domein-koppeling in Ultimate Multisite verwyder word, sal die domein in jou WPMU DEV hostingrekening bly. Jy sal dit handmatig van die WPMU DEV hosting-dashboard moet verwyder indien nodig.

### API-Werking {#api-authentication}

Die integrasie gebruik die WPMU DEV API-sleutel wat in jou WordPress-database gestoor word as die `wpmudev_apikey` opsie. Dit word outomaties opgestel wanneer jy jou webwerf aan WPMU DEV koppel.

## Probleemoplossing {#troubleshooting}

### API-Verbindingsprobleme {#api-connection-issues}
- Verifieer dat jou webwerf korrek aan WPMU DEV gekoppel is
- Kontroleer of die `wpmudev_apikey` opsie in jou WordPress-database gestel is
- Maak seker dat jou WPMU DEV lidmaatskap aktief is

### SSL-Sertifikaatprobleme {#ssl-certificate-issues}
- WPMU DEV kan 'n ruk neem om SSL-sertifikaat te gee (gewoonlik 5-15 minute)
- Die integrasie is gekonfigureer om tot 10 keer vir SSL-sertifikaat te kyk
- Indien SSL-sertifikaat steeds nie uitgereik word na verskeie pogings nie, kontak WPMU DEV ondersteuning

### Domein Nie Bygevoeg Nie {#domain-not-added}
- Kontroleer die Ultimate Multisite logs vir enige foutboodskappe
- Verifieer dat die domein nie reeds by WPMU DEV bygevoeg is nie
- Maak seker dat jou WPMU DEV hostingplan die aantal domeine ondersteun wat jy byvoeg
