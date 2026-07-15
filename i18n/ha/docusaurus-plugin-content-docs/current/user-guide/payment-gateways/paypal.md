---
title: Kafa PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# ⚙️ تنظیم دروازه پِیپال (نسخه ۲)

_**نکته مهم: این مقاله به Ultimate Multisite نسخه ۲.x اشاره دارد.**_

شما می‌توانید تا چهار روش پرداخت را در صفحه تنظیمات پرداخت ما فعال کنید: Stripe، Stripe Checkout، PayPal و دستی. در این مقاله، نحوه ادغام با **PayPal** را خواهیم دید.

همانطور که Stripe از آن استفاده می‌کند، PayPal به طور گسترده برای پرداخت‌های آنلاین، مخصوصاً در وب‌سایت‌های وردپرسی، استفاده می‌شود. این مقاله شما را راهنمایی خواهد کرد که چگونه از PayPal به عنوان یک روش پرداخت موجود در شبکه خود استفاده کنید.

توجه داشته باشید که برای دریافت اعتبار API مورد نیاز برای این ادغام، باید یک **حساب تجاری پِیپال (PayPal Business account)** داشته باشید.

## فعال کردن پِیپال در شبکه شما {#enabling-paypal-on-your-network}

برای فعال کردن پِیپال به عنوان یک روش پرداخت موجود در شبکه خود، به مسیر **Ultimate Multisite > Settings > Payments** بروید و کنار PayPal تیک را بزنید.

![فعال کردن پِیپال در دروازه‌های پرداخت فعال](/img/config/settings-payment-gateways.png)

## استفاده از راهنمای تنظیم هدایت شده (guided setup wizard) {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 یک راهنمای تنظیم هدایت شده برای PayPal را به تنظیمات دروازه پرداخت اضافه کرده است. بعد از فعال کردن پِیپال، از این ویزارد در **Ultimate Multisite > Settings > Payments** استفاده کنید تا انتخاب کنید که چگونه می‌خواهید دروازه را متصل کنید و قبل از ذخیره، تأیید کنید که کدام اعتبارها هنوز مورد نیاز هستند.

این ویزارد از دو مسیر تنظیم پشتیبانی می‌کند:

* **ورود دستی اطلاعات حساب**: از این مسیر زمانی استفاده کنید که قبلاً کدهای دسترسی (credentials) پِی‌پال را دارید، وقتی تنظیمات OAuth برای حساب شما در دسترس نیست، یا اگر ترجیح می‌دهید خودتان اطلاعات را از پِی‌پال کپی کنید. نام کاربری API، رمز عبور API و امضای API را در فیلدهای مربوط به پِی‌پال وارد کرده و سپس تنظیمات پرداخت را ذخیره کنید.
* **دروازه اتصال OAuth**: فقط زمانی از این مسیر استفاده کنید که گزینه OAuth برای نصب شما موجود و فعال باشد. راهنما جریان OAuth را پشت یک پرچم ویژگی (feature flag) نشان می‌دهد، بنابراین شبکه‌هایی که فاقد این پرچم هستند همچنان از فیلدهای ورود دستی اطلاعات استفاده خواهند کرد.

اگر در راهنما گزینه OAuth را نمی‌بینید، مراحل ورود دستی اطلاعات زیر را تکمیل کنید. دروازه با همان کدهای API تجاری پِی‌پال نسخه‌های قبلی Ultimate Multisite 2.x کار می‌کند.

## دریافت کدهای دسترسی (credentials) API پِی‌پال {#getting-the-paypal-api-credentials}

وقتی پِی‌پال به عنوان یک دروازه پرداخت فعال شد، باید فیلدهای **نام کاربری API** پِی‌پال، **رمز عبور API** پِی‌پال و **امضای API** پِی‌پال را پر کنید.

شما می‌توانید این اطلاعات را با ورود به حساب [زنده (Live)](https://www.paypal.com/home) یا [ساندبو (Sandbox)](https://www.sandbox.paypal.com/home) خود دریافت کنید.

(به یاد داشته باشید که می‌توانید از **حالت ساندبو** برای تست پرداخت‌ها و بررسی اینکه آیا دروازه به درستی تنظیم شده است، استفاده کنید. فقط بخش مربوطه را روشن یا خاموش کنید.)

![فیلدهای کدهای دسترسی API پِی‌پال و کلید حالت ساندبو](/img/config/settings-payment-gateways.png)

برای درخواست امضای API (API Signature) یا اطلاعات گواهی (Certificate credentials) برای حساب پِی‌پال خود:

  ۱. به [تنظیمات حساب](https://www.paypal.com/businessmanage/account/accountAccess) خود بروید.

  ۲. در بخش **دسترسی API**، روی **Update** کلیک کنید.
![تنظیمات حساب پِی‌پال با بخش دسترسی API](/img/config/settings-payment-gateways.png)

3. تحت **NVP/SOAP API integration (Classic)** , **Manage API credentials**-yi dabbiye.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Idan ka wani API Signature ko Certificate kaɗai ka samu, sai za a waje da za ka samu waɗannan bayanan.

     * _**Gargaɗi:** Idan aka tambaye ka tabbatar da asusunka na PayPal, to ka bi umarnin da ake nuna maka._

  4. Wajera **wata** daga cikin zaɓuɓɓukan da ke ƙasa, sannan ka danna **Agree and Submit**.

     * **Request API Signature** – Don amfani da authentication ta API Signature.

     * **Request API Certificate** – Don amfani da authentication ta API Certificate.

  5. PayPal tana samar maka da bayanan API ɗinka kamar haka:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** suna haɗa da Username na API, Password na API, da Signature, wanda ba zai ƙarewa ba. Waɗannan ƙima sun yi magana a baya don ingancin tsaro. Danna **Show/Hide** don shiga ko yawo waɗannan bayanan. Lokacin da ka gama, danna **Done**.

     * **API Certificate credentials** suna haɗa da Username na API, Password na API, da Certificate, wanda zai ƙarewa ne ba tare da wani abu ba bayan shekar uku. Danna **Download Certificate** don ajiye API Certificate a kan kwamfutarka.

Wannan shi ne duka! Shirye-shiryen biyan ku ta PayPal sun kammala!

Idan kana da wata tambaya game da ayyukan PayPal, za ka iya bincika [Help Center](https://www.paypal.com/br/smarthelp/home) na PayPal.
