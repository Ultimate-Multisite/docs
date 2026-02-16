---
title: GridPane انضمام
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane انٹیگریشن

## جائزہ
GridPane ایک مخصوص WordPress ہوسٹنگ کنٹرول پینل ہے جو پیشہ ور WordPress ماہرین کے لیے بنایا گیا ہے۔ یہ انٹیگریشن Ultimate Multisite اور GridPane کے درمیان خودکار ڈومین سنکنگ اور SSL سرٹیفکیٹ مینجمنٹ کو فعال کرتی ہے۔

## خصوصیات
- خودکار ڈومین سنکنگ
- SSL سرٹیفکیٹ مینجمنٹ
- SUNRISE constant کی خودکار ترتیب

## ضروریات
درج ذیل constants آپ کی `wp-config.php` فائل میں ہونے چاہیئیں:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## سیٹ اپ کی ہدایات

### 1. اپنے GridPane API اسناد حاصل کریں

1. اپنے GridPane dashboard میں لاگ ان کریں
2. "Settings" > "API" پر جائیں
3. اگر آپ کے پاس پہلے سے نہیں ہے تو ایک API key بنائیں
4. اپنی API key کاپی کریں

### 2. اپنے Server اور Site IDs حاصل کریں

1. اپنے GridPane dashboard میں "Servers" پر جائیں
2. وہ سرور منتخب کریں جہاں آپ کی WordPress multisite ہوسٹ ہے
3. Server ID نوٹ کریں (URL میں یا سرور کی تفصیلات کے صفحے پر نظر آئے گی)
4. "Sites" پر جائیں اور اپنی WordPress سائٹ منتخب کریں
5. Site ID نوٹ کریں (URL میں یا سائٹ کی تفصیلات کے صفحے پر نظر آئے گی)

### 3. wp-config.php میں Constants شامل کریں

اپنی `wp-config.php` فائل میں درج ذیل constants شامل کریں:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. انٹیگریشن فعال کریں

1. اپنے WordPress admin میں Ultimate Multisite > Settings پر جائیں
2. "Domain Mapping" ٹیب پر جائیں
3. نیچے سکرول کریں "Host Integrations" تک
4. GridPane انٹیگریشن فعال کریں
5. "Save Changes" پر کلک کریں

## یہ کیسے کام کرتا ہے

جب Ultimate Multisite میں کوئی ڈومین میپ ہوتا ہے:

1. انٹیگریشن GridPane کی API کو درخواست بھیجتی ہے تاکہ ڈومین آپ کی سائٹ میں شامل ہو جائے
2. GridPane خودکار طور پر SSL سرٹیفکیٹ فراہم کرتا ہے
3. جب کوئی ڈومین میپنگ ہٹائی جاتی ہے تو انٹیگریشن اس ڈومین کو GridPane سے ہٹا دیتی ہے

یہ انٹیگریشن آپ کی wp-config.php فائل میں SUNRISE constant کو بھی خودکار طور پر سنبھالتی ہے، جو ڈومین میپنگ کے صحیح طریقے سے کام کرنے کے لیے ضروری ہے۔

## SUNRISE Constant مینجمنٹ

GridPane انٹیگریشن کی ایک خاص خصوصیت یہ ہے کہ یہ wp-config.php میں SUNRISE constant کو خودکار طور پر واپس پہلی حالت میں لے آتی ہے تاکہ GridPane کے اپنے ڈومین میپنگ سسٹم سے تصادم نہ ہو۔ اس سے یقینی بنتا ہے کہ دونوں سسٹم بغیر کسی مسئلے کے ایک ساتھ کام کر سکیں۔

## مسائل کا حل

### API کنکشن کے مسائل
- تصدیق کریں کہ آپ کی API key درست ہے
- چیک کریں کہ آپ کے server اور site IDs درست ہیں
- یقینی بنائیں کہ آپ کے GridPane اکاؤنٹ کے پاس ضروری اجازات ہیں

### SSL سرٹیفکیٹ کے مسائل
- GridPane کو SSL سرٹیفکیٹس جاری کرنے میں کچھ وقت لگ سکتا ہے
- تصدیق کریں کہ آپ کے ڈومینز آپ کے سرور کے IP ایڈریس کی طرف صحیح طور پر پوائنٹ ہو رہے ہیں
- اپنی سائٹ کے لیے GridPane کی SSL سیٹنگز چیک کریں

### ڈومین شامل نہیں ہوا
- کسی بھی ایرر میسج کے لیے Ultimate Multisite لاگز چیک کریں
- تصدیق کریں کہ ڈومین پہلے سے GridPane میں شامل نہیں ہے
- یقینی بنائیں کہ آپ کے ڈومین کے DNS ریکارڈز صحیح طریقے سے ترتیب دیے گئے ہیں
