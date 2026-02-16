---
title: سائٹ ٹیمپلیٹس
sidebar_position: 4
_i18n_hash: 35467c61accd92dcfce7e212e2b35474
---
# سائٹ ٹیمپلیٹس (v2)

_**نوٹ: یہ مضمون Ultimate Multisite کے ورژن 2.x کے بارے میں ہے۔ اگر آپ ورژن 1.x استعمال کر رہے ہیں تو**_ **یہ مضمون دیکھیں** _**۔**_

Ultimate Multisite کے ساتھ ایک پریمیم نیٹ ورک بناتے وقت ہمارا مقصد زیادہ سے زیادہ عمل کو خودکار بنانا ہے، جبکہ اپنے صارفین کو ویب سائٹس بناتے وقت لچک اور مختلف آپشنز فراہم کرنا ہے۔ اس توازن کو حاصل کرنے کا ایک آسان طریقہ Ultimate Multisite کے Site Templates فیچر کا استعمال ہے۔

## Site Template کیا ہے؟

جیسا کہ نام سے ظاہر ہے، Site Template ایک بنیادی سائٹ ہے جسے آپ کے نیٹ ورک میں نئی سائٹس بناتے وقت بطور بنیاد استعمال کیا جا سکتا ہے۔

اس کا مطلب ہے کہ آپ ایک بنیادی سائٹ بنا سکتے ہیں، مختلف plugins فعال کر سکتے ہیں، ایک theme منتخب کر سکتے ہیں، اور اسے اپنی مرضی کے مطابق customize کر سکتے ہیں۔ پھر، جب آپ کا صارف نیا اکاؤنٹ بنائے گا، تو انہیں ڈیفالٹ WordPress سائٹ کی بجائے آپ کی بنیادی سائٹ کی ایک کاپی ملے گی جس میں تمام customizations اور مواد پہلے سے موجود ہوگا۔

یہ تو بہت اچھا لگتا ہے، لیکن میں نیا site template کیسے بناؤں؟ یہ انتہائی آسان ہے۔

## نیا Site Template بنانا اور ایڈٹ کرنا

Site Templates آپ کے نیٹ ورک پر عام سائٹس ہی ہیں۔ نیا template بنانے کے لیے آپ سیدھے **Network Admin > Ultimate Multisite > Sites > Add Site** پر جا سکتے ہیں۔

**![Sites لسٹ پیج میں Add site بٹن](/img/config/site-templates-list.png)**

اس سے ایک modal ونڈو کھلے گی جہاں آپ سے **Site title، Site Domain/path،** اور **Site type** مانگا جائے گا۔ **Site Type** dropdown میں یقینی بنائیں کہ آپ **Site Template** منتخب کریں۔

_![Site type dropdown کے ساتھ Add site template modal](/img/config/site-templates-list.png)_

فارم کے نیچے، آپ کو ایک **Copy Site** ٹوگل سوئچ نظر آئے گا۔ یہ آپ کو موجودہ site template کی بنیاد پر نیا site template بنانے کی سہولت دیتا ہے تاکہ آپ کا وقت بچے اور آپ کو شروع سے بنانا نہ پڑے۔

![Copy site ٹوگل کے ساتھ Add site template modal](/img/config/site-templates-list.png)

### Site Template کے مواد کو Customize کرنا

اپنے site template کو customize کرنے کے لیے، بس اس کے dashboard پینل پر جائیں اور مطلوبہ تبدیلیاں کریں۔ آپ نئی پوسٹس، صفحات بنا سکتے ہیں، plugins فعال کر سکتے ہیں اور theme تبدیل کر سکتے ہیں۔ آپ Customizer میں جا کر ہر طرح کی customization آپشنز بھی تبدیل کر سکتے ہیں۔

جب کوئی صارف اس Site Template کی بنیاد پر نئی سائٹ بنائے گا تو یہ سارا ڈیٹا کاپی ہو جائے گا۔

### ایڈوانسڈ آپشنز

اگر آپ کسٹم کوڈنگ سے واقف ہیں، تو آپ ہمارے Search and Replace API کا استعمال کرتے ہوئے نئی سائٹ بننے کے بعد خودکار طور پر معلومات تبدیل کر سکتے ہیں۔ یہ About صفحے پر کمپنی کے نام یا Contact صفحے پر ای میل تبدیل کرنے جیسے کاموں کے لیے مفید ہے۔

### Site Templates کا استعمال

ٹھیک ہے، تو آپ نے مختلف ڈیزائنز، themes اور سیٹنگز کے ساتھ کئی Site Templates بنا لیے۔ اب انہیں اپنے نیٹ ورک میں کیسے کارآمد بنائیں؟

بنیادی طور پر، آپ دو طریقے استعمال کر سکتے ہیں (بیک وقت نہیں):

  * اپنے ہر Plan کے ساتھ ایک Site Template منسلک کرنا

