---
id: wu_post_count
title: Филтер - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

Омогућава plugin програмерима да промене укупан број

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | Укупан број објава |
| $post_counts | `object` | WordPress објекат који враћа wp_count_posts fn |
| $post_type | `string` | Slug типа објаве |

### Од верзије {#since}

- 1.9.1
### Извор {#source}

Дефинисано у [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) у реду 136


## Враћа {#returns}
Нови укупан број
