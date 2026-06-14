---
title: ٹیکس سنڀالڻ
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# ٹیکس سنڀال (Tax Handling)

Ultimate Multisite ۾ اسان جي ڪور پليجنٽ ۾ هڪ ٹیکس ڪلڪشن ماڊول بڻايو ويو آهي، تنهن ڪري جيڪڏهن توهان کي پنهنجي پلانز، پيڪيجز ۽ خدمتن تي سيلز رپورٽ ڪرڻ لاءِ ٽيڪس ڪوله چاهي ته، توهان ڪا به add-ons نصب ڪرڻ کان سواءِ اهو آسان ڪري سگهو ٿا.

يورپ ۾ موجود ڪمپنيون لاءِ، اسان هڪ **add-on** ڏين ٿا جيڪو VAT جي تعمير (compliance) کي بهتر سپورٽ ڪرڻ لاءِ اوزار ۽ خصوصيتون شامل ڪري ٿو.

Ultimate Multisite توهان جي طرف کان ڪنهن به عملياب جي نيڪال ۾ ٽيڪس فائل نه ڪري ٿو يا گورنمٽ کي جمع نه ڪري ٿو؛ اسان صرف توهان کي عملي وقت تي مناسب ٽيڪس ڪوله ڪرڻ ۾ مدد ڪندون آهيون. **توهان تنهنجي طرف کان ٽيڪس جمع ڪرڻ لاءِ خود ضرورت رکڻ جڳهه رهندي.**

## ٽيڪس ڪلڪشن کي فعال ڪرڻ (Enabling Tax Collection)

ٽيڪس ڪلڪشن بالڊيو طور تي فعال نه آهي. ان کي فعال ڪرڻ لاءِ، توهان کي **Ultimate Multisite > Settings > Taxes** وڃڻو پوندو ۽ Enable Taxes جو setting ٺهيو رکڻ گهرجي.

