---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filtro: retrieve_password_message

## Parameters

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $message | `string` | Mensaje de correo predeterminado. |
| $key | `string` | La clave de activación. |
| $user_login | `string` | El nombre de usuario del usuario. |
| $user_data | `\WP_User` | WP_User objeto. |

### Since

- 2.8.0
- 4.1.0: Añadido <code>$user_login</code> y <code>$user_data</code> parámetros.

### Source

Defined in [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) at line 149


## Returns
Mensaje de correo predeterminado.
