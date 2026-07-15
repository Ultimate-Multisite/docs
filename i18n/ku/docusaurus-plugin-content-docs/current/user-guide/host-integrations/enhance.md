---
title: بۆ باشترکردنی یەکگرتوویی پۆلێپەلی (Control Panel)
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# پترۆلکردنی یەکپۆل کنترۆڵ پانل

## پێشەکی {#overview}
Enhance سیستەمێکی نوێی پانل کنترۆڵی بریتییە کە توانای بەڕێوەبرد و ئۆتۆماتیککردنی هاستکرد (hosting automation) دەدات. ئەم یەکگرتووکارییە ڕێنوێنی دابین دەکات بۆ هەڵسُوێنانی ئۆتۆماتیکی دامەنی (domain syncing) و بەڕێوەبرد گوازارنی سێرتیسڵ (SSL certificate management) لە نێوان Ultimate Multisite و Enhance Control Panel.

**دیسکۆشنیا پەیوەندیدار:** بۆ چاوەڕوانی شێوازی کۆمەڵگایەکە و زانیاری زیاتر، سەردانی [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) بکە.

## تایبەتمەندییەکان {#features}
- هەڵسُوێنانی ئۆتۆماتیکی دامەنی کاتێک دامەنانە لە Ultimate Multisite دابنێیت (map)
- بەڕێوەبرد و پێشکەشکردنی سێرتیسڵی SSL بە شێوازی LetsEncrypt کاتێک DNS ڕێکدەهێنرێت
- پشتگیریکردنی subdomain بۆ تۆڕکانی کارلێککراو لە چاودێرەی subdomain (subdomain mode)
- هەڵماردنی دامەنی کاتێک مۆبایس (mappings) دەدابنێیت
- تاقیکردنەوەی پەیوەندی بۆ دڵنیابوون لە دروستبوونی بەڵگەنامەکانی API

## پێداویستییەکان {#requirements}

### پێداویستیی سیستەم {#system-requirements}
- Enhance Control Panel دامەزراوە و دەربکەوتووە (accessible)
- دامەزراندنی WordPress Multisite لەسەر خاڵێکی Enhance یان پەیوەندی بەو خاڵەوە
- سێرڤری وێب Apache (Enhance ئێستا پشتگیریکردنی Apache دەکات؛ LiteSpeed Enterprise بە نرخێکی کەمتر دەتوانرێت)

### دەستگەیشتنی API {#api-access}
دەبێت دەستگەیشتنی Administrator بۆ Enhance Control Panel هەبێت بۆ دروستکردنی API tokens.

## گرتۆڕکردنی بەڵگەنامەکانی API یەکەت {#getting-your-api-credentials}

### ١. دروستکردنی API Token {#1-create-an-api-token}

١. وەرگرە (Log in) بۆ Enhance Control Panel بە دۆخی Administrator
٢. لە مێنیووی Navigation، سەر **Settings** بڵێژە
٣. بگواشبە **Access Tokens**
٤. **Create Token** بڵێژە
٥. ناوی وردیەک بدات بە tokenەکە (بۆ نموونە: "Ultimate Multisite Integration")
٦. ڕۆڵی **System Administrator** پێ بدات
٧. بۆ ڕێکەوتنی کۆتایی (expiry date):
   - ئەگەر پەتێکی خالی بێی، بۆ ئەوەیە tokenەکە هەرگیز کۆتایی نەبێت
   - یان مارکەی تایمارێکی دیاریکراو بۆ مەبەستی ئاسایشی

٨. **Create** بڵێژە

پاش دروستکردن، **Access Token** و **Organization ID** شما نمایش داده خواهد شد. لطفاً این‌ها را فوراً ذخیره کنید زیرا توکن فقط یک بار نمایش داده می‌شود.

### ۲. Organization ID خود را دریافت کنید {#2-get-your-organization-id}

Organization ID صفحه Access Tokens در یک جعبه اطلاعاتی آبی با برچسب "Org ID: {your_id}" نمایش داده می‌شود.

Organization ID به شکل UUID زیر است: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

شما همچنین می‌توانید Organization ID مشتری را با این روش پیدا کنید:
۱. به صفحه **Customers** بروید
۲. روی **Manage customer** برای مشتری مربوطه کلیک کنید
۳. به URL نگاه کنید - Organization ID حروف الفبایی بعد از `/customers/` است.

