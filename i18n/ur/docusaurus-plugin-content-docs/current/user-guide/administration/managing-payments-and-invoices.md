---
title: ادائیگیوں اور انوائسز کا انتظام
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# ادائیگیوں اور انوائسز کا انتظام

## ادائیگی کی ترتیبات

ادائیگیاں وصول کرنا شروع کرنے سے پہلے، آپ کو ادائیگی سے متعلق ترتیبات کو configure کرنا ہوگا۔ **Ultimate Multisite → Settings** پر جائیں اور **Payment** ٹیب پر کلک کریں۔

![Payment settings tab](/img/admin/settings-payments-top.png)

### عمومی ادائیگی کے اختیارات

عمومی ترتیبات میں آپ یہ configure کر سکتے ہیں:

- **Currency** — لین دین کے لیے استعمال ہونے والی ڈیفالٹ کرنسی
- **Currency Position** — کرنسی کی علامت کہاں ظاہر ہوگی (رقم سے پہلے/بعد)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### ادائیگی کے گیٹ ویز

Ultimate Multisite متعدد payment gateways کی سپورٹ کرتا ہے۔ آپ ہر ایک کو Payment settings ٹیب سے فعال اور configure کر سکتے ہیں۔

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

دستیاب گیٹ ویز میں شامل ہیں:

- **Stripe** — Stripe کے ذریعے کریڈٹ کارڈ ادائیگیاں
- **PayPal** — PayPal ادائیگیاں
- **Manual** — آف لائن یا کسٹم ادائیگی کی پروسیسنگ کے لیے

ہر گیٹ وے کا اپنا configuration سیکشن ہے جہاں آپ API keys اور دیگر ترتیبات درج کرتے ہیں۔

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### سینڈ باکس موڈ

آپ لائیو ہونے سے پہلے اپنے ادائیگی کے integration کو ٹیسٹ کرنے کے لیے **Sandbox Mode** فعال کر سکتے ہیں۔ جب سینڈ باکس موڈ فعال ہو، تو کوئی حقیقی چارجز نہیں لگیں گے۔

## ادائیگیاں دیکھنا

اپنے نیٹ ورک میں تمام لین دین دیکھنے کے لیے Ultimate Multisite کے تحت **Payments** صفحے پر جائیں۔

![Payments list](/img/admin/payments-list.png)

آپ ادائیگیوں کو status (مکمل، زیر التواء، ناکام، واپس) کے لحاظ سے فلٹر کر سکتے ہیں اور مخصوص لین دین تلاش کر سکتے ہیں۔

کسی ادائیگی پر کلک کریں تاکہ اس کی مکمل تفصیلات دیکھ سکیں جن میں لائن آئٹمز، منسلک رکنیت، گاہک کی معلومات، اور payment gateway کا ڈیٹا شامل ہے۔

## انوائسز

Ultimate Multisite ادائیگیوں کے لیے خودکار طور پر انوائسز تیار کر سکتا ہے۔ آپ Payment settings سے انوائس ٹیمپلیٹ اور نمبرنگ فارمیٹ کو اپنی مرضی کے مطابق بنا سکتے ہیں۔

انوائس کی تخصیص کے اختیارات میں شامل ہیں:

- **کمپنی کا نام اور پتہ** جو انوائسز پر ظاہر ہوتا ہے
- **انوائس نمبرنگ** فارمیٹ اور ترتیب
- **لوگو** جو انوائس کے ہیڈر پر ظاہر ہوتا ہے
- **کسٹم فوٹر ٹیکسٹ** شرائط، نوٹس، یا قانونی معلومات کے لیے

انوائس ٹیمپلیٹ کو اپنی مرضی کے مطابق بنانے کے لیے، **Ultimate Multisite → Settings → Payment** پر جائیں اور انوائس سے متعلق ترتیبات تلاش کریں۔
