---
title: Integracija WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integracija su WPMU DEV

## Vaizda
WPMU DEV yra visapibrėžta WordPress platforma, kuri siūlo hostingu, pluginus ir paslaugas WordPress svetainėms. Ši integracija leidžia automatiniai domenų sinigrinimą ir SSL sertifikatų valdymą tarp Ultimate Multisite ir WPMU DEV hostingo.

## Funkcijos
- Automatinis domenų sinigrinimas
- SSL sertifikato valdymas
- Papildomi SSL sertifikato patikrinimo bandymai

## Reikalavimai
Integracija automatiškai nurodytų, ar jūs hostuojate su WPMU DEV ir naudoja built-in API. Jei hostuojate su WPMU DEV, jokių papildomų konfigūracijos ne reikalauja.

Integracija patikrina, ar yra nurodyta konstanta `WPMUDEV_HOSTING_SITE_ID`, kuri automatiškai definomi, kai hostuojate su WPMU DEV.

## Įdiegimo instrukcijos

### 1. Patikrinkite WPMU DEV Hostingu

Jei hostuojate su WPMU DEV, reikalingos konstanta turėtų būti jau nurodytos. Patikrinkite:

1. Ar konstanta `WPMUDEV_HOSTING_SITE_ID` yra nurodyta jūsų aplinkve (environment)
2. Ar turite aktyvų WPMU DEV prenumeratą su API prieigga

### 2. Įjunkite integraciją

1. Jūsų WordPress admin panel'yje eikite į Ultimate Multisite > Settings
2. Navigruokite į languotą "Domain Mapping" (Domenų nurodymas)
3. Pasirinkite "Host Integrations" (Hostingo integracijos)
4. Įjunkite WPMU DEV integraciją
5. Spauskite "Save Changes" (Išsaugoti pakeitimus)

## Kaip tai veikia

### Domenų sinigrinimas

Kai domenai nurodomi Ultimate Multisite:

1. Integracija naudoja WPMU DEV API, kad pridėtų domeną prie jūsų hostingo paskyros
2. Ji automatiškai pridės ir www versiją domeno
3. WPMU DEV atsakingas už domeno konfigūracijos ir SSL sertifikato išdavimą

### SSL sertifikato valdymas

Integracija nustatoma konfiguruje poveikliają skaičius SSL sertifikato patvirtinimo pokušingų (verification attempts) dla WPMU DEV hostingu, nes išduodimas ir įdėtas SSL sertifikatai gali užima laiką. Pagal valdymą, sistema bus bandomai iki 10 kartų patvirtinti SSL sertifikatą, o tai skiria standartini 5 pokušingams.

## Svarbiausios nuotaikos

### Domeno pašalinimas

Šiuo metu WPMU DEV API nenuforma pašalinti domenus. Kai domeno mapavimas (domain mapping) pašalinamas Ultimate Multisite, domenas bus likti jūsų WPMU DEV hostingo paskyrimose. Jei tai reikalinga, turėsite jį pašalinti ranka į valdymo skaitmenį WPMU DEV hostingu.

### API autentifikavimas

Integracija naudoja WPMU DEV API klaidą (key), kuri yra saugoma jūsų WordPress duomenų bazėje kaip nustatymas `wpmudev_apikey`. Tai automatiškai nustatyjama, kai sujungiate savo svetainę su WPMU DEV.

## Problemos iššutes

### API jungimo problemas
- Patikrinkite, ar jūsų svetainė tinkamai sujungta su WPMU DEV
- Patikrinkite, ar nustatymas `wpmudev_apikey` yra nustatos jūsų WordPress duomenų bazėje
- Užtikrinkite, kad jūsų WPMU DEV subskriptija yra aktyvi

### SSL sertifikato problemas
- WPMU DEV gali užima laiką išduoti SSL sertifikatas (kadangi tai įvyksta per 5–15 minučių)
- Integracija nustatyta patvirtinti SSL sertifikatą iki 10 kartų
- Jei SSL sertifikatai vis dar nebus išduoti po kelionimų, susitikite su WPMU DEV palaikymo komandmistriu

### Domenas nėra pridėtas
- Patikrinkite Ultimate Multisite logus (logs) už kokių nors klaidos pranešimų
- Patikrinkite, ar domenas jau nėra pridėtas į WPMU DEV
- Užtikrinkite, kad jūsų WPMU DEV hostingo planas palaiko domenų skaičių, kuriuos pridėjate
