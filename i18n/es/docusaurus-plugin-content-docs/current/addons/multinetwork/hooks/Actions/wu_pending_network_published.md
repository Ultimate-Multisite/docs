---
id: wu_pending_network_published
title: Acción - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Acción: wu_pending_network_published

Se dispara después de que se publica una red pendiente.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | La red creada. |
| $membership | `\WP_Ultimo\Models\Membership` | La membresía. |
| $pending_network | `array` | Los datos originales de la red pendiente. |

### Fuente

Definido en [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) en la línea 1815
