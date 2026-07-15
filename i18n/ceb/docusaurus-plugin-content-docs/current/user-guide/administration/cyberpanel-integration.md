---
title: Integrasyon sa CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

Kini ipasabot kung unsaon pag-configure sa Ultimate Multisite CyberPanel integration para awtomatikong madugang (ug gipahawa) ang mga domain nga gi-map sa imong network isip virtual hosts sa CyberPanel, uban sa opsyon nga auto-SSL provisioning pinaagi sa Let's Encrypt.

## Unsa Niini Ang Buhaton {#what-it-does}

- Kung adunay domain nga gi-map sa Ultimate Multisite, ang integration magtawag sa CyberPanel API aron maghimo og virtual host para sa domain nga na-map.
- Kung ang pag-map sa domain gubton, ang integration magtawag sa API aron madili ang katumbas nga virtual host.
- Kung ang auto-SSL gi-enable, ang integration magpukaw sa pag-issue sa certificate sa Let's Encrypt dayon human na mahimo ang virtual host.
- Opsina nga magdugang/magbawas sa `www.` alias depende sa imong setting sa "Auto-create www subdomain" sa Domain Mapping settings.

## Mga Kinahanglanon (Prerequisites) {#prerequisites}

- Usa ka nag-andar nga CyberPanel instance (recommended v2.3 o mas bag-o) nga maabot gikan sa imong WordPress server.
- Usa ka naay existing website sa CyberPanel nga nag-serve na sa root domain sa imong WordPress network. Ang integration magdugang og mga bag-ong virtual host niini nga server.
- Gi-enable ang CyberPanel API access. Ang authentication naggamit sa imong CyberPanel admin username ug password.
- Kinahanglan pa nga ang imong DNS records para sa mga gi-map nga domain nagtudlo na sa IP address sa imong server sa dili pa makahatag og balido nga certificate ang auto-SSL.

## Mga Kinahanglanon (Requirements) {#requirements}

Ang mosunod nga mga constant kinahanglan i-define sa imong `wp-config.php` file:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opsina, mahimo usab nimong i-define:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — issue Let's Encrypt SSL after domain creation
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Gigamit para sa contact sa SSL certificate

## Mga Instruksyon sa Pag-set Up

### 1. I-enable ang CyberPanel API

1. Mag-log in sa imong CyberPanel dashboard isip administrator.
2. Adto sa **Security** > **SSL** ug kumpirmahon nga aktibo ang SSL sa CyberPanel interface mismo (kinahanglan kini para sa luwas nga mga tawag sa API).
3. Ang CyberPanel API kay anaa sa `https://your-server-ip:8090/api/` sa default. Walay dugang lakang nga kinahanglan buhaton aron i-enable kini — aktibo na kini para sa admin users.

### 2. Idugang ang mga Constants sa wp-config.php

Idugang ang mosunod nga mga constants sa imong `wp-config.php` file sa dili pa ang linya nga `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'imong_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Para i-enable ang auto-SSL (recommended):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. I-enable ang Integration

1. Sa imong WordPress network admin, adto sa **Ultimate Multisite** > **Settings**.
2. Magpadulong sa tab nga **Domain Mapping**.
3. Mag-scroll pababa ngadto sa **Host Integrations**.
4. I-enable ang **CyberPanel** integration.
5. I-click ang **Save Changes**.

### 4. I-verify ang Koneksyon

Gamita ang built-in connection test sa settings wizard:
```

1. Adto sa **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. I-click ang **Test Connection**.
3. Usa ka success message nga nagpamatuod nga makabaton ang plugin sa CyberPanel API ug ma-authenticate kini og tarong.

## Unsaon Niini Paglihok {#setup-instructions}

### Domain Mapping {#1-enable-the-cyberpanel-api}

Kung na-mapa ang usa ka domain sa Ultimate Multisite:

1. Ang integration magpadala og `POST` request ngadto sa `/api/createWebsite` sa imong CyberPanel host.
2. Ang CyberPanel maghimo og bag-ong virtual host para sa domain ubos sa naka-configure nga package.
3. Ang document root gi-set aron magtudlo sa imong WordPress network root directory.
4. Kung alihon ang domain mapping, ang integration magtawag sa `/api/deleteWebsite` aron limpyohan ang virtual host.

### Auto-SSL {#2-add-constants-to-wp-configphp}

Kung ang `WU_CYBERPANEL_AUTO_SSL` kay `true`:

1. Human na mahimo ang virtual host, ang integration magtawag sa `/api/issueSSL` para sa domain.
2. Ang CyberPanel mangayo og Let's Encrypt certificate gamit ang ACME HTTP-01 challenge.
3. Ang certificate awtomatikong i-renew sa CyberPanel sa dili pa mahurot.

> **Importante:** Kinahanglan nga hingpit na ma-propagate ang DNS ngadto sa IP address sa imong server sa dili pa makapamatud-an og domain ang Let's Encrypt. Kung mapakyas ang pag-issue og SSL dayon human sa mapping, paghulat sa DNS propagation ug i-trigger pag-usab ang SSL gikan sa CyberPanel dashboard ubos sa **SSL** > **Manage SSL**.

### www Subdomain {#3-enable-the-integration}

Kung ang **Auto-create www subdomain** gi-enable sa imong Domain Mapping settings, ang integration maghimo usab og virtual host alias para sa `www.<domain>` ug, kung ang auto-SSL anaa, mag-issue kini og certificate nga sakop sa apex ug www variants.

