---
id: wu_stripe_generate_idempotency_key
title: Filtre - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filtre: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Filtra el valor de la clau d'idempotència (`idempotency_key`) que s'envia amb les opcions de càrrega/pagament de Stripe.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $idempotency_key | `string` | Valor de la clau d'idempotència. |
| $args | `array` | Arguments utilitzats per ajudar a generar la clau. |
| $context | `string` | Context en el qual s'ha generat la clau d'idempotència. |

### Des de {#since}

- 3.5.0
### Font {#source}

Definid en [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) a la línia 54
