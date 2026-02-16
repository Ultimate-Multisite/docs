---
title: ServerPilot एकत्रीकरण
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot एकत्रीकरण

## आढावा
ServerPilot ही DigitalOcean, Amazon, Google किंवा इतर कोणत्याही सर्व्हर प्रदात्यावर WordPress आणि इतर PHP वेबसाइट्स होस्ट करण्यासाठी एक क्लाउड सेवा आहे. हे एकत्रीकरण Ultimate Multisite आणि ServerPilot यांच्यात स्वयंचलित domain syncing आणि SSL प्रमाणपत्र व्यवस्थापन सक्षम करते.

## वैशिष्ट्ये
- स्वयंचलित domain syncing
- Let's Encrypt सह SSL प्रमाणपत्र व्यवस्थापन
- स्वयंचलित SSL नूतनीकरण

## आवश्यकता
खालील constants तुमच्या `wp-config.php` फाइलमध्ये परिभाषित केले पाहिजेत:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## सेटअप सूचना

### 1. तुमची ServerPilot API माहिती मिळवा

1. तुमच्या ServerPilot dashboard मध्ये लॉग इन करा
2. "Account" > "API" वर जा
3. तुमच्याकडे API key नसल्यास नवीन तयार करा
4. तुमची Client ID आणि API Key कॉपी करा

### 2. तुमची App ID मिळवा

1. तुमच्या ServerPilot dashboard मध्ये, "Apps" वर जा
2. तुमची WordPress multisite जिथे होस्ट केली आहे ती app निवडा
3. App ID URL मध्ये दिसते: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. wp-config.php मध्ये Constants जोडा

तुमच्या `wp-config.php` फाइलमध्ये खालील constants जोडा:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. एकत्रीकरण सक्षम करा

1. तुमच्या WordPress admin मध्ये, Ultimate Multisite > Settings वर जा
2. "Domain Mapping" tab वर जा
3. "Host Integrations" पर्यंत खाली स्क्रोल करा
4. ServerPilot एकत्रीकरण सक्षम करा
5. "Save Changes" वर क्लिक करा

## हे कसे कार्य करते

### Domain Syncing

Ultimate Multisite मध्ये domain मॅप केल्यावर:

1. एकत्रीकरण ServerPilot कडून सध्याची domains ची यादी मिळवते
2. ते यादीत नवीन domain जोडते (लागू असल्यास www आवृत्तीसह)
3. ते API द्वारे अद्यतनित यादी ServerPilot ला पाठवते
4. ServerPilot तुमच्या application साठी domain यादी अपडेट करते

### SSL प्रमाणपत्र व्यवस्थापन

Domains sync झाल्यानंतर:

1. एकत्रीकरण तुमच्या application साठी स्वयंचलितपणे AutoSSL सक्षम करते
2. ServerPilot Let's Encrypt वापरून SSL प्रमाणपत्र जारी करणे आणि स्थापित करणे हाताळते
3. ServerPilot SSL प्रमाणपत्रांचे स्वयंचलित नूतनीकरण देखील हाताळते

## SSL प्रमाणपत्र सत्यापन

हे एकत्रीकरण ServerPilot साठी SSL प्रमाणपत्र सत्यापन प्रयत्नांची संख्या वाढवण्यासाठी कॉन्फिगर केलेले आहे, कारण ServerPilot ला SSL प्रमाणपत्रे जारी आणि स्थापित करण्यास काही वेळ लागू शकतो. डीफॉल्टनुसार, ते 5 वेळा प्रयत्न करेल, परंतु filters वापरून हे समायोजित केले जाऊ शकते.

## समस्यानिवारण

### API कनेक्शन समस्या
- तुमची Client ID आणि API Key बरोबर असल्याची खात्री करा
- तुमची App ID बरोबर असल्याची तपासणी करा
- तुमच्या ServerPilot खात्याला आवश्यक परवानग्या असल्याची खात्री करा

### SSL प्रमाणपत्र समस्या
- SSL प्रमाणपत्रे जारी करण्यापूर्वी ServerPilot ला domains चे वैध DNS रेकॉर्ड्स तुमच्या सर्व्हरकडे निर्देशित असणे आवश्यक आहे
- SSL प्रमाणपत्रे जारी होत नसल्यास, तुमचे domains तुमच्या सर्व्हरच्या IP पत्त्याकडे योग्यरित्या निर्देशित आहेत का ते तपासा
- ServerPilot ला SSL प्रमाणपत्रे जारी आणि स्थापित करण्यास काही वेळ लागू शकतो (सामान्यतः 5-15 मिनिटे)

### Domain जोडले गेले नाही
- कोणत्याही त्रुटी संदेशांसाठी Ultimate Multisite logs तपासा
- Domain आधीच ServerPilot मध्ये जोडलेले नाही याची खात्री करा
- तुमचा ServerPilot plan तुम्ही जोडत असलेल्या domains च्या संख्येला सपोर्ट करतो याची खात्री करा

### Domain काढणे
- सध्या, ServerPilot API वैयक्तिक domains काढण्याचा मार्ग प्रदान करत नाही
- Ultimate Multisite मध्ये domain mapping काढले जाते तेव्हा, एकत्रीकरण काढलेले domain वगळण्यासाठी ServerPilot मधील domain यादी अपडेट करेल
