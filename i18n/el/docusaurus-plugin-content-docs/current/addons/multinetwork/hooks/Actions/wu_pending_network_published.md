---
id: wu_pending_network_published
title: Ενέργεια - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published {#action-wupendingnetworkpublished}

Εκτελείται αφού δημοσιευτεί ένα ανόλωτο δίκτυο.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Το δημιουργημένο δίκτυο. |
| $membership | `\WP_Ultimo\Models\Membership` | Η सदस्यता. |
| $pending_network | `array` | Τα αρχικά δεδομένα του ανόλωτου δικτύου. |

### Source {#source}

Ορίζεται στο [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) στην γραμμή 1815.
