---
id: wu_maybe_create_customer
title: 动作 - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# 动作: wu_maybe_create_customer

允许插件开发者在添加客户时执行额外操作。

这里我们在主站点添加 customer->user 的钩子，例如。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $customer | `\Customer` | 可能已创建的客户。 |
| $checkout | `\Checkout` | 当前结账类。 |

### 自

- 2.0.0

### 源码

定义于 [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) 在第 1156 行
