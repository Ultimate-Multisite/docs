---
id: wu_membership_calculated_date_expiration
title: Φίλτρο - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration

Φιλτράρει την υπολογισμένη ημερομηνία λήξης.

## Παράμετροι {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Υπολογισμένη ημερομηνία λήξης σε μορφή MySQL. |
| $membership_id | `int` | Το αναγνωριστικό (ID) της συνδρομής. |
| $membership | `\WP_Ultimo\Models\Membership` | Το αντικείμενο της συνδρομής. |

### Από {#since}

- 2.0
### Πηγή {#source}

Ορίζεται στο [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) στην γραμμή 1309.
