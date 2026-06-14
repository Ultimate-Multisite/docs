---
title: म्यानुअल هيٺ ادائیگیون ترتیب ڏيڻ
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# مینوئل ادائیگیوں کو ترتیب دینا (v2)

_**اہم نوٹ: یہ مضمون Ultimate Multisite کے ورژن 2.x کا حوالہ دیتا ہے۔**_

مینوئل پیمنٹ ایک ایسا طریقہ ہے جس سے آپ دوسرے ادائیگی کے طریقے پیش کر سکتے ہیں اگر آپ کے صارفین کے لیے **Stripe** یا **PayPal** دستیاب نہ ہوں۔ یہ وائر ٹرانسفر، بینک ٹرانسفر یا اپنے مقامی طور پر دستیاب کسی بھی دوسرے ادائیگی کے طریقے کا استعمال ہو سکتا ہے۔

## مینوئل پیمنٹ کیسے فعال کریں

مینوئل پیمنٹ سیٹ اپ کرنا بہت آسان ہے۔ آپ کو بس پےمنٹ گیٹ ویز (payment gateways) کے تحت اسے آن کرنا ہے اور یہ بتانا ہے کہ صارف کو ادائیگی کیسے بھیجنی ہے۔

سب سے پہلے، **Ultimate Multisite > Settings > Payments** پر جائیں۔ **Payment Gateways** کے نیچے، **Manual** کو آن کر دیں۔ آپ دیکھیں گے کہ ایک **Payment Instructions** باکس آپ کے سامنے آ جائے گا۔

اس باکس میں وہ معلومات شامل کریں جو آپ کے کسٹمر کو ادائیگی کرنے کے لیے درکار ہوں گی۔ یہ آپ کا بینک اکاؤنٹ کی تفصیلات اور آپ کا ای میل ہو سکتا ہے تاکہ کسٹمر آپ کو ادائیگی کی تصدیق بھیج سکیں، مثال کے طور پر۔

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

یہ مینوئل گیٹ ویز سیٹنگز کا انٹرفیس یہ ہے:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

ترتیب دینے کے بعد، بس **Save Settings** پر کلک کریں اور کام ہو گیا۔ جب صارفین آپ کے نیٹ ورک میں رجسٹر ہوں گے، تو انہیں ایک پیغام ملے گا کہ وہ خریداری مکمل کرنے کے لیے آپ کی ہدایات وصول کریں گے۔

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

اور انہیں آپ کے **Thank You** پیج پر بھی آپ کی ادائیگی کی ہدایات کے ساتھ ایک پیغام ملے گا۔

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## مینوئل پیمنٹس کی تصدیق کرنا

मैनुअल ادائیگی کی تصدیق کرنے کے لیے، بائیں طرف موجود **Payments** مینو پر جائیں۔ وہاں آپ اپنے نیٹ ورک پر تمام ادائیگیاں اور ان کی تفصیلات دیکھ سکتے ہیں، جن میں ان کی **status** بھی شامل ہے۔ جب تک آپ اسے خود تبدیل نہیں کرتے، ایک دستی ادائیگی ہمیشہ **Pending** سٹیٹس رکھتی ہے۔

![Payments list showing pending manual payment](/img/admin/payments-list.png)

**reference code** پر کلک کر کے ادائیگی کا صفحہ کھولیں۔ اس صفحے پر آپ کو Pending ادائیگی کی تمام تفصیلات مل جائیں گی، جیسے reference ID، پروڈکٹس، ٹائم سٹیمپ وغیرہ۔

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

دائیں کالم میں، آپ ادائیگی کی سٹیٹس تبدیل کر سکتے ہیں۔ اسے **Completed** اور **Activate Membership** کا آپشن آن (toggle) کرنے سے آپ کے کسٹمر کی سائٹ فعال ہو جائے گی اور ان کی ممبرشپ فعال ہو جائے گی۔

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
