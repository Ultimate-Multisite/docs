---
id: wu_pending_network_published
title: Darbība - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Darbība: wu_pending_network_published {#action-wupendingnetworkpublished}

Tiek palaista pēc tam, kad gaidošs tīkls ir publicēts.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Izveidotais tīkls. |
| $membership | `\WP_Ultimo\Models\Membership` | Dalība. |
| $pending_network | `array` | Sākotnējie gaidošā tīkla dati. |

### Avots {#source}

Definēts [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) 1815. rindā
