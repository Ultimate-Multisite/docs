---
title: ادغام با سایبرپنل
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# یکپارچه‌سازی با CyberPanel

این راهنما توضیح می‌دهد که چگونه یکپارچه‌سازی Ultimate Multisite با CyberPanel را پیکربندی کنید تا دامنه‌های نگاشت شده در شبکه شما به طور خودکار به عنوان هاست مجازی (virtual hosts) در CyberPanel اضافه (و حذف) شوند، و با قابلیت اختیاری، تخصیص خودکار SSL از طریق Let's Encrypt.

## کارکرد آن

*   هنگامی که یک دامنه در Ultimate Multisite نگاشت می‌شود، این یکپارچه‌سازی با فراخوانی API مربوط به CyberPanel، یک هاست مجازی برای آن دامنه ایجاد می‌کند.
*   هنگامی که نگاشت دامنه حذف می‌شود، این یکپارچه‌سازی با فراخوانی API، هاست مجازی مربوطه را حذف می‌کند.
*   اگر auto-SSL فعال باشد، این یکپارچه‌سازی بلافاصله پس از ایجاد هاست مجازی، فرآیند صدور گواهی Let's Encrypt را آغاز می‌کند.
*   به صورت اختیاری، آدرس `www.` را بسته به تنظیمات "Auto-create www subdomain" در بخش Domain Mapping، اضافه یا حذف می‌کند.

## پیش‌نیازها

*   یک نمونه CyberPanel فعال (توصیه می‌شود v2.3 یا بالاتر باشد) که از سرور WordPress شما قابل دسترسی باشد.
*   یک وب‌سایت موجود در CyberPanel که در حال حاضر ریشه شبکه WordPress شما را میزبانی می‌کند. این یکپارچه‌سازی هاست‌های مجازی جدید را به این سرور متصل می‌کند.
*   فعال بودن دسترسی به CyberPanel API. احراز هویت با نام کاربری و رمز عبور ادمین CyberPanel شما انجام می‌شود.
*   رکورد‌های DNS دامنه‌های نگاشت شده شما باید قبل از اینکه auto-SSL بتواند گواهی معتبری صادر کند، به آدرس IP سرور شما اشاره کنند.

## الزامات

ثابت‌های (constants) زیر باید در فایل `wp-config.php` شما تعریف شوند:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

به صورت اختیاری، می‌توانید موارد زیر را نیز تعریف کنید:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // پیش‌فرض: true — صدور SSL Let's Encrypt پس از ایجاد دامنه
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // پیش‌فرض: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // برای تماس گواهی SSL استفاده می‌شود
```

## دستورالعمل‌های راه‌اندازی

### ۱. فعال‌سازی CyberPanel API

۱. وارد داشبورد CyberPanel خود به عنوان مدیر شوید.
۲. به **Security** > **SSL** بروید و تأیید کنید که SSL در خود رابط CyberPanel فعال است (برای فراخوانی‌های امن API ضروری است).
۳. CyberPanel API به طور پیش‌فرض در آدرس `https://your-server-ip:8090/api/` در دسترس است. برای فعال‌سازی آن نیازی به مراحل اضافی نیست — این قابلیت برای کاربران ادمین به صورت پیش‌فرض فعال است.

### ۲. افزودن ثابت‌ها به wp-config.php

ثابت‌های زیر را قبل از خط `/* That's all, stop editing! */` به فایل `wp-config.php` خود اضافه کنید:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

برای فعال‌سازی auto-SSL (توصیه‌شده):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### ۳. فعال‌سازی یکپارچه‌سازی

۱. در بخش مدیریت شبکه WordPress خود، به **Ultimate Multisite** > **Settings** بروید.
۲. به تب **Domain Mapping** بروید.
۳. تا بخش **Host Integrations** پیمایش کنید.
۴. یکپارچه‌سازی **CyberPanel** را فعال کنید.
۵. روی **Save Changes** کلیک کنید.

### ۴. تأیید اتصال

از تست اتصال داخلی موجود در ویزارد تنظیمات استفاده کنید:

