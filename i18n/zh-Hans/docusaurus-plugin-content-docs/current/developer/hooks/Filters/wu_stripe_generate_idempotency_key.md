---
id: wu_stripe_generate_idempotency_key
title: 过滤器 - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# 过滤器: wu_stripe_generate_idempotency_key

过滤与 Stripe 费用选项一起发送的 idempotency_key 值。

## Parameters

| 名称 | 类型 | 描述 |
|------|------|------|
| $idempotency_key | `string` | idempotency key 的值。 |
| $args | `array` | 用于帮助生成 key 的参数。 |
| $context | `string` | 生成 idempotency key 的上下文。 |

### Since

- 3.5.0

### Source

在 [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) 第 54 行定义
