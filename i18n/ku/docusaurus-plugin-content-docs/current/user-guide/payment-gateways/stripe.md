---
title: راستکردنی ستراپ
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# تنظیم گیت‌وی استرایپ (v2) {#setting-up-the-stripe-gateway-v2}

_**نکته مهم: این مقاله به نسخه ۲.x Ultimate Multisite اشاره دارد.**_

شما می‌توانید تا چهار روش پرداخت را در صفحه تنظیمات پرداخت ما فعال کنید: Stripe، Stripe Checkout، PayPal و دستی. در این مقاله، نحوه ادغام با **Stripe** را خواهیم دید.

## فعال کردن استرایپ (Stripe) {#enabling-stripe}

برای فعال کردن Stripe به عنوان یک دروازه پرداخت موجود در شبکه خود، به مسیر **Ultimate Multisite > Settings > Payments** بروید و دکمه کنار **Stripe** یا **Stripe Checkout** در بخش Active Payment Gateways را تیک بزنید.

![فعال کردن استرایپ در دروازه‌های پرداخت فعال](/img/config/settings-payment-gateways.png)

### Stripe در مقابل Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** این روش فضایی برای وارد کردن شماره کارت اعتباری در طول فرآیند خرید نشان می‌دهد.

![فیلد کارت اعتباری درون خطی استرایپ در طول خرید](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** این روش مشتری را در طول فرآیند خرید به یک صفحه Stripe Checkout هدایت می‌کند.

![صفحه ریدایرکت استرایپ چک‌اوت در طول خرید](/img/config/settings-payment-gateways.png)

### دریافت کلیدهای API استرایپ شما {#setting-up-stripe-webhook}

وقتی Stripe به عنوان یک دروازه پرداخت فعال شد، باید فیلدهای **Stripe Publishable Key** و **Stripe Secret Key** را پر کنید. می‌توانید این موارد را با ورود به حساب Stripe خود دریافت کنید.

_**توجه:** می‌توانید **Sandbox mode** (حالت آزمایشی) را فعال کنید تا تست کنید که روش پرداخت کار می‌کند یا نه._

![فیلدهای کلید API استرایپ و دکمه حالت ساندباکس](/img/config/settings-payment-gateways.png)

در داشبورد Stripe خود، روی **Developers** در گوشه بالا سمت راست کلیک کنید، و سپس در منوی سمت چپ روی **API Keys** کلیک نمایید.

![بخش Developers داشبورد استرایپ با کلیدهای API](/img/config/settings-payment-gateways.png)

تۆ دەتوانی یان **Test Data** بەکاری بهێنیت (بۆ تاقیکردنەوە ئەوەی ئامادەکردنی کار دەکات لەسەر سایتێکی وردبینی کردنی خۆت) یان نەبێ. بۆ گۆڕینی ئەمە، دۆخی **Viewing test data** دەستکاری بکە.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

قيمة لە **Publishable key** و **Secret key**، لە ستوونی **Token** kopیت بکە و لە فیلدەکانی Ultimate Multisite Stripe Gateway دابنێ. پاشان بۆ **Save Changes** کلیک بکە.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## ڕێکخستنی Stripe Webhook

Stripe واکبۆ (webhook events) دەدات کە هەر کاتێک جۆرێک لە ڕووداو لە **حسابی ستراپە** یەکەت ڕوودەدات، Ultimate Multisite ئاگادار دەکاتەوە.

کلیک بکە بۆ **Developers** و پاشان هەڵبژێرە بەشی **Webhooks** لە منووی لاییندا. پاشان لە لایەنی ڕاست کلیک بکە بۆ **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

ئێمە پێویستە بە **Endpoint URL** *.* Ultimate Multisite بە شێوەیەکی ئۆتۆماتیک Endpoint URL دروست دەکات کە دەتوانیت لە خوار فیلدی **Webhook Listener URL** لە بەشی **Ultimate Multisite Stripe Gateway**دا بدۆزیتەوە.

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Endpoint URL kopیت بکە و لە فیلدی **Endpoint URL**ی ستراپ دابنێ.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

پاشان دەبێت **Event** هەڵبژێریت *.* لە ژێر ئەم کارە، تەنها پێویستە بۆ ئەوەی چاککردنەوەی خاڵی **Select all events** بکەیت و کلیک بکەیت بۆ **Add events**. پاشان کلیک بکە بۆ **Add Endpoint** بۆ هەڵگرتنی گۆڕانکارییەکان.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

ئەووەیە، یەکگرتووی پایتال (Stripe) بۆ پارێزگاریی وەرگرتنەکە تەواو بووە!
