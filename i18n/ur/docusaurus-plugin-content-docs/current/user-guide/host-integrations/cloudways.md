---
title: Cloudways انضمام
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways انضمام

## جائزہ
Cloudways ایک منظم cloud hosting platform ہے جو آپ کو DigitalOcean، AWS، Google Cloud، اور مزید جیسے مختلف cloud providers پر WordPress سائٹس deploy کرنے کی اجازت دیتا ہے۔ یہ انضمام Ultimate Multisite اور Cloudways کے درمیان خودکار domain syncing اور SSL certificate management کو فعال بناتا ہے۔

## خصوصیات
- خودکار domain syncing
- SSL certificate management
- اضافی domains کے لیے support
- SSL certificates کے لیے DNS validation

## تقاضے
درج ذیل constants آپ کی `wp-config.php` فائل میں define ہونے چاہئیں:

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

## Setup ہدایات

### 1. اپنی Cloudways API credentials حاصل کریں

1. اپنے Cloudways dashboard میں log in کریں
2. "Account" > "API Keys" پر جائیں
3. اگر آپ کے پاس پہلے سے API key نہیں ہے تو ایک generate کریں
4. اپنا email اور API key copy کریں

### 2. اپنے Server اور Application IDs حاصل کریں

1. اپنے Cloudways dashboard میں، "Servers" پر جائیں
2. وہ server منتخب کریں جہاں آپ کا WordPress multisite hosted ہے
3. Server ID اس URL میں نظر آتا ہے: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" پر جائیں اور اپنی WordPress application منتخب کریں
5. App ID اس URL میں نظر آتا ہے: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php میں Constants شامل کریں

اپنی `wp-config.php` فائل میں درج ذیل constants شامل کریں:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

