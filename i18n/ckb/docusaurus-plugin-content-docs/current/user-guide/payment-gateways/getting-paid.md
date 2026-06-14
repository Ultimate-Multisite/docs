---
title: بۆ پاداشتن
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Get Paid (v2)

_**NOTE IMPORTANT: This article refers to Ultimate Multisite version 2.x.**_

Ultimate Multisite a sistem membership و faturization داخلی داره. برای اینکه سیستم فاکتورینگ ما کار کنه، ما رایج‌ترین درگاه‌های پرداخت استفاده شده در تجارت الکترونیک رو ادغام کردیم. درگاه‌های پرداخت پیش‌فرض در Ultimate Multisite عبارتند از _Stripe_ ، _PayPal_ و پرداخت دستی (Manual Payment). شما همچنین می‌توانید با نصب افزونه‌های مربوطه از _WooCommerce_ ، _GoCardless_ و _Payfast_ برای دریافت پرداخت‌ها استفاده کنید.

## تنظیمات پایه

شما می‌توانید هر یک از این درگاه‌های پرداخت را در تنظیمات پرداخت Ultimate Multisite پیکربندی کنید. می‌توانید با رفتن به **Ultimate Multisite menu > Settings > Payments** آن را پیدا کنید.

![صفحه تنظیمات پرداخت در Ultimate Multisite که پنل Payments را نشان می‌دهد](/img/config/payments-settings-page.png)

قبل از اینکه درگاه پرداخت خود را تنظیم کنید، لطفاً نگاهی به تنظیمات پرداخت پایه که می‌توانید پیکربندی کنید، بیندازید:

**Force auto-renew w:** این گزینه اطمینان حاصل می‌کند که پرداخت‌ها بسته به فرکانس صورت‌حساب انتخابی کاربر، در پایان هر چرخه صورت‌حساب به صورت خودکار تکرار شوند.

<!-- Screenshot unavailable: تنظیم دکمه Force Auto-Renew در صفحه تنظیمات پرداخت -->

Ultimate Multisite نسخه v2.13.0 بررسی می‌کند که آیا درگاه فعال دارای یک اعتبار تجدید قابل استفاده مجدد است یا خیر، قبل از ذخیره عضویت تکرارشونده با فعال بودن خودکار تمدید. یک اعتبار تمدید می‌تواند اشتراک در یک درگاه، توافق فاکتورینگ، توکن خزانه ذخیره‌شده (saved vault token) یا روش پرداخت قابل استفاده مجدد معادل آن باشد. اگر درگاه گزارش دهد که هیچ اعتبار قابل استفاده‌ای وجود ندارد، Ultimate Multisite عضویت را ذخیره می‌کند اما خودکار تمدید را خاموش کرده و وضعیت فاقد اعتبار را ثبت می‌کند تا یک مدیر یا جریان پشتیبانی بتواند از مشتری بخواهد قبل از تاریخ تمدید دوباره پرداخت را تأیید کند.

ئەمە ڕێگری دەکات لەوەی کە ئەندامێک بەپێی خۆی نوێبوونەوە دەردەکەوێت کاتێک گۆڕانکاری (gateway) تەنها بڕێکی یەکجار خەرجکردن دەتوانێت کۆبکەیت. پێداووکی، زیادکردنی گۆڕانکارییەکان دەبێت دڵنیا بن لەوەی کە خەرجی نوێکراوەکان بە شێوازێکی دووبارەیەوە (recurring) مۆدێلێک بۆ هەڵگرتنی ناسنامەیەکی دووبارە کۆد بکەن، بە تایبەتی کاتێک گۆڕانکاریەکە پشتگیری لە هەردوو ڕێگایەکانی وەستاندن و پارەدان (one-time capture) و پاداشتی/مۆبایلکردن (vaulted/subscription payment modes) دەکات.

