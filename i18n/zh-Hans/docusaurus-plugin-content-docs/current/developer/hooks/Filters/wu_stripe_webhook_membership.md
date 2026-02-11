---
id: wu_stripe_webhook_membership
title: 过滤 - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# 过滤器: wu_stripe_webhook_membership

过滤与此 webhook 关联的会员记录。

此过滤器的引入是为了解决同一 Stripe 客户在不同站点上使用时可能产生的冲突。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | 会员对象。 |
| $event | `\Stripe\Event` | 接收到的事件。 |

### Source

在 [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) 的第 2035 行定义
