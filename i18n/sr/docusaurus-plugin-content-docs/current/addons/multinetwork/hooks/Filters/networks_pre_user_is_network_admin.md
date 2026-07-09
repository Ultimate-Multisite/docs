---
id: networks_pre_user_is_network_admin
title: Филтер - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Филтер: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

Филтрира мреже чији је корисник администратор, да би се процес прекинуо унапред.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $ | `array\|bool\|null` | Листа ID-јева мрежа или false. Све осим null прекинуће процес унапред. |
| $ | `int` | ID корисника за којег треба вратити мреже. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) у реду 688
