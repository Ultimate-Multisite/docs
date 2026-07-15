---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

Filtruje siete, ktorých je používateľ administrátorom, aby sa proces skrátil.

## Parametre {#parameters}

| Názov | Typ | Opis |
|------|------|-------------|
| $ | `array\|bool\|null` | Zoznam ID sietí alebo false. Čokoľvek okrem null skráti proces. |
| $ | `int` | ID používateľa, pre ktorého sa majú vrátiť siete. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) na riadku 688
