---
id: move_site
title: Acción - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Acción: move_site

Se dispara después de que un sitio haya sido movido a una nueva red.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $site_id | `int` | ID del sitio que ha sido movido. |
| $old_network_id | `int` | ID de la red original del sitio. |
| $new_network_id | `int` | ID de la red a la que se ha movido el sitio. |

### Desde

- 1.3.0

### Fuente

Definido en [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) en la línea 1587