![Tax settings toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

هي ٽيڪس سنڀال جي سڄي صفجي جو ڏوه آهي:

![Tax settings full page](/img/config/settings-taxes-full.png)

توهان انحدي مصنوعات لاءِ ٽيڪس سنڀال کي به ڏسي سگهو ٿا:

![Tax settings for products](/img/config/settings-taxes.png)

### ٽيڪس نٿو شامل ڪيا ولا ٽيڪس شامل ڪيا (Tax excluded vs. Tax included)

بالڊيو طور تي، توهان جي تمام مصنوعات جا قيمت ٽيڪس کان خارج آهن، جس کا مطلب آهي ته ٽيڪس **مصنوعي جي قيمت ۾ شامل نه آهن**. جيڪڏهن اسان اهو يقين ڪريون ته ڪنهن خاص خريد لاءِ گهرنمٽ کي ٽيڪس ادا ڪرڻو پوندو، ته اسان ٽيڪس کي سبٽيول (subtotal) تي **اوپر** جو شامل ڪنداسون آهيون.

جيڪڏهن توهان چاهيو ته ٽيڪس توهان جي مصنوعي جي قيمت ۾ شامل رهون، ته توهان **Inclusive Tax** جو setting فعال ڪري سگهو ٿا.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

توهان جيڪي تبديل ڪيا آهن انهن کي **save** ڪرڻ کي منهن نه بھوليين.

###

## ٽيڪس ريتون (Tax Rates) جوٺهڻ

جڏهن توهان Tax Collection فعال ڪري ڇڏيو ٿا، تنهنجو مخصوص جڳهه استعمال ڪرڻ لاءِ ٽيڪس ريتون (tax rates) گهرائڻ لاءِ اسان جي tax rates editor جو استعمال ڪندا رهندا.

تخلیص کے لیے، آپ ٹیکس سیٹنگز پیج کے سائیڈبار پر موجود **Manage Tax Rates** بٹن پر کلک کر کے ایڈیٹر تک رسائی حاصل کر سکتے ہیں۔

![Tax Rates panel میں Manage Tax Rates لنک کی تصویر](/img/config/settings-taxes-manage-rates.png)

ٹیکس ریٹس ایڈیٹر پیج پر، آپ **Add new Row** بٹن پر کلک کر کے نئی ٹیکس ریٹس شامل کر سکتے ہیں۔

![اوپر Add new Row بٹن والا ٹیکس ریٹس ایڈیٹر ٹیبل](/img/config/tax-rates-editor.png)

آپ ہر ٹیکس ریٹ کو ایک **title** (جس کا استعمال انوائسز پر ہوتا ہے) دینا چاہیں گے۔ پھر آپ **country** (لازمی)، **state،** اور **city** (دونوں اختیاری) منتخب کر سکتے ہیں جہاں یہ ٹیکس لگایا جائے گا۔ آخر میں، **tax rate in percents** شامل کریں۔

### Tax Categories

آپ مختلف قسم کے مصنوعات کے لیے مختلف ٹیکس ریٹس شامل کرنے کے لیے متعدد ٹیکس کیٹیگریز بھی بنا سکتے ہیں۔

**Add new Tax Category** پر کلک کریں، پھر اپنی کیٹیگری کا نام لکھیں اور **Create** دبائیں۔

![ٹیکس ریٹس ایڈیٹر کے اوپر Add new Tax Category بٹن](/img/config/tax-categories-add.png)

![کیٹیگری بنانے والے modal میں ٹیکس کیٹیگری کا نام ان پٹ فیلڈ](/img/config/tax-categories-create-modal.png)

کیٹیگریز کو دیکھنے کے لیے، **Switch** پر کلک کریں اور اس کی منتخب کریں جس میں آپ نئی ٹیکس شامل کرنا چاہتے ہیں۔

![ٹیکس کیٹیگریز کے درمیان تبدیل کرنے کے لیے Switch ڈراپ ڈاؤن بٹن](/img/config/tax-categories-switch.png)

![دستیاب کیٹیگریز دکھانے والا ٹیکس کیٹیگری سلیکٹر ڈراپ ڈاؤن](/img/config/tax-categories-select.png)

آپ کسی خاص پروڈکٹ کے لیے ٹیکس کی کیٹیگری سیٹ کرنے کے لیے **Product edit page** پر جا کر پھر Taxes ٹیب پر جا سکتے ہیں۔

![ٹیکس کیٹیگری اور ٹیکس ایبل ٹوگل والا پروڈکٹ ٹیکس ٹیب](/img/config/product-taxes.png)

اسی سکرین پر، آپ **Is Taxable?** ٹوگل کو آف کر کے Ultimate Multisite کو یہ بتانے کے لیے کہہ سکتے ہیں کہ اسے اس مخصوص پروڈکٹ پر ٹیکس نہیں لینے چاہئیں۔

## European VAT Support

جیسا کہ پہلے ذکر کیا گیا تھا، ہمارے پاس ایسے کسٹمرز کے لیے ایک add-on دستیاب ہے جو یورپی یونین میں ہیں اور یورپی VAT قوانین کی وجہ سے ان کی اضافی ضروریات ہیں۔

ہمارے VAT ٹولز دو اہم کاموں میں مدد کرتے ہیں:

* EU VAT ریٹس کو آسانی سے لوڈ کرنا؛
* VAT نمبر جمع کرنا اور تصدیق کرنا - اور VAT سے معاف اداروں (جیسے درست VAT نمبر والے کمپنیوں) کے لیے ریورس چارجنگ۔

اس add-on کو انسٹال کرنے کے لیے، **Ultimate Multisite > Settings** پر جائیں اور پھر **Check our Add-ons** سائیڈبار لنک پر کلک کریں۔

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

آپ ہمارے add-ons پیج پر ری ڈائریکٹ ہو جائیں گے۔ وہاں، آپ **Ultimate Multisite VAT add-on** تلاش کر سکتے ہیں اور اسے انسٹال کر سکتے ہیں۔

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

پھر، **Network Admin > Plugins** پر جائیں اور اس add-on کو پورے نیٹ ورک کے لیے فعال (activate) کریں۔

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

اگر آپ **Tax Settings tab** پر واپس جاتے ہیں، تو آپ کو نئے آپشنز نظر آئیں گے۔ نئے VAT ٹولز کو فعال کرنے کے لیے **Enable VAT Support** آپشن کو آن (toggle) کریں۔ اپنی سیٹنگز کو **save** کرنا نہ بھولیں!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT ٹیکس ریٹس حاصل کرنا

ہمارے integration میں ایک ٹول یہ صلاحیت شامل ہے کہ EU کے رکن ممالک کے ٹیکس ریٹس لوڈ کیے جا سکیں۔ یہ EU VAT سپورٹ کو فعال کرنے کے بعد ٹیکس ریٹس ایڈیٹر پیج پر جا کر کیا جا سکتا ہے۔

صفحېको तल، تاسو به VAT پورونیت (pulling) کا انتخابونه وګورئ۔ एउटा दर प्रकार छान्नुहोस् र **Update EU VAT Rates** बटनमा क्लिक गर्दा, यो तालिका स्वचालित रूपमा सबै EU सदस्य राष्ट्रहरूको लागि कर दरहरू सहित खुल्छ। त्यसपछि, तपाईंलाई यसलाई केवल सेभ गर्न मात्रै पर्ने हुन्छ।

![VAT दरहरू अपडेट गर्ने बटन पृष्ठको तल रहेको कर दर एडिटरको](/img/config/tax-rates-vat-pull.png)

तपाईंले तिनीहरूलाई लिएपछि पनि मानहरू सम्पादन गर्न सक्नुहुन्छ। यो गर्नका लागि, तपाईंलाई आवश्यक पर्ने तालिका लाइन सम्पादन गर्नुहोस् र नयाँ मानहरू सेभ गर्न क्लिक गर्नुहोस्।

### VAT प्रमाणीकरण (VAT Validation)

जब VAT समर्थन सक्रिय हुन्छ, Ultimate Multisite ले चेकआउट फारममा बिलिङ ठेगानाको फिल्डभन्दा तल एउटा थप फिल्ड जोड्छ। यो फिल्ड केवल EU मा रहेका ग्राहकहरूको लागि मात्र देखिनेछ।

<!-- Screenshot unavailable: बिलिङ ठेगानाको तल फ्रन्टएन्ड चेकआउट फारममा VAT नम्बर फिल्ड -->

Ultimate Multisite त्यसपछि VAT नम्बर प्रमाणित गर्छ र यदि यो मान्य रूपमा फर्कन्छ भने, रिभर्स चार्ज मेकानिजम लागू गरिन्छ र त्यो अर्डरको कर दर 0% मा सेट गरिन्छ।
