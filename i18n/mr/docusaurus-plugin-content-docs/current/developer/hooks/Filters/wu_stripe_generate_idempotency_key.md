---
id: wu_stripe_generate_idempotency_key
title: फिल्टर - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Stripe चार्ज पर्यायांसह पाठ केले जाणारे idempotency_key चे मूल्य फिल्टर करतो.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | idempotency key चे मूल्य. |
| $args | `array` | की (key) तयार करण्यासाठी वापरले जाणारे आर्गुमेंट्स. |
| $context | `string` | ज्या संदर्भात (context) idempotency key तयार केला जातो. |

### पासून {#since}

- 3.5.0
### स्रोत {#source}

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) मध्ये लाइन 54 वर परिभाषित केले आहे.
