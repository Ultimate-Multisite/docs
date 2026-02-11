---
id: wu_checkout_order_created
title: 动作 - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# 动作: wu_checkout_order_created

在结账订单完全组装后触发。

插件可以使用此钩子为具有独立计费周期的产品创建二级会员。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $order | `\WP_Ultimo\Checkout\Cart` | 购物车/订单对象。 |
| $customer | `\WP_Ultimo\Models\Customer` | 客户。 |
| $membership | `\WP_Ultimo\Models\Membership` | 主会员。 |
| $payment | `\WP_Ultimo\Models\Payment` | 付款。 |

### 自

- 2.5.0

### 来源

在 [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) 的第 891 行定义
