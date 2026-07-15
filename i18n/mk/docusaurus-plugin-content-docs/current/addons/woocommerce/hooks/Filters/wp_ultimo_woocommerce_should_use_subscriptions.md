---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Филтер - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Филтер: wp_ultimo_woocommerce_should_use_subscriptions

Им овозможува на програмерите присилно да ја користат WooCommerce Subscriptions.

Стандардно, додатокот проверува дали (1) WooCommerce Subscriptions е присутен (или целосен plugin или вградено јадро), потоа (2) ја проверува поставката што овозможува користење на WooCommerce Subscriptions.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Дали моментално треба да користиме Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Тековниот објект. |

### Извор {#source}

Дефинирано во [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) на линија 361


## Враќа {#returns}
true за да се користи WooCommerce Subs, false за да не се користи.
