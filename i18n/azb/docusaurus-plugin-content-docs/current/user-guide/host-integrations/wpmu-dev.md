---
title: WPMU DEV Entegrasyonu
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV Integration {#wpmu-dev-integration}

## Overview {#overview}
WPMU DEV एक व्यापक WordPress प्लेटफॉर्म है जो WordPress साइट्स के लिए होस्टिंग, प्लगइन्स और सेवाएं प्रदान करता है। यह इंटीग्रेशन Ultimate Multisite और WPMU DEV होस्टिंग के बीच स्वचालित डोमेन सिंकिंग और SSL सर्टिफिकेट प्रबंधन को सक्षम बनाता है।

## Features {#features}
- स्वचालित डोमेन सिंकिंग
- SSL सर्टिफिकेट प्रबंधन
- विस्तारित SSL सर्टिफिकेट सत्यापन प्रयास

## Requirements {#requirements}
यह इंटीग्रेशन स्वचालित रूप से पता लगा लेता है कि आप WPMU DEV पर होस्टिंग कर रहे हैं या नहीं, और यह बिल्ट-इन API का उपयोग करता है। यदि आप WPMU DEV पर होस्टिंग कर रहे हैं, तो आपको कोई अतिरिक्त कॉन्फ़िगरेशन करने की आवश्यकता नहीं है।

यह इंटीग्रेशन `WPMUDEV_HOSTING_SITE_ID` constant की उपस्थिति की जाँच करता है, जिसे WPMU DEV पर होस्टिंग करते समय स्वचालित रूप से परिभाषित किया जाता है।

## Setup Instructions {#setup-instructions}

### 1. Verify WPMU DEV Hosting {#1-verify-wpmu-dev-hosting}

यदि आप WPMU DEV पर होस्टिंग कर रहे हैं, तो आवश्यक constants पहले से ही परिभाषित होने चाहिए। कृपया जाँच करें कि:

1. आपके वातावरण में `WPMUDEV_HOSTING_SITE_ID` constant परिभाषित है।
2. आपके पास API एक्सेस के साथ एक सक्रिय WPMU DEV सदस्यता है।

### 2. Enable the Integration {#2-enable-the-integration}

1. अपने WordPress admin में, Ultimate Multisite > Settings पर जाएँ।
2. "Domain Mapping" टैब पर नेविगेट करें।
3. "Host Integrations" तक स्क्रॉल करें।
4. WPMU DEV इंटीग्रेशन को सक्षम करें।
5. "Save Changes" पर क्लिक करें।

## How It Works {#how-it-works}

### Domain Syncing {#domain-syncing}

जब Ultimate Multisite में कोई डोमेन मैप किया जाता है:

1. इंटीग्रेशन डोमेन को आपके होस्टिंग अकाउंट में जोड़ने के लिए WPMU DEV API का उपयोग करता है।
2. यह स्वचालित रूप से डोमेन का www संस्करण भी जोड़ देता है।
3. WPMU DEV डोमेन कॉन्फ़िगरेशन और SSL सर्टिफिकेट जारी करने का काम संभालता है।

### SSL Certificate Management {#ssl-certificate-management}

यह इंटीग्रेशन WPMU DEV होस्टिंग के लिए SSL सर्टिफिकेट सत्यापन प्रयासों की संख्या बढ़ाने के लिए कॉन्फ़िगर किया गया है, क्योंकि SSL सर्टिफिकेट जारी होने और स्थापित होने में कुछ समय लग सकता है। डिफ़ॉल्ट रूप से, यह SSL सर्टिफिकेट सत्यापन के लिए 10 बार तक प्रयास करेगा, जो मानक 5 प्रयासों की तुलना में अधिक है।

## Important Notes {#important-notes}

### Domain Removal {#domain-removal}

वर्तमान में, WPMU DEV API में डोमेन हटाने का कोई तरीका प्रदान नहीं किया गया है। जब Ultimate Multisite में डोमेन मैपिंग हटा दी जाती है, तो डोमेन आपके WPMU DEV होस्टिंग अकाउंट में बना रहेगा। यदि आवश्यक हो, तो आपको इसे मैन्युअल रूप से WPMU DEV होस्टिंग डैशबोर्ड से हटाना होगा।

### API Authentication {#api-authentication}

इंटीग्रेशन WPMU DEV API key का उपयोग करता है जो आपके WordPress डेटाबेस में `wpmudev_apikey` option के रूप में संग्रहीत होता है। जब आप अपनी साइट को WPMU DEV से कनेक्ट करते हैं तो यह स्वचालित रूप से सेट हो जाता है।

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- जाँच करें कि आपकी साइट WPMU DEV से ठीक से जुड़ी हुई है।
- सुनिश्चित करें कि आपके WordPress डेटाबेस में `wpmudev_apikey` option सेट है।
- सुनिश्चित करें कि आपकी WPMU DEV सदस्यता सक्रिय है।

### SSL Certificate Issues {#ssl-certificate-issues}
- WPMU DEV को SSL सर्टिफिकेट जारी करने में कुछ समय लग सकता है (आमतौर पर 5-15 मिनट)।
- इंटीग्रेशन SSL सर्टिफिकेट के लिए 10 बार तक जाँच करने के लिए कॉन्फ़िगर किया गया है।
- यदि कई प्रयासों के बाद भी SSL सर्टिफिकेट जारी नहीं हो रहे हैं, तो WPMU DEV सपोर्ट से संपर्क करें।

### Domain Not Added {#domain-not-added}
- किसी भी त्रुटि संदेश के लिए Ultimate Multisite लॉग की जाँच करें।
- सत्यापित करें कि डोमेन पहले से ही WPMU DEV में नहीं जोड़ा गया है।
- सुनिश्चित करें कि आपका WPMU DEV होस्टिंग प्लान आपके द्वारा जोड़े जा रहे डोमेन की संख्या का समर्थन करता है।
