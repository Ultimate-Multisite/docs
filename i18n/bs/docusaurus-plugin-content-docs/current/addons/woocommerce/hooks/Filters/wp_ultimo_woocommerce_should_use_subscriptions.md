---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Omogućava developerima da prisile korištenje WooCommerce Subscriptions.

Po podrazumevanom, add-on provjerava da li (1) WooCommerce Subscriptions postoji (bilo kao pun plugin ili ugrađeni core), a zatim (2) provjerava postavku koja omogućava korištenje WooCommerce Subscriptions.

## Parametri {#parameters}

| Name | Type | Opis |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Ako trenutno moramo koristiti Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Trenutni objekat. |

### Izvor {#source}

Definisan je u [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) na liniji 361

## Vraća {#returns}
`true` za korištenje WooCommerce Subs, `false` za ne-korištenje.
