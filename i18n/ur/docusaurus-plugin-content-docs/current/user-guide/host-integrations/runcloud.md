---
title: RunCloud انٹیگریشن
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud انٹیگریشن

## جائزہ
RunCloud ایک کلاؤڈ پر مبنی سرور مینجمنٹ پلیٹ فارم ہے جو آپ کو اپنے کلاؤڈ سرورز پر ویب ایپلیکیشنز آسانی سے ڈیپلائے اور منظم کرنے کی سہولت دیتا ہے۔ یہ انٹیگریشن Ultimate Multisite اور RunCloud کے درمیان خودکار ڈومین syncing اور SSL سرٹیفکیٹ مینجمنٹ کو فعال کرتی ہے۔

## خصوصیات
- خودکار ڈومین syncing
- SSL سرٹیفکیٹ مینجمنٹ
- میپنگز ڈیلیٹ ہونے پر ڈومین کا ہٹانا

## ضروریات
آپ کی `wp-config.php` فائل میں درج ذیل constants کی وضاحت ضروری ہے:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## سیٹ اپ کی ہدایات

### 1. اپنی RunCloud API اسناد حاصل کریں

1. اپنے RunCloud ڈیش بورڈ میں لاگ ان کریں
2. "User Profile" پر جائیں (اوپر دائیں کونے میں اپنی پروفائل تصویر پر کلک کریں)
3. مینو سے "API" منتخب کریں
4. اگر آپ کے پاس پہلے سے نہیں ہے تو "Generate API Key" پر کلک کریں
5. اپنی API Key اور API Secret کاپی کریں

### 2. اپنی Server اور App IDs حاصل کریں

1. اپنے RunCloud ڈیش بورڈ میں "Servers" پر جائیں
2. وہ سرور منتخب کریں جہاں آپ کی WordPress multisite ہوسٹ ہے
3. Server ID URL میں نظر آئے گی: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications" پر جائیں اور اپنی WordPress ایپلیکیشن منتخب کریں
5. App ID URL میں نظر آئے گی: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php میں Constants شامل کریں

اپنی `wp-config.php` فائل میں درج ذیل constants شامل کریں:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. انٹیگریشن کو فعال کریں

1. اپنے WordPress ایڈمن میں Ultimate Multisite > Settings پر جائیں
2. "Domain Mapping" ٹیب پر جائیں
3. نیچے سکرول کر کے "Host Integrations" تک جائیں
4. RunCloud انٹیگریشن کو فعال کریں
5. "Save Changes" پر کلک کریں

## یہ کیسے کام کرتا ہے

جب Ultimate Multisite میں کوئی ڈومین میپ کیا جاتا ہے:

1. انٹیگریشن RunCloud کی API کو آپ کی ایپلیکیشن میں ڈومین شامل کرنے کی درخواست بھیجتی ہے
2. اگر ڈومین کامیابی سے شامل ہو جاتا ہے تو انٹیگریشن SSL سرٹیفکیٹس کو بھی دوبارہ ڈیپلائے کرے گی
3. جب کوئی ڈومین میپنگ ہٹائی جاتی ہے تو انٹیگریشن RunCloud سے ڈومین کو ہٹا دے گی

subdomain انسٹالیشنز کے لیے، جب آپ کے نیٹ ورک میں نئی سائٹس شامل کی جاتی ہیں تو انٹیگریشن RunCloud میں subdomains کی تخلیق خود بخود سنبھال لے گی۔

## مسائل کا حل

### API کنکشن کے مسائل
- تصدیق کریں کہ آپ کی API اسناد درست ہیں
- چیک کریں کہ آپ کی server اور app IDs درست ہیں
- یقینی بنائیں کہ آپ کے RunCloud اکاؤنٹ کے پاس ضروری اجازتیں ہیں

### SSL سرٹیفکیٹ کے مسائل
- RunCloud کو SSL سرٹیفکیٹس جاری کرنے میں کچھ وقت لگ سکتا ہے
- تصدیق کریں کہ آپ کے ڈومینز آپ کے سرور کے IP ایڈریس کی طرف درست طریقے سے پوائنٹ کر رہے ہیں
- اپنی ایپلیکیشن کے لیے RunCloud SSL سیٹنگز چیک کریں

### ڈومین شامل نہیں ہوا
- کسی بھی error پیغامات کے لیے Ultimate Multisite لاگز چیک کریں
- تصدیق کریں کہ ڈومین پہلے سے RunCloud میں شامل نہیں ہے
- یقینی بنائیں کہ آپ کا RunCloud پلان متعدد ڈومینز کو سپورٹ کرتا ہے