### ۳. Server ID خود را دریافت کنید {#3-get-your-server-id}

برای پیدا کردن Server ID خود (که برای عملیات دامنه لازم است):

۱. در Enhance Control Panel، به **Servers** بروید
۲. روی سروری که نصب وردپرس شما روی آن اجرا می‌شود کلیک کنید
۳. Server ID (در قالب UUID) در URL یا جزئیات سرور قابل مشاهده خواهد بود
۴. یا می‌توانید از API برای لیست کردن سرورها استفاده کنید:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID از قالب UUID زیر پیروی می‌کند: `00000000-0000-0000-0000-000000000000`

### ۴. API URL خود را دریافت کنید {#4-get-your-api-url}

API URL شما آدرس Enhance Control Panel با اضافه کردن `/api/` است:

```
https://your-enhance-panel.com/api/
```

**مهم:** مسیر `/api/` الزامی است. اشتباهات رایج شامل موارد زیر است:
- استفاده فقط از دامنه بدون `/api/`
- استفاده از HTTP به جای HTTPS (برای امنیت نیاز به HTTPS دارید)

## پیکربندی {#configuration}

### ثابت‌های مورد نیاز {#required-constants}

ثابت‌های زیر را در فایل `wp-config.php` خود اضافه کنید:

// پاندۆشێنی کۆنترۆڵ پڕۆفایلەکەت بەهێز بکە
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### ڕێبەری راکردنەوە بەهۆی یارمەتیدەرەوە (Integration Wizard) {#setup-via-integration-wizard}

1. لە پۆستە ئیدارەی وۆرسپریت (WordPress admin)، بگواشبە **Ultimate Multisite** > **Settings**.
2. بۆ لایەنی **Integrations** (یەکگرتوو)، دەربکەوێت.
3. **Enhance Control Panel Integration**-ی بدۆزەوە و **Configuration** بکە.
4. ڕێبەریەکە بەم شێوەیە بەرەو تۆ دەبەن:
   - **پێشەکی ١:** پێشیزانی کارکردن و بینینی تایبەتمەندییەکان.
   - **پێشەکی ٢:** بڕیارەکانی API یەکێک لەسەر (Token، API URL، Server ID) بنووسە.
   - **پێشەکی ٣:** پەیوەندییەکە تاقیکردنەوە بکە.
   - **پێشەکی ٤:** پشکنین و چالاککردنەوە.

دەتوانی هەڵبژێریت:
- ڕێبەریەکە بە شێوەیەکی ئۆتۆماتیکی دەستکاری بکات (inject) ئەم constantsانە لە فایلەکەی `wp-config.php` دابنێت.
- پێناسەکان بۆ خۆت کۆپی بکە و بە دەستی زیاد بکەیت.

## ڕێکخستنی زیاتر بۆ وۆرسپریت {#additional-wordpress-configuration}

بەرەو پێشنیاری کۆمەڵگاکان ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265))، دەتوانیت ئەم ڕێکخستنە زیاتر بکەیت:

### ڕێکخستنی .htaccess {#htaccess-configuration}

ئەگەر کێشەیەک لە پۆلێنکردنی ناوچەکانی (domain mapping) هەبوو:
1. فایلەکەی سەرەکی Enhance `.htaccess` دەبڕیت.
2. بە فایلەکەی ستاندارد یەکگرتووی Multisite دابنێتەوە.

### constantsەکانی Cookie {#cookie-constants}

ئەم constantsانە بۆ `wp-config.php` زیاد بکە بۆ ئەوەی کارکردنی Cookie لە ناوچەکاندا بە شێوەیەکی دروست بێت:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## چۆن کار دەکات؟ {#how-it-works}

### کاتێک ناوچێک پۆلێن دەکرێت (When a Domain is Mapped) {#when-a-domain-is-mapped}

۱. یوزر یه دامنه سفارشی رو توی Ultimate Multisite نگاشت می‌کنه (یا یک سایت جدید در حالت زیردامنه ساخته میشه)
۲. این ادغام (integration) یه درخواست POST به APIِ Enhance می‌فرسته: `/servers/{server_id}/domains`
۳. Enhance اون دامنه رو به تنظیمات سرور شما اضافه می‌کنه
۴. وقتی DNS به سرور شما متصل میشه، Enhance به صورت خودکار یک گواهی SSL از طریق LetsEncrypt فراهم می‌کنه
۵. دامنه با HTTPS فعال میشه

