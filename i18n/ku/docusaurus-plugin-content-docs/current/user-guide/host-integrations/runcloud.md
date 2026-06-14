---
title: Integrasiی RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# یەکگرتوود (RunCloud) یەکپارێزی

## گشتیارییەکە
RunCloud سیستەمێکی بەڕێوەبردنی خەرجکارە لە نێوان ئاڵۆز و پڕۆگرامەکانی وێب، کە ڕێنوێنی دەکات بۆ جێبەجێکردن و بەڕێوەبردنی ئەپڵیکەیشنی وێبی لەسەر خەرجی کارەکانت. ئەم یەکپارێزییە دەبێتە هۆی هەماهەنی ئۆتۆماتیکی ناوچەکانی (domain syncing) و بەڕێوەبردنی پڕۆتۆکۆڵی SSL نێوان Ultimate Multisite و RunCloud.

## تایبەتمەندییەکان
- هەماهەنی ئۆتۆماتیکی ناوچەکان (Automatic domain syncing)
- بەڕێوەبردنی گوازارەکانی SSL (SSL certificate management)
- لە کاتی لێکردنەوەی پەیوەندییەکان (mappings) پاککردنەوەی ناوچەکە

## پێداویستییەکان
ئەم دیاریکراوەیە دەبێت لە فایلەکەت بە ناوی `wp-config.php` دابنێیت:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## ڕێنماییەکانی سیستەمکردن

### ١. بەدەستهێنانی مەرجەکانی APIی RunCloud

١. بچۆ بۆ داشبۆردی (dashboard) ی RunCloud و خۆت بنووسە (Log in).
٢. بگواشبە "User Profile" (پشت دایکی پڕۆفایلەکەت کلیک بکە لە گۆشەی سەرەوە).
٣. لە منو的一دا، "API" هەڵبژێرە.
٤. ئەگەر یەکێکیان نییە، کلیک بکە بەسەر "Generate API Key" بۆ دروستکردنی کلیدی APIی خۆت.
٥. کلیدی API و سێکرێتی APIی خۆت کۆ بکەرەوە.

### ٢. بەدەستهێنانی IDی خەرجکار و ئەپڵیکات

١. لە داشبۆردی RunCloud، بگواشبە "Servers".
٢. ئەو خەرجی کارەی کە WordPress multisite ی تۆ لەسەر کراوە هەڵبژێرە.
٣. Server ID دەبینراوە لەناو URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
٤. بگواشبە "Web Applications" و ئەپڵیکاتی WordPress ی خۆت هەڵبژێرە.
٥. App ID دەبینراوە لەناو URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### ٣. زیادکردنی دیاریکراوەکان بۆ wp-config.php

ئەم دیاریکراوەیە بە فایلەکەت `wp-config.php` زیاد بکە:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### ٤. چالاککردنەوەی یەکپارێزیەکە

١. لە ئیدارەی WordPress، بگە بە Ultimate Multisite > Settings (سەرکردایەتی)
٢. بگاتە تابلۆی "Domain Mapping" (پێناساندنی دامێنی)
٣. ل دەنگەکە بکە خوارەوە بۆ "Host Integrations" (یەکگرتوو لەگەڵ هاستکردن)
٤. RunCloud integration یەکگرتووەکە چالاک بکە (Enable)
٥. بۆ "Save Changes" (گۆڕینی گۆڕانکارییەکان) بگەڕێ

## چۆنیەتی کارکردن

کاتێک دامێنێکی لە Ultimate Multisite دابەش دەکرێت:

١. یەکگرتووەکە داواێک بۆ APIی RunCloud دەدات بۆ زیادکردنی دامێنی بە بەرنامەی تۆ
٢. ئەگەر دامێنەکە سەرکەوتوو زیاد بکرێت، یەکگرتووەکە پاشان SSL certificates (سەرتیترەکانی SSL) دابەش دەکاتەوە
٣. کاتێک پێناساندنی دامێنەکە لەناو دەچێت، یەکگرتووەکە دامێنەکە لە RunCloud دەداتەوە

بۆ دامێنی زیرەکی (subdomain)، یەکگرتووەکە بە شێوەیەکی ئۆتۆماتیک پڕۆسەی دروستکردنی subdomain'ەکان لە RunCloud دابەش دەکات کاتێک سایتە نوێیەکانی تۆ بۆ تۆڕەکە زیاد دەکرێن.

## چارەسەرکردنی کێشەکان (Troubleshooting)

### کێشەکانی پەیوەندی بە API
- چاک بکە کە مۆڵەتی APIی تۆ دروستە
- چاک بکە کە IDی server و appی تۆ دروستن
- دڵنیا بە لەوە چی کە هەژمارەکەت لە RunCloud ئەو ڕێگەپێدانان (permissions) پێویستان هەیە

### کێشەکانی SSL Certificate
- RunCloud دەمێک دەبێت بۆ ئەوەی SSL certificates دابەش بکات
- چاک بکە کە دامێنەکان بە شێوەیەکی دروست بۆ IPی serverەکەت ئاماژەن (pointing)
- تنظیمات SSLی RunCloud بۆ بەرنامەکەت چاک بکە

### دامێنەکە زیاد نەکراوە
- لە logs ی Ultimate Multisite بۆ هەر پەیامێکی هەڵەکان بگەڕێ
- دڵنیا بە لەوە چی کە دامێنەکە پێشتر لە RunCloud زیاد نییە
- دڵنیا بە لەوە چی کە پلانی RunCloud پشتگیریی دامێنی زیاتر دەدات
