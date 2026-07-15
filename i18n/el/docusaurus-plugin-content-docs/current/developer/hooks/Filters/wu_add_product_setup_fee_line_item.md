---
id: wu_add_product_setup_fee_line_item
title: Φίλτρο - wu_add_product_setup_fee_line_item
sidebar_label: wu_add_product_setup_fee_line_item
_i18n_hash: 7175266054e611752e49e762b103e858
---
# Φίλτρο: wu_add_product_setup_fee_line_item

Επιτρέπει στους developers να κάνουν αλλαγές στο στοιχείο γραμμής που αφορά το τέλος ρύθμισης.

## Παράμετροι {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $setup_fee_line_item | `array` | Παράμετροι του στοιχείου γραμμής για το τέλος ρύθμισης. |
| $product | `\WP_Ultimo\Models\Product` | Το προϊόν που σχετίζεται με το τέλος ρύθμισης. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Το αντικείμενο του καλαθιού. |

### Από {#since}

- 2.1
### Πηγή {#source}

Ορίζεται στο [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1790) στην γραμμή 1790

## Επιστρέφει {#returns}
