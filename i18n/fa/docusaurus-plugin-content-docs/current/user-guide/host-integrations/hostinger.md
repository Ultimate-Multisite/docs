---
title: ادغام با هاستینگر (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# ادغام با Hostinger (hPanel)

## نمای کلی {#overview}

Hostinger یک ارائه‌دهنده هاستینگ وب محبوب است که از یک پنل مدیریت مدرن به نام hPanel استفاده می‌کند. ادغام Ultimate Multisite با Hostinger به شما امکان می‌دهد که همگام‌سازی دامنه‌ها را بین Ultimate Multisite و hPanel Hostinger به صورت خودکار انجام دهید. این کار به شما اجازه می‌دهد تا نقشه‌برداری دامنه‌ها و زیردامنه‌ها را مستقیماً از پیشخوان (admin) وردپرس خود مدیریت کنید.

## ویژگی‌ها {#features}

- ایجاد خودکار دامنه‌های افزودنی (addon domain) در hPanel
- ایجاد خودکار زیردامنه‌ها در hPanel (برای نصب‌های چندسایتی زیردامنه)
- حذف دامنه در صورت حذف نقشه‌برداری
- یکپارچه‌سازی بی‌درنگ با API مدیریت دامنه hPanel

## پیش‌نیازها {#requirements}

برای استفاده از ادغام Hostinger، به موارد زیر نیاز دارید:

1. یک حساب کاربری Hostinger با دسترسی به hPanel
2. یک توکن API از Hostinger
3. تعریف ثابت‌های زیر در فایل `wp-config.php` شما:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

به صورت اختیاری، می‌توانید موارد زیر را نیز تعریف کنید:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // نقطه پایانی پیش‌فرض API
```

## دستورالعمل‌های راه‌اندازی {#setup-instructions}

### ۱. تولید توکن API Hostinger خود {#1-generate-your-hostinger-api-token}

۱. وارد حساب کاربری Hostinger خود شوید و به hPanel دسترسی پیدا کنید.
۲. به **تنظیمات حساب کاربری (Account Settings)** → **توکن‌های API (API Tokens)** بروید.
۳. روی **ایجاد توکن جدید (Create New Token)** کلیک کنید.
۴. برای توکن خود یک نام توصیفی قرار دهید (مثلاً "Ultimate Multisite").
۵. مجوزهای لازم را انتخاب کنید:
   - مدیریت دامنه
   - مدیریت زیردامنه
۶. توکن تولید شده را کپی کرده و آن را به صورت امن ذخیره کنید.

### ۲. پیدا کردن شناسه حساب کاربری (Account ID) {#2-find-your-account-id}

۱. در hPanel، به **تنظیمات حساب کاربری (Account Settings)** → **اطلاعات حساب کاربری (Account Information)** بروید.
۲. شناسه حساب کاربری شما در این صفحه نمایش داده می‌شود.
۳. این شناسه را کپی کرده و برای مرحله بعدی ذخیره کنید.

### ۳. افزودن ثابت‌ها به wp-config.php {#3-add-constants-to-wp-configphp}

ثابت‌های زیر را به فایل `wp-config.php` خود اضافه کنید:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

اگر حساب Hostinger شما از نقطه پایانی API متفاوتی استفاده می‌کند، می‌توانید آن را سفارشی کنید:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### ۴. فعال‌سازی ادغام {#4-enable-the-integration}

۱. در پیشخوان وردپرس خود، به **Ultimate Multisite > تنظیمات (Settings)** بروید.
۲. به تب **نقشه‌برداری دامنه (Domain Mapping)** بروید.
۳. تا **ادغام‌های میزبان (Host Integrations)** پیمایش کنید.
۴. ادغام **Hostinger (hPanel)** را فعال کنید.
۵. روی **ذخیره تغییرات (Save Changes)** کلیک کنید.

## نحوه کارکرد {#how-it-works}

### دامنه‌های افزودنی (Addon Domains) {#addon-domains}

هنگامی که یک دامنه را در Ultimate Multisite نقشه‌برداری می‌کنید:

۱. ادغام یک درخواست به API Hostinger ارسال می‌کند تا دامنه را به عنوان یک دامنه افزودنی اضافه کند.
۲. دامنه طوری پیکربندی می‌شود که به دایرکتوری اصلی شما اشاره کند.
۳. هنگامی که یک نقشه‌برداری دامنه حذف می‌شود، ادغام به طور خودکار دامنه افزودنی را از hPanel حذف می‌کند.

### زیردامنه‌ها (Subdomains) {#subdomains}

برای نصب‌های چندسایتی زیردامنه، هنگامی که یک سایت جدید ایجاد می‌شود:

۱. ادغام بخش زیردامنه را از دامنه کامل استخراج می‌کند.
۲. یک درخواست به API Hostinger ارسال می‌کند تا زیردامنه را اضافه کند.
۳. زیردامنه طوری پیکربندی می‌شود که به دایرکتوری اصلی شما اشاره کند.

## نکات مهم {#important-notes}

- این ادغام از REST API Hostinger برای ارتباط با حساب کاربری شما استفاده می‌کند.
- توکن API شما باید مجوزهای لازم برای مدیریت دامنه و زیردامنه را داشته باشد.
- این ادغام پیکربندی DNS را مدیریت نمی‌کند؛ دامنه‌ها باید از قبل به حساب Hostinger شما اشاره کرده باشند.
- درخواست‌های API به صورت امن از طریق HTTPS انجام می‌شوند.
- توکن API خود را امن نگه دارید و هرگز آن را به صورت عمومی به اشتراک نگذارید.

## عیب‌یابی {#troubleshooting}

### مشکلات اتصال API {#api-connection-issues}

- تأیید کنید که توکن API شما صحیح است و منقضی نشده باشد.
- بررسی کنید که شناسه حساب کاربری شما درست باشد.
- اطمینان حاصل کنید که توکن API شما مجوزهای لازم برای مدیریت دامنه را دارد.
- تأیید کنید که حساب Hostinger شما فعال و در وضعیت خوبی قرار دارد.

### دامنه اضافه نشد {#domain-not-added}

- لاگ‌های Ultimate Multisite را برای هرگونه پیام خطای بررسی کنید.
- تأیید کنید که دامنه قبلاً به حساب Hostinger شما اضافه نشده باشد.
- اطمینان حاصل کنید که حساب Hostinger شما به محدودیت دامنه‌های افزودنی خود نرسیده باشد.
- تأیید کنید که دامنه به درستی به نام سرورهای (nameservers) Hostinger شما اشاره می‌کند.

### مشکلات گواهی SSL {#ssl-certificate-issues}

- این ادغام مسئول صدور گواهی SSL نیست.
- Hostinger معمولاً گواهی‌های SSL رایگان را از طریق AutoSSL ارائه می‌دهد.
- شما می‌توانید گواهی‌های SSL را مستقیماً در hPanel زیر **SSL/TLS** مدیریت کنید.
- یا به طور جایگزین، از Let's Encrypt با قابلیت AutoSSL Hostinger استفاده کنید.

## پشتیبانی {#support}

برای کمک بیشتر در مورد ادغام Hostinger، لطفاً به موارد زیر مراجعه کنید:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
