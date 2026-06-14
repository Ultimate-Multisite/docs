---
title: RunCloud 통합
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integration

## مروری (Overview)
RunCloud یو کلاود-بیسه سرور مدیریت پلتفۆرمەیە کە ڕێگە دەدات بە ئاسان دابنێ و بەڕێوە بهێنیت Web applications لەسەر سێرڤەرەکانی خۆت. ئەم یەکگرتووکارییە ڕێنوێنیی ئۆتۆماتیکی بۆ domain syncing و بەڕێوەبردنی SSL certificate نێوان Ultimate Multisite و RunCloud دەدات.

## تایبەتمەندییەکان (Features)
- Domain syncing ئۆتۆماتیک
- بەڕێوەبردنی SSL certificate
- کاتێک مۆبێنەکە دڵێی هەیە، domain removal (هەڵگرتنی domain)

## پێداوی석ەکان (Requirements)
ئەم گۆڕانکارییە دەبێت لە فایلەکەت `wp-config.php` دا دیاری بکرێن:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## ڕێنماییەکانی سیستەمکردن (Setup Instructions)

### 1. گەرانەکان و API Credentials یاری بکە (Get Your RunCloud API Credentials)

1. بچۆ بۆ داشبۆردی RunCloud یەکەت و لاگ in بکە.
2. بچۆ بۆ "User Profile" (پیکربەری کاربری) (لێرەدا لەو چاپی پروفایلەکەت دابگرە کە لە سەرەوەیە).
3. لە منوێدا، "API" هەڵبژێرە.
4. ئەگەر یاری نەکراوە، "Generate API Key" بکە.
5. API Key و API Secret یاری بکە (Copy) بکە.

### 2. Server و App ID یاری بکە (Get Your Server and App IDs)

1. لە داشبۆردی RunCloud یەکەتدا، بچۆ بۆ "Servers".
2. سێرڤەرەکە هەڵبژێرە کە WordPress multisite ی تۆ لەسەرە.
3. Server ID دەبینیت لە URL: `https://manage.runcloud.io/servers/{SERVER_ID}` دا.
4. بچۆ بۆ "Web Applications" و application ی WordPress یەکەت هەڵبژێرە.
5. App ID دەبینیت لە URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}` دا.

### 3. گۆڕانکارییەکان لە wp-config.php دا زیاد بکە (Add Constants to wp-config.php)

ئەم گۆڕانکارییانە بۆ فایلەکەت `wp-config.php` زیاد بکە:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. یەکگرتووکارییەکە چالاک بکە (Enable the Integration)

۱. خپل WordPress admin ته ورسئ، د Ultimate Multisite > Settings ته لاړ شئ
۲. "Domain Mapping" (د دامین مپینګ) ټب ته ورسئ
۳. तलतिर "Host Integrations" (هست集成ونه) ته سکرول وکړئ
۴. RunCloud integration فعال کړئ
۵. "Save Changes" (تغییرات حفظ کړئ) باندې کلیک وکړئ

## کار څنګه پیلوي؟

کله چې Ultimate Multisite کې یو دامین مپ کیږي:

۱. Integration یو درخواست RunCloud API ته پېژندلنی چې د دامین په اپلیکیشن کې اضافه کړي
۲. که د دامین په بریال<channel|>
