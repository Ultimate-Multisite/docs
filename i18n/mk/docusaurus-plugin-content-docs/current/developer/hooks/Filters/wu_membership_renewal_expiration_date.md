---
id: wu_membership_renewal_expiration_date
title: Филтер - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Филтер: wu_membership_renewal_expiration_date {#filter-wumembershiprenewalexpirationdate}

Ја филтрира пресметаната дата на истекување што треба да се постави по обновувањето.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $expiration | `string` | Пресметана дата на истекување. |
| $plan | `\Product` | Објект на ниво на членство. |
| $membership_id | `int` | ID на членството. |
| $membership | `\Membership` | Објект на членство. |

### Од {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) на линија 2192
