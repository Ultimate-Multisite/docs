---
title: ادغام Cloudways
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# یکپارچه‌سازی با Cloudways

## معرفی
Cloudways یک پلتفرم میزبانی ابری مدیریت‌شده است که امکان راه‌اندازی سایت‌های WordPress روی ارائه‌دهندگان مختلف ابری مانند DigitalOcean، AWS، Google Cloud و غیره را فراهم می‌کند. این یکپارچه‌سازی امکان همگام‌سازی خودکار دامنه و مدیریت گواهی SSL بین Ultimate Multisite و Cloudways را فعال می‌کند.

## امکانات
- همگام‌سازی خودکار دامنه
- مدیریت گواهی SSL
- پشتیبانی از دامنه‌های اضافی
- اعتبارسنجی DNS برای گواهی‌های SSL

## پیش‌نیازها
ثابت‌های زیر باید در فایل `wp-config.php` شما تعریف شوند:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

همچنین به‌صورت اختیاری می‌توانید این مورد را نیز تعریف کنید:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## راهنمای راه‌اندازی

### ۱. دریافت اطلاعات API از Cloudways

1. وارد داشبورد Cloudways خود شوید
2. به "Account" > "API Keys" بروید
3. اگر کلید API ندارید، یکی ایجاد کنید
4. ایمیل و کلید API خود را کپی کنید

### ۲. دریافت شناسه سرور و اپلیکیشن

1. در داشبورد Cloudways خود، به "Servers" بروید
2. سروری که چندسایتی WordPress شما روی آن میزبانی می‌شود را انتخاب کنید
3. شناسه سرور در آدرس URL قابل مشاهده است: `https://platform.cloudways.com/server/{SERVER_ID}`
4. به "Applications" بروید و اپلیکیشن WordPress خود را انتخاب کنید
5. شناسه اپلیکیشن در آدرس URL قابل مشاهده است: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### ۳. افزودن ثابت‌ها به wp-config.php

ثابت‌های زیر را به فایل `wp-config.php` خود اضافه کنید:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

اگر دامنه‌های اضافی دارید که همیشه باید شامل شوند:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### ۴. فعال‌سازی یکپارچه‌سازی

1. در پیشخوان WordPress، به Ultimate Multisite > Settings بروید
2. به تب "Domain Mapping" بروید
3. به پایین اسکرول کنید تا به "Host Integrations" برسید
4. یکپارچه‌سازی Cloudways را فعال کنید
5. روی "Save Changes" کلیک کنید

## نحوه کار

### همگام‌سازی دامنه

وقتی یک دامنه در Ultimate Multisite نگاشت می‌شود:

1. یکپارچه‌سازی تمام دامنه‌های نگاشت‌شده فعلی را دریافت می‌کند
2. دامنه جدید را به لیست اضافه می‌کند (به همراه نسخه www در صورت لزوم)
3. لیست کامل را از طریق API به Cloudways ارسال می‌کند
4. Cloudways نام‌های مستعار دامنه را برای اپلیکیشن شما به‌روزرسانی می‌کند

توجه: API مربوط به Cloudways نیاز دارد که هر بار لیست کامل دامنه‌ها ارسال شود، نه فقط افزودن یا حذف دامنه‌های منفرد.

### مدیریت گواهی SSL

پس از همگام‌سازی دامنه‌ها:

1. یکپارچه‌سازی بررسی می‌کند کدام دامنه‌ها رکوردهای DNS معتبری دارند که به سرور شما اشاره می‌کنند
2. درخواستی به Cloudways ارسال می‌کند تا گواهی‌های SSL از Let's Encrypt برای آن دامنه‌ها نصب شود
3. Cloudways صدور و نصب گواهی SSL را انجام می‌دهد

## دامنه‌های اضافی

ثابت `WU_CLOUDWAYS_EXTRA_DOMAINS` به شما امکان می‌دهد دامنه‌های اضافی را مشخص کنید که همیشه هنگام همگام‌سازی با Cloudways باید شامل شوند. این قابلیت برای موارد زیر مفید است:

- دامنه‌هایی که توسط Ultimate Multisite مدیریت نمی‌شوند
- دامنه‌های wildcard (مثلاً `*.example.com`)
- دامنه‌های توسعه یا staging

## عیب‌یابی

### مشکلات اتصال API
- مطمئن شوید که ایمیل و کلید API شما صحیح است
- بررسی کنید که شناسه سرور و اپلیکیشن شما درست است
- اطمینان حاصل کنید که حساب Cloudways شما مجوزهای لازم را دارد

### مشکلات گواهی SSL
- Cloudways نیاز دارد که دامنه‌ها رکوردهای DNS معتبری داشته باشند که قبل از صدور گواهی SSL به سرور شما اشاره کنند
- یکپارچه‌سازی رکوردهای DNS را قبل از درخواست گواهی SSL اعتبارسنجی می‌کند
- اگر گواهی‌های SSL صادر نمی‌شوند، بررسی کنید که دامنه‌های شما به‌درستی به آدرس IP سرور شما اشاره می‌کنند

### دامنه اضافه نمی‌شود
- لاگ‌های Ultimate Multisite را برای پیام‌های خطا بررسی کنید
- مطمئن شوید که دامنه قبلاً به Cloudways اضافه نشده است
- اطمینان حاصل کنید که پلن Cloudways شما از تعداد دامنه‌هایی که اضافه می‌کنید پشتیبانی می‌کند
