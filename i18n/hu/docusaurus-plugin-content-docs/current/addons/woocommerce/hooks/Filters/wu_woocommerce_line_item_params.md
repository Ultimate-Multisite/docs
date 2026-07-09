---
id: wu_woocommerce_line_item_params
title: Szűrő - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Szűrő: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Szűrőzi a WooCommerce kosárban létrehozott sor elemekhez használt paramétereket, még mielőtt a vásárlót a WooCommerce checkout oldalra irányítja.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $line_item_params | `array` | A kosár sor elemeinek paraméterei. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Az Ultimate Multisite sor elemi példány. |
| $wc_product | `\WC_Product` | A WooCommerce termék. |

### Since {#since}

- 2.0.0
### Source {#source}

Meghatározva a [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) fájlban, 662-sorban.


## Returns {#returns}
A módosított sor elemi paraméterek.
