---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filtar - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filtar: wp_ultimo_woocommerce_should_use_subscriptions

Dopustite developerima da prisile upotrebu WooCommerce Subscriptions.

Prema zadanim postavkama add-on provjerava je li (1) WooCommerce Subscriptions prisutan (bilo cijeli plugin ili ugrađena jezgra), zatim (2) provjerava postavku koja omogućuje upotrebu WooCommerce Subscriptions.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Trebamo li trenutačno koristiti Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Trenutačni objekt. |

### Izvor {#source}

Definirano u [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) u retku 361


## Vraća {#returns}
true za korištenje WooCommerce Subs, false da se ne koristi.
