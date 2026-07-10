---
id: wu_get_checkout_variables
title: Filtro - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filtro: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

Permite aos programadores de plugin filtrar as predefinições de uma página de checkout.

Tenha cuidado, chaves em falta podem quebrar completamente o checkout no front-end.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $variables | `array` | Variáveis localizadas. |
| $checkout | `\Checkout` | A classe checkout. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido em [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) na linha 1970


## Devolve {#returns}
O novo array de variáveis.
