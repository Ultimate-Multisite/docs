---
title: هوستينجر (hPanel) همغږي
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) Integration

## مروری (Overview)

Hostinger یه شرکت خیلی معروف میاد که هاستینگ وب داره و پنل کنترلی مدرنی به اسم hPanel داره. Ultimate Multisite Hostinger integration این امکان رو فراهم می‌کنه که همگام‌سازی دامنه‌ها بین Ultimate Multisite و hPanelِ Hostinger خودت به‌صورت خودکار انجام بشه، طوری که بتونی تنظیمات نگاشت دامنه (domain mappings) و زیردامنه‌ها رو مستقیماً از پنل مدیریت وردپرس خودت مدیریت کنی.

## ویژگی‌ها (Features)

- ایجاد خودکار addon domain در hPanel
- ایجاد خودکار subdomain در hPanel (برای نصب‌های چند دامنه‌ای با زیردامنه)
- حذف دامنه وقتی نگاشت‌ها پاک می‌شن
- ادغام بی‌نقص با API مدیریت دامنه hPanel

## پیش‌نیازها (Requirements)

برای استفاده از این integration Hostinger، به موارد زیر نیاز داری:

۱. یک حساب Hostinger که دسترسی به hPanel داره
۲. یک توکن API از Hostinger
۳. ثابت‌های زیر رو توی فایل `wp-config.php` خودت تعریف کن:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

به صورت اختیاری، می‌تونی این موارد رو هم تعریف کنی:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // نقطه پایانی API پیش‌فرض
```

## دستورالعمل‌های راه‌اندازی (Setup Instructions)

### ۱. توکن API Hostinger خودت رو بساز

۱. وارد حساب Hostinger خود شو و به hPanel دسترسی پیدا کن
۲. به **Account Settings** → **API Tokens** برو
۳. روی **Create New Token** کلیک کن
۴. یه اسم توکن مناسب بهش بده (مثلاً "Ultimate Multisite")
۵. مجوزهای لازم رو انتخاب کن:
   - مدیریت دامنه (Domain management)
   - مدیریت زیردامنه (Subdomain management)
۶. توکن تولید شده رو کپی کن و محکم ذخیره کن

### ۲. شناسه حساب خودت رو پیدا کن

۱. توی hPanel، به **Account Settings** → **Account Information** برو
۲. شناسه حساب شما در این صفحه نمایش داده میشه
۳. این شناسه رو کپی و برای مرحله بعد ذخیره کن

### ۳. ثابت‌ها رو توی wp-config.php اضافه کن

ثابت‌های زیر رو توی فایل `wp-config.php` خودت اضافه کن:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

که څنګه چې ستاسو Hostinger اکاونه یو بدلون API endpoint کاروي، تاسو کولی شئ دا تنظیم کړئ:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### ۴. همکارۍ فعال کړئ (Enable the Integration)

۱. په خپل WordPress admin کې، ورته **Ultimate Multisite > Settings** ته لاړ شئ.
۲. به **Domain Mapping** tab ته لاړ شئ.
۳. तलतिर **Host Integrations** ته لیږدئ.
۴. **Hostinger (hPanel)** همکارۍ فعال کړئ.
۵. **Save Changes** باندې کلیک وکړئ.

## څنګه کار کوي (How It Works)

### Addon Domains (د اضافي د دامینونو لپاره)

کله چې تاسو Ultimate Multisite کې یو دامین مپ کړئ:

۱. همکارۍ Hostinger API ته درخواستونه پېژندلنیږي ترڅو د دامین په توګه اضافه کړي چې د اضافي دامین په توګه کار کوي.
۲. دامین وایله ده چې خپل root directory ته اشاره وکړي.
۳. کله چې یو دامین مپ ورکړل منوول شي، همکارۍ د hPanel څخه اضافي دامین اخیستل بخښنه得.

### Subdomains (د ساب‌دامینونو لپاره)

د ساب‌دامین Multisite نصب کولو لپاره، کله چې یو نوی سایت جوړ کړئ:

۱. همکارۍ له پوره دامین څخه ساب‌دامین جزء اخلي.
۲. دا API ته درخواستونه پېژندلنیږي ترڅو ساب‌دامین اضافه کړي.
۳. ساب‌دامین وایله ده چې خپل root directory ته اشاره وکړي.

## مهم ټکي (Important Notes)

- همکارۍ د ستاسو اکاونه سره اړیکه نیسي د Hostinger REST API له لارې.
- ستاسو API token باید د دامین او ساب‌دامین مدیریت لپاره لازم بصلاحیت ولري.
- همکارۍ DNS تنظیم نه کوي؛ دامینونه باید پیل دی چې تر ستاسو Hostinger اکاونه اشاره وکړي.
- API درخواستونه په HTTPS له لارې په امنیت سره کیږي.
- خپل API token محفوظ لرئ او هیڅکله یې علن کې شریک नगर्नुहोस्.

## مشکې حل (Troubleshooting)

### API Connection Issues

API token اوویره کړئ چې صحیح دی او منقضی نه دی
اکثر ID خپل حساب هم صحیح دی
یقین وکړئ چې API token ته د دامین مدیریت لپاره اړین اجازه ورکړل شوې دي
تثبیت وکړئ چې Hostinger حساب فعال دی او ښه وضعیت کې دی

### د دامنه اضافه نه ده شوې

- د Ultimate Multisite لاگونه په هر ډول غلط پیغامونو لپاره وګورئ
- کیکړئ چې دامین تر اوسه په خپل Hostinger حساب کې اضافه نه شوی دی
- ډاغه یوازې که د اضافي دامینونو لپاره د Hostinger حساب محدودیت نه رسیدای دی
- تایید وکړئ چې دامین به په سمه توګه د خپل Hostinger nameservers ته اشاره کړی وي

### د SSL سرتیفیکات مسایل

- دا همغږي سیستم د SSL سرتیفیکات ورکولو کار نه کوي
- Hostinger معمولا له AutoSSL له لارې وړیا SSL سرتیفیکات وړاندې کوي
- تاسو کولی شئ په hPanel کې د **SSL/TLS** تحت مستقیم مدیریت وکړئ
- بدلونweise، له Hostinger د AutoSSL خاصیت څخه Let's Encrypt هم کار اخیستل

## مرسته

د Hostinger همغږي کولو لپاره اضافي مرسته ترلاسه کولو لپاره، مهرباني وکړئ وګورئ:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