۱. به **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** بروید.
۲. روی **Test Connection** کلیک کنید.
۳. یک پیام موفقیت‌آمیز تأیید می‌کند که پلاگین می‌تواند به CyberPanel API دسترسی پیدا کرده و احراز هویت کند.

## نحوه کارکرد

### Domain Mapping (نگاشت دامنه)

هنگامی که یک دامنه در Ultimate Multisite نگاشت می‌شود:

۱. این یکپارچه‌سازی یک درخواست `POST` به آدرس `/api/createWebsite` در هاست CyberPanel شما ارسال می‌کند.
۲. CyberPanel یک هاست مجازی جدید برای دامنه تحت بسته (package) پیکربندی شده ایجاد می‌کند.
۳. ریشه سند (document root) تنظیم می‌شود تا به دایرکتوری ریشه شبکه WordPress شما اشاره کند.
۴. هنگامی که نگاشت دامنه حذف می‌شود، این یکپارچه‌سازی با فراخوانی `/api/deleteWebsite` هاست مجازی را پاکسازی می‌کند.

### Auto-SSL (SSL خودکار)

هنگامی که `WU_CYBERPANEL_AUTO_SSL` برابر با `true` باشد:

۱. پس از ایجاد هاست مجازی، این یکپارچه‌سازی برای دامنه، فراخوانی `/api/issueSSL` را انجام می‌دهد.
۲. CyberPanel با استفاده از چالش ACME HTTP-01، درخواست گواهی Let's Encrypt را می‌دهد.
۳. گواهی قبل از منقضی شدن به طور خودکار توسط CyberPanel تمدید می‌شود.

> **نکته مهم:** DNS باید قبل از اینکه Let's Encrypt بتواند دامنه را تأیید کند، به طور کامل به آدرس IP سرور شما منتشر شده باشد. اگر صدور SSL بلافاصله پس از نگاشت ناموفق بود، منتظر انتشار DNS بمانید و SSL را از داشبورد CyberPanel در بخش **SSL** > **Manage SSL** دوباره فعال کنید.

### www Subdomain (زیردامنه www)

اگر **Auto-create www subdomain** در تنظیمات Domain Mapping شما فعال باشد، این یکپارچه‌سازی یک نام مستعار (alias) هاست مجازی برای `www.<domain>` ایجاد کرده و در صورت فعال بودن auto-SSL، گواهی‌ای را صادر می‌کند که هم پوشش apex و هم www را داشته باشد.

### Email Forwarders (ارسال‌کننده‌های ایمیل)

هنگامی که افزونه [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) فعال باشد، CyberPanel می‌تواند ارسال‌کننده‌های ایمیل مشتری را نیز فراهم کند. ارسال‌کننده‌ها پیام‌ها را از یک آدرس دامنه به صندوق ورودی دیگری هدایت می‌کنند بدون اینکه صندوق پستی کامل ایجاد شود. این ویژگی برای نام مستعاره‌هایی مانند `info@customer-domain.test` یا `support@customer-domain.test` مفید است.

قبل از فعال‌سازی ارسال‌کننده‌ها برای مشتریان:

۱. تأیید کنید که ثابت‌های CyberPanel در بالا پیکربندی شده و تست اتصال موفقیت‌آمیز باشد.
۲. ارائه‌دهنده ایمیل CyberPanel را در تنظیمات افزونه Emails فعال کنید.
۳. قبل از ایجاد ارسال‌کننده، تأیید کنید که دامنه مشتری قبلاً در CyberPanel وجود دارد.
۴. یک ارسال‌کننده آزمایشی ایجاد کرده و قبل از ارائه این ویژگی در پلن‌های عملیاتی، با آن یک پیام ارسال کنید.

اگر ایجاد ارسال‌کننده ناموفق بود، ابتدا لاگ‌های فعالیت Ultimate Multisite را بررسی کنید، سپس در CyberPanel تأیید کنید که دامنه منبع وجود دارد و کاربر API دارای مجوز مدیریت ایمیل است.

