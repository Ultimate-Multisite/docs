---
title: Integrasyon sa CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

Ipinaliliwanag ng gabay na ito kung paano i-configure ang Ultimate Multisite CyberPanel integration upang ang mga domain na naka-map sa iyong network ay awtomatikong maidagdag (at maalis) bilang virtual hosts sa CyberPanel, kasama ang opsyonal na auto-SSL provisioning sa pamamagitan ng Let's Encrypt.

## Ano ang Ginagawa Nito

- Kapag may domain na naka-map sa Ultimate Multisite, tinatawag ng integration ang CyberPanel API upang gumawa ng virtual host para sa domain na iyon.
- Kapag tinanggal ang domain mapping, tinatawag ng integration ang API upang burahin ang katumbas na virtual host.
- Kapag naka-enable ang auto-SSL, agad na sinisimulan ng integration ang pag-isyu ng Let's Encrypt certificate pagkatapos mabuo ang virtual host.
- Opsyonal ding nagdadagdag/nag-aalis ito ng `www.` alias depende sa iyong setting na "Auto-create www subdomain" sa Domain Mapping settings.

## Paunang Kakailanganin

- Isang gumaganang CyberPanel instance (inirerekomenda ang v2.3 o mas bago) na maabot mula sa iyong WordPress server.
- Isang umiiral na website sa CyberPanel na nagsisilbi na bilang root ng iyong WordPress network. Idinadagdag ng integration ang mga bagong virtual hosts sa server na ito.
- Naka-enable ang CyberPanel API access. Gumagamit ng iyong CyberPanel admin username at password para sa authentication.
- Ang iyong DNS records para sa mga naka-map na domain ay dapat nang nakaturo sa IP address ng iyong server bago makapag-isyu ng valid certificate ang auto-SSL.

## Mga Kinakailangan

Dapat itakda ang mga constant na sumusunod sa iyong `wp-config.php` file:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opsyonal ding, maaari mong itakda ang:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — mag-iisyu ng Let's Encrypt SSL pagkatapos ng paggawa ng domain
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Ginagamit para sa contact ng SSL certificate
```

## Mga Hakbang sa Pag-setup

### 1. I-enable ang CyberPanel API

1. Mag-log in sa iyong CyberPanel dashboard bilang administrator.
2. Pumunta sa **Security** > **SSL** at kumpirmahin na aktibo ang SSL sa mismong CyberPanel interface (kailangan ito para sa secure API calls).
3. Ang CyberPanel API ay available sa `https://your-server-ip:8090/api/` by default. Walang karagdagang hakbang na kailangan para i-enable ito — naka-on ito by default para sa mga admin user.

### 2. Magdagdag ng Constants sa wp-config.php

