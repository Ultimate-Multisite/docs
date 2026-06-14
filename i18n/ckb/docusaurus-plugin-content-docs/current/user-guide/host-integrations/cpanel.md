---
title: یەکگرتووکردن لەگەڵ cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integration-awe cPanel

## Overzicht
cPanel یەکێکە لە بەربڵاوترین کۆنترۆڵ پینلەکانی هاستکردنی وێب کە زۆرێک لە پڕۆفایڵە هاستکردنی هاوبەش و تایبەتان دەبن. ئەم یەکگرتووکارییە ڕێنوێنی دەکات بۆ هەڵگرتنی دۆمنەکان بە شێوەیەکی ئۆتۆماتیک لە نێوان Ultimate Multisite و cPanel، کە ئەمەش دەبێت بگەڕێنەوەی ناوەکانی (aliases) و subdomain-ەکان بە شێوەیەکی ئۆتۆماتیک بۆ هەژمارەکەت لە cPanel زیاد بکەیت.

## تایبەتمەندییەکان
- دروستکردنی دۆمنە پاشەکەوتکراوەکان (addon domain) بە شێوەیەکی ئۆتۆماتیک لە cPanel
- دروستکردنی subdomain بە شێوەیەکی ئۆتۆماتیک لە cPanel (بۆ جۆرەکانی subdomain multisite)
- هەڵگرتنی دۆمنەکان کاتێک مگەڕان (mappings) دەدرێنەوە

## پێداویستییەکان
ئەم گۆڕاوە پێویستە دیاری بکەیت لە فایلەکەت بە ناوی `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'ناوی_کاربر_ی_cpanel');
define('WU_CPANEL_PASSWORD', 'پاسواردنی_cpanel');
define('WU_CPANEL_HOST', 'ناوەکانی_host_ی_cpanel');
```

بۆ هەڵبژاردن، دەتوانیت ئەمەیشانیش دیاری بکەیت:

```php
define('WU_CPANEL_PORT', 2083); // پێدابوو بە شێوەیەکی پیش‌نیار 2083 بێت
define('WU_CPANEL_ROOT_DIR', '/public_html'); // پێدابوو بە شێوەیەکی پیش‌نیار /public_html بێت
```

## ڕێنماییەکانی سیستەمکردن

### ١. گرتنی زانیارییەکانی cPanel

١. ناوی کاربەر و پاسواردنی cPanel لە پڕۆفایڵ هاستکردنت وەربگرە.
٢. ناو کی (host) ی cPanel-ت دیاری بکە (بە گشتی `cpanel.yourdomain.com` یان `yourdomain.com:2083`).

### ٢. زیادکردنی گۆڕاوەکان لە wp-config.php

ئەم گۆڕاوە بە فایلەکەت بە ناوی `wp-config.php` زیاد بکە:

```php
define('WU_CPANEL_USERNAME', 'ناوی_کاربر_ی_cpanel');
define('WU_CPANEL_PASSWORD', 'پاسواردنی_cpanel');
define('WU_CPANEL_HOST', 'ناوەکانی_host_ی_cpanel');
```

بۆ هەڵبژاردن، دەتوانیت پورت و دایرێکتۆری سەرەکی (root directory) بگۆڕیت:

```php
define('WU_CPANEL_PORT', 2083); // گۆڕانکاری بکە ئەگەر cPanel یەک پورتێکی دیکە بەکاربێت
define('WU_CPANEL_ROOT_DIR', '/public_html'); // گۆڕانکاری بکە ئەگەر root دۆکیومێنتەکەت جیاواز بێت
```

### ٣. چالاککردنەوەی یەکگرتووکارییەکە

١. لە ئیدارەی WordPress، بگواشبە Ultimate Multisite > Settings
٢. بۆ لایەنەکەدا بگواشبە "Domain Mapping" (پێناسەکردنی دامێنی)
٣. خوارەوە بگواشبە "Host Integrations" (یەکگرتوو لەگەڵ هاستکردن)
٤. Integration-ی cPanel-یەکە چالاک بکەرەوە (Enable)
٥. بۆ "Save Changes" (گۆڕینی گۆڕانکارییەکان) بگەڕێ

## چۆنیەتی کارکردن

### Addon Domains (دامێنیی پاشەکەوتکراو)

کاتێک دامێنێکی لە Ultimate Multisite دابەش دەکرێت:

١. Integration-ەکە داواێک بۆ APIی cPanel دەبینێت بۆ زیادکردنی دامێنەکە وەک addon domain
٢. دامێنەکە ڕێکدەخرێت کە ئاماژە بە دایرێکتۆری سەرەکی (root directory) بدات
٣. کاتێک پێناسەکردنی دامێنی لەناوچوون، integration-ەکە addon domain یەکە لە cPanel دەداتەوە

### Subdomains (دامێنەکانی ژێرنووس)

بۆ جۆرەکانی subdomain multisite، کاتێک سایتێکی نوێ دروست دەکەیت:

١. Integration-ەکە بەشی subdomain کان لە دامێنی تەواوەکە دەداتەوە
٢. داواێک بۆ APIی cPanel دەبینێت بۆ زیادکردنی subdomain
٣. subdomainەکە ڕێکدەخرێت کە ئاماژە بە دایرێکتۆری سەرەکی (root directory) بدات

## تێبینی گرنگان

- Integration-ەکە لەگەڵ API2ی cPanel کار دەکات بۆ پەیوەندی لەگەڵ هەژمارەکەت
- هەژمارەکەی cPanel دەبێت ڕێکار و دەسەڵاتی هەبێت بۆ زیادکردنی addon domains و subdomains
- چەندین پڕۆڤایدر هاستکردن دەتوانن ژمارەی addons یان subdomains کە دەتوانیت دروست بکەیت سنووردار بکەن
- Integration-ەکە DNS configuration (ڕێکخستنی DNS) بەڕێوە نایەت؛ تۆ هێشتا پێویستە دامێنەکانت بە IPی خزمەتگوزارییەکەت ئاماژە بکەیت

## چارەسەرکردنی کێشەکان (Troubleshooting)

### کێشەی پەیوەندی لەگەڵ API (API Connection Issues)
- دڵنیا بەوەی کە ناوی کاربری و وشکەری cPanel دروستنە
- چاک بکە ئایا هاستکردنی cPanel یەکێکە و دەتوانیت بگاتە ئەو شوێنە؟
- دڵنیا بەوەی کە هەژمارەکەی cPanel ڕێکار و دەسەڵاتی پێویست هەیە

### دامێنەکە زیاد نەکراوە (Domain Not Added)
- لە logs ی Ultimate Multisite بۆ هەر پەیامێکی هەڵە بگەڕێ
- دڵنیا بەوەی کە دامێنەکە پێشتر لە cPanel زیاد نییە
- دڵنیا بەوەی کە هەژمارەکەی cPanel سنوورەکانی بۆ addon domains یان subdomains نایەت

### پروبلیمات سیفلی سرتیفیکیت (SSL Certificate Issues)
- این یکپارچه‌سازی مسئول صدور گواهی‌های SSL نیست.
- شما باید از ابزارهای SSL/TLS در cPanel یا قابلیت AutoSSL برای صدور گواهی‌های SSL برای دامنه‌های خود استفاده کنید.
- به عنوان جایگزین، می‌توانید از سرویسی مانند Let's Encrypt با AutoSSL در cPanel استفاده کنید.
