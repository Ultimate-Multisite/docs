---
title: Cloudflare एकीकरण
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare इंटीग्रेशन

## अवलोकन
Cloudflare एक प्रमुख content delivery network (CDN) और सुरक्षा प्रदाता है जो वेबसाइटों को सुरक्षित और तेज़ बनाने में मदद करता है। यह इंटीग्रेशन Ultimate Multisite और Cloudflare के बीच स्वचालित डोमेन प्रबंधन को सक्षम बनाता है, विशेष रूप से subdomain multisite इंस्टॉलेशन के लिए।

## विशेषताएं
- Cloudflare में स्वचालित subdomain निर्माण
- Proxied subdomain सपोर्ट
- DNS रिकॉर्ड प्रबंधन
- Ultimate Multisite admin में बेहतर DNS रिकॉर्ड प्रदर्शन

## आवश्यकताएं
आपकी `wp-config.php` फ़ाइल में निम्नलिखित constants परिभाषित होने चाहिए:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## सेटअप निर्देश

### 1. अपनी Cloudflare API Key प्राप्त करें

1. अपने Cloudflare dashboard में लॉग इन करें
2. "My Profile" पर जाएं (ऊपरी-दाएं कोने में अपने ईमेल पर क्लिक करें)
3. मेनू से "API Tokens" चुनें
4. निम्नलिखित permissions के साथ एक नया API token बनाएं:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. अपना API token कॉपी करें

### 2. अपना Zone ID प्राप्त करें

1. अपने Cloudflare dashboard में, वह डोमेन चुनें जिसे आप उपयोग करना चाहते हैं
2. Zone ID "Overview" टैब में, दाईं साइडबार में "API" के नीचे दिखाई देता है
3. Zone ID कॉपी करें

### 3. wp-config.php में Constants जोड़ें

अपनी `wp-config.php` फ़ाइल में निम्नलिखित constants जोड़ें:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. इंटीग्रेशन सक्षम करें

1. अपने WordPress admin में, Ultimate Multisite > Settings पर जाएं
2. "Domain Mapping" टैब पर नेविगेट करें
3. "Host Integrations" तक नीचे स्क्रॉल करें
4. Cloudflare इंटीग्रेशन को सक्षम करें
5. "Save Changes" पर क्लिक करें

## यह कैसे काम करता है

### Subdomain प्रबंधन

जब subdomain multisite इंस्टॉलेशन में एक नई साइट बनाई जाती है:

1. इंटीग्रेशन subdomain के लिए CNAME रिकॉर्ड जोड़ने के लिए Cloudflare की API को एक अनुरोध भेजता है
2. subdomain को डिफ़ॉल्ट रूप से Cloudflare के माध्यम से proxy करने के लिए कॉन्फ़िगर किया जाता है (इसे filters के साथ बदला जा सकता है)
3. जब कोई साइट हटाई जाती है, तो इंटीग्रेशन Cloudflare से subdomain को हटा देगा

### DNS रिकॉर्ड प्रदर्शन

इंटीग्रेशन Ultimate Multisite admin में DNS रिकॉर्ड प्रदर्शन को बेहतर बनाता है:

1. Cloudflare से सीधे DNS रिकॉर्ड प्राप्त करके
2. यह दिखाकर कि रिकॉर्ड proxied हैं या नहीं
3. DNS रिकॉर्ड के बारे में अतिरिक्त जानकारी दिखाकर

## महत्वपूर्ण नोट्स

Cloudflare के हालिया अपडेट के अनुसार, wildcard proxying अब सभी ग्राहकों के लिए उपलब्ध है। इसका मतलब है कि subdomain multisite इंस्टॉलेशन के लिए Cloudflare इंटीग्रेशन पहले जितना महत्वपूर्ण नहीं रहा, क्योंकि आप बस Cloudflare में एक wildcard DNS रिकॉर्ड सेट कर सकते हैं।

## समस्या निवारण

### API कनेक्शन समस्याएं
- सत्यापित करें कि आपका API token सही है और उसके पास आवश्यक permissions हैं
- जांचें कि आपका Zone ID सही है
- सुनिश्चित करें कि आपके Cloudflare खाते के पास आवश्यक permissions हैं

### Subdomain नहीं जोड़ा गया
- किसी भी error messages के लिए Ultimate Multisite logs जांचें
- सत्यापित करें कि subdomain पहले से Cloudflare में नहीं जोड़ा गया है
- सुनिश्चित करें कि आपका Cloudflare plan आपके द्वारा बनाए जा रहे DNS रिकॉर्ड की संख्या को सपोर्ट करता है

### Proxying समस्याएं
- यदि आप नहीं चाहते कि subdomains proxy किए जाएं, तो आप `wu_cloudflare_should_proxy` filter का उपयोग कर सकते हैं
- कुछ सुविधाएं proxy होने पर सही ढंग से काम नहीं कर सकती हैं (जैसे, कुछ WordPress admin functions)
- admin pages के लिए cache को bypass करने के लिए Cloudflare की Page Rules का उपयोग करने पर विचार करें
