---
id: wu_post_count
title: Filter - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

प्लगइन डेव्हलपर्सना एकूण संख्या (count total) बदलण्याची परवानगी देते.

## पॅरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | एकूण पोस्टची संख्या (The total post count) |
| $post_counts | `object` | `wp_count_posts` फंक्शनद्वारे परत केलेला WordPress ऑब्जेक्ट |
| $post_type | `string` | पोस्ट प्रकारचा स्लग (The post type slug) |

### Since

- 1.9.1
### Source

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) मध्ये लाइन 136 वर परिभाषित केले आहे.

## Returns
नवीन एकूण संख्या (New total)
