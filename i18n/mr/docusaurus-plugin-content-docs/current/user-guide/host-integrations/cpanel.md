---
title: cPanel एकत्रीकरण
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel इंटिग्रेशन

## आढावा
cPanel हे सर्वात लोकप्रिय वेब होस्टिंग कंट्रोल पॅनेल आहे, जे अनेक shared आणि dedicated होस्टिंग प्रोव्हायडर वापरतात. हे इंटिग्रेशन Ultimate Multisite आणि cPanel यांच्यात आपोआप डोमेन सिंकिंग करण्यास मदत करते, ज्यामुळे तुम्ही तुमच्या cPanel अकाउंटमध्ये डोमेन aliases आणि subdomains आपोआप जोडू शकता.

## वैशिष्ट्ये
- cPanel मध्ये आपोआप addon domain तयार करणे
- cPanel मध्ये आपोआप subdomain तयार करणे (subdomain multisite इन्स्टॉलेशनसाठी)
- मॅपिंग्ज हटवल्यावर डोमेन काढून टाकणे

## आवश्यकता
तुमच्या `wp-config.php` फाइलमध्ये खालील constants परिभाषित करणे आवश्यक आहे:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

पर्यायी म्हणून, तुम्ही हे देखील परिभाषित करू शकता:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## सेटअप सूचना

### 1. तुमची cPanel क्रेडेन्शियल्स मिळवा

1. तुमच्या होस्टिंग प्रोव्हायडरकडून तुमचे cPanel युजरनेम आणि पासवर्ड मिळवा
2. तुमचा cPanel host ठरवा (सामान्यतः `cpanel.yourdomain.com` किंवा `yourdomain.com:2083`)

### 2. wp-config.php मध्ये Constants जोडा

तुमच्या `wp-config.php` फाइलमध्ये खालील constants जोडा:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

पर्यायी म्हणून, तुम्ही port आणि root directory कस्टमाइझ करू शकता:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. इंटिग्रेशन सक्षम करा

1. तुमच्या WordPress admin मध्ये, Ultimate Multisite > Settings वर जा
2. "Domain Mapping" टॅबवर नेव्हिगेट करा
3. "Host Integrations" पर्यंत खाली स्क्रोल करा
4. cPanel इंटिग्रेशन सक्षम करा
5. "Save Changes" वर क्लिक करा

## हे कसे काम करते

### Addon Domains

जेव्हा Ultimate Multisite मध्ये डोमेन मॅप केला जातो:

1. इंटिग्रेशन cPanel च्या API ला डोमेन addon domain म्हणून जोडण्यासाठी रिक्वेस्ट पाठवते
2. डोमेन तुमच्या root directory कडे पॉइंट करण्यासाठी कॉन्फिगर केला जातो
3. जेव्हा डोमेन मॅपिंग हटवली जाते, तेव्हा इंटिग्रेशन cPanel मधून addon domain काढून टाकते

### Subdomains

Subdomain multisite इन्स्टॉलेशनसाठी, जेव्हा नवीन साइट तयार होते:

1. इंटिग्रेशन पूर्ण डोमेनमधून subdomain भाग काढते
2. ते cPanel च्या API ला subdomain जोडण्यासाठी रिक्वेस्ट पाठवते
3. Subdomain तुमच्या root directory कडे पॉइंट करण्यासाठी कॉन्फिगर केला जातो

## महत्त्वाच्या नोट्स

- इंटिग्रेशन तुमच्या cPanel अकाउंटशी संवाद साधण्यासाठी cPanel च्या API2 चा वापर करते
- तुमच्या cPanel अकाउंटला addon domains आणि subdomains जोडण्याची परवानगी असणे आवश्यक आहे
- काही होस्टिंग प्रोव्हायडर तुम्ही तयार करू शकणाऱ्या addon domains किंवा subdomains च्या संख्येवर मर्यादा घालू शकतात
- इंटिग्रेशन DNS कॉन्फिगरेशन हाताळत नाही; तुम्हाला अजूनही तुमचे डोमेन्स तुमच्या सर्व्हरच्या IP पत्त्याकडे पॉइंट करणे आवश्यक आहे

## समस्यानिवारण

### API कनेक्शन समस्या
- तुमचे cPanel युजरनेम आणि पासवर्ड बरोबर आहेत का ते तपासा
- तुमचा cPanel host बरोबर आणि ॲक्सेसिबल आहे का ते तपासा
- तुमच्या cPanel अकाउंटला आवश्यक परवानग्या आहेत याची खात्री करा
- host साठी पूर्ण URL वापरून पहा (उदा., `https://cpanel.yourdomain.com`)

### डोमेन जोडला गेला नाही
- कोणत्याही एरर मेसेजेससाठी Ultimate Multisite लॉग्ज तपासा
- डोमेन आधीच cPanel मध्ये जोडला गेला नाही याची खात्री करा
- तुमच्या cPanel अकाउंटने addon domains किंवा subdomains ची मर्यादा गाठली नाही याची खात्री करा

### SSL सर्टिफिकेट समस्या
- इंटिग्रेशन SSL सर्टिफिकेट जारी करणे हाताळत नाही
- तुमच्या डोमेन्ससाठी SSL सर्टिफिकेट जारी करण्यासाठी तुम्हाला cPanel चे SSL/TLS टूल्स किंवा AutoSSL फीचर वापरावे लागेल
- पर्यायी म्हणून, तुम्ही cPanel च्या AutoSSL सोबत Let's Encrypt सारखी सेवा वापरू शकता
