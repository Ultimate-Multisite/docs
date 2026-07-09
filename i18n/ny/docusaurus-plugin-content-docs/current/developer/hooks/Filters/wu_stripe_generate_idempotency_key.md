---
id: wu_stripe_generate_idempotency_key
title: Fyuluta - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Fyuluta: wu_stripe_generate_idempotency_key

Imasefa mtengo wa idempotency_key wotumizidwa ndi zosankha za Stripe charge.

## Magawo

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $idempotency_key | `string` | Mtengo wa kiyi ya idempotency. |
| $args | `array` | Ma argument omwe amagwiritsidwa ntchito kuthandiza kupanga kiyi. |
| $context | `string` | Context yomwe kiyi ya idempotency imapangidwira. |

### Kuyambira

- 3.5.0
### Gwero

Yafotokozedwa mu [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) pa mzere 54
