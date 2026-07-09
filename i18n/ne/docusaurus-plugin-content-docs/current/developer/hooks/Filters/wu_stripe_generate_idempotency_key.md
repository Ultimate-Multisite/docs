---
id: wu_stripe_generate_idempotency_key
title: फिल्टर - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# फिल्टर: wu_stripe_generate_idempotency_key

Stripe शुल्क विकल्पहरूसँग पठाइने idempotency_key मानलाई फिल्टर गर्छ।

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $idempotency_key | `string` | idempotency key को मान। |
| $args | `array` | key सिर्जना गर्न मद्दतका लागि प्रयोग गरिएका argument हरू। |
| $context | `string` | idempotency key सिर्जना गरिने सन्दर्भ। |

### संस्करणदेखि

- 3.5.0
### स्रोत

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) मा पङ्क्ति 54 मा परिभाषित गरिएको छ।
