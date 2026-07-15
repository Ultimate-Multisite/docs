---
title: دستی ادائیگیوں کو ترتیب دینا
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Manual Payments کی ترتیب (v2)

_**اہم نوٹ: یہ مضمون Ultimate Multisite ورژن 2.x سے متعلق ہے۔**_

Manual payments آپ کو اپنے صارفین کے لیے دیگر ادائیگی کے طریقے پیش کرنے کا ایک طریقہ ہے، اگر **Stripe** یا **PayPal** دستیاب نہ ہو۔ یہ وائر یا بینک ٹرانسفر ہو سکتا ہے یا کوئی بھی دوسرا ادائیگی کا طریقہ جو آپ کے صارفین کو مقامی طور پر دستیاب ہو۔

## Manual Payments کو فعال کرنے کا طریقہ {#how-to-enable-manual-payments}

Manual payment ترتیب دینا بہت آسان ہے۔ آپ کو صرف اسے payment gateways کے تحت فعال کرنا ہے اور تفصیلی ہدایات درج کرنی ہیں کہ صارف ادائیگی کیسے بھیجے۔

سب سے پہلے، **Ultimate Multisite > Settings > Payments** پر جائیں۔ **Payment Gateways** کے نیچے، **Manual** کو آن کریں۔ آپ دیکھیں گے کہ آپ کے لیے **Payment Instructions** باکس ظاہر ہو جائے گا۔

اس باکس میں وہ معلومات شامل کریں جن کی آپ کے کسٹمر کو ادائیگی کرنے کے لیے ضرورت ہوگی۔ مثال کے طور پر، یہ آپ کے بینک Account کی تفصیلات اور آپ کا ای میل ہو سکتا ہے تاکہ کسٹمر آپ کو ادائیگی کی تصدیق بھیج سکے۔

![Payment Instructions ٹیکسٹ ایریا کے ساتھ Manual payment gateway ٹوگل](/img/config/manual-gateway-expanded.png)

یہاں manual gateway settings انٹرفیس ہے:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

اسے ترتیب دینے کے بعد، بس **Save Settings** پر کلک کریں اور کام مکمل ہو جائے گا۔ جب صارفین آپ کے نیٹ ورک پر رجسٹر ہوں گے، تو انہیں ایک پیغام نظر آئے گا جس میں بتایا جائے گا کہ خریداری مکمل کرنے کے لیے انہیں آپ کی ہدایات موصول ہوں گی۔

![رجسٹریشن کی تصدیق کا پیغام جو صارف کو بتاتا ہے کہ انہیں ادائیگی کی ہدایات موصول ہوں گی](/img/frontend/registration-manual-notice.png)

اور انہیں آپ کے **Thank You** صفحے پر بھی آپ کی ادائیگی کی ہدایات کے ساتھ ایک پیغام موصول ہوگا۔

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Manual payments کی تصدیق {#confirming-manual-payments}

Manual payment کی تصدیق کرنے کے لیے، بائیں بار میں **Payments** مینو پر جائیں۔ وہاں آپ اپنے نیٹ ورک پر تمام ادائیگیاں اور ان کی تفصیلات دیکھ سکتے ہیں، جن میں ان کا **status** بھی شامل ہے۔ Manual payment کا **Pending** status ہمیشہ رہے گا جب تک آپ اسے دستی طور پر تبدیل نہ کریں۔

![Payments فہرست جس میں زیر التوا manual payment دکھائی گئی ہے](/img/admin/payments-list.png)

**reference code** پر کلک کر کے ادائیگی کے صفحے میں داخل ہوں۔ اس صفحے پر آپ کے پاس زیر التوا ادائیگی کی تمام تفصیلات ہوتی ہیں، جیسے reference ID، مصنوعات، timestamps اور مزید۔

![Payment details صفحہ جس میں reference code، مصنوعات، اور totals دکھائے گئے ہیں](/img/admin/payment-edit.png)

دائیں کالم میں، آپ ادائیگی کا status تبدیل کر سکتے ہیں۔ اسے **Completed** میں تبدیل کرنے اور **Activate Membership** آپشن کو ٹوگل کرنے سے آپ کے کسٹمر کی سائٹ فعال ہو جائے گی اور ان کی membership active ہو جائے گی۔

![Payment edit صفحہ جس میں Status کو Completed پر سیٹ کیا گیا ہے اور Activate Membership ٹوگل موجود ہے](/img/admin/payment-activate-membership.png)
