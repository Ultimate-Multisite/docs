---
title: یەکگرتووکردنی Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# ادغام با Cloudflare (Cloudflare Integration)

## مروری کلی {#overview}
Cloudflare یه شبکه تحویل محتوا (CDN) و ارائه‌دهنده امنیت پیشروه است که به محافظت از وب‌سایت‌ها و سرعت بخشیدن به کارشون کمک می‌کنه. این ادغام امکان مدیریت خودکار دامنه بین Ultimate Multisite و Cloudflare رو فراهم می‌کنه، مخصوصاً برای نصب‌های چنددامنه زیردامنه‌ای (subdomain multisite).

## ویژگی‌ها {#features}
- ایجاد خودکار زیردامنه در Cloudflare
- پشتیبانی از زیردامنه پروکسی شده (Proxied subdomain support)
- مدیریت رکوردها در DNS
- نمایش بهتر رکوردهای DNS در پنل مدیریت Ultimate Multisite

## پیش‌نیازها {#requirements}
کنسست‌های زیر باید توی فایل `wp-config.php` شما تعریف بشن:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## دستورالعمل‌های راه‌اندازی {#setup-instructions}

### ۱. گرفتن کلید API Cloudflare خود {#1-get-your-cloudflare-api-key}

۱. وارد داشبورد Cloudflare خود بشید.
۲. به بخش "My Profile" (روی ایمیل خود در گوشه بالا سمت راست کلیک کنید) بروید.
۳. از منو، گزینه "API Tokens" رو انتخاب کنید.
۴. یک توکن API جدید با این مجوزها بسازید:
   - Zone.Zone: Read (خواندن)
   - Zone.DNS: Edit (ویرایش)
۵. توکن API خود را کپی کنید.

### ۲. گرفتن شناسه منطقه (Zone ID) خود {#2-get-your-zone-id}

۱. توی داشبورد Cloudflare، دامنه‌ای که می‌خواهید ازش استفاده کنید رو انتخاب کنید.
۲. شناسه منطقه (Zone ID) در تب "Overview"، در نوار کناری سمت راست زیر بخش "API" قابل مشاهده است.
۳. شناسه منطقه را کپی کنید.

### ۳. اضافه کردن ثابت‌ها به wp-config.php {#3-add-constants-to-wp-configphp}

کنسست‌های زیر رو توی فایل `wp-config.php` خود اضافه کنید:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### ۴. فعال کردن ادغام (Integration) {#4-enable-the-integration}

۱. توی پنل مدیریت وردپرس، به Ultimate Multisite > Settings بروید.
۲. به تب "Domain Mapping" (نقشه‌برداری دامنه) بروید.
۳. تا پایین اسکرول کنید و به بخش "Host Integrations" بروید.
۴. ادغام Cloudflare را فعال کنید.
۵. روی "Save Changes" کلیک کنید.

## نحوه کارکرد {#how-it-works}

### مدیریت زیردامنه (Subdomain Management) {#subdomain-management}

وقتی یک سایت جدید در نصب چنددامنه زیردامنه‌ای ایجاد می‌شود:

١. ئەم integrationەکە Cloudflare-ی API بۆ زیادکردنی رکۆردێکی CNAME بۆ دامنەی زیرەکی (subdomain) دا داواکاری دەدات.
٢. دامنەکە بە شێوەیەکی دیکە بەپێی پێوەرەکان ڕێگەی پڕۆکس (proxy) کراوە لەلایەن Cloudflareەوە (ئەمە دەکرێت بە فیلترەکان بگۆڕدرێت).
٣. کاتێک سایتێک دیار دەکرێت و لێ دەدرێت، ئەم integrationەکە دامنەکە لە Cloudflare دەکاتەوە.

### نیشاندانی رکۆردی DNS {#dns-record-display}

ئەم integrationە نیشانکاری (display)ی رکۆردی DNS لە بەڕێوەبردنی Ultimate Multisite زیاتر دەکات بە:

١. ڕێکخستنی رکۆردی DNS ڕاستەوخۆ لە Cloudflare وەردانی بکات
٢. نیشاندانی ئەوەی رکۆردە پڕۆکس کراوە یان نا (not proxied)
٣. نیشاندانی زانیاری زیاتر دەربارەی رکۆردی DNS

## ناوی میزبانە تایبەتەکانی Cloudflare (Cloudflare Custom Hostnames) {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (کە پێشتر بە "Cloudflare for SaaS" ناسراوە) کارامەیەک لە Cloudflare-دا هەیە کە ڕێگە دەدات کڕیارەکانت بە دۆمەینەکانی خۆیان و SSL لەسەر تۆڕی Multisite یەکەت بەکاربهێنن. ئەمە ڕێگای پێشنیارکراوە بۆ دامەزراندنی Multisite کە پەیوەستن بە دۆمەین (domain-mapped) و کاردەکات لەگەڵ Cloudflare، چونکە Cloudflare بە شێوەیەکی ئۆتۆماتیک پڕۆسەی دەست پێکردنی و نوێکردنەوەی گوازموونی SSL بۆ هەر دۆمەینی تایبەتێک بەڕێوە دەبات.

