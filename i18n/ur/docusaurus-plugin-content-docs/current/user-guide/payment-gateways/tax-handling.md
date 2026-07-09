---
title: ٹیکس کا انتظام
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# ٹیکس ہینڈلنگ {#tax-handling}

Ultimate Multisite میں ہمارے بنیادی plugin کے اندر ٹیکس وصولی کا module موجود ہے، لہٰذا اگر آپ کو اپنے plans، packages اور services پر sales taxes وصول کرنے کی ضرورت ہو، تو آپ کسی add-ons کو install کیے بغیر آسانی سے ایسا کر سکتے ہیں۔

Europe میں موجود کمپنیوں کے لیے، ہم ایک **add-on** پیش کرتے ہیں جو **VAT** compliance کو بہتر طور پر **support** کرنے کے لیے tools اور features شامل کرتا ہے۔

Ultimate Multisite آپ کی جانب سے حکومت کو taxes file یا remit نہیں کرتا؛ ہم صرف transaction کے وقت مناسب taxes وصول کرنے میں آپ کی مدد کرتے ہیں۔ **آپ کو پھر بھی taxes خود remit کرنے ہوں گے۔**

## ٹیکس وصولی فعال کرنا {#enabling-tax-collection}

Tax collection بطور default فعال نہیں ہوتی۔ اسے فعال کرنے کے لیے، آپ کو **Ultimate Multisite > Settings > Taxes** پر جانا ہوگا اور Enable Taxes setting کو فعال کرنے کے لیے toggle کرنا ہوگا۔

![Tax settings page کے اوپر Enable Taxes toggle](/img/config/settings-taxes-enable.png)

یہاں tax settings page کا مکمل منظر ہے:

![Tax settings کا مکمل page](/img/config/settings-taxes-full.png)

آپ individual products کے لیے tax settings بھی دیکھ سکتے ہیں:

![products کے لیے Tax settings](/img/config/settings-taxes.png)

### ٹیکس خارج بمقابلہ ٹیکس شامل {#tax-excluded-vs-tax-included}

بطور default، آپ کے تمام product prices میں tax شامل نہیں ہوتا، یعنی taxes product کی price میں **شامل نہیں ہوتے**۔ اگر ہم یہ طے کریں کہ کسی customer کو کسی مخصوص purchase پر taxes ادا کرنے چاہئیں، تو ہم subtotal کے **اوپر** taxes شامل کریں گے۔

اگر آپ چاہتے ہیں کہ taxes آپ کے product کی price میں شامل ہوں، تو آپ **Inclusive Tax** setting فعال کر کے ایسا کر سکتے ہیں۔

![Enable Taxes setting کے نیچے Inclusive Tax toggle row](/img/config/settings-taxes-inclusive.png)

اپنی کی گئی تبدیلیاں **save** کرنا نہ بھولیں۔

###

## ٹیکس ریٹس بنانا {#creating-tax-rates}

Tax Collection فعال کرنے کے بعد، آپ کو ہمارے tax rates editor کا استعمال کرتے ہوئے مخصوص locations کے لیے tax rates بنانے ہوں گے۔

آپ Tax settings page کے sidebar پر **Manage Tax Rates** button پر click کر کے editor تک رسائی حاصل کر سکتے ہیں۔

![settings page پر Tax Rates panel میں Manage Tax Rates link](/img/config/settings-taxes-manage-rates.png)

tax rates editor page پر، آپ **Add new Row** button پر click کر کے نئے Tax Rates شامل کر سکتے ہیں۔

![اوپر Add new Row button کے ساتھ Tax rates editor table](/img/config/tax-rates-editor.png)

آپ کو ہر tax rate کو ایک **title** دینا ہوگا (invoices پر استعمال ہوتا ہے)۔ پھر آپ **country** (required)، **state،** اور **city** (دونوں optional) منتخب کر سکتے ہیں جہاں یہ tax وصول کیا جائے گا۔ آخر میں، **tax rate in percents** شامل کریں۔

### ٹیکس کیٹگریز {#tax-categories}

آپ مختلف kinds کے products کے لیے مختلف tax rates شامل کرنے کے لیے multiple Tax Categories بھی بنا سکتے ہیں۔

