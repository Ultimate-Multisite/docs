---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Süzgüç - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Işläp düzüjilere WooCommerce Subscriptions ulanylyşyny mejbury etmäge rugsat berýär.

Adaty ýagdaýda add-on ilki (1) WooCommerce Subscriptions bar-barlygyny (doly plugin ýa-da birleşdirilen core görnüşinde) barlaýar, soňra (2) WooCommerce Subscriptions ulanylyşyny açýan sazlamany barlaýar.

## Parametrler {#parameters}

| Name | Type | Düşündiriş |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Häzirki wagtda Woo Subs ulanmagymyz gerek bolsa. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Häzirki obýekt. |

### Çeşme {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) içinde, 361-nji setirde kesgitlenen


## Gaýtarýar {#returns}
WooCommerce Subs ulanmak üçin true, ulanmazlyk üçin false.
