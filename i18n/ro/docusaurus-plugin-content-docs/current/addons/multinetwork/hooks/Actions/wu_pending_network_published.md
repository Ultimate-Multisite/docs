---
id: wu_pending_network_published
title: Action - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Acțiune: wu_pending_network_published {#action-wupendingnetworkpublished}

Se declanșează după ce o rețeauă în așteptare este publicată.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Rețeaua creată. |
| $membership | `\WP_Ultimo\Models\Membership` | Membrăția. |
| $pending_network | `array` | Datele inițiale ale rețelei în așteptare. |

### Sursă {#source}

Definită în [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) la linia 1815
