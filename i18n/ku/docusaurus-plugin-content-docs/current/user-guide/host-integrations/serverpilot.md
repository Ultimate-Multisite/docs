---
title: Integrasiی ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integration-a ServerPilot

## گشتی (Overview) {#overview}
ServerPilot بری WordPress و دیترال اوشن، آمازون، گوگل یان هەر سێرڤەر پرافایدریاسەکاندا PHP وێنە دابنێتی. ئەم integrationەکە ڕێنوێنیی ئۆتۆماتیکی دامێنی و بەڕێوەبردنی گوازمەی SSL لە نێوان Ultimate Multisite و ServerPilot دەدات.

## تایبەتمەندییەکان (Features) {#features}
- ڕێکخستنی ئۆتۆماتیکی دامێن (Automatic domain syncing)
- بەڕێوەبردنی گوازمەی SSL لەگەڵ Let's Encrypt
- نوێکردنەوەی ئۆتۆماتیکی گوازمەی SSL

## پێداویستییەکان (Requirements) {#requirements}
ئەم کۆنستانە دەبێت لە فایلەکەت `wp-config.php` دابنێیت:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## ڕێنماییەکانی راکردنەوە (Setup Instructions) {#setup-instructions}

### ١. بەدەست دەهێنە مەرجەکانی API ی ServerPilot {#1-get-your-serverpilot-api-credentials}

١. بچۆ بۆ داشبۆردی ServerPilot وەک کارپێچوون بکە (Log in).
٢. گەڕان بە "Account" > "API".
٣. ئەگەر نەتانە، API key نوێ دروست بکە.
٤. Client ID و API Key ی خۆت بۆ کۆبکە.

### ٢. App ID ی خۆت دەهێنە {#2-get-your-app-id}

١. لە داشبۆردی ServerPilot، بچۆ بۆ "Apps".
٢. ئەو ئەپەکە هەڵبژێرە کە WordPress multisite ی تۆ دابنێتی.
٣. App ID لەسەر URL دەبینراوە: `https://manage.serverpilot.io/apps/{APP_ID}`

### ٣. کۆنستانەکان زیاد بکە بۆ wp-config.php {#3-add-constants-to-wp-configphp}

ئەم کۆنستانانە زیاد بکە بە فایلەکەت `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### ٤. راکردنەوەی integrationەکە چالاک بکە {#4-enable-the-integration}

١. لە admin ی WordPress، بچۆ بۆ Ultimate Multisite > Settings.
٢. گەڕان بە تابلۆی "Domain Mapping".
٣. ل دەست بگرە تا "Host Integrations" (Integration-a Host) ببینیت.
٤. Integrationی ServerPilot چالاک بکە.
٥. بۆ "Save Changes" کلیک بکە.

## چۆن کار دەکات (How It Works) {#how-it-works}

### ڕێکخستنی دامێن (Domain Syncing) {#domain-syncing}

کاتێک دامەنێکی لە Ultimate Multisite دا مێپ دەکرێت:

١. ئەم یەکپارچە (integration) لیستەکە لە ئێستادا لە ServerPilot دێتەوە.
٢. ئەو ناوە جدیدە بە لیستەکە زیاد دەکات (لەگەڵ وەرگرتێکی www ئەگەر پێویست بێت).
٣. لیستەکە به‌روزکراوە بۆ ServerPilot دەبینێت ڕێگەی APIی بەکار دەهێنێت.
٤. ServerPilot لیستەکەی ناو ئەو ئەپلیکسیا گۆڕاوە.

### بەڕێوەبردنی پڕۆتۆکۆڵی SSL (SSL Certificate Management) {#ssl-certificate-management}

پاش ئەوەی ناوەکان هاوبەش دەکەیت:

١. ئەم یەکپارچە ئۆتۆماتیک AutoSSL بۆ ئەپلیکسیاکەت دەگرێتەوە.
٢. ServerPilot بەکار دەهێنێت بۆ دروستکردنی و دامەزراندنی پڕۆتۆکۆڵی SSL بە شێوەی Let's Encrypt.
٣. ServerPilot هەروەها گۆڕینی ئۆتۆماتیکی پڕۆتۆکۆڵەکانی SSL دەکاتەوە.

## ڕابتکەری و پشکنینی پڕۆتۆکۆڵی SSL (SSL Certificate Verification) {#ssl-certificate-verification}

ئەم یەکپارچەیە دیاریکراوە بۆ زیادکردنی ژمارەی هەوڵەکانی پشکنینی پڕۆتۆکۆڵی SSL بۆ ServerPilot، چونکە لەوانەیە کاتێک ServerPilot پڕۆتۆکۆڵی SSL دروست و دامەزرێنێت کاتێکی تر بێت. بە شێوەیەکی پیش‌تەوا، تا ٥ جار هەوڵ دەدات، بەڵام دەتوانیت ئەمە بە شێوەی filters بگۆڕیت.

## چارەسەرکردنی کێشەکان (Troubleshooting) {#troubleshooting}

### کێشەکانی پەیوەندی API (API Connection Issues) {#api-connection-issues}
- دڵنیابConvertTo کە Client ID و API Key دروستن.
- چاک بکە کە App ID یەکەت دروستە.
- دڵنیابConvertTo کە هەژمارەکەی ServerPilot ئەو ڕێگەپێدانی پێویستە هەیە.

### کێشەکانی پڕۆتۆکۆڵی SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- ServerPilot پێویستی بەوەیە ناوەکان تۆماری DNSی دروست بێت کە ئاماژە بەو SERVER یەکەت دەکات پێش ئەوەی پڕۆتۆکۆڵی SSL دروست بکات.
- ئەگەر پڕۆتۆکۆڵەکانی SSL دروست نەکراون، چاک بکە کە ناوەکان بە شێوەیەکی دروست ئاماژە بە IPی SERVER یەکەت دەدەن.
- کاتێک ServerPilot پڕۆتۆڵی SSL دروست و دامەزرێنێت کاتێکی تر بێت (بە گشتی ٥ تا ١٥ خولەک).

### ناوەکە زیاد نەکراوە (Domain Not Added) {#domain-not-added}
- لە لاگەکانی Ultimate Multisite بۆ هەر هەڵەیەک چاک بکە.
- دڵنیابConvertTo کە ناوەکە پێشتر لە ServerPilot زیاد نییە.
- دڵنیابConvertTo کە پلانی ServerPilot پاڵپشتی ژمارەی ناوەکانتە کە دەدات زیاد بکەیت.

### هەڵماتووی ناوەندی (Domain Removal) {#domain-removal}
- ئێستا، ServerPilot API بە شێوەیەکی ڕاستەوخۆ ڕێگایەک بۆ هەڵماتووی دۆمنە تاکەکانی پاککردنەوەی نییە.
- کاتێک یەکێک لە پێکبەستنی دۆمنەکان (domain mapping) لە Ultimate Multisite دەهێڵیت، ئەم یەکگرتنە (integration) لیستەکە لە ServerPilot به‌روزرسان دەکات بۆ ئەوەی ئەو دۆمنەی پاککراوە لەو لیستەدا نەبێت.
