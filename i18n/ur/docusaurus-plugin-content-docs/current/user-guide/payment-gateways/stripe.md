---
title: Stripe کی ترتیب
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe گیٹ وے سیٹ اپ کرنا (v2)

_**اہم نوٹ: یہ مضمون Ultimate Multisite ورژن 2.x سے متعلق ہے۔**_

آپ ہماری پیمنٹ سیٹنگز پیج پر چار ادائیگی کے طریقے چالو کر سکتے ہیں: Stripe، Stripe Checkout، PayPal اور Manual۔ اس مضمون میں ہم دیکھیں گے کہ **Stripe** کے ساتھ کیسے انٹیگریٹ کریں۔

## Stripe کو فعال کرنا

اپنے نیٹ ورک پر Stripe کو بطور پیمنٹ گیٹ وے فعال کرنے کے لیے، **Ultimate Multisite > Settings > Payments** پر جائیں اور Active Payment Gateways سیکشن میں **Stripe** یا **Stripe Checkout** کے آگے والے ٹوگل پر کلک کریں۔

![Active payment gateways میں Stripe کو فعال کرنا](/img/config/settings-payment-gateways.png)

### Stripe بمقابلہ Stripe Checkout:

**Stripe:** یہ طریقہ چیک آؤٹ کے دوران کریڈٹ کارڈ نمبر ڈالنے کی جگہ دکھائے گا۔

![چیک آؤٹ کے دوران Stripe کا ان لائن کریڈٹ کارڈ فیلڈ](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** یہ طریقہ چیک آؤٹ کے دوران گاہک کو Stripe Checkout پیج پر ری ڈائریکٹ کرے گا۔

![چیک آؤٹ کے دوران Stripe Checkout ری ڈائریکٹ پیج](/img/config/settings-payment-gateways.png)

اپنی Stripe API keys حاصل کرنا

جب Stripe بطور پیمنٹ گیٹ وے فعال ہو جائے، تو آپ کو **Stripe Publishable Key** اور **Stripe Secret Key** کے فیلڈز بھرنے ہوں گے۔ یہ آپ اپنے Stripe اکاؤنٹ میں لاگ ان کر کے حاصل کر سکتے ہیں۔

_**نوٹ:** آپ یہ جانچنے کے لیے کہ پیمنٹ کا طریقہ کام کر رہا ہے، **Sandbox mode** چالو کر سکتے ہیں۔_

![Stripe API key فیلڈز اور sandbox mode ٹوگل](/img/config/settings-payment-gateways.png)

اپنے Stripe ڈیش بورڈ پر، اوپر دائیں کونے میں **Developers** پر کلک کریں، اور پھر بائیں مینو میں **API Keys** پر۔

![Stripe ڈیش بورڈ Developers سیکشن API Keys کے ساتھ](/img/config/settings-payment-gateways.png)

آپ یا تو **Test Data** استعمال کر سکتے ہیں (یہ جانچنے کے لیے کہ آپ کی پروڈکشن سائٹ پر انٹیگریشن کام کر رہی ہے) یا نہیں۔ اسے تبدیل کرنے کے لیے، **Viewing test data** ٹوگل استعمال کریں۔

![Stripe Viewing test data ٹوگل](/img/config/settings-payment-gateways.png)

**Token** کالم سے **Publishable key** اور **Secret key** کی ویلیو کاپی کریں اور Ultimate Multisite Stripe Gateway فیلڈز میں پیسٹ کریں۔ پھر **Save Changes** پر کلک کریں۔

![Stripe publishable اور secret key ویلیوز](/img/config/settings-payment-gateways.png)

![Ultimate Multisite سیٹنگز میں Stripe keys پیسٹ کرنا](/img/config/settings-payment-gateways.png)

## Stripe Webhook سیٹ اپ کرنا

Stripe webhook ایونٹس بھیجتا ہے جو Ultimate Multisite کو مطلع کرتے ہیں جب بھی **آپ کے Stripe اکاؤنٹ** پر کوئی ایونٹ ہوتا ہے۔

**Developers** پر کلک کریں اور پھر بائیں مینو میں **Webhooks** آئٹم منتخب کریں۔ پھر دائیں طرف **Add endpoint** پر کلک کریں۔

![Stripe Webhooks پیج Add endpoint بٹن کے ساتھ](/img/config/settings-payment-gateways.png)

آپ کو ایک **Endpoint URL** کی ضرورت ہوگی۔ Ultimate Multisite خود بخود endpoint URL بناتا ہے جو آپ **Ultimate Multisite Stripe Gateway** سیکشن میں **Webhook Listener URL** فیلڈ کے بالکل نیچے پا سکتے ہیں۔

![Stripe gateway سیٹنگز میں Webhook Listener URL فیلڈ](/img/config/settings-payment-gateways.png)

Endpoint URL **کاپی** کریں اور Stripe کے **Endpoint URL** فیلڈ میں **پیسٹ** کریں۔

![Stripe webhook سیٹ اپ میں endpoint URL پیسٹ کرنا](/img/config/settings-payment-gateways.png)

اگلا مرحلہ ایک **Event** منتخب کرنا ہے۔ اس آپشن کے تحت، آپ کو صرف **Select all events** باکس چیک کرنا ہے اور **Add events** پر کلک کرنا ہے۔ اس کے بعد تبدیلیاں محفوظ کرنے کے لیے **Add Endpoint** پر کلک کریں۔

![تمام ایونٹس منتخب کرنا اور Stripe endpoint شامل کرنا](/img/config/settings-payment-gateways.png)

بس ہو گیا، آپ کی Stripe پیمنٹ انٹیگریشن مکمل ہے!
