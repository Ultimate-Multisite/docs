---
id: wu_stripe_existing_plan_id
title: فیلتر - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id {#filter-wustripeexistingplanid}

این فیلتر، شناسه (ID) پلن مورد نظر برای بررسی را تعیین می‌کند. اگر این شناسه وجود داشته باشد، اشتراک جدید از همین پلن استفاده خواهد کرد.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $plan_id | `string` | شناسه پلن Stripe که باید بررسی شود. |
| $membership_level | `object` | شیء (object) سطح عضویت. |

### منبع {#source}

در [inc/gateways/class-base-stripe-gateway.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) در خط ۲۶۵۳ تعریف شده است.
