---
id: wu_domain_seller_search_delay
title: Filtro - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filtro: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

Filtra el retraso de desbouncing de la búsqueda de dominios en milisegundos.

Aumenta este valor para reducir las llamadas a la API en conexiones lentas.

## Parámetros {#parameters}

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $delay | `int` | Retraso de desbouncing en milisegundos. Por defecto 500. |

### Desde {#since}

- 2.1.0
### Fuente {#source}

Definido en [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) en la línea 854
