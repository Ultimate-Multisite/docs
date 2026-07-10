---
id: wu_membership_renewal_expiration_date
title: Фільтр - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Фільтр: wu_membership_renewal_expiration_date {#filter-wumembershiprenewalexpirationdate}

Фільтрує обчислена дату закінчення дії, щоб вона була встановлена після продовження.

## Параметри {#parameters}

| Name | Type | Опис |
|------|------|-------------|
| $expiration | `string` | Обчислена дата закінчення дії. |
| $plan | `\Product` | Об'єкт рівня членства. |
| $membership_id | `int` | ID членства. |
| $membership | `\Membership` | Об'єкт членства. |

### Звернення {#since}

- 2.0.0
### Джерело {#source}

Визначено в [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) на рядку 2192
