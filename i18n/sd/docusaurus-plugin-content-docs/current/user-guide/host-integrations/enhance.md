---
title: کنٹرول پینل انضمام کي بهتر بنائڻ
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# کنٹرول پینل انٹیگریشن کي بهتر بنائڻ {#enhance-control-panel-integration}

## خلاصو {#overview}
Enhance هڪ مودرن ڪنٽرول پینل آهي جيڪو طاقتور هاوسنگ آٽومويشن ۽ مانيجمنت صلاحيتون فراهم ڪري ٿو. هي ان انٹیگريشن جي ڪري Ultimate Multisite ۽ Enhance Control Panel بابت دومين سمڪن (domain syncing) ۽ SSL سرٽيفڪيٽ جو انتظام خود بخود ٿيندو آهي.

**ڳالهه جو متعلق:** ڪميونٽي جي تجويرا ۽ اضافي معلومات لاءِ [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) ڏسو.

## خصوصيتون {#features}
- Ultimate Multisite ۾ دومينز جو مئپ ٿيڻ تي خود بخود دومين سمڪن (domain syncing).
- DNS حل ٿيڻ تي LetsEncrypt جي ذريعي SSL سرٽيفڪيٽ جو خود بخود فراهم ڪرڻ.
- دومين سوبڊومين (subdomain) کي سپورٽ ڪرڻ جيڪي سوبڊومين موڊ ۾ چلڻ واري نڪتون (networks) لاءِ آهن.
- مئپون ختم ٿيڻ تي دومين کي ختم ڪرڻ.
- API ڪردارن کي تصديق ڪرڻ لاءِ ڪنيڪشن ٽيسٽنگ.

## گهرجن (Requirements) {#requirements}

### سسٽم گهرجن {#system-requirements}
- Enhance Control Panel لڳائي ٿو ۽ وصول ٿيڻ ۾ آهي.
- WordPress Multisite جو ان Enhance سرور تي نصب يا جڙيل هجڻ.
- Apache ويب سرور (Enhance موجوده Apache ڪيفيڪيشن کي سپورٽ ڪري ٿو؛ LiteSpeed Enterprise گھٽ قيمت تي موجود آهي).

### API رسائي {#api-access}
API ٽوڪن (tokens) کڻڻ لاءِ Enhance Control Panel جو ادميني صلاحيت حاصل ڪرڻ گهرجي.

## پنهنجا API ڪردار حاصل ڪرڻ {#getting-your-api-credentials}

### 1. هڪ API ٽوڪن (Token) کڻيو {#1-create-an-api-token}

1. ادميني طور Enhance Control Panel ۾ لاگ ان ڪريو.
2. نيويجري مينيئر ۾ **Settings** تي ڇڪڻ ڪريو.
3. **Access Tokens** تي وڃو.
4. **Create Token** تي ڪلڪ ڪريو.
5. ٽوڪن کي هڪ وضاحت سان نالو ڏيو (مثال طور: "Ultimate Multisite Integration").
6. **System Administrator** جو رول مقرر ڪريو.
7. ختم ٿيڻ جي تاريخ لاءِ:
   - جيڪڏهن توهان چاهيو ته ٽوڪن ڪڏهن به ختم نه ٿئي، ته اها خالي رکجو.
   - يا سڪيورٽي جي مقصدن لاءِ هڪ خاص ختم ٿيڻ جو ڏينهن مقرر ڪريو.
8. **Create** تي ڪلڪ ڪريو

پیدا کرنے کے بعد، آپ کا **Access Token** اور **Organization ID** دکھایا جائے گا۔ انہیں فوراً محفوظ کر لیں کیونکہ ٹوکن صرف ایک بار ہی دکھایا جاتا ہے۔

### 2. اپنا Organization ID حاصل کریں {#2-get-your-organization-id}

Organization ID Access Tokens والے پیج پر ایک بلو انفارمیشن باکس میں دکھایا جاتا ہے جس پر "Org ID: {your_id}" لکھا ہوتا ہے۔

Organization ID کا فارمیٹ UUID جیسا ہوتا ہے: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

