---
id: retrieve_password_message
title: ''
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filtro: retrieve_password_message

Filtra o corpo da mensagem do e‑mail de redefinição de senha.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Mensagem padrão do e‑mail. |
| $key | `string` | A chave de ativação. |
| $user_login | `string` | O nome de usuário do usuário. |
| $user_data | `\WP_User` | Objeto WP_User. |

### Since

- 2.8.0
- 4.1.0: Adicionado <code>$user_login</code> e <code>$user_data</code> parâmetros.

### Source

Definido em [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) na linha 149

## Returns

Mensagem padrão do e‑mail.
