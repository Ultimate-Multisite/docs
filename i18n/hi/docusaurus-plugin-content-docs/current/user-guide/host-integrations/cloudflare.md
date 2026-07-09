---
title: Cloudflare एकीकरण
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare एकीकरण

## अवलोकन
Cloudflare एक अग्रणी सामग्री वितरण नेटवर्क (CDN) और सुरक्षा प्रदाता है, जो वेबसाइटों की सुरक्षा और गति बढ़ाने में मदद करता है। यह एकीकरण Ultimate Multisite और Cloudflare के बीच स्वचालित डोमेन प्रबंधन सक्षम करता है, खासकर सबडोमेन मल्टीसाइट स्थापनाओं के लिए।

## सुविधाएँ
- Cloudflare में स्वचालित सबडोमेन निर्माण
- प्रॉक्सी किए गए सबडोमेन का समर्थन
- DNS रिकॉर्ड प्रबंधन
- Ultimate Multisite admin में बेहतर DNS रिकॉर्ड प्रदर्शन

## आवश्यकताएँ
आपकी `wp-config.php` फ़ाइल में निम्नलिखित constants परिभाषित होने चाहिए:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## सेटअप निर्देश

### 1. अपनी Cloudflare API Key प्राप्त करें

1. अपने Cloudflare Dashboard में लॉग इन करें
2. "My Profile" पर जाएँ (ऊपर-दाएँ कोने में अपने ईमेल पर क्लिक करें)
3. मेन्यू से "API Tokens" चुनें
4. निम्नलिखित अनुमतियों के साथ नया API token बनाएँ:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. अपना API token कॉपी करें

### 2. अपना Zone ID प्राप्त करें

1. अपने Cloudflare Dashboard में वह डोमेन चुनें जिसे आप उपयोग करना चाहते हैं
2. Zone ID "Overview" टैब में, दाएँ साइडबार में "API" के अंतर्गत दिखता है
3. Zone ID कॉपी करें

### 3. wp-config.php में constants जोड़ें

अपनी `wp-config.php` फ़ाइल में निम्नलिखित constants जोड़ें:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. एकीकरण सक्षम करें

1. अपने WordPress admin में, Ultimate Multisite > Settings पर जाएँ
2. "Domain Mapping" टैब पर जाएँ
3. नीचे "Host Integrations" तक स्क्रोल करें
4. Cloudflare एकीकरण सक्षम करें
5. "Save Changes" पर क्लिक करें

## यह कैसे काम करता है

### सबडोमेन प्रबंधन

जब किसी सबडोमेन मल्टीसाइट स्थापना में नई साइट बनाई जाती है:

1. एकीकरण सबडोमेन के लिए CNAME रिकॉर्ड जोड़ने हेतु Cloudflare के API को अनुरोध भेजता है
2. सबडोमेन को डिफ़ॉल्ट रूप से Cloudflare के माध्यम से प्रॉक्सी होने के लिए कॉन्फ़िगर किया जाता है (इसे filters से बदला जा सकता है)
3. जब कोई साइट हटाई जाती है, तो एकीकरण Cloudflare से सबडोमेन हटा देगा

### DNS रिकॉर्ड प्रदर्शन

एकीकरण Ultimate Multisite admin में DNS रिकॉर्ड प्रदर्शन को बेहतर बनाता है:

1. DNS रिकॉर्ड सीधे Cloudflare से प्राप्त करके
2. यह दिखाकर कि रिकॉर्ड प्रॉक्सी किए गए हैं या नहीं
3. DNS रिकॉर्ड के बारे में अतिरिक्त जानकारी दिखाकर

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (पहले "Cloudflare for SaaS" कहा जाता था) Cloudflare की एक सुविधा है, जो आपके ग्राहकों को आपके मल्टीसाइट नेटवर्क पर SSL के साथ अपने स्वयं के डोमेन उपयोग करने देती है। Cloudflare उपयोग करने वाली डोमेन-मैप्ड मल्टीसाइट स्थापनाओं के लिए यह सुझाया गया तरीका है, क्योंकि Cloudflare हर custom domain के लिए SSL प्रमाणपत्र जारी करने और नवीनीकरण को स्वचालित रूप से प्रबंधित करता है।

