---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Stripe ödəniş seçimləri ilə göndərilən `idempotency_key` dəyərini filtrləyir.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | `idempotency key`-nin dəyəri. |
| $args | `array` | Açarın yaradılmasına kömək edən parametrlər. |
| $context | `string` | `idempotency key`-nin yaradıldığı kontekst. |

### Nə vaxtdan {#since}

- 3.5.0
### Mənbə {#source}

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54)-də 54-cü sətirdə təyin edilmişdir.
