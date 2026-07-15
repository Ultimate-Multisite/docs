---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

Filtrira omrežja, katerih skrbnik je uporabnik, da predčasno prekine postopek.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $ | `array\|bool\|null` | Seznam ID-jev omrežij ali false. Karkoli razen null bo predčasno prekinilo postopek. |
| $ | `int` | ID uporabnika, za katerega naj se vrnejo omrežja. |

### Od različice {#since}

- 2.0.0
### Vir {#source}

Določeno v [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) v vrstici 688