**سەردانی تاقیکردنەوە بەبێ شێوازی پارەدان** **ئامێرەی ڕێکارەکە:** لەگەڵ چالاککردنی ئەم بڕیارە، کلاینتەکەت پێویست نێت هیچ زانیاریی داراییێک لە ماجرای تۆمارکردندا زیاد بکات. ئەمە تەنها پێویست دەبێت یەکجار ئەو کاتەی جارێکی تر پۆلێسەکە کۆتایی دێت.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**نێردرانی فاکچۆ لەسەر پشتڕاستکردنەوەی پارەدان:** ئەمە دەرفەتێکی پێشکەش دەکات کە ئایا دوای پارەدان فاکچۆ بڵاوبکەیت یان نا. ئاماژە بەوە بکە کە بەکارهێنەران دەتوانن لە ناو داشبۆردی سایتەکەدا (subsite dashboard) مێژووی پارەکانیان ببینن. ئەم ڕێکارە بۆ گۆڕانکاریی دەستکرد (Manual Gateway) کار ناکات.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**سیاسی نمرەی فاکچۆ:** لێرەدا، دەتوانیت یەکێک لەم دوو شێوازە هەڵبگریت: کۆدی ئاماژە بۆ پارەدان (payment reference code) یان سیستەمێکی نمرەی پێکەوە. ئەگەر هەڵبگریت بەکارهێنانی کۆدی ئاماژە بۆ پارەدان بۆ فاکچۆکانت، پێویست نییە هیچ شتێک ڕێک بخەیت. ئەگەر هەڵبگریت بەکارهێنانی سیستەمێکی نمرەی پێکەوە، دەبێت **نۆماری فاکچۆی داهاتوو** (This number will be used as the invoice number for the next invoice generated on the system. It is incremented by one every time a new invoice is created. You can change it and save it to reset the invoice sequential number to a specific value) و **پێشەنووسی نمرەی فاکچۆ** (invoice number prefix) ڕێک بخەیت.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Klija ku prekallë:

Nuk mund të vendosni gateway-t e pagesave në të njëjtën faqe ( **Ultimate Multisite > Settings > Payments**). Poshtë **active payment gateways**, do të mund të shihni: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ dhe _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Këshilluesi ynë ka një artikull të veçantë për çdo gateway pagese që do t'ju udhëzoj në hapat e konfigurimit, i cili mund ta gjeni në lidhjet më poshtë.

Ju mund të shihni dhe redaktoni detajet e pagesave:

![Payment edit interface](/img/admin/payment-edit.png)

Këtu është një pamje e plotë e faqes së redaktimit të pagesës:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Këtu gjithashtu është një pamje e plotë e cilësimeve të gateway-ve të pagesave:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Konfigurimi i gateway-t Stripe**

**Konfigurimi i gateway-t PayPal**** **

**Konfigurimi i pagesave manuale**

Tani, nëse dëshironi të përdorni _WooCommerce_ , _GoCardless_ ose _Payfast_ si gateway pagese juaj, do të duhet të **installoni dhe konfiguroshni add-on-et e tyre**.

### Si të instaloni add-on-in WooCommerce:

Ne kuptojmë se _Stripe_ dhe _PayPal_ nuk janë të disponueshme në disa vende që kufizojnë ose pengojnë përdorimin efektiv të plugin-ut ton. Prandaj, ne kamë krijuar një add-on për integrim me _WooCommerce_, i cili është një plugin shumë popullor e tregut të elektronikës. Zhvilluesit nga puna gjith në botë kanë krijuar add-on-e për integrimin e gateway-ve të pagesave të ndryshme me atë. Ne kemi shfrytëzuar këtë për të zgjeruar gateway-t e pagesave që mund të përdorni me sistemin e bilancimit Ultimate Multisite.

**مهم:** Ultimate Multisite: دمج WooCommerce پێویستی بەوەیە کە WooCommerce لە حداقل سەر سایتหลักت فعال بێت.

پێشتر، تکایە بگات بۆ لاپەڕەی add-ons (افزودنییەکان). دەتوانیت بە ڕۆیشتن بۆ **Ultimate Multisite > Settings** بیکەیت. دەبێت دەربکەیتە خوارچەکەی Add-ons ببینیت. لەسەر **Check our Add-ons** کلیک بکە.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

