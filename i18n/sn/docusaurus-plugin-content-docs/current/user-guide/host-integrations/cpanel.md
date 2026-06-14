---
title: Kugadzirwa ne cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# CPanel Integration

## Oraphorwe
cPanel ndiyo inoshoko yavo ye zvinovhu vachikwa nevanhu vange vashandisa kune hosting dzakawanda dze share na dedicated. Iyi integration inosimbisa syncing ya domain automatically kubva mu Ultimate Multisite ne cPanel, inosimbisa kuti utange kuenda nekubuda aliases uye subdomains ku account yako ye cPanel.

## Features
- Kuita addon domain automatic mu cPanel
- Kuita subdomain automatic mu cPanel (kune installations dzakawanda dze multisite dzakubva subdomain)
- Kufamba nedomain kana mappings acho akavara

## Requirements
Zvinotora constants izvi zvandinidzidzisa mu file yako `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Kuti unenge uri, unogona kuita izvi:

```php
define('WU_CPANEL_PORT', 2083); // Default ndiri 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default ndiri /public_html
```

## Setup Instructions

### 1. Shandisa Credentials dzako dze cPanel

1. Ndidzidzisa username nepassword yako ye cPanel kubva mu hosting provider wako
2. Tsvaka host yako ya cPanel (usually `cpanel.yourdomain.com` kana `yourdomain.com:2083`)

### 2. Shandisa Constants mu wp-config.php

Shandisa constants izvi mu file yako `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Kuti unenge uri, unogona kuunda port uye root directory:

```php
define('WU_CPANEL_PORT', 2083); // Gara kana cPanel yako inoshandisa port inotevera
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Gara kana document root yako inosvika sei
```

### 3. Onesha Integration

1. Muenda ku admin ya WordPress yako, uenda kwa Ultimate Multisite > Settings
2. Uenda kwenye tab inotizira "Domain Mapping" (Kupanga Domain)
3. Shuka chini hadi sehemu inoitwa "Host Integrations" (Uunganishaji wa Host)
4. Washa (Enable) uunganishaji wa cPanel
5. Bonya "Save Changes" (Hifadhi Mabadiliko)

## Jinsi Inavyofanya Kazi

### Addon Domains (Domain za Ziada)

Inapokuwa domain inapangwa (mapped) katika Ultimate Multisite:

1. Uunganishaji unatumia ombi kwa API ya cPanel ili kuongeza domain kama addon domain
2. Domain inafanywa iwe na maelezo yanayoonyesha directory yako kuu (root directory)
3. Wakati unapofuta upangaji wa domain, uunganishaji utafuta addon domain kutoka cPanel

### Subdomains (Subdomains)

Kwa usakinishaji wa multisite unaotumia subdomains, wakati msimbo mpya unapoundwa:

1. Uunganishaji unachukua sehemu ya subdomain kutoka kwenye domain nzima
2. Unatuma ombi kwa API ya cPanel ili kuongeza subdomain hiyo
3. Subdomain inafanywa iwe na maelezo yanayoonyesha directory yako kuu (root directory)

## Maelezo Muhimu

- Uunganishaji unatumia API2 ya cPanel ili kuwasiliana na akaunti yako ya cPanel
- Akaunti yako ya cPanel lazima iwe na ruhusa za kuongeza addon domains na subdomains
- Watoa huduma wengine wanaweza kupunguza idadi ya addon domains au subdomains unazoweza kutengeneza
- Uunganishaji haufanyi kazi ya DNS configuration; bado unahitaji kuonyesha domain zako kwenye anwani (IP address) ya seva yako

## Kutatua Matatizo (Troubleshooting)

### Masuala ya Muunganisho wa API (API Connection Issues)
- Thibitisha kwamba jina la mtumiaji na nenosiri lako la cPanel ni sahihi
- Angalia kwamba host yako ya cPanel inafanya kazi vizuri na inaweza kufikiwa
- Hakikisha kuwa akaunti yako ya cPanel ina ruhusa zinazohitajika
- Jaribu kutumia URL kamili ya host (k.m., `https://cpanel.yourdomain.com`)

### Domain Haikuongezwi (Domain Not Added)
- Angalia logs za Ultimate Multisite kwa ujumbe wowote wa makosa
- Thibitisha kwamba domain haipo tayari kwenye cPanel
- Hakikisha kuwa akaunti yako ya cPanel haijafikia kikomo cha addon domains au subdomains

### Matambudziko anokuti SSL Certificate

- Integration iyi inozoshanda kuteera (issue) SSL certificate.
- Unoziva kuti unoda kutenda (use) zvitulo zveSSL/TLS zvakasiyana-nyaya dzinogadzirwa nepanel cPanel kana feature ya AutoSSL kuti utende SSL certificates dzako dzine domain dzako.
- Nekuti chii chinogona kuita, unogona kuda kutenda service yakaita se Let's Encrypt nekuda kweAutoSSL ya cPanel.
