---
title: Integrasyon sa cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integrasyon sa cPanel

## Overview
Ang cPanel isa sa pinakasikat nga web hosting control panel nga gigamit sa daghang shared ug dedicated hosting providers. Kini nga integrasyon nagtugot sa awtomatikong pag-sync sa domain tali sa Ultimate Multisite ug cPanel, nga maghatag kanimo og awtomatiko nga pagdaghan og domain aliases ug subdomains sa imong cPanel account.

## Features
- Awtomatikong paghimo og addon domain sa cPanel
- Awtomatikong paghimo og subdomain sa cPanel (para sa subdomain multisite installations)
- Pagkuha sa domain kung ang mga mapping gihapus

## Requirements
Kinahanglan nga mag-define ka sa mosunod nga mga constant sa imong `wp-config.php` file:

```php
define('WU_CPANEL_USERNAME', 'imong_cpanel_username');
define('WU_CPANEL_PASSWORD', 'imong_cpanel_password');
define('WU_CPANEL_HOST', 'imong_cpanel_host');
```

Optional, pwede pud ka mag-define:

```php
define('WU_CPANEL_PORT', 2083); // Ang default kay 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Ang default kay /public_html
```

## Setup Instructions

### 1. Kuhaa ang Imong cPanel Credentials

1. Kuhaa ang imong username ug password sa cPanel gikan sa imong hosting provider
2. Tukoy kung unsa ang imong cPanel host (kasagaran `cpanel.yourdomain.com` o `yourdomain.com:2083`)

### 2. Idugang ang mga Constants sa wp-config.php

Idugang ang mosunod nga mga constant sa imong `wp-config.php` file:

```php
define('WU_CPANEL_USERNAME', 'imong_cpanel_username');
define('WU_CPANEL_PASSWORD', 'imong_cpanel_password');
define('WU_CPANEL_HOST', 'imong_cpanel_host');
```

Optional, pwede nimo usbon ang port ug root directory:

```php
define('WU_CPANEL_PORT', 2083); // Usbon kung ang imong cPanel nag-gamit og lain nga port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Usbon kung lahi ang imong document root
```

### 3. I-enable ang Integrasyon

1. Sa imong WordPress admin, adto sa Ultimate Multisite > Settings
2. Maglakaw sa "Domain Mapping" tab
3. I-scroll pababa ngadto sa "Host Integrations"
4. I-enable ang cPanel integration
5. I-click ang "Save Changes"

## Unsaon Kini Paglihok

### Addon Domains

Kung ma-mapa (mapped) ang usa ka domain sa Ultimate Multisite:

1. Ang integration magpadala og request ngadto sa API sa cPanel aron i-add ang domain isip addon domain
2. Ang domain gi-configure nga magtudlo sa imong root directory
3. Kung alimpyohan (removed) ang domain mapping, ang integration mopahimo og pagtangtang sa addon domain gikan sa cPanel

### Subdomains

Para sa subdomain multisite installations, kung adunay bag-ong site nga gigamit:

1. Ang integration mokuha sa bahin sa subdomain gikan sa tibuok domain
2. Magpadala kini og request ngadto sa API sa cPanel aron i-add ang subdomain
3. Ang subdomain gi-configure nga magtudlo sa imong root directory

## Importante nga mga Nota

- Ang integration naggamit sa cPanel's API2 para makig-istorya sa imong cPanel account
- Kinahanglan adunay permiso ang imong cPanel account aron mag-add og addon domains ug subdomains
- Ang pipila ka hosting provider mahimong maglimit sa gidaghanon sa addon domains o subdomains nga imong mahimo nga himuon
- Ang integration dili mobalhin sa DNS configuration; kinahanglan gihapon nimo itudlo ang imong mga domain ngadto sa IP address sa imong server

## Troubleshooting

### API Connection Issues
- Siguraduhon nga tama ang imong cPanel username ug password
- Susi kung tama ang imong cPanel host ug accessible kini
- Siguraduhon nga ang imong cPanel account adunay kinahanglanon nga mga permiso
- Sulayi gamiton ang tibuok URL para sa host (pananglitan, `https://cpanel.yourdomain.com`)

### Domain Dili Gitabang
- Susi sa Ultimate Multisite logs alang sa bisan unsang error messages
- Siguraduhon nga wala pa kini gi-add sa cPanel
- Siguraduhon nga ang imong cPanel account wala pa naabot sa limitasyon para sa addon domains o subdomains

### Mga Problema sa SSL Certificate

- Ang integration dili makahimo o mag-issue og SSL certificate.
- Kinahanglan nimo gamiton ang mga tool sa cPanel para sa SSL/TLS o ang feature nga AutoSSL aron mag-issue og SSL certificates para sa imong mga domain.
- Alternatibo, pwede ka mogamit og serbisyo sama sa Let's Encrypt uban sa AutoSSL sa cPanel.
