---
id: wu_pending_network_published
title: Azione - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published {#action-wupendingnetworkpublished}

Si attiva dopo la pubblicazione di una rete in attesa.

## Parameters {#parameters}

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | La rete creata. |
| $membership | `\WP_Ultimo\Models\Membership` | L'iscrizione. |
| $pending_network | `array` | I dati originali della rete in attesa. |

### Source {#source}

Definito in [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) alla riga 1815
