---
title: cPanel integracija
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integracija su cPanel

## Vaizda {#overview}
cPanel yra vienas popiausių web hostingu kontrolinių panelių, naudojamų daugeliu dalininkų ir özelų hostingų tiekėjų. Ši integracija leidžia automatiškai sincronizuoti domenus tarp Ultimate Multisite ir cPanel, o tai nima jums automatურად pridėti domenų aliasus ir subdomenus prie jūsų cPanel paskyros.

## Funkcijos {#features}
- Automatinis addon domeno kūrimas cPanel'e
- Automatinis subdomeno kūrimas cPanel'e (subdominio multisite įdiegimo atveju)
- Domeno pašalinimas, kai mapingu yra ištrinta

## Reikalavimai {#requirements}
Šie konstanta turi būti nurodytos jūsų `wp-config.php` failu:

```php
define('WU_CPANEL_USERNAME', 'jūsų_cpanel_vade');
define('WU_CPANEL_PASSWORD', 'jūsų_cpanel_parola');
define('WU_CPANEL_HOST', 'jūsų_cpanel_host');
```

Valstybinai galite nurodyti ir:

```php
define('WU_CPANEL_PORT', 2083); // Pagrindinis yra 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Pagrindinis yra /public_html
```

## Įdiegimo instrukcijos {#setup-instructions}

### 1. Gaukite savo cPanel kreditiuosius duomenis {#1-get-your-cpanel-credentials}

1. Gaukite savo cPanel vartotojo ir slaptažodžio informacijas nuo jūsų hostingų tiekėjo
2. Nurodykite savo cPanel host (paprastai `cpanel.jūsųdomeno.com` arba `jūsųdomeno.com:2083`)

### 2. Pridėkite konstantas į wp-config.php {#2-add-constants-to-wp-configphp}

Pridėkite šiuos konstantas į jūsų `wp-config.php` failą:

```php
define('WU_CPANEL_USERNAME', 'jūsų_cpanel_vade');
define('WU_CPANEL_PASSWORD', 'jūsų_cpanel_parola');
define('WU_CPANEL_HOST', 'jūsų_cpanel_host');
```

Valstybinai galite pakeisti portą ir pagrindinį katalogą:

```php
define('WU_CPANEL_PORT', 2083); // Pakeiskite, jei jūsų cPanel naudo kitą portą
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Pakeiskite, jei jūsų dokumentų pagrindinis katalogas skiriasi
```

### 3. Įjunkite integraciją {#3-enable-the-integration}

1. Administratorioje WordPress eili eili nuskite Ultimate Multisite > Settings
2. Navigaiui „Domain Mapping“ (Domeno mapavimas) posamečių
3. Pasirinkite „Host Integrations“ (Host integracijos) skiltį
4. Įjunkite cPanel integraciją
5. Spauskite „Save Changes“ (Išsaugoti pakeitimus)

## Kaip tai veikia {#how-it-works}

### Addon Domains (Privalomos domenai) {#addon-domains}

Kai domenas pasirašytas Ultimate Multisite:

1. Integracija siųsta pranešimą cPanel API įveikti domeną kaip addon domain
2. Domenas yra nustatytas, kad jis turėtų rodyti jūsų pagrindinį katalogą (root directory)
3. Kai pašalinate domeno mapavimą, integracija pašalina addon domain iš cPanel

### Subdomains (Subdomeniai) {#subdomains}

Subdomenių multisite įrengimu, kai kurti naują svetainę:

1. Integracija išlaiko subdomeno dalį iš viso domeno
2. Ji siųsta pranešimą cPanel API įveikti subdomenį
3. Subdomenas yra nustatytas, kad jis turėtų rodyti jūsų pagrindinį katalogą (root directory)

## Svarbiaji piktogramai {#important-notes}

- Integracija naudoja cPanel API2 komunikoti su jūsų cPanel paskyra
- Jūsų cPanel paskyrai turi būti pateikta teisė pridėti addon domains ir subdomenas
- Kai kurie hostinga teikėjai gali apriboti, kiek addon domainų ar subdomenablelių galite kurti
- Integracija nevaldo DNS konfigūracijos; jums vis tiek reikės nurodyti jūsų domenus į savo serverio IP adresą

## Problemos atšalinimas (Troubleshooting) {#troubleshooting}

### API jungimo problemas {#api-connection-issues}
- Patikrinkite, ar jūsų cPanel vartotojo vardas ir slaptažodis yra teisingi
- Patikrinkite, ar jūsų cPanel hostas yra teisingas ir prieinamas
- Užtikrinkite, kad jūsų cPanel paskyrai yra reikalinga teisė pridėti addon domains ir subdomenas
- Bandykite naudoti visą adresą (pvz., `https://cpanel.yourdomain.com`) hostui

### Domenas neįtrauktas {#domain-not-added}
- Patikrinkite Ultimate Multisite logus, ar nėra kokių klaidos pranešimų
- Patikrinkite, kad domenas jau nėra pridėtas į cPanel
- Užtikrinkite, kad jūsų cPanel paskyra nepasireikė savo apribojimo addon domainų arba subdomenablelių skaičiumi

### SSL Sertifikato Probleminiai {#ssl-certificate-issues}

- Integracija ne tvarko SSL sertifikatų išdavimo.
- Jums reikės naudoti cPanel'o SSL/TLS įrankius arba AutoSSL funkciją, kad išduotumėte SSL sertifikatus jūsų domenams.
- Alternatyviai galite naudoti paslaugą, panašią kaip Let's Encrypt su cPanel AutoSSL.
