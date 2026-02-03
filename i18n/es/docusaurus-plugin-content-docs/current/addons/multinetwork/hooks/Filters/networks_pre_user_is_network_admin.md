---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filtro: networks_pre_user_is_network_admin

Filtra las redes en las que un usuario es administrador, para interrumpir el proceso.

## Parámetros

| Nombre | Tipo | Descripción |
|--------|------|-------------|
| $ | `array\|bool\|null` | Lista de IDs de red o falso. Cualquier cosa que no sea null interrumpirá el proceso. |
| $ | `int` | ID de usuario para el cual se deben devolver las redes. |

### Desde

- 2.0.0

### Fuente

Definido en [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) en la línea 688
