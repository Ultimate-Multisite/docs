---
id: wu_add_product_setup_fee_line_item
title: Szűrő - wu_add_product_setup_fee_line_item
sidebar_label: wu_add_product_setup_fee_line_item
_i18n_hash: 7175266054e611752e49e762b103e858
---
# Filter: wu_add_product_setup_fee_line_item {#filter-wuaddproductsetupfeelineitem}

A fejlesztőknek lehetőséget biztosít a beállítási díj sor elemének módosítására.

## Paraméterek {#parameters}

| Name | Type | Leírás |
|------|------|-------------|
| $setup_fee_line_item | `array` | A beállítási díj sor elemének paraméterei. |
| $product | `\WP_Ultimo\Models\Product` | A beállítási díjhez kapcsolódó termék. |
| $cart | `\WP_Ultimo\Checkout\Cart` | A kosár objektum. |

### Since {#since}

- 2.1
### Source {#source}

Meghatározva a [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1790) fájlban, 1790-sorban.


## Visszaadja {#returns}
