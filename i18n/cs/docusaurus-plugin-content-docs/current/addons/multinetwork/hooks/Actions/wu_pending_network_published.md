---
id: wu_pending_network_published
title: Akce - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published {#action-wupendingnetworkpublished}

Spouští se po publikování předběžné sítě.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Vytvořená síť. |
| $membership | `\WP_Ultimo\Models\Membership` | Příslušnost. |
| $pending_network | `array` | Originalní data předběžné sítě. |

### Zdroj {#source}

Definováno v [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) na řádku 1815
