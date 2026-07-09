---
title: هوستينجر (hPanel) انٽيغريشن
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) Integration {#hostinger-hpanel-integration}

## جائزہ (Overview) {#overview}

Hostinger هڪ مقبول ويب هاستينگ برائڊر آهي جنهن ان جي ماڊرن ڪنٽرول پينل **hPanel** نامي آهي. Ultimate Multisite Hostinger integration توهان کي Ultimate Multisite ۽ Hostinger جي hPanel بابت دومين سائنڪنگ (domain syncing) خود بخود ڪرڻ جي اجازت ڏئي ٿو، جنهن سان توهان WordPress admin کان ئي دومين ميپنگ ۽ سابڊومين کي خود بخود منظم ڪري سگهو ٿا.

## خصوصيتون (Features) {#features}

- hPanel ۾ خود بخود addon domain جوٺهڻ
- hPanel ۾ خود بخود subdomain جوٺهڻ (subdomain multisite installations لاءِ)
- ميپنگ ختم ڪرڻ کان پوءِ دومين کي حذف ڪرڻ
- hPanel جي دومين مانيجمنٽ API سان سلسلي ۾ آسان ڪنهن

## گهرجيون (Requirements) {#requirements}

Hostinger integration استعمال ڪرڻ لاءِ توهان کي انهن جي ضرورت آهي:

1. Hostinger جو هڪ account جنهن ۾ hPanel تک رسائي هجي
2. Hostinger کان API token
3. توهان جي `wp-config.php` فائل ۾ هي constants تعريف ڪيا وڃن:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

اختياري طور تي، توهان هي به تعريف ڪري سگهو ٿا:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## ترتیب ڏيڻ جا تعليمات (Setup Instructions) {#setup-instructions}

### 1. پنهنجو Hostinger API Token جنريٽ ڪريو {#1-generate-your-hostinger-api-token}

1. پنهنجي Hostinger account ۾ لاگ ان ڪريو ۽ hPanel تک رسائي حاصل ڪريو
2. **Account Settings** → **API Tokens** تي وڃو
3. **Create New Token** تي ڪلڪ ڪريو
4. پنهنجي token کي هڪ وضاحت سان نام ڏيو (مثال: "Ultimate Multisite")
5. ضروري اجازتون منتخب ڪريو:
   - Domain management
   - Subdomain management
6. جنريٽ ٿيل token کي كوب ڪريو ۽ محفوظ ڪريو

### 2. پنهنجي Account ID جوڳڻو {#2-find-your-account-id}

1. hPanel ۾، **Account Settings** → **Account Information** تي وڃو
2. توهان جي Account ID هن صفحا تي ڏيکاري ويندي آهي
3. هي ID كوب ڪري محفوظ ڪريو ته جيئن توهان نالي قدم لاءِ استعمال ڪري سگهو ٿا

### 3. wp-config.php ۾ constants شامل ڪريو {#3-add-constants-to-wp-configphp}

هي هي constants پنهنجي `wp-config.php` فائل ۾ شامل ڪريو:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

جيڪڏهن توهان جو Hostinger جو ڪアカウント ڪنهن ٻئي API endpoint جو استعمال ڪري ٿو، ته توهان ان کي خود مطابق بنائ سگهو ٿا:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Integration کي فعال ڪرڻ (Enable the Integration) {#4-enable-the-integration}

1. پنهنجي WordPress admin ۾، **Ultimate Multisite > Settings** تي وڃو
2. **Domain Mapping** ٽاب تي وينجو
3. **Host Integrations** تائين سکرول ڪريو
4. **Hostinger (hPanel)** integration کي فعال ڪريو
5. **Save Changes** تي ڪلڪ ڪريو

## اهو ڪيئن کام ڪري ٿو (How It Works) {#how-it-works}

### Addon Domains (اضافي دومينيوم) {#addon-domains}

جيڪڏهن توهان Ultimate Multisite ۾ هڪ دومين نام مپ ڪريو ٿا:

1. Integration Hostinger جي API تائين درخواست پيحل نهجي، دومين کي addon domain طور شامل ڪرڻ لاءِ
2. دومين کي توهان جي root directory تي پوائنٽ ڪرڻ لاءِ configure ڪيو ويندو آهي
3. جڏهن ڪنهن دومين جو مپ ختم ڪيو ويندو آهي، ته integration خود بخود hPanel کان addon domain کي ختم ڪري ڇڏي ٿو

### Subdomains (سڀ دومينيوم) {#subdomains}

Subdomain multisite installation لاءِ، جڏهن هڪ نئين سائيٽ جوٺي ويندي آهي:

1. Integration پوري دومين کان subdomain جو حصو نکالندو آهي
2. اهو subdomain کي شامل ڪرڻ لاءِ Hostinger جي API تائين درخواست پيحل نهجي
3. subdomain کي توهان جي root directory تي پوائنٽ ڪرڻ لاءِ configure ڪيو ويندو آهي

## اهم نوٽس (Important Notes) {#important-notes}

- Integration توهان جي account سان رابطو ڪرڻ لاءِ Hostinger جي REST API جو استعمال ڪري ٿو
- توهان جي API token ۾ دومين ۽ subdomain جي management لاءِ ضروري اجازتون hon ٿيون
- Integration DNS configuration کي سنڀالندو نه، دومينيون پہلے تائين توهان جي Hostinger account تي پوائنٽ ڪئي هجڻ گهرجن
- API requests HTTPS تي محفوظ طور تي ڪيا ويندا آهن
- پنهنجي API token کي محفوظ رکجو ۽ ان کي ڪڏهن به پبلڪ نه ڪريو

## گلاپ (Troubleshooting) {#troubleshooting}

### API Connection Issues {#api-connection-issues}

API token درست آهي ۽ ختم نه ٿي آهي، اهو تصديق ڪريو

اکونٽ ID درست آهي يا نه، اهو چیک ڪريو

اهو ڊومين مانيجمنٽ لاءِ API token تائين ضرورتان آهن، اهو يقيني بڻايو

Hostinger اڪونٽ فعال آهي ۽ سٺي حالت ۾ آهي، اهو تصديق ڪريو

### ڊومين شامل نه ٿيو {#domain-not-added}

Ultimate Multisite جي لاگز ۾ ڪا غلطي جو پيغام ڏسو

تصديق ڪريو ته ڊومين توهان جي Hostinger اڪونٽ ۾ پہلے کان شامل ناهي

اهو يقيني بڻايو ته توهان جي Hostinger اڪونٽ انڊ دومينن لاءِ محدود نه ٿيو آهي

تصديق ڪريو ته ڊومين صحيح طرح توهان جي Hostinger نام سرورن (nameservers) تي پوائنٽ ڪيل آهي

### SSL سرٽيفڪيٽ جو مسئلو {#ssl-certificate-issues}

اهو ان ايڪتيگريشن SSL سرٽيفڪيٽ ڏيڻ ۾ مدد نه ڪندو

Hostinger عام طور تي AutoSSL جي ذريعي مفت SSL سرٽيفڪيٽ فراهم ڪري ٿو

توه سست **hPanel** ۾ **SSL/TLS** تحت SSL سرٽيفڪيٽن کي خود مانيج ڪري سگهو ٿا

ٻئي طرف، Hostinger جي AutoSSL فيچر سان Let's Encrypt استعمال ڪري سگهو ٿا

## مدد (Support) {#support}

Hostinger ايڪتيگريشن سان اضافي مدد لاءِ، مهرباني ڪري ان تي رجوع ڪريو:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
