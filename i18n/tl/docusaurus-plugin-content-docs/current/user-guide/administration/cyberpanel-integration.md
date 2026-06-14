---
title: Integrasyon ng CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

Ipaliwanag ng gabay na ito kung paano i-configure ang Ultimate Multisite CyberPanel integration para awtomatikong idagdag (at tanggalin) ang mga domain na naka-map sa iyong network bilang virtual host sa CyberPanel, kasama ang opsyon para sa auto-SSL provisioning gamit ang Let's Encrypt.

## Ano ang Ginagawa Nito

- Kapag may domain na naka-map sa Ultimate Multisite, tatawagin ng integration ang CyberPanel API para gumawa ng virtual host para sa domain na iyon.
- Kapag tinanggal ang pag-map ng domain, tatawagin ng integration ang API para burahin ang katumbas na virtual host.
- Kapag naka-enable ang auto-SSL, agad na magti-trigger ang integration ng Let's Encrypt certificate issuance pagkatapos lumikha ng virtual host.
- Opsyonal na nagdaragdag/nagtatanggal ng `www.` alias depende sa iyong setting na "Auto-create www subdomain" sa Domain Mapping settings.

## Mga Kinakailangan (Prerequisites)

- Isang tumatakbong CyberPanel instance (inirerekomenda ang v2.3 o mas bago) na naaabot mula sa iyong WordPress server.
- Isang umiiral na website sa CyberPanel na nagsisilbing root ng iyong WordPress network. Ang integration ay magdadagdag ng mga bagong virtual host sa server na ito.
- Naka-enable ang CyberPanel API access. Ang pag-authenticate ay gumagamit ng iyong CyberPanel admin username at password.
- Dapat ay nakatuturo na ang iyong DNS records para sa mga naka-map na domain sa IP address ng iyong server bago maibigay ng auto-SSL ang isang balidong sertipiko.

## Mga Pangangailangan (Requirements)

Ang mga sumusunod na constant ay dapat tukuyin sa iyong `wp-config.php` file:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opsyonal, maaari mo ring tukuyin:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — issue Let's Encrypt SSL after domain creation
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Ginagamit para sa pakikipag-ugnayan ng SSL certificate

## Mga Panuto sa Pag-set Up

### 1. I-enable ang CyberPanel API

1. Mag-log in sa iyong CyberPanel dashboard bilang administrator.
2. Pumunta sa **Security** > **SSL** at tiyakin na aktibo ang SSL sa mismong interface ng CyberPanel (kinakailangan para sa ligtas na pagtawag ng API).
3. Ang CyberPanel API ay available sa `https://your-server-ip:8090/api/` nang default. Walang karagdagang hakbang na kailangan para i-enable ito — naka-on ito para sa mga admin user nang default.

### 2. Magdagdag ng Constants sa wp-config.php

Idagdag ang mga sumusunod na constants sa iyong `wp-config.php` file bago ang linya na `/* That's all, stop editing! */`:

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
2. Pumunta sa tab na **Domain Mapping**.
3. Mag-scroll pababa patungo sa **Host Integrations**.
4. I-enable ang integration ng **CyberPanel**.
5. I-click ang **Save Changes**.

### 4. Beripikahin ang Koneksyon

