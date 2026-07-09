---
id: wu_add_product_setup_fee_line_item
title: Filter - wu_add_product_setup_fee_line_item
sidebar_label: wu_add_product_setup_fee_line_item
_i18n_hash: 7175266054e611752e49e762b103e858
---
# Filter: wu_add_product_setup_fee_line_item {#filter-wuaddproductsetupfeelineitem}

Umožňuje vývojárom vykonávať zmeny v položke poplatku za nastavenie.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $setup_fee_line_item | `array` | Parametre položky poplatku za nastavenie. |
| $product | `\WP_Ultimo\Models\Product` | Produkt súvisiaci s poplatkom za nastavenie. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Objekt košíka. |

### Od verzie {#since}

- 2.1
### Zdroj {#source}

Definované v [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1790) na riadku 1790


## Návratová hodnota {#returns}
