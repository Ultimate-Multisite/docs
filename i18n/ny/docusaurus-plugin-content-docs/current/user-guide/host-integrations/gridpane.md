---
title: Kukumbutsa kwa GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Ubw GridPane Integration

## Umuvu (Overview) {#overview}
GridPane ndi control panel ya WordPress yomwe imapangidwa kwa wosqwamukira wa WordPress. Izi zikufotokozera kupeza kuti domain sync m'maka ndi ulamulira SSL certificate m'maka pakati pa Ultimate Multisite ndi GridPane.

## Mafunso (Features) {#features}
- Domain syncing yomwe imapangidwa m'maka
- Ulamulira SSL certificate
- Kufotokozera kwa SUNRISE constant m'maka

## Zomwe Zikufunika (Requirements) {#requirements}
Zomwe zikufunika kuti zimapezedwe m'file yanu ya `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## Mwayi Wopanga (Setup Instructions) {#setup-instructions}

### 1. Pange Credentials ya GridPane Yanu {#1-get-your-gridpane-api-credentials}

1. Kodi m'maka kuwoleka pa GridPane dashboard yanu
2. Kodi m'maka ku "Settings" > "API"
3. Pange API key ngati simukuti muli ndi iwo
4. Kopya API key yanu

### 2. Pange Server ndi Site IDs Yanu {#2-get-your-server-and-site-ids}

1. M'maka pa GridPane dashboard yanu, kodi m'maka ku "Servers"
2. Kose server imene WordPress multisite yanu ikupatsa
3. Kodi nkhani ya Server ID (yomwe imaphatikizidwa m'URL kapena pa ndalama za server)
4. Kodi m'maka ku "Sites" ndi kose site yanu ya WordPress
5. Kodi nkhani ya Site ID (yomwe imaphatikizidwa m'URL kapena pa ndalama za site)

### 3. Pange Constants mu wp-config.php {#3-add-constants-to-wp-configphp}

Pange constants zina zifunikira ku file yanu ya `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Onesha Integration (Enable the Integration) {#4-enable-the-integration}

1. M'maka pa admin ya WordPress yanu, kodi m'maka ku Ultimate Multisite > Settings
2. Kodi m'maka ku tab ya "Domain Mapping"
3. Kose m'maka ku "Host Integrations"
4. Onesha GridPane integration
5. Kodi m'maka ku "Save Changes"

## Kodi Imapangidwa Bwera (How It Works) {#how-it-works}

Pamene domain imapangidwa m'Ultimate Multisite:

1. Integrasi inafaka request ku GridPane API kuti muamba domain ku site yanu
2. GridPane inalipira (handles) SSL certificate kwayi
3. Pamene mapping ya domain ikapererwa, integrasi ikaperera domain ku GridPane

Integrasi inalipirawo automatically constant SUNRISE m'wp-config.php file yanu, komwe ndi iye ndi yofunika kuti mapping ya domain ite neza wopereka bwino.

## Kuwimba Constant SUNRISE {#sunrise-constant-management}

Chinthu chimodzi chachirayi cha integrasi ya GridPane ndikuti inalipirawo automatically constant SUNRISE m'wp-config.php ku mpaka kupanga mavuto ndi system yanu ya mapping ya domain. Izi zimapangitsa kuti zinthu zonse zikuleke neza kukhala ndi kuyamba ndi kutambira m'moyo wosonyeza (work together) m'moyo wosonyeza osati m'moyo wosonyeza.

## Kukhazikitsa Mavuto (Troubleshooting) {#troubleshooting}

### Mavuto pa API Connection {#api-connection-issues}
- Onani kuti API key yanu ndi yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe y
