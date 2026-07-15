---
id: wu_apply_signup_fee
title: Filter - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Filter: wu_apply_signup_fee

Filtrira, ali naj se pristojbina ob prijavi uporabi ali ne.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $add_signup_fee | `bool` | Ali naj se doda pristojbina ob prijavi ali ne. |
| $product | `object` | Objekt ravni članstva. |
| $this | `\WP_Ultimo\Checkout\Cart` | Registracijski objekt. |

### Od različice {#since}

- 3.1
### Vir {#source}

Določeno v [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) v vrstici 1769
