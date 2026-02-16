---
title: راه‌اندازی PayPal
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# راه‌اندازی درگاه پرداخت PayPal (نسخه ۲)

_**نکته مهم: این مقاله مربوط به نسخه 2.x از Ultimate Multisite است.**_

شما می‌توانید تا چهار روش پرداخت را در صفحه تنظیمات پرداخت فعال کنید: Stripe، Stripe Checkout، PayPal و پرداخت دستی. در این مقاله، نحوه یکپارچه‌سازی با **PayPal** را بررسی می‌کنیم.

PayPal همانند Stripe، برای پرداخت‌های آنلاین به‌ویژه در وب‌سایت‌های WordPress بسیار پرکاربرد است. این مقاله به شما کمک می‌کند تا PayPal را به‌عنوان یک روش پرداخت در شبکه خود راه‌اندازی کنید.

توجه داشته باشید که برای دریافت اطلاعات API مورد نیاز این یکپارچه‌سازی، باید یک **حساب تجاری PayPal** داشته باشید.

## فعال‌سازی PayPal در شبکه شما

برای فعال‌سازی PayPal به‌عنوان یک روش پرداخت در شبکه خود، به **Ultimate Multisite > Settings > Payments** بروید و تیک کنار PayPal را بزنید.

![فعال‌سازی PayPal در درگاه‌های پرداخت](/img/config/settings-payment-gateways.png)

## دریافت اطلاعات API از PayPal

پس از فعال‌سازی PayPal به‌عنوان درگاه پرداخت، باید فیلدهای **Username**، **Password** و **Signature** مربوط به PayPal API را پر کنید.

برای دریافت این اطلاعات، وارد حساب [Live](https://www.paypal.com/home) یا [Sandbox](https://www.sandbox.paypal.com/home) خود در PayPal شوید.

(به یاد داشته باشید که می‌توانید از **حالت sandbox** برای تست پرداخت‌ها و اطمینان از درستی تنظیمات درگاه استفاده کنید. کافی است گزینه مربوطه را فعال کنید.)

![فیلدهای اطلاعات PayPal API و دکمه حالت sandbox](/img/config/settings-payment-gateways.png)

برای درخواست اطلاعات API Signature یا Certificate برای حساب PayPal خود:

  1. به [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) خود بروید.

  2. در بخش **API access**، روی **Update** کلیک کنید.  
![تنظیمات حساب PayPal با بخش API access](/img/config/settings-payment-gateways.png)

  3. در قسمت **NVP/SOAP API integration (Classic)**، روی **Manage API credentials** کلیک کنید.  
![مدیریت اطلاعات NVP/SOAP API در PayPal](/img/config/settings-payment-gateways.png)

     * اگر قبلاً یک API Signature یا Certificate ایجاد کرده‌اید، به صفحه‌ای هدایت می‌شوید که اطلاعات شما در آن قرار دارد.

     * _**توجه:** اگر از شما خواسته شد حساب PayPal خود را تأیید کنید، دستورالعمل‌های روی صفحه را دنبال کنید._

  4. _یکی_ از گزینه‌های زیر را انتخاب کنید و سپس روی **Agree and Submit** کلیک کنید.

     * **Request API Signature** – برای احراز هویت با API Signature انتخاب کنید.

     * **Request API Certificate** – برای احراز هویت با API Certificate انتخاب کنید.

  5. PayPal اطلاعات API شما را به‌صورت زیر تولید می‌کند:  
![اطلاعات API تولید شده توسط PayPal](/img/config/settings-payment-gateways.png)

     * **اطلاعات API Signature** شامل API Username، API Password و Signature است که تاریخ انقضا ندارد. این مقادیر به‌صورت پیش‌فرض برای امنیت بیشتر پنهان هستند. برای نمایش یا پنهان کردن آن‌ها روی **Show/Hide** کلیک کنید. پس از اتمام، روی **Done** کلیک کنید.

     * **اطلاعات API Certificate** شامل API Username، API Password و Certificate است که به‌صورت خودکار پس از سه سال منقضی می‌شود. برای ذخیره API Certificate در دسکتاپ خود، روی **Download Certificate** کلیک کنید.

همین! یکپارچه‌سازی پرداخت PayPal شما کامل شد!

اگر سؤالی درباره تنظیمات PayPal دارید، می‌توانید به [مرکز راهنمای PayPal](https://www.paypal.com/br/smarthelp/home) مراجعه کنید.
