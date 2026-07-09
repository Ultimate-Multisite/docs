---
title: Cloudflare एकत्रीकरण
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare एकत्रीकरण {#cloudflare-integration}

## विहंगावलोकन {#overview}
Cloudflare हे एक आघाडीचे content delivery network (CDN) आणि सुरक्षा प्रदाता आहे, जे वेबसाइट्सचे संरक्षण आणि वेग वाढविण्यास मदत करते. हे एकत्रीकरण Ultimate Multisite आणि Cloudflare यांच्यात स्वयंचलित डोमेन व्यवस्थापन सक्षम करते, विशेषतः उपडोमेन मल्टिसाइट स्थापनेसाठी.

## वैशिष्ट्ये {#features}
- Cloudflare मध्ये स्वयंचलित उपडोमेन निर्मिती
- प्रॉक्सीद्वारे चालणाऱ्या उपडोमेनसाठी समर्थन
- DNS रेकॉर्ड व्यवस्थापन
- Ultimate Multisite admin मध्ये सुधारित DNS रेकॉर्ड प्रदर्शन

## आवश्यकता {#requirements}
खालील स्थिरांक तुमच्या `wp-config.php` फाइलमध्ये परिभाषित केलेले असणे आवश्यक आहे:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## सेटअप सूचना {#setup-instructions}

### 1. तुमची Cloudflare API Key मिळवा {#1-get-your-cloudflare-api-key}

1. तुमच्या Cloudflare dashboard मध्ये लॉग इन करा
2. "My Profile" वर जा (वरच्या-उजव्या कोपऱ्यात तुमच्या ईमेलवर क्लिक करा)
3. मेनूमधून "API Tokens" निवडा
4. खालील परवानग्यांसह नवीन API token तयार करा:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. तुमचा API token कॉपी करा

### 2. तुमचा Zone ID मिळवा {#2-get-your-zone-id}

1. तुमच्या Cloudflare dashboard मध्ये, तुम्हाला वापरायचा असलेला डोमेन निवडा
2. Zone ID "Overview" टॅबमध्ये, उजव्या साइडबारमध्ये "API" अंतर्गत दिसतो
3. Zone ID कॉपी करा

### 3. wp-config.php मध्ये स्थिरांक जोडा {#3-add-constants-to-wp-configphp}

तुमच्या `wp-config.php` फाइलमध्ये खालील स्थिरांक जोडा:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. एकत्रीकरण सक्षम करा {#4-enable-the-integration}

1. तुमच्या WordPress admin मध्ये, Ultimate Multisite > सेटिंग्ज येथे जा
2. "डोमेन मॅपिंग" टॅबवर जा
3. "होस्ट एकत्रीकरणे" पर्यंत खाली स्क्रोल करा
4. Cloudflare एकत्रीकरण सक्षम करा
5. "बदल जतन करा" क्लिक करा

## हे कसे कार्य करते {#how-it-works}

### उपडोमेन व्यवस्थापन {#subdomain-management}

उपडोमेन मल्टिसाइट स्थापनेत नवीन साइट तयार केली जाते तेव्हा:

1. हे एकत्रीकरण उपडोमेनसाठी CNAME रेकॉर्ड जोडण्यासाठी Cloudflare च्या API कडे विनंती पाठवते
2. उपडोमेन डीफॉल्टनुसार Cloudflare द्वारे प्रॉक्सी केला जाण्यासाठी कॉन्फिगर केला जातो (हे फिल्टर्ससह बदलता येते)
3. साइट हटवली गेल्यावर, हे एकत्रीकरण Cloudflare मधून उपडोमेन काढून टाकेल

### DNS रेकॉर्ड प्रदर्शन {#dns-record-display}

हे एकत्रीकरण Ultimate Multisite admin मधील DNS रेकॉर्ड प्रदर्शन सुधारते:

1. Cloudflare मधून थेट DNS रेकॉर्ड्स आणून
2. रेकॉर्ड्स प्रॉक्सी केलेले आहेत की नाही ते दाखवून
3. DNS रेकॉर्ड्सबद्दल अतिरिक्त माहिती दाखवून

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (पूर्वी "Cloudflare for SaaS" म्हणत) हे Cloudflare चे वैशिष्ट्य आहे, जे तुमच्या ग्राहकांना तुमच्या मल्टिसाइट नेटवर्कवर SSL सह त्यांचे स्वतःचे डोमेन्स वापरण्याची परवानगी देते. Cloudflare वापरणाऱ्या डोमेन-मॅप केलेल्या मल्टिसाइट स्थापनेसाठी हा शिफारस केलेला दृष्टिकोन आहे, कारण Cloudflare प्रत्येक कस्टम डोमेनसाठी SSL प्रमाणपत्र जारी करणे आणि नूतनीकरण स्वयंचलितपणे व्यवस्थापित करते.

### हे मानक Cloudflare एकत्रीकरणापेक्षा कसे वेगळे आहे {#how-it-differs-from-the-standard-cloudflare-integration}

| | मानक एकत्रीकरण | Cloudflare Custom Hostnames |
|---|---|---|
| **उद्देश** | उपडोमेन्ससाठी DNS रेकॉर्ड्स स्वयंचलितपणे तयार करते | Cloudflare-व्यवस्थापित SSL सह कस्टम (मॅप केलेले) डोमेन्स सक्षम करते |
| **यासाठी सर्वोत्तम** | उपडोमेन मल्टिसाइट | डोमेन-मॅप केलेला मल्टिसाइट |
| **SSL** | स्वतंत्रपणे हाताळले जाते | Cloudflare द्वारे स्वयंचलितपणे व्यवस्थापित |

### Cloudflare Custom Hostnames सेट करणे {#setting-up-cloudflare-custom-hostnames}

1. तुमच्या Cloudflare dashboard मध्ये, तुमच्या मुख्य डोमेनसाठी zone उघडा.
2. **SSL/TLS > Custom Hostnames** येथे जा.
3. तुमच्या सर्व्हरच्या IP किंवा hostname कडे निर्देश करणारा fallback origin जोडा.
4. Ultimate Multisite मध्ये मॅप केलेल्या प्रत्येक ग्राहक डोमेनसाठी, Cloudflare मध्ये Custom Hostname नोंद जोडा. Cloudflare API वापरून तुम्ही ही पायरी स्वयंचलित करू शकता.
5. ग्राहकाचा DNS तुमच्या नेटवर्ककडे निर्देशित झाल्यावर Cloudflare प्रत्येक custom hostname साठी TLS प्रमाणपत्रे स्वयंचलितपणे जारी करते आणि नूतनीकरण करते.

संपूर्ण API संदर्भासाठी, [Cloudflare Custom Hostnames दस्तऐवजीकरण](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) पहा.

:::note शब्दावली अद्यतन
Ultimate Multisite v2.6.1 पासून, हे वैशिष्ट्य सर्व plugin सेटिंग्ज आणि लेबल्समध्ये **Cloudflare Custom Hostnames** म्हणून उल्लेखले जाते. आधीच्या आवृत्त्यांमध्ये "Cloudflare for SaaS" हे नाव वापरले जात होते, जे मूळ Cloudflare product नाव आहे.
:::

## महत्त्वाच्या नोंदी {#important-notes}

Cloudflare च्या अलीकडील अद्यतनांनुसार, wildcard proxying आता सर्व ग्राहकांसाठी उपलब्ध आहे. याचा अर्थ असा की उपडोमेन मल्टिसाइट स्थापनेसाठी मानक Cloudflare DNS एकत्रीकरण पूर्वीइतके महत्त्वाचे राहिलेले नाही, कारण तुम्ही Cloudflare मध्ये फक्त wildcard DNS रेकॉर्ड सेट करू शकता.

## समस्या निवारण {#troubleshooting}

### API कनेक्शन समस्या {#api-connection-issues}
- तुमचा API token योग्य आहे आणि त्याच्याकडे आवश्यक परवानग्या आहेत याची खात्री करा
- तुमचा Zone ID योग्य आहे का ते तपासा
- तुमच्या Cloudflare account कडे आवश्यक परवानग्या आहेत याची खात्री करा

### उपडोमेन जोडला गेला नाही {#subdomain-not-added}
- कोणतेही त्रुटी संदेश आहेत का ते पाहण्यासाठी Ultimate Multisite logs तपासा
- उपडोमेन आधीच Cloudflare मध्ये जोडलेला नाही याची खात्री करा
- तुम्ही तयार करत असलेल्या DNS रेकॉर्ड्सच्या संख्येला तुमचा Cloudflare plan समर्थन देतो याची खात्री करा

### प्रॉक्सी समस्या {#proxying-issues}
- तुम्हाला उपडोमेन्स प्रॉक्सी करायचे नसतील, तर तुम्ही `wu_cloudflare_should_proxy` फिल्टर वापरू शकता
- प्रॉक्सी केल्यावर काही वैशिष्ट्ये योग्यरित्या कार्य करू शकत नाहीत (उदा., काही WordPress admin functions)
- admin पृष्ठांसाठी कॅशे बायपास करण्यासाठी Cloudflare चे Page Rules वापरण्याचा विचार करा
