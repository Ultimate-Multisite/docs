---
title: WPMU DEV 통합
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# همکارۍ د WPMU DEV سره {#wpmu-dev-integration}

## پرمختنه (Overview) {#overview}
WPMU DEV یو جامع WordPress پلتفارم دی چې د WordPress ویب سائټونه لپاره هاستۍ، pluginونه او خدمات وړاندې کوي. دا همکارۍ د Ultimate Multisite او WPMU DEV هاستۍ ترمنځ د دامین (domain) اتوماتیک سنسینګ او SSL سندات مدیریت اجازه ورکوي.

## خوندګې (Features) {#features}
- اتوماتیک د domain سنسینګ
- SSL سنداتو مدیریت
- لوړتیاولیدل شوي SSL سنداتو تایید کولو کوششونه

## اړتیاوې (Requirements) {#requirements}
دا همکارۍ اتوماتیک په ګوته کوي چې آیا تاسو WPMU DEV باندې هاستۍ کوئ او د درکار API کاروي. که تاسو WPMU DEV باندې هاستۍ کوئ، نو کومه اضافي تنظیم کولو پرتو نه دي اړتیا.

دا همکارۍ د `WPMUDEV_HOSTING_SITE_ID` ثابتې (constant) وجود ته چکوي، چې کله تاسو WPMU DEV باندې هاستۍ کوئ، نو دا اتوماتیک تعریف کیږي.

## تنظیم کولو لارښوونې (Setup Instructions) {#setup-instructions}

### ۱. WPMU DEV هاستۍ تایید کړئ (Verify WPMU DEV Hosting) {#1-verify-wpmu-dev-hosting}

که تاسو WPMU DEV باندې هاستۍ کوئ، نو اړین ثابتې تر اوسه تعریف شوي ویل باید تایید کړئ:

۱. `WPMUDEV_HOSTING_SITE_ID` ثابتې په خپل محیط کې تعریف شوې ده که نه؟
۲. ستاسو د API ورسره فعال WPMU DEV सदस्यता دی که نه؟

### ۲. همکارۍ فعال کړئ (Enable the Integration) {#2-enable-the-integration}

۱. په خپل WordPress admin کې، لاړ شئ: Ultimate Multisite > Settings
۲. ته "Domain Mapping" ټب ته لاړ شئ
۳. तलतिर "Host Integrations" ته سکرول وکړئ
۴. WPMU DEV همکارۍ فعال کړئ
۵. "Save Changes" باندې کلیک وکړئ

## کار څنګه کوي (How It Works) {#how-it-works}

### Domain Syncing (د domain سنسینګ) {#domain-syncing}

کله چې د Ultimate Multisite کې یو domain مپ کیږي:

۱. دا همکارۍ WPMU DEV API څخه کار کوي ترڅو domain ته ستاسو هاستۍ حساب کې اضافه کړي
۲. دا اتوماتیک په www نسخه باندې पनि domain اضافهوي
۳. WPMU DEV domain تنظیم او SSL سندات ورکولو کارونه اداره کوي

### SSL Certificate Management (د SSL سنداتو مدیریت) {#ssl-certificate-management}

د یکپارچه‌سازی دلیلی است که تعداد تلاش‌های تأیید گواهی SSL را برای میزبانی WPMU DEV افزایش می‌دهد، زیرا ممکن است صدور و نصب گواهی‌های SSL کمی طول بکشد. به طور پیش‌فرض، این سیستم تا ۱۰ بار برای تأیید گواهی SSL تلاش می‌کند، در مقایسه با ۵ بار استاندارد.

## نکات مهم {#important-notes}

### حذف دامنه {#domain-removal}

در حال حاضر، API مربوط به WPMU DEV راهی برای حذف دامنه‌ها ارائه نمی‌دهد. وقتی یک نگاشت دامنه (domain mapping) در Ultimate Multisite حذف می‌شود، آن دامنه همچنان در حساب میزبانی WPMU DEV شما باقی می‌ماند. اگر لازم باشد، باید آن را از داشبورد میزبانی WPMU DEV به صورت دستی حذف کنید.

### احراز هویت API {#api-authentication}

این یکپارچه‌سازی از کلید API WPMU DEV استفاده می‌کند که در پایگاه داده وردپرس به عنوان گزینه `wpmudev_apikey` ذخیره شده است. این تنظیم به طور خودکار زمانی انجام می‌شود که سایت خود را به WPMU DEV متصل می‌کنید.

## عیب‌یابی {#troubleshooting}

### مشکلات اتصال API {#api-connection-issues}
- بررسی کنید که سایت شما به درستی به WPMU DEV متصل شده باشد.
- مطمئن شوید که گزینه `wpmudev_apikey` در پایگاه داده وردپرس تنظیم شده است.
- اطمینان حاصل کنید که عضویت WPMU DEV شما فعال است.

### مشکلات گواهی SSL {#ssl-certificate-issues}
- ممکن است WPMU DEV برای صدور گواهی‌های SSL کمی طول بکشد (معمولاً ۵ تا ۱۵ دقیقه).
- این یکپارچه‌سازی طوری تنظیم شده که تا ۱۰ بار برای بررسی گواهی‌های SSL تلاش می‌کند.
- اگر پس از چندین تلاش همچنان گواهی‌های SSL صادر نمی‌شوند، با پشتیبانی WPMU DEV تماس بگیرید.

### اضافه نشدن دامنه {#domain-not-added}
- لاگ‌های Ultimate Multisite را برای هرگونه پیام خطا بررسی کنید.
- تأیید کنید که دامنه قبلاً به WPMU DEV اضافه نشده باشد.
- مطمئن شوید که طرح میزبانی WPMU DEV شما از تعداد دامنه‌هایی که اضافه می‌کنید پشتیبانی می‌کند.
