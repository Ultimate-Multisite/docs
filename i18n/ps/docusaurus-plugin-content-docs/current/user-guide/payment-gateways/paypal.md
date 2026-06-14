---
title: پایپال تنظیمول
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# پيپال گیتوي (v2) تنظیم کول

_**نوت مهم: دا مقاله به Ultimate Multisite نسخه 2.x اشاره کوي.**_

تاسو کولی شئ تا چهار طريقهو د طالایي کولو په ماکينې کې فعال کړئ: Stripe، Stripe Checkout، PayPal او Manual. په دې مقاله کې، موږ به وګورئ چې څنګه د **PayPal** سره یوځای کیږو.

لکه لکه Stripe، PayPal ډېر کارول کیږي د آنلاین پاملاتو لپاره، تر ټولو ډېر په WordPress ویب پاڼو کې. دا مقاله تاسو ته لارښوونه کوي چې څنګه PayPal د یوه طالایي yöntومه като پر خپل شبکه به کارول کړئ.

ګرځئ چې تاسو باید د **PayPal Business account** ولرئ که تاسو د دې یکاړې لپاره اړین API credential ترلاسه کړئ.

## د پيپال په خپل شبکه کې فعال کول

که تاسو غواړئ چې PayPal د یوه طالایي yöntومه като پر خپل شبکه به کارول شي، ته ورته **Ultimate Multisite > Settings > Payments** ګورئ او د PayPal څخه دمخه کیښودونکی مربع تیک ورکړئ.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## د لارښوونه شوي تنظیم کولو کارول

Ultimate Multisite 2.10.0 د طالایي yöntومې تنظیمونو ته یو لارښوونه شوی PayPal تنظیم کولو کار اضافه کړی دی. کله چې تاسو PayPal فعال کړئ، په **Ultimate Multisite > Settings > Payments** کې له دې کار څخه کار واکوئ ترڅو غوره کړئ چې تاسو څنګه غواړئ چې ګیتوي سره تړلی شئ او تایید کړئ چې کوم credential پدې وخت هم اړین دي تر مخکې له ساتلو وړاندې.

دا لارښوونه دوه تنظیم کولو لارې پام وړي:

* **ম্যানুয়ালি ক্রেডেনশিয়াল প্রবেশ করানো**: যখন আপনার কাছে ইতিমধ্যেই PayPal API ক্রেডেনশিয়াল থাকে, যখন আপনার অ্যাকাউন্টের জন্য OAuth সেটআপ উপলব্ধ না হয়، অথবা যখন আপনি নিজে থেকে PayPal-এ سے کرডেনشियल کاپی کرنا پسند کرتے ہیں تو اس راستے کا استعمال کریں۔ PayPal فیلڈز میں API Username، API Password، اور API Signature درج کریں، پھر ادائیگی کی سیٹنگز محفوظ کریں۔
* **OAuth کنکشن گیٹ**: صرف تب اس راستے کا استعمال کریں جب آپ کے انسٹالیشن کے لیے OAuth کا آپشن دستیاب اور فعال ہو۔ ویزارد ایک فیچر فلگ کے پیچھے OAuth فلو دکھاتا ہے، لہذا وہ نیٹ ورکس جن میں یہ فلگ نہیں ہے وہ دستی کریڈینشیل انٹری فیلڈز کا استعمال جاری رکھیں گے۔

اگر آپ کو ویزارد میں OAuth کا آپشن نظر نہیں آتا تو نیچے دی گئی دستی کریڈینشیل انٹری کے عمل کو مکمل کریں۔ گیٹ وے پچھلے Ultimate Multisite 2.x ریلیز کی طرح ہی PayPal Business API کریڈینشلز کے ساتھ کام کرتا ہے۔

## PayPal API کریڈینشلز حاصل کرنا

ایک بار جب آپ PayPal کو ادائیگی کا گیٹ وے کے طور پر فعال کر دیں، تو آپ کو PayPal API **Username**، PayPal API **Password** اور PayPal API **Signature** کے فیلڈز کو پُر کرنے کی ضرورت ہوگی۔

آپ یہ اپنے PayPal [Live](https://www.paypal.com/home) یا [Sandbox](https://www.sandbox.paypal.com/home) اکاؤنٹ میں لاگ ان کر کے حاصل کر سکتے ہیں۔

(یاد رکھیں کہ آپ ادائیگیوں کا تجربہ کرنے اور دیکھ سکتے ہیں کہ گیٹ وے صحیح طریقے سے سیٹ ہے یا نہیں اس کے لیے **سینڈ باکس موڈ** استعمال کر سکتے ہیں۔ بس متعلقہ سیکشن کو آن کریں۔)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

اپنے PayPal اکاؤنٹ کے لیے API Signature یا سرٹیفکیٹ کریڈینشلز کی درخواست کرنے کے لیے:

  1. اپنے [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) پر جائیں۔

  2. **API access** سیکشن میں، **Update** پر کلک کریں۔
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

۳. **NVP/SOAP API integration (Classic)** کے تحت، **Manage API credentials** پر کلک کریں۔
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

* اگر آپ نے پہلے ہی کوئی API Signature یا Certificate بنا لیا ہے، تو آپ کو ایک ایسے صفحے پر بھیج دیا جائے گا جہاں آپ اپنی تفصیلات دیکھ سکتے ہیں۔

* _**نوٹ:** اگر آپ سے اپنے PayPal اکاؤنٹ کی تصدیق کرنے کے لیے کہا جاتا ہے، تو اسکرین پر دیے گئے ہدایات پر عمل کریں۔_

۴. ان میں سے **ایک** آپشن منتخب کریں، پھر **Agree and Submit** پر کلک کریں۔

* **Request API Signature** – یہ API Signature کی تصدیق کے لیے منتخب کریں۔

* **Request API Certificate** – یہ API Certificate کی تصدیق کے لیے منتخب کریں۔

۵. PayPal آپ کی API تفصیلات اس طرح تیار کرتا ہے:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

* **API Signature credentials** میں ایک API Username، API Password اور Signature شامل ہوتے ہیں، جو کبھی ختم نہیں ہوتا۔ سیکیورٹی بڑھانے کے لیے یہ ویلیوز ڈیفالٹ طور پر چھپی ہوتی ہیں۔ انہیں آن یا آف کرنے کے لیے **Show/Hide** پر کلک کریں۔ جب کام مکمل ہو جائے تو **Done** پر کلک کریں۔

* **API Certificate credentials** میں ایک API Username، API Password اور Certificate شامل ہوتے ہیں، جو تین سال بعد خود بخود ختم ہو جاتا ہے۔ API Certificate کو اپنے ڈیسک ٹاپ پر محفوظ کرنے کے لیے **Download Certificate** پر کلک کریں۔

بس اتنا ہی، آپ کا PayPal ادائیگی کا انٹیگریشن مکمل ہو گیا ہے!

اگر آپ کو PayPal کی سیٹنگز کے بارے میں کوئی سوال ہے، تو آپ PayPal کے [Help Center](https://www.paypal.com/br/smarthelp/home) سے رجوع کر سکتے ہیں۔