آپ کسی کسٹمر کا Organization ID یہ بھی درج ذیل طریقے سے تلاش کر سکتے ہیں:
1. **Customers** پیج پر جائیں
2. متعلقہ کسٹمر کے لیے **Manage customer** پر کلک کریں
3. URL کو دیکھیں - Organization ID `/customers/` کے بعد آنے والے حروفِ تہجی ہیں۔

### 3. اپنا Server ID حاصل کریں {#3-get-your-server-id}

اپنا Server ID (جو ڈومین آپریشنز کے لیے ضروری ہے) تلاش کرنے کے لیے:

1. Enhance Control Panel میں، **Servers** پر جائیں
2. اس سرور پر کلک کریں جہاں آپ کا WordPress انسٹالیشن چل رہا ہے
3. Server ID (UUID فارمیٹ) URL یا سرور کی تفصیلات میں نظر آئے گی
4. متبادل طور پر، آپ سرورز کو لسٹ کرنے کے لیے API استعمال کر سکتے ہیں:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID کا فارمیٹ UUID جیسا ہوتا ہے: `00000000-0000-0000-0000-000000000000`

### 4. اپنا API URL حاصل کریں {#4-get-your-api-url}

آپ کا API URL آپ کے Enhance Control Panel URL میں `/api/` شامل کرنے سے مل جائے گا:

```
https://your-enhance-panel.com/api/
```

**اہم:** `/api/` پاتھ ضروری ہے۔ عام غلطیاں یہ ہیں:
- صرف ڈومین استعمال کرنا بغیر `/api/` کے
- سیکیورٹی کے لیے HTTP کی بجائے HTTPS کا استعمال نہ کرنا (سیکیورٹی کے لیے HTTPS لازمی ہے)

## Configuration {#configuration}

### Required Constants {#required-constants}

اپنے `wp-config.php` فائل میں درج ذیل constants شامل کریں:

// Control Panel Integration کي بهتر بنائڻ لاءِ

define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Integration Wizard جي مدد سان سیٽ اپ ڪرڻ {#setup-via-integration-wizard}

1. پنهنجي WordPress admin ۾، **Ultimate Multisite** > **Settings** تي وڃو
2. **Integrations** ٽيپ تي ويندوه
3. **Enhance Control Panel Integration** کي ڏسو ۽ **Configuration** تي ڪلڪ ڪريو
4. ويزرڊ توهان کي سیٽ اپ ۾ رهنمائي ڪندو:
   - **Step 1:** تعارف ۽ فيچرز جو خلاصو
   - **Step 2:** پنهنجي API credentials (Token, API URL, Server ID) داخل ڪريو
   - **Step 3:** ڪنيڪشن کي ٽيسٽ ڪريو
   - **Step 4:** جائزو وٺو ۽ فعال ڪريو

توهان هي چن سگهو ٿا:
- ويزرڊ کي خود بخود توهان جي `wp-config.php` فائل ۾ constants داخل ڪرڻ ڏيو
- constant definitions کي ڪاپي ڪريو ۽ هو متادي طور تي شامل ڪريو

## اضافي WordPress Configuration {#additional-wordpress-configuration}

ڪميونٽي جو فيڊبڪ ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) جي بنياد تي، توهان کي هي اضافي ترتيبيون سیٽ ڪرڻ گهرجي:

### .htaccess Configuration {#htaccess-configuration}

جڏهن توهان کي دومين مئپنگ (domain mapping) ۾ مسئلا ٿين ٿا:
1. اصل Enhance `.htaccess` فائل کي حذف ڪريو
2. ان جي جاءِ تي standard WordPress Multisite `.htaccess` فائل رکيو

### Cookie Constants {#cookie-constants}

ماپس ڪيل دوميني حصن ۾ صحيح cookie هان ٿي، ان لاءِ هي constants `wp-config.php` ۾ شامل ڪريو:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## اهو ڪيئن کام ڪري ٿو {#how-it-works}

### جڏهن هڪ دومين مئپ ڪيو وڃي ته {#when-a-domain-is-mapped}

