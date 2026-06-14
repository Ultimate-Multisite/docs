---
title: Hostinger Multi-tenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 lisab Hostinger multi-tenancy võimalust, mis võimaldab hoastatud domeene osaleda suvereensele tenantide provisjonimisega samuti olemasoleva Hostinger domeen-mappimise integreerimise kõrval.

Kasutage seda võimalust, kui tenantidomeene ja eraldatud tenanti infrastruktuur halbitakse Hostinger hPanel abil.

## Seadistamise märkused

1. Konfigureerige pealiku Hostinger integratsioon **Ultimate Multisite > Settings > Host Integrations** all.
2. Kontrollige, kas Hostinger API token suudab juhtida siamele vastavat domeeni või subdomaini.
3. Lülitage Multi-Tenancy addon sisse.
4. Konfigureerige tenantide eraldamise strateegia enne tenanti avaldamist.
5. Käige migratsiooni kinnituse töövoogut enne tootlikud trafikid tenantile saatmist.

Hostinger võimalus kasutab jagatud Hostinger ühendust hoostaipide operatsioonide jaoks. DNS peab ikka veel viidama õigekas Hostingeri kontole, ja hPanel konti piirangud on endiselt kehtuda.

## Konkreetsete muutuste kirjeldused

- Suvereenseid tenante saab luua hoostaipide teada võtavates domeenoperatsioonidega.
- Samas masina oleva database host stringid normaliseeruvad enne kinnituse antmist.
- Hostingeri poolt halbitud tenantid peaks kasutama hPanelis näidatud database host väärtust, välja arvatud kui WordPressi runtime nõuab kohalikku ületamist.
- SSO külastused sõltuvad sellest, et tenant domeen resolube Hostingeril hoastatud tenantile.

## Hostinger tenantide probleemide lahendamine

- Kui tenanti installimine ebaõnnestub, kontrollige, kas domeen on juba seotud Hostinger kontole.
- Kui database kinnitus ebaõnnestub, võrdage tenanti DB kasutaja, database nimi ja host binding hPaneliga.
- Kui **Visit (SSO)** ebaõnnestub, kinnitage DNS ja SSL aktiivsed tenant domeenile.
- Kui lahtimisprotsess jättab hoostaipide ressurssid ümber, eemaldage kõik jäävad database, kasutajad või folderit hPanelist pärast varjenduste kinnitamist.
