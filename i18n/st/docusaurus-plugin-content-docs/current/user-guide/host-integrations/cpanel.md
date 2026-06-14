---
title: Ho fana'a le cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Ho Lihlelo le cPanel

Ho fana ka tsela efe ho ba le sehlopha sa cPanel.

## Le Litsoiso

cPanel ke e le seka se ka leboha seka se ka seka se ka seka se ka seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka se seka seka se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka leboha se ka le

## Boitshwaro

- Hoetsoho ho fetola domain e le add-on ka cPanel
- Hoetsoho ho fetola subdomain ka cPanel (ho baithuti tsa subdomain multisite)
- Ho faka domain haholo ha mapping a fetolwa

## Hoelo

Hoelo le fa tsela e fana ka ho ba le hoelo ea hau ka file ya hau ya `wp-config.php`:

Define ho:

`define('WU_CPANEL_USERNAME', 'username ea hau ea cPanel');`
`define('WU_CPANEL_PASSWORD', 'password ea hau ea cPanel');`
`define('WU_CPANEL_HOST', 'host ea hau ea cPanel');`

Ho ba le ho define:

```php
define('WU_CPANEL_PORT', 2083); // Le tšepo e le 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Le tšepo e le /public_html
```

## Litlhokwa tsa ho Setela (Setup Instructions)

### 1. Get Credentials ea cPanel ea hau

(Le tla go thusa ho utloha litšepo tsa hau tsa cPanel.)

1. Oa le tsela ho utloa leana la username le password ea hau ho ba le bohlokoa ka sebediso sa hau sa hosting.
2. Utloi leana la cPanel (cPanel host) haholo (o le thata `cpanel.yourdomain.com` kapa `yourdomain.com:2083`).

### 2. Thaba Constants ho wp-config.php

```php
// Custom logic when checkout completes
define( 'WP_DEBUG', true );
define( 'WP_HOME', 'https://www.yourdomain.com' );
define( 'WP_SITEURL', 'https://www.yourdomain.com' );
define( 'DB_NAME', 'your_database_name' );
define( 'DB_USER', 'your_database_user' );
define( 'DB_PASSWORD', 'your_database_password' );
```

Go fana ka fana ka tsela tse di fetang (constants) tsa hau ke lefile la `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Ho na le kholo, u ka u rata ho fetola port le directory ya root:

```php
define('WU_CPANEL_PORT', 2083); // Fetola ha u fetola ha cPanel ea hau e u rata port e fapaneng
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Fetola ha u fetola ha directory ya document e fapaneng
```

### 3. Baile ho Ho Hlahlobo (Enable the Integration)

1. Ha le WordPress admin ya hau, fana ka Ultimate Multisite > Settings.
2. Leha sefana la "Domain Mapping" (Mapping ea Domain).
3. Lela ka ho hlalosa "Host Integrations".
4. Baile integration ya cPanel.
5. Leha sefana la "Save Changes" (Ho Hlahloba Changelo).

## Eona e Ho Baola Kae (How It Works)

### Domain e Tlhaloso (Addon Domains)

Ha o fana fa domain e hlophiswe ka Ultimate Multisite:

1. Ho fana'a (integration) e fana ka tšepo (request) ho cPanel API ho feta le ho fana ka domain e le addon domain.
2. Domain e fetoga ho fana ka direre la hau (root directory).
3. Ha domain mapping e fetoga, ho fana'a (integration) ho fetoga domain e le addon domain ho cPanel.

### Subdomaine

Ho lona le tsela e ntle ho fana ka monate oa subdomaine. Ho feta moo sefapiso se se fapaneng sa site se se fetola:

1. Ho fana'a (extract) ho fana'a leela la domain lo ka domain lehle.
2. E fana'a tšepo (request) ho cPanel API ho fana'a leela la subdomain.
3. Subdomain e fana'a ho fana'a leela la directory la hau (root directory).

## Litlhaka tse mmele (Important Notes)

Ho fana'a le ho fetola:

* Ho feta ho fetola ho fetola, ho u sebelisa API2 ea cPanel ho buisana le khothong ea hau ea cPanel.
* Khothong ea hau ea cPanel e hloka litšomo ho feta domain le subdomains.
* Bašoe ba hosting ba fapaneng ba ka fetola sefaparo sa domains le subdomains o ka fetola.

Ho fana'a le ho fetola (integration) haholo ka tsela ea DNS. Ho hloka ho fana ka domain ea hau ka IP address ea server ea hau.

## Ho Fetola (Troubleshooting)

### Morero le Hoelo ea API

- Rehle hore o re le thata hore lemoho la username le password ea cPanel e le eona.
- Rehle hore o re le thata hore lemoho la host ea cPanel e le eona le ho fihlela ka bonako.
- Rehle hore o re le thata hore account ea cPanel ea hau e le na le litšomo (permissions) tse a hlokang.

- A reka le ho batla hore u tle u sebelise URL efe le fetolehang ea host (e.a., `https://cpanel.yourdomain.com`).

### Domain E ne a fetileng

- Re le log (logs) ea Ultimate Multisite ho hlola sehlopha se leboho.
- Re le fa domain e ne e fetileng ka cPanel.
- Re le fa akao ea cPanel ea hau e ne e fetileng ka limit ea addon domains kapa subdomains.

### Moruo a Sertifikati (SSL)

- Ho fana'a le ho fana'a sertifikati (SSL) haholo.
- O tla hloka ho u sebelise zitsela tsa cPanel tsa SSL/TLS kapa tsela ya AutoSSL ho fana'a sertifikati tsa domain ea hau.

Ho na le ho sebelisa tšebetso e le Let's Encrypt le AutoSSL ea cPanel.
