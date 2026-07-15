---
title: रनक्लाउड एकीकरण
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud एकीकरण (Integration)

## अवलोकन (Overview) {#overview}
RunCloud एउटा क्लाउड-आधारित सर्भर व्यवस्थापन प्लेटफर्म हो जसले तपाईंलाई आफ्नै क्लाउड सर्भरहरूमा वेब एपहरू सजिलै डिप्लोय गर्न र व्यवस्थापन गर्न अनुमति दिन्छ। यो एकीकरणले Ultimate Multisite र RunCloud बीच स्वचालित डोमेन सिङ्क्रोनाइजेसन (syncing) र SSL प्रमाणपत्र व्यवस्थापन सक्षम गर्दछ।

## सुविधाहरू (Features) {#features}
- स्वचालित डोमेन सिङ्क्रोनाइजेसन
- SSL प्रमाणपत्र व्यवस्थापन
- म्यापिङहरू मेटाउँदा डोमेन हटाउने कार्य

## आवश्यकताहरू (Requirements) {#requirements}
तपाईंको `wp-config.php` फाइलमा निम्न स्थिरांकहरू (constants) परिभाषित गर्नुपर्छ:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## सेटअप निर्देशनहरू (Setup Instructions) {#setup-instructions}

### १. आफ्नो RunCloud API प्रमाणहरू प्राप्त गर्नुहोस् (Get Your RunCloud API Credentials) {#1-get-your-runcloud-api-credentials}

१. आफ्नो RunCloud ड्यासबोर्डमा लग इन गर्नुहोस्।
२. "User Profile" मा जानुहोस् (दायाँ छेउको प्रोफाइल पिक्चरमा क्लिक गर्नुहोस्)।
३. मेनुबाट "API" चयन गर्नुहोस्।
४. यदि तपाईंसँग पहिले नै छैन भने "Generate API Key" मा क्लिक गर्नुहोस्।
५. आफ्नो API Key र API Secret कपी गर्नुहोस्।

### २. आफ्नो सर्भर र एप ID प्राप्त गर्नुहोस् (Get Your Server and App IDs) {#2-get-your-server-and-app-ids}

१. आफ्नो RunCloud ड्यासबोर्डमा, "Servers" मा जानुहोस्।
२. जहाँ तपाईंको WordPress multisite होस्ट गरिएको छ त्यो सर्भर चयन गर्नुहोस्।
३. सर्भर ID URL मा देखिन्छ: `https://manage.runcloud.io/servers/{SERVER_ID}`
४. "Web Applications" मा जानुहोस् र आफ्नो WordPress एप चयन गर्नुहोस्।
५. एप ID URL मा देखिन्छ: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### ३. wp-config.php मा स्थिरांकहरू थप्नुहोस् (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

निम्न स्थिरांकहरू आफ्नो `wp-config.php` फाइलमा थप्नुहोस्:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### ४. एकीकरण सक्षम गर्नुहोस् (Enable the Integration) {#4-enable-the-integration}

१. आफ्नो वर्डप्रेस एडमिनमा, Ultimate Multisite > Settings मा जानुहोस्।
२. "Domain Mapping" ट्याबमा जानुहोस्।
३. तल स्क्रोल गरेर "Host Integrations" मा जानुहोस्।
४. RunCloud integration लाई सक्षम (Enable) गर्नुहोस्।
५. "Save Changes" मा क्लिक गर्नुहोस्।

## यो कसरी काम गर्छ {#how-it-works}

Ultimate Multisite मा डोमेन म्याप गरिएमा:

१. यो integration ले आफ्नो एप्लिकेशनमा डोमेन थप्नको लागि RunCloud को API मा अनुरोध पठाउँछ।
२. यदि डोमेन सफलतापूर्वक थपियो भने, integration ले SSL प्रमाणपत्रहरू पनि पुनः डिप्लॉय (redeploy) गर्छ।
३. जब कुनै डोमेन म्यापिङ हटाउनुहुन्छ, integration ले RunCloud बाट त्यो डोमेन हटाउँछ।

सबडोमेन इन्स्टलेसनको लागि, तपाईंको नेटवर्कमा नयाँ साइटहरू थप्दा integration ले स्वचालित रूपमा RunCloud मा सबडोमेनहरू बनाउने काम गर्छ।

## समस्या समाधान (Troubleshooting) {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- आफ्नो API credentials सही छन् कि छैनन्, त्यो जाँच गर्नुहोस्।
- तपाईंको सर्भर र app IDs सही छन् कि छैनन्, त्यो हेर्नुहोस्।
- तपाईंको RunCloud accountमा आवश्यक अनुमतिहरू (permissions) छन् भनेर सुनिश्चित गर्नुहोस्।

### SSL Certificate Issues {#ssl-certificate-issues}
- RunCloud ले SSL प्रमाणपत्र जारी गर्न केही समय लिन सक्छ।
- तपाईंको डोमेनहरू सर्भरको IP ठेगानामा सही तरिकाले इंगित (pointing) गरिएका छन् कि छैनन्, त्यो जाँच गर्नुहोस्।
- आफ्नो एप्लिकेशनको लागि RunCloud को SSL सेटिङहरू हेर्नुहोस्।

### Domain Not Added {#domain-not-added}
- कुनै पनि त्रुटि सन्देश (error messages) का लागि Ultimate Multisite को logs जाँच गर्नुहोस्।
- डोमेन पहिले नै RunCloud मा थपिएको छैन भनेर पुष्टि गर्नुहोस्।
- तपाईंको RunCloud प्लानले धेरै डोमेनलाई समर्थन गर्छ कि छैन भन्ने कुरा सुनिश्चित गर्नुहोस्।
