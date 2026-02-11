---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

Laat pluginontwikkelaars de vooraf ingestelde waarden van een afrekenpagina filteren.

Wees voorzichtig, ontbrekende sleutels kunnen de afrekening op de voorkant volledig laten mislukken.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Gepersonaliseerde variabelen. |
| $checkout | `\Checkout` | De checkoutklasse. |

### Since

- 2.0.0

### Source

Gedefinieerd in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) op regel 1970

## Returns

De nieuwe variabelenarray.
