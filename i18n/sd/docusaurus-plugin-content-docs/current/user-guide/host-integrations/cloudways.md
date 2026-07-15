---
title: ڪلاڊويز انٽيغريشن
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integration

## خلاصہ (Overview) {#overview}
Cloudways هڪ مانيجڊ ڪلاؤڈ هوستنگ پليٽ فارم آهي جيڪو توهان کي مختلف ڪلاؤڈ پروائيڊرز جهڙوڪ DigitalOcean، AWS، Google Cloud ۽ ٻين تي WordPress سائٽس پوسٽ ڪرڻ جي اجازت ڏئي ٿو. هي ان انٽيغريشن سان Ultimate Multisite ۽ Cloudways بابت آٽومويڪ ايميل سنڪرينگ ۽ SSL سرٽيفڪيٽ جو انتظام خود بخود ٿيندو آهي.

## خصوصيتون (Features) {#features}
- آٽومويڪ ڊو메ن سنڪرينگ (Automatic domain syncing)
- SSL سرٽيفڪيٽ جو انتظام (SSL certificate management)
- اضافي ڊو메ن جي سگهه (Support for extra domains)
- SSL سرٽيفڪيٽ لاءِ DNS تصديق (DNS validation for SSL certificates)

## گهرجيون (Requirements) {#requirements}
توهان کي پنهنجي `wp-config.php` فائل ۾ هي constants تعريف ڪرڻ گهرجن:

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

## ترتیب ڏيڻ جي تعليمات (Setup Instructions) {#setup-instructions}

### 1. پنهنجي Cloudways API ڪردار حاصل ڪريو (Get Your Cloudways API Credentials) {#1-get-your-cloudways-api-credentials}

1. پنهنجي Cloudways dashboard ۾ لاگ ان ڪريو
2. "Account" > "API Keys" تي وڃو
3. جيڪڏهن توهان جي پاسي API key ناهي ته هڪ API key جنريٽ ڪريو
4. پنهنجو ايميل ۽ API key ڪاپي ڪريو

### 2. پنهنجي سرور ۽ ايپليڪيشن ID حاصل ڪريو (Get Your Server and Application IDs) {#2-get-your-server-and-application-ids}

1. پنهنجي Cloudways dashboard ۾، "Servers" تي وڃو
2. ان سرور کي چونڊيو جتي توهان جو WordPress multisite پوسٽ آهي
3. Server ID URL ۾ ڏسڻ لائق آهي: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" تي وڃو ۽ پنهنجي WordPress application کي چونڊيو
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
`WU_CLOUDWAYS_EXTRA_DOMAINS` માં `*.your-network.com` (અથવા તમારા પોતાના નેટવર્કના કોઈપણ સબડોમેન પેટર્ન) ઉમેરશો નહીં. શા માટે આ પ્રતિબંધિત છે તે નીચે [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall) જુઓ, જે તમને દરેક ટેન્નેન્ટ માટે SSL સર્ટિફિકેટ જારી કરવામાં અટકાવે છે.
:::

### 4. ઇન્ટિગ્રેશન ચાલુ કરો (Enable the Integration) {#4-enable-the-integration}

1. તમારા WordPress admin માં જાઓ: Ultimate Multisite > Settings
2. "Domain Mapping" ટેબ પર જાઓ
3. નીચે સ્ક્રોલ કરીને "Host Integrations" સુધી જાઓ
4. Cloudways ઇન્ટિગ્રેશનને એન્એબલ કરો
5. "Save Changes" પર ક્લિક કરો

## તે કેવી રીતે કામ કરે છે (How It Works) {#how-it-works}

### ડોમેન સિન્ક કરવું (Domain Syncing) {#domain-syncing}

જ્યારે Ultimate Multisite માં કોઈ ડોમેન મેપ કરવામાં આવે છે:

1. ઇન્ટિગ્રેશન હાલમાં મેપ કરેલા બધા ડોમેન્સ મેળવે છે
2. તે નવી ડોમેનને યાદીમાં ઉમેરે છે (જો લાગુ પડતું હોય તો www વર્ઝન સાથે)
3. તે સંપૂર્ણ યાદી API દ્વારા Cloudways ને મોકલે છે
4. Cloudways તમારા એપ્લિકેશન માટે ડોમેન એલિએસીસ અપડેટ કરે છે

નોંધ: Cloudways API ને દરેક વખતે માત્ર વ્યક્તિગત ડોમેન્સ ઉમેરવા અથવા દૂર કરવાને બદલે ડોમેન્સની સંપૂર્ણ યાદી મોકલવાની જરૂર હોય છે.

### SSL સર્ટિફિકેટ મેનેજમેન્ટ (SSL Certificate Management) {#ssl-certificate-management}

