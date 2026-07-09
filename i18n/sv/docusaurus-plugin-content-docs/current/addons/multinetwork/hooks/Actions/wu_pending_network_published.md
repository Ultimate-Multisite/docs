---
id: wu_pending_network_published
title: Action - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published {#action-wupendingnetworkpublished}

Körs efter att ett uthängande nätverk har publicerats.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Det skapade nätverket. |
| $membership | `\WP_Ultimo\Models\Membership` | Medlemskapet. |
| $pending_network | `array` | De ursprungliga uthängande nätverksdata. |

### Källa {#source}

Definieras i [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) på rad 1815
