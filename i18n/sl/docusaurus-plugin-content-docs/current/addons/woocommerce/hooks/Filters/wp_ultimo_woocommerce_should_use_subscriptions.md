---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Razvijalcem omogoča, da vsilijo uporabo WooCommerce Subscriptions.

Privzeto dodatek preveri, ali je (1) WooCommerce Subscriptions prisoten (bodisi celoten plugin bodisi priloženo jedro), nato (2) preveri nastavitev, ki omogoča uporabo WooCommerce Subscriptions.

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Ali trenutno moramo uporabiti Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Trenutni objekt. |

### Vir

Določeno v [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) v vrstici 361


## Vrnjene vrednosti
true za uporabo WooCommerce Subs, false za neuporabo.
