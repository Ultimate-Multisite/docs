---
id: networks_user_is_network_admin
title: Filter - networks_user_is_network_admin
sidebar_label: networks_user_is_network_admin
_i18n_hash: f8e40a1c47591c0cab73d671cf681281
---
# Szűrő: networks_user_is_network_admin

Szűrőzi a hálózatokat, amelyek felhasználó adminja.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $ | `array\|bool` | Hálózat azonosítóinak listája, vagy `false`, ha a felhasználónak nincs hálózata. |
| $ | `int` | A felhasználó azonosítója, akinek a hálózatokat kell visszaadni. |

### Desde {#since}

- 2.0.0
### Forrás {#source}

Definálva a [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L703) fájlban, 703-án.
