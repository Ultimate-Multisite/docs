---
id: networks_pre_user_is_network_admin
title: Филтер - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Филтер: networks_pre_user_is_network_admin

Ги филтрира мрежите на кои корисникот е администратор, за да го прекине процесот предвреме.

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $ | `array\|bool\|null` | Листа на ID-а на мрежи или false. Сè освен null ќе го прекине процесот предвреме. |
| $ | `int` | ID на корисник за кој треба да се вратат мрежите. |

### Од верзија

- 2.0.0
### Извор

Дефинирано во [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) на линија 688
