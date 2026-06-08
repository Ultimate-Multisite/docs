---
id: wu_post_count_statuses
title: ማጣሪያ - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

ፕልጊን ገንቢዎች የትኞቹ የፖስት ሁኔታዎች (post status) መရေና መቁጠር እንዳለባቸው እንዲቀይሩ ያስችላል። በመደበኛነት፣ የተሰራጩ (published) እና የግል (private) ፖስቶች ይቆጠራሉ።

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | የፖስት ሁኔታዎች ዝርዝር (The list of post statuses) |
| $post_type | `string` | የፖስት አይነት ስሉግ (The post type slug) |

### Since

- 1.9.1
### Source

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) ፋይል ውስጥ በ119ኛው መስመር ላይ ተገልጿል


## Returns
የተሻሻለ የፖስት ሁኔታዎች አርሬይ (New array of post status)
