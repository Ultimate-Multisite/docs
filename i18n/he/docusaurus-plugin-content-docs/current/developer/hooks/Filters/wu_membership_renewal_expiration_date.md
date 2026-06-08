---
id: wu_membership_renewal_expiration_date
title: מסנן - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date

מסנן את תאריך התפוגה המחושב, כדי לוודא שהוא מוגדר לאחר תאריך החידוש.

## פרמטרים

| Name | Type | תיאור |
|------|------|-------------|
| $expiration | `string` | תאריך התפוגה המחושב. |
| $plan | `\Product` | אובייקט רמת המנוי. |
| $membership_id | `int` | מזהה המנוי. |
| $membership | `\Membership` | אובייקט המנוי. |

### מאז

- 2.0.0
### מקור

מוגדר ב-[inc/models/class-membership.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) בשורה 2192
