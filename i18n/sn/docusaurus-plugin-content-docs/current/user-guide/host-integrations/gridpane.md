---
title: Kugadzirwa neGridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integration ne GridPane

## Zvinisiso (Overview) {#overview}
GridPane ndiri control panel yakasimba (specialized) ya WordPress inoswe kune vafungamics veWordPress vakakakosha. Izvi integration inosimbisa (enables) syncing ye domain uye management ye SSL certificate zvakanaka pakati pe Ultimate Multisite ne GridPane.

## Zvinodiwa (Features) {#features}
- Syncing ye domain yakanaka
- Management ye SSL certificate
- Configuration yakasimba ya SUNRISE constant

## Zvinoda (Requirements) {#requirements}
Izvi constants dzinofanira kuva dziri mumafaili yako `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## Nheta Kuratidza (Setup Instructions) {#setup-instructions}

### 1. Shandisa Credentials ye GridPane API yako {#1-get-your-gridpane-api-credentials}

1. Ingira ku dashboard yako ya GridPane
2. Panda ku "Settings" > "API"
3. Shandisa API key kana haunengei uine
4. Shandisa API key yako

### 2. Shandisa Server uye Site IDs dzako {#2-get-your-server-and-site-ids}

1. Mu dashboard yako ya GridPane, penda ku "Servers"
2. Chibvumira server inosimbisa WordPress multisite yako
3. Ndinonoda Server ID (inogona kuone mune URL kana munzvimbo dze server details)
4. Panda ku "Sites" uye chibvumira site yako yeWordPress
5. Ndinonoda Site ID (inogona kuone mune URL kana munzvimbo dze site details)

### 3. Shanda Constants mumafaili `wp-config.php` {#3-add-constants-to-wp-configphp}

Shanda constants izvi mumafaili yako `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Shanda Integration {#4-enable-the-integration}

1. Mu admin yako yeWordPress, penda ku Ultimate Multisite > Settings
2. Panda ku tab ya "Domain Mapping"
3. Penda kupfuura ku "Host Integrations"
4. Shanda GridPane integration
5. Panda ku "Save Changes"

## Inoenda Sei (How It Works) {#how-it-works}

Kana domain inosimbiswa mu Ultimate Multisite:

1. Integration inenge request ku GridPane API kuti uingire domain wako ku site
2. GridPane inenge inenge iye (automatically) SSL certificate provisioning
3. Kana mapping ye domain irimo, integration ineya domain ku GridPane

Integration ineya neconstant SUNRISE mu wp-config.php yako, inenge inenge yenzera kuti zvisingane nezvinhu zvakakosha kune domain mapping kuti zvizokwanise kunge zvichikwanisa.

## Kuita NeConstant SUNRISE {#sunrise-constant-management}

Chinhu chinotore neunique pane integration ya GridPane ndiri kuti ineya constant SUNRISE mu wp-config.php inenge yenzera kuti zvisingane nezvinhu zvakakosha kune domain mapping ye GridPane. Izviro rinenge rinekuita kuti zvinhu zvose zvizokwanise kuendawe kubva kunge zvichikwanisa kunge zvichikwanisa kuendawe kubva kunge zvichikwanise kunge zvichikwanisa kuendawe kubva kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zvichikwanise kunge zv
