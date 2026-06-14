---
title: Integrasiya Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Integration with Hostinger (hPanel)

## گشتی (Overview)

Hostinger ی یه سرویس میزبانی وب خیلی معروفه و پنل کنترلی مدرنی به اسم hPanel داره. این ادغام Ultimate Multisite با Hostinger's hPanel اجازه می‌ده که همگام‌سازی دامنه‌ها بین Ultimate Multisite و hPanel انجام بشه، و این کار باعث می‌شه شما بتونید نگاشت دامنه‌ها و زیردامنه‌ها رو مستقیماً از پنل مدیریت وردپرس خودتون به صورت خودکار مدیریت کنید.

## ویژگی‌ها (Features)

- ایجاد خودکار دامنه افزونه در hPanel
- ایجاد خودکار زیردامنه در hPanel (برای نصب‌های چندزیردامنه‌ای Multisite)
- حذف دامنه زمانی که نگاشت‌ها حذف می‌شوند
- ادغام بی‌نقص با API مدیریت دامنه hPanel

## پیش‌نیازها (Requirements)

برای استفاده از این ادغام Hostinger، شما به موارد زیر نیاز دارید:

۱. یک حساب کاربری در Hostinger با دسترسی به hPanel
۲. یک توکن API از Hostinger
۳. ثابت‌های زیر رو توی فایل `wp-config.php` خودتون تعریف کنید:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

به صورت اختیاری، می‌تونید موارد زیر رو هم تعریف کنید:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // نقطه پایانی API پیش‌فرض
```

## دستورالعمل‌های راه‌اندازی (Setup Instructions)

### ۱. تولید توکن API Hostinger خود

۱. وارد حساب کاربری Hostinger خود بشید و به hPanel دسترسی پیدا کنید.
۲. به **Account Settings** → **API Tokens** بروید.
۳. روی **Create New Token** کلیک کنید.
۴. یک نام توکن مناسب بهش بدید (مثلاً "Ultimate Multisite").
۵. مجوزهای لازم رو انتخاب کنید:
   - مدیریت دامنه (Domain management)
   - مدیریت زیردامنه (Subdomain management)
۶. توکن تولید شده رو کپی کنید و آن رو به صورت امن ذخیره کنید.

### ۲. پیدا کردن شناسه حساب خود

۱. در hPanel، به **Account Settings** → **Account Information** بروید.
۲. شناسه حساب شما در این صفحه نمایش داده می‌شود.
۳. این شناسه رو کپی و برای مرحله بعد ذخیره کنید.

### ۳. اضافه کردن ثابت‌ها به wp-config.php

ثابت‌های زیر رو توی فایل `wp-config.php` خودتون اضافه کنید:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

ئەگەر هەژمارەکەت لە Hostinger یەک بە شێوەیەکی جیاواز API endpointی بەکاربهێنێت، دەتوانیت ئەوە بگۆڕیت:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### ٤. چالاککردنەوەی یەکگرتوو (Enable the Integration)

١. لە بەڕێوەبردنی WordPress، بگە به **Ultimate Multisite > Settings**
٢. بۆ تابلۆی **Domain Mapping** (پێناساندنی ناوچە)، دەربکە به ل خوارەوە بۆ **Host Integrations** (یەکگرتوو لەگەڵ Host)
٣. چالاک بکە بە یەکگرتووی **Hostinger (hPanel)**
٤. **Save Changes** (گۆڕینی گۆڕانکارییەکان) بێت

## چۆن کار دەکات؟

### Addon Domains (ناوچەکانی زیادە)

کاتێک ناوچێک لە Ultimate Multisite دا پێناساند دەدەیت:

١. یەکگرتوو داواکارییەک بۆ APIی Hostinger دەبینێت تا ئەو ناوچە وەک addon domain زیاد بکات
٢. ناوچەکە ڕێکدەدرێت کە ئاماژەی بە دایرێکتۆری سەرەکی (root directory) بدات
٣. کاتێک پێناساندنی ناوچەکە لەناوچەدا دەردەگرێت، یەکگرتوو بە شێوەیەکی خۆکاری addon domainەکە لە hPanel دەردەگرێت

### Subdomains (ناوەکانی زیرەکی)

بۆ جۆرەکانی دامەسازی subdomain multisite، کاتێک سایتێکی نوێ دروست دەکەیت:

١. یەکگرتوو بەشی subdomain-ی ناوچەکە لە ناوچە پڕدا دەداتەوە
٢. داواکارییەک بۆ APIی Hostinger دەبینێت تا subdomainەکە زیاد بکات
٣. subdomainەکە ڕێکدەدرێت کە ئاماژەی بە دایرێکتۆری سەرەکی (root directory) بدات

## تێبینییە گرنگان (Important Notes)

- یەکگرتوو لەگەڵ Hostinger REST API بەکاری دەهێنێت بۆ پەیوەندی لەگەڵ هەژمارەکەت
- توکن APIی تۆ پێویستی بە ڕێگەپێدانی پێویست بۆ بەڕێوەبردنی ناوچ و subdomain هەیە
- یەکگرتوو کارێک بۆ دیاریکردنی DNS ناکات؛ ناوچەکان دەبێت لە پێشدا پەیوەندی بە هەژمار Hostingerت دروست بێت
- داواکاریی API بە شێوەیەکی ئاسایی (HTTPS) بە شێوەیەکی سەلامەت ئەنجام دەدرێن
- توکن APIی خۆت پارێزرا و هەرگیز بە جۆرە ئاشکرا ناهات

## چارەسەرکردنی کێشەکان (Troubleshooting)

### کێشەکانی پەیوەندی API (API Connection Issues)

تأكد من أن توكن API (API token) ترويضە و نەچوونی کارکردنەوەی بۆی
تێبینی بکە کە ID ی هەژمارەکەت دروستە

دڵنیابە کە توكن API یەکەت ڕێگەپێردنی پێویست بۆ بەڕێوەبردنی دۆمەین (domain management) هەیە
تأكد بکە کە هەژمارەکەت لە Hostinger چالاک و لە دۆخی باشدا بووە

### دۆمەینی نەکراوە زیاد بکرێت

- لە لاگەکانی Ultimate Multisite بۆ هەر پەیامێکی هەڵە یان ڕێگرییەک بگەڕێ
تأكد بکە کە دۆمەینەکە پێشتر لە هەژمارەکەت لە Hostinger زیاد نییە
دڵنیابە کە هەژمارەکەت نایەتا سنوور بۆ دۆمەینی ئەپاند (addon domains)

- پشتڕاست بکەرەوە کە دۆمەینەکە بە شێوەیەکی دروست بۆ ناوی سروری (nameservers) ی Hostinger ئاراستە کراوە

### کێشەکانی گوازارنی SSL Certificate

- ئەم یەکێک لە کارکردنەکان نییە کە بەدواداچوون و دابینیکردنی SSL certificate بکات
Hostinger بە شێوەیەکی باو، SSL certificates بەبێ پارە (free) دەدات لە ڕێگەی AutoSSL
تۆ دەتوانی SSL certificates بە شێوەیەکی ڕاستەوخۆ لە hPanel لە خوارەوە بە **SSL/TLS** بەڕێوەبەیت

- یان بە شێوەیەکی دیکە، لەگەڵ تایبەتمەندی AutoSSLی Hostinger، لەگەڵ Let's Encrypt بەکاربهێنە
