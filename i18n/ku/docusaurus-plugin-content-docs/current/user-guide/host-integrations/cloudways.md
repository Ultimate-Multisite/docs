---
title: یەکگرتووکردنی Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integration with Cloudways {#cloudways-integration}

## گشتی (Overview) {#overview}
Cloudways یەک پلاتفۆرمێکی هاستکردنی ئاڵۆزە کە ڕێنوێنی دەکات بۆ دیplooyکردنی سایتەکانی WordPress لەسەر پڕۆڤایەرەکانی مۆدێرن و هەروەها جیاواز وەک DigitalOcean، AWS، Google Cloud و دیکە. ئەم یەکگرتووکارییە دەبێتە هۆی هاڕێژکردنی ئۆمێن (domain syncing) بە شێوەیەکی ئۆتۆماتیک و بەڕێوەبردنی گوازمانی SSL لە نێوان Ultimate Multisite و Cloudways.

## تایبەتمەندییەکان (Features) {#features}
- هاڕێژکردنی ئۆمێن بە شێوەیەکی ئۆتۆماتیک
- بەڕێوەبردنی گوازمانی SSL
- پشتگیریکردن بۆ ئۆمێنەکانی دیکە
- ڕابتاییدان بۆ وەرگرتنی DNS بۆ گوازمانی SSL

## پێداوی석ەکان (Requirements) {#requirements}
ئەم کۆنستانە دەبێت لە فایلەکەت بە ناوی `wp-config.php` دیاری بکرێن:

```php
define('WU_CLOUDWAYS_EMAIL', 'email_ی_cloudways_ی_تۆ');
define('WU_CLOUDWAYS_API_KEY', 'api_key_ی_تۆ');
define('WU_CLOUDWAYS_SERVER_ID', 'id_ی_سێرڤەر_ی_تۆ');
define('WU_CLOUDWAYS_APP_ID', 'id_ی_ئەپڵیکەیشنی_تۆ');
```

بە ئارامی، دەتوانیت ئەمەش دیاری بکەیت:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'لیست_ی_ئۆمێنەکان_لەگەڵ_دێرێ_کردنی_کۆما');
```

## ڕێنماییەکانی سیستەمکردن (Setup Instructions) {#setup-instructions}

### ١. بەدەستهێنانی مەرجەکانی API ی Cloudways (Get Your Cloudways API Credentials) {#1-get-your-cloudways-api-credentials}

١. بچۆ بۆ داشبۆردی Cloudways و خۆت بنووسە (Log in).
٢. گەڕانەوە بۆ "Account" > "API Keys".
٣. ئەگەر هێشتا نییە، API keyێک دروست بکە.
٤. ئیمەی خۆت و API key ی خۆت دەستنیشان بکە.

### ٢. بەدەستهێنانی IDی سێرڤەر و ئەپڵیکات (Get Your Server and Application IDs) {#2-get-your-server-and-application-ids}

١. لە داشبۆردی Cloudways، بچۆ بۆ "Servers".
٢. ئەو سێرڤەرەی کە WordPress multisite ی تۆ لەسەرە هەڵبژێرە.
٣. IDی سێرڤەر لەناو URLەکەدا دەبینراوە: `https://platform.cloudways.com/server/{SERVER_ID}`
٤. بچۆ بۆ "Applications" و ئەپڵیکات WordPress ی خۆت هەڵبژێرە.
٥. IDی ئەپڵیکات لەناو URLەکەدا دەبینراوە: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### ٣. زیادکردنی کۆنستان بۆ wp-config.php (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

کۆنستانەکانی خوارەوە لە فایلەکەت بە ناوی `wp-config.php` زیاد بکە:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ئەگەر دۆمێینەکانی دیکەی **دەرەکی** (لە دەرەوەی تۆڕی میدیاکەت) هەیە کە دەبێت هەمیشە لە لیستەکەی Cloudways یان بە شێوەیەکی تایبەت هەڵبسلات بکرێن:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning دۆمێنی تۆڕی خۆت بە ئاستی wildcard (وەک `*.your-network.com`) ناهێنە
**نەبێت** `*.your-network.com` (یان هەر شێوازی subdomain یەک لە تۆڕی خۆت) بۆ `WU_CLOUDWAYS_EXTRA_DOMAINS` زیاد بکەیت. بۆ ئەوەی تێبینی بکە چی بۆیە ئەمە ڕێگری دەکات کە گوازارەکانی SSL تایبەت بە هەر یەکێک لە هاوبەشەکان (per-tenant) دروست بکرێن.
:::

### 4. چالاککردنەوەی یەکگرتوو (Integration) {#4-enable-the-integration}