## مرجع پیکربندی

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | آدرس کامل URL برای نمونه CyberPanel شما شامل پورت، مثال: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | نام کاربری ادمین CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | رمز عبور ادمین CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | بسته میزبانی CyberPanel که برای هاست‌های مجازی جدید تخصیص داده می‌شود |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | صدور گواهی SSL Let's Encrypt پس از ایجاد دامنه |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | نسخه PHP برای هاست‌های مجازی جدید (باید با نسخه‌ای که در CyberPanel نصب شده مطابقت داشته باشد) |
| `WU_CYBERPANEL_EMAIL` | No | — | ایمیل تماس برای ثبت گواهی SSL |

## نکات مهم

*   API مربوط به CyberPanel از احراز هویت توکن مبتنی بر نشست (session-based token authentication) استفاده می‌کند. این یکپارچه‌سازی به طور خودکار فرآیند دریافت توکن را در هر فراخوانی API انجام می‌دهد.
*   حساب ادمین CyberPanel شما باید مجوز ایجاد و حذف وب‌سایت‌ها را داشته باشد.
*   CyberPanel به طور پیش‌فرض روی پورت `8090` اجرا می‌شود. اگر سرور شما از فایروال استفاده می‌کند، مطمئن شوید که این پورت از سرور برنامه WordPress قابل دسترسی است.
*   این یکپارچه‌سازی رکورد‌های DNS را مدیریت نمی‌کند. شما باید قبل از نگاشت دامنه در Ultimate Multisite، DNS دامنه را به آدرس IP سرور خود اشاره دهید.
*   اگر از OpenLiteSpeed (OLS) استفاده می‌کنید، پس از تغییرات هاست مجازی، یک راه‌اندازی مجدد نرم (graceful restart) به طور خودکار انجام می‌شود. نیازی به مداخله دستی نیست.

## عیب‌یابی

### API Connection Refused (رد شدن اتصال API)

*   تأیید کنید که پورت `8090` در فایروال سرور شما باز است.
*   تأیید کنید که مقدار `WU_CYBERPANEL_HOST` شامل پروتکل صحیح (`https://`) و پورت باشد.
*   بررسی کنید که گواهی SSL CyberPanel شما معتبر باشد؛ گواهی‌های خودامضا ممکن است باعث خطاهای تأیید TLS شوند. `WU_CYBERPANEL_VERIFY_SSL` را فقط در محیط‌های شبکه خصوصی مورد اعتماد روی `false` قرار دهید.

### Authentication Errors (خطاهای احراز هویت)

*   با ورود مستقیم به CyberPanel، تأیید کنید که `WU_CYBERPANEL_USERNAME` و `WU_CYBERPANEL_PASSWORD` شما صحیح هستند.
*   CyberPanel پس از تلاش‌های ناموفق مکرر ورود، حساب‌ها را قفل می‌کند. اگر قفل شدن حساب رخ داد، **Security** > **Brute Force Monitor** را در CyberPanel بررسی کنید.

### Domain Not Created (دامنه ایجاد نشد)

*   لاگ فعالیت Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) را برای پیام‌های خطای API بررسی کنید.
*   تأیید کنید که بسته تعریف شده در `WU_CYBERPANEL_PACKAGE` در CyberPanel وجود دارد (**Packages** > **List Packages**).
*   اطمینان حاصل کنید که دامنه قبلاً به عنوان یک وب‌سایت در CyberPanel ثبت نشده باشد — ایجاد دامنه تکراری باعث خطا می‌شود.

### SSL Certificate Not Issued (گواهی SSL صادر نشد)

*   تأیید کنید که DNS به طور کامل منتشر شده است: `dig +short your-domain.com` باید آدرس IP سرور شما را برگرداند.
*   Let's Encrypt محدودیت نرخ (rate limits) اعمال می‌کند. اگر اخیراً چندین گواهی برای یک دامنه صادر کرده‌اید، قبل از تلاش مجدد صبر کنید.
*   برای جزئیات مربوط به خطاهای صدور گواهی، لاگ‌های SSL CyberPanel را در **Logs** > **Error Logs** بررسی کنید.
*   به عنوان یک راه حل جایگزین، می‌توانید SSL را به صورت دستی از CyberPanel صادر کنید: **SSL** > **Manage SSL** > دامنه را انتخاب کنید > **Issue SSL**.

## منابع

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
