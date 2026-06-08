---
id: networks_pre_user_is_network_admin
title: Szűrő - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

Szűri (filter) azokat a hálózatokat (networks), amelyeknek felhasználó adminja, ezzel kihagyva a normál folyamatot.

## Paraméterek

| Neve | Típus | Leírás |
|------|------|-------------|
| $ | `array\|bool\|null` | Hálózatazonosító (network ID) listája vagy `false`. Bármi, ami `null`-ra nem áll, kihagyja a normál folyamatot. |
| $ | `int` | A felhasználó azonosítója (User ID), akinek a hálózatokat kell visszaadni. |

### Since

- 2.0.0
### Source

Definíciója található [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) fájlban, 688-án.
