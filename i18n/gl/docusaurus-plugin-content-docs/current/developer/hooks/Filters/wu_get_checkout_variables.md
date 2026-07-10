---
id: wu_get_checkout_variables
title: Filtro - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filtro: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

Permite aos desenvolvedores de plugins filtrar os preaxustes dunha páxina de finalización da compra.

Ten coidado: as claves que faltan poden romper por completo a finalización da compra no front-end.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $variables | `array` | Variables localizadas. |
| $checkout | `\Checkout` | A clase de finalización da compra. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido en [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) na liña 1970


## Devolve {#returns}
O novo array de variables.
