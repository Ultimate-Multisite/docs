---
id: wu_apply_signup_fee
title: Filtrační funkce - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Filtr: wu_apply_signup_fee

Filtr určuje, zda má být poplatek za registraci aplikován.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $add_signup_fee | `bool` | Definuje, zda má být poplatek za registraci přidán. |
| $product | `object` | Objekt úrovně členství. |
| $this | `\WP_Ultimo\Checkout\Cart` | Objekt registrace. |

### Od

- 3.1
### Zdroj

Definováno v [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) na řádku 1769
