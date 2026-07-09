---
id: wu_post_count
title: Filter - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count {#filter-wupostcount}

Umožňuje vývojárom pluginov zmeniť celkový počet

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $count | `int` | Celkový počet príspevkov |
| $post_counts | `object` | WordPress objekt vrátený funkciou wp_count_posts |
| $post_type | `string` | Slug typu príspevku |

### Od verzie {#since}

- 1.9.1
### Zdroj {#source}

Definované v [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) na riadku 136


## Vracia {#returns}
Nový celkový počet
