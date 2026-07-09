---
title: ڪلاڊويز انٽيغريشن
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integration {#cloudways-integration}

## جائزہ (Overview) {#overview}
Cloudways هڪ مانيجڊ ڪلاؤڊ هوستنگ پليٽ فارم آهي جيڪو توهان کي مختلف ڪلاؤڊ برائڊز جهڙوڪ DigitalOcean، AWS، Google Cloud ۽ ٻين تي WordPress سائيٽس ڊپلوئ ڪرڻ جي اجازت ڏئي ٿو. هي ان انٽيغريشن جو فائدو اهو آهي ته Ultimate Multisite ۽ Cloudways بابت آٽومويڪ ايميل سنڪرينگ (domain syncing) ۽ SSL سرٽيفڪيٽ مانيجمنٽ خود بخود ٿي ويندي آهي.

## خصوصيتون (Features) {#features}
- آٽومويڪ ڊو메ن سنڪرينگ (Automatic domain syncing)
- SSL سرٽيفڪيٽ مانيجمنٽ (SSL certificate management)
- اضافي ڊو메ن جي سگهه (Support for extra domains)
- SSL سرٽيفڪيٽ لاءِ DNS تصديق (DNS validation for SSL certificates)

## گهرجن (Requirements) {#requirements}
توهان کي پنهنجي `wp-config.php` فائل ۾ هي constants تعريف ڪرڻ گهرجي:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

اختياري طور تي، توهان هي به تعريف ڪري سگهو ٿا:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## ترتیب ڏيڻ جا تعليمات (Setup Instructions) {#setup-instructions}

### 1. پنهنجي Cloudways API معلومات حاصل ڪريو (Get Your Cloudways API Credentials) {#1-get-your-cloudways-api-credentials}

1. پنهنجي Cloudways dashboard ۾ لاگ ان ڪريو.
2. "Account" > "API Keys" تي وڃو.
3. جيڪڏهن توهان جي پاسي API key ناهي ته هڪ API key جنريٽ ڪريو.
4. پنهنجو ايميل ۽ API key ڪاپي ڪريو.

### 2. پنهنجي سرور ۽ ايپليڪيشن ID حاصل ڪريو (Get Your Server and Application IDs) {#2-get-your-server-and-application-ids}

1. پنهنجي Cloudways dashboard ۾، "Servers" تي وڃو.
2. ان سرور کي چونڊيو جتي توهان جو WordPress multisite هجيو آهي.
3. Server ID URL ۾ ڏسڻ لائق آهي: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" تي وڃو ۽ پنهنجي WordPress application کي چونڊيو.
5. App ID URL ۾ ڏسڻ لائق آهي: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php ۾ constants شامل ڪريو (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

هي هي constants پنهنجي `wp-config.php` فائل ۾ شامل ڪريو:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

જો તમારી પાસે વધારાની **બહારની** ડોમેન્સ (તમારા મલ્ટિસાઇટ નેટવર્કની બહાર) હોય જે હંમેશા Cloudways એલિએસીસ લિસ્ટમાં રાખવા જોઈએ:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning તમારા પોતાના નેટવર્કનો વાઇલ્ડકાર્ડ (wildcard) ઉમેરશો નહીં
`WU_CLOUDWAYS_EXTRA_DOMAINS` માં `*.your-network.com` (અથવા તમારા પોતાના નેટવર્કના કોઈપણ સબડોમેન પેટર્ન) ઉમેરશો નહીં. શા માટે આ પ્રતિબંધિત છે તે નીચે [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall) જુઓ, જે તમને દરેક ટેન્નેન્ટ માટે SSL સર્ટિફિકેટ ઇશ્યૂ થવાથી અટકાવે છે.
:::

### 4. ઇન્ટિગ્રેશન ચાલુ કરો (Enable the Integration) {#4-enable-the-integration}

1. તમારા WordPress admin માં જાઓ: Ultimate Multisite > Settings
2. "Domain Mapping" ટેબ પર જાઓ
3. નીચે સ્ક્રોલ કરીને "Host Integrations" પર જાઓ
4. Cloudways ઇન્ટિગ્રેશનને એન્એબલ કરો
5. "Save Changes" પર ક્લિક કરો

## તે કેવી રીતે કામ કરે છે (How It Works) {#how-it-works}

### ડોમેન સિન્ક કરવું (Domain Syncing) {#domain-syncing}

જ્યારે Ultimate Multisite માં કોઈ ડોમેન મેપ કરવામાં આવે છે:

1. ઇન્ટિગ્રેશન હાલમાં મેપ કરેલા બધા ડોમેન્સ મેળવે છે
2. તે નવી ડોમેનને લિસ્ટમાં ઉમેરે છે (જો લાગુ પડતું હોય તો www વર્ઝન સાથે)
3. તે સંપૂર્ણ લિસ્ટને API દ્વારા Cloudways પર મોકલે છે
4. Cloudways તમારા એપ્લિકેશન માટે ડોમેન એલિએસીસ અપડેટ કરે છે

નોંધ: Cloudways API ને દરેક વખતે માત્ર વ્યક્તિગત ડોમેન્સ ઉમેરવા અથવા દૂર કરવાને બદલે ડોમેન્સની સંપૂર્ણ યાદી મોકલવાની જરૂર હોય છે.

### SSL સર્ટિફિકેટ મેનેજમેન્ટ (SSL Certificate Management) {#ssl-certificate-management}

ડોમેન્સ સિન્ક થયા પછી:

1. ઇન્ટિગ્રેશન તપાસે છે કે કયા ડોમેન્સ તમારા સર્વર તરફ નિર્દેશ કરતા માન્ય DNS રેકોર્ડ ધરાવે છે
2. તે Cloudways ને તે ડોમેન્સ માટે Let's Encrypt SSL સર્ટિફિકેટ ઇન્સ્ટોલ કરવા વિનંતી કરે છે
3. Cloudways SSL સર્ટિફિકેટ ઇશ્યૂ અને ઇન્સ્ટોલેશનનું સંભાળે છે

تمام، ڪلورڊويز (Cloudways) سان انٽيغريشن هميشه **ستاندارڊ** (غير وائلڊڪار) ليتس اينکرپٽ (Let's Encrypt) سرٽيفڪيٽس طلب ڪري ٿو. جيڪڏهن `WU_CLOUDWAYS_EXTRA_DOMAINS` ۾ وائلڊڪار پيٽرن (wildcard pattern) ڏنو وڃي، ته SSL درخواست کان اڳ جو `*.` کي کٽي ڇڏي ويندو آهي — وائلڊڪار خود اسان جي انٽيغريشن طرف کان ڪنه به صورت ۾ نصب نه ٿيندو. Cloudways تي وائلڊڪار سرٽيفڪيٽ استعمال ڪرڻ لاءِ توهان کي اهو هيٺ ڏنل طريقو سان ذاتي طور تي نصب ڪرڻو پوندو، پر اهو ڪيلڪ ڪسٽم دومينن (custom domains) جي ليت ليتس اينکرپٽ جو نڪرڻ روڪي ڇڏي ٿو (نيڪاسي ذيلي ڏسو).

## اضافي دومين (Extra Domains) {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` ڪنستان توهان کي اهڙا ٻيا **باهري** دومين (external domains) بيان ڪرڻ جي اجازت ڏئي ٿو جيڪي هميشه Cloudways ايپليڪيشن جي اڙيلين (aliases list) ۾ رکيل رهندا. ان جو استعمال هيٺ ڏنل صورتن لاءِ ڪريو:

- اهڙا باهرين دومين جيڪي Ultimate Multisite پاران منظم نه ڪيا ويا آهن (مثال طور، هڪ الگ مارڪيٽنگ سائيٽ جيڪا اها ئي Cloudways ايپليڪيشن استعمال ڪري ٿي).
- اهڙا پڪڊ يا اسٽيجنگ دومين جيڪي توهان ان ايپليڪيشن جي اڙيلين ۾ رکڻ چاهيو.

اپنه پنهنجي نڪري (subdomain) وائلڊڪار لاءِ هن ڪنستان جو استعمال **نه ڪريو** (مثال طور، `*.your-network.com`). وائلڊڪار SSL جي ذيلي صورتحال کي ڏسو.

## اهم شيءِ — وائلڊڪار SSL جي ذيلي صورتحال {#important--wildcard-ssl-pitfall}

Cloudways جي डिफلت سرجيءَ سان عمل ڪرڻ کان هڪ عام غلطي اهو آهي ته `WU_CLOUDWAYS_EXTRA_DOMAINS` ۾ `*.your-network.com` جهڙو ڪو وائلڊڪار شامل ڪريو، يا ان وائلڊڪار لاءِ Cloudways جي وائلڊڪار SSL سرٽيفڪيٽ کي ذاتي طور تي نصب ڪريو.

**جيڪڏهن توهان اهو ڪيو ته، Cloudways Ultimate Multisite جو تعلق هجڻ وارن هر Tenant دومين لاءِ ليتس اينکرپٽ سرٽيفڪيٽ نڪرڻ کان انکار ڪندو.** Cloudways ايپليڪيشن تي فعال SSL سرٽيفڪيٽ کي هر وقت بدلائي ٿو، ۽ ايپليڪيشن تي پہلے کان موجود وائلڊڪار سرٽيفڪيٽ ان دومين لاءِ ليتس اينکرپٽ جو نڪرڻ روڪي ٿو جنهن تي ان انٽيغريشن انحصار ڪري ٿو.

### Ultimate Multisite نڪري لاءِ Cloudways SSL جي سفارش ڪيل ترتیب {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways ایپلیکیشنৰ **SSL Certificate** ট্যাবত, মাত্ৰ `your-network.com` আৰু `www.your-network.com` ক কভৰি থকা এটা **standard Let's Encrypt certificate** ইনষ্টল কৰক — কোনো wildcard নহয়।
2. `*.your-network.com` (বা আপোনাৰ নেটৱৰ্কৰ যিকোনো সাবডোমেইন প্যাটার্ন) `WU_CLOUDWAYS_EXTRA_DOMAINS`-ত ৰাখবেন নহয়। সেই ধ্ৰুপেটো কেৱল **বাহিৰ** ডোমেইনৰ বাবে ৰাখিব।
3. per-tenant subdomain wildcard টি মাত্ৰ **DNS** লেভেলত সৃষ্টি কৰক (আপোনাৰ Cloudways server IP-লৈ `*.your-network.com` ৰ বাবে এটা `A` record), যাতে সাবসাইটবোৰ রেজোল্ভ হয়। ব্যক্তিগত ম্যাপ কৰা কাস্টম ডোমেইনৰ বাবে SSL স্বয়ংক্রিয়ভাৱে Let's Encryptৰ জৰিয়তে ইন্টিগ্ৰেশ্বনৰ দ্বাৰা ইস্যু কৰা হয়।

যদি আপোনাৰ টেনৰেছৰ কাস্টম ডোমেইনবোৰত SSL নোহোৱা হৈ থাকে, তেন্তে Cloudways SSL ট্যাবটো চাব। যদি তাত এটা wildcard certificate সক্রিয় থাকে, তাক আঁতৰাই দিয়ক, মূল নেটৱৰ্ক ডোমেইনৰ বাবে এটা standard Let's Encrypt certificate পুনৰ ইস্যু কৰক আৰু `WU_CLOUDWAYS_EXTRA_DOMAINS`-ৰ পৰা যিকোনো wildcard এন্ট্ৰী আঁতৰাই দিয়ক। তাৰ পিছত এটা ডোমেইন মেপিং পুনৰ ট্ৰিগাৰ কৰক (বা পৰৱৰ্তীটোৰ বাবে অপেক্ষা কৰক) আৰু ইন্টিগ্ৰেশ্বনটোৱে পুনৰ per-domain certificate ইস্যু কৰিবলৈ আৰম্ভ কৰিব।

## সমস্যা সমাধান (Troubleshooting) {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- আপোনাৰ ইমেইল আৰু API key শুদ্ধ নেকি পৰীক্ষা কৰক।
- আপোনাৰ server আৰু application ID শুদ্ধ নেকি চাব।
- নিশ্চিত কৰক যে আপোনাৰ Cloudways accountত প্ৰয়োজনীয় অনুমতি আছে।

### SSL Certificate Issues {#ssl-certificate-issues}
- Cloudways تطلب کہ ڈومینز کے پاس اپنے سرور کی طرف صحیح DNS ریکارڈز ہونے چاہئیں اس سے پہلے SSL certificates جاری کرنے سے۔
- یہ انٹیگریشن SSL certificates مانگنے سے پہلے DNS records کو چیک کرتی ہے۔
- اگر SSL certificates جاری نہیں ہو رہی ہیں، تو چیک کریں کہ آپ کی ڈومینز آپ کے سرور کے IP address پر ٹھیک طریقے سے پوائنٹ کر رہی ہیں۔
- **Per-tenant custom domains stuck without SSL؟** Cloudways ایپلیکیشن کے SSL Certificate ٹیب میں چیک کریں۔ اگر کوئی وائلڈ کارڈ certificate (جو دستی طور پر انسٹال ہو یا `*.your-network.com` کو کور کرتا ہے) فعال ہے، تو Cloudways انفرادی طریقے سے مپ کیے گئے کسٹم ڈومینز کے لیے Let's Encrypt certificates جاری نہیں کرے گا۔ اسے ایک معیاری Let's Encrypt certificate سے تبدیل کریں جو صرف مین نیٹ ورک ڈومین (`your-network.com`, `www.your-network.com`) کو کور کرتا ہو اور `WU_CLOUDWAYS_EXTRA_DOMAINS` سے کوئی بھی وائلڈ کارڈ اندراج ہٹا دیں۔ پھر ایک ڈومین مپ دوبارہ شروع کریں (یا اگلے کے لیے انتظار کریں) اور انٹیگریشن پر ڈومین کے حساب سے certificates مانگے گی۔

### Domain Not Added {#domain-not-added}
- کسی بھی ایرر میسج کے لیے Ultimate Multisite logs چیک کریں۔
- تصدیق کریں کہ ڈومین پہلے ہی Cloudways میں شامل تو نہیں ہے۔
- یقینی بنائیں کہ آپ کا Cloudways پلان ان ڈومینز کی تعداد کو سپورٹ کرتا ہے جو آپ شامل کر رہے ہیں۔
