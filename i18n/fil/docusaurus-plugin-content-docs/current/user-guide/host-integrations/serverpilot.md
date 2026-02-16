---
title: Integrasyon ng ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Integration

## Pangkalahatang-tanaw
Ang ServerPilot ay isang cloud service para sa pag-host ng WordPress at iba pang PHP website sa mga server ng DigitalOcean, Amazon, Google, o kahit anong ibang server provider. Ang integration na ito ay nagbibigay-daan sa awtomatikong pag-sync ng domain at pamamahala ng SSL certificate sa pagitan ng Ultimate Multisite at ServerPilot.

## Mga Tampok
- Awtomatikong pag-sync ng domain
- Pamamahala ng SSL certificate gamit ang Let's Encrypt
- Awtomatikong pag-renew ng SSL

## Mga Kinakailangan
Ang mga sumusunod na constant ay kailangang ideklara sa iyong `wp-config.php` file:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Mga Hakbang sa Pag-setup

### 1. Kunin ang Iyong ServerPilot API Credentials

1. Mag-log in sa iyong ServerPilot dashboard
2. Pumunta sa "Account" > "API"
3. Gumawa ng bagong API key kung wala ka pang isa
4. Kopyahin ang iyong Client ID at API Key

### 2. Kunin ang Iyong App ID

1. Sa iyong ServerPilot dashboard, pumunta sa "Apps"
2. Piliin ang app kung saan naka-host ang iyong WordPress multisite
3. Makikita ang App ID sa URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Idagdag ang mga Constant sa wp-config.php

Idagdag ang mga sumusunod na constant sa iyong `wp-config.php` file:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. I-enable ang Integration

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Mag-navigate sa "Domain Mapping" tab
3. Mag-scroll pababa sa "Host Integrations"
4. I-enable ang ServerPilot integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana

### Pag-sync ng Domain

Kapag may domain na na-map sa Ultimate Multisite:

1. Kinukuha ng integration ang kasalukuyang listahan ng mga domain mula sa ServerPilot
2. Idinaragdag nito ang bagong domain sa listahan (kasama ang www version kung naaangkop)
3. Ipinapadala nito ang na-update na listahan sa ServerPilot sa pamamagitan ng API
4. Ina-update ng ServerPilot ang listahan ng domain para sa iyong application

### Pamamahala ng SSL Certificate

Pagkatapos ma-sync ang mga domain:

1. Awtomatikong ine-enable ng integration ang AutoSSL para sa iyong application
2. Pinapangasiwaan ng ServerPilot ang pag-issue at pag-install ng SSL certificate gamit ang Let's Encrypt
3. Pinapangasiwaan din ng ServerPilot ang awtomatikong pag-renew ng mga SSL certificate

## Pag-verify ng SSL Certificate

Ang integration ay naka-configure na para dagdagan ang bilang ng mga pagtatangkang mag-verify ng SSL certificate para sa ServerPilot, dahil maaaring magtagal bago mai-issue at ma-install ng ServerPilot ang mga SSL certificate. Bilang default, susubukan nito hanggang 5 beses, pero maaari itong i-adjust gamit ang mga filter.

## Pag-troubleshoot

### Mga Isyu sa API Connection
- Tiyaking tama ang iyong Client ID at API Key
- Tingnan kung tama ang iyong App ID
- Siguraduhing may kinakailangang permissions ang iyong ServerPilot account

### Mga Isyu sa SSL Certificate
- Kinakailangan ng ServerPilot na may valid na DNS record ang mga domain na nakaturo sa iyong server bago mag-issue ng SSL certificate
- Kung hindi nai-issue ang mga SSL certificate, tingnan kung tama ang pagturo ng iyong mga domain sa IP address ng iyong server
- Maaaring magtagal bago mai-issue at ma-install ng ServerPilot ang mga SSL certificate (karaniwang 5-15 minuto)

### Hindi Naidagdag ang Domain
- Tingnan ang Ultimate Multisite logs para sa anumang error message
- Tiyaking hindi pa naidagdag ang domain sa ServerPilot
- Siguraduhing sinusuportahan ng iyong ServerPilot plan ang bilang ng mga domain na idinaragdag mo

### Pag-alis ng Domain
- Sa kasalukuyan, walang paraan ang ServerPilot API para mag-alis ng mga indibidwal na domain
- Kapag tinanggal ang isang domain mapping sa Ultimate Multisite, ia-update ng integration ang listahan ng domain sa ServerPilot para hindi na isama ang tinanggal na domain
