---
id: wu_get_checkout_variables
title: Filtro - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filtro: wu_get_checkout_variables

Permite a los desarrolladores de plugins filtrar los preajustes de una página de checkout.

Ten cuidado, las claves faltantes pueden romper completamente el checkout en el front-end.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $variables | `array` | Variables localizadas. |
| $checkout | `\Checkout` | La clase de checkout. |

### Desde

- 2.0.0

### Fuente

Definido en [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) en la línea 1970

## Devuelve
El nuevo array de variables.
