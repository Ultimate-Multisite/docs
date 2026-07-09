---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Tace - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Tace: wp_ultimo_woocommerce_should_use_subscriptions

Ba masu haɓakawa damar tilasta amfani da WooCommerce Subscriptions.

Ta tsohuwa add-on yana duba ko (1) WooCommerce Subscriptions yana nan (ko cikakken plugin ko bundled core), sannan (2) yana duba saitin da ke ba da damar amfani da WooCommerce Subscriptions.

## Parameters

| Suna | Nau'i | Bayani |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Idan a halin yanzu muna buƙatar amfani da Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Abun yanzu. |

### Tushe

An ayyana a cikin [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) a layi na 361


## Yana dawo da
true don amfani da WooCommerce Subs, false don kada a yi amfani da shi.
