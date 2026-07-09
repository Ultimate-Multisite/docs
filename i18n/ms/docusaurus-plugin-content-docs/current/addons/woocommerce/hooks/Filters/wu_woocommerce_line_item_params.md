---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Menapis parameter yang digunakan untuk mencipta item baris pada Troli WooCommerce, sebelum mengalihkan pelanggan ke pembayaran (checkout) WooCommerce.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Parameter item baris troli. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Instans item baris Ultimate Multisite. |
| $wc_product | `\WC_Product` | Produk WooCommerce. |

### Since {#since}

- 2.0.0
### Source {#source}

Ditakrifkan dalam [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) pada baris 662


## Returns {#returns}
Parameter item baris yang telah diubah suai.
