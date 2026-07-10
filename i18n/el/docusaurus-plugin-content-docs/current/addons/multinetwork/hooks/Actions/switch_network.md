---
id: switch_network
title: Ενέργεια - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Action: switch_network {#action-switchnetwork}

Εκτελείται όταν αλλάζει το τρέχον πλαίσιο του network.

## Παράμετροι {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $new_network_id | `int` | ID του network στο οποίο μεταβαίνετε. |
| $old_network_id | `int` | ID του προηγούμενου ενεργού network. |

### Από {#since}

- 1.3.0
### Πηγή {#source}

Ορίζεται στο [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) στην γραμμή 859
