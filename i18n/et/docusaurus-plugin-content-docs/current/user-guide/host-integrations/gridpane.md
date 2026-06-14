---
title: GridPane integreerimine
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integreerimine

## Üldine ülevaade
GridPane on spetsialise WordPress hoitja kontrollpaneel, mille on loodud tõsise WordPress professionaalide jaoks. See integreerimine võimaldab automaatselt domeenid synkronida ja SSL-tüüdorite haldamist Ultimate Multisite'i ja GridPane vahel.

## Funktsioonid
- Automootne domeenide synkronimine
- SSL-tüüdorite haldamine
- SUNRISE konstantsi automaatne konfiguratsioon

## nõuded
Järgnev konstantsid tuleb definitsiooniks teie `wp-config.php` failis:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## Seadistamise juhised

### 1. Pide oma GridPane API-kujutused (Credentials)

1. Logi sisse oma GridPane dashboardile
2. Minema "Settings" > "API" menüüpunktile
3. Loo API-kuju, kui teil selle pole juba
4. Kopya oma API-kuju

### 2. Pide oma serveri ja veebisaite ID-d (IDs)

1. GridPane dashboardil minema "Servers" sektsioonile
2. Valige server, kus teie WordPress multisite on hoitu
3. Kirjuta Server ID (nähtav URL-is või serveri üksikasjaliste lehekülje all)
4. Minema "Sites" ja valige oma WordPress veebisaite
5. Kirjuta Site ID (nähtav URL-is või veebisaite üksikasjaliste lehekülje all)

### 3. Lisage konstantsid `wp-config.php`-le

Lisage järgmised konstantsid teie `wp-config.php` failile:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Lülitage integreerimine sisse

1. WordPress administratiivis osas minema Ultimate Multisite > Settings sektsioonile
2. Minema "Domain Mapping" tabile
3. Skroolipilt alla jõuda "Host Integrations" (Hoitajate integreerimised) otsa
4. Lülitage GridPane-integreerimine sisse
5. Klõpsake "Save Changes" (Muutuste salvestamine)

## Kuidas see toimib

Kui domeen on Ultimate Multisite'is mappitud:

1. Integreer lähe ühtlustus küsimuse GridPane'i APIle, et lisaks domein teie veebile.
2. GridPane haldab automaatselt SSL sertifikaatide valmistamisel.
3. Kui domeeni mappimist eemaldatakse, eemaldab integreerimine domeeni GridPaneist.

Integreerimine haldab ka automaatselt SUNRISE konstantsi teie wp-config.php failis, mis on vajalik domeenmaappimise õiguse jaoks.

## SUNRISE konstantsi haldamine

GridPane integreerimise ainulaadne funktsioon on see, et see tagab, et SUNRISE konstantsi wp-config.php failis automaatselt tagasi käivitakse, et vältida konfliktid GridPane oma domeenmaappimissüsteemiga. See tagab, et mõlemad süsteemid saavad koos töötada ilma probleemide korral.

## Ühenduse probleemide lahendamine

### API ühenduse probleemid
- Kontrollige, kas teie API key on õige
- Kontrollige, kas teie serveri ja veebile ID on õiged
- Veenduge, et teie GridPane konto on vajalikud lubanded
