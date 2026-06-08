---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

Pinahihintulutan nito ang mga developer ng plugin na baguhin kung aling mga status ng post ang dapat bilangin. Sa default, ang mga post na *published* at *private* ang binibilang.

## Mga Parameter

| Name | Type | Paglalarawan |
|------|------|-------------|
| $post_status | `array` | Ang listahan ng mga status ng post |
| $post_type | `string` | Ang post type slug |

### Since

- 1.9.1
### Source

Tinukoy sa [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) sa linya 119


## Returns
Bagong array ng mga status ng post
