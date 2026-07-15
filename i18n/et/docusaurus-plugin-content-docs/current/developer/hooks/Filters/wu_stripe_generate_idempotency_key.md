---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Filtreerib `idempotency_key` väärtust, mis saadetakse koos Stripe maksevalikutega.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $idempotency_key | `string` | Idempotentsusvõtme väärtus. |
| $args | `array` | Argumendid, mida kasutatakse võtme genereerimise abistamiseks. |
| $context | `string` | Kontekst, mille all idempotentsusvõti genereeritakse. |

### Alates {#since}

- 3.5.0
### Allikas {#source}

Määratletud failis [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) real 54
