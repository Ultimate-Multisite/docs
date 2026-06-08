---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Cho phép các nhà phát triển buộc sử dụng WooCommerce Subscriptions.

Theo mặc định, tiện ích mở rộng này sẽ kiểm tra xem (1) WooCommerce Subscriptions có được cài đặt hay không (dù là plugin đầy đủ hay lõi tích hợp), sau đó (2) kiểm tra cài đặt có bật việc sử dụng WooCommerce Subscriptions hay không.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Nếu hiện tại chúng ta cần sử dụng Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Đối tượng hiện tại. |

### Source

Được định nghĩa trong [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) tại dòng 361

## Returns
Trả về `true` để sử dụng WooCommerce Subs, và `false` nếu không sử dụng.
