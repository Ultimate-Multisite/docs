---
title: CyberPanel एकीकरण
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration {#cyberpanel-integration}

यह गाइड बताती है कि Ultimate Multisite CyberPanel इंटीग्रेशन को कैसे कॉन्फ़िगर किया जाए, ताकि आपके नेटवर्क में मैप किए गए डोमेन स्वचालित रूप से CyberPanel में वर्चुअल होस्ट के रूप में जोड़े (और हटाए) जा सकें। इसमें Let's Encrypt के माध्यम से वैकल्पिक ऑटो-SSL प्रोविजनिंग भी शामिल है।

## यह क्या करता है {#what-it-does}

- जब Ultimate Multisite में कोई डोमेन मैप किया जाता है, तो इंटीग्रेशन उस डोमेन के लिए एक वर्चुअल होस्ट बनाने हेतु CyberPanel API को कॉल करता है।
- जब डोमेन मैपिंग हटा दी जाती है, तो इंटीग्रेशन संबंधित वर्चुअल होस्ट को हटाने के लिए API को कॉल करता है।
- जब ऑटो-SSL सक्षम होता है, तो इंटीग्रेशन वर्चुअल होस्ट बनने के तुरंत बाद Let's Encrypt सर्टिफिकेट जारी करने की प्रक्रिया शुरू करता है।
- यह वैकल्पिक रूप से, डोमेन मैपिंग सेटिंग्स में आपके "Auto-create www subdomain" सेटिंग के आधार पर `www.` एलियास को जोड़ता/हटाता है।

## पूर्व-आवश्यकताएं (Prerequisites) {#prerequisites}

- एक चल रहा CyberPanel इंस्टेंस (v2.3 या बाद का अनुशंसित) जो आपके WordPress सर्वर से सुलभ हो।
- CyberPanel में एक मौजूदा वेबसाइट जो पहले से ही आपके WordPress नेटवर्क रूट को होस्ट कर रही हो। इंटीग्रेशन नए वर्चुअल होस्ट को इसी सर्वर से जोड़ता है।
- CyberPanel API एक्सेस सक्षम होना चाहिए। प्रमाणीकरण (Authentication) के लिए आपके CyberPanel एडमिन यूज़रनेम और पासवर्ड का उपयोग किया जाता है।
- ऑटो-SSL द्वारा वैध सर्टिफिकेट जारी करने से पहले, मैप किए गए डोमेन के लिए आपके DNS रिकॉर्ड पहले से ही आपके सर्वर के IP पते की ओर इंगित (point) करने चाहिए।

## आवश्यकताएं (Requirements) {#requirements}

निम्नलिखित कॉन्स्टेंट्स को आपकी `wp-config.php` फ़ाइल में परिभाषित किया जाना चाहिए:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

वैकल्पिक रूप से, आप इन्हें भी परिभाषित कर सकते हैं:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // डिफ़ॉल्ट: true — डोमेन बनने के बाद Let's Encrypt SSL जारी करें
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // डिफ़ॉल्ट: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL सर्टिफिकेट संपर्क के लिए उपयोग किया जाता है
```

## सेटअप निर्देश (Setup Instructions) {#setup-instructions}

### 1. CyberPanel API सक्षम करें {#1-enable-the-cyberpanel-api}

1. एक एडमिनिस्ट्रेटर के रूप में अपने CyberPanel डैशबोर्ड में लॉग इन करें।
2. **Security** > **SSL** पर जाएं और पुष्टि करें कि SSL स्वयं CyberPanel इंटरफ़ेस पर सक्रिय है (सुरक्षित API कॉल के लिए आवश्यक)।
3. CyberPanel API डिफ़ॉल्ट रूप से `https://your-server-ip:8090/api/` पर उपलब्ध है। इसे सक्षम करने के लिए कोई अतिरिक्त कदम उठाने की आवश्यकता नहीं है — यह एडमिन उपयोगकर्ताओं के लिए डिफ़ॉल्ट रूप से चालू होता है।

### 2. wp-config.php में कॉन्स्टेंट्स जोड़ें {#2-add-constants-to-wp-configphp}

निम्नलिखित कॉन्स्टेंट्स को `/* That's all, stop editing! */` लाइन से पहले अपनी `wp-config.php` फ़ाइल में जोड़ें:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

ऑटो-SSL सक्षम करने के लिए (अनुशंसित):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. इंटीग्रेशन सक्षम करें {#3-enable-the-integration}

1. अपने WordPress नेटवर्क एडमिन में, **Ultimate Multisite** > **Settings** पर जाएं।
2. **Domain Mapping** टैब पर नेविगेट करें।
3. **Host Integrations** तक स्क्रॉल करें।
4. **CyberPanel** इंटीग्रेशन को सक्षम करें।
5. **Save Changes** पर क्लिक करें।

### 4. कनेक्टिविटी सत्यापित करें {#4-verify-connectivity}

सेटिंग्स विज़ार्ड में बिल्ट-इन कनेक्शन टेस्ट का उपयोग करें:

1. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** पर जाएं।
2. **Test Connection** पर क्लिक करें।
3. एक सफलता संदेश की पुष्टि करता है कि प्लगइन CyberPanel API तक पहुंच सकता है और सही ढंग से प्रमाणित हो सकता है।

## यह कैसे काम करता है (How It Works) {#how-it-works}

### डोमेन मैपिंग (Domain Mapping) {#domain-mapping}

जब Ultimate Multisite में कोई डोमेन मैप किया जाता है:

1. इंटीग्रेशन आपके CyberPanel होस्ट पर `/api/createWebsite` पर एक `POST` रिक्वेस्ट भेजता है।
2. CyberPanel कॉन्फ़िगर किए गए पैकेज के तहत डोमेन के लिए एक नया वर्चुअल होस्ट बनाता है।
3. डॉक्यूमेंट रूट को आपके WordPress नेटवर्क रूट डायरेक्टरी की ओर पॉइंट किया जाता है।
4. जब डोमेन मैपिंग हटा दी जाती है, तो इंटीग्रेशन वर्चुअल होस्ट को साफ़ करने के लिए `/api/deleteWebsite` को कॉल करता है।

### ऑटो-SSL (Auto-SSL) {#auto-ssl}

जब `WU_CYBERPANEL_AUTO_SSL` `true` होता है:

1. वर्चुअल होस्ट बनने के बाद, इंटीग्रेशन डोमेन के लिए `/api/issueSSL` को कॉल करता है।
2. CyberPanel ACME HTTP-01 चैलेंज का उपयोग करके Let's Encrypt सर्टिफिकेट का अनुरोध करता है।
3. सर्टिफिकेट की समाप्ति से पहले CyberPanel द्वारा स्वचालित रूप से नवीनीकृत किया जाता है।

> **महत्वपूर्ण:** Let's Encrypt को डोमेन को मान्य करने से पहले DNS का आपके सर्वर के IP पते तक पूरी तरह से प्रचारित (propagated) होना आवश्यक है। यदि मैपिंग के तुरंत बाद SSL जारी करने में विफलता होती है, तो DNS प्रचार होने का इंतजार करें और CyberPanel डैशबोर्ड में **SSL** > **Manage SSL** के तहत SSL को फिर से ट्रिगर करें।

### www सबडोमेन (www Subdomain) {#www-subdomain}

यदि आपकी Domain Mapping सेटिंग्स में **Auto-create www subdomain** सक्षम है, तो इंटीग्रेशन `www.<domain>` के लिए एक वर्चुअल होस्ट एलियास भी बनाता है और, जब ऑटो-SSL चालू होता है, तो अपेक्स और www दोनों वेरिएंट को कवर करने वाला सर्टिफिकेट जारी करता है।

### ईमेल फॉरवर्डर्स (Email Forwarders) {#email-forwarders}

जब [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) ऐडऑन सक्रिय होता है, तो CyberPanel ग्राहक ईमेल फॉरवर्डर्स भी प्रदान कर सकता है। फॉरवर्डर्स फॉरवर्डर्स संदेशों को एक डोमेन पते से दूसरे इनबॉक्स पर रूट करते हैं, बिना पूरा मेलबॉक्स बनाए, जो `info@customer-domain.test` या `support@customer-domain.test` जैसे एलियास के लिए उपयोगी है।

ग्राहकों के लिए फॉरवर्डर्स सक्षम करने से पहले:

1. पुष्टि करें कि ऊपर दिए गए CyberPanel कॉन्स्टेंट्स कॉन्फ़िगर किए गए हैं और कनेक्शन टेस्ट पास हो गया है।
2. ईमेल ऐडऑन सेटिंग्स में CyberPanel ईमेल प्रोवाइडर को सक्षम करें।
3. फॉरवर्डर बनाने से पहले पुष्टि करें कि ग्राहक डोमेन पहले से ही CyberPanel में मौजूद है।
4. प्रोडक्शन प्लान पर सुविधा देने से पहले एक टेस्ट फॉरवर्डर बनाएं और इसके माध्यम से एक संदेश भेजें।

यदि फॉरवर्डर बनाना विफल हो जाता है, तो पहले Ultimate Multisite गतिविधि लॉग (activity logs) की जांच करें, और फिर CyberPanel में पुष्टि करें कि स्रोत डोमेन मौजूद है और API उपयोगकर्ता के पास ईमेल-मैनेजमेंट अनुमतियाँ हैं।

## कॉन्फ़िगरेशन संदर्भ (Configuration Reference) {#configuration-reference}

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | आपके CyberPanel इंस्टेंस का पूर्ण URL, पोर्ट सहित, उदाहरण: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | CyberPanel एडमिन यूज़रनेम |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | CyberPanel एडमिन पासवर्ड |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | नए वर्चुअल होस्ट को असाइन करने के लिए CyberPanel होस्टिंग पैकेज |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | डोमेन बनाने के बाद Let's Encrypt SSL सर्टिफिकेट जारी करें |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | नए वर्चुअल होस्ट के लिए PHP संस्करण (CyberPanel में स्थापित संस्करण से मेल खाना चाहिए) |
| `WU_CYBERPANEL_EMAIL` | No | — | SSL सर्टिफिकेट पंजीकरण के लिए संपर्क ईमेल |

## महत्वपूर्ण नोट्स (Important Notes) {#important-notes}

- CyberPanel का API सेशन-आधारित टोकन प्रमाणीकरण (session-based token authentication) का उपयोग करता है। इंटीग्रेशन प्रत्येक API कॉल पर टोकन अधिग्रहण को स्वचालित रूप से संभालता है।
- आपके CyberPanel एडमिन खाते में वेबसाइट बनाने और हटाने की अनुमतियाँ होनी चाहिए।
- CyberPanel डिफ़ॉल्ट रूप से पोर्ट `8090` पर चलता है। यदि आपका सर्वर फ़ायरवॉल का उपयोग करता है, तो सुनिश्चित करें कि यह पोर्ट WordPress एप्लिकेशन सर्वर से सुलभ है।
- इंटीग्रेशन DNS रिकॉर्ड्स का प्रबंधन नहीं करता है। Ultimate Multisite में डोमेन मैप करने से पहले आपको डोमेन DNS को अपने सर्वर के IP पते पर पॉइंट करना होगा।
- यदि आप OpenLiteSpeed (OLS) का उपयोग करते हैं, तो वर्चुअल होस्ट परिवर्तनों के बाद एक ग्रेशफुल रीस्टार्ट स्वचालित रूप से ट्रिगर होता है। किसी मैन्युअल हस्तक्षेप की आवश्यकता नहीं है।

## समस्या निवारण (Troubleshooting) {#troubleshooting}

### API Connection Refused {#api-connection-refused}

- सत्यापित करें कि आपके सर्वर फ़ायरवॉल में पोर्ट `8090` खुला है।
- पुष्टि करें कि `WU_CYBERPANEL_HOST` मान में सही प्रोटोकॉल (`https://`) और पोर्ट शामिल है।
- जांचें कि आपका CyberPanel SSL सर्टिफिकेट वैध है; सेल्फ-साइन किए गए सर्टिफिकेट TLS सत्यापन विफलताओं का कारण बन सकते हैं। `WU_CYBERPANEL_VERIFY_SSL` को केवल विश्वसनीय निजी नेटवर्क वातावरण में `false` पर सेट करें।

### Authentication Errors {#authentication-errors}

- सीधे CyberPanel में लॉग इन करके पुष्टि करें कि आपके `WU_CYBERPANEL_USERNAME` और `WU_CYBERPANEL_PASSWORD` सही हैं।
- बार-बार विफल लॉगिन प्रयासों के बाद CyberPanel खाते लॉक कर देता है। यदि लॉकआउट होता है तो CyberPanel में **Security** > **Brute Force Monitor** की जांच करें।

### Domain Not Created {#domain-not-created}

- API त्रुटि संदेशों के लिए Ultimate Multisite गतिविधि लॉग (**Ultimate Multisite** > **Activity Logs**) की जांच करें।
- सत्यापित करें कि `WU_CYBERPANEL_PACKAGE` में परिभाषित पैकेज CyberPanel में मौजूद है (**Packages** > **List Packages**)।
- सुनिश्चित करें कि डोमेन पहले से ही CyberPanel में वेबसाइट के रूप में पंजीकृत नहीं है — डुप्लिकेट वेबसाइट बनाने से त्रुटि आती है।

### SSL Certificate Not Issued {#ssl-certificate-not-issued}

- पुष्टि करें कि DNS पूरी तरह से प्रचारित हो गया है: `dig +short your-domain.com` को आपके सर्वर का IP वापस करना चाहिए।
- Let's Encrypt रेट लिमिट लागू करता है। यदि आपने हाल ही में एक ही डोमेन के लिए कई सर्टिफिकेट जारी किए हैं, तो पुनः प्रयास करने से पहले प्रतीक्षा करें।
- सर्टिफिकेट जारी करने विफलताओं के विवरण के लिए **Logs** > **Error Logs** के तहत CyberPanel SSL लॉग की जांच करें।
- एक बैकअप के रूप में, आप CyberPanel से मैन्युअल रूप से SSL जारी कर सकते हैं: **SSL** > **Manage SSL** > डोमेन का चयन करें > **Issue SSL**।

## संदर्भ (References) {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
