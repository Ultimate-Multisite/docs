---
id: wu_apply_signup_fee
title: 过滤器 - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# 过滤器: wu_apply_signup_fee

过滤器决定是否应收取注册费。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $add_signup_fee | `bool` | 是否添加注册费。 |
| $product | `object` | 会员等级对象。 |
| $this | `\WP_Ultimo\Checkout\Cart` | 注册对象。 |

### 版本自

- 3.1

### 源码

定义在 [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) 在第 1769 行
