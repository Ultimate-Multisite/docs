---
id: wu_post_count
title: Filtry - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filtr: wu_post_count

Pozwala deweloperom pluginów na zmianę całkowitej liczby postów

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $count | `int` | Całkowita liczba postów |
| $post_counts | `object` | Obiekt typu WordPress zwracany przez funkcję `wp_count_posts` |
| $post_type | `string` | Slug typu postu |

### Od {#since}

- 1.9.1
### Źródło {#source}

Zdefiniowane w [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) w linii 136


## Zwraca {#returns}
Nowa całkowita liczba
