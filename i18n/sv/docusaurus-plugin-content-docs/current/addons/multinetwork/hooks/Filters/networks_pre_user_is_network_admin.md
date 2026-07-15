---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

Filtrerar de nätverk som en användare är administratör för, för att kringgå processen.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $ | `array\|bool\|null` | Lista över nätverks-ID:n eller `false`. Allt utom `null` kommer att kringgå processen. |
| $ | `int` | Användar-ID för vilket nätverken ska returneras. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definieras i [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) på rad 688
