---
title: Whakawhanaungatanga cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Whakawhanaungatanga me cPanel

## Whakataki
cPanel he tākaro nui i whānui i panelau whakahaere web hosting, e whakamahia e ngā pahi shared me dedicated hosting marama. He tino whaiaro tēnei integration ki te whakamahi domain syncing automatically i antara Ultimate Multisite me cPanel, e hoki ai i te whero (alias) domain me subdomain ki te account cPanel mo koe automatically.

## Manawa
- Whakawhanaungatanga addon domain automatic i cPanel
- Whakawhanaungatanga subdomain automatic i cPanel (mo installation subdomain multisite)
- Whakamutunga domain i roto i te whero mapping tika

## Wāhi Whakaritenga
Me tino whakaaro ana i ngā constants berikut i tō file `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

He tino whaiaro, he taea ai koe te whakaaro i te port me te root directory:

```php
define('WU_CPANEL_PORT', 2083); // Chara ki te whakawhiti pō (port) inae e cPanel
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Chara ki te root directory i roto i tō document
```

## Whakaritenga Whakahaere

### 1. Takea Iroa Hauora mo cPanel

1. Takea i tō username me password o cPanel mo tō pahi hosting
2. Whakawhiti i tō host o cPanel (kāore i te tika `cpanel.yourdomain.com` he `yourdomain.com:2083`)

### 2. Whakawhiti Constants ki wp-config.php

Whakawhiti ngā constants berikut ki tō file `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

He tino whaiaro, he taea ai koe te whakamaoritanga i te port me te root directory:

```php
define('WU_CPANEL_PORT', 2083); // Chara ki te whakawhiti pō (port) inae e cPanel
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Chara ki te root directory i roto i tō document
```

### 3. Whakawhanaungatanga Integration

Whakawhanaunga i te integration

1. I roto i admin WordPress, đi te Ultimate Multisite > Settings
2. Hī te "Domain Mapping" tab
3. Whakarongo ki "Host Integrations"
4. Whakawhanaungatanga (Enable) te integration o cPanel
5. Whakawātea te "Save Changes"

## He aha ia mahi?

### Addon Domains

I roto i te wā e whakatika i te domain i Ultimate Multisite:

1. Ka tōku te integration ngā kaitiakitanga (request) ki te API o cPanel kia whai i te domain ko addon domain
2. Ka whakamahinga te domain kia pōutu ki te root directory o koe
3. I roto i te wā e whakatika i te mapping o domain, ka whero te integration te addon domain i cPanel

### Subdomains

Mō ngā installation multisite subdomain, i roto i te wā e whai whakaaro ana i te site hou:

1. Ka whakawātea te integration te whakamāhi (extract) o te subdomain mai i te domain katoa
2. Ka tōku te request ki te API o cPanel kia whero te subdomain
3. Ka whakamahinga te subdomain kia pōutu ki te root directory o koe

## Ngā Tohutohu Whitianga

- Ka whakamahia te integration API2 o cPanel mō te whai wāhi ana i te account o cPanel mo koe
- Me heke i ngā whānau (permissions) o aua domain addon me subdomain i tō account o cPanel
- He tino whai whakaaro ngaahi whipiti (hosting providers) e taea ai i te whakaputa hoki te whānau addon domains ka taea e koe
- Kaau ia mō te whakarite DNS; ka taea e koe te pōutu i ngā domain ki te IP address o tō server

## Whakamutunga (Troubleshooting)

### Ngā Whainga Whitianga API Connection
- Kia whakamārama ko te username me te password o aua cPanel he tino pai
- Kia whakatika ko te host o aua cPanel he tino pai ana me ka taea te whai i ai
- Kia tiaki ko te account o aua cPanel he whipiti (permissions) e pēnei ana
- Whakarongo ki te whakamahi i te URL katoa mō te host (e.g., `https://cpanel.yourdomain.com`)

### Domain Kaau Ka taea Te Whero
- Kia whakaaro ko ngā logs o Ultimate Multisite he tino pai ana mo ngā error messages
- Kia whakatika ko te domain kaau ka pēnei ana i cPanel
- Kia tiaki ko te account o aua cPanel kaau i tō whipiti (limit) mō addon domains me subdomains

### Ngā Whainga Whakamahi Sertifika SSL (SSL Certificate Issues)
- Ko te whaiaro e whakamahia ei whakaae ki te whakawhiti i sertifika SSL.
- Ko te mea, ka taea e koe te whakamahi ngā taonga SSL/TLS o cPanel, heta AutoSSL, kia whakawhiti i sertifika SSL mō i waenga i ngā domain (domain) o koe.
- He whaiaro atu, ka taea hoki koe te whakamahi te whaiwhero (service) pēnei i Let's Encrypt me te AutoSSL o cPanel.
