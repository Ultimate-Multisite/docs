---
title: ڕێکارەکانی کارکردن لەگەڵ پۆšەکان
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# چارچوبکردنی مالیات

Ultimate Multisite دارای یک ماژول جمع‌آوری مالیات در پلاگین اصلی خود است، بنابراین اگر نیاز دارید مالیات‌های فروش را روی طرح‌ها، بسته‌ها و خدمات خود دریافت کنید، می‌توانید به راحتی بدون نصب هیچ افزونه‌ای این کار را انجام دهید.

برای شرکت‌هایی که در اروپا مستقر هستند، ما یک **افزونه** ارائه می‌دهیم که ابزارها و ویژگی‌هایی را برای پشتیبانی بهتر از انطباق با مالیات بر ارزش افزوده (VAT) اضافه می‌کند.

Ultimate Multisite به نمایندگی از شما اظهارنامه یا پرداخت مالیات به دولت نمی‌پردازد؛ ما فقط در زمان تراکنش، کمک می‌کنیم مالیات‌های مربوطه را دریافت کنید. **شما همچنان باید مالیات‌ها را خود پرداخت کنید.**

## فعال کردن جمع‌آوری مالیات

جمع‌آوری مالیات به صورت پیش‌فرض فعال نیست. برای فعال کردن آن، باید به مسیر **Ultimate Multisite > Settings > Taxes** بروید و تنظیم "Enable Taxes" (فعال کردن مالیات) را روشن کنید.

![تغییر وضعیت Enable Taxes در بالای صفحه تنظیمات مالیات](/img/config/settings-taxes-enable.png)

در اینجا نمای کامل صفحه تنظیمات مالیات آمده است:

![صفحه کامل تنظیمات مالیات](/img/config/settings-taxes-full.png)

شما همچنین می‌توانید تنظیمات مالیات را برای محصولات منفرد مشاهده کنید:

![تنظیمات مالیات برای محصولات](/img/config/settings-taxes.png)

### مالیات مشمول در مقابل مالیات غیرمشمول

به صورت پیش‌فرض، تمام قیمت‌های محصول شما شامل مالیات نیست، به این معنی که مالیات‌ها **در قیمت محصول لحاظ نشده‌اند**. اگر ما تشخیص دهیم که مشتری باید مالیات بر یک خرید خاص پرداخت کند، ما مالیات‌ها را **روی** مبلغ کل اضافه خواهیم کرد.

اگر ترجیح می‌دهید مالیات‌ها در قیمت محصول شما لحاظ شوند، می‌توانید با فعال کردن تنظیم "Inclusive Tax" (مالیات شامل) این کار را انجام دهید.

![ردی تغییر وضعیت Inclusive Tax زیر تنظیم Enable Taxes](/img/config/settings-taxes-inclusive.png)

فراموش نکنید که تغییراتی که ایجاد کرده‌اید را **ذخیره** کنید.

###

## ایجاد نرخ‌های مالیات

بعد از فعال کردن جمع‌آوری مالیات، شما باید با استفاده از ویرایشگر نرخ‌های مالیات ما، برای مکان‌های خاص نرخ‌های مالیات تعریف کنید.

تามารถ دەتوانی بە دابەزاندنی دغڕانەکەی **Manage Tax Rates** لە لایەنی کاتژمێری (sidebar)ی لاپەڕەی تنظیمەکانی پۆزارەکان دەربکەویت.

