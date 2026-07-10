---
title: کنٹرول پینل انضمام کي بهتر بنائڻ
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# کنٹرول پینل انٹیگریشن کي بهتر بنائ {#enhance-control-panel-integration}

## مجموعي معلومات (Overview) {#overview}
Enhance هڪ مودرن ڪنٽرول پینل آهي جيڪو طاقتور هاستنگ ۽ مانيجمنت جي خودکار توانائي فراهم ڪري ٿو. هي ان انٽيغريشن جو مطلب آهي ته Ultimate Multisite ۽ Enhance Control Panel بابت دومين سمڪن (domain syncing) ۽ SSL سرٽيفڪيٽ جي مانيجمنت کي خودکار بنائڻ.

**ڳالهه جو متعلق:** ڪميونٽي جي تجويزون ۽ اضافي معلومات لاءِ [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) ڏسو.

## خصوصيتون (Features) {#features}
- Ultimate Multisite ۾ دومين مئپ ڪياڻ کان پوءِ خودکار دومين سمڪن.
- DNS جو حل ٿيڻ تي LetsEncrypt جي ذريعي SSL سرٽيفڪيٽ جي خودکار فراهمي.
- دومين سوبڊومين (subdomain) کي سپورٽ ڪرڻ، جيڪڏهن رينڪس سوبڊومين ماڊل ۾ چلون ٿا.
- مئپون ختم ڪندي دومين جو حذف ٿيڻ.
- API ڪردارن کي تصديق ڪرڻ لاءِ ڪنيڪشن تيئن (connection testing).

## گهرجن (Requirements) {#requirements}

### نظام جي گهرجن (System Requirements) {#system-requirements}
- Enhance Control Panel لڳائي ۽ رسائي هجڻ گهرجي.
- WordPress Multisite جو ان Enhance سرور تي نصب يا جڙيل هجڻ گهرجي.
- Apache ويب سرور (Enhance موجوده Apache configuration کي سپورٽ ڪري ٿو؛ LiteSpeed Enterprise گھٽ قيمت تي موجود آهي).

### API رسائي (API Access) {#api-access}
API 토ڪن (tokens) کڻڻ لاءِ Enhance Control Panel جو ادميني رسائي (administrator access) گهرجي.

## پنهنجي API ڪردارن کي حاصل ڪرڻ (Getting Your API Credentials) {#getting-your-api-credentials}

### 1. هڪ API توڪن (Token) banao {#1-create-an-api-token}

1. ادميني طور Enhance Control Panel ۾ لاگ ان ڪريو
2. نيويشن مينيٽي ۾ **Settings** تي کليڪ ڪريو
3. **Access Tokens** تي وڃو
4. **Create Token** تي کليڪ ڪريو
5. توڪن کي هڪ وضاحت سان نالو ڏيو (مثال: "Ultimate Multisite Integration")
6. **System Administrator** جو رول تفويض ڪريو
7. ختم ٿيڻ جي تاريخ لاءِ:
   - جيڪڏهن توهان چاهيو ته توڪن ڪنهن وقت ختم نه ٿئي، ته اها خالي رکجو (Leave empty).
   - يا سڪيورٽي جي مقصدن لاءِ هڪ خاص ختم ٿيڻ جو ڏينهن مقرر ڪريو.
8. **Create** تي کليڪ ڪريو

پیدا کرنے کے بعد، آپ کا **Access Token** اور **Organization ID** دکھایا جائے گا۔ انہیں فوری طور پر محفوظ کر لیں کیونکہ ٹوکن صرف ایک بار ہی دکھایا جاتا ہے۔

### 2. اپنا Organization ID حاصل کریں {#2-get-your-organization-id}

Organization ID Access Tokens والے پیج پر ایک بلو انفارمیشن باکس میں دکھایا جاتا ہے جس پر "Org ID: {your_id}" لکھا ہوتا ہے۔

Organization ID کا فارمیٹ UUID جیسا ہوتا ہے: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

آپ کسی کسٹمر کا Organization ID یہ بھی درج ذیل طریقے سے تلاش کر سکتے ہیں:
1. **Customers** پیج پر جائیں
2. متعلقہ کسٹمر کے لیے **Manage customer** پر کلک کریں
3. URL دیکھیں - Organization ID `/customers/` کے بعد آنے والے حروفِ تہجی (alphanumeric characters) ہیں۔

