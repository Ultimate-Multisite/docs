---
id: wu_checkout_after_process_order
title: ქმედება - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Action: wu_checkout_after_process_order {#action-wucheckoutafterprocessorder}

დეველოპერებს საშუალებას აძლევს, დამატებითი hooks გამოიძახონ.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $checkout | `\Checkout` | checkout ობიექტის ეგზემპლარი. |
| $cart | `\Cart` | checkout კალათის ეგზემპლარი. |

### ვერსიიდან {#since}

- 2.0.9
### წყარო {#source}

განსაზღვრულია [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013)-ში, ხაზზე 1013
