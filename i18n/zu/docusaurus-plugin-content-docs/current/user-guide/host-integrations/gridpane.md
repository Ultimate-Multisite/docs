---
title: Ukuhlanganiswa kwe-GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Ukuhlanganiswa kwe-GridPane

## Uhlolojikelele {#overview}
I-GridPane iyiphaneli yokulawula i-WordPress hosting ekhethekile eyakhelwe ochwepheshe be-WordPress abazimisele. Lokhu kuhlanganiswa kunika amandla ukuvumelanisa okuzenzakalelayo kwama-domain nokuphathwa kwezitifiketi ze-SSL phakathi kwe-Ultimate Multisite ne-GridPane.

## Izici {#features}
- Ukuvumelanisa okuzenzakalelayo kwama-domain
- Ukuphathwa kwezitifiketi ze-SSL
- Ukulungiselelwa okuzenzakalelayo kwe-SUNRISE constant

## Izimfuneko {#requirements}
Ama-constant alandelayo kufanele achazwe efayeleni lakho le-`wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Imiyalelo Yokusetha {#setup-instructions}

### 1. Thola Imininingwane Yakho ye-GridPane API {#1-get-your-gridpane-api-credentials}

1. Ngena ku-GridPane dashboard yakho
2. Iya ku-"Settings" > "API"
3. Dala i-API key uma ungakabi nayo
4. Kopisha i-API key yakho

### 2. Thola ama-ID Eseva Nesayithi Akho {#2-get-your-server-and-site-ids}

1. Ku-GridPane dashboard yakho, iya ku-"Servers"
2. Khetha iseva lapho i-WordPress multisite yakho isingathwe khona
3. Qaphela i-Server ID (ibonakala ku-URL noma ekhasini lemininingwane yeseva)
4. Iya ku-"Sites" bese ukhetha isayithi lakho le-WordPress
5. Qaphela i-Site ID (ibonakala ku-URL noma ekhasini lemininingwane yesayithi)

### 3. Engeza Ama-constant ku-wp-config.php {#3-add-constants-to-wp-configphp}

Engeza ama-constant alandelayo efayeleni lakho le-`wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Vumela Ukuhlanganiswa {#4-enable-the-integration}

1. Ku-WordPress admin yakho, iya ku-Ultimate Multisite > Settings
2. Zulazulela kuthebhu ethi "Domain Mapping"
3. Skrolela phansi ku-"Host Integrations"
4. Vumela ukuhlanganiswa kwe-GridPane
5. Chofoza "Save Changes"

## Kusebenza Kanjani {#how-it-works}

Lapho i-domain imephwa ku-Ultimate Multisite:

1. Ukuhlanganiswa kuthumela isicelo ku-API ye-GridPane ukuze kwengezwe i-domain kusayithi lakho
2. I-GridPane iphatha ngokuzenzakalelayo ukuhlinzekwa kwesitifiketi se-SSL
3. Lapho ukumephwa kwe-domain kususwa, ukuhlanganiswa kuzosusa i-domain ku-GridPane

Ukuhlanganiswa futhi kuphatha ngokuzenzakalelayo i-SUNRISE constant efayeleni lakho le-wp-config.php, edingekayo ukuze ukumephwa kwe-domain kusebenze kahle.

## Ukuphathwa kwe-SUNRISE Constant {#sunrise-constant-management}

Isici esisodwa esiyingqayizivele sokuhlanganiswa kwe-GridPane ukuthi sibuyisela ngokuzenzakalelayo i-SUNRISE constant ku-wp-config.php ukuze kugwenywe ukungqubuzana nohlelo lwe-GridPane lokumepha ama-domain. Lokhu kuqinisekisa ukuthi zombili izinhlelo zingasebenza ndawonye ngaphandle kwezinkinga.

## Ukuxazulula Izinkinga {#troubleshooting}

### Izinkinga Zokuxhuma kwe-API {#api-connection-issues}
- Qinisekisa ukuthi i-API key yakho ilungile
- Hlola ukuthi ama-ID eseva nesayithi akho alungile
- Qinisekisa ukuthi i-GridPane account yakho inezimvume ezidingekayo

### Izinkinga Zezitifiketi ze-SSL {#ssl-certificate-issues}
- I-GridPane ingase ithathe isikhathi ukukhipha izitifiketi ze-SSL
- Qinisekisa ukuthi ama-domain akho akhomba kahle ekhelini le-IP leseva yakho
- Hlola izilungiselelo ze-GridPane SSL zesayithi lakho

### I-domain Ayengezwanga {#domain-not-added}
- Hlola ama-log e-Ultimate Multisite ukuze ubone noma yimiphi imiyalezo yamaphutha
- Qinisekisa ukuthi i-domain ayikangezwa kakade ku-GridPane
- Qinisekisa ukuthi amarekhodi e-DNS e-domain yakho alungiselelwe kahle
