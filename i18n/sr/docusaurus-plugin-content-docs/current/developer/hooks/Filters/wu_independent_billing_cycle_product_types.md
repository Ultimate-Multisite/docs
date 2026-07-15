---
id: wu_independent_billing_cycle_product_types
title: Филтер - wu_independent_billing_cycle_product_types
sidebar_label: wu_independent_billing_cycle_product_types
_i18n_hash: 2b9bd3b68a53424272c1c93c6bdc3ef5
---
# Филтер: wu_independent_billing_cycle_product_types

Филтрирајте типове производа који имају независне циклусе наплате.

Производи са независним циклусима наплате нису приморани да се подударају са периодом наплате плана у корпи. Ово је корисно за производе као што су регистрације домена, које се увек наплаћују годишње, без обзира на то да ли је план месечни или годишњи.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $types | `array` | Низ типова производа са независним циклусима наплате. |

### Од верзије {#since}

- 2.5.0
### Извор {#source}

Дефинисано у [`inc/functions/product.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/product.php#L227) у реду 227


## Враћа се {#returns}
