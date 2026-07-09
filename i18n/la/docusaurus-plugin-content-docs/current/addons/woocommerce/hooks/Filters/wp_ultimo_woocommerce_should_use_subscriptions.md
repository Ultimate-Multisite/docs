---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filtrum - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filtrum: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Sinite evolutores usum WooCommerce Subscriptions cogere.

Per defaltum add-on explorat utrum (1) WooCommerce Subscriptions adsit (sive plugin plenus sive nucleus inclusus), deinde (2) optionem inspicit quae usum WooCommerce Subscriptions permittit.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Utrum nunc Woo Subs uti necesse sit. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Obiectum praesens. |

### Fons {#source}

Definitum in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ad lineam 361


## Reditus {#returns}
true ut WooCommerce Subs utaris, false ut eo non utaris.
