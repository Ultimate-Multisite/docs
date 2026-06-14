---
title: साइबरप्यानल एकीकरण
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel एकीकरण

यो गाइडले अल्टीमेट मल्टिसिट साइबरप्यानल (Ultimate Multisite CyberPanel) एकीकरण कसरी कन्फिगर गर्ने भन्ने बारे बताउँछ ताकि तपाईंको नेटवर्कमा नक्सा गरिएका डोमेनहरूलाई स्वचालित रूपमा (वाirtual होस्टको रूपमा) CyberPanel मा थप्ने र हटाउने गरी, Let's Encrypt मार्फत वैकल्पिक ऑटो-SSL प्रविधिको माध्यमबाट SSL पनि उपलब्ध गराउन सकिन्छ।

## यो के गर्छ

- जब अल्टीमेट मल्टिसिटमा कुनै डोमेन नक्सा गरिन्छ, तब एकीकरणले उक्त डोमेनको लागि वआर्चुअल होस्ट बनाउन CyberPanel API लाई कल गर्छ।
- जब डोमेन नक्सा हटाउँदा, एकीकरणले सम्बन्धित वआर्चुअल होस्ट मेटाउन API लाई कल गर्छ।
- यदि ऑटो-SSL सक्षम गरिएको छ भने, वआर्चुअल होस्ट सिर्जना गरेपछि एकीकरणले तुरुन्तै Let's Encrypt प्रमाणपत्र जारी गर्ने प्रक्रिया सुरु गर्छ।
- डोमेन म्यापिङ सेटिङहरूमा तपाईंको "Auto-create www subdomain" सेटिङ अनुसार `www.` एलाइसलाई वैकल्पिक रूपमा थप्ने वा हटाउने काम गर्दछ।

## पूर्वशर्तहरू (Prerequisites)

- चलिरहेको CyberPanel इन्स्टेन्स (v2.3 वा सोभन्दा नयाँ सिफारिस गरिन्छ) जुन तपाईंको WordPress सर्भरबाट पहुँच गर्न सकिने हुनुपर्छ।
- CyberPanel मा पहिले नै रहेको वेबसाइट जसले तपाईंको WordPress नेटवर्क रूट सर्व गरिरहेको छ। एकीकरणले यस सर्भरमा नयाँ वआर्चुअल होस्टहरू जोड्दछ।
- CyberPanel API पहुँच सक्षम गरिएको हुनुपर्छ। प्रमाणीकरणका लागि तपाईंको CyberPanel एडमिन प्रयोगकर्ता नाम र पासवर्ड प्रयोग गरिन्छ।
- ऑटो-SSL ले वैध प्रमाणपत्र जारी गर्न सक्ने अवस्थामा, नक्सा गरिएका डोमेनहरूको लागि तपाईंको DNS रेकर्डहरू पहिले नै तपाईंको सर्भरको IP ठेगानामा इंगित गरिस हुनुपर्छ।

## आवश्यकताहरू (Requirements)

तपाईंको `wp-config.php` फाइलमा निम्न स्थिरांकहरू (constants) परिभाषित गर्नुपर्छ:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

वैकल्पिक रूपमा, तपाईं निम्न पनि परिभाषित गर्न सक्नुहुन्छ:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // डिफल্ট: true — डोमेन बनाइसकेपछि Let's Encrypt SSL जारी गर्नुहोस्
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // डिफल্ট: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL प्रमाणपत्र सम्पर्कका लागि प्रयोग गरिन्छ
```

## सेटअप निर्देशनहरू

### १. CyberPanel API सक्षम गर्नुहोस्

१. एडमिनको रूपमा आफ्नो CyberPanel ड्यासबोर्डमा लगइन गर्नुहोस्।
२. **Security** > **SSL** मा जानुहोस् र साइबरप्यानल इन्टरफेसमा SSL सक्रिय छ भने पुष्टि गर्नुहोस् (सुरक्षित API कलहरूको लागि आवश्यक)।
३. डिफल্ট रूपमा, CyberPanel API `https://your-server-ip:8090/api/` मा उपलब्ध हुन्छ। यसलाई सक्षम गर्न कुनै अतिरिक्त चरणहरू आवश्यक छैन — एडमिन प्रयोगकर्ताहरूको लागि यो डिफल্ট रूपमा सक्रिय हुन्छ।

