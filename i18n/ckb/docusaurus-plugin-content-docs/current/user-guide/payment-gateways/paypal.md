---
title: سەرکردایەتی پەیپال
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# راکردن گیت‌وی پِی‌پال (نسخه ۲)

_**توجه مهم: این مقاله به Ultimate Multisite نسخه ۲.x اشاره دارد.**_

شما می‌توانید تا چهار روش پرداخت را در صفحه تنظیمات پرداخت ما فعال کنید: Stripe، Stripe Checkout، PayPal و دستی. در این مقاله، نحوه ادغام با **PayPal** را خواهیم دید.

همانطور که Stripe از آن استفاده گسترده می‌شود، PayPal برای پرداخت‌های آنلاین، به ویژه در وب‌سایت‌های وردپرسی، بسیار پرکاربرد است. این مقاله شما را راهنمایی می‌کند که چگونه از PayPal به عنوان یک روش پرداخت موجود در شبکه خود استفاده کنید.

توجه داشته باشید که برای دریافت اعتبار API مورد نیاز برای این ادغام، باید یک **حساب تجاری PayPal** داشته باشید.

## فعال کردن PayPal در شبکه خود {#enabling-paypal-on-your-network}

برای فعال کردن PayPal به عنوان یک روش پرداخت موجود در شبکه خود، به مسیر **Ultimate Multisite > Settings > Payments** بروید و کنار PayPal تیک را بزنید.

![فعال کردن PayPal در دروازه‌های پرداخت فعال](/img/config/settings-payment-gateways.png)

## استفاده از راهنمای تنظیم هدایت شده (guided setup wizard) {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 یک راهنمای تنظیم PayPal هدایت شده را به تنظیمات دروازه پرداخت اضافه کرده است. پس از فعال کردن PayPal، از این ویزارد در **Ultimate Multisite > Settings > Payments** استفاده کنید تا انتخاب کنید که چگونه می‌خواهید با دروازه متصل شوید و قبل از ذخیره، تأیید کنید که کدام اعتبارها هنوز مورد نیاز هستند.

این ویزارد از دو مسیر تنظیم پشتیبانی می‌کند:

* **Entering credentials manually**: Use this path when you already have PayPal API credentials, when OAuth setup is not available for your account, or when you prefer to copy credentials from PayPal yourself. Enter the API Username, API Password, and API Signature in the PayPal fields, then save the payment settings.
* **OAuth connection gate**: Use this path only when the OAuth option is available and enabled for your install. The wizard shows the OAuth flow behind a feature flag, so networks without the flag continue to use the manual credential entry fields.

If you do not see the OAuth option in the wizard, complete the manual credential entry flow below. The gateway works with the same PayPal Business API credentials as previous Ultimate Multisite 2.x releases.

## Obtaining PayPal API credentials {#getting-the-paypal-api-credentials}

Once you enable PayPal as a payment gateway, you will need to fill in the fields for PayPal API **Username**, PayPal API **Password**, and PayPal API **Signature**.

You can get these by logging into your PayPal [Live](https://www.paypal.com/home) or [Sandbox](https://www.sandbox.paypal.com/home) account.

(Remember that you can use **sandbox mode** to test payments and see if the gateway is correctly set up. Just toggle on the corresponding section.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

To request an API Signature or Certificate credentials for your PayPal account:

  1. Go to your [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. In the **API access** section, click **Update**.

٣. لەژێر **نەماوەی و پڕۆتۆکۆڵی SOAP (Classic)**، بۆ **Manage API credentials** کلیک بکە.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * ئەگەر پێشتر سیگنیچر یان سێرتिफिकेटی API دروست کردووە، دەبێت ڕێگەپێدراویت بۆ پەڕەیەکی دیاریکراو بگەڕێیت بۆ ئەو جۆرە زانیارییانەی کە دەتوانیت بەدەستی بهێنیت.

     * _**تێبینی:** ئەگەر داوای پشکنینی خولی پەیج PayPal بکەن، ئەوا ڕێنماییەکانی سەر شاشەکە بەپێی ئەو ڕێنماییانە بڕوات._

٤. یەکێک لەم ڕێکارانە هەڵبژێرە، پاشان بۆ **Agree and Submit** کلیک بکە.

     * **Request API Signature** – بۆ پشتگیریککردنی سیگنیچر API هەڵبژێرە.

     * **Request API Certificate** – بۆ پشتگیریککردنی سێرتिफिकेटی API هەڵبژێرە.

٥. PayPal زانیارییە API یەکەت بەم شێوەیە دروست دەکات:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** لەخۆ دەگرن ناوی کاربری API، وشەی سەرەکی (Password) API، و سیگنیچرێک کە نەکات بەسەر الوقتی. ئەم بەهایانە بە شێوەیەکی پیش‌دۆزراو پاشکەوتوونەتەوە بۆ زیاتر سەلامەتی. بۆ دەستپێکردن و دوورخستن لە کارکردندا، کلیک بکە بە **Show/Hide**. کاتێک تەواو بوویت، کلیک بکە بە **Done**.

     * **API Certificate credentials** لەخۆ دەگرن ناوی کاربری API، وشەی سەرەکی (Password) API، و سێرتिफिकेटی API، کە دوای سێ ساڵ بە شێوەیەکی ئۆتۆماتیکی کۆتایی دێت. بۆ شۆکردنی سێرتिफिकेटی API بۆ دیسکەکەت، کلیک بکە بە **Download Certificate**.

ئەمە هەموو کارە، یەکگرتووی پەیامبەرەکانت لە PayPal تەواو بووە!

ئەگەر پرسیارێک دەبێت لەسەر ڕێکخستنی PayPal، دەتوانیت سەردانی [Help Center]ی PayPal بکە.
