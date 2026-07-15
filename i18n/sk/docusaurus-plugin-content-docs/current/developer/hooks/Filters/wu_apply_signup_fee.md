---
id: wu_apply_signup_fee
title: Filter - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Filter: wu_apply_signup_fee

Filtruje, či sa má uplatniť registračný poplatok.

## Parametre {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $add_signup_fee | `bool` | Či pridať registračný poplatok. |
| $product | `object` | Objekt úrovne členstva. |
| $this | `\WP_Ultimo\Checkout\Cart` | Registračný objekt. |

### Od verzie {#since}

- 3.1
### Zdroj {#source}

Definované v [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) na riadku 1769
