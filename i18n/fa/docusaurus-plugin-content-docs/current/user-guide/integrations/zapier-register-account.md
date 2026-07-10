---
title: ثبت Account از طریق Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# رویداد: ثبت یک Account از طریق Zapier {#event-register-an-account-via-zapier}

در مقاله [ادغام Ultimate Multisite با Zapier](zapier.md)، دربارهٔ نحوهٔ استفاده از Zapier برای انجام اقدام‌های مختلف در Ultimate Multisite بر اساس محرک‌ها و رویدادها صحبت کردیم. در این مقاله، نشان می‌دهیم چگونه می‌توانید برنامه‌های شخص ثالث را ادغام کنید. از Google Sheets به‌عنوان منبع داده استفاده می‌کنیم و اطلاعات را به Ultimate Multisite ارسال می‌کنیم تا یک Account ثبت شود.

پیش از اتصال Zapier، به **Ultimate Multisite > Settings > API & Webhooks** بروید و تأیید کنید API فعال است. وقتی Zapier اطلاعات ورود Account مربوط به Ultimate Multisite را درخواست کرد، API Key و API Secret را از این صفحه کپی کنید.

![تنظیمات API و Webhooks با گزینه‌های API Key، API Secret و Enable API](/img/admin/settings-api-webhooks.png)

ابتدا باید یک **Google Sheet** در Google Drive خود ایجاد کنید. مطمئن شوید هر ستون را به‌درستی تعریف کرده‌اید تا بعداً بتوانید داده‌ها را به‌آسانی نگاشت کنید.

پس از ایجاد یک Google sheet، می‌توانید وارد Account خود در Zapier شوید و ساخت یک zap را شروع کنید.

در زیر فیلد جست‌وجو برای **"App event"**، **"Google Sheets"** را انتخاب کنید


سپس برای فیلد "**Event** "، "**New spreadsheet row** " را انتخاب کنید و روی "**Continue** " بزنید

در گام بعدی از شما خواسته می‌شود یک **Google Account** را انتخاب کنید که **Google Sheet** در آن ذخیره شده است. بنابراین فقط مطمئن شوید که Account درست google مشخص شده باشد.


در بخش **"Set up trigger** "، باید google spreadsheet و worksheet مورد استفاده‌تان را که داده‌ها از آن می‌آیند انتخاب و مشخص کنید. کافی است آن‌ها را تکمیل کنید و روی "**Continue** " بزنید

بعد باید "**test your trigger** " را انجام دهید تا مطمئن شوید google sheet شما به‌درستی متصل شده است.

اگر آزمایش شما موفق باشد، باید نتیجه‌ای را ببینید که برخی مقادیر از spreadsheets شما را نشان می‌دهد. برای ادامه روی "**Continue** " کلیک کنید.

گام بعدی راه‌اندازی اقدام دوم است که یک Account را در Ultimate Multisite ایجاد یا ثبت می‌کند. در فیلد جست‌وجو، "**Ultimate Multisite(2.0.2)** " را انتخاب کنید


در فیلد "**Event** "، گزینهٔ "**Register an Account in Ultimate Multisite** " را انتخاب کنید، سپس روی دکمهٔ "**Continue** " کلیک کنید.

در بخش "**Set up an action** "، فیلدهای مختلفی را برای داده‌های مشتری، عضویت‌ها، محصولات و غیره خواهید دید. می‌توانید مقادیر موجود در google sheet خود را نگاشت کنید و آن‌ها را به فیلد مناسب اختصاص دهید؛ همان‌طور که در تصویر زیر نشان داده شده است.


پس از نگاشت مقادیر، می‌توانید اقدام را آزمایش کنید.
