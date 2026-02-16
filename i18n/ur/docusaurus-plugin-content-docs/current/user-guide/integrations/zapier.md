---
title: Zapier انٹیگریشن
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Ultimate Multisite کو Zapier کے ساتھ جوڑنا

ہم نے ایک مضمون میں [Webhooks](webhooks.md) کے بارے میں بات کی تھی اور یہ کہ انہیں 3rd party ایپلیکیشنز کے ساتھ جوڑنے کے لیے کیسے استعمال کیا جا سکتا ہے۔

Webhooks کا استعمال تھوڑا پیچیدہ ہے کیونکہ اس کے لیے کوڈنگ اور payloads کو سمجھنے کا گہرا علم درکار ہوتا ہے۔ **Zapier** کا استعمال اس مشکل سے بچنے کا ایک آسان طریقہ ہے۔

Zapier 5000+ سے زیادہ ایپس کے ساتھ جڑا ہوا ہے جو مختلف ایپلیکیشنز کے درمیان رابطے کو آسان بناتا ہے۔

آپ **Triggers** بنا سکتے ہیں جو آپ کے نیٹ ورک پر کوئی واقعہ ہونے پر چالو ہو جائیں گے (مثلاً جب کوئی اکاؤنٹ بنتا ہے تو account_create event چالو ہوتا ہے) یا بیرونی واقعات کے جواب میں اپنے نیٹ ورک پر **Actions** چلا سکتے ہیں (مثلاً اپنے Ultimate Multisite نیٹ ورک میں نئی اکاؤنٹ ممبرشپ بنانا)۔

