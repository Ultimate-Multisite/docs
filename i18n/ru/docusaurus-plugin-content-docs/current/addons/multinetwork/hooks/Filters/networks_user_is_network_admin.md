---
id: networks_user_is_network_admin
title: Фильтр - networks_user_is_network_admin
sidebar_label: networks_user_is_network_admin
_i18n_hash: f8e40a1c47591c0cab73d671cf681281
---
# Фильтр: networks_user_is_network_admin

Фильтрует сети, в которых пользователь является администратором.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $ | `array\|bool` | Список ID сетей или false, если у пользователя нет сетей. |
| $ | `int` | ID пользователя, для которого нужно вернуть сети. |

### С версии

- 2.0.0

### Источник

Определено в [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L703) на строке 703
