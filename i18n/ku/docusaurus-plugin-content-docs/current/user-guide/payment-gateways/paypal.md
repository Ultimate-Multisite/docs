---
title: راستکردنی پەیپال
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# تنظیم گیت‌وی پِی‌پال (نسخه ۲)

_**نکته مهم: این مقاله به Ultimate Multisite نسخه ۲.x اشاره دارد.**_

شما می‌توانید تا چهار روش پرداخت را در صفحه تنظیمات پرداخت ما فعال کنید: Stripe، Stripe Checkout، PayPal و دستی. در این مقاله، نحوه ادغام با **PayPal** را خواهیم دید.

همانطور که Stripe از آن استفاده می‌کند، PayPal به طور گسترده برای پرداخت‌های آنلاین، به خصوص در وب‌سایت‌های وردپرسی، مورد استفاده قرار می‌گیرد. این مقاله شما را راهنمایی می‌کند که چگونه از PayPal به عنوان یک روش پرداخت موجود در شبکه خود استفاده کنید.

توجه داشته باشید که برای دریافت اعتبار API مورد نیاز برای این ادغام، باید یک **حساب تجاری PayPal** داشته باشید.

## فعال کردن PayPal در شبکه خود {#enabling-paypal-on-your-network}

برای فعال کردن PayPal به عنوان یک روش پرداخت قابل دسترس در شبکه خود، به مسیر **Ultimate Multisite > Settings > Payments** بروید و کنار PayPal تیک را بزنید.

![فعال کردن PayPal در دروازه‌های پرداخت فعال](/img/config/settings-payment-gateways.png)

## استفاده از راهنمای تنظیم هدایت‌شده (guided setup wizard) {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 یک راهنمای تنظیم PayPal هدایت‌شده را به تنظیمات دروازه پرداخت اضافه کرده است. پس از فعال کردن PayPal، از این ویزارد در **Ultimate Multisite > Settings > Payments** استفاده کنید تا انتخاب کنید که چگونه می‌خواهید دروازه را متصل کنید و قبل از ذخیره، تأیید کنید که کدام اعتبارها هنوز مورد نیاز هستند.

این ویزارد از دو مسیر تنظیم پشتیبانی می‌کند:

* **ورود دستی اعتبارنامەکان (Manual credential entry)**: ئەگەر پێشتر بەدەستتەوەی API ی PayPal هەبێت، کاتێک ڕێگەی OAuth بۆ هەژمارەکەت بێت، یان کاتێک خۆت دەتەوێت لەسەر PayPalدا کۆپی بکەیت، ئەم ڕێگەچارەکە بەکاربهێنە. دەربڕینی **API Username**، **API Password** و **API Signature** لە فیلدەکانی PayPal بنووسە، پاشان تنظیمات پایتەنت (payment settings) بۆ هەڵبژێرە.
* **دەرگای پەیوەندی OAuth (OAuth connection gate)**: ئەم ڕێگەچارەکە تەنها کاتێک بەکاربهێنە کە آپشنەکەی OAuth بێت و لەسەر دامەزراندنی تۆدا چالاک بێت. ئامێرەکە (wizard) پڕۆسەی OAuth لە پشت یەک فلیگی تایبەت (feature flag) دەنیشان دەکات، بۆیە ئەو تۆڕانەی فلیگەکە نییە بەکار دەهێنن فیلدەکانی وەرگرتنی مۆڵەتی دستی.

ئەگەر آپشن OAuth لە ئامێرەکەدا نەبینیت، پڕۆسەی وەرگرتنی مۆڵەتی دستی خوارەوە تەواو بکە. ئەم گۆڕانکارییە بە هەمان مۆڵەتەکانی API ی Biznesی PayPal کار دەکات کە لە پێکهاتەکانی Ultimate Multisite 2.x پێشتردا بوو.

