---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# फ़िल्टर: wu_get_site_domain_and_path

डेवलपर्स को डोमेन/पाथ जोड़े (domain/path pairs) को बदलने (manipulate) की अनुमति देता है।

यह कई चीज़ों के लिए उपयोगी हो सकता है, जैसे कि किसी तरह का स्टेजिंग समाधान (staging solution) लागू करना, अलग-अलग सर्वर का उपयोग करना, आदि।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | वर्तमान ऑब्जेक्ट जिसमें डोमेन और पाथ की कुंजियाँ (keys) शामिल हैं। |
| $path_or_subdomain | `string` | फ़ंक्शन को पास किया गया मूल पाथ/सबडोमेन। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) में लाइन 235 पर परिभाषित।

## Returns {#returns}
एक ऑब्जेक्ट जिसमें डोमेन और पाथ की कुंजियाँ शामिल होती हैं।
