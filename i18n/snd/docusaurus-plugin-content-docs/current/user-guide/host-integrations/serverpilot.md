---
title: سرورپائل انٽيغريشن
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Integration {#serverpilot-integration}

## جائزہ (Overview) {#overview}
ServerPilot هڪ ڪلاؤڊ سروس آهي جيڪا DigitalOcean، Amazon، Google يا ڪنه به ٻئي سرور پرائڊيئر تي WordPress ۽ ٻين PHP ويب سائٽس کي هوستنگ ڪرڻ لاءِ. هي ان انٽيغريشن سان Ultimate Multisite ۽ ServerPilot بابت آڊمن جي سنڪرينگ (domain syncing) ۽ SSL سرٽيفڪيٽ جو انتظام خود بخود ٿئي ٿو.

## خصوصيتون (Features) {#features}
- خود بخود آڊمن سنڪرينگ (Automatic domain syncing)
- Let's Encrypt سان SSL سرٽيفڪيٽ جو انتظام
- خود بخود SSL جي تجديد (Automatic SSL renewal)

## گهرجيون (Requirements) {#requirements}
توهان کي پنهنجي `wp-config.php` فائل ۾ هي constants تعريف ڪرڻ گهرجي:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## ترتیب ڏيڻ جا تعليمات (Setup Instructions) {#setup-instructions}

### 1. پنهنجو ServerPilot API Credentials حاصل ڪريو {#1-get-your-serverpilot-api-credentials}

1. پنهنجي ServerPilot dashboard ۾ لاگ ان ڪريو
2. "Account" > "API" تي وڃو
3. جيڪڏهن توهان جي پاسي API key ناهي ته هڪ نئين API key کي ٺاهيو (Create)
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
3. "Host Integrations" تي لغلڪ ڪريو (Scroll down)
4. ServerPilot انٽيغريشن کي فعال ڪريو (Enable)
5. "Save Changes" تي ڪلڪ ڪريو

## اهو ڪيئن کام ڪري ٿو (How It Works) {#how-it-works}

### آڊمن سنڪرينگ (Domain Syncing) {#domain-syncing}

جڏهن Ultimate Multisite ۾ هڪ آڊمن جو مئپ ڪيو ويندو آهي:

1. اس انٹیگریشن سرورپائلٹ (ServerPilot) سے موجود ڈومینز کی موجودہ فہرست حاصل کرتا ہے۔
2. یہ نئی ڈومین کو فہرست میں شامل کر دیتا ہے (اگر لاگو ہو تو www ورژن کے ساتھ بھی شامل کرتا ہے)۔
3. یہ اپ ڈیٹ شدہ فہرست API کے ذریعے سرورپائلٹ کو بھیجتا ہے۔
4. سرورپائلٹ آپ کی ایپلیکیشن کے لیے ڈومینز کی فہرست کو اپ ڈیٹ کرتا ہے۔

### SSL سرٹیفکیٹ مینجمنٹ (SSL Certificate Management) {#ssl-certificate-management}

ڈومینز کا ہم آہنگ ہونے کے بعد:

1. یہ انٹیگریشن خود بخود آپ کی ایپلیکیشن کے لیے AutoSSL کو فعال کر دیتا ہے۔
2. سرورپائلٹ Let's Encrypt کا استعمال کرتے ہوئے SSL سرٹیفکیٹ جاری کرنے اور انسٹال کرنے کا کام سنبھالتا ہے۔
3. سرورپائلٹ SSL سرٹیفکیٹس کی خودکار تجدید (automatic renewal) کا بھی انتظام کرتا ہے۔

## SSL سرٹیفکیٹ کی تصدیق (SSL Certificate Verification) {#ssl-certificate-verification}

انٹیگریشن کو سرورپائلٹ کے لیے SSL سرٹیفکیٹ کی تصدیق کی کوششوں کی تعداد بڑھانے کے لیے ترتیب دیا گیا ہے، کیونکہ سرورپائلٹ کو SSL سرٹیفکیٹس جاری کرنے اور انسٹال کرنے میں کچھ وقت لگ سکتا ہے۔ ڈیفالٹ طور پر، یہ 5 بار تک کوشش کرے گا، لیکن اس کو فلٹرز کا استعمال کرتے ہوئے ایڈجسٹ کیا جا سکتا ہے۔

## مسائل حل کرنا (Troubleshooting) {#troubleshooting}

### API کنکشن کے مسائل (API Connection Issues) {#api-connection-issues}
- چیک کریں کہ آپ کی Client ID اور API Key درست ہیں یا نہیں۔
- یقینی بنائیں کہ آپ کا App ID درست ہے۔
- اس بات کو یقینی بنائیں کہ آپ کے ServerPilot اکاؤنٹ میں ضروری اجازتیں ہیں۔

### SSL سرٹیفکیٹ کے مسائل (SSL Certificate Issues) {#ssl-certificate-issues}
- سرورپائلٹ یہ چاہتا ہے کہ SSL سرٹیفکیٹس جاری کرنے سے پہلے ڈومینز پر آپ کے سرور کی طرف اشارہ کرنے والے درست DNS ریکارڈ ہوں۔
- اگر SSL سرٹیفکیٹس جاری نہیں ہو رہی ہیں، تو چیک کریں کہ کیا آپ کی ڈومینز آپ کے سرور کے IP ایڈریس کی صحیح طرح پوائنٹ کر رہی ہیں۔
- سرورپائلٹ کو SSL سرٹیفکیٹس جاری کرنے اور انسٹال کرنے میں کچھ وقت لگ سکتا ہے (عام طور پر 5 سے 15 منٹ)۔

### ڈومین شامل نہیں ہوئی (Domain Not Added) {#domain-not-added}
- کسی بھی غلط پیغام کے لیے Ultimate Multisite لاگز چیک کریں۔
- تصدیق کریں کہ کیا وہ ڈومین پہلے ہی ServerPilot میں شامل تو نہیں ہے۔
- اس بات کو یقینی بنائیں کہ آپ کا ServerPilot پلان ان ڈومینز کی تعداد کو سپورٹ کرتا ہے جو آپ شامل کر رہے ہیں۔

### डोमेन ہٹانا (Domain Removal) {#domain-removal}
- فی الحال، ServerPilot API میں انفرادی ڈومینز کو ہٹانے کا کوئی طریقہ فراہم نہیں کیا گیا ہے۔
- جب Ultimate Multisite میں کسی ڈومین کی مَپنگ (mapping) ہٹائی جاتی ہے، تو یہ انٹیگریشن ServerPilot میں ڈومین کی فہرست کو اپ ڈیٹ کر دے گی تاکہ ہٹائی گئی ڈومین شامل نہ ہو۔
