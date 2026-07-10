---
id: wu_stripe_generate_idempotency_key
title: Suodatin - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Suodatin: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Suodattaa Stripe-veloitusasetusten mukana lähetetyn idempotency_key-arvon.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $idempotency_key | `string` | Idempotency key -avaimen arvo. |
| $args | `array` | Argumentit, joita käytetään avaimen luomisen apuna. |
| $context | `string` | Konteksti, jossa idempotency key luodaan. |

### Alkaen {#since}

- 3.5.0
### Lähde {#source}

Määritelty tiedostossa [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) rivillä 54
