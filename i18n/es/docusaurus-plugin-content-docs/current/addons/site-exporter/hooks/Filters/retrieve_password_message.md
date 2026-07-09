---
id: retrieve_password_message
title: Filtro - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filtro: retrieve_password_message

Filtra el cuerpo del mensaje del correo de restablecimiento de contraseña.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $message | `string` | Default mail message. |
| $key | `string` | The activation key. |
| $user_login | `string` | The username for the user. |
| $user_data | `\WP_User` | WP_User object. |

### Desde

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Fuente

Definido en [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) en la línea 149


## Devuelve
Mensaje de correo predeterminado.
