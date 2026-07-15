---
title: Hostinger (hPanel) Integration
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) Integration

## خلاصہ (Overview) {#overview}

Hostinger ایک مقبول ویب ہوسٹنگ فراہم کنندہ ہے جس کا ایک جدید کنٹرول پینل ہے جسے hPanel کہا جاتا ہے۔ Ultimate Multisite Hostinger integration Ultimate Multisite اور Hostinger کے hPanel کے درمیان ڈومین کی خودکار سنکنگ (automatic domain syncing) کو ممکن بناتا ہے۔ اس سے آپ اپنے WordPress admin سے ہی ڈومین کی میپنگ (domain mappings) اور سب ڈومینز (subdomains) کو خودکار طریقے سے مینج کر سکتے ہیں۔

## خصوصیات (Features) {#features}

- hPanel میں خودکار ایڈآن ڈومین کی تخلیق
- hPanel میں خودکار سب ڈومین کی تخلیق (سب ڈومین ملٹی سائٹ انسٹالیشنز کے لیے)
- میپنگ حذف ہونے پر ڈومین کا ہٹ جانا
- hPanel کے ڈومین مینجمنٹ API کے ساتھ ہموار انٹیگریشن

## ضروریات (Requirements) {#requirements}

Hostinger integration استعمال کرنے کے لیے، آپ کو یہ چیزیں درکار ہوں گی:

1. hPanel رسائی کے ساتھ ایک Hostinger اکاؤنٹ
2. Hostinger سے ایک API ٹوکن
3. اپنے `wp-config.php` فائل میں درج ذیل کانسٹنٹس (constants) ڈیفائن کرنا:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

اختیاری طور پر، آپ یہ بھی ڈیفائن کر سکتے ہیں:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## سیٹ اپ ہدایات (Setup Instructions) {#setup-instructions}

### 1. اپنا Hostinger API ٹوکن بنائیں (Generate Your Hostinger API Token) {#1-generate-your-hostinger-api-token}

1. اپنے Hostinger اکاؤنٹ میں لاگ ان کریں اور hPanel تک رسائی حاصل کریں۔
2. **Account Settings** → **API Tokens** پر جائیں۔
3. **Create New Token** پر کلک کریں۔
4. اپنے ٹوکن کو ایک واضح نام دیں (مثلاً، "Ultimate Multisite")۔
5. ضروری اجازتیں (permissions) منتخب کریں:
   - Domain management
   - Subdomain management
6. بنائے گئے ٹوکن کو کاپی کریں اور اسے محفوظ طریقے سے اسٹور کریں۔

### 2. اپنا اکاؤنٹ ID معلوم کریں (Find Your Account ID) {#2-find-your-account-id}

1. hPanel میں، **Account Settings** → **Account Information** پر جائیں۔
2. آپ کا اکاؤنٹ ID اس پیج پر دکھایا گیا ہے۔
3. اس ID کو کاپی کریں اور اگلے مرحلے کے لیے محفوظ کر لیں۔

### 3. wp-config.php میں کانسٹنٹس شامل کریں (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

اپنے `wp-config.php` فائل میں درج ذیل کانسٹنٹس شامل کریں:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

