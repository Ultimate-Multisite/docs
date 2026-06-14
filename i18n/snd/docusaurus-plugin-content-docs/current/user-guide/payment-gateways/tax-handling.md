---
title: ٹیکس سنڀالڻ
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# ٹیکس ہینڈلنگ (Tax Handling)

Ultimate Multisite میں ہمارے کور پگئن کے اندر ایک ٹیکس کلیکشن ماڈیول بنا ہوا ہے، اس لیے اگر آپ کو اپنی پلانز، پیکجز اور سروسز پر سیلز ٹیکس جمع کرنا ہو تو آپ کسی بھی ایڈ-آؤن انسٹال کیے بغیر آسانی سے ایسا کر سکتے ہیں۔

یورپ میں موجود کمپنیوں کے لیے، ہم ایک **ایڈ-آؤن** پیش کرتے ہیں جو VAT کی تعمیل کو بہتر طریقے سے سپورٹ کرنے کے لیے ٹولز اور فیچرز شامل کرتا ہے۔

Ultimate Multisite آپ کی طرف سے حکومت کو ٹیکس فائل یا جمع نہیں کرتا؛ ہم صرف لین دین کے وقت مناسب ٹیکس جمع کرنے میں آپ کی مدد کرتے ہیں۔ **آپ کو پھر بھی اپنے ٹیکس خود جمع کرنے ہوں گے۔**

## ٹیکس کلیکشن کو فعال کرنا (Enabling Tax Collection)

ٹیکس کلیکشن ڈیفالٹ طور پر آن نہیں ہوتا۔ اسے فعال کرنے کے لیے، آپ کو **Ultimate Multisite > Settings > Taxes** پر جانا ہوگا اور Enable Taxes سیٹنگ کو آن کرنا ہوگا۔

