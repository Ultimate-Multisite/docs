---
title: یکپارچه‌سازی Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# یکپارچه‌سازی Cloudways

## نمای کلی {#overview}
Cloudways یک پلتفرم میزبانی ابری مدیریت‌شده است که به شما اجازه می‌دهد سایت‌های WordPress را روی ارائه‌دهندگان ابری مختلف مانند DigitalOcean، AWS، Google Cloud و موارد دیگر مستقر کنید. این یکپارچه‌سازی همگام‌سازی خودکار دامنه و مدیریت گواهی SSL را بین Ultimate Multisite و Cloudways فعال می‌کند.

## ویژگی‌ها {#features}
- همگام‌سازی خودکار دامنه
- مدیریت گواهی SSL
- پشتیبانی از دامنه‌های اضافی
- اعتبارسنجی DNS برای گواهی‌های SSL

## الزامات {#requirements}
ثابت‌های زیر باید در فایل `wp-config.php` شما تعریف شوند:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

به‌صورت اختیاری، می‌توانید این مورد را نیز تعریف کنید:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## دستورالعمل‌های راه‌اندازی {#setup-instructions}

### 1. دریافت اعتبارنامه‌های API Cloudways خود {#1-get-your-cloudways-api-credentials}

1. وارد Dashboard خود در Cloudways شوید
2. به "Account" > "API Keys" بروید
3. اگر از قبل کلید API ندارید، یک کلید API ایجاد کنید
4. ایمیل و کلید API خود را کپی کنید

### 2. دریافت شناسه‌های سرور و اپلیکیشن خود {#2-get-your-server-and-application-ids}

