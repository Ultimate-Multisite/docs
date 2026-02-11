---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Filtert den Wert von idempotency_key, der zusammen mit den Stripe-Zahlungsoptionen gesendet wird.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | Wert des Idempotency-Keys. |
| $args | `array` | Argumente, die zur Erzeugung des Schlüssels verwendet werden. |
| $context | `string` | Kontext, unter dem der Idempotency-Key generiert wird. |

### Since

- 3.5.0

### Source

Defined in [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) at line 54