1. صارف Ultimate Multisite (یا سبڈومین موڈ میں ایک نئی سائٹ بنائی جاتی ہے) میں ایک کسٹم ڈومین کا نقشہ کرتا ہے۔
2. انٹیگریشن Enhance کے API پر POST ریکویسٹ بھیجتی ہے: `/servers/{server_id}/domains`
3. Enhance اس ڈومین کو آپ کے سرور کی کنفیگریشن میں شامل کر دیتا ہے۔
4. جب DNS آپ کے سرور پر رزلٹ ہوتا ہے، تو Enhance خود بخود LetsEncrypt کے ذریعے ایک SSL سرٹیفکیٹ فراہم کرتا ہے۔
5. ڈومین HTTPS کے ساتھ فعال ہو جاتا ہے۔

### جب کوئی ڈومین ہٹا دی جاتی ہے {#when-a-domain-is-removed}

1. Ultimate Multisite میں ڈومین م wenig اپ ڈیٹس (mapping) کو ڈیلیٹ کر دیا جاتا ہے۔
2. انٹیگریشن ڈومین کی ID تلاش کرنے کے لیے Enhance سے پوچھتی ہے۔
3. `/servers/{server_id}/domains/{domain_id}` پر DELETE ریکویسٹ بھیجی جاتی ہے۔
4. Enhance اس ڈومین کو آپ کے سرور کی کنفیگریشن سے ہٹا دیتا ہے۔

### DNS اور SSL چیکنگ {#dns-and-ssl-checking}

Ultimate Multisite میں DNS اور SSL چیکنگ پہلے سے موجود ہے:
- آپ **Domain Mapping Settings** میں چیک کا وقفہ (interval) ترتیب دے سکتے ہیں (ڈیفالٹ: 300 سیکنڈ/5 منٹ)
- سسٹم کسی ڈومین کو فعال کرنے سے پہلے DNS کی پراجیکشن (propagation) کی تصدیق کرتا ہے۔
- SSL سرٹیفکیٹ کی درستگی خود بخود چیک کی جاتی ہے۔
- Enhance خود بخود SSL فراہم کرتا ہے، اس لیے دستی SSL کنفیگریشن کی ضرورت نہیں ہوتی۔

## سیٹ اپ کی تصدیق کرنا {#verifying-setup}

### کنکشن کا ٹیسٹ کریں {#test-the-connection}

1. انٹیگریشن ویزارد میں، **Test Connection** سٹیپ استعمال کریں۔
2. پلگ ان آپ کے سرور پر ڈومینز لسٹ کرنے کی کوشش کرے گا۔
3. ایک کامیابی کا پیغام یہ تصدیق کرتا ہے:
   - API کریڈینشلز درست ہیں
   - API URL قابل رسائی ہے
   - سرور ID درست ہے
   - اجازتیں ٹھیک سیٹ کی گئی ہیں

### ڈومین م wenig اپ ڈیٹس کے بعد {#after-mapping-a-domain}

