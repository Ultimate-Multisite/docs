---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks (v2) پر پہلی نظر

_**توجہ: نوٹ کریں کہ یہ فیچر یا مضمون اعلیٰ درجے کے صارفین کے لیے ہے۔**_

ایک **webhook** کسی ایپ یا Ultimate Multisite جیسے سافٹ ویئر کے لیے دوسری ایپلیکیشنز کو حقیقی وقت کی معلومات فراہم کرنے کا ایک طریقہ ہے۔ ایک webhook ڈیٹا یا payloads کو ہوتے ہی دوسری ایپلیکیشنز تک پہنچاتا ہے، یعنی آپ کو **فوراً ڈیٹا مل جاتا ہے۔**

یہ اس وقت مددگار ہے جب آپ کو Ultimate Multisite سے کسی دوسرے CRM یا نظام کی طرف مخصوص ڈیٹا کو ہر بار کسی event کے trigger ہونے پر مربوط یا منتقل کرنا ہو۔ مثال کے طور پر، ہر بار جب نیا صارف Account بنایا جائے تو آپ کو صارف کا نام اور ای میل پتہ کسی mailing list کو بھیجنا ہو۔

## webhook کیسے بنائیں

webhook بنانے کے لیے، اپنے network admin dashboard پر جائیں۔ **Ultimate Multisite > Webhooks > Add New Webhook** پر کلک کریں۔

![Add New Webhook بٹن کے ساتھ خالی Webhooks فہرست کا صفحہ](/img/admin/webhooks-list-empty.png)

اس کے بعد آپ webhook configuration میں ترمیم کر سکتے ہیں:

![Name، Event، اور URL فیلڈز کے ساتھ Add New Webhook فارم](/img/admin/webhook-add-modal.png)

نیا webhook بناتے وقت آپ سے **Name, URL،** اور **Event** جیسی معلومات پوچھی جائیں گی۔ آپ اپنے webhook کے لیے کوئی بھی نام استعمال کر سکتے ہیں۔ سب سے اہم فیلڈز URL اور Event ہیں۔

![URL فیلڈ اور payload preview دکھانے والا webhook edit interface](/img/admin/webhook-url-field.png)

URL وہ **endpoint یا destination** ہے جس پر Ultimate Multisite **payload یا data** بھیجے گا۔ یہ وہ ایپلیکیشن ہے جو ڈیٹا وصول کرے گی۔

Zapier سب سے عام حل ہے جسے صارف 3rd party application کے ساتھ integration آسان بنانے کے لیے استعمال کرتا ہے۔ Zapier جیسے platform کے بغیر، آپ کو خود ایک custom function بنانا ہوگا جو ڈیٹا کو catch کرے اور اسے process کرے۔ **Ultimate Multisite webhook کو Zapier کے ساتھ کیسے استعمال کریں** پر یہ مضمون دیکھیں۔

اس مضمون میں، ہم webhook کے کام کرنے کے بنیادی تصور اور Ultimate Multisite میں دستیاب events کو دیکھیں گے۔ ہم [requestbin.com](https://requestbin.com/) نامی 3rd party site استعمال کریں گے۔ یہ site ہمیں endpoint بنانے اور بغیر کسی coding کے payload کو catch کرنے دے گی۔ _**Disclaimer: یہ صرف ہمیں دکھائے گی کہ ڈیٹا وصول ہو چکا ہے۔**_ payload پر کوئی processing یا کسی قسم کی action نہیں کی جائے گی۔

[requestbin.com](https://requestbin.com/) پر جائیں اور Create Request Bin پر کلک کریں۔

اس button پر کلک کرنے کے بعد، یہ آپ سے login کرنے کو کہے گا اگر آپ کا پہلے سے Account ہے، یا sign up کرنے کو۔ اگر آپ کا پہلے سے Account ہے تو یہ آپ کو سیدھا ان کے Dashboard پر لے جائے گا۔ ان کے Dashboard پر، آپ فوراً وہ endpoint یا URL دیکھیں گے جسے آپ اپنا Ultimate Multisite webhook بناتے وقت استعمال کر سکتے ہیں۔

اب URL copy کریں اور Ultimate Multisite پر واپس جائیں۔ endpoint کو URL فیلڈ میں رکھیں اور dropdown سے ایک event منتخب کریں۔ اس مثال میں، ہم **Payment Received** منتخب کریں گے۔

یہ event اس وقت trigger ہوتا ہے جب بھی کوئی صارف payment کرتا ہے۔ دستیاب تمام events، ان کی description، اور payloads صفحے کے نیچے درج ہیں۔ webhook محفوظ کرنے کے لیے **Add New Webhook** button پر کلک کریں۔

![Payment Received منتخب کے ساتھ webhook event dropdown](/img/admin/webhook-event-picker.png)

اب ہم endpoint پر test event بھیج سکتے ہیں تاکہ دیکھ سکیں کہ ہمارا بنایا ہوا webhook کام کر رہا ہے یا نہیں۔ ہم یہ اپنے بنائے ہوئے webhook کے نیچے **Send Test Event** پر کلک کر کے کر سکتے ہیں۔

![ایک configured webhook اور Send Test action دکھاتی ہوئی Webhooks فہرست](/img/admin/webhooks-list-populated.png)

یہ ایک confirmation window دکھاتا ہے جو کہتا ہے کہ test کامیاب تھا۔

![test payload بھیجنے کے بعد webhook test event result](/img/admin/webhook-test-result.png)

اب اگر ہم _Requestbin_ site پر واپس جائیں تو دیکھیں گے کہ payload موصول ہو چکا ہے جس میں کچھ test data شامل ہے۔

یہ webhook اور endpoints کے کام کرنے کا بنیادی اصول ہے۔ اگر آپ custom endpoint بنانا چاہتے ہیں، تو آپ کو Ultimate Multisite سے موصول ہونے والے ڈیٹا کو process کرنے کے لیے custom function بنانا ہوگا۔
