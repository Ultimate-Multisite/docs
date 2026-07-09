---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Suodatin - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Suodatin: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Salli kehittäjien pakottaa WooCommerce Subscriptionsin käyttö.

Oletusarvoisesti lisäosa tarkistaa, onko (1) WooCommerce Subscriptions käytettävissä (joko täysi plugin tai mukana toimitettu ydin), ja sitten (2) tarkistaa asetuksen, joka ottaa WooCommerce Subscriptionsin käytön käyttöön.

## Parametrit {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Tarvitseeko meidän tällä hetkellä käyttää Woo Subsia. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Nykyinen objekti. |

### Lähde {#source}

Määritelty tiedostossa [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) rivillä 361


## Palauttaa {#returns}
true, jos WooCommerce Subsia käytetään, false, jos sitä ei käytetä.