**یا**

  * اپنے صارفین کو sign-up کے دوران خود site templates چننے دینا۔

#### موڈ 1: Site Template تفویض کریں

اس موڈ میں، آپ کے صارفین اکاؤنٹ بناتے وقت template نہیں چن سکتے، بلکہ آپ طے کریں گے کہ ہر Plan کے ساتھ کون سا template استعمال ہوگا۔

ایسا کرنے کے لیے، **Ultimate Multisite > Products > Edit** پر جائیں۔

![Site template تفویض کرنے کے لیے product ایڈٹ کریں](/img/config/product-site-templates.png)

یہ آپ کو **Edit Product** صفحے پر لے جائے گا۔ **Product Options** سیکشن میں، **Site template** ٹیب تلاش کریں اور dropdown سے **Assign Site Template** آپشن منتخب کریں۔ اس سے دستیاب site templates کی فہرست ظاہر ہوگی اور آپ product کے لیے صرف ایک site template منتخب کر سکیں گے۔

![Assign site template آپشن کے ساتھ Product site template ٹیب](/img/config/product-site-templates.png)

#### موڈ 2: دستیاب Site Template میں سے چنیں

اس موڈ میں، آپ اپنے صارفین کو sign-up کے دوران انتخاب کا موقع دیتے ہیں۔ وہ product settings میں آپ کی طے کردہ مختلف site templates میں سے منتخب کر سکیں گے۔ آپ کے پاس منتخب product کے تحت دستیاب site templates کو محدود کرنے کا آپشن ہے۔ اس سے آپ ہر product کے تحت مختلف site templates رکھ سکتے ہیں جو زیادہ قیمت والے product کے لیے مختلف فیچرز دکھانے کے لیے مثالی ہے۔

**Edit Product** صفحے پر، **Product Options** سیکشن میں، **Site template** ٹیب تلاش کریں اور dropdown سے **Choose Available Site Template** آپشن منتخب کریں۔ اس سے دستیاب site templates کی فہرست ظاہر ہوگی اور آپ مطلوبہ site templates منتخب کر سکیں گے۔ آپ یہ ہر template کے Behavior کو چن کر کر سکتے ہیں: **Available** اگر آپ site template کو فہرست میں شامل کرنا چاہتے ہیں۔ _**Not Available**_ اگر آپ site template کو آپشن کے طور پر نہیں دکھانا چاہتے۔ اور **Pre-selected** اگر آپ چاہتے ہیں کہ کوئی ایک site template پہلے سے منتخب ہو۔

![Behavior آپشنز کے ساتھ Choose available site templates](/img/config/product-site-templates.png)

### ڈیفالٹ موڈ: Checkout فارم پر Site template کا انتخاب

اگر آپ چاہتے ہیں کہ رجسٹریشن کے دوران آپ کے تمام site templates دستیاب ہوں، یا شاید آپ ہر product کے تحت site templates تفویض کرنے کا اضافی کام نہیں کرنا چاہتے۔ تو آپ سیدھے اپنے **Checkout Form** میں site template کا انتخاب سیٹ کر سکتے ہیں۔ اس کے لیے، بس **Ultimate Multisite > Checkout Forms** پر جائیں۔ پھر جس فارم کو configure کرنا ہے اس کے نیچے **Edit** پر کلک کریں۔

![Checkout forms لسٹ پیج](/img/config/checkout-forms-list.png)

یہ **Edit Checkout Form** صفحہ کھولے گا۔ **Template Selection** فیلڈ تلاش کریں اور اس کے نیچے **Edit** پر کلک کریں۔

![Template selection فیلڈ کے ساتھ Checkout form ایڈیٹر](/img/config/checkout-form-editor.png)

ایک modal ونڈو ظاہر ہوگی۔ **Template Sites** فیلڈ میں آپ وہ تمام site templates منتخب کر سکتے ہیں جو آپ رجسٹریشن کے دوران دستیاب رکھنا چاہتے ہیں۔ یہاں سے منتخب site templates صارف کے منتخب کردہ کسی بھی product سے قطع نظر دستیاب ہوں گے۔

![Checkout form ایڈیٹر میں Template sites فیلڈ](/img/config/checkout-form-step.png)

### Site Template آپشنز

کچھ اور site templates فنکشنز ہیں جنہیں آپ Ultimate Multisite settings میں آن یا آف کر سکتے ہیں۔

![Ultimate Multisite settings میں Site template آپشنز](/img/config/settings-sites.png)

#### Template Switching کی اجازت

یہ آپشن فعال کرنے سے آپ کے صارفین sign-up کے دوران چنے گئے template کو اکاؤنٹ اور سائٹ بننے کے بعد تبدیل کر سکیں گے۔ یہ صارفین کے نقطہ نظر سے مفید ہے کیونکہ اگر انہیں بعد میں پتا چلے کہ ان کا اصل انتخاب ان کی ضروریات کے لیے بہترین نہیں تھا تو وہ دوبارہ template منتخب کر سکتے ہیں۔

