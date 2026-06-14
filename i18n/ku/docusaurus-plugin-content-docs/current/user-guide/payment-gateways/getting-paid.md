---
title: پایداربوون بەدەست هێنان
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# وەرگرتن پايان (v2)

_**تێبینی گرنگ: ئەم بابەتە ئاماژەیە بۆ Ultimate Multisite وەرگرتۆری ٢.x.**_

Ultimate Multisite سیستەمی تایبەتی یەکەم وەرگرتنی ئەندام و بڕیندان لە خوارەوە هەیە. بۆ ئەوەی سیستەمی وەرگرتنی ئێمە کار بکات، ئێمە بەهێز کردووە ئەو ڕێگایانەی کە بەکارهێنراون لە بازاڕی ئەلیکترۆنی (e-commerce). وەرگرتۆری سەرەکی لە Ultimate Multisite یان **Stripe**، **PayPal**، و **Manual Payment**ن. دەتوانیت لەگەڵ دامەزراندنی ئەو add-onsانەی کە پەیوەستن بەو بابەتانە، **WooCommerce**، **GoCardless** و **Payfast** بەکاربهێنیت بۆ گرتکردنەوەی پارەکان.

## ڕێکخستنەکانی بنەڕەتی (Basic Settings)

دەتوانیت هەر یەک لەم وەرگرتۆرییەدا لە ژێر ڕێکخستنەکانی پايانەکانی Ultimate Multisite دیاری بکەیت. دەتوانیت بە لیژنەی **Ultimate Multisite menu > Settings > Payments** بگەیتە ئەو شوێنە.

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

پێش ئەوەی وەرگرتۆری پايانت دیاری بکەیت، تکایە چاودێریت ڕێکخستنەکانی بنەڕەتی کە دەتوانیت دیاری بکەیت:

**Force auto-rene** **w:** ئەمە دڵنیابێت کە پارەکان بە شێوەیەکی ئۆتۆماتیک لە کۆتایی هەر چەند مانگی بڕینداندا دووبارە بکرێنەوە، بەپێی ئەو ماوەیەەی کە بەکارهێنەر هەڵبژاردووە.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 دەدۆزێتەوە کە ئایا وەرگرتۆری چالاک لەگەڵدا پەیامێکی دووبارەکرێی (renewal credential) هەیە پێویست بۆ ئەوەی ئەندامکردنی دووبارە بکرێت بە ئۆتۆماتیک. ئەو پەیامە دووبارەکرێی دەتوانرێت بێت وەرگرتنی ماوەیەکی اشتراک، ڕێککەوتنێکی بڕیندان، توکنێکی گەورە (vault token) کە هەڵبژراوە، یان شێوازی پايانی دووبارەی دیاریکراو. ئەگەر وەرگرتۆری بڵێکاریش هیچ پەیامێکی بەکاربهێنراو نییە، Ultimate Multisite ئەندامکردنی دەپارێزێت بەڵام ئۆتۆماتیکی دووبارەکرێی لەسەر کار دەبات و ئەو دۆخی کە پێویستیان هەیە تۆمار دەکات بۆ ئەوەی ADMINISTRATOR یان سیستەمی پشتیوانی داوا بکات لە کاتی دووبارەکرێی پارەکە.

ئەمە ڕێگەیە بۆ ئەوەی یەکەمجار لە کاتی ئەندازیاری (membership) نیشان بدرێت کە بە شێوەیەکی خۆکار دووبارە دەبێت، چونکە گۆڕەری (gateway) تەنها بڕێکی یەکجار دەتوانێت کۆبکەرەوە. پێویستە زیادکردنی گۆڕەکانی گۆڕەرییەکە دڵنیا بیت کە پاداشتە دووبارەییەکان (recurring checkouts) بە شێوەیەکی دووبارە دەکرێن، بەتایبەتی کاتێک گۆڕەرییەکە پشتگیریی هەردوو جۆر لە وەرگرتنی بڕێکی یەکجار و پاداشت/سەرکردایەتی (vaulted/subscription) پشتیوانی دەکات.

