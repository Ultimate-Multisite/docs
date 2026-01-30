---
id: wu_stripe_generate_idempotency_key
title: "Filter - wu_stripe_generate_idempotency_key"
sidebar_label: "wu_stripe_generate_idempotency_key"
---

# Filter: wu_stripe_generate_idempotency_key

Filters the idempotency_key value sent with the Stripe charge options.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | Value of the idempotency key. |
| $args | `array` | Arguments used to help generate the key. |
| $context | `string` | Context under which the idempotency key is generated. |

### Since

- 3.5.0
### Source

Defined in [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) at line 54

