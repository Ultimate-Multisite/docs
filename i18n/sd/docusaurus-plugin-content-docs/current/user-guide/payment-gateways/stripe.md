---
title: Stripe کي ترتیب ڏيڻ
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# اسٹریپ گیتوی کو سیٹ اپ کرنا (v2)

_**اہم نوٹ: یہ آرٹیکل Ultimate Multisite ورژن 2.x کا حوالہ دیتا ہے۔**_

آپ اپنی ادائیگی کی سیٹنگز پیج پر چار طریقوں تک ادائیگی فعال کر سکتے ہیں: Stripe، Stripe Checkout، PayPal اور دستی۔ اس آرٹیکل میں، ہم **Stripe** کے ساتھ کیسے انٹیگریٹ کرنا ہے یہ دیکھیں گے۔

## Stripe کو فعال کرنا {#enabling-stripe}

اپنے نیٹ ورک پر Stripe کو دستیاب ادائیگی کا گیٹ وے بنانے کے لیے، **Ultimate Multisite > Settings > Payments** پر جائیں اور Active Payment Gateways سیکشن میں **Stripe** یا **Stripe Checkout** کے آگے والے ٹوگل (toggle) پر ٹک کریں۔

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe بمقابلہ Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** یہ طریقہ چیک آؤٹ کے دوران کریڈٹ کارڈ نمبر ڈالنے کی جگہ دکھائے گا۔

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** یہ طریقہ چیک آؤٹ کے دوران کسٹمر کو Stripe Checkout پیج پر ری ڈائریکٹ کر دے گا۔

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

اپنے Stripe API keys حاصل کرنا

ایک بار جب Stripe کو ادائیگی کا گیٹ وے فعال کر دیا جائے، تو آپ کو **Stripe Publishable Key** اور **Stripe Secret Key** کے فیلڈز کو پُر کرنے کی ضرورت ہوگی۔ آپ یہ اپنے Stripe اکاؤنٹ میں لاگ ان کر کے حاصل کر سکتے ہیں۔

_**نوٹ:** آپ ٹیسٹ کرنے کے لیے **Sandbox mode** فعال کر سکتے ہیں کہ ادائیگی کا طریقہ کام کر رہا ہے یا نہیں۔_

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

اپنے Stripe ڈیش بورڈ پر، اوپر دائیں کونے میں **Developers** پر کلک کریں، اور پھر بائیں مینو میں **API Keys** پر جائیں۔

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

تجيئن توهان يا ته **Test Data** (توهه توهان جي پرودڪشن سائيٽ تي ان انتغاليشن ڪم ڪري رهي آهي ته نه). ان کي تبديل ڪرڻ لاءِ **Viewing test data** جو toggle کڻيو.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Publishable key** ۽ **Secret key** کان **Token** کلو، ان قيمتن کي Ultimate Multisite Stripe Gateway جي فیلڊن ۾ پیسٽ ڪريو. پنهنجي تبديلين محفوظ ڪرڻ لاءِ کليڪ ڪريو.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook کي ترتیب ڏيڻ (Setting up Stripe Webhook) {#setting-up-stripe-webhook}

Stripe webhook events ڇا ڪڏهنڪو توهان جي **stripe account** تي ڪا واقع ٿي ان لاءِ Ultimate Multisite کي اطلاع ڏين ٿا.

**Developers** تي کليڪ ڪريو ۽ پوءِ لائي هاري ۾ **Webhooks** جو انتخاب ڪريو. پوءِ هيٺ ڏنل طرف **Add endpoint** کڻيو *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

توهان کي هڪ **Endpoint URL** جي ضرورت پوندي *.* Ultimate Multisite خود Endpoint URL خود هيٺ **Ultimate Multisite Stripe Gateway** سيكشن ۾ **Webhook Listener URL** فیلڊ کان ملي ويندي آهي_._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Endpoint URL کي **Copy** ڪريو ۽ ان کي Stripe **Endpoint URL** فیلڊ ۾ **Paste** ڪريو.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

پنهنجي سادي **Event** چونڊ ڪرڻ جو عمل آهي *.* ان خيار تحت، توهان کي بس **Select all events** جو box چیک ڪرڻ ۽ **Add events** کڻڻ جي ضرورت آهي. ان کان پوءِ تبديلين محفوظ ڪرڻ لاءِ **Add Endpoint** کڻيو.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

هي ختم ٿي ويو، توهان جو Stripe پيمنٽ انٽيغريشن كامل آهي!
