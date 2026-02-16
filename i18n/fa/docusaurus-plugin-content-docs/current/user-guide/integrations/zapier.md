---
title: یکپارچه‌سازی Zapier
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# یکپارچه‌سازی Ultimate Multisite با Zapier

در یکی از مقالات، درباره [Webhooks](webhooks.md) صحبت کردیم و اینکه چطور می‌توان از آن‌ها برای یکپارچه‌سازی با برنامه‌های دیگر استفاده کرد.

استفاده از webhooks کمی پیچیده است چون نیاز به دانش پیشرفته در کدنویسی و دریافت payload دارد. استفاده از **Zapier** راهی است که می‌توانید این پیچیدگی را دور بزنید.

Zapier با بیش از ۵۰۰۰ برنامه یکپارچه شده و ارتباط بین برنامه‌های مختلف را آسان‌تر می‌کند.

می‌توانید **Trigger**هایی بسازید که وقتی رویدادهایی در شبکه شما اتفاق می‌افتد فعال شوند (مثلاً وقتی یک حساب کاربری ساخته می‌شود و رویداد account_create را فعال می‌کند) یا **Action**هایی در شبکه خود ایجاد کنید که به رویدادهای خارجی واکنش نشان دهند (مثلاً ساختن یک عضویت جدید در شبکه Ultimate Multisite شما).

این امکان وجود دارد چون **triggerها و actionهای Ultimate Multisite در Zapier** توسط [REST API](https://developer.ultimatemultisite.com/api/docs/) پشتیبانی می‌شوند.

## چطور شروع کنیم

ابتدا در لیست برنامه‌های Zapier به دنبال Ultimate Multisite بگردید. همچنین می‌توانید روی [این لینک](https://zapier.com/apps/wp-ultimo/integrations) کلیک کنید.

به داشبورد خود بروید و دکمه **+** **Create Zap** را در نوار کناری سمت چپ بزنید تا یک Zap جدید بسازید.

![داشبورد Zapier با دکمه Create Zap](/img/admin/webhooks-list.png)

به صفحه ساخت Zap هدایت خواهید شد.

در کادر جستجو "wp ultimo" را تایپ کنید. روی گزینه نسخه **Beta** کلیک کنید.

![جستجوی WP Ultimo در لیست برنامه‌های Zapier](/img/admin/webhooks-list.png)

بعد از انتخاب برنامه ما، رویداد موجود را انتخاب کنید: **New Ultimate Multisite Event**.

![انتخاب trigger رویداد New Ultimate Multisite Event](/img/admin/webhooks-list.png)

حالا باید به Zapier دسترسی به **شبکه خود** را بدهیم. با کلیک روی **Sign in** پنجره جدیدی باز می‌شود که **اطلاعات API** را می‌خواهد.

![درخواست Zapier برای ورود و اطلاعات API](/img/admin/webhooks-list.png)

به پنل مدیریت شبکه خود بروید و به **Ultimate Multisite > Settings** > **API & Webhooks** بروید و بخش API Settings را پیدا کنید.

گزینه **Enable API** را فعال کنید چون برای کار کردن این اتصال لازم است.

![تنظیمات API با گزینه Enable API در Ultimate Multisite](/img/admin/webhooks-list.png)

از آیکون **Copy to Clipboard** در فیلدهای API Key و API Secret استفاده کنید و آن مقادیر را در صفحه یکپارچه‌سازی paste کنید.

در فیلد URL، آدرس کامل شبکه خود را وارد کنید، شامل پروتکل (HTTP یا HTTPS).

![صفحه یکپارچه‌سازی Zapier با فیلدهای API Key، Secret و URL](/img/admin/webhooks-list.png)

روی دکمه **Yes, Continue** کلیک کنید تا به مرحله بعد بروید. اگر همه چیز درست پیش رفت، حساب متصل جدید خود را خواهید دید! روی **Continue** کلیک کنید تا یک trigger جدید بسازید.

## چطور یک Trigger جدید بسازیم

حالا که حساب شما متصل است، می‌توانید رویدادهای موجود را ببینید. برای این آموزش رویداد **payment_received** را انتخاب می‌کنیم.

![انتخاب رویداد payment_received در trigger Zapier](/img/admin/webhooks-list.png)

وقتی رویداد انتخاب شد و روی **continue** کلیک کردید، یک **مرحله تست** ظاهر می‌شود.

![مرحله تست Zapier برای trigger](/img/admin/webhooks-list.png)

در این مرحله، Zapier تست می‌کند که آیا Zap شما می‌تواند **payload مخصوص آن رویداد را دریافت کند**. در رویدادهای آینده از همین نوع، اطلاعات با همین ساختار ارسال خواهد شد.

![تست trigger Zapier با موفقیت کامل شد و payload را نشان می‌دهد](/img/admin/webhooks-list.png)

در آموزش ما تست **با موفقیت کامل شد** و اطلاعات نمونه payload را برگرداند. این اطلاعات نمونه برای راهنمایی ما در ساختن actionها مفید خواهد بود. trigger شما حالا ساخته شده و آماده اتصال به برنامه‌های دیگر است.

## چطور Action بسازیم

Actionها از اطلاعات triggerهای دیگر برای ساختن ورودی‌های جدید در شبکه شما استفاده می‌کنند.

در **مرحله ساختن action** گزینه **Beta** مربوط به Ultimate Multisite و **Create Items on Ultimate Multisite** را انتخاب کنید.

![ساختن action با Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

در مرحله بعد یا احراز هویت جدید می‌سازید، مثل کاری که در **چطور شروع کنیم** انجام دادیم، یا یک احراز هویت قبلی را انتخاب می‌کنید. در این آموزش همان احراز هویتی که قبلاً ساختیم را انتخاب می‌کنیم.

![انتخاب احراز هویت برای action در Zapier](/img/admin/webhooks-list.png)

### تنظیم Action

این **مرحله اصلی action** است و اینجا کمی متفاوت است. اولین اطلاعاتی که انتخاب می‌کنید **Item** است. Item همان **مدل اطلاعاتی** شبکه شماست مثل **Customers، Payments، Sites، Emails** و موارد دیگر.

![انتخاب نوع Item برای action در Zapier](/img/admin/webhooks-list.png)

وقتی یک item انتخاب می‌کنید، فرم **بازچینی می‌شود تا فیلدهای اجباری و اختیاری** آن item را نشان دهد.

مثلاً وقتی item **Customer** را انتخاب می‌کنید، فیلدهای فرم همه چیزهایی که برای ساختن یک Customer جدید در شبکه لازم است را نشان می‌دهد.

![فیلدهای item مشتری در تنظیم action Zapier](/img/admin/webhooks-list.png)

بعد از پر کردن همه فیلدهای **اجباری** و کلیک روی continue، صفحه آخر فیلدهای پر شده و فیلدهایی که خالی مانده‌اند را نشان می‌دهد.

![تست action Zapier که فیلدهای پر و خالی را نشان می‌دهد](/img/admin/webhooks-list.png)

به محض اینکه تست شما کامل و موفق شد، action شما پیکربندی شده است. همچنین مهم است که در شبکه خود بررسی کنید آیا item با تست action شما ساخته شده یا نه.
