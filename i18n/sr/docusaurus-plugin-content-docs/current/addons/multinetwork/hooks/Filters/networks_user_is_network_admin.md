---
id: networks_user_is_network_admin
title: Филтер - networks_user_is_network_admin
sidebar_label: networks_user_is_network_admin
_i18n_hash: f8e40a1c47591c0cab73d671cf681281
---
# Филтер: networks_user_is_network_admin

Филтрира мреже чији је корисник администратор.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $ | `array\|bool` | Списак ID-јева мрежа или false ако нема мрежа за корисника. |
| $ | `int` | ID корисника за који треба вратити мреже. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L703) у реду 703
