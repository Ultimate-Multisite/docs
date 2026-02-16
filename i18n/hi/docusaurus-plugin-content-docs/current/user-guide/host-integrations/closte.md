---
title: Closte एकीकरण
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte इंटीग्रेशन

## अवलोकन
Closte एक managed WordPress hosting प्लेटफॉर्म है जो Google Cloud इंफ्रास्ट्रक्चर पर बना है। यह इंटीग्रेशन Ultimate Multisite और Closte के बीच automatic domain syncing और SSL certificate management को संभव बनाता है।

## विशेषताएं
- Automatic domain syncing
- SSL certificate management
- Wildcard domain support
- Closte पर चलने पर किसी कॉन्फ़िगरेशन की जरूरत नहीं

## आवश्यकताएं
अगर आप Closte इस्तेमाल कर रहे हैं, तो आपकी `wp-config.php` फाइल में निम्नलिखित constant परिभाषित होना चाहिए:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

अगर आप Closte पर होस्टिंग कर रहे हैं, तो यह constant आमतौर पर पहले से परिभाषित होता है।

## सेटअप निर्देश

### 1. अपनी Closte API Key सत्यापित करें

अगर आप Closte पर होस्टिंग कर रहे हैं, तो `CLOSTE_CLIENT_API_KEY` constant पहले से आपकी `wp-config.php` फाइल में परिभाषित होना चाहिए। आप अपनी `wp-config.php` फाइल की जांच करके इसे सत्यापित कर सकते हैं।

### 2. इंटीग्रेशन सक्षम करें

1. अपने WordPress admin में, Ultimate Multisite > Settings पर जाएं
2. "Domain Mapping" टैब पर नेविगेट करें
3. "Host Integrations" तक स्क्रॉल करें
4. Closte इंटीग्रेशन सक्षम करें
5. "Save Changes" पर क्लिक करें

## यह कैसे काम करता है

जब Ultimate Multisite में कोई domain map किया जाता है:

1. इंटीग्रेशन Closte के API को एक request भेजता है ताकि domain आपकी application में जोड़ा जा सके
2. Closte स्वचालित रूप से SSL certificate provisioning संभालता है
3. जब कोई domain mapping हटाई जाती है, तो इंटीग्रेशन Closte से वह domain हटा देता है

यह इंटीग्रेशन Ultimate Multisite में DNS check interval सेटिंग के साथ भी काम करता है, जिससे आप कॉन्फ़िगर कर सकते हैं कि सिस्टम कितनी बार DNS propagation और SSL certificate issuance की जांच करे।

## Domain Record निर्माण

यह इंटीग्रेशन सुनिश्चित करता है कि जब कोई साइट बनाई या duplicate की जाती है, तो domain record स्वचालित रूप से बन जाए। यह Closte इंटीग्रेशन के लिए विशेष रूप से महत्वपूर्ण है, क्योंकि domain record का निर्माण Closte API को domain और SSL certificate बनाने के लिए trigger करता है।

## समस्या निवारण

### API कनेक्शन समस्याएं
- सत्यापित करें कि आपकी Closte API key सही है
- सुनिश्चित करें कि आपके Closte account में आवश्यक permissions हैं

### SSL Certificate समस्याएं
- Closte को SSL certificates जारी करने में कुछ समय लग सकता है (आमतौर पर 5-10 मिनट)
- सत्यापित करें कि आपके domains सही तरीके से आपके Closte server के IP address की ओर point कर रहे हैं
- अपने domain के DNS records की जांच करें ताकि यह सुनिश्चित हो सके कि वे सही तरीके से कॉन्फ़िगर हैं

### Domain नहीं जोड़ा गया
- किसी भी error message के लिए Ultimate Multisite logs की जांच करें
- सत्यापित करें कि domain पहले से Closte में नहीं जोड़ा गया है
- सुनिश्चित करें कि आपके domain के DNS records सही तरीके से कॉन्फ़िगर हैं

### DNS Check Interval
- अगर SSL certificates जारी होने में बहुत समय लग रहा है, तो आप Domain Mapping settings में DNS check interval को समायोजित कर सकते हैं
- Default interval 300 सेकंड (5 मिनट) है, लेकिन testing के दौरान तेज़ जांच के लिए आप इसे 10 सेकंड तक कम कर सकते हैं
