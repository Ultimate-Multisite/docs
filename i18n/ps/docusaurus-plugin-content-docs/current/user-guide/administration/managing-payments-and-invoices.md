---
title: د بیاول او فاکټور مدیریت
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# پرداخت‌ها و فاکتورها را مدیریت کردن

## تنظیمات پرداخت

قبل از اینکه شروع به دریافت پول کنید، باید تنظیمات مربوط به پرداخت‌ها را پیکربندی کنید. به **Ultimate Multisite → Settings** بروید و روی تب **Payment** کلیک کنید.

![Payment settings tab](/img/admin/settings-payments-top.png)

این یک نمای کامل از صفحه تنظیمات پرداخت است:

![Payment settings full page](/img/admin/settings-payments-full.png)

### گزینه‌های عمومی پرداخت

در تنظیمات عمومی می‌توانید موارد زیر را پیکربندی کنید:

- **Currency** — ارز پیش‌فرض که برای تراکنش‌ها استفاده می‌شود
- **Currency Position** — نماد ارز کجا نمایش داده شود (قبل از مبلغ/بعد از مبلغ)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### دروازه‌های پرداخت (Payment Gateways)

Ultimate Multisite از چندین دروازه پرداخت پشتیبانی می‌کند. شما می‌توانید هر کدام را از تب تنظیمات پرداخت فعال و پیکربندی کنید.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

در دسترس هستند:

- **Stripe** — پرداخت‌های کارت اعتباری از طریق Stripe
- **PayPal** — پرداخت‌های PayPal
- **Manual** — برای پردازش پرداخت‌های آفلاین یا سفارشی

هر دروازه تنظیمات مخصوص به خود را دارد که در آن شما API keys و سایر تنظیمات را وارد می‌کنید.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### حالت Sandbox (Sandbox Mode)

شما می‌توانید **Sandbox Mode** را فعال کنید تا قبل از اینکه سیستم را به صورت رسمی اجرا کنید، ادغام پرداخت خود را آزمایش کنید. وقتی حالت sandbox فعال باشد، هیچ هزینه واقعی انجام نخواهد شد.

## مشاهده پرداخت‌ها

برای دیدن تمام تراکنش‌ها در کل شبکه خود، به صفحه **Payments** زیر Ultimate Multisite بروید.

![Payments list](/img/admin/payments-list.png)

شما می‌توانید پرداخت‌ها را بر اساس وضعیت (تکمیل شده، در انتظار، ناموفق، بازپرداخت شده) فیلتر کرده و برای تراکنش‌های خاص جستجو کنید.

د پیسې باندې کلیک وکړئ ترڅو د پوره تفصیلات وګورئ، چې پکې سطرو برخې (line items)، تړلی MEMBERSHIP، کارندوی معلومات او فیس دروازې (payment gateway) dati هم شامل دي.

## فاکتورونه (Invoices)

Ultimate Multisite کولی شي د پیسې لپاره خودکار فاکتورونه جوړ کړي. تاسو کولی شئ د فاکټور قالب (invoice template) او نمبر کولو ډول له Payment settings څخه تنظیم کړئ.

د فاکټور تنظیمولو غوره لارې پینتي موارد شامل دي:

- **کمپنی نوم او پته** چې په فاکټورو کې ښودل کیږي
- **فاکټور نمبر کولو** ډول او ترتیب
- **لوگو** چې د فاکټور سرلیک (header) मा ښودل کیږي
- **خصوصي پای تیکست (Custom footer text)** د شرایطو، یادښتونو یا قانوني معلومات لپاره

د فاکټور قالب تنظیمولو لپاره، ته ورسره شئ: **Ultimate Multisite → Settings → Payment** او د فاکټور اړوند تنظیمات وګورئ.
