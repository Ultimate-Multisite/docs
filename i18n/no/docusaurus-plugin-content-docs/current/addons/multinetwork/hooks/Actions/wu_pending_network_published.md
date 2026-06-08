---
id: wu_pending_network_published
title: Handling - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published

Kjøres etter at et ventende nettverk blir publisert.

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Det opprettede nettverket. |
| $membership | `\WP_Ultimo\Models\Membership` | Medlemskapet. |
| $pending_network | `array` | De opprinnelige dataene for det ventende nettverket. |

### Kilde

Definert i [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) på linje 1815
