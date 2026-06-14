---
title: Integracija su Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integracija su Clostem

## Vaizda
Closte yra mygtas WordPress hostinga platforma, buvusiama Google Cloud infrastruktūros base. Ši integracija leidžia automatiniai domenų sinigrinimą ir SSL sertifikatų valdymą tarp Ultimate Multisite ir Closte.

## Funkcijos
- Automatinis domenų sinigrinimas
- SSL sertifikatų valdymas
- Wildcard domenų palaikymas
- Jei naudojate Clostę, nenaudojote jokių konfiguracijos

## Reikalavimai
Jei naudojate Clostę, šį konstanta turite nustatyti savo `wp-config.php` failinde:

```php
define('CLOSTE_CLIENT_API_KEY', 'jūsų_api_kiltis');
```

Ši konstanta dažnai jau yra nustatyta, jei hostuojate Clostėje.

## Įdiegimo instrukcijos

### 1. Patikrinkite savo Closte API kiltį

Jei hostuojate Clostėje, konstanta `CLOSTE_CLIENT_API_KEY` turėtų būti jau nustatyta jūsų `wp-config.php` failinde. Jūs galite tai patikrinti peržiūrėjus savo `wp-config.php` failą.

### 2. Įjunkite integraciją

1. Visiškai įdiegto WordPress administracijoje eikite į Ultimate Multisite > Settings
2. Navig uokite į tvarką "Domain Mapping" (Domenų netyrinimas)
3. Paslankykite iki "Host Integrations" (Host integracijos)
4. Įjunkite Closte integraciją
5. Spauskite "Save Changes" (Išsaugoti pakeitimus)

## Kaip tai veikia

Kai domenų netyrinimas vyksta Ultimate Multisite:

1. Integracija siunčia prašymą į Clostės API, kad pridėtų domeną prie jūsų programos
2. Closte automatiškai atsakingai tvarko SSL sertifikatų pateikimą
3. Kai pašalinate domenų netyrinimą, integracija pašalina domeną iš Clostės

Integracija taip pat veikia su nustatymu DNS patikrinimo intervalui Ultimate Multisite, leidžiant jums nustatyti, kiek kartų sistema patikrins DNS propagavimą ir SSL sertifikatų pateikimą.

Domeno registravimo įrašas

Ši integracija užtikrina, kad pateikiama naują svetainę arba duplikuojame ją, automatiškai sukuriamas domenų registracijos įrašas. Tai ypač svarbu Closte integracijoje, nes kūrimas domenų įrašo pasieka Closte API, kuris tada sukuria domeną ir SSL sertifikatą.

## Problemos iššutes

### API jungimo problemas
- Patikrinkite, ar jūsų Closte API klaidų raktas yra teisingas.
- Užtikrinkite, kad jūsų Closte paskyrai yra reikalinga įnašinimo teisė.

### SSL sertifikato problemas
- Closte gali priimti laiko išduodant SSL sertifikatus (nacionaliai dažnai 5–10 minučių).
- Patikrinkite, ar jūsų domenai teisingai nurodyti į jūsų Closte serverio IP adresą.
- Patikrinkite DNS įrašus jūsų domeno, kad užtikrintumėte, kad jie yra tinkamai konfigūruoti.

### Domenas neįtrauktas
- Patikrinkite Ultimate Multisite logus, ar nėra kokių klaidos pranešimų.
- Užtikrinkite, kad domenui jau nėra pridėta Closte.
- Įsitikinkite, kad jūsų domeno DNS įrašai yra tinkamai konfigūruoti.

### DNS patikrinimo intervalas
- Jei SSL sertifikatai priimti per daug laiko, galite nustatyti DNS patikrinimo intervalą Domain Mapping nustatyjimo nustatyjimu.
- Defoltinis intervalas yra 300 sekundai (5 minučių), bet galite nustatyti jį iki 10 sekundžių greičiau patikrinti testuojant.
