---
id: wu_apply_signup_fee
title: Filtr - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Filtr: wu_apply_signup_fee

Określa, czy opłata za rejestrację ma być naliczana.

## Parametry

| Nazwa | Typ | Opis |
|------|------|-------------|
| $add_signup_fee | `bool` | Czy należy dodać opłatę za rejestrację. |
| $product | `object` | Obiekt poziomu członkostwa. |
| $this | `\WP_Ultimo\Checkout\Cart` | Obiekt rejestracji. |

### Od

- 3.1
### Źródło

Zdefiniowany w [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) w linii 1769
