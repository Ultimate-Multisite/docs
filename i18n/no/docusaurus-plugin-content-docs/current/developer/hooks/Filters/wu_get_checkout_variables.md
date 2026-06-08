---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

Lar plugin-utviklere filtrere de forhåndsdefinerte variablene på en kasseside.

Vær forsiktig, manglende nøkler kan fullstendig ødelegge kassen på front-end.

## Parametere

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Lokalt tilpassede variabler. |
| $checkout | `\Checkout` | Kasseklassen. |

### Siden

- 2.0.0
### Kilde

Definert i [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) på linje 1970


## Returnerer
Det nye variabel-arrayet.
