---
title: cPanel Integrasie
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Integrasie

## Oorsig {#overview}
cPanel is een van die mees gewilde webhosting beheerderspanele wat deur baie gedeelde en toegewyde hostingaanbieders gebruik word. Hierdie integrasie stel outomatiese domein-sinkronisering tussen Ultimate Multisite en cPanel in, wat jou toelaat om outomaties domeinalias en subdomeine by jou cPanel-rekening by te voeg.

## Eienskappe {#features}
- Outomatiese byvoegdomein-skepping in cPanel
- Outomatiese subdomein-skepping in cPanel (vir subdomein multisite-installasies)
- Domeinverwydering wanneer kaarte verwyder word

## Vereistes {#requirements}
Die volgende konstantes moet in jou `wp-config.php` lêer gedefinieer word:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opsioneel kan jy ook definieer:

```php
define('WU_CPANEL_PORT', 2083); // Standaard is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Standaard is /public_html
```

## Opstel Instruksies {#setup-instructions}

### 1. Kry jou cPanel-wagwoorde {#1-get-your-cpanel-credentials}

1. Kry jou cPanel-gebruikersnaam en wagwoord van jou hostingaanbieder
2. Bepaal jou cPanel-host (gewoonlik `cpanel.joudomein.com` of `joudomein.com:2083`)

### 2. Voeg Konstantes by tot wp-config.php {#2-add-constants-to-wp-configphp}

Voeg die volgende konstantes by tot jou `wp-config.php` lêer:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opsioneel kan jy die poort en die hoofdirektorie aanpas:

```php
define('WU_CPANEL_PORT', 2083); // Verander indien jou cPanel 'n ander poort gebruik
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Verander indien jou dokumentroot anders is
```

### 3. Aktiveer die Integrasie {#3-enable-the-integration}

1. Navigeer na Ultimate Multisite > Settings in jou WordPress-administrasie
2. Navigeer na die "Domain Mapping" tab
3. Skrol na "Host Integrations"
4. Aktiveer die cPanel-integrasie
5. Klik op "Save Changes"

## Hoe Dit Werk {#how-it-works}

### Addon Domeine {#addon-domains}

Wanneer 'n domein in Ultimate Multisite gekarteer word:

1. Stuur die integrasie 'n versoek na cPanel se API om die domein as 'n byvoegdomein by te voeg
2. Die domein word gekonfigureer om na jou hoofdirektorie te wys
3. Wanneer 'n domeinkarte verwyder word, sal die integrasie die byvoegdomein van cPanel verwyder

### Subdomeine {#subdomains}

Vir subdomein multisite-installasies, wanneer 'n nuwe webwerf geskep word:

1. Ekstraheer die subdomein-deel van die volledige domein
2. Dit stuur 'n versoek na cPanel se API om die subdomein by te voeg
3. Die subdomein word gekonfigureer om na jou hoofdirektorie te wys

## Belangrike Notas {#important-notes}

- Die integrasie gebruik cPanel se API2 om met jou cPanel-rekening te kommunikeer
- Jou cPanel-rekening moet toestemming hê om byvoegdomeine en subdomeine by te voeg
- Sommige hostingaanbieders mag die aantal byvoegdomeine of subdomeine wat jy kan skep
- Die integrasie hanteer nie DNS-konfigurasie nie; jy moet steeds jou domeine na jou bediener se IP-adres wys

## Probleemoplossing {#troubleshooting}

### API-Verbindingsprobleme {#api-connection-issues}
- Verifieer dat jou cPanel-gebruikersnaam en wagwoord korrek is
- Kontroleer of jou cPanel-host korrek en toeganklik is
- Maak seker dat jou cPanel-rekening die nodige toestemminge het
- Probeer om die volledige URL vir die host te gebruik (bv. `https://cpanel.joudomein.com`)

### Domein Nie Bygevoeg Nie {#domain-not-added}
- Kontroleer die Ultimate Multisite-logboeke vir enige foutboodskappe
- Verifieer dat die domein nie reeds by cPanel bygevoeg is nie
- Maak seker dat jou cPanel-rekening nie sy limiet vir byvoegdomeine of subdomeine bereik het nie

### SSL-Sertifikaatprobleme {#ssl-certificate-issues}
- Die integrasie hanteer nie die uitgifte van SSL-sertifikaat nie
- Jy sal cPanel se SSL/TLS-hulpmiddels of AutoSSL-funksie moet gebruik om SSL-sertifikaat vir jou domeine uit te gee
- Alternatief kan jy 'n diens soos Let's Encrypt met cPanel se AutoSSL gebruik
