---
id: wu_membership_renewal_expiration_date
title: Φίλτρο - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date

Το φιλτράρει την υπολογισμένη ημερομηνία λήξης ώστε να ρυθμίζεται μετά την ανανέωση.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Η υπολογισμένη ημερομηνία λήξης. |
| $plan | `\Product` | Το αντικείμενο επιπέδου συνδρομής. |
| $membership_id | `int` | Ο αναγνωριστικός αριθμός της συνδρομής. |
| $membership | `\Membership` | Το αντικείμενο συνδρομής. |

### Since

- 2.0.0
### Source

Ορίζεται στο [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) στην γραμμή 2192
