---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

Erlaube Plugin-Entwicklern, die Voreinstellungen einer Checkout-Seite zu filtern.

Sei vorsichtig, fehlende Schlüssel können den Checkout auf der Front-End-Seite vollständig zum Erliegen bringen.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Lokalisierte Variablen. |
| $checkout | `\Checkout` | Die Checkout-Klasse. |

### Since

- 2.0.0
### Source

Definiert in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) in Zeile 1970


## Returns
Das neue Variablenarray.
