---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Saringan - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Ngidini pangembang kanggo meksa panggunaan WooCommerce Subscriptions.

Kanthi gawan add-on mriksa manawa (1) WooCommerce Subscriptions ana (bisa plugin lengkap utawa core sing dibundel), banjur (2) mriksa setelan sing ngaktifake panggunaan WooCommerce Subscriptions.

## Paramèter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Yen saiki kita perlu nggunakake Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Objek saiki. |

### Sumber {#source}

Ditentokake ing [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ing baris 361


## Balikan {#returns}
true kanggo nggunakake WooCommerce Subs, false kanggo ora nggunakake.
