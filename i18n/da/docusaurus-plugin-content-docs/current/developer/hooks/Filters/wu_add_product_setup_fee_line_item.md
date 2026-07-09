---
id: wu_add_product_setup_fee_line_item
title: Filter - wu_add_product_setup_fee_line_item
sidebar_label: wu_add_product_setup_fee_line_item
_i18n_hash: 7175266054e611752e49e762b103e858
---
# Filter: wu_add_product_setup_fee_line_item {#filter-wuaddproductsetupfeelineitem}

Gør det muligt for udviklere at foretage ændringer i linjeposten for oprettelsesgebyret.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $setup_fee_line_item | `array` | Parametre for linjeposten for oprettelsesgebyret. |
| $product | `\WP_Ultimo\Models\Product` | Produktet relateret til oprettelsesgebyret. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Kurvobjektet. |

### Siden {#since}

- 2.1
### Kilde {#source}

Defineret i [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1790) på linje 1790


## Returnerer {#returns}
