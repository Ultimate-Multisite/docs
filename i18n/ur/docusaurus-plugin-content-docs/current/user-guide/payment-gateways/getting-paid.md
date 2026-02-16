---
title: ادائیگی حاصل کرنا
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# ادائیگی حاصل کرنا (v2)

_**اہم نوٹ: یہ مضمون Ultimate Multisite ورژن 2.x سے متعلق ہے۔**_

Ultimate Multisite میں ایک بلٹ ان ممبرشپ اور بلنگ سسٹم موجود ہے۔ ہمارے بلنگ سسٹم کو کام کرنے کے لیے، ہم نے ای کامرس میں سب سے زیادہ استعمال ہونے والے payment gateways کو مربوط کیا ہے۔ Ultimate Multisite میں پہلے سے موجود payment gateways _Stripe_، _PayPal_، اور Manual Payment ہیں۔ آپ _WooCommerce_، _GoCardless_ اور _Payfast_ کو بھی ان کے متعلقہ add-ons انسٹال کر کے ادائیگیاں وصول کرنے کے لیے استعمال کر سکتے ہیں۔

## بنیادی ترتیبات

آپ ان میں سے کوئی بھی payment gateway Ultimate Multisite کی ادائیگی کی ترتیبات میں ترتیب دے سکتے ہیں۔ آپ اسے **Ultimate Multisite menu > Settings > Payments** پر جا کر تلاش کر سکتے ہیں۔

![Ultimate Multisite میں ادائیگی کی ترتیبات کا صفحہ](/img/config/settings-payment-gateways.png)

اپنا payment gateway سیٹ اپ کرنے سے پہلے، براہ کرم ان بنیادی ادائیگی کی ترتیبات پر ایک نظر ڈالیں جو آپ ترتیب دے سکتے ہیں:

**Force auto-renew:** یہ اس بات کو یقینی بنائے گا کہ صارف کی منتخب کردہ بلنگ فریکوئنسی کے مطابق ہر بلنگ سائیکل کے اختتام پر ادائیگی خود بخود دہرائی جائے گی۔

