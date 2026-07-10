---
title: ServerPilot integracija
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Integracija {#serverpilot-integration}

## Vaizda informacijos {#overview}
ServerPilot yra tam tikras cloud paslaugas, skirtos WordPress ir kitų PHP svetaini hostinti serveriu DigitalOcean, Amazon, Google ar kitų bet kokio servero tiekėjų. Ši integracija leidžia automatiniai domenų sinigalius ir SSL sertifikatų valdymą tarp Ultimate Multisite ir ServerPilot.

## Funkcijos {#features}
- Automatinis domenų sinigalis
- SSL sertifikato valdymas su Let's Encrypt
- Automatinis SSL atnaujinimas

## Reikalavimai {#requirements}
Šiuose konstanta turi būti nurodytos jūsų `wp-config.php` failu:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'jūsų_client_id');
define('WU_SERVER_PILOT_API_KEY', 'jūsų_api_key');
define('WU_SERVER_PILOT_APP_ID', 'jūsų_app_id');
```

## Įdiegimo instrukcijos {#setup-instructions}

### 1. Gaukite savo ServerPilot API kreditiuosius duomenis {#1-get-your-serverpilot-api-credentials}

1. Prisijunkite prie jūsų ServerPilot dashboardo
2. Eikite į "Account" > "API" (Sveikasis paskyra > API)
3. Sukurkite naują API klaidą, jei turite ją jau
4. Kopijuokite savo Client ID ir API Key

### 2. Gaukite savo App ID {#2-get-your-app-id}

1. Jūsų ServerPilot dashboardoje eikite į "Apps" (Programos)
2. Pasirinkite tą programėlę, kurioje hostuojamas jūsų WordPress multisite
3. App ID yra matomas URL adresinde: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Įdėkite konstantas į wp-config.php {#3-add-constants-to-wp-configphp}

Įdėkite šiuos konstantas į savo `wp-config.php` failą:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'jūsų_client_id');
define('WU_SERVER_PILOT_API_KEY', 'jūsų_api_key');
define('WU_SERVER_PILOT_APP_ID', 'jūsų_app_id');
```

### 4. Įjunkite integraciją {#4-enable-the-integration}

1. Jūsų WordPress admin panelde eikite į Ultimate Multisite > Settings (Nustatymai)
2. Eikite į "Domain Mapping" (Domenų netyrinimas) vėtybą
3. Pasirinkite "Host Integrations" (Host integracijos)
4. Įjunkite ServerPilot integraciją
5. Spauskite "Save Changes" (Išsaugoti pakeitimus)

## Kaip tai veikia {#how-it-works}

### Domenų sinigalis {#domain-syncing}

Kai domenai netyrinami Ultimate Multisite:

1. Integracija pasieka dabartinę domenų sąrašą iš ServerPilot.
2. Jame pridėta nauja domena (jei ta yra su www versija) į sąrašą.
3. Naujas sąrašas siunamas prie ServerPilot per API.
4. ServerPilot atnaujina jūsų technologijų sąrašą.

### SSL Sertifikatų valdymas {#ssl-certificate-management}

Po domenų sinigrinimo:

1. Integracija automatiškai įjungia AutoSSL jūsų technologijoms.
2. ServerPilot atsakingai išduodžia ir įdaro SSL sertifikatas naudojant Let's Encrypt.
3. ServerPilot taip pat atsakingai atnaujina SSL sertifikatų atnaujinimą.

## SSL Sertifikatų patikrinimas {#ssl-certificate-verification}

Integracija nustatoma didinti SSL sertifikatų patikrinimų keliais ServerPilot, nes ServerPilot gali užima laiko išduodant ir įdaro SSL sertifikatas. Pagalai ji bandoma iki 5 kartų, bet tai galima pakeisti naudojant filtrybus.

## Problemos atšalinimas {#troubleshooting}

### API ryšio problemos {#api-connection-issues}
- Patikrinkite, ar jūsų Client ID ir API Key yra teisingi.
- Patikrinkite, ar jūsų App ID yra teisingas.
- Užtikrinkite, kad jūsų ServerPilot paskyra turi reikiamų įsipareigojimų.

### SSL sertifikatų problemos {#ssl-certificate-issues}
- ServerPilot reikalauja, kad domenai turėtų galiojančius DNS įrašus, tipa, todinti į jūsų serverį, prieš išduodant SSL sertifikatas.
- Jei SSL sertifikatai nebus išduoti, patikrinkite, ar jūsų domenai teisingai todina į jūsų serverio IP adresą.
- ServerPilot gali užima laiko išduodant ir įdaro SSL sertifikatas (paprastai 5–15 minučių).

### Domenas nepridėtas {#domain-not-added}
- Patikrinkite Ultimate Multisite logus, kad nustatytum kokios klaidos pranešimai.
- Patikrinkite, ar domena jau nėra pridėta prie ServerPilot.
- Užtikrinkite, kad jūsų ServerPilot planui yra galioja pridėti domenų skaičius.

### Domenų pašalinimas {#domain-removal}
- Šiuo metu ServerPilot API nenaudojama pašalinti individualius domenus.
- Kai domeno mapowaniei pašaloma Ultimate Multisite, integracija atnaujina domenu sąrašą ServerPilot, išskirtant pašaliotą domeną.
