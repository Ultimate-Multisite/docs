---
id: wp_ultimo_skip_network_active_check
title: Φίλτρο - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Φίλτρο: wp_ultimo_skip_network_active_check

Επιτρέπει στους προγραμματιστές να παρακάμψουν τον έλεγχο ενεργοποίησης του δικτύου.

Αυτό είναι χρήσιμο όταν χρησιμοποιείτε ρυθμίσεις και άλλες προσαρμοσμένες εγκαταστάσεις βασισμένες σε composer, όπως το Bedrock, για παράδειγμα, όπου η χρήση plugins ως mu-plugins είναι η συνήθης πρακτική.

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Αν θέλουμε να παρακάμψουμε τον έλεγχο ή όχι, το οποίο έχει προεπιλεγμένη τιμή `false`. |

### Από

- 2.0.0
### Πηγή

Ορίζεται στο [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) στην γραμμή 272


## Επιστρέφει
`true` αν θέλετε να παρακάμψετε τον έλεγχο, `false` αλλιώς.
