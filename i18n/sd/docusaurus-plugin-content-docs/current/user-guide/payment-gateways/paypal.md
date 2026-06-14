---
title: PayPal کي ترتیب ڏيڻ
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# پے پال گیٹ وے سیٹ اپ کرنا (v2)

_**اہم نوٹ: اس مضمون میں Ultimate Multisite ورژن 2.x کا ذکر کیا گیا ہے۔**_

آپ ہماری ادائیگی کی سیٹنگز پیج پر چار طریقوں تک ادائیگی کے طریقے فعال کر سکتے ہیں: Stripe، Stripe Checkout، PayPal اور دستی۔ اس مضمون میں، ہم **PayPal** کے ساتھ کیسے انٹیگریٹ کرنا ہے یہ دیکھیں گے۔

جس طرح Stripe، آن لائن ادائیگیوں کے لیے بہت زیادہ استعمال ہوتا ہے، خاص طور پر WordPress ویب سائٹس پر۔ یہ مضمون آپ کی نیٹ ورک پر دستیاب ادائیگی کے طریقے کے طور پر PayPal کو کیسے استعمال کرنا ہے اس بارے میں آپ کی رہنمائی کرے گا۔

نوٹ کریں کہ اس انٹیگریشن کے لیے درکار API کریڈینشلز حاصل کرنے کے لیے آپ کے پاس ایک **PayPal Business account** ہونا ضروری ہے۔

## اپنے نیٹ ورک پر پے پال کو فعال کرنا

اپنے نیٹ ورک پر PayPal کو دستیاب ادائیگی کا طریقہ بنانے کے لیے، **Ultimate Multisite > Settings > Payments** ٹیب پر جائیں اور PayPal کے آگے والے باکس پر ٹک کریں۔

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## گائیڈڈ سیٹ اپ وِزارڈ کا استعمال کرنا

Ultimate Multisite 2.10.0 نے ادائیگی کے گیٹ وے کی سیٹنگز میں ایک گائیڈڈ PayPal سیٹ اپ وِزارڈ شامل کیا ہے۔ جب آپ PayPal فعال کر لیں، تو **Ultimate Multisite > Settings > Payments** پر وِزارڈ کا استعمال کریں تاکہ یہ منتخب کریں کہ آپ گیٹ وے کو کیسے جوڑنا چاہتے ہیں اور محفوظ کرنے سے پہلے کون سی معلومات اب بھی درکار ہیں۔

وِزارڈ دو سیٹ اپ راستوں کی حمایت کرتا ہے:

* **मैनुअल کریڈینشلز درج کرنا (Manual credential entry)**: اس پاتھ کا استعمال کریں جب آپ کے پاس پہلے سے PayPal API کریڈینشلز ہوں، جب آپ کے اکاؤنٹ کے لیے OAuth سیٹ اپ دستیاب نہ ہو، یا جب آپ خود PayPal سے کریڈینشلز کا کاپی کرنا پسند کریں۔ PayPal فیلڈز میں API Username، API Password، اور API Signature درج کریں، پھر ادائیگی کی سیٹنگز محفوظ کر دیں۔
* **OAuth کنکشن گیٹ (OAuth connection gate)**: اس پاتھ کا استعمال صرف تب کریں جب آپ کے انسٹال کے لیے OAuth کا آپشن دستیاب اور فعال ہو۔ وِزارڈ ایک فیچر فلگ کے پیچھے OAuth فلو دکھاتا ہے، لہذا وہ نیٹ ورکس جن میں یہ فلگ نہیں ہے وہ دستی کریڈینشلز درج کرنے والے فیلڈز کا استعمال جاری رکھیں گے۔

اگر آپ کو وِزارڈ میں OAuth کا آپشن نظر نہیں آتا تو نیچے دی گئی دستی کریڈینشلز درج کرنے کی کارروائی مکمل کریں۔ گیٹ وے پچھلے Ultimate Multisite 2.x ریلیز کے بالکل جیسے PayPal Business API کریڈینشلز کے ساتھ کام کرتا ہے۔

## PayPal API کریڈینشلز حاصل کرنا (Getting the PayPal API credentials)

ایک بار جب آپ PayPal کو ادائیگی کا گیٹ وے کے طور پر فعال کر دیں، تو آپ کو PayPal API **Username**، PayPal API **Password** اور PayPal API **Signature** کے لیے فیلڈز بھرنے ہوں گے۔

آپ یہ اپنے PayPal [Live](https://www.paypal.com/home) یا [Sandbox](https://www.sandbox.paypal.com/home) اکاؤنٹ میں لاگ ان کر کے حاصل کر سکتے ہیں۔

(یاد رکھیں کہ آپ ادائیگیوں کو ٹیسٹ کرنے اور دیکھ سکتے ہیں کہ گیٹ وے صحیح طریقے سے سیٹ ہے یا نہیں اس کے لیے **sandbox mode** استعمال کر سکتے ہیں۔ بس متعلقہ سیکشن آن کریں۔)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

اپنے PayPal اکاؤنٹ کے لیے API Signature یا سرٹیفکیٹ کریڈینشلز کی درخواست کرنے کے لیے:

  1. اپنے [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) پر جائیں۔

  2. **API access** سیکشن میں، **Update** پر کلک کریں۔
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

3. **NVP/SOAP API integration (Classic)** دے تحت، **Manage API credentials** پر کلک کریں۔
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * اگر آپ نے پہلے ہی کوئی API Signature یا Certificate بنا لیا ہے، تو آپ کو ایک ایسے صفحے پر ری ڈائریکٹ کیا جائے گا جہاں آپ اپنی تفصیلات دیکھ سکتے ہیں۔

     * _**نوٹ:** اگر آپ سے اپنے PayPal اکاؤنٹ کی تصدیق کرنے کے لیے کہا جاتا ہے، تو اسکرین پر دیے گئے ہدایات پر عمل کریں۔_

  4. ان میں سے **ایک** آپشن منتخب کریں، پھر **Agree and Submit** پر کلک کریں۔

     * **Request API Signature** – API Signature کی تصدیق کے لیے یہ منتخب کریں۔

     * **Request API Certificate** – API Certificate کی تصدیق کے لیے یہ منتخب کریں۔

  5. PayPal آپ کی API تفصیلات اس طرح تیار کرتا ہے:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** میں ایک API Username، API Password، اور Signature شامل ہوتا ہے، جو ختم نہیں ہوتا۔ سیکیورٹی بڑھانے کے لیے یہ ویلیوز ڈیفالٹ طور پر چھپی ہوتی ہیں۔ انہیں آن یا آف کرنے کے لیے **Show/Hide** پر کلک کریں۔ جب کام مکمل ہو جائے تو، **Done** پر کلک کریں۔

     * **API Certificate credentials** میں ایک API Username، API Password، اور Certificate شامل ہوتا ہے، جو تین سال بعد خود بخود ختم ہو جاتا ہے۔ API Certificate کو اپنے ڈیسک ٹاپ پر محفوظ کرنے کے لیے **Download Certificate** پر کلک کریں۔

بس اتنا ہی، آپ کا PayPal ادائیگی کا انٹیگریشن مکمل ہو گیا!

اگر آپ کو PayPal کی سیٹنگز کے حوالے سے کوئی سوال ہے، تو آپ PayPal کے [Help Center](https://www.paypal.com/br/smarthelp/home) سے رجوع کر سکتے ہیں۔
