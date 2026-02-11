---
id: wu_return_url
title: 过滤器 - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# 过滤器: wu_return_url

允许开发者在结账流程后更改使用的网关返回 URL。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $return_url | `string` | 重定向后要跳转的 URL。 |
| $gateway | `self` | 网关实例。 |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite 支付实例。 |
| $cart | `\WP_Ultimo\Checkout\Cart` | 当前 Ultimate Multisite 购物车订单。 |

### 适用版本

- 2.0.20

### 来源

在 `inc/gateways/class-base-gateway.php`（https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683）第 683 行定义

## 返回值
