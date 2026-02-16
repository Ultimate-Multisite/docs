---
title: RunCloud एकत्रीकरण
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integration

## आढावा
RunCloud ही क्लाउड-आधारित सर्व्हर व्यवस्थापन प्लॅटफॉर्म आहे जी तुम्हाला तुमच्या स्वतःच्या क्लाउड सर्व्हरवर वेब ऍप्लिकेशन्स सहजपणे deploy आणि व्यवस्थापित करण्याची सुविधा देते. या integration द्वारे Ultimate Multisite आणि RunCloud यांच्यात स्वयंचलित domain syncing आणि SSL certificate व्यवस्थापन शक्य होते.

## वैशिष्ट्ये
- स्वयंचलित domain syncing
- SSL certificate व्यवस्थापन
- mappings हटवल्यावर domain काढून टाकणे

## आवश्यकता
तुमच्या `wp-config.php` फाइलमध्ये खालील constants परिभाषित केलेले असणे आवश्यक आहे:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## सेटअप सूचना

### 1. तुमचे RunCloud API Credentials मिळवा

1. तुमच्या RunCloud dashboard मध्ये लॉग इन करा
2. "User Profile" वर जा (वरच्या उजव्या कोपऱ्यात तुमच्या profile picture वर क्लिक करा)
3. मेनूमधून "API" निवडा
4. तुमच्याकडे आधीपासून API Key नसल्यास "Generate API Key" वर क्लिक करा
5. तुमची API Key आणि API Secret कॉपी करा

### 2. तुमचे Server आणि App IDs मिळवा

1. तुमच्या RunCloud dashboard मध्ये "Servers" वर जा
2. तुमचे WordPress multisite ज्या सर्व्हरवर host केलेले आहे तो सर्व्हर निवडा
3. Server ID URL मध्ये दिसतो: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications" वर जा आणि तुमचे WordPress application निवडा
5. App ID URL मध्ये दिसतो: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php मध्ये Constants जोडा

तुमच्या `wp-config.php` फाइलमध्ये खालील constants जोडा:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Integration सक्षम करा

1. तुमच्या WordPress admin मध्ये Ultimate Multisite > Settings वर जा
2. "Domain Mapping" tab वर नेव्हिगेट करा
3. "Host Integrations" पर्यंत खाली स्क्रोल करा
4. RunCloud integration सक्षम करा
5. "Save Changes" वर क्लिक करा

## हे कसे काम करते

जेव्हा Ultimate Multisite मध्ये domain map केला जातो:

1. Integration RunCloud च्या API ला तुमच्या application मध्ये domain जोडण्यासाठी request पाठवते
2. domain यशस्वीरित्या जोडला गेल्यास, integration SSL certificates देखील पुन्हा deploy करते
3. domain mapping हटवल्यावर, integration RunCloud मधून domain काढून टाकते

subdomain installations साठी, तुमच्या network मध्ये नवीन साइट्स जोडल्यावर integration आपोआप RunCloud मध्ये subdomains तयार करते.

## समस्यानिवारण

### API Connection समस्या
- तुमचे API credentials बरोबर आहेत का ते तपासा
- तुमचे server आणि app IDs बरोबर आहेत का ते तपासा
- तुमच्या RunCloud खात्याला आवश्यक permissions आहेत का याची खात्री करा

### SSL Certificate समस्या
- RunCloud ला SSL certificates जारी करण्यासाठी काही वेळ लागू शकतो
- तुमचे domains तुमच्या सर्व्हरच्या IP address कडे योग्यरित्या point करत आहेत का ते तपासा
- तुमच्या application साठी RunCloud SSL settings तपासा

### Domain जोडला गेला नाही
- कोणत्याही error messages साठी Ultimate Multisite logs तपासा
- domain आधीच RunCloud मध्ये जोडलेला नाही याची खात्री करा
- तुमचा RunCloud plan multiple domains ला support करतो याची खात्री करा
