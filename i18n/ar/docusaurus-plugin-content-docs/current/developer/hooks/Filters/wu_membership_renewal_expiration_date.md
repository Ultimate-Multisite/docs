---
id: wu_membership_renewal_expiration_date
title: فلتر - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date

Filters the calculated expiration date to be set after the renewal.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $expiration | `string` | تاريخ الانتهاء المحسوب. |
| $plan | `\Product` | كائن مستوى العضوية. |
| $membership_id | `int` | معرّف العضوية. |
| $membership | `\Membership` | كائن العضوية. |

### Since

- 2.0.0

### Source

معرّف في [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) في السطر 2192
