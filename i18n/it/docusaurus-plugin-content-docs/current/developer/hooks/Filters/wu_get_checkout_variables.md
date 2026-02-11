---
id: wu_get_checkout_variables
title: Filtro - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

Consenti agli sviluppatori di plugin di filtrare le preimpostazioni di una pagina di checkout.

Fai attenzione, le chiavi mancanti possono rompere completamente il checkout sul front-end.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Variabili localizzate. |
| $checkout | `\Checkout` | La classe checkout. |

### Since

- 2.0.0
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) at line 1970


## Returns
Il nuovo array di variabili.
