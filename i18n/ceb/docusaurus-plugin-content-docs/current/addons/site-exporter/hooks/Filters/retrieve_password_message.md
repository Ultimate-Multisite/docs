---
id: retrieve_password_message
title: Salaan - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Gi-filter ang lawas sa mensahe sa password reset mail.

## Mga Parameter

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $message | `string` | Default nga mensahe sa mail. |
| $key | `string` | Ang activation key. |
| $user_login | `string` | Ang username alang sa user. |
| $user_data | `\WP_User` | WP_User object. |

### Sukad

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Tinubdan

Gihubit sa [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) sa linya 149


## Mga Balik
Default nga mensahe sa mail.
