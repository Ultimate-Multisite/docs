---
id: wu_pending_network_published
title: Ação - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published {#action-wupendingnetworkpublished}

Dispara após uma rede pendente ser publicada.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | A rede criada. |
| $membership | `\WP_Ultimo\Models\Membership` | A associação. |
| $pending_network | `array` | Os dados originais da rede pendente. |

### Source {#source}

Definido em [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) na linha 1815
