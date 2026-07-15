---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

प्लगइन डेव्हलपर्सना कोणत्या पोस्ट स्टेटसचा (post status) मोजणीमध्ये समावेश करायचा, हे बदलण्याची परवानगी देतो. डीफॉल्टनुसार, प्रकाशित (published) आणि खाजगी (private) पोस्ट मोजल्या जातात.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | पोस्ट स्टेटसची यादी (list of post statuses) |
| $post_type | `string` | पोस्ट प्रकारचा स्लग (post type slug) |

### Since {#since}

- 1.9.1
### Source {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) मध्ये लाइन 119 वर परिभाषित केले आहे.

## Returns {#returns}
पोस्ट स्टेटसची नवीन ॲरे (New array of post status)
