---
title: کلوسٽ انٽيغريشن
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integration {#closte-integration}

## جائزہ (Overview) {#overview}
Closte هڪ مانيجڊ WordPress هاستينگ پليٽ فارم آهي جيڪو Google Cloud انفرنس تي بنيو آهي. هي ان انٽيغريشن جي مدد ڪري ٿو ته Ultimate Multisite ۽ Closte جو بين ۾ دومين سنڪنگ (domain syncing) ۽ SSL سرٽيفڪيٽ جي مانيجمنت خودکار طور تي ٿئي ٿو.

## خصوصيتون (Features) {#features}
- خودکار دومين سنڪنگ (Automatic domain syncing)
- SSL سرٽيفڪيٽ جو مانيجمنت (SSL certificate management)
- وائلڊ کارڊ دومين سپورٽ (Wildcard domain support)
- جيڪڏهن توهان Closte تي رن ٿا ته ڪو ڪوگريشن نه ڪرڻ جي ضرورت آهي

## گهرجن (Requirements) {#requirements}
جيڪڏهن توهان Closte تي هاستينگ ڪري رهيا آهيو ته توهان کي پنهنجي `wp-config.php` فائل ۾ هي constant تعريف ڪرڻو پوندو:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

هي constant عام طور تي تڏهن موجود هوندو آهي جڏهن توهان Closte تي هاستينگ ڪري رهيا آهيو.

## ترتیب ڏيڻ جا تعليمات (Setup Instructions) {#setup-instructions}

### 1. پنهنجي Closte API Key جو تصديق ڪريو (Verify Your Closte API Key) {#1-verify-your-closte-api-key}

جيڪڏهن توهان Closte تي هاستينگ ڪري رهيا آهيو، ته `CLOSTE_CLIENT_API_KEY` constant توهان جي `wp-config.php` فائل ۾ پري محفوظ هجڻ گهرجي. توهان ان کي پنهنجي `wp-config.php` فائل ڏسڻ سان تصديق ڪري سگهو ٿا.

### 2. انٽيغريشن کي فعال ڪريو (Enable the Integration) {#2-enable-the-integration}

1. پنهنجي WordPress admin ۾، Ultimate Multisite > Settings تي وڃو
2. "Domain Mapping" ٽاب تي وينو
3. "Host Integrations" تائين سکرول ڪريو
4. Closte انٽيغريشن کي فعال ڪريو (Enable)
5. "Save Changes" تي ڪلڪ ڪريو

## اهو ڪيئن کام ڪري ٿو (How It Works) {#how-it-works}

جڏهن Ultimate Multisite ۾ هڪ دومين مئپ ڪيو ويندو آهي:

1. ان انٽيغريشن طرفان Closte جي API کي درخواست جهڙي توهان پنهنجي ايمپليمنٽ ۾ دومين شامل ڪرڻ لاءِ ڪئي ٿو
2. Closte خودکار طور تي SSL سرٽيفڪيٽ فراهم ڪري ٿو (provisioning)
3. جڏهن هڪ دومين مئپ ختم ڪيو ويندو آهي، ته ان انٽيغريشن طرفان Closte کان دومين کاليجي ٿو

هي انٽيغريشن Ultimate Multisite جي DNS check interval جو هيٺ ڏنل هيٺ ڏني هئي، جيڪا توهان کي اهو ترتیب ڏيڻ جو موقعي ڏئي ٿي ته نظام ڪيتري دفعو DNS propagation ۽ SSL سرٽيفڪيٽ جي ڇڏڻ لاءِ چیک ڪري.

## دومين رڪڊ جو سکريشن (Domain Record Creation) {#domain-record-creation}

هي اس انٹیگریشن یہ یقینی بناتا ہے کہ جب کوئی سائٹ بنائی جائے یا ڈپلیکیٹ کی جائے، تو ایک ڈومین ریکارڈ خود بخود بنایا جائے۔ یہ خاص طور پر Closte انٹیگریشن کے لیے اہم ہے، کیونکہ ڈومین ریکارڈ بنانے سے Closte API کو ڈومین اور SSL سرٹیفکیٹ بنانے کا حکم ملتا ہے۔

## ٹرابل شوٹنگ (Troubleshooting) {#troubleshooting}

### API کنکشن کے مسائل {#api-connection-issues}
- چیک کریں کہ آپ کی Closte API key درست ہے یا نہیں۔
- یقینی بنائیں کہ آپ کے Closte اکاؤنٹ میں ضروری اجازتیں ہیں۔

### SSL سرٹیفکیٹ کے مسائل {#ssl-certificate-issues}
- Closte کو SSL سرٹیفکیٹس جاری کرنے میں کچھ وقت لگ سکتا ہے (عام طور پر 5-10 منٹ)۔
- چیک کریں کہ آپ کی ڈومینز آپ کے Closte سرور کے IP ایڈریس پر صحیح طریقے سے پوائنٹ کر رہی ہیں۔
- اپنی ڈومین کے DNS ریکارڈز کو چیک کریں تاکہ یہ یقینی بنایا جا سکے کہ وہ درست طریقے سے ترتیب دی گئی ہیں۔

### ڈومین شامل نہیں ہوئی {#domain-not-added}
- کسی بھی ایرر میسج کے لیے Ultimate Multisite لاگز (logs) چیک کریں۔
- تصدیق کریں کہ کیا ڈومین پہلے ہی Closte میں شامل تو نہیں ہے۔
- اس بات کو یقینی بنائیں کہ آپ کی ڈومین کے DNS ریکارڈز درست طریقے سے ترتیب دی گئی ہیں۔

### DNS چیک کا وقفہ (DNS Check Interval) {#dns-check-interval}
- اگر SSL سرٹیفکیٹس جاری کرنے میں بہت زیادہ وقت لگ رہا ہے، تو آپ Domain Mapping سیٹنگز میں DNS چیک کے وقفے کو ایڈجسٹ کر سکتے ہیں۔
- ڈیفالٹ وقفہ 300 سیکنڈ (5 منٹ) ہوتا ہے، لیکن ٹیسٹنگ کے دوران تیز چیکنگ کے لیے اسے 10 سیکنڈ تک بھی سیٹ کیا جا سکتا ہے۔
