---
id: wu_bypass_unset_current_user
title: Φίλτρο - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Φίλτρο: wu_bypass_unset_current_user

Επιτρέπει στους developers να παρακάμψουν τον κώδικα που αφαιρεί τον τρέχοντα χρήστη (unset current user).

Το να επιστρέψετε οτιδήποτε άλλο εκτός από το null θα παρακάμψει την αφαίρεση του τρέχοντα συνδεδεμένου χρήστη. Αυτό μπορεί να είναι χρήσιμο σε ορισμένα σενάρια, για παράδειγμα, όταν ασχολείστε με υπο-σites που χρησιμοποιούνται ως πίνακες διαχείρισης (admin panels).

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null για να συνεχίσετε, οτιδήποτε άλλο για να παρακάμψετε. |
| $current_user | `false\|\WP_User` | Το αντικείμενο του τρέχοντα χρήστη. |

### Since

- 2.0.11
### Source

Ορίζεται στο [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) στην γραμμή 221


## Returns