![Tax settings toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

یہ ٹیکس سیٹنگز کے پیج کا مکمل نظارہ ہے:

![Tax settings full page](/img/config/settings-taxes-full.png)

آپ انفرادی پروڈکٹس کے لیے بھی ٹیکس کی سیٹنگز دیکھ سکتے ہیں:

![Tax settings for products](/img/config/settings-taxes.png)

### ٹیکس سے خارج شدہ بمقابلہ ٹیکس شامل (Tax excluded vs. Tax included)

ڈیفالٹ طور پر، آپ کی تمام پروڈکٹ کی قیمتیں ٹیکس سے خارج ہوتی ہیں، جس کا مطلب ہے کہ ٹیکس پروڈکٹ کی قیمت میں **شامل نہیں ہوتے**۔ اگر ہم یہ طے کرتے ہیں کہ کسی مخصوص خریداری پر کسٹمر کو ٹیکس ادا کرنے چاہئیں، تو ہم سب ٹوٹل رقم کے اوپر ٹیکس شامل کر دیں گے۔

اگر آپ چاہتے ہیں کہ ٹیکس آپ کی پروڈکٹ کی قیمت میں شامل ہوں، تو آپ **Inclusive Tax** سیٹنگ کو آن کر کے ایسا کر سکتے ہیں۔

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

اپنے کیے گئے تبدیلیوں کو **سیو** کرنا نہ بھولیں۔

###

## ٹیکس ریٹس بنانا (Creating Tax Rates)

ٹیکس کلیکشن فعال کرنے کے بعد، آپ کو ہمارے ٹیکس ریٹس ایڈیٹر کا استعمال کرتے ہوئے مخصوص مقامات کے لیے ٹیکس ریٹس بنانے ہوں گے۔

تخلیص کے لیے، آپ ٹیکس سیٹنگز پیج کے سائیڈبار پر موجود **Manage Tax Rates** بٹن پر کلک کر کے ایڈیٹر تک رسائی حاصل کر سکتے ہیں۔

![Tax Rates panel میں Manage Tax Rates لنک کی تصویر](/img/config/settings-taxes-manage-rates.png)

ٹیکس ریٹس ایڈیٹر پیج پر، آپ **Add new Row** بٹن پر کلک کر کے نئی ٹیکس ریٹس شامل کر سکتے ہیں۔

![اوپر Add new Row بٹن والا ٹیکس ریٹس ایڈیٹر ٹیبل](/img/config/tax-rates-editor.png)

آپ ہر ٹیکس ریٹ کو ایک **title** (جس کا استعمال انوائسز پر ہوتا ہے) دینا چاہیں گے۔ پھر آپ **country** (لازمی)، **state،** اور **city** (دونوں اختیاری) منتخب کر سکتے ہیں جہاں یہ ٹیکس لگایا جائے گا۔ آخر میں، **tax rate in percents** شامل کریں۔

### Tax Categories

آپ مختلف قسم کے مصنوعات کے لیے مختلف ٹیکس ریٹس شامل کرنے کے لیے متعدد Tax Categories بھی بنا سکتے ہیں۔

**Add new Tax Category** پر کلک کریں، پھر اپنے کیٹیگری کا نام لکھیں اور **Create** دبائیں۔

![ٹیکس ریٹس ایڈیٹر کے اوپر Add new Tax Category بٹن](/img/config/tax-categories-add.png)

![ایڈ نئے کیٹیگری کے موڈل میں ٹیکس کیٹیگری کا نام ان پٹ فیلڈ](/img/config/tax-categories-create-modal.png)

کیٹیگریز کو دیکھنے کے لیے، **Switch** پر کلک کریں اور اس کی منتخب کریں جس میں آپ نئی ٹیکس شامل کرنا چاہتے ہیں۔

![ٹیکس کیٹیگریز کے درمیان تبدیل کرنے کے لیے Switch ڈراپ ڈاؤن بٹن](/img/config/tax-categories-switch.png)

![دستیاب کیٹیگریز دکھانے والا Tax category selector ڈراپ ڈاؤن](/img/config/tax-categories-select.png)

آپ کسی خاص پروڈکٹ کے لیے ٹیکس کی کیٹیگری سیٹ کرنے کے لیے **Product edit page** پر جا کر پھر Taxes ٹیب پر جا سکتے ہیں۔

![ٹیکس کیٹیگری اور ٹیکس ایبل ٹوگل والا Product taxes ٹیب](/img/config/product-taxes.png)

اسی سکرین پر، آپ **Is Taxable?** ٹوگل کو آف کر کے Ultimate Multisite کو یہ بتانے کے لیے بتا سکتے ہیں کہ اسے اس مخصوص پروڈکٹ پر ٹیکس نہیں لینے چاہئیں۔

## European VAT Support

جیسا کہ پہلے ذکر کی گئی تھی، ہمارے پاس ایسے کسٹمرز کے لیے ایک add-on دستیاب ہے جنہیں یورپی VAT قوانین کی وجہ سے اضافی ضروریات ہیں۔

ہمارے VAT ٹولز چند اہم کاموں میں مدد کرتے ہیں:

*   EU VAT ریٹس کو آسانی سے لوڈ کرنا؛
*   VAT نمبر جمع کرنا اور تصدیق کرنا - اور VAT معاف اداروں کے لیے ریورس چارجنگ (جیسے درست VAT نمبر والے کمپنیاں)۔

اس add-on کو انسٹال کرنے کے لیے، **Ultimate Multisite > Settings** پر جائیں اور پھر **Check our Add-ons** سائیڈبار لنک پر کلک کریں۔

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

آپ ہمارے add-ons پیج پر ری ڈائریکٹ ہو جائیں گے۔ وہاں، آپ **Ultimate Multisite VAT add-on** تلاش کر سکتے ہیں اور اسے انسٹال کر سکتے ہیں۔

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

پھر، **Network Admin > Plugins** پر جائیں اور اس add-on کو پورے نیٹ ورک کے لیے فعال (activate) کریں۔

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

اگر آپ **Tax Settings tab** پر واپس جاتے ہیں، تو آپ نئے آپشنز دیکھ سکیں گے۔ نئے VAT ٹولز کو فعال کرنے کے لیے **Enable VAT Support** آپشن کو آن (toggle) کریں۔ اپنی سیٹنگز کو **save** کرنا نہ بھولیں!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT ٹیکس ریٹس حاصل کرنا

ہمارے integration میں ایک ٹول یہ صلاحیت شامل ہے کہ EU کے رکن ممالک کے ٹیکس ریٹس لوڈ کیے جا سکیں۔ یہ EU VAT سپورٹ کو فعال کرنے کے بعد ٹیکس ریٹس ایڈیٹر پیج پر جا کر کیا جا سکتا ہے۔

صفحېको तल، تاسو به VAT پورونیت (pulling options) وګورئ۔ एउटा दर प्रकार छान्नुहोस् र **Update EU VAT Rates** बटनमा क्लिक गर्दा, यो तालिका स्वचालित रूपमा सबै EU सदस्य राष्ट्रहरूको कर दरहरूसँग भरिन्छ। त्यसपछि, तपाईंले यसलाई केवल सेभ गर्नुपर्छ।

![VAT अपडेट EU VAT दरहरू बटन तलको कर दर सम्पादनमा](/img/config/tax-rates-vat-pull.png)

तपाईंले यसलाई पउर्न (pull) गरेपछि पनि मानहरू सम्पादन गर्न सक्नुहुन्छ। यो गर्नका लागि, तपाईंले आवश्यक तालिका लाइन सम्पादन गर्नुहोस् र नयाँ मानहरू सेभ गर्न क्लिक गर्नुहोस्।

### VAT प्रमाणीकरण (VAT Validation)

जब VAT समर्थन सक्रिय हुन्छ, Ultimate Multisite ले चेकआउट फारममा बिलिङ ठेगानाको फिल्डभन्दा तल एउटा थप फिल्ड जोड्छ। यो फिल्ड केवल EU मा रहेका ग्राहकहरूको लागि मात्र देखिनेछ।

<!-- Screenshot unavailable: बिलिङ ठेगानाको तल फ्रन्टएन्ड चेकआउट फारममा VAT नम्बर फिल्ड -->

Ultimate Multisite त्यसपछि VAT नम्बर प्रमाणित गर्छ र यदि यो मान्य रूपमा फर्कन्छ भने, रिभर्स चार्ज मेकानिजम लागू गरिन्छ र त्यो अर्डरको कर दर 0% मा सेट गरिन्छ।
