---
id: wu_post_count_statuses
title: फ़िल्टर - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# फ़िल्टर: wu_post_count_statuses

प्लगइन डेवलपर्स को यह बदलने की अनुमति देता है कि किस पोस्ट स्टेटस को गिना जाना चाहिए। डिफ़ॉल्ट रूप से, प्रकाशित (published) और निजी (private) पोस्ट गिने जाते हैं।

## पैरामीटर्स {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $post_status | `array` | पोस्ट स्टेटस की सूची |
| $post_type | `string` | पोस्ट टाइप का स्लग |

### से {#since}

- 1.9.1
### स्रोत {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) में लाइन 119 पर परिभाषित है।

## रिटर्न करता है {#returns}
पोस्ट स्टेटस की नई ऐरे (array)
