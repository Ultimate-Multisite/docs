---
id: retrieve_password_message
title: Filtro - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filtro: retrieve_password_message

Filtra o corpo da mensaxe do correo de restablecemento de contrasinal.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $message | `string` | Mensaxe de correo predeterminada. |
| $key | `string` | A clave de activación. |
| $user_login | `string` | O nome de usuario para o usuario. |
| $user_data | `\WP_User` | Obxecto WP_User. |

### Desde {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Fonte {#source}

Definido en [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) na liña 149


## Devolve {#returns}
Mensaxe de correo predeterminada.
