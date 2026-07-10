---
id: wu_apply_signup_fee
title: Фільтр - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Фільтр: wu_apply_signup_fee {#filter-wuapplysignupfee}

Визначає, чи потрібно застосовувати плату за реєстрацію.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $add_signup_fee | `bool` | Чи потрібно додавати плату за реєстрацію. |
| $product | `object` | Об'єкт рівня членства. |
| $this | `\WP_Ultimo\Checkout\Cart` | Об'єкт реєстрації. |

### Since {#since}

- 3.1
### Source {#source}

Визначено в [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) на рядку 1769
