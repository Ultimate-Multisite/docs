---
title: cPanel integrācija
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integrācija ar cPanel

## Īskatsauce {#overview}
cPanel ir viens no populārākajām tīmekļa hostingu kontrolēļām, ko izmanto daudzi dalīta un dedīta hostingu sniedzēji. Šī integrācija ļauj automātiski sincronizēt domānu starp Ultimate Multisite un cPanel, ļaujot jums automātiski pievienot domānu aliasus un subdomānu savam cPanel kontam.

## Funkcionalitātes {#features}
- Automātiska addon domānu izveide cPanelī
- Automātiskas subdomānu izveide cPanelī (subdomānu multisite instalācijām)
- Domānas atņemšana, ja mape ir noņemta

## Prasības {#requirements}
Jums jādefinē šā constants failā `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'jūsu_cpanel_username');
define('WU_CPANEL_PASSWORD', 'jūsu_cpanel_password');
define('WU_CPANEL_HOST', 'jūsu_cpanel_host');
```

Optiāli var definēt arī:

```php
define('WU_CPANEL_PORT', 2083); // Defaults ir 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Defaults ir /public_html
```

## Iestatījumu instrukcijas {#setup-instructions}

### 1. Saņemiet savas cPanel autentifikācijas datus {#1-get-your-cpanel-credentials}

1. Saņemiet savu cPanel lietotāja vārdu un paroli no jūsu hostingu sniedzēja
2. Noteikiet savu cPanel hosta (parasti `cpanel.jūsuziņojums.com` vai `jūsuziņojums.com:2083`)

### 2. Pievienojiet constants failā wp-config.php {#2-add-constants-to-wp-configphp}

Pievienojiet šo konstantas savam failam `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'jūsu_cpanel_username');
define('WU_CPANEL_PASSWORD', 'jūsu_cpanel_password');
define('WU_CPANEL_HOST', 'jūsu_cpanel_host');
```

Optiāli var pielāgot portu un galveno direktoriju:

```php
define('WU_CPANEL_PORT', 2083); // Mainiet, ja jūsu cPanel izmanto citu portu
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Mainiet, ja jūsu dokumenta galvenais direktorijs ir atšķirīgs
```

### 3. Iespējini integrāciju {#3-enable-the-integration}

1. Uz slikt, ka WordPress adminā dodieties uz Ultimate Multisite > Settings
2. Navigējieties uz tabuli "Domain Mapping" (Domānu mapi)
3. Ieliet zemāk līdz "Host Integrations" (Host integrācijas)
4. Iespējiniet cPanel integrāciju
5. Nospressiet "Save Changes" (Saglabāt izmaiņas)

## Kā tas darbojas {#how-it-works}

### Addon Domains (Papildu domēni) {#addon-domains}

Kad domēns tiek mapt Ultimate Multisite:

1. Integrācija sūta pieprasījumu cPanel API uzdomājam domēnu kā papildu domēna
2. Domēns ir konfiguriēts, lai punktu savu galveno direktoriju (root directory)
3. Kad noņemiet domānu mapi, integrācija noņems papildu domēni no cPanel

### Subdomains (Subdomēni) {#subdomains}

Subdomēnu multisite instalācijās, kad tiek izveidots jauns vietne:

1. Integrācija izņem subdomēna daļu no pilnā domēna
2. Tas sūta pieprasījumu cPanel API, lai papildītu subdomēnu
3. Subdomēns ir konfiguriēts punktot savu galveno direktoriju (root directory)

## Savieti {#important-notes}

- Integrācija izmanto cPanel API2 komunikācijā ar jūsu cPanel kontu
- Jums cPanel kontam jābūt atļautam papilddomēnu un subdomēnu pievienošanai
- Noteikumi nodrošina, ka kādi hostings sniedzieki var ierobežot papildu domānu vai subdomēnu skaitu, ko varat izveidot
- Integrācija neuzņemas DNS konfigurāciju; jums vēl joprojām jāpunkt savi domēni uz servera IP adresi

## Kļūdu likums (Troubleshooting) {#troubleshooting}

### API saistes problēmas {#api-connection-issues}

- Pārbaudiet, vai jūsu cPanel lietotāja nosaukums un parols ir pareizi
- Pārbaudiet, vai jūsu cPanel host ir pareizs un pieejams
- Nodrošiniet, ka jūsu cPanel kontam ir nepieciešamās atļaujas papilddomēnu un subdomēnu pievienošanai
- Mēģiniet izmantot pilnu URL adresi hosta (piemēram: `https://cpanel.yourdomain.com`)

### Domēns nav pievienots {#domain-not-added}

- Pārbaudiet Ultimate Multisite logus jebkurām kļūdu ziņojumiem
- Apstipriniet, ka domēns vēl nav jau pievienots cPanel
- Nodrošiniet, ka jūsu cPanel kontam nav atteikts papildu domānu vai subdomēnu ierobežums

### SSL sertifikātu problēmas {#ssl-certificate-issues}

- Integrācija neapliec SSL sertifikātu izdošanu.
- Jums būs jāizmanto cPanel SSL/TLS rīki vai AutoSSL funkciju, lai izdozinātu SSL sertifikātus saviem domēniem.
- Alternatīvi, jūs varat izmantot pakalpojumu kā Let's Encrypt ar cPanel AutoSSL.
