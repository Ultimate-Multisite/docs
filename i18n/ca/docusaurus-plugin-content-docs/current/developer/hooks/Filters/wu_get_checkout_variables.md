---
id: wu_get_checkout_variables
title: Filtre - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filtre: wu_get_checkout_variables

Permet als desenvolupadors de plugins filtrar els valors predefinits d’una pàgina de checkout.

Ves amb compte: les claus que falten poden trencar completament el checkout al front-end.

## Paràmetres

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Variables localitzades. |
| $checkout | `\Checkout` | La classe de checkout. |

### Des de

- 2.0.0
### Font

Definit a [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) a la línia 1970


## Retorna
El nou array de variables.
