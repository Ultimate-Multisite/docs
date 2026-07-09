---
id: wu_stripe_generate_idempotency_key
title: Filtras - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filtras: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Filtruoja idempotency_key reikšmę, siunčiamą su Stripe apmokestinimo parinktimis.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $idempotency_key | `string` | Idempotency key reikšmė. |
| $args | `array` | Argumentai, naudojami padėti sugeneruoti raktą. |
| $context | `string` | Kontekstas, kuriame sugeneruojamas idempotency key. |

### Nuo {#since}

- 3.5.0
### Šaltinis {#source}

Apibrėžta [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) 54 eilutėje
