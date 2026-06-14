---
title: هستیا کنټرول پینل همغږي
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# دمج پنل کنترل هستیا (Hestia Control Panel Integration)

این راهنما توضیح می‌دهد که چگونه تنظیمات یکپارچه‌سازی Ultimate Multisite Hestia را انجام دهید تا دامنه‌های نگاشت شده در شبکه شما به صورت خودکار به عنوان نام‌های مستعار وب (Web Domain Aliases) در Hestia اضافه و حذف شوند.

- مرجع CLI هستیا: v-add-web-domain-alias / v-delete-web-domain-alias
- سند رسمی REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## این کار چه کاری انجام می‌دهد؟
- وقتی یک دامنه در Ultimate Multisite نگاشت می‌شود، این یکپارچه‌سازی از API هستیا برای اجرای دستور زیر استفاده می‌کند:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- وقتی نگاشت یک دامنه حذف می‌شود، دستور زیر اجرا می‌گردد:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- بسته به تنظیمات "Auto-create www subdomain" (ایجاد خودکار زیردامنه www) در تنظیمات نگاشت دامنه شما، می‌توانید نام مستعار `www.` را اضافه یا حذف کنید.

## پیش‌نیازها
- یک دامنه وب هستیا وجود دارد که از قبل به نصب وردپرس شما اشاره می‌کند. این یکپارچه‌سازی نام‌های مستعاری (aliases) را به این دامنه پایه متصل خواهد کرد.
- دسترسی به API هستیا فعال باشد. می‌توانید با استفاده از رمز عبور یا هش/توکن API احراز هویت کنید.

برای فعال کردن دسترسی به API و جزئیات احراز هویت، به سند REST API هستیا مراجعه کنید:
https://hestiacp.com/docs/server-administration/rest-api.html

## پیکربندی (Wizard → Integrations → Hestia)
مقادیر زیر را ارائه دهید:

- `WU_HESTIA_API_URL` (لازم دی)
  - بنياداری اصلی API، معمولاً `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (لازم دی)
  - هغه کاربری چې د API命令 لپاره په Hestia کې کارول کیږي (اکثر وختونه `admin`).
- `WU_HESTIA_API_PASSWORD` یا `WU_HESTIA_API_HASH` (کم تر یو)
  - یو طریقې ته انتخاب وکړئ: پاسور یا API hash/token.
- `WU_HESTIA_ACCOUNT` (لازم دی)
  - د ویب ډومین (Web Domain) مالکیت (Account) په Hestia کې؛ دا د CLI لپاره لومړی argument دی.
- `WU_HESTIA_WEB_DOMAIN` (لازم دی)
  - هغه اوسني Hestia Web Domain چې ستاسو WordPress ته خدمت کوي (Aliases به دلته اضافه شي).
- `WU_HESTIA_RESTART` (اختیاری؛ پیشټې `yes` ده)
  - آیا باید د Alias بدلولو وروسته سرویسونه بیا شروع کړي/Reload کړي.

تاسو کولی شئ دا constants په `wp-config.php` کې ورسوي، یا دوی manuallly تعریف کړئ.

## تنظیم کی تایید (Verifying Setup)
- په wizard کې "Testing" مرحله کې، پلاګین د API له لارې `v-list-web-domains <WU_HESTIA_ACCOUNT> json` رافره کوي. یو بریالي ځواب اتصال او احرازويەتی (authentication) کی تاییدوي.
- وروسته کله چې یو domain map کړئ، په Hestia کې وګورئ: Web > بنياداری domain > Aliases. تاسو باید نوی alias وینئ چې اضافه شوی دی.

## یادونه او نصیحتونه (Notes & Tips)
- ډاغه کوئ چې `WU_HESTIA_WEB_DOMAIN` پیل دی او د `WU_HESTIA_ACCOUNT` مالکیت لري.
- که SSL لازم وي، سرتیفیکات په Hestia کې مدیریت کړئ. دا ادغام اوسمهالنې فقط aliases ته کار کوي.
- پلاګین له ستاسو Domain Mapping "www subdomain" تنظیمي سره سم، `www.<domain>` هم اضافه یا حذف کولی شي.

## مثال د API کال (cURL)
لاندې یو مفهومي مثال دی (د خپل محیط سره یې بدل کړئ). د دقیق پارامټرو لپاره رسمي سند وګورئ.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

دې کار د حذف لپاره، `cmd=v-delete-web-domain-alias` او هم دوه لوړني (args) प्रयोग کړئ.

## مشکلو حلول (Troubleshooting)
- له API څخه HTTP خطا: وګورئ چې `WU_HESTIA_API_URL` پاتې ته رسيئ او په کې `/api` شامل وي.
- احراز性の خطا (Auth errors): ډاډ ترلاسه کړئ چې `WU_HESTIA_API_USER` او یا `WU_HESTIA_API_PASSWORD` او `WU_HESTIA_API_HASH` هم درست دي.
- په لاگونو کې "Missing account/base domain" پیغام: ډاډ ترلاسه کړئ چې `WU_HESTIA_ACCOUNT` او `WU_HESTIA_WEB_DOMAIN` په Hestia کې تنظیم شوي او صحيح دي.

## کورنی لینکونه (References)
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