1. Ultimate Multisite میں ایک ٹیسٹ ڈومین کا نقشہ کریں۔
2. Ultimate Multisite لاگز چیک کریں (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Enhance کنٹرول پینل میں تصدیق کریں کہ ڈومین شامل ہو گیا ہے:
   - **Servers** > **Your Server** > **Domains** پر جائیں
   - نئی ڈومین لسٹ میں ظاہر ہونی چاہیے۔
4. ایک بار جب DNS پراجیکٹ ہو جائے، تو SSL خود بخود فراہم کیا گیا ہے اس کی تصدیق کریں۔

## مسئلہ حل (Troubleshooting) {#troubleshooting}

### API ڪنيڪشن جي مسئلن ۾ {#api-connection-issues}

**غلطي: "Enhance API سان جوڳڻ نه ٿيو" ("Failed to connect to Enhance API")**
- هيٺ ڏنل شي کي چكهو ته `WU_ENHANCE_API_URL` آخر ۾ `/api/` شامل آهي.
- ڇا توهان HTTPS استعمال ڪري رهيا آهيو، HTTP نه؟
- هيٺ ڏيکڻ جو ڳانهيو ته Enhance پینل توهان جي WordPress سرور کان وصول ٿي رهيو آهي يا نه.
- چكهو ته ڪنه به firewall رولز ڪنيڪشن کي روڪي ناهن.

**غلطي: "Enhance API Token ملي نه وئي" ("Enhance API Token not found")**
- هيٺ ڏنل شي کي چكهو ته `WU_ENHANCE_API_TOKEN` ۾ `wp-config.php` ۾ تعريف ڪيو آهي.
- ڇا توهان Enhance ۾ توڪن کي مڪمل نه ڪيو يا ختم ٿي ويو آهي، اهو تصديق ڪريو.
- توڪن جي قيمت ۾ غلطي (typo) کان سواءِ ٻين شيئون ڏسو ته.

**غلطي: "Server ID configure نه آهي" ("Server ID is not configured")**
- هيٺ ڏنل شي کي چكهو ته `WU_ENHANCE_SERVER_ID` ۾ `wp-config.php` ۾ تعريف ڪيو آهي.
- ڇا Server ID هڪ صحيح UUID فارميٽ آهي، اهو تصديق ڪريو.
- تصديق ڪريو ته توهان جي Enhance پینل ۾ سرور موجود آهي.

### دومين (Domain) شامل نه ٿيڻ {#domain-not-added}

**لاگز (logs) ڏسو:**
1. **Ultimate Multisite** > **Logs** تي وڃو.
2. **integration-enhance** سان فلٽر ڪريو.
3. مسئلي کي ظاهر ڪندڙ غلطين جو ڳولا ڪريو.

**عام سببون:**
- نام صحيح نه هجڻ (Invalid domain name format).
- دومين پنهنجي Enhance ۾ پريشن (already exists in Enhance) موجود هجڻ.
- API جي اجازت ناهڻ (ensure token has System Administrator role).
- Server ID جو اصل سرور سان مطابقت نه ٿي ڪرڻ.

### SSL سرٽيفڪيٽ جي مسئلن ۾ {#ssl-certificate-issues}

**SSL فراهم نه ٿيڻ:**
- تصديق ڪريو ته DNS توهان جي سرور جي IP address تي پوائنٽ ڪيو آهي.
- هيٺ ڏيکڻ جو ڳانهيو ته دومين صحيح طرح حل ٿئي رهيو آهي: `nslookup yourdomain.com`
- Enhance کي SSL فراهم ڪرڻ کان اڳ ۾ DNS جو حل ٿيڻ گهرجي.
- عام طور تي DNS propagation کان پوءِ SSL فراهم ڪرڻ ۾ 5-10 منٽ لڳندا آهن.
- SSL سان خاص غلطين لاءِ Enhance Control Panel جا لاگز ڏسو.

**Enhance ۾ مانيول SSL مسئلا حل:**
1. **Servers** > **Your Server** > **Domains** تي وڃو.
2. پنهنجي دومين کي ڳولو ۽ ان جي SSL جي حالت (status) کي چكهو.
3. جيڪڏهن ضرورت پئي ته توهان مانيول طور تي SSL فراهم ڪرڻ شروع ڪري سگهو ٿا.

### DNS چیک جو وقف وقت (DNS Check Interval) {#dns-check-interval}

جيومين یا SSL سرٹیفکیٹ فعال ہونے میں بہت وقت لگ رہا ہے تو:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping** پر جائیں
2. **DNS Check Interval** سیٹنگ تلاش کریں
3. اسے ڈیفالٹ 300 سیکنڈ سے کم ویلیو (کم از کم: 10 سیکنڈ) تک ایڈجسٹ کریں
4. **نوٹ:** کم انٹروولز کا مطلب ہے زیادہ بار چیک ہونا لیکن سرور پر زیادہ بوجھ پڑتا ہے۔

### تصدیق کی غلطیاں (Authentication Errors) {#authentication-errors}

**HTTP 401/403 غلطیاں:**
- Enhance میں اپنا API token دوبارہ جنریٹ کریں
- چیک کریں کہ ٹوکن میں **System Administrator** رول ہے
- یقینی بنائیں کہ ٹوکن ختم نہیں ہوا
- اس بات کو یقینی بنائیں کہ آپ صحیح Organization ID استعمال کر رہے ہیں (اگرچہ یہ عام طور پر URL میں درکار نہیں ہوتا)

### لاگ کا تجزیہ (Log Analysis) {#log-analysis}

تفصیلی لاگنگ فعال کریں:
```php
// بہتر ڈیبگنگ کے لیے wp-config.php میں شامل کریں
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

پھر ان جگہوں پر لاگز چیک کریں:
- Ultimate Multisite لاگز: **Ultimate Multisite** > **Logs**
- WordPress ڈیبگ لاگ: `wp-content/debug.log`
- Enhance پینل لاگز: Enhance کے ایڈمن انٹرفیس میں دستیاب ہیں۔

## API حوالہ (API Reference) {#api-reference}

### تصدیق (Authentication) {#authentication}
تمام API درخواستوں میں Bearer token کی تصدیق استعمال ہوتی ہے:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### عام استعمال ہونے والے اینڈ پوائنٹس (Common Endpoints Used) {#common-endpoints-used}

**سرورز کی فہرست حاصل کرنا:**
```
GET /servers
```

**کسی سرور پر ڈومینز کی فہرست حاصل کرنا:**
```
GET /servers/{server_id}/domains
```

**ایک ڈومین شامل کرنا:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**ایک ڈومین ڈیلیٹ کرنا:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### مکمل API دستاویز (Full API Documentation) {#full-api-documentation}
مکمل API دستاویز: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## بہترین طریقے (Best Practices) {#best-practices}

### سیکیورٹی (Security) {#security}
- **API tokens کي ڪڏهن به ورجن ڪنٽرول ۾ شامل نه ڪريو**
- Tokens کي `wp-config.php` ۾ محفوظ ڪريو جيڪا Git کان خارج ٿي ويندي هجڻ گهرجي
- مناسب اجازت نال tokens استعمال ڪريو (پورا انٽيغريشن لاءِ System Administrator)
- پروڊڪشن ماحول لاءِ token جي ختم ٿيڻ جون تاريخون مقرر ڪريو
- باقاعدي طور تي tokens کي رولينگ ڪريو

### کارکردگی (Performance) {#performance}
- API calls جو گهرو ٿيڻ کان بچڻ لاءِ default DNS check interval (300 seconds) استعمال ڪريو
- وڏن سطح جي ডومين عملن دوران Enhance server جي سيورس کي مونيٽر ڪريو
- هڪ ئي وقت мноغو دومين ماپ ڪندا ته دومين جو شامل ڪرڻ کي مختلف وقت تي ترتیب ڏيڻ (staggering) غور ڪريو

### مونيٽرنگ (Monitoring) {#monitoring}
- انٽيغريشن غلطين لاءِ Ultimate Multisite جي لاگز کي باقاعدي چیک ڪريو
- असफल دومين شامل ڪرڻ لاءِ مونيٽرنگ قائم ڪريو
- SSL certificates جي صحيح طرح فراهم ٿيڻ جو تصديق ڪريو
- Enhance server جي ڪپاسي ۽ دومين جي حد تي نظر رکجو

## اضافي ذريعن (Additional Resources) {#additional-resources}

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** "How to Configure Domain Mapping v2" وِڪي پيچ (wiki page) ڏسو

## مدد (Support) {#support}

جيڪڏهن توهان کي ڪا مسئلي اچي ٿي ته:
1. اوپوري Troubleshooting سيكشن کي چيڪ ڪريو
2. Ultimate Multisite جي لاگز جو جائزو وٺو
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) ڏانهن مشورتا حاصل ڪريو
4. پ्यानل مخصوص مسئلن لاءِ Enhance سپورٽ سان رابطو ڪريو
5. ڪميونٽي جي مدد لاءِ تفصيلي غلطين جا لاگز سان هڪ نئين بحث (discussion) ٺاهيو

## نوٽس (Notes) {#notes}

- هيء (integration) صرف دومين آلیز (domain aliases) کي سنڀال ڪري ٿو؛ انهمياري (Enhance) SSL خود بخود سنڀال ڪندو آهي.
- هيءار (integration) ڪسٹم دومين ميپنگ ۽ سبڊومين-بنيو سائيٽس ٻنهي جي مدد ڪري ٿو.
- دومين ميپنگ جي ترتيبي ۾ آٽو매틱 www سبڊومين کي ٺاهڻ جو نظام ترتیب ڏئي سگهجي ٿو.
- هيءار موجوده طور تي Apache configuration (LiteSpeed Enterprise موجود آهي) کي سنڀال ڪري ٿو.
- Ultimate Multisite کان دومين مڪمل ڪرڻ سان، Enhance کان دومين ختم ٿي ويندو آهي پر SSL سرٽيفڪٽس فوري طور تي حذف نه ٿي سگهن.