ડોમેન્સ સિન્ક થયા પછી:

1. ઇન્ટિગ્રેશન તપાસે છે કે કયા ડોમેન્સ તમારા સર્વર તરફ નિર્દેશ કરતા માન્ય DNS રેકોર્ડ ધરાવે છે
2. તે Cloudways ને તે ડોમેન્સ માટે Let's Encrypt SSL સર્ટિફિકેટ ઇન્સ્ટોલ કરવા વિનંતી કરે છે
3. Cloudways SSL સર્ટિફિકેટ જારી કરવાની અને ઇન્સ્ટોલ કરવાની જવાબદારી લે છે

سڀني هاڻي ڪلائڊويز کان **ستاندارڊ** (وائلڊڪار نه هجڻ وارو) ليتس اينڪرٽيشن طلب ڪري ٿو. جيڪڏهن `WU_CLOUDWAYS_EXTRA_DOMAINS` ۾ وائلڊڪار پيٽرن ڏني ويندي آهي، ته SSL درخواست کان اڳ جو `*.` کي کٽي ڇڏي ويندو آهي — وائلڊڪار خود اسان جي هيٺيان انٽيغريشن طرف کان ڪنه به صورت ۾ نصب نه ٿيندو. Cloudways تي وائلڊڪار سرٽيفڪيٽ استعمال ڪرڻ لاءِ توهان کي اهو هوائي (manually) نصب ڪرڻو پوندو، پر اهو ڪيلڪ ڪم ڪندڙ دوميني لاءِ ليتس اينڪرٽيشن کي روڪي ڇڏيندو آهي جيڪا مپ ٿيل ڪسٽم دومينيون (نڊل ذيلي ڏسو هيٺ ڏسو).

## اضافي دومينيون (Extra Domains) {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant توهان کي اهڙيون **ٻاهرين** دومينيون بيان ڪرڻ جي اجازت ڏئي ٿو جيڪي هميشه Cloudways ايپليڪيشن جي اڙين (aliases list) تي رکيل رهڻ گهرجن. ان جو استعمال هيٺ ڏنل لاءِ ڪريو:

- اهڙيون ٻاهري دومينيون جيڪي Ultimate Multisite پاران منظم نه ڪيا ويا آهن (مثال طور، هڪ الگ مارڪيٽنگ سائيٽ جيڪا اها ئي Cloudways ايپليڪيشن استعمال ڪري ٿي).
- اهڙيون پڪڊ يا اسٽيجنگ دومينيون جيڪي توهان ان ايپليڪيشن جي اڙين تي رکڻ چاهيو.

اپنه پنهنجي نڪرڪ (network) جو دوميني وائلڊڪار لاءِ هن constant جو استعمال **نانه** ڪريو (مثال طور، `*.your-network.com`). وائلڊڪار SSL جي هيٺ ڏنل صورتحال کي ڏسو.

## اهم شيء — وائلڊڪار SSL جي صورتحال {#important--wildcard-ssl-pitfall}

Cloudways جي डिफلت سرجيءَ کان پيچيدار غلطي اهو آهي ته `WU_CLOUDWAYS_EXTRA_DOMAINS` ۾ `*.your-network.com` جهڙو ڪو وائلڊڪار شامل ڪريو، يا ان وائلڊڪار لاءِ Cloudways جي وائلڊڪار SSL سرٽيفڪيٽ کي هيٺ ڏنل طرح هوائي (manually) نصب ڪريو.

**جيڪڏهن توهان اهو ڪيو ٿا، ته Cloudways Ultimate Multisite پاران مپ ٿيل هر Tenant دومينيون لاءِ ليتس اينڪرٽيشن ڏناءڻ کان روڪي ڇڏيندو.** Cloudways ايپليڪيشن تي فعال SSL سرٽيفڪيٽ کي هر وقت بدلائي ٿو، ۽ ايپليڪيشن تي پہلے کان موجود وائلڊڪار سرٽيفڪيٽ ان دوميني لاءِ ليتس اينڪرٽيشن جو روڪڻ ڪندو جنهن تي هي انٽيغريشن انحصار ڪري ٿو.

