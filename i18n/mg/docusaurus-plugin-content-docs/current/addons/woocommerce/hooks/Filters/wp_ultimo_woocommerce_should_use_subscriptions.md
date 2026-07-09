---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Sivana - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Sivana: wp_ultimo_woocommerce_should_use_subscriptions

Avelao ny mpamorona hanery ny fampiasana WooCommerce Subscriptions.

Amin’ny alàlan’ny default, ny fanampiny dia manamarina raha (1) misy ny WooCommerce Subscriptions (na plugin feno na core nampidirina miaraka), avy eo (2) manamarina ny fikirana mamela ny fampiasana WooCommerce Subscriptions.

## Masontsivana

| Anarana | Karazana | Famaritana |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Raha mila mampiasa Woo Subs isika amin’izao fotoana izao. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Ilay object amin’izao fotoana izao. |

### Loharano

Voafaritra ao amin’ny [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) amin’ny andalana 361


## Mamerina
true raha hampiasa WooCommerce Subs, false raha tsy hampiasa azy.
