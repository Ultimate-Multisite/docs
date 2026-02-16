---
title: یکپارچه‌سازی cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# یکپارچه‌سازی با cPanel

## معرفی
cPanel یکی از محبوب‌ترین کنترل پنل‌های میزبانی وب است که توسط بسیاری از ارائه‌دهندگان هاست اشتراکی و اختصاصی استفاده می‌شود. این یکپارچه‌سازی امکان همگام‌سازی خودکار دامنه‌ها بین Ultimate Multisite و cPanel را فراهم می‌کند و به شما اجازه می‌دهد دامنه‌های جایگزین و زیردامنه‌ها را به‌صورت خودکار به حساب cPanel خود اضافه کنید.

## ویژگی‌ها
- ایجاد خودکار addon domain در cPanel
- ایجاد خودکار زیردامنه در cPanel (برای نصب‌های چندسایتی از نوع زیردامنه)
- حذف دامنه هنگام پاک شدن نگاشت‌ها

## پیش‌نیازها
ثابت‌های زیر باید در فایل `wp-config.php` شما تعریف شوند:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

همچنین می‌توانید به‌صورت اختیاری موارد زیر را نیز تعریف کنید:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## راهنمای راه‌اندازی

### ۱. دریافت اطلاعات ورود cPanel

1. نام کاربری و رمز عبور cPanel خود را از ارائه‌دهنده هاست دریافت کنید
2. آدرس هاست cPanel خود را مشخص کنید (معمولاً `cpanel.yourdomain.com` یا `yourdomain.com:2083`)

### ۲. افزودن ثابت‌ها به wp-config.php

ثابت‌های زیر را به فایل `wp-config.php` خود اضافه کنید:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

در صورت نیاز، می‌توانید پورت و پوشه اصلی را نیز سفارشی کنید:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### ۳. فعال‌سازی یکپارچه‌سازی

1. در پیشخوان WordPress، به Ultimate Multisite > Settings بروید
2. به تب "Domain Mapping" بروید
3. به بخش "Host Integrations" پایین بروید
4. یکپارچه‌سازی cPanel را فعال کنید
5. روی "Save Changes" کلیک کنید

## نحوه عملکرد

### Addon Domains

هنگامی که یک دامنه در Ultimate Multisite نگاشت می‌شود:

1. یکپارچه‌سازی درخواستی به API cPanel ارسال می‌کند تا دامنه را به عنوان addon domain اضافه کند
2. دامنه طوری پیکربندی می‌شود که به پوشه اصلی شما اشاره کند
3. هنگامی که نگاشت دامنه حذف می‌شود، یکپارچه‌سازی addon domain را از cPanel حذف می‌کند

### زیردامنه‌ها

برای نصب‌های چندسایتی از نوع زیردامنه، هنگامی که سایت جدیدی ایجاد می‌شود:

1. یکپارچه‌سازی بخش زیردامنه را از دامنه کامل استخراج می‌کند
2. درخواستی به API cPanel ارسال می‌کند تا زیردامنه را اضافه کند
3. زیردامنه طوری پیکربندی می‌شود که به پوشه اصلی شما اشاره کند

## نکات مهم

- این یکپارچه‌سازی از API2 cPanel برای ارتباط با حساب cPanel شما استفاده می‌کند
- حساب cPanel شما باید مجوز افزودن addon domains و زیردامنه‌ها را داشته باشد
- برخی ارائه‌دهندگان هاست ممکن است تعداد addon domains یا زیردامنه‌هایی که می‌توانید ایجاد کنید را محدود کنند
- این یکپارچه‌سازی پیکربندی DNS را مدیریت نمی‌کند؛ همچنان باید دامنه‌های خود را به آدرس IP سرورتان هدایت کنید

## عیب‌یابی

### مشکلات اتصال به API
- از صحت نام کاربری و رمز عبور cPanel خود اطمینان حاصل کنید
- بررسی کنید که آدرس هاست cPanel صحیح و قابل دسترسی باشد
- مطمئن شوید که حساب cPanel شما مجوزهای لازم را دارد
- آدرس کامل هاست را امتحان کنید (مثلاً `https://cpanel.yourdomain.com`)

### دامنه اضافه نشد
- گزارش‌های Ultimate Multisite را برای پیام‌های خطا بررسی کنید
- مطمئن شوید که دامنه قبلاً به cPanel اضافه نشده باشد
- اطمینان حاصل کنید که حساب cPanel شما به سقف محدودیت addon domains یا زیردامنه‌ها نرسیده باشد

### مشکلات گواهی SSL
- این یکپارچه‌سازی صدور گواهی SSL را مدیریت نمی‌کند
- برای صدور گواهی SSL برای دامنه‌هایتان باید از ابزارهای SSL/TLS یا قابلیت AutoSSL در cPanel استفاده کنید
- همچنین می‌توانید از سرویسی مانند Let's Encrypt همراه با AutoSSL cPanel استفاده کنید
