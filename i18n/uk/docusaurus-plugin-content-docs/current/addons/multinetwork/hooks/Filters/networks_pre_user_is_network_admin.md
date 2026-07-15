---
id: networks_pre_user_is_network_admin
title: Фільтр - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Фільтр: networks_pre_user_is_network_admin

Фільтрує мережі, якими користувач є адміністратором, щоб примусово завершити процес.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | Список ID мереж або false. Будь-що, крім null, примусово завершить процес. |
| $ | `int` | ID користувача, для якого потрібно повернути мережі. |

### Since {#since}

- 2.0.0
### Source {#source}

Визначено в [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) на рядку 688
