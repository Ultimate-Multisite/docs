---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Iragazkia - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Iragazkia: wp_ultimo_woocommerce_should_use_subscriptions

Garatzaileei WooCommerce Subscriptions erabiltzea behartzeko aukera ematen die.

Lehenespenez, gehigarriak egiaztatzen du ea (1) WooCommerce Subscriptions badagoen (plugin osoa edo bildutako core), eta gero (2) WooCommerce Subscriptions erabilera gaitzen duen ezarpena egiaztatzen du.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Une honetan Woo Subs erabili behar dugun ala ez. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Uneko objektua. |

### Iturburua {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) fitxategian definitua, 361. lerroan


## Itzultzen du {#returns}
true WooCommerce Subs erabiltzeko, false ez erabiltzeko.