### جیاوازی لەگەڵ integrationی ستاندارد ی Cloudflare Custom Hostnames {#how-it-differs-from-the-standard-cloudflare-integration}

| | Integrationی ستاندارد | Cloudflare Custom Hostnames |
|---|---|---|
| **بابەتی کار** | ڕاستەوخۆ دروستکردنی رکۆردی DNS بۆ subdomainەکان | توانای بەکارهێنانی دۆمەینەکانی تایبەت (mapped) لەگەڵ SSL کە توسط Cloudflare دەبەڕێوە دەبات |
| **بۆچی باشترە** | Multisite-ی پێکدۆشەوە (Subdomain multisite) | Multisite-ی پەیوەست بە دۆمەین (Domain-mapped multisite) |
| **SSL** | بە شێوەیەکی جیاواز دەدرێت ڕێکخستن | ئۆتۆماتیک لەلایەن Cloudflareەوە بەڕێوەدەچێت |

### ڕێکخستنی Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

١. لە داش보ارەکەدا بەکارهێنانی Cloudflare، ناوچەی (zone) بۆ دۆمەینی سەرەکییەکەت بکەرەوە.
٢. بگواشبە **SSL/TLS > Custom Hostnames**.
٣. یەک سەرچاوەی پشتیوانی (fallback origin) زیاد بکە کە ئاماژەیە بۆ IP یان ناوی سروری تۆ.
٤. بۆ هەر دۆمەینی کڕیارێک کە لە Ultimate Multisite دا مێپکراوە، شتێکی Custom Hostname لە Cloudflare زیاد بکە. دەتوانی ئەم هەنگاوە بە شێوەیەکی ئۆتۆماتیک بەکاربهێنیت بە بەکارهێنانی Cloudflare API.
٥. Cloudflare بە شێوەیەکی خۆکار بۆ هەر ناوی host-ی تایبەت (custom hostname) کە لەلایەن DNSی کڕیارەوە ڕێکخراوە، گواستن و نوێکردنەوەی پڕۆتۆکۆڵی TLS ئەنجام دەدات.

بۆ سەرچاوەی تەواو بۆ API، سەردانی [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) بکە.

:::note نوێکردنەوەی دەستەواژە
لە وەرگرتنی Ultimate Multisite v2.6.1ەوە، ئەم تایبەتمەندییە لە هەموو ڕێکخراوەکانی پڕۆگرامەکەدا بە **Cloudflare Custom Hostnames** ناودەبێت. پێشتر، ئەو وەرگرتنەی "Cloudflare for SaaS" بوو کە ناوی خزمەتگوزاریی Cloudflare بوو.
:::

## تێبینییە گرنگان {#important-notes}

لە نوێکردنەوەکانی نیشتمانەی Cloudflareدا، ئێستا بەکارھێنانی wildcard proxy بۆ هەموو کڕیارەکان بێت. ئەمە واتای ئەوەیە کە یەکگرتوویی DNSی ستاندارد لەگەڵ subdomain multisite-ەکان زیاتر گرنگ نییە لە پێشتر، چونکە دەتوانی ببیت بە سادەیی تۆماری DNSێکی wildcard لە Cloudflare دروست بکەیت.

## چارەسەرکردنی کێشەکان (Troubleshooting) {#troubleshooting}

### کێشەکانی پەیوەندی API {#api-connection-issues}
- دڵنیا بەوەی کە tokenی API یەکەت دروستە و ڕێگەپێردنی پێویست دەبێت.
- چاک بکە کە Zone ID ی تۆ دروستە.
- دڵنیا بەوەی کە هەژمارەکەی Cloudflare ڕێگەپێردنی پێویست هەیە.

### Subdomain زیاد نەکراوە {#subdomain-not-added}
- لە logs (ڕێکخراوەکانی) Ultimate Multisite بۆ هەر پەیامێکی هەڵە چاک بکە.
- دڵنیا بەوەی کە subdomainەکە لە Cloudflare دا پێشتر زیاد نییە.
- دڵنیا بەوەی کە پلانی Cloudflare ی تۆ پشتگیریی ژمارەی تۆماری DNS کە دروست دەکەیت دەدات.

### کێشەکانی پرۆکسی (Proxying Issues) {#proxying-issues}
- ئەگەر ناتوانیت subdomainەکان بە پرۆکسی دەربکەیت، دەتوانیت فیلتەرەکەی `wu_cloudflare_should_proxy` بەکاری بهێنیت.
- هەندێک تایبەتمەندی لە کاتی پرۆکسیکردندا بە دروستی کار ناکەن (بۆ نموونە، چەند کارەکانی ئەدمنتی WordPress).
- بۆ ئەوەی دەتوانیت لایەنی پاشەکەوت (cache) بۆ صفحات ئەدمنتی بەکاربهێنیت، بیر لە Page Rulesی Cloudflare بکەرەوە.
