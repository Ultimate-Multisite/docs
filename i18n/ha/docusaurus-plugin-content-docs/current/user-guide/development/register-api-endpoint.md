---
title: Raddade ƙaramin API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# کۆتایلی API endpoint ی تۆڕی گشتی (Multisite) {#the-ultimate-multisite-register-api-endpoint}

دواندن این آموزش یاد می‌گیری که چطور از Ultimate Multisite /register API endpoint برای ساخت کل فرآیند پذیرش یک مشتری جدید در شبکه خود استفاده کنید و چطور این کار را با Zapier انجام دهید.

این endpoint از متد POST استفاده می‌کند و با آدرس _**https://yoursite.com/wp-json/wu/v2/register**_ فراخوانی می‌شود. در این فراخوانی، ۴ فرآیند در شبکه شما اجرا خواهند شد:

  * یک کاربر جدید وردپرس یا شناسایی آن از طریق شناسه کاربر ایجاد می‌شود.

  * یک مشتری جدید در Ultimate Multisite یا شناسایی او از طریق شناسه مشتری ایجاد می‌شود.

  * یک سایت جدید در شبکه وردپرس ساخته می‌شود.

  * در نهایت، یک عضویت جدید در Ultimate Multisite ایجاد می‌شود.

برای این فرآیند، شما به اعتبارنامه‌های API خود نیاز خواهید داشت. برای دریافت آن‌ها، به پنل مدیریت شبکه خود بروید، به **Ultimate Multisite > Settings** > **API & Webhooks,** بروید و به دنبال بخش تنظیمات API بگردید.

![بخش تنظیمات API در Ultimate Multisite](/img/config/settings-api.png)

این یک نمای کامل از صفحه تنظیمات API است:

![صفحه کامل تنظیمات API](/img/config/settings-api-full.png)

گزینه **Enable API** را انتخاب کرده و اعتبارنامه‌های API خود را دریافت کنید.

حالا، بیایید به endpoint نگاه کنیم و سپس یک اقدام ثبت‌نام در Zapier ایجاد کنیم.

## پارامترهای بدنه endpoint {#endpoint-body-parameters}

بیایید مروری بر حداقل اطلاعاتی که باید برای ارسال به endpoint داشته باشیم داشته باشیم. در پایان این مقاله، فراخوانی کامل را خواهید یافت.

### مشتری (Customer) {#customer}

این اطلاعات لازم است تا فرآیند ساخت کاربر و مشتری Ultimate Multisite انجام شود:

"customer_id" : integer

شمارش شناسه مشتری که در شبکه شما ایجاد شده را می‌توانید ارسال کنید. اگر ارسال نشود، اطلاعات زیر برای ایجاد یک مشتری جدید و یک کاربر وردپرس جدید استفاده خواهد شد. شناسه کاربر نیز می‌تواند به همان شیوه‌ای مانند شناسه مشتری ارسال شود.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **عضویت** {#membership}

تنها اطلاعاتی که ما در این شیء نیاز داریم، وضعیت عضویت است.

"membership" { "status" : "string", // یکی از "pending"، "active"، "trialing"، "expired"، "on-hold"، "canceled" }

### **محصولات** {#products}

برای محصولات یک آرایه با ۱ یا بیشتر شناسه محصول از شبکه شما داده می‌شود. مراقب باشید، این نقطه پایانی (endpoint) محصولات را ایجاد نمی‌کند. برای درک بهتر نقطه پایانی ایجاد محصول، مستندات Ultimate Multisite را بررسی کنید.

**"products" : [1,2],**

### **پرداخت** {#payment}

همانطور که با عضویت هست، ما فقط به وضعیت نیاز داریم.

**"payment" { "status" : "string", // یکی از "pending"، "completed"، "refunded"، "partially-refunded"، "partially-paid"، "failed"، "canceled" }**

### **سایت** {#site}

و برای بستن بدنه، ما به آدرس سایت و عنوان آن نیاز داریم که هر دو در شیء Site قرار دارند.

**"site" : { "site_url" : "string", "site_title" : "string" }**

بازگشت نقطه پایانی ثبت‌نام یک آرایه با اطلاعات عضویت جدید ایجاد شده خواهد بود.

## ایجاد یک اکشن در Zapier {#creating-an-action-in-zapier}

با معرفی این نقطه پایانی جدید و قوی‌تر برای ایجاد حساب، شما به یک اکشن جدید در Zapier نیز دسترسی خواهید داشت.

آیا می‌دانید چگونه از همه چیزهایی که نسخه جدید Zapier ارائه می‌دهد استفاده کرده و لذت ببرید؟ اینجا بیشتر بیاموزید. (لینک؟)

### ایجاد یک اکشن {#creating-an-action}

Donawa don taimaka yadda za a yi amfani da registration endpoint tare da Zapier, muna ƙirƙirar wata haɗi tare da Google Forms. Duk lokacin da wannan form ɗin aka cika kuma bayanai an ajiye a cikin sassa da aka tsara ga amsa, wani sabon shawarwa zai ƙunshi duk cikin yanayin Ultimate Multisite.

A Google Forms, ka yi wata form tare da mafi yawan sassa da ake bukata don ƙirƙirar sabon shawarwa a cikin shaharar (network).

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Yanzu a Zapier, ka ƙirƙira wani Zap kuma ka haɗa wannan form ɗin da aka ƙirƙira ta hanyar spreadsheet inda bayanai ake ajiye.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

An gama! Form ɗin Google Forms an haɗa da Zapier kuma yana shirye don haɗi tare da shaharar. Yanzu mu tattauna Ayyukan (Action) da za a samu daga Wajen Haɗi (Trigger) da Google Forms ke gudanarwa duk lokacin da aka cika shi.

Ka nemo wani app na Ultimate Multisite kuma ka zaɓi shi. Don wannan nau'in Zap, za ka zaɓi zaɓin Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Bayan wannan mataki na farko, za ka zaɓi asusun da za a haɗa tare da wannan Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Wannan shi ne mafi muhimmancin wajen dukkan tsarin. Dole mu yi daidai da sassa da suka zo daga Google Forms da mafi yawan sassa da ake bukata don registration endpoint, kamar yadda aka nuna a wani sashi na wannan makala.

A wannan misalin, muna buƙatar tsara username, email, password, sunan (name) da URL ɗin gidan kawai. Ba su ba shi dukkan abubuwan da suka shafi sauran sassa saboda an tsara su don duk shawarwarin da aka samar a Google Forms ya bi wannan yanayin wani kayayyaki da matsayi.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Idan kun ku shirya, idan ka yi wannan bayanan da aka tsara, tabbas ka shiga gwajin da ke farin ciki. A ƙarshe, za ka ga duk wajen da za a aiko su ga endpoint, bayanai na kowane wani, kuma waɗanda za a aiko su ba tare da wani abu ba.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Gwada sabon ƙirjin ka (Zap) kuma ya kamata ya kammala cikin nasara. Idan akwai wata matsala, gwada duk wajen da aka aiko su kuma tabbatar cewa an aiko su daidai. Dominan bayanan da yawa ne, wasu abubuwa za su iya tsayawa ba tare da a gani ba.

### Duk ƙarin siffofin endpoint (Complete endpoint parameters) {#complete-endpoint-parameters}

Ga dukkan kira da duk yadda za a iya aiko wa wajen.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // ɗaya daga cikin "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // ɗaya daga cikin "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
