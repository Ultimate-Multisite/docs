---
id: wu_post_count
title: ማጣሪያ - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count {#filter-wupostcount}

የፕልጊን ገንቢዎች የብዛት ጠቅላላ መጠን እንዲቀይሩ ያስችላል።

## መለኪያዎች (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | የፖስት ጠቅላላ ብዛት |
| $post_counts | `object` | በwp_count_posts ተግባር የሚመለስ የWordPress ነገር (object) |
| $post_type | `string` | የፖስት አይነት ስሉግ (post type slug) |

### ከ (Since) {#since}

- 1.9.1
### ምንጭ (Source) {#source}

በ[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) ፋይል ላይ በ136ኛው መስመር ተገልጿል።

## የሚመልስው (Returns) {#returns}
አዲሱ ጠቅላላ ብዛት
