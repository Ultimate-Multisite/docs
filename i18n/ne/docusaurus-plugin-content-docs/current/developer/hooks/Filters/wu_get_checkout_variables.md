---
id: wu_get_checkout_variables
title: फिल्टर - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

plugin विकासकर्ताहरूलाई checkout पृष्ठका pre-sets filter गर्न अनुमति दिनुहोस्।

सावधान रहनुहोस्, छुटेका keys ले front-end मा checkout लाई पूर्ण रूपमा बिगार्न सक्छन्।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | स्थानीयकृत variables। |
| $checkout | `\Checkout` | checkout class। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) मा line 1970 मा परिभाषित


## Returns {#returns}
नयाँ variables array।
