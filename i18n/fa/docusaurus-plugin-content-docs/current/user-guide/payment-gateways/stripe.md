---
title: راه‌اندازی Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# راه‌اندازی درگاه پرداخت Stripe (نسخه ۲)

_**نکته مهم: این مقاله مربوط به نسخه 2.x از Ultimate Multisite است.**_

شما می‌توانید تا چهار روش پرداخت را در صفحه تنظیمات پرداخت فعال کنید: Stripe، Stripe Checkout، PayPal و پرداخت دستی. در این مقاله، نحوه اتصال به **Stripe** را بررسی می‌کنیم.

## فعال‌سازی Stripe

برای فعال کردن Stripe به عنوان یک درگاه پرداخت در شبکه خود، به **Ultimate Multisite > Settings > Payments** بروید و گزینه **Stripe** یا **Stripe Checkout** را در بخش Active Payment Gateways فعال کنید.

![فعال‌سازی Stripe در درگاه‌های پرداخت](/img/config/settings-payment-gateways.png)

### تفاوت Stripe و Stripe Checkout:

**Stripe:** با این روش، فیلدی برای وارد کردن شماره کارت اعتباری در صفحه پرداخت نمایش داده می‌شود.

![فیلد کارت اعتباری Stripe در صفحه پرداخت](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** با این روش، مشتری به صفحه Stripe Checkout هدایت می‌شود.

![صفحه Stripe Checkout در فرآیند پرداخت](/img/config/settings-payment-gateways.png)

دریافت کلیدهای API از Stripe

پس از فعال‌سازی Stripe به عنوان درگاه پرداخت، باید فیلدهای **Stripe Publishable Key** و **Stripe Secret Key** را پر کنید. برای دریافت این کلیدها، وارد حساب Stripe خود شوید.

_**نکته:** می‌توانید **Sandbox mode** را فعال کنید تا عملکرد درگاه پرداخت را تست کنید._

![فیلدهای کلید API و گزینه Sandbox mode](/img/config/settings-payment-gateways.png)

در داشبورد Stripe، روی **Developers** در گوشه بالا سمت راست کلیک کنید و سپس **API Keys** را از منوی سمت چپ انتخاب کنید.

![بخش Developers در داشبورد Stripe با API Keys](/img/config/settings-payment-gateways.png)

می‌توانید از **Test Data** استفاده کنید (برای تست صحت اتصال در سایت اصلی) یا نه. برای تغییر این گزینه، دکمه **Viewing test data** را فعال یا غیرفعال کنید.

![دکمه Viewing test data در Stripe](/img/config/settings-payment-gateways.png)

مقادیر **Publishable key** و **Secret key** را از ستون **Token** کپی کرده و در فیلدهای مربوطه در تنظیمات Stripe در Ultimate Multisite قرار دهید. سپس روی **Save Changes** کلیک کنید.

![مقادیر Publishable key و Secret key در Stripe](/img/config/settings-payment-gateways.png)

![وارد کردن کلیدهای Stripe در تنظیمات Ultimate Multisite](/img/config/settings-payment-gateways.png)

## راه‌اندازی Webhook در Stripe

Stripe از طریق webhook هر زمان که رویدادی در **حساب Stripe شما** رخ دهد، Ultimate Multisite را مطلع می‌کند.

روی **Developers** کلیک کنید و سپس از منوی سمت چپ **Webhooks** را انتخاب کنید. در سمت راست صفحه روی **Add endpoint** کلیک کنید.

![صفحه Webhooks در Stripe با دکمه Add endpoint](/img/config/settings-payment-gateways.png)

به یک **Endpoint URL** نیاز دارید. Ultimate Multisite به صورت خودکار این آدرس را ایجاد می‌کند و می‌توانید آن را در فیلد **Webhook Listener URL** در بخش **Ultimate Multisite Stripe Gateway** پیدا کنید.

![فیلد Webhook Listener URL در تنظیمات درگاه Stripe](/img/config/settings-payment-gateways.png)

آدرس endpoint را **کپی** کرده و در فیلد **Endpoint URL** در Stripe **جای‌گذاری** کنید.

![وارد کردن آدرس endpoint در تنظیمات webhook](/img/config/settings-payment-gateways.png)

مرحله بعد انتخاب **Event** است. در این قسمت، کافی است گزینه **Select all events** را تیک بزنید و روی **Add events** کلیک کنید. سپس برای ذخیره تغییرات روی **Add Endpoint** کلیک کنید.

![انتخاب همه رویدادها و افزودن endpoint در Stripe](/img/config/settings-payment-gateways.png)

تمام شد! اتصال درگاه پرداخت Stripe شما کامل است!
