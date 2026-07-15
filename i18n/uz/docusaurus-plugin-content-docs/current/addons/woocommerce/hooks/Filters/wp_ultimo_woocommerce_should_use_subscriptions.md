---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filtr - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Dasturchilarga WooCommerce Subscriptions ishlatilishini majburlashga ruxsat beradi.

Odatiy holatda add-on (1) WooCommerce Subscriptions mavjudligini (to‘liq plugin yoki jamlangan core), so‘ng (2) WooCommerce Subscriptions ishlatilishini yoqadigan sozlamani tekshiradi.

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Agar hozir Woo Subs ishlatishimiz kerak bo‘lsa. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Joriy obyekt. |

### Manba {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) faylida 361-qatorda aniqlangan


## Qaytaradi {#returns}
WooCommerce Subs ishlatish uchun true, ishlatmaslik uchun false.