### وقتی دامنه‌ای حذف می‌شود {#when-a-domain-is-removed}

۱. یک نگاشت دامنه در Ultimate Multisite پاک میشه
۲. این ادغام (integration) از Enhance پرس‌وجو می‌کنه تا شناسه (ID) اون دامنه رو پیدا کنه
۳. یک درخواست DELETE به آدرس زیر ارسال میشه: `/servers/{server_id}/domains/{domain_id}`
۴. Enhance اون دامنه رو از تنظیمات سرور شما حذف می‌کنه

### بررسی DNS و SSL {#dns-and-ssl-checking}

Ultimate Multisite شامل چک کردن داخلی برای DNS و SSL هست:
- شما می‌توانید بازه زمانی چک کردن رو در **Domain Mapping Settings** تنظیم کنید (پیش‌فرض: ۳۰۰ ثانیه/۵ دقیقه)
- سیستم قبل از اینکه یک دامنه رو فعال کنه، انتشار DNS رو بررسی می‌کنه
- اعتبار گواهی SSL به صورت خودکار چک میشه
- Enhance مدیریت فراهم کردن SSL رو به صورت خودکار انجام میده، بنابراین نیاز به تنظیم دستی SSL نیست

## تأیید تنظیمات {#verifying-setup}

### تست اتصال {#test-the-connection}

۱. در Wizard ادغام (Integration Wizard)، از مرحله **Test Connection** استفاده کنید
۲. پلاگین سعی می‌کنه دامنه‌های سرور شما رو لیست کنه
۳. یک پیام موفقیت تأیید می‌کنه:
   - اعتبارنامه‌های API درست هستند
   - آدرس API قابل دسترسی است
   - شناسه سرور معتبر است
   - مجوزها به درستی تنظیم شده‌اند

### بعد از نگاشت یک دامنه {#after-mapping-a-domain}

۱. یک دامنه تست رو در Ultimate Multisite نگاشت کنید
۲. لاگ‌های Ultimate Multisite رو چک کنید (**Ultimate Multisite** > **Logs** > **integration-enhance**)
۳. توی پنل کنترل Enhance تأیید کنید که دامنه اضافه شده:
   - به **Servers** > **Your Server** > **Domains** بروید
   - دامنه جدید باید در لیست ظاهر بشه
۴. وقتی DNS منتشر شد، تأیید کنید که SSL به صورت خودکار فراهم شده است

## گەڕانەوەی مشکلا (Troubleshooting) {#troubleshooting}

### پشکی پەیوەندی بە API (API Connection Issues) {#api-connection-issues}

**هەڵەی: "Failed to connect to Enhance API" (نەتوانراوە پەیوەبندی بە Enhance API)**
- دڵنیابیت کە `WU_ENHANCE_API_URL` لە کۆتاییەکەی `/api/` بێت.
- دڵنیابیت کە لە جۆری HTTPS بەکارهێنیت، نەک HTTP.
- چاک بکە ئایا پینێلەکە (Enhance panel) دەستپێکراوە لەسەر خەریکی وۆردپرێسەکەت.
- چاک بکە ئایا هیچ ڕێگەی فایروالێک پەیوەندییەکە بەهاتە ڕوو دەکاتەوە.

**هەڵەی: "Enhance API Token not found" (تۆکنووی Enhance API نەدۆپرا)**
- دڵنیابیت کە `WU_ENHANCE_API_TOKEN` لە `wp-config.php` دابنێت.
- چاک بکە ئایا تۆکنەکە لە Enhance پاک کراو یان کۆتایی هاتوە.
- چاک بکە بۆ هەڵەی تایپی (typo) لە بە러ی ئەو تۆکنەدا.

**هەڵەی: "Server ID is not configured" (IDی خەریکی دیار نییە)**
- دڵنیابیت کە `WU_ENHANCE_SERVER_ID` لە `wp-config.php` دابنێت.
- دڵنیابیت کە Server IDەکە فۆڕماتی UUIDی دروستە.
- پشتڕاست بکەرەوە ئایا ئەو خەریکە لە پینێل Enhance دا هەیە.

### ناونیشان (Domain) نەکراوەتەوە {#domain-not-added}

