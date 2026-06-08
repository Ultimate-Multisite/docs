---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Bu filter, müşteriyi WooCommerce ödəniş səhifəsinə yönləndirməzdən əvvəl, WooCommerce Səbətində (Cart) satır elementlərini yaratmaq üçün istifadə olunan parametrləri filtrləyir.

## Parametrlər

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Səbət satır element parametrləri. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite satır element nümunəsi. |
| $wc_product | `\WC_Product` | WooCommerce məhsulu. |

### Nə vaxtdan

- 2.0.0
### Mənbə

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) faylında 662-ci sətirdə təyin edilmişdir.


## Qaytarır
Dəyişdirilmiş satır element parametrləri.
