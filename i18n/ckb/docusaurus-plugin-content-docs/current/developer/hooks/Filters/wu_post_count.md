---
id: wu_post_count
title: فلتەر - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# فلتەر: wu_post_count {#filter-wupostcount}

ڕێگە بە گەشەپێدەرانی plugin بدە کە کۆی ژمارەکە بگۆڕن

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $count | `int` | کۆی گشتیی ژمارەی بابەتەکان |
| $post_counts | `object` | ئۆبجێکتی WordPress کە لەلایەن wp_count_posts fn دەگەڕێنرێتەوە |
| $post_type | `string` | slug ی جۆری بابەت |

### لەوەوە {#since}

- 1.9.1
### سەرچاوە {#source}

لە [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) لە هێڵی 136 پێناسە کراوە


## دەگەڕێنێتەوە {#returns}
کۆی نوێ
