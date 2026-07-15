---
title: CyberPanel انٹیگریشن
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

یہ گائیڈ بتاتی ہے کہ Ultimate Multisite CyberPanel انٹیگریشن کو کیسے ترتیب دیا جائے تاکہ آپ کے نیٹ ورک میں موجود مپیڈ ڈومینز خود بخود CyberPanel میں ورچوئل ہوسٹ (virtual hosts) کے طور پر شامل (اور ہٹائے) جا سکیں، اور اس کے ساتھ Let's Encrypt کے ذریعے اختیاری طور پر آٹو-SSL بھی فراہم کیا جا سکے۔

## یہ کیا کرتا ہے {#what-it-does}

- جب Ultimate Multisite میں کسی ڈومین کو مپ کیا جاتا ہے، تو یہ انٹیگریشن اس ڈومین کے لیے ایک ورچوئل ہوسٹ بنانے کے لیے CyberPanel API کو کال کرتا ہے۔
- جب ڈومین کی میپنگ ہٹائی جاتی ہے، تو انٹیگریشن متعلقہ ورچوئل ہوسٹ کو ڈیلیٹ کرنے کے لیے API کو کال کرتا ہے۔
- جب آٹو-SSL فعال ہوتا ہے، تو انٹیگریشن ورچوئل ہوسٹ بننے کے فوراً بعد Let's Encrypt سرٹیفکیٹ جاری کرنے کا عمل شروع کر دیتا ہے۔
- اختیاری طور پر، یہ ڈومین میپنگ سیٹنگز میں موجود "Auto-create www subdomain" کی سیٹنگ کے لحاظ سے `www.` کا ایلیز شامل یا ہٹاتا ہے۔

## پیشگی ضروریات (Prerequisites) {#prerequisites}

- ایک چلتا ہوا CyberPanel انسٹنس (v2.3 یا اس سے زیادہ تجویز کردہ) جو آپ کے WordPress سرور سے قابل رسائی ہو۔
- CyberPanel میں ایک موجودہ ویب سائٹ جو پہلے سے آپ کے WordPress نیٹ ورک کی جڑ (root) کو سروس کر رہی ہو۔ انٹیگریشن نئے ورچوئل ہوسٹس کو اسی سرور سے جوڑتا ہے۔
- CyberPanel API تک رسائی فعال ہو۔ تصدیق (Authentication) کے لیے آپ کے CyberPanel ایڈمن یوزر نیم اور پاسورڈ استعمال ہوتے ہیں۔
- آٹو-SSL کو درست سرٹیفکیٹ جاری کرنے کے لیے، مپیڈ ڈومینز کے لیے آپ کے DNS ریکارڈ پہلے سے ہی آپ کے سرور کے IP ایڈریس کی طرف پوائنٹ ہونے چاہئیں۔

## ضروریات (Requirements) {#requirements}

آپ کی `wp-config.php` فائل میں درج ذیل کانسٹنٹس (constants) ڈیفائن کیے جانے ضروری ہیں:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

اختیاری طور پر، آپ یہ بھی ڈیفائن کر سکتے ہیں:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // ڈیفالٹ: true — ڈومین بنانے کے بعد Let's Encrypt SSL جاری کرے گا
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // ڈیفالٹ: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL سرٹیفکیٹ رابطہ کے لیے استعمال ہوتا ہے
```

## سیٹ اپ ہدایات (Setup Instructions) {#setup-instructions}

### 1. CyberPanel API کو فعال کریں {#1-enable-the-cyberpanel-api}

1. ایک ایڈمنسٹریٹر کے طور پر اپنے CyberPanel ڈیش بورڈ میں لاگ ان کریں۔
2. **Security** > **SSL** پر جائیں اور تصدیق کریں کہ SSL خود CyberPanel انٹرفیس پر فعال ہے (یہ محفوظ API کالز کے لیے ضروری ہے)۔
3. CyberPanel API ڈیفالٹ طور پر `https://your-server-ip:8090/api/` پر دستیاب ہے۔ اسے فعال کرنے کے لیے کوئی اضافی اقدامات درکار نہیں ہیں — یہ ایڈمن صارفین کے لیے ڈیفالٹ طور پر آن ہوتا ہے۔

