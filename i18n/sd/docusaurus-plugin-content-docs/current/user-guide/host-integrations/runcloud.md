---
title: RunCloud انٽيغريشن
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integration

## خلاصہ (Overview) {#overview}
RunCloud هڪ ڪلاڊ-بيل سرور مانيجمنٽ پليٽ فارم آهي جيڪو توهان کي آساني سان پنهنجي ڪلاڊ سرورن تي ويب ايپليڪيشنز کي نصب ڪرڻ ۽ منظم ڪرڻ جي اجازت ڏئي ٿو. هي ان انٽيغريتي Ultimate Multisite ۽ RunCloud بابت آٽومويڪ اڊين سمڪنگ (domain syncing) ۽ SSL سرٽيفڪيٽ مانيجمنٽ کي ڪندا آهن.

## خصوصيتون (Features) {#features}
- آٽومويڪ ڊو메ن سمڪنگ (Automatic domain syncing)
- SSL سرٽيفڪيٽ مانيجمنٽ (SSL certificate management)
- جڏهن ميپنگز (mappings) ختم ٿين ٿيون ته ڊو메ن کي ختم ڪرڻ (Domain removal when mappings are deleted)

## گهرجن (Requirements) {#requirements}
توهان پنهنجي `wp-config.php` فائل ۾ هي constants تعريف ڪندا رهيا:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## ترتیب ڏيڻ جا تعليمات (Setup Instructions) {#setup-instructions}

### 1. پنهنجو RunCloud API ڪردار حاصل ڪريو (Get Your RunCloud API Credentials) {#1-get-your-runcloud-api-credentials}

1. پنهنجي RunCloud dashboard ۾ لاگ ان ڪريو
2. "User Profile" تي وڃو (اوپري ڏنل ڪنڊ ۾ پنهنجي پروفائيل پکڙ تي ڪلڪ ڪريو)
3. منيو (menu) کان "API" چونڊيو
4. جيڪڏهن توهان جي API Key ناهي ته "Generate API Key" تي ڪلڪ ڪريو
5. پنهنجي API Key ۽ API Secret کي ڪاپي ڪريو

### 2. پنهنجا سرور ۽ ايپ ID حاصل ڪريو (Get Your Server and App IDs) {#2-get-your-server-and-app-ids}

1. پنهنجي RunCloud dashboard ۾، "Servers" تي وڃو
2. ان سرور کي چونڊيو جتي توهان جو WordPress multisite نصب آهي
3. Server ID URL ۾ ڏسڻ لائق آهي: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications" تي وڃو ۽ پنهنجي WordPress ايپليڪيشن کي چونڊيو
5. App ID URL ۾ ڏسڻ لائق آهي: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php ۾ constants شامل ڪريو (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

هي هي constants پنهنجي `wp-config.php` فائل ۾ شامل ڪريو:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. انٽيغريتي کي فعال ڪريو (Enable the Integration) {#4-enable-the-integration}

1. پنهنجي WordPress admin ۾، Ultimate Multisite > Settings تي وڃو
2. "Domain Mapping" 탭 تي وينو
3. "Host Integrations" تي نیچے سکرول کرو
4. RunCloud integration کي Enable کرو
5. "Save Changes" تي کلک کرو

## اهو ڪيئن کام ڪري ٿو (How It Works) {#how-it-works}

جڏهن Ultimate Multisite ۾ ڪنه دومين (domain) کي map ڪيو ويندو آهي:

1. Integration RunCloud جي API تائين درخواست پيحل نهجي توهان جي ايمپليڪيشن ۾ دومين شامل ڪرڻ لاءِ ڇاجهندي
2. جيڪڏهن دومين ڪاميابن سان شامل ٿئي ٿو، ته integration SSL certificates کي دوبارہ deploy به ڪري ڇڏي ويندو
3. جڏهن ڪنه دومين جو mapping ختم ڪيو ويندو آهي، ته integration ان دومين کي RunCloud کان کڻي ڇڏي ويندو

Subdomain installation لاءِ، integration توهان جي network ۾ نئين sites شامل ٿيڻ وقت RunCloud ۾ subdomain جو creation خود بخاري طور تي سنڀالندو.

## گلافي (Troubleshooting) {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- تصديق ڪريو ته توهان جا API credentials صحيح آهن
- چیک ڪريو ته توهان جي server ۽ app IDs صحيح آهن
- ٺيڪ ڪريو ته توهان جي RunCloud account کي ضرورتان وارن permissions حاصل آهن

### SSL Certificate Issues {#ssl-certificate-issues}
- RunCloud کي SSL certificates जारी ڪرڻ ۾ ڪجهه وقت لاڳو ٿي سگهي ٿو
- تصديق ڪريو ته توهان جا domains توهان جي server جي IP address تي صحيح طور تي پوائنٽ ڪيا ويا آهن
- توهان جي ايمپليڪيشن لاءِ RunCloud جي SSL settings کي چیک ڪريو

### Domain Not Added {#domain-not-added}
- ڪنه به error messages لاءِ Ultimate Multisite logs کي چیک ڪريو
- تصديق ڪريو ته دومين پہلے تنهنجي RunCloud ۾ شامل نه آهي
- ٺيڪ ڪريو ته توهان جو RunCloud plan متعدد domains کي سپورٽ ڪري ٿو
