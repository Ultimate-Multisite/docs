---
title: ServerPilot एकीकरण
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Integration

## अवलोकन
ServerPilot एक क्लाउड सेवा है जो DigitalOcean, Amazon, Google, या किसी अन्य सर्वर प्रदाता पर WordPress और अन्य PHP वेबसाइटों को होस्ट करने के लिए उपयोग की जाती है। यह integration Ultimate Multisite और ServerPilot के बीच automatic domain syncing और SSL certificate प्रबंधन को सक्षम बनाता है।

## विशेषताएं
- Automatic domain syncing
- Let's Encrypt के साथ SSL certificate प्रबंधन
- Automatic SSL renewal

## आवश्यकताएं
आपकी `wp-config.php` फाइल में निम्नलिखित constants को define करना जरूरी है:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## सेटअप निर्देश

### 1. अपने ServerPilot API Credentials प्राप्त करें

1. अपने ServerPilot dashboard में लॉग इन करें
2. "Account" > "API" पर जाएं
3. अगर आपके पास पहले से API key नहीं है तो एक नई API key बनाएं
4. अपनी Client ID और API Key कॉपी करें

### 2. अपनी App ID प्राप्त करें

1. अपने ServerPilot dashboard में "Apps" पर जाएं
2. उस app को चुनें जहां आपकी WordPress multisite होस्ट है
3. App ID URL में दिखाई देती है: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. wp-config.php में Constants जोड़ें

अपनी `wp-config.php` फाइल में निम्नलिखित constants जोड़ें:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Integration को Enable करें

1. अपने WordPress admin में Ultimate Multisite > Settings पर जाएं
2. "Domain Mapping" tab पर navigate करें
3. नीचे स्क्रॉल करके "Host Integrations" पर जाएं
4. ServerPilot integration को enable करें
5. "Save Changes" पर क्लिक करें

## यह कैसे काम करता है

### Domain Syncing

जब Ultimate Multisite में कोई domain map किया जाता है:

1. Integration ServerPilot से domains की वर्तमान सूची प्राप्त करता है
2. यह नए domain को सूची में जोड़ता है (साथ ही www version भी, यदि लागू हो)
3. यह अपडेटेड सूची को API के माध्यम से ServerPilot को भेजता है
4. ServerPilot आपके application के लिए domain सूची को अपडेट करता है

### SSL Certificate प्रबंधन

Domains sync होने के बाद:

1. Integration आपके application के लिए AutoSSL को automatically enable करता है
2. ServerPilot Let's Encrypt का उपयोग करके SSL certificate जारी करने और install करने का काम संभालता है
3. ServerPilot SSL certificates के automatic renewal को भी संभालता है

## SSL Certificate Verification

यह integration ServerPilot के लिए SSL certificate verification के प्रयासों की संख्या बढ़ाने के लिए configured है, क्योंकि ServerPilot को SSL certificates जारी करने और install करने में कुछ समय लग सकता है। By default, यह 5 बार तक प्रयास करता है, लेकिन इसे filters का उपयोग करके adjust किया जा सकता है।

## समस्या निवारण

### API Connection की समस्याएं
- सुनिश्चित करें कि आपकी Client ID और API Key सही हैं
- जांचें कि आपकी App ID सही है
- सुनिश्चित करें कि आपके ServerPilot account के पास आवश्यक permissions हैं

### SSL Certificate की समस्याएं
- ServerPilot को SSL certificates जारी करने से पहले यह आवश्यक है कि domains के पास valid DNS records हों जो आपके सर्वर की ओर point करते हों
- अगर SSL certificates जारी नहीं हो रहे हैं, तो जांचें कि आपके domains सही ढंग से आपके सर्वर के IP address की ओर point कर रहे हैं
- ServerPilot को SSL certificates जारी करने और install करने में कुछ समय लग सकता है (आमतौर पर 5-15 मिनट)

### Domain नहीं जोड़ा गया
- किसी भी error message के लिए Ultimate Multisite logs जांचें
- सुनिश्चित करें कि domain पहले से ServerPilot में नहीं जोड़ा गया है
- सुनिश्चित करें कि आपका ServerPilot plan उन domains की संख्या को support करता है जो आप जोड़ रहे हैं

### Domain हटाना
- वर्तमान में, ServerPilot API individual domains को हटाने का कोई तरीका प्रदान नहीं करता
- जब Ultimate Multisite में कोई domain mapping हटाई जाती है, तो integration हटाए गए domain को बाहर करने के लिए ServerPilot में domain सूची को अपडेट करता है
