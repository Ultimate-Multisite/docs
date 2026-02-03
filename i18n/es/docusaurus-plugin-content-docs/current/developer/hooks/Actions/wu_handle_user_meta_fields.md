---
id: wu_handle_user_meta_fields
title: Acción - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Permitir a los desarrolladores de plugins guardar metadatos de usuario de diferentes maneras si lo necesitan.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $meta_repository | `array` | La lista de campos meta, estructurada como clave => valor. |
| $user | `\WP_User` | El objeto de usuario de WordPress. |
| $customer | `\Customer` | El objeto de cliente de Ultimate Multisite. |
| $checkout | `\Checkout` | La clase de checkout. |

### Desde

- 2.0.4

### Fuente

Definido en [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) en la línea 1244
