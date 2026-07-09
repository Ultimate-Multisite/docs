---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

Filtrerer nettverkene en bruker er administrator av, for å omgå den vanlige prosessen.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $ | `array\|bool\|null` | Liste over nettverks-IDer eller `false`. Alt annet enn `null` vil omgå prosessen. |
| $ | `int` | Bruker-ID for hvilke nettverkene skal returneres. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) på linje 688
