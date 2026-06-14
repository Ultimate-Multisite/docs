---
title: Sovereīno migrācijas veidrojums
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Sovereign migrācijas veidota darbības sekva

Ultimate Multisite 1.2.0 dod migrācijas apstiprinājuma vārti (verification gates) pārejam standartsubsaites infrastruktūrā, kas ir sovereigņa īpašniecības sistēmā.

## Pirms sākat

Pārbaudiet, ka jums ir:

- Aktuālā atsauksmes kopējai vietnei (source site).
- Multi-Tenancy addon aktīvs.
- Gada saimniecības databasē (destination tenant database), faila sistēmas galvenajā virsrakstā (filesystem root) un domāinājumā (domain) gatava.
- Databāzes hosta savienojums, kas atbilst gadu vietai (destination environment).
- Pieejamība veikt WP-CLI komandas tīklam (network).

## Ieteicamais darbības sekva

1. Sagatavojiet saimniecības databāzi un faila sistēmu vietai.
2. Reģistrējiet vai atjauninājiet saimniecības izolācijas iestatījumus (tenant isolation settings).
3. Veiciet saimniecības migrāciju (tenant migration).
4. Izveidi vai apstipriniet saimniecības lietotājus (tenant users).
5. Izpūsti asinsmigrācijas darbu sarakstu (async migration jobs queue).
6. Veiciet sovereigņa migrācijas apstiprinājumu (sovereign migration verification).
7. Apmeklējiet vietni ar SSO (Single Sign-On).
8. Pārslēdziet DNS vai routingu tikai pēc tam, kad apstiprinājums ir veiksmīgi.

## Apstiprinājuma vārti

Apstiprinājuma darbības sekva pārbauda migrāciju vairākās stāvokļos:

- Vai saimniecības skema (tenant schema) ir pieejama un var tikt rakstīta saimniecības databāzes rakstītāju (database writer).
- Vai konfiguriētais databāzes hosta ir veiksmīgi atļautie piekļuvi (grants).
- Vai saimniecības lietotāji ir pieejami un atbilst gaidīto sovereigņa instalācijas lietotāju skaitli.
- Vai asinsmigrācijas saraksta izpūst ir veiksmīga.
- Vai senā tīkla puses (legacy network-side data paths) nav nepieciešamas sovereigņa vietai.

Lietojiet apstiprinājuma neuzstādījumus kā pretrunces iecelšanai. Nolaiciet atklāto databāzes, lietotāju, saraksta vai routings problēmu un veiciet apstiprinājumu vēlreiz pirms vietni ievieciet klientiem.

## Pirmais produktīvais apmeklējums

Pēc tam, kad apstiprinājums ir veiksmīgi, izmantojiet **Apmeklēt (SSO)** vietnes pārvaldības ekrāna no **Visit (SSO)** pirmo administratīvo apmeklējuma laikā. Tas apstiprina saimniecības routingu, SSO tokenu apstrādi, oriģinālās punktu fijošanu (origin pinning) un lietotāju izveidi vietnē (tenant-side user provisioning) vienā kontrolētā solījumā.
