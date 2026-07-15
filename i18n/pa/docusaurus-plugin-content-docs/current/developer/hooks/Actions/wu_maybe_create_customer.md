---
id: wu_maybe_create_customer
title: Action - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

ਪਲੱਗਇਨ ਡਿਵੈਲਪਰਜ਼ ਨੂੰ ਗਾਹਕ (customer) ਜੋੜੇ ਜਾਣ 'ਤੇ ਵਾਧੂ ਕੰਮ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ।

ਇੱਥੇ ਅਸੀਂ ਉਹ hooks ਜੋੜਦੇ ਹਾਂ ਜਿਨ੍ਹਾਂ ਨਾਲ ਗਾਹਕ ਨੂੰ ਮੁੱਖ ਸਾਈਟ 'ਤੇ ਵੀ ਯੂਜ਼ਰ ਵਜੋਂ ਜੋੜਿਆ ਜਾ ਸਕਦਾ ਹੈ, ਜਿਵੇਂ ਕਿ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | ਉਹ ਗਾਹਕ ਜੋ ਸ਼ਾਇਦ ਬਣਾਇਆ ਗਿਆ ਹੋਵੇ। |
| $checkout | `\Checkout` | ਮੌਜੂਦਾ ਚੈੱਕਆਊਟ ਕਲਾਸ। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) ਵਿੱਚ ਲਾਈਨ 1156 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ।
