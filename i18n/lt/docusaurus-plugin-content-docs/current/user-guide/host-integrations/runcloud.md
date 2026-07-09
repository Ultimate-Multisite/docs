---
title: RunCloud integracija
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integracija {#runcloud-integration}

## Vaizda informacijos {#overview}
RunCloud yra tam tikas sklaida, kuri leidžia lengvai įdėti ir valdyti web programėles savo nuostolių (cloud) serveriuose. Ši integracija leido automatinį domenų sinigrinimą ir SSL sertifikatų valdymą tarp Ultimate Multisite ir RunCloud.

## Funkcijos {#features}
- Automatinis domenų sinigrinimas
- SSL sertifikatų valdymas
- Domeno pašalinimas, kai nustatymai yra ištręsti

## Reikalavimai {#requirements}
Šiuose konstantais turėtų būti nurodytos jūsų `wp-config.php` failu:

```php
define('WU_RUNCLOUD_API_KEY', 'jūsų_api_kiltis');
define('WU_RUNCLOUD_API_SECRET', 'jūsų_api_slapta');
define('WU_RUNCLOUD_SERVER_ID', 'jūsų_serverio_id');
define('WU_RUNCLOUD_APP_ID', 'jūsų_programos_id');
```

## Įdiegimo instrukcijos {#setup-instructions}

### 1. Gaukite savo RunCloud API kreditiuosius duomenis {#1-get-your-runcloud-api-credentials}

1. Prisijunkite prie savo RunCloud paneliu.
2. Eikite į „User Profile“ (spauskite savo profilio vaizdą dešinėje viršuje).
3. Ieškokite „API“ iš meniu.
4. Spauskite „Generate API Key“, jei jūsų nustatymai nėra jau pateikti.
5. Kopijuokite savo API kiltį ir API slaptažodį.

### 2. Gaukite savo serverio ir programos ID {#2-get-your-server-and-app-ids}

1. Jūsų RunCloud paneliui eikite į „Servers“.
2. Pasirinkite tą serverį, kur hostuojama jūsų WordPress multisite.
3. Serverio ID yra matomas URL adresyje: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Eikite į „Web Applications“ ir pasirinkite savo WordPress programėlę.
5. Programos ID yra matomas URL adresyje: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Įdėkite konstantas į wp-config.php {#3-add-constants-to-wp-configphp}

Įdėkite šiuos konstantas į savo `wp-config.php` failą:

```php
define('WU_RUNCLOUD_API_KEY', 'jūsų_api_kiltis');
define('WU_RUNCLOUD_API_SECRET', 'jūsų_api_slapta');
define('WU_RUNCLOUD_SERVER_ID', 'jūsų_serverio_id');
define('WU_RUNCLOUD_APP_ID', 'jūsų_programos_id');
```

### 4. Įjunkite integraciją {#4-enable-the-integration}

1. WordPress admin panelas, eiti į Ultimate Multisite > Settings
2. Navigcuokite į "Domain Mapping" (Domeno netyrinėjimas) tvarką
3. Pasirinkite "Host Integrations" (Host integracijos) sekciją
4. Įjunkite RunCloud integraciją
5. Spauskite "Save Changes" (Išsaugoti pakeitimus)

## Kaip tai veikia {#how-it-works}

Kai domenas netyrinėjama Ultimate Multisite:

1. Integracija siųsta pranešimą RunCloud API įveikti domena jūsų programoje
2. Jei domenas sėkmingai pridėtas, integracija taip pat atnaujina SSL sertifikatus
3. Kai domeno netyrinėjimas pašalinas, integracija pašalina domeną iš RunCloud

Subdomenu įdiegimo atveju, integracija automatiškai tvarko subdomenų kūrimą RunCloud'e, kai į jūsų tinklą pridėta nauja svetainė.

## Problemos galimybės (Troubleshooting) {#troubleshooting}

### API ryšio problemos {#api-connection-issues}
- Patikrinkite, ar jūsų API kredencijos yra teisingos
- Patikrinkite, ar jūsų serverio ir programos ID yra teisingi
- Užtikrinkite, kad jūsų RunCloud paskyra turi reikiamų įgaliojimų

### SSL sertifikato problemos {#ssl-certificate-issues}
- RunCloud gali prireikti laiko išduoti SSL sertifikatus
- Patikrinkite, ar jūsų domenai tinkamai nurodo savo serverio IP adresą
- Patikrinkite RunCloud SSL nustatymus jūsų programai

### Domenas neįdieg tas {#domain-not-added}
- Patikrinkite Ultimate Multisite logus (logs) už kokių nors klaidos pranešimų
- Patikrinkite, ar domenas jau nėra pridėtas į RunCloud
- Užtikrinkite, kad jūsų RunCloud planas palaiko daug domenų
