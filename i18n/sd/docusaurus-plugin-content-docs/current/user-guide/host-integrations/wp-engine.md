---
title: WP Engine انٽيغريشن
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Integration

## جائزہ (Overview) {#overview}
WP Engine هڪ پریميم مانيجڊ ورڊپريس هاستينگ پليٽ فارم آهي جيڪو ورڊپريس سائٽن لاءِ بهترين پرفارمنس، سڪيورٽي ۽ سکيليبلٽي فراهم ڪري ٿو. هي ان انٽيغريشن سان Ultimate Multisite ۽ WP Engine جي وچ ۾ دومين سمڪن (domain syncing) خود بخود ٿي ويندي آهي.

## خصوصيتون (Features) {#features}
- خود بخود دومين سمڪن (Automatic domain syncing)
- مانيسائٽ (multisite installations) لاءِ سبڊومين (subdomain) جي مدد
- WP Engine جي موجودہ سسٽم سان آسان انٽيغريشن

## ضرورتون (Requirements) {#requirements}
هي انٽيغريشن خود بخود چیک ڪري ٿو ته توهان WP Engine تي هاستينگ ڪيو آهي يا نه ۽ بيلين WP Engine API جو استعمال ڪري ٿو. جيڪڏهن WP Engine plugin فعال ۽ صحيح طرح کان configure ڪيل هجي ته ڪنهن به اضافي configuration جي ضرورت ناهي.

پر، جيڪڏهن توهان کي انٽيغريشن کي خود مانيوال (manually) configure ڪرڻو آهي، ته توهان پنهنجي `wp-config.php` فائل ۾ ان وچ ۾ هڪ constant تعريف ڪري سگهو ٿا:

```php
define('WPE_APIKEY', 'your_api_key'); // ترجيح ڪيل طريقو
// يا
define('WPE_API', 'your_api_key'); // متبادل طريقو
```

## ترتیب جو تعليمات (Setup Instructions) {#setup-instructions}

### 1. WP Engine Plugin جي تصديق ڪريو (Verify WP Engine Plugin) {#1-verify-wp-engine-plugin}

 جيڪڏهن توهان WP Engine تي هاستينگ ڪيو آهي، ته WP Engine plugin پہلے کان نصب ۽ فعال ٿي چڪو هجڻ گهرجي. هي تصديق ڪريو ته:

1. WP Engine plugin فعال آهي
2. فائل `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` موجود آهي

### 2. انٽيغريشن کي فعال ڪريو (Enable the Integration) {#2-enable-the-integration}

1. پنهنجي WordPress admin ۾، Ultimate Multisite > Settings تي وڃو
2. "Domain Mapping" 탭 ڏانهن وڃو
3. "Host Integrations" تائين سکرول ڪريو
4. WP Engine انٽيغريشن کي فعال ڪريو
5. "Save Changes" تي کلڪ ڪريو

## اهو ڪيئن کام ڪري ٿو (How It Works) {#how-it-works}

### دومين سمڪن (Domain Syncing) {#domain-syncing}

جڏهن Ultimate Multisite ۾ هڪ دومين مانيپ ڪري وڃي:

1. انٽيغريشن WP Engine API جو استعمال ڪري توهان جي WP Engine installation ۾ دومين شامل ڪرڻ لاءِ ڪندو
2. WP Engine دومين جي configuration ۽ SSL certificate ڏيڻ جو کام ڪندو
3. جڏهن ڪنهن دومين سمڪ کي ختم ڪيو وڃي، ته انٽيغريشن ان دومين کي WP Engine کان کڻي ڇڏي ويندي

### سبڊومين جي مدد (Subdomain Support) {#subdomain-support}

सबडोमेन मल्टीसाइट इन्स्टलेसनको लागि:

१. यो इन्टिग्रेशनमा नयाँ साइट बनाउँदा प्रत्येक सबडोमेनलाई WP Engine मा थप्न जोडिएको हुन्छ।
२. WP Engine ले सबडोमेन कन्फिगरेसन ह्यान्डल गर्छ।
३. जब कुनै साइट डिलिट गरिन्छ, तब यो इन्टिग्रेशनले WP Engine बाट त्यो सबडोमेन हटाउँछ।

## महत्त्वपूर्ण नोटहरू {#important-notes}

### वाइल्डकार्ड डोमेन (Wildcard Domains) {#wildcard-domains}

सबडोमेन मल्टीसाइट इन्स्टलेसनको लागि, हामी सिफारिस गर्छौं कि तपाईं WP Engine सपोर्टलाई सम्पर्क गरेर वाइल्डकार्ड डोमेन कन्फिगरेसनको लागि अनुरोध गर्नुहोस्। यसले प्रत्येक सबडोमेन छुट्टाछुट्टै थप्नुपर्ने आवश्यकता बिना सबै सबडोमेनहरू स्वचालित रूपमा काम गर्न दिन्छ।

### SSL प्रमाणपत्रहरू (SSL Certificates) {#ssl-certificates}

यो इन्टिग्रेशन मार्फत थपिएका सबै डोमेनहरूको लागि WP Engine ले SSL प्रमाणपत्र जारी गर्ने र नवीकरण गर्ने काम स्वचालित रूपमा गर्छ। कुनै अतिरिक्त कन्फिगरेसनको आवश्यकता पर्दैन।

## समस्या निवारण (Troubleshooting) {#troubleshooting}

### API कनेक्टिभिटीका समस्याहरू {#api-connection-issues}
- WP Engine प्लगइन सक्रिय छ र सही तरिकाले कन्फिगर गरिएको छ कि छैन भने जाँच गर्नुहोस्।
- यदि तपाईंले मैन्युअल रूपमा API key परिभाषित गर्नुभएको छ भने, त्यो सही छ वा छैन भने जाँच गर्नुहोस्।
- यदि तपाईंलाई API सँग कुनै समस्या भइरहेको छ भने WP Engine सपोर्टलाई सम्पर्क गर्नुहोस्।

### डोमेन थपिएको छैन (Domain Not Added) {#domain-not-added}
- कुनै पनि त्रुटि सन्देशहरूका लागि Ultimate Multisite लगहरूमा जाँच गर्नुहोस्।
- डोमेन पहिले नै WP Engine मा थपिएको छैन भनेर पुष्टि गर्नुहोस्।
- तपाईंले थप्दै गरेको डोमेनको संख्यालाई तपाईंको WP Engine प्लानले समर्थन गर्छ वा गर्दैन, त्यो सुनिश्चित गर्नुहोस्।

### सबडोमेन समस्याहरू (Subdomain Issues) {#subdomain-issues}
- यदि सबडोमेन काम गरिरहेका छैनन् भने, वाइल्डकार्ड डोमेन कन्फिगरेसनको लागि अनुरोध गर्न WP Engine सपोर्टलाई सम्पर्क गर्नुहोस्।
- मुख्य डोमेन र सबडोमेनहरूको लागि तपाईंको DNS सेटिङहरू सही तरिकाले कन्फिगर गरिएको छ वा छैन भने जाँच गर्नुहोस्।
