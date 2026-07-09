---
title: WP Engine انٽيغريشن
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Integration {#wp-engine-integration}

## جائزہ (Overview) {#overview}
WP Engine هڪ پریميم مانيجڊ ورڊپريس هاستينگ پليٽ فارم آهي جيڪو ورڊپريس سائٽن لاءِ بهترين پرفارمنس، سيڪيورٽي ۽ سڪيليبلٽي فراهم ڪري ٿو. هي ان انٽيغريشن جي مدد سان Ultimate Multisite ۽ WP Engine جو آڊين سمڪڻ (domain syncing) خود بخود ٿئي ٿو.

## خصوصيتون (Features) {#features}
- خود بخود آڊين سمڪڻ (Automatic domain syncing)
- ملٽي سائيٽ انستاليشن لاءِ سبڊومين (Subdomain support)
- WP Engine جي موجودہ سسٽم سان ہم آہنگ انٽيغريشن (Seamless integration with WP Engine's existing systems)

## گهرجيون (Requirements) {#requirements}
هي انٽيغريشن خود بخود چیک ڪري ٿو ته توهان WP Engine تي هاستينگ ڪيو آهي يا نه ۽ بيلين WP Engine API جو استعمال ڪري ٿو. جيڪڏهن WP Engine plugin فعال ۽ صحيح طرح کان configure ڪيل هجي ته ڪنهن به اضافي configuration جي ضرورت ناهي.

پر، جيڪڏهن توهان کي انٽيغريشن کي خود مانيوال (manually) configure ڪرڻو آهي، ته توهان پنهنجي `wp-config.php` فائل ۾ هيٺ ڏنل ڪن ٿا:

```php
define('WPE_APIKEY', 'your_api_key'); // ترجيح ڪيل طريقو
// يا
define('WPE_API', 'your_api_key'); // متبادل طريقو
```

## ترتیب جو تعليمات (Setup Instructions) {#setup-instructions}

### 1. WP Engine Plugin جي تصديق ڪريو (Verify WP Engine Plugin) {#1-verify-wp-engine-plugin}

 جيڪڏهن توهان WP Engine تي هاستينگ ڪيو آهي، ته WP Engine plugin پہلے کان انستال ٿيل ۽ فعال هجڻ گهرجي. هي تصديق ڪريو ته:

1. WP Engine plugin فعال آهي
2. فائل `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` موجود آهي

### 2. انٽيغريشن کي فعال ڪريو (Enable the Integration) {#2-enable-the-integration}

1. پنهنجي WordPress admin ۾، Ultimate Multisite > Settings تي وڃو
2. "Domain Mapping" 탭 ڏانهن وڃو
3. "Host Integrations" تائين سکرول ڪريو
4. WP Engine انٽيغريشن کي فعال ڪريو (Enable)
5. "Save Changes" تي ڪلڪ ڪريو

## اهو ڪيئن کام ڪري ٿو (How It Works) {#how-it-works}

### آڊين سمڪڻ (Domain Syncing) {#domain-syncing}

جڏهن Ultimate Multisite ۾ هڪ آڊين مپ ڪيو ويندو آهي:

1. انٽيغريشن WP Engine API جو استعمال ڪري توهان جي WP Engine installation ۾ آڊين شامل ڪرڻ لاءِ
2. WP Engine آڊين جي configuration ۽ SSL سرٽيفڪيٽ ڏيڻ (issuance) کي سنڀالندو
3. جڏهن ڪو آڊين مپ ختم ڪيو ويندو آهي، ته انٽيغريشن آڊين کي WP Engine کان کين ختم ڪري ڇڏيندي

### سبڊومين سپورٽ (Subdomain Support) {#subdomain-support}

सबडोमेन मल्टीसाइट انسٹالیشنز لاءِ:

1. نئين سائٹ بناوندا هر سبڈومین کي WP Engine ۾ شامل ڪندو آهي
2. WP Engine سبڊومین جي ڪيگيرن (configuration) جو نظام سنڀالندو آهي
3. جڏهن ڪا سائيٽ مڪمل طور تي حذف ٿي ويندي، ته ان ايڪتيگريشن کان واري سبڊومین کي WP Engine کان کين ختم ڪري ڇڏي ويندو

## اهم نوٽس (Important Notes) {#important-notes}

### وائلڊ ڪيٽل دومينز (Wildcard Domains) {#wildcard-domains}

سبڊومینز جي متعدد سائيٽن لاءِ، اهو مشورو آهي ته توهان WP Engine جي سپورٽ سان رابطو ڪريو ۽ وائلڊ ڪيٽل دومين جو ڪيگيرن جو نظام طلب ڪريو. ان سان تمام سبڊومینز کي ان هڪ هڪ شامل ڪرڻ جي ضرورت کان سواءِ خود بخود کام ڪرڻ گهرجي.

### SSL سرٽيفڪيٽس (SSL Certificates) {#ssl-certificates}

WP Engine هن ايڪتيگريشن ذريعي شامل ڪيل سڀني دومينز لاءِ SSL سرٽيفڪيٽ جو ڇڏڻ ۽ تجديد خود بخود سنڀالندو آهي. ان لاءِ ڪا اضافي ڪيگيرن جي ضرورت نه پوندي.

## گلاي (Troubleshooting) {#troubleshooting}

### API ڪنهن مسئلن ۾ {#api-connection-issues}
- تصديق ڪريو ته WP Engine plugin فعال آهي ۽ صحيح طرح کان ڪيگير ڪيل آهي
- جيڪڏهن توهان خود API key جو تعريف ڪيو آهي، ته تصديق ڪريو ته اهو صحيح آهي
- جيڪڏهن توهان کي API سان ڪا گهٽيءَ ٿي رهي آهي ته WP Engine جي سپورٽ سان رابطو ڪريو

### دومين شامل نه ٿيڻ {#domain-not-added}
- ڪنهن به غلطي جو پيغام ڏسڻ لاءِ Ultimate Multisite جا logs ضرور ڏسو
- تصديق ڪريو ته دومين WP Engine ۾ پہلے کان شامل نه آهي
- ٺهيل رڳو اهو يقيني بڻايو ته توهان جي WP Engine plan توهان جيڪا دومينز شامل ڪري رهيا آهيون ان تعداد کي سپورٽ ڪندو آهي

### سبڊومین جو مسئلو {#subdomain-issues}
- جيڪڏهن سبڊومینز کام نه ڪن ٿيون، ته وائلڊ ڪيٽل دومين جو ڪيگيرن طلب ڪرڻ لاءِ WP Engine جي سپورٽ سان رابطو ڪريو
- تصديق ڪريو ته توهان جي DNS setings مائن ۽ سبڊومینز لاءِ صحيح طرح کان ڪيل آهن
