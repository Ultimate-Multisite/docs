---
id: networks_pre_user_is_network_admin
title: Pansala - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

Sinasala ang mga network kung saan administrator ang isang user, upang agad na i-short-circuit ang proseso.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $ | `array\|bool\|null` | Listahan ng mga ID ng network o false. Anumang halaga maliban sa null ay mag-i-short-circuit sa proseso. |
| $ | `int` | User ID kung saan dapat ibalik ang mga network. |

### Mula noong {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) sa linya 688
