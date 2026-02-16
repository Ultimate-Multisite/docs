---
title: ادغام پنل کنترل Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# یکپارچه‌سازی با کنترل پنل Hestia

این راهنما نحوه پیکربندی یکپارچه‌سازی Ultimate Multisite با Hestia را توضیح می‌دهد تا دامنه‌های نگاشت‌شده در شبکه شما به‌صورت خودکار به عنوان Web Domain Alias در Hestia اضافه (و حذف) شوند.

- مرجع CLI مربوط به Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- مستندات رسمی REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## چه کاری انجام می‌دهد
- وقتی دامنه‌ای در Ultimate Multisite نگاشت می‌شود، این یکپارچه‌سازی از طریق API مربوط به Hestia دستور زیر را اجرا می‌کند:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- وقتی نگاشت دامنه حذف می‌شود، دستور زیر اجرا می‌شود:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- بسته به تنظیم «ایجاد خودکار زیردامنه www» در بخش Domain Mapping، ممکن است alias مربوط به `www.` نیز اضافه یا حذف شود.

## پیش‌نیازها
- یک Web Domain موجود در Hestia که از قبل به نصب WordPress شما اشاره دارد. این یکپارچه‌سازی، aliasها را به این دامنه پایه متصل می‌کند.
- دسترسی به API مربوط به Hestia فعال باشد. می‌توانید با استفاده از رمز عبور یا API hash/token احراز هویت کنید.

برای فعال‌سازی دسترسی API و جزئیات احراز هویت، مستندات REST API مربوط به Hestia را ببینید:
https://hestiacp.com/docs/server-administration/rest-api.html

## پیکربندی (Wizard → Integrations → Hestia)
مقادیر زیر را وارد کنید:

- `WU_HESTIA_API_URL` (الزامی)
  - آدرس پایه API، معمولاً `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (الزامی)
  - کاربر Hestia که برای دستورات API استفاده می‌شود (معمولاً `admin`).
- `WU_HESTIA_API_PASSWORD` یا `WU_HESTIA_API_HASH` (حداقل یکی)
  - یک روش احراز هویت انتخاب کنید: رمز عبور یا API hash/token.
- `WU_HESTIA_ACCOUNT` (الزامی)
  - حساب (مالک) Web Domain در Hestia؛ این اولین آرگومان دستور CLI است.
- `WU_HESTIA_WEB_DOMAIN` (الزامی)
  - Web Domain موجود در Hestia که WordPress شما را سرویس می‌دهد (aliasها به این دامنه متصل می‌شوند).
- `WU_HESTIA_RESTART` (اختیاری؛ پیش‌فرض `yes`)
  - آیا پس از تغییرات alias، سرویس‌ها ری‌استارت/بارگذاری مجدد شوند یا خیر.

می‌توانید اجازه دهید wizard این ثابت‌ها را در `wp-config.php` تزریق کند، یا آن‌ها را به صورت دستی تعریف کنید.

## بررسی صحت تنظیمات
- در مرحله «Testing» ویزارد، افزونه از طریق API دستور `v-list-web-domains <WU_HESTIA_ACCOUNT> json` را فراخوانی می‌کند. پاسخ موفق، اتصال و احراز هویت صحیح را تأیید می‌کند.
- پس از نگاشت دامنه، در Hestia بررسی کنید: Web > دامنه پایه > Aliases. باید alias جدید را ببینید.

## نکات و راهنمایی‌ها
- مطمئن شوید `WU_HESTIA_WEB_DOMAIN` از قبل وجود دارد و متعلق به `WU_HESTIA_ACCOUNT` است.
- اگر SSL نیاز دارید، گواهی‌ها را در Hestia مدیریت کنید. این یکپارچه‌سازی در حال حاضر فقط aliasها را مدیریت می‌کند.
- بسته به تنظیم «زیردامنه www» در Domain Mapping، افزونه ممکن است `www.<domain>` را نیز اضافه یا حذف کند.

## نمونه فراخوانی API (cURL)
در زیر یک مثال مفهومی آمده است (بر اساس محیط خود تنظیم کنید). برای پارامترهای دقیق به مستندات رسمی مراجعه کنید.

```
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
```

برای حذف، از `cmd=v-delete-web-domain-alias` با همان آرگومان‌ها استفاده کنید.

## عیب‌یابی
- خطای HTTP از API: بررسی کنید که `WU_HESTIA_API_URL` قابل دسترسی است و شامل `/api` می‌شود.
- خطاهای احراز هویت: `WU_HESTIA_API_USER` و `WU_HESTIA_API_PASSWORD` یا `WU_HESTIA_API_HASH` را تأیید کنید.
- «Missing account/base domain» در لاگ‌ها: مطمئن شوید `WU_HESTIA_ACCOUNT` و `WU_HESTIA_WEB_DOMAIN` تنظیم شده‌اند و در Hestia معتبر هستند.

## منابع
- REST API مربوط به Hestia: https://hestiacp.com/docs/server-administration/rest-api.html
- مرجع CLI مربوط به Hestia (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
