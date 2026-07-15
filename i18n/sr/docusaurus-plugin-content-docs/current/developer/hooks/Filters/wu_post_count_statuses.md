---
id: wu_post_count_statuses
title: Филтер - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Филтер: wu_post_count_statuses

Омогућава програмерима plugin-а да промене који статус објаве треба да се броји. Подразумевано се броје објављене и приватне објаве

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | Листа статуса објава |
| $post_type | `string` | Слаг типа објаве |

### Од верзије {#since}

- 1.9.1
### Извор {#source}

Дефинисано у [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) у реду 119


## Враћа {#returns}
Нови низ статуса објава
