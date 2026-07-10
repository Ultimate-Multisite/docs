---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Võimaldab arendajatel sundida WooCommerce Subscriptionsi kasutamist.

Vaikimisi kontrollib lisa, kas (1) WooCommerce Subscriptions on olemas (kas täis-plugin või komplektis olev tuum), seejärel (2) kontrollib seadistust, mis lubab WooCommerce Subscriptionsi kasutamise.

## Parameetrid {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Kas peame praegu kasutama Woo Subsi. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Praegune objekt. |

### Allikas {#source}

Määratletud failis [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) real 361


## Tagastused {#returns}
true WooCommerce Subsi kasutamiseks, false selle mittekasutamiseks.
