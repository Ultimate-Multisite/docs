---
title: Integrasyon sa Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) Integration

## Overview {#overview}

Ang Hostinger ay isang sikat na web hosting provider na gumagamit ng modernong control panel na tinatawag na hPanel. Pinapayagan ng Ultimate Multisite Hostinger integration na maging awtomatiko ang pag-sync ng domain sa pagitan ng Ultimate Multisite at hPanel ng Hostinger. Dahil dito, maaari mong i-manage ang mga domain mapping at subdomain nang direkta mula sa iyong WordPress admin.

## Features {#features}

- Awtomatikong paggawa ng addon domain sa hPanel
- Awtomatikong paggawa ng subdomain sa hPanel (para sa mga instalasyon ng subdomain multisite)
- Pag-aalis ng domain kapag tinanggal ang mga mapping
- Seamless integration sa domain management API ng hPanel

## Requirements {#requirements}

Para magamit ang Hostinger integration, kailangan mo ang mga sumusunod:

1. Isang Hostinger account na may access sa hPanel
2. Isang API token mula sa Hostinger
3. Ang mga sumusunod na constants na tinukoy sa iyong `wp-config.php` file:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Opsyonal din, maaari mong tukuyin ang:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Setup Instructions {#setup-instructions}

### 1. Generate Your Hostinger API Token {#1-generate-your-hostinger-api-token}

1. Mag-log in sa iyong Hostinger account at i-access ang hPanel
2. Pumunta sa **Account Settings** → **API Tokens**
3. I-click ang **Create New Token**
4. Bigyan ng deskriptibong pangalan ang iyong token (hal., "Ultimate Multisite")
5. Piliin ang mga kinakailangang permissions:
   - Domain management
   - Subdomain management
6. Kopyahin ang nabuong token at itago ito nang ligtas

### 2. Find Your Account ID {#2-find-your-account-id}

1. Sa hPanel, pumunta sa **Account Settings** → **Account Information**
2. Ang iyong Account ID ay makikita sa pahinang ito
3. Kopyahin at i-save ang ID na ito para sa susunod na hakbang

### 3. Add Constants to wp-config.php {#3-add-constants-to-wp-configphp}

Idagdag ang mga sumusunod na constants sa iyong `wp-config.php` file:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Kung gumagamit ang iyong Hostinger account ng ibang API endpoint, maaari mo itong i-customize:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Enable the Integration {#4-enable-the-integration}

1. Sa iyong WordPress admin, pumunta sa **Ultimate Multisite > Settings**
2. Pumunta sa tab na **Domain Mapping**
3. Mag-scroll pababa sa **Host Integrations**
4. I-enable ang **Hostinger (hPanel)** integration
5. I-click ang **Save Changes**

## How It Works {#how-it-works}

### Addon Domains {#addon-domains}

Kapag nag-map ka ng domain sa Ultimate Multisite:

1. Magpapadala ang integration ng request sa Hostinger's API para idagdag ang domain bilang isang addon domain
2. Ang domain ay iko-configure para ituro sa iyong root directory
3. Kapag tinanggal ang domain mapping, awtomatikong aalisin ng integration ang addon domain mula sa hPanel

### Subdomains {#subdomains}

Para sa mga subdomain multisite installations, kapag gumawa ng bagong site:

1. Kukuha ang integration ng subdomain part mula sa buong domain
2. Magpapadala ito ng request sa Hostinger's API para idagdag ang subdomain
3. Ang subdomain ay iko-configure para ituro sa iyong root directory

## Important Notes {#important-notes}

- Gumagamit ang integration ng Hostinger's REST API para makipag-ugnayan sa iyong account
- Ang iyong API token ay dapat may mga kinakailangang permissions para sa domain at subdomain management
- Hindi hinahawakan ng integration ang DNS configuration; dapat nang ituturo ang mga domain sa iyong Hostinger account
- Ang mga API request ay ginagawa nang ligtas sa pamamagitan ng HTTPS
- Panatilihing ligtas ang iyong API token at huwag itong ibahagi sa publiko

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}

- I-verify na tama ang iyong API token at hindi pa ito expired
- I-check na tama ang iyong Account ID
- Siguraduhin na ang iyong API token ay may mga kinakailangang permissions para sa domain management
- I-verify na active at nasa maayos na kalagayan ang iyong Hostinger account

### Domain Not Added {#domain-not-added}

- Tingnan ang Ultimate Multisite logs para sa anumang error messages
- I-verify na hindi pa idinadagdag ang domain sa iyong Hostinger account
- Siguraduhin na hindi pa naabot ng iyong Hostinger account ang limitasyon nito para sa addon domains
- Kumpirmahin na ang domain ay maayos na itinuturo sa iyong Hostinger nameservers

### SSL Certificate Issues {#ssl-certificate-issues}

- Hindi hinahawakan ng integration ang pag-iisyu ng SSL certificate
- Karaniwang nagbibigay ang Hostinger ng libreng SSL certificates sa pamamagitan ng AutoSSL
- Maaari mong i-manage ang SSL certificates nang direkta sa hPanel sa ilalim ng **SSL/TLS**
- Bilang alternatibo, gamitin ang Let's Encrypt kasama ang AutoSSL feature ng Hostinger

## Support {#support}

Para sa karagdagang tulong sa Hostinger integration, mangyaring tingnan ang:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
