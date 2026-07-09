---
id: networks_pre_user_is_network_admin
title: Filtar - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filtar: networks_pre_user_is_network_admin

Filtrira mreže kojima je korisnik administrator kako bi se proces prekinuo ranije.

## Parametri

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $ | `array\|bool\|null` | Popis ID-jeva mreža ili false. Bilo što osim null prekinut će proces ranije. |
| $ | `int` | User ID za koji se mreže trebaju vratiti. |

### Od verzije

- 2.0.0
### Izvor

Definirano u [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) u retku 688
