---
title: Udibaniso lwe-GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Udibaniso lwe-GridPane

## Isishwankathelo {#overview}
GridPane yiphaneli yolawulo lokusingathwa kwe-WordPress ekhethekileyo eyakhelwe iingcali ze-WordPress ezinzulu. Olu dibaniso luvumela ungqamaniso oluzenzekelayo lweedomeyini nolawulo lwezatifikethi ze-SSL phakathi kwe-Ultimate Multisite ne-GridPane.

## Iimpawu {#features}
- Ungqamaniso oluzenzekelayo lweedomeyini
- Ulawulo lwezatifikethi ze-SSL
- Uqwalaselo oluzenzekelayo lwe-SUNRISE constant

## Iimfuno {#requirements}
Ezi constants zilandelayo kufuneka zichazwe kwifayile yakho `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Imiyalelo Yokuseta {#setup-instructions}

### 1. Fumana Iinkcukacha Zakho ze-GridPane API {#1-get-your-gridpane-api-credentials}

1. Ngena kwi-dashboard yakho ye-GridPane
2. Yiya ku-"Settings" > "API"
3. Velisa i-API key ukuba awunayo enye
4. Khuphela i-API key yakho

### 2. Fumana ii-ID Zakho ze-Server ne-Site {#2-get-your-server-and-site-ids}

1. Kwi-dashboard yakho ye-GridPane, yiya ku-"Servers"
2. Khetha i-server apho i-WordPress multisite yakho isingathwe khona
3. Qaphela i-Server ID (ebonakala kwi-URL okanye kwiphepha leenkcukacha ze-server)
4. Yiya ku-"Sites" uze ukhethe i-WordPress site yakho
5. Qaphela i-Site ID (ebonakala kwi-URL okanye kwiphepha leenkcukacha ze-site)

### 3. Yongeza ii-Constants ku-wp-config.php {#3-add-constants-to-wp-configphp}

Yongeza ezi constants zilandelayo kwifayile yakho `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Vula Udibaniso {#4-enable-the-integration}

1. Kwi-admin yakho ye-WordPress, yiya ku-Ultimate Multisite > Settings
2. Yiya kwithebhu ethi "Domain Mapping"
3. Skrolela ezantsi ukuya ku-"Host Integrations"
4. Vula udibaniso lwe-GridPane
5. Cofa "Save Changes"

## Indlela Esebenza Ngayo {#how-it-works}

Xa idomeyini imaphwa kwi-Ultimate Multisite:

1. Udibaniso luthumela isicelo kwi-API ye-GridPane ukongeza idomeyini kwi-site yakho
2. GridPane iphatha ngokuzenzekelayo ukubonelelwa kwezatifikethi ze-SSL
3. Xa ukumaphwa kwedomeyini kususiwe, udibaniso luya kususa idomeyini kwi-GridPane

Udibaniso lukwaphatha ngokuzenzekelayo i-SUNRISE constant kwifayile yakho ye-wp-config.php, efunekayo ukuze ukumaphwa kweedomeyini kusebenze ngokuchanekileyo.

## Ulawulo lwe-SUNRISE Constant {#sunrise-constant-management}

Enye impawu ekhethekileyo yodibaniso lwe-GridPane kukuba lubuyisela ngokuzenzekelayo i-SUNRISE constant kwi-wp-config.php ukuthintela ukungqubana nenkqubo ka-GridPane yokumaphwa kweedomeyini. Oku kuqinisekisa ukuba zombini iinkqubo zinokusebenza kunye ngaphandle kweengxaki.

## Ukusombulula Iingxaki {#troubleshooting}

### Iingxaki zoQhagamshelwano lwe-API {#api-connection-issues}
- Qinisekisa ukuba i-API key yakho ichanekile
- Jonga ukuba ii-ID ze-server ne-site zakho zichanekile
- Qinisekisa ukuba i-account yakho ye-GridPane ineemvume eziyimfuneko

### Iingxaki zeZatifikethi ze-SSL {#ssl-certificate-issues}
- GridPane ingathatha ixesha ukukhupha izatifikethi ze-SSL
- Qinisekisa ukuba iidomeyini zakho zikhomba ngokufanelekileyo kwidilesi ye-IP ye-server yakho
- Jonga iisetingi ze-SSL ze-GridPane ze-site yakho

### Idomeyini Ayifakwanga {#domain-not-added}
- Jonga iilog ze-Ultimate Multisite naziphi na imiyalezo yeempazamo
- Qinisekisa ukuba idomeyini ayikafakwa kwi-GridPane
- Qinisekisa ukuba iirekhodi ze-DNS zedomeyini yakho ziqwalaselwe ngokufanelekileyo
