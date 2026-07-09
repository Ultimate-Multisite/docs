---
id: wu_stripe_generate_idempotency_key
title: Salaan - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Gi-filter ang kantidad sa idempotency_key nga gipadala uban sa mga opsyon sa Stripe charge.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $idempotency_key | `string` | Kantidad sa idempotency key. |
| $args | `array` | Mga argumento nga gigamit aron makatabang sa paghimo sa key. |
| $context | `string` | Konteksto diin gihimo ang idempotency key. |

### Sukad {#since}

- 3.5.0
### Tinubdan {#source}

Gihubit sa [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) sa linya 54
