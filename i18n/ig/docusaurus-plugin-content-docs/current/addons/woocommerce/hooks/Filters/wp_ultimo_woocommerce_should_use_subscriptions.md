---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Nzacha - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Kwe ka ndị mmepe manye iji WooCommerce Subscriptions.

Na ndabara, add-on na-enyocha ma (1) WooCommerce Subscriptions dị (ma ọ bụ plugin zuru ezu ma ọ bụ bundled core), mgbe ahụ (2) na-enyocha ntọala na-eme ka ojiji WooCommerce Subscriptions nwee ike.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Ma anyị chọrọ ugbu a iji Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Object dị ugbu a. |

### Source {#source}

A kọwara ya na [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) na ahịrị 361


## Returns {#returns}
true iji WooCommerce Subs, false ka ejighị ya.
