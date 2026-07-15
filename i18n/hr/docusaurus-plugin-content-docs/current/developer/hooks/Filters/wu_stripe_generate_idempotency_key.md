---
id: wu_stripe_generate_idempotency_key
title: Filtar - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filtar: wu_stripe_generate_idempotency_key

Filtrira vrijednost idempotency_key poslanu s opcijama Stripe naplate.

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $idempotency_key | `string` | Vrijednost idempotency key. |
| $args | `array` | Argumenti koji se koriste za pomoć pri generiranju ključa. |
| $context | `string` | Kontekst u kojem se generira idempotency key. |

### Od verzije {#since}

- 3.5.0
### Izvor {#source}

Definirano u [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) u retku 54
