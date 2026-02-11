---
id: wu_stripe_webhook_membership
title: フィルタ - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# フィルタ: wu_stripe_webhook_membership

このウェブフックに関連付けられたメンバーシップレコードをフィルタリングします。

同じStripe顧客が異なるサイトで使用される場合に発生する可能性のある競合を解決するために、このフィルタが導入されました。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | メンバーシップオブジェクト。 |
| $event | `\Stripe\Event` | 受信したイベント。 |

### Source

次のファイルで定義されています: [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) 行 2035