**ئامادەکردنی ئەندازیارەکان بەبێ ڕێگەی پارە:** **شێوازی پارە:** لەگەڵ چالاککردنەوەی ئەم بڕە، کلاینتەکەت پێویست نیشانێکی داراییێک دەبێت لە ماژینۆ (registration)دا. ئەمە تەنها پێویست دەبێت کاتێک ئەو ماوەیە بۆ ئەندازیاریەکە کۆتایی دێت.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**ناردنی فاکچۆ (invoice) لەسەر پشتڕاستکردنەوەی پارە:** ئەمە دەرفەتتان دەدات کە بڵێیت ئایا دوای پارەدان فاکچۆیەک بنێرین یان نا. ئاماژە بەوە بکەن کە بەکارهێنەران دەتوانن لە ناو داشبۆردی (dashboard) ماژینی خۆیان، بەشی مۆبایلەکەدا، بەستەی پاداشتەکانی پارە ببینن. ئەم بڕە بۆ گۆڕەریی یەکگرتووی دەستیاری (Manual Gateway) کار ناکات.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**سێبۆری نمرەی فاکچۆ:** لێرەدا، دەتوانیت یەکێک لەم دوو شت هەڵبژێریت: کۆدی ئاماژە بۆ پارە (payment reference code) یان سێبۆری نمرەی پێکەوە. ئەگەر هەڵبژاردن کرد کە کۆدی ئاماژە بۆ پارە بەکاربهێنیت بۆ فاکچۆکانت، پێویست نییە هیچ شتێک ڕێک بخەیت. ئەگەر هەڵبژاردن کرد سێبۆری نمرەی پێکەوە بەکاربهێنیت، دەبێت **نمرەی فاکچۆی داهاتوو** (This number will be used as the invoice number for the next invoice generated on the system. It is incremented by one every time a new invoice is created. You can change it and save it to reset the invoice sequential number to a specific value) و **پێشە نمرەی فاکچۆ** (invoice number prefix) ڕێک بخەیت.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## چۆن گیت‌ویەکان بدۆزیتەوە:

تۆ دەتوانیت گیت‌ویە پایتەنگ (payment gateways) لە هەمان پەڕە ڕێکبخەیت ( **Ultimate Multisite > Settings > Payments**). لە خوارەوەی **active payment gateways**، دەتوانیت ببینیت: _Stripe_، _Stripe_ Checkout، _PayPal_ و _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

ئێمە بۆ هەر گیت‌ویەک وردی تایبەت هەیە کە ڕێنمایی دەکات چۆن دەستپێکردنی کار بکەیت، کە لە لایەن لینکەکانی خوارەوە دەتوانیت بدۆزیتەوە.

دەتوانیت وردی پایتەنگەکان ببینیت و بگۆڕیت:

![Payment edit interface](/img/admin/payment-edit.png)

لێرەدا بینینی تەواوی پەڕەی گۆڕینی پایتەنگەکە دەبینیت:

![Payment edit full interface](/img/admin/payment-edit-full.png)

لێرەدا بینینی تەواوی ڕێکخستنی گیت‌وی پایتەنگەکانم بەردەستە:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**ڕێکخستنی گیت‌وی Stripe**

**ڕێکخستنی گیت‌وی PayPal**

**ڕێکخستنی پایتەنگە دەستی (manual payments)**

ئێستا، ئەگەر دەتەوێت _WooCommerce_، _GoCardless_ یان _Payfast_ وەک گیت‌وی پایتەنگت بەکاربهێنیت، پێویستە **دەستکاری و ڕێکبخەیت add-ons (پلاتفۆرمەکانی زیادکردن) یان هەڵبژاردنیان**.

### چۆن add-on ی WooCommerce دەستکاری بکەیت:

ئێمە تێگەیشتین کە _Stripe_ و _PayPal_ لە هەندێک وڵاتدا بەکار نایسێن، کە ئەمەش بۆ بەکارهێنەرانی Ultimate Multisite ڕێگریکارە یان کێشەیەک دەبێت بۆ ئەوەی بتوانن پلاتفۆرمەکە بە شێوەیەکی کاریگەر بەکاربهێنن. بۆیە ئێمە add-onێک دروست کردووە بۆ ئەوەی _WooCommerce_، کە ایکڵۆمێرسی (e-commerce) یەکێکە لە پلاتفۆرمە بەناوبانگەکانی جیهان، لەگەڵیدا یەکبکەیت. پەرەپێکراوەکان لە سەرانسەری جیهان add-on دروست کردووە بۆ ئەوەی گیت‌وی پایتەنگ جیاواز لەگەڵیدا یەکبکەن. ئێمە بەکاریهێنانی ئەمە دەکەین بۆ زیادکردنی گیت‌وی پایتەنگەکان کە دەتوانیت لەگەڵ سیستەمی بڕینەوەی Ultimate Multisite بەکاربهێنیت.

