---
title: ऐडऑन सनराइज फ़ाइल लोडर
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 एक sunrise एक्सटेंशन लोडर जोड़ता है जो add-ons और कस्टम MU-plugin इंटीग्रेशन के लिए है। इसका उपयोग उन इंटीग्रेशन के लिए किया जाता है जिन्हें WordPress के sunrise बूटस्ट्रैपिंग के दौरान चलना होता है, बिना जनरेट की गई `wp-content/sunrise.php` फ़ाइल को एडिट किए।

## इसका उपयोग कब करें {#when-to-use-it}

sunrise एक्सटेंशन का उपयोग तब करें जब आपके इंटीग्रेशन को नियमित प्लगइन्स लोड होने से पहले चलना ज़रूरी हो, जैसे कि कस्टम डोमेन रूटिंग, होस्ट-विशिष्ट रिक्वेस्ट हैंडलिंग, या शुरुआती नेटवर्क बूटस्ट्रैप एडजस्टमेंट।

सामान्य इंटीग्रेशन के लिए, नियमित WordPress प्लगइन्स, MU-plugins, और डॉक्यूमेंटेड Ultimate Multisite हुक्स को प्राथमिकता दें। sunrise कोड बहुत जल्दी चलता है और छोटा, सुरक्षित (defensive), और किसी बाहरी निर्भरता (dependency-free) से मुक्त होना चाहिए।

## फ़ाइल नामकरण परंपरा (File naming convention) {#file-naming-convention}

एक PHP फ़ाइल बनाएं जिसका नाम `sunrise.php` हो और उसे एक addon डायरेक्टरी में रखें, जिसका नाम `ultimate-multisite-` से शुरू होता हो:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

लोडर इस पैटर्न के लिए प्लगइन्स डायरेक्टरी को स्कैन करता है:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

मिलने वाली फ़ाइलों को addon पाथ के अनुसार वर्णमाला क्रम (alphabetical order) में लोड किया जाता है।

## फ़ाइल कहाँ रखें {#where-to-place-the-file}

फ़ाइल को उस addon की रूट डायरेक्टरी में रखें जो sunrise व्यवहार (sunrise behaviour) का मालिक है:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

यह स्कैन `WP_CONTENT_DIR` के सापेक्ष (relative) होता है, न कि `WP_PLUGIN_DIR` के वर्तमान मान के सापेक्ष। यह तब भी डिस्कवरी को स्थिर रखता है जब मल्टी-टेनेंसी या अन्य शुरुआती बूटस्ट्रैप कोड sunrise के दौरान प्लगइन डायरेक्टरी कॉन्स्टेंट्स को बदलता है।

सीधे जनरेट की गई `wp-content/sunrise.php` फ़ाइल को एडिट न करें। यह लोडर कस्टम कोड को sunrise व्यवहार का विस्तार करने देता है, बिना उस कोर sunrise फ़ाइल को फोर्क किए जिसे Ultimate Multisite इंस्टॉल और अपडेट करता है।

## उपलब्ध हुक्स और फिल्टर्स (Hooks and filters available) {#hooks-and-filters-available}

Addon sunrise फ़ाइलें Ultimate Multisite डोमेन मैपिंग लोड होने के बाद और WordPress द्वारा `ms_loaded` फायर होने से पहले चलती हैं। इस बिंदु पर एक sunrise फ़ाइल निम्न कार्य कर सकती है:

- `$current_site` और `$current_blog` को पढ़ना या ओवरराइड करना;
- डेटाबेस कॉन्फ़िगरेशन लोड होने के बाद `$wpdb` तक पहुँचना;
- ज़रूरत पड़ने पर sunrise-समय के कॉन्स्टेंट्स (constants) जैसे `BLOG_ID_CURRENT_SITE` को परिभाषित करना;
- Ultimate Multisite sunrise हेल्पर स्टेट को पढ़ना, जिसमें मल्टी-टेनेंसी इंटीग्रेशन द्वारा उपयोग की जाने वाली रूटिंग स्टेट शामिल है।

Ultimate Multisite अपने sunrise लोडर के समाप्त होने के बाद `wu_sunrise_loaded` फायर करता है। उस एक्शन का उपयोग उस कोड के लिए करें जो sunrise बूटस्ट्रैप पूरा होने के बाद चलना चाहिए, लेकिन फिर भी sunrise लाइफसाइकिल से संबंधित हो।

केवल उन फ़ंक्शंस को कॉल करें जो पहले से ही sunrise चरण में लोड हो चुके हैं। डेटाबेस पर भारी काम, टेम्पलेट रेंडरिंग, HTTP रिक्वेस्ट, और ऐसे कोड से बचें जो यह मानकर चलते हैं कि सामान्य प्लगइन लोड ऑर्डर पूरा हो चुका है।

## न्यूनतम उदाहरण (Minimal example) {#minimal-example}

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

फ़ाइल को डिप्लॉय करने के बाद, यह पुष्टि करने के लिए एक मैप किया गया डोमेन और एक अनमैप्ड मुख्य-साइट URL लोड करें कि दोनों पाथ अभी भी सही ढंग से बूटस्ट्रैप होते हैं।
