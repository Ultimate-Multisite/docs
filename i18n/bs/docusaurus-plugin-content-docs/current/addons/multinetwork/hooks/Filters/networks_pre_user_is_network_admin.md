---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

Filtrira mreže za koje je korisnik administrator, kako bi se proces skratio.

## Parametri

| Ime | Tip | Opis |
|------|------|-------------|
| $ | `array\|bool\|null` | Lista ID-ja mreža ili `false`. Sve osim `null` će skratiti proces. |
| $ | `int` | ID korisnika za kojeg treba vratiti mreže. |

### Od

- 2.0.0
### Izvor

Definisano u [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) na liniji 688
