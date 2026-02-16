---
title: کنٹرول پینل انضمام کو بہتر بنائیں
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance کنٹرول پینل انٹیگریشن

## جائزہ
Enhance ایک جدید کنٹرول پینل ہے جو طاقتور ہوسٹنگ آٹومیشن اور مینجمنٹ کی صلاحیتیں فراہم کرتا ہے۔ یہ انٹیگریشن Ultimate Multisite اور Enhance Control Panel کے درمیان خودکار ڈومین سنکنگ اور SSL سرٹیفکیٹ مینجمنٹ کو ممکن بناتی ہے۔

**متعلقہ بحث:** کمیونٹی ٹپس اور اضافی معلومات کے لیے [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) دیکھیں۔

## خصوصیات
- Ultimate Multisite میں ڈومین میپ ہونے پر خودکار ڈومین سنکنگ
- DNS resolve ہونے پر LetsEncrypt کے ذریعے خودکار SSL سرٹیفکیٹ فراہمی
- سب ڈومین موڈ میں چلنے والے نیٹ ورکس کے لیے سب ڈومین سپورٹ
- میپنگ ڈیلیٹ ہونے پر ڈومین ہٹانا
- API اسناد کی تصدیق کے لیے کنکشن ٹیسٹنگ

## ضروریات

### سسٹم کی ضروریات
- Enhance Control Panel انسٹال اور قابل رسائی ہو
- WordPress Multisite انسٹالیشن جو Enhance سرور پر ہوسٹ ہو یا اس سے منسلک ہو
- Apache ویب سرور (Enhance فی الحال Apache configurations سپورٹ کرتا ہے؛ LiteSpeed Enterprise کم قیمت پر دستیاب ہے)

### API رسائی
API ٹوکنز بنانے کے لیے آپ کے پاس Enhance Control Panel کا ایڈمنسٹریٹر ایکسیس ہونا ضروری ہے۔

## اپنی API اسناد حاصل کرنا

### 1. API ٹوکن بنائیں

1. اپنے Enhance Control Panel میں ایڈمنسٹریٹر کے طور پر لاگ ان کریں
2. نیویگیشن مینو میں **Settings** پر کلک کریں
3. **Access Tokens** پر جائیں
4. **Create Token** پر کلک کریں
5. ٹوکن کو ایک وضاحتی نام دیں (مثلاً "Ultimate Multisite Integration")
6. **System Administrator** رول تفویض کریں
7. ایکسپائری تاریخ کے لیے:
   - اگر آپ چاہتے ہیں کہ ٹوکن کبھی ختم نہ ہو تو خالی چھوڑ دیں
   - یا سیکیورٹی مقاصد کے لیے ایک مخصوص ایکسپائری تاریخ مقرر کریں
8. **Create** پر کلک کریں

بنانے کے بعد، آپ کا **Access Token** اور **Organization ID** دکھایا جائے گا۔ **انہیں فوراً محفوظ کر لیں** کیونکہ ٹوکن صرف ایک بار دکھایا جائے گا۔

### 2. اپنی Organization ID حاصل کریں

Organization ID، Access Tokens صفحے پر ایک نیلے انفارمیشن باکس میں "Org ID: {your_id}" کے لیبل کے ساتھ دکھائی جاتی ہے۔

Organization ID اس فارمیٹ میں UUID ہے: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

آپ کسٹمر کی Organization ID اس طرح بھی تلاش کر سکتے ہیں:
1. **Customers** صفحے پر جائیں
2. متعلقہ کسٹمر کے لیے **Manage customer** پر کلک کریں
3. URL دیکھیں - Organization ID `/customers/` کے بعد الفانیومرک حروف ہیں

### 3. اپنی Server ID حاصل کریں

اپنی Server ID تلاش کرنے کے لیے (ڈومین آپریشنز کے لیے ضروری):

1. Enhance Control Panel میں **Servers** پر جائیں
2. اس سرور پر کلک کریں جہاں آپ کی WordPress انسٹالیشن چل رہی ہے
3. Server ID (UUID فارمیٹ) URL یا سرور تفصیلات میں نظر آئے گی
4. متبادل طور پر، آپ سرورز کی فہرست کے لیے API استعمال کر سکتے ہیں:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

سرور ID اس UUID فارمیٹ میں ہوتی ہے: `00000000-0000-0000-0000-000000000000`

### 4. اپنا API URL حاصل کریں

آپ کا API URL آپ کا Enhance Control Panel URL ہے جس میں `/api/` شامل ہے:

