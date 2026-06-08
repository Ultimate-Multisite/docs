---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

Pozwala deweloperom pluginów filtrować zbiór zmiennych używanych na stronie koszyka.

Uważaj, ponieważ brakujące klucze mogą całkowicie zepsuć działanie koszyka na stronie front-end.

## Parametry

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Zmienne z lokalizacją. |
| $checkout | `\Checkout` | Klasa koszyka. |

### Since

- 2.0.0
### Source

Zdefiniowane w [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) w linii 1970


## Returns
Nowy tablica zmiennych.
