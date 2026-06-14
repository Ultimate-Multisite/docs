---
title: Shigarwar Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# شمولیت با هاستینگر (hPanel)

## مروری کلی

هاستینگر یک ارائه‌دهنده میزبانی وب محبوب است که پنل کنترل مدرن به نام hPanel دارد. ادغام Ultimate Multisite Hostinger این امکان را فراهم می‌کند که همگام‌سازی خودکار دامنه بین Ultimate Multisite و hPanel هاستینگر انجام شود، به طوری که شما بتوانید نگاشت دامنه‌ها و زیردامنه‌ها را مستقیماً از پنل مدیریت وردپرس خود به‌صورت خودکار مدیریت کنید.

## ویژگی‌ها

- ایجاد خودکار دامنه افزونه در hPanel
- ایجاد خودکار زیردامنه در hPanel (برای نصب‌های چندزیردمنه)
- حذف دامنه هنگام حذف نگاشت‌ها
- ادغام یکپارچه با API مدیریت دامنه hPanel

## پیش‌نیازها

برای استفاده از ادغام هاستینگر، شما به موارد زیر نیاز دارید:

۱. یک حساب کاربری هاستینگر با دسترسی به hPanel
۲. یک توکن API از هاستینگر
۳. ثابت‌های زیر را در فایل `wp-config.php` خود تعریف کنید:

```php
define('WU_HOSTINGER_API_TOKEN', 'توکن_api_هاستینگر_شما');
define('WU_HOSTINGER_ACCOUNT_ID', 'شناسه_حساب_هاستینگر_شما');
```

به صورت اختیاری، می‌توانید موارد زیر را نیز تعریف کنید:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // نقطه پایانی API پیش‌فرض
```

## دستورالعمل‌های تنظیمات

### ۱. تولید توکن API هاستینگر خود

۱. وارد حساب کاربری هاستینگر خود شوید و به hPanel دسترسی پیدا کنید
۲. به **Account Settings** (تنظیمات حساب) → **API Tokens** بروید
۳. روی **Create New Token** (ایجاد توکن جدید) کلیک کنید
۴. یک نام توصیفی برای توکن خود انتخاب کنید (مثلاً "Ultimate Multisite")
۵. مجوزهای لازم را انتخاب کنید:
   - Domain management (مدیریت دامنه)
   - Subdomain management (مدیریت زیردامنه)
۶. توکن تولید شده را کپی کرده و آن را به طور امن ذخیره کنید

### ۲. یافتن شناسه حساب خود

۱. در hPanel، به **Account Settings** (تنظیمات حساب) → **Account Information** (اطلاعات حساب) بروید
۲. شناسه حساب شما در این صفحه نمایش داده می‌شود
۳. این شناسه را کپی کرده و برای مرحله بعد ذخیره کنید

### ۳. اضافه کردن ثابت‌ها به wp-config.php

ثابت‌های زیر را به فایل `wp-config.php` خود اضافه کنید:

```php
define('WU_HOSTINGER_API_TOKEN', 'token_api_hostinger_ka');
define('WU_HOSTINGER_ACCOUNT_ID', 'id_account_hostinger_ka');
```

Idan asusun kuwaywata Hostinger ɗinka ya yi amfani da endpoint na API daban, za ka iya canza shi:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Shigar Wajen Haɗin Kai (Enable the Integration)

1. A cikin admin na WordPress, tafiya zuwa **Ultimate Multisite > Settings**
2. Tafiya zuwa tab ɗin **Domain Mapping**
3. Jaka taɓa ƙasa zuwa **Host Integrations**
4. Shigar wajen haɗin kai na **Hostinger (hPanel)**
5. Danna **Save Changes**

## Yadda yake Aiki (How It Works)

### Addon Domains (Domain-dakin Tambaya)

Idan ka yi mapping ga domain a Ultimate Multisite:

1. Shigar wajen haɗin kai yana aiko wani bukata ga API na Hostinger don ƙara domain a matsayin addon domain
2. Domain ɗin an shirya shi ya nuna direktiya zuwa directory na gida (root directory)
3. Lokacin da aka cire mapping na domain, shigar wajen haɗin kai yana cire addon domain daga hPanel ne ba tare da ka yi wani abu ba

### Subdomains (Subdomain-dakin Tambaya)

Don install subdomain multisite, lokacin da ake ƙirƙirar wuri na sabon site:

1. Shigar wajen haɗin kai yana ɗaukar wajen subdomain daga domain gaba
2. Yana aiko bukata ga API na Hostinger don ƙara subdomain
3. Subdomain ɗin an shirya shi ya nuna direktiya zuwa directory na gida (root directory)

## Abubuwan Muhimmai (Important Notes)

- Shigar wajen haɗin kai yana amfani da REST API na Hostinger don tattaunawa da asusunka
- Token ɗinka na API dole ne ya da iyakoki na dacewa don sarrafa domain da subdomain
- Shigar wajen haɗin kai ba shi da aiki kan tsarin DNS; domain-dakin dole ne ya nuna zuwa asusun Hostinger ɗinka kafin ka yi hakan
- Abubuwan bukata API suna tura cikin aminci ta HTTPS
- Ka riƙe ammar API ɗinka cikin aminci kuma kada ka raba shi a waje ba

## Magance Matakai (Troubleshooting)

### Matsalolin Haɗin Kai na API

- tabbaki da token ɗin API (API token) ya dace kuma bai wuce ba
- bincika cewa ID ɗin ka na Acount (Account ID) ya dace
- tabbatar cewa token ɗin API yana da amincewa (permissions) na gudanar da domain management
- tabbatar cewa aikin Hostinger ɗinka yana aiki kuma yana cikin yanayi mai kyau

### Domain Ba Ya Tamba

- Bincika logs na Ultimate Multisite don wajen wata saita (error messages)
- tabbatar cewa domain ba ya shiga a cikin aikin Hostinger ɗinka ba
- tabbatar cewa aikin Hostinger ɗinka bai isa ga ƙarin domain (addon domains) ba
- tabbatar cewa domain an yi shi daidai zuwa wajen nameservers na Hostinger

### Matso na SSL (SSL Certificate Issues)

- Wannan haɗin (integration) ba ya gudanar da samar da matsayon SSL certificate ba
- Hostinger yawanci tana bayar da SSL certificates na kyauta ta hanyar AutoSSL
- Za ka iya sarrafa SSL certificates kai tsaye a hPanel ta ƙarƙashin **SSL/TLS**
- Ko kuma, yi amfani da Let's Encrypt tare da ƙwarewar AutoSSL na Hostinger

## Tallafi (Support)

Don ƙarin taimako game da haɗin Hostinger, donji:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