### २. wp-config.php मा स्थिरांक (Constants) थप्नुहोस्

`/* That's all, stop editing! */` लाइनभन्दा पहिले आफ्नो `wp-config.php` फाइलमा निम्न स्थिरांकहरू थप्नुहोस्:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

ऑटो-SSL सक्षम गर्न (सिफारिस गरिन्छ):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### ३. एकीकरण (Integration) सक्षम गर्नुहोस्

१. आफ्नो WordPress नेटवर्क एडमिनमा, **Ultimate Multisite** > **Settings** मा जानुहोस्।
२. **Domain Mapping** ट्याबमा जानुहोस्।
३. तल स्क्रोल गरेर **Host Integrations** मा जानुहोस्।
४. **CyberPanel** एकीकरण (integration) सक्षम गर्नुहोस्।
५. **Save Changes** मा क्लिक गर्नुहोस्।

### ४. कनेक्टिविटी प्रमाणित गर्नुहोस्

सेटिंग्स विज़ार्डमा बिल्ट-इन कनेक्ट टेस्ट प्रयोग गर्नुहोस्:

१. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** मा जानुहोस्।
२. **Test Connection** मा क्लिक गर्नुहोस्।
३. सफलताको सन्देशले पुष्टि गर्छ कि प्लगइन CyberPanel API पुग्न सक्छ र सही रूपमा प्रमाणित गर्न सक्छ।

## यो कसरी काम गर्छ

### डोमेन मैपिंग (Domain Mapping)

Ultimate Multisite मा कुनै डोमेन जब मैप गरिन्छ:

१. यो इन्टिग्रेशनले तपाईंको CyberPanel होस्टमा `/api/createWebsite` मा `POST` अनुरोध पठाउँछ।
२. CyberPanel ले कन्फिगर गरिएको प्याकेज अन्तर्गत डोमेनका लागि नयाँ भर्चुअल होस्ट बनाउँछ।
३. डकुमेन्ट रूट (document root) लाई तपाईंको WordPress नेटवर्क रूट डाइरेक्टरीमा इंगित गर्न सेट गरिन्छ।
४. जब डोमेन मैपिंग हटाउन सकिन्छ, इन्टिग्रेशनले भर्चुअल होस्ट सफा गर्न `/api/deleteWebsite` को कल गर्छ।

### ऑटो-SSL (Auto-SSL)

जब `WU_CYBERPANEL_AUTO_SSL` लाई `true` सेट गरिएको हुन्छ:

१. भर्चुअल होस्ट बनाइसकेपछि, इन्टिग्रेशनले डोमेनको लागि `/api/issueSSL` को कल गर्छ।
२. CyberPanel ले ACME HTTP-01 च्याले प्रयोग गरेर Let's Encrypt प्रमाणपत्र अनुरोध गर्छ।
३. प्रमाण पत्र समाप्त हुनुअघि CyberPanel द्वारा स्वचालित रूपमा नवीकरण गरिन्छ।

> **महत्वपूर्ण:** Let's Encrypt ले डोमेनलाई प्रमाणित गर्नको लागि DNS लाई तपाईंको सर्भरको IP ठेगानामा पूर्ण रूपमा प्रवर्द्धित (propagated) गरिसक्नुपर्छ। यदि मैपिंग गरेपछि SSL जारी गर्दा तुरुन्तै असफल भएमा, DNS प्रवर्द्धनको लागि पर्खनुहोस् र **SSL** > **Manage SSL** अन्तर्गत CyberPanel ड्यासबोर्डबाट पुनः ट्रिगर गर्नुहोस्।

### www सबडोमेन (www Subdomain)

यदि तपाईंको डोमेन मैपिंग सेटिङहरूमा **Auto-create www subdomain** सक्षम गरिएको छ भने, इन्टिग्रेशनले `www.<domain>` को लागि भर्चुअल होस्ट एलाइस पनि बनाउँछ र ऑटो-SSL अन हुँदा एपिक्स (apex) र www दुवै संस्करणलाई समेट्ने प्रमाणपत्र जारी गर्छ।

