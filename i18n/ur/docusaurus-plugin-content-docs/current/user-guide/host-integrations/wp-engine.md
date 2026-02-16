---
title: WP Engine انٹیگریشن
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine انٹیگریشن

## جائزہ
WP Engine ایک premium managed WordPress hosting پلیٹ فارم ہے جو WordPress سائٹس کے لیے بہترین کارکردگی، سیکیورٹی، اور scalability فراہم کرتا ہے۔ یہ انٹیگریشن Ultimate Multisite اور WP Engine کے درمیان خودکار ڈومین syncing کی سہولت دیتا ہے۔

## خصوصیات
- خودکار ڈومین syncing
- Multisite انسٹالیشنز کے لیے subdomain سپورٹ
- WP Engine کے موجودہ سسٹمز کے ساتھ بغیر کسی رکاوٹ کے انٹیگریشن

## ضروریات
یہ انٹیگریشن خود بخود پتہ لگا لیتا ہے کہ آپ WP Engine پر ہوسٹ کر رہے ہیں اور built-in WP Engine API استعمال کرتا ہے۔ اگر WP Engine plugin فعال اور درست طریقے سے ترتیب دیا گیا ہے تو کسی اضافی ترتیب کی ضرورت نہیں۔

تاہم، اگر آپ کو انٹیگریشن دستی طور پر ترتیب دینا ہو، تو آپ اپنی `wp-config.php` فائل میں ان میں سے کوئی ایک constant ڈیفائن کر سکتے ہیں:

```php
define('WPE_APIKEY', 'your_api_key'); // ترجیحی طریقہ
// OR
define('WPE_API', 'your_api_key'); // متبادل طریقہ
```

## سیٹ اپ ہدایات

### 1. WP Engine Plugin کی تصدیق کریں

اگر آپ WP Engine پر ہوسٹ کر رہے ہیں، تو WP Engine plugin پہلے سے انسٹال اور فعال ہونا چاہیے۔ تصدیق کریں کہ:

1. WP Engine plugin فعال ہے
2. فائل `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` موجود ہے

### 2. انٹیگریشن فعال کریں

1. اپنے WordPress admin میں، Ultimate Multisite > Settings پر جائیں
2. "Domain Mapping" ٹیب پر جائیں
3. نیچے "Host Integrations" تک سکرول کریں
4. WP Engine انٹیگریشن فعال کریں
5. "Save Changes" پر کلک کریں

## یہ کیسے کام کرتا ہے

### ڈومین Syncing

جب کوئی ڈومین Ultimate Multisite میں map کیا جاتا ہے:

1. انٹیگریشن WP Engine API کا استعمال کرتے ہوئے ڈومین کو آپ کی WP Engine انسٹالیشن میں شامل کرتا ہے
2. WP Engine ڈومین کی ترتیب اور SSL certificate جاری کرنے کا کام سنبھالتا ہے
3. جب کوئی ڈومین mapping ہٹا دی جاتی ہے، تو انٹیگریشن اس ڈومین کو WP Engine سے ہٹا دے گا

### Subdomain سپورٹ

Subdomain multisite انسٹالیشنز کے لیے:

1. جب نئی سائٹ بنائی جاتی ہے تو انٹیگریشن ہر subdomain کو WP Engine میں شامل کرتا ہے
2. WP Engine subdomain کی ترتیب سنبھالتا ہے
3. جب کوئی سائٹ حذف کی جاتی ہے، تو انٹیگریشن اس subdomain کو WP Engine سے ہٹا دے گا

## اہم نوٹس

### Wildcard ڈومینز

Subdomain multisite انسٹالیشنز کے لیے، یہ تجویز کیا جاتا ہے کہ WP Engine سپورٹ سے رابطہ کریں اور wildcard domain ترتیب کی درخواست کریں۔ اس سے تمام subdomains خودکار طور پر کام کریں گے بغیر ہر ایک کو الگ سے شامل کرنے کی ضرورت کے۔

### SSL Certificates

WP Engine اس انٹیگریشن کے ذریعے شامل کیے گئے تمام ڈومینز کے لیے SSL certificate جاری کرنے اور تجدید کا خود بخود انتظام کرتا ہے۔ کسی اضافی ترتیب کی ضرورت نہیں۔

## مسائل کا حل

### API کنکشن کے مسائل
- تصدیق کریں کہ WP Engine plugin فعال اور درست طریقے سے ترتیب دیا گیا ہے
- اگر آپ نے API key دستی طور پر ڈیفائن کی ہے، تو چیک کریں کہ یہ درست ہے
- اگر آپ کو API میں کوئی مسئلہ ہو رہا ہے تو WP Engine سپورٹ سے رابطہ کریں

### ڈومین شامل نہیں ہو رہا
- کسی بھی error پیغامات کے لیے Ultimate Multisite logs چیک کریں
- تصدیق کریں کہ ڈومین پہلے سے WP Engine میں شامل نہیں ہے
- یقینی بنائیں کہ آپ کا WP Engine plan آپ کی شامل کردہ ڈومینز کی تعداد کو سپورٹ کرتا ہے

### Subdomain کے مسائل
- اگر subdomains کام نہیں کر رہے، تو WP Engine سپورٹ سے رابطہ کریں اور wildcard domain ترتیب کی درخواست کریں
- تصدیق کریں کہ آپ کی DNS سیٹنگز مین ڈومین اور subdomains کے لیے درست طریقے سے ترتیب دی گئی ہیں
