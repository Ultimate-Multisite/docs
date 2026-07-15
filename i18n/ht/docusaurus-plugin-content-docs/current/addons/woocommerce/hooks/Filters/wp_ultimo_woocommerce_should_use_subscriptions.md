---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filtè - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filtè: wp_ultimo_woocommerce_should_use_subscriptions

Pèmèt devlopè yo fòse itilizasyon WooCommerce Subscriptions.

Pa defo, add-on nan tcheke si (1) WooCommerce Subscriptions prezan (swa plugin konplè a oswa core ki enkli a), apre sa (2) li tcheke paramèt ki pèmèt itilizasyon WooCommerce Subscriptions.

## Paramèt {#parameters}

| Non | Kalite | Deskripsyon |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Si nou bezwen itilize Woo Subs kounye a. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Objè aktyèl la. |

### Sous {#source}

Defini nan [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) nan liy 361


## Retounen {#returns}
true pou itilize WooCommerce Subs, false pou pa itilize li.
