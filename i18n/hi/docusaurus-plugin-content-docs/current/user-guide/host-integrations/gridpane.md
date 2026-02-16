---
title: GridPane इंटीग्रेशन
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integration

## अवलोकन
GridPane एक विशेष WordPress hosting control panel है जो पेशेवर WordPress डेवलपर्स के लिए बनाया गया है। यह integration Ultimate Multisite और GridPane के बीच automatic domain syncing और SSL certificate management को सक्षम करता है।

## सुविधाएं
- Automatic domain syncing
- SSL certificate management
- SUNRISE constant का automatic configuration

## आवश्यकताएं
आपकी `wp-config.php` फाइल में निम्नलिखित constants को define करना होगा:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## सेटअप निर्देश

### 1. अपने GridPane API Credentials प्राप्त करें

1. अपने GridPane dashboard में लॉग इन करें
2. "Settings" > "API" पर जाएं
3. अगर आपके पास पहले से API key नहीं है तो एक generate करें
4. अपनी API key कॉपी करें

### 2. अपने Server और Site IDs प्राप्त करें

1. अपने GridPane dashboard में "Servers" पर जाएं
2. वह server चुनें जहां आपकी WordPress multisite hosted है
3. Server ID नोट करें (यह URL में या server details page पर दिखाई देता है)
4. "Sites" पर जाएं और अपनी WordPress site चुनें
5. Site ID नोट करें (यह URL में या site details page पर दिखाई देता है)

### 3. wp-config.php में Constants जोड़ें

अपनी `wp-config.php` फाइल में निम्नलिखित constants जोड़ें:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Integration सक्षम करें

1. अपने WordPress admin में Ultimate Multisite > Settings पर जाएं
2. "Domain Mapping" tab पर जाएं
3. "Host Integrations" तक स्क्रॉल करें
4. GridPane integration को enable करें
5. "Save Changes" पर क्लिक करें

## यह कैसे काम करता है

जब Ultimate Multisite में कोई domain map किया जाता है:

1. Integration GridPane के API को आपकी site में domain जोड़ने के लिए request भेजता है
2. GridPane स्वचालित रूप से SSL certificate provisioning संभालता है
3. जब कोई domain mapping हटाई जाती है, तो integration GridPane से domain को हटा देता है

Integration स्वचालित रूप से आपकी wp-config.php फाइल में SUNRISE constant को भी संभालता है, जो domain mapping के सही ढंग से काम करने के लिए आवश्यक है।

## SUNRISE Constant Management

GridPane integration की एक अनोखी विशेषता यह है कि यह स्वचालित रूप से wp-config.php में SUNRISE constant को revert कर देता है ताकि GridPane के अपने domain mapping system के साथ कोई conflict न हो। इससे सुनिश्चित होता है कि दोनों systems बिना किसी समस्या के एक साथ काम कर सकते हैं।

## समस्या निवारण

### API Connection समस्याएं
- सत्यापित करें कि आपकी API key सही है
- जांचें कि आपके server और site IDs सही हैं
- सुनिश्चित करें कि आपके GridPane account के पास आवश्यक permissions हैं

### SSL Certificate समस्याएं
- GridPane को SSL certificates जारी करने में कुछ समय लग सकता है
- सत्यापित करें कि आपके domains सही ढंग से आपके server के IP address की ओर point कर रहे हैं
- अपनी site के लिए GridPane SSL settings जांचें

### Domain नहीं जोड़ा गया
- किसी भी error message के लिए Ultimate Multisite logs जांचें
- सत्यापित करें कि domain पहले से GridPane में नहीं जोड़ा गया है
- सुनिश्चित करें कि आपके domain के DNS records सही ढंग से configured हैं
