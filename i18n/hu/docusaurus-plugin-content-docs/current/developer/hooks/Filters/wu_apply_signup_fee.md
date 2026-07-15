---
id: wu_apply_signup_fee
title: Szűrő - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Filter: wu_apply_signup_fee

Meghatározza, hogy a regisztrációs díjat alkalmazandó-e-e.

## Paraméterek {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $add_signup_fee | `bool` | Meghatározza, hogy hozzá kell-e adni a regisztrációs díjat. |
| $product | `object` | Tagsági szint objektum. |
| $this | `\WP_Ultimo\Checkout\Cart` | Regisztrációs objektum. |

### Desde {#since}

- 3.1
### Forrás {#source}

Megértve a [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) fájlban, 1769-sorban.
