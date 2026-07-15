---
id: retrieve_password_title
title: Lim - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

Lim lub npe ntsiab lus ntawm email rov teeb password.

## Cov Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | Lub npe email qub. |
| $user_login | `string` | Lub username rau tus neeg siv. |
| $user_data | `\WP_User` | WP_User object. |

### Txij li {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Source {#source}

Tau txhais nyob hauv [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) ntawm kab 135


## Returns {#returns}
Lub npe email qub.
