---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filtras - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filtras: wp_ultimo_woocommerce_should_use_subscriptions

Leidžia kūrėjams priverstinai naudoti WooCommerce Subscriptions.

Pagal numatytuosius nustatymus priedas patikrina, ar (1) WooCommerce Subscriptions yra įdiegtas (arba visas plugin, arba įtrauktas branduolys), tada (2) patikrina nustatymą, įgalinantį WooCommerce Subscriptions naudojimą.

## Parametrai

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Ar šiuo metu turime naudoti Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Dabartinis objektas. |

### Šaltinis

Apibrėžta [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) 361 eilutėje


## Grąžina
true, jei naudoti WooCommerce Subs, false, jei jo nenaudoti.
