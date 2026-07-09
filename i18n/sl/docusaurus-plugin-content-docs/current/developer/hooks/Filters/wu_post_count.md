---
id: wu_post_count
title: Filter - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count {#filter-wupostcount}

Omogoča razvijalcem pluginov, da spremenijo skupno število

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $count | `int` | Skupno število objav |
| $post_counts | `object` | WordPress object, ki ga vrne fn wp_count_posts |
| $post_type | `string` | Ključ vrste objave |

### Od {#since}

- 1.9.1
### Vir {#source}

Definirano v [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) v vrstici 136


## Vrne {#returns}
Novo skupno število
