---
id: wu_post_count
title: Filter - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

Umožňuje vývojárom pluginov zmeniť celkový počet

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $count | `int` | Celkový počet príspevkov |
| $post_counts | `object` | WordPress objekt vrátený funkciou wp_count_posts |
| $post_type | `string` | Slug typu príspevku |

### Od verzie

- 1.9.1
### Zdroj

Definované v [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) na riadku 136


## Vracia
Nový celkový počet
