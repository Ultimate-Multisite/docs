---
id: wu_should_create_domain_record_for_site
title: फिल्टर - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# फिल्टर: wu_should_create_domain_record_for_site

नयाँ सिर्जना गरिएको साइटका लागि Ultimate Multisite ले डोमेन रेकर्ड सिर्जना गर्नुपर्छ कि पर्दैन भनेर फिल्टर गर्छ।

साझा checkout-form आधार डोमेन, आन्तरिक host, वा अर्को integration ले अलग्गै व्यवस्थापन गर्ने डोमेन प्रयोग गर्ने साइटहरूका लागि स्वचालित डोमेन-रेकर्ड सिर्जना रोक्न वा पछि सार्न यो फिल्टर प्रयोग गर्नुहोस्।

## मापदण्डहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $create | `bool` | डोमेन रेकर्ड सिर्जना गर्नुपर्छ कि पर्दैन। |
| $site | `WP_Site` | नयाँ सिर्जना गरिएको साइट object। |

### देखि {#since}

- 2.13.0

### स्रोत {#source}

`inc/functions/domain.php` मा परिभाषित।


## फर्काउने मान {#returns}

डोमेन रेकर्ड सिर्जना गर्ने कि नगर्ने जनाउने Boolean।
