---
title: Integrasiی GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integration with GridPane

## گشتی (Overview) {#overview}
GridPane یەک پۆلێکی تایبەت بۆ کۆنترۆڵکردنی هاستکردنی WordPress دروستکراوە کە بۆ پیشەنگان جدیی وۆردپریزی کار دەکەیت. ئەم یەکپارچوونە ڕێنوێنیی ئۆتۆماتیکی گۆڕینی دامێنی (domain syncing) و بەڕێوەبردنی پڕۆتۆکۆڵی SSL لە نێوان Ultimate Multisite و GridPane دەدات.

## تایبەتمەندییەکان (Features) {#features}
- گۆڕینی ئۆتۆماتیکی دامێنی (Automatic domain syncing)
- بەڕێوەبردنی پڕۆتۆکۆڵی SSL (SSL certificate management)
- ڕێکخستنی ئۆتۆماتیکی ئەو خاڵانەی کە لە SUNRISEدا دەبێت (Automatic configuration of SUNRISE constant)

## پێداویستییەکان (Requirements) {#requirements}
ئەم خاڵانە دەبێت لە فایلەکەت بە ناوی `wp-config.php` دیاری بکرێن:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## ڕێنماییەکانی دامەزراندن (Setup Instructions) {#setup-instructions}

### 1. بەدەست دەهێنە مەرجەکانی API یەک لە GridPane-ی خۆت {#1-get-your-gridpane-api-credentials}

1. بچۆ بۆ داشبۆردی GridPane یەکەت و لاگ ئین (Log in).
2. بگۆڕە بۆ "Settings" > "API".
3. ئەگەر نیت بەکاردێت، API key دروست بکە.
4. API key ی خۆت دەستنیشان بکە.

### 2. مەرجەکانی Server و Site-ەکەت وەربگرە {#2-get-your-server-and-site-ids}

1. لە داشبۆردی GridPane یەکەتدا، بگۆڕە بۆ "Servers".
2. ئەو server-ەی هەڵگرتووی WordPress multisite ی خۆت هەڵبژێرە.
3. ID ی Server (کە دەبینرێت لە URL یان لەسەر لاپەڕەی وردی serverەکە) تۆمێ بکە.
4. بگۆڕە بۆ "Sites" و سایتەکەت هەڵبژێرە.
5. ID ی Site (کە دەبینرێت لە URL یان لەسەر لاپەڕەی وردی سایتەکە) تۆمێ بکە.

### 3. خاڵانەکان زیاد بکە بە `wp-config.php` {#3-add-constants-to-wp-configphp}

ئەم خاڵانە بۆ فایلەکەت بە ناوی `wp-config.php` زیاد بکە:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. یەکپارچوونی چالاک بکە (Enable the Integration) {#4-enable-the-integration}

1. لە ئۆدمن بەڕێوەبردنی WordPress، بگۆڕە بۆ Ultimate Multisite > Settings.
2. بچۆ بۆ تابلۆی "Domain Mapping".
3. خوارەوە ل دەست بکە بۆ "Host Integrations".
4. یەکپارچوونی GridPane-ی چالاک بکە (Enable).
5. بۆ "Save Changes" کلیک بکە.

## چۆن کار دەکات (How It Works) {#how-it-works}

کاتێک دامێنی لە Ultimate Multisite دا دەگۆڕدرێت:

۱. این ادغام درخواست را به API گایدپین برای اضافه کردن دامنه به سایت شما ارسال می‌کند.
۲. گایدپین به صورت خودکار مدیریت صدور گواهی SSL را انجام می‌دهد.
۳. وقتی یک نگاشت دامنه حذف می‌شود، این ادغام آن دامنه را از گایدپین حذف خواهد کرد.

این ادغام همچنین ثابت SUNRISE در فایل wp-config.php شما را به صورت خودکار تنظیم می‌کند که برای کار صحیح نگاشت دامنه مورد نیاز است.

## مدیریت ثابت SUNRISE {#sunrise-constant-management}

یک ویژگی منحصر‌به‌فرد ادغام GridPane این است که به طور خودکار ثابت SUNRISE در wp-config.php را برمی‌گرداند تا از تداخل با سیستم نگاشت دامنه خود گایدپین جلوگیری کند. این کار تضمین می‌کند که هر دو سیستم بدون مشکل می‌توانند با هم کار کنند.

## عیب‌یابی (Troubleshooting) {#troubleshooting}

### مشکلات اتصال API {#api-connection-issues}
- بررسی کنید که کلید API شما صحیح باشد.
- مطمئن شوید که شناسه سرور و سایت شما درست است.
- اطمینان حاصل کنید که حساب گایدپین شما مجوزهای لازم را دارد.

### مشکلات گواهی SSL {#ssl-certificate-issues}
- ممکن است گایدپین برای صدور گواهی‌های SSL کمی طول بکشد.
- تأیید کنید که دامنه‌های شما به درستی به آدرس IP سرور شما اشاره می‌کنند.
- تنظیمات SSL گایدپین سایت خود را بررسی کنید.

### دامنه اضافه نشده است {#domain-not-added}
- لاگ‌های Ultimate Multisite را برای هرگونه پیام خطا بررسی کنید.
- تأیید کنید که دامنه قبلاً در گایدپین اضافه نشده باشد.
- مطمئن شوید که رکورد‌های DNS دامنه شما به درستی پیکربندی شده‌اند.