#### صارفین کو اپنی سائٹ بطور Template استعمال کرنے کی اجازت

چونکہ subsite صارفین نے اپنی سائٹ بنانے اور ڈیزائن کرنے میں وقت لگایا ہے، وہ شاید اسے clone کر کے اپنے نیٹ ورک پر نئی subsite بناتے وقت دستیاب site templates میں سے ایک کے طور پر استعمال کرنا چاہیں۔ یہ آپشن انہیں ایسا کرنے کی اجازت دیتا ہے۔

#### Template Duplication پر میڈیا کاپی کریں

یہ آپشن چیک کرنے سے template سائٹ پر اپلوڈ شدہ میڈیا نئی بنائی گئی سائٹ پر کاپی ہو جائے گا۔ اسے ہر plan میں override کیا جا سکتا ہے۔

#### **سرچ انجنز کو Site Templates کو index کرنے سے روکیں**

جیسا کہ اس مضمون میں بتایا گیا، site templates بنیادی ڈھانچے ہیں لیکن پھر بھی آپ کے نیٹ ورک کا حصہ ہیں، یعنی سرچ انجنز انہیں تلاش کر سکتے ہیں۔ یہ آپشن آپ کو site templates چھپانے کی سہولت دیتا ہے تاکہ سرچ انجنز انہیں index نہ کر سکیں۔

## خودکار search-and-replace کے ساتھ Site Templates کو پہلے سے بھرنا

Ultimate Multisite کے سب سے طاقتور فیچرز میں سے ایک رجسٹریشن فارم پر اضافی text، color، اور select فیلڈز شامل کرنے کی صلاحیت ہے۔ یہ ڈیٹا حاصل کرنے کے بعد، ہم اسے منتخب site template کے مخصوص حصوں میں مواد بھرنے کے لیے استعمال کر سکتے ہیں۔ پھر، جب نئی سائٹ publish ہو رہی ہوتی ہے، Ultimate Multisite placeholders کو رجسٹریشن کے دوران درج کردہ اصل معلومات سے بدل دیتا ہے۔

مثال کے طور پر، اگر آپ رجسٹریشن کے دوران اپنے صارف کی کمپنی کا نام لینا چاہتے ہیں اور خودکار طور پر اسے ہوم پیج پر ڈالنا چاہتے ہیں۔ اپنی template سائٹ کے ہوم پیج پر آپ کو placeholders شامل کرنے ہوں گے، جیسے نیچے تصویر میں دکھایا گیا ہے (placeholders کو دوہرے curly braces میں شامل کریں - {{placeholder_name}})۔

![Curly braces میں placeholder text کے ساتھ ہوم پیج](/img/config/site-templates-list.png)

پھر، آپ اپنے checkout فارم پر اس ڈیٹا کو حاصل کرنے کے لیے ملتی جلتی رجسٹریشن فیلڈ شامل کر سکتے ہیں:

![ملتی جلتی رجسٹریشن فیلڈ کے ساتھ Checkout فارم](/img/config/checkout-form-editor.png)

آپ کا صارف پھر رجسٹریشن کے دوران یہ فیلڈ بھر سکے گا۔

![صارف کی بھری ہوئی رجسٹریشن فیلڈ](/img/config/checkout-form-step.png)

![رجسٹریشن فارم کا پیش نظارہ](/img/config/checkout-form-editor.png)

Ultimate Multisite پھر placeholders کو صارف کی فراہم کردہ معلومات سے خودکار طور پر بدل دے گا۔

![سائٹ پر صارف کے ڈیٹا سے تبدیل شدہ Placeholders](/img/config/site-templates-list.png)

### "placeholders سے بھرے template" کا مسئلہ حل کرنا

یہ سب بہت اچھا ہے، لیکن ایک مسئلہ ہے: اب ہماری site templates - جنہیں ہمارے صارفین دیکھ سکتے ہیں - بدصورت placeholders سے بھری ہیں جو زیادہ معنی نہیں رکھتے۔

اس کو حل کرنے کے لیے، ہم placeholders کے لیے فرضی قدریں سیٹ کرنے کا آپشن دیتے ہیں، اور جب آپ کے صارفین template سائٹس دیکھ رہے ہوں تو ہم ان قدروں کو search اور replace کے لیے استعمال کرتے ہیں۔

Template placeholders ایڈیٹر تک رسائی کے لیے **Ultimate Multisite > Settings > Sites** پر جائیں، اور پھر، سائیڈ بار میں، **Edit Placeholders** لنک پر کلک کریں۔

![Sites settings صفحے کے تحت Placeholder settings](/img/config/settings-sites.png)

یہ آپ کو placeholders content ایڈیٹر پر لے جائے گا، جہاں آپ placeholders اور ان کا متعلقہ مواد شامل کر سکتے ہیں۔

![Template placeholders content ایڈیٹر](/img/config/settings-sites.png)
