---
title: Integracija WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integracija z WPMU DEV

## Pregled {#overview}
WPMU DEV je celovita WordPress platforma, ki ponuja hosting, pluginove in storitve za WordPress spletne strani. Ta integracija omogoča avtomatizirano sinhronizacijo domen in upravljanje SSL sertifikatov med Ultimate Multisite in WPMU DEV hostingom.

## Funkcionalnosti {#features}
- Avtomatizirana sinhronizacija domena
- Upravljanje SSL sertifikatov
- Razširjena preproba validacije SSL sertifikatov

## Zahtevi {#requirements}
Integracija avtomatsko odkrije, če hostite na WPMU DEV in uporablja vgrajen API. Če hostite na WPMU DEV ni potrebna dodatna konfiguracija.

Integracija preverja prisotnost konstante `WPMUDEV_HOSTING_SITE_ID`, ki se avtomatsko določi, ko hostite na WPMU DEV.

## Navodila za nastavitve {#setup-instructions}

### 1. Preverite hosting na WPMU DEV {#1-verify-wpmu-dev-hosting}

Če hostite na WPMU DEV, morajo biti potrebne konstante že določene. Preverite:

1. Da je konstanta `WPMUDEV_HOSTING_SITE_ID` določena v vašem okolju
2. Da imate aktivno članstvo na WPMU DEV z dostopom do API-ja

### 2. Omogočite integracijo {#2-enable-the-integration}

1. V admin panel WordPressa, gre do Ultimate Multisite > Settings (Nastavitve)
2. Navigirajte na tab "Domain Mapping" (Mapiranje domen).
3. Prejmovajte dolje do "Host Integrations" (Integracije hostinga).
4. Omogočite integracijo WPMU DEV.
5. Kliknite na "Save Changes" (Shrani spremembe).

## Kako to deluje {#how-it-works}

### Sinhronizacija domen {#domain-syncing}

Ko je domen mapiran v Ultimate Multisite:

1. Integracija uporablja WPMU DEV API, da doda domen k vaš račun za hosting.
2. Avtomatsko dodaja tudi verzijo z `www` predlogom domena.
3. WPMU DEV se ob skrbi za konfiguracijo domena in izdajo SSL sertifikatov.

### Upravljanje SSL sertifikatov {#ssl-certificate-management}

Integracija je konfigurirana tako, da poveča število poskusov za preverjanje SSL sertifikatov za hostiranje WPMU DEV, saj lahko izdajanje in namestitev SSL sertifikatov zato potrebujejo nekaj časa. Po podrazmerju bo sistem poskušal do 10 razčinkov za preverjanje SSL sertifikata, kar je več kot standardna števila od 5 poskusov.

## Pomembne opombe {#important-notes}

### Odstranitev domena {#domain-removal}

Trenutno WPMU DEV API ni namenjen odstranjevanju domen. Ko se mapiranje domena odstrani v Ultimate Multisite, bo domen ostal na vašem računu za hostiranje WPMU DEV. Če je potrebno, boste morali ga ručno odstraniti iz dashboarda za hostiranje WPMU DEV.

### Avtentična identifikacija API-ja (API Authentication) {#api-authentication}

Integracija uporablja ključ API od WPMU DEV, ki je shranjen v vašoj WordPress bazi podatkov kot opcija `wpmudev_apikey`. Ta je avtomatsko nastavljena, ko povezujete svoj spletni strani z WPMU DEV.

## Reševanje težav (Troubleshooting) {#troubleshooting}

### Problemi z povezavo API-ja {#api-connection-issues}
- Preverite, da je vaša spletna stran pravilno povezana z WPMU DEV
- Preverite, da je opcija `wpmudev_apikey` postavljena v bazi podatkov WordPressa
- Upe asegurarse, da je vaše članstvo na WPMU DEV aktivno

### Problemi s SSL sertifikati {#ssl-certificate-issues}
- WPMU DEV lahko potrebuje nekaj časa za izdajanje SSL sertifikatov (običajno 5-15 minut)
- Integracija je konfigurirana tako, da preverja do 10 razčinkov za SSL sertifikate
- Če se SSL sertifikati še vedno ne izidajo po več poskusih, se obratite podpori WPMU DEV

### Domen ni dodan {#domain-not-added}
- Preverite logove Ultimate Multisite na pojav sporočil o napaki
- Upe asegurarse, da domen ni že dodan v WPMU DEV
- Upe asegurarse, da vaš načrt za hostiranje WPMU DEV podpira število domen, ki ga dodajate
