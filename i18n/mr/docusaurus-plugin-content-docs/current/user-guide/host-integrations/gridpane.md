---
title: GridPane एकत्रीकरण
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane इंटिग्रेशन

## आढावा
GridPane हे गंभीर WordPress व्यावसायिकांसाठी तयार केलेले एक विशेष WordPress होस्टिंग कंट्रोल पॅनेल आहे. हे इंटिग्रेशन Ultimate Multisite आणि GridPane यांच्यात स्वयंचलित डोमेन सिंकिंग आणि SSL सर्टिफिकेट व्यवस्थापन सक्षम करते.

## वैशिष्ट्ये
- स्वयंचलित डोमेन सिंकिंग
- SSL सर्टिफिकेट व्यवस्थापन
- SUNRISE constant चे स्वयंचलित कॉन्फिगरेशन

## आवश्यकता
तुमच्या `wp-config.php` फाइलमध्ये खालील constants परिभाषित करणे आवश्यक आहे:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## सेटअप सूचना

### 1. तुमची GridPane API क्रेडेन्शियल्स मिळवा

1. तुमच्या GridPane dashboard मध्ये लॉग इन करा
2. "Settings" > "API" वर जा
3. तुमच्याकडे आधीपासून नसेल तर API key तयार करा
4. तुमची API key कॉपी करा

### 2. तुमचे Server आणि Site IDs मिळवा

1. तुमच्या GridPane dashboard मध्ये, "Servers" वर जा
2. तुमची WordPress multisite ज्या सर्व्हरवर होस्ट केली आहे तो सर्व्हर निवडा
3. Server ID नोट करा (URL मध्ये किंवा सर्व्हर तपशील पेजवर दिसतो)
4. "Sites" वर जा आणि तुमची WordPress साइट निवडा
5. Site ID नोट करा (URL मध्ये किंवा साइट तपशील पेजवर दिसतो)

### 3. wp-config.php मध्ये Constants जोडा

तुमच्या `wp-config.php` फाइलमध्ये खालील constants जोडा:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. इंटिग्रेशन सक्षम करा

1. तुमच्या WordPress admin मध्ये, Ultimate Multisite > Settings वर जा
2. "Domain Mapping" टॅबवर जा
3. "Host Integrations" पर्यंत खाली स्क्रोल करा
4. GridPane इंटिग्रेशन सक्षम करा
5. "Save Changes" वर क्लिक करा

## हे कसे काम करते

जेव्हा Ultimate Multisite मध्ये एखादा डोमेन मॅप केला जातो:

1. इंटिग्रेशन तुमच्या साइटवर डोमेन जोडण्यासाठी GridPane च्या API ला विनंती पाठवते
2. GridPane स्वयंचलितपणे SSL सर्टिफिकेट प्रोव्हिजनिंग हाताळते
3. जेव्हा डोमेन मॅपिंग काढून टाकली जाते, तेव्हा इंटिग्रेशन GridPane मधून डोमेन काढून टाकते

इंटिग्रेशन तुमच्या wp-config.php फाइलमधील SUNRISE constant देखील स्वयंचलितपणे हाताळते, जे डोमेन मॅपिंग योग्यरित्या काम करण्यासाठी आवश्यक आहे.

## SUNRISE Constant व्यवस्थापन

GridPane इंटिग्रेशनचे एक अनोखे वैशिष्ट्य म्हणजे ते GridPane च्या स्वतःच्या डोमेन मॅपिंग सिस्टमशी संघर्ष टाळण्यासाठी wp-config.php मधील SUNRISE constant स्वयंचलितपणे रिव्हर्ट करते. हे सुनिश्चित करते की दोन्ही सिस्टम कोणत्याही समस्यांशिवाय एकत्र काम करू शकतात.

## समस्यानिवारण

### API कनेक्शन समस्या
- तुमची API key बरोबर आहे का ते तपासा
- तुमचे server आणि site IDs बरोबर आहेत का ते तपासा
- तुमच्या GridPane खात्याला आवश्यक परवानग्या आहेत याची खात्री करा

### SSL सर्टिफिकेट समस्या
- GridPane ला SSL सर्टिफिकेट जारी करण्यासाठी थोडा वेळ लागू शकतो
- तुमचे डोमेन तुमच्या सर्व्हरच्या IP पत्त्याकडे योग्यरित्या पॉइंट होत आहेत का ते तपासा
- तुमच्या साइटसाठी GridPane SSL सेटिंग्ज तपासा

### डोमेन जोडला गेला नाही
- कोणत्याही त्रुटी संदेशांसाठी Ultimate Multisite logs तपासा
- डोमेन आधीच GridPane मध्ये जोडलेला नाही याची खात्री करा
- तुमच्या डोमेनचे DNS रेकॉर्ड्स योग्यरित्या कॉन्फिगर केले आहेत याची खात्री करा
