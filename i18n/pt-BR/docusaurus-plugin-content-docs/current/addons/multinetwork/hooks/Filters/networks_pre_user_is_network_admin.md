---
id: networks_pre_user_is_network_admin
title: Filtro - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
Filtro: networks_pre_user_is_network_admin

Filtra as redes em que o usuário é administrador, interrompendo o processo.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | Lista de IDs de rede ou falso. Qualquer coisa além de null interromperá o processo. |
| $ | `int` | ID do usuário para o qual as redes devem ser retornadas. |

### Desde

- 2.0.0

### Fonte

Definido em [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) na linha 688
