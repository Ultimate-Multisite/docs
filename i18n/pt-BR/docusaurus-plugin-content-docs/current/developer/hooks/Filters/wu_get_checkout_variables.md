---
id: wu_get_checkout_variables
title: Filtro - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filtro: wu_get_checkout_variables

Permite que desenvolvedores de plugins filtrem as predefinições de uma página de checkout.

Cuidado, chaves ausentes podem quebrar completamente o checkout no front-end.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-----------|
| $variables | `array` | Variáveis localizadas. |
| $checkout | `\Checkout` | A classe de checkout. |

### Desde

- 2.0.0

### Fonte

Definido em [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) na linha 1970

## Retorna

O novo array de variáveis.
