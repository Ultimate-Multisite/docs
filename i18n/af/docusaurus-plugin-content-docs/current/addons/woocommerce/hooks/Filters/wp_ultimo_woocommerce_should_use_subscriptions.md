---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Maak dit moontlik vir ontwikkelaars om die gebruik van WooCommerce Subscriptions te dwing.

Standaardlik kontroleer die add-on of (1) WooCommerce Subscriptions teenwoordig is (of dit nou die volle plugin of die ingebakte kern is), en dan (2) kontroleer die instelling wat die gebruik van WooCommerce Subscriptions moontlik maak.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Indien ons tans Woo Subs moet gebruik. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Die huidige objek. |

### Source {#source}

Bepaald in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) op lyn 361

## Returns {#returns}
`true` om WooCommerce Subs te gebruik, `false` om dit nie te gebruik nie.
