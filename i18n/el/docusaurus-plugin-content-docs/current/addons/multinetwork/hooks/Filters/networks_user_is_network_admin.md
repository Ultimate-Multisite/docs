---
id: networks_user_is_network_admin
title: Φίλτρο - networks_user_is_network_admin
sidebar_label: networks_user_is_network_admin
_i18n_hash: f8e40a1c47591c0cab73d671cf681281
---
# Φίλτρο: networks_user_is_network_admin {#filter-networksuserisnetworkadmin}

Φιλτράρει τα networks για τα οποία ένας χρήστης είναι διαχειριστής.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $ | `array\|bool` | Λίστα με τα IDs των networks ή `false` αν ο χρήστης δεν έχει κανένα network. |
| $ | `int` | Το ID του χρήστη για τον οποίο πρέπει να επιστραφούν τα networks. |

### Από {#since}

- 2.0.0
### Πηγή {#source}

Ορίζεται στο [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L703) στην γραμμή 703
