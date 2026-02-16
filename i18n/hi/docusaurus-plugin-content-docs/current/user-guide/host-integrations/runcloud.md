---
title: RunCloud एकीकरण
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud इंटीग्रेशन

## अवलोकन
RunCloud एक क्लाउड-आधारित सर्वर मैनेजमेंट प्लेटफॉर्म है जो आपको अपने क्लाउड सर्वर पर वेब एप्लिकेशन को आसानी से deploy और मैनेज करने की सुविधा देता है। यह इंटीग्रेशन Ultimate Multisite और RunCloud के बीच ऑटोमैटिक डोमेन सिंकिंग और SSL सर्टिफिकेट मैनेजमेंट को सक्षम करता है।

## विशेषताएं
- ऑटोमैटिक डोमेन सिंकिंग
- SSL सर्टिफिकेट मैनेजमेंट
- मैपिंग हटाने पर डोमेन का ऑटोमैटिक रिमूवल

## आवश्यकताएं
आपकी `wp-config.php` फाइल में निम्नलिखित constants को define करना जरूरी है:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## सेटअप निर्देश

### 1. अपने RunCloud API क्रेडेंशियल्स प्राप्त करें

1. अपने RunCloud dashboard में लॉग इन करें
2. "User Profile" पर जाएं (ऊपरी-दाएं कोने में अपनी प्रोफाइल पिक्चर पर क्लिक करें)
3. मेनू से "API" चुनें
4. अगर आपके पास पहले से API Key नहीं है तो "Generate API Key" पर क्लिक करें
5. अपनी API Key और API Secret कॉपी करें

### 2. अपना Server और App ID प्राप्त करें

1. अपने RunCloud dashboard में, "Servers" पर जाएं
2. वह सर्वर चुनें जहां आपकी WordPress multisite होस्ट है
3. Server ID URL में दिखाई देगा: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications" पर जाएं और अपना WordPress एप्लिकेशन चुनें
5. App ID URL में दिखाई देगा: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php में Constants जोड़ें

अपनी `wp-config.php` फाइल में निम्नलिखित constants जोड़ें:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. इंटीग्रेशन को Enable करें

1. अपने WordPress admin में, Ultimate Multisite > Settings पर जाएं
2. "Domain Mapping" टैब पर जाएं
3. नीचे स्क्रॉल करके "Host Integrations" पर जाएं
4. RunCloud इंटीग्रेशन को enable करें
5. "Save Changes" पर क्लिक करें

## यह कैसे काम करता है

जब Ultimate Multisite में कोई डोमेन मैप किया जाता है:

1. इंटीग्रेशन RunCloud के API को एक request भेजता है ताकि डोमेन को आपके एप्लिकेशन में जोड़ा जा सके
2. अगर डोमेन सफलतापूर्वक जुड़ जाता है, तो इंटीग्रेशन SSL सर्टिफिकेट्स को भी redeploy करेगा
3. जब कोई डोमेन मैपिंग हटाई जाती है, तो इंटीग्रेशन RunCloud से उस डोमेन को हटा देगा

Subdomain इंस्टॉलेशन के लिए, जब आपके नेटवर्क में नई साइट्स जोड़ी जाती हैं तो इंटीग्रेशन RunCloud में subdomains का निर्माण अपने आप संभाल लेगा।

## समस्या निवारण

### API कनेक्शन समस्याएं
- सुनिश्चित करें कि आपके API क्रेडेंशियल्स सही हैं
- जांचें कि आपके server और app IDs सही हैं
- सुनिश्चित करें कि आपके RunCloud अकाउंट के पास जरूरी permissions हैं

### SSL सर्टिफिकेट समस्याएं
- RunCloud को SSL सर्टिफिकेट जारी करने में कुछ समय लग सकता है
- सुनिश्चित करें कि आपके डोमेन आपके सर्वर के IP address की ओर सही तरीके से point कर रहे हैं
- अपने एप्लिकेशन के लिए RunCloud SSL सेटिंग्स जांचें

### डोमेन नहीं जुड़ा
- किसी भी error message के लिए Ultimate Multisite logs जांचें
- सुनिश्चित करें कि डोमेन पहले से RunCloud में नहीं जुड़ा है
- सुनिश्चित करें कि आपका RunCloud प्लान मल्टीपल डोमेन को सपोर्ट करता है
