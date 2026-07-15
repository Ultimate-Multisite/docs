---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Hidlydd - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Hidlydd: wp_ultimo_woocommerce_should_use_subscriptions

Caniatáu i ddatblygwyr orfodi defnyddio WooCommerce Subscriptions.

Yn ddiofyn, mae’r ychwanegyn yn gwirio a yw (1) WooCommerce Subscriptions yn bresennol (naill ai’r plugin llawn neu’r craidd wedi’i fwndelu), yna (2) yn gwirio’r gosodiad sy’n galluogi defnyddio WooCommerce Subscriptions.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Os oes angen i ni ddefnyddio Woo Subs ar hyn o bryd. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Y gwrthrych presennol. |

### Ffynhonnell {#source}

Wedi’i ddiffinio yn [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ar linell 361


## Dychweliadau {#returns}
true i ddefnyddio WooCommerce Subs, false i beidio â’i ddefnyddio.
