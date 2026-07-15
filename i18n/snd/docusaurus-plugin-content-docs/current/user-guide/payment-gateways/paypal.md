---
title: PayPal کي ترتیب ڏيڻ
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# پے پال گیٹ وے سیٹ اپ کرنا (v2)

_**اہم نوٹ: اس آرٹیکل کا حوالہ Ultimate Multisite ورژن 2.x سے ہے۔**_

آپ اپنی ادائیگی کی سیٹنگز پیج پر چار طریقوں تک ادائیگی فعال کر سکتے ہیں: Stripe، Stripe Checkout، PayPal اور دستی۔ اس آرٹیکل میں، ہم **PayPal** کے ساتھ کیسے انٹیگریٹ کرنا ہے یہ دیکھیں گے۔

جس طرح Stripe کا استعمال آن لائن ادائیگیوں کے لیے بہت زیادہ ہوتا ہے، خاص طور پر WordPress ویب سائٹس پر، اسی طرح یہ آرٹیکل آپ کو بتائے گا کہ اپنے نیٹ ورک پر دستیاب ادائیگی کے طریقے کے طور پر PayPal کا استعمال کیسے کریں۔

نوٹ کریں کہ اس انٹیگریشن کے لیے درکار API کریڈینشلز حاصل کرنے کے لیے آپ کے پاس ایک **PayPal Business account** ہونا ضروری ہے۔

## اپنے نیٹ ورک پر PayPal فعال کرنا {#enabling-paypal-on-your-network}

اپنے نیٹ ورک پر PayPal کو دستیاب ادائیگی کے طریقے کے طور پر فعال کرنے کے لیے، **Ultimate Multisite > Settings > Payments** ٹیب پر جائیں اور PayPal کے آگے والے باکس پر ٹک کریں۔

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## گائیڈڈ سیٹ اپ وِزارڈ کا استعمال کرنا {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 نے ادائیگی کے گیٹ وے کی سیٹنگز میں ایک گائیڈڈ PayPal سیٹ اپ وِزارڈ شامل کیا ہے۔ جب آپ PayPal فعال کر لیں، تو **Ultimate Multisite > Settings > Payments** پر وِزارڈ کا استعمال کریں تاکہ یہ منتخب کر سکیں کہ آپ گیٹ وے کو کیسے جوڑنا چاہتے ہیں اور محفوظ کرنے سے پہلے کون سی کریڈینشلز اب بھی درکار ہیں۔

یہ وِزارڈ دو سیٹ اپ راستوں (setup paths) کی حمایت کرتا ہے:

* **मैनुअल کریڈینشیل انٹری (Manual credential entry)**: جڏهن توهان وٽ پہلے هي PayPal API credentials موجود آهن، OAuth setup توهان جي اڪاونٽ لاءِ موجود نه آهي، يا جڏهن توهان خود PayPal کان credentials kopayna پسند ڪندا آهيو، تڏهن هن پاتھ جو استعمال ڪريو. PayPal خانن ۾ API Username، API Password، ۽ API Signature داخل ڪريو، ڇاڪاڻ ته هي payment settings کي محفوظ ڪرڻ لاء آهي.
* **OAuth connection gate**: ان پاتھ جو صرف هو وقت استعمال ڪريو جڏهن OAuth کاشن موجود هجي ۽ توهان جي installation لاءِ فعال هجي. ویزارد ۾ OAuth flow هڪ feature flag پٺيان ڏيکاري ٿو، تنهن ڪري انهن نڪرن کي جيڪي flag کان محرڪ آهن اهي manual credential entry خانن جو استعمال ڪندا رهندا.

اها جڏهن توهان ویزارد ۾ OAuth کاشن نه ڏسو ته، نیچے دیهيو manual credential entry flow كامل ڪريو. هي gateway پنهنجي پراني Ultimate Multisite 2.x releases جي نفس سان PayPal Business API credentials سان kaam ڪندو آهي.

## PayPal API credentials ڪيئن حاصل ڪجن {#getting-the-paypal-api-credentials}

جڏهن توهان PayPal کي payment gateway طور فعال ڪندا آهيو، تڏهن توهان کي PayPal API **Username**، PayPal API **Password** ۽ PayPal API **Signature** لاءِ خانن ۾ معلومات پوري ڪرڻ جي ضرورت پوندي.

توهان هي توهان جي PayPal [Live](https://www.paypal.com/home) يا [Sandbox](https://www.sandbox.paypal.com/home) اڪاونٽ ۾ لاگ ان ڪري سگهو ٿا.

(ياد رکجو ته توهان payment کي test ڪرڻ ۽ ڏسڻ لاءِ **sandbox mode** استعمال ڪري سگهو ٿا ته gateway صحيح طرح set ڪيو آهي يا نه، صرف ان جو correspondent section ٺڳائي وڃي.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

پنهنجي PayPal اڪاونٽ لاءِ API Signature يا Certificate credentials درخواست ڪرڻ لاءِ:

  1. پنهنجي [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) تي وڃو.

  2. **API access** سيكشن ۾، **Update** ٺڳائي وڃو.
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

     * **API Signature credentials** میں ایک API Username، API Password، اور Signature شامل ہوتا ہے، جو ختم نہیں ہوتا۔ سیکیورٹی بڑھانے کے لیے یہ ویلیوز ڈیفالٹ پر چھپی ہوتی ہیں۔ انہیں آن یا آف کرنے کے لیے **Show/Hide** پر کلک کریں۔ جب کام مکمل ہو جائے تو **Done** پر کلک کریں۔

     * **API Certificate credentials** میں ایک API Username، API Password، اور Certificate شامل ہوتا ہے، جو تین سال بعد خود بخود ختم ہو جاتا ہے۔ API Certificate کو اپنے ڈیسک ٹاپ پر محفوظ کرنے کے لیے **Download Certificate** پر کلک کریں۔

بس اتنا ہی، آپ کا PayPal ادائیگی کا انٹیگریشن مکمل ہو گیا ہے!

اگر آپ کو PayPal کی سیٹنگز کے بارے میں کوئی سوال ہے، تو آپ PayPal کے [Help Center](https://www.paypal.com/br/smarthelp/home) سے رجوع کر سکتے ہیں۔
