---
id: retrieve_password_title
title: Filtro - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filtro: retrieve_password_title

Filtra o assunto do e‑mail de redefinição de senha.

## Parameters

| Nome | Tipo | Descrição |
|------|------|-------------|
| $title | `string` | Título padrão do e‑mail. |
| $user_login | `string` | O nome de usuário do usuário. |
| $user_data | `\WP_User` | Objeto WP_User. |

### Desde

- 2.8.0
- 4.4.0: Adicionados os parâmetros <code>$user_login</code> e <code>$user_data</code>.

### Fonte

Definido em [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) na linha 135

## Retorna

Título padrão do e‑mail.
