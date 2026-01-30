---
id: wu_get_checkout_variables
title: "Filter - wu_get_checkout_variables"
sidebar_label: "wu_get_checkout_variables"
---

# Filter: wu_get_checkout_variables

Allow plugin developers to filter the pre-sets of a checkout page.

Be careful, missing keys can completely break the checkout on the front-end.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Localized variables. |
| $checkout | `\Checkout` | The checkout class. |

### Since

- 2.0.0
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) at line 1970


## Returns
The new variables array.
