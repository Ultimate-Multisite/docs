---
title: Cloudways انٹیگریشن
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways انٹیگریشن

## جائزہ
Cloudways ایک managed cloud hosting پلیٹ فارم ہے جو آپ کو مختلف cloud providers جیسے DigitalOcean، AWS، Google Cloud اور دیگر پر WordPress سائٹس deploy کرنے کی سہولت دیتا ہے۔ یہ انٹیگریشن Ultimate Multisite اور Cloudways کے درمیان خودکار domain syncing اور SSL certificate کے انتظام کو ممکن بناتی ہے۔

## خصوصیات
- خودکار domain syncing
- SSL certificate کا انتظام
- اضافی domains کے لیے سپورٹ
- SSL certificates کے لیے DNS validation

## تقاضے
درج ذیل constants کو آپ کی `wp-config.php` فائل میں define کرنا ضروری ہے:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

اختیاری طور پر، آپ یہ بھی define کر سکتے ہیں:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## سیٹ اپ کی ہدایات

### 1. اپنی Cloudways API Credentials حاصل کریں

1. اپنے Cloudways dashboard میں لاگ ان کریں
2. "Account" > "API Keys" پر جائیں
3. اگر آپ کے پاس پہلے سے API key نہیں ہے تو ایک generate کریں
4. اپنا ای میل اور API key کاپی کریں

### 2. اپنے Server اور Application IDs حاصل کریں

1. اپنے Cloudways dashboard میں "Servers" پر جائیں
2. وہ server منتخب کریں جہاں آپ کی WordPress multisite host ہے
3. Server ID URL میں نظر آئے گی: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" پر جائیں اور اپنی WordPress application منتخب کریں
5. App ID URL میں نظر آئے گی: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php میں Constants شامل کریں

اپنی `wp-config.php` فائل میں درج ذیل constants شامل کریں:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

اگر آپ کے پاس اضافی domains ہیں جو ہمیشہ شامل ہونے چاہیئں:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. انٹیگریشن کو فعال کریں

1. اپنے WordPress admin میں، Ultimate Multisite > Settings پر جائیں
2. "Domain Mapping" ٹیب پر جائیں
3. نیچے "Host Integrations" تک سکرول کریں
4. Cloudways انٹیگریشن کو فعال کریں
5. "Save Changes" پر کلک کریں

## یہ کیسے کام کرتا ہے

### Domain Syncing

جب Ultimate Multisite میں کوئی domain map کیا جاتا ہے:

1. انٹیگریشن تمام موجودہ mapped domains حاصل کرتی ہے
2. یہ نئے domain کو فہرست میں شامل کرتی ہے (اگر قابل اطلاق ہو تو www version کے ساتھ)
3. یہ مکمل فہرست API کے ذریعے Cloudways کو بھیجتی ہے
4. Cloudways آپ کی application کے لیے domain aliases کو update کرتا ہے

نوٹ: Cloudways API کو ہر بار مکمل domains کی فہرست بھیجنے کی ضرورت ہوتی ہے، نہ کہ صرف انفرادی domains کو شامل یا ہٹانا۔

### SSL Certificate کا انتظام

domains sync ہونے کے بعد:

1. انٹیگریشن چیک کرتی ہے کہ کون سے domains کے پاس آپ کے server کی طرف valid DNS records موجود ہیں
2. یہ Cloudways کو ان domains کے لیے Let's Encrypt SSL certificates install کرنے کی درخواست بھیجتی ہے
3. Cloudways SSL certificate کے اجراء اور installation کو سنبھالتا ہے

## اضافی Domains

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant آپ کو ایسے اضافی domains specify کرنے کی اجازت دیتا ہے جو Cloudways کے ساتھ sync کرتے وقت ہمیشہ شامل ہونے چاہیئں۔ یہ ان کے لیے مفید ہے:

- وہ domains جو Ultimate Multisite کے ذریعے manage نہیں ہوتے
- Wildcard domains (مثلاً `*.example.com`)
- Development یا staging domains

## مسائل کا حل

### API Connection کے مسائل
- تصدیق کریں کہ آپ کا ای میل اور API key درست ہیں
- چیک کریں کہ آپ کے server اور application IDs درست ہیں
- یقینی بنائیں کہ آپ کے Cloudways اکاؤنٹ کے پاس ضروری permissions ہیں

### SSL Certificate کے مسائل
- Cloudways کو SSL certificates جاری کرنے سے پہلے domains کے پاس آپ کے server کی طرف valid DNS records ہونے چاہیئں
- انٹیگریشن SSL certificates کی درخواست کرنے سے پہلے DNS records کی تصدیق کرتی ہے
- اگر SSL certificates جاری نہیں ہو رہے، تو چیک کریں کہ آپ کے domains آپ کے server کے IP address کی طرف صحیح طریقے سے point کر رہے ہیں

### Domain شامل نہیں ہو رہا
- کسی بھی error messages کے لیے Ultimate Multisite logs چیک کریں
- تصدیق کریں کہ domain پہلے سے Cloudways میں شامل نہیں ہے
- یقینی بنائیں کہ آپ کا Cloudways plan آپ کے شامل کیے جانے والے domains کی تعداد کو سپورٹ کرتا ہے
