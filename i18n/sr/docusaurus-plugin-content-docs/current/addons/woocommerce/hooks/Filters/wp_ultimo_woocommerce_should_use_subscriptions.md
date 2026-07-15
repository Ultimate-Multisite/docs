---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Филтер - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Филтер: wp_ultimo_woocommerce_should_use_subscriptions

Омогућава програмерима да принудно укључе коришћење WooCommerce Subscriptions.

Подразумевано, додатак проверава да ли је (1) WooCommerce Subscriptions присутан (било као пуни plugin или као уграђено језгро), затим (2) проверава подешавање које омогућава коришћење WooCommerce Subscriptions.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Да ли тренутно треба да користимо Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Тренутни објекат. |

### Извор {#source}

Дефинисано у [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) у реду 361


## Враћа {#returns}
true за коришћење WooCommerce Subs, false да се не користи.
