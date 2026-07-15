---
title: ادغام Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# یکپارچه‌سازی Cloudflare

## نمای کلی {#overview}
Cloudflare یک شبکهٔ تحویل محتوا (CDN) و ارائه‌دهندهٔ امنیتی پیشرو است که به محافظت و شتاب‌دهی وب‌سایت‌ها کمک می‌کند. این یکپارچه‌سازی مدیریت خودکار دامنه بین Ultimate Multisite و Cloudflare را فعال می‌کند، به‌ویژه برای نصب‌های چندسایتی زیر‌دامنه‌ای.

## قابلیت‌ها {#features}
- ایجاد خودکار زیر‌دامنه در Cloudflare
- پشتیبانی از زیر‌دامنهٔ پراکسی‌شده
- مدیریت رکورد DNS
- نمایش بهبودیافتهٔ رکورد DNS در بخش مدیریت Ultimate Multisite

## الزامات {#requirements}
ثابت‌های زیر باید در فایل `wp-config.php` شما تعریف شده باشند:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## دستورالعمل‌های راه‌اندازی {#setup-instructions}

### 1. کلید API Cloudflare خود را دریافت کنید {#1-get-your-cloudflare-api-key}

1. وارد Dashboard Cloudflare خود شوید
2. به «نمایهٔ من» بروید (روی ایمیل خود در گوشهٔ بالا-راست کلیک کنید)
3. از منو «توکن‌های API» را انتخاب کنید
4. یک توکن API جدید با مجوزهای زیر ایجاد کنید:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. توکن API خود را کپی کنید

### 2. شناسهٔ Zone خود را دریافت کنید {#2-get-your-zone-id}

1. در Dashboard Cloudflare خود، دامنه‌ای را که می‌خواهید استفاده کنید انتخاب کنید
2. شناسهٔ Zone در زبانهٔ «نمای کلی»، در نوار کناری راست زیر «API» قابل مشاهده است
3. شناسهٔ Zone را کپی کنید

### 3. ثابت‌ها را به wp-config.php اضافه کنید {#3-add-constants-to-wp-configphp}

