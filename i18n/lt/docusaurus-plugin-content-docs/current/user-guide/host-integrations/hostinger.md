---
title: Hostinger (hPanel) Integracija
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Integracija su Hostinger (hPanel)

## Na pregled

Hostinger yra populiarijusias web hostingo įstaiga, turinčia modernų kontrolinį panelį vadinant hPanel. Ultimate Multisite Hostinger integracija leidžia automatiškai sincronizuoti domenus tarp Ultimate Multisite ir Hostinger's hPanel, o tai nima jums automatiai valdyti domenų mapingu ir subdomenų tiesiog iš savo WordPress adminio.

## Funkcijos

- Automatinis addon domeno kūrimas hPanel'yje
- Automatinis subdomeno kūrimas hPanel'yje (subdominio multisite įdiegimo atveju)
- Domeno pašalinimas, kai mapingu yra ištrinta
- Nemokamas integracija su hPanel's domenų valdymų API

## Reikalavimai

Norint naudoti Hostinger integraciją jums reikalinga:

1. Hostinger paskyra su hPanel prieigga
2. API tokenas nuo Hostinger'o
3. Šios konstanta definicijos jūsų `wp-config.php` failu:

```php
define('WU_HOSTINGER_API_TOKEN', 'jūsų_hostingerio_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'jūsų_hostingerio_skolos_id');
```

Valdymui galite nurodyti ir:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Pagrindinis API endpointas
```

## Įdiegimo instrukcijos

### 1. Sukurkite savo Hostinger API tokeną

1. Prisijunkite prie savo Hostinger paskyros ir nurodykite hPanel
2. Eikite į **Account Settings** → **API Tokens**
3. Paspauskite **Create New Token** (Sukurti naują tokeną)
4. Nurodykite jūsų tokenui aprašymo pavadinimą (pvz., "Ultimate Multisite")
5. Pasirinkite reikiamus leidimus:
   - Domenų valdymas
   - Subdomenų valdymas
6. Kopijuokite sugeneruotą tokeną ir sauginkite jį saugiai

### 2. Raskirkite savo skolos ID

1. HPanel'yje eikite į **Account Settings** → **Account Information** (Skolos informacija)
2. Jūsų Skolos ID pasirodys šio puslapioje
3. Kopijuokite ir išsaugokite šį ID kitaptam žingsniui

### 3. Įdėkite konstantas į wp-config.php

Įdėkite šias konstantas į jūsų `wp-config.php` failą:

```php
define('WU_HOSTINGER_API_TOKEN', 'jūsų_hostingerio_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'jūsų_hostingerio_skolos_id');
```

Jei jūsų Hostinger paskyra naudoja kitą API endpoint, galite jį pritaikyti:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Įjunkite integraciją

1. Jūsų WordPress admin panel'yje einkite į **Ultimate Multisite > Settings** (Nustatymai)
2. Navigruokite į languot **Domain Mapping** (Domeno netyrinėjimas)
3. Pasirinkite žemiau **Host Integrations** (Integracijos su Hostingeriu)
4. Įjunkite integraciją **Hostinger (hPanel)**
5. Spauskite **Save Changes** (Išsaugoti pakeitimus)

## Kaip tai veikia

### Addon Domainai (Privalomųjų domenų)

Kai netyrinėjate domeną Ultimate Multisite:

1. Integracija siunčia prašymą Hostingerio API, kad pridėtų domeną kaip addon domainą
2. Domenas yra nustatytas, kad buvų nurodytas į jūsų pagrindinį katalogą (root directory)
3. Kai pašalinate domeną netyrinėjimo, integracija automatiškai pašala addon domainą iš hPanelio

### Subdomainai (Subdomėniai)

Subdomėnių multisite instalacijoms, kai kur site yra naujas:

1. Integracija išlaiko subdomėnį iš viso domeno
2. Ji siunčia prašymą Hostingerio API pridėti subdomenį
3. Subdomėnis yra nustatytas, kad buvų nurodytas į jūsų pagrindinį katalogą

## Svarbiaji pranešimai

- Integracija naudoja Hostingerio REST API su jūsų paskyra komunikant
- Jūsų API tokenui turi būti reikalinga leidimas domenų ir subdomenų valdymui
- Integracija nevaldo DNS konfigūracijos; domenai turėtų būti jau nurodyti į jūsų Hostingerio paskyrą
- API prašymai vykdomos saugiai per HTTPS
- Laikykite savo API tokeną saugumui ir niekada neaprašykite jį publikai

## Problemos atšalinimas

### API ryšio problemos

* Patikrinkite, ar kadangi jūsų API tokenas teisingas ir neksipirė?
* Patikrinkite, ar jūsų Account ID yra teisingas.
* Užtikrinkite, kad jūsų API tokenui yra reikalinga įgaliojimas domenų valdymui.
* Patikrinkite, ar jūsų Hostinger paskyra yra aktyvi ir gerai nustatytos.

### Domenas nepridėtas

* Patikrinkite Ultimate Multisite logus, kad neystingai pasirodytų kokių nors klaidos pranešimų.
* Patikrinkite, ar jūsų domenas jau nėra pridėtas prie jūsų Hostinger paskyros.
* Užtikrinkite, kad jūsų Hostinger paskyra nepasiekė savo apribojimo addon domenams.
* Patikrinkite, ar domenas teisingai nurodytas į jūsų Hostinger nameservers.

### SSL sertifikato problemas

* Integracija ne valdo SSL sertifikatų išdavimo.
* Hostinger tipicamente suteikia nemokamus SSL sertifikatus per AutoSSL.
* Jūs galite valdyti SSL sertifikatus tiesiogiai hPanel'e sledu **SSL/TLS**.
* Alternatyviai, naudokite Let's Encrypt su Hostinger's AutoSSL funkcija.

## Pastabos

Jei jums reikia papildomos pagalbos su Hostinger integracija, prašome rasti informacijos šiuose:

* [Hostinger API Dokumentacija](https://support.hostinger.com/en/articles/4286-api-documentation)
* [Ultimate Multisite Dokumentacija](/docs)
* [Ultimate Multisite Pastabos](https://ultimatemultisite.com/support)
