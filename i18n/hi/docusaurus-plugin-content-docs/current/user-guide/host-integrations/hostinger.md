---
title: Hostinger (hPanel) इंटीग्रेशन
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) इंटीग्रेशन

## अवलोकन (Overview) {#overview}

Hostinger एक लोकप्रिय वेब होस्टिंग प्रदाता है जिसके पास hPanel नाम का एक आधुनिक कंट्रोल पैनल है। Ultimate Multisite Hostinger इंटीग्रेशन Ultimate Multisite और Hostinger के hPanel के बीच स्वचालित डोमेन सिंकिंग (automatic domain syncing) को सक्षम बनाता है। इससे आप अपने WordPress एडमिन से ही डोमेन मैपिंग और सबडोमेन को स्वचालित रूप से प्रबंधित कर सकते हैं।

## विशेषताएँ (Features) {#features}

- hPanel में स्वचालित एडऑन डोमेन बनाना
- hPanel में स्वचालित सबडोमेन बनाना (सबडोमेन मल्टीसाइट इंस्टॉलेशन के लिए)
- मैपिंग डिलीट होने पर डोमेन हटाना
- hPanel के डोमेन प्रबंधन API के साथ सहज एकीकरण

## आवश्यकताएँ (Requirements) {#requirements}

Hostinger इंटीग्रेशन का उपयोग करने के लिए, आपको चाहिए:

1. hPanel एक्सेस के साथ एक Hostinger अकाउंट
2. Hostinger से एक API टोकन
3. अपनी `wp-config.php` फ़ाइल में निम्नलिखित कॉन्स्टेंट्स (constants) परिभाषित करना:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

