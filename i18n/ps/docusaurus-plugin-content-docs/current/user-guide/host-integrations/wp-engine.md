---
title: د WP Engine همغږي
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# همکارۍ د WP Engine سره

## پراته معلومات (Overview) {#overview}
WP Engine یو لوکس مدیریت شوی WordPress هاستینګ پلتفارم ده چې د WordPress سایتونه لپاره غوره کارایی عمل، امنیت او بیا جوړول وړتیا وړاندې کوي. دا همکارۍ Ultimate Multisite او WP Engine ترمنځ د دامینहरूको خودکار سنکرونیز کولو اجازه ورکوي.

## خوندګې (Features) {#features}
- د دامینونو خودکار سنکرونیزه کول
- د ډیډ ساب‌دامینونه (Subdomain) لپاره دعمو لپاره د ډیډ ساب‌دامینونه
- د WP Engine پر دی موجود سیستمونو سره همتعاون

## اړتیاوې (Requirements) {#requirements}
دا همکارۍ خودکار रूपमा تشخیصوي چې آیا تاسو په WP Engine باندې هاستینګ کوئ او د درکار WP Engine API کاروي. که WP Engine plugin فعال او په صحیح ډول تنظیم شوی وي، نو کوم اضافي تنظیم کیدو کی ضرورت نشته.

بیا، که تاسو غواړئ چې همکارۍ manuall (म्यानو) تنظیم کړئ، تاسو کولی شئ یو لهدې ثابتې (constant) د `wp-config.php` فایل کې تعریف کړئ:

```php
define('WPE_APIKEY', 'your_api_key'); // غوره لاره
// یا
define('WPE_API', 'your_api_key'); // بدله لاره
```

## تنظیم کولو لارښوونې (Setup Instructions) {#setup-instructions}

### ۱. WP Engine Plugin کی تایید کول {#1-verify-wp-engine-plugin}

که تاسو په WP Engine باندې هاستینګ کوئ، نو باید WP Engine plugin پہلے نصب او فعال وي. تایید کړئ چې:

1. WP Engine plugin فعال دی
2. فایل `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` وجود لري

### ۲. همکارۍ فعال کول {#2-enable-the-integration}

1. په خپل WordPress admin کې، برخه Ultimate Multisite > Settings ته لاړ شئ
2. "Domain Mapping" (دامینونو نقشې) ټب ته ورسئ
3. د "Host Integrations" (هاستینګ همتعاونونه) لاندې روان شئ
4. WP Engine integration فعال کړئ
5. "Save Changes" (تغییرات حفظ کړئ) باندې کلیک وکړئ

## کار څنګه کوي (How It Works) {#how-it-works}

### د ډامینونو سنکرونیزه کول (Domain Syncing) {#domain-syncing}

کله چې Ultimate Multisite کې یو دامین نقشې ورکول کیږي:

1. همکارۍ WP Engine API کاروي ترڅو دامینت ستاسو WP Engine نصب ته اضافه کړي
2. WP Engine د دامینټ تنظیم او SSL certificate ورکولو کارونه اداره کوي
3. کله چې دامینټ نقشه منځ ته وړل کیږي، نو همکارۍ دامینټ له WP Engine څخه منځ ته وړل کوئ

### د ساب‌دامینونو دعمو (Subdomain Support) {#subdomain-support}

د دامین‌های زیردام برای نصب‌های چند سایت (multisite) کاري:

۱. این یکپارچه‌سازی هر زیردامنه‌ی شما را وقتی یک سایت جدید ساخته می‌شود به WP Engine اضافه می‌کند.
۲. WP Engine تنظیمات زیردام‌ها را مدیریت می‌کند.
۳. وقتی یک سایت حذف می‌شود، این یکپارچه‌سازی آن زیردام را از WP Engine پاک خواهد کرد.

## نکات مهم {#important-notes}

### دامین‌های وایلد (Wildcard Domains) {#wildcard-domains}

برای نصب‌های چند سایت با زیردامن، توصیه می‌شود که برای تنظیمات دامین وایلد با پشتیبانی WP Engine تماس بگیرید. این کار باعث می‌شود همه زیردامن‌ها به صورت خودکار کار کنند و نیازی نباشد هر کدام را جداگانه اضافه کنید.

### گواهی‌های SSL (SSL Certificates) {#ssl-certificates}

WP Engine به طور خودکار صدور و تمدید گواهی SSL برای همه دامنه‌هایی که از طریق این یکپارچه‌سازی اضافه می‌شوند را مدیریت می‌کند. هیچ تنظیمات اضافی لازم نیست.

## عیب‌یابی (Troubleshooting) {#troubleshooting}

### مشکلات اتصال API {#api-connection-issues}
- مطمئن شوید که پلاگین WP Engine فعال است و به درستی پیکربندی شده است.
- اگر خودتان کلید API را دستی تعریف کرده‌اید، بررسی کنید که درست باشد.
- اگر با مشکل در مورد API مواجه هستید، با پشتیبانی WP Engine تماس بگیرید.

### دامین اضافه نشده است {#domain-not-added}
- لاگ‌های Ultimate Multisite را برای هرگونه پیام خطا چک کنید.
- تأیید کنید که دامین قبلاً به WP Engine اضافه نشده باشد.
- مطمئن شوید که طرح (plan) WP Engine شما از تعداد دامنه‌هایی که اضافه می‌کنید پشتیبانی می‌کند.

### مشکلات زیردام‌ها {#subdomain-issues}
- اگر زیردامن‌ها کار نمی‌کنند، برای درخواست تنظیمات دامین وایلد با پشتیبانی WP Engine تماس بگیرید.
- بررسی کنید که تنظیمات DNS شما برای دامین اصلی و زیردامن‌ها به درستی پیکربندی شده باشند.
