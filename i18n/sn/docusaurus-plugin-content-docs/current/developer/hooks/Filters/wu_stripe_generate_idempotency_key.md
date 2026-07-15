---
id: wu_stripe_generate_idempotency_key
title: Sefa - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Sefa: wu_stripe_generate_idempotency_key

Inosefa kukosha kwe idempotency_key kunotumirwa nesarudzo dzekubhadharisa dzeStripe.

## Maparamita {#parameters}

| Zita | Rudzi | Tsananguro |
|------|------|-------------|
| $idempotency_key | `string` | Kukosha kwekiyi ye idempotency. |
| $args | `array` | Maargument anoshandiswa kubatsira kugadzira kiyi. |
| $context | `string` | Mamiriro umo kiyi ye idempotency inogadzirwa. |

### Kubva {#since}

- 3.5.0
### Kwakabva {#source}

Yakatsanangurwa mu[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) pamutsetse 54
