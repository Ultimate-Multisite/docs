---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Filtrira vrijednost `idempotency_key` koja se šalje sa opcijama naplate Stripe-a.

## Parametri

| Name | Type | Opis |
|------|------|-------------|
| $idempotency_key | `string` | Vrijednost ključa za idempotenciju. |
| $args | `array` | Argumenti koji se koriste za pomoć pri generisanju ključa. |
| $context | `string` | Kontekst u kojem se generiše ključ za idempotenciju. |

### Od

- 3.5.0
### Izvor

Definisano je u [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) na liniji 54
