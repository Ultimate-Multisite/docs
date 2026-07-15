---
id: wu_membership_calculated_date_expiration
title: فیلتر - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration

این فیلتر، تاریخ انقضای محاسبه شده را فیلتر می‌کند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $expiration | `string` | تاریخ انقضای محاسبه شده با فرمت MySQL. |
| $membership_id | `int` | شناسه عضویت. |
| $membership | `\WP_Ultimo\Models\Membership` | شیء عضویت. |

### از نسخه {#since}

- 2.0
### منبع {#source}

در [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) در خط ۱۳۰۹ تعریف شده است.
