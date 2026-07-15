---
title: Payments aur invoices ka prabandhan
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# ادائیگیوں اور انوائسز کا انتظام کرنا

## ادائیگی کی سیٹنگز {#payment-settings}

ادائیگی ملنا شروع کرنے سے پہلے، آپ کو ادائیگی سے متعلق سیٹنگز ترتیب دینی ہوں گی۔ **Ultimate Multisite → Settings** پر جائیں اور **Payment** ٹیب پر کلک کریں۔

![Payment settings tab](/img/admin/settings-payments-top.png)

یہ ادائیگی کی سیٹنگز کے صفحے کا مکمل نظارہ ہے:

![Payment settings full page](/img/admin/settings-payments-full.png)

### عمومی ادائیگی کے اختیارات {#general-payment-options}

عمومی سیٹنگز میں آپ یہ ترتیب دے سکتے ہیں:

- **Currency** — لین دین کے لیے استعمال ہونے والی ڈیفالٹ کرنسی
- **Currency Position** — کرنسی کا نشان کہاں ظاہر ہوگا (رقم سے پہلے/بعد میں)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### ادائیگی کے گیٹ ویز (Payment Gateways) {#payment-gateways}

Ultimate Multisite متعدد ادائیگی کے گیٹ ویز کو سپورٹ کرتا ہے۔ آپ ہر ایک کو Payment settings ٹیب سے آن کر سکتے ہیں اور ترتیب دے سکتے ہیں۔

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

موجودہ گیٹ ویز میں شامل ہیں:

- **Stripe** — Stripe کے ذریعے کریڈٹ کارڈ کی ادائیگی
- **PayPal** — PayPal کی ادائیگی
- **Manual** — آف لائن یا کسٹم ادائیگی پروسیسنگ کے لیے

ہر گیٹ ویز کا اپنا ایک کنفیگریشن سیکشن ہوتا ہے جہاں آپ API keys اور دیگر سیٹنگز درج کرتے ہیں۔

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### سੈਂڈ باکس موڈ (Sandbox Mode) {#sandbox-mode}

آپ اپنے ادائیگی کے انٹیگریشن کو لائیو کرنے سے پہلے ٹیسٹ کرنے کے لیے **Sandbox Mode** آن کر سکتے ہیں۔ جب سੈਂڈ باکس موڈ فعال ہوتا ہے، تو کوئی حقیقی چارجز نہیں کیے جاتے ہیں۔

## ادائیگیوں کو دیکھنا {#viewing-payments}

اپنے نیٹ ورک میں ہونے والے تمام لین دین دیکھنے کے لیے Ultimate Multisite کے تحت **Payments** پیج پر جائیں۔

![Payments list](/img/admin/payments-list.png)

آپ اسٹیٹس (مکمل شدہ، زیرِ عمل، ناکام، واپس کی گئی) کے لحاظ سے ادائیگیوں کو فلٹر کر سکتے ہیں اور مخصوص لین دین تلاش کر سکتے ہیں۔

پیمنٹ پر کلک کریں تا اس کی مکمل تفصیلات دیکھ سکیں جن میں لائن آئٹمز، متعلقہ ممبرشپ، کسٹمر کی معلومات اور پیمنٹ گیٹ وے ڈیٹا شامل ہوتا ہے۔

## انوائسز (Invoices) {#invoices}

Ultimate Multisite آپ کے پیمنٹس کے لیے خود بخود انوائسز بنا سکتا ہے۔ آپ پیمنٹ سیٹنگز سے انوائس ٹیمپلیٹ اور نمبرنگ فارمیٹ کو اپنی مرضی کے مطابق بنا سکتے ہیں۔

انوائس کی کسٹمائزیشن کے اختیارات میں شامل ہیں:

- انوائس پر **کمپنی کا نام اور پتہ**
- **انوائس نمبرنگ** کا فارمیٹ اور ترتیب
- انوائس ہیڈر پر دکھانے والا **لوگو**
- شرائط، نوٹس یا قانونی معلومات کے لیے **کسٹم فوٹر ٹیکسٹ**

انوائس ٹیمپلیٹ کو کسٹمائز کرنے کے لیے، **Ultimate Multisite → Settings → Payment** پر جائیں اور انوائس سے متعلق سیٹنگز تلاش کریں۔
