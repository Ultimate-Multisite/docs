---
title: GridPane integracija
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integracija

## Vaizda
GridPane yra specializuotas WordPress hostavimo kontrolinio panelis, buvęs sukurtas profesiniams WordPress specialistams. Ši integracija leidžia automatiniai domenų sinigai ir SSL sertifikatų valdymas tarp Ultimate Multisite ir GridPane.

## Funkcijos
- Automatinis domenų sinigas
- SSL sertifikatų valdymas
- SUNRISE konstanto automatinis konfigūracija

## Reikalavimai
Šie konstanta turi būti nurodytos jūsų `wp-config.php` failu:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'jūsų_api_kiltis');
define('WU_GRIDPANE_SERVER_ID', 'jūsų_servero_id');
define('WU_GRIDPANE_APP_ID', 'jūsų_sito_id');
```

## Įdiegimo instrukcijos

### 1. Gaukite savo GridPane API kreditius

1. Prisijunkite prie jūsų GridPane dashboardo
2. Eikite į "Settings" > "API" (Nustatymai > API)
3. Sukurkite API kiltį, jei turite ją naujienos
4. Kopijuokite savo API kitį

### 2. Gaukite savo serverio ir vietos ID

1. Jūsų GridPane dashboardoje eikite į "Servers" (Serveriai)
2. Pasirinkite serverį, kur hostuojama jūsų WordPress multisite
3. Nurodykite Serverio ID (prieinamas URL adresui ar serverio detalių puslapyje)
4. Eikite į "Sites" (Sito) ir pasirinkite savo WordPress sutartį
5. Nurodykite Sito ID (prieinamas URL adresui ar sito detalių puslapyje)

### 3. Įdėkite konstantas į wp-config.php

Įdėkite šiuos konstantas į jūsų `wp-config.php` failą:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'jūsų_api_kiltis');
define('WU_GRIDPANE_SERVER_ID', 'jūsų_servero_id');
define('WU_GRIDPANE_APP_ID', 'jūsų_sito_id');
```

### 4. Įjunkite integraciją

1. Jūsų WordPress admin panel'yje eikite į Ultimate Multisite > Settings (Nustatymai)
2. Eikite į "Domain Mapping" (Domenų netyvimo) vėtybą
3. Pasirinkite "Host Integrations" (Host integracijos)
4. Įjunkite GridPane integraciją
5. Spauskite "Save Changes" (Išsaugoti pakeitimus)

## Kaip tai veikia

Kai domenų netyvimas yra Ultimate Multisite, ...

1. Integracija siunka (integration) siunka prašimo į GridPane API, kad pridėtų domeną prie jūsų svetainės.
2. GridPane automatiškai tvarko SSL sertifikato pateikimą.
3. Kai pašalinate domenų mapavimą, integracija pašalina domeną iš GridPane.

Integracija taip pat automatiškai tvarko SUNRISE konstanta jūsų wp-config.php fail'e, kuri yra reikalinga domainų mapavimui tinkamai veikti.

## SUNRISE konstantos valdymas

Unikalus savybė GridPane integracijoje yra tai, kad ji automatiškai atveikia SUNRISE konstanta wp-config.php fail'e, kad būtų išvengta konfliktų su GridPane savo domainų mapavimo sistema. Tai užtikrina, kad abiegi sistemai galėtų veikti kartu be problemų.

## Probleminiai situacijos tvarkymas (Troubleshooting)

### API jungimo problemas
- Patikrinkite, ar jūsų API klaidų raktas yra teisingas
- Patikrinkite, ar jūsų serverio ir svetainės ID teisingi
- Užtikrinkite, kad jūsų GridPane paskyrai yra reikalinga įnašinimo (permissions)

### SSL sertifikato problemas
- GridPane gali priimti laiko išdavimo SSL sertifikatos
- Patikrinkite, ar jūsų domenai tinkamai nurodojasi jūsų serverio IP adresui
- Patikrinkite jūsų svetainės GridPane SSL nustatymus

### Domenas nepridėtas
- Patikrinkite Ultimate Multisite logus kokių nors klaidos pranešimų
- Patikrinkite, ar domenas jau nėra pridėtas į GridPane
- Užtikrinkite, kad jūsų domeno DNS registrai yra tinkamai nustatyti
