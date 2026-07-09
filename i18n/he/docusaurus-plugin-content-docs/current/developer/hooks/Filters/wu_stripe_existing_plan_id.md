---
id: wu_stripe_existing_plan_id
title: Filter - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# מסנן: wu_stripe_existing_plan_id {#filter-wustripeexistingplanid}

מסנן את מזהה התוכנית שצריך לבדוק. אם מזהה זה קיים, המנוי החדש ישתמש בתוכנית הזו.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $plan_id | `string` | מזהה תוכנית Stripe לבדיקה. |
| $membership_level | `object` | אובייקט רמת המנוי. |

### מקור {#source}

מוגדר ב[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) בשורה 2653.
