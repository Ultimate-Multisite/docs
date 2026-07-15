---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

ਇਹ Stripe ਚਾਰਜ ਆਪਸ਼ਨਾਂ ਨਾਲ ਭੇਜੇ ਜਾਣ ਵਾਲੇ idempotency_key ਮੁੱਲ ਨੂੰ ਫਿਲਟਰ ਕਰਦਾ ਹੈ।

## ਪੈਰਾਮੀਟਰ (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | ਆਈਡੈਂਪੋਡੈਂਸੀ ਕੀ ਦਾ ਮੁੱਲ। |
| $args | `array` | ਕੀ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਵਰਗੇ ਆਰਗੂਮੈਂਟਸ। |
| $context | `string` | ਜਿਸ ਸੰਦਰਭ (context) ਵਿੱਚ idempotency key ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ। |

### ਕਦੋਂ ਤੋਂ (Since) {#since}

- 3.5.0
### ਸਰੋਤ (Source) {#source}

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) ਵਿੱਚ ਲਾਈਨ 54 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ।
