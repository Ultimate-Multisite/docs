---
id: networks_pre_user_is_network_admin
title: Suodatin - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

Suodattaa networks, joiden administrator käyttäjä on, prosessin oikaisemiseksi.

## Parametrit {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | Luettelo network ID:istä tai false. Mikä tahansa muu kuin null oikaisee prosessin. |
| $ | `int` | Käyttäjän ID, jolle networks tulee palauttaa. |

### Alkaen {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) rivillä 688
