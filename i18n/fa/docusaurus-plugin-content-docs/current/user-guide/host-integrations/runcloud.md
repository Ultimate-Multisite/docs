---
title: یکپارچه‌سازی RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# یکپارچه‌سازی با RunCloud

## معرفی
RunCloud یک پلتفرم مدیریت سرور مبتنی بر ابر است که به شما امکان می‌دهد برنامه‌های وب را به راحتی روی سرورهای ابری خودتان راه‌اندازی و مدیریت کنید. این یکپارچه‌سازی، همگام‌سازی خودکار دامنه‌ها و مدیریت گواهی SSL را بین Ultimate Multisite و RunCloud فراهم می‌کند.

## امکانات
- همگام‌سازی خودکار دامنه‌ها
- مدیریت گواهی SSL
- حذف دامنه هنگام پاک شدن نگاشت‌ها

## پیش‌نیازها
ثابت‌های زیر باید در فایل `wp-config.php` شما تعریف شوند:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## راهنمای راه‌اندازی

### ۱. دریافت اطلاعات احراز هویت API از RunCloud

1. وارد داشبورد RunCloud خود شوید
2. به «User Profile» بروید (روی تصویر پروفایل خود در گوشه بالا-راست کلیک کنید)
3. از منو گزینه «API» را انتخاب کنید
4. اگر کلید API ندارید، روی «Generate API Key» کلیک کنید
5. API Key و API Secret خود را کپی کنید

### ۲. دریافت شناسه سرور و برنامه

1. در داشبورد RunCloud، به «Servers» بروید
2. سروری که WordPress چندسایته شما روی آن میزبانی می‌شود را انتخاب کنید
3. شناسه سرور در URL قابل مشاهده است: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. به «Web Applications» بروید و برنامه WordPress خود را انتخاب کنید
5. شناسه برنامه در URL قابل مشاهده است: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### ۳. افزودن ثابت‌ها به wp-config.php

ثابت‌های زیر را به فایل `wp-config.php` خود اضافه کنید:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### ۴. فعال‌سازی یکپارچه‌سازی

1. در پنل مدیریت WordPress، به Ultimate Multisite > Settings بروید
2. به زبانه «Domain Mapping» بروید
3. به بخش «Host Integrations» اسکرول کنید
4. یکپارچه‌سازی RunCloud را فعال کنید
5. روی «Save Changes» کلیک کنید

## نحوه کار

وقتی یک دامنه در Ultimate Multisite نگاشت می‌شود:

1. یکپارچه‌سازی یک درخواست به API RunCloud ارسال می‌کند تا دامنه را به برنامه شما اضافه کند
2. اگر دامنه با موفقیت اضافه شود، یکپارچه‌سازی گواهی‌های SSL را نیز مجدداً راه‌اندازی می‌کند
3. وقتی نگاشت دامنه حذف می‌شود، یکپارچه‌سازی دامنه را از RunCloud حذف می‌کند

برای نصب‌های زیردامنه‌ای، یکپارچه‌سازی به‌طور خودکار ایجاد زیردامنه‌ها در RunCloud را هنگام افزودن سایت‌های جدید به شبکه شما مدیریت می‌کند.

## عیب‌یابی

### مشکلات اتصال API
- مطمئن شوید که اطلاعات احراز هویت API شما صحیح است
- بررسی کنید که شناسه سرور و برنامه شما درست باشد
- اطمینان حاصل کنید که حساب RunCloud شما مجوزهای لازم را دارد

### مشکلات گواهی SSL
- RunCloud ممکن است برای صدور گواهی‌های SSL کمی زمان نیاز داشته باشد
- مطمئن شوید که دامنه‌های شما به درستی به آدرس IP سرور شما اشاره می‌کنند
- تنظیمات SSL برنامه خود را در RunCloud بررسی کنید

### دامنه اضافه نشده
- گزارش‌های Ultimate Multisite را برای پیام‌های خطا بررسی کنید
- مطمئن شوید که دامنه قبلاً به RunCloud اضافه نشده باشد
- اطمینان حاصل کنید که پلن RunCloud شما از چندین دامنه پشتیبانی می‌کند
