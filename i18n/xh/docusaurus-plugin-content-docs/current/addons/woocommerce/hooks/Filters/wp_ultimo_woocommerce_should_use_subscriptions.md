---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Isihluzi - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Isihluzi: wp_ultimo_woocommerce_should_use_subscriptions

Vumela abaphuhlisi banyanzelise ukusetyenziswa kwe-WooCommerce Subscriptions.

Ngokungagqibekanga i-add-on ijonga ukuba (1) WooCommerce Subscriptions ikhona (nokuba yi-plugin epheleleyo okanye yi-core ehlanganisiweyo), emva koko (2) ijonga useto oluvumela ukusetyenziswa kwe-WooCommerce Subscriptions.

## Iiparamitha {#parameters}

| Igama | Uhlobo | Inkcazelo |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Ukuba ngoku kufuneka sisebenzise i-Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Into yangoku. |

### Umthombo {#source}

Ichazwe kwi-[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) kumgca 361


## Okubuyiswayo {#returns}
true ukuze kusetyenziswe i-WooCommerce Subs, false ukuze ingasetyenziswa.
