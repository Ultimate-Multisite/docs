---
title: پیمانيدن ۽ انوائسز جو انتظام
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

آپ لائیو جانے سے پہلے اپنی ادائیگی کی انٹیگریشن کو ٹیسٹ کرنے کے لیے **Sandbox Mode** آن کر سکتے ہیں۔ جب سੈਂڈ باکس موڈ فعال ہوتا ہے، تو کوئی حقیقی چارجز نہیں کیے جاتے ہیں۔

## ادائیگیوں کو دیکھنا {#viewing-payments}

اپنے نیٹ ورک میں ہونے والے تمام لین دین دیکھنے کے لیے Ultimate Multisite کے تحت **Payments** پیج پر جائیں۔

![Payments list](/img/admin/payments-list.png)

آپ اسٹیٹس (مکمل شدہ، زیرِ عمل، ناکام، واپس کی گئی) کے لحاظ سے ادائیگیوں کو فلٹر کر سکتے ہیں اور مخصوص لین دین تلاش کر سکتے ہیں۔

پیمنٹ تي کلک ڪريو ته اسان توهان کي پنهنجي تمام تفصیل ڏسائينداسين جنه شامل آهي لائن ائٽم، ملزمي ممبرشپ، ڪسٹمر جي معلومات ۽ پياملٽ گيتواي (payment gateway) جا ڊيٽا.

## انوائسز (Invoices) {#invoices}

Ultimate Multisite توهان لاءِ پياملٽن لاءِ خود بخود انوائسز (invoices) بنائ سگهي ٿو. توهان پياملٽ جي هيٺيان (settings) کان انوائس ٽيمپليٽ ۽ نمبرنگ جو فارميٽ خود مطابق ڪري سگهو ٿا.

انوائس کي خود مطابق ڪرڻ جا خيار شامل آهن:

- انوائس تي ڏيکاري وڃڻ وارو **ڪمپني جو نالو ۽ پتو**
- **انوائس جي نمبرنگ** جو فارميٽ ۽ ترتیب (sequence)
- انوائس جي هيڊر تي ڏيکاري وڃڻ وارو **لوگو**
- شرائط، نوٽس يا قانوني معلومات لاءِ **خود مطابق ڪا فوٽر متن**

انوائس ٽيمپليٽ کي خود مطابق ڪرڻ لاءِ، **Ultimate Multisite → Settings → Payment** تي وڃو ۽ انوائس سان لاڳاپيل هيٺيان (settings) ڏسو.
