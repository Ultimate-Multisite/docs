---
title: سەرکردای Stripeی دانان
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# راکردن گیت‌وی Stripe (نسخه v2)

_**توجه مهم: این مقاله به Ultimate Multisite نسخه 2.x اشاره دارد.**_

شما می‌توانید تا چهار روش پرداخت را در صفحه تنظیمات پرداخت خود فعال کنید: Stripe، Stripe Checkout، PayPal و دستی. در این مقاله، نحوه ادغام با **Stripe** را خواهیم دید.

## فعال کردن Stripe

برای فعال کردن Stripe به عنوان یک دروازه پرداخت موجود در شبکه خود، به مسیر **Ultimate Multisite > Settings > Payments** بروید و دکمه کنار **Stripe** یا **Stripe Checkout** در بخش Active Payment Gateways را تیک بزنید.

![فعال کردن Stripe در دروازه‌های پرداخت فعال](/img/config/settings-payment-gateways.png)

### Stripe در مقابل Stripe Checkout:

**Stripe:** این روش فضایی برای وارد کردن شماره کارت اعتباری در طول فرآیند خرید نشان می‌دهد.

![فیلد کارت اعتباری درون خطی Stripe در طول خرید](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** این روش مشتری را در طول فرآیند خرید به یک صفحه Stripe Checkout هدایت می‌کند.

![صفحه ریدایرکت Stripe Checkout در طول خرید](/img/config/settings-payment-gateways.png)

دریافت کلیدهای API Stripe

هنگامی که Stripe به عنوان یک دروازه پرداخت فعال شد، باید فیلدهای **Stripe Publishable Key** و **Stripe Secret Key** را پر کنید. می‌توانید این موارد را با ورود به حساب Stripe خود دریافت کنید.

_**نکته:** شما می‌توانید **Sandbox mode** را برای تست اینکه روش پرداخت کار می‌کند، فعال کنید._

![فیلدهای کلید API Stripe و دکمه حالت sandbox](/img/config/settings-payment-gateways.png)

در داشبورد Stripe خود، روی **Developers** در گوشه بالا سمت راست کلیک کرده و سپس در منوی سمت چپ روی **API Keys** کلیک کنید.

![بخش Developers داشبورد Stripe با API Keys](/img/config/settings-payment-gateways.png)

تามารถ تشت بەکارهێنانی **Test Data** (بۆ تاقیکردنەوە ئەوەی یەکگرتووییەکە لەسەر شوێنی پڕۆدۆکشنەکەت کار دەکات) یان نەکردن لەسەری. بۆ گۆڕینی ئەمە، دوورەکی **Viewing test data** بکە.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

قەمی بە شێوەی ئاسایی لە **Publishable key** و **Secret key**، لە ستوونی **Token** kopیت بکە و لەسەر فیلدەکانی Ultimate Multisite Stripe Gateway چەپکە. پاشان بۆ **Save Changes** کل بکە.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## ڕێکخستنی Stripe Webhook

Stripe پەیامە webhook (webhook events) دەدات کە هەر کاتێک جۆرێک لە ڕوودۆک لە **حسابی stripe** یەکەت ڕوودەدات، Ultimate Multisite ئاگادار دەکاتەوە.

کل بکە بۆ **Developers** و دوای ئەوە هەڵبژێرە بەشی **Webhooks** لە منووی لاییندا. پاشان لە لایەنی ڕاست کل بکە بۆ **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

ئێمە پێویستە بە **Endpoint URL** *.* Ultimate Multisite بە شێوەیەکی ئۆتۆماتیک Endpoint URL دروست دەکات کە دەتوانیت لە خوار فیلدی **Webhook Listener URL** لە بەشی **Ultimate Multisite Stripe Gateway**دا بدۆزیتەوە.

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Endpoint URL kopیت بکە و لە فیلدی **Endpoint URL**ی Stripe چەپکە.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

پاشان دەبێت **Event** هەڵبژێریت *.* لە خوار ئەم کارەدا، تەنها پێویستە بۆ پشکنینی چرکەی **Select all events** و کلکردن بۆ **Add events**. دوای ئەوە کل بکە بۆ **Add Endpoint** بۆ شۆڕانەوەی گۆڕانکارییەکان.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

ئەووەیە، یەکگرتووی پایتەمنەی Stripe بۆ تۆ تەواو بووە!
