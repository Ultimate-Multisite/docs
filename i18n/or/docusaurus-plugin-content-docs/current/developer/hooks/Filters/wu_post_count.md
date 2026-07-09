---
id: wu_post_count
title: ଫିଲ୍ଟର - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count {#filter-wupostcount}

plugin ବିକାଶକମାନଙ୍କୁ ଗଣନାର ମୋଟ ପରିବର୍ତ୍ତନ କରିବାକୁ ଦିଅନ୍ତୁ

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $count | `int` | ମୋଟ post ଗଣନା |
| $post_counts | `object` | wp_count_posts fn ଦ୍ୱାରା ଫେରାଯାଇଥିବା WordPress object |
| $post_type | `string` | post ପ୍ରକାର slug |

### ଯେହେତୁ {#since}

- 1.9.1
### ଉତ୍ସ {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) ରେ line 136 ରେ ପରିଭାଷିତ


## ଫେରାଇଦିଏ {#returns}
ନୂତନ ମୋଟ
