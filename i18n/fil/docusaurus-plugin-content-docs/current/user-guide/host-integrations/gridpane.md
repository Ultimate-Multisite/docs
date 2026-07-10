---
title: Pagsasama ng GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Pag-integrate ng GridPane {#gridpane-integration}

## Pangkalahatang-tanaw {#overview}
Ang GridPane ay isang specialized na control panel para sa WordPress hosting na ginawa para sa mga seryosong WordPress professional. Ang integration na ito ay nagbibigay-daan sa automatic na pag-sync ng domain at pamamahala ng SSL certificate sa pagitan ng Ultimate Multisite at GridPane.

## Mga Feature {#features}
- Automatic na pag-sync ng domain
- Pamamahala ng SSL certificate
- Automatic na pag-configure ng SUNRISE constant

## Mga Kinakailangan {#requirements}
Ang mga sumusunod na constant ay kailangang i-define sa iyong `wp-config.php` file:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Mga Hakbang sa Pag-setup {#setup-instructions}

### 1. Kunin ang Iyong GridPane API Credentials {#1-get-your-gridpane-api-credentials}

1. Mag-log in sa iyong GridPane dashboard
2. Pumunta sa "Settings" > "API"
3. Mag-generate ng API key kung wala ka pang isa
4. Kopyahin ang iyong API key

### 2. Kunin ang Iyong Server at Site ID {#2-get-your-server-and-site-ids}

1. Sa iyong GridPane dashboard, pumunta sa "Servers"
2. Piliin ang server kung saan naka-host ang iyong WordPress multisite
3. Tandaan ang Server ID (makikita sa URL o sa server details page)
4. Pumunta sa "Sites" at piliin ang iyong WordPress site
5. Tandaan ang Site ID (makikita sa URL o sa site details page)

### 3. Idagdag ang mga Constant sa wp-config.php {#3-add-constants-to-wp-configphp}

Idagdag ang mga sumusunod na constant sa iyong `wp-config.php` file:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. I-enable ang Integration {#4-enable-the-integration}

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Mag-navigate sa "Domain Mapping" tab
3. Mag-scroll pababa sa "Host Integrations"
4. I-enable ang GridPane integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana {#how-it-works}

Kapag may domain na na-map sa Ultimate Multisite:

1. Ang integration ay magpapadala ng request sa API ng GridPane para idagdag ang domain sa iyong site
2. Automatic na hahawakan ng GridPane ang pag-provision ng SSL certificate
3. Kapag tinanggal ang isang domain mapping, aalisin ng integration ang domain mula sa GridPane

Automatic ding hinahawakan ng integration ang SUNRISE constant sa iyong wp-config.php file, na kinakailangan para gumana nang tama ang domain mapping.

## Pamamahala ng SUNRISE Constant {#sunrise-constant-management}

Isang natatanging feature ng GridPane integration ay automatic nitong ibinabalik ang SUNRISE constant sa wp-config.php para maiwasan ang mga conflict sa sariling domain mapping system ng GridPane. Tinitiyak nito na parehong sistema ay makakapagtrabaho nang magkasama nang walang problema.

## Pag-troubleshoot {#troubleshooting}

### Mga Isyu sa API Connection {#api-connection-issues}
- I-verify na tama ang iyong API key
- Tingnan na tama ang iyong server at site ID
- Siguraduhin na ang iyong GridPane account ay may kinakailangang mga permission

### Mga Isyu sa SSL Certificate {#ssl-certificate-issues}
- Maaaring magtagal ang GridPane sa pag-issue ng mga SSL certificate
- I-verify na ang iyong mga domain ay maayos na nakaturo sa IP address ng iyong server
- Tingnan ang GridPane SSL settings para sa iyong site

### Hindi Naidagdag ang Domain {#domain-not-added}
- Tingnan ang Ultimate Multisite logs para sa anumang error message
- I-verify na hindi pa naidagdag ang domain sa GridPane
- Siguraduhin na maayos ang configuration ng DNS records ng iyong domain