1. لە ئەدمنیی WordPress، بگە به Ultimate Multisite > Settings
2. بۆ تابلۆی "Domain Mapping" (پێناساندنی دۆمێین)، دەربکە بە خوارەوە بۆ "Host Integrations" (یەکگرتووەکان).
3. یەکگرتووی Cloudways چالاک بکە.
4. بۆ "Save Changes" (سەرکردایەتی گۆڕانکارییەکان) بگەڕێ.

## چۆن کار دەکات؟ {#how-it-works}

### هەڵبسلاتکردنی دۆمێینەکان (Domain Syncing) {#domain-syncing}

کاتێک یەک دۆمێن لە Ultimate Multisite دا پێناساند دەکرێت:

1. یەکگرتوو هەموو دۆمێنە کە ئێستا پێناساند کراون، وەردەگرێتەوە.
2. ئەو دۆمێنی نوێیە زیاد دەکات بۆ لیستەکە (لەگەڵ وەرگرتنی وردی `www` ئەگەر پێویست بێت).
3. لیستێکی تەواوە بۆ Cloudways بە ڕێگەی API دەفرستێت.
4. Cloudways ئالای دۆمێنەکان بۆ بەرنامەکانت نوێ دەکاتەوە.

**تێبینی:** APIی Cloudways پێویستی هەیە هەموو لیستەکە لە هەر کاتێکدا بفرستیت، نەک تەنها زیادکردن یان لەناوچوونەوەی دۆمێنە تاکەکانی ناو لیستەکە.

### بەڕێوەبردنی گوازارەکانی SSL (SSL Certificate Management) {#ssl-certificate-management}

پاش ئەوەی دۆمێینەکان هەڵبسلات بکرێن:

1. یەکگرتوو دەبینێت کە چ دۆمێن هەیە تۆمار DNS دروست و ئاماژە بەو بەرنامە دەکات.
2. داواکارییەکی بۆ Cloudways دەفرستێت بۆ دامەزراندنی گوازارەکانی SSLی Let's Encrypt بۆ ئەو دۆمێنانەی کە ڕاستن.
3. Cloudways کارکردنی دروستکردن و دامەزراندنی گوازارەکانی SSL ئەنجام دەدات.

پیکربندی SSL برای شبکه Ultimate Multisite بر اساس توصیه‌های Cloudways

همیشه این ادغام (integration) درخواست گواهی‌های **استاندارد** (غیر وایلدکارد) Let's Encrypt را از Cloudways می‌کند. اگر یک الگوی وایلدکارد در `WU_CLOUDWAYS_EXTRA_DOMAINS` ارائه شود، قبل از درخواست SSL، علامت `*.` حذف می‌شود — خود وایلدکارد هرگز توسط این ادغام نصب نمی‌شود. برای استفاده از گواهی وایلدکارد روی Cloudways باید آن را به صورت دستی نصب کنید، اما انجام این کار باعث مسدود شدن صدور گواهی‌های Let's Encrypt برای دامنه‌های سفارشی نگاشت شده (see the pitfall below) می‌شود.

## دامنه‌های اضافی (Extra Domains) {#extra-domains}

ثابت `WU_CLOUDWAYS_EXTRA_DOMAINS` به شما اجازه می‌دهد دامنه‌های **خارجی** دیگری را مشخص کنید که همیشه باید در لیست آدرس‌های مستعار (aliases list) برنامه Cloudways باقی بمانند. از آن برای موارد زیر استفاده کنید:

- دامنه‌های خارجی که توسط Ultimate Multisite مدیریت نمی‌شوند (مثلاً یک سایت بازاری جداگانه که از همان برنامه Cloudways استفاده می‌کند).
- دامنه‌های پارک شده یا استیجینگ (staging domains) که می‌خواهید در لیست آدرس‌های مستعار برنامه باقی بمانند.

**از این ثابت برای وایلدکارد زیردامنه شبکه خود استفاده نکنید** (مثلاً `*.your-network.com`). به نکته مربوط به مشکل SSL وایلدکارد زیر مراجعه کنید.

## مهم — مشکل SSL وایلدکارد {#important--wildcard-ssl-pitfall}

یک اشتباه رایج هنگام دنبال کردن تنظیمات پیش‌فرض Cloudways، اضافه کردن یک وایلدکارد مانند `*.your-network.com` به `WU_CLOUDWAYS_EXTRA_DOMAINS` یا نصب دستی یک گواهی SSL وایلدکارد Cloudways برای آن وایلدکارد است.

