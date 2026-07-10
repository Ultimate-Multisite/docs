---
id: wu_membership_pre_cancel
title: Action - wu_membership_pre_cancel
sidebar_label: wu_membership_pre_cancel
_i18n_hash: 0a9e6270824bf3aeac93b4ad8909f4d3
---
# Action: wu_membership_pre_cancel {#action-wumembershipprecancel}

این اکشن قبل از اینکه عضویت لغو شود، فعال می‌شود.

## پارامترها {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership_id | `int` | شناسه (ID) عضویت. |
| $membership | `\WP_Ultimo\Models\Membership` | شیء (Object) عضویت. |

### از نسخه {#since}

- 2.0
### منبع {#source}

در [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2267) در خط ۲۲۶۷ تعریف شده است.