### Email Forwarders {#4-verify-connectivity}

Kung aktibo na ang [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon, mahimo usab nga maghatag og customer email forwarders ang CyberPanel. Ang mga forwarder nagpadala sa mga mensahe gikan sa usa ka domain address ngadto sa laing inbox nga dili kinahanglan maghimo og tibuok mailbox, nga nindot gamiton para sa mga alias sama sa `info@customer-domain.test` o `support@customer-domain.test`.

Sa dili pa mag-enable og forwarders alang sa mga customer:

1. Siguraduhon nga ang mga constant sa CyberPanel sa ibabaw kay naka-configure na ug ang connection test nagmalampuson.
2. I-enable ang CyberPanel email provider sa settings sa Emails addon.
3. Siguraduhon nga ang domain sa customer anaa na sa CyberPanel sa dili pa maghimo og forwarder.
4. Paghimo og test forwarder ug magpadala og mensahe pinaagi niini sa dili pa i-offer ang feature sa production plans.

Kung mapakyas ang paghimo sa forwarder, sulayi una ang Ultimate Multisite activity logs, dayon kumpirmaha sa CyberPanel nga anaa ra ang source domain ug nga ang API user adunay email-management permissions.

## Configuration Reference {#how-it-works}

| Constant | Kinahanglan? | Default | Deskripsyon |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Oo | — | Full URL sa imong CyberPanel instance lakip ang port, pananglitan: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Oo | — | Admin username sa CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Oo | — | Admin password sa CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Oo | `Default` | CyberPanel hosting package nga ihatag sa bag-ong virtual hosts |
| `WU_CYBERPANEL_AUTO_SSL` | Dili | `true` | Mag-issue og Let's Encrypt SSL certificate human sa paghimo sa domain |
| `WU_CYBERPANEL_PHP_VERSION` | Dili | `PHP 8.2` | PHP version para sa bag-ong virtual hosts (kinahanglan magtugma sa version nga gi-install sa CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Dili | — | Email contact para sa pagparehistro sa SSL certificate |

## Important Notes {#domain-mapping}

Ang API sa CyberPanel naggamit og session-based token authentication. Ang integration ma-acquire na automatic ang token sa matag tawag sa API.
Kinahanglan nga ang imong admin account sa CyberPanel adunay mga permiso sa paghimo ug pagtanggal og websites.
Ang CyberPanel nag-andar sa port `8090` sa default. Kung ang imong server naggamit og firewall, siguruha nga kini ma-access gikan sa WordPress application server.
Ang integration dili magdumala og DNS records. Kinahanglan nimong itudlo ang domain DNS ngadto sa IP address sa imong server sa dili pa ma-mapa (mapa) ang domain sa Ultimate Multisite.
Kung naggamit ka og OpenLiteSpeed (OLS), awtomatikong mag-trigger og graceful restart human sa mga pagbag-o sa virtual host. Walay kinahanglan nga manual intervention.

## Troubleshooting {#auto-ssl}

### API Connection Refused {#www-subdomain}

- Siguraduhon nga bukas ang port `8090` sa firewall sa imong server.
- Kumpirmaha nga ang value sa `WU_CYBERPANEL_HOST` naglakip sa saktong protocol (`https://`) ug port.
- Siguroha nga ang CyberPanel SSL certificate nimo valid; ang self-signed certificates mahimong maghatag og TLS verification failures. Ihaplos ang `WU_CYBERPANEL_VERIFY_SSL` ngadto sa `false` lamang sa mga trusted private network environment.

### Authentication Errors {#email-forwarders}

- Kumpirmaha nga tama ang imong `WU_CYBERPANEL_USERNAME` ug `WU_CYBERPANEL_PASSWORD` pinaagi sa direktang pag-login sa CyberPanel.
- Ang CyberPanel mag-lock sa mga account human sa paulit-ulit nga mapakyas nga mga pag-login. Siguroha ang **Security** > **Brute Force Monitor** sa CyberPanel kung adunay mga lockout.

### Domain Not Created {#configuration-reference}

- Siguroha ang Ultimate Multisite activity log (**Ultimate Multisite** > **Activity Logs**) alang sa mga error messages sa API.
- Kumpirmaha nga ang package nga gihubad sa `WU_CYBERPANEL_PACKAGE` anaa sa CyberPanel (**Packages** > **List Packages**).
- Siguraduhon nga wala pa na nagparehistro isip website ang domain sa CyberPanel — ang paghimo og duplikat nga website maghatag og error.

### SSL Certificate Not Issued {#important-notes}

Kumpirmaha kung ang DNS na nag-propagate na gyud: Ang `dig +short your-domain.com` kinahanglan magbalik sa IP address sa imong server.
Ang Let's Encrypt naghatag og rate limits. Kung bag-o lang kaayo mogawas og daghang mga certificate para sa parehas nga domain, paghulat una sa pag-retry.
Susiha ang CyberPanel SSL logs ubos sa **Logs** > **Error Logs** para makita ang detalye kung ngano napakyas ang pag-issue sa certificate.
Isip fallback, pwede ka mag-issue og SSL manually gikan sa CyberPanel: **SSL** > **Manage SSL** > piliha ang domain > **Issue SSL**.

## Mga Reference {#troubleshooting}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
