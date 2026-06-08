---
id: wu_membership_pre_cancel
title: Action - wu_membership_pre_cancel
sidebar_label: wu_membership_pre_cancel
_i18n_hash: 0a9e6270824bf3aeac93b4ad8909f4d3
---
# Action: wu_membership_pre_cancel

Εκτελείται πριν από την ακύρωση της συνδρομής.

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $membership_id | `int` | Ο αναγνωριστικός αριθμός (ID) της συνδρομής. |
| $membership | `\WP_Ultimo\Models\Membership` | Το αντικείμενο (object) της συνδρομής. |

### Από

- 2.0
### Πηγή

Ορίζεται στο [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2267) στην γραμμή 2267
