---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

Dit laat plugin-ontwikkelaars toe om die voorgesette variabeles van 'n afrekenbladsy te filter.

Wees versigtig, want die ontbreking van sleutels kan die afrekenproses op die voor-kant (front-end) heeltemal breek.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Gelokaliseerde variabeles. |
| $checkout | `\Checkout` | Die afrekenklas. |

### Since

- 2.0.0
### Source

Benoem in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) op lyn 1970


## Returns
Die nuwe variabeles-array.