1. در Dashboard خود در Cloudways، به "Servers" بروید
2. سروری را که چندسایتی WordPress شما روی آن میزبانی می‌شود انتخاب کنید
3. شناسه سرور در URL قابل مشاهده است: `https://platform.cloudways.com/server/{SERVER_ID}`
4. به "Applications" بروید و اپلیکیشن WordPress خود را انتخاب کنید
5. شناسه اپلیکیشن در URL قابل مشاهده است: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. افزودن ثابت‌ها به wp-config.php {#3-add-constants-to-wp-configphp}

ثابت‌های زیر را به فایل `wp-config.php` خود اضافه کنید:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

اگر دامنه‌های **خارجی** اضافی دارید (خارج از شبکه چندسایتی شما) که باید همیشه در فهرست نام‌های مستعار Cloudways نگه داشته شوند:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning وایلدکارد شبکه خودتان را وارد نکنید
`*.your-network.com` (یا هر الگوی زیردامنه از شبکه خودتان) را به
`WU_CLOUDWAYS_EXTRA_DOMAINS` اضافه **نکنید**. ببینید [مهم — دام SSL وایلدکارد](#important--wildcard-ssl-pitfall)
در پایین، برای اینکه چرا این کار مانع صدور گواهی‌های SSL برای هر مستأجر می‌شود.
:::

### 4. فعال‌سازی یکپارچه‌سازی {#4-enable-the-integration}

1. در مدیریت WordPress خود، به Ultimate Multisite > Settings بروید
2. به زبانه "Domain Mapping" بروید
3. تا "Host Integrations" پایین بروید
4. یکپارچه‌سازی Cloudways را فعال کنید
5. روی "Save Changes" کلیک کنید

## نحوه کارکرد {#how-it-works}

### همگام‌سازی دامنه {#domain-syncing}

وقتی دامنه‌ای در Ultimate Multisite نگاشت می‌شود:

1. یکپارچه‌سازی همه دامنه‌های نگاشت‌شده فعلی را بازیابی می‌کند
2. دامنه جدید را به فهرست اضافه می‌کند (به‌همراه نسخه www در صورت کاربرد)
3. فهرست کامل را از طریق API به Cloudways ارسال می‌کند
4. Cloudways نام‌های مستعار دامنه را برای اپلیکیشن شما به‌روزرسانی می‌کند

نکته: API Cloudways نیاز دارد هر بار فهرست کامل دامنه‌ها ارسال شود، نه اینکه فقط دامنه‌های تکی اضافه یا حذف شوند.

### مدیریت گواهی SSL {#ssl-certificate-management}

پس از همگام‌سازی دامنه‌ها:

1. یکپارچه‌سازی بررسی می‌کند کدام دامنه‌ها رکوردهای DNS معتبر دارند که به سرور شما اشاره می‌کنند
2. درخواستی به Cloudways ارسال می‌کند تا گواهی‌های SSL مربوط به Let's Encrypt را برای آن دامنه‌ها نصب کند
3. Cloudways صدور و نصب گواهی SSL را انجام می‌دهد

این یکپارچه‌سازی همیشه گواهی‌های Let's Encrypt **استاندارد** (غیر وایلدکارد) را از
Cloudways درخواست می‌کند. اگر یک الگوی وایلدکارد در `WU_CLOUDWAYS_EXTRA_DOMAINS` ارائه شود، بخش ابتدایی
`*.` پیش از درخواست SSL حذف می‌شود — خود وایلدکارد هرگز توسط این
یکپارچه‌سازی نصب نمی‌شود. برای استفاده از گواهی وایلدکارد در Cloudways باید آن را
به‌صورت دستی نصب کنید، اما انجام این کار صدور Let's Encrypt برای هر دامنه را برای دامنه‌های سفارشی نگاشت‌شده
مسدود می‌کند (دام پایین را ببینید).

## دامنه‌های اضافی {#extra-domains}

ثابت `WU_CLOUDWAYS_EXTRA_DOMAINS` به شما اجازه می‌دهد دامنه‌های **خارجی**
اضافی را مشخص کنید که باید همیشه در فهرست نام‌های مستعار اپلیکیشن Cloudways نگه داشته شوند. از آن برای موارد زیر استفاده کنید:

- دامنه‌های خارجی که توسط Ultimate Multisite مدیریت نمی‌شوند (مثلاً یک سایت بازاریابی جداگانه که همان اپلیکیشن Cloudways را به اشتراک می‌گذارد)
- دامنه‌های پارک‌شده یا مرحله‌بندی که می‌خواهید در فهرست نام‌های مستعار اپلیکیشن نگه داشته شوند

از این ثابت برای وایلدکارد زیردامنه شبکه خودتان استفاده **نکنید**
(مثلاً `*.your-network.com`). دام SSL وایلدکارد را در پایین ببینید.

## مهم — دام SSL وایلدکارد {#important--wildcard-ssl-pitfall}

یک اشتباه رایج هنگام دنبال کردن راه‌اندازی پیش‌فرض Cloudways این است که وایلدکاردی مانند
`*.your-network.com` را به `WU_CLOUDWAYS_EXTRA_DOMAINS` اضافه کنید، یا به‌صورت دستی یک گواهی SSL وایلدکارد Cloudways
برای آن وایلدکارد نصب کنید.

**اگر این کار را انجام دهید، Cloudways از صدور گواهی‌های Let's Encrypt برای
دامنه‌های سفارشی هر مستأجر که Ultimate Multisite نگاشت می‌کند خودداری خواهد کرد.** Cloudways هر بار گواهی فعال
SSL را روی اپلیکیشن جایگزین می‌کند، و وجود یک گواهی وایلدکارد از قبل روی
اپلیکیشن، صدور Let's Encrypt برای هر دامنه را که این یکپارچه‌سازی به آن متکی است مسدود می‌کند.

### راه‌اندازی پیشنهادی SSL در Cloudways برای یک شبکه Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. در زبانه **SSL Certificate** اپلیکیشن Cloudways، یک **گواهی استاندارد
   Let's Encrypt** نصب کنید که فقط `your-network.com` و `www.your-network.com` را پوشش دهد
   — نه یک وایلدکارد.
2. `*.your-network.com` (یا هر الگوی زیردامنه از شبکه خودتان) را در
   `WU_CLOUDWAYS_EXTRA_DOMAINS` قرار **ندهید**. آن ثابت را فقط برای دامنه‌های **خارجی** نگه دارید.
3. وایلدکارد زیردامنه هر مستأجر را فقط در سطح **DNS** ایجاد کنید (یک رکورد `A` برای
   `*.your-network.com` که به IP سرور Cloudways شما اشاره کند) تا زیرسایت‌ها resolve شوند. SSL
   برای دامنه‌های سفارشی نگاشت‌شده تکی سپس به‌صورت خودکار توسط یکپارچه‌سازی
   از طریق Let's Encrypt صادر می‌شود.

اگر دامنه‌های سفارشی مستأجران شما بدون SSL گیر کرده‌اند، زبانه SSL در Cloudways را بررسی کنید. اگر یک
گواهی wildcard در آنجا فعال است، آن را حذف کنید، یک گواهی استاندارد Let's Encrypt
فقط برای دامنه اصلی شبکه دوباره صادر کنید، و هر ورودی wildcard را از
`WU_CLOUDWAYS_EXTRA_DOMAINS` حذف کنید. سپس یک نگاشت دامنه را دوباره اجرا کنید (یا منتظر مورد بعدی بمانید)
و یکپارچه‌سازی دوباره شروع به صدور گواهی‌های جداگانه برای هر دامنه خواهد کرد.

## عیب‌یابی {#troubleshooting}

### مشکلات اتصال API {#api-connection-issues}
- بررسی کنید که ایمیل و API key شما درست باشند
- بررسی کنید که شناسه‌های سرور و برنامه شما درست باشند
- مطمئن شوید که Account شما در Cloudways مجوزهای لازم را دارد

### مشکلات گواهی SSL {#ssl-certificate-issues}
- Cloudways نیاز دارد که دامنه‌ها پیش از صدور گواهی‌های SSL، رکوردهای DNS معتبر داشته باشند که به سرور شما اشاره کنند
- این یکپارچه‌سازی پیش از درخواست گواهی‌های SSL، رکوردهای DNS را اعتبارسنجی می‌کند
- اگر گواهی‌های SSL صادر نمی‌شوند، بررسی کنید که دامنه‌های شما به‌درستی به نشانی IP سرور شما اشاره می‌کنند
- **دامنه‌های سفارشی هر مستأجر بدون SSL گیر کرده‌اند؟** زبانه SSL Certificate برنامه Cloudways را بررسی کنید. اگر یک گواهی wildcard (که به‌صورت دستی نصب شده، یا `*.your-network.com` را پوشش می‌دهد) فعال باشد، Cloudways برای دامنه‌های سفارشی که به‌صورت جداگانه نگاشت شده‌اند گواهی‌های Let's Encrypt صادر نخواهد کرد. آن را با یک گواهی استاندارد Let's Encrypt که فقط دامنه اصلی شبکه (`your-network.com`, `www.your-network.com`) را پوشش می‌دهد جایگزین کنید و هر ورودی wildcard را از `WU_CLOUDWAYS_EXTRA_DOMAINS` حذف کنید. سپس یک نگاشت دامنه را دوباره اجرا کنید (یا منتظر مورد بعدی بمانید) و این یکپارچه‌سازی گواهی‌های جداگانه برای هر دامنه را درخواست خواهد کرد.

### دامنه اضافه نشده است {#domain-not-added}
- لاگ‌های Ultimate Multisite را برای هر پیام خطا بررسی کنید
- بررسی کنید که دامنه از قبل به Cloudways اضافه نشده باشد
- مطمئن شوید که plan شما در Cloudways از تعداد دامنه‌هایی که اضافه می‌کنید پشتیبانی می‌کند
