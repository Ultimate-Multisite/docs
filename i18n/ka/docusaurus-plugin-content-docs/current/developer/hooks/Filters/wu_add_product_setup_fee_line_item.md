---
id: wu_add_product_setup_fee_line_item
title: ფილტრი - wu_add_product_setup_fee_line_item
sidebar_label: wu_add_product_setup_fee_line_item
_i18n_hash: 7175266054e611752e49e762b103e858
---
# ფილტრი: wu_add_product_setup_fee_line_item {#filter-wuaddproductsetupfeelineitem}

აძლევს დეველოპერებს setup fee-ის line item-ში ცვლილებების შეტანის საშუალებას.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $setup_fee_line_item | `array` | setup fee-ის line item-ის პარამეტრები. |
| $product | `\WP_Ultimo\Models\Product` | setup fee-სთან დაკავშირებული პროდუქტი. |
| $cart | `\WP_Ultimo\Checkout\Cart` | კალათის ობიექტი. |

### ვერსიიდან {#since}

- 2.1
### წყარო {#source}

განსაზღვრულია [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1790)-ში, ხაზზე 1790


## აბრუნებს {#returns}
