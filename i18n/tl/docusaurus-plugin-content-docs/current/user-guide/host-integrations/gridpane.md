---
title: Integrasyon ng GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integrasyon sa GridPane

## Pangkalahatang-ideya
Ang GridPane ay isang espesyal na control panel para sa pag-host ng WordPress na ginawa para sa mga seryosong propesyonal sa WordPress. Ang integrasyong ito ay nagpapagana ng awtomatikong pag-sync ng domain at pamamahala ng SSL certificate sa pagitan ng Ultimate Multisite at GridPane.

## Mga Katangian
- Awtomatikong pag-sync ng domain
- Pamamahala ng SSL certificate
- Awtomatikong konfigurasyon ng SUNRISE constant

## Mga Kinakailangan
Ang mga sumusunod na constants ay dapat itakda sa iyong `wp-config.php` file:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Mga Panuto sa Pag-set Up

### 1. Kunin ang Iyong GridPane API Credentials

1. Mag-log in sa iyong GridPane dashboard
2. Pumunta sa "Settings" > "API"
3. Gumawa ng API key kung wala ka pa
4. Kopyahin ang iyong API key

### 2. Kunin ang Iyong Server at Site IDs

1. Sa iyong GridPane dashboard, pumunta sa "Servers"
2. Piliin ang server kung saan naka-host ang iyong WordPress multisite
3. Tandaan ang Server ID (makikita sa URL o sa pahina ng detalye ng server)
4. Pumunta sa "Sites" at piliin ang iyong WordPress site
5. Tandaan ang Site ID (makikita sa URL o sa pahina ng detalye ng site)

### 3. Magdagdag ng mga Constants sa wp-config.php

Idagdag ang mga sumusunod na constants sa iyong `wp-config.php` file:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. I-enable ang Integrasyon

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Mag-navigate sa tab na "Domain Mapping"
3. Mag-scroll pababa sa "Host Integrations"
4. I-enable ang GridPane integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana

Kapag may domain na naka-map sa Ultimate Multisite:

1. Ang integration ay nagpapadala ng request sa API ng GridPane para idagdag ang domain sa iyong site
2. Awtomatikong hinahawakan ng GridPane ang pagbibigay ng SSL certificate
3. Kapag tinanggal ang domain mapping, tatanggalin ng integration ang domain mula sa GridPane

Awtomatiko rin itong hinahawakan ng integration ang SUNRISE constant sa iyong wp-config.php file, na kailangan para gumana nang tama ang domain mapping.

## Pamamahala ng SUNRISE Constant

Ang isang natatanging feature ng GridPane integration ay awtomatikong ibinabalik (reverts) nito ang SUNRISE constant sa wp-config.php para maiwasan ang mga conflict sa sariling sistema ng domain mapping ng GridPane. Tinitiyak nito na parehong sistema ay magagamit nang maayos nang walang problema.

## Pag-troubleshoot

### Mga Isyu sa Koneksyon ng API
- Siguraduhin na tama ang iyong API key
- Tingnan kung tama ang iyong server at site IDs
- Siguraduhin na may kaukulang pahintulot (permissions) ang iyong GridPane account

### Mga Isyu sa SSL Certificate
- Maaaring tumagal ng panahon ng GridPane para mag-issue ng mga SSL certificate
- I-verify na ang iyong mga domain ay tama ang pagtuturo (pointing) sa IP address ng iyong server
- Tingnan ang mga setting ng SSL ng GridPane para sa iyong site

### Hindi Naisang Domain
- Suriin ang Ultimate Multisite logs para sa anumang error messages
- I-verify na hindi pa naka-add ang domain sa GridPane
- Siguraduhin na tama ang pag-configure ng DNS records ng iyong domain