Idagdag ang mga constant na sumusunod sa iyong `wp-config.php` file bago ang linya na `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Para i-enable ang auto-SSL (inirerekomenda):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. I-enable ang Integration

1. Sa iyong WordPress network admin, pumunta sa **Ultimate Multisite** > **Settings**.
2. Mag-navigate sa **Domain Mapping** tab.
3. Mag-scroll pababa sa **Host Integrations**.
4. I-enable ang **CyberPanel** integration.
5. I-click ang **Save Changes**.

### 4. I-verify ang Koneksyon

Gamitin ang built-in connection test sa settings wizard:

1. Pumunta sa **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. I-click ang **Test Connection**.
3. Ang isang success message ay nagkukumpirma na naabot ng plugin ang CyberPanel API at na-authenticate nang tama.

## Paano Ito Gumagana

### Domain Mapping

Kapag may domain na naka-map sa Ultimate Multisite:

1. Nagpapadala ang integration ng `POST` request sa `/api/createWebsite` sa iyong CyberPanel host.
2. Gumagawa ang CyberPanel ng bagong virtual host para sa domain sa ilalim ng naka-configure na package.
3. Ang document root ay itinakda upang tumuro sa iyong WordPress network root directory.
4. Kapag tinanggal ang domain mapping, tinatawag ng integration ang `/api/deleteWebsite` upang linisin ang virtual host.

### Auto-SSL

Kapag ang `WU_CYBERPANEL_AUTO_SSL` ay `true`:

1. Pagkatapos mabuo ang virtual host, tinatawag ng integration ang `/api/issueSSL` para sa domain.
2. Humihiling ang CyberPanel ng Let's Encrypt certificate gamit ang ACME HTTP-01 challenge.
3. Awtomatikong niire-renew ng CyberPanel ang certificate bago ito mag-expire.

> **Mahalaga:** Ang DNS ay dapat ganap nang ma-propagate sa IP address ng iyong server bago makapag-validate ng domain ang Let's Encrypt. Kung bumagsak ang pag-isyu ng SSL pagkatapos mag-map, maghintay para sa DNS propagation at muling i-trigger ang SSL mula sa CyberPanel dashboard sa ilalim ng **SSL** > **Manage SSL**.

### www Subdomain

Kung naka-enable ang **Auto-create www subdomain** sa iyong Domain Mapping settings, gumagawa rin ang integration ng virtual host alias para sa `www.<domain>` at, kapag naka-on ang auto-SSL, nag-iisyu ng certificate na sumasaklaw sa parehong apex at www variants.

### Email Forwarders

Kapag aktibo ang [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon, maaari ring magbigay ng customer email forwarders ang CyberPanel. Ang mga forwarder ay nagra-route ng mga mensahe mula sa isang domain address patungo sa ibang inbox nang hindi gumagawa ng buong mailbox, na kapaki-pakinabang para sa mga alias tulad ng `info@customer-domain.test` o `support@customer-domain.test`.

Bago i-enable ang forwarders para sa mga customer:

1. Kumpirmahin na naka-configure ang mga CyberPanel constants sa itaas at pumasa ang connection test.
2. I-enable ang CyberPanel email provider sa Emails addon settings.
3. Kumpirmahin na umiiral na ang customer domain sa CyberPanel bago gumawa ng forwarder.
4. Gumawa ng test forwarder at magpadala ng mensahe sa pamamagitan nito bago ialok ang feature sa production plans.

Kung bumagsak ang paggawa ng forwarder, suriin muna ang Ultimate Multisite activity logs, pagkatapos ay kumpirmahin sa CyberPanel na umiiral ang source domain at na ang API user ay may email-management permissions.

## Configuration Reference

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | Buong URL sa iyong CyberPanel instance kasama ang port, hal. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | CyberPanel admin username |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | CyberPanel admin password |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | CyberPanel hosting package na ipapasa sa mga bagong virtual hosts |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | Mag-iisyu ng Let's Encrypt SSL certificate pagkatapos ng paggawa ng domain |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | PHP version para sa mga bagong virtual hosts (dapat tumugma sa bersyon na naka-install sa CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | No | — | Contact email para sa pagpaparehistro ng SSL certificate |

## Mahahalagang Paalala

- Gumagamit ang API ng CyberPanel ng session-based token authentication. Awtomatikong hinahawakan ng integration ang pagkuha ng token sa bawat API call.
- Ang CyberPanel admin account mo ay dapat may pahintulot na gumawa at magbura ng mga website.
- Ang CyberPanel ay tumatakbo sa port na `8090` by default. Kung gumagamit ang iyong server ng firewall, tiyakin na ang port na ito ay ma-access mula sa WordPress application server.
- Hindi pinamamahalaan ng integration ang DNS records. Kailangan mong ituro ang domain DNS sa IP address ng iyong server bago i-map ang domain sa Ultimate Multisite.
- Kung gumagamit ka ng OpenLiteSpeed (OLS), awtomatikong nagti-trigger ng graceful restart pagkatapos ng mga pagbabago sa virtual host. Walang manual na interbensyon ang kailangan.

## Troubleshooting

### API Connection Refused

- I-verify na bukas ang port na `8090` sa firewall ng iyong server.
- Kumpirmahin na ang halaga ng `WU_CYBERPANEL_HOST` ay kasama ang tamang protocol (`https://`) at port.
- Tingnan na valid ang CyberPanel SSL certificate mo; ang self-signed certificates ay maaaring magdulot ng TLS verification failures. Itakda ang `WU_CYBERPANEL_VERIFY_SSL` sa `false` lamang sa mga pinagkakatiwalaang private network environments.

### Authentication Errors

- Kumpirmahin na tama ang iyong `WU_CYBERPANEL_USERNAME` at `WU_CYBERPANEL_PASSWORD` sa pamamagitan ng pag-log in sa CyberPanel nang direkta.
- Nagla-lock ang CyberPanel ng mga account pagkatapos ng paulit-ulit na failed login attempts. Tingnan ang **Security** > **Brute Force Monitor** sa CyberPanel kung may lockouts.

### Domain Not Created

- Tingnan ang Ultimate Multisite activity log (**Ultimate Multisite** > **Activity Logs**) para sa mga API error messages.
- I-verify na ang package na tinukoy sa `WU_CYBERPANEL_PACKAGE` ay umiiral sa CyberPanel (**Packages** > **List Packages**).
- Tiyakin na hindi pa rehistrado ang domain bilang website sa CyberPanel — ang duplicate website creation ay nagbabalik ng error.

### SSL Certificate Not Issued

- Kumpirmahin na ganap nang na-propagate ang DNS: dapat magbalik ang `dig +short your-domain.com` ng IP address ng iyong server.
- Nagpapatupad ang Let's Encrypt ng rate limits. Kung kamakailan kang nag-isyu ng ilang certificate para sa parehong domain, maghintay bago mag-ulit.
- Tingnan ang CyberPanel SSL logs sa ilalim ng **Logs** > **Error Logs** para sa detalye ng mga pagkabigo sa pag-isyu ng certificate.
- Bilang fallback, maaari mong i-isyu ang SSL nang mano-mano mula sa CyberPanel: **SSL** > **Manage SSL** > piliin ang domain > **Issue SSL**.

## References

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
