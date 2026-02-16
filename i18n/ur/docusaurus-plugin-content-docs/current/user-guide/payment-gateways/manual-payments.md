---
title: دستی ادائیگیوں کی ترتیب
sidebar_position: 20
_i18n_hash: 1046fae1e97189ace8966057920da6eb
---
# Manual Payments ترتیب دینا (v2)

_**اہم نوٹ: یہ مضمون Ultimate Multisite ورژن 2.x سے متعلق ہے۔**_

Manual payments آپ کو دوسرے ادائیگی کے طریقے پیش کرنے کا موقع دیتے ہیں اگر آپ کے صارفین کے لیے **Stripe** یا **PayPal** دستیاب نہ ہو۔ یہ وائر یا بینک ٹرانسفر ہو سکتا ہے یا کوئی بھی دوسرا ادائیگی کا طریقہ جو آپ کے صارفین کے لیے مقامی طور پر دستیاب ہو۔

## Manual Payments کو فعال کیسے کریں

Manual payment ترتیب دینا بہت آسان ہے۔ آپ کو بس اسے payment gateways میں فعال کرنا ہے اور تفصیلی ہدایات لکھنی ہیں کہ صارف ادائیگی کیسے بھیجے۔

سب سے پہلے، **Ultimate Multisite > Settings > Payments** پر جائیں۔ **Payment Gateways** کے نیچے، **Manual** کو آن کریں۔ آپ دیکھیں گے کہ **Payment Instructions** باکس ظاہر ہو جائے گا۔

اس باکس میں وہ معلومات شامل کریں جو آپ کے گاہک کو ادائیگی کرنے کے لیے درکار ہوں گی۔ مثال کے طور پر، یہ آپ کے بینک اکاؤنٹ کی تفصیلات اور آپ کا ای میل ہو سکتا ہے تاکہ گاہک آپ کو ادائیگی کی تصدیق بھیج سکے۔

![Manual payment gateway toggle and payment instructions box](/img/config/settings-payment-gateways.png)

ترتیب دینے کے بعد، بس **Save Settings** پر کلک کریں اور یہ ہو گیا۔ جب صارفین آپ کے نیٹ ورک پر رجسٹر ہوں گے، انہیں ایک پیغام نظر آئے گا جو بتائے گا کہ انہیں خریداری مکمل کرنے کی ہدایات موصول ہوں گی۔

![Manual payment message shown during registration](/img/config/settings-payment-gateways.png)

اور انہیں آپ کے **Thank You** صفحے پر بھی آپ کی ادائیگی کی ہدایات کے ساتھ ایک پیغام ملے گا۔

![Thank You page showing payment instructions](/img/config/settings-payment-gateways.png)

## Manual payments کی تصدیق کرنا

Manual payment کی تصدیق کرنے کے لیے، بائیں بار پر **Payments** مینو میں جائیں۔ وہاں آپ اپنے نیٹ ورک کی تمام ادائیگیاں اور ان کی تفصیلات دیکھ سکتے ہیں، بشمول ان کی **status**۔ Manual payment کی status ہمیشہ **Pending** رہے گی جب تک آپ اسے دستی طور پر تبدیل نہ کریں۔

![Payments list showing pending manual payment](/img/admin/payments-list.png)

**reference code** پر کلک کر کے ادائیگی کے صفحے میں داخل ہوں۔ اس صفحے پر آپ کو زیر التواء ادائیگی کی تمام تفصیلات ملیں گی، جیسے reference ID، پروڈکٹس، timestamps اور مزید۔

![Payment details page with reference code and products](/img/admin/payments-list.png)

دائیں کالم میں، آپ ادائیگی کی status تبدیل کر سکتے ہیں۔ اسے **Completed** میں تبدیل کرنا اور **Activate Membership** آپشن کو آن کرنا آپ کے گاہک کی سائٹ فعال کر دے گا اور ان کی membership ایکٹو ہو جائے گی۔

![Payment status change to Completed with Activate Membership toggle](/img/admin/payments-list.png)
