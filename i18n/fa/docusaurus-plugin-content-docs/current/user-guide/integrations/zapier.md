---
title: یکپارچه‌سازی Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# یکپارچه‌سازی Ultimate Multisite با Zapier

در یکی از مقاله‌ها، درباره [Webhooks](webhooks.md) صحبت کردیم و اینکه چگونه می‌توان از آن‌ها برای یکپارچه‌سازی با برنامه‌های شخص ثالث استفاده کرد.

استفاده از webhooks کمی پیچیده است، چون به دانش پیشرفته در کدنویسی و دریافت payloadها نیاز دارد. استفاده از **Zapier** راهی است که می‌توانید با آن این پیچیدگی را دور بزنید.

Zapier با بیش از ۵۰۰۰+ برنامه یکپارچه‌سازی دارد که ارتباط بین برنامه‌های مختلف را آسان‌تر می‌کند.

می‌توانید **Triggers** ایجاد کنید که وقتی رویدادهایی در شبکه شما رخ می‌دهند فعال شوند (مثلاً یک Account ایجاد می‌شود و رویداد account_create را فعال می‌کند) یا **Actions** را در شبکه خود ایجاد کنید که به رویدادهای خارجی واکنش نشان دهند (مثلاً یک عضویت Account جدید در شبکه Ultimate Multisite خود ایجاد کنید).