**مهم:** Ultimate Multisite: دمج WooCommerce پێویستی بەوەیە کە WooCommerce لە حداقل یەک شوێنی سەرەکی ئێوە چالاک بێت.

پێشتر، تکایە بگات بۆ لاپەڕەی Add-ons (افزودنییەکان). دەتوانیت بە ڕۆیشتن بۆ **Ultimate Multisite > Settings** بیکەیت. دەبێت دەربکەیتە خوارچەکەی Add-ons (افزودنییەکان). لەوێ دەتوانیت **Check our Add-ons** (پشکنینی افزودنییەکان) بکەیت.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

پاش کلیککردن لەسەر **Check our Add-ons**، دەبێت ڕێگە بدات بۆ لاپەڕەی Add-ons. لێرە دەتوانیت هەموو افزودنییەکان (add-ons) یان Ultimate Multisite ببینیت. سەرنجی بکە بە افزودنی **Ultimate Multisite: WooCommerce Integration**.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

پەڕەیەکی پۆپەوە دەبێت کە وردەکاری ئەو افزودنییە دەربکەت. تەنها سەرنجی بکە بە **Install Now** (هاتوانە ئێستا دامەزرێنە).

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

پاش تەواو بوونەوەی دامەزراندن، دەبێت ڕێگە بدات بۆ لاپەڕەی plugins (پلانگینەکان). لێرە تەنها سەرنجی بکە بە **Network Activate** (چالاککردنی تۆڕ)، و افزودنی WooCommerce لەسەر تۆڕەکەت چالاک دەبێت.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

پاش چالاککردن، ئەگەر هێشتا پلانگینی WooCommerce لەسەر ئەو وێبساتانە نەبوو چالاک نەکراون، یادەوەی دەبینیت.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

 بۆ زیاتر خوێندنەوەی دەربارەی افزودنی Ultimate Multisite: WooCommerce Integration، **لێرە کلیک بکە**.

### چۆن افزودنی GoCardless دامەزرێنیت:

پێکهاتەی دامەزراندنی افزونه‌ی _GoCardless_ وەک دامەزراندنی افزونه‌ی _WooCommerce_ نزیکە لە یەکەوە. تکایە بگە بە لاپەڕەی add-ons (افزونەکان) و هەڵبژێرە **Ultimate Multisite: GoCardless Gateway** افزاونەکە.

<!-- Screenshot unavailable: لاپەڕەی add-ons کە Ultimate Multisite GoCardless Gateway دیاری کراوە -->

پنجەرەی افزاونەکە دەردەکەوێت. لەسەر **Install Now** (هاتوانە دامەزراندن ئێستا) clique بکە.

<!-- Screenshot unavailable: دۆخی وردی افزاون Ultimate Multisite GoCardless Gateway کە دایەری Install Now -->

پاش تەواو بوونی دامەزراندن، دەبێت ڕێگاکەت بۆ لاپەڕەی plugins (افزونەکان) گۆڕدرێتەوە. لێرەدا، تەنها لەسەر **Network Activate** clique بکە و افزاون _GoCardless_ لەسەر تۆڕەکەت چالاک بکرێت.

<!-- Screenshot unavailable: لاپەڕەی plugins کە لینک Network Activate بۆ GoCardless Gateway دیاری کراوە -->

بۆ فێربوونی چۆن دەست پێ بکەیت بە gateway ی _GoCardless_، **ئەم بابەتە بخوێنەوە**.

### چۆنیەتی دامەزراندنی افزاون Payfast:

گەهێنە لاپەڕەی add-ons (افزونەکان) و هەڵبژێرە **Ultimate Multisite: Payfast Gateway** افزاونەکە.

<!-- Screenshot unavailable: لاپەڕەی add-ons کە Ultimate Multisite Payfast Gateway دیاری کراوە -->

پنجەرەی افزاونەکە دەردەکەوێت. لەسەر **Install Now.** (هاتوانە دامەزراندن ئێستا) clique بکە.

<!-- Screenshot unavailable: دۆخی وردی افزاون Ultimate Multisite Payfast Gateway کە دایەری Install Now -->

پاش تەواو بوونی دامەزراندن، دەبێت ڕێگاکەت بۆ لاپەڕەی plugins (افزونەکان) گۆڕدرێتەوە. لێرەدا، تەنها لەسەر **Network Activate** clique بکە و افزاون _Payfast_ لەسەر تۆڕەکەت چالاک بکرێت.

<!-- Screenshot unavailable: لاپەڕەی plugins کە لینک Network Activate بۆ Payfast Gateway دیاری کراوە -->
