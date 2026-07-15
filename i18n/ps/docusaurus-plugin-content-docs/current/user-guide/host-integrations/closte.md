---
title: کلوسټ همغږي
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# دمج کلست (Closte Integration)

## مروری (Overview) {#overview}
کلست (Closte) یوگل کلاؤڈ انفراسٹرکچر پر بنا شده ایک مینیجڈ ورڈپریس ہوسٹنگ پلیٹ فارم ہے۔ یہ انٹیگریشن Ultimate Multisite اور Closte کے درمیان ڈومین سنکنگ اور SSL سرٹیفکیٹ مینجمنٹ کے لیے خودکار سیٹنگز کو ممکن بناتا ہے۔

## خصوصیات (Features) {#features}
- خودکار ڈومین سنکنگ
- SSL سرٹیفکیٹ کا انتظام
- وائلڈ کارڈ ڈومین سپورٹ
- اگر آپ Closte پر چل رہے ہیں تو کسی بھی کنفیگریشن کی ضرورت نہیں پڑتی۔

## ضروریات (Requirements) {#requirements}
اگر آپ Closte استعمال کر رہے ہیں تو آپ کو اپنی `wp-config.php` فائل میں یہ مستقل (constant) ضرورdefine کرنا ہوگا:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

یہ مستقل عام طور پر تب پہلے سے define ہوتا ہے جب آپ Closte پر ہوسٹ کر رہے ہوتے ہیں۔

## سیٹ اپ کے ہدایات (Setup Instructions) {#setup-instructions}

### 1. اپنے Closte API کیپ کو تصدیق کریں (Verify Your Closte API Key) {#1-verify-your-closte-api-key}

اگر آپ Closte پر ہوسٹ کر رہے ہیں، تو `CLOSTE_CLIENT_API_KEY` مستقل پہلے ہی آپ کی `wp-config.php` فائل میں define ہونا چاہیے۔ آپ اسے اپنی `wp-config.php` فائل چیک کر کے تصدیق کر سکتے ہیں۔

### 2. انٹیگریشن کو فعال کریں (Enable the Integration) {#2-enable-the-integration}

1. اپنے ورڈپریس ایڈمن میں جائیں، Ultimate Multisite > Settings پر جائیں۔
2. "Domain Mapping" ٹیب پر جائیں۔
3. نیچے سکرول کریں اور "Host Integrations" پر جائیں۔
4. Closte انٹیگریشن کو فعال (Enable) کریں۔
5. "Save Changes" پر کلک کریں۔

## یہ کیسے کام کرتا ہے (How It Works) {#how-it-works}

جب Ultimate Multisite میں کوئی ڈومین مپ (map) کیا جاتا ہے:

1. انٹیگریشن Closte کے API کو ایک درخواست بھیجتی ہے تاکہ ڈومین کو آپ کی ایپلیکیشن میں شامل کیا جا سکے۔
2. Closte خود بخود SSL سرٹیفکیٹ فراہم کرنے کا انتظام سنبھالتا ہے۔
3. جب کوئی ڈومین مپ ہٹا دیا جاتا ہے، تو انٹیگریشن اس ڈومین کو Closte سے ہٹا دے گی۔

یہ انٹیگریشن Ultimate Multisite کی DNS چیک انٹرول سیٹنگ کے ساتھ بھی کام کرتی ہے، جس سے آپ یہ ترتیب دے سکتے ہیں کہ سسٹم DNS پھیلاؤ (propagation) اور SSL سرٹیفکیٹ جاری کرنے کے لیے کتنی بار چیک کرتا ہے۔

## ڈومین ریکارڈ تخلیق (Domain Record Creation) {#domain-record-creation}

د دې هم 통합 کاراسو ډاډه کوي چې کله یو سایت جوړی یا د複製، یو domain record په خودکار ډول جوړی کیږي. دا په Closte integration لپاره ډیر مهم دی، ځکه چې د domain record جوړول Closte API ته لارښوونه کوي چې domain او SSL certificate جوړوي.

## مشکلو حل (Troubleshooting) {#troubleshooting}

### د API اړیکو مسلې {#api-connection-issues}
- وګورئ چې ستاسو Closte API key صحیح دی
- ډاډ ترلاسه کړئ چې ستاسو Closte account ته لازم اجازه ورکړل شوی دی

### د SSL Certificate مسلې {#ssl-certificate-issues}
- Closte ته SSL certificates ورکول وخت کیدلی شي (عموما 5-10 دقیقې)
- وګورئ چې ستاسو domain راستی په صحیح ډول ستاسو Closte server IP address ته رامنځته کیږي
- ستاسو domain د DNS records چک کړئ ترڅو ډاډ ترلاسه کړئ چې دوی په سمه توګه تنظیم شوي دي

### domain نه اضافه شو {#domain-not-added}
- د Ultimate Multisite logs لپاره هر ډول خطا پیغامونه وګورئ
- ډاډ ترلاسه کړئ چې domain پہلے هم Closte ته اضافه نه شوی دی
- ډاډ ترلاسه کړئ چې ستاسو domain د DNS records په سمه توګه تنظیم شوي دي

### د DNS چک فاصله (DNS Check Interval) {#dns-check-interval}
- که SSL certificates ورکول وخت زیات کیږي، تاسو کولی شئ Domain Mapping settings کې د DNS check interval را تنظیم کړئ
- معمول ډول فاصله 300 ثانیې (5 دقیقې) ده، خو تاسو یې 10 ثانیې هم کم کولای شئ ترڅو په تستی دوران ډیر 빠르고 چک کولو لپاره تنظیم کړئ
