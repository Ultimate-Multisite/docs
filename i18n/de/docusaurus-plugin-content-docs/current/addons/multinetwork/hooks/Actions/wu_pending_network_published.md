---
id: wu_pending_network_published
title: Aktion - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published

Ausgelöst, nachdem ein ausstehendes Netzwerk veröffentlicht wurde.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Das erstellte Netzwerk. |
| $membership | `\WP_Ultimo\Models\Membership` | Die Mitgliedschaft. |
| $pending_network | `array` | Die ursprünglichen Daten des ausstehenden Netzwerks. |

### Source

Definiert in [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) in Zeile 1815
