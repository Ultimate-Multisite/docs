---
title: RunCloud انٽيغريشن
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integration

## جائزہ (Overview)
RunCloud هڪ ڪلاڊ-بيل سرور مانيجمنٽ پليٽ فارم آهي جيڪو توهان کي آساني سان پنهنجي ڪلاڊ سرورن تي ويب ايپليڪيشنز کي نصب ڪرڻ ۽ منظم ڪرڻ جي اجازت ڏئي ٿو. هي ان انٽيغريتي Ultimate Multisite ۽ RunCloud بابت آٽومويڪ اڊين سمڪينگ (domain syncing) ۽ SSL سرٽيفڪيٽ مانيجمنٽ کي خود بخود ڪندي فراهم ڪري ٿي.

## خصوصيتون (Features)
- آٽومويڪ ڊو메ن سمڪينگ (Automatic domain syncing)
- SSL سرٽيفڪيٽ مانيجمنٽ (SSL certificate management)
- جڏهن ميپنگز حذف ڪيا ويندا ته ڊو메ن جو حذف ٿي وڃي (Domain removal when mappings are deleted)

## گهرجن (Requirements)
توهان کي پنهنجي `wp-config.php` فائل ۾ هي constant define ڪرڻ گهرجي:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## ترتیب ڏيڻ جا تعليمات (Setup Instructions)

### 1. پنهنجو RunCloud API ڪردار حاصل ڪريو (Get Your RunCloud API Credentials)

1. پنهنجي RunCloud dashboard تي لاگ ان ڪريو
2. "User Profile" تي وڃو (اوپري ڏنل ڪنڊ ۾ پنهنجي پروفائيل پکيئر تي ڪلڪ ڪريو)
3. منيو کان "API" چونڊيو
4. جيڪڏهن توهان کي اڃا API Key ناهي آهي ته "Generate API Key" تي ڪلڪ ڪريو
5. پنهنجي API Key ۽ API Secret کي ڪاپي ڪريو

### 2. پنهنجي سرور ۽ APP ID حاصل ڪريو (Get Your Server and App IDs)

1. پنهنجي RunCloud dashboard ۾، "Servers" تي وڃو
2. ان سرور کي چونڊيو جتي توهان جو WordPress multisite نصب آهي
3. Server ID URL ۾ ڏسڻ لائق آهي: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications" تي وڃو ۽ پنهنجي WordPress application کي چونڊيو
5. App ID URL ۾ ڏسڻ لائق آهي: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php ۾ constant شامل ڪريو (Add Constants to wp-config.php)

هي هي constants پنهنجي `wp-config.php` فائل ۾ شامل ڪريو:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. انٽيغريتي کي فعال ڪريو (Enable the Integration)

1. پنهنجي WordPress admin (ادمین) ۾، Ultimate Multisite > Settings تي وڃو
2. "Domain Mapping" ٽيپ تي وينجو
3. "Host Integrations" تي لائي گهرائڻ وارن حصي تائين سکرول ڪريو
4. RunCloud integration کي Enable ڪريو
5. "Save Changes" تي ڪلڪ ڪريو

## اهو ڪيئن کام ڪري ٿو (How It Works)

جڏهن Ultimate Multisite ۾ ڪنه ڊومين کي map ڪيو ويندو آهي:

1. Integration RunCloud جي API تائين هڪ درخواست پيجي ٿو ته ڊومين کي توهان جي ايمپليڪيشن ۾ شامل ڪرڻ لاءِ
2. جيڪڏهن ڊومين ڪاميابن سان شامل ٿئي ٿو، ته integration SSL certificates کي دوبارہ deploy به ڪري ڇڏيندو
3. جڏهن ڪنه ڊومين جو mapping ختم ڪيو ويندو آهي، ته integration RunCloud کان ڊومين کي ختم ڪري ڇڏيندو

Subdomain installation لاءِ، integration توهان جي نڪر (network) ۾ نئين سائٽس شامل ٿيڻ وقت RunCloud ۾ subdomain جو creation خود بخاري طور تي سنڀالندو.

## گريلنگ (Troubleshooting)

### API Connection Issues
- تصديق ڪريو ته توهان جا API credentials صحيح آهن
- چیک ڪريو ته توهان جي server ۽ app IDs صحيح آهن
- ٺيڪ ڪريو ته توهان جو RunCloud account ان لازمي صلاحيتون رکي ٿو

### SSL Certificate Issues
- RunCloud کي SSL certificates जारी ڪرڻ ۾ ڪجهه وقت لڳي سگهي ٿو
- تصديق ڪريو ته توهان جا domains توهان جي server جي IP address تي صحيح طور تي پوائنٽ ڪن ٿا
- توهان جي ايمپليڪيشن لاءِ RunCloud جي SSL settings کي چیک ڪريو

### Domain Not Added
- ڪنه به غلط ميساج لاءِ Ultimate Multisite logs کي ڏسو
- تصديق ڪريو ته ڊومين RunCloud ۾ پريشان نه آهي
- ٺيڪ ڪريو ته توهان جو RunCloud plan متعدد domains کي سپورٽ ڪري ٿو
