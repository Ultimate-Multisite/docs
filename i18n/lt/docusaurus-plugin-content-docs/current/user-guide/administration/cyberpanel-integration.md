---
title: CyberPanel integracija
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integracija su CyberPanelom

U ovom vodiču objasnimo kako konfigurirati integraciju Ultimate Multisite CyberPanel tako da mapeirani domeni u vašoj mreži automatski dodaju (i uklanjaju) kao virtual hostove u CyberPanel, s opcionalnim automatskim postavljanju SSL-a putem Let's Encrypt.

## Što to radi

- Kada se domen mapira u Ultimate Multisite, integracija poziva CyberPanel API kako bi stvorila virtual host za taj domen.
- Kada se ukloni mapeiranje domena, integracija poziva API da obriše odgovarajući virtual host.
- Kada je automatski SSL uključen, integracija pokreće izdavanje Let's Encrypt certifikata odmah nakon što se virtual host stvori.
- Opcionalno dodaje/uklanja alias `www.` ovisno o vašoj postavci "Auto-create www subdomain" u postavkama mapeiranja domena.

## Preduslovi

- Pokrenut CyberPanel instance (preporučeno v2.3 ili noviji) dostupna s vašeg WordPress servera.
- Postojeći web stranica u CyberPanel koja već služi korijen vaše WordPress mreže. Integracija vezuje nove virtual hostove za ovaj server.
- Omogućeni pristup CyberPanel API-ju. Autentifikacija se vrši pomoću korisničkog imena i lozinke vašeg CyberPanel admin korisnika.
- Vaši DNS podaci za mapeirane domene moraju već pokazivati na IP adresu vašeg servera prije nego što automatski SSL može izdati važeći certifikat.

## Zahtjevi

Sledeće konstante moraju biti definirane u vašem datoteci `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opcionalno, možete definirati i:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Pagal: true — išdėkite Let's Encrypt SSL po domenų kūrimo
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Pagal: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Naudojamas sertifikato kontaktui

## Įdiegimo instrukcijos

### 1. Įjunkite CyberPanel API

1. Prisijunkite prie savo CyberPanel panelio kaip administratorius.
2. Eikite į **Security** > **SSL** ir patikrinkite, kad SSL yra aktyvus pačiame CyberPanel interfeys (tai reikalinga saugiai veikti API skaitmenines žinutės).
3. CyberPanel API pasiekiama pagal numatytą adresą `https://jūsų-serverio-ip:8090/api/`. Nepriklausomai nenaudojami papildomi žingsniai, kad jį įjungtumėte — jis yra įjungtas numatytai administratoriams.

### 2. Įdėkite konstantas į wp-config.php

Įdėkite šiuos konstantas į savo `wp-config.php` failą prieš eilutę `/* Tai viskas, sutraukite redaguoti! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://jūsų-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'jūsų_sauga_parola');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Kad įjungtumėte automatinį SSL (rekomenduojama):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@jūsųdomenio.com');
```

### 3. Įjunkite integraciją

1. Jūsų WordPress tinklo administratoriumi eikite į **Ultimate Multisite** > **Settings**.
2. Eikite į languotą **Domain Mapping**.
3. Pasirinkite žemiau esančią puslapį **Host Integrations**.
4. Įjunkite integraciją **CyberPanel**.
5. Spauskite **Save Changes** (Išsaugoti pakeitimus).

### 4. Patikrinkite tinkamumą

Naudokite įtrauktą ryšio testą nustatymų žvaigždėje:

1. Prisij **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Spauskite mygtį **Test Connection**.
3. Sėkmingo pranešimo patvirtina, kad plugin gali pasiekti CyberPanel API ir tinkamai autentifikuotis.

## Kaip tai veikia

### Domenų netyraukimas (Domain Mapping)

Kai domeną netyraukite Ultimate Multisite:

1. Integracija siųsta `POST` reikalavimą į `/api/createWebsite` jūsų CyberPanel host'ui.
2. CyberPanel sukuria naują virtualį hostį domenei pagal konfigūruotą paketą.
3. Dokumento šaknes (document root) nustatyjama, kad jis buvų nurodytas į jūsų WordPress tinklo pagrindinę katalogą.
4. Kai domenų netyraukimas pašalinas, integracija skalia `/api/deleteWebsite` virtualį hostį.

### Automatinis SSL (Auto-SSL)

Kai `WU_CYBERPANEL_AUTO_SSL` yra `true`:

1. Po to, kai sukuriamas virtualis hostis, integracija skalia `/api/issueSSL` domenei.
2. CyberPanel prašo Let's Encrypt sertifikatą naudojant ACME HTTP-01 iššakymą (challenge).
3. Sertifikatas automatiškai atnaujinamas CyberPanel iki galiojimo termino.

> **Svarbu:** DNS turi būti visiškai propaguotas į jūsų serverio IP adresą, kad Let's Encrypt galėtų patvirtinti domeną. Jei SSL iššaka nepasirenka tiesiog po netyraukimo, atsakingas laukite DNS propagavimo ir vėl paleiskite SSL iš CyberPanel panelioje sleduje **SSL** > **Manage SSL**.

### www Subdomenas

Jei jūsų Domenų Netyraukimo nustatymuose įjungta funkcija **Auto-create www subdomain**, integracija sukuria virtualį hostį aliasą `www.<domain>` ir, jei automatinis SSL įjungtas, išduodama sertifikatą, kuris apima tiek pagrindinį (apex), tiek www variantus.

### El. pašto priekai (Email Forwarders)

