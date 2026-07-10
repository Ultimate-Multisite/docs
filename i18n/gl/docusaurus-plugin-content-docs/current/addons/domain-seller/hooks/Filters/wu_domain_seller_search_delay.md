---
id: wu_domain_seller_search_delay
title: Filtro - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filtro: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

Filtra o atraso de debounce da busca de dominios en milisegundos.

Aumenta este valor para reducir as chamadas á API en conexións lentas.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $delay | `int` | Atraso de debounce en milisegundos. Predeterminado 500. |

### Desde {#since}

- 2.1.0
### Fonte {#source}

Definido en [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) na liña 854