```
https://your-enhance-panel.com/api/
```

**اہم:** `/api/` پاتھ ضروری ہے۔ عام غلطیوں میں شامل ہیں:
- `/api/` کے بغیر صرف ڈومین استعمال کرنا
- HTTPS کی بجائے HTTP استعمال کرنا (سیکیورٹی کے لیے HTTPS ضروری ہے)

## کنفیگریشن

### ضروری Constants

اپنی `wp-config.php` فائل میں درج ذیل constants شامل کریں:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### انٹیگریشن وزرڈ کے ذریعے سیٹ اپ

1. اپنے WordPress ایڈمن میں **Ultimate Multisite** > **Settings** پر جائیں
2. **Integrations** ٹیب پر جائیں
3. **Enhance Control Panel Integration** تلاش کریں اور **Configuration** پر کلک کریں
4. وزرڈ آپ کو سیٹ اپ میں رہنمائی کرے گا:
   - **مرحلہ 1:** تعارف اور خصوصیات کا جائزہ
   - **مرحلہ 2:** اپنی API اسناد درج کریں (Token, API URL, Server ID)
   - **مرحلہ 3:** کنکشن ٹیسٹ کریں
   - **مرحلہ 4:** جائزہ لیں اور ایکٹیویٹ کریں

آپ یہ انتخاب کر سکتے ہیں:
- وزرڈ کو خودکار طور پر آپ کی `wp-config.php` فائل میں constants شامل کرنے دیں
- constant definitions کاپی کریں اور انہیں دستی طور پر شامل کریں

## اضافی WordPress کنفیگریشن

کمیونٹی فیڈبیک ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) کی بنیاد پر، آپ کو ان اضافی سیٹنگز کو کنفیگر کرنے کی ضرورت ہو سکتی ہے:

### .htaccess کنفیگریشن

اگر آپ کو ڈومین میپنگ میں مسائل آئیں:
1. اصل Enhance `.htaccess` فائل ڈیلیٹ کریں
2. اسے معیاری WordPress Multisite `.htaccess` فائل سے بدل دیں

### Cookie Constants

میپ شدہ ڈومینز میں کوکیز کی درست ہینڈلنگ کو یقینی بنانے کے لیے یہ constants `wp-config.php` میں شامل کریں:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## یہ کیسے کام کرتا ہے

### جب ڈومین میپ ہوتا ہے

1. صارف Ultimate Multisite میں کسٹم ڈومین میپ کرتا ہے (یا سب ڈومین موڈ میں نئی سائٹ بنتی ہے)
2. انٹیگریشن Enhance کی API کو POST درخواست بھیجتی ہے: `/servers/{server_id}/domains`
3. Enhance آپ کے سرور کنفیگریشن میں ڈومین شامل کرتا ہے
4. جب DNS آپ کے سرور سے resolve ہوتا ہے، Enhance خودکار طور پر LetsEncrypt کے ذریعے SSL سرٹیفکیٹ فراہم کرتا ہے
5. ڈومین HTTPS کے ساتھ ایکٹیو ہو جاتا ہے

### جب ڈومین ہٹایا جاتا ہے

1. Ultimate Multisite میں ڈومین میپنگ ڈیلیٹ ہوتی ہے
2. انٹیگریشن Enhance سے ڈومین کی ID تلاش کرنے کے لیے کوئری کرتی ہے
3. DELETE درخواست بھیجی جاتی ہے: `/servers/{server_id}/domains/{domain_id}`
4. Enhance آپ کے سرور کنفیگریشن سے ڈومین ہٹا دیتا ہے

### DNS اور SSL کی جانچ

Ultimate Multisite میں بلٹ ان DNS اور SSL چیکنگ شامل ہے:
- آپ **Domain Mapping Settings** میں چیک انٹرول کنفیگر کر سکتے ہیں (ڈیفالٹ: 300 سیکنڈ/5 منٹ)
- سسٹم ڈومین کو ایکٹیو مارک کرنے سے پہلے DNS propagation کی تصدیق کرے گا
- SSL سرٹیفکیٹ کی validity خودکار طور پر چیک ہوتی ہے
- Enhance خودکار طور پر SSL فراہمی سنبھالتا ہے، لہذا دستی SSL کنفیگریشن ضروری نہیں

## سیٹ اپ کی تصدیق

### کنکشن ٹیسٹ کریں

