---
id: wu_checkout_after_process_order
title: 动作 - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# 动作: wu_checkout_after_process_order

允许开发者触发额外的钩子。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $checkout | `\Checkout` | 结账对象实例。 |
| $cart | `\Cart` | 结账购物车实例。 |

### 自

- 2.0.9

### 源码

在 [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) 的第 1013 行定义
