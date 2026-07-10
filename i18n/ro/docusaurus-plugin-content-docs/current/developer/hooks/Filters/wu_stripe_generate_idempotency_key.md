---
id: wu_stripe_generate_idempotency_key
title: Filtru - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Filtrează valoarea `idempotency_key` trimisă împreună cu opțiunile de plată Stripe.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $idempotency_key | `string` | Valoarea cheii de idempotență. |
| $args | `array` | Argumentele folosite pentru a ajuta la generarea cheii. |
| $context | `string` | Contextul în care este generată cheia de idempotență. |

### De la {#since}

- 3.5.0
### Sursă {#source}

Definit în [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) la linia 54
