---
title: Cloudways एकीकरण
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways इंटीग्रेशन

## अवलोकन
Cloudways एक managed cloud hosting प्लेटफ़ॉर्म है जो आपको DigitalOcean, AWS, Google Cloud और अन्य cloud providers पर WordPress साइट्स deploy करने की सुविधा देता है। यह इंटीग्रेशन Ultimate Multisite और Cloudways के बीच automatic domain syncing और SSL certificate management को सक्षम बनाता है।

## विशेषताएं
- Automatic domain syncing
- SSL certificate management
- अतिरिक्त domains के लिए सपोर्ट
- SSL certificates के लिए DNS validation

## आवश्यकताएं
आपकी `wp-config.php` फ़ाइल में निम्नलिखित constants को define करना ज़रूरी है:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

वैकल्पिक रूप से, आप यह भी define कर सकते हैं:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## सेटअप निर्देश

### 1. अपने Cloudways API Credentials प्राप्त करें

1. अपने Cloudways dashboard में लॉग इन करें
2. "Account" > "API Keys" पर जाएं
3. अगर आपके पास पहले से API key नहीं है तो एक जनरेट करें
4. अपना email और API key कॉपी करें

### 2. अपने Server और Application IDs प्राप्त करें

1. अपने Cloudways dashboard में "Servers" पर जाएं
2. वह server चुनें जहां आपकी WordPress multisite होस्ट है
3. Server ID URL में दिखाई देगी: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" पर जाएं और अपना WordPress application चुनें
5. App ID URL में दिखाई देगी: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php में Constants जोड़ें

अपनी `wp-config.php` फ़ाइल में निम्नलिखित constants जोड़ें:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

अगर आपके पास अतिरिक्त domains हैं जो हमेशा शामिल होने चाहिए:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. इंटीग्रेशन सक्षम करें

1. अपने WordPress admin में Ultimate Multisite > Settings पर जाएं
2. "Domain Mapping" टैब पर नेविगेट करें
3. "Host Integrations" तक स्क्रॉल करें
4. Cloudways इंटीग्रेशन को enable करें
5. "Save Changes" पर क्लिक करें

## यह कैसे काम करता है

### Domain Syncing

जब Ultimate Multisite में कोई domain map किया जाता है:

1. इंटीग्रेशन सभी वर्तमान में mapped domains को retrieve करता है
2. यह नए domain को list में जोड़ता है (साथ ही www version भी, अगर लागू हो)
3. यह पूरी list को API के माध्यम से Cloudways को भेजता है
4. Cloudways आपके application के लिए domain aliases को अपडेट करता है

नोट: Cloudways API को हर बार domains की पूरी list भेजनी होती है, न कि सिर्फ individual domains को add या remove करना।

### SSL Certificate Management

Domains sync होने के बाद:

1. इंटीग्रेशन जांचता है कि कौन से domains के पास आपके server की ओर point करने वाले valid DNS records हैं
2. यह Cloudways को उन domains के लिए Let's Encrypt SSL certificates install करने का request भेजता है
3. Cloudways SSL certificate की issuance और installation को संभालता है

## अतिरिक्त Domains

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant आपको ऐसे अतिरिक्त domains specify करने की सुविधा देता है जो Cloudways के साथ sync करते समय हमेशा शामिल होने चाहिए। यह इनके लिए उपयोगी है:

- वे domains जो Ultimate Multisite द्वारा manage नहीं किए जाते
- Wildcard domains (जैसे, `*.example.com`)
- Development या staging domains

## समस्या निवारण

### API Connection संबंधी समस्याएं
- सत्यापित करें कि आपका email और API key सही है
- जांचें कि आपके server और application IDs सही हैं
- सुनिश्चित करें कि आपके Cloudways account के पास आवश्यक permissions हैं

### SSL Certificate संबंधी समस्याएं
- SSL certificates जारी करने से पहले Cloudways को यह ज़रूरी है कि domains के पास आपके server की ओर point करने वाले valid DNS records हों
- इंटीग्रेशन SSL certificates का request करने से पहले DNS records को validate करता है
- अगर SSL certificates जारी नहीं हो रहे हैं, तो जांचें कि आपके domains आपके server के IP address की ओर सही तरीके से point कर रहे हैं

### Domain नहीं जुड़ रहा
- किसी भी error messages के लिए Ultimate Multisite logs जांचें
- सत्यापित करें कि domain पहले से Cloudways में नहीं जोड़ा गया है
- सुनिश्चित करें कि आपका Cloudways plan उतने domains को support करता है जितने आप जोड़ रहे हैं
