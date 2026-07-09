---
title: Tabbatar da Migogewa Mai Sauƙi
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# تأیید مهاجرت حاکمیتی (Sovereign Migration Verification) {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0 شامل دستورات تأیید WP-CLI برای مهاجرت‌های مستأجران حاکمیتی است. از این دستورات زمانی استفاده کنید که یک مهاجرت مستأجر، بازدید SSO یا نصب ایزوله به درستی کار نکند.

## دستوراتی که باید اجرا کنید {#commands-to-run}

تأیید را از نصب وردپرس شبکه اجرا کنید:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

از شناسه سایت (site ID) مستأجری که در حال مهاجرت آن هستید استفاده کنید. دستور اول بررسی می‌کند که آیا مستأجر دیگر به داده‌های قدیمی سمت شبکه وابسته نیست یا خیر. دستور دوم تأیید می‌کند که آیا کارهای پوش حاکمیتی می‌توانند پردازش و تخلیه شوند یا نه.

## خطاهای رایج {#common-failures}

### مجوزهای دیتابیس با میزبان (host) مطابقت ندارند {#database-grants-do-not-match-the-host}

اگر گزارش تأیید نشان‌دهنده خطاهای دسترسی (grant) یا کاربر نویسنده (writer-user) باشد، میزبان دیتابیس پیکربندی شده را بررسی کنید. `localhost`، `127.0.0.1` و نام سرویس کانتینر میزهای MySQL مجاز متفاوت هستند. سپس اتصال میزبان مستأجر یا مجوزهای دیتابیس را به‌روزرسانی کرده و دوباره تأیید را اجرا کنید.

### نصب‌های Bedrock یا محلی نمی‌توانند متصل شوند {#bedrock-or-local-installs-cannot-connect}

نصب‌های Bedrock و سوکت محلی ممکن است دیتابیس را `localhost` گزارش دهند در حالی که زمان اجرا از طریق یک آدرس نرمال شده (normalized address) متصل می‌شود. نسخه 1.2.0 رشته‌های میزبان یک ماشین را نرمال می‌کند، اما تنظیمات میزبان سفارشی همچنان می‌توانند با مجوزهای دیتابیس تداخل داشته باشند.

### صف پوش ناهمگام تخلیه نمی‌شود (Async push queue does not drain) {#async-push-queue-does-not-drain}

اگر `verify-sovereign-push` تمام نشد، Action Scheduler یا رانر ناهمگام پیکربندی شده را بررسی کنید. فقط پس از اطمینان از اینکه کارهای با شکست قابل تلاش مجدد یا دور انداختن هستند، آن‌ها را پاک کنید.

### تعداد کاربران مستأجر اشتباه است {#tenant-user-count-is-wrong}

مهاجرت باید کاربران را برای مستأجر حاکمیتی فراهم کند. اگر کاربر نصب مورد انتظار وجود نداشته باشد، قبل از تلاش مجدد برای SSO، مرحله فراهم کردن کاربر (user provisioning) را دوباره اجرا کنید.

### بازدید SSO رد می‌شود {#sso-visit-is-rejected}

Wannan shiri na wajen shiga kai da aka tsara ba shi da wasu bayani (stateless tenant autologin) yana buƙatar cewa domain ɗin tenant, origin pin, manufar token, nonce, da lokacin ƙarewa su yi daidai. Ka tabbata URL ɗin tenant ya dace kuma ka gwada shiga kai a cikin wuri gaba bayan an samar da SSO visit.

## Lokacin da za a sake gwada (When to retry) {#when-to-retry}

Ka sake tabbatarwa bayan kowane canji na tsarin (infrastructure change). Kada ka canza azurin sarrafa (production traffic), ka shafa data na asali, ko ka cire bayanan migogewa (migration credentials) har sai duk bincike na tabbatarwa ya wuce.
