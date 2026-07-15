---
title: cPanel 통합
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# همکارۍ ilə یکپارچه‌سازی cPanel

## مروری {#overview}
cPanel یکی از محبوب‌ترین پنل‌های کنترل وب هاستینگ است که توسط بسیاری از ارائه‌دهندگان هاست اشتراکی و اختصاصی استفاده می‌شود. این یکپارچه‌سازی امکان همگام‌سازی خودکار دامنه بین Ultimate Multisite و cPanel را فراهم می‌کند، به طوری که شما می‌توانید آدرس‌های جایگزین (aliases) و زیردامنه‌ها را به صورت خودکار به حساب cPanel خود اضافه کنید.

## ویژگی‌ها {#features}
- ایجاد خودکار دامین افزودنی در cPanel
- ایجاد خودکار زیردامنه در cPanel (برای نصب‌های چند دامنه زیردامنه‌ای)
- حذف دامنه هنگام حذف نگاشت‌ها (mappings)

## پیش‌نیازها {#requirements}
باید مقادیر ثابت (constants) زیر را در فایل `wp-config.php` خود تعریف کنید:

```php
define('WU_CPANEL_USERNAME', 'نام_کاربر_cpanel_شما');
define('WU_CPANEL_PASSWORD', 'رمز_کاربر_cpanel_شما');
define('WU_CPANEL_HOST', 'آدرس_هاست_cpanel_شما');
```

به صورت اختیاری، می‌توانید موارد زیر را نیز تعریف کنید:

```php
define('WU_CPANEL_PORT', 2083); // پیش‌فرض ۲083 است
define('WU_CPANEL_ROOT_DIR', '/public_html'); // پیش‌فرض /public_html است
```

## دستورالعمل‌های راه‌اندازی {#setup-instructions}

### ۱. دریافت اطلاعات cPanel خود {#1-get-your-cpanel-credentials}

۱. نام کاربری و رمز عبور cPanel خود را از ارائه‌دهنده هاستینگ خود دریافت کنید.
۲. میزبان (host) cPanel خود را مشخص کنید (معمولاً `cpanel.yourdomain.com` یا `yourdomain.com:2083`).

### ۲. اضافه کردن ثابت‌ها به wp-config.php {#2-add-constants-to-wp-configphp}

ثابت‌های زیر را به فایل `wp-config.php` خود اضافه کنید:

```php
define('WU_CPANEL_USERNAME', 'نام_کاربر_cpanel_شما');
define('WU_CPANEL_PASSWORD', 'رمز_کاربر_cpanel_شما');
define('WU_CPANEL_HOST', 'آدرس_هاست_cpanel_شما');
```

به صورت اختیاری، می‌توانید پورت و مسیر ریشه (root directory) را تغییر دهید:

```php
define('WU_CPANEL_PORT', 2083); // اگر cPanel شما از پورت دیگری استفاده می‌کند تغییر دهید
define('WU_CPANEL_ROOT_DIR', '/public_html'); // اگر ریشه سند شما متفاوت است تغییر دهید
```

### ۳. فعال کردن یکپارچه‌سازی {#3-enable-the-integration}

۱. خپل WordPress admin ته ورسئ، د Ultimate Multisite > Settings ته لاړ شئ
۲. به "Domain Mapping" (د دامین نقشې) تب ته لاړ شئ
۳. तलतिर "Host Integrations" (هوست همغږي) ته سرک بکشئ
۴. cPanel integration فعال کړئ
۵. "Save Changes" (تغییرات حفظ کړئ) باندې کلیک وکړئ

## څنګه کار کوي؟ {#how-it-works}

### Addon Domains (اضافه د دامینونو) {#addon-domains}

کله چې یو دامین Ultimate Multisite کې نقشې ورکول کیږي:

۱. همغږي (integration) یو درخواست cPanel API ته پېژندل做ي ترڅو د دامین په توګه د اضافه دامین катоļa اضافه کړي
۲. د دامین تنظیم کیږي چې خپل root directory ته اشاره وکړي
۳. کله چې د دامین نقشې منځ ته لري، همغږي له cPanel څخه هغه اضافه دامین منځ ته ورکوي

### Subdomains (زماین دامینونه) {#subdomains}

د subdomain multisite نصبولو لپاره، کله چې یو نوی سایت جوړ شي:

۱. همغږي د پوره دامین څخه subdomain کاส่วน اخلي
۲. دا درخواست cPanel API ته پېژندل做ي ترڅو subdomain اضافه کړي
۳. د subdomain تنظیم کیږي چې خپل root directory ته اشاره وکړي

## مهم ټکي (Important Notes) {#important-notes}

- همغږي له خپل cPanel حساب سره اړیکه نیسي او د API2 څخه کار کوي
- ستاسو cPanel حساب باید اجازه لري چې اضافه دامینونه او subdomainونه اضافه کړي
- ځینې هاستونکي ممکن د هغه اندازه محدودوي چې تاسو یې اضافه دامینونه یا subdomainونه جوړولی شئ
- همغږي DNS تنظیم نه کوي؛ تاسو باید خپل دامینونه لاهم ته خپل سرور IP address ته اشاره ورکړئ

## مشکلي حل (Troubleshooting) {#troubleshooting}

### API Connection Issues (د API اړیکې کې مشکلونه) {#api-connection-issues}
- کیک کړئ چې ستاسو cPanel username او password صحیح دي
- وګورئ چې ستاسو cPanel host صحیح دی او ورسره لاسرسی لري
- ډاغه کوئ چې ستاسو cPanel حساب د لازم اجازه لري

### Domain Not Added (دامین اضافه نه شوی) {#domain-not-added}
- د Ultimate Multisite logs کې د کومي خطا پیغامونو لپاره کیک کړئ
- کیکړئ چې دامین پدې حال کې که په cPanel کې اضافه نه دی شوی
- ډاغه کوئ چې ستاسو cPanel حساب د اضافه دامینونه یا subdomainونه محدودیت نه رسیدای

### مسائلی چې د SSL سرتیټونه په اړه دي {#ssl-certificate-issues}
- دا همغږي کار تولیدې یا SSL سرتیټونه ورکوي نه.
- تاسو باید د خپل ډومین لپاره SSL سرتیټونه ورکول لپاره له cPanel یوه SSL/TLS инструменти یا AutoSSL خپله کارولو ویل اړتیا لرئ.
- په بل ډول، تاسو کولی شئ له Let's Encrypt په څیر یو سرویس هم کارولی شئ چې د cPanel AutoSSL سره تړلی وي.
