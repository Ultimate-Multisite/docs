---
id: wu_post_count
title: Զտիչ - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count {#filter-wupostcount}

Թույլ է տալիս plugin մշակողներին փոխել ընդհանուր քանակը

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $count | `int` | Գրառումների ընդհանուր քանակը |
| $post_counts | `object` | WordPress օբյեկտ, որը վերադարձվում է wp_count_posts fn-ի կողմից |
| $post_type | `string` | Գրառման տեսակի slug-ը |

### Սկսած {#since}

- 1.9.1
### Աղբյուր {#source}

Սահմանված է [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136)-ում՝ 136-րդ տողում


## Վերադարձնում է {#returns}
Նոր ընդհանուր քանակը