اگر آپ کا Hostinger اکاؤنٹ کسی مختلف API endpoint کا استعمال کرتا ہے، تو آپ اسے اپنی مرضی کے مطابق بنا سکتے ہیں:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. انٹیگریشن کو فعال کریں (Enable the Integration) {#4-enable-the-integration}

1. اپنے WordPress admin میں، **Ultimate Multisite > Settings** پر جائیں۔
2. **Domain Mapping** ٹیب پر جائیں۔
3. **Host Integrations** تک نیچے سکرول کریں۔
4. **Hostinger (hPanel)** انٹیگریشن کو فعال (Enable) کریں۔
5. **Save Changes** پر کلک کریں۔

## یہ کیسے کام کرتا ہے (How It Works) {#how-it-works}

### ایڈآن ڈومینز (Addon Domains) {#addon-domains}

جب آپ Ultimate Multisite میں کوئی ڈومین میپ کرتے ہیں:

1. انٹیگریشن Hostinger کے API کو ایک درخواست (request) بھیجتا ہے تاکہ ڈومین کو ایک ایڈآن ڈومین کے طور پر شامل کیا جا سکے۔
2. ڈومین کو آپ کی روٹ ڈائریکٹری کی طرف پوائنٹ کرنے کے لیے ترتیب دیا جاتا ہے۔
3. جب ڈومین میپنگ ہٹائی جاتی ہے، تو انٹیگریشن خودکار طور پر hPanel سے ایڈآن ڈومین کو ہٹا دیتا ہے۔

### سب ڈومینز (Subdomains) {#subdomains}

سب ڈومین ملٹی سائٹ انسٹالیشنز کے لیے، جب ایک نیا سائٹ بنایا جاتا ہے:

1. انٹیگریشن مکمل ڈومین سے سب ڈومین کے حصے کو نکالتا ہے۔
2. یہ سب ڈومین کو شامل کرنے کے لیے Hostinger کے API کو ایک درخواست بھیجتا ہے۔
3. سب ڈومین کو آپ کی روٹ ڈائریکٹری کی طرف پوائنٹ کرنے کے لیے ترتیب دیا جاتا ہے۔

## اہم نوٹس (Important Notes) {#important-notes}

- یہ انٹیگریشن آپ کے اکاؤنٹ کے ساتھ بات چیت کرنے کے لیے Hostinger کے REST API کا استعمال کرتا ہے۔
- آپ کے API ٹوکن میں ڈومین اور سب ڈومین مینجمنٹ کے لیے ضروری اجازتیں ہونی چاہئیں۔
- یہ انٹیگریشن DNS کی ترتیب (configuration) کو سنبھالتا نہیں ہے؛ ڈومینز پہلے سے ہی آپ کے Hostinger اکاؤنٹ کی طرف پوائنٹ کیے ہوئے ہونے چاہئیں۔
- API درخواستیں HTTPS کے ذریعے محفوظ طریقے سے کی جاتی ہیں۔
- اپنے API ٹوکن کو محفوظ رکھیں اور اسے کبھی بھی عوامی طور پر شیئر نہ کریں۔

## ٹربل شوٹنگ (Troubleshooting) {#troubleshooting}

### API کنکشن کے مسائل (API Connection Issues) {#api-connection-issues}

- تصدیق کریں کہ آپ کا API ٹوکن درست ہے اور اس کی میعاد ختم نہیں ہوئی ہے۔
- چیک کریں کہ آپ کا اکاؤنٹ ID درست ہے۔
- یقینی بنائیں کہ آپ کے API ٹوکن میں ڈومین مینجمنٹ کے لیے ضروری اجازتیں موجود ہیں۔
- تصدیق کریں کہ آپ کا Hostinger اکاؤنٹ فعال ہے اور اچھے معیار کا ہے۔

### ڈومین شامل نہیں ہوا (Domain Not Added) {#domain-not-added}

- کسی بھی ایرر میسج کے لیے Ultimate Multisite logs چیک کریں۔
- تصدیق کریں کہ ڈومین پہلے سے ہی آپ کے Hostinger اکاؤنٹ میں شامل نہیں ہے۔
- یقینی بنائیں کہ آپ کا Hostinger اکاؤنٹ ایڈآن ڈومینز کی حد تک نہیں پہنچا ہے۔
- تصدیق کریں کہ ڈومین کو مناسب طریقے سے آپ کے Hostinger nameservers کی طرف پوائنٹ کیا گیا ہے۔

### SSL سرٹیفکیٹ کے مسائل (SSL Certificate Issues) {#ssl-certificate-issues}

- یہ انٹیگریشن SSL سرٹیفکیٹ جاری کرنے کا کام نہیں کرتا۔
- Hostinger عام طور پر AutoSSL کے ذریعے مفت SSL سرٹیفکیٹ فراہم کرتا ہے۔
- آپ **SSL/TLS** کے تحت hPanel میں براہ راست SSL سرٹیفکیٹ کو مینج کر سکتے ہیں۔
- متبادل طور پر، Hostinger کی AutoSSL فیچر کے ساتھ Let's Encrypt استعمال کریں۔

## سپورٹ (Support) {#support}

Hostinger integration کے ساتھ مزید مدد کے لیے، براہ کرم درج ذیل کا حوالہ دیں:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