### इमेल फरवर्डरहरू (Email Forwarders)

जब [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon सक्रिय हुन्छ, तब CyberPanel ले ग्राहक इमेल फर्वार्डरहरू पनि प्रदान गर्न सक्छ। फर्वार्डरले पूर्ण मेलबक्स बनाउनुको सट्टा डोमेन ठेगादाबाट सन्देशहरू अर्को इनबक्समा रूट गर्छ, जुन `info@customer-domain.test` वा `support@customer-domain.test` जस्ता अलिअसिहरूका लागि उपयोगी हुन्छ।

ग्राहकहरूको लागि फर्वार्डर सक्षम गर्नुअघि:

१. माथिका CyberPanel constants सेट गरिएका छन् र कनेक्ट परीक्षण पास भएको कुरा पुष्टि गर्नुहोस्।
२. Emails addon सेटिङहरूमा CyberPanel ईमेल प्रदायक सक्रिय गर्नुहोस्।
३. फर्वार्डर बनाउनुअघि ग्राहकको डोमेन पहिले नै CyberPanel मा मौजूद छ कि छैन भनेर पुष्टि गर्नुहोस्।
४. एक परीक्षण फर्वार्डर बनाउनुहोस् र त्यस मार्फत सन्देश पठाएर उत्पादन योजनाहरूमा यो फिचर प्रस्ताव गर्नुअघि यसबाट प्रयोग गर्नुहोस्।

यदि फर्वार्डर निर्माण असफल भएमा, सबैभन्दा पहिले Ultimate Multisite गतिविधि लगहरू (activity logs) जाँच गर्नुहोस्, त्यसपछि CyberPanel मा स्रोत डोमेन मौजूद छ र API प्रयोगकर्तासँग इमेल व्यवस्थापन अनुमतिहरू छन् कि छैनन् भने पुष्टि गर्नुहोस्।

## कन्फिगरेसन सन्दर्भ

| Constant | आवश्यक | डिफल্ট मान | विवरण |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | हो | — | पोर्ट सहित तपाईंको CyberPanel इन्स्टन्सको पूर्ण URL, जस्तै: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | हो | — | CyberPanel एडमिन प्रयोगकर्ता नाम |
| `WU_CYBERPANEL_PASSWORD` | हो | — | CyberPanel एडमिन पासवर्ड |
| `WU_CYBERPANEL_PACKAGE` | हो | `Default` | नयाँ भर्चुअल होस्टहरूमा तोक्न सकिने CyberPanel होस्टिङ प्याकेज |
| `WU_CYBERPANEL_AUTO_SSL` | होइन | `true` | डोमेन निर्माण पछि Let's Encrypt SSL प्रमाणपत्र जारी गर्नुहोस् |
| `WU_CYBERPANEL_PHP_VERSION` | होइन | `PHP 8.2` | नयाँ भर्चुअल होस्टहरूको लागि PHP संस्करण (CyberPanel मा स्थापित गरिएको संस्करणसँग मेल खानुपर्छ) |
| `WU_CYBERPANEL_EMAIL` | होइन | — | SSL प्रमाणपत्र दर्ताका लागि सम्पर्क इमेल |

## महत्त्वपूर्ण नोटहरू

साइबरप्यानलको API ले सेसन-आधारित टोकन प्रमाणीकरण प्रयोग गर्दछ। यो इन्टिग्रेशनले हरेक API कलमा स्वचालित रूपमा टोकन प्राप्त गर्ने काम गर्छ।
तपाईंको CyberPanel एडमिन खातामा वेबसाइटहरू बनाउने र मेटाउने अनुमति हुनुपर्छ।
CyberPanel डिफोल्ट रूपमा पोर्ट `8090` मा चल्छ। यदि तपाईंको सर्भरले फायरवाल प्रयोग गर्नुभएको छ भने, यो पोर्ट वर्डप्रेस एप्लिकेशन सर्भरबाट पहुँचयोग्य छन् कि छैनन् भनी सुनिश्चित गर्नुहोस्।
यो इन्टिग्रेशनले DNS रेकर्डहरू व्यवस्थापन गर्दैन। डोमेनलाई Ultimate Multisite मा नक्सा लगाउनुअघि तपाईंले डोमेनको DNS लाई आफ्नो सर्भरको IP ठेगानामा इंगित गर्नुपर्छ।
यदि तपाईं OpenLiteSpeed (OLS) प्रयोग गर्नुहुन्छ भने, भर्चुअल होस्ट परिवर्तन गरेपछि स्वचालित रूपमा एक सफा रिस्टार्ट ट्रिगर हुन्छ। कुनै पनि म्यानुअल हस्तक्षेप आवश्यक छैन।

## समस्या निवारण (Troubleshooting)

### API Connection Refused (API कनेक्ट हुन अस्वीकार गरियो)

- आफ्नो सर्भर फायरवालमा पोर्ट `8090` खुला छ कि छैन भने जाँच गर्नुहोस्।
- `WU_CYBERPANEL_HOST` को मानले सही प्रोटोकल (`https://`) र पोर्ट समावेश गरेको छ वा छैन भनी पुष्टि गर्नुहोस्।
- तपाईंको CyberPanel SSL प्रमाणपत्र वैध छ कि छैन भने जाँच गर्नुहोस्; सेल्फ-सगाइन्ड प्रमाणपत्रहरूले TLS प्रमाणीकरणमा समस्या ल्याउन सक्छन्। केवल विश्वसनीय निजी नेटवर्क वातावरणमा `WU_CYBERPANEL_VERIFY_SSL` लाई `false` सेट गर्नुहोस्।

### Authentication Errors (प्रमाणीकरण त्रुटिहरू)

- CyberPanel मा सिधै लगइन गरेर आफ्नो `WU_CYBERPANEL_USERNAME` र `WU_CYBERPANEL_PASSWORD` सही छन् कि छैनन् भने जाँच गर्नुहोस्।
- असफल लगइन प्रयासहरूको पुनरावृत्तिपछि CyberPanel ले खाता लक गर्छ। यदि लकआउटहरू भएमा CyberPanel मा **Security** > **Brute Force Monitor** हेर्नुहोस्।

### Domain Not Created (डोमेन सिर्जना गरिएको छैन)

- API त्रुटि सन्देशहरूको लागि Ultimate Multisite गतिविधि लग (**Ultimate Multisite** > **Activity Logs**) जाँच गर्नुहोस्।
- `WU_CYBERPANEL_PACKAGE` मा परिभाषित प्याकेज CyberPanel मा (`Packages` > **List Packages**) मा अवस्थित छ कि छैन भनेर पुष्टि गर्नुहोस्।
- डोमेन पहिले नै वेबसाइटको रूपमा CyberPanel मा दर्ता गरिएको छैन भन्ने सुनिश्चित गर्नुहोस् — डुप्लिकेट वेबसाइट सिर्जना गर्दा त्रुटि आउँछ।

### SSL Certificate Not Issued (SSL प्रमाणपत्र जारी गरिएको छैन)

DNS पूर्ण रूपमा प्रवर्धित (propagated) भएको पुष्टि गर्नुहोस्: `dig +short your-domain.com` ले तपाईंको सर्भरको IP फिर्ता दिनुपर्छ।
Let's Encrypt दर सीमा (rate limits) लागू गर्दछ। यदि तपाईंले हालै नै एउटै डोमेनका लागि धेरै प्रमाणपत्रहरू जारी गर्नुभएको छ भने, पुनः प्रयास गर्नु अघि पर्खनुहोस्।
प्रमाणपत्र जारी हुन नसकेको विवरणको लागि **Logs** > **Error Logs** अन्तर्गत CyberPanel मा SSL लगहरू जाँच गर्नुहोस्।
एक वैकल्पिक उपायको रूपमा, तपाईंले CyberPanel बाट मैन्युअल रूपमा SSL जारी गर्न सक्नुहुन्छ: **SSL** > **Manage SSL** > डोमेन चयन गर्नुहोस् > **Issue SSL**।

## सन्दर्भहरू

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
