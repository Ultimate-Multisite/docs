---
id: wu_apply_signup_fee
title: Filtru - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Filtru: wu_apply_signup_fee

Determină dacă taxele de înscriere trebuie aplicate sau nu.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $add_signup_fee | `bool` | Dacă ar trebui adăugată taxa de înscriere. |
| $product | `object` | Obiectul nivelului de membru. |
| $this | `\WP_Ultimo\Checkout\Cart` | Obiectul de înregistrare. |

### De la versiunea {#since}

- 3.1
### Sursă {#source}

Definit în [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) la linia 1769