### 3. اپنا Server ID حاصل کریں {#3-get-your-server-id}

اپنا Server ID تلاش کرنے کے لیے (جو ڈومین آپریشنز کے لیے ضروری ہے):

1. Enhance Control Panel میں، **Servers** پر جائیں
2. اس سرور پر کلک کریں جہاں آپ کا WordPress انسٹالیشن چل رہا ہے
3. Server ID (UUID فارمیٹ) URL یا سرور کی تفصیلات میں نظر آئے گی
4. متبادل طور پر، آپ سرورز کی فہرست حاصل کرنے کے لیے API استعمال کر سکتے ہیں:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID کا فارمیٹ UUID جیسا ہوتا ہے: `00000000-0000-0000-0000-000000000000`

### 4. اپنا API URL حاصل کریں {#4-get-your-api-url}

آپ کا API URL آپ کے Enhance Control Panel کے URL میں `/api/` شامل کرنے سے مل جائے گا:

```
https://your-enhance-panel.com/api/
```

**اہم:** `/api/` پاتھ ضروری ہے۔ عام غلطیاں یہ ہیں:
- صرف ڈومین استعمال کرنا بغیر `/api/` کے
- سیکیورٹی کے لیے HTTP کی بجائے HTTPS استعمال کرنا (سیکیورٹی کے لیے HTTPS لازمی ہے)

## Configuration {#configuration}

### Required Constants {#required-constants}

اپنے `wp-config.php` فائل میں درج ذیل constants شامل کریں:

// Control Panel Integration کي بهتر بنائڻ لاءِ

define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Integration Wizard ذريعي سیٹ اپ ڪرڻ {#setup-via-integration-wizard}

1. پنهنجي WordPress admin ۾، **Ultimate Multisite** > **Settings** تي وڃو
2. **Integrations** 탭 تي وينو
3. **Enhance Control Panel Integration** کي ڏسو ۽ **Configuration** تي ڪلڪ ڪريو
4. ویزارد توهان کي سیٽ اپ ۾ رهنمائي ڪندو:
   - **Step 1:** تعارف ۽ فيچرز جو خلاصو
   - **Step 2:** پنهنجي API credentials (Token, API URL, Server ID) داخل ڪريو
   - **Step 3:** ڪنيڪشن کي ٽيسٽ ڪريو
   - **Step 4:** جائزو وٺو ۽ فعال ڪريو

توهان هي چيون ٿا ته:
- ویزارد خود بخود توهان جي `wp-config.php` فائل ۾ constants داخل ڪري ان ڪري
- constant definitions کي ڪاپي ڪريو ۽ هوءَ ذاتي طور تي شامل ڪريو

## اضافي WordPress Configuration {#additional-wordpress-configuration}

ڪميونٽي جو فيڊبڪ ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) جي بنياد تي، توهان کي هي اضافي setings configure ڪرڻ گهرجي:

### .htaccess Configuration {#htaccess-configuration}

جڏهن توهان کي domain mapping سان مسئلا ٿين ٿا:
1. اصل Enhance `.htaccess` فائل کي مڪمل ڪري ڇڏيو
2. ان جي جاءِ تي standard WordPress Multisite `.htaccess` فائل کان بدلو ڪريو

### Cookie Constants {#cookie-constants}

Mapped domains پاران صحيح cookie handling کي يقيني بڻائڻ لاءِ هي constants `wp-config.php` ۾ شامل ڪريو:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## اهو ڪيئن کام ڪري ٿو {#how-it-works}

### جڏهن هڪ Domain جو Mapping ٿئي ٿو {#when-a-domain-is-mapped}

1. صارف Ultimate Multisite (یا سبڈومین موڈ میں ایک نئی سائٹ بنائی جاتی ہے) میں اپنی کسٹم ڈومین کو مپ کرتا ہے۔
2. یہ انٹیگریشن Enhance کے API پر POST ریکویسٹ بھیجتی ہے: `/servers/{server_id}/domains`
3. Enhance اس ڈومین کو آپ کے سرور کنفیگریشن میں شامل کر دیتا ہے۔
4. جب DNS آپ کے سرور پر رزلٹ کرتا ہے، تو Enhance خود بخود Let'sEncrypt کے ذریعے ایک SSL سرٹیفکیٹ فراہم کر دیتا ہے۔
5. ڈومین HTTPS کے ساتھ فعال ہو جاتا ہے۔

