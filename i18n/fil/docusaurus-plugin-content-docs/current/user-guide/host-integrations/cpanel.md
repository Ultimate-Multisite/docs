---
title: Integrasyon ng cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integrasyon sa cPanel

## Pangkalahatang-ideya
Ang cPanel ay isa sa mga pinakapopular na control panel para sa web hosting na ginagamit ng maraming shared at dedicated hosting provider. Ang integrasyon na ito ay nagbibigay-daan sa awtomatikong pag-sync ng domain sa pagitan ng Ultimate Multisite at cPanel, para makapagdagdag ka ng mga domain alias at subdomain sa iyong cPanel account nang awtomatiko.

## Mga Feature
- Awtomatikong paggawa ng addon domain sa cPanel
- Awtomatikong paggawa ng subdomain sa cPanel (para sa subdomain multisite installation)
- Pag-alis ng domain kapag tinanggal ang mga mapping

## Mga Kinakailangan
Ang mga sumusunod na constant ay kailangang ideklara sa iyong `wp-config.php` file:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opsyonal, maaari mo ring ideklara ang:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Mga Hakbang sa Pag-setup

### 1. Kunin ang Iyong cPanel Credentials

1. Kunin ang iyong cPanel username at password mula sa iyong hosting provider
2. Alamin ang iyong cPanel host (karaniwan ay `cpanel.yourdomain.com` o `yourdomain.com:2083`)

### 2. Idagdag ang mga Constant sa wp-config.php

Idagdag ang mga sumusunod na constant sa iyong `wp-config.php` file:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opsyonal, maaari mong i-customize ang port at root directory:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. I-enable ang Integrasyon

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Pumunta sa "Domain Mapping" tab
3. Mag-scroll pababa sa "Host Integrations"
4. I-enable ang cPanel integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana

### Mga Addon Domain

Kapag may domain na na-map sa Ultimate Multisite:

1. Ang integrasyon ay magpapadala ng request sa API ng cPanel para idagdag ang domain bilang addon domain
2. Ang domain ay iko-configure para tumuro sa iyong root directory
3. Kapag tinanggal ang isang domain mapping, aalisin ng integrasyon ang addon domain mula sa cPanel

### Mga Subdomain

Para sa subdomain multisite installation, kapag may bagong site na nagawa:

1. Kukunin ng integrasyon ang subdomain part mula sa buong domain
2. Magpapadala ito ng request sa API ng cPanel para idagdag ang subdomain
3. Ang subdomain ay iko-configure para tumuro sa iyong root directory

## Mahahalagang Paalala

- Ang integrasyon ay gumagamit ng API2 ng cPanel para makipag-ugnayan sa iyong cPanel account
- Kailangan ng iyong cPanel account ng mga permission para makapagdagdag ng addon domain at subdomain
- Maaaring may limitasyon ang ilang hosting provider sa bilang ng addon domain o subdomain na maaari mong gawin
- Hindi hinahawakan ng integrasyon ang DNS configuration; kailangan mo pa ring ituro ang iyong mga domain sa IP address ng iyong server

## Pag-troubleshoot

### Mga Problema sa API Connection
- I-verify na tama ang iyong cPanel username at password
- Suriin na tama at accessible ang iyong cPanel host
- Tiyakin na may kinakailangang permission ang iyong cPanel account
- Subukang gamitin ang buong URL para sa host (hal., `https://cpanel.yourdomain.com`)

### Hindi Naidagdag ang Domain
- Tingnan ang Ultimate Multisite logs para sa anumang error message
- I-verify na hindi pa naidagdag ang domain sa cPanel
- Tiyakin na hindi pa naabot ng iyong cPanel account ang limitasyon nito para sa addon domain o subdomain

### Mga Problema sa SSL Certificate
- Hindi hinahawakan ng integrasyon ang pag-issue ng SSL certificate
- Kailangan mong gamitin ang SSL/TLS tools ng cPanel o ang AutoSSL feature para mag-issue ng SSL certificate para sa iyong mga domain
- Bilang alternatibo, maaari kang gumamit ng serbisyo tulad ng Let's Encrypt kasama ang AutoSSL ng cPanel
