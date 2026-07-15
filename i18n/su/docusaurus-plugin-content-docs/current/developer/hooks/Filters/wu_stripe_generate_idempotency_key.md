---
id: wu_stripe_generate_idempotency_key
title: Saringan - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Saringan: wu_stripe_generate_idempotency_key

Nyaring nilai idempotency_key anu dikirim jeung pilihan charge Stripe.

## Parameter {#parameters}

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $idempotency_key | `string` | Nilai konci idempotency. |
| $args | `array` | Argumen anu dipaké pikeun mantuan ngahasilkeun konci. |
| $context | `string` | Kontéks tempat konci idempotency dihasilkeun. |

### Ti saprak {#since}

- 3.5.0
### Sumber {#source}

Ditetepkeun dina [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) dina garis 54
