---
title: PayPal سیٹ اپ کرنا
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal گیٹ وے کی ترتیب (v2)

_**اہم نوٹ: یہ مضمون Ultimate Multisite ورژن 2.x سے متعلق ہے۔**_

آپ ہماری ادائیگی کی ترتیبات کے صفحے پر ادائیگی کے چار تک طریقے فعال کر سکتے ہیں: Stripe، Stripe Checkout، PayPal اور Manual۔ اس مضمون میں، ہم دیکھیں گے کہ **PayPal** کے ساتھ انضمام کیسے کیا جائے۔

Stripe کی طرح، PayPal آن لائن ادائیگیوں کے لیے وسیع پیمانے پر استعمال ہوتا ہے، خاص طور پر WordPress ویب سائٹس پر۔ یہ مضمون آپ کی رہنمائی کرے گا کہ اپنے نیٹ ورک پر دستیاب ادائیگی کے طریقے کے طور پر PayPal کو کیسے استعمال کیا جائے۔

نوٹ کریں کہ اس انضمام کے لیے درکار API سند حاصل کرنے کے لیے آپ کے پاس **PayPal Business account** ہونا ضروری ہے۔

## اپنے نیٹ ورک پر PayPal فعال کرنا

اپنے نیٹ ورک پر PayPal کو دستیاب ادائیگی کے طریقے کے طور پر فعال کرنے کے لیے، **Ultimate Multisite > Settings > Payments** ٹیب پر جائیں اور PayPal کے ساتھ والے خانے پر نشان لگائیں۔

![فعال ادائیگی گیٹ ویز میں PayPal فعال کرنا](/img/config/settings-payment-gateways.png)

## رہنمائی والے سیٹ اپ وزرڈ کا استعمال

Ultimate Multisite 2.10.0 ادائیگی گیٹ وے کی ترتیبات میں رہنمائی والا PayPal سیٹ اپ وزرڈ شامل کرتا ہے۔ PayPal فعال کرنے کے بعد، **Ultimate Multisite > Settings > Payments** پر وزرڈ استعمال کریں تاکہ آپ منتخب کر سکیں کہ گیٹ وے کو کیسے جوڑنا ہے اور محفوظ کرنے سے پہلے تصدیق کر سکیں کہ کون سی اسناد اب بھی درکار ہیں۔

وزرڈ دو سیٹ اپ راستوں کی حمایت کرتا ہے:

* **دستی سند کا اندراج**: یہ راستہ اس وقت استعمال کریں جب آپ کے پاس پہلے ہی PayPal API اسناد موجود ہوں، جب OAuth سیٹ اپ آپ کے Account کے لیے دستیاب نہ ہو، یا جب آپ PayPal سے اسناد خود نقل کرنا ترجیح دیں۔ PayPal فیلڈز میں API Username، API Password، اور API Signature درج کریں، پھر ادائیگی کی ترتیبات محفوظ کریں۔
* **OAuth کنکشن گیٹ**: یہ راستہ صرف اس وقت استعمال کریں جب OAuth اختیار آپ کی انسٹالیشن کے لیے دستیاب اور فعال ہو۔ وزرڈ OAuth فلو کو ایک فیچر فلیگ کے پیچھے دکھاتا ہے، اس لیے فلیگ کے بغیر نیٹ ورکس دستی سند کے اندراج والے فیلڈز استعمال کرتے رہتے ہیں۔

اگر آپ کو وزرڈ میں OAuth اختیار نظر نہیں آتا، تو نیچے دیا گیا دستی سند کے اندراج کا فلو مکمل کریں۔ گیٹ وے وہی PayPal Business API اسناد استعمال کرتا ہے جو پچھلی Ultimate Multisite 2.x ریلیزز میں تھیں۔

## PayPal API اسناد حاصل کرنا

جب PayPal ادائیگی گیٹ وے کے طور پر فعال ہو جائے، تو آپ کو PayPal API **Username** ، PayPal API **Password** اور PayPal API **Signature** کے فیلڈز پُر کرنے ہوں گے۔

آپ یہ اپنے PayPal [Live](https://www.paypal.com/home) یا [Sandbox](https://www.sandbox.paypal.com/home) Account میں لاگ اِن کر کے حاصل کر سکتے ہیں۔

(یاد رکھیں کہ آپ ادائیگیوں کی جانچ کرنے اور یہ دیکھنے کے لیے کہ آیا گیٹ وے درست طور پر ترتیب دیا گیا ہے، **sandbox mode** استعمال کر سکتے ہیں۔ بس متعلقہ حصے کو آن کر دیں۔)

![PayPal API اسناد کے فیلڈز اور sandbox mode ٹوگل](/img/config/settings-payment-gateways.png)

اپنے PayPal Account کے لیے API Signature یا Certificate اسناد کی درخواست کرنے کے لیے:

  1. اپنے [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) پر جائیں۔

  2. **API access** حصے میں، **Update** پر کلک کریں۔
![API access حصے کے ساتھ PayPal Account Settings](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** کے تحت، **Manage API credentials** پر کلک کریں۔
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * اگر آپ پہلے ہی API Signature یا Certificate بنا چکے ہیں، تو آپ کو ایک ایسے صفحے پر بھیج دیا جائے گا جہاں آپ اپنی اسناد تلاش کر سکتے ہیں۔

     * _**نوٹ:** اگر آپ سے اپنے PayPal Account کی تصدیق کرنے کو کہا جائے، تو اسکرین پر دی گئی ہدایات پر عمل کریں۔_

  4. درج ذیل اختیارات میں سے _ایک_ منتخب کریں، پھر **Agree and Submit** پر کلک کریں۔

     * **Request API Signature** – API Signature تصدیق کے لیے منتخب کریں۔

     * **Request API Certificate** – API Certificate تصدیق کے لیے منتخب کریں۔

  5. PayPal آپ کی API اسناد درج ذیل طور پر بناتا ہے:
![PayPal کی بنائی ہوئی API اسناد](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** میں API Username، API Password، اور Signature شامل ہوتے ہیں، جو ختم نہیں ہوتے۔ اضافی حفاظت کے لیے یہ قدریں بطور ڈیفالٹ چھپی ہوتی ہیں۔ انہیں آن اور آف ٹوگل کرنے کے لیے **Show/Hide** پر کلک کریں۔ مکمل ہونے پر، **Done** پر کلک کریں۔

     * **API Certificate credentials** میں API Username، API Password، اور Certificate شامل ہوتے ہیں، جو تین سال بعد خود بخود ختم ہو جاتا ہے۔ API Certificate کو اپنے ڈیسک ٹاپ پر محفوظ کرنے کے لیے **Download Certificate** پر کلک کریں۔

بس یہی ہے، آپ کا PayPal ادائیگی انضمام مکمل ہو گیا ہے!

اگر آپ کے PayPal ترتیبات کے بارے میں کوئی سوالات ہیں، تو آپ PayPal کے [Help Center](https://www.paypal.com/br/smarthelp/home) سے رجوع کر سکتے ہیں۔
