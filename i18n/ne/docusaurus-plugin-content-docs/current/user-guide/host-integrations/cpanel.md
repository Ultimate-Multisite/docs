---
title: cPanel एकीकरण
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel एकीकरण (Integration)

## अवलोकन (Overview)
cPanel धेरै साझा र समर्पित होस्टिङ प्रदायकहरूद्वारा प्रयोग गरिने सबैभन्दा लोकप्रिय वेब होस्टिङ कन्ट्रोल प्यानलहरू मध्ये एक हो। यो एकीकरणले Ultimate Multisite र cPanel बीच स्वचालित डोमेन सिङ्क्रोनाइजेसन (syncing) सक्षम गर्दछ, जसले तपाईंलाई आफ्नो cPanel खातामा डोमेन एलायस (aliases) र सबडोमेनहरू स्वचालित रूपमा थबाउन अनुमति दिन्छ।

## सुविधाहरू (Features)
- cPanel मा स्वचालित एडऑन डोमेन निर्माण
- cPanel मा स्वचालित सबडोमेन निर्माण (सबडोमेन मल्टीसाइट इन्स्टलेसनका लागि)
- म्यापिङहरू मेटाउँदा डोमेन हटाउने कार्य

## आवश्यकताहरू (Requirements)
तपाईंको `wp-config.php` फाइलमा निम्न स्थिरांकहरू (constants) परिभाषित गर्नुपर्छ:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

वैकल्पिक रूपमा, तपाईं निम्न पनि परिभाषित गर्न सक्नुहुन्छ:

```php
define('WU_CPANEL_PORT', 2083); // डिफाल्ट पोर्ट 2083 हो
define('WU_CPANEL_ROOT_DIR', '/public_html'); // डिफाल्ट रूट डाइरेक्टरी /public_html हो
```

## सेटअप निर्देशनहरू (Setup Instructions)

### १. आफ्नो cPanel प्रमाणहरू प्राप्त गर्नुहोस् (Get Your cPanel Credentials)

१. आफ्नो होस्टिङ प्रदायकबाट आफ्नो cPanel username र password लिनुहोस्।
२. आफ्नो cPanel host पत्ता लगाउनुहोस् (सामान्यतया `cpanel.yourdomain.com` वा `yourdomain.com:2083`)।

### २. wp-config.php मा स्थिरांकहरू थप्नुहोस् (Add Constants to wp-config.php)

निम्न स्थिरांकहरू आफ्नो `wp-config.php` फाइलमा थप्नुहोस्:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

वैकल्पिक रूपमा, तपाईं पोर्ट र रूट डाइरेक्टरीलाई अनुकूलित (customize) गर्न सक्नुहुन्छ:

```php
define('WU_CPANEL_PORT', 2083); // यदि तपाईंको cPanelले फरक पोर्ट प्रयोग गर्छ भने परिवर्तन गर्नुहोस्
define('WU_CPANEL_ROOT_DIR', '/public_html'); // यदि तपाईंको डकुमेन्ट रूट फरक छ भने परिवर्तन गर्नुहोस्
```

### ३. एकीकरण सक्षम गर्नुहोस् (Enable the Integration)

१. आफ्नो WordPress एडमिनमा, Ultimate Multisite > Settings मा जानुहोस्।
२. "Domain Mapping" ट्याबमा जानुहोस्।
३. तल स्क्रोल गरेर "Host Integrations" मा जानुहोस्।
४. cPanel integration लाई सक्षम (Enable) गर्नुहोस्।
५. "Save Changes" मा क्लिक गर्नुहोस्।

## यो कसरी काम गर्छ

### Addon Domains

Ultimate Multisite मा डोमेन नक्सा (map) गरिएपछि:

१. यो इंटीग्रेशनले डोमेनलाई addon domain को रूपमा थप्न cPanel को API मा अनुरोध पठाउँछ।
२. डोमेनलाई तपाईंको रूट डाइरेक्टरी (root directory) मा इंगित गर्न कन्फिगर गरिएको हुन्छ।
३. जब कुनै डोमेन नक्सा हटाउनुहुन्छ, तब इंटीग्रेशनले cPanel बाट addon domain लाई हटाउनेछ।

### Subdomains

सबडोमेन मल्टीसाइट इन्स्टलेसनका लागि, नयाँ साइट सिर्जना गर्दा:

१. यो इंटीग्रेशनले पूरा डोमेनबाट सबडोमेन भाग निकालिन्छ।
२. यसले सबडोमेन थप्न cPanel को API मा अनुरोध पठाउँछ।
३. सबडोमेनलाई तपाईंको रूट डाइरेक्टरीमा इंगित गर्न कन्फिगर गरिएको हुन्छ।

## महत्त्वपूर्ण नोटहरू

- यो इंटीग्रेशनले तपाईंको cPanel खातासँग कुराकानी गर्न cPanel को API2 प्रयोग गर्दछ।
- addon domains र subdomains थप्नका लागि तपाईंको cPanel खातामा अनुमति (permissions) हुनुपर्छ।
- केही होस्टिङ प्रदायकहरूले तपाईंले बनाउन सक्ने addon domains वा subdomains को संख्या सीमित गर्न सक्छन्।
- यो इंटीग्रेशनले DNS कन्फिगरेसन ह्यान्डल गर्दैन; तपाईंले आफ्नो डोमेनलाई सर्भरको IP ठेगानामा इंगित गर्न अझै पनि आवश्यक छ।

## समस्या समाधान (Troubleshooting)

### API Connection Issues
- तपाईंको cPanel username र password सही छन् कि छैनन्, जाँच गर्नुहोस्।
- तपाईंको cPanel host सही छ र पहुँचयोग्य छ कि छैन भनेर जाँच गर्नुहोस्।
- तपाईंको cPanel खातामा आवश्यक अनुमतिहरू छन् भन्ने सुनिश्चित गर्नुहोस्।
- होस्टका लागि पूरा URL प्रयोग गर्ने प्रयास गर्नुहोस् (जस्तै: `https://cpanel.yourdomain.com`)

### Domain Not Added
- कुनै पनि त्रुटि सन्देशहरूको लागि Ultimate Multisite को logs जाँच गर्नुहोस्।
- डोमेन पहिले नै cPanel मा थपिएको छैन भनेर पुष्टि गर्नुहोस्।
- तपाईंको cPanel खाताले addon domains वा subdomains को सीमा पुगेको छैन भन्ने सुनिश्चित गर्नुहोस्।

### SSL प्रमाणपत्र समस्याहरू
- यो इन्टिग्रेशनले SSL प्रमाणपत्र जारी गर्ने काम गर्दैन।
- तपाईंले आफ्नो डोमेनका लागि SSL प्रमाणपत्र जारी गर्न cPanel का SSL/TLS टूल वा AutoSSL फिचर प्रयोग गर्नुपर्ने हुन्छ।
- वैकल्पिक रूपमा, तपाईं cPanel को AutoSSL सँग Let's Encrypt जस्ता सेवाहरू प्रयोग गर्न सक्नुहुन्छ।
