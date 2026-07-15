---
id: wu_pending_network_published
title: Handling - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published

Udløses, efter et afventende netværk er publiceret.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Det oprettede netværk. |
| $membership | `\WP_Ultimo\Models\Membership` | Medlemskabet. |
| $pending_network | `array` | De oprindelige afventende netværksdata. |

### Kilde {#source}

Defineret i [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) på linje 1815
