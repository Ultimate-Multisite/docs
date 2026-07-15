---
title: Zapier انضمام
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite کو Zapier کے ساتھ مربوط کرنا

ایک مضمون میں، ہم نے [Webhooks](webhooks.md) پر بات کی تھی اور یہ کہ انہیں تیسری فریق ایپلیکیشنز کے ساتھ مربوط کرنے کے لیے کیسے استعمال کیا جا سکتا ہے۔

webhooks استعمال کرنا قدرے پیچیدہ ہے کیونکہ اس کے لیے coding اور payloads پکڑنے کا پیشگی علم درکار ہوتا ہے۔ **Zapier** استعمال کرنا آپ کے لیے اس سے بچنے کا ایک طریقہ ہے۔

Zapier کی 5000+ سے زیادہ apps کے ساتھ integration موجود ہے، جس سے مختلف ایپلیکیشنز کے درمیان رابطہ آسان ہو جاتا ہے۔

آپ **Triggers** بنا سکتے ہیں جو آپ کے network پر events ہونے پر شروع ہوں گے (مثلاً ایک account بنایا جاتا ہے اور account_create event کو trigger کرتا ہے) یا آپ کے network پر بیرونی events کے جواب میں **Actions** بنا سکتے ہیں (مثلاً اپنے Ultimate Multisite network میں ایک نیا account membership بنانا)۔

یہ اس لیے ممکن ہے کیونکہ **Ultimate Multisite Zapier's triggers** اور actions کو [REST API](https://developer.ultimatemultisite.com/api/docs/) تقویت دیتی ہے۔

## کیسے شروع کریں {#how-to-start}

