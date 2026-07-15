---
id: get_blogs_of_user
title: Филтер - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Филтер: get_blogs_of_user

Реплицира оригинални WP филтер овде, ради сигурности.

Филтрира листу сајтова којима корисник припада.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $sites | `object[]` | Низ објеката сајтова који припадају кориснику. |
| $user_id | `int` | ID корисника. |
| $all | `bool` | Да ли враћени низ сајтова треба да садржи све сајтове, укључујући оне означене као 'deleted', 'archived' или 'spam'. Подразумевано false. |

### Од верзије {#since}

- 2.0.11
### Извор {#source}

Дефинисано у [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) у реду 851
