---
title: Webhooks
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Webhooks (v2) کا پہلا تعارف

_**توجہ: یہ فیچر یا آرٹیکل ایڈوانسڈ صارفین کے لیے ہے۔**_

**Webhook** ایک طریقہ ہے جس کے ذریعے کوئی ایپ یا سافٹ ویئر جیسے Ultimate Multisite دوسری ایپلیکیشنز کو فوری معلومات فراہم کر سکتا ہے۔ Webhook ڈیٹا یا payloads دوسری ایپلیکیشنز کو اسی وقت بھیجتا ہے جب کوئی واقعہ ہوتا ہے، یعنی آپ کو **ڈیٹا فوراً مل جاتا ہے۔**

یہ اس وقت مفید ہے جب آپ کو Ultimate Multisite سے کسی دوسرے CRM یا سسٹم میں مخصوص ڈیٹا بھیجنا ہو، جب بھی کوئی event ٹرگر ہو۔ مثال کے طور پر، آپ چاہتے ہیں کہ ہر بار جب نیا صارف اکاؤنٹ بنے تو اس کا نام اور ای میل ایڈریس ایک میلنگ لسٹ میں بھیجا جائے۔

## Webhook کیسے بنائیں

Webhook بنانے کے لیے، اپنے نیٹ ورک ایڈمن dashboard پر جائیں۔ **Ultimate Multisite > Webhooks > Add New Webhook** پر کلک کریں۔

![Webhooks کی فہرست کا صفحہ Add New Webhook بٹن کے ساتھ](/img/admin/webhooks-list.png)

نیا webhook بناتے وقت آپ سے **Name، URL،** اور **Event** جیسی معلومات مانگی جائیں گی۔ آپ اپنے webhook کے لیے کوئی بھی نام استعمال کر سکتے ہیں۔ سب سے اہم فیلڈز URL اور Event ہیں۔

![نئے webhook کا فارم جس میں Name، URL، اور Event فیلڈز ہیں](/img/admin/webhooks-list.png)

URL وہ **endpoint یا منزل** ہے جہاں Ultimate Multisite **payload یا ڈیٹا** بھیجے گا۔ یہ وہ ایپلیکیشن ہے جو ڈیٹا وصول کرے گی۔

Zapier سب سے عام حل ہے جو صارفین تھرڈ پارٹی ایپلیکیشنز کے ساتھ انٹیگریشن آسان بنانے کے لیے استعمال کرتے ہیں۔ Zapier جیسے پلیٹ فارم کے بغیر، آپ کو خود ایک custom function بنانا ہوگا جو ڈیٹا وصول کر کے اسے process کرے۔ **Ultimate Multisite webhook کو Zapier کے ساتھ استعمال کرنے** کے بارے میں یہ آرٹیکل دیکھیں۔

اس آرٹیکل میں، ہم webhook کے بنیادی تصور اور Ultimate Multisite میں دستیاب events کو دیکھیں گے۔ ہم ایک تھرڈ پارٹی سائٹ [requestbin.com](https://requestbin.com/) استعمال کریں گے۔ یہ سائٹ ہمیں بغیر کوئی کوڈ لکھے ایک endpoint بنانے اور payload وصول کرنے کی سہولت دیتی ہے۔ _**نوٹ: یہ صرف ہمیں دکھائے گی کہ ڈیٹا موصول ہو گیا ہے۔**_ Payload پر کوئی processing یا کوئی اور کارروائی نہیں ہوگی۔

[requestbin.com](https://requestbin.com/) پر جائیں اور Create Request Bin پر کلک کریں۔

![RequestBin ویب سائٹ کا Create Request Bin بٹن](/img/admin/webhooks-list.png)

اس بٹن پر کلک کرنے کے بعد، اگر آپ کا پہلے سے اکاؤنٹ ہے تو لاگ ان کرنے کو کہا جائے گا، ورنہ سائن اپ کریں۔ اگر آپ کا اکاؤنٹ ہے تو یہ آپ کو سیدھا ان کے dashboard پر لے جائے گا۔ ان کے dashboard پر آپ کو فوراً وہ endpoint یا URL نظر آئے گا جو آپ اپنا Ultimate Multisite webhook بنانے میں استعمال کر سکتے ہیں۔

![RequestBin dashboard جس میں endpoint URL دکھائی دے رہا ہے](/img/admin/webhooks-list.png)

آگے بڑھیں اور URL کاپی کریں اور Ultimate Multisite پر واپس جائیں۔ endpoint کو URL فیلڈ میں ڈالیں اور dropdown سے ایک event منتخب کریں۔ اس مثال میں، ہم **Payment Received** منتخب کریں گے۔

یہ event اس وقت ٹرگر ہوتا ہے جب کوئی صارف ادائیگی کرتا ہے۔ تمام دستیاب events، ان کی تفصیل، اور payloads صفحے کے نیچے درج ہیں۔ Webhook محفوظ کرنے کے لیے **Add New Webhook** بٹن پر کلک کریں۔

![Payment Received event کے ساتھ کنفیگر کیا گیا Webhook](/img/admin/webhooks-list.png)

اب ہم endpoint پر ایک test event بھیج سکتے ہیں تاکہ دیکھ سکیں کہ ہمارا بنایا ہوا webhook کام کر رہا ہے یا نہیں۔ یہ ہم اپنے بنائے ہوئے webhook کے نیچے **Send Test Event** پر کلک کر کے کر سکتے ہیں۔

![Webhook کے نیچے Send Test Event کا آپشن](/img/admin/webhooks-list.png)

یہ ایک تصدیقی ونڈو دکھاتا ہے جو بتاتی ہے کہ ٹیسٹ کامیاب رہا۔

![Webhook test event کامیاب ہونے کی تصدیق](/img/admin/webhooks-list.png)

اب اگر ہم _Requestbin_ سائٹ پر واپس جائیں تو دیکھیں گے کہ payload موصول ہو گیا ہے جس میں کچھ ٹیسٹ ڈیٹا ہے۔

![RequestBin جس میں موصول ہونے والا webhook payload ڈیٹا دکھایا گیا ہے](/img/admin/webhooks-list.png)

یہ webhook اور endpoints کے کام کرنے کا بنیادی اصول ہے۔ اگر آپ کو اپنا custom endpoint بنانا ہے، تو آپ کو ایک custom function بنانا ہوگا جو Ultimate Multisite سے موصول ہونے والے ڈیٹا کو process کرے۔