## بەدەستهێنانی مۆڵەتی API ی PayPal (Getting the PayPal API credentials) {#getting-the-paypal-api-credentials}

کاتێک PayPal وەک گۆڕانکاری پایتەنت بۆ بانکی پایتەنت (payment gateway) چالاک کرد، دەبێت فیلدەکانی **Username**ی API ی PayPal، **Password**ی API ی PayPal و **Signature**ی API ی PayPal پڕ بکەیت.

ئەم کار بە چۆنیەتی لاگینی سەر هەژمارەکەت لە [Live](https://www.paypal.com/home) یان [Sandbox](https://www.sandbox.paypal.com/home) ئەنجام دەدات.

(بۆ یادەوە، دەتوانیت **sandbox mode** بەکاربهێنیت بۆ تاقیکردنەوەی پایتەنت و دۆزینەوەی ئەوەی کە گۆڕانکاریەکە بە شێوەیەکی دروست ڕێکخراوە. تەنها ئەو بەشییە دەبێت چالاک بکەیت.)

![فیلدەکانی مۆڵەتی API ی PayPal و دوورکەوتنی sandbox mode](/img/config/settings-payment-gateways.png)

 بۆ داواکردنی **API Signature** یان مۆڵەتی سێرت (Certificate credentials) بۆ هەژمارەکەت لە PayPal:

  1. بگە بە [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. لە بەشی **API access**، **Update** بکە.
![Settingsی هەژماری PayPal لەگەڵ بەشی دەستپێکردنی API](/img/config/settings-payment-gateways.png)

٣. لەژێر **نەماوەی/سۆپ API یەکگرتوو (کلاسیک)**، دەبێت **Manage API credentials** بکەیت.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * ئەگەر پێشتر نیشانەی API Signature یان Certificate دروست کردووەتەوە، دەبێت ڕێدەدرێن بۆ پەڕەیەکی کە لەوێدا دەتوانیت سەرچاوەکانت بدۆزیتەوە.

     * _**تێبینی:** ئەگەر داوات کرد بەڵگەنامەی یەکگرتووی PayPalی خۆت بزانیت، ئەوا ڕێنماییەکانی سەر شاشەکە بەپێی ئەو کارانە بکە._

  ٤. یەکێک لەم هەڵبژاردنە هەڵبژێرە، پاشان **Agree and Submit** بکە.

     * **Request API Signature** – بۆ پشتڕاستکردنەوەی API Signature هەڵبژێرە.

     * **Request API Certificate** – بۆ پشتڕاستکردنەوەی API Certificate هەڵبژێرە.

  ٥. PayPal بەم شێوەیە دەستپێدەکات لەسەر سەرچاوەکانی API یەکگرتوویت:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** لەخۆدەگرن یەکەم ناوی بەکارھێنەر (Username)، وشەی سەرەکی (Password) و نیشانەی (Signature) API، کە کاتێکی دیاریکراو نییە بۆ کۆتایی پێهاتن. ئەم بەهایانە بە شێوەیەکی پیش‌نیار پاشکەوتوون دەبن بۆ زیادکردنی سەلامەتی. بۆ دەستپێکردن و دوورخستن، **Show/Hide** بکە. کاتێک تەواو بوویت، **Done** بکە.

     * **API Certificate credentials** لەخۆدەگرن یەکەم ناوی بەکارھێنەر (Username)، وشەی سەرەکی (Password) و بەڵگەنامەکە (Certificate) API، کە دوای سێ ساڵ بە شێوەیەکی خۆکار کۆتایی دێت. بۆ شۆکردنی بەڵگەنامەی API لەسەر دیسکەکەت، **Download Certificate** بکە.

ئەو تەنهاست، یەکگرتووی پایتەکی (payment integration)ی تۆ تەواو بووە!

ئەگەر پرسیارێک دەبێت لەسەر ڕێکخستنی PayPal، دەتوانیت سەردانی [Help Center]ی PayPal بکە.
