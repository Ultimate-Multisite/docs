---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Sía - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Sía: wp_ultimo_woocommerce_should_use_subscriptions

Leyfðu þróunaraðilum að þvinga notkun WooCommerce Subscriptions.

Sjálfgefið athugar viðbótin hvort (1) WooCommerce Subscriptions sé til staðar (annaðhvort full plugin eða innbyggður kjarni), síðan (2) athugar stillinguna sem virkjar notkun WooCommerce Subscriptions.

## Færibreytur

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Ef við þurfum núna að nota Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Núverandi hlutur. |

### Uppruni

Skilgreint í [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) í línu 361


## Skilar
true til að nota WooCommerce Subs, false til að nota það ekki.
