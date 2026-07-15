---
id: wu_get_checkout_variables
title: Filtru - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

Permite dezvoltatorilor de plugin să filtreze setările predefinite ale unei pagini de checkout.

Atenție: lipsa cheilor poate cauza o problemă completă la checkout pe partea de față (front-end).

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Variabilele localizate. |
| $checkout | `\Checkout` | Clasa de checkout. |

### Since {#since}

- 2.0.0
### Source {#source}

Definit în [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) la linia 1970


## Returns {#returns}
Noul array de variabile.
