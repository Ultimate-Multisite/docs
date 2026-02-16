---
title: cPanel انٹیگریشن
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel انٹیگریشن

## جائزہ
cPanel ویب ہوسٹنگ کے سب سے مقبول کنٹرول پینلز میں سے ایک ہے جو بہت سے shared اور dedicated ہوسٹنگ فراہم کنندگان استعمال کرتے ہیں۔ یہ انٹیگریشن Ultimate Multisite اور cPanel کے درمیان خودکار ڈومین سنکنگ کو فعال کرتی ہے، جس سے آپ اپنے cPanel اکاؤنٹ میں ڈومین aliases اور subdomains خودکار طریقے سے شامل کر سکتے ہیں۔

## خصوصیات
- cPanel میں خودکار addon domain بنانا
- cPanel میں خودکار subdomain بنانا (subdomain multisite installations کے لیے)
- mappings حذف ہونے پر ڈومین کا اخراج

## تقاضے
درج ذیل constants آپ کی `wp-config.php` فائل میں متعین ہونے چاہئیں:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

اختیاری طور پر، آپ یہ بھی متعین کر سکتے ہیں:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## سیٹ اپ کی ہدایات

### 1. اپنے cPanel کی اسناد حاصل کریں

1. اپنے ہوسٹنگ فراہم کنندہ سے اپنا cPanel یوزر نیم اور پاس ورڈ حاصل کریں
2. اپنا cPanel ہوسٹ معلوم کریں (عام طور پر `cpanel.yourdomain.com` یا `yourdomain.com:2083`)

### 2. wp-config.php میں Constants شامل کریں

اپنی `wp-config.php` فائل میں درج ذیل constants شامل کریں:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

اختیاری طور پر، آپ پورٹ اور روٹ ڈائریکٹری کو اپنی مرضی کے مطابق بدل سکتے ہیں:

```php
define('WU_CPANEL_PORT', 2083); // اگر آپ کا cPanel مختلف پورٹ استعمال کرتا ہے تو تبدیل کریں
define('WU_CPANEL_ROOT_DIR', '/public_html'); // اگر آپ کی document root مختلف ہے تو تبدیل کریں
```

### 3. انٹیگریشن کو فعال کریں

1. اپنے WordPress admin میں، Ultimate Multisite > Settings پر جائیں
2. "Domain Mapping" ٹیب پر جائیں
3. "Host Integrations" تک نیچے سکرول کریں
4. cPanel انٹیگریشن کو فعال کریں
5. "Save Changes" پر کلک کریں

## یہ کیسے کام کرتا ہے

### Addon Domains

جب Ultimate Multisite میں کوئی ڈومین map کیا جاتا ہے:

1. انٹیگریشن cPanel کے API کو ڈومین بطور addon domain شامل کرنے کی درخواست بھیجتی ہے
2. ڈومین آپ کی روٹ ڈائریکٹری کی طرف اشارہ کرنے کے لیے configure ہو جاتا ہے
3. جب کوئی domain mapping ہٹائی جاتی ہے، تو انٹیگریشن cPanel سے addon domain کو ہٹا دے گی

### Subdomains

subdomain multisite installations کے لیے، جب نئی سائٹ بنائی جاتی ہے:

1. انٹیگریشن مکمل ڈومین سے subdomain حصہ نکالتی ہے
2. یہ cPanel کے API کو subdomain شامل کرنے کی درخواست بھیجتی ہے
3. subdomain آپ کی روٹ ڈائریکٹری کی طرف اشارہ کرنے کے لیے configure ہو جاتا ہے

## اہم نکات

- انٹیگریشن آپ کے cPanel اکاؤنٹ سے رابطے کے لیے cPanel کا API2 استعمال کرتی ہے
- آپ کے cPanel اکاؤنٹ کو addon domains اور subdomains شامل کرنے کی اجازت ہونی چاہیے
- کچھ ہوسٹنگ فراہم کنندگان addon domains یا subdomains کی تعداد محدود کر سکتے ہیں
- انٹیگریشن DNS کنفیگریشن کو سنبھالتی نہیں ہے؛ آپ کو اب بھی اپنے ڈومینز کو اپنے سرور کے IP ایڈریس کی طرف اشارہ کرنا ہوگا

## مسائل کا حل

### API کنکشن کے مسائل
- تصدیق کریں کہ آپ کا cPanel یوزر نیم اور پاس ورڈ درست ہے
- چیک کریں کہ آپ کا cPanel ہوسٹ درست اور قابل رسائی ہے
- یقینی بنائیں کہ آپ کے cPanel اکاؤنٹ کے پاس ضروری اجازتیں ہیں
- ہوسٹ کے لیے مکمل URL استعمال کرنے کی کوشش کریں (مثلاً، `https://cpanel.yourdomain.com`)

### ڈومین شامل نہیں ہوا
- کسی بھی غلطی کے پیغامات کے لیے Ultimate Multisite لاگز چیک کریں
- تصدیق کریں کہ ڈومین پہلے سے cPanel میں شامل نہیں ہے
- یقینی بنائیں کہ آپ کا cPanel اکاؤنٹ addon domains یا subdomains کی حد تک نہیں پہنچ گیا

### SSL سرٹیفکیٹ کے مسائل
- انٹیگریشن SSL سرٹیفکیٹ جاری کرنے کو سنبھالتی نہیں ہے
- آپ کو اپنے ڈومینز کے لیے SSL سرٹیفکیٹس جاری کرنے کے لیے cPanel کے SSL/TLS ٹولز یا AutoSSL فیچر استعمال کرنے ہوں گے
- متبادل طور پر، آپ cPanel کے AutoSSL کے ساتھ Let's Encrypt جیسی سروس استعمال کر سکتے ہیں
