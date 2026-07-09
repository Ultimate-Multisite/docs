---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

Sinusala (filters) nito ang mga network na administrator ng isang user, upang direktang ma-skip ang normal na proseso.

## Mga Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | Listahan ng network IDs o false. Anumang hindi null ay mag-short-circuit sa proseso. |
| $ | `int` | User ID kung saan dapat ibalik ang mga network. |

### Simula {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) sa linya 688
