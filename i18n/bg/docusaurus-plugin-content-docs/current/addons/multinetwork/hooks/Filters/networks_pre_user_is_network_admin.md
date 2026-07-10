---
id: networks_pre_user_is_network_admin
title: Филтър - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Филтър: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

Филтрира мрежите, за които потребителят е администратор, за да прескочи процеса.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $ | `array\|bool\|null` | Списък с ID на мрежи или false. Всичко, освен null, ще прескочи процеса. |
| $ | `int` | ID на потребителя, за когото трябва да се върнат мрежите. |

### От версия {#since}

- 2.0.0
### Източник {#source}

Дефиниран в [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) на линия 688
