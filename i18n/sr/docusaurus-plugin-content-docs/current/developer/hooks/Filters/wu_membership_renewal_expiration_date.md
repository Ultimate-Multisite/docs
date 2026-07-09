---
id: wu_membership_renewal_expiration_date
title: Филтер - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Филтер: wu_membership_renewal_expiration_date

Филтрира израчунати датум истека који ће бити постављен након обнове.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Израчунати датум истека. |
| $plan | `\Product` | Објекат нивоа чланства. |
| $membership_id | `int` | ID чланства. |
| $membership | `\Membership` | Објекат чланства. |

### Од верзије

- 2.0.0
### Извор

Дефинисано у [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) на линији 2192
