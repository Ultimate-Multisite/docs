---
id: wu_membership_post_renew
title: Ενέργεια - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Δράση: wu_membership_post_renew

Εκτελείται μετά την ανανέωση της συνδρομής.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $expiration | `string` | Η νέα ημερομηνία λήξης που πρέπει να οριστεί. |
| $membership_id | `int` | Ο αναγνωριστικός αριθμός (ID) της συνδρομής. |
| $membership | `\Membership` | Το αντικείμενο (object) της συνδρομής. |

### Από {#since}

- 2.0
### Πηγή {#source}

Ορίζεται στο [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) στην γραμμή 2235