**دۆسیەی لاگەکان چاک بکە:**
1. بگە بە **Ultimate Multisite** > **Logs**.
2. بەfilterی **integration-enhance** فیلتر بکە.
3. لێکۆڵین بۆ ئەو پەیامانەی کە ئاماژەن بۆ کێشەکە.

**هۆکارە باوەکان:**
- فۆڕماتی ناونیشانی نادروست بێت.
- ناونیشان لە Enhance دا پێشتر هەبێت.
- ڕێگەپێدانی API کەم بێت (دڵنیابیت کە تۆکنەکە ڕۆڵی System Administratorی هەیە).
- Server IDەکە لەگەڵ خەریکی ڕاستەقینەی Enhance یەک نەبێت.

### کێشەکانی گواستنەوەی SSL (SSL Certificate Issues) {#ssl-certificate-issues}

**SSL نەکراوەتەوە:**
- دڵنیابیت کە DNS بە ئای پڕۆسێسەرەکەت دەڕوات.
- چاک بکە ئایا ناونیشانەکە بە دروستی ڕێکدەخات: `nslookup yourdomain.com`.
- Enhance پێویستی هەیە DNS لە پێش ئەوەی SSL ی گواستنەوەی بێت (provision) بتوانێت.
- گواستنەوەی SSL بە شێوەیەکی ئاسایی ٥ تا ١٠ خولەک دوای پڕۆسێسی DNS دەبێت.
- لۆگەکانی Enhance Control Panel بۆ هەڵەی تایبەت بە SSL چاک بکە.

**دۆسیەی manually (بە دەستی) SSL لە Enhance:**
1. بگە بە **Servers** > **Your Server** > **Domains**.
2. ناونیشانەکەت بدۆزەوە و دۆخی SSLیەکەی چاک بکە.
3. ئەگەر پێویست بوو، دەتوانیت گواستنەوەی SSL بە شێوەیەکی دەستی دەستپێبدەیت.

### ماوەی چاککردنی DNS (DNS Check Interval) {#dns-check-interval}

ئەگەر دامێنی یان سێلسڵ (SSL certificates) زۆر کات دەبێت بۆ چالاککردنەوە:
1. بگوا به **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. **DNS Check Interval** تنظیمەکە بدۆزەوە
3. لە 300 چرکەی پیش‌دەکەیت بۆ بە شێوەیەکی کەمتر (کەمترین: 10 چرکە) بگۆڕە
4. **تێبینی:** پاشکەوتنی کورتتر واتای چاککردنەوەی زیاترە، بەڵام بارکردنی خەریکی سروری زۆر دەبێت

### هەڵەکانی ناساندنی تایبەتمەندی (Authentication Errors) {#authentication-errors}

**هەڵەکانی HTTP 401/403:**
- توکن API یەکێتیت لە Enhance دابنێرییەکی نوێ بکە (Regenerate your API token in Enhance)
- بڕیار بدات کە توکنەکە ڕۆڵی **System Administrator** هەیە
- چاک بکە کە توکنەکە نەکراوە
- دڵنیابیت کە لە کارۆینێکی ڕاستدا بەکاردەهێنیت (لەبەر ئەوەی زۆربەی کات پێویست نییە لە URL دا)

### شیکردنەوەی تۆمارەکان (Log Analysis) {#log-analysis}

