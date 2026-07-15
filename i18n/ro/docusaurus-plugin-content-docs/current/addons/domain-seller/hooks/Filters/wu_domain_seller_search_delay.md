---
id: wu_domain_seller_search_delay
title: Filtru - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

Filtrează întârzierea de debounce a căutării de domenii în milisecunde.

Creșterea acestei valori reduce apelurile către API atunci când conexiunea este lentă.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $delay | `int` | Întârzierea de debounce în milisecunde. Implicit 500. |

### De la {#since}

- 2.1.0
### Sursă {#source}

Definit în [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) la linia 854
