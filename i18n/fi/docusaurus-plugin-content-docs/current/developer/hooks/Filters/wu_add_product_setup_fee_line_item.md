---
id: wu_add_product_setup_fee_line_item
title: Suodatin - wu_add_product_setup_fee_line_item
sidebar_label: wu_add_product_setup_fee_line_item
_i18n_hash: 7175266054e611752e49e762b103e858
---
# Suodatin: wu_add_product_setup_fee_line_item {#filter-wuaddproductsetupfeelineitem}

Salli kehittäjien tehdä muutoksia käyttöönottomaksun rivikohtaan.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $setup_fee_line_item | `array` | Käyttöönottomaksun rivikohdan parametrit. |
| $product | `\WP_Ultimo\Models\Product` | Käyttöönottomaksuun liittyvä tuote. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Ostoskorin objekti. |

### Lähtien {#since}

- 2.1
### Lähde {#source}

Määritelty tiedostossa [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1790) rivillä 1790


## Palauttaa {#returns}