تێبینی ورد و پڕ دەقکردن یەکگرتوو بکە:
```php
// بۆ زیادکردنی wp-config.php بۆ دیباج زیاتر
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

پاشان لەم شوێناندا تۆمارەکان بزانە:
- تۆمارەکانی Ultimate Multisite: **Ultimate Multisite** > **Logs**
- تۆمارە دیباجی WordPress: `wp-content/debug.log`
- تۆمارەکانی پۆستەی Enhance: لە ناو ڕاپۆرت ADMINISTRATOR ی Enhance دەبینراوێت

## ئاماژە بۆ API (API Reference) {#api-reference}

### ناساندنی تایبەتمەندی (Authentication) {#authentication}
هەموو داواکاریی API بە توکن Bearer دابنێرییەکی جیاواز بەکاردێن:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### شوێنەکانی کارکردن کە زیاتر بەکاردێن (Common Endpoints Used) {#common-endpoints-used}

**لیستکردنی Serverەکان:**
```
GET /servers
```

**لیستکردنی دامێنییەکان لەسەر یەک Serverێکدا:**
```
GET /servers/{server_id}/domains
```

**زیادکردنی Domainێکی نوێ:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**ڕێباندنی Domainێک:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### dokumantacijaی تەواوی API (Full API Documentation) {#full-api-documentation}
دۆکومنتacijaی تەواوی API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## باشترین شێوازی کارکردن (Best Practices) {#best-practices}

### ئاسایدارکردن (Security) {#security}
- **هیچکاش API tokens-ên خۆت بە Git'ta نۆمئەنت (commit) مەکارێن.**
- Tokens-ên خۆت لە `wp-config.php` دابنێ کە پێویستە لە Git لە دەرکردنی بێت.
- لەگەڵ ئەو توکنانەی ڕێزم و دەسەڵاتی پێویست هەیە بەکاری بهێنە (System Administrator بۆ تەواوگرتنی یەکگرتوو).
- بۆ ژینگەکانی پڕۆدۆکشن (production)، مۆدای کۆتاییی توکنەکان دیاری بکە.
- توکنەکان بەردەوام گۆڕانکاری بکە.

### کارایی (Performance) {#performance}
- بۆ ئەوەی فراوانی داواکردنی API لە دەستنیشان نەبێت، ماوەی پشکنینی DNSی سەرەکی (300 چرکە) بەکاربهێنە.
- کاتێک کار لەسەر گۆڕینی ناوچەکانی درێژخایەن دەکەیت، سەرچاوەکان وەرگرتنی Enhance فەرمیی بکە.
- ئەگەر زۆر ناوچ دەبێت یەکجار زیاد بکەیت، چەند ناوچێک بە شێوەیەکی پاشاڕێ (staggering) زیادکردن لە پرسیار بکە.

### چاودێری (Monitoring) {#monitoring}
- بەردەوام لۆگەکانی Ultimate Multisite بۆ هەڵەی یەکگرتوو ببنەڕەت ببینیت.
- چاودێریی داواکردنی ناوچە شکستخوازان دیاری بکە.
- دڵنیا بە لەوە چی SSL certificates-ە بە شێوەیەکی دروست دەکرێنەوە (provisioning).
- سەرنجی لە توانای Enhance server و سنوورەکانی ناوچکان بدە.

## سەرچاوە زیاتر (Additional Resources) {#additional-resources}

- **دۆکومێنتە فەرمی ی Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **دۆکومێنتە APIی Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **فۆڕمی کۆمەڵایەتیی Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **دیسکۆشنیا GitHub:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **ئامێرەی مۆڵپەپکردنی ناوچەکانی Ultimate Multisite:** بۆ زیاتر بخوێنەرەوە بەشی wikiی "How to Configure Domain Mapping v2"

## پشکنین (Support) {#support}

ئەگەر کێشەیەکت هەبوو:
1. بەشی چارەسەرکردن لە سەرەوە ببینیت.
2. لۆگەکانی Ultimate Multisite دگرە و ببینیت.
3. پەیوەندی بکە بە [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. بۆ کێشەکانی تایبەت بە پەنلەکە، پەیوەندی بە پشتیوانی Enhance بکە.
5. بۆ یارمەتی کۆمەڵگایەک، داواکاری نوێی دیسکۆشنیا دروست بکە لەگەڵ لۆگەکانی هەڵەی ورد.

## تێبینییەکان (Notes) {#notes}

ئەم یەکگرتووەکە تەنها ئالیزای ناو دامێنی دەگرێتەوە؛ Manage بە شێوەیەکی خۆکار SSL دەدات.
ئەم یەکگرتووەیە پشتگیریکردنی هەردوو مۆبایس (custom domain mappings) و ئەو سایتانەی کە لەسەر ناوی subdomain دایەنرن، کردوونی هەیە.
تولایەکی دروستکردنی subdomainی www دەتوانرێت لە ڕێگەی تنظیمەکانی Domain Mappingەوە دیاری بکرێت.
Enhance ئێستا پشتگیریکردنی پیکیجە Apache (LiteSpeed Enterprise بە ئاسان دەستاییە) دەکات.
هەر کاتێک ناو دامێنی لە Ultimate Multisite دەدەکەیت، Manage ئەو ناوە لە Enhance دەڕواتەوە بەڵام ڕەنگە SSL ی پەیوەندیدار بە خێرا نەدات.
