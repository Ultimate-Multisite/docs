---
title: Wurin shiga da wuri
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# جداسازی چند مستأجری (Multi-Tenancy Isolation) {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 از جدا کردن پایگاه داده و سیستم فایل برای هر زیرمجموعه سایت جهت किरायेदारों مستقل پشتیبانی می‌کند. این کار باعث می‌شود داده‌های هر مستأجر از یکدیگر جدا بمانند در حالی که تنظیمات شبکه، صورت‌حساب (billing) و مدیریت حفظ شود.

## استراتژی جداسازی {#isolation-strategy}

برای مشتریانی که نیاز به جداسازی قوی‌تر داده‌ها، فضای ذخیره‌سازی سیستم فایل اختصاصی یا مرز میزبان مجزا دارند، از جدا سازی مستقل (sovereign isolation) استفاده کنید.

هر مستأجر مستقل باید داشته باشد:

- یک پایگاه داده مستأجر اختصاصی یا استراتژی پیشوند دیتابیس که توسط میزبان تأیید شده باشد.
- ریشه سیستم فایل مستأجر اختصاصی.
- یک ورودی ثبت مستأجر که سایت را به پایگاه داده، مسیر ریشه، نام دامنه و مدل جداسازی آن نگاشت کند.
- نتیجه تأیید مهاجرت قبل از اینکه مستأجر زنده در نظر گرفته شود.

## اتصال میزبان دیتابیس (Database host binding) {#database-host-binding}

نسخه 1.2.0 رفتار پیش‌فرض اتصال میزبان یک ماشین برای نصب‌های مستقل را تغییر می‌دهد. مقادیر مشابه ماشین مانند `localhost` نرمال می‌شوند تا Bedrock، FrankenPHP و نصب‌های وردپرس کانتینری بتوانند مجوزها را در برابر رشته میزبان MySQL که واقعاً می‌بیند، اعطا و تأیید کنند.

هنگام پیکربندی یک مستأجر مستقل:

1. میزبان دیتابیس را روی مقداری تنظیم کنید که توسط زمان اجرا (runtime) مستأجر مورد نیاز است.
2. برای نصب‌های سوکت محلی زمانی که میزبان انتظار اتصالات محلی را دارد، از `localhost` استفاده کنید.
3. فقط در صورتی از `127.0.0.1` یا نام میزبان سرویس استفاده کنید که سرور دیتابیس به آن میزبان امتیازات بدهد.
4. پس از تغییر اتصال میزبان، تأیید مهاجرت را اجرا کنید.

اگر گزارش‌های تأیید شکست در اعطای مجوزها نشان دادند، مجوزهای کاربر پایگاه داده مستأجر را با اتصال میزبان پیکربندی شده مقایسه کنید. کاربری که برای `user@localhost` مجاز شده است، با `user@127.0.0.1` یا `user@%` متفاوت است.

## ریشه سیستم فایل (Filesystem root) {#filesystem-root}

جذر مستأجر باید در طول راه‌اندازی مجدد و استقرار پایدار باشد. از مسیرهای نصب موقت دوری کنید. برای نصب‌های سبک Bedrock، مطمئن شوید که جذر مستأجر به ریشه وب وردپرس مورد انتظار بوت‌استرپ مستأجر اشاره می‌کند، نه فقط ریشه پروژه.

## ترتیب فراهم کردن (Provisioning order) {#provisioning-order}

برای مستأجران حاکمیتی جدید، از این ترتیب استفاده کنید:

۱. ایجاد ورودی ثبت مستأجر (tenant registry entry).
۲. ایجاد پایگاه داده و کاربر پایگاه داده مستأجر.
۳. بوت‌استرپ شمای مستأجر (tenant schema).
۴. فراهم کردن کاربران مستأجر.
۵. پیکربندی مسیرهای فایل سیستم مستأجر.
۶. اجرای تأیید مهاجرت (migration verification).
۷. تغییر مسیریابی یا DNS پس از اینکه تأیید با موفقیت انجام شد.

این ترتیب مانع این می‌شود که مستأجرانی که به طور ناقص ایزوله شده‌اند قبل از آماده شدن نویسنده پایگاه داده، کاربران و فایل سیستم ترافیک دریافت کنند.

## جریان‌های مدیریت مشتری حاکمیتی (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 وقتی حالت حاکمیتی فعال باشد، اقدامات مدیریت مشتری را روی سایت اصلی نگه می‌دارد. یک مستأجر همچنان می‌تواند به عنوان یک نصب وردپرس ایزوله اجرا شود، اما اقدامات مرتبط با مشتری که به صورت عملیاتی وابسته به صورت شبکه (مانند صورت‌حساب شبکه)، عضویت یا داده‌های حساب مشترک هستند، باید مشتری را به جای تلاش برای تکمیل عمل در زمان اجرای مستأجر، به سایت اصلی برگردانند.

جریان سایت اصلی شامل موارد زیر است:

- تغییرات و برنامه‌ریزی پرداخت (Checkout and plan changes).
- نمای کلی حساب و اقدامات پروفایل مشتری.
- به‌روزرسانی آدرس صورت‌حساب و صفحات مدیریت پرداخت.
- نماهای فاکتور و تاریخچه پرداخت.
- اقدامات مدیریت سایت مانند اضافه کردن سایت یا حذف یک سایت.
- تغییر قالب (Template switching).
- نگاشت دامنه (Domain mapping) و تغییرات دامنه اصلی.

Idan abokin ciniki ya fara wani daga cikin waɗannan ayyukan daga tenant na sirri (sovereign tenant), Ultimate Multisite zai gina URL na wajen gida (main-site) daidai kuma ya tsaro wurin tenant na asali a matsayin wuri da za a koma idan yana da kyau. Wannan yana ba abokan ciniki damar kammala aikin da aka sarrafa shi tare da rekododaki na gida, sannan su koma yanayin tenant ba tare da dubawa ko bayyana yanayin kuɗi ko kungiya (membership state) a cikin database na sirrin ba.

Ga ka'idojin amfani ga masu sarrafa (operators): ka riƙe hanyoyin shiga kuɗi (billing), asusun (account), kammala siyarwa (checkout), biliyan (invoice), mallakan tsari (template), da sarrafa domain a kan wajen gida (main site) don yanayi na sirrin. Dashboard na tenant za su iya haɗawa zuwa waɗannan hanyoyin, amma wajen gida yana kallon asalin gaskiya (source of truth) ga aikin.
