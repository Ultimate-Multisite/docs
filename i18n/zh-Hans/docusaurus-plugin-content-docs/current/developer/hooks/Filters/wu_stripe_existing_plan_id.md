---
id: wu_stripe_existing_plan_id
title: 过滤 - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

过滤要检查的计划 ID。如果此 ID 存在，新订阅将使用此计划。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $plan_id | `string` | 要检查的 Stripe 计划的 ID。 |
| $membership_level | `object` | 会员等级对象。 |

### Source

在 `inc/gateways/class-base-stripe-gateway.php`（https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653）第 2653 行定义。
