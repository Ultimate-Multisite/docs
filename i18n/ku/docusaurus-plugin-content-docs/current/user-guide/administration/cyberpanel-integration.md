---
title: یکردنەوەی CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integration-ی CyberPanel

این راهنما توضیح می‌دهد که چطور تنظیمات یکپارچه‌سازی Ultimate Multisite با CyberPanel را انجام دهید تا دامنه‌های نگاشت شده در شبکه شما به صورت خودکار (و با اختیاری امکان ارائه SSL خودکار از طریق Let's Encrypt) به عنوان هاست‌های مجازی در CyberPanel اضافه و حذف شوند.

## این کار چه کاری انجام می‌دهد؟

- وقتی یک دامنه در Ultimate Multisite نگاشت می‌شود، این یکپارچه‌سازی از APIِ CyberPanel استفاده می‌کند تا برای آن دامنه یک هاست مجازی ایجاد کند.
- وقتی نگاشت یک دامنه حذف می‌شود، این یکپارچه‌سازی از API استفاده می‌کند تا هاست مجازی مربوطه را پاک کند.
- وقتی SSL خودکار فعال باشد، این یکپارچه‌سازی بلافاصله پس از ایجاد هاست مجازی، صدور گواهی Let's Encrypt را آغاز می‌کند.
- بسته به تنظیمات "Auto-create www subdomain" در تنظیمات نگاشت دامنه شما، آدرس `www.` را اختیاری اضافه یا حذف می‌کند.

## پیش‌نیازها

- یک نمونه فعال CyberPanel (توصیه می‌شود نسخه v2.3 یا بالاتر) که از طریق سرور وردپرس شما قابل دسترسی باشد.
- یک وب‌سایت موجود در CyberPanel که قبلاً ریشه شبکه وردپرس شما را میزبانی می‌کند. این یکپارچه‌سازی هاست‌های مجازی جدیدی را به این سرور متصل می‌کند.
- دسترسی به APIِ CyberPanel فعال باشد. احراز هویت با نام کاربری و رمز عبور مدیر CyberPanel شما انجام می‌شود.
- رکورد‌های DNS دامنه‌های نگاشت شده شما باید قبل از اینکه SSL خودکار بتواند یک گواهی معتبر صادر کند، قبلاً به آدرس IP سرور شما اشاره کنند.

## الزامات

کانسست‌های زیر باید در فایل `wp-config.php` شما تعریف شوند:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

به صورت اختیاری، می‌توانید موارد زیر را نیز تعریف کنید:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — SSL-i-d (Let's Encrypt) بعد ساخت دامنه فعال کن
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // بۆ تماس لەسەر گوازارنی سێرتی SSL

## ڕێنماییەکانی راکردنەوە (Setup Instructions)

### ١. چالاککردنەوەی CyberPanel API

١. وەک بەڕێوەبەری سیستەم (administrator) چوونی بکە ناو داشبۆردی CyberPanel.
٢. بگواشبە **Security** > **SSL** و دڵنیابە کە SSL لەسەر جẹندی CyberPanel خۆی چالاکە (ئەمە پێویستە بۆ پەیوەندییە ئاسایشی API).
٣. CyberPanel API بە شێوەیەکی سەرەکی لە `https://your-server-ip:8090/api/` دەستاییە. پێویستی بە هەنگوونی زیاتری نییە بۆ چالاککردنەوە؛ بۆ بەکارهێنەرانی ئیدارە (admin users) بە شێوەیەکی سەرەکی چالاکە.

### ٢. زیادکردنی Constants بۆ wp-config.php

ئەم constantsە پێش ڕێگەی `/* That's all, stop editing! */` لە فایلەکەت `wp-config.php` دا زیاد بکە:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

بۆ چالاککردنەوەی Auto-SSL (پێشنیار دەکرێت):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### ٣. چالاککردنەوەی یەکگرتوویی (Integration)

١. لە بەڕێوەبەرە تۆڕی WordPress-ەکەتدا، بگواشبە **Ultimate Multisite** > **Settings**.
٢. بگواشبە بۆ تابلۆی **Domain Mapping**.
٣. خەریک بکە تا دەگەیتە **Host Integrations**.
٤. یەکگرتوویی CyberPanel (CyberPanel) چالاک بکە.
٥. **Save Changes** (گۆڕانکارییەکان بچوێنە).

### ٤. پشکنینی پەیوەندی (Verify Connectivity)

بۆ پشکنینی پەیوەندی، لە ناو ڕێنمای دانانی تنظیماتدا، بەکاربهێنە تستی پەیوەندیی ناوخۆیی (built-in connection test):
```

١. به **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** برە.
٢. **Test Connection** بگرە.
٣. پەیامی سەرکەوتنییەکە دەگەیەنێت کە پلۆگینی دەتوانرێت بگاتە CyberPanel API و بە شێوەیەکی دروست پاراست بکرێت (authenticate).

## چۆن کار دەکات؟

### Domain Mapping (پێ<unused2123>دنەوەی ناو domain)

کاتێک یەک domain لە Ultimate Multisite دا پێچوونەوە دەکرێت:

١. پلۆگینی داواکاری `POST` بۆ `/api/createWebsite` لەسەر میزبای CyberPanel یەکەت دەنێرێت.
٢. CyberPanel هاوڵێکی virtual host نوێ بۆ ئەو domainە بەپێی پەکئە (package) کە دیاریکراوە دروست دەکات.
٣. روت دۆکیومێنتەکە (document root) ڕێکدەخات بۆ ئەوەی ئاماژەی بە ڕێڕەوی سەرەکی تۆی WordPress بدات.
٤. کاتێک پێچوونەوەی domain لەناو دەچێت، پلۆگینی داواکاری `/api/deleteWebsite` دەکات بۆ پاککردنەوەی virtual hostەکە.

### Auto-SSL (سڵ ئۆتۆماتیک)

کاتێک `WU_CYBERPANEL_AUTO_SSL` بە `true` دەبێت:

١. دوای دروستکردنی virtual host، پلۆگینی داواکاری `/api/issueSSL` بۆ domainەکە دەکات.
٢. CyberPanel داواکاریی گواهی Let's Encrypt لە ڕێگەی ACME HTTP-01 challenge دەکاتەوە.
٣. CyberPanel گواهیەکە پێش کاتی کۆتایی بە شێوەیەکی ئۆتۆماتیک نوێدەکاتەوە پاش کاتی کۆتایی.

> **گرنگە:** پێویستە DNS بە تەواوی بۆ IP addressی server یەکەت پراپەگیت (propagated) بێت پێش ئەوەی Let's Encrypt بتوانێت domainەکە پشتڕاست بکات. ئەگەر دروستکردنی SSL دەستبەردە پێچەوانێ لە کاتی سەرەتای پێچوونەوە شکست بخات، چاوەڕێی پراپەگیتکردنی DNS بکە و SSL-ی نوێ لە داشبۆرد CyberPanel لەسەر **SSL** > **Manage SSL** دا دەستپێبدە.

### www Subdomain (Subdomain ی www)

ئەگەر **Auto-create www subdomain** لە ڕێکخراوەکانی Domain Mapping دابنێت، پلۆگینی هەمان کات alias virtual host بۆ `www.<domain>` دروست دەکات و کاتێک Auto-SSL چالاکە، گواهیێک دەدات کە هەردوو جۆرەکانی apex (ڕێڕەوی سەرەکی) و www لەخۆ دەگرێت.

### Email Forwarders (پەڕێنەوەی ئیمایل)

کاتێک افزونه [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) فعال بێت، CyberPanel دەتوانێت بۆ کڕیارەکان ئیمێل فۆردەر (email forwarders) هم پێشکەش بکات. فۆردەرەکان پەیامەکان لە یەک ناوی دامەنی (domain address) بۆ ناوێکی دیکە ڕێدەدەن بەبێ دروستکردنی مۆبایلی تەواو، کە ئەمەش بۆ ئالیزەکان وەک `info@customer-domain.test` یان `support@customer-domain.test` کاراییە.

پێش ئەوەی فۆردەر بۆ کڕیارەکان چالاک بکەیت:

1. دڵنیابە کە ئەو دیاریکراوانەی CyberPanel لە سەرەوە ڕێکخراون و تاقیکردنەوەی پەیوەندی (connection test) سەرکەوتوو بێت.
2. مۆدێل پڕۆڤایدر ئیمێلی CyberPanel لە تنظیمات افزاون ئیمێلدا چالاک بکەیت.
3. دڵنیابە کە ناو دامەنی کڕیارەکە پێش دروستکردنی فۆردەر لە CyberPanel هەیە.
4. یەک فۆردەر تاقیکردنەوە دروست بکە و پەیامێک لە ڕێگەی ئەو فۆردەرەوە بنێرە پێش ئەوەی تایبەتمەندییەکە لە پلانی پڕۆدۆکشن (production plans) دا پێشکەش بکەیت.

ئەگەر دروستکردنی فۆردەر شکستپێکرد، یەکەم لۆگەکانی چالاکی Ultimate Multisite بەدوای چاکبینی بگەڕێ، پاشان لە CyberPanel دڵنیا بە کە ناوی سەرچاوەی (source domain) هەیە و ئەوەی بەکارهێنەری API ئەو ڕێکارە بۆ بەڕێوەبردنی ئیمێل دەستپێکردووە.

## ئاماژەکانی گرنگ

| Constant | پێویستە | پێشنیارکراو | وەسف |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | بێت | — | لینکێکی تەواوی بۆ نمونهی CyberPanel یەکەت لەوانەیە پۆرتێک هەبێت، وەک `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | بێت | — | ناوی بەڕێوەبەری (admin) CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | بێت | — | وشەی بایۆس (password)ی بەڕێوەبەری CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | بێت | `Default` | پڕۆژەی میزبینی (hosting package)ی CyberPanel کە بۆ میزبانە جۆرەکانی نوێ دیاری دەکرێت |
| `WU_CYBERPANEL_AUTO_SSL` | ناهێت | `true` | دوای دروستکردنی ناو دامەنی SSL ی Let's Encrypt دەدات |
| `WU_CYBERPANEL_PHP_VERSION` | ناهێت | `PHP 8.2` | پێکهاتەی PHP بۆ میزبانە جۆرەکانی نوێ (دەبێت لەگەڵ ئەو وەرگرتووەی PHP ی CyberPanel یەک بێت) |
| `WU_CYBERPANEL_EMAIL` | ناهێت | — | ئیمێلی پەیوەندیدار بۆ تۆمارکردنی گوازارنی SSL |

API یەکێی CyberPanel بەپێی توکنەکانی سێشن (session-based token authentication) کار دکارد. ئەم یەکێکە ئۆتۆماتیک دەستوەردانی وەرگرتنی توکن لەسەر هەر پێویستی API callەکەدا ئەنجام دەدات.
حساب ADMINISTRATORی CyberPanel دەبێت ڕێگەپێدان بۆ دروستکردن و لێکردنەوەی ئەو وێبسایتانەی هەبێت.
CyberPanel بە شێوەیەکی پیش‌تەوا، لە پۆرت `8090` کار دەکات. ئەگەر خزمەتگاریی تۆ فایروال (firewall) بەکاربهێنێت، دڵنیابConvertTo کە ئەم پۆرتان بۆ پراپرێسەر وێبسایتی WordPress دەستیاوە.
ئەم یەکێکە بەڕێوەبردنی تۆمارنامەی DNS ناکات. پێویستە ناو DNSی دامێنی (domain) لەسەر پڕۆتۆکۆڵی IPی خزمەتگاریی تۆ ڕێ<unused2123>ێت پێش ئەوەی ناوەکە لە Ultimate Multisite دا مَپ (map) بکەیت.
ئەگەر OpenLiteSpeed (OLS) بەکاربهێنیت، دوای گۆڕینی virtual host، دەبێت بە شێوەیەکی ئاسایی Restart بێت و خۆی دەکاتەوە. پێویستە هیچ کارێکی دەستی تۆ ناهێت.

## چارەسەرکردنی کێشەکان (Troubleshooting)

### پەیوەندی API ڕەتکراوەتەوە (API Connection Refused)

- چاک بکە کە پۆرت `8090` لە فایروالی خزمەتگاریی تۆدا کراوە.
- دڵنیابConvertTo کە بەشی `WU_CYBERPANEL_HOST` پێکهاتەی ڕێگام (protocol) و پۆرتەکەش (مثلاً `https://`) دروست کردووە.
- چاک بکە کە گوازارکردنی SSLی CyberPanel لەسەر حالەتدا ساردییە؛ توکنەکانی خودی (self-signed certificates) دەکرێت هۆی شکست لە تێ verificationی TLS ببن. تەنها لە ژینگەی تۆڕی تایبەت و متمانەدار، `WU_CYBERPANEL_VERIFY_SSL` بۆ `false` دیاری بکە.

### هەڵەکانی توثیکات (Authentication Errors)

- دڵنیابConvertTo کە ناوی کاربەری (`WU_CYBERPANEL_USERNAME`) و وشەی سەرۆکەکەت (`WU_CYBERPANEL_PASSWORD`) دروستنە بە ڕاستی، بەو شێوەیە دەتوانیت ڕاستی یەکێک لە CyberPanel دا Login بکەیت.
- دوای هەوڵدانێکی مەرجدار بۆ Login شکستخۆیی، CyberPanel حسابەکان دەبڕێتەوە. ئەگەر ئەم کاران ڕووبدات، لە CyberPanelدا بەشی **Security** > **Brute Force Monitor** چاک بکە.

### دامێنی دروست نەکراوە (Domain Not Created)

- بۆ هەڵەکانی API، لە تۆمارنامەی چالاکی Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) چاک بکە.
- دڵنیابConvertTo کە پەکئێجی (package) دیارکراو لە `WU_CYBERPANEL_PACKAGE` لە CyberPanelدا هەیە (**Packages** > **List Packages**).
- دڵنیابConvertTo کە دامێنی پێش نەکراوەتەوە و بە وێبسایت تۆمار نەکراوە لە CyberPanelدا — دروستکردنی وێبسایتی دووبارە دەبێتە هۆی هەڵە.

### گوازارنی SSL Certificate نەدات (SSL Certificate Not Issued)

DNS-ی تەواو بوونی تێبینی بکە: `dig +short your-domain.com` دەبێت IP ی خوادیا خۆت بگەڕێتەوە.
Let's Encrypt سنووردارکردنی ڕێژەی (rate limits) جێبەجێ دەکات. ئەگەر نیشتەجێیەک لە ماوەیەکی کورتدا چەند گواهرێکی تایبەت بۆ ناوچەیەکی دیاریکراو دروست کردبێت، پێویستە چاوەڕێ بکە پێش ئەوەی دووبارە هەوڵ بدەیت.
تێبینیەکانی سەر SSL لە CyberPanel ی **Logs** > **Error Logs** دا بگرە بۆ وردەکاریی شکستەکانی دروستکردنی گواهرەکە.
وەک چارەسەرێکی دووەم، دەتوانیت SSL بە شێوەیەکی دەستکرد لە CyberPanel دروست بکەیت: **SSL** > **Manage SSL** > ناوچەکە هەڵبژێرە > **Issue SSL**.

## سەرچاوەکان

- dokuments.cyberpanel.net/docs/category/api: دۆکومێنتەکانی APIی CyberPanel
- docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL: بەڕێوەبردنی SSL لە CyberPanel
- letsencrypt.org/docs/rate-limits/: سنووردارکردنی ڕێژەی Let's Encrypt
