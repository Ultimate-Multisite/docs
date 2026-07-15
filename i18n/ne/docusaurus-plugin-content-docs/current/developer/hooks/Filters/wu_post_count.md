---
id: wu_post_count
title: फिल्टर - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# फिल्टर: wu_post_count

plugin विकासकर्ताहरूलाई कुल गणना परिवर्तन गर्न अनुमति दिनुहोस्

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $count | `int` | कुल पोस्ट गणना |
| $post_counts | `object` | wp_count_posts fn द्वारा फर्काइएको WordPress वस्तु |
| $post_type | `string` | पोस्ट प्रकार slug |

### देखि {#since}

- 1.9.1
### स्रोत {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) मा लाइन 136 मा परिभाषित


## फर्काउने {#returns}
नयाँ कुल
