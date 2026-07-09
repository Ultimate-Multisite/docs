---
id: wu_membership_renewal_expiration_date
title: فیلتر - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date {#filter-wumembershiprenewalexpirationdate}

این فیلتر تاریخ انقضای محاسبه شده را طوری تنظیم می‌کند که بعد از تاریخ تمدید باشد.

## پارامترها {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | تاریخ انقضای محاسبه شده. |
| $plan | `\Product` | آبجکت سطح عضویت. |
| $membership_id | `int` | شناسه (ID) عضویت. |
| $membership | `\Membership` | آبجکت عضویت. |

### از نسخه {#since}

- 2.0.0
### منبع {#source}

در [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) در خط ۲۱۹۲ تعریف شده است.
