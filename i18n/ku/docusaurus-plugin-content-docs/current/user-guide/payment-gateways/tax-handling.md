---
title: ڕێکارەکانی کارکردن لەگەڵ پۆتەکان
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# چارچێکردنی کارگە (Tax Handling)

Ultimate Multisite یەکێکە لە پلاتفۆرمەکەماندا، بەڵام بۆ ئەوەی دەتوانیت کارگەکان (sales taxes) لەسەر پلاندانان، پەکێجەکان و خزمەتگوزبوواندا کۆبکەیت، دەتوانیت بە ئاسانی ئەنجام بدەیت بدون ئەوەی هیچ add-onێک ن itself بكەیت.

بۆ ئەو کۆمپانیایانەی لە ئەوروپا ماوە، ئێمە **add-on** یەکمان پێشکەش دەکەین کە ئامراز و تایبەتمەندییەکان بۆ باشتر پشتیوانی لە ڕێکارەکانی VAT (پێویستیی کارگە) دەبێت.

Ultimate Multisite بە شێوەیەکی ڕاستەوخۆ پارەی کارگەکان بۆ حکومەت نێرێت یان پێشکەش دەکات؛ ئێمە تەنها یارمەتیت دەدەین لە کاتی ئەنجامدانی مامەڵەکەدا، کارگەکان گونجاو بەکاربهێنیت. **بۆیە تۆ هێشتا دەبێت خودی کارگەکان بۆ حکومەت نێرێیت.**

## چالاککردنی کۆبکەوتنی کارگە (Enabling Tax Collection)

کۆبکەوتنی کارگە بە شێوەیەکی پیش‌تەوا پێشوەخت چالاک نییە. بۆ ئەوەی چالاک بکەیت، دەبێت بگەیەنیت بۆ **Ultimate Multisite > Settings > Taxes** و تایبەتمەندی Enable Taxes (چالاککردنی کارگە) لەسەر toggل بکەیتەوە.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

ئەمە بینینی تەواوی لاپەڕەی تنظیمەکانی کارگە دەگرێتەوە:

![Tax settings full page](/img/config/settings-taxes-full.png)

دەتوانیت هەروەها تنظیمەکانی کارگە بۆ بەرهەمە تاکەکەسییەکان ببینیت:

![Tax settings for products](/img/config/settings-taxes.png)

### کارگە لەسەر و کارگە لەسەر (Tax excluded vs. Tax included)

بە شێوەیەکی پیش‌تەوا، هەمووราقەکانی بەرهەمەکانت کارگە لەسەر نییە، واتە کارگەکان **لەราคای بەرهەمەکەدا نیشان پێدەن**. ئەگەر دیاری بکەین کە کڕیارێک دەبێت کارگە بۆ ئەو پ

شما دەتوانید بەپێی دۆخی **Manage Tax Rates** لەو دایبەیت (sidebar) یاتی ڕێکخستنی تاقیکردنەوەکاندا بگەڕێیت و دەستکارییەکەی بکەیت.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

لە دایبەیت ویرایتی نرخەکانی تاقیکردنەوەکانی، دەتوانیت بەپێی دۆخی **Add new Row** بگەڕێیت و ڕیزە نوێیەکان زیاد بکەیت.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

بۆ هەر نرخێکی تاقیکردنەوە، پێویستە **ناونیشانێک** (کە لەسەر فاکچورە دەنووسرێت) بدات. پاشان دەتوانیت **وڵاتەکەت** (پێویستە)، **ناوچەکە** و **شاری** (هەردووکیان ئاسایی نین) کە ئەم تاقیکردنەوەیە لەسەر ئەو شوێنە بێت، هەڵبژێریت. لە کۆتاییدا، **نرخی تاقیکردنەوەکان بە پۆمۆنت** زیاد بکەیت.

### پۆلەکانی تاقیکردنەوە (Tax Categories)

دەتوانیت پۆلەکانی تاقیکردنەوە زیاتر دروست بکەیت بۆ ئەوەی نرخە جیاوازەکانی تاقیکردنەوە بۆ جۆرەکانی بەرهەمە جیاوازان زیاد بکەیت.

بگەڕێ بۆ **Add new Tax Category**، پاشان ناوی پۆلەکەت بنووسە و **Create** بپرسە.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

بۆ گەڕان لە نێوان پۆلەکان، **Switch** بپرسە و ئەو پۆلەی هەڵبژێرە کە دەتەوێت تاقیکردنەوەی نوێ زیاد بکەیت.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

دەتوانیت پۆلێکی تاقیکردنەوە بۆ بەرهەمێکی دیاریکراو ڕابگرێیت بە ڕۆیشتن بۆ **Product edit page** و پاشان دەربڕینی **Taxes** (تاقیکردنەوەکان).

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

