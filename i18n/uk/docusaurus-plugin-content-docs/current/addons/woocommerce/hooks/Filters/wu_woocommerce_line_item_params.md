---
id: wu_woocommerce_line_item_params
title: Фільтр - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Фільтрує параметри, які використовуються для створення позицій в кошику WooCommerce, до того, як клієнта перенаправлять на сторінку оформлення замовлення WooCommerce.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Параметри позицій кошика. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Екземпляр позиції кошика Ultimate Multisite. |
| $wc_product | `\WC_Product` | Продукт WooCommerce. |

### Since

- 2.0.0
### Source

Визначено в [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) на рядку 662


## Returns
Змінені параметри позицій кошика.
