---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Сүзгі - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Сүзгі: wp_ultimo_woocommerce_should_use_subscriptions

Әзірлеушілерге WooCommerce Subscriptions қолдануды мәжбүрлеп қосуға мүмкіндік береді.

Әдепкі бойынша add-on (1) WooCommerce Subscriptions бар-жоғын (толық plugin немесе bundled core) тексереді, содан кейін (2) WooCommerce Subscriptions қолдануын қосатын параметрді тексереді.

## Параметрлер

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Қазіргі уақытта Woo Subs қолдануымыз керек пе. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Ағымдағы нысан. |

### Дереккөз

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ішінде, 361-жолда анықталған


## Қайтарылатын мәндер
WooCommerce Subs қолдану үшін true, қолданбау үшін false.
