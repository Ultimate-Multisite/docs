---
title: Cloudflare انٹیگریشن
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare انٹیگریشن

## جائزہ
Cloudflare ایک معروف content delivery network (CDN) اور سیکورٹی فراہم کنندہ ہے جو ویب سائٹس کی حفاظت اور رفتار بڑھانے میں مدد کرتا ہے۔ یہ انٹیگریشن Ultimate Multisite اور Cloudflare کے درمیان خودکار ڈومین مینجمنٹ کو فعال کرتا ہے، خاص طور پر subdomain multisite انسٹالیشنز کے لیے۔

## خصوصیات
- Cloudflare میں خودکار subdomain بنانا
- Proxied subdomain سپورٹ
- DNS ریکارڈز کی مینجمنٹ
- Ultimate Multisite ایڈمن میں بہتر DNS ریکارڈ ڈسپلے

## تقاضے
درج ذیل constants آپ کی `wp-config.php` فائل میں ضرور متعین ہونے چاہئیں:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## سیٹ اپ کی ہدایات

### 1. اپنی Cloudflare API Key حاصل کریں

1. اپنے Cloudflare ڈیش بورڈ میں لاگ ان کریں
2. "My Profile" پر جائیں (اوپر دائیں کونے میں اپنی ای میل پر کلک کریں)
3. مینو سے "API Tokens" منتخب کریں
4. درج ذیل اجازتوں کے ساتھ ایک نیا API token بنائیں:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. اپنا API token کاپی کریں

### 2. اپنی Zone ID حاصل کریں

1. اپنے Cloudflare ڈیش بورڈ میں، وہ ڈومین منتخب کریں جو آپ استعمال کرنا چاہتے ہیں
2. Zone ID "Overview" ٹیب میں، دائیں سائیڈبار میں "API" کے نیچے نظر آئے گی
3. Zone ID کاپی کریں

### 3. wp-config.php میں Constants شامل کریں

درج ذیل constants اپنی `wp-config.php` فائل میں شامل کریں:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. انٹیگریشن فعال کریں

1. اپنے WordPress ایڈمن میں، Ultimate Multisite > Settings پر جائیں
2. "Domain Mapping" ٹیب پر جائیں
3. نیچے سکرول کر کے "Host Integrations" تک جائیں
4. Cloudflare انٹیگریشن کو فعال کریں
5. "Save Changes" پر کلک کریں

## یہ کیسے کام کرتا ہے

### Subdomain مینجمنٹ

جب subdomain multisite انسٹالیشن میں کوئی نئی سائٹ بنائی جاتی ہے:

1. انٹیگریشن Cloudflare کی API کو subdomain کے لیے CNAME ریکارڈ شامل کرنے کی درخواست بھیجتا ہے
2. subdomain کو بطور ڈیفالٹ Cloudflare کے ذریعے proxy کرنے کے لیے ترتیب دیا جاتا ہے (اسے filters سے تبدیل کیا جا سکتا ہے)
3. جب کوئی سائٹ ڈیلیٹ کی جاتی ہے، انٹیگریشن Cloudflare سے subdomain ہٹا دیتا ہے

### DNS ریکارڈ ڈسپلے

انٹیگریشن Ultimate Multisite ایڈمن میں DNS ریکارڈ ڈسپلے کو بہتر بناتا ہے:

1. Cloudflare سے براہ راست DNS ریکارڈز حاصل کرتا ہے
2. دکھاتا ہے کہ ریکارڈز proxied ہیں یا نہیں
3. DNS ریکارڈز کے بارے میں اضافی معلومات دکھاتا ہے

## اہم نوٹس

Cloudflare کی حالیہ اپڈیٹس کے مطابق، wildcard proxying اب تمام صارفین کے لیے دستیاب ہے۔ اس کا مطلب ہے کہ subdomain multisite انسٹالیشنز کے لیے Cloudflare انٹیگریشن پہلے کی طرح اتنا ضروری نہیں رہا، کیونکہ آپ Cloudflare میں آسانی سے wildcard DNS ریکارڈ سیٹ اپ کر سکتے ہیں۔

## مسائل کا حل

### API کنکشن کے مسائل
- تصدیق کریں کہ آپ کا API token درست ہے اور اس کے پاس ضروری اجازتیں ہیں
- چیک کریں کہ آپ کی Zone ID درست ہے
- یقینی بنائیں کہ آپ کے Cloudflare اکاؤنٹ کے پاس ضروری اجازتیں ہیں

### Subdomain شامل نہیں ہوا
- کسی بھی غلطی کے پیغامات کے لیے Ultimate Multisite لاگز چیک کریں
- تصدیق کریں کہ subdomain پہلے سے Cloudflare میں شامل نہیں ہے
- یقینی بنائیں کہ آپ کا Cloudflare پلان آپ کے بنائے جانے والے DNS ریکارڈز کی تعداد کو سپورٹ کرتا ہے

### Proxying کے مسائل
- اگر آپ نہیں چاہتے کہ subdomains proxy ہوں، تو آپ `wu_cloudflare_should_proxy` filter استعمال کر سکتے ہیں
- proxy ہونے پر کچھ فیچرز درست طریقے سے کام نہیں کر سکتے (مثلاً، کچھ WordPress ایڈمن فنکشنز)
- ایڈمن پیجز کے لیے cache کو bypass کرنے کے لیے Cloudflare کے Page Rules استعمال کرنے پر غور کریں
