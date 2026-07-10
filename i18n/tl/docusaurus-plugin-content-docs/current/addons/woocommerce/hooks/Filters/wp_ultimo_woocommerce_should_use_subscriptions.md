---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Pansala - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Payagan ang mga developer na pilitin ang paggamit ng WooCommerce Subscriptions.

Bilang default, sinusuri ng add-on kung (1) naroroon ang WooCommerce Subscriptions (alinman sa buong plugin o bundled core), pagkatapos ay (2) sinusuri ang setting na nagpapagana sa paggamit ng WooCommerce Subscriptions.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Kung kasalukuyan nating kailangang gumamit ng Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Ang kasalukuyang object. |

### Pinagmulan {#source}

Tinukoy sa [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) sa linya 361


## Mga Ibinabalik {#returns}
true para gamitin ang WooCommerce Subs, false para hindi ito gamitin.
