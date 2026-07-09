---
title: Integrasyon sa GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integration {#gridpane-integration}

## Overview {#overview}
Ang GridPane usa ka espesyal nga WordPress hosting control panel nga gihimo para sa mga seryosong WordPress professional. Kini nga integration nagtugot sa awtomatikong pag-sync sa domain ug pagdumala sa SSL certificate tali sa Ultimate Multisite ug GridPane.

## Features {#features}
- Awtomatikong pag-sync sa domain
- Pagdumala sa SSL certificate
- Awtomatikong konfigurasyon sa SUNRISE constant

## Requirements {#requirements}
Kinahanglan nga mag-define ang mosunod nga mga constant sa imong `wp-config.php` file:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Setup Instructions {#setup-instructions}

### 1. Kuhaa ang Imong GridPane API Credentials {#1-get-your-gridpane-api-credentials}

1. Mag-login sa imong GridPane dashboard
2. Adto sa "Settings" > "API"
3. Mag-generate og API key kung wala ka pa
4. Kopya ang imong API key

### 2. Kuhaa ang Imong Server ug Site IDs {#2-get-your-server-and-site-ids}

1. Sa imong GridPane dashboard, adto sa "Servers"
2. Pilia ang server diin gipahimutang ang imong WordPress multisite
3. Note ang Server ID (makita sa URL o sa server details page)
4. Adto sa "Sites" ug piliha ang imong WordPress site
5. Note ang Site ID (makita sa URL o sa site details page)

### 3. Idugang ang mga Constants sa wp-config.php {#3-add-constants-to-wp-configphp}

Idugang ang mosunod nga mga constant sa imong `wp-config.php` file:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. I-enable ang Integration {#4-enable-the-integration}

1. Sa imong WordPress admin, adto sa Ultimate Multisite > Settings
2. Maglakaw ngadto sa "Domain Mapping" tab
3. Mag-scroll pababa ngadto sa "Host Integrations"
4. I-enable ang GridPane integration
5. I-click ang "Save Changes"

## Unsaon Kini Paglihok {#how-it-works}

Kung adunay domain nga gi-map sa Ultimate Multisite:

1. Ang integration nagpadala og request sa API sa GridPane para iapil ang domain sa imong site
2. Ang GridPane mismo ang mag-handle sa paghatag og SSL certificate
3. Kung alimpyohan nimo ang domain mapping, ang integration makuha usab kini gikan sa GridPane

Ang integration pud awtomatikong nag-handle sa SUNRISE constant sa imong wp-config.php file, nga kinahanglanon para magtrabaho pag-ayo ang domain mapping.

## Pagdumala sa SUNRISE Constant {#sunrise-constant-management}

Usa ka talagsaon nga feature sa GridPane integration kay kini awtomatikong ibalik (reverts) ang SUNRISE constant sa wp-config.php aron malikayan ang mga away sa kaugalingong sistema sa domain mapping sa GridPane. Kini nagsiguro nga ang duha ka sistema makatrabaho uban og maayo nga walay problema.

## Pag-troubleshoot {#troubleshooting}

### Mga Problema sa API Connection {#api-connection-issues}
- Siguraduhon nga tama ang imong API key
- Susi kung tama ang imong server ug site IDs
- Siguraduhon nga ang imong GridPane account adunay kinahanglanon nga mga permiso

### Mga Problema sa SSL Certificate {#ssl-certificate-issues}
- Ang GridPane mahimong magkinahanglan og gamay nga oras aron mag-issue og SSL certificates
- Siguraduhon nga ang imong mga domain tama gyud nga nagtudlo (pointing) sa IP address sa imong server
- Susi sa mga setting sa SSL sa GridPane para sa imong site

### Domain Wala Nadugang {#domain-not-added}
- Susihon ang Ultimate Multisite logs alang sa bisan unsang error messages
- Siguraduhon nga wala pa kini nadugang sa GridPane
- Siguraduhon nga tama ang pagka-configure sa DNS records sa imong domain
