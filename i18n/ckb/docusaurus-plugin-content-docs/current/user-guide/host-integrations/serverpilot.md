---
title: یەکگرتووکردنی ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Entegrasyonê bi ServerPilot

## Overwate

ServerPilot ji bo rakhman (hosting) WordPress û veletirên dinên PHP li ser serverên DigitalOcean, Amazon, Google an jî nûçeyên din e. Ev entegrason gelekî domain-ên bi awayekî bi hev re (automatic domain syncing) û rwanxina sertifikateya SSL di navbera Ultimate Multisite û ServerPilot de têne ramankirin.

## Hicapên Karê

- Rwanxina automatic a domain
- Rwanxina sertifikateya SSL bi Let's Encrypt
- Rwanxina otomatik a SSL

## Pêşwendiyên

Pêşwendiyên lêverî (constants) yên diovekar di nav fîla `wp-config.php` yê wekî taybetdar dide:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Rêveberiya Rêveberî (Setup Instructions)

### 1. Girtin Pêşwendiyên API yê ServerPilot

1. Serbanda dashboard-a ServerPilot bi login bike
2. Berê "Account" > "API" (Çandana)
3. Heke hûn paşê ne, yekî API key nû çêre
4. Client ID û API Key yê we kopî bike

### 2. Girtin App ID yê wekî

1. Di dashboard-a ServerPilot de, berê "Apps" (Abor) bi rêwîtiye
2. Aborê ku WordPress multisite yê we rast e, çapêre
3. App ID di URL de nêzîk hat ku hûn bibin: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Hicapên lêverî (Constants) bi wp-config.php bişorîn

Hicapên lêverî yên diovekar di nav fîla `wp-config.php` yê wekî taybetdar dide:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Rêveberiya Entegrasyonê (Enable the Integration)

1. Di admin-a WordPress de, berê Ultimate Multisite > Settings bişorîn
2. Berê tabê "Domain Mapping" (Xartkirina Domain) bi rêwîtiye
3. Berê ji lepa paşê berê "Host Integrations" (Entegrasyonên Host)
4. Entegrasyonê ServerPilot bişorîn bike
5. Berê "Save Changes" (Hêz dikirin) bişorîn

## Çi Karê? (How It Works)

### Rwanxina Domain (Domain Syncing)

Dema ku yek domain di Ultimate Multisite de xart kirin:

١. Integrationەکە داتای دامنەکان لە ئێستادا لە ServerPilot وەردەگرێت
٢. ئەو دۆمنیە نوێە زیاد دەکات بۆ لیستەکە (لەگەڵ وەرشی www ئەگەر پێویست بێت)
٣. لیستەکە به‌روزرسابکراوە بۆ ServerPilot دەبینێتەوە بە ڕێگەی API
٤. ServerPilot لیستەکە بۆ ئەپڵیکەیشنی تۆیە به‌روزرسایی دەکات

### بەڕێوەبردنی گوازارنی SSL (SSL Certificate Management)

پاش ئەوەی دۆمنەکان هاوبەش دەبن:

١. Integrationەکە بە شێوەیەکی ئۆتۆماتیک AutoSSL بۆ ئەپڵیکەیشنت چالاک دەکات
٢. ServerPilot کار گرتن و دامەزراندنی گوازارنی SSL لە ڕێگەی Let's Encrypt دەگرێتەوە
٣. ServerPilot هەروەها بە شێوەیەکی ئۆتۆماتیک دووبارەدانەوەی گوازارنی SSL دەکات

## پشکنینی گوازارنی SSL (SSL Certificate Verification)

Integrationەکە ڕێکخراوە بۆ زیادکردنی ژمارەی هەوڵەکانی پشکنینی گوازارنی SSL بۆ ServerPilot، چونکە لەوانەیە کاتێکیان پێ بدات بۆ ئەوەی ServerPilot گوازارنی SSL دەدات و دامەزرێنێت. بە شێوەیەکی پیش‌تەوا، تا ٥ جار هەوڵ دەدات، بەڵام ئەمە دەکرێت بە فیلترەکان بگۆڕدرێت.

## چارەسەرکردنی کێشەکان (Troubleshooting)

### کێشەکانی پەیوەندی API (API Connection Issues)
- دڵنیابە کە Client ID و API Key یەکەت دروستن
- چاک بکە کە App ID یەکەت دروستە
- دڵنیابە کە هەژمارەکەی ServerPilot ئەو ڕێزموونانەی پێویست هەیە

### کێشەکانی گوازارنی SSL (SSL Certificate Issues)
- ServerPilot پێویستی بەوەیە کە دۆمنەکان تۆماری DNSی دروست و ئاراستەی سەرเซิร์ڤەرەکەت هەبێت پێش ئەوەی گوازارنی SSL دەدات
- ئەگەر گوازارنی SSL نادیت، چاک بکە کە دۆمنەکان بە شێوەیەکی دروست بۆ پیت (IP address) ی سەرเซิร์ڤەرەکەت ئاراستەیان دەکەن
- کاتێک بۆ ServerPilot دەدات و دامەزرێنێت گوازارنی SSL پێویستە (بە واتای ٥ تا ١٥ خولەک)

### دۆمنەکە زیاد نەکراوە (Domain Not Added)
- لە لاگەکانی Ultimate Multisite هەڵمەتی هەڵەیەک بگەڕێیتەوە
- دڵنیابە کە دۆمنەکە پێشتر لە ServerPilot زیاد نییە
- دڵنیابە کە پلانی ServerPilot پشتگیریی ژمارەی دۆمنەکانت کە دەدات زیاد بکەیت

### لێدانی دۆمن (Domain Removal)
- ئێستا، APIی ServerPilot ڕێگای دیاریکراو نییە بۆ ئەوەی دۆمنە تاکەکانی لەناو ببەن.
- کاتێک یەکربوونێکی دۆمن (domain mapping) لە Ultimate Multisite دەدرێتەوە، ئەم یەکربوونە لیستەکەی دۆمنەکان لە ServerPilot به‌روزرسان دەکات بۆ ئەوەی ئەو دۆمنەی دیاریکراو لە لیستەکەدا نەبێت.
