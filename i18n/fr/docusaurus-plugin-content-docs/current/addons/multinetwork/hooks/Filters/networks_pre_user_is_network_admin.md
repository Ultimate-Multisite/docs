---
id: networks_pre_user_is_network_admin
title: Filtre - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

Filters the networks a user is the administrator of, to short-circuit the process.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | Liste d'ID de réseau ou false. Tout sauf null interrompra le processus. |
| $ | `int` | ID utilisateur pour lequel les réseaux doivent être retournés. |

### Depuis

- 2.0.0
### Source

Defined in [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) at line 688