**Add new Tax Category** پر click کریں، پھر اپنی category کا name لکھیں اور **Create** دبائیں۔

![tax rates editor کے اوپر Add new Tax Category button](/img/config/tax-categories-add.png)

![create category modal میں Tax Category Name input field](/img/config/tax-categories-create-modal.png)

categories میں browse کرنے کے لیے، **Switch** پر click کریں اور وہ category منتخب کریں جس میں آپ نئے taxes شامل کرنا چاہتے ہیں۔

![tax categories کے درمیان change کرنے کے لیے Switch dropdown button](/img/config/tax-categories-switch.png)

![available categories دکھاتا ہوا Tax category selector dropdown](/img/config/tax-categories-select.png)

آپ کسی خاص product کے لیے tax category **Product edit page** پر جا کر اور پھر Taxes tab میں جا کر set کر سکتے ہیں۔

![tax category اور taxable toggle کے ساتھ Product taxes tab](/img/config/product-taxes.png)

اسی screen پر، آپ **Is Taxable?** toggle کو off کر سکتے ہیں تاکہ Ultimate Multisite کو معلوم ہو کہ اسے اس مخصوص product پر taxes collect نہیں کرنے چاہئیں۔

## European VAT Support {#european-vat-support}

جیسا کہ پہلے ذکر کیا گیا، ہمارے پاس EU کے customers کے لیے ایک add-on دستیاب ہے جن کی European VAT regulations کی وجہ سے اضافی requirements ہوتی ہیں۔

ہمارے VAT tools چند اہم چیزوں میں مدد کرتے ہیں:

  * EU VAT rates کی آسان loading؛

  * VAT Number collection اور validation - اور VAT exempt entities (جیسے valid VAT numbers والی companies) کے لیے reverse charging؛

اس add-on کو install کرنے کے لیے، **Ultimate Multisite > Settings** پر جائیں اور پھر **Check our Add-ons** sidebar link پر click کریں۔

![Check our Add-ons link کے ساتھ Settings page sidebar](/img/config/settings-taxes-addons-link.png)

آپ کو ہمارے add-ons page پر redirect کیا جائے گا۔ وہاں، آپ **Ultimate Multisite VAT add-on** تلاش کر کے اسے install کر سکتے ہیں۔

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

پھر، **Network Admin > Plugins** پر جائیں اور اس add-on کو network-wide activate کریں۔

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

اگر آپ واپس **Tax Settings tab** پر جائیں، تو آپ کو نئے options available نظر آئیں گے۔ نئے VAT tools فعال کرنے کے لیے **Enable VAT Support** option کو toggle کریں۔ اپنی settings **save** کرنا نہ بھولیں!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT Tax Rates کھینچنا {#pulling-on-vat-tax-rates}

ہمارے integration کے شامل کیے گئے tools میں سے ایک EU member states کے لیے tax rates load کرنے کی ability ہے۔ یہ EU VAT support فعال کرنے کے بعد tax rates editor page پر جا کر کیا جا سکتا ہے۔

page کے bottom پر، آپ کو VAT pulling options نظر آئیں گے۔ rate type select کرنے اور **Update EU VAT Rates** button پر click کرنے سے ہر EU member state کے tax rates کے ساتھ table pull up اور auto-populate ہو جائے گا۔ پھر، آپ کو صرف اسے save کرنا ہے۔

![tax rates editor کے bottom پر Update EU VAT Rates button](/img/config/tax-rates-vat-pull.png)

آپ انہیں pull کرنے کے بعد values میں edit بھی کر سکتے ہیں۔ ایسا کرنے کے لیے، بس مطلوبہ table line edit کریں اور نئی values save کرنے کے لیے click کریں۔

### VAT Validation {#vat-validation}

جب VAT support فعال ہو، Ultimate Multisite checkout form میں billing address field کے نیچے ایک اضافی field شامل کرے گا۔ یہ field صرف EU میں واقع customers کے لیے ظاہر ہوگی۔

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite پھر VAT Number کی توثیق کرے گا اور اگر یہ درست نکلے تو reverse charge طریقۂ کار لاگو کیا جائے گا اور اس order پر tax rate کو 0% پر سیٹ کر دیا جائے گا۔