**اگر این کار را انجام دهید، Cloudways از صدور گواهی‌های Let's Encrypt برای دامنه‌های سفارشی هر مستأجر (per-tenant custom domains) که Ultimate Multisite نگاشت می‌کند، خودداری خواهد کرد.** Cloudways هر بار گواهی SSL فعال روی برنامه را جایگزین می‌کند و یک گواهی وایلدکارد از قبل موجود روی برنامه مانع صدور گواهی Let's Encrypt برای هر دامنه می‌شود که این ادغام به آن وابسته است.

### تنظیمات پیشنهادی SSL Cloudways برای شبکه Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

۱. در تب **SSL Certificate** اپلیکیشن Cloudways، یک **گواهی استاندارد Let's Encrypt** نصب کنید که فقط شامل `your-network.com` و `www.your-network.com` باشد — نه یک گواهی گلوله‌ای (wildcard).
۲. از قرار دادن `*.your-network.com` (یا هر الگوی زیردامنه شبکه خود) در قسمت `WU_CLOUDWAYS_EXTRA_DOMAINS` خودداری کنید. این مقدار ثابت را فقط برای **دومه‌های خارجی** نگه دارید.
۳. گواهی گلوله‌ای زیردامنه مخصوص هر مستأجر را فقط در سطح **DNS** ایجاد کنید (یک رکورد `A` برای `*.your-network.com` که به آدرس IP سرور Cloudways شما اشاره کند) تا زیرمجموعه‌ها حل شوند. سپس SSL برای دامنه‌های سفارشی نگاشت شده فردی توسط این ادغام از طریق Let's Encrypt به صورت خودکار صادر می‌شود.

اگر دامنه‌های سفارشی مستأجرانتان بدون SSL گیر کرده‌اند، تب SSL Cloudways را بررسی کنید. اگر یک گواهی گلوله‌ای در آن فعال است، آن را حذف کنید، یک گواهی استاندارد Let's Encrypt فقط برای دامنه اصلی شبکه صادر کنید و هر ورودی گلوله‌ای از `WU_CLOUDWAYS_EXTRA_DOMAINS` را پاک کنید. سپس نگاشت دامنه را دوباره فعال کنید (یا منتظر نگاشت بعدی بمانید) و ادغام دوباره شروع به صدور گواهی‌های مخصوص هر دامنه خواهد کرد.

## عیب‌یابی {#troubleshooting}

### مشکلات اتصال API {#api-connection-issues}
- بررسی کنید که ایمیل و کلید API شما صحیح باشند.
- چک کنید که شناسه سرور و برنامه شما درست باشد.
- مطمئن شوید که حساب Cloudways شما مجوزهای لازم را دارد.

### پروبلەم SSL Certificateان {#ssl-certificate-issues}
- Cloudways پێویستی هەیە کە دامێنی تێدا تۆمەکان (DNS records) بێت و ئاماژە بەو SERVERی بکات پێش ئەوەی SSL certificate بدات.
- ئەم integrationە پێش داواکردنی SSL certificates، DNS records دەپشێت چاک بکات.
- ئەگەر SSL certificates نادەت دروست بکات، چاک بکە کە دامێنی تۆ بە شێوەیەکی دروست بۆ IP addressی SERVERی تۆ ئاماژە دەکات.
- **دامێنانی تایبەتی بە هەر یەک لە تەنهاکان (Per-tenant custom domains) کە SSL نییە؟** چاک بکە سەر تابلۆی SSL Certificateی ئەپڵیکەیشنی Cloudways. ئەگەر wildcard certificate (کە دەستکردن بە شێوەیەکی دستی دابنێت، یان کە `*.your-network.com` دەگرێتەوە) چالاک بێت، Cloudways SSL certificates بۆ دامێنانی تایبەتی کە بە شێوەیەکی تاکەکەسی مَپکراون (mapped) نادەت بدات. لە شوێنی ئەو certificateە بگۆڕە بە یەکcertificateی standard Let's Encrypt کە تەنها دامێنی سەرەکی تۆ دابگرێتەوە (`your-network.com`، `www.your-network.com`) و هەر entryی wildcard لە `WU_CLOUDWAYS_EXTRA_DOMAINS` هەڵبژێرە. پاشان domain mapping یەکتر دەستپێدات (یان بۆ یەکەمێک بانتظار بکە) و ئەم integrationە داواکردنی certificates بۆ هەر دامێنانی ئەنجام دەدات.

### Domainەکە زیاد نەکراوە {#domain-not-added}
- لە logsی Ultimate Multisite چاک بکە بۆ هەر پەیامی هەڵەیەک.
- دڵنیا بە کە domainەکە پێشتر لە Cloudways زیاد نییە.
- دڵنیا بێت کە پلانی Cloudways ی تۆ پشتگیریکردنی ژمارەی دامێنانی کە دەدات زیاد بکەیت.
