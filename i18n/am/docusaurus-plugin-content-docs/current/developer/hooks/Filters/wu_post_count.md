---
id: wu_post_count
title: ማጣሪያ - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

የፕልጊን ገንቢዎች የብዛት ጠቅላላ መጠን እንዲቀይሩ ያስችላል።

## መለኪያዎች (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | የፖስት ጠቅላላ ብዛት |
| $post_counts | `object` | በwp_count_posts ተግባር የሚመለስ የWordPress ነገር (object) |
| $post_type | `string` | የፖስት አይነት ስሉግ (post type slug) |

### ከ (Since)

- 1.9.1
### ምንጭ (Source)

በ[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) ፋይል ላይ በ136ኛው መስመር ተገልጿል።

## የሚመልስው (Returns)
አዲሱ ጠቅላላ ብዛት