Kai [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon veiklina, CyberPanel gali siuntusi klientų el. pašto priėmimo (email forwarders). Šie priėmimas siuntamas iš vienos domenų adresui į kitą pašto dėželį be naujo dėželės kūrimo, o tai labai patogiai tinka panaudojimui aliasų, tokių kaip `info@customer-domain.test` ar `support@customer-domain.test`.

Prieš įjunkdami priėmimus klientams:

1. Patikrinkite, kad virštokios CyberPanel konstanta nustatytos ir ryšio testas sėkmingai pasieka.
2. Įjunkite CyberPanel el. sąskaitą (email provider) Emails addon nustatymuose.
3. Patikrinkite, ar klientų domenas jau egzistuoja CyberPanel'e prieš kūrimą priėmimo.
4. Suprankite testinį priėmimą ir išsiųskite jį paštu, prieš pasiūlydami šią funkciją produktinėms planams.

Jei priėmimo kūrimas nepasieks, pirmą keliavei patikrinkite Ultimate Multisite veiklos logus, o tada patikrinkite CyberPanel'e, ar šaltinis domenas egzistuoja ir ar API vartotojas turi el. valdymo įgaliojimus.

## Konfigūracijos referavimas

| Konstanta | Reikalingas | Defautinis | Aprašymas |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Taip | — | Pilna URL jūsų CyberPanel instancijos, įskaitant portą, pavyzdžiui: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Taip | — | CyberPanel administratorio vartotojo vardas |
| `WU_CYBERPANEL_PASSWORD` | Taip | — | CyberPanel administratorio slaptažodis |
| `WU_CYBERPANEL_PACKAGE` | Taip | `Default` | CyberPanel hostingo paketai, kuriuos nurodoma naujiems virtualiams (virtual hosts) |
| `WU_CYBERPANEL_AUTO_SSL` | Ne | `true` | Išsiųsti Let's Encrypt SSL sertifikatą po domeno kūrimo |
| `WU_CYBERPANEL_PHP_VERSION` | Ne | `PHP 8.2` | PHP versija naujiems virtualiams (turėtų atitinti CyberPanel įrengto versiją) |
| `WU_CYBERPANEL_EMAIL` | Ne | — | El. pašto adresas sertifikato registracijos meseliai |

## Svarbiaji pranešimai

API naudojimas ir autentifikacija

CyberPanel API naudo sesijos pagrindinius tokenus (session-based token authentication). Integracija automatiškai užima tokeną kiekvieno API skaičiui.

Jūsų CyberPanel administratorio paskirto paskirtai turi turėti teisę sukurti ir ištrinti svetainius.

CyberPanel nurodytai įvyksta naudojant defaultų portą `8090`. Jei jūsų serveris naudoja firewallį, užtikrinkite, kad šis portas yra pasiekiamas WordPress aplikacijos serverio nuožvalstybėse.

Integracija nevaldosi DNS registrus. Prieš nurodant domeną DNS adresui savo serverio IP adresu turite atsiųsti domeną į Ultimate Multisite.

Jei naudojate OpenLiteSpeed (OLS), po virtualio hostų pakeitimų automatiškai įvyksta grasiškas restartas. Nėra reikalinga man mano atveju man mano.

## Problemos iššaukimas

### API ryšio atsisakymas

- Patikrinkite, ar portas `8090` yra atidarytas jūsų serverio firewall'e.
- Patikrinkite, ar vertinys `WU_CYBERPANEL_HOST` įskiria tinkamą protokolą (`https://`) ir portą.
- Patikrinkite, ar jūsų CyberPanel SSL sertifikatas yra galiojantis; savos (self-signed) sertifikatai gali sukelti TLS patikrinimo klaidas. Nustatykite `WU_CYBERPANEL_VERIFY_SSL` į `false` tik privandieninėse tinklo aplinkotose mygtuose.

### Autentifikacijos klaidos

- Patikrinkite, ar jūsų `WU_CYBERPANEL_USERNAME` ir `WU_CYBERPANEL_PASSWORD` yra teisingi, sužvalgant CyberPanel tiesiogiai.
- CyberPanel užkyla paskyras po saugų nepasiektų prisijungimų pokušingimų. Jei įvyks blokavimas, patikrinkite **Security** > **Brute Force Monitor** CyberPanel meniu.

### Domenas nekuristas

- Patikrinkite Ultimate Multisite veiklos logą (**Ultimate Multisite** > **Activity Logs**) už API klaidos pranešimus.
- Patikrinkite, ar paketai, nurodyti `WU_CYBERPANEL_PACKAGE`, egzistuoja CyberPanel meniu (**Packages** > **List Packages**).
- Užtikrinkite, kad domenas nebuvų jau registruotas kaip svetainija CyberPanel'e – duplikatinis svetainijos kūrimas grąžina klaidos.

### SSL sertifikatas neapidarytas

* Patikrinkite, ar DNS yra visiškai išplėvintas: komando `dig +short your-domain.com` turėtų atsiųsti jūsų serverio IP adresą.
* Let's Encrypt nustato laiko limitus. Jei neseniai išdidėte kelis sertifikatus vienam domenui, atsakingai atsistinkite prieš bandant vėl.
* Patikrinkite CyberPanel SSL logus puslapyje **Logs** > **Error Logs**, kad gautumėte detalių apie sertifikato išdavimo klaidas.
* Kaip rezervinę opsinę, galite nustatyti SSL mano įvykę: **SSL** > **Manage SSL** > pasirinkite domeną > **Issue SSL**.

## Referencijos

- CyberPanel API Dokumentacija: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Valdymas: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Laiko Limitai: https://letsencrypt.org/docs/rate-limits/
