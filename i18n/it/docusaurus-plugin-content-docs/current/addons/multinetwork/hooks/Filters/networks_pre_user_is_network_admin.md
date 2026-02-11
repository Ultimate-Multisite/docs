---
id: networks_pre_user_is_network_admin
title: Filtro - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

Filtra le reti di cui l'utente è amministratore, per interrompere il processo.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | Elenco degli ID delle reti o false. Qualsiasi valore diverso da null interromperà il processo. |
| $ | `int` | ID utente per cui le reti devono essere restituite. |

### Since

- 2.0.0

### Source

Defined in [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) at line 688