### यह मानक Cloudflare एकीकरण से कैसे अलग है

| | मानक एकीकरण | Cloudflare Custom Hostnames |
|---|---|---|
| **उद्देश्य** | सबडोमेन के लिए DNS रिकॉर्ड स्वतः बनाता है | Cloudflare-प्रबंधित SSL के साथ custom (mapped) domains सक्षम करता है |
| **इसके लिए सर्वोत्तम** | सबडोमेन मल्टीसाइट | डोमेन-मैप्ड मल्टीसाइट |
| **SSL** | अलग से संभाला जाता है | Cloudflare द्वारा स्वचालित रूप से प्रबंधित |

### Cloudflare Custom Hostnames सेट करना

1. अपने Cloudflare Dashboard में, अपने मुख्य डोमेन का zone खोलें।
2. **SSL/TLS > Custom Hostnames** पर जाएँ।
3. अपने सर्वर के IP या hostname की ओर संकेत करने वाला fallback origin जोड़ें।
4. Ultimate Multisite में मैप किए गए प्रत्येक ग्राहक डोमेन के लिए, Cloudflare में Custom Hostname प्रविष्टि जोड़ें। आप Cloudflare API का उपयोग करके इस चरण को स्वचालित कर सकते हैं।
5. ग्राहक का DNS आपके नेटवर्क की ओर इंगित हो जाने के बाद, Cloudflare प्रत्येक custom hostname के लिए TLS प्रमाणपत्र स्वचालित रूप से जारी और नवीनीकृत करता है।

पूर्ण API संदर्भ के लिए, [Cloudflare Custom Hostnames दस्तावेज़](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) देखें।

:::note शब्दावली अपडेट
Ultimate Multisite v2.6.1 से, सभी plugin settings और labels में इस सुविधा को **Cloudflare Custom Hostnames** कहा जाता है। पुराने संस्करणों में "Cloudflare for SaaS" नाम उपयोग होता था, जो मूल Cloudflare उत्पाद का नाम है।
:::

## महत्वपूर्ण नोट्स

Cloudflare के हालिया अपडेट के अनुसार, wildcard proxying अब सभी ग्राहकों के लिए उपलब्ध है। इसका मतलब है कि सबडोमेन मल्टीसाइट स्थापनाओं के लिए मानक Cloudflare DNS एकीकरण पहले जितना आवश्यक नहीं रहा, क्योंकि आप Cloudflare में बस wildcard DNS रिकॉर्ड सेट कर सकते हैं।

## समस्या निवारण

### API कनेक्शन समस्याएँ
- सत्यापित करें कि आपका API token सही है और उसके पास आवश्यक अनुमतियाँ हैं
- जाँचें कि आपका Zone ID सही है
- सुनिश्चित करें कि आपके Cloudflare Account के पास आवश्यक अनुमतियाँ हैं

### सबडोमेन नहीं जोड़ा गया
- किसी भी त्रुटि संदेश के लिए Ultimate Multisite logs जाँचें
- सत्यापित करें कि सबडोमेन पहले से Cloudflare में जोड़ा नहीं गया है
- सुनिश्चित करें कि आपका Cloudflare plan आपके द्वारा बनाए जा रहे DNS रिकॉर्ड की संख्या का समर्थन करता है

### प्रॉक्सी से जुड़ी समस्याएँ
- यदि आप नहीं चाहते कि सबडोमेन प्रॉक्सी किए जाएँ, तो आप `wu_cloudflare_should_proxy` filter का उपयोग कर सकते हैं
- प्रॉक्सी होने पर कुछ सुविधाएँ सही ढंग से काम नहीं कर सकतीं (जैसे, कुछ WordPress admin functions)
- admin pages के लिए cache को बायपास करने हेतु Cloudflare के Page Rules का उपयोग करने पर विचार करें
