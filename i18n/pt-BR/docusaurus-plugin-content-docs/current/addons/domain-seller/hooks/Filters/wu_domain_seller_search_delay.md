---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filtro: wu_domain_seller_search_delay

Filtra o atraso (debounce delay) da busca de domínio em milissegundos.

Aumente este valor para reduzir as chamadas à API em conexões lentas.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $delay | `int` | Atraso (debounce delay) em milissegundos. Padrão 500. |

### Desde {#since}

- 2.1.0
### Fonte {#source}

Definido em [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) na linha 854
