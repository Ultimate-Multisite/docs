---
id: wu_post_count
title: "Filter - wu_post_count"
sidebar_label: "wu_post_count"
---

# Filter: wu_post_count

Allow plugin developers to change the count total

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | The total post count |
| $post_counts | `object` | WordPress object return by the wp_count_posts fn |
| $post_type | `string` | The post type slug |

### Since

- 1.9.1
### Source

Defined in [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) at line 136


## Returns
New total