![Link Manage Tax Rates in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

لە لاپەڕەی संچاری دغڕانەکاندا، دەتوانیت دغڕانە نوێیەکان زیاد بکەیت بە دابەزاندنی دغڕانەکەی **Add new Row**.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

پێویستە بۆ هەر دغڕانێک **ناونیشانی** (title) بدەیت (کە لە فاکچورەکاندا بەکاردێت). پاشان دەتوانیت **بۆڵداریش** (country) هەڵبژێریت (پێویستە)، و **ناوستانی** (state)، و **شارەکە** (city) (هەردووکیان ئاسایین) کە ئەم دغڕانەدا پۆزارەکە دەکرێت. لە کۆتاییدا، **دەرەوتی دغڕانەکە بە پۆنتەکان** زیاد بکەیت.

### پۆلەکانی دغڕان (Tax Categories)

دەتوانیت هەروەها چەندین پۆلی دغڕان دروست بکەیت بۆ زیادکردنی دەرەوتەکانی دغڕان جیاواز بۆ جۆرەکانی بەرهەمەکان.

دابەزێنە بۆ **Add new Tax Category**، پاشان ناوی پۆلەکەت بنووسە و **Create** بپرسە.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

بۆ گەڕان لە نێوان پۆلەکان، **Switch** بکە و ئەو پۆلەی هەڵبژێرە کە دەتەوێت دغڕانە نوێیەکان بۆی زیاد بکەیت.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

دەتوانیت پۆلی دغڕانەکە بۆ بەرهەمێکی دیاریکراو تنظیم بکەیت بە ڕۆیشتن بۆ **Product edit page** و پاشان بۆ تابلۆی Taxes.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

لە هەمان شکریندا، دەتوانیت دۆپڵ (toggle)ی **Is Taxable?** بەبێکردنەوە بکەیت بۆ ئەوەی Ultimate Multisite بزانێت کە پێویستە لەو بەرهەمە داواکاری پۆزار نەکات.

## پاڵپشتی VATی یوروبا (European VAT Support)

وەک پێش باسکراوە، ئێمە بۆ کڕیەکانی ناو یوحەکێ (EU) کە پێویستییە تایبەت هەیە بەهۆی ڕێگرتنەکانی پاشەکەوتەی یوحەکێ (VAT)، ایکشنێکی زیادکراو دەبینین.

ئامرازەکانی یوحەکێ ئێمە یارمەتی چەند شتێکی گرنگ دەدەن:

  * لادانی ئاسان بۆ نرخە یوحەکێی یوحەکێیەکان؛

  * کۆکردنەوە و پشکنینی ژمارەی یوحەکێ - هەروەها گەڕاندنی پاشەکەوت بۆ ئەو شوێنە کە لە یوحەکێ ڕێژەی پێویست نییە (وەک کۆمپانیاکان کە ژمارەی یوحەکێی بە شێوەیەکی ڕاستەقینە هەیە).

بۆ دامەزراندنی ئەو ایکشنە، بگواشبە **Ultimate Multisite > Settings** و پاشان لە لینکەکەدا بۆ **Check our Add-ons** بکە.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

ئێمەت دەبێت ڕێگەپێدراوەتەوە بۆ لاپەڕەی ایکشنەکانی زیادکردن (add-ons). لەوێ، دەتوانیت لێکۆڵینەوە لە **Ultimate Multisite VAT add-on** و دامەزرێنیت.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

پاشان بگواشبە **Network Admin > Plugins** و ئەو ایکشنەی بۆ هەموو تۆڕەکە چالاک بکە.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

ئەگەر دەگەڕێیتەوە بۆ **Tax Settings tab**، دەتوانیت ئەو ڕێکارانە نوێیە ببینیت کە بە ئاسان دەستکارییان دەکرێت. هەڵبژاردنی **Enable VAT Support** (چالاککردنەوەی پشتگیریکردنی یوحەکێ) بکە بۆ چالاککردنی ئەو ئامرازە یوحەکێییە نوێیەکان. لەبیرت مەبە، پێویستە **save** بکە هەڵبژاردنەکانت!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### گۆڕینی نرخەکانی یوحەکێی یوحەکێ (Pulling on VAT Tax Rates)

یەکێک لە ئامرازەکان کە ئێمە زیاد دەکەین، توانای لادانی نرخە یوحەکێیی ناو ئەو وڵاتانەی یوحەکێی یوحەکێیان هەیە. ئەم کارە دەتوانیت بە سەردنی لاپەڕەی संچاری نرخەکانی یوحەکێی دوای چالاککردنەوەی پشتگیریکردنی یوحەکێی یوحەکێ (EU VAT support) ئەنجام بدەیت.

لە خاڵە کۆتایی پەیجەکەدا، دەتوانیت آپشنەکانی گرتنی نرخەکانی VAT ببینیت. کاتێک جۆری نرخەکەت هەڵدەبگریت و د assuming **Update EU VAT Rates** बटنەکە دەدەکەیت، تابلۆی نرخەکان بۆ هەموو نێوانمارەی یەکێتی ئاینیای یەکێتی (EU) دەخوات و بە شێوەیەکی خۆکار پڕ دەکات. دواتر، تەنها پێویستە ئەوە بکەیت کە سیف (save) بکەیت.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

دەتوانیت لە دوای گرتنیان، ئەو بەهایانە بگۆڕیت. بۆ ئەوەی ئەم کارە بکەیت، تەنها ئەو ڕێژەیە کە پێویستە دەگۆڕیت دەستکاری بکە و بۆ سیوکردنی ئەو بەهایانە نوێیە کلیک بکە.

### پشکنینی VAT (VAT Validation)

کاتێک پشتگیریکردنی VAT چالاک دەکەیت، Ultimate Multisite خاڵی زیاتری لە فۆرمەکەی گواستنەوەی کارترۆپ (checkout form) دەبێت، لە خوارەوەی فیلدی پاتجێری بڕیاری پارەدان (billing address field). ئەم فیلدە تەنها بۆ کڕیارانی کە لە نێوانمارەی یەکێتی ئاینیای یەکێتی (EU) دانیشتن دەردەکەوێت.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite دواتر ژمارەی VAT یەکێتییەکە پشکنین دەکات و ئەگەر بە شێوەیەکی ڕاستەقینە بێت، مۆدێلی گەڕانەوەی پاشگەز (reverse charge mechanism) دەکرێت و نرخەکە بۆ ئەو داواکارییە 0% دەبێت.
