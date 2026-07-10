---
id: wu_woocommerce_line_item_params
title: Saringan - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Saring paramèter sing digunakaké kanggo nggawe item baris ing WooCommerce Cart, sadurungé ngalihaké pelanggan menyang WooCommerce checkout.

## Paramèter {#parameters}

| Jeneng | Tipe | Katrangan |
|------|------|-------------|
| $line_item_params | `array` | Paramèter item baris kranjang. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Instans item baris Ultimate Multisite. |
| $wc_product | `\WC_Product` | Produk WooCommerce. |

### Wiwit {#since}

- 2.0.0
### Sumber {#source}

Ditetepaké ing [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) ing baris 662


## Balikan {#returns}
Paramèter item baris sing wis diowahi.
