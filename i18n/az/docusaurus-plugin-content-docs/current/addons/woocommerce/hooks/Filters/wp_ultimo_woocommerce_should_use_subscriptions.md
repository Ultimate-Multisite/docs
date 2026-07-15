---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Developers-a WooCommerce Subscriptions-dan istifadəni məcbur etməyə imkan verir.

Default olaraq, add-on (əlavə) əvvəlcə (1) WooCommerce Subscriptions-ın mövcud olub-olmadığını (tam plugin və ya paketlə verilmiş core) yoxlayır, sonra isə (2) WooCommerce Subscriptions istifadə etməyə imkan verən ayarı yoxlayır.

## Parametrlər {#parameters}

| Name | Type | Təsvir |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Əgər hazırda Woo Subs istifadə etməyimiz lazımdırsa. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Hazırki obyekt. |

### Mənbə {#source}

`inc/gateways/class-woocommerce-gateway.php` faylında, 361-ci sətirdə təyin edilmişdir.

## Qaytarır {#returns}
WooCommerce Subs istifadə etmək üçün `true`, etməmək üçün `false`.