वैकल्पिक रूप से, आप यह भी परिभाषित कर सकते हैं:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // डिफ़ॉल्ट API एंडपॉइंट
```

## सेटअप निर्देश (Setup Instructions) {#setup-instructions}

### 1. अपना Hostinger API टोकन जनरेट करें {#1-generate-your-hostinger-api-token}

1. अपने Hostinger अकाउंट में लॉग इन करें और hPanel एक्सेस करें।
2. **Account Settings** → **API Tokens** पर जाएं।
3. **Create New Token** पर क्लिक करें।
4. अपने टोकन को एक वर्णनात्मक नाम दें (उदाहरण के लिए, "Ultimate Multisite")।
5. आवश्यक अनुमतियाँ (permissions) चुनें:
   - Domain management
   - Subdomain management
6. जनरेट किए गए टोकन को कॉपी करें और इसे सुरक्षित रूप से स्टोर करें।

### 2. अपना अकाउंट ID खोजें {#2-find-your-account-id}

1. hPanel में, **Account Settings** → **Account Information** पर जाएं।
2. आपका अकाउंट ID इस पेज पर प्रदर्शित होगा।
3. इस ID को कॉपी करें और अगले चरण के लिए सेव करें।

### 3. wp-config.php में कॉन्स्टेंट्स जोड़ें {#3-add-constants-to-wp-configphp}

निम्नलिखित कॉन्स्टेंट्स को अपनी `wp-config.php` फ़ाइल में जोड़ें:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

यदि आपका Hostinger अकाउंट किसी अलग API एंडपॉइंट का उपयोग करता है, तो आप इसे कस्टमाइज़ कर सकते हैं:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. इंटीग्रेशन को सक्षम करें {#4-enable-the-integration}

1. अपने WordPress एडमिन में, **Ultimate Multisite > Settings** पर जाएं।
2. **Domain Mapping** टैब पर नेविगेट करें।
3. **Host Integrations** तक स्क्रॉल करें।
4. **Hostinger (hPanel)** इंटीग्रेशन को सक्षम करें।
5. **Save Changes** पर क्लिक करें।

## यह कैसे काम करता है (How It Works) {#how-it-works}

### एडऑन डोमेन (Addon Domains) {#addon-domains}

जब आप Ultimate Multisite में कोई डोमेन मैप करते हैं:

1. इंटीग्रेशन एडऑन डोमेन के रूप में डोमेन जोड़ने के लिए Hostinger के API को एक अनुरोध (request) भेजता है।
2. डोमेन को आपके रूट डायरेक्टरी की ओर पॉइंट करने के लिए कॉन्फ़िगर किया जाता है।
3. जब कोई डोमेन मैपिंग हटाई जाती है, तो इंटीग्रेशन स्वचालित रूप से hPanel से एडऑन डोमेन हटा देता है।

### सबडोमेन (Subdomains) {#subdomains}

सबडोमेन मल्टीसाइट इंस्टॉलेशन के लिए, जब कोई नई साइट बनाई जाती है:

1. इंटीग्रेशन पूरे डोमेन से सबडोमेन हिस्से को निकालता है।
2. यह सबडोमेन जोड़ने के लिए Hostinger के API को एक अनुरोध भेजता है।
3. सबडोमेन को आपके रूट डायरेक्टरी की ओर पॉइंट करने के लिए कॉन्फ़िगर किया जाता है।

## महत्वपूर्ण नोट्स (Important Notes) {#important-notes}

- यह इंटीग्रेशन आपके अकाउंट के साथ संवाद करने के लिए Hostinger के REST API का उपयोग करता है।
- आपके API टोकन में डोमेन और सबडोमेन प्रबंधन के लिए आवश्यक अनुमतियाँ होनी चाहिए।
- इंटीग्रेशन DNS कॉन्फ़िगरेशन को संभालता नहीं है; डोमेन पहले से ही आपके Hostinger अकाउंट की ओर पॉइंट किए जाने चाहिए।
- API अनुरोध HTTPS पर सुरक्षित रूप से किए जाते हैं।
- अपने API टोकन को सुरक्षित रखें और इसे कभी भी सार्वजनिक रूप से साझा न करें।

## समस्या निवारण (Troubleshooting) {#troubleshooting}

### API कनेक्शन समस्याएँ (API Connection Issues) {#api-connection-issues}

- सत्यापित करें कि आपका API टोकन सही है और समाप्त नहीं हुआ है।
- जांच लें कि आपका अकाउंट ID सही है।
- सुनिश्चित करें कि आपके API टोकन में डोमेन प्रबंधन के लिए आवश्यक अनुमतियाँ हैं।
- सत्यापित करें कि आपका Hostinger अकाउंट सक्रिय है और ठीक स्थिति में है।

### डोमेन नहीं जोड़ा गया (Domain Not Added) {#domain-not-added}

- किसी भी त्रुटि संदेश के लिए Ultimate Multisite लॉग की जाँच करें।
- सत्यापित करें कि डोमेन पहले से ही आपके Hostinger अकाउंट में नहीं जोड़ा गया है।
- सुनिश्चित करें कि आपके Hostinger अकाउंट में एडऑन डोमेन की सीमा पूरी नहीं हुई है।
- पुष्टि करें कि डोमेन ठीक से आपके Hostinger नेमसर्वर की ओर पॉइंट किया गया है।

### SSL सर्टिफिकेट समस्याएँ (SSL Certificate Issues) {#ssl-certificate-issues}

- इंटीग्रेशन SSL सर्टिफिकेट जारी करने को संभालता नहीं है।
- Hostinger आमतौर पर AutoSSL के माध्यम से मुफ्त SSL सर्टिफिकेट प्रदान करता है।
- आप **SSL/TLS** के तहत hPanel में सीधे SSL सर्टिफिकेट प्रबंधित कर सकते हैं।
- वैकल्पिक रूप से, Hostinger के AutoSSL फीचर के साथ Let's Encrypt का उपयोग करें।

## सहायता (Support) {#support}

Hostinger इंटीग्रेशन के साथ अतिरिक्त मदद के लिए, कृपया देखें:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
