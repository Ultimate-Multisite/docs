---
id: wu_post_count
title: Filtru - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filtru: wu_post_count

Permite dezvoltatorilor de plugin să modifice numărul total de postări

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $count | `int` | Numărul total de postări |
| $post_counts | `object` | Obiectul WordPress returnat de funcția `wp_count_posts` |
| $post_type | `string` | Slug-ul tipului de postare |

### De la {#since}

- 1.9.1
### Sursă {#source}

Definit în [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) la linia 136


## Returnează {#returns}
Noul total