پاش کلیککردن لەسەر **Check our Add-ons**، دەبێت ڕێگاکەت بە لاپەڕەی add-ons ببێتەوە. لێرە دەتوانیت هەموو افزونهەکانی Ultimate Multisite ببینیت. سەر ئەو افزاونەی کە پێویستە، کلیک بکە لەسەر **Ultimate Multisite: WooCommerce Integration**.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

پەڕەیەکی نوێ دەبێتەوە بە وردەکاری افزاونەکە. تەنها کلیک بکە لەسەر **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

پاش تەواوکردنی جێبەجێکردن، دەبێت بە لاپەڕەی plugins ببیتەوە. لێرە تەنها کلیک بکە لەسەر **Network Activate** و افزاون WooCommerce لەسەر تۆڕەکەت فعال دەبێت.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

پاش فعالکردنی، ئەگەر 여هانی هێشتا نیشانەی افزاون WooCommerce لەسەر ئەو وێبساتانە نەبوو یان فعال نەبوو، ئاگادارییەک دەبینیتەوە.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

 بۆ زیاتر خوێندنەوە لەسەر افزاون Ultimate Multisite: WooCommerce Integration، **لێرە کلیک بکە**.

### چۆنیەتی جێبەجێکردنی افزاون GoCardless:

پێویستی بۆ دامەزراندنی افزونه‌ی _GoCardless_ وەک بۆ افزونه‌ی _WooCommerce_ ی هەمان شتە. تکایە بگاتە لاپەڕەی add-ons و **Ultimate Multisite: GoCardless Gateway** هەڵبژێرە.

<!-- Screenshot unavailable: لاپەڕەی add-ons کە افزاون Ultimate Multisite GoCardless Gateway لەسەر ڕەشدا دیارکراوە -->

پنجەرەی افزونه دەکرێتەوە. لەسەر **Install Now** 클릭 بکە.

<!-- Screenshot unavailable: دۆخی وردی افزاون Ultimate Multisite GoCardless Gateway کە دایەری Install Now هەیە -->

پاش تەواو بوونی دامەزراندن، دەبێت ڕێگاکەت بۆ لاپەڕەی plugins گۆڕاندرێتەوە. لێرەدا تەنها لەسەر **Network Activate** 클릭 بکە و افزاون _GoCardless_ لەسەر تۆڕەکەت چالاک بکرێت.

<!-- Screenshot unavailable: لاپەڕەی plugins کە لینک Network Activate بۆ GoCardless Gateway افزونه‌کە هەیە -->

بۆ فێربوونی چۆنیەتی دەستکردن لەگەڵ گیتوی _GoCardless_، **ئەم بابەتە بخوێنەوە**.

### چۆنیەتی دامەزراندنی افزونه‌ی Payfast:

گاتە لاپەڕەی add-ons و **Ultimate Multisite: Payfast Gateway** هەڵبژێرە.

<!-- Screenshot unavailable: لاپەڕەی add-ons کە افزاون Ultimate Multisite Payfast Gateway لەسەر ڕەشدا دیارکراوە -->

پنجەرەی افزونه دەکرێتەوە. لەسەر **Install Now** 클릭 بکە.

<!-- Screenshot unavailable: دۆخی وردی افزاون Ultimate Multisite Payfast Gateway کە دایەری Install Now هەیە -->

پاش تەواو بوونی دامەزراندن، دەبێت ڕێگاکەت بۆ لاپەڕەی plugins گۆڕاندرێتەوە. لێرەدا تەنها لەسەر **Network Activate** 클릭 بکە و افزاون _Payfast_ لەسەر تۆڕەکەت چالاک بکرێت.

<!-- Screenshot unavailable: لاپەڕەی plugins کە لینک Network Activate بۆ Payfast Gateway افزونه‌کە هەیە -->
