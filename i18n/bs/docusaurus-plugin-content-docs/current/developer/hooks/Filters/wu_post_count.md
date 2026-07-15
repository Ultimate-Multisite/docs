---
id: wu_post_count
title: Filter - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

Omogućava programerima pluginova da promijene ukupan broj postova.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | Ukupan broj postova |
| $post_counts | `object` | WordPress objekat koji vraća funkcija `wp_count_posts` |
| $post_type | `string` | Slug tipa postova |

### Since {#since}

- 1.9.1
### Source {#source}

Definisano u [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) na liniji 136


## Returns {#returns}
Novi ukupan broj
