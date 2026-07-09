---
id: wu_apply_signup_fee
title: Filter - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Filter: wu_apply_signup_fee {#filter-wuapplysignupfee}

Bestämmer om registreringsavgiften ska tillämpas.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $add_signup_fee | `bool` | Om man ska lägga till registreringsavgiften. |
| $product | `object` | Medlemskapsnivåobjekt. |
| $this | `\WP_Ultimo\Checkout\Cart` | Registreringsobjekt. |

### Sedan {#since}

- 3.1
### Källa {#source}

Definieras i [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) på rad 1769
