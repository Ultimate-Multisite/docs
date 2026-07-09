---
id: wu_pending_network_published
title: Akcija - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published {#action-wupendingnetworkpublished}

Izvršava se nakon što se mreža u čekanju objavi.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Kreirana mreža. |
| $membership | `\WP_Ultimo\Models\Membership` | Članstvo. |
| $pending_network | `array` | Originalni podaci o mreži u čekanju. |

### Izvor {#source}

Definisano je u [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) na liniji 1815
