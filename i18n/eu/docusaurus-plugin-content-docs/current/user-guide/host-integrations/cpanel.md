---
title: cPanel Integrazioa
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Integrazioa

## Deskargunea (Overview) {#overview}
cPanel da web hosteak gehiendu erabiltzen dituzten mezuetan bat da. Ultimate Multisite eta cPanel-a automatikoki sinkronizatzeko aukera ematen du, horrek domain alias eta subdomain-ek automaticoki zehatzeko prozesua egiten du zure cPanel kontuan.

## Aeragunak (Features) {#features}
- cPanel-an addon domain-ek automaticoki sortzea
- cPanel-an subdomain-ek automaticoki sortzea (subdomain multisite instalazioak dira)
- Mapeamenduak boratzen diren bitartean domain-ek eliminatzea

## Aurrekontuak (Requirements) {#requirements}
Hau dauden konstante hauek `wp-config.php` daturiko filean definitu behar dira:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opsionala da, hauek ere definitu:

```php
define('WU_CPANEL_PORT', 2083); // Default-ek 2083 da
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default-ek /public_html da
```

## Konfigurazioa Instrukiak (Setup Instructions) {#setup-instructions}

### 1. Hondaritu cPanel identifikazioak (Get Your cPanel Credentials) {#1-get-your-cpanel-credentials}

1. Zure hosting provider-ralako username eta password-ek hartu.
2. Zure cPanel host-a ezagatu (solera da `cpanel.yourdomain.com` edo `yourdomain.com:2083`).

### 2. Konstante hauek wp-config.php-le gehitu (Add Constants to wp-config.php) {#2-add-constants-to-wp-configphp}

Hau dauden konstante hauek zure `wp-config.php` filean gehitu:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opsionala da, port-ea eta root directory-ak aukeratu:

```php
define('WU_CPANEL_PORT', 2083); // Aldatu horrek cPanel batek erabiliziek portrak ezberdina izan denean
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Aldatu horrek zure dokumentu root-a ezberdin dela diren bitartean
```

### 3. Integrazioa aktiboa egin (Enable the Integration) {#3-enable-the-integration}

1. WordPress administrazioan, Ultimate Multisite > Settings (Konfigurazioa) funduzu.
2. "Domain Mapping" (Domein Mapoak) tabera iritu.
3. "Host Integrations" (Host Integrazioak) luzean jarraitu.
4. cPanel integrazioa aktibatu duzu.
5. "Save Changes" (Gehiak Orokoratu) klik egin.

## Ondo Zerbitzen da {#how-it-works}

### Addon Domains (Addon Domeinak) {#addon-domains}

Ultimate Multisite-an domeina mapatuta dagoenean:

1. Integrazioa cPanel-ren API-rre eskaera bidaltzen du domaina addon domain gisa ezazu.
2. Domainak irudiari (root directory) erabilizten arteko konfiguratuta da.
3. Domein mapatzea desatuenean, integrazioa addon domain-a cPanel-etik eratu du.

### Subdomains (Subdomaineak) {#subdomains}

Subdomain multisite instalazioetan, leku berri bat sortzen duenean:

1. Integrazioa domeina guztiaren subdomain partearen eskatzen du.
2. cPanel-ren API-rre eskaera bidaltzen du subdomain ezazu.
3. Subdomainak irudiari (root directory) erabilizten arteko konfiguratuta da.

## Nota Importantes (Nota Ezberdina Nagusia) {#important-notes}

- Integrazioa domina cPanel-arekin harreman dituzten bitartean cPanel-ren API2-ri erabiltzen du.
- Domina addon domainak eta subdomainak ezazu konponbideak dituena, cPanel-aren kontua lehenengo eskatzen debeatu behar duzu.
- Hosting provider batzuk domaina edo subdomainak sortzeko irizpideak murriztu egiten dira.
- Integrazioa DNS konfiguratzea ez du; domeinak server-ren IP-ra erabilizten beharko duzu.

## Problema Erreguntzea (Troubleshooting) {#troubleshooting}

### API Connection Issues (API Harreman Problemaak) {#api-connection-issues}
- CPanel-aren erabiltzaile eta pasatuaren kontua jabetzatu duzu, hori barne dagoela jakinarazki.
- CPanel-ren hosta irizpideak ondo dagoen eta erabilera daiko jakinarazki.
- CPanel-aren kontuak beharrezko izinak dituena asegatzu duzu.
- Host-a guztia URL-a erabiltzea proposatu duzu (adibidez, `https://cpanel.yourdomain.com`).

### Domain Not Added (Domaina Ez ezazu) {#domain-not-added}
- Ultimate Multisite-aren logs-ek erantzunak edo error testuak jakinarazki jartzen duzu.
- Domaina cPanel-an ez dagoela asegatzu duzu.
- CPanel-aren kontuak addon domainak edo subdomainak sortzeko limitazioa ez hasi duela asegatzu duzu.

### SSL Batzak {#ssl-certificate-issues}

- Integrazioa ez du ordezkatu SSL certificate emandatzen.
- Domain-ekorik SSL certificate emandatzeko cPanel-en SSL/TLS tool edo AutoSSL funtazioa erabil behar duzu.
- Alternatiboa, Let's Encrypt gabe cPanel-en AutoSSL erabil dezakezu.
