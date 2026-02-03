---
id: wu_maybe_create_customer
title: Acción - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Acción: wu_maybe_create_customer

Permitir a los desarrolladores de plugins hacer cosas adicionales cuando se agrega el cliente.

Aquí es donde agregamos los ganchos para agregar el cliente->usuario al sitio principal también, por ejemplo.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $customer | `\Customer` | El cliente que pudo haber sido creado. |
| $checkout | `\Checkout` | La clase de checkout actual. |

### Desde

- 2.0.0

### Fuente

Definido en [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) en la línea 1156
