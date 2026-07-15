---
id: wu_post_count
title: Filter - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

Plugin developers ko count total badalne ki ijazat deta hai

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | Kul post count |
| $post_counts | `object` | `wp_count_posts` function dwara return hone wala WordPress object |
| $post_type | `string` | Post type ka slug |

### Since {#since}

- 1.9.1
### Source {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) mein line 136 par define kiya gaya hai


## Returns {#returns}
Naya kul count
