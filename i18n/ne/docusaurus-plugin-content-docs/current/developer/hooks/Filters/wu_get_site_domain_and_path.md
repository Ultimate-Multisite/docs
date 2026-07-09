---
id: wu_get_site_domain_and_path
title: फिल्टर - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# फिल्टर: wu_get_site_domain_and_path

डेभलपरहरूलाई डोमेन/पाथ जोडीहरू परिवर्तन गर्न अनुमति दिन्छ।

यो विभिन्न कुराहरूका लागि उपयोगी हुन सक्छ, जस्तै कुनै प्रकारको स्टेजिङ समाधान, फरक सर्भरहरू, आदि कार्यान्वयन गर्न।

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $d | `object` | डोमेन र पाथ keys समावेश भएको हालको object। |
| $path_or_subdomain | `string` | function मा पठाइएको मौलिक पाथ/सबडोमेन। |

### संस्करणदेखि

- 2.0.0
### स्रोत

[`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) मा लाइन 235 मा परिभाषित


## फिर्ता गर्छ
डोमेन र पाथ keys समावेश भएको object।
