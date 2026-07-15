---
id: wu_stripe_generate_idempotency_key
title: Filtry - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Filtruje wartość `idempotency_key` wysyłaną wraz z opcjami obciążenia Stripe.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | Wartość klucza idempotencji. |
| $args | `array` | Argumenty używane do pomocy w wygenerowaniu klucza. |
| $context | `string` | Kontekst, w którym generowany jest klucz idempotencji. |

### Od wersji {#since}

- 3.5.0
### Źródło {#source}

Zdefiniowane w [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) na linii 54.
