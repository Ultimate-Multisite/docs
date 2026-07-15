---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Criathrag - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Criathrag: wp_ultimo_woocommerce_should_use_subscriptions

Leig le luchd-leasachaidh cleachdadh WooCommerce Subscriptions a sparradh.

Gu bunaiteach, nì an tuilleadan sgrùdadh a bheil (1) WooCommerce Subscriptions an làthair (an dara cuid am plugin slàn no an core paisgte), agus an uair sin (2) nì e sgrùdadh air an roghainn a tha a’ comasachadh cleachdadh WooCommerce Subscriptions.

## Paramadairean {#parameters}

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Ma tha feum againn an-dràsta air Woo Subs a chleachdadh. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | An nì làithreach. |

### Tùs {#source}

Air a mhìneachadh ann an [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) aig loidhne 361


## Tilleadh {#returns}
true gus WooCommerce Subs a chleachdadh, false gus gun a chleachdadh.
