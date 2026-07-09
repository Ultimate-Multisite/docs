---
id: wu_post_count
title: फ़िल्टर - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# फ़िल्टर: wu_post_count {#filter-wupostcount}

प्लगइन डेवलपर्स को गिनती की कुल संख्या बदलने की अनुमति देता है

## पैरामीटर्स {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $count | `int` | कुल पोस्ट की संख्या |
| $post_counts | `object` | `wp_count_posts` फ़ंक्शन द्वारा लौटाया गया WordPress ऑब्जेक्ट |
| $post_type | `string` | पोस्ट टाइप का स्लॉग |

### कब से {#since}

- 1.9.1
### स्रोत {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) में लाइन 136 पर परिभाषित है।

## रिटर्न करता है {#returns}
नई कुल संख्या
