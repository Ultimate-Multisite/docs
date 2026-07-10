---
id: wu_add_product_setup_fee_line_item
title: Филтер - wu_add_product_setup_fee_line_item
sidebar_label: wu_add_product_setup_fee_line_item
_i18n_hash: 7175266054e611752e49e762b103e858
---
# Филтер: wu_add_product_setup_fee_line_item {#filter-wuaddproductsetupfeelineitem}

Омогућава програмерима да уносе измене у ставку накнаде за подешавање.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $setup_fee_line_item | `array` | Параметри ставке накнаде за подешавање. |
| $product | `\WP_Ultimo\Models\Product` | Производ повезан са накнадом за подешавање. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Објекат корпе. |

### Од верзије {#since}

- 2.1
### Извор {#source}

Дефинисано у [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1790) у реду 1790


## Враћа се {#returns}
