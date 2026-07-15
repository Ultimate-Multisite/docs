---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Muyunguruzi - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Muyunguruzi: wp_ultimo_woocommerce_should_use_subscriptions

Emerera abatunganya porogaramu guhatira ikoreshwa rya WooCommerce Subscriptions.

Mu buryo busanzwe, add-on ireba niba (1) WooCommerce Subscriptions ihari (yaba plugin yuzuye cyangwa core izanye na yo), hanyuma (2) ikareba igenamiterere ryemerera ikoreshwa rya WooCommerce Subscriptions.

## Ibipimo {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Niba ubu dukeneye gukoresha Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Ikintu kiriho ubu. |

### Inkomoko {#source}

Bisobanuwe muri [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ku murongo wa 361


## Ibisubizwa {#returns}
true kugira ngo ukoreshe WooCommerce Subs, false kugira ngo utayikoresha.
