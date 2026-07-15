---
id: wu_should_create_domain_record_for_site
title: फ़िल्टर - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# फ़िल्टर: wu_should_create_domain_record_for_site

यह फ़िल्टर करता है कि Ultimate Multisite को नए बनाए गए साइट के लिए डोमेन रिकॉर्ड बनाना चाहिए या नहीं।

इस फ़िल्टर का उपयोग उन साइटों के लिए अपने-आप डोमेन-रिकॉर्ड बनने को रोकने या टालने के लिए करें, जो साझा भुगतान फ़ॉर्म बेस डोमेन, आंतरिक होस्ट, या ऐसे डोमेन का उपयोग करती हैं जिसे कोई दूसरा इंटीग्रेशन अलग से प्रबंधित करेगा।

## पैरामीटर {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $create | `bool` | क्या डोमेन रिकॉर्ड बनाया जाना चाहिए। |
| $site | `WP_Site` | नया बनाया गया साइट ऑब्जेक्ट। |

### उपलब्ध संस्करण {#since}

- 2.13.0

### स्रोत {#source}

`inc/functions/domain.php` में परिभाषित।


## रिटर्न {#returns}

बूलियन जो बताता है कि डोमेन रिकॉर्ड बनाना है या नहीं।