اگر آپ کے پاس اضافی **external** domains ہیں (آپ کے multisite network سے باہر) جنہیں ہمیشہ Cloudways aliases list پر رکھا جانا چاہیے:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning اپنے network کا wildcard شامل نہ کریں
`WU_CLOUDWAYS_EXTRA_DOMAINS` میں `*.your-network.com` (یا اپنے network کا کوئی بھی subdomain pattern) شامل **نہ** کریں۔ یہ per-tenant SSL certificates جاری ہونے سے کیوں روکتا ہے، اس کے لیے نیچے [اہم — wildcard SSL خطرہ](#important--wildcard-ssl-pitfall)
دیکھیں۔
:::

### 4. انضمام فعال کریں

1. اپنے WordPress admin میں، Ultimate Multisite > Settings پر جائیں
2. "Domain Mapping" tab پر navigate کریں
3. "Host Integrations" تک نیچے scroll کریں
4. Cloudways integration فعال کریں
5. "Save Changes" پر click کریں

## یہ کیسے کام کرتا ہے

### Domain Syncing

جب Ultimate Multisite میں کوئی domain mapped ہوتا ہے:

1. integration اس وقت mapped تمام domains retrieve کرتا ہے
2. یہ نئے domain کو list میں شامل کرتا ہے (اگر applicable ہو تو www version کے ساتھ)
3. یہ مکمل list API کے ذریعے Cloudways کو بھیجتا ہے
4. Cloudways آپ کی application کے domain aliases update کرتا ہے

نوٹ: Cloudways API ہر بار domains کی مکمل list بھیجنے کا تقاضا کرتی ہے، صرف individual domains add یا remove کرنا کافی نہیں۔

### SSL Certificate Management

domains sync ہونے کے بعد:

1. integration check کرتا ہے کہ کن domains کے valid DNS records آپ کے server کی طرف point کر رہے ہیں
2. یہ ان domains کے لیے Let's Encrypt SSL certificates install کرنے کی request Cloudways کو بھیجتا ہے
3. Cloudways SSL certificate issuance اور installation handle کرتا ہے

integration ہمیشہ Cloudways سے **standard** (non-wildcard) Let's Encrypt certificates request کرتا ہے۔ اگر `WU_CLOUDWAYS_EXTRA_DOMAINS` میں wildcard pattern دیا جائے، تو SSL request سے پہلے leading
`*.` ہٹا دیا جاتا ہے — wildcard خود اس integration کے ذریعے کبھی install نہیں ہوتا۔ Cloudways پر wildcard certificate استعمال کرنے کے لیے آپ کو اسے
manual طور پر install کرنا ہوگا، لیکن ایسا کرنے سے mapped custom domains کے لیے per-domain Let's Encrypt issuance block ہو جاتی ہے
(نیچے pitfall دیکھیں)۔

## اضافی Domains

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant آپ کو اضافی **external**
domains specify کرنے کی اجازت دیتا ہے جنہیں ہمیشہ Cloudways application کی aliases list پر رکھا جانا چاہیے۔ اسے ان کے لیے استعمال کریں:

- External domains جو Ultimate Multisite کے ذریعے managed نہیں ہیں (مثلاً ایک separate marketing site جو اسی Cloudways application کو share کر رہی ہو)
- Parked یا staging domains جنہیں آپ application aliases list پر رکھنا چاہتے ہیں

اس constant کو اپنے network کے subdomain wildcard کے لیے استعمال **نہ** کریں
(مثلاً `*.your-network.com`)۔ نیچے wildcard SSL pitfall دیکھیں۔

## اہم — Wildcard SSL خطرہ

Cloudways کے default setup پر عمل کرتے ہوئے ایک عام غلطی یہ ہے کہ
`*.your-network.com` جیسے wildcard کو `WU_CLOUDWAYS_EXTRA_DOMAINS` میں شامل کیا جائے، یا اس wildcard کے لیے Cloudways
wildcard SSL certificate manual طور پر install کیا جائے۔

**اگر آپ یہ کرتے ہیں، تو Cloudways ان per-tenant custom domains کے لیے Let's Encrypt certificates جاری کرنے سے انکار کرے گا جنہیں Ultimate Multisite map کرتا ہے۔** Cloudways ہر بار application پر active
SSL certificate replace کر دیتا ہے، اور application پر پہلے سے موجود wildcard certificate اس per-domain Let's Encrypt issuance کو block کر دیتا ہے جس پر integration rely کرتا ہے۔

### Ultimate Multisite network کے لیے recommended Cloudways SSL setup

1. Cloudways application کے **SSL Certificate** tab میں، صرف `your-network.com` اور `www.your-network.com`
   کو cover کرنے والا **standard
   Let's Encrypt certificate** install کریں
   — wildcard **نہیں**۔
2. `WU_CLOUDWAYS_EXTRA_DOMAINS` میں `*.your-network.com` (یا اپنے network کا کوئی بھی subdomain pattern) **نہ** ڈالیں۔ اس constant کو صرف **external** domains کے لیے reserve کریں۔
3. per-tenant subdomain wildcard صرف **DNS** level پر create کریں (ایک `A` record جو
   `*.your-network.com` کو آپ کے Cloudways server IP کی طرف point کرے) تاکہ subsites resolve ہوں۔ individual mapped custom domains کے لیے SSL پھر integration کے ذریعے
   Let's Encrypt کے توسط سے automatically جاری ہو جاتا ہے۔

اگر آپ کے کرایہ داروں کے حسبِ ضرورت ڈومینز SSL کے بغیر اٹکے ہوئے ہیں، تو Cloudways کا SSL ٹیب چیک کریں۔ اگر وہاں
wildcard سرٹیفکیٹ فعال ہے، تو اسے ہٹا دیں، صرف مرکزی نیٹ ورک ڈومین کے لیے ایک معیاری Let's Encrypt
سرٹیفکیٹ دوبارہ جاری کریں، اور `WU_CLOUDWAYS_EXTRA_DOMAINS` سے کوئی بھی wildcard اندراجات ہٹا دیں۔ پھر ڈومین میپنگ دوبارہ چلائیں (یا اگلی کا انتظار کریں)
اور انضمام دوبارہ فی ڈومین سرٹیفکیٹس جاری کرنا شروع کر دے گا۔

## خرابیوں کا ازالہ

### API کنکشن کے مسائل
- تصدیق کریں کہ آپ کا ای میل اور API key درست ہیں
- چیک کریں کہ آپ کے سرور اور application IDs درست ہیں
- یقینی بنائیں کہ آپ کے Cloudways Account کے پاس ضروری اجازتیں موجود ہیں

### SSL سرٹیفکیٹ کے مسائل
- Cloudways تقاضا کرتا ہے کہ SSL سرٹیفکیٹس جاری کرنے سے پہلے ڈومینز کے درست DNS ریکارڈز آپ کے سرور کی طرف اشارہ کر رہے ہوں
- انضمام SSL سرٹیفکیٹس کی درخواست کرنے سے پہلے DNS ریکارڈز کی توثیق کرتا ہے
- اگر SSL سرٹیفکیٹس جاری نہیں ہو رہے، تو چیک کریں کہ آپ کے ڈومینز آپ کے سرور کے IP address کی طرف درست طور پر اشارہ کر رہے ہیں
- **فی کرایہ دار حسبِ ضرورت ڈومینز SSL کے بغیر اٹکے ہوئے ہیں؟** Cloudways application کا SSL Certificate ٹیب چیک کریں۔ اگر کوئی wildcard سرٹیفکیٹ (دستی طور پر نصب شدہ، یا `*.your-network.com` کو کور کرنے والا) فعال ہے، تو Cloudways انفرادی طور پر میپ کیے گئے حسبِ ضرورت ڈومینز کے لیے Let's Encrypt سرٹیفکیٹس جاری نہیں کرے گا۔ اسے ایک معیاری Let's Encrypt سرٹیفکیٹ سے بدل دیں جو صرف مرکزی نیٹ ورک ڈومین (`your-network.com`, `www.your-network.com`) کو کور کرے، اور `WU_CLOUDWAYS_EXTRA_DOMAINS` سے کوئی بھی wildcard اندراجات ہٹا دیں۔ پھر ڈومین میپنگ دوبارہ چلائیں (یا اگلی کا انتظار کریں) اور انضمام فی ڈومین سرٹیفکیٹس کی درخواست کرے گا۔

### ڈومین شامل نہیں ہوا
- کسی بھی خرابی کے پیغامات کے لیے Ultimate Multisite logs چیک کریں
- تصدیق کریں کہ ڈومین پہلے سے Cloudways میں شامل نہیں ہے
- یقینی بنائیں کہ آپ کا Cloudways plan ان ڈومینز کی تعداد کو سپورٹ کرتا ہے جو آپ شامل کر رہے ہیں
