---
title: ServerPilot انٹیگریشن
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot انٹیگریشن

## جائزہ
ServerPilot ایک کلاؤڈ سروس ہے جو DigitalOcean، Amazon، Google، یا کسی بھی دوسرے سرور پرووائیڈر پر WordPress اور دیگر PHP ویب سائٹس ہوسٹ کرنے کے لیے استعمال ہوتی ہے۔ یہ انٹیگریشن Ultimate Multisite اور ServerPilot کے درمیان خودکار ڈومین سنکنگ اور SSL سرٹیفکیٹ مینجمنٹ کو فعال کرتی ہے۔

## خصوصیات
- خودکار ڈومین سنکنگ
- Let's Encrypt کے ساتھ SSL سرٹیفکیٹ مینجمنٹ
- خودکار SSL تجدید

## ضروریات
آپ کی `wp-config.php` فائل میں درج ذیل constants کی تعریف ضروری ہے:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## سیٹ اپ ہدایات

### 1. اپنے ServerPilot API کی اسناد حاصل کریں

1. اپنے ServerPilot ڈیش بورڈ میں لاگ ان کریں
2. "Account" > "API" پر جائیں
3. اگر آپ کے پاس پہلے سے نہیں ہے تو ایک نئی API key بنائیں
4. اپنی Client ID اور API Key کاپی کریں

### 2. اپنی App ID حاصل کریں

1. اپنے ServerPilot ڈیش بورڈ میں "Apps" پر جائیں
2. وہ app منتخب کریں جہاں آپ کا WordPress multisite ہوسٹ ہے
3. App ID آپ کو URL میں نظر آئے گی: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. wp-config.php میں Constants شامل کریں

اپنی `wp-config.php` فائل میں درج ذیل constants شامل کریں:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. انٹیگریشن فعال کریں

1. اپنے WordPress ایڈمن میں Ultimate Multisite > Settings پر جائیں
2. "Domain Mapping" ٹیب پر جائیں
3. "Host Integrations" تک سکرول کریں
4. ServerPilot انٹیگریشن کو فعال کریں
5. "Save Changes" پر کلک کریں

## یہ کیسے کام کرتا ہے

### ڈومین سنکنگ

جب Ultimate Multisite میں کوئی ڈومین میپ کیا جاتا ہے:

1. انٹیگریشن ServerPilot سے موجودہ ڈومینز کی فہرست حاصل کرتی ہے
2. یہ نئے ڈومین کو فہرست میں شامل کرتی ہے (اگر قابل اطلاق ہو تو www ورژن کے ساتھ)
3. یہ اپ ڈیٹ شدہ فہرست API کے ذریعے ServerPilot کو بھیجتی ہے
4. ServerPilot آپ کی ایپلیکیشن کی ڈومین لسٹ کو اپ ڈیٹ کرتا ہے

### SSL سرٹیفکیٹ مینجمنٹ

ڈومینز سنک ہونے کے بعد:

1. انٹیگریشن خودکار طور پر آپ کی ایپلیکیشن کے لیے AutoSSL فعال کرتی ہے
2. ServerPilot، Let's Encrypt کا استعمال کرتے ہوئے SSL سرٹیفکیٹ کا اجراء اور انسٹالیشن سنبھالتا ہے
3. ServerPilot SSL سرٹیفکیٹس کی خودکار تجدید بھی سنبھالتا ہے

## SSL سرٹیفکیٹ کی تصدیق

انٹیگریشن ServerPilot کے لیے SSL سرٹیفکیٹ کی تصدیق کی کوششوں کی تعداد بڑھانے کے لیے ترتیب دی گئی ہے، کیونکہ ServerPilot کو SSL سرٹیفکیٹس جاری اور انسٹال کرنے میں کچھ وقت لگ سکتا ہے۔ بطور ڈیفالٹ، یہ 5 بار تک کوشش کرے گی، لیکن اسے filters کا استعمال کرتے ہوئے ایڈجسٹ کیا جا سکتا ہے۔

## مسائل کا حل

### API کنکشن کے مسائل
- تصدیق کریں کہ آپ کی Client ID اور API Key درست ہیں
- چیک کریں کہ آپ کی App ID درست ہے
- یقینی بنائیں کہ آپ کے ServerPilot اکاؤنٹ کے پاس ضروری اجازتیں ہیں

### SSL سرٹیفکیٹ کے مسائل
- ServerPilot کے لیے ضروری ہے کہ SSL سرٹیفکیٹ جاری کرنے سے پہلے ڈومینز کے DNS ریکارڈز آپ کے سرور کی طرف پوائنٹ کر رہے ہوں
- اگر SSL سرٹیفکیٹس جاری نہیں ہو رہے، تو چیک کریں کہ آپ کے ڈومینز آپ کے سرور کے IP ایڈریس کی طرف صحیح طور پر پوائنٹ کر رہے ہیں
- ServerPilot کو SSL سرٹیفکیٹس جاری اور انسٹال کرنے میں کچھ وقت لگ سکتا ہے (عام طور پر 5-15 منٹ)

### ڈومین شامل نہیں ہوا
- کسی بھی ایرر میسج کے لیے Ultimate Multisite لاگز چیک کریں
- تصدیق کریں کہ ڈومین پہلے سے ServerPilot میں شامل نہیں ہے
- یقینی بنائیں کہ آپ کا ServerPilot پلان اتنے ڈومینز کو سپورٹ کرتا ہے جتنے آپ شامل کر رہے ہیں

### ڈومین ہٹانا
- فی الحال، ServerPilot API انفرادی ڈومینز ہٹانے کا طریقہ فراہم نہیں کرتی
- جب Ultimate Multisite میں کوئی ڈومین میپنگ ہٹائی جاتی ہے، تو انٹیگریشن ServerPilot میں ڈومین لسٹ کو اپ ڈیٹ کر کے ہٹائے گئے ڈومین کو خارج کر دے گی
