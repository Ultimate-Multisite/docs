---
title: सर्भरपायलट एकीकरण
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# सर्भरपायलट एकीकरण (ServerPilot Integration)

## अवलोकन (Overview) {#overview}
सर्भरपायलट (ServerPilot) भनेको DigitalOcean, Amazon, Google वा अन्य कुनै पनि सर्भर प्रदायकका सर्भरहरूमा WordPress र अन्य PHP वेबसाइटहरू होस्ट गर्नका लागि एउटा क्लाउड सेवा हो। यो एकीकरणले Ultimate Multisite र ServerPilot बीच स्वचालित डोमेन सिङ्क्रनाइजेसन (automatic domain syncing) र SSL प्रमाणपत्र व्यवस्थापन (SSL certificate management) गर्ने सुविधा दिन्छ।

## सुविधाहरू (Features) {#features}
- स्वचालित डोमेन सिङ्क्रनाइजेसन
- Let's Encrypt मार्फत SSL प्रमाणपत्र व्यवस्थापन
- स्वचालित SSL नवीकरण

## आवश्यकताहरू (Requirements) {#requirements}
तपाईंको `wp-config.php` फाइलमा निम्न स्थिरांकहरू (constants) परिभाषित गर्नुपर्छ:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## सेटअप निर्देशनहरू (Setup Instructions) {#setup-instructions}

### १. आफ्नो ServerPilot API प्रमाणहरू प्राप्त गर्नुहोस् (Get Your ServerPilot API Credentials) {#1-get-your-serverpilot-api-credentials}

१. आफ्नो ServerPilot ड्यासबोर्डमा लगइन गर्नुहोस्।
२. "Account" > "API" मा जानुहोस्।
३. यदि तपाईंसँग पहिले नै छैन भने नयाँ API key बनाउनुहोस्।
४. आफ्नो Client ID र API Key कपी गर्नुहोस्।

### २. आफ्नो App ID प्राप्त गर्नुहोस् (Get Your App ID) {#2-get-your-app-id}

१. आफ्नो ServerPilot ड्यासबोर्डमा, "Apps" मा जानुहोस्।
२. जहाँ तपाईंको WordPress multisite होस्ट गरिएको छ त्यो एप चयन गर्नुहोस्।
३. URL मा App ID देखिन्छ: `https://manage.serverpilot.io/apps/{APP_ID}`

### ३. wp-config.php मा स्थिरांकहरू थप्नुहोस् (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

निम्न स्थिरांकहरू आफ्नो `wp-config.php` फाइलमा थप्नुहोस्:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### ४. एकीकरण सक्षम गर्नुहोस् (Enable the Integration) {#4-enable-the-integration}

१. आफ्नो WordPress एडमिनमा, Ultimate Multisite > Settings मा जानुहोस्।
२. "Domain Mapping" ट्याबमा जानुहोस्।
३. तल स्क्रोल गरेर "Host Integrations" मा जानुहोस्।
४. ServerPilot एकीकरण सक्षम गर्नुहोस् (Enable the ServerPilot integration)।
५. "Save Changes" मा क्लिक गर्नुहोस्।

## यो कसरी काम गर्छ (How It Works) {#how-it-works}

### डोमेन सिङ्क्रनाइजेसन (Domain Syncing) {#domain-syncing}

जब Ultimate Multisite मा कुनै डोमेन नक्सा गरिन्छ (mapped):

१. यो इन्टिग्रेशनले सर्भरपायलबाट डोमेनहरूको वर्तमान सूची लिन्छ।
२. यसले नयाँ डोमेनलाई सूचीमा थप्छ (यदि लागू भएमा www संस्करण पनि समावेश गर्दछ)।
३. यसले अपडेट गरिएको सूची API मार्फत सर्भरपायलमा पठाउँछ।
४. सर्भरपायलले तपाईंको एपको लागि डोमेन सूची अद्यावधिक गर्दछ।

### SSL प्रमाणपत्र व्यवस्थापन {#ssl-certificate-management}

डोमेनहरू सिङ्क गरिसकेपछि:

१. यो इन्टिग्रेशनले तपाईंको एपका लागि AutoSSL स्वचालित रूपमा सक्षम गर्दछ।
२. सर्भरपायलले Let's Encrypt प्रयोग गरेर SSL प्रमाणपत्र जारी गर्ने र स्थापना गर्ने काम गर्छ।
३. सर्भरपायलले SSL प्रमाणपत्रहरूको स्वचालित नवीकरण पनि ह्यान्डल गर्छ।

## SSL प्रमाणपत्र प्रमाणीकरण (Verification) {#ssl-certificate-verification}

सर्भरपायलले SSL प्रमाणपत्र जारी गर्न र स्थापित गर्न केही समय लाग्न सक्छ भन्ने कुरालाई ध्यानमा राख्दै, यो इन्टिग्रेशनले सर्भरपायलको लागि SSL प्रमाणपत्र प्रमाणीकरण प्रयासहरूको संख्या बढाउन कन्फिगर गरिएको छ। डिफल্ট रूपमा, यसले अधिकतम ५ पटकसम्म प्रयास गर्नेछ, तर फिल्टर प्रयोग गरेर यसलाई समायोजन गर्न सकिन्छ।

## समस्या निवारण (Troubleshooting) {#troubleshooting}

### API कनेक्ट नहुने समस्याहरू {#api-connection-issues}
- तपाईंको Client ID र API Key सही छन् कि छैनन् जाँच गर्नुहोस्।
- तपाईंको App ID सही छ कि छैन भनेर जाँच गर्नुहोस्।
- तपाईंको ServerPilot खातामा आवश्यक अनुमतिहरू छन् कि छैनन् सुनिश्चित गर्नुहोस्।

### SSL प्रमाणपत्रका समस्याहरू {#ssl-certificate-issues}
- SSL प्रमाणपत्र जारी गर्नुअघि डोमेनहरूले तपाईंको सर्भरतर्फ सही DNS रेकर्डहरू देखाउनुपर्छ भन्ने कुरा सर्भरपायलले माग गर्दछ।
- यदि SSL प्रमाणपत्र जारी गरिएका छैनन् भने, तपाईंको डोमेनहरू तपाईंको सर्भरको IP ठेगानामा ठीकसँग इंगित भइरहेका छन् कि छैनन् जाँच गर्नुहोस्।
- सर्भरपायलले SSL प्रमाणपत्र जारी गर्न र स्थापित गर्न केही समय लाग्न सक्छ (सामान्यतया ५-१५ मिनेट)।

### डोमेन थपिएको छैन {#domain-not-added}
- कुनै त्रुटि सन्देशहरूका लागि Ultimate Multisite लगहरू (logs) जाँच गर्नुहोस्।
- डोमेन पहिले नै ServerPilot मा थपिएको छ कि छैन भनेर पुष्टि गर्नुहोस्।
- तपाईंले थप्दै गरेको डोमेनको संख्या तपाईंको ServerPilot प्लानले समर्थन गर्छ कि गर्दैन, त्यो सुनिश्चित गर्नुहोस्।

### डोमेन हटाउने (Domain Removal) {#domain-removal}
- अहिले, ServerPilot API ले छुट्टाछुट्टै डोमेनहरू हटाउने कुनै तरिका प्रदान गर्दैन।
- जब Ultimate Multisite मा डोमेन मैपिंग हटाउनुहुन्छ, त्यो इन्टिग्रेशनले हटाइएको डोमेनलाई ServerPilot को डोमेन सूचीबाट बाहिर राख्न अपडेट गर्नेछ।
