---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

Filtrerer de netværk, en bruger er administrator for, for at kortslutte processen.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $ | `array\|bool\|null` | Liste over netværks-ID'er eller false. Alt undtagen null vil kortslutte processen. |
| $ | `int` | Bruger-ID, som netværkene skal returneres for. |

### Siden

- 2.0.0
### Kilde

Defineret i [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) på linje 688
