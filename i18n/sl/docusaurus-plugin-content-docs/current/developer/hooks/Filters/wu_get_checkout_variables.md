---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

Omogoči razvijalcem pluginov filtriranje prednastavitev strani za checkout.

Bodite previdni, manjkajoči ključi lahko popolnoma pokvarijo checkout na front-endu.

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $variables | `array` | Lokalizirane spremenljivke. |
| $checkout | `\Checkout` | Razred checkout. |

### Od različice

- 2.0.0
### Vir

Določeno v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) v vrstici 1970


## Vrne
Novo polje spremenljivk.