### Ultimate Multisite نڪرڪ لاءِ Cloudways SSL جي سفارش ڪيل ترتیب {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways ایپلیکیشنৰ **SSL Certificate** ট্যাবত, মাত্ৰ `your-network.com` আৰু `www.your-network.com` ক কভৰি থকা এটা **standard Let's Encrypt certificate** ইনষ্টল কৰক — কোনো wildcard নহয়।
2. `*.your-network.com` (বা আপোনাৰ নেটৱৰ্কৰ যিকোনো সাবডোমেইন প্যাটার্ন) `WU_CLOUDWAYS_EXTRA_DOMAINS`-ত ৰাখবেন নহয়। সেই ধ্ৰুপদী ক্ৰমানুৰীটো কেৱল **বাহিৰ** ডোমেইনৰ বাবে ৰাখিব।
3. per-tenant subdomain wildcard টি মাত্ৰ **DNS** লেভেলত সৃষ্টি কৰক (আপোনাৰ Cloudways server IP পইণ্ট কৰি `*.your-network.com`-ৰ বাবে এটা `A` record), যাতে সাবসাইটবোৰ রেজোল্ভ হয়। ব্যক্তিগত ম্যাপ কৰা কাস্টম ডোমেইনৰ বাবে SSL স্বয়ংক্রিয়ভাৱে Let's Encryptৰ জৰিয়তে ইন্টিগ্ৰেশ্বনৰ দ্বাৰা ইস্যু কৰা হয়।

যদি আপোনাৰ টেনৰেণ্টৰ কাস্টম ডোমেইনবোৰ SSL অবিহনে अड्কৈ থাকে, তেন্তে Cloudways SSL ট্যাবটো চাব। যদি তাত এটা wildcard certificate সক্রিয় থাকে, তাক আঁতৰাই দিয়ক, মূল নেটৱৰ্ক ডোমেইনৰ বাবে এটা standard Let's Encrypt certificate পুনৰ ইস্যু কৰক আৰু `WU_CLOUDWAYS_EXTRA_DOMAINS`-ৰ পৰা যিকোনো wildcard এন্ট্ৰী আঁতৰাই দিয়ক। তাৰ পিছত এটা ডোমেইন মেপিং পুনৰ ট্ৰিগাৰ কৰক (বা পৰৱৰ্তীটোৰ বাবে অপেক্ষা কৰক) আৰু ইন্টিগ্ৰেশ্বনটো পুনৰ ডোমেইন-ভিত্তিক certificate ইস্যু কৰিবলৈ আৰম্ভ কৰিব।

## সমস্যা সমাধান (Troubleshooting) {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- আপোনাৰ ইমেইল আৰু API key শুদ্ধ নেকি পৰীক্ষা কৰক।
- আপোনাৰ server আৰু application ID শুদ্ধ নেকি চাব।
- নিশ্চিত কৰক যে আপোনাৰ Cloudways accountত প্ৰয়োজনীয় অনুমতি আছে।

### SSL Certificate Issues {#ssl-certificate-issues}
- Cloudways تطلب کہ ڈومینز کے پاس اپنے سرور کی طرف صحیح DNS ریکارڈز ہونی چاہئیں اس سے پہلے SSL certificates جاری کرنے سے۔
- یہ انٹیگریشن SSL certificates مانگنے سے پہلے DNS records کو چیک کرتی ہے۔
- اگر SSL certificates جاری نہیں ہو رہی ہیں، تو چیک کریں کہ آپ کی ڈومینز آپ کے سرور کے IP address پر صحیح طریقے سے پوائنٹ کر رہی ہیں۔
- **Per-tenant custom domains جو SSL کے بغیر پھنس گئے ہیں؟** Cloudways ایپلیکیشن کے SSL Certificate ٹیب کو چیک کریں۔ اگر کوئی وائلڈ کارڈ certificate (جو دستی طور پر انسٹال ہو یا `*.your-network.com` کو کور کرتا ہے) فعال ہے، تو Cloudways انفرادی طور پر مپ کیے گئے کسٹم ڈومینز کے لیے Let's Encrypt certificates جاری نہیں کرے گا۔ اسے ایک معیاری Let's Encrypt certificate سے تبدیل کریں جو صرف مین نیٹ ورک ڈومین (`your-network.com`, `www.your-network.com`) کو کور کرتا ہو اور `WU_CLOUDWAYS_EXTRA_DOMAINS` میں کسی بھی وائلڈ کارڈ اندراج کو ہٹا دیں۔ پھر ایک ڈومین مپنگ دوبارہ شروع کریں (یا اگلے کے لیے انتظار کریں) اور انٹیگریشن پر ڈومین کے لحاظ سے certificates مانگے گی۔

### Domain Not Added {#domain-not-added}
- کسی بھی ایرر میسج کے لیے Ultimate Multisite logs چیک کریں۔
- تصدیق کریں کہ ڈومین پہلے ہی Cloudways میں شامل تو نہیں ہے۔
- اس بات کو یقینی بنائیں کہ آپ کا Cloudways plan ان ڈومینز کی تعداد کو سپورٹ کرتا ہے جو آپ شامل کر رہے ہیں۔
