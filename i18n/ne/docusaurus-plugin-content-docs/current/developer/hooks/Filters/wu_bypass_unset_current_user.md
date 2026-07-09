---
id: wu_bypass_unset_current_user
title: फिल्टर - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# फिल्टर: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

विकासकर्ताहरूलाई हालको प्रयोगकर्ता हटाउने कोडलाई छल्न अनुमति दिनुहोस्।

null बाहेक अरू केही पनि फिर्ता गर्दा लगइन भएको हालको प्रयोगकर्तालाई हटाउने कार्य छलिनेछ। यो केही परिदृश्यहरूमा उपयोगी हुन सक्छ, उदाहरणका लागि, प्रशासन प्यानलहरूको रूपमा प्रयोग भइरहेका उप-साइटहरूसँग काम गर्दा।

## मापदण्डहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $null_or_bypass | `mixed` | अघि बढ्नका लागि Null, यसलाई छल्न अरू जे पनि। |
| $current_user | `false\|\WP_User` | हालको प्रयोगकर्ता वस्तु। |

### संस्करणदेखि {#since}

- 2.0.11
### स्रोत {#source}

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) मा पङ्क्ति 221 मा परिभाषित


## फिर्ता मानहरू {#returns}
