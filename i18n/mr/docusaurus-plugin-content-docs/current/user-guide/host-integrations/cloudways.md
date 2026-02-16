---
title: Cloudways एकत्रीकरण
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways इंटिग्रेशन

## आढावा
Cloudways हे एक मॅनेज्ड क्लाउड होस्टिंग प्लॅटफॉर्म आहे जे तुम्हाला DigitalOcean, AWS, Google Cloud आणि इतर क्लाउड प्रोव्हायडर्सवर WordPress साइट्स डिप्लॉय करण्याची सुविधा देते. हे इंटिग्रेशन Ultimate Multisite आणि Cloudways दरम्यान ऑटोमॅटिक डोमेन सिंकिंग आणि SSL सर्टिफिकेट मॅनेजमेंट सक्षम करते.

## वैशिष्ट्ये
- ऑटोमॅटिक डोमेन सिंकिंग
- SSL सर्टिफिकेट मॅनेजमेंट
- अतिरिक्त डोमेन्ससाठी सपोर्ट
- SSL सर्टिफिकेट्ससाठी DNS व्हॅलिडेशन

## आवश्यकता
तुमच्या `wp-config.php` फाइलमध्ये खालील constants डिफाइन करणे आवश्यक आहे:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

वैकल्पिकरित्या, तुम्ही हे देखील डिफाइन करू शकता:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## सेटअप सूचना

### १. तुमचे Cloudways API क्रेडेन्शियल्स मिळवा

१. तुमच्या Cloudways dashboard मध्ये लॉग इन करा
२. "Account" > "API Keys" वर जा
३. तुमच्याकडे आधीपासून API key नसेल तर एक जनरेट करा
४. तुमचा ईमेल आणि API key कॉपी करा

### २. तुमचे Server आणि Application IDs मिळवा

१. तुमच्या Cloudways dashboard मध्ये, "Servers" वर जा
२. तुमची WordPress multisite ज्या सर्व्हरवर होस्ट केली आहे तो सर्व्हर निवडा
३. Server ID URL मध्ये दिसतो: `https://platform.cloudways.com/server/{SERVER_ID}`
४. "Applications" वर जा आणि तुमचे WordPress application निवडा
५. App ID URL मध्ये दिसतो: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### ३. wp-config.php मध्ये Constants जोडा

तुमच्या `wp-config.php` फाइलमध्ये खालील constants जोडा:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

जर तुमच्याकडे अतिरिक्त डोमेन्स असतील जे नेहमी समाविष्ट केले जावेत:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### ४. इंटिग्रेशन सक्षम करा

१. तुमच्या WordPress admin मध्ये, Ultimate Multisite > Settings वर जा
२. "Domain Mapping" टॅबवर नेव्हिगेट करा
३. "Host Integrations" पर्यंत खाली स्क्रोल करा
४. Cloudways इंटिग्रेशन सक्षम करा
५. "Save Changes" वर क्लिक करा

## हे कसे काम करते

### डोमेन सिंकिंग

Ultimate Multisite मध्ये जेव्हा डोमेन मॅप केला जातो:

१. इंटिग्रेशन सध्या मॅप केलेले सर्व डोमेन्स रिट्रीव्ह करते
२. ते नवीन डोमेन यादीत जोडते (लागू असल्यास www व्हर्जनसह)
३. ते संपूर्ण यादी API द्वारे Cloudways ला पाठवते
४. Cloudways तुमच्या application साठी domain aliases अपडेट करते

टीप: Cloudways API ला प्रत्येक वेळी संपूर्ण डोमेन्सची यादी पाठवणे आवश्यक आहे, फक्त वैयक्तिक डोमेन्स जोडणे किंवा काढणे नाही.

### SSL सर्टिफिकेट मॅनेजमेंट

डोमेन्स सिंक झाल्यानंतर:

१. इंटिग्रेशन तपासते की कोणत्या डोमेन्सकडे तुमच्या सर्व्हरकडे पॉइंट करणारे वैध DNS रेकॉर्ड्स आहेत
२. ते त्या डोमेन्ससाठी Let's Encrypt SSL सर्टिफिकेट्स इन्स्टॉल करण्यासाठी Cloudways ला विनंती पाठवते
३. Cloudways SSL सर्टिफिकेट जारी करणे आणि इन्स्टॉलेशन हाताळते

## अतिरिक्त डोमेन्स

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant तुम्हाला अतिरिक्त डोमेन्स निर्दिष्ट करण्याची परवानगी देते जे Cloudways सोबत सिंक करताना नेहमी समाविष्ट केले जावेत. हे यासाठी उपयुक्त आहे:

- Ultimate Multisite द्वारे मॅनेज न केलेले डोमेन्स
- Wildcard डोमेन्स (उदा., `*.example.com`)
- डेव्हलपमेंट किंवा स्टेजिंग डोमेन्स

## समस्यानिवारण

### API कनेक्शन समस्या
- तुमचा ईमेल आणि API key योग्य आहेत याची खात्री करा
- तुमचे server आणि application IDs योग्य आहेत का ते तपासा
- तुमच्या Cloudways अकाउंटकडे आवश्यक परवानग्या आहेत याची खात्री करा

### SSL सर्टिफिकेट समस्या
- SSL सर्टिफिकेट्स जारी करण्यापूर्वी Cloudways ला डोमेन्सकडे तुमच्या सर्व्हरकडे पॉइंट करणारे वैध DNS रेकॉर्ड्स असणे आवश्यक आहे
- SSL सर्टिफिकेट्स विनंती करण्यापूर्वी इंटिग्रेशन DNS रेकॉर्ड्स व्हॅलिडेट करते
- जर SSL सर्टिफिकेट्स जारी होत नसतील, तर तुमचे डोमेन्स तुमच्या सर्व्हरच्या IP address कडे योग्यरित्या पॉइंट होत आहेत का ते तपासा

### डोमेन जोडला गेला नाही
- कोणत्याही एरर मेसेजेससाठी Ultimate Multisite लॉग्स तपासा
- डोमेन आधीच Cloudways मध्ये जोडलेला नाही याची खात्री करा
- तुम्ही जोडत असलेल्या डोमेन्सच्या संख्येला तुमचा Cloudways प्लॅन सपोर्ट करतो याची खात्री करा
