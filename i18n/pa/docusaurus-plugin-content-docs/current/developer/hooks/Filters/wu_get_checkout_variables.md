---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

ਪਲੱਗਇਨ ਡਿਵੈਲਪਰਾਂ ਨੂੰ ਚੈੱਕਆਉਟ ਪੇਜ ਦੇ ਪਹਿਲਾਂ ਤੋਂ ਸੈੱਟ ਕੀਤੇ ਵੇਰੀਏਬਲਜ਼ (variables) ਨੂੰ ਫਿਲਟਰ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ।

ਸਾਵਧਾਨ ਰਹੋ, ਗੈਰਹਾਜ਼ਰ (missing) ਕੀਜ਼ (keys) ਨਾਲ ਫਰੰਟ-ਐਂਡ 'ਤੇ ਚੈੱਕਆਉਟ ਪੂਰੀ ਤਰ੍ਹਾਂ ਖਰਾਬ ਹੋ ਸਕਦਾ ਹੈ।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | ਸਥਾਨਕ (Localized) ਵੇਰੀਏਬਲਜ਼। |
| $checkout | `\Checkout` | ਚੈੱਕਆਉਟ ਕਲਾਸ। |

### Since

- 2.0.0
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) at line 1970


## Returns
ਨਵਾਂ ਵੇਰੀਏਬਲਜ਼ ਐਰੇ।