سب سے پہلے، Zapier app list میں Ultimate Multisite تلاش کریں۔ متبادل طور پر، آپ [اس لنک](https://zapier.com/apps/wp-ultimo/integrations) پر کلک کر سکتے ہیں۔

اپنے dashboard پر جائیں اور نیا Zap ترتیب دینے کے لیے بائیں sidebar پر **+** **Create Zap** button دبائیں۔

![Create Zap button کے ساتھ Zapier dashboard](/img/admin/webhooks-list.png)

آپ کو Zap creation page پر منتقل کر دیا جائے گا۔

search box میں "wp ultimo" لکھیں۔ **Beta** version option منتخب کرنے کے لیے کلک کریں۔

![Zapier app list میں WP Ultimo تلاش کرنا](/img/admin/webhooks-list.png)

ہماری app منتخب کرنے کے بعد، دستیاب event منتخب کریں: **New Ultimate Multisite Event**۔

![New Ultimate Multisite Event trigger منتخب کرنا](/img/admin/webhooks-list.png)

اب ہمیں Zapier کو **آپ کے network** تک رسائی دینی ہے۔ **Sign in** پر کلک کرنے سے ایک نئی window کھلے گی جس میں **API credentials** درکار ہوں گی۔

![API credentials کے لیے Zapier Sign in prompt](/img/admin/webhooks-list.png)

اپنے network admin panel پر جائیں اور **Ultimate Multisite > Settings** > **API & Webhooks** پر navigate کریں اور API Settings section تلاش کریں۔

**Enable API** option منتخب کریں کیونکہ اس connection کے کام کرنے کے لیے یہ ضروری ہے۔

![API Settings اور Enable API options کے ساتھ API and Webhooks settings](/img/admin/settings-api-webhooks.png)

API Key اور API Secret fields پر **Copy to Clipboard** icon استعمال کریں اور ان values کو integration screen پر paste کریں۔

URL field میں، protocol (HTTP یا HTTPS) سمیت اپنے network کا مکمل URL ڈالیں۔

![API Key، Secret، اور URL fields کے ساتھ Zapier integration screen](/img/admin/webhooks-list.png)

اگلے step پر جانے کے لیے **Yes, Continue** button پر کلک کریں۔ اگر سب کچھ درست کام کرے، تو آپ کو اپنے نئے connected account سے خوش آمدید کہا جائے گا! نیا trigger بنانے کے لیے **Continue** پر کلک کریں۔

## نیا Trigger کیسے بنائیں {#how-to-create-a-new-trigger}

اب جبکہ آپ کا account connected ہے، آپ دستیاب events دیکھ سکتے ہیں۔ اس tutorial کے لیے **payment_received** event منتخب کرتے ہیں۔

![Zapier trigger میں payment_received event منتخب کرنا](/img/admin/webhooks-list.png)

جب event منتخب ہو جائے اور آپ **continue** پر کلک کریں، تو ایک **test step** ظاہر ہوگا۔

![trigger کے لیے Zapier test step](/img/admin/webhooks-list.png)

اس مرحلے میں، Zapier test کرے گا کہ آیا آپ کا Zap **اس event کے لیے مخصوص payload fetch** کر سکتا ہے۔ اسی type کے مستقبل کے events میں اسی structure والی information بھیجی جائے گی۔

![payload کے ساتھ Zapier trigger test کامیابی سے مکمل](/img/admin/webhooks-list.png)

ہمارے tutorial میں test **کامیابی سے مکمل** ہوا اور payload example information واپس آئی۔ یہ example information actions بناتے وقت ہماری رہنمائی کے لیے مفید ہوگی۔ آپ کا trigger اب بن چکا ہے اور دوسری applications کے ساتھ connect ہونے کے لیے تیار ہے۔

## Actions کیسے بنائیں {#how-to-create-actions}

Actions دوسرے triggers سے information استعمال کرتے ہیں تاکہ آپ کے network میں نئی entries بنائی جا سکیں۔

**creating an action step** میں آپ Ultimate Multisite **Beta** اور **Create Items on Ultimate Multisite** کا option منتخب کریں گے۔

![Create Items on Ultimate Multisite کے ساتھ action بنانا](/img/admin/webhooks-list.png)

اگلے step میں آپ یا تو اپنی authentication بنائیں گے، بالکل ویسے ہی جیسے ہم نے **کیسے شروع کریں** میں کیا تھا، یا پہلے سے بنی authentication منتخب کریں گے۔ اس tutorial میں ہم وہی authentication منتخب کریں گے جو پہلے بنائی گئی تھی۔

![Zapier action کے لیے authentication منتخب کرنا](/img/admin/webhooks-list.png)

### Action ترتیب دینا {#setting-up-the-action}

یہ **action کا main step** ہے اور یہاں چیزیں کچھ مختلف ہیں۔ پہلی information جو آپ منتخب کریں گے وہ **Item** ہے۔ Item آپ کے network کا **information model** ہے جیسے **Customers, Payments, Sites, Emails** وغیرہ۔

![Zapier action کے لیے Item type منتخب کرنا](/img/admin/webhooks-list.png)

جب کوئی item منتخب کیا جاتا ہے، تو form منتخب item کے لیے **required اور optional fields لانے کے لیے دوبارہ ترتیب** ہو جائے گا۔

مثال کے طور پر، جب item **Customer** منتخب کیا جائے، تو form fields وہ سب کچھ لائیں گی جو network میں نیا Customer بنانے کے لیے پُر کرنا ضروری ہے۔

![Zapier action setup میں Customer item fields](/img/admin/webhooks-list.png)

**required** کے طور پر نشان زد تمام fields پُر کرنے اور continue پر کلک کرنے کے بعد، ایک آخری screen آپ کو پُر کیے گئے fields اور وہ fields دکھائے گی جو خالی چھوڑ دیے گئے تھے۔

![filled اور unfilled fields دکھاتا ہوا Zapier action test](/img/admin/webhooks-list.png)

جیسے ہی آپ کا test مکمل ہو اور کامیاب ہو، آپ کا action configured ہو جاتا ہے۔ یہ بھی ضروری ہے کہ آپ اپنے network پر check کریں کہ آیا item آپ کے action کے test کے ساتھ بنایا گیا تھا۔
