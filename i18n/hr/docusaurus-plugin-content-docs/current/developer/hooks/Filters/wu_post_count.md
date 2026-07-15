---
id: wu_post_count
title: Filtar - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

Omogućuje plugin developerima promjenu ukupnog broja

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | Ukupan broj objava |
| $post_counts | `object` | WordPress objekt koji vraća wp_count_posts fn |
| $post_type | `string` | Slug vrste objave |

### Od {#since}

- 1.9.1
### Izvor {#source}

Definirano u [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) u retku 136


## Vraća {#returns}
Novi ukupni broj