### جب کوئی ڈومین ہٹا دی جاتی ہے {#when-a-domain-is-removed}

1. Ultimate Multisite میں ڈومین مپنگ ڈیلیٹ کر دی جاتی ہے۔
2. انٹیگریشن ڈومین کی ID تلاش کرنے کے لیے Enhance کو کوئری کرتی ہے۔
3. `/servers/{server_id}/domains/{domain_id}` پر DELETE ریکویسٹ بھیجی جاتی ہے۔
4. Enhance اس ڈومین کو آپ کے سرور کنفیگریشن سے ہٹا دیتا ہے۔

### DNS اور SSL چیکنگ {#dns-and-ssl-checking}

Ultimate Multisite میں DNS اور SSL چیکنگ پہلے سے موجود ہے:
- آپ **Domain Mapping Settings** میں چیک کا وقفہ (default: 300 سیکنڈ/5 منٹ) ترتیب دے سکتے ہیں۔
- سسٹم کسی ڈومین کو فعال کرنے سے پہلے DNS کی پھیلاؤ (propagation) کی تصدیق کرتا ہے۔
- SSL سرٹیفکیٹ کی درستگی خود بخود چیک کی جاتی ہے۔
- Enhance خود بخود SSL فراہم کرتا ہے، اس لیے دستی SSL کنفیگریشن کی ضرورت نہیں پڑتی۔

## سیٹ اپ کی تصدیق کرنا {#verifying-setup}

### کنکشن کا ٹیسٹ کریں {#test-the-connection}

1. انٹیگریشن ویزارد میں، **Test Connection** سٹیپ استعمال کریں۔
2. یہ پگ ان آپ کے سرور پر ڈومینز لسٹ کرنے کی کوشش کرے گا۔
3. ایک کامیابی کا پیغام اس بات کی تصدیق کرتا ہے:
   - API کریڈینشلز درست ہیں
   - API URL قابل رسائی ہے
   - سرور ID درست ہے
   - اجازتیں ٹھیک سیٹ ہیں

### ڈومین مپ کرنے کے بعد {#after-mapping-a-domain}

