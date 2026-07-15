---
title: راه‌اندازی PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# راه‌اندازی درگاه PayPal (v2)

_**نکتهٔ مهم: این مقاله به Ultimate Multisite نسخهٔ 2.x اشاره دارد.**_

می‌توانید تا چهار روش پرداخت را در صفحهٔ تنظیمات پرداخت ما فعال کنید: Stripe، Stripe Checkout، PayPal و دستی. در این مقاله، خواهیم دید چگونه با **PayPal** یکپارچه‌سازی انجام دهیم.

درست مانند Stripe، PayPal به‌طور گسترده برای پرداخت‌های آنلاین استفاده می‌شود، به‌ویژه در وب‌سایت‌های WordPress. این مقاله شما را راهنمایی می‌کند که چگونه از PayPal به‌عنوان یک روش پرداخت موجود در شبکهٔ خود استفاده کنید.

توجه داشته باشید که برای دریافت اعتبارنامهٔ API موردنیاز برای این یکپارچه‌سازی، باید یک **Account تجاری PayPal** داشته باشید.

## فعال‌سازی PayPal در شبکهٔ شما {#enabling-paypal-on-your-network}

برای فعال‌سازی PayPal به‌عنوان یک روش پرداخت موجود در شبکهٔ خود، به زبانهٔ **Ultimate Multisite > Settings > Payments** بروید و کادر کنار PayPal را علامت بزنید.

![فعال‌سازی PayPal در درگاه‌های پرداخت فعال](/img/config/settings-payment-gateways.png)

## استفاده از جادوگر راه‌اندازی هدایت‌شده {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 یک جادوگر راه‌اندازی هدایت‌شدهٔ PayPal را به تنظیمات درگاه پرداخت اضافه می‌کند. پس از فعال‌سازی PayPal، از جادوگر در **Ultimate Multisite > Settings > Payments** استفاده کنید تا انتخاب کنید چگونه می‌خواهید درگاه را متصل کنید و پیش از ذخیره‌سازی تأیید کنید که کدام اعتبارنامه‌ها هنوز موردنیاز هستند.

این جادوگر از دو مسیر راه‌اندازی پشتیبانی می‌کند:

* **ورود دستی اعتبارنامه‌ها**: زمانی از این مسیر استفاده کنید که از قبل اعتبارنامه‌های API مربوط به PayPal را دارید، زمانی که راه‌اندازی OAuth برای Account شما در دسترس نیست، یا زمانی که ترجیح می‌دهید خودتان اعتبارنامه‌ها را از PayPal کپی کنید. API Username، API Password و API Signature را در فیلدهای PayPal وارد کنید، سپس تنظیمات پرداخت را ذخیره کنید.
* **دروازهٔ اتصال OAuth**: فقط زمانی از این مسیر استفاده کنید که گزینهٔ OAuth برای نصب شما در دسترس و فعال باشد. جادوگر جریان OAuth را پشت یک feature flag نشان می‌دهد، بنابراین شبکه‌هایی که فاقد آن flag هستند همچنان از فیلدهای ورود دستی اعتبارنامه‌ها استفاده می‌کنند.

اگر گزینهٔ OAuth را در جادوگر نمی‌بینید، جریان ورود دستی اعتبارنامه‌ها را در ادامه کامل کنید. درگاه با همان اعتبارنامه‌های API مربوط به PayPal Business کار می‌کند که در نسخه‌های قبلی Ultimate Multisite 2.x استفاده می‌شدند.

## دریافت اعتبارنامه‌های API مربوط به PayPal {#getting-the-paypal-api-credentials}

پس از فعال شدن PayPal به‌عنوان یک درگاه پرداخت، باید فیلدهای PayPal API **Username**، PayPal API **Password** و PayPal API **Signature** را تکمیل کنید.

می‌توانید این موارد را با ورود به Account [Live](https://www.paypal.com/home) یا [Sandbox](https://www.sandbox.paypal.com/home) خود در PayPal دریافت کنید.

(به یاد داشته باشید که می‌توانید از **حالت sandbox** برای آزمایش پرداخت‌ها و بررسی اینکه درگاه به‌درستی راه‌اندازی شده است استفاده کنید. فقط بخش مربوطه را روشن کنید.)

![فیلدهای اعتبارنامهٔ PayPal API و کلید تغییر حالت sandbox](/img/config/settings-payment-gateways.png)

برای درخواست اعتبارنامه‌های API Signature یا Certificate برای Account PayPal خود:

  1. به [تنظیمات Account](https://www.paypal.com/businessmanage/account/accountAccess) خود بروید.

  2. در بخش **دسترسی API**، روی **به‌روزرسانی** کلیک کنید.
![تنظیمات Account PayPal با بخش دسترسی API](/img/config/settings-payment-gateways.png)

  3. زیر **یکپارچه‌سازی NVP/SOAP API (Classic)**، روی **مدیریت اعتبارنامه‌های API** کلیک کنید.
![یکپارچه‌سازی PayPal NVP/SOAP API مدیریت اعتبارنامه‌های API](/img/config/settings-payment-gateways.png)

     * اگر قبلاً یک API Signature یا Certificate ایجاد کرده‌اید، به صفحه‌ای هدایت می‌شوید که می‌توانید اعتبارنامه‌های خود را در آن پیدا کنید.

     * _**نکته:** اگر از شما خواسته شد Account PayPal خود را تأیید کنید، دستورالعمل‌های روی صفحه را دنبال کنید._

  4. _یکی_ از گزینه‌های زیر را انتخاب کنید، سپس روی **Agree and Submit** کلیک کنید.

     * **Request API Signature** – برای احراز هویت API Signature انتخاب کنید.

     * **Request API Certificate** – برای احراز هویت API Certificate انتخاب کنید.

  5. PayPal اعتبارنامه‌های API شما را به‌شکل زیر ایجاد می‌کند:
![اعتبارنامه‌های API ایجادشده توسط PayPal](/img/config/settings-payment-gateways.png)

     * **اعتبارنامه‌های API Signature** شامل یک API Username، API Password و Signature هستند که منقضی نمی‌شود. این مقادیر به‌طور پیش‌فرض برای امنیت بیشتر پنهان هستند. روی **Show/Hide** کلیک کنید تا نمایش یا پنهان بودن آن‌ها را تغییر دهید. پس از پایان، روی **Done** کلیک کنید.

     * **اعتبارنامه‌های API Certificate** شامل یک API Username، API Password و Certificate هستند که پس از سه سال به‌طور خودکار منقضی می‌شود. روی **Download Certificate** کلیک کنید تا API Certificate را روی دسکتاپ خود ذخیره کنید.

همین است، یکپارچه‌سازی پرداخت PayPal شما کامل شد!

اگر پرسشی دربارهٔ تنظیمات PayPal دارید، می‌توانید به [مرکز راهنمایی](https://www.paypal.com/br/smarthelp/home) PayPal مراجعه کنید.
