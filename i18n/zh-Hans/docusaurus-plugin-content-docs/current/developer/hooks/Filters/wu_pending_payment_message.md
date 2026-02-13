---
id: wu_pending_payment_message
title: 过滤器 - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# 过滤器: wu_pending_payment_message

允许用户更改关于待付款的消息。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $message | `string` | 要打印的消息。 |
| $customer | `\WP_Ultimo\Models\Customer` | 当前客户。 |
| $pending_payments | `array` | 待付款列表。 |

### 版本

- 2.0.19

### 源码

在 [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) 的第 244 行定义。
