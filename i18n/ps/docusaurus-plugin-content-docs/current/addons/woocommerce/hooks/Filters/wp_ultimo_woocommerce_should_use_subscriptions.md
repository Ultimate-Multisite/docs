---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: فلټر - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

پرمختیاکوونکو ته اجازه ورکوي چې د WooCommerce Subscriptions کارول په زور فعال کړي.

په تلوالي ډول add-on ګوري چې (1) WooCommerce Subscriptions شتون لري (یا بشپړ plugin یا ورسره تړلی core)، بیا (2) هغه setting ګوري چې د WooCommerce Subscriptions کارونه فعالوي.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | که موږ اوسمهال د Woo Subs کارولو ته اړتیا لرو. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | اوسنی object. |

### Source {#source}

په [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) کې په 361 کرښه تعریف شوی


## Returns {#returns}
true د WooCommerce Subs کارولو لپاره، false د دې نه کارولو لپاره.
