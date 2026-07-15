---
title: Integrasyon ng Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integrasyon sa Hostinger (hPanel)

## Pangkalahatang Ideya {#overview}

Ang Hostinger ay isang sikat na web hosting provider na may modernong control panel na tinatawag na hPanel. Ang Ultimate Multisite Hostinger integration ay nagbibigay-daan para sa awtomatikong pag-sync ng domain sa pagitan ng Ultimate Multisite at ng hPanel ng Hostinger, kaya maaari mong i-manage nang awtomatiko ang mga domain mapping at subdomain mula mismo sa iyong WordPress admin.

## Mga Katangian {#features}

- Awtomatikong paglikha ng addon domain sa hPanel
- Awtomatikong paglikha ng subdomain sa hPanel (para sa subdomain multisite installations)
- Pag-alis ng domain kapag nabura ang mga mapping
- Walang aberyang integrasyon sa domain management API ng hPanel

## Mga Kinakailangan {#requirements}

Para magamit ang Hostinger integration, kailangan mo ng:

1. Isang account sa Hostinger na may access sa hPanel
2. Isang API token mula sa Hostinger
3. Ang mga sumusunod na constant na nakapudpod (defined) sa iyong `wp-config.php` file:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Opsyonal, maaari mo ring tukuyin (define):

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Mga Panuto sa Pag-set Up {#setup-instructions}

### 1. Gumawa ng Iyong Hostinger API Token {#1-generate-your-hostinger-api-token}

1. Mag-log in sa iyong account ng Hostinger at pumunta sa hPanel
2. Pumunta sa **Account Settings** → **API Tokens**
3. I-click ang **Create New Token**
4. Bigyan ng deskriptibong pangalan ang iyong token (halimbawa, "Ultimate Multisite")
5. Piliin ang kinakailangang mga pahintulot (permissions):
   - Domain management
   - Subdomain management
6. Kopyahin ang nabuong token at itago ito nang ligtas

### 2. Hanapin ang Iyong Account ID {#2-find-your-account-id}

1. Sa hPanel, pumunta sa **Account Settings** → **Account Information**
2. Ang iyong Account ID ay makikita sa pahinang ito
3. Kopyahin at i-save ang ID na ito para sa susunod na hakbang

### 3. Magdagdag ng mga Constant sa wp-config.php {#3-add-constants-to-wp-configphp}

Idagdag ang mga sumusunod na constant sa iyong `wp-config.php` file:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Kung ang Hostinger account mo ay gumagamit ng ibang API endpoint, pwede mo itong i-customize:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. I-enable ang Integration {#4-enable-the-integration}

1. Sa iyong WordPress admin, pumunta sa **Ultimate Multisite > Settings**
2. Pumunta sa tab na **Domain Mapping**
3. Mag-scroll pababa sa **Host Integrations**
4. I-enable ang integration ng **Hostinger (hPanel)**
5. I-click ang **Save Changes**

## Paano Ito Gumagana {#how-it-works}

### Addon Domains {#addon-domains}

Kapag nag-map ka ng domain sa Ultimate Multisite:

1. Ang integration ay magpapadala ng request sa Hostinger's API para idagdag ang domain bilang addon domain
2. Ang domain ay naka-configure na ituro sa iyong root directory
3. Kapag tinanggal mo ang domain mapping, awtomatikong tatanggalin ng integration ang addon domain mula sa hPanel

### Subdomains {#subdomains}

Para sa subdomain multisite installations, kapag may bagong site kang ginawa:

1. Ang integration ay kukuha ng bahagi ng subdomain mula sa buong domain
2. Magpapadala ito ng request sa Hostinger's API para idagdag ang subdomain
3. Ang subdomain ay naka-configure na ituro sa iyong root directory

## Mahalagang Paalala {#important-notes}

- Gumagamit ang integration ng Hostinger's REST API para makipag-usap sa iyong account
- Ang iyong API token ay dapat may kaukulang pahintulot para sa pamamahala ng domain at subdomain
- Hindi hinahawakan ng integration ang DNS configuration; dapat nang ituro na ang mga domain sa iyong Hostinger account
- Ang mga API request ay ginagawa nang ligtas sa pamamagitan ng HTTPS
- Panatilihing secure ang iyong API token at huwag itong ibahagi nang publiko

## Pag-troubleshoot {#troubleshooting}

### Mga Isyu sa Koneksyon ng API {#api-connection-issues}

- Siguraduhin na tama ang iyong API token at hindi pa ito expired
- Tingnan kung tama ang iyong Account ID
- Siguraduhin na may tamang pahintulot (permissions) ang iyong API token para sa domain management
- I-verify na aktibo at nasa mabuting kalagayan ang iyong Hostinger account

### Domain Hindi Idinagdag {#domain-not-added}

- Tingnan ang Ultimate Multisite logs para sa anumang error messages
- Siguraduhin na hindi pa idinadagdag ang domain sa iyong Hostinger account
- Tiyakin na hindi pa naabot ng iyong Hostinger account ang limitasyon para sa addon domains
- I-confirm na tama ang pag-point ng domain sa iyong Hostinger nameservers

### Mga Isyu sa SSL Certificate {#ssl-certificate-issues}

- Hindi hinahawakan ng integration ang pag-issue ng SSL certificate
- Karaniwan, nagbibigay ang Hostinger ng libreng SSL certificates sa pamamagitan ng AutoSSL
- Maaari mong i-manage ang mga SSL certificate nang direkta sa hPanel sa ilalim ng **SSL/TLS**
- Bilang alternatibo, gamitin ang Let's Encrypt kasama ang feature ng AutoSSL ng Hostinger

## Suporta {#support}

Para sa karagdagang tulong tungkol sa integration ng Hostinger, pakitingnan ang mga sumusunod:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
