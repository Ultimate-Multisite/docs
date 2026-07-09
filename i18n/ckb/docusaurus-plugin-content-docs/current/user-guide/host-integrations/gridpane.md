---
title: Integrasiی GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integration sa GridPane {#gridpane-integration}

## Overzicht {#overview}
GridPane e panel kontrole hosting WordPress-a özeldir, ki për profesionistët seriozë WordPress-a ndërtoar është. Kjo integrim lejon sinkronizimin automatik të domenave dhe menaxhimin e sertifikatëve SSL mes Ultimate Multisite dhe GridPane.

## Pikat Kryesore {#features}
- Sinkronizimi automatik i domenave
- Menaxhimi i sertifikatëve SSL
- Konfigurimi automatik i konstanteve SUNRISE

## Kërkesat {#requirements}
Konstantët e mëposhtme duhet të përcaktohen në skriptin tuaj `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Udhëzimet për Konfigurim {#setup-instructions}

### 1. Marrja e Kredencialeve API të GridPane-së {#1-get-your-gridpane-api-credentials}

1. Hyni në dashboard-in tuaj të GridPane-së
2. Shkoni te "Settings" > "API" (Konfigurime > API)
3. Përcaktoni një API key nëse nuk keni një tashmë
4. Kopjoni API key-n tuaj

### 2. Marrja e ID-ve të Serverit dhe Sitet {#2-get-your-server-and-site-ids}

1. Në dashboard-in tuaj të GridPane-së, shkoni te "Servers" (Serverët)
2. Zgjidhni serverin ku është hostuar multisite WordPress-i juaj
3. Vëreni ID-n e Serverit (i dukshëm në URL ose në faqen e detajeve të serverit)
4. Shkoni te "Sites" (Sitet) dhe zgjidhni sitin tuaj WordPress

5. Vëreni ID-n e Sitis (i dukshëm në URL ose në faqen e detajeve të situsit)

### 3. Shtimi i Konstanteve në wp-config.php {#3-add-constants-to-wp-configphp}

Shtoni konstante të mëposhtme në skriptin tuaj `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Aktivizimi i Integrimit {#4-enable-the-integration}

1. Në admin-in tuaj WordPress, shkoni te Ultimate Multisite > Settings (Ultimate Multisite > Konfigurime)
2. Navigjoni te tab-i "Domain Mapping" (Mapele Domenet)
3. Shkoni poshtë te "Host Integrations" (Integrimet e Hostit)
4. Aktivizoni integrimin GridPane
5. Klikoni "Save Changes" (Ruaj Ndryshimet)

## Si Funksionon {#how-it-works}

Kur një domen mapehet në Ultimate Multisite:

١. Integrationەکە دۆخی داواکارییەک بۆ APIی GridPane دروست دەکات بۆ زیادکردنی دامێنی سەر پەیجەکەت
٢. GridPane بە شێوەیەکی خۆکار پرۆڤایزنی سێرتیسڵ (SSL certificate) دەکرێت

٣. کاتێک مۆدالە دابەشکردنەکە لە GridPane لەناو دەهێنرێت، integrationەکە دامێنی لە GridPane دەهێنێتەوە

Integrationەکە هەروەها بە شێوەیەکی خۆکار کۆنتستەری SUNRISE لە فایلەکەت `wp-config.php` دەکاتەوە کە بۆ کارکردنی دروست و ڕاستی داواکاریی مۆدالە پێویستە.

## بەڕێوەبردنی کۆنتستەری SUNRISE {#sunrise-constant-management}

ئایینی تایبەتی integrationەکە ئەوەیە کە بە شێوەیەکی خۆکار کۆنتستەری SUNRISE لە `wp-config.php` دابەش دەکاتەوە بۆ ڕێگرتن لەو کێشەی کە لەگەڵ سیستەمی مۆدالەدا دەبێت. ئەمە دڵنیایی دەدات کە هەردوو سیستەم بە باشی کار بکەن و هیچ کێشەیەکی دروست نەبێت.

## چارەسەرکردنی کێشەکان (Troubleshooting) {#troubleshooting}

### کێشەکانی پەیوەندی API {#api-connection-issues}
- چاک بکە ئایا کلیدی APIی تۆ ڕاستە؟
- چاک بکە ئایا IDی سێرڤەر و پەیجەکەت ڕاستن؟
- دڵنیابە کە ئەکاونتەکەت لە GridPane ئەو ڕێکاران (permissions) پێویستان هەیە.

### کێشەکانی سێرتیسڵ (SSL Certificate) {#ssl-certificate-issues}
- GridPane دەتوانێت کاتێکی تر بۆ دروستکردنی سێرتیسڵی SSL بێت
- چاک بکە ئایا دامێنەکانت بە شێوەیەکی دروست بۆ پیت (IP address)ی سێرڤەرەکەت ڕێخستوون؟
- تنظیمەکانی SSLی GridPane بۆ پەیجەکەت چاک بکە.

### دامێنی زیاد نەکراوە {#domain-not-added}
- لە لاگەکانی Ultimate Multisite بۆ هەر پەیامێکی هەڵەکان دەربکە
- دڵنیابە کە دامێنەکە پێشتر لە GridPane زیاد نییە
- دڵنیابە کە تۆماری DNSی دامێنەکە بە شێوەیەکی دروست ڕێکخراوە.
