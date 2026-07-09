---
id: retrieve_password_title
title: Filtro - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filtro: retrieve_password_title

Filtra o assunto do email de redefinição de palavra-passe.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $title | `string` | Título de email predefinido. |
| $user_login | `string` | O nome de utilizador para o utilizador. |
| $user_data | `\WP_User` | Objeto WP_User. |

### Desde

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Fonte

Definido em [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) na linha 135


## Retorna
Título de email predefinido.
