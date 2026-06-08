---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

Låter plugin-utvecklare filtrera de förinställda variablerna på en kassan.

Var försiktig – om du missar nycklar kan det helt krascha kassan på front-end.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $variables | `array` | Lokala variabler. |
| $checkout | `\Checkout` | Kassan-klassen. |

### Sedan

- 2.0.0
### Källa

Definieras i [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) på rad 1970


## Returnerar
Den nya variabel-arrayen.
