---
id: retrieve_password_message
title: Filtro - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filtro: retrieve_password_message

Filtra o corpo da mensagem do e-mail de redefinição de palavra-passe.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $message | `string` | Mensagem de e-mail padrão. |
| $key | `string` | A chave de ativação. |
| $user_login | `string` | O nome de utilizador para o utilizador. |
| $user_data | `\WP_User` | Objeto WP_User. |

### Desde

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Fonte

Definido em [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) na linha 149


## Devolve
Mensagem de e-mail padrão.
