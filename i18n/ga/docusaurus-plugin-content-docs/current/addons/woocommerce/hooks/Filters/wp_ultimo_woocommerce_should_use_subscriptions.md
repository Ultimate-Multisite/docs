---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Scagaire - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Scagaire: wp_ultimo_woocommerce_should_use_subscriptions

Ceadaíonn sé d’fhorbróirí úsáid WooCommerce Subscriptions a éigean.

De réir réamhshocraithe, seiceálann an breiseán má tá (1) WooCommerce Subscriptions i láthair (an plugin iomlán nó an croí cuachta), ansin (2) seiceálann sé an socrú a chumasaíonn úsáid WooCommerce Subscriptions.

## Paraiméadair

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Má theastaíonn uainn Woo Subs a úsáid faoi láthair. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | An réad reatha. |

### Foinse

Sainithe in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ag líne 361


## Tuairisceáin
true chun WooCommerce Subs a úsáid, false gan é a úsáid.
