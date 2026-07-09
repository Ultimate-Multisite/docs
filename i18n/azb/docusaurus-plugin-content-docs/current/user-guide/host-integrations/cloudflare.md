---
title: Cloudflare Integration
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integration {#cloudflare-integration}

## Overview {#overview}
Cloudflare एक प्रमुख कंटेंट डिलीवरी नेटवर्क (CDN) और सिक्योरिटी प्रोवाइडर है जो वेबसाइटों को सुरक्षित रखने और उनकी स्पीड बढ़ाने में मदद करता है। यह इंटीग्रेशन Ultimate Multisite और Cloudflare के बीच ऑटोमेटिक डोमेन मैनेजमेंट को सक्षम बनाता है, खासकर सबडोमेन मल्टीसाइट इंस्टॉलेशन के लिए।

## Features {#features}
- Cloudflare में ऑटोमेटिक सबडोमेन क्रिएशन
- प्रॉक्सीड सबडोमेन सपोर्ट
- DNS रिकॉर्ड मैनेजमेंट
- Ultimate Multisite एडमिन में बेहतर DNS रिकॉर्ड डिस्प्ले

## Requirements {#requirements}
आपके `wp-config.php` फ़ाइल में निम्नलिखित कॉन्स्टेंट्स (constants) डिफाइन होना ज़रूरी है:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Setup Instructions {#setup-instructions}

### 1. Get Your Cloudflare API Key {#1-get-your-cloudflare-api-key}

1. अपने Cloudflare डैशबोर्ड में लॉग इन करें
2. "My Profile" पर जाएं (ऊपर-दाएँ कोने में अपने ईमेल पर क्लिक करें)
3. मेनू से "API Tokens" चुनें
4. निम्नलिखित अनुमतियों (permissions) के साथ एक नया API टोकन बनाएं:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. अपने API टोकन को कॉपी करें

### 2. Get Your Zone ID {#2-get-your-zone-id}

1. अपने Cloudflare डैशबोर्ड में, उस डोमेन को चुनें जिसका आप उपयोग करना चाहते हैं
2. Zone ID "Overview" टैब में, दाईं ओर के साइडबार में "API" के तहत दिखाई देगा
3. Zone ID को कॉपी करें

### 3. Add Constants to wp-config.php {#3-add-constants-to-wp-configphp}

निम्नलिखित कॉन्स्टेंट्स को अपनी `wp-config.php` फ़ाइल में जोड़ें:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Enable the Integration {#4-enable-the-integration}

1. अपने WordPress एडमिन में, Ultimate Multisite > Settings पर जाएं
2. "Domain Mapping" टैब पर नेविगेट करें
3. "Host Integrations" तक स्क्रॉल करें
4. Cloudflare इंटीग्रेशन को सक्षम (enable) करें
5. "Save Changes" पर क्लिक करें

## How It Works {#how-it-works}

### Subdomain Management {#subdomain-management}

जब सबडोमेन मल्टीसाइट इंस्टॉलेशन में कोई नई साइट बनाई जाती है:

1. इंटीग्रेशन सबडोमेन के लिए एक CNAME रिकॉर्ड जोड़ने के लिए Cloudflare के API को एक रिक्वेस्ट भेजता है
2. डिफ़ॉल्ट रूप से सबडोमेन को Cloudflare के माध्यम से प्रॉक्सी (proxy) करने के लिए कॉन्फ़िगर किया जाता है (इसे फिल्टर्स का उपयोग करके बदला जा सकता है)
3. जब कोई साइट डिलीट होती है, तो इंटीग्रेशन Cloudflare से सबडोमेन को हटा देगा

### DNS Record Display {#dns-record-display}

इंटीग्रेशन Ultimate Multisite एडमिन में DNS रिकॉर्ड डिस्प्ले को बेहतर बनाता है, जिसके द्वारा:

1. Cloudflare से सीधे DNS रिकॉर्ड प्राप्त करता है
2. यह दिखाता है कि रिकॉर्ड प्रॉक्सीड हैं या नहीं
3. DNS रिकॉर्ड के बारे में अतिरिक्त जानकारी दिखाता है

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (जिसे पहले "Cloudflare for SaaS" कहा जाता था) एक Cloudflare फीचर है जो आपके ग्राहकों को आपकी मल्टीसाइट नेटवर्क पर अपने खुद के डोमेन SSL के साथ उपयोग करने की अनुमति देता है। यह डोमेन-मैप्ड मल्टीसाइट इंस्टॉलेशन के लिए अनुशंसित तरीका है जो Cloudflare का उपयोग करते हैं, क्योंकि Cloudflare स्वचालित रूप से प्रत्येक कस्टम डोमेन के लिए SSL सर्टिफिकेट जारी करना और उसे रिन्यू करना मैनेज करता है।

### How it differs from the standard Cloudflare integration {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standard integration | Cloudflare Custom Hostnames |
|---|---|---|
| **Purpose** | सबडोमेन के लिए DNS रिकॉर्ड ऑटो-क्रिएट करता है | Cloudflare-मैनेज्ड SSL के साथ कस्टम (मैप्ड) डोमेन सक्षम करता है |
| **Best for** | सबडोमेन मल्टीसाइट | डोमेन-मैप्ड मल्टीसाइट |
| **SSL** | अलग से मैनेज किया जाता है | Cloudflare द्वारा स्वचालित रूप से मैनेज किया जाता है |

### Setting up Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. अपने Cloudflare डैशबोर्ड में, अपने मुख्य डोमेन के लिए ज़ोन खोलें।
2. **SSL/TLS > Custom Hostnames** पर जाएं।
3. अपने सर्वर के IP या होस्टनाम की ओर पॉइंट करने वाला एक फ़ॉलबैक ओरिजिन (fallback origin) जोड़ें।
4. Ultimate Multisite में मैप्ड प्रत्येक ग्राहक डोमेन के लिए, Cloudflare में एक Custom Hostname एंट्री जोड़ें। आप Cloudflare API का उपयोग करके इस स्टेप को ऑटोमेट कर सकते हैं।
5. एक बार जब ग्राहक का DNS आपके नेटवर्क की ओर पॉइंट हो जाता है, तो Cloudflare स्वचालित रूप से प्रत्येक कस्टम होस्टनाम के लिए TLS सर्टिफिकेट जारी करता है और उसे रिन्यू करता है।

पूरे API रेफरेंस के लिए, [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) देखें।

:::note Terminology update
Ultimate Multisite v2.6.1 के अनुसार, इस फीचर को सभी प्लगइन सेटिंग्स और लेबल में **Cloudflare Custom Hostnames** कहा जाता है। पुराने वर्ज़न में "Cloudflare for SaaS" नाम का उपयोग किया जाता था, जो कि Cloudflare का मूल प्रोडक्ट नाम है।
:::

## Important Notes {#important-notes}

Cloudflare के हालिया अपडेट के अनुसार, वाइल्डकार्ड प्रॉक्सीिंग (wildcard proxying) अब सभी ग्राहकों के लिए उपलब्ध है। इसका मतलब है कि सबडोमेन मल्टीसाइट इंस्टॉलेशन के लिए स्टैंडर्ड Cloudflare DNS इंटीग्रेशन पहले जितना महत्वपूर्ण नहीं रहा, क्योंकि आप Cloudflare में बस एक वाइल्डकार्ड DNS रिकॉर्ड सेट कर सकते हैं।

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- जांच लें कि आपका API टोकन सही है और उसमें ज़रूरी अनुमतियाँ हैं
- जांच लें कि आपका Zone ID सही है
- सुनिश्चित करें कि आपके Cloudflare अकाउंट में ज़रूरी अनुमतियाँ हैं

### Subdomain Not Added {#subdomain-not-added}
- किसी भी एरर मैसेज के लिए Ultimate Multisite लॉग्स की जांच करें
- जांच लें कि सबडोमेन पहले से ही Cloudflare में नहीं जोड़ा गया है
- सुनिश्चित करें कि आपका Cloudflare प्लान उतने DNS रिकॉर्ड को सपोर्ट करता है जितने आप बना रहे हैं

### Proxying Issues {#proxying-issues}
- यदि आप नहीं चाहते कि सबडोमेन प्रॉक्सीड हों, तो आप `wu_cloudflare_should_proxy` फ़िल्टर का उपयोग कर सकते हैं
- कुछ फीचर्स प्रॉक्सीड होने पर सही से काम नहीं कर सकते हैं (उदाहरण के लिए, कुछ WordPress एडमिन फ़ंक्शंस)
- एडमिन पेजों के लिए कैश को बायपास करने के लिए Cloudflare के Page Rules का उपयोग करने पर विचार करें
