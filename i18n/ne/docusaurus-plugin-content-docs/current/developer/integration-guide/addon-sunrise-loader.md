---
title: एडअन Sunrise फाइल लोडर
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# एडअन Sunrise फाइल लोडर

Ultimate Multisite 2.8.0 ले एडअनहरू र अनुकूलन MU-plugin एकीकरणहरूका लागि sunrise extension loader थप्छ, जसलाई उत्पन्न गरिएको `wp-content/sunrise.php` फाइल सम्पादन नगरी WordPress sunrise bootstrapping का क्रममा चल्न आवश्यक हुन्छ।

## यसलाई कहिले प्रयोग गर्ने

तपाईंको एकीकरण नियमित प्लगइनहरू लोड हुनुअघि चल्नैपर्ने हुँदा, जस्तै अनुकूलन डोमेन राउटिङ, होस्ट-विशिष्ट अनुरोध व्यवस्थापन, वा प्रारम्भिक नेटवर्क bootstrap समायोजनहरूका लागि, sunrise extension प्रयोग गर्नुहोस्।

सामान्य एकीकरणहरूका लागि, नियमित WordPress प्लगइनहरू, MU-plugins, र दस्तावेज गरिएको Ultimate Multisite hooks लाई प्राथमिकता दिनुहोस्। Sunrise कोड धेरै प्रारम्भिक रूपमा चल्छ र सानो, सावधान, र निर्भरता-रहित रहनुपर्छ।

## फाइल नामकरण परम्परा

`ultimate-multisite-` बाट सुरु हुने नाम भएको एडअन निर्देशिकामा `sunrise.php` नामको PHP फाइल सिर्जना गर्नुहोस्:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

लोडरले यस ढाँचाका लागि प्लगइनहरू निर्देशिका स्क्यान गर्छ:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

मिल्ने फाइलहरू एडअन path अनुसार वर्णानुक्रममा लोड गरिन्छन्।

## फाइल कहाँ राख्ने

sunrise व्यवहारको स्वामित्व राख्ने एडअनको root निर्देशिकामा फाइल राख्नुहोस्:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

स्क्यान `WP_CONTENT_DIR` को सापेक्ष समाधान गरिन्छ, `WP_PLUGIN_DIR` को हालको मानको होइन। यसले multi-tenancy वा अन्य प्रारम्भिक bootstrap कोडले sunrise का क्रममा प्लगइन निर्देशिका constants परिवर्तन गर्दा खोजलाई स्थिर राख्छ।

उत्पन्न गरिएको `wp-content/sunrise.php` फाइल प्रत्यक्ष रूपमा सम्पादन नगर्नुहोस्। लोडरले Ultimate Multisite ले स्थापना र अद्यावधिक गर्ने core sunrise फाइललाई fork नगरी अनुकूलन कोडलाई sunrise व्यवहार विस्तार गर्न दिन्छ।

## उपलब्ध hooks र filters

एडअन sunrise फाइलहरू Ultimate Multisite domain mapping लोड भएपछि र WordPress ले `ms_loaded` चलाउनुअघि चल्छन्। यस बिन्दुमा sunrise फाइलले गर्न सक्छ:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- आवश्यक हुँदा `BLOG_ID_CURRENT_SITE` जस्ता sunrise-time constants परिभाषित गर्न;
- Ultimate Multisite sunrise helper state पढ्न, multi-tenancy एकीकरणहरूले प्रयोग गर्ने routing state सहित।

Ultimate Multisite ले आफ्नो sunrise loader सकिएपछि `wu_sunrise_loaded` चलाउँछ। sunrise bootstrap पूरा भएपछि चल्नुपर्ने तर अझै पनि sunrise lifecycle मै पर्ने कोडका लागि त्यो action प्रयोग गर्नुहोस्।

sunrise चरणमा पहिले नै लोड भएका functions मात्र call गर्नुहोस्। database-heavy काम, template rendering, HTTP requests, र सामान्य प्लगइन load order पूरा भएको मान्ने कोडबाट बच्नुहोस्।

## न्यूनतम उदाहरण

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

फाइल deploy गरेपछि, दुवै paths अझै सही रूपमा bootstrap हुन्छन् भनेर पुष्टि गर्न mapped domain र unmapped main-site URL load गर्नुहोस्।