![Force auto-renew ٹوگل سیٹنگ](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** اس آپشن کے فعال ہونے پر آپ کے کلائنٹ کو رجسٹریشن کے عمل کے دوران کوئی مالی معلومات شامل کرنے کی ضرورت نہیں ہوگی۔ یہ صرف ٹرائل پیریڈ ختم ہونے کے بعد درکار ہوگا۔

![Allow trials without payment method ٹوگل](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** یہ آپ کو یہ انتخاب کرنے کا اختیار دیتا ہے کہ ادائیگی کے بعد انوائس بھیجنی ہے یا نہیں۔ نوٹ کریں کہ صارفین کو اپنی سب سائٹ ڈیش بورڈ کے تحت اپنی ادائیگی کی تاریخ تک رسائی حاصل ہوگی۔ یہ آپشن Manual Gateway پر لاگو نہیں ہوتا۔

![Send invoice on payment confirmation ٹوگل](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** یہاں، آپ payment reference code یا sequential number scheme میں سے کوئی ایک منتخب کر سکتے ہیں۔ اگر آپ اپنی انوائسز کے لیے payment reference code استعمال کرنا چاہتے ہیں، تو آپ کو کچھ بھی ترتیب دینے کی ضرورت نہیں۔ اگر آپ sequential number scheme استعمال کرنا چاہتے ہیں، تو آپ کو **next invoice number** (یہ نمبر سسٹم پر بننے والی اگلی انوائس کے لیے انوائس نمبر کے طور پر استعمال ہوگا۔ ہر نئی انوائس بننے پر یہ ایک سے بڑھ جاتا ہے۔ آپ اسے تبدیل کر کے محفوظ کر سکتے ہیں تاکہ انوائس کا sequential number کسی خاص قدر پر ری سیٹ ہو جائے) اور **invoice number prefix** ترتیب دینا ہوگا۔

![Invoice numbering scheme کا انتخاب](/img/config/settings-payment-gateways.png)

![Sequential invoice number اور prefix کی ترتیبات](/img/config/settings-payment-gateways.png)

## Gateways کہاں تلاش کریں:

آپ اسی صفحے پر payment gateways سیٹ اپ کر سکتے ہیں (**Ultimate Multisite > Settings > Payments**)۔ **active payment gateways** کے بالکل نیچے، آپ دیکھ سکیں گے: _Stripe_، _Stripe Checkout_، _PayPal_ اور _Manual_۔

![فعال payment gateways کی فہرست](/img/config/settings-payment-gateways.png)

ہمارے پاس ہر payment gateway کے لیے ایک مخصوص مضمون ہے جو آپ کو اسے سیٹ اپ کرنے کے مراحل میں رہنمائی کرے گا جو آپ نیچے دیے گئے لنکس پر تلاش کر سکتے ہیں۔

**Stripe gateway سیٹ اپ کرنا**

**PayPal gateway سیٹ اپ کرنا**

**دستی ادائیگیاں سیٹ اپ کرنا**

اب، اگر آپ _WooCommerce_، _GoCardless_ یا _Payfast_ کو اپنے payment gateway کے طور پر استعمال کرنا چاہتے ہیں، تو آپ کو **ان کے add-ons انسٹال اور ترتیب دینے** ہوں گے۔

### WooCommerce add-on کیسے انسٹال کریں:

ہم سمجھتے ہیں کہ _Stripe_ اور _PayPal_ کچھ ممالک میں دستیاب نہیں ہیں جو Ultimate Multisite صارفین کو ہمارے plugin کو مؤثر طریقے سے استعمال کرنے سے روکتا ہے۔ اس لیے ہم نے _WooCommerce_ کو مربوط کرنے کے لیے ایک add-on بنایا، جو ایک بہت مقبول ای کامرس plugin ہے۔ دنیا بھر کے ڈویلپرز نے مختلف payment gateways کو اس سے مربوط کرنے کے لیے add-ons بنائے۔ ہم نے اس کا فائدہ اٹھایا تاکہ آپ Ultimate Multisite بلنگ سسٹم کے ساتھ جو payment gateways استعمال کر سکتے ہیں ان کو بڑھایا جائے۔

_**اہم:** Ultimate Multisite: WooCommerce Integration کے لیے WooCommerce کا کم از کم آپ کی main site پر فعال ہونا ضروری ہے۔_

سب سے پہلے، براہ کرم add-ons صفحے پر جائیں۔ آپ اسے **Ultimate Multisite > Settings** پر جا کر تلاش کر سکتے ہیں۔ آپ کو **Add-ons** ٹیبل نظر آنا چاہیے۔ **Check our Add-ons** پر کلک کریں۔

![Add-ons سیکشن کے ساتھ Settings صفحہ](/img/config/settings-general.png)

**Check our Add-ons** پر کلک کرنے کے بعد، آپ کو add-ons صفحے پر بھیج دیا جائے گا۔ یہاں آپ Ultimate Multisite کے تمام add-ons تلاش کر سکتے ہیں۔ **Ultimate Multisite: WooCommerce Integration** add-on پر کلک کریں۔

![دستیاب add-ons کی فہرست دکھاتا Add-ons صفحہ](/img/config/settings-general.png)

Add-on کی تفصیلات کے ساتھ ایک ونڈو پاپ اپ ہوگی۔ بس **Install Now** پر کلک کریں۔

![WooCommerce add-on انسٹال ڈائیلاگ](/img/config/settings-general.png)

انسٹالیشن مکمل ہونے کے بعد، آپ کو plugins صفحے پر بھیج دیا جائے گا۔ یہاں، بس **Network Activate** پر کلک کریں اور WooCommerce add-on آپ کے نیٹ ورک پر فعال ہو جائے گا۔

![WooCommerce add-on کو Network Activate کریں](/img/config/settings-general.png)

اسے فعال کرنے کے بعد، اگر آپ نے ابھی تک WooCommerce plugin اپنی ویب سائٹ پر انسٹال اور فعال نہیں کیا ہے، تو آپ کو ایک یاددہانی ملے گی۔

![WooCommerce فعال کرنے کی یاددہانی کا نوٹس](/img/config/settings-general.png)

WooCommerce Integration add-on کے بارے میں مزید پڑھنے کے لیے، **یہاں کلک کریں**۔

### GoCardless add-on کیسے انسٹال کریں:

_GoCardless_ add-on انسٹال کرنے کے مراحل _WooCommerce_ add-on جیسے ہی ہیں۔ براہ کرم add-ons صفحے پر جائیں اور **Ultimate Multisite: GoCardless Gateway** add-on منتخب کریں۔

![دستیاب add-ons کی فہرست دکھاتا Add-ons صفحہ](/img/config/settings-general.png)

Add-on ونڈو پاپ اپ ہوگی۔ **Install Now** پر کلک کریں۔

![GoCardless add-on انسٹال ڈائیلاگ](/img/config/settings-general.png)

انسٹالیشن مکمل ہونے کے بعد، آپ کو plugins صفحے پر بھیج دیا جائے گا۔ یہاں، بس **Network Activate** پر کلک کریں اور _GoCardless_ add-on آپ کے نیٹ ورک پر فعال ہو جائے گا۔

![GoCardless add-on کو Network Activate کریں](/img/config/settings-general.png)

_GoCardless_ gateway کے ساتھ شروع کرنے کا طریقہ جاننے کے لیے، **یہ مضمون پڑھیں**۔

### Payfast add-on کیسے انسٹال کریں:

Add-ons صفحے پر جائیں اور **Ultimate Multisite: Payfast Gateway** add-on منتخب کریں۔

![دستیاب add-ons کی فہرست دکھاتا Add-ons صفحہ](/img/config/settings-general.png)

Add-on ونڈو پاپ اپ ہوگی۔ **Install Now** پر کلک کریں۔

![Payfast add-on انسٹال ڈائیلاگ](/img/config/settings-general.png)

انسٹالیشن مکمل ہونے کے بعد، آپ کو plugins صفحے پر بھیج دیا جائے گا۔ یہاں، بس **Network Activate** پر کلک کریں اور _Payfast_ add-on آپ کے نیٹ ورک پر فعال ہو جائے گا۔

![Payfast add-on کو Network Activate کریں](/img/config/settings-general.png)
