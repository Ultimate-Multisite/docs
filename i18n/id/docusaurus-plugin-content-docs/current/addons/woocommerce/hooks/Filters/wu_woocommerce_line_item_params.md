---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Memfilter parameter yang digunakan untuk membuat item baris (line items) di Keranjang WooCommerce, sebelum pelanggan diarahkan ke halaman checkout WooCommerce.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Parameter item baris keranjang. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Instance item baris Ultimate Multisite. |
| $wc_product | `\WC_Product` | Produk WooCommerce. |

### Since {#since}

- 2.0.0
### Source {#source}

Didefinisikan di [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) pada baris 662


## Returns {#returns}
Parameter item baris yang sudah dimodifikasi.
