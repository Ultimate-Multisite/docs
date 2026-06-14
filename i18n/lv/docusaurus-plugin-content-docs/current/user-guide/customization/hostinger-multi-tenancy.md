---
title: Hostinger Multi-tenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 pievieno Hostinger multi-tenancy iespēju, kas ļauj hostēti domānos piedalīties soļojamajā īpašuma sniegšanā (sovereign tenant provisioning) kopā ar jau eksistētu Hostinger domānu mapiņa integrāciju.

Izmantojiet šo iespēju, ja tenantu domāni un izolētās tenantas infrastruktūras pārvaldīšana notiek caur Hostinger hPanel.

## Iestatījumu paziņojumi

1. Konfiguriet galveno Hostinger integrāciju sadaļā **Ultimate Multisite > Settings > Host Integrations**.
2. Apstipriniet, ka Hostinger API token var pārvaldīt mērķa domānu vai subdomānu.
3. Iespējiet Multi-Tenancy addon.
4. Konfiguriet tenantu izolācijas stratēģiju pirms tenantas publicēšanas.
5. Veiciet migrācijas apstiprinājuma veidniecību (migration verification workflow) pirms nosūtīšanas ražošanas trafiku tenantai.

Hostinger iespēja izmanto kopīgu Hostinger savienojumu hosta pusē operācijām. DNS joprojām jāpazīst pareizam Hostinger kontam, un hPanel kontu ierobežojumi joprojām piemēstams.

## Konkrētās iespējas izmaiņas

- Soļojami (sovereign) tenantas var būt creatas ar hosta atbalstu domānu operācijām.
- Identiskās mašīnas databāzes hostu stringi tiek normalizētas pirms apstiprinājuma veidniecības veikšanas.
- Hostinger pārvaldītie tenantas jāizmanto hPanel redzamajā databāzes hosta vērtībā, ja WordPress runtime nepieciešama vietējā pārslēgšanai (local override).
- SSO apmeklējumi atkarīgi no tenantas domānas, kas rezolvējas Hostinger hostētā tenantu.

## Hostinger tenantu problēmu likums

- Ja tenantas instalēšana neiztur, apstipriniet, ka domāns jau ir pievienots Hostinger kontam.
- Ja databāzes apstiprinājums neiztur, salīdzinājiet tenantas DB lietotāja vārdu, databāzes nosaukumu un hosta savienojuma ar hPanel.
- Ja **Visit (SSO)** neiztur, apstipriniet, ka DNS un SSL ir aktīvi tenantas domānam.
- Ja atslēgšana atstāj hosta resursus aizmugur, izņemiet jebkurus atlikušos databāzes, lietotājus vai failus no hPanel pēc rezerves apstiprināt.
