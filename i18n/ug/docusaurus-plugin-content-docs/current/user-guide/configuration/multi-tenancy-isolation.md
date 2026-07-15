---
title: Çoklu Kiracılık İzolasyonu
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# چەندین دامنه ای مجزا بودن (Multi-Tenancy Isolation)

Ultimate Multisite: Multi-Tenancy 1.2.0 حالا برای خودمختار مشتریان (sovereign tenants) هم دیتابیس و فایل سیستم جداگانه فراهم می‌کنه. این کار باعث میشه داده‌های هر مشتری از هم جدا باشن، در حالی که تنظیمات شبکه، صورت‌حساب و مدیریت همچنان به صورت یکپارچه باقی بمونه.

## استراتژی جداسازی (Isolation strategy) {#isolation-strategy}

برای اون مشتری‌هایی که نیاز به جداسازی قوی‌تر داده‌ها، فضای ذخیره‌سازی فایل سیستم اختصاصی یا مرز میزبان جداگانه دارن، از حالت ایزولاسیون خودمختار استفاده کنید.

هر مشتری خودمختار باید داشته باشه:

- یک دیتابیس اختصاصی برای آن مشتری یا استراتژی پیشوند دیتابیس که توسط میزبان تأیید شده باشه.
- ریشه فایل سیستم (filesystem root) مخصوص خودِ مشتری.
- یک ورودی در رجیستری مشتری که سایت رو به دیتابیس، مسیر ریشه، نام دامنه و مدل ایزولاسیونش متصل کنه.
- قبل از اینکه مشتری فعال بشه، باید نتیجه تأیید مهاجرت (migration verification result) رو داشته باشید.

## اتصال میزبان دیتابیس (Database host binding) {#database-host-binding}

نسخه 1.2.0 رفتار پیش‌فرض اتصال میزبان یکسان روی یک ماشین برای نصب‌های خودمختار رو تغییر داده. مقادیر مشابه مثل `localhost` نرمال می‌شن تا نصب‌هایی مثل Bedrock، FrankenPHP و WordPress کانتینری بتونن مجوزها رو بر اساس رشته میزبان (host string) که MySQL واقعاً می‌بینه، بده و تأیید کنن.

وقتی در حال تنظیم یک مشتری خودمختار هستید:

1. میزبان دیتابیس را روی مقداری که توسط زمان اجرای مشتری مورد نیاز است، قرار دهید.
2. برای نصب‌های محلی (local socket installs) وقتی میزبان انتظار اتصالات محلی رو داره، از `localhost` استفاده کنید.
3. فقط زمانی از `127.0.0.1` یا نام هاست سرویس استفاده کنید که سرور دیتابیس به اون میزبان امتیازدهی بده.
4. بعد از تغییر اتصال میزبان، تأیید مهاجرت (migration verification) رو اجرا کنید.

اگر گزارش‌ها نشان دادند مجوزها رد شده‌اند، مجوزهای کاربر دیتابیس مشتری را با تنظیمات اتصال میزبان مقایسه کنید. کاربری که برای `user@localhost` مجاز شده، با `user@127.0.0.1` یا `user@%` فرق داره.

## ریشه فایل سیستم (Filesystem root) {#filesystem-root}

مستاجر روت (tenant root) ری‌استارت و دپلوی‌های در طول زمان باید پایدار باشد. از مسیرهای Mount موقت پرهیز کنید. برای نصب‌هایی به سبک Bedrock، مطمئن شوید که ریشه مستاجر به ریشه وب وردپرس مورد انتظار بوت استرپ مستاجر اشاره می‌کند، نه فقط ریشه پروژه.

## ترتیب فراهم کردن (Provisioning order) {#provisioning-order}

برای مستاجرهای حاکمیتی جدید، از این ترتیب استفاده کنید:

۱. ایجاد ورودی رجیستری مستاجر (tenant registry entry).
۲. ایجاد دیتابیس و کاربر دیتابیس مستاجر.
۳. بوت استرپ اسکیما (schema) مستاجر.
۴. فراهم کردن کاربران مستاجر.
۵. پیکربندی مسیرهای فایل سیستم مستاجر.
۶. اجرای تأیید مهاجرت (migration verification).
۷. تغییر مسیریابی یا DNS پس از موفقیت در تأیید.

این ترتیب مانع این می‌شود که مستاجرهای نیمه‌منزوی قبل از آماده شدن نویسنده دیتابیس، کاربران و فایل سیستم ترافیک دریافت کنند.

## جریان‌های مدیریت مشتری حاکمیتی (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 وقتی حالت حاکمیتی فعال باشد، اقدامات مدیریت مشتری را روی سایت اصلی نگه می‌دارد. یک مستاجر همچنان می‌تواند به عنوان یک نصب وردپرس ایزوله اجرا شود، اما اقدامات مرتبط با مشتری که به صورت عملیاتی وابسته به صورت شبکه‌ای (network billing)، عضویت یا داده‌های حساب مشترک هستند، باید مشتری را به جای تلاش برای تکمیل عمل در زمان اجرای مستاجر، به سایت اصلی برگردانند.

جریان سایت اصلی شامل موارد زیر است:

- پرداخت و تغییر طرح‌ها (Checkout and plan changes).
- نمای کلی حساب و اقدامات پروفایل مشتری (Account overview and customer profile actions).
- به‌روزرسانی آدرس صورت‌حساب و صفحات مدیریت پرداخت (Billing address updates and payment-management screens).
- نمای فاکتور و تاریخچه پرداخت (Invoice and payment-history views).
- اقدامات مدیریت سایت مانند اضافه کردن سایت یا حذف یک سایت (Site management actions such as adding sites or deleting a site).
- تغییر قالب (Template switching).
- نگاشت دامنه و تغییر دامنه‌های اصلی (Domain mapping and primary-domain changes).

Müşteri bu eylemlerden birini egemen kiracıdan (sovereign tenant) başlattığında, Ultimate Multisite ilgili ana site URL'sini oluşturur ve güvenli olduğu durumlarda kaynak kiracıyı geri dönülecek hedef olarak saklar. Bu sayede müşteriler yönetilen işlemi ağ kayıtları üzerinde tamamlayabilirler ve faturalandırma veya üyelik durumunu egemen veritabanında tekrar çoğaltmadan kiracı bağlamına geri dönebilirler.

Operatörler için pratik kural şudur: egemen ağlar için faturalandırma, hesap, ödeme (checkout), fatura, şablon ve alan adı yönetimi sayfalarını ana sitede açık tutun. Kiracı panelleri bu sayfalara bağlantı verebilir, ancak ana site işlemin kaynağı olarak kalır.
