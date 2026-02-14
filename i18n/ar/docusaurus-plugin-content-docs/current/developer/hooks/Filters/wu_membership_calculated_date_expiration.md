---
id: wu_membership_calculated_date_expiration
title: فلتر - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# المرشح: wu_membership_calculated_date_expiration

يقوم بتصفية تاريخ انتهاء الصلاحية المحسوب.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $expiration | `string` | تاريخ انتهاء الصلاحية المحسوب بتنسيق MySQL. |
| $membership_id | `int` | معرف العضوية. |
| $membership | `\WP_Ultimo\Models\Membership` | كائن العضوية. |

### منذ

- 2.0

### المصدر

تم تعريفه في [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) في السطر 1309
