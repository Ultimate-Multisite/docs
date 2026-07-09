---
id: retrieve_password_message
title: Salain - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Sinasala ang katawan ng mensahe ng email sa pag-reset ng password.

## Mga Parameter

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $message | `string` | Paunang mensahe ng email. |
| $key | `string` | Ang activation key. |
| $user_login | `string` | Ang username para sa user. |
| $user_data | `\WP_User` | WP_User object. |

### Mula Noong

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Pinagmulan

Tinukoy sa [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) sa linya 149


## Ibinabalik
Paunang mensahe ng email.