یہ اس لیے ممکن ہے کیونکہ **Ultimate Multisite کے Zapier triggers** اور actions [REST API](https://developer.ultimatemultisite.com/api/docs/) کی طاقت سے چلتے ہیں۔

## شروع کیسے کریں

سب سے پہلے، Zapier کی ایپ لسٹ میں Ultimate Multisite تلاش کریں۔ متبادل طور پر، آپ [اس لنک](https://zapier.com/apps/wp-ultimo/integrations) پر کلک کر سکتے ہیں۔

اپنے dashboard پر جائیں اور نیا Zap بنانے کے لیے بائیں سائیڈبار میں **+** **Create Zap** بٹن دبائیں۔

![Create Zap بٹن کے ساتھ Zapier dashboard](/img/admin/webhooks-list.png)

آپ کو Zap بنانے کے صفحے پر لے جایا جائے گا۔

سرچ باکس میں "wp ultimo" ٹائپ کریں۔ **Beta** ورژن والا آپشن منتخب کرنے کے لیے کلک کریں۔

![Zapier ایپ لسٹ میں WP Ultimo تلاش کرنا](/img/admin/webhooks-list.png)

ہماری ایپ منتخب کرنے کے بعد، دستیاب event منتخب کریں: **New Ultimate Multisite Event**۔

![New Ultimate Multisite Event trigger منتخب کرنا](/img/admin/webhooks-list.png)

اب ہمیں Zapier کو **آپ کے نیٹ ورک** تک رسائی دینی ہوگی۔ **Sign in** پر کلک کرنے سے ایک نئی ونڈو کھلے گی جو **API credentials** مانگے گی۔

![API credentials کے لیے Zapier Sign in پرامپٹ](/img/admin/webhooks-list.png)

اپنے نیٹ ورک ایڈمن پینل پر جائیں اور **Ultimate Multisite > Settings** > **API & Webhooks** پر جائیں اور API Settings سیکشن تلاش کریں۔

**Enable API** آپشن منتخب کریں کیونکہ یہ کنکشن کام کرنے کے لیے ضروری ہے۔

![Ultimate Multisite میں Enable API آپشن کے ساتھ API Settings](/img/admin/webhooks-list.png)

API Key اور API Secret فیلڈز پر **Copy to Clipboard** آئیکن استعمال کریں اور ان ویلیوز کو انٹیگریشن اسکرین پر پیسٹ کریں۔

URL فیلڈ میں، اپنے نیٹ ورک کا مکمل URL ڈالیں، پروٹوکول (HTTP یا HTTPS) سمیت۔

![API Key، Secret، اور URL فیلڈز کے ساتھ Zapier انٹیگریشن اسکرین](/img/admin/webhooks-list.png)

اگلے مرحلے پر جانے کے لیے **Yes, Continue** بٹن کلک کریں۔ اگر سب کچھ ٹھیک رہا، تو آپ کو اپنا نیا منسلک اکاؤنٹ نظر آئے گا! نیا trigger بنانے کے لیے **Continue** پر کلک کریں۔

## نیا Trigger کیسے بنائیں

اب جب کہ آپ کا اکاؤنٹ منسلک ہو گیا ہے، آپ دستیاب events دیکھ سکتے ہیں۔ آئیے اس ٹیوٹوریل کے لیے **payment_received** event منتخب کرتے ہیں۔

![Zapier trigger میں payment_received event منتخب کرنا](/img/admin/webhooks-list.png)

جب event منتخب ہو جائے اور آپ **continue** پر کلک کریں، تو ایک **test step** نظر آئے گا۔

![trigger کے لیے Zapier test step](/img/admin/webhooks-list.png)

اس مرحلے میں، Zapier جانچے گا کہ آیا آپ کا Zap **اس event کے لیے مخصوص payload حاصل کر سکتا ہے**۔ مستقبل میں اسی قسم کے events میں، اسی ڈھانچے والی معلومات بھیجی جائیں گی۔

![payload کے ساتھ Zapier trigger test کامیابی سے مکمل](/img/admin/webhooks-list.png)

ہماری ٹیوٹوریل میں test **کامیابی سے مکمل** ہوا اور payload کی مثالی معلومات واپس آئیں۔ یہ مثالی معلومات actions بناتے وقت ہماری رہنمائی کے لیے مفید ہوں گی۔ آپ کا trigger اب بن گیا ہے اور دوسری ایپلیکیشنز سے جڑنے کے لیے تیار ہے۔

## Actions کیسے بنائیں

Actions دوسرے triggers سے حاصل کردہ معلومات استعمال کر کے آپ کے نیٹ ورک میں نئی اندراجات بناتے ہیں۔

**action بنانے کے مرحلے** میں آپ Ultimate Multisite **Beta** اور **Create Items on Ultimate Multisite** کا آپشن منتخب کریں گے۔

![Create Items on Ultimate Multisite کے ساتھ action بنانا](/img/admin/webhooks-list.png)

اگلے مرحلے میں آپ یا تو نئی authentication بنائیں گے، جیسا کہ ہم نے **شروع کیسے کریں** میں کیا تھا، یا پہلے سے بنائی ہوئی authentication منتخب کریں گے۔ اس ٹیوٹوریل میں ہم پہلے سے بنائی ہوئی authentication کا انتخاب کریں گے۔

![Zapier action کے لیے authentication منتخب کرنا](/img/admin/webhooks-list.png)

### Action سیٹ اپ کرنا

یہ **action کا اہم مرحلہ** ہے اور یہاں چیزیں تھوڑی مختلف ہیں۔ سب سے پہلے آپ **Item** منتخب کریں گے۔ Item آپ کے نیٹ ورک کا **معلوماتی ماڈل** ہے جیسے **Customers، Payments، Sites، Emails** اور دیگر۔

![Zapier action کے لیے Item کی قسم منتخب کرنا](/img/admin/webhooks-list.png)

کوئی item منتخب کرنے پر، فارم **منتخب item کے لیے لازمی اور اختیاری فیلڈز لانے کے لیے دوبارہ ترتیب** ہو جائے گا۔

مثال کے طور پر، **Customer** item منتخب کرنے پر، فارم فیلڈز وہ سب کچھ لائیں گی جو نیٹ ورک میں نیا Customer بنانے کے لیے بھرنا ضروری ہے۔

![Zapier action سیٹ اپ میں Customer item فیلڈز](/img/admin/webhooks-list.png)

**required** کے طور پر نشان زدہ تمام فیلڈز بھرنے اور continue پر کلک کرنے کے بعد، ایک آخری اسکرین آپ کو بھری ہوئی فیلڈز اور خالی چھوڑی گئی فیلڈز دکھائے گی۔

![بھری ہوئی اور خالی فیلڈز دکھاتا Zapier action test](/img/admin/webhooks-list.png)

جیسے ہی آپ کا test مکمل اور کامیاب ہو جائے، آپ کا action ترتیب دے دیا گیا ہے۔ یہ بھی ضروری ہے کہ آپ اپنے نیٹ ورک پر چیک کریں کہ آیا آپ کے action کے test سے item بنایا گیا ہے۔
