---
id: wu_apply_signup_fee
title: Филтер - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Филтер: wu_apply_signup_fee

Филтрира да ли треба применити накнаду за пријаву или не.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $add_signup_fee | `bool` | Да ли додати накнаду за пријаву или не. |
| $product | `object` | Објекат нивоа чланства. |
| $this | `\WP_Ultimo\Checkout\Cart` | Објекат регистрације. |

### Од верзије {#since}

- 3.1
### Извор {#source}

Дефинисано у [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) у реду 1769
