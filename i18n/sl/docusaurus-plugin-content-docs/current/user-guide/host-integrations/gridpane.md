---
title: Integracija GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integracija z GridPane {#gridpane-integration}

## Pregled {#overview}
GridPane je specializiran kontrolni panel za hostiranje WordPress-a, zgrajen za profesionalce v WordPressu. Ta integracija omogoča avtomatizirano sinhronizacijo domen in upravljanje SSL sertifikatov med Ultimate Multisite in GridPane.

## Funkcionalnosti {#features}
- Avtomatizirana sinhronizacija domen
- Upravljanje SSL sertifikatov
- Avtomatizirana konfiguracija konstante SUNRISE

## Zahtevi {#requirements}
Slede konstante morate definirati v svojem datoteci `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'vaša_api_ključa');
define('WU_GRIDPANE_SERVER_ID', 'vaš_server_id');
define('WU_GRIDPANE_APP_ID', 'vaš_site_id');
```

## Instrukcije za nastavitve {#setup-instructions}

### 1. Dobite svoje GridPane API podatke {#1-get-your-gridpane-api-credentials}

1. Pri logiranje na svoj GridPane dashboard
2. Pojdite na "Settings" > "API"
3. Generirajte API ključ, če ga še ni
4. Kopirajte svoj API ključ

### 2. Dobite ID serverja in spletnega mesta {#2-get-your-server-and-site-ids}

1. Na svojem GridPane dashboardu pojdi na "Servers"
2. Izberite server, kjer je hostiran vaš WordPress multisite
3. Opazite Server ID (vidljiv v URL-ju ali na strani zvestav servera)
4. Pojdite na "Sites" in izberite vaše WordPress spletno mesto
5. Opazite Site ID (vidljiv v URL-ju ali na strani zvestav spletnega mesta)

### 3. Dodajte konstante v wp-config.php {#3-add-constants-to-wp-configphp}

Dodajte slede konstante v svojo datoteko `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'vaša_api_ključa');
define('WU_GRIDPANE_SERVER_ID', 'vaš_server_id');
define('WU_GRIDPANE_APP_ID', 'vaš_site_id');
```

### 4. Omogočite integracijo {#4-enable-the-integration}

1. Na svojem WordPress admin panelu pojdi na Ultimate Multisite > Settings
2. Navigirajte do tabe "Domain Mapping"
3. Prejmovajte dolje do "Host Integrations"
4. Omogočite integracijo GridPane
5. Kliknite na "Save Changes"

## Kako to deluje {#how-it-works}

Ko je domen mapiran v Ultimate Multisite:

1. Integracija pošlje zahtevo API-ju GridPane za dodajanje domena na vašo spletno stran.
2. GridPane sam upravlja z uporabo SSL sertifikatov.
3. Ko se odpravi mapiranje domena, integracija ga odstrani iz GridPane.

Integracija tudi sam upravlja konstanto SUNRISE v vašem fajlu wp-config.php, ki je potrebna za pravilno delovanje mapiranja domen.

## Upravljanje konstante SUNRISE {#sunrise-constant-management}

Edna edinstvena značilnost integracije GridPane je to, da ona sam avtomatsko vrne konstanto SUNRISE v wp-config.php, da bi preprečila konflikte z lastnim sistemom mapiranja domen GridPane. To zagotavlja, da oba sistema lahko delujejo skupaj brez težav.

## Reševanje težav (Troubleshooting) {#troubleshooting}

### Problemi z povezavo API-ja {#api-connection-issues}
- Preverite da je vaš API ključ pravilno nastavljen
- Preverite da sta vaše server in site ID pravilna
- Uporabite se, da se upeš, da ima vaš račun na GridPane potrebne dovoljenja

### Problemi s SSL sertifikati {#ssl-certificate-issues}
- GridPane lahko potrebuje nekaj časa za izdajo SSL sertifikatov
- Preverite da so vaši domeni pravilno usmerjeni na IP naslov vaše serverja
- Preverite nastavitve SSL v GridPane za vašo stran

### Domen ni dodan {#domain-not-added}
- Preverite loge Ultimate Multisite na pojav kakršnih koli sporočil o napaki
- Upeš se, da domena ni že dodana na GridPane
- Preverite, da so DNS zapisi vaše domene pravilno konfigurirani
