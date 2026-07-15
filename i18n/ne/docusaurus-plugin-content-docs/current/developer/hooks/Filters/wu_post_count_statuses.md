---
id: wu_post_count_statuses
title: फिल्टर - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

plugin विकासकर्ताहरूलाई कुन पोस्ट स्थिति गणना गरिनुपर्छ भन्ने परिवर्तन गर्न अनुमति दिन्छ। पूर्वनिर्धारित रूपमा, प्रकाशित र निजी पोस्टहरू गणना गरिन्छन्

## प्यारामिटरहरू {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | पोस्ट स्थितिहरूको सूची |
| $post_type | `string` | पोस्ट प्रकारको slug |

### देखि {#since}

- 1.9.1
### स्रोत {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) मा लाइन 119 मा परिभाषित


## फिर्ता गर्छ {#returns}
पोस्ट स्थितिको नयाँ array
