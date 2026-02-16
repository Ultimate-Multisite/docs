---
title: cPanel एकीकरण
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel इंटीग्रेशन

## अवलोकन
cPanel सबसे लोकप्रिय वेब होस्टिंग कंट्रोल पैनल्स में से एक है जिसका उपयोग कई shared और dedicated होस्टिंग प्रोवाइडर्स करते हैं। यह इंटीग्रेशन Ultimate Multisite और cPanel के बीच ऑटोमैटिक डोमेन सिंकिंग को सक्षम बनाता है, जिससे आप अपने cPanel अकाउंट में डोमेन aliases और subdomains को स्वचालित रूप से जोड़ सकते हैं।

## विशेषताएं
- cPanel में ऑटोमैटिक addon domain निर्माण
- cPanel में ऑटोमैटिक subdomain निर्माण (subdomain multisite इंस्टॉलेशन के लिए)
- मैपिंग डिलीट होने पर डोमेन हटाना

## आवश्यकताएं
आपकी `wp-config.php` फाइल में निम्नलिखित constants को define करना होगा:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

वैकल्पिक रूप से, आप यह भी define कर सकते हैं:

```php
define('WU_CPANEL_PORT', 2083); // डिफ़ॉल्ट 2083 है
define('WU_CPANEL_ROOT_DIR', '/public_html'); // डिफ़ॉल्ट /public_html है
```

## सेटअप निर्देश

### 1. अपने cPanel क्रेडेंशियल्स प्राप्त करें

1. अपने होस्टिंग प्रोवाइडर से अपना cPanel username और password प्राप्त करें
2. अपना cPanel host निर्धारित करें (आमतौर पर `cpanel.yourdomain.com` या `yourdomain.com:2083`)

### 2. wp-config.php में Constants जोड़ें

अपनी `wp-config.php` फाइल में निम्नलिखित constants जोड़ें:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

वैकल्पिक रूप से, आप port और root directory को कस्टमाइज़ कर सकते हैं:

```php
define('WU_CPANEL_PORT', 2083); // यदि आपका cPanel अलग port इस्तेमाल करता है तो बदलें
define('WU_CPANEL_ROOT_DIR', '/public_html'); // यदि आपका document root अलग है तो बदलें
```

### 3. इंटीग्रेशन सक्षम करें

1. अपने WordPress admin में, Ultimate Multisite > Settings पर जाएं
2. "Domain Mapping" टैब पर नेविगेट करें
3. "Host Integrations" तक स्क्रॉल करें
4. cPanel इंटीग्रेशन सक्षम करें
5. "Save Changes" पर क्लिक करें

## यह कैसे काम करता है

### Addon Domains

जब Ultimate Multisite में कोई डोमेन मैप किया जाता है:

1. इंटीग्रेशन cPanel के API को डोमेन को addon domain के रूप में जोड़ने के लिए एक request भेजता है
2. डोमेन को आपकी root directory की ओर point करने के लिए configure किया जाता है
3. जब कोई domain mapping हटाई जाती है, तो इंटीग्रेशन cPanel से addon domain को हटा देगा

### Subdomains

Subdomain multisite इंस्टॉलेशन के लिए, जब कोई नई साइट बनाई जाती है:

1. इंटीग्रेशन पूर्ण डोमेन से subdomain भाग निकालता है
2. यह subdomain जोड़ने के लिए cPanel के API को एक request भेजता है
3. Subdomain को आपकी root directory की ओर point करने के लिए configure किया जाता है

## महत्वपूर्ण नोट्स

- इंटीग्रेशन आपके cPanel अकाउंट के साथ संवाद करने के लिए cPanel के API2 का उपयोग करता है
- आपके cPanel अकाउंट के पास addon domains और subdomains जोड़ने की permissions होनी चाहिए
- कुछ होस्टिंग प्रोवाइडर्स addon domains या subdomains की संख्या सीमित कर सकते हैं
- इंटीग्रेशन DNS कॉन्फ़िगरेशन को हैंडल नहीं करता; आपको अभी भी अपने डोमेन्स को अपने सर्वर के IP address की ओर point करना होगा

## समस्या निवारण

### API कनेक्शन समस्याएं
- सत्यापित करें कि आपका cPanel username और password सही हैं
- जांचें कि आपका cPanel host सही है और accessible है
- सुनिश्चित करें कि आपके cPanel अकाउंट के पास आवश्यक permissions हैं
- host के लिए पूरा URL इस्तेमाल करने का प्रयास करें (जैसे, `https://cpanel.yourdomain.com`)

### डोमेन नहीं जुड़ा
- किसी भी error messages के लिए Ultimate Multisite logs जांचें
- सत्यापित करें कि डोमेन पहले से cPanel में नहीं जोड़ा गया है
- सुनिश्चित करें कि आपका cPanel अकाउंट addon domains या subdomains की अपनी सीमा तक नहीं पहुंचा है

### SSL Certificate समस्याएं
- इंटीग्रेशन SSL certificate जारी करने को हैंडल नहीं करता
- आपको अपने डोमेन्स के लिए SSL certificates जारी करने हेतु cPanel के SSL/TLS tools या AutoSSL feature का उपयोग करना होगा
- वैकल्पिक रूप से, आप cPanel के AutoSSL के साथ Let's Encrypt जैसी सेवा का उपयोग कर सकते हैं
