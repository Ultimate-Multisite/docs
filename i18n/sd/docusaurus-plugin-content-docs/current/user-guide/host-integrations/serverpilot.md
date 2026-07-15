---
title: سيرفرپائل انٽيغريشن
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Integration

## جائزہ (Overview) {#overview}
ServerPilot هڪ ڪلاڊ سروس آهي جنهن ۾ WordPress ۽ ٻين PHP ويب سائٽس کي DigitalOcean، Amazon، Google يا ڪنه به سيلور پراجڊيئر جي سيرفر تي هوستنگ ڪرڻ لاءِ استعمال ٿئي ٿو. هي ان انٽيغريشن سان Ultimate Multisite ۽ ServerPilot بابت آٽومويڪ دومين سنڪنگ (domain syncing) ۽ SSL سرٽيفڪيٽ جو انتظام ڪجي ٿو.

## خصوصيتون (Features) {#features}
- آٽومويڪ دومين سنڪنگ
- Let's Encrypt سان SSL سرٽيفڪيٽ جو انتظام
- آٽومويڪ SSL تجديد (renewal)

## گهرج (Requirements) {#requirements}
توهان کي پنهنجي `wp-config.php` فائل ۾ هي constants تعريف ڪرڻ گهرجن:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## ترتیب ڏيڻ جو تعليمات (Setup Instructions) {#setup-instructions}

### 1. پنهنجو ServerPilot API Credentials حاصل ڪريو {#1-get-your-serverpilot-api-credentials}

1. پنهنجي ServerPilot dashboard تي لاگ ان ڪريو
2. "Account" > "API" تي وڃو
3. جيڪڏهن توهان جي پاسي API key ناهي ته هڪ نئين API key کي ٺاهيو (create)
4. پنهنجي Client ID ۽ API Key کي ڪاپي ڪريو

### 2. پنهنجي App ID حاصل ڪريو {#2-get-your-app-id}

1. پنهنجي ServerPilot dashboard ۾، "Apps" تي وڃو
2. ان app کي چونڊيو جتي توهان جو WordPress multisite هوستنگ آهي
3. App ID URL ۾ ڏسڻ لائق آهي: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. wp-config.php ۾ Constants شامل ڪريو {#3-add-constants-to-wp-configphp}

هي هي constants پنهنجي `wp-config.php` فائل ۾ شامل ڪريو:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. انٽيغريشن کي فعال ڪريو (Enable the Integration) {#4-enable-the-integration}

1. پنهنجي WordPress admin ۾، Ultimate Multisite > Settings تي وڃو
2. "Domain Mapping" ٽاب تي وڃو
3. "Host Integrations" تائين سکرول ڪريو
4. ServerPilot انٽيغريشن کي فعال ڪريو (Enable)
5. "Save Changes" تي ڪلڪ ڪريو

## اهو ڪيئن کام ڪري ٿو (How It Works) {#how-it-works}

### دومين سنڪنگ (Domain Syncing) {#domain-syncing}

جڏهن Ultimate Multisite ۾ ڪنه دومين کي مپ ڪيو ويندو آهي:

1. اس انٹیگریشن سرورپائلٹ (ServerPilot) سے موجود ڈومینز کی لسٹ حاصل کرتا ہے۔
2. یہ نئی ڈومین کو لسٹ میں شامل کر دیتا ہے (اگر لاگو ہو تو www ورژن کے ساتھ بھی)۔
3. یہ اپ ڈیٹ شدہ لسٹ کو API کے ذریعے سرورپائلٹ کو بھیجتا ہے۔
4. سرورپائلٹ آپ کی ایپلیکیشن کے لیے ڈومین لسٹ کو اپ ڈیٹ کرتا ہے۔

### SSL سرٹیفکیٹ مینجمنٹ (SSL Certificate Management) {#ssl-certificate-management}

ڈومینز سینک ہونے کے بعد:

1. یہ انٹیگریشن خود بخود آپ کی ایپلیکیشن کے لیے AutoSSL کو فعال کر دیتا ہے۔
2. سرورپائلٹ Let's Encrypt کا استعمال کرتے ہوئے SSL سرٹیفکیٹ جاری کرنے اور انسٹال کرنے کا کام سنبھالتا ہے۔
3. سرورپائلٹ SSL سرٹیفکیٹس کی خودکار تجدید (automatic renewal) کا بھی انتظام کرتا ہے۔

## SSL سرٹیفکیٹ کی تصدیق (SSL Certificate Verification) {#ssl-certificate-verification}

انٹیگریشن کو سرورپائلٹ کے لیے SSL سرٹیفکیٹ کی تصدیق کی کوششوں کی تعداد بڑھانے کے لیے ترتیب دیا گیا ہے، کیونکہ سرورپائلٹ کو SSL سرٹیفکیٹس جاری کرنے اور انسٹال کرنے میں کچھ وقت لگ سکتا ہے۔ ڈیفالٹ طور پر، یہ 5 بار تک کوشش کرے گا، لیکن آپ فلٹرز کا استعمال کر کے اسے تبدیل کر سکتے ہیں۔

## ٹرابل شوٹنگ (Troubleshooting) {#troubleshooting}

### API کنکشن کے مسائل (API Connection Issues) {#api-connection-issues}
- چیک کریں کہ آپ کی Client ID اور API Key درست ہیں یا نہیں۔
- یقینی بنائیں کہ آپ کا App ID درست ہے۔
- اس بات کو یقینی بنائیں کہ آپ کے ServerPilot اکاؤنٹ میں ضروری اجازتیں ہیں۔

### SSL سرٹیفکیٹ کے مسائل (SSL Certificate Issues) {#ssl-certificate-issues}
- سرورپائلٹ یہ چاہتا ہے کہ SSL سرٹیفکیٹس جاری کرنے سے پہلے ڈومینز پر آپ کے سرور کی طرف اشارہ کرنے والے درست DNS ریکارڈ ہوں۔
- اگر SSL سرٹیفکیٹس جاری نہیں ہو رہی ہیں، تو چیک کریں کہ کیا آپ کے ڈومینز صحیح طریقے سے آپ کے سرور کے IP ایڈریس کی طرف پوائنٹ کر رہے ہیں۔
- سرورپائلٹ کو SSL سرٹیفکیٹس جاری کرنے اور انسٹال کرنے میں کچھ وقت لگ سکتا ہے (عام طور پر 5-15 منٹ)۔

### ڈومین شامل نہیں ہوا (Domain Not Added) {#domain-not-added}
- کسی بھی غلط پیغام کے لیے Ultimate Multisite لاگز چیک کریں۔
- تصدیق کریں کہ کیا وہ ڈومین پہلے ہی ServerPilot میں شامل تو نہیں ہے۔
- اس بات کو یقینی بنائیں کہ آپ کا ServerPilot پلان ان ڈومینز کی تعداد کو سپورٹ کرتا ہے جو آپ شامل کر رہے ہیں۔

### डोमेन ہٹانا (Domain Removal) {#domain-removal}
- فی الحال، ServerPilot API میں انفرادی ڈومینز کو ہٹانے کا کوئی طریقہ فراہم نہیں کیا گیا ہے۔
- جب آپ Ultimate Multisite میں کسی ڈومین کی میپنگ (mapping) ہٹاتے ہیں، تو یہ انٹیگریشن ServerPilot میں ڈومین کی فہرست کو اپ ڈیٹ کر دے گا تاکہ ہٹائی گئی ڈومین شامل نہ ہو۔
