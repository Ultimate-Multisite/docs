---
title: Cloudflare एकत्रीकरण
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare एकत्रीकरण

## आढावा
Cloudflare हे एक अग्रगण्य content delivery network (CDN) आणि सुरक्षा प्रदाता आहे जे वेबसाइट्सचे संरक्षण आणि वेग वाढवण्यास मदत करते. हे एकत्रीकरण Ultimate Multisite आणि Cloudflare दरम्यान स्वयंचलित डोमेन व्यवस्थापन सक्षम करते, विशेषतः subdomain multisite installations साठी.

## वैशिष्ट्ये
- Cloudflare मध्ये स्वयंचलित subdomain निर्मिती
- Proxied subdomain समर्थन
- DNS रेकॉर्ड व्यवस्थापन
- Ultimate Multisite admin मध्ये सुधारित DNS रेकॉर्ड प्रदर्शन

## आवश्यकता
खालील constants तुमच्या `wp-config.php` फाइलमध्ये परिभाषित करणे आवश्यक आहे:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## सेटअप सूचना

### 1. तुमची Cloudflare API Key मिळवा

1. तुमच्या Cloudflare dashboard मध्ये लॉग इन करा
2. "My Profile" वर जा (वरच्या उजव्या कोपऱ्यात तुमच्या email वर क्लिक करा)
3. मेनूमधून "API Tokens" निवडा
4. खालील परवानग्यांसह नवीन API token तयार करा:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. तुमचे API token कॉपी करा

### 2. तुमचा Zone ID मिळवा

1. तुमच्या Cloudflare dashboard मध्ये, तुम्हाला वापरायचा असलेला domain निवडा
2. Zone ID "Overview" tab मध्ये, "API" अंतर्गत उजव्या साइडबारमध्ये दिसतो
3. Zone ID कॉपी करा

### 3. wp-config.php मध्ये Constants जोडा

तुमच्या `wp-config.php` फाइलमध्ये खालील constants जोडा:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. एकत्रीकरण सक्षम करा

1. तुमच्या WordPress admin मध्ये, Ultimate Multisite > Settings वर जा
2. "Domain Mapping" tab वर जा
3. "Host Integrations" पर्यंत खाली स्क्रोल करा
4. Cloudflare एकत्रीकरण सक्षम करा
5. "Save Changes" वर क्लिक करा

## हे कसे कार्य करते

### Subdomain व्यवस्थापन

जेव्हा subdomain multisite installation मध्ये नवीन साइट तयार केली जाते:

1. एकत्रीकरण subdomain साठी CNAME रेकॉर्ड जोडण्यासाठी Cloudflare च्या API ला विनंती पाठवते
2. subdomain डीफॉल्टनुसार Cloudflare द्वारे proxied होण्यासाठी कॉन्फिगर केला जातो (हे filters सह बदलता येते)
3. जेव्हा साइट हटवली जाते, तेव्हा एकत्रीकरण Cloudflare मधून subdomain काढून टाकेल

### DNS रेकॉर्ड प्रदर्शन

हे एकत्रीकरण Ultimate Multisite admin मधील DNS रेकॉर्ड प्रदर्शन सुधारते:

1. थेट Cloudflare कडून DNS रेकॉर्ड्स मिळवणे
2. रेकॉर्ड्स proxied आहेत की नाही हे दाखवणे
3. DNS रेकॉर्ड्सबद्दल अतिरिक्त माहिती दाखवणे

## महत्त्वाच्या नोंदी

Cloudflare च्या अलीकडील अपडेट्सनुसार, wildcard proxying आता सर्व ग्राहकांसाठी उपलब्ध आहे. याचा अर्थ असा की subdomain multisite installations साठी Cloudflare एकत्रीकरण पूर्वीइतके महत्त्वाचे नाही, कारण तुम्ही Cloudflare मध्ये सहजपणे wildcard DNS रेकॉर्ड सेट करू शकता.

## समस्यानिवारण

### API कनेक्शन समस्या
- तुमचे API token बरोबर आहे आणि त्याला आवश्यक परवानग्या आहेत याची खात्री करा
- तुमचा Zone ID बरोबर आहे का ते तपासा
- तुमच्या Cloudflare खात्याला आवश्यक परवानग्या आहेत याची खात्री करा

### Subdomain जोडला गेला नाही
- कोणत्याही त्रुटी संदेशांसाठी Ultimate Multisite logs तपासा
- subdomain आधीच Cloudflare मध्ये जोडलेला नाही याची खात्री करा
- तुमचा Cloudflare plan तुम्ही तयार करत असलेल्या DNS रेकॉर्ड्सच्या संख्येला समर्थन देतो याची खात्री करा

### Proxying समस्या
- जर तुम्हाला subdomains proxied नको असतील, तर तुम्ही `wu_cloudflare_should_proxy` filter वापरू शकता
- काही वैशिष्ट्ये proxied असताना योग्यरित्या कार्य करू शकत नाहीत (उदा., काही WordPress admin फंक्शन्स)
- admin pages साठी cache bypass करण्यासाठी Cloudflare च्या Page Rules वापरण्याचा विचार करा
