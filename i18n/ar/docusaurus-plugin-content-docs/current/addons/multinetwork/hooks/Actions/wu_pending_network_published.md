---
id: wu_pending_network_published
title: الإجراء - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published

Fires after a pending network is published.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | The created network. |
| $membership | `\WP_Ultimo\Models\Membership` | The membership. |
| $pending_network | `array` | The original pending network data. |

### Source

Defined in [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) at line 1815
