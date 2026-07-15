---
id: wu_membership_post_cancel
title: Δράση - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel

Εκτελείται αφού ακυρωθεί η μητρητικότητα.

Αυτό το action ενεργοποιεί την αποστολή του email για την ακύρωση.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $membership_id | `int` | Το αναγνωριστικό (ID) της μητρητικότητας. |
| $membership | `\WP_Ultimo\Models\Membership` | Το αντικείμενο (object) της μητρητικότητας. |

### Από {#since}

- 2.0
### Πηγή {#source}

Ορίζεται στο [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) στην γραμμή 2290