Gamitin ang built-in connection test sa settings wizard:
```

1. Pumunta sa **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. I-click ang **Test Connection**.
3. Isang mensahe ng tagumpay ang kumpirmang ang plugin ay nakakaabot sa CyberPanel API at nag-authenticate nang tama.

## Paano Ito Gumagana

### Domain Mapping

Kapag may domain na ini-map sa Ultimate Multisite:

1. Ang integration ay magpapadala ng `POST` request sa `/api/createWebsite` sa iyong CyberPanel host.
2. Lumilikha ang CyberPanel ng bagong virtual host para sa domain sa ilalim ng naka-configure na package.
3. Itinakda ang document root upang ituro ito sa network root directory ng iyong WordPress.
4. Kapag tinanggal ang domain mapping, tatawagin ng integration ang `/api/deleteWebsite` para linisin ang virtual host.

### Auto-SSL

Kapag ang `WU_CYBERPANEL_AUTO_SSL` ay `true`:

1. Pagkatapos lumikha ang virtual host, tatawagin ng integration ang `/api/issueSSL` para sa domain.
2. Hihingi ang CyberPanel ng Let's Encrypt certificate gamit ang ACME HTTP-01 challenge.
3. Awtomatikong ina-renew ng CyberPanel ang sertipiko bago mag-expire.

> **Mahalaga:** Dapat na lubusang naipapasa (propagated) ang DNS sa IP address ng iyong server bago ma-validate ng Let's Encrypt ang domain. Kung nabigo ang pag-issue ng SSL agad pagkatapos i-map, maghintay muna sa DNS propagation at muling i-trigger ang SSL mula sa CyberPanel dashboard sa ilalim ng **SSL** > **Manage SSL**.

### www Subdomain

Kung naka-enable ang **Auto-create www subdomain** sa iyong Domain Mapping settings, gagawa rin ang integration ng isang virtual host alias para sa `www.<domain>` at, kapag naka-on ang auto-SSL, maglalabas ito ng sertipiko na sumasaklaw sa parehong apex at www variants.

### Email Forwarders

Kapag aktibo ang [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon, kaya ring magbigay ang CyberPanel ng customer email forwarders. Ang mga forwarder na ito ay nagre-route ng mensahe mula sa isang domain address patungo sa ibang inbox nang hindi kailangang gumawa ng buong mailbox, na kapaki-pakinabang para sa mga alias tulad ng `info@customer-domain.test` o `support@customer-domain.test`.

Bago i-enable ang forwarders para sa mga customer:

1. Siguraduhin na naka-configure ang mga constant ng CyberPanel sa itaas at pumasa ang connection test.
2. I-enable ang CyberPanel email provider sa settings ng Emails addon.
3. I-confirm na umiiral na ang domain ng customer sa CyberPanel bago gumawa ng forwarder.
4. Gumawa ng isang test forwarder at magpadala ng mensahe dito bago i-offer ang feature sa production plans.

Kung nabigo ang paggawa ng forwarder, tingnan muna ang Ultimate Multisite activity logs, at pagkatapos ay i-confirm sa CyberPanel na umiiral ang source domain at may email-management permissions ang API user.

## Gabay sa Konfigurasyon

| Constant | Kinakailangan | Default | Deskripsyon |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Oo | — | Buong URL ng iyong CyberPanel instance kasama ang port, halimbawa: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Oo | — | Username ng admin ng CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Oo | — | Password ng admin ng CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Oo | `Default` | CyberPanel hosting package na itatalaga sa mga bagong virtual host |
| `WU_CYBERPANEL_AUTO_SSL` | Hindi | `true` | Mag-issue ng Let's Encrypt SSL certificate pagkatapos lumikha ng domain |
| `WU_CYBERPANEL_PHP_VERSION` | Hindi | `PHP 8.2` | Bersyon ng PHP para sa mga bagong virtual host (dapat tumugma sa bersyong naka-install sa CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Hindi | — | Email na makokontak para sa pagpaparehistro ng SSL certificate |

## Mahalagang Paalala

Ginagamit ng API ng CyberPanel ang session-based token authentication. Awtomatikong kinukuha ng integration ang token sa bawat tawag sa API.
Dapat may pahintulot (permissions) ang iyong CyberPanel admin account na lumikha at magbura ng mga website.
Ang CyberPanel ay tumatakbo sa port `8090` nang default. Kung ang server mo ay gumagamit ng firewall, siguraduhing maa-access ang port na ito mula sa WordPress application server.
Hindi ina-manage ng integration ang DNS records. Kailangan mong ituro ang domain DNS sa IP address ng iyong server bago i-mapa ang domain sa Ultimate Multisite.
Kung gumagamit ka ng OpenLiteSpeed (OLS), awtomatikong magsasagawa ng graceful restart pagkatapos ng mga pagbabago sa virtual host. Walang kailangang manual na interbensyon.

## Pag-troubleshoot

### API Connection Refused

- Siguraduhin na bukas ang port `8090` sa firewall ng iyong server.
- I-confirm na ang halaga ng `WU_CYBERPANEL_HOST` ay may tamang protocol (`https://`) at port.
- Tingnan kung balido ang CyberPanel SSL certificate mo; ang mga self-signed certificate ay maaaring magdulot ng TLS verification failures. Itakda ang `WU_CYBERPANEL_VERIFY_SSL` sa `false` lamang sa mga trusted private network environment.

### Authentication Errors

- I-confirm na tama ang iyong `WU_CYBERPANEL_USERNAME` at `WU_CYBERPANEL_PASSWORD` sa pamamagitan ng direktang pag-login sa CyberPanel.
- Kinokondena (locks) ng CyberPanel ang mga account pagkatapos ng paulit-ulit na hindi matagumpay na pag-login. Tingnan ang **Security** > **Brute Force Monitor** sa loob ng CyberPanel kung mayroong lockouts.

### Domain Not Created

- Tingnan ang activity log ng Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) para sa mga error message ng API.
- I-verify na umiiral ang package na tinukoy sa `WU_CYBERPANEL_PACKAGE` sa CyberPanel (**Packages** > **List Packages**).
- Siguraduhin na hindi pa nakarehistro ang domain bilang website sa CyberPanel — ang paglikha ng duplicate website ay magreresulta sa error.

### SSL Certificate Not Issued

- I-confirm na fully propagated ang DNS: Dapat ibalik ng `dig +short your-domain.com` ang IP address ng iyong server.
- Ang Let's Encrypt ay may mga limitasyon sa bilis (rate limits). Kung kamakailan mo pa lang nag-issue ng ilang sertipiko para sa parehong domain, maghintay muna bago subukan ulit.
- Tingnan ang CyberPanel SSL logs sa ilalim ng **Logs** > **Error Logs** para sa detalye tungkol sa mga pagkabigo sa pag-issue ng sertipiko.
- Bilang fallback, maaari kang mag-issue ng SSL nang mano-mano mula sa CyberPanel: Pumunta sa **SSL** > **Manage SSL** > piliin ang domain > **Issue SSL**.

## Mga Sanggunian

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
