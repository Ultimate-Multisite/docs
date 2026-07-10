---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

Pinapayagan nito ang mga developer ng plugin na i-filter ang mga pre-set na variable ng isang checkout page.

Mag-ingat, dahil kung may nawawalang keys, maaaring tuluyang masira ang checkout sa front-end.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Mga lokal na variable. |
| $checkout | `\Checkout` | Ang class ng checkout. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) at line 1970


## Returns {#returns}
Ang bagong array ng mga variable.
