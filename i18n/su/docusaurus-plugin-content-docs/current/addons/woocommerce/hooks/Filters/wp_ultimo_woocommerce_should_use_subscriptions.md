---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Saringan - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Saringan: wp_ultimo_woocommerce_should_use_subscriptions

Ngidinan pamekar pikeun maksa pamakean WooCommerce Subscriptions.

Sacara standar, pangaya ieu mariksa naha (1) WooCommerce Subscriptions aya (boh pangaya lengkep atawa inti anu dibundel), tuluy (2) mariksa setélan anu ngaktipkeun pamakean WooCommerce Subscriptions.

## Parameter

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Lamun ayeuna urang kudu ngagunakeun Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Obyék ayeuna. |

### Sumber

Ditetepkeun dina [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) dina garis 361


## Mulangkeun
true pikeun ngagunakeun WooCommerce Subs, false pikeun henteu ngagunakeunana.
