---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: 过滤器 - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# 过滤器: wp_ultimo_woocommerce_should_use_subscriptions

允许开发者强制使用 WooCommerce Subscriptions。

默认情况下，插件会检查 (1) WooCommerce Subscriptions 是否存在（无论是完整插件还是捆绑核心），然后 (2) 检查启用 WooCommerce Subscriptions 使用的设置。

## Parameters

| 名称 | 类型 | 描述 |
|------|------|------|
| $enable_woocommerce_subscription_integration | `bool` | 如果我们当前需要使用 Woo Subs。 |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | 当前对象。 |

### Source

定义在 [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) at line 361

## Returns

true 表示使用 WooCommerce Subs，false 表示不使用。
