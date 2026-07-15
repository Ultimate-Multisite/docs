---
id: wu_stripe_generate_idempotency_key
title: फ़िल्टर - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

यह Stripe चार्ज विकल्पों के साथ भेजे जाने वाले idempotency_key मान को फ़िल्टर करता है।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | idempotency key का मान। |
| $args | `array` | कुंजी (key) बनाने में मदद करने के लिए उपयोग किए गए तर्क (arguments)। |
| $context | `string` | वह संदर्भ जिसके तहत idempotency key बनाया जाता है। |

### Since {#since}

- 3.5.0
### Source {#source}

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) में लाइन 54 पर परिभाषित।
