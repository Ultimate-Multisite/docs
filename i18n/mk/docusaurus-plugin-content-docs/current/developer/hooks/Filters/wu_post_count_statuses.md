---
id: wu_post_count_statuses
title: Филтер - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Филтер: wu_post_count_statuses

Им дозволува на развивачите на plugin-и да променат кој статус на објава треба да се брои. Стандардно, се бројат објавени и приватни објави

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $post_status | `array` | Листата на статуси на објави |
| $post_type | `string` | slug на типот на објава |

### Од {#since}

- 1.9.1
### Извор {#source}

Дефинирано во [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) на линија 119


## Враќа {#returns}
Нова низа од статуси на објава