این امکان وجود دارد چون **triggers مربوط به Ultimate Multisite Zapier** و actions توسط [REST API](https://developer.ultimatemultisite.com/api/docs/) پشتیبانی می‌شوند.

## چگونه شروع کنیم

ابتدا، Ultimate Multisite را در فهرست برنامه‌های Zapier جست‌وجو کنید. همچنین می‌توانید روی [این لینک](https://zapier.com/apps/wp-ultimo/integrations) کلیک کنید.

به Dashboard خود بروید و در نوار کناری چپ دکمه **+** **Create Zap** را فشار دهید تا یک Zap جدید راه‌اندازی کنید.

![Dashboard مربوط به Zapier با دکمه Create Zap](/img/admin/webhooks-list.png)

به صفحه ایجاد Zap هدایت خواهید شد.

در کادر جست‌وجو «wp ultimo» را تایپ کنید. برای انتخاب گزینه نسخه **Beta** کلیک کنید.

![جست‌وجوی WP Ultimo در فهرست برنامه‌های Zapier](/img/admin/webhooks-list.png)

پس از انتخاب برنامه ما، رویداد موجود را انتخاب کنید: **New Ultimate Multisite Event**.

![انتخاب trigger مربوط به New Ultimate Multisite Event](/img/admin/webhooks-list.png)

اکنون باید به Zapier دسترسی به **شبکه شما** بدهیم. کلیک روی **Sign in** یک پنجره جدید باز می‌کند که **اعتبارنامه‌های API** را درخواست می‌کند.

![درخواست Sign in در Zapier برای اعتبارنامه‌های API](/img/admin/webhooks-list.png)

به پنل مدیر شبکه خود بروید و به **Ultimate Multisite > Settings** > **API & Webhooks** بروید و بخش API Settings را پیدا کنید.

گزینه **Enable API** را انتخاب کنید، زیرا برای کار کردن این اتصال لازم است.

![تنظیمات API و Webhooks با گزینه‌های API Settings و Enable API](/img/admin/settings-api-webhooks.png)

از آیکون **Copy to Clipboard** در فیلدهای API Key و API Secret استفاده کنید و آن مقادیر را در صفحه یکپارچه‌سازی جای‌گذاری کنید.

در فیلد URL، نشانی کامل شبکه خود را، همراه با پروتکل (HTTP یا HTTPS)، وارد کنید.

![صفحه یکپارچه‌سازی Zapier با فیلدهای API Key، Secret و URL](/img/admin/webhooks-list.png)

روی دکمه **Yes, Continue** کلیک کنید تا به مرحله بعد بروید. اگر همه‌چیز درست کار کند، باید با Account متصل جدید خود روبه‌رو شوید! برای ایجاد یک trigger جدید روی **Continue** کلیک کنید.

## چگونه یک Trigger جدید ایجاد کنیم

اکنون که Account شما متصل شده است، می‌توانید رویدادهای موجود را ببینید. برای این آموزش، رویداد **payment_received** را انتخاب می‌کنیم.

![انتخاب رویداد payment_received در trigger مربوط به Zapier](/img/admin/webhooks-list.png)

پس از انتخاب رویداد و کلیک روی **continue**، یک **مرحله آزمایش** ظاهر خواهد شد.

![مرحله آزمایش Zapier برای trigger](/img/admin/webhooks-list.png)

در این مرحله، Zapier آزمایش می‌کند که آیا Zap شما می‌تواند **payload مشخص مربوط به آن رویداد را دریافت کند** یا نه. در رویدادهای آینده از همان نوع، اطلاعاتی با همین ساختار ارسال خواهد شد.

![آزمایش trigger در Zapier با payload با موفقیت کامل شد](/img/admin/webhooks-list.png)

در آموزش ما، آزمایش **با موفقیت کامل شد** و اطلاعات نمونه payload را برگرداند. این اطلاعات نمونه برای راهنمایی ما هنگام ایجاد actions مفید خواهد بود. trigger شما اکنون ایجاد شده و آماده اتصال به برنامه‌های دیگر است.

## چگونه Actions ایجاد کنیم

Actions از اطلاعات triggerهای دیگر استفاده می‌کنند تا ورودی‌های جدیدی در شبکه شما ایجاد کنند.

در **مرحله ایجاد یک action**، Ultimate Multisite **Beta** و گزینه **Create Items on Ultimate Multisite** را انتخاب خواهید کرد.

![ایجاد یک action با Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

در مرحله بعد یا authentication خود را ایجاد می‌کنید، درست مانند کاری که در **چگونه شروع کنیم** انجام دادیم، یا یک authentication ایجادشده را انتخاب می‌کنید. در این آموزش همان authentication که قبلاً ایجاد شده است را انتخاب می‌کنیم.

![انتخاب authentication برای action مربوط به Zapier](/img/admin/webhooks-list.png)

### راه‌اندازی Action

این **مرحله اصلی action** است و اینجا اوضاع کمی متفاوت است. اولین اطلاعاتی که انتخاب می‌کنید **Item** است. Item همان **مدل اطلاعاتی** شبکه شماست، مانند **Customers, Payments, Sites, Emails** و موارد دیگر.

![انتخاب نوع Item برای action مربوط به Zapier](/img/admin/webhooks-list.png)

هنگام انتخاب یک item، فرم **بازآرایی می‌شود تا فیلدهای ضروری و اختیاری** مربوط به item انتخاب‌شده را نمایش دهد.

برای مثال، هنگام انتخاب item **Customer**، فیلدهای فرم همه چیزهایی را می‌آورند که برای ایجاد یک Customer جدید در شبکه لازم است پر شوند.

![فیلدهای item مربوط به Customer در راه‌اندازی action مربوط به Zapier](/img/admin/webhooks-list.png)

پس از پر کردن همه فیلدهایی که به‌عنوان **required** مشخص شده‌اند و کلیک روی ادامه، یک صفحه نهایی فیلدهای پرشده و فیلدهایی را که خالی مانده‌اند به شما نشان می‌دهد.

![آزمایش action در Zapier که فیلدهای پرشده و پرنشده را نشان می‌دهد](/img/admin/webhooks-list.png)

به‌محض اینکه آزمایش شما کامل و موفق شود، action شما پیکربندی شده است. همچنین مهم است که در شبکه خود بررسی کنید آیا item با آزمایش action شما ایجاد شده است یا نه.
