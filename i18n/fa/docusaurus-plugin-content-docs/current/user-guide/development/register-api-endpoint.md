---
title: ثبت نقطه پایانی API
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# نقطه اتصال (endpoint) ثبت‌نام API در Ultimate Multisite

در این آموزش، یاد می‌گیرید چگونه از نقطه اتصال /register در API مربوط به Ultimate Multisite استفاده کنید تا فرآیند کامل ورود و ثبت‌نام مشتری جدید در شبکه‌تان را ایجاد کنید و این کار را با Zapier انجام دهید.

این endpoint از متد POST استفاده می‌کند و از طریق آدرس _**https://yoursite.com/wp-json/wu/v2/register**_ فراخوانی می‌شود. در این فراخوانی، ۴ فرآیند در شبکه شما اجرا خواهد شد:

  * یک کاربر جدید WordPress ایجاد می‌شود یا از طریق شناسه کاربر (user ID) شناسایی می‌شود.

  * یک مشتری جدید در Ultimate Multisite ایجاد می‌شود یا از طریق شناسه مشتری (customer ID) شناسایی می‌شود.

  * یک سایت جدید در شبکه WordPress ایجاد می‌شود.

  * در نهایت، یک عضویت (Membership) جدید در Ultimate Multisite ایجاد می‌شود.

برای این فرآیند، به اطلاعات احراز هویت API نیاز دارید. برای دریافت آن‌ها، به پنل مدیریت شبکه بروید، به مسیر **Ultimate Multisite > Settings** > **API & Webhooks** بروید و بخش API Settings را پیدا کنید.

![بخش تنظیمات API در Ultimate Multisite](/img/config/settings-api.png)  
گزینه **Enable API** را فعال کنید و اطلاعات احراز هویت API خود را دریافت کنید.

حالا بیایید endpoint را بررسی کنیم و سپس یک اکشن ثبت‌نام در Zapier بسازیم.

## پارامترهای بدنه endpoint

بیایید یک نگاه کلی به حداقل اطلاعاتی که باید به endpoint ارسال کنیم داشته باشیم. در انتهای این مقاله، فراخوانی کامل را خواهید یافت.

### مشتری (Customer)

این اطلاعات برای فرآیند ایجاد کاربر و مشتری Ultimate Multisite لازم است:

"customer_id" : integer

می‌توانید شناسه مشتری ایجاد شده در شبکه‌تان را ارسال کنید. اگر ارسال نشود، از اطلاعات زیر برای ایجاد مشتری جدید و کاربر جدید WordPress استفاده می‌شود. شناسه کاربر نیز می‌تواند به همین شکل مانند شناسه مشتری ارسال شود.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **عضویت (Membership)**

تنها اطلاعاتی که در این آبجکت نیاز داریم، وضعیت عضویت است.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **محصولات (Products)**

محصولات به صورت آرایه‌ای با یک یا چند شناسه محصول از شبکه شما ارسال می‌شوند. توجه داشته باشید که این endpoint محصول ایجاد نمی‌کند. برای درک بهتر endpoint ایجاد محصول، مستندات Ultimate Multisite را مطالعه کنید.

**"products" : [1,2],**

### پرداخت (Payment)

مانند عضویت، فقط به وضعیت نیاز داریم.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### سایت (Site)

و برای تکمیل بدنه درخواست، به آدرس و عنوان سایت نیاز داریم که هر دو داخل آبجکت Site قرار می‌گیرند.

**"site" : { "site_url" : "string", "site_title" : "string" }**

خروجی endpoint ثبت‌نام، آرایه‌ای حاوی اطلاعات عضویت تازه ایجاد شده خواهد بود.

## ایجاد یک اکشن در Zapier

با معرفی این endpoint جدید و قدرتمندتر برای ایجاد حساب کاربری، به یک اکشن جدید در Zapier نیز دسترسی خواهید داشت.

آیا می‌دانید چگونه از تمام امکاناتی که نسخه جدید Zapier ارائه می‌دهد استفاده کنید؟ اینجا بیشتر بیاموزید. (link?)

### ایجاد یک اکشن

برای نشان دادن بهتر نحوه استفاده از endpoint ثبت‌نام با Zapier، بیایید یک ادغام با Google Forms بسازیم. هر بار که این فرم پر شود و اطلاعات در صفحه پاسخ‌های فرم ذخیره شود، یک عضویت جدید در شبکه Ultimate Multisite ایجاد خواهد شد.

در Google Forms، فرمی با حداقل فیلدهای لازم برای ایجاد عضویت جدید در شبکه بسازید.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

حالا در Zapier، یک Zap جدید بسازید و فرم ایجاد شده در Google را از طریق صفحه‌گسترده‌ای که داده‌ها در آن ذخیره می‌شوند متصل کنید.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

تمام! فرم Google Forms با Zapier متصل شده و آماده ادغام با شبکه است. حالا به سراغ اکشنی می‌رویم که از Trigger فعال شده توسط Google Forms در هر بار پر شدن فرم، نتیجه می‌شود.

اپلیکیشن جدید Ultimate Multisite را پیدا کنید و آن را انتخاب کنید. برای این نوع Zap، گزینه Register را انتخاب کنید.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

پس از این مرحله اول، حسابی که با این Zap متصل می‌شود را انتخاب کنید.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

این حساس‌ترین بخش کل فرآیند است. باید فیلدهایی که از Google Forms آمده‌اند را با حداقل فیلدهای لازم برای endpoint ثبت‌نام (همان‌طور که در بخش قبلی این مقاله نشان داده شد) تطبیق دهیم.

در این مثال، فقط باید نام کاربری، ایمیل، رمز عبور، نام و آدرس وب‌سایت را پیکربندی کنیم. بقیه موارد از پیش تعیین شده‌اند تا همه عضویت‌های ایجاد شده از طریق این Google Forms از الگوی یکسانی برای محصول و وضعیت پیروی کنند.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

با تنظیم اطلاعات، به تست نهایی بروید. در صفحه آخر می‌توانید تمام فیلدهایی که به endpoint ارسال می‌شوند، اطلاعات مربوط به آن‌ها و فیلدهایی که خالی ارسال می‌شوند را ببینید.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Zap جدیدتان را تست کنید و باید با موفقیت تکمیل شود. اگر خطایی رخ داد، همه فیلدها را بررسی کنید و مطمئن شوید که درست ارسال می‌شوند. از آنجا که اطلاعات زیادی وجود دارد، ممکن است برخی موارد از قلم بیفتند.

### پارامترهای کامل endpoint

در اینجا فراخوانی کامل و تمام فیلدهایی که می‌توان ارسال کرد آورده شده است.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
