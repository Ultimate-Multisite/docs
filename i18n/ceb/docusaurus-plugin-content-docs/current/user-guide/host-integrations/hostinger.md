---
title: Integrasyon sa Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integrasyon sa Hostinger (hPanel) {#hostinger-hpanel-integration}

## Pangkalahatan {#overview}

Ang Hostinger isa ka sikat nga web hosting provider nga may modernong control panel nga gitawag og hPanel. Ang Ultimate Multisite Hostinger integration nagtugot sa awtomatikong pag-sync sa domain tali sa Ultimate Multisite ug sa hPanel sa Hostinger, nga nagtugot kanimo sa awtomatikong pagdumala sa mga mapping sa domain ug subdomain direkta gikan sa imong WordPress admin.

## Mga Tampo (Features) {#features}

- Awtomatikong paghimo og addon domain sa hPanel
- Awtomatikong paghimo og subdomain sa hPanel (para sa subdomain multisite installations)
- Pag-alis sa domain kung ang mga mapping gubton
- Luwas nga integrasyon uban sa domain management API sa hPanel

## Mga Kinahanglanon (Requirements) {#requirements}

Aron gamiton ang Hostinger integration, kinahanglan nimo:

1. Usa ka Hostinger account nga adunay access sa hPanel
2. Usa ka API token gikan sa Hostinger
3. Ang mosunod nga mga constant nga gi-define sa imong `wp-config.php` file:

```php
define('WU_HOSTINGER_API_TOKEN', 'imong_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'imong_hostinger_account_id');
```

Optional, pwede pud nimong i-define:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Mga Instruksyon sa Setup (Setup Instructions) {#setup-instructions}

### 1. Paghimo sa Imong Hostinger API Token {#1-generate-your-hostinger-api-token}

1. Login sa imong Hostinger account ug i-access ang hPanel
2. Maglakaw ngadto sa **Account Settings** → **API Tokens**
3. I-click ang **Create New Token**
4. Hatagi og deskriptibo nga ngalan ang imong token (pananglitan, "Ultimate Multisite")
5. Pilia ang kinahanglanon nga mga permiso:
   - Domain management
   - Subdomain management
6. Kopyaha ang nahimo nga token ug i-store kini sa luwas

### 2. Pangitaa ang Imong Account ID {#2-find-your-account-id}

1. Sa hPanel, maglakaw ngadto sa **Account Settings** → **Account Information**
2. Ang imong Account ID anaa dinhi sa pahina
3. Kopyaha ug i-save niining ID para sa sunod nga lakang

### 3. Idugang ang mga Constants sa wp-config.php {#3-add-constants-to-wp-configphp}

Idugang ang mosunod nga mga constant sa imong `wp-config.php` file:

```php
define('WU_HOSTINGER_API_TOKEN', 'imong_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'imong_hostinger_account_id');
```

Kung ang imong Hostinger account naggamit og lain nga API endpoint, pwede nimo kini i-customize:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. I-enable ang Integrasyon {#4-enable-the-integration}

1. Sa imong WordPress admin, adto sa **Ultimate Multisite > Settings**
2. Mag-navigate sa tab nga **Domain Mapping**
3. Mag-scroll pababa ngadto sa **Host Integrations**
4. I-enable ang integrasyon sa **Hostinger (hPanel)**
5. I-click ang **Save Changes**

## Unsaon Kini Paglihok {#how-it-works}

### Addon Domains {#addon-domains}

Kung mag-map ka og domain sa Ultimate Multisite:

1. Ang integrasyon magpadala og request ngadto sa Hostinger's API aron iapil ang domain isip addon domain
2. Ang domain gi-configure nga magtudlo (point) sa imong root directory
3. Kung alimpyohan nimo ang domain mapping, awtomatikong kuhaon sa integrasyon ang addon domain gikan sa hPanel

### Subdomains {#subdomains}

Para sa subdomain multisite installations, kung maghimo ka og bag-ong site:

1. Ang integrasyon mokuha sa parte sa subdomain gikan sa tibuok domain
2. Magpadala kini og request ngadto sa Hostinger's API aron iapil ang subdomain
3. Ang subdomain gi-configure nga magtudlo (point) sa imong root directory

## Importante nga mga Nota {#important-notes}

- Ang integrasyon naggamit sa Hostinger's REST API para makig-istorya sa imong account
- Kinahanglan adunay kinahanglanon nga permiso ang imong API token alang sa pagdumala sa domain ug subdomain
- Dili giatubang sa integrasyon ang DNS configuration; kinahanglan na gayud nga gitudlo (pointed) ang mga domain ngadto sa imong Hostinger account
- Ang mga request sa API gihimo sa luwas pinaagi sa HTTPS
- Panalipdan og maayo ang imong API token ug ayaw gyud kini i-share publiko

## Troubleshooting {#troubleshooting}

### Mga Isyu sa Koneksyon sa API {#api-connection-issues}

---
### Pag-verify sa API at Account {#domain-not-added}

* Siguraduhon nga tama ang imong API token ug wala pa kini expired.
* I-check kung tama ang imong Account ID.
* Siguraduhon nga ang imong API token adunay kinahanglanon nga mga permiso para sa domain management.
* Siguraduhon nga aktibo ug maayo ang kahimtang sa imong Hostinger account.

### Domain Wala Pa Gitakda (Domain Not Added) {#ssl-certificate-issues}

* I-check ang Ultimate Multisite logs kung naay bisan unsang error messages.
* Siguraduhon nga wala pa kini gitakda sa imong Hostinger account.
* Siguraduhon nga wala pa naabot ang limitasyon sa addon domains sa imong Hostinger account.
* Kumpirmaha nga ang domain gidirekta sa imong Hostinger nameservers.

### Problema sa SSL Certificate (SSL Certificate Issues) {#support}

* Ang integration dili mag-handle sa pag-issue og SSL certificate.
* Kasagaran, ang Hostinger naghatag libreng SSL certificates pinaagi sa AutoSSL.
* Mahimo nimong ma-manage ang mga SSL certificates direkta sa hPanel ubos sa **SSL/TLS**.
* Alternatibo, gamita ang Let's Encrypt uban sa feature sa AutoSSL sa Hostinger.

## Suporta (Support)

Para sa dugang tabang bahin sa integration sa Hostinger, palihog magrefer niini:

* [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
* [Ultimate Multisite Documentation](/)
* [Ultimate Multisite Support](https://ultimatemultisite.com/support)
