---
id: wu_woocommerce_line_item_params
title: Фильтр - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Фильтр: wu_woocommerce_line_item_params

Фильтрует параметры, используемые для создания строк товаров в корзине WooCommerce, перед перенаправлением клиента к оформлению заказа WooCommerce.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Параметры строки товара в корзине. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Экземпляр строки товара Ultimate Multisite. |
| $wc_product | `\WC_Product` | Товар WooCommerce. |

### Since

- 2.0.0

### Source

Определено в [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) на строке 662

## Returns

Измененные параметры строки товара.