1. Integration Wizard میں **Test Connection** مرحلہ استعمال کریں
2. پلگ ان آپ کے سرور پر ڈومینز کی فہرست بنانے کی کوشش کرے گا
3. کامیابی کا پیغام تصدیق کرتا ہے:
   - API اسناد درست ہیں
   - API URL قابل رسائی ہے
   - Server ID درست ہے
   - اجازتیں درست طریقے سے سیٹ ہیں

### ڈومین میپ کرنے کے بعد

1. Ultimate Multisite میں ٹیسٹ ڈومین میپ کریں
2. Ultimate Multisite لاگز چیک کریں (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Enhance Control Panel میں تصدیق کریں کہ ڈومین شامل ہو گیا:
   - **Servers** > **Your Server** > **Domains** پر جائیں
   - نیا ڈومین فہرست میں ظاہر ہونا چاہیے
4. DNS propagate ہونے کے بعد، تصدیق کریں کہ SSL خودکار طور پر فراہم ہوا

## مسائل کا حل

### API کنکشن کے مسائل

**خرابی: "Failed to connect to Enhance API"**
- تصدیق کریں کہ `WU_ENHANCE_API_URL` میں آخر میں `/api/` شامل ہے
- یقینی بنائیں کہ آپ HTTPS استعمال کر رہے ہیں، HTTP نہیں
- چیک کریں کہ Enhance پینل آپ کے WordPress سرور سے قابل رسائی ہے
- تصدیق کریں کہ کوئی فائر وال رولز کنکشن کو بلاک نہیں کر رہے

**خرابی: "Enhance API Token not found"**
- یقینی بنائیں کہ `WU_ENHANCE_API_TOKEN` `wp-config.php` میں متعین ہے
- تصدیق کریں کہ ٹوکن Enhance میں ڈیلیٹ یا ایکسپائر نہیں ہوا
- ٹوکن ویلیو میں ٹائپنگ کی غلطیاں چیک کریں

**خرابی: "Server ID is not configured"**
- تصدیق کریں کہ `WU_ENHANCE_SERVER_ID` `wp-config.php` میں متعین ہے
- یقینی بنائیں کہ Server ID درست UUID فارمیٹ میں ہے
- تصدیق کریں کہ سرور آپ کے Enhance پینل میں موجود ہے

### ڈومین شامل نہیں ہوا

**لاگز چیک کریں:**
1. **Ultimate Multisite** > **Logs** پر جائیں
2. **integration-enhance** کے ذریعے فلٹر کریں
3. مسئلے کی نشاندہی کرنے والے ایرر میسجز تلاش کریں

**عام وجوہات:**
- ڈومین نام کا فارمیٹ غلط ہے
- ڈومین پہلے سے Enhance میں موجود ہے
- ناکافی API اجازتیں (یقینی بنائیں کہ ٹوکن میں System Administrator رول ہے)
- Server ID Enhance میں اصل سرور سے میل نہیں کھاتی

### SSL سرٹیفکیٹ کے مسائل

**SSL فراہم نہیں ہو رہا:**
- تصدیق کریں کہ DNS آپ کے سرور کے IP ایڈریس کی طرف پوائنٹ کر رہا ہے
- چیک کریں کہ ڈومین درست طریقے سے resolve ہوتا ہے: `nslookup yourdomain.com`
- Enhance کو SSL فراہم کرنے سے پہلے DNS resolve ہونا ضروری ہے
- SSL فراہمی عام طور پر DNS propagation کے بعد 5-10 منٹ لیتی ہے
- SSL مخصوص خرابیوں کے لیے Enhance Control Panel لاگز چیک کریں

**Enhance میں دستی SSL ٹربل شوٹنگ:**
1. **Servers** > **Your Server** > **Domains** پر جائیں
2. اپنا ڈومین تلاش کریں اور اس کی SSL سٹیٹس چیک کریں
3. اگر ضرورت ہو تو آپ دستی طور پر SSL فراہمی شروع کر سکتے ہیں

### DNS چیک انٹرول

اگر ڈومینز یا SSL سرٹیفکیٹس ایکٹیو ہونے میں بہت زیادہ وقت لے رہے ہیں:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping** پر جائیں
2. **DNS Check Interval** سیٹنگ تلاش کریں
3. ڈیفالٹ 300 سیکنڈ سے کم ویلیو میں ایڈجسٹ کریں (کم از کم: 10 سیکنڈ)
4. **نوٹ:** کم انٹرولز کا مطلب زیادہ بار بار چیک لیکن سرور پر زیادہ لوڈ

### Authentication کی خرابیاں

**HTTP 401/403 خرابیاں:**
- Enhance میں اپنا API ٹوکن دوبارہ بنائیں
- تصدیق کریں کہ ٹوکن میں **System Administrator** رول ہے
- چیک کریں کہ ٹوکن ایکسپائر نہیں ہوا
- یقینی بنائیں کہ آپ درست Organization ID استعمال کر رہے ہیں (حالانکہ یہ عام طور پر URL میں ضروری نہیں)

### لاگ تجزیہ

تفصیلی لاگنگ فعال کریں:
```php
// بہتر ڈیبگنگ کے لیے wp-config.php میں شامل کریں
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

پھر لاگز یہاں چیک کریں:
- Ultimate Multisite لاگز: **Ultimate Multisite** > **Logs**
- WordPress ڈیبگ لاگ: `wp-content/debug.log`
- Enhance پینل لاگز: Enhance کے ایڈمن انٹرفیس میں دستیاب

## API حوالہ

### Authentication
تمام API درخواستیں Bearer ٹوکن authentication استعمال کرتی ہیں:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### استعمال ہونے والے عام Endpoints

**سرورز کی فہرست:**
```
GET /servers
```

**سرور پر ڈومینز کی فہرست:**
```
GET /servers/{server_id}/domains
```

**ڈومین شامل کریں:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**ڈومین ڈیلیٹ کریں:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### مکمل API دستاویزات
مکمل API دستاویزات: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## بہترین طریقے

### سیکیورٹی
- **کبھی بھی API ٹوکنز کو ورژن کنٹرول میں کمٹ نہ کریں**
- ٹوکنز `wp-config.php` میں محفوظ کریں جو Git سے خارج ہونی چاہیے
- مناسب اجازتوں والے ٹوکنز استعمال کریں (مکمل انٹیگریشن کے لیے System Administrator)
- پروڈکشن ماحول کے لیے ٹوکن ایکسپائری تاریخیں مقرر کریں
- وقتاً فوقتاً ٹوکنز روٹیٹ کریں

### کارکردگی
- ضرورت سے زیادہ API کالز سے بچنے کے لیے ڈیفالٹ DNS چیک انٹرول (300 سیکنڈ) استعمال کریں
- بڑے پیمانے پر ڈومین آپریشنز چلاتے وقت Enhance سرور ریسورسز کی نگرانی کریں
- اگر ایک ساتھ بہت سے ڈومینز میپ کر رہے ہیں تو ڈومین ایڈیشنز کو تھوڑا تھوڑا کر کے کریں

### نگرانی
- انٹیگریشن کی خرابیوں کے لیے باقاعدگی سے Ultimate Multisite لاگز چیک کریں
- ناکام ڈومین ایڈیشنز کے لیے مانیٹرنگ سیٹ اپ کریں
- تصدیق کریں کہ SSL سرٹیفکیٹس درست طریقے سے فراہم ہو رہے ہیں
- Enhance سرور کی گنجائش اور ڈومین حدود پر نظر رکھیں

## اضافی وسائل

- **Enhance سرکاری دستاویزات:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API دستاویزات:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance کمیونٹی فورم:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping گائیڈ:** ویکی صفحہ "How to Configure Domain Mapping v2" دیکھیں

## سپورٹ

اگر آپ کو مسائل کا سامنا ہو:
1. اوپر Troubleshooting سیکشن چیک کریں
2. Ultimate Multisite لاگز کا جائزہ لیں
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) سے مشورہ کریں
4. پینل مخصوص مسائل کے لیے Enhance سپورٹ سے رابطہ کریں
5. کمیونٹی کی مدد کے لیے تفصیلی ایرر لاگز کے ساتھ نئی بحث شروع کریں

## نوٹس

- یہ انٹیگریشن صرف ڈومین aliases ہینڈل کرتی ہے؛ Enhance خودکار طور پر SSL مینج کرتا ہے
- انٹیگریشن کسٹم ڈومین میپنگز اور سب ڈومین پر مبنی سائٹس دونوں کو سپورٹ کرتی ہے
- خودکار www سب ڈومین بنانا Domain Mapping سیٹنگز میں کنفیگر کیا جا سکتا ہے
- Enhance فی الحال Apache configurations سپورٹ کرتا ہے (LiteSpeed Enterprise دستیاب ہے)
- Ultimate Multisite سے ڈومین ہٹانا Enhance سے ڈومین ہٹا دے گا لیکن متعلقہ SSL سرٹیفکیٹس فوری طور پر ڈیلیٹ نہیں ہو سکتے
