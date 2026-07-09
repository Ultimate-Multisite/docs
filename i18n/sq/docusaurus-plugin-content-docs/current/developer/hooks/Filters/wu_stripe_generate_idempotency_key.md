---
id: wu_stripe_generate_idempotency_key
title: Filtër - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filtër: wu_stripe_generate_idempotency_key

Filtron vlerën idempotency_key të dërguar me opsionet e pagesës Stripe.

## Parametrat

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $idempotency_key | `string` | Vlera e çelësit të idempotencës. |
| $args | `array` | Argumente të përdorura për të ndihmuar në gjenerimin e çelësit. |
| $context | `string` | Konteksti nën të cilin gjenerohet çelësi i idempotencës. |

### Që nga

- 3.5.0
### Burimi

Përcaktuar në [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) në rreshtin 54
