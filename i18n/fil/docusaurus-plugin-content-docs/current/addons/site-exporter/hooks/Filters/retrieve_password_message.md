---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Nagba-filter ito ng katawan ng mensahe sa email para sa pag-reset ng password.

## Mga Parameter {#parameters}

| Name | Type | Paglalarawan |
|------|------|-------------|
| $message | `string` | Ang default na mensahe sa email. |
| $key | `string` | Ang activation key. |
| $user_login | `string` | Ang username ng user. |
| $user_data | `\WP_User` | WP_User object. |

### Mula pa noong {#since}

- 2.8.0
- 4.1.0: Nagdagdag ng <code>$user_login</code> at <code>$user_data</code> parameters.
### Pinagmulan {#source}

Tinukoy sa [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) sa linya 149


## Ibinabalik {#returns}
Ang default na mensahe sa email.
