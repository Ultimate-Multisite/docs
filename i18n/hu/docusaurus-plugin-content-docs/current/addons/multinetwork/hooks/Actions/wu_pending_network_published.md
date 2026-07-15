---
id: wu_pending_network_published
title: Action - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Akció: wu_pending_network_published

Kivitelező, amikor egy váró hálózat közzétesítésre kerül.

## Paraméterek {#parameters}

| Név | Típus | Leírás |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | A létrehozott hálózat. |
| $membership | `\WP_Ultimo\Models\Membership` | A tagság. |
| $pending_network | `array` | Az eredeti, váró hálózat adatai. |

### Forrás {#source}

Definálva [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) fájlban, 1815-sorban.
