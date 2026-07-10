---
title: होस्टिङर (hPanel) एकीकरण
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) एकीकरण {#hostinger-hpanel-integration}

## अवलोकन {#overview}

Hostinger एक लोकप्रिय वेब होस्टिंग प्रदाता है जिसका आधुनिक कंट्रोल पैनल hPanel है। Ultimate Multisite Hostinger इंटीग्रेशन आपको Ultimate Multisite और Hostinger के hPanel के बीच स्वचालित डोमेन सिंकिंग सक्षम करता है, जिससे आप अपने WordPress एडमिन से सीधे डोमेन मैपिंग और सबडोमेन को स्वचालित रूप से प्रबंधित कर सकते हैं।

## सुविधाएँ {#features}

- hPanel में स्वचालित ऐडऑन डोमेन निर्माण
- hPanel में स्वचालित सबडोमेन निर्माण (सबडोमेन मल्टीसाइट इंस्टॉलेशन के लिए)
- मैपिंग हटाने पर डोमेन का हटाना
- hPanel के डोमेन प्रबंधन API के साथ सहज एकीकरण

## आवश्यकताएँ {#requirements}

Hostinger इंटीग्रेशन का उपयोग करने के लिए, आपको चाहिए:

1. hPanel एक्सेस के साथ Hostinger खाता
2. Hostinger से एक API टोकन
3. आपकी `wp-config.php` फ़ाइल में निम्नलिखित स्थिरांक (constants) परिभाषित करें:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

वैकल्पिक रूप से, आप यह भी परिभाषित कर सकते हैं:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // डिफ़ॉल्ट API एंडपॉइंट
```

## सेटअप निर्देश {#setup-instructions}

### 1. अपना Hostinger API टोकन जनरेट करें {#1-generate-your-hostinger-api-token}

1. अपने Hostinger खाते में लॉग इन करें और hPanel तक पहुँचें
2. **Account Settings** → **API Tokens** पर जाएँ
3. **Create New Token** पर क्लिक करें
4. अपने टोकन को एक वर्णनात्मक नाम दें (उदाहरण के लिए, "Ultimate Multisite")
5. आवश्यक अनुमतियाँ चुनें:
   - डोमेन प्रबंधन
   - सबडोमेन प्रबंधन
6. जनरेट किए गए टोकन की कॉपी करें और इसे सुरक्षित रूप से सहेजें

### 2. अपना खाता ID खोजें {#2-find-your-account-id}

1. hPanel में, **Account Settings** → **Account Information** पर जाएँ
2. आपका Account ID इस पेज पर प्रदर्शित होगा
3. अगले चरण के लिए इस ID को कॉपी और सेव करें

### 3. wp-config.php में स्थिरांक जोड़ें {#3-add-constants-to-wp-configphp}

निम्नलिखित स्थिरांक अपनी `wp-config.php` फ़ाइल में जोड़ें:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

यदि तपाईंको Hostinger खाताले फरक API endpoint प्रयोग गर्छ भने, तपाईं यसलाई अनुकूलित गर्न सक्नुहुन्छ:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### ४. इन्टिग्रेशन सक्षम गर्नुहोस् {#4-enable-the-integration}

१. आफ्नो वर्डप्रेस एडमिनमा, **Ultimate Multisite > Settings** मा जानुहोस्।
२. **Domain Mapping** ट्याबमा जानुहोस्।
३. तल स्क्रोल गरेर **Host Integrations** मा जानुहोस्।
४. **Hostinger (hPanel)** इन्टिग्रेशन सक्षम गर्नुहोस्।
५. **Save Changes** मा क्लिक गर्नुहोस्।

## यो कसरी काम गर्छ {#how-it-works}

### Addon Domains (अड-अन डोमेनहरू) {#addon-domains}

Ultimate Multisite मा तपाईंले कुनै डोमेन नक्सा (map) गर्दा:

१. इन्टिग्रेशनले Hostinger को API मा अनुरोध पठाउँछ ताकि त्यो डोमेनलाई अड-अन डोमेनको रूपमा थप्न सकियोस्।
२. डोमेनलाई तपाईंको रूट डाइरेक्टरी (root directory) मा इंगित गर्न कन्फिगर गरिएको हुन्छ।
३. जब कुनै डोमेन नक्सा हटाउनुहुन्छ, इन्टिग्रेशनले hPanel बाट अड-अन डोमेन स्वतः हटाउँछ।

### Subdomains (सबडोमेनहरू) {#subdomains}

सबडोमेन मल्टीसाइट स्थापनाका लागि, नयाँ साइट सिर्जना गर्दा:

१. इन्टिग्रेशनले पूरा डोमेनबाट सबडोमेन भाग निकाल्छ।
२. त्यो सबडोमेन थप्न Hostinger को API मा अनुरोध पठाउँछ।
३. सबडोमेनलाई तपाईंको रूट डाइरेक्टरीमा इंगित गर्न कन्फिगर गरिएको हुन्छ।

## महत्त्वपूर्ण नोटहरू {#important-notes}

- यो इन्टिग्रेशनले तपाईंको खातासँग कुराकानी गर्न Hostinger को REST API प्रयोग गर्दछ।
- तपाईंको API टोकनमा डोमेन र सबडोमेन व्यवस्थापनका लागि आवश्यक अनुमतिहरू हुनुपर्छ।
- यो इन्टिग्रेशनले DNS कन्फिगरेशन ह्यान्डल गर्दैन; डोमेन पहिले नै तपाईंको Hostinger खातामा इंगित गरिएको हुनुपर्छ।
- API अनुरोधहरू HTTPS मार्फत सुरक्षित रूपमा गरिएका हुन्छन्।
- आफ्नो API टोकन सुरक्षित राख्नुहोस् र कहिल्यै सार्वजनिक नगर्नुहोस्।

## समस्या निवारण (Troubleshooting) {#troubleshooting}

### API Connection Issues (API कनेक्टिभिटी समस्याहरू) {#api-connection-issues}

* तपाईंको API टोकन सही छ र त्यो समाप्त भएको छैन भनेर जाँच गर्नुहोस्।
* तपाईंको Account ID सही छ कि छैन भनेर जाँच गर्नुहोस्।
* डोमेन व्यवस्थापनका लागि तपाईंको API टोकनमा आवश्यक अनुमतिहरू छन् भन्ने कुरा सुनिश्चित गर्नुहोस्।
* तपाईंको Hostinger खाता सक्रिय छ र राम्रो अवस्थामा छ भनेर पुष्टि गर्नुहोस्।

### डोमेन थपिएको छैन {#domain-not-added}

* कुनै त्रुटि सन्देश (error messages) भएता कि भनी Ultimate Multisite को logs हेर्नुहोस्।
* डोमेन पहिले नै तपाईंको Hostinger खातामा थपिएको छैन भनेर जाँच गर्नुहोस्।
* तपाईंको Hostinger खाताले एड-अन डोमेन (addon domains) को सीमा पुगेको छैन भन्ने कुरा सुनिश्चित गर्नुहोस्।
* डोमेन तपाईंको Hostinger nameservers मा सही तरिकाले इंगित गरिएको छ कि छैन भनेर पुष्टि गर्नुहोस्।

### SSL प्रमाणपत्र समस्याहरू {#ssl-certificate-issues}

* यो integration ले SSL प्रमाणपत्र जारी गर्ने काम गर्दैन।
* Hostinger सामान्यतया AutoSSL मार्फत निःशुल्क SSL प्रमाणपत्र प्रदान गर्दछ।
* तपाईं hPanel मा **SSL/TLS** अन्तर्गत SSL प्रमाणपत्रहरूलाई सिधै व्यवस्थापन गर्न सक्नुहुन्छ।
* वैकल्पिक रूपमा, Hostinger को AutoSSL सुविधा प्रयोग गरेर Let's Encrypt प्रयोग गर्न सक्नुहुन्छ।

## समर्थन {#support}

Hostinger integration सम्बन्धी थप मद्दतका लागि कृपया निम्न कुराहरू हेर्नुहोस्:

* [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
* [Ultimate Multisite Documentation](/)
* [Ultimate Multisite Support](https://ultimatemultisite.com/support)
