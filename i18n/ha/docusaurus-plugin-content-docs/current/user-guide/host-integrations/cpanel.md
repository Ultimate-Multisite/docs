---
title: Shigarwa ta cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# شمول‌کردن با cPanel

## مروری کلی
cPanel یکی از محبوب‌ترین پنل‌های کنترل هاست وب است که توسط بسیاری از ارائه‌دهندگان هاست اشتراکی و اختصاصی استفاده می‌شود. این اتصال به شما اجازه می‌دهد تا همگام‌سازی خودکار دامنه بین Ultimate Multisite و cPanel را فعال کنید، که باعث می‌شود آدرس‌های جایگزین (aliases) و زیردامنه (subdomains) را به طور خودکار به حساب cPanel خود اضافه کنید.

## ویژگی‌ها
- ایجاد خودکار دامنه‌های اضافی در cPanel
- ایجاد خودکار زیردامنه‌ها در cPanel (برای نصب‌های چند دامنه با زیردامنه)
- حذف دامنه زمانی که نگاشت‌ها (mappings) حذف می‌شوند

## پیش‌نیازها
باید ثابت‌های زیر را در فایل `wp-config.php` خود تعریف کنید:

```php
define('WU_CPANEL_USERNAME', 'نام_کاربری_cpanel_شما');
define('WU_CPANEL_PASSWORD', 'رمز_جمله_باسورد_cpanel_شما');
define('WU_CPANEL_HOST', 'میزبان_cpanel_شما');
```

به صورت اختیاری، می‌توانید موارد زیر را نیز تعریف کنید:

```php
define('WU_CPANEL_PORT', 2083); // پیش‌فرض ۲083 است
define('WU_CPANEL_ROOT_DIR', '/public_html'); // پیش‌فرض /public_html است
```

## دستورالعمل‌های راه‌اندازی

### ۱. دریافت اطلاعات cPanel خود

۱. نام کاربری و رمز عبور cPanel خود را از ارائه‌دهنده هاست خود دریافت کنید.
۲. میزبان cPanel خود را مشخص کنید (معمولاً `cpanel.yourdomain.com` یا `yourdomain.com:2083`).

### ۲. اضافه کردن ثابت‌ها به wp-config.php

ثابت‌های زیر را به فایل `wp-config.php` خود اضافه کنید:

```php
define('WU_CPANEL_USERNAME', 'نام_کاربری_cpanel_شما');
define('WU_CPANEL_PASSWORD', 'رمز_جمله_باسورد_cpanel_شما');
define('WU_CPANEL_HOST', 'میزبان_cpanel_شما');
```

به صورت اختیاری، می‌توانید پورت و مسیر ریشه را تغییر دهید:

```php
define('WU_CPANEL_PORT', 2083); // اگر cPanel شما از پورت دیگری استفاده می‌کند تغییر دهید
define('WU_CPANEL_ROOT_DIR', '/public_html'); // اگر ریشه سند (document root) شما متفاوت است تغییر دهید
```

### ۳. فعال کردن اتصال

1. A cikin admin site ɗin WordPress, ka je zuwa Ultimate Multisite > Settings (Tattara).
2. Je zuwa tab ɗin "Domain Mapping" (Saurin Maida Domain).
3. Je ƙasa zuwa "Host Integrations" (Haɗa da Wurin Gudanarwa).
4. Shiga wajen aiki (Enable) haɗin cPanel.
5. Danna "Save Changes" (Ajiye Canjin).

## Yadda Ake Aiki

### Addon Domains (Saurin Maida Domain)

Idan aka saida domain a Ultimate Multisite:

1. Haɗin yana aiko wajen API na cPanel don ƙara domain a matsayin addon domain.
2. Domain ɗin ana tsara shi ya shiga direktori na gaba (root directory).
3. Lokacin da aka cire saida domain, haɗin zai cire addon domain daga cPanel.

### Subdomains (Saurin Maida Subdomain)

Don install subdomain multisite, lokacin da ake ƙirƙirar wuri na sabon site:

1. Haɗin yana ɗaukar wajen subdomain daga domain gaba.
2. Yana aiko wajen API na cPanel don ƙara subdomain.
3. Subdomain ɗin ana tsara shi ya shiga direktori na gaba (root directory).

## Shawarwari Muhimmai

- Haɗin yana amfani da API2 na cPanel don tattaunawa da asusun cPanel ɗinka.
- Asusun cPanel ɗinka dole ne ya samu iyakacin amincewa don ƙara addon domains da subdomains.
- Wasu masu gudanarwa (hosting providers) za su iya iyakance yawan addon domains ko subdomains da za ka iya ƙirƙira.
- Haɗin ba shi da alaka da tsara DNS; dole ne ka shiga domain ɗinka zuwa IP address na server ɗinka.

## Magan Rarraba Matala (Troubleshooting)

### Matsalolin Haɗin API (API Connection Issues)
- Ka tabbata sunan amfani (username) da kalmar sirri (password) na cPanel suna daidai.
- Bincika ko wurin gudanarwa (host) na cPanel yana daidai kuma ana iya samun shi.
- Ka tabbatar cewa asusun cPanel ɗinka yana da iyakacin amincewa da ake bukata.
- Ka gwada amfani da URL ɗin gaba gaba ga host (misali: `https://cpanel.yourdomain.com`).

### Domain Ba Ya Tamba (Domain Not Added)
- Bincika logs na Ultimate Multisite don wata saƙon sauki (error messages).
- Ka tabbatar domain ba ya ƙara a cPanel ba.
- Ka tabbatar asusun cPanel ɗinka bai isa ga iyakacin addon domains ko subdomains ba.

### Matsalolin Sertifikat SSL (SSL Certificate Issues)
- Wannan haɗin ba shi da ikon samarwa ko samar da sertifikat SSL.
- Dole ne ka yi amfani da kayan aiki na SSL/TLS na cPanel ko ƙarin ƙwarewar AutoSSL don samar da sertifikat SSL ga domain ɗinka.
- A wani bangare, za ka iya amfani da wani sabon wuri kamar Let's Encrypt tare da AutoSSL na cPanel.
