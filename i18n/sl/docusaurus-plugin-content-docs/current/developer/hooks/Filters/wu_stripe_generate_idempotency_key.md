---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Filtrira vrednost idempotency_key, poslano z možnostmi zaračunavanja Stripe.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $idempotency_key | `string` | Vrednost idempotency key. |
| $args | `array` | Argumenti, uporabljeni za pomoč pri ustvarjanju ključa. |
| $context | `string` | Kontekst, v katerem je ustvarjen idempotency key. |

### Od različice {#since}

- 3.5.0
### Vir {#source}

Definirano v [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) v vrstici 54
