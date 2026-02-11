---
id: networks_pre_user_is_network_admin
title: Фильтр - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Фильтр: networks_pre_user_is_network_admin

Фильтрует сети, в которых пользователь является администратором, чтобы прервать процесс.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $ | `array\|bool\|null` | Список ID сетей или false. Любое значение, кроме null, прервет процесс. |
| $ | `int` | ID пользователя, для которого должны быть возвращены сети. |

### С версии

- 2.0.0

### Источник

Определено в [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) на строке 688
