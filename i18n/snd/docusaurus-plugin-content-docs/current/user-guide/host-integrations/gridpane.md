---
title: گريدپین انٽيغريشن
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integration

## جائزہ (Overview) {#overview}
GridPane هڪ خاص WordPress هاستين ڪنٽرول پینل آهي جيڪو سنجيده WordPress پروفيسينلز لاءِ ٺاهيو ويو آهي. هي ان انٽيغريشن سان Ultimate Multisite ۽ GridPane بابت دومين سمڪينگ (domain syncing) ۽ SSL سرٽيفڪيٽ جي مانيجمنٽ خود بخود ٿيندي آهي.

## خصوصيتون (Features) {#features}
- خود بخود دومين سمڪينگ (Automatic domain syncing)
- SSL سرٽيفڪيٽ جي مانيجمنٽ (SSL certificate management)
- SUNRISE constant جو خود بخود هيٺه ڪارغم گذاري (Automatic configuration of SUNRISE constant)

## گهرجن (Requirements) {#requirements}
توهان کي پنهنجي `wp-config.php` فائل ۾ هيٺ ڏنل constants تعريف ڪرڻو پوندو:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## ترتیب ڏيڻ جا تعليمات (Setup Instructions) {#setup-instructions}

### 1. پنهنجا GridPane API Credentials حاصل ڪريو {#1-get-your-gridpane-api-credentials}

1. پنهنجي GridPane dashboard ۾ لاگ ان ڪريو
2. "Settings" > "API" تي وڃو
3. جيڪڏهن توهان جي پاسي API key ناهي ته هڪ API key جنريٽ ڪريو
4. پنهنجي API key کي ڪاپي ڪريو

### 2. پنهنجا Server ۽ Site IDs حاصل ڪريو {#2-get-your-server-and-site-ids}

1. پنهنجي GridPane dashboard ۾، "Servers" تي وڃو
2. ان server کي چونڊيو جتي توهان جو WordPress multisite هاستيو آهي
3. Server ID ڏسو (URL يا server details page تي ڏسيل هجي)
4. "Sites" تي وڃو ۽ پنهنجي WordPress site کي چونڊيو
5. Site ID ڏسو (URL يا site details page تي ڏسيل هجي)

### 3. wp-config.php ۾ Constants شامل ڪريو {#3-add-constants-to-wp-configphp}

هي هيٺ ڏنل constants کي پنهنجي `wp-config.php` فائل ۾ شامل ڪريو:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. انٽيغريشن کي فعال ڪريو (Enable the Integration) {#4-enable-the-integration}

1. پنهنجي WordPress admin ۾، Ultimate Multisite > Settings تي وڃو
2. "Domain Mapping" ٽاب تي وڃو
3. "Host Integrations" تائين سکرول ڪريو
4. GridPane انٽيغريشن کي فعال ڪريو (Enable the GridPane integration)
5. "Save Changes" تي ڪلڪ ڪريو

## اهو ڪيئن کام ڪري ٿو (How It Works) {#how-it-works}

جڏهن Ultimate Multisite ۾ هڪ دومين سمڪيو ويندو آهي:

1. यो integrationले तपाईंको साइटमा डोमेन थप्नका लागि GridPane को API मा अनुरोध पठाउँछ।
2. GridPane ले स्वचालित रूपमा SSL certificate व्यवस्थापन गर्छ।
3. जब कुनै डोमेन मैपिंग हटाउन सकिन्छ, त्यो integration ले GridPane बाट डोमेन हटाउँछ।

यो integrationले तपाईंको wp-config.php फाइलमा भएको SUNRISE constant लाई पनि स्वचालित रूपमा ह्यान्डल गर्छ, जुन डोमेन मैपिंग सही तरिकाले काम गर्नका लागि आवश्यक हुन्छ।

## SUNRISE Constant व्यवस्थापन (Management) {#sunrise-constant-management}

GridPane integration को एउटा विशेष सुविधाहरू भनेको यो हो कि यसले wp-config.php मा भएको SUNRISE constant लाई स्वचालित रूपमा revert गर्छ, ताकि GridPane को आफ्नै डोमेन मैपिंग प्रणालीसँग कुनै समस्या नहोस्। यसले दुवै प्रणालीलाई बिना कुनै समस्याका साथ काम गर्न सुनिश्चित गर्दछ।

## समस्या समाधान (Troubleshooting) {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- तपाईंको API key सही छ कि छैन भने जाँच गर्नुहोस्।
- तपाईंको सर्भर र साइट ID सही छन् कि छैनन् भने जाँच गर्नुहोस्।
- तपाईंको GridPane खातामा आवश्यक अनुमतिहरू छन् कि छैनन् भने सुनिश्चित गर्नुहोस्।

### SSL Certificate Issues {#ssl-certificate-issues}
- GridPane ले SSL certificate जारी गर्न केही समय लिन सक्छ।
- तपाईंको डोमेनहरू तपाईंको सर्भरको IP address मा ठीकसँग इंगित (pointing) गरिरहेका छन् कि छैनन् भने जाँच गर्नुहोस्।
- आफ्नो साइटको लागि GridPane को SSL सेटिङहरू जाँच गर्नुहोस्।

### डोमेन थपिएको छैन (Domain Not Added) {#domain-not-added}
- कुनै पनि त्रुटि सन्देशहरूको लागि Ultimate Multisite log हेर्नुहोस्।
- डोमेन पहिले नै GridPane मा थपिएको छ कि छैन भने जाँच गर्नुहोस्।
- तपाईंको डोमेनका DNS रेकर्डहरू सही तरिकाले कन्फिगर गरिएका छन् कि छैनन् भने सुनिश्चित गर्नुहोस्।