ثابت‌های زیر را به فایل `wp-config.php` خود اضافه کنید:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. یکپارچه‌سازی را فعال کنید {#4-enable-the-integration}

1. در بخش مدیریت WordPress خود، به Ultimate Multisite > تنظیمات بروید
2. به زبانهٔ «نگاشت دامنه» بروید
3. به پایین تا «یکپارچه‌سازی‌های میزبان» پیمایش کنید
4. یکپارچه‌سازی Cloudflare را فعال کنید
5. روی «ذخیرهٔ تغییرات» کلیک کنید

## نحوهٔ کارکرد {#how-it-works}

### مدیریت زیر‌دامنه {#subdomain-management}

وقتی یک سایت جدید در یک نصب چندسایتی زیر‌دامنه‌ای ایجاد می‌شود:

1. این یکپارچه‌سازی درخواستی به API مربوط به Cloudflare ارسال می‌کند تا یک رکورد CNAME برای زیر‌دامنه اضافه شود
2. زیر‌دامنه به‌صورت پیش‌فرض طوری پیکربندی می‌شود که از طریق Cloudflare پراکسی شود (این مورد را می‌توان با فیلترها تغییر داد)
3. وقتی یک سایت حذف می‌شود، این یکپارچه‌سازی زیر‌دامنه را از Cloudflare حذف می‌کند

### نمایش رکورد DNS {#dns-record-display}

این یکپارچه‌سازی نمایش رکورد DNS را در بخش مدیریت Ultimate Multisite با موارد زیر بهبود می‌دهد:

1. دریافت مستقیم رکوردهای DNS از Cloudflare
2. نمایش اینکه رکوردها پراکسی شده‌اند یا نه
3. نمایش اطلاعات اضافی دربارهٔ رکوردهای DNS

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (که قبلاً «Cloudflare for SaaS» نامیده می‌شد) قابلیتی در Cloudflare است که به مشتریان شما اجازه می‌دهد دامنه‌های خودشان را همراه با SSL روی شبکهٔ چندسایتی شما استفاده کنند. این رویکرد پیشنهادی برای نصب‌های چندسایتی با دامنهٔ نگاشت‌شده است که از Cloudflare استفاده می‌کنند، زیرا Cloudflare صدور و تمدید گواهی SSL را برای هر دامنهٔ سفارشی به‌صورت خودکار مدیریت می‌کند.

### تفاوت آن با یکپارچه‌سازی استاندارد Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | یکپارچه‌سازی استاندارد | Cloudflare Custom Hostnames |
|---|---|---|
| **هدف** | رکوردهای DNS را برای زیر‌دامنه‌ها به‌صورت خودکار ایجاد می‌کند | دامنه‌های سفارشی (نگاشت‌شده) را با SSL مدیریت‌شده توسط Cloudflare فعال می‌کند |
| **بهترین کاربرد برای** | چندسایتی زیر‌دامنه‌ای | چندسایتی با دامنهٔ نگاشت‌شده |
| **SSL** | جداگانه رسیدگی می‌شود | به‌صورت خودکار توسط Cloudflare مدیریت می‌شود |

### راه‌اندازی Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. در Dashboard Cloudflare خود، zone مربوط به دامنهٔ اصلی‌تان را باز کنید.
2. به **SSL/TLS > نام‌های میزبان سفارشی** بروید.
3. یک خاستگاه پشتیبان اضافه کنید که به IP یا نام میزبان سرور شما اشاره کند.
4. برای هر دامنهٔ مشتری که در Ultimate Multisite نگاشت شده است، یک ورودی Custom Hostname در Cloudflare اضافه کنید. می‌توانید این مرحله را با استفاده از API مربوط به Cloudflare خودکار کنید.
5. Cloudflare پس از اینکه DNS مشتری به شبکهٔ شما اشاره کرد، گواهی‌های TLS را برای هر نام میزبان سفارشی به‌صورت خودکار صادر و تمدید می‌کند.

برای مرجع کامل API، [مستندات Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) را ببینید.

:::note به‌روزرسانی اصطلاحات
از Ultimate Multisite v2.6.1 به بعد، این قابلیت در همهٔ تنظیمات و برچسب‌های plugin با عنوان **Cloudflare Custom Hostnames** ارجاع داده می‌شود. نسخه‌های قبلی از نام «Cloudflare for SaaS» استفاده می‌کردند، که نام محصول زیربنایی Cloudflare است.
:::

## نکات مهم {#important-notes}

طبق به‌روزرسانی‌های اخیر Cloudflare، پراکسی‌کردن wildcard اکنون برای همهٔ مشتریان در دسترس است. این یعنی یکپارچه‌سازی استاندارد DNS در Cloudflare برای نصب‌های چندسایتی زیر‌دامنه‌ای نسبت به گذشته اهمیت کمتری دارد، زیرا می‌توانید به‌سادگی یک رکورد DNS از نوع wildcard در Cloudflare راه‌اندازی کنید.

## عیب‌یابی {#troubleshooting}

### مشکلات اتصال API {#api-connection-issues}
- بررسی کنید که توکن API شما درست است و مجوزهای لازم را دارد
- بررسی کنید که شناسهٔ Zone شما درست است
- مطمئن شوید که حساب Cloudflare شما مجوزهای لازم را دارد

### زیر‌دامنه اضافه نشده است {#subdomain-not-added}
- گزارش‌های Ultimate Multisite را برای هرگونه پیام خطا بررسی کنید
- بررسی کنید که زیر‌دامنه از قبل به Cloudflare اضافه نشده باشد
- مطمئن شوید که طرح Cloudflare شما از تعداد رکوردهای DNS که ایجاد می‌کنید پشتیبانی می‌کند

### مشکلات پراکسی‌کردن {#proxying-issues}
- اگر نمی‌خواهید زیر‌دامنه‌ها پراکسی شوند، می‌توانید از فیلتر `wu_cloudflare_should_proxy` استفاده کنید
- برخی قابلیت‌ها ممکن است هنگام پراکسی‌شدن درست کار نکنند (مثلاً برخی عملکردهای بخش مدیریت WordPress)
- استفاده از Page Rules در Cloudflare را برای دورزدن کش در صفحه‌های مدیریت در نظر بگیرید