1. Ultimate Multisite میں ایک ٹیسٹ ڈومین مپ کریں۔
2. Ultimate Multisite لاگز چیک کریں (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Enhance کنٹرول پینل میں تصدیق کریں کہ ڈومین شامل ہو گیا ہے:
   - **Servers** > **Your Server** > **Domains** پر جائیں
   - نئی ڈومین لسٹ میں نظر آنی چاہیے
4. ایک بار جب DNS پھیلا جائے، تو SSL خود بخود فراہم ہونے کی تصدیق کریں۔

## مسئلے حل کرنا (Troubleshooting) {#troubleshooting}

### API کنکشن کے مسائل (API Connection Issues) {#api-connection-issues}

**غلطی: "Enhance API سے جڑنے میں ناکامی" ("Failed to connect to Enhance API")**
- چیک کریں کہ `WU_ENHANCE_API_URL` کے آخر میں `/api/` شامل ہے یا نہیں۔
- یقینی بنائیں کہ آپ HTTP نہیں بلکہ HTTPS استعمال کر رہے ہیں۔
- چیک کریں کہ کیا Enhance پینل آپ کے WordPress سرور سے قابل رسائی ہے۔
- اس بات کی تصدیق کریں کہ کوئی فائر وال رولز کنکشن کو بلا تو نہیں کر رہے ہیں۔

**غلطی: "Enhance API ٹوکن نہیں ملا" ("Enhance API Token not found")**
- یقینی بنائیں کہ `WU_ENHANCE_API_TOKEN` `wp-config.php` میں ڈیفائن کیا گیا ہے۔
- چیک کریں کہ آیا Enhance میں توکن ڈیلیٹ یا ایکسپائر تو نہیں ہو گیا ہے۔
- ٹوکن کی ویلیو میں کوئی ٹائپنگ کی غلطی نہ ہو۔

**غلطی: "سرور آئی ڈی ترتیب نہیں دی گئی" ("Server ID is not configured")**
- چیک کریں کہ `WU_ENHANCE_SERVER_ID` `wp-config.php` میں ڈیفائن کیا گیا ہے۔
- یقینی بنائیں کہ سرور آئی ڈی ایک درست UUID فارمیٹ میں ہے۔
- تصدیق کریں کہ آیا آپ کا سرور Enhance پینل میں موجود ہے یا نہیں۔

### ڈومین شامل نہ ہونا (Domain Not Added) {#domain-not-added}

**لاگز چیک کریں:**
1. **Ultimate Multisite** > **Logs** پر جائیں۔
2. `integration-enhance` کے ذریعے فلٹر کریں۔
3. مسئلے کی نشاندہی کرنے والے ایرر میسجز کو دیکھیں۔

**عام وجوہات:**
- غلط ڈومین نیم فارمیٹ (Invalid domain name format)۔
- ڈومین پہلے سے Enhance میں موجود ہے۔
- API کی اجازتیں ناکافی ہیں (یقینی بنائیں کہ ٹوکن کے پاس System Administrator کا رول ہے)۔
- سرور آئی ڈی Enhance میں اصل سرور سے میل نہیں کھاتی۔

### SSL سرٹیفکیٹ کے مسائل (SSL Certificate Issues) {#ssl-certificate-issues}

**SSL فراہم نہ ہونا:**
- چیک کریں کہ DNS آپ کے سرور کے IP ایڈریس کی طرف پوائنٹ کر رہا ہے۔
- چیک کریں کہ کیا ڈومین صحیح طریقے سے حل ہو رہا ہے: `nslookup yourdomain.com`۔
- Enhance کو SSL فراہم کرنے سے پہلے DNS کا حل کرنا ضروری ہے۔
- DNS پریپیشن کے بعد SSL فراہم کرنے میں عام طور پر 5-10 منٹ لگتے ہیں۔
- SSL مخصوص ایررز کے لیے Enhance کنٹرول پینل کے لاگز چیک کریں۔

**Enhance میں دستی SSL ٹرابل شوٹنگ:**
1. **Servers** > **Your Server** > **Domains** پر جائیں۔
2. اپنا ڈومین تلاش کریں اور اس کی SSL اسٹیٹس چیک کریں۔
3. ضرورت پڑنے پر آپ SSL فراہم کرنے کو دستی طور پر شروع کر سکتے ہیں۔

### DNS چیک کا وقفہ (DNS Check Interval) {#dns-check-interval}

جيومين (Domains) يا SSL سرٹیفکیٹس فعال ہونے ۾ وڏي وقت لڳي ٿو ته؟
1. **Ultimate Multisite** > **Settings** > **Domain Mapping** تي وڃو
2. **DNS Check Interval** جي ترتي بيان ڏسو
3. DEFAULT 300 سيڪنڊ کان گھٽ قيمت (مينيمم: 10 سيڪنڊ) تي ريگوليٽ ڪريو
4. **نوٽ:** گهٽ انٽر벌 مان مطلب آهي وڌيڪ دفعو جا يقيني ڪندا، پر سرور تي بوجھ وڌيڪ پوي ٿو

### تصديق (Authentication) جي غلطيون {#authentication-errors}

**HTTP 401/403 غلطيون:**
- Enhance ۾ توهان جي API token کي نئين طور تي جنريٽ ڪريو
- تصديق ڪريو ته اسان جي **System Administrator** رول آهي
- چكهيو ته token ختم نه ٿيو هجي
- هيٺ ڏنل Organization ID استعمال ڪري رهيا آهيو (جيتوڻيڪ URL ۾ اهو عام طور تي لاڳو نه ٿيندو)

### لاگز جو تجزيو (Log Analysis) {#log-analysis}

تفصيل سان لاگنگ فعال ڪريو:
```php
// وڌيڪ ڊي باگنگ لاءِ wp-config.php ۾ شامل ڪريو
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

پھر لاگز هيٺ ڏنل تي چونڊيو:
- Ultimate Multisite لاگز: **Ultimate Multisite** > **Logs**
- WordPress ڊي باگ لاگ: `wp-content/debug.log`
- Enhance پینل لاگز: Enhance جي اڊمن انٽر فيس ۾ موجود آهن

## API رفرنس (API Reference) {#api-reference}

### تصديق (Authentication) {#authentication}
هي سڀني API درخواستون Bearer token authentication استعمال ڪن ٿيون:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### استعمال ٿيل عام اءُپٽ پوائنٽس (Common Endpoints Used) {#common-endpoints-used}

**Servers کي لسٹ ڪرڻ:**
```
GET /servers
```

**ڪنه سرور تي موجوده Domains کي لسٹ ڪرڻ:**
```
GET /servers/{server_id}/domains
```

**هڪ Domain شامل ڪرڻ:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**هڪ Domain حذف ڪرڻ:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### پوري API ڊاڪومينٽيشن (Full API Documentation) {#full-api-documentation}
پوري API ڊاڪومينٽيشن: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## بهترين عمليون (Best Practices) {#best-practices}

### سیکیورٹی (Security) {#security}
- **کبھی هميشہ API tokens کي ورژن کنٹرول ۾ نه ڪيو**
- ٹوکن کي `wp-config.php` ۾ محفوظ ڪريو جنهن کي Git کان خارج رکڻ گهرجي
- مناسب اجازت نال توکن جو استعمال ڪريو (پورا انٽيغريشن لاءِ System Administrator)
- پروڊڪشن ماحول لاءِ توکن جي ختم ٿيڻ جي تاريخ مقرر ڪريو
- وقت-وقت توکن کي رولٽ (Rotate) ڪريو

### کارکردگی (Performance) {#performance}
- API کاليون جو گهرو رکڻ کان بچڻ لاءِ डिफلت ڪئي DNS چڪڙ جي وقف وقت (300 سڪنڊ) استعمال ڪريو
- وڏي سطح جا دومين ايرادن (domain operations) دوران Enhance سرور جي سيڙهي کي ماني ڏيو
- جيڪڏهن هڪ ئي وقت мноڳني دومين جو ميپنگ ڪجي ٿو ته دومين جو اضافو ڪنهن سان گهرو رکڻ تي غور ڪريو

### مانيٽرنگ (Monitoring) {#monitoring}
- انٽيغريشن غلطين لاءِ Ultimate Multisite جا لاگز باقاعدي چیک ڪريو
- ناکام دومين اضافن جي مانيٽرنگ قائم ڪريو
- SSL سرٽيفڪيٽن جي صحيح طرح عمل ڪرڻ جو تصديق ڪريو
- Enhance سرور جي صلاحيتن ۽ دومين جي حد تي نظر رکيو

## اضافي وسائل (Additional Resources) {#additional-resources}

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** وِڪي پيچ "How to Configure Domain Mapping v2" ڏسو

## مدد (Support) {#support}

جيڪڏهن توهان کي ڪا سمجهڻ ۾ ڏکيائي ٿئي:
1. اوپوري Troubleshooting حصو ڏسو
2. Ultimate Multisite جا لاگز ٻيهرا ڏسو
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) جو مشورو وٺو
4. پنهنجي پ्यानل جي مخصوص مسئلن لاءِ Enhance سپورٽ سان رابطو ڪريو
5. ڪميونٽي جي مدد لاءِ تفصيلي غلطين جا لاگز رکيڪاري سان هڪ نون بحث (discussion) ٺاهيو

## نوٽس (Notes) {#notes}

- هيء رکڻ صرف ডোমেইন aliases کي سنڀালي ٿو؛ Enhance خود SSL کي منظم ڪري ٿو
- هيء رکڻ custom domain mappings ۽ subdomain-based sites ٻئي جي مدد ڪري ٿو
- Automatic www subdomain creation Domain Mapping settings ۾ configure ڪيو جا سگهجي ٿو
- Enhance موجوده Apache configurations (LiteSpeed Enterprise موجود آهي) کي سپورٽ ڪري ٿو
- Ultimate Multisite کان دامن جو حذف ڪرڻ سان Enhance کان دامن ختم ٿي ويندو، پر SSL certificates فوراً مڪمل طور تي حذف نه ٿيون ٿيون
