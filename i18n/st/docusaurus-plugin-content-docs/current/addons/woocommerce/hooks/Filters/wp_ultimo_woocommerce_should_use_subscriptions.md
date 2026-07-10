---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Sefe - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Sefe: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Lumella bahlahisi ho qobella tšebeliso ea WooCommerce Subscriptions.

Ka tloaelo add-on e hlahloba hore na (1) WooCommerce Subscriptions e teng (ebang ke plugin e feletseng kapa core e kenyellelitsoeng), ebe (2) e hlahloba setting e lumellang tšebeliso ea WooCommerce Subscriptions.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Haeba hajoale re hloka ho sebelisa Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Object ea hajoale. |

### Mohloli {#source}

E hlalositsoe ho [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) moleng oa 361


## E khutlisa {#returns}
true ho sebelisa WooCommerce Subs, false ho se e sebelise.
