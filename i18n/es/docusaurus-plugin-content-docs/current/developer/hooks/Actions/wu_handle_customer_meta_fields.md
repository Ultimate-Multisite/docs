---
id: wu_handle_customer_meta_fields
title: Acción - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

Permitir a los desarrolladores de plugins guardar metadatos de diferentes maneras si lo necesitan.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $meta_repository | `array` | La lista de campos meta, estructurada como clave => valor. |
| $customer | `\Customer` | El objeto de cliente de Ultimate Multisite. |
| $checkout | `\Checkout` | La clase de checkout. |

### Desde

- 2.0.0

### Fuente

Definido en [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) at line 1211
