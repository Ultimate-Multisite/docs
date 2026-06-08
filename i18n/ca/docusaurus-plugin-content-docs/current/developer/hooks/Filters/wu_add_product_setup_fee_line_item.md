---
id: wu_add_product_setup_fee_line_item
title: Filtre - wu_add_product_setup_fee_line_item
sidebar_label: wu_add_product_setup_fee_line_item
_i18n_hash: 7175266054e611752e49e762b103e858
---
# Filtre: wu_add_product_setup_fee_line_item

Permet als desenvolupadors fer modificacions a la línia de tarifa de configuració (setup fee).

## Paràmetres

| Nom | Tip | Descripció |
|------|------|-------------|
| `$setup_fee_line_item` | `array` | Paràmetres de la línia de tarifa de configuració. |
| `$product` | `\WP_Ultimo\Models\Product` | El producte relacionat amb la tarifa de configuració. |
| `$cart` | `\WP_Ultimo\Checkout\Cart` | L'objecte del carrit. |

### Des de

- 2.1
### Font

Definiut en [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1790) a la línia 1790
