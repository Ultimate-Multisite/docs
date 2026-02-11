---
id: wu_stripe_existing_plan_id
title: フィルタ - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

プランを確認するための ID をフィルタリングします。 これが存在する場合、新しいサブスクリプションはこのプランを使用します。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $plan_id | `string` | チェックする Stripe プランの ID。 |
| $membership_level | `object` | メンバーシップレベルオブジェクト。 |

### Source

定義は [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) の 2653 行目にあります
