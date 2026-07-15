---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# اکشن: wu_membership_pre_renew

این اکشن قبل از تمدید عضویت اجرا می‌شود.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $expiration | `string` | تاریخ انقضای جدید که باید تنظیم شود. |
| $membership_id | `int` | شناسه (ID) عضویت. |
| $membership | `\Membership` | شیء (Object) عضویت. |

### از نسخه {#since}

- 2.0
### منبع {#source}

در [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) در خط ۲۲۰۴ تعریف شده است.
