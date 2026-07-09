---
id: wu_membership_renewal_expiration_date
title: Филтър - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date {#filter-wumembershiprenewalexpirationdate}

Филтрира изчислената дата на изтичане, така че да бъде зададена след преновяването.

## Параметри {#parameters}

| Name | Type | Описание |
|------|------|-------------|
| $expiration | `string` | Изчислената дата на изтичане. |
| $plan | `\Product` | Обект на ниво на членство. |
| $membership_id | `int` | ID на членството. |
| $membership | `\Membership` | Обект на членството. |

### От версия {#since}

- 2.0.0
### Източник {#source}

Дефиниран в [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) на линия 2192
