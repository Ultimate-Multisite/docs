---
id: wu_get_checkout_variables
title: 过滤器 - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# 过滤器：wu_get_checkout_variables

允许插件开发者过滤结账页面的预设值。

请注意，缺失键可能会完全破坏前端的结账流程。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $variables | `array` | 本地化变量。 |
| $checkout | `\Checkout` | 结账类。 |

### 自

- 2.0.0

### 来源

在 [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) 的第 1970 行定义

## 返回值

新的变量数组。
