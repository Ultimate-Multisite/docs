---
id: wu_membership_post_renew
title: عمل - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

در زمان تمدید عضویت فعال می‌شود.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $expiration | `string` | تاریخ انقضای جدیدی که باید تنظیم شود. |
| $membership_id | `int` | شناسه (ID) عضویت. |
| $membership | `\Membership` | شیء (Object) عضویت. |

### از نسخه {#since}

- 2.0
### منبع {#source}

در [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) در خط ۲۲۳۵ تعریف شده است.
