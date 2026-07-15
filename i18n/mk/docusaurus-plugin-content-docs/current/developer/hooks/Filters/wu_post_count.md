---
id: wu_post_count
title: Филтер - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Филтер: wu_post_count

Дозволува развивачите на plugin да ја променат вкупната бројка

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $count | `int` | Вкупниот број на објави |
| $post_counts | `object` | WordPress објект вратен од wp_count_posts функцијата |
| $post_type | `string` | slug на типот објава |

### Од верзија {#since}

- 1.9.1
### Извор {#source}

Дефинирано во [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) на ред 136


## Враќа {#returns}
Нова вкупна бројка
