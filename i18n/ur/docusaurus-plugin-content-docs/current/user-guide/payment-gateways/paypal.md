---
title: PayPal ترتیب دینا
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# PayPal Gateway سیٹ اپ کرنا (v2)

_**اہم نوٹ: یہ آرٹیکل Ultimate Multisite ورژن 2.x کے بارے میں ہے۔**_

آپ ہماری پیمنٹ سیٹنگز پیج پر چار طریقہ کار کو فعال کر سکتے ہیں: Stripe، Stripe Checkout، PayPal اور Manual۔ اس آرٹیکل میں ہم دیکھیں گے کہ **PayPal** کے ساتھ انٹیگریشن کیسے کریں۔

Stripe کی طرح، PayPal بھی آن لائن پیمنٹس کے لیے بہت زیادہ استعمال ہوتا ہے، خاص طور پر WordPress ویب سائٹس پر۔ یہ آرٹیکل آپ کی رہنمائی کرے گا کہ اپنے نیٹ ورک پر PayPal کو پیمنٹ کے طریقے کے طور پر کیسے استعمال کریں۔

یاد رکھیں کہ اس انٹیگریشن کے لیے ضروری API credentials حاصل کرنے کے لیے آپ کے پاس **PayPal Business اکاؤنٹ** ہونا ضروری ہے۔

## اپنے نیٹ ورک پر PayPal فعال کرنا

اپنے نیٹ ورک پر PayPal کو بطور پیمنٹ کا طریقہ فعال کرنے کے لیے، **Ultimate Multisite > Settings > Payments** ٹیب پر جائیں اور PayPal کے سامنے والے باکس پر ٹک کریں۔

![فعال پیمنٹ گیٹ ویز میں PayPal کو فعال کرنا](/img/config/settings-payment-gateways.png)

## PayPal API credentials حاصل کرنا

PayPal کو بطور پیمنٹ گیٹ وے فعال کرنے کے بعد، آپ کو PayPal API **Username**، PayPal API **Password** اور PayPal API **Signature** کی فیلڈز پُر کرنی ہوں گی۔

آپ یہ اپنے PayPal [Live](https://www.paypal.com/home) یا [Sandbox](https://www.sandbox.paypal.com/home) اکاؤنٹ میں لاگ ان کر کے حاصل کر سکتے ہیں۔

(یاد رکھیں کہ آپ پیمنٹس کی جانچ کرنے اور یہ دیکھنے کے لیے **sandbox mode** استعمال کر سکتے ہیں کہ گیٹ وے صحیح طرح سے سیٹ اپ ہے یا نہیں۔ بس متعلقہ سیکشن کو ٹوگل آن کریں۔)

![PayPal API credentials فیلڈز اور sandbox mode ٹوگل](/img/config/settings-payment-gateways.png)

اپنے PayPal اکاؤنٹ کے لیے API Signature یا Certificate credentials کی درخواست کرنے کے لیے:

  1. اپنی [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) پر جائیں۔

  2. **API access** سیکشن میں، **Update** پر کلک کریں۔  
![PayPal Account Settings جس میں API access سیکشن دکھایا گیا ہے](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** کے نیچے، **Manage API credentials** پر کلک کریں۔  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * اگر آپ پہلے ہی API Signature یا Certificate بنا چکے ہیں، تو آپ کو ایک پیج پر بھیج دیا جائے گا جہاں آپ اپنے credentials دیکھ سکتے ہیں۔

     * _**نوٹ:** اگر آپ سے اپنا PayPal اکاؤنٹ تصدیق کرنے کو کہا جائے، تو اسکرین پر دی گئی ہدایات پر عمل کریں۔_

  4. درج ذیل میں سے _ایک_ آپشن منتخب کریں، پھر **Agree and Submit** پر کلک کریں۔

     * **Request API Signature** – API Signature تصدیق کے لیے یہ منتخب کریں۔

     * **Request API Certificate** – API Certificate تصدیق کے لیے یہ منتخب کریں۔

  5. PayPal آپ کے API credentials اس طرح بناتا ہے:  
![PayPal کے بنائے گئے API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** میں API Username، API Password، اور Signature شامل ہیں، جو ختم نہیں ہوتے۔ اضافی سیکیورٹی کے لیے یہ ویلیوز بطور ڈیفالٹ چھپی ہوتی ہیں۔ انہیں دیکھنے یا چھپانے کے لیے **Show/Hide** پر کلک کریں۔ جب کام ہو جائے تو **Done** پر کلک کریں۔

     * **API Certificate credentials** میں API Username، API Password، اور Certificate شامل ہیں، جو تین سال بعد خود بخود ختم ہو جاتے ہیں۔ API Certificate کو اپنے ڈیسک ٹاپ پر محفوظ کرنے کے لیے **Download Certificate** پر کلک کریں۔

بس، آپ کا PayPal پیمنٹ انٹیگریشن مکمل ہو گیا!

اگر PayPal سیٹنگز کے بارے میں آپ کے کوئی سوالات ہیں، تو آپ PayPal کے [Help Center](https://www.paypal.com/br/smarthelp/home) سے رجوع کر سکتے ہیں۔
