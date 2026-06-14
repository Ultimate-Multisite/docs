---
title: Integrasyon sa cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integrasyon sa cPanel

## Pangkalahatang-ideya
Ang cPanel ay isa sa pinakasikat na web hosting control panel na ginagamit ng maraming shared at dedicated hosting providers. Ang integrasyong ito ay nagbibigay-daan para sa awtomatikong pag-sync ng domain sa pagitan ng Ultimate Multisite at cPanel, na nagpapahintulot sa iyo na awtomatikong magdagdag ng mga domain alias at subdomain sa iyong cPanel account.

## Mga Katangian
- Awtomatikong paglikha ng addon domain sa cPanel
- Awtomatikong paglikha ng subdomain sa cPanel (para sa subdomain multisite installations)
- Pag-alis ng domain kapag nabura ang mga mapping

## Mga Kinakailangan
Ang mga sumusunod na constant ay dapat tukuyin sa iyong `wp-config.php` file:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opsyonal, maaari mo ring tukuyin ang:

```php
define('WU_CPANEL_PORT', 2083); // Ang default ay 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Ang default ay /public_html
```

## Mga Panuto sa Pag-set Up

### 1. Kunin ang Iyong cPanel Credentials

1. Kumuha ng iyong username at password sa cPanel mula sa iyong hosting provider
2. Tukuyin ang iyong cPanel host (karaniwan ay `cpanel.yourdomain.com` o `yourdomain.com:2083`)

### 2. Magdagdag ng mga Constant sa wp-config.php

Idagdag ang mga sumusunod na constant sa iyong `wp-config.php` file:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opsyonal, maaari mong i-customize ang port at root directory:

```php
define('WU_CPANEL_PORT', 2083); // Baguhin kung gumagamit ng ibang port ang iyong cPanel
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Baguhin kung iba ang iyong document root
```

### 3. I-enable ang Integrasyon

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Pumunta sa tab na "Domain Mapping"
3. I-scroll pababa patungo sa "Host Integrations"
4. I-enable ang cPanel integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana

### Addon Domains

Kapag may domain na naka-map sa Ultimate Multisite:

1. Ang integration ay magpapadala ng request sa API ng cPanel para idagdag ang domain bilang addon domain
2. Ang domain ay naka-configure na tumuturo sa iyong root directory
3. Kapag tinanggal ang isang domain mapping, tatanggalin ng integration ang addon domain mula sa cPanel

### Subdomains

Para sa subdomain multisite installations, kapag may bagong site na ginawa:

1. Ang integration ay kukuha ng bahagi ng subdomain mula sa buong domain
2. Magpapadala ito ng request sa API ng cPanel para idagdag ang subdomain
3. Ang subdomain ay naka-configure na tumuturo sa iyong root directory

## Mahalagang Paalala

- Gumagamit ang integration ng cPanel's API2 para makip komunikasyon sa iyong cPanel account
- Dapat may pahintulot (permissions) ang iyong cPanel account na magdagdag ng addon domains at subdomains
- Maaaring limitahan ng ilang hosting provider ang bilang ng addon domains o subdomains na maaari mong gawin
- Hindi hinahawakan ng integration ang DNS configuration; kailangan mo pa ring ituro ang iyong mga domain sa IP address ng iyong server

## Pag-troubleshoot

### Mga Isyu sa Koneksyon ng API
- Siguraduhin na tama ang iyong cPanel username at password
- Tingnan kung tama ang iyong cPanel host at accessible
- Tiyakin na may kaukulang pahintulot (permissions) ang iyong cPanel account
- Subukan gamitin ang buong URL para sa host (halimbawa, `https://cpanel.yourdomain.com`)

### Hindi Naisang Domain
- Tingnan ang Ultimate Multisite logs para sa anumang error messages
- Beripikahin na hindi pa naka-add ang domain sa cPanel
- Siguraduhin na hindi pa naabot ng iyong cPanel account ang limitasyon nito para sa addon domains o subdomains

### Mga Isyu sa SSL Certificate
- Hindi hinahawakan ng integration ang pag-isyu ng SSL certificate.
- Kailangan mong gumamit ng mga tool para sa SSL/TLS sa cPanel o ang feature na AutoSSL para mag-issue ng SSL certificates para sa iyong mga domain.
- Bilang alternatibo, maaari kang gumamit ng serbisyo tulad ng Let's Encrypt gamit ang AutoSSL ng cPanel.
