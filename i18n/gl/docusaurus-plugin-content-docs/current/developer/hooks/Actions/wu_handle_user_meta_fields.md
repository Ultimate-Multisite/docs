---
id: wu_handle_user_meta_fields
title: Acción - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Acción: wu_handle_user_meta_fields

Permite aos desenvolvedores de plugins gardar metadatos de usuario de distintas maneiras se o precisan.

## Parámetros

| Nome | Tipo | Descrición |
|------|------|-------------|
| $meta_repository | `array` | A lista de campos meta, estruturada como clave =&gt; valor. |
| $user | `\WP_User` | O obxecto de usuario de WordPress. |
| $customer | `\Customer` | O obxecto de cliente de Ultimate Multisite. |
| $checkout | `\Checkout` | A clase de checkout. |

### Desde

- 2.0.4
### Fonte

Definido en [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) na liña 1244
