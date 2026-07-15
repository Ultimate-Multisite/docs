---
id: networks_pre_user_is_network_admin
title: Φίλτρο - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

Φιλτράρει τα δίκτυα για τα οποία ο χρήστης είναι διαχειριστής, ώστε να παρακάμψει τη διαδικασία.

## Παράμετροι {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | Λίστα με τα αναγνωριστικά δικτύων ή `false`. Οτιδήποτε εκτός από `null` θα παρακάμψει τη διαδικασία. |
| $ | `int` | Το ID χρήστη για το οποίο πρέπει να επιστραφούν τα δίκτυα. |

### Από {#since}

- 2.0.0
### Πηγή {#source}

Ορίζεται στο [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) στην γραμμή 688