لە هەمان شکریندا، دەتوانیت دۆخی **Is Taxable?** (ئایا تاقیکردنەوەیە؟) بەپێی دۆخەکە نەتەوێت Ultimate Multisite بڵێیت کە لەسەر ئەو بەرهەمە تاقیکردنەوەیەک وەربگرێت.

## پشتگیریکردنی VATی ئەوروپی (European VAT Support)

وەک پێش باسکراوە، ئێمە بۆ کڕیەکانی ناو یوحەکێ (EU) کە پێویستییە تایبەت هەیە بەهۆی ڕێبەری پاشەکەوتە ئەوروپییەکان، ایکشنێکی زیادکراو (add-on) دەبینین.

ئامێرەکانی پاشەکەوتی ئێمە یارمەتیان دەدەن لە چەند شتێکی گرنگدا:

  * لادانی ئاسان بۆ ڕێژەکانی پاشەکەوتی EU؛
  * کۆکردنەوە و پشتڕاستکردنەوەی ژمارەی پاشەکەوت - هەروەها گەڕاندنی پاشەکەوت بۆ ئەو شوێنە کە لە پاشەکەوتدا مەخبۆ نییە (وەک کۆمپانیاکان کە ژمارەی پاشەکەوتی بە ڕاستیی هەیە).

بۆ دامەزراندنی ئەو ایکشنە، بگواشبە **Ultimate Multisite > Settings** و دوای ئەوە clique بکە لەسەر لینکەکەی لایەنی **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

دەبێت ڕێگەپێدراوت بۆ دایکی ایکشنەکانی add-onەکە بکات. لەو شوێنەدا، دەتوانیت لێکۆڵینەوە لە **Ultimate Multisite VAT add-on** و دامەزرێنیت.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

پاشان، بگواشبە **Network Admin > Plugins** و ئەو ایکشنەی add-onەکە بە گشت تۆڕی کارکردنەوە (network-wide) چالاک بکە.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

ئەگەر بگواشبیتەوە بۆ **Tax Settings tab**، دەبینیت چەند بڕیارێکی نوێ هەن کە بەکار دێت. ئەو گزینەی **Enable VAT Support** (چالاککردنی پشتگیریک پاشەکەوت) یەک بکە بۆ چالاککردنی ئامێرەکانی پاشەکەوتی نوێ. لەبیرت مەبێت هەڵسۆپەرەکانت **save** بکە!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### گرتنی ڕێژەکانی پاشەکەوت (Pulling on VAT Tax Rates)

یەکێک لە ئامێرەکان کە یەکگرتووی ئێمە زیاد دەکات، توانای لادانی ڕێژەکانی پاشەکەوتی ئەو وڵاتانەی ناوچەی EU. ئەوە دەکرێت بە سەردنی دارالی編輯 (tax rates editor) دوای چالاککردنی پشتگیریک پاشەکەوتی EU بکرێت.

لە خاڵە کۆتایی پەیجەکەدا، دەتوانیت آپشنەکانی وەرگرتنی نرخەکانی VAT (PDV) ببینیت. کاتێک یەک جۆر نرخ هەڵدەبژێریت و د assuming **Update EU VAT Rates** बटنی دەبینیت، ئەو تابلۆیە بە شێوەیەکی خۆکار دەداتە سەر و نرخە پۆتسی بۆ هەر نێوانمارەی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی 0% دەداتە سەر. پاش ئەوە، تەنها پێویستە هەڵبژێرە (save) بۆ ئەوەی گۆڕانکارییەکان جێبەجێ بکرێن.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

دەتوانیت دوای وەرگرتن نرخەکان دەستکارییان بکەیت. بۆ ئەوەی ئەم کار بکەیت، تەنها ئەو خەتی تابلۆیە بگۆڕە کە پێویستە و clique (کلیک) بکە بۆ هەڵبژاردنی نBeyond values.

### VAT Validation

کاتێک پشتگیریکردنی VAT (PDV) چالاک دەکرێت، Ultimate Multisite خاڵی زیاتری لە فۆرمەکەدا زیاد دەکات، لە خاڵی پانیشی شێوەی بڕینەوەی پۆستەکەدا. ئەم خاڵە تەنها بۆ کڕیارانی کە لە ناو EU ماونەتەوە دەردەکەوێت.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite دوای ئەوە VAT Number یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی یەکێتیی  যাচাই دەکات و ئەگەر بە شێوەیەکی ڕاستەقینە بگەڕێتەوە، مۆدێل Reverse Charge (تکایری گەڕاندنەوە) دەکرێت و نرخەکە بۆ ئەو پۆستە 0% دەکرێت.
