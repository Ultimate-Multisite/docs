---
title: Hükümdar Geçişini Tasdiqlama
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# حاکمیتی انتقال تأیید (Sovereign Migration Verification)

Ultimate Multisite: Multi-Tenancy 1.2.0 شامل دستورات تأیید WP-CLI برای مهاجرت‌های مستأجر حاکمیتی است. وقتی یک مهاجرت مستأجر، بازدید SSO یا نصب ایزوله به درستی کار نمی‌کند، از این دستورات استفاده کنید.

## دستوراتی که باید اجرا کنید {#commands-to-run}

تأیید را از نصب وردپرس شبکه انجام دهید:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

از شناسه سایت (site ID) مستأجری که در حال مهاجرت آن هستید استفاده کنید. دستور اول بررسی می‌کند که آیا مستأجر دیگر به داده‌های قدیمی سمت شبکه وابسته نیست یا نه. دستور دوم تأیید می‌کند که آیا کارهای push حاکمیتی می‌توانند پردازش و تخلیه شوند یا خیر.

## خطاهای رایج {#common-failures}

### مجوزهای دیتابیس با میزبان (host) مطابقت ندارند {#database-grants-do-not-match-the-host}

اگر گزارش تأیید نشان‌دهنده خطای دسترسی (grant) یا کاربر نویسنده (writer-user) باشد، میزبان دیتابیس پیکربندی شده را بررسی کنید. `localhost`، `127.0.0.1` و نام سرویس کانتینر میزهای MySQL مجاز متفاوت هستند. سپس اتصال میزبان مستأجر یا مجوزهای دیتابیس را به‌روزرسانی کرده و دوباره تأیید را اجرا کنید.

### نصب‌های Bedrock یا محلی نمی‌توانند متصل شوند {#bedrock-or-local-installs-cannot-connect}

نصب‌های Bedrock و سوکت محلی ممکن است دیتابیس را `localhost` گزارش کنند در حالی که زمان اجرا از طریق یک آدرس نرمال شده (normalized address) متصل می‌شود. نسخه 1.2.0 رشته‌های میزبان یک ماشین را نرمال می‌کند، اما تنظیمات میزبان سفارشی همچنان ممکن است با مجوزهای دیتابیس تداخل داشته باشد.

### صف push ناهمزمان تخلیه نمی‌شود (Async push queue does not drain) {#async-push-queue-does-not-drain}

اگر `verify-sovereign-push` تمام نشد، Action Scheduler یا رانر ناهمزمان پیکربندی شده را بررسی کنید. فقط پس از اطمینان از اینکه کارهای با شکست قابل تلاش مجدد یا دور انداختن هستند، کارها را پاک کنید.

### تعداد کاربران مستأجر اشتباه است {#tenant-user-count-is-wrong}

مهاجرت باید کاربران را برای مستأجر حاکمیتی فراهم کند. اگر کاربر نصب مورد انتظار وجود نداشته باشد، قبل از تلاش مجدد SSO، مرحله فراهم کردن کاربر (user provisioning) را دوباره اجرا کنید.

### بازدید SSO رد می‌شود {#sso-visit-is-rejected}

Stateless kiray (tenant) avtomatik giriş uchun kiray domenini, origin pinini, token maqsadini, nonce va muddati bir-biriga mos kelishi kerak. Kiray URL'ining to'g'ri ekanligini tasdiqlang va SSO tashrifini yaratganidan darhol kirishga urinib ko'ring.

## Qachon qayta urinish kerak {#when-to-retry}

Har bir infratuzilma o'zgarishidan keyin tekshiruvni qayta urinib ko'ring. Barcha tekshiruvlar muvaffaqiyatli yakunlanguncha ishlab chiqarish trafikiga o'tmaslik, manba ma'lumotlarini o'chirmaslik yoki migratsiya kredensiallarini olib tashlamaslik kerak.