### 2. wp-config.php میں کانسٹنٹس شامل کریں {#2-add-constants-to-wp-configphp}

مندرجہ ذیل کانسٹنٹس کو اپنی `wp-config.php` فائل میں `/* That's all, stop editing! */` لائن سے پہلے شامل کریں:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

آٹو-SSL کو فعال کرنے کے لیے (تجویز کردہ):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. انٹیگریشن کو فعال کریں {#3-enable-the-integration}

1. اپنے WordPress نیٹ ورک ایڈمن میں، **Ultimate Multisite** > **Settings** پر جائیں۔
2. **Domain Mapping** ٹیب پر نیویگیٹ کریں۔
3. **Host Integrations** تک نیچے سکرول کریں۔
4. **CyberPanel** انٹیگریشن کو فعال کریں۔
5. **Save Changes** پر کلک کریں۔

### 4. کنیکٹیویٹی کی تصدیق کریں {#4-verify-connectivity}

سیٹنگز ویزرڈ میں موجود بلٹ ان کنکشن ٹیسٹ استعمال کریں:

1. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** پر جائیں۔
2. **Test Connection** پر کلک کریں۔
3. ایک کامیابی کا پیغام تصدیق کرتا ہے کہ پلگ ان CyberPanel API تک پہنچ سکتا ہے اور صحیح طریقے سے تصدیق (authenticate) کر سکتا ہے۔

## یہ کیسے کام کرتا ہے (How It Works) {#how-it-works}

### ڈومین میپنگ (Domain Mapping) {#domain-mapping}

جب Ultimate Multisite میں کسی ڈومین کو مپ کیا جاتا ہے:

1. انٹیگریشن آپ کے CyberPanel ہوسٹ پر `/api/createWebsite` پر ایک `POST` ریکویسٹ بھیجتا ہے۔
2. CyberPanel کنفیگر شدہ پیکج کے تحت ڈومین کے لیے ایک نیا ورچوئل ہوسٹ بناتا ہے۔
3. ڈاکومنٹ روٹ کو آپ کے WordPress نیٹ ورک کی جڑ کی ڈائریکٹری کی طرف پوائنٹ کیا جاتا ہے۔
4. جب ڈومین میپنگ ہٹائی جاتی ہے، تو انٹیگریشن ورچوئل ہوسٹ کو صاف کرنے کے لیے `/api/deleteWebsite` کو کال کرتا ہے۔

### آٹو-SSL (Auto-SSL) {#auto-ssl}

جب `WU_CYBERPANEL_AUTO_SSL` `true` ہوتا ہے:

1. ورچوئل ہوسٹ بننے کے بعد، انٹیگریشن ڈومین کے لیے `/api/issueSSL` کو کال کرتا ہے۔
2. CyberPanel ACME HTTP-01 چیلنج کا استعمال کرتے ہوئے Let's Encrypt سرٹیفکیٹ کی درخواست کرتا ہے۔
3. سرٹیفکیٹ کی میعاد ختم ہونے سے پہلے CyberPanel خود بخود اسے تجدید (renew) کر دیتا ہے۔

> **اہم:** Let's Encrypt کو ڈومین کی تصدیق کرنے سے پہلے DNS کا مکمل طور پر آپ کے سرور کے IP ایڈریس پر پھیلنا (propagate) ضروری ہے۔ اگر میپنگ کے فوراً بعد SSL جاری کرنے میں ناکامی ہوتی ہے، تو DNS کے پھیلنے کا انتظار کریں اور CyberPanel ڈیش بورڈ میں **SSL** > **Manage SSL** کے تحت SSL کو دوبارہ شروع کریں۔

### www سب ڈومین (www Subdomain) {#www-subdomain}

اگر آپ کی ڈومین میپنگ سیٹنگز میں **Auto-create www subdomain** فعال ہے، تو انٹیگریشن `www.<domain>` کے لیے ایک ورچوئل ہوسٹ ایلیز بھی بناتا ہے اور، جب آٹو-SSL آن ہوتا ہے، تو ایپیکس اور www دونوں ویریئنٹ کو کور کرنے والا سرٹیفکیٹ جاری کرتا ہے۔

### ای میل فارورڈرز (Email Forwarders) {#email-forwarders}

جب [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) ایڈ آن فعال ہوتا ہے، تو CyberPanel کسٹمر ای میل فارورڈرز بھی فراہم کر سکتا ہے۔ فارورڈرز کسی ڈومین ایڈریس سے پیغام کو کسی دوسرے ان باکس پر بھیجتے ہیں بغیر مکمل میل باکس بنائے، جو `info@customer-domain.test` یا `support@customer-domain.test` جیسے ایلیز کے لیے مفید ہے۔

کسٹمرز کے لیے فارورڈرز فعال کرنے سے پہلے:

1. تصدیق کریں کہ اوپر دیے گئے CyberPanel کانسٹنٹس ترتیب دیے گئے ہیں اور کنکشن ٹیسٹ پاس ہو رہا ہے۔
2. ای میلز ایڈ آن کی سیٹنگز میں CyberPanel ای میل فراہم کنندہ کو فعال کریں۔
3. فارورڈر بنانے سے پہلے تصدیق کریں کہ کسٹمر ڈومین پہلے سے ہی CyberPanel میں موجود ہے۔
4. ٹیسٹ فارورڈر بنائیں اور اسے استعمال کرتے ہوئے ایک پیغام بھیجیں، اس سے پہلے کہ آپ اسے پروڈکشن پلانز پر پیش کریں۔

اگر فارورڈر بنانا ناکام ہو جاتا ہے، تو پہلے Ultimate Multisite کی ایکٹیویٹی لاگز چیک کریں، پھر CyberPanel میں تصدیق کریں کہ سورس ڈومین موجود ہے اور API یوزر کے پاس ای میل مینجمنٹ کی اجازت ہے۔

## کنفیگریشن ریفرنس (Configuration Reference) {#configuration-reference}

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | آپ کے CyberPanel انسٹنس کا مکمل URL، پورٹ سمیت، مثال کے طور پر: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | CyberPanel ایڈمن یوزر نیم |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | CyberPanel ایڈمن پاسورڈ |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | نئے ورچوئل ہوسٹس کو تفویض کیا جانے والا CyberPanel ہوسٹنگ پیکج |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | ڈومین بنانے کے بعد Let's Encrypt SSL سرٹیفکیٹ جاری کرے گا |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | نئے ورچوئل ہوسٹس کے لیے PHP ورژن (CyberPanel میں انسٹال شدہ ورژن سے ملنا چاہیے) |
| `WU_CYBERPANEL_EMAIL` | No | — | SSL سرٹیفکیٹ رجسٹریشن کے لیے رابطہ ای میل |

## اہم نوٹس (Important Notes) {#important-notes}

- CyberPanel کا API سیشن بیسڈ ٹوکن تصدیق (session-based token authentication) استعمال کرتا ہے۔ انٹیگریشن ہر API کال پر ٹوکن حاصل کرنے کا کام خود بخود کرتا ہے۔
- آپ کے CyberPanel ایڈمن اکاؤنٹ میں ویب سائٹس بنانے اور حذف کرنے کی اجازت ہونی چاہیے۔
- CyberPanel ڈیفالٹ طور پر پورٹ `8090` پر چلتا ہے۔ اگر آپ کا سرور فائر وال استعمال کرتا ہے، تو یقینی بنائیں کہ یہ پورٹ WordPress ایپلیکیشن سرور سے قابل رسائی ہے۔
- انٹیگریشن DNS ریکارڈز کو مینج نہیں کرتا۔ Ultimate Multisite میں ڈومین میپ کرنے سے پہلے آپ کو ڈومین DNS کو اپنے سرور کے IP ایڈریس کی طرف پوائنٹ کرنا ہوگا۔
- اگر آپ OpenLiteSpeed (OLS) استعمال کرتے ہیں، تو ورچوئل ہوسٹ میں تبدیلی کے بعد ایک گریس فل ری سٹارٹ خود بخود ٹرگر ہوتا ہے۔ کسی دستی مداخلت کی ضرورت نہیں ہے۔

## ٹرابل شوٹنگ (Troubleshooting) {#troubleshooting}

### API Connection Refused {#api-connection-refused}

- تصدیق کریں کہ آپ کے سرور فائر وال میں پورٹ `8090` کھلا ہے۔
- تصدیق کریں کہ `WU_CYBERPANEL_HOST` ویلیو میں صحیح پروٹوکول (`https://`) اور پورٹ شامل ہے۔
- چیک کریں کہ آپ کا CyberPanel SSL سرٹیفکیٹ درست ہے؛ سیلف-سائنڈ سرٹیفکیٹس TLS تصدیق کی ناکامی کا سبب بن سکتے ہیں۔ `WU_CYBERPANEL_VERIFY_SSL` کو `false` صرف قابل اعتماد پرائیویٹ نیٹ ورک ماحول میں سیٹ کریں۔

### Authentication Errors {#authentication-errors}

- براہ راست CyberPanel میں لاگ ان کر کے تصدیق کریں کہ آپ کے `WU_CYBERPANEL_USERNAME` اور `WU_CYBERPANEL_PASSWORD` درست ہیں۔
- بار بار ناکام لاگ ان کی کوششوں کے بعد CyberPanel اکاؤنٹس کو لاک کر دیتا ہے۔ اگر لاک آؤٹ ہو تو CyberPanel میں **Security** > **Brute Force Monitor** چیک کریں۔

### Domain Not Created {#domain-not-created}

- API کی غلطی کے پیغامات کے لیے Ultimate Multisite کی ایکٹیویٹی لاگ (**Ultimate Multisite** > **Activity Logs**) چیک کریں۔
- تصدیق کریں کہ `WU_CYBERPANEL_PACKAGE` میں ڈیفائن کردہ پیکج CyberPanel میں موجود ہے (**Packages** > **List Packages**)।
- یقینی بنائیں کہ ڈومین پہلے سے ہی CyberPanel میں ویب سائٹ کے طور پر رجسٹرڈ نہیں ہے — ڈپلیکیٹ ویب سائٹ بنانے کی کوشش سے غلطی واپس آئے گی۔

### SSL Certificate Not Issued {#ssl-certificate-not-issued}

- تصدیق کریں کہ DNS مکمل طور پر پھیل چکا ہے: `dig +short your-domain.com` کو آپ کے سرور کا IP واپس کرنا چاہیے۔
- Let's Encrypt ریٹ لیمٹس نافذ کرتا ہے۔ اگر آپ نے حال ہی میں ایک ہی ڈومین کے لیے کئی سرٹیفکیٹس جاری کیے ہیں، تو دوبارہ کوشش کرنے سے پہلے انتظار کریں۔
- سرٹیفکیٹ جاری کرنے کی ناکامی کی تفصیلات کے لیے **Logs** > **Error Logs** کے تحت CyberPanel SSL لاگز چیک کریں۔
- ایک متبادل کے طور پر، آپ CyberPanel سے دستی طور پر SSL جاری کر سکتے ہیں: **SSL** > **Manage SSL** > ڈومین کا انتخاب کریں > **Issue SSL**۔

## حوالہ جات (References) {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
