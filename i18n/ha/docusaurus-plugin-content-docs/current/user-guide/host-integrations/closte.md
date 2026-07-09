---
title: Shigarwar Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# همگرایی کلست (Closte Integration) {#closte-integration}

## مروری کلی {#overview}
کلست (Closte) یک پلتفرم میزبانی وردپرس مدیریت شده است که بر روی زیرساخت گوگل کلاد ساخته شده است. این همگرایی امکان همگام‌سازی خودکار دامنه و مدیریت گواهی SSL را بین Ultimate Multisite و Closte فراهم می‌کند.

## ویژگی‌ها {#features}
- همگام‌سازی خودکار دامنه
- مدیریت گواهی SSL
- پشتیبانی از دامنه‌های وایلدکارد (Wildcard domain)
- اگر روی کلست اجرا شوید، نیازی به تنظیمات اضافی نیست.

## پیش‌نیازها {#requirements}
اگر از Closte استفاده می‌کنید، باید ثابت زیر را در فایل `wp-config.php` خود تعریف کنید:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

این ثابت معمولاً اگر روی کلست میزبانی کرده باشید، از قبل تعریف شده است.

## دستورالعمل‌های راه‌اندازی {#setup-instructions}

### ۱. تأیید کلید API کلست خود {#1-verify-your-closte-api-key}
اگر روی کلست میزبانی می‌کنید، باید ثابت `CLOSTE_CLIENT_API_KEY` در فایل `wp-config.php` شما تعریف شده باشد. می‌توانید با بررسی فایل `wp-config.php` خود این موضوع را تأیید کنید.

### ۲. فعال کردن همگرایی {#2-enable-the-integration}
۱. در پنل مدیریت وردپرس، به Ultimate Multisite > Settings بروید.
۲. به تب "Domain Mapping" (نقشه‌برداری دامنه) بروید.
۳. به پایین اسکرول کرده و به بخش "Host Integrations" (همگرایی میزبان) بروید.
۴. همگرایی کلست را فعال کنید.
۵. روی "Save Changes" (ذخیره تغییرات) کلیک کنید.

## نحوه کارکرد {#how-it-works}
وقتی یک دامنه در Ultimate Multisite نگاشت می‌شود:

۱. این همگرایی یک درخواست به API کلست ارسال می‌کند تا دامنه شما را به برنامه اضافه کند.
۲. کلست به صورت خودکار مدیریت صدور گواهی SSL را انجام می‌دهد.
۳. وقتی یک نگاشت دامنه حذف می‌شود، این همگرایی آن دامنه را از کلست حذف خواهد کرد.

این همگرایی همچنین با تنظیم فاصله بررسی DNS در Ultimate Multisite کار می‌کند و به شما اجازه می‌دهد پیکربندی کنید که سیستم چند وقت یک بار برای بررسی انتشار DNS و صدور گواهی SSL چه کاری انجام دهد.

## ایجاد رکورد دامنه {#domain-record-creation}

Wannan haɗin yana tabbatarwa cewa idan aka ƙirƙira ko a dubi wani gida, ana samar da rekodi na domain ne ta zahiri. Wannan yana da mahimmanci sosai ga haɗin Closte, saboda ƙirƙirar rekodin domain tana ƙarfafa API na Closte don ƙirƙirar domain da sertifikat SSL.

## Magan Tarin Matala (Troubleshooting) {#troubleshooting}

### Matalaha a Haɗin API {#api-connection-issues}
- Ka tabbatar cewa kunci na API na Closte yana daidai
- Ka tabbatar cewa asusunka na Closte yana da amincewa (permissions) da ake bukata

### Matalaha a Sertifikat SSL {#ssl-certificate-issues}
- Wataƙila Closte tana buƙatar lokaci don samar da sertifikat SSL (yawanci 5-10 daƙiƙa)
- Ka tabbatar cewa domain-domain ka suna nuna sahihi ga wajen IP na sassan Closte
- Bincika rekodod DNS na domain ɗinka don tabbatar su an tsara shi yadda ya kamata

### Domain Ba Ya Tambaya {#domain-not-added}
- Bincika log-log na Ultimate Multisite don wani saƙo na kuskure (error messages)
- Ka tabbatar cewa domain ba ya shiga Closte ba a wannan lokacin ba
- Ka tabbatar cewa rekodod DNS na domain ɗinka sun tsara shi yadda ya kamata

### Tsarin Binciken DNS {#dns-check-interval}
- Idan sertifikat SSL suna buƙatar lokaci sosai don samar, za ka iya canza tsarin binciken DNS a cikin Domain Mapping settings
- Tsarin da aka fi amfani da shi shine 300 seconds (5 daƙiƙa), amma za ka iya sanya shi na ƙasa kamar 10 seconds don samun sakamakon da sauri yayin gwaji
