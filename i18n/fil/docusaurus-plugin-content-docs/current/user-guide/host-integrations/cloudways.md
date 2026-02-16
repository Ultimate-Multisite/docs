---
title: Integrasyon sa Cloudways
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways Integration

## Pangkalahatang-tanaw
Ang Cloudways ay isang managed cloud hosting platform na nagbibigay-daan sa iyong mag-deploy ng mga WordPress site sa iba't ibang cloud provider tulad ng DigitalOcean, AWS, Google Cloud, at iba pa. Pinapayagan ng integration na ito ang awtomatikong pag-sync ng domain at pamamahala ng SSL certificate sa pagitan ng Ultimate Multisite at Cloudways.

## Mga Feature
- Awtomatikong pag-sync ng domain
- Pamamahala ng SSL certificate
- Suporta para sa mga extra domain
- DNS validation para sa mga SSL certificate

## Mga Kinakailangan
Ang mga sumusunod na constant ay kailangang i-define sa iyong `wp-config.php` file:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Opsyonal, maaari mo ring i-define ang:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Mga Tagubilin sa Pag-setup

### 1. Kunin ang Iyong Cloudways API Credentials

1. Mag-log in sa iyong Cloudways dashboard
2. Pumunta sa "Account" > "API Keys"
3. Gumawa ng API key kung wala ka pang isa
4. Kopyahin ang iyong email at API key

### 2. Kunin ang Iyong Server at Application ID

1. Sa iyong Cloudways dashboard, pumunta sa "Servers"
2. Piliin ang server kung saan naka-host ang iyong WordPress multisite
3. Makikita ang Server ID sa URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Pumunta sa "Applications" at piliin ang iyong WordPress application
5. Makikita ang App ID sa URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Idagdag ang mga Constant sa wp-config.php

Idagdag ang mga sumusunod na constant sa iyong `wp-config.php` file:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Kung mayroon kang mga karagdagang domain na dapat palaging isama:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. I-enable ang Integration

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Mag-navigate sa "Domain Mapping" tab
3. Mag-scroll pababa sa "Host Integrations"
4. I-enable ang Cloudways integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana

### Pag-sync ng Domain

Kapag may domain na nai-map sa Ultimate Multisite:

1. Kinukuha ng integration ang lahat ng kasalukuyang naka-map na domain
2. Idinadagdag nito ang bagong domain sa listahan (kasama ang www version kung naaangkop)
3. Ipinapadala nito ang kumpletong listahan sa Cloudways sa pamamagitan ng API
4. Ina-update ng Cloudways ang mga domain alias para sa iyong application

Paalala: Kailangan ng Cloudways API na ipadala ang kumpletong listahan ng mga domain sa bawat pagkakataon, hindi lang pagdagdag o pag-alis ng mga indibidwal na domain.

### Pamamahala ng SSL Certificate

Pagkatapos ma-sync ang mga domain:

1. Sinusuri ng integration kung aling mga domain ang may valid na DNS record na nakaturo sa iyong server
2. Nagpapadala ito ng request sa Cloudways para mag-install ng Let's Encrypt SSL certificate para sa mga domain na iyon
3. Hinahawakan ng Cloudways ang pag-issue at pag-install ng SSL certificate

## Mga Extra Domain

Ang `WU_CLOUDWAYS_EXTRA_DOMAINS` constant ay nagbibigay-daan sa iyo na magtakda ng mga karagdagang domain na palaging dapat isama kapag nagsi-sync sa Cloudways. Kapaki-pakinabang ito para sa:

- Mga domain na hindi pinamamahalaan ng Ultimate Multisite
- Mga wildcard domain (hal., `*.example.com`)
- Mga development o staging domain

## Pag-troubleshoot

### Mga Isyu sa API Connection
- Tiyaking tama ang iyong email at API key
- Suriin kung tama ang iyong server at application ID
- Siguraduhing may kinakailangang mga pahintulot ang iyong Cloudways account

### Mga Isyu sa SSL Certificate
- Kinakailangan ng Cloudways na may valid na DNS record ang mga domain na nakaturo sa iyong server bago mag-issue ng mga SSL certificate
- Bina-validate ng integration ang mga DNS record bago humiling ng mga SSL certificate
- Kung hindi nai-issue ang mga SSL certificate, suriin kung tama ang pagturo ng iyong mga domain sa IP address ng iyong server

### Hindi Naidagdag ang Domain
- Suriin ang mga log ng Ultimate Multisite para sa anumang mga error message
- Tiyaking hindi pa naidagdag ang domain sa Cloudways
- Siguraduhing sinusuportahan ng iyong Cloudways plan ang bilang ng mga domain na idinadagdag mo
